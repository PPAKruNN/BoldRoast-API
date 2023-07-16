import db from "../database/database.connection.js";

export async function getCart(req, res) {

    try {
        const cartSearch = await db.collection("carts").findMany({userId: res.locals.userId});
        if(!cartSearch) res.sendStatus(404);

        res.send(cartSearch);

    } catch (error) {
        res.status(500).send(error);        
    }
}

export async function updateCart(req, res) {

    try {
        const cartUpdate = await db.collection("carts").updateOne({userId: req.locals.userId}, {$set: {products: req.body.products}});
        if(cartUpdate.matchedCount === 0) return res.sendStatus(404);

        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);        
    }
}

export async function deleteCart(req, res) {

    try {
        const cartDelete = await db.collection("carts").deleteOne({userId: req.locals.userId});
        if(cartDelete.deletedCount === 0) return res.sendStatus(404);

        await db.collection("carts").insertOne({userId: req.locals.userId, products: []}); // Add an empty cart.

        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);        
    }
}