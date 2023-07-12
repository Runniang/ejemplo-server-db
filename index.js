import express from "express"
import cors from "cors"
import { sequelize } from "./database/database.js"
import { Producto } from "./models/Producto.js"


const app = express()
const port = 3001
app.use(cors())

//function debe ser asincrona
async function conexionBD(){
    try{
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (error){
        console.log("Problema de conexion", error)
    }
}

app.get("/listar-productos/:codigo", async function(req,res){
    const productos = await Producto.findAll({where:{
        codigo:req.params.codigo
    }})
    res.send(productos)
})

app.get("/eliminar-producto/:codigo", async function(req,res){
    await Producto.destroy({
        where:{
            codigo: req.params.codigo
        }
    })
    res.send("Producto eliminado")
})

app.get("/guardar-producto/:codigo/:nombre/:precio/:cantidad", async function(req,res){
    let cod = req.params.codigo;
    let nom = req.params.nombre;
    let prec = req.params.precio;
    let cant = req.params.cantidad;

    await Producto.create({
        codigo: cod,
        nombre: nom,
        precio: prec,
        cantidad: cant
    })

    res.send("Producto creado satisfactoriamente")
})

app.listen(port,function(){
    console.log("El servidor se encuentra activo en el puerto " + port)
    conexionBD()
})
