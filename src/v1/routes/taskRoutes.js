const router = require('express').Router();

 router.get('/tasks', () => {
    return res.json(
        {
            success: true,
            message: "Tasks retrieved successfully"
        }
    );
 });

module.exports = router;
