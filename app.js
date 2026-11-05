const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Health-check API
app.get('/api/health', (req, res) => {
    res.json({
        status: 'success',
        message: 'Node.js application is running!',
        service: 'DevOps Demo App'
    });
});

// Start server only when this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;