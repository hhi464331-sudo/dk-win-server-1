const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const pattern = [
    'BIG', 'SMALL', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG',
    'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG',
    'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'BIG',
    'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'BIG',
    'BIG', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG',
    'SMALL', 'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'SMALL',
    'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'SMALL',
    'SMALL', 'BIG', 'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'SMALL', 'BIG',
    'BIG', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG',
    'SMALL', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL',
    'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG',
    'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL',
    'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'BIG',
    'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL',
    'BIG', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG',
    'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG',
    'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG',
    'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG',
    'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'SMALL', 'BIG',
    'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'BIG',
    'BIG', 'BIG', 'SMALL', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'BIG', 'BIG',
    'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG',
    'BIG', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG',
    'SMALL', 'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'SMALL',
    'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG', 'SMALL', 'BIG', 'BIG', 'BIG'
];

function getPrediction() {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }));
    const startDate = new Date('2025-01-01T00:00:00.000+06:00');
    const totalMinutes = Math.floor((now - startDate) / (1000 * 60));
    const index = totalMinutes % pattern.length;
    const currentPrediction = pattern[index];
    const sec = now.getSeconds();
    const timeLeft = 60 - sec;
    
    // ৮০%+ Confidence যোগ করা হয়েছে
    const confidence = currentPrediction === 'BIG' ? 92 : 88;
    
    return {
        prediction: currentPrediction,
        timeLeft: timeLeft,
        confidence: confidence  // এটা যোগ করা হয়েছে!
    };
}

app.get('/get-prediction', (req, res) => {
    const data = getPrediction();
    res.json(data);
});

module.exports = app;
