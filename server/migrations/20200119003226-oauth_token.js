import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('oauth_tokens', {
    accessToken: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    accessTokenExpiresAt: Sequelize.DATE,
    refreshToken: Sequelize.STRING,
    refreshTokenExpiresAt: Sequelize.DATE,
    scope: Sequelize.STRING,
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
    clientId: {
      type: Sequelize.STRING,
      references: {
        table: 'oauth_clients',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        table: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  })
}
