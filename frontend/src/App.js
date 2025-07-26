import React, { useState } from 'react';
import QuizForm from './components/QuizForm';
import QuizDisplay from './components/QuizDisplay';
import './App.css';

function App() {
    const [quizData, setQuizData] = useState(null);

    return (
        <div className="App">
            <header className="App-header">
                <h1>AI Quiz Generator</h1>
                <p>Powered by Hugging Face Transformers</p>
            </header>
            <main className="App-main">
                {!quizData ? (
                    <QuizForm onQuizGenerated={setQuizData} />
                ) : (
                    <QuizDisplay 
                    quiz={quizData} 
                    onReset={() => setQuizData(null)} />
                )}
            </main>
        </div>
    );
}

export default App;