import Joi from "joi";
import db from "../database/database.connection.js";

/**
 * Middleware que obriga o usuario a enviar um TOKEN pelo HEADER Authorization.
 * Caso o token nao exista, a requisicao retorna 401.
 * 
 * Caso o token exista, ele estara sendo armazenado na variavel: req.locals.token
 * O userId sera armazenado em: req.locals.userId
 */
export default async function validateToken(req, res, next) {

    try {
        const { authorization } = req.headers;
        if(!authorization) return res.status(401).send("Token de autenticacao nao enviado!");
        
        const currToken = authorization.replace("Bearer", "").trim();
        const validation = Joi.string().uuid().required().validate(currToken);
        if(validation.error) return res.status(401).send(error);

        const sessionSearch = await db.collection("Sessions").findOne({token: currToken});
        if(!sessionSearch) return res.send(401);

        req.locals.token = sessionSearch.token;
        req.locals.userId = sessionSearch.userId; 

        next();
    } 
    catch (error) 
    {
        res.status(500).send(error);
    }
}

