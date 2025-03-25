import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('filters', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cohortId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        table: 'cohorts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    tags: {
      type: Sequelize.JSON,
    },
    places: {
      type: Sequelize.JSON,
    }
  })
}
