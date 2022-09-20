import express from "express";

const app = express();

const PORT = 3000;

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



app.listen(PORT, () => console.log("Server is running:" + PORT));