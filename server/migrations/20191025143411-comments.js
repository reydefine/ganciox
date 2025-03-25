import { Sequelize, DataTypes } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('comments',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      activitypub_id: {
        type: Sequelize.STRING(18),
        index: true,
        unique: true
      },
      eventId: {
        type: Sequelize.INTEGER,
        references: {
          table: 'events',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      data: Sequelize.JSON,
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

  export function down (queryInterface, Sequelize) {
    return queryInterface.dropTable('comments')
  }
