const router = require('express').Router();
const Message = require('../models/Message')

// Add message
router.post('/', async (req, res) => {
  const newMessage = new Message(req.body)

  try {
    const savedMessage = await newMessage.save()
    res.status(200).send(savedMessage)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Get message
router.get('/:conversationId', async (req, res) => {
  try {
    const message = await Message.find({ conversationId: req.params.conversationId })
    res.status(200).send(message)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router;