const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const UsuarioRoutes = require('./routes/usuario.routes')
const cors = require('cors')

const app = express()

app.set('port', process.env.PORT || 4000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abc123',
    database: 'mydb'
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('API funcionando')
})

app.use('/api', UsuarioRoutes)

app.listen(app.get('port'), ()=>{
    console.log('servidor corriendo', app.get('port'))
})