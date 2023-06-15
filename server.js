const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}!`)
})