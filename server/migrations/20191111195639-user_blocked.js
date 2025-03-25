import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.addColumn('fed_users', 'blocked', { type: Sequelize.BOOLEAN })
}

export function  down ( { context: queryInterface }) {
  return queryInterface.removeColumn('fed_users', 'blocked', { type: Sequelize.BOOLEAN })
}
