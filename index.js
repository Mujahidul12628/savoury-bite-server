const express = require('express');
const app = express();
const port = process.env.PORT || 5555;

app.get('/', (req, res) => {
    res.send('Savoury Bite Server');
});

app.listen(port, () => {
    console.log(`Savoury Bite Server listening on port ${port}`);
});