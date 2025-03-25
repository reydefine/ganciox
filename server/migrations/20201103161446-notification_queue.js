export function up ({ context: queryInterface }) {
  return queryInterface.bulkInsert('notifications', [
    
    // send AP message
    { action: 'Create', type: 'ap', filters: '{ "is_visible": true }', createdAt: new Date(), updatedAt: new Date() },
    { action: 'Update', type: 'ap', filters: '{ "is_visible": true }', createdAt: new Date(), updatedAt: new Date() },
    { action: 'Delete', type: 'ap', filters: '{ "is_visible": true }', createdAt: new Date(), updatedAt: new Date() },
    
    // send anon event to admin
    { action: 'Create', type: 'admin_email', filters: '{ "is_visible": false }', createdAt: new Date(), updatedAt: new Date() }
  ]).catch(e => { })
}
