const express = require ("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    return res.json({
        success: true,
        message: "Testing deploy railway."
    })
});

app.get('/api/railway-tests', (req, res)=> {
    return res.json({
        success: true,
        message: "This is a test."
    })
});



app.listen(PORT, () => console.log("Server is running:" + PORT));