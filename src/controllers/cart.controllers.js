import db from "../database/database.connection.js";

export async function getCart(req, res) {

    try {
        const cartSearch = await db.collection("carts").findMany({userId: res.locals.userId});
        if(cartSearch.error) res.sendStatus(404);

        res.send(cartSearch);

    } catch (error) {
        res.status(500).send(error);        
    }
}

export async function updateCart(req, res) {

    try {
        const cartUpdate = await db.collection("carts").updateOne({userId: req.locals.userId}, {$set: {products: req.body.products}});
        if(cartUpdate.error) return res.sendStatus(404);

        res.sendStatus(200);

    } catch (error) {
        res.status(500).send(error);        
    }
}