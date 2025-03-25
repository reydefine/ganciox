import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
    return queryInterface.createTable('instances', {
      domain: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      blocked: {
        type: Sequelize.BOOLEAN
      },
      data: {
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


export function down ({ context: queryInterface }) {
    return queryInterface.dropTable('instances')
}
