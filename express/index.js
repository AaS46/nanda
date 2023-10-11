const express=require('express')
const bodyParser=require('body-parser')

const client=require('./connections')

const app=express()

const port=1515
app.use(bodyParser.json())
app.listen(port,()=>{
    console.log('server berjalan pada port',port)
})

client.connect(err=>{
    if (err) {
        console.log ('eror', err.message)
    }else {
        console.log ('connected')
    }
})

app.get('/',(req,res)=>{
    console.log('sekarang anda berada dihalaman root')
    res.send({message:'sekarang anda berada dihalaman root'})
})

app.get('/getbuku', (req,res)=>{
    client.query('select * from buku', (err,result)=>{
        if(err){
            console.log('terjadi eror', err.message)
        }else{
            res.send(result.rows)
        }
    })
})