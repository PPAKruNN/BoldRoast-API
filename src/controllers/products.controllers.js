import db from "../database/database.connection.js";

export async function getProducts(req,res){
    try{
        const products = await db.collection("products").find().toArray();

        if(!products) return res.status(404).send("Nenhum produto encontrado");

        res.status(200).send(products);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}