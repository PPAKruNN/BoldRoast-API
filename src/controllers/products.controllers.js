import { ObjectId } from "mongodb";
import db from "../database/database.connection.js";

export async function getProducts(req,res){
    try{
        const products = await db.collection("products").find().toArray();

        res.status(200).send(products);
    }
    catch(err){
        res.status(500).send(err.message);
    }

}

export async function getProductsById(req,res){

    try{
        const { id } = req.params;
        if(!id) return res.status(422).send("Id nao especificado!");

        const products = await db.collection("products").findOne({_id: new ObjectId(id)});

        if(!products) return res.status(404).send("Nenhum produto encontrado");

        res.status(200).send(products);
    }
    catch(err){
        res.status(500).send(err.message);
    }
    
}
