import { Sequelize } from '@sequelize/core'

export async function up ({ context: queryInterface }) {
  return Promise.all(
    [
      await queryInterface.addColumn('places', 'latitude', { type: Sequelize.FLOAT }),
      await queryInterface.addColumn('places', 'longitude', { type: Sequelize.FLOAT })
    ])
  }