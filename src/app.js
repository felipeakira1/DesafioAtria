const express = require('express');
const app = express();

app.use(express.json());

const userRouter = require('./api/routes/userRouter');
app.use('/users', userRouter);

const PORT = process.env.SERVER_HOST || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
})