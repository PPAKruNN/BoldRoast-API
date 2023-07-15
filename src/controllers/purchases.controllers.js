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
