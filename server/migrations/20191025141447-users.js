import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('users',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: { msg: 'error.nick_taken' },
        index: true,
        allowNull: false
      },
      display_name: Sequelize.STRING,
      settings: Sequelize.JSON,
      email: {
        type: Sequelize.STRING,
        unique: { msg: 'error.email_taken' },
        index: true,
        allowNull: false
      },
      description: Sequelize.TEXT,
      password: Sequelize.STRING,
      recover_code: Sequelize.STRING,
      is_admin: Sequelize.BOOLEAN,
      is_active: Sequelize.BOOLEAN,
      rsa: Sequelize.JSON,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }
  )
}

export function down ({ context: queryInterface }) {
  return queryInterface.dropTable('users')
}
