'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Kubilay extends Model {
    static get traits() {
        return ['@provider:Morphable']
    }

    comments() {
        return this.morphMany(['App/Models/Comment', 'id', 'commentable_id', 'commentable_type'], ['App/Models/Kubilay', 'body'])
    }
}

module.exports = Kubilay