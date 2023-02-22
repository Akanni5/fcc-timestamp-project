const express = require('express')
const path = require('path')
const router = express.Router()

const options = {
    root: path.join(__dirname, "views"),
    dotfiles: 'deny'
}

router.get('/file/:name', function (req, res, next) {
    const fileName = req.params.name
    res.sendFile(fileName, options, (err) => {
        if (err) {
            next(err)
        } else {
            console.log(`sent file: ${fileName}`)
        }
    })
})

router.get('/', function (req, res) {
    res.sendFile('index.html', options)
})


module.exports = router