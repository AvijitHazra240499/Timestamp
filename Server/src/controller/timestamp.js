const timestamp=async(req,res)=>{
    try{
       
        const { timestamp1, timestamp2 } = req.body;
        const date1 = new Date(timestamp1);
        const date2 = new Date(timestamp2);
        
        const differenceInSeconds = Math.abs((date2 - date1) / 1000);
        
        res.json({ differenceInSeconds });

    }catch(err){
        console.log(err)
        return res.status(500).json({status:false, error: err.message });
    }
}
module.exports={ timestamp}
