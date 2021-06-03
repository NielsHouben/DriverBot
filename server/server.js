const express = require('express')
let app = express()


let port = process.env.PORT || 3000
const server = app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = server