const express = require('express')

// API router module

const router = express.Router()

router.get('/query', (req, res) => {
    res.redirect(`/api/${req.query.date}`)
})

router.get('/', (req, res) => {
    const date = Date.now()
    res.json({ unix: date.valueOf(), utc: new Date(date).toUTCString() })
})

router.get('/:date_value', (req, res) => {
    try {
        const value = req.params.date_value
        let date;
        if (value){
            // this will return a number if date_value is a valid one.
            const checkType = value * 1
            date = isNaN(checkType) ? new Date(value) : new Date(checkType)
        } else {
            date = new Date()
        }

        if (date == "Invalid Date"){
            res.json({ error: "Invalid Date" })
        } else {
            const unix = date.valueOf()
            const utc = date.toUTCString()
            res.json({ unix, utc })
        }
    } catch {
        res.send('Internal Server Error')
    }
})

module.exports = router
