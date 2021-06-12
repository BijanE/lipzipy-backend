'use strict'

const User_Book = require('../models/user_book.model')

// ADD A BOOK TO A User
exports.addbook = function (req, res) {

  const newuserbook = new User_Book(req.body)

  User_Book.addbook(newuserbook, function (err, User_Book) {
    if (err) {
      res.send(err)
    }
    res.json({ error: false, message: 'Book added to user successfully!', data: User_Book })
  })
}

// DELETE A BOOK FROM A USER
exports.delete = function (req, res) {
  User_Book.delete(req.params.id, function (err, User_Book) {
    if (err) {
      res.send(err)
    }
    res.json({ error: false, message: 'Users book is successfully deleted' })
  })
}

// DELETE ALL BOOKS FROM A USER
exports.deleteAll = function (req, res) {
  User_Book.deleteAll(req.params.id, function (err, User_Book) {
    if (err) {
      res.send(err)
    }
    res.json({ error: false, message: 'Users all books successfully deleted' })
  })
}

// FİND ALL BOOKS OF A USER
exports.findAll = function (req, res) {
  User_Book.findAll(req.params.id, function (err, User_Book) {
    if (err) {
      res.send(err)
    } 
    res.json(User_Book)
  })
}