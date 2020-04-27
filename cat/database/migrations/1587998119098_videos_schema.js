'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VideosSchema extends Schema {
    up() {
        this.create('videos', (table) => {
            table.increments()
            table.string('title').notNullable().unique()
            table.string('url').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('videos')
    }
}

module.exports = VideosSchema