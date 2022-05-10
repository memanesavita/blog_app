const knex=require('../model/conection')
const post_tables=(req,res)=>{
    const data={
        user_id:req.usrdata.id,
        post_id:req.body.post_id,
        title:req.body.title,
        text:req.body.text
    }
    knex("post_tables").insert(data).then(()=>{
        res.send({message:"data post successfully"})
        console.log("data inserted")

    }).catch((err)=>{
        // console.log("data does not inserted")
        res.send({message:"data does not inserted",message:err})
    })
}
// post_tables()
console.log(post_tables)