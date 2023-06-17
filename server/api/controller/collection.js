const { Collection, Filter, Event, Tag, Place } = require('../models/models')

const log = require('../../log')
const { DateTime } = require('luxon')
const { col: Col } = require('../../helpers')
const { Op, Sequelize } = require('sequelize')

const collectionController = {

  async getAll (req, res) {
    const withFilters = req.query.withFilters
    let collections
    if (withFilters) {
      collections = await Collection.findAll({ include: [ Filter ] })
    } else {
      collections = await Collection.findAll()
    }

    return res.json(collections)
  },

  // return events from collection
  async getEvents (req, res) {
    const name = req.params.name

    const collection = await Collection.findOne({ where: { name } })
    if (!collection) {
      return res.sendStatus(404)
    }
    const filters = await Filter.findAll({ where: { collectionId: collection.id } })

    if (!filters.length) {
      return res.json([])
    }
    const start = DateTime.local().toUnixInteger()
    const where = {
      // do not include parent recurrent event
      recurrent: null,

      // confirmed event only
      is_visible: true,

      // [Op.or]: {
        start_datetime: { [Op.gte]: start },
        // end_datetime: { [Op.gte]: start }
      // }
    }

    const replacements = []
    const ors = []
    filters.forEach(f => {
      if (f.tags && f.tags.length) {
        const tags = Sequelize.fn('EXISTS', Sequelize.literal(`SELECT 1 FROM event_tags WHERE ${Col('event_tags.eventId')}=event.id AND ${Col('tagTag')} in (?)`))
        replacements.push(f.tags)
        if (f.places && f.places.length) {
          ors.push({ [Op.and]: [ { placeId: f.places.map(p => p.id) },tags] })
        } else {
          ors.push(tags)
        }
      } else if (f.places && f.places.length) {
        ors.push({ placeId: f.places.map(p => p.id) })
      }
    })

    where[Op.and] = { [Op.or]: ors }

    const events = await Event.findAll({
      where,
      attributes: {
        exclude: ['likes', 'boost', 'userId', 'is_visible', 'createdAt', 'updatedAt', 'description', 'resources']
      },
      order: ['start_datetime'],
      include: [
        {
          model: Tag,
          // order: [Sequelize.literal('(SELECT COUNT("tagTag") FROM event_tags WHERE tagTag = tag) DESC')],
          attributes: ['tag'],
          through: { attributes: [] }
        },
        { model: Place, required: true, attributes: ['id', 'name', 'address'] }
      ],
      // limit: max,
      replacements
    }).catch(e => {
      log.error('[EVENT]', e)
      return []
    })

    const ret  = events.map(e => {
      e = e.get()
      e.tags = e.tags ? e.tags.map(t => t && t.tag) : []
      return e
    })

    return res.json(ret)

  },

  async add (req, res) {
    const collectionDetail = {
      name: req.body.name,
      isActor: true,
      isTop: true
    }

    // TODO: validation
    log.info(`Create collection: ${req.body.name}`)
    try {
      const collection = await Collection.create(collectionDetail)
      res.json(collection)
    } catch (e) {
      log.error(`Create collection failed ${e}`)
      res.status(400).send(e)
    }
  },

  async remove (req, res) {
    const collection_id = req.params.id
    log.info('Remove collection', collection_id)
    try {
      const collection = await Collection.findByPk(collection_id)
      await collection.destroy()
      res.sendStatus(200)
    } catch (e) {
      log.error('Remove collection failed:' + String(e))
      res.sendStatus(404)
    }
  },

  async getFilters (req, res) {
    const collectionId = req.params.collection_id
    const filters = await Filter.findAll({ where: { collectionId } })
    return res.json(filters)
  },

  async addFilter (req, res) {
    const { collectionId, tags, places } = req.body

    try {
      filter = await Filter.create({ collectionId, tags, places })
      return res.json(filter)
    } catch (e) {
      log.error(String(e))
      return res.sendStatus(400)
    }
  },

  async removeFilter (req, res) {
    const filter_id = req.params.id
    log.info(`Remove filter ${filter_id}`)
    try {
      const filter = await Filter.findByPk(filter_id)
      if (!filter) {
        return res.sendStatus(404)
      }
      await filter.destroy()
      res.sendStatus(200)
    } catch (e) {
      log.error('Remove filter failed:', e)
      res.sendStatus(404)
    }
  },



}

module.exports = collectionController
