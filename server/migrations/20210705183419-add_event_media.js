import { Sequelize } from '@sequelize/core'

export async function up ({ context: queryInterface }) {
  return Promise.all(
    [
      await queryInterface.addColumn('events', 'media', { type: Sequelize.JSON }),
      await queryInterface.sequelize.query("UPDATE events set media=JSON('[{ \"url\": \"' || image_path || '\" }]')")
    ])
  }