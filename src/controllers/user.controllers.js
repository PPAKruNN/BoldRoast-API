import { v4 } from "uuid";
import db from "../database/database.connection.js";
import bcrypt from "bcrypt";

export async function login(req, res) {

    try {
        const data = req.body;

        const emailSearch = await db.collection("users").findOne({email: data.email })
        if(!emailSearch) return res.sendStatus(404);
        
        const isUser = bcrypt.compareSync(data.password, emailSearch.password);
        if(!isUser) return res.sendStatus(401); 

        const token = v4(); 
        await db.collection("sessions").updateOne({userId: emailSearch._id}, {$set: {token}});

        return res.send(token);
    } catch (error) {
        console.log(`Error on POST /login: ${error}`)
        res.status(500).send(error);    
    }
}

export async function register(req, res) {

    try {
        const data = req.body;

        const emailSearch = await db.collection("users").findOne({email: data.email })
        if(emailSearch) return res.sendStatus(409);
        
        const hashedPass = bcrypt.hashSync(data.password, 10);

        const userInsert = await db.collection("users").insertOne({
            name: data.completeName, 
            email: data.email, 
            password: hashedPass
        });

        await db.collection("sessions").insertOne({
            userId: userInsert.insertedId,
            token: null
        })    

        await db.collection("carts").insertOne({
            userId: userInsert.insertedId,
            products: []
        })    
        
        return res.sendStatus(200);

    } catch(error) {
        console.log(`Error on POST /register: ${error}`)
        return res.status(500).send(error);
    }
}

export async function getUser(req, res) {

    try {
        const userSearch = await db.collection("users").findOne({_id: res.locals.userId});

        return res.send(userSearch);

    } catch(error) {
        return res.status(500).send(error);
    }
}