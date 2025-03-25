import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('fed_users', {
    ap_id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    object: {
      type: Sequelize.JSON
    },
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

export function down ( { context: queryInterface }) {
  return queryInterface.dropTable('fed_users')
}
