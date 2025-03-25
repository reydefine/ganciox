import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  return queryInterface.changeColumn('comments', 'activitypub_id', {
    type: Sequelize.STRING,
    index: true,
    unique: true
  })
}

export function down ({ context: queryInterface }) {
  return queryInterface.changeColumn('comments', 'activitypub_id', {
    type: Sequelize.STRING(18),
    index: true,
    unique: true
  })
}
