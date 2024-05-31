const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.SERVER_HOST || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${port}`);
})