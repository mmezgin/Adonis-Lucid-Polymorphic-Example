'use strict'

const PostController = require('../app/Controllers/Http/PostController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.get('/posts', 'PostController.get')
    Route.post('/posts', 'PostController.create')
    Route.post('/posts/:id/comment', 'PostController.comment')
})

Route.group(() => {
    Route.get('/videos', 'VideoController.get')
    Route.post('/videos', 'VideoController.create')
    Route.post('/videos/:id/comment', 'VideoController.comment')
})

Route.group(() => {
    Route.get('/comments/:id/:type', 'CommentController.get')
})