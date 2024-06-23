const validater = (schema) => async(req,res,next) =>{
    try {
        const result = await schema.parseAsync(req.body)
        console.log(req.body);
        req.body = result;
        next();
    } catch (err) {
        const errMsg = err.errors[0].message;
        res.json({msg: errMsg});
    }
}

module.exports={
    validater,
}
