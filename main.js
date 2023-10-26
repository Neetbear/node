const express = require("express");
const app = express();
const router = require("./routes")
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api",router)

const server = app.listen(4000, () => {
    console.log('server start 4000')
})

process.on('SIGINT', () => {
    console.log('Received SIGINT. Gracefully shutting down...');
    server.close(() => {
        console.log('Server is gracefully shutting down.');
        process.exit(0);
    });
});