'use strict'
const Video = use('App/Models/Video')
class VideoController {
    get = async() => {
        const videos = await Video.all()
        return videos.toJSON()
    }

    create = async({ request, response }) => {
        const videos = await Video.create({
            title: request.input('title'),
            url: request.input('url')
        })
        return videos.toJSON()

    }
    comment = async({ request, response, params }) => {
        const { body } = request.all()
        const { id } = params
        const video = await Video.find(id)
        const comment = await video.comments().create({ body })
        const kubilay = await video.kubilay().create({ body: request.input('kubilay') })
        return comment.toJSON().body + "\n" + kubilay.body

    }
}

module.exports = VideoController