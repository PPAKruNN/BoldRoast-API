import db from "../database/database.connection";


export async function getCart(req, res) {

    try {
        const cartSearch = await db.collection("carts").findMany({userId: res.locals.userId});

        res.send(cartSearch);

    } catch (error) {
        res.status(500).send(error);        
    }
}