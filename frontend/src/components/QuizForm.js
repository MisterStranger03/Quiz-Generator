import React, { useState } from 'react';
import { generateQuizFromText } from '../services/quizApi';

function QuizForm({ onQuizGenerated }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleUseExample = () => {
        setTitle('Indian Hockey History');
        setContent("Hockey is considered the national sport of our country and has been extremely popular in India. The game has a rich history and tradition in India, with the country boasting numerous Olympic gold medals and producing legendary players like Dhyan Chand, who mesmerized audiences with his dribbling skills. Hockey is considered the national sport of our country due to its popularity and fabulous performance in the past. India won 6 gold medals in hockey at the Olympics. In India, people loved hockey even when cricket was not popular. There are different types of Hockey: Field Hockey, Ice Hockey, Sledge Hockey, and Roller Hockey. Field Hockey is the most popular outdoor game played in a stadium, on plain grass or synthetic material. The game requires a team of 11 players, including a goalkeeper. The players need a lot of practice and hard work under the guidance of a professional.");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (content.length < 150) {
            setError("Content must be at least 150 characters long.");
            setLoading(false);
            return;
        }

        try {
            const quizData = await generateQuizFromText(title, content);
            onQuizGenerated(quizData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="quiz-form-container">
            <h2>Create a New Quiz</h2>
            <p>Enter a title and the content to generate a quiz from.</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Quiz Title (e.g., The History of Hockey)" 
                    required 
                />
                <textarea 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    rows="15" 
                    placeholder="Paste your content here... (at least 150 characters)" 
                    required
                >    
                </textarea>

                <div className="form-actions">
                    <button type="button" onClick={handleUseExample} className="secondary-btn">Use Example Text</button>
                    <button type="submit" disabled={loading} className="primary-btn">
                        {loading ? 'Generating Questions... This may take a moment' : 'Generate Quiz'}
                    </button>
                </div>
                
                {
                error && 
                <p className="error-message">
                    {error}
                    </p>
                    }
            </form>
        </div>
    );
}

export default QuizForm;