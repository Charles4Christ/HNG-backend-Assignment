const express = require('express')

const routes = express.Router()
const { solveProblems } = require('../controllers/exercise')

routes.post('/exercise', solveProblems)

module.exports = routes