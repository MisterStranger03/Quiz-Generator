import axios from 'axios';

const API_URL = 'http://localhost:5001/api/quizzes'; 

export const generateQuizFromText = async (title, content) => {
    try {
        const response = await axios.post(`${API_URL}/generate`, {
            title,
            content
        });
        return response.data;
    } 
    catch (error) {
        const message = error.response?.data?.message || 'Some error occured.';
        throw new Error(message);
    }
};