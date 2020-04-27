'use strict'

const Kubilay = require("../../Models/Kubilay")

const Comment = use('App/Models/Comment')
const Database = use('Database')
class CommentController {
    get = async({ request, response, params }) => {
        const { id } = params
        let { type } = params
        if (type == '1')
            type = 'posts'
        else if (type == '2')
            type = 'videos'
        const comments = await Database
            .select('body')
            .from('comments')
            .where('commentable_id', id)
            .andWhere('commentable_type', type)
        const kubilays = await Database
            .select('body')
            .from('kubilays')
            .where('commentable_id', id)
            .andWhere('commentable_type', type)
        let items = " "
        for (let i = 0; i < comments.length; i++)
            items = items + comments[i].body + " " + kubilays[i].body + "\n "
        return items
    }
}

module.exports = CommentController