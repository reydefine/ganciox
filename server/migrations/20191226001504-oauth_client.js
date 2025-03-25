import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.createTable('oauth_clients', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    name: Sequelize.STRING,
    client_secret: Sequelize.STRING,
    scopes: Sequelize.STRING,
    redirectUris: Sequelize.STRING,
    website: Sequelize.STRING,
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  })
}
