const { generateQuestions } = require('../services/nlpService');
const Quiz = require('../models/quizModel');

exports.generateQuiz = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json(
            { message: 'Title and content are required.' });
    }
    
    if (content.length < 150) {
        return res.status(400).json(
            { message: 'Content must be at least 150 characters long.' });
    }

    try {
        const questionsList = await generateQuestions(content);
        const quizData = {
            title,
            context: content,
            questions: questionsList 
        };

        const newQuiz = new Quiz(quizData);
        const savedQuiz = await newQuiz.save();

        console.log('Quiz saved to database with ID:', savedQuiz._id);
        res.status(201).json(savedQuiz);

    } 
    catch (error) {
        console.error('An Error occured', error);
        res.status(500).json(
            { 
                message: error.message || 'An error occurred while processing your request.' 
            });
    }
};