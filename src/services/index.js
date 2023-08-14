const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 5000;

const url = 'mongodb+srv://rajvora1234567890:Raj$2912@bookstore.1rwo8cb.mongodb.net/?retryWrites=true&w=majority'; 

app.use((req, res, next) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            req.dbConnected = false;
        } else {
            console.log('Connected to MongoDB');
            req.dbConnected = true;
            client.close();
        }
        next();
    });
});

// Route 
app.get('/', (req, res) => {
    if (req.dbConnected) {
        res.send('Connected to MongoDB');
    } else {
        res.send('Not connected to MongoDB');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
