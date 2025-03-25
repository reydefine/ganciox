export function up ({ context: queryInterface }) {
  return queryInterface.renameTable('fed_users', 'ap_users')
}
