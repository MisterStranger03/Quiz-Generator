let model_running = null;

function getTextChunks(text, chunkSize, overlap) {
    const words = text.split(' ');
    const chunks = [];
    let i = 0;
    while (i < words.length) {
        const chunk = words.slice(i, i + chunkSize).join(' ');
        chunks.push(chunk);
        i += chunkSize - overlap;
    }
    return chunks;
}

const initializemodel_running = async () => {
    if (model_running) {
        return;
    }

    try {
        const { pipeline } = await import('@xenova/transformers');
        
        const modelName = 'Xenova/flan-t5-small';
        // console.log(`Initializing instruction-tuned model: ${modelName}`);

        model_running = await pipeline('text2text-generation', modelName);
        
        console.log("Model loaded successfully.");

    } catch (error) {
        console.error("Fatal error during model initialization:", error);
        throw error;
    }
};

const generateQuestions = async (context) => {
    await initializemodel_running();
    if (!model_running) throw new Error("Question model_running not initialized.");
    const chunks = getTextChunks(context, 75, 15); 

    
    const generationPromises = chunks.map(chunk => {
        const prompt = `Given the context, generate a question. Context: "${chunk}"`;
        return model_running(prompt, {
            max_length: 64,
            num_beams: 10,
            early_stopping: true,
        });
    });

    const outputs = await Promise.all(generationPromises);

    const uniqueQuestions = new Set();
    outputs.forEach(output => {
        const question = output[0].generated_text.trim();
        if (question.endsWith('?')) {
            uniqueQuestions.add(question);
        }
    });

    const finalQuestions = Array.from(uniqueQuestions).slice(0, 10); 
    console.log("Successfully generated questions:", finalQuestions);
    return finalQuestions;
};

module.exports = {
    generateQuestions
};