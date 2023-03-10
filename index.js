const express  = require("express")
const app = express()

app.listen(3000)

app.get("/",(req, res)=>{
    console.log("Hola Mundo Server")
    res.status(200).send("<script>console.log('Hola Mundo Cliente')</script><h1>Hola Mundo</h1>")
})
app.get("/contacto",(req, res)=>{
    console.log("Hola Mundo Contacto")
    res.send("<script>console.log('Hola Mundo contacto Cliente')</script><h1>Hola Contacto</h1>")
})
app.get("/sumar/:num1&:num2&:num3",(req, res)=>{
    let suma= parseInt(req.params.num1)+parseInt(req.params.num2)+parseInt(req.params.num3)
    res.send(suma.toString())
})
app.all("*",(req, res)=>{
    res.status(404).send("Página no Encontrada")    
})