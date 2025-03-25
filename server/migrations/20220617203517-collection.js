import { Sequelize } from '@sequelize/core'

export async function up ({ context: queryInterface }) {
  return Promise.all(
    [
      await queryInterface.renameTable('cohorts', 'collections'),
      await queryInterface.renameColumn('filters', 'cohortId', 'collectionId'),
      await queryInterface.changeColumn('filters', 'collectionId', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          table: 'collections',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }),
    ])
  }
