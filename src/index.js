const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled.')
//     } else {
//         next()
//     }
// })

// Maintenence Mode - All requests are disabled.
// app.use((req, res, next) => {
//     res.status(503).send('server is down :c just wait, friend')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port', port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'eatashoe', { expiresIn : '0 seconds'})
//     console.log(token)

//     const data = jwt.verify(token, 'eatashoe')
//     console.log(data)
// }

// myFunction()