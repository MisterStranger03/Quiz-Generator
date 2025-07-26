function QuizDisplay({ quiz, onReset }) {
    if (!quiz || !quiz.questions) return null;

    return (
        <div className="quiz-display-container">
            <h2>{quiz.title}</h2>
            
            <div className="context-box">
                <h3>Quiz based on the following text:</h3>
                <p>{quiz.context}</p>
            </div>

            <h3>Generated Questions:</h3>
            <ol className="questions-list">
                {quiz.questions.map((q, index) => (
                    <li key={index} className="question-item">{q}</li>
                ))}
            </ol>

            <button onClick={onReset} 
            className="primary-btn" 
            style={{marginTop: '2rem'}}>
                Create Another Quiz
            </button>
        </div>
    );
}

export default QuizDisplay;