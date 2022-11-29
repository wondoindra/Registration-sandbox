const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get("/:id", (req, res) => {
  if (!req.params.id) res.send("Provide ID")

  const user = User.findOne({ where: { id: req.params.id } })

  if (!user) res.send("No user found")
  res.send(user)
})

router.post("/signup", (req, res) => {
  res.send("Signup API")

  const data = {
    email: req.body.email,
    password: req.body.password,
  }

  const user = User.create(data)
  res.send(user)
})

module.exports = router
