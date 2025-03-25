import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('event_tags', {
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    eventId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        table: 'events',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    tagTag: {
      primaryKey: true,
      type: Sequelize.STRING,
      references: {
        table: 'tags',
        key: 'tag'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  })
}

export function down ({ context: queryInterface }) {
  return queryInterface.dropTable('event_tags')
}
