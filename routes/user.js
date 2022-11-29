const express = require('express')
const router = express.Router()

const User = require('../models/user')
const { passwordValidate } = require('../validation')

router.get("/:id", (req, res) => {
  if (!req.params.id) res.send("Provide ID")

  const user = User.findOne({ where: { id: req.params.id } })

  if (!user) res.send("No user found")
  res.send(user)
})

router.post("/signup", (req, res) => {
  res.send("Signup API")

  const { email, password } = req.body
  if (!email || !password) res.send("Missing required fields")

  const validPassword = passwordValidate(password)
  if (!validPassword) res.send("Password must match the following: 1 lower character, 1 upper character, 1 digit, 1 special and minimum 8 length")

  const data = {
    email,
    password,
  }

  const user = User.create(data)
  res.send(user)
})

module.exports = router
