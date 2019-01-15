const express = require('express');
const app = express();
const port = 3000;

app.get('/api/test', (req: any, res: any) => res.json({text: 'is tested'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
