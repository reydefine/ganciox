import { Sequelize } from '@sequelize/core'

export async function up ({ context: queryInterface }) {
  return Promise.all(
    [
      await queryInterface.addColumn('ap_users', 'trusted', { type: Sequelize.BOOLEAN }),
      await queryInterface.addColumn('instances', 'applicationActor', { type: Sequelize.STRING }),
      await queryInterface.addColumn('ap_users', 'following', { type: Sequelize.BOOLEAN }),
      await queryInterface.addColumn('filters', 'actors', { type: Sequelize.JSON }),
      await queryInterface.addColumn('events', 'ap_id', { type: Sequelize.STRING, index: true }),
      await queryInterface.addColumn('events', 'apUserApId', {
        type: Sequelize.STRING,
        references: {
          table: 'ap_users',
          key: 'ap_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
    ])
  }
