import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("ejemplodb","postgres","postgres",{
    host: "localhost",
    dialect: "postgres"
})