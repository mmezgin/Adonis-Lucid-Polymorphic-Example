'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KubilaysSchema extends Schema {
    up() {
        this.create('kubilays', (table) => {
            table.increments()
            table.string('body')
            table.integer('commentable_id')
            table.string('commentable_type')
            table.timestamps()
        })
    }

    down() {
        this.drop('kubilays')
    }
}

module.exports = KubilaysSchema