import db from "../database/database.connection.js";
import { ObjectId } from "mongodb";

export async function newPurchase (req,res){
    try{
        const pedido = req.body;
        pedido.userId = req.locals.userId;
        await db.collection("purchases").insertOne(pedido);
        res.sendStatus(201);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

export async function listUserPurchases(req,res){
    const userId = req.locals.userId;
    try{
        const userPurchases = await db.collection("purchases").find({ userId }).toArray();
        res.status(200).send(userPurchases);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

export async function purchaseDetails(req,res){
    const { id } = req.params

    try{
        const purchase = await db.collection("purchases").findOne({ _id: new ObjectId(id) });
        if (!purchase) return res.status(404).send("Pedido não encontrado");
        res.status(200).send(purchase);
    }

    catch(err){
        res.status(500).send(err.message);
    }
}