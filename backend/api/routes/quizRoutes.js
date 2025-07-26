const express = require('express');
const router = express.Router();
const quizController = require('../controllers/QuizController');

//POST
router.post('/generate', quizController.generateQuiz);

module.exports = router;