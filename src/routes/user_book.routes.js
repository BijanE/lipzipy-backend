const express = require('express')
const router = express.Router()
const user_bookController = require('../controllers/user_book.controller')

// ADD A BOOK TO A USER
router.post('/', user_bookController.addbook)

// DELETE A BOOK FROM A USER
router.delete('/:id', user_bookController.delete)

// DELETE ALL BOOKS FROM A USER
router.delete('/:id', user_bookController.deleteAll)

// SELECT ALL BOOKS OF A USER
router.get('/:id', user_bookController.findAll)

module.exports = router
