const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const config = require('config')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const errorMiddleware = require('./middleware/error.middleware')

const app = express()
const PORT = config.get('port') || 5000 || process.env.PORT

const publicPath = path.join(__dirname, 'client/build');

app.use(express.static(publicPath))
app.use(express.json({extended: true}))
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: config.get('clientUrl')
}))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/burgers', require('./routes/burger.routes'))
app.use('/api/category', require('./routes/category.routes'))
app.use(errorMiddleware)

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

async function start(){
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`)
        })
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()