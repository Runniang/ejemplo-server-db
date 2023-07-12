import { DataTypes } from "sequelize";
import { sequelize} from "../database/database.js";

export const Producto = sequelize.define(
    "Producto",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: {
            type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.INTEGER
        },
        cantidad: {
            type: DataTypes.INTEGER
        }
    },{
        freezeTableName: true
        //para que la tabla no se crea de forma plural, nombre se mantenga congelado
    })