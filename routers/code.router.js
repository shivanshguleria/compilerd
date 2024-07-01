const express = require('express')
const router = express.Router()
const codeController = require('../controllers/code.controller')
const ques = require('../tests/data/testJson')

router.post('/execute', [], codeController.execute)
router.use(express.json())
// GET new question from testJson.js
router.get('/ques', (req, res) => {
    const randomQues = Math.floor(Math.random() * ques.ques.length)
    delete ques.ques[randomQues].total
    return res.json(ques.ques[randomQues])
})

router.post('/ans', [], codeController.runCode)
module.exports = router
