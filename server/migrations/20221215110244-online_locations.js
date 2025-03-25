import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.addColumn('events', 'online_locations', { type: Sequelize.JSON })
}