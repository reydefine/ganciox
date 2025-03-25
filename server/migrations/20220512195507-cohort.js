import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('cohorts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      index: true,
      allowNull: false
    },
    isActor: {
      type: Sequelize.BOOLEAN
    },
    isTop: {
      type: Sequelize.BOOLEAN
    }
  })
}