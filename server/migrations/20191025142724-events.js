import { Sequelize } from '@sequelize/core'

export function up ({ context: queryInterface }) {
  console.error('sono qui dentro!!')
  return queryInterface.createTable('events', {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: Sequelize.STRING,
    slug: Sequelize.STRING,
    description: Sequelize.TEXT,
    multidate: Sequelize.BOOLEAN,
    start_datetime: {
      type: Sequelize.INTEGER,
      index: true
    },
    end_datetime: {
      type: Sequelize.INTEGER,
      index: true
    },
    image_path: Sequelize.STRING,
    is_visible: Sequelize.BOOLEAN,
    recurrent: Sequelize.JSON,
    // parent: Sequelize.INTEGER
    likes: { type: Sequelize.JSON, defaultValue: [] },
    boost: { type: Sequelize.JSON, defaultValue: [] },
    placeId: {
      type: Sequelize.INTEGER,
      references: {
        table: 'places',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        table: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
}

export function down ({ context: queryInterface }) {
  return queryInterface.dropTable('events')
}
