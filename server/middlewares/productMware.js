

function addId (req,res,next){
    req.body.id = `${Date.now()}`;
    next();
}

function completeId (req,res,next){
    req.body.id = req.params.idProduct;
    next();
}


module.exports = {addId,completeId}