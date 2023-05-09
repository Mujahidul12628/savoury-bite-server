
const express = require('express');
const app = express();

const cors = require("cors");

const port = process.env.PORT || 5555;

app.use(cors());

const allChefData = require("./chefData.json");

app.get('/', (req, res) => {
    res.send('Savoury Bite Server');
});

app.get('/chefData', (req, res) => {
    res.send(allChefData);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
