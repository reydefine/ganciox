import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.changeColumn('events', 'slug', {
    type: Sequelize.STRING,
    index: true,
    unique: true
  })
}