const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(9000, () => console.log(`Started server at http://localhost:8080!`));

