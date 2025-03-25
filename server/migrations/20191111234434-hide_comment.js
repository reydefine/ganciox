import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
    return queryInterface.addColumn('comments', 'hidden', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })
  }

export function  down ({ context: queryInterface }) {
    return queryInterface.removeColumn('comments', 'hidden')
}
