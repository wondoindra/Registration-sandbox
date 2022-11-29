const express = require('express')
const router = express.Router()

const User = require('../models/user')
const { passwordValidate } = require('../validation')

router.get("/:id", async (req, res) => {
  if (!req.params.id) return res.status(400).send("Provide ID")

  const user = await User.findOne({ where: { id: req.params.id } })

  if (!user) return res.status(400).send("No user found")
  res.send(user)
})

router.post("/signup", async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).send('Missing required fields')

  const existingUser = await User.findOne({ where: { email } })
  if (existingUser) return res.status(400).send('Email used has been registered')

  const validPassword = passwordValidate(password)
  if (!validPassword) return res.status(400).send("Password must match the following: 1 lower character, 1 upper character, 1 digit, 1 special and minimum 8 length")

  const data = {
    email,
    password,
  }

  const user = await User.create(data)
  res.send(user)
})

module.exports = router
