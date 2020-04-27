'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    static get traits() {
        return ['@provider:Morphable']
    }

    comments() {
        return this.morphMany('App/Models/Comment', 'id', 'commentable_id', 'commentable_type')
    }
    kubilay() {
        return this.morphMany('App/Models/Kubilay', 'id', 'commentable_id', 'commentable_type')
    }
}

module.exports = Post