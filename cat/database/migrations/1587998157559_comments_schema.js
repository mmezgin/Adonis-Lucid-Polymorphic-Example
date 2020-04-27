'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentsSchema extends Schema {
    up() {
        this.create('comments', (table) => {
            table.increments()
            table.text('body')
            table.integer('commentable_id')
            table.string('commentable_type')
            table.timestamps()
        })
    }

    down() {
        this.drop('comments')
    }
}

module.exports = CommentsSchema