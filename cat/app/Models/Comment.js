'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
    static get traits() {
        return ['@provider:Morphable']
    }

    commentable() {
        return this.morphTo([
            'App/Models/Post', 'App/Models/Video'
        ], 'id', 'id', 'commentable_id', 'commentable_type')
    }
}

module.exports = Comment