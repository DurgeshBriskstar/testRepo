const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());
const defaultRouter = require('./routes/index');

app.use('/api', defaultRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});