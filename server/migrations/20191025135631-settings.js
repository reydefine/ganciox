import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('settings', {
    key: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      index: true
    },
    value: Sequelize.JSON,
    is_secret: Sequelize.BOOLEAN,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
}


export function down ({ context: queryInterface })  {
  return queryInterface.dropTable('settings')
}
