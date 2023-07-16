import db from "../database/database.connection";


export async function login(req, res) {

    
}

export async function register(req, res) {

    const data = req.body;

    const emailSearch = await db.collection("users").findOne({email: data.email })
    if(emailSearch) res.sendStatus(409);
    


    
}