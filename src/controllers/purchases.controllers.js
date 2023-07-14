export async function newPurchase (req,res){
    const {userId, notes, products, adressInfo, paymentInfo} = req.body;
    const { authorization } = req.headers;
	const token = authorization?.replace("Bearer ", "");


}