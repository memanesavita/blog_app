
const bcypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookies=require('cookie-parser')
const knex=require('../model/conection')

const singup=(req,res)=>{
    const hash=bcypt.hashSync(req.body.password,10)
    const data={
        name:req.body.name,
        password:hash,
        Email_id:req.body.Email_id

    }
    knex("data_meraki").insert(data).then(()=>{
        res.send({message:"data post successfully"})
        console.log("data inserted")
    }).catch((err)=>{
        console.log("data does not inserted")
    })
}

const login=(req,res)=>{
    knex.from('data_meraki').select("*").where('Email_id',"=",req.body.Email_id)
    .then((details)=>{
        if(details.length===0){
            res.send({massage:'user not exist'})
        }else{
            var compare=bcypt.compareSync(req.body. password,details[0].password)
            if(compare===false){
                res.send({message:'invalid Email/password'})
            }else{
                const token=jwt.sign({id:details[0].id},"SavitaMemane",{expiresIn:"90h"})
                console.log(token)
                res.cookie('user',token)
                res.send({massage:'login Succesfully!',
                data:details,
                token:token})
            }
        }
    })
}
const logout=(req,res)=>{
    res.clearCookie('token')
    res.send({massage:"you have logged successfully"})
}



module.exports={singup,login,logout}




  