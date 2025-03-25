import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.addColumn('events', 'ap_object', { type: Sequelize.JSON })
}