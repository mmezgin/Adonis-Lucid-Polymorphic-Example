'use strict'
const Post = use('App/Models/Post')
class PostController {
    get = async() => {
        const posts = await Post.all()
        return posts.toJSON()
    }

    create = async({ request, response }) => {
        const posts = await Post.create({
            title: request.input('title'),
            body: request.input('body')
        })
        return posts.toJSON()

    }

    comment = async({ request, response, params }) => {
        const { body } = request.all()
        const { id } = params
        const post = await Post.find(id)
        const comment = await post.comments().create({ body })
        const kubilay = await post.kubilay().create({ body: request.input('kubilay') })
        return comment.toJSON().body + "\n" + kubilay.body
    }

}

module.exports = PostController