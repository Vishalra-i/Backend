require('dotenv').config()
const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Vishal____rai')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login First</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})