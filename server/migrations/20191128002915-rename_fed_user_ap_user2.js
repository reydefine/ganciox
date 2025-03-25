export function up ({ context: queryInterface }) {
  return queryInterface.renameColumn('resources', 'fedUserApId', 'apUserApId')
}

