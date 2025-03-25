import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('event_notifications', {
    status: {
      type: Sequelize.ENUM(['new', 'sent', 'error', 'sending']),
      defaultValue: 'new',
      index: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    eventId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        table: 'events',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    notificationId: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      references: {
        table: 'notifications',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  })
}

export function down ({ context: queryInterface }) {
  return queryInterface.dropTable('event_notifications')
}
