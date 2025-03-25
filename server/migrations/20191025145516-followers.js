import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('user_followers', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        table: 'users',
        key: 'id'
      },
      primaryKey: true,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    fedUserApId: {
      primaryKey: true,
      type: Sequelize.STRING,
      references: {
        table: 'fed_users',
        key: 'ap_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  })
}

export function down ({ context:  queryInterface }) {
  return queryInterface.dropTable('user_followers')
}
