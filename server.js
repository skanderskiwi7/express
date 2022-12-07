const express = require('express')
const date = require('./middleware/data')
const app = express()


const port = 5000

app.get('/get',(req,res)=>{
    res.send('you did well,, sa77it')
})

app.use('/static',express.static(__dirname + '/public'))


app.get('/homepage',(req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/contactpage',(req,res)=>{
    res.sendFile(__dirname + '/public/contact.html')
})

app.get('/',date,(req,res)=>{
    res.send({date})
})

app.listen(port,err=>{
    err? console.log(err):console.log(`tw wallit connecté sa77it,,, fel port li 3malneh ${port}`)
})
