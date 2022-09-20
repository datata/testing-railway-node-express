import express from "express";

const app = express();

app.get('/', (req, res)=> {
    return res.json({
        success: true,
        messaga: "Testing deploy railway."
    })
});

app.get('/api/railway-tests', (req, res)=> {
    return res.json({
        success: true,
        messaga: "This is a test."
    })
});

app.listen(3000, () => console.log("Server is running"));