const express = require('express');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
const cors = require('cors');
app.use(cors());

// Add Content-Security-Policy header
app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "img-src 'self' data:; default-src 'self';"
    );
    next();
});

// Example route
app.get('/api', (req, res) => {
    res.send({ message: 'Hello from backend!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
