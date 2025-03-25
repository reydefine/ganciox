import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.changeColumn('announcements', 'announcement', {
    type: Sequelize.TEXT
  })
}
