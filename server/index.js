const express = require('express');
const app = express();
const port = 3000;

app.get('/api/test', (req, res) => res.json({text: 'test endpoint'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
