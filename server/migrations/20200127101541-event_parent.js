import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  // return Promise.resolve(1)
  return queryInterface.addColumn('events', 'parentId', {
    type: Sequelize.INTEGER,
    references: {
      table: 'events',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
}
