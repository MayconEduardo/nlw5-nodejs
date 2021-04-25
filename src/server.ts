import express from 'express'
import './database'

const app = express()

app.get('/', (request, response) => {
    response.send('Hello World')
})

app.listen(3333, () => console.log('Server is running on http://localhost:3333'))