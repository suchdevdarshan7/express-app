const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./db/connect.js')
const userRoutes = require('./routes/users.routes.js')

app.use('/users', userRoutes);


app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`)
    connectDB();
})