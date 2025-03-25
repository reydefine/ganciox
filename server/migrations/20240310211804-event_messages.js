import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('messages',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false
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
      author: {
        type: Sequelize.ENUM(['AUTHOR', 'ADMIN', 'ANON', 'REGISTERED'])
      },
      is_author_visible: Sequelize.BOOLEAN,
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
