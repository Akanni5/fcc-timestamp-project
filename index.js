const express = require('express')
const path = require('path')
const app = express()
const apiRouter = require('./routes/api')
const appRouter = require('./app')
const cors = require("cors");

app.use(cors({ optionSuccessStatus: 200 }));
app.use(express.urlencoded({extended: false}))
app.use('/css', express.static(path.join(__dirname, "public/css")))
app.use('/script', express.static(path.join(__dirname, "public/script")))

app.use('/api', apiRouter)
app.use('/', appRouter)

const port = 3000
app.listen(port)
