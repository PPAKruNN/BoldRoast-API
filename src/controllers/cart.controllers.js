import { ObjectId } from "mongodb";
import db from "../database/database.connection.js";

export async function getCart(req, res) {

    try {
        const cartSearch = await db.collection("carts").findOne({userId: res.locals.userId});
        if(!cartSearch) res.sendStatus(404);

        res.send(cartSearch.products);

    } catch (error) {
        console.log(`Error on cart get: ${error}`)
        res.status(500).send(error);        
    }
}

export async function updateCart(req, res) {

    try {
        const cartUpdate = await db.collection("carts").updateOne({userId: new ObjectId(res.locals.userId)}, {$set: {products: req.body.products}});
        if(cartUpdate.matchedCount === 0) return res.sendStatus(404);

        res.sendStatus(200);
    } catch (error) {
        console.log(`Error on cart post: ${error}`)
        res.status(500).send(error);        
    }
}

export async function deleteCart(req, res) {

    try {
        const cartDelete = await db.collection("carts").deleteOne({userId: res.locals.userId});
        if(cartDelete.deletedCount === 0) return res.sendStatus(404);

        await db.collection("carts").insertOne({userId: res.locals.userId, products: []}); // Add an empty cart.

        res.sendStatus(200);
    } catch (error) {
        console.log(`Error on cart delete: ${error}`)
        res.status(500).send(error);        
    }
}