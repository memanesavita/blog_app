const express=require("express")
const { auth } = require("../controller/athontication")
const { post_tables } = require("../controller/post_tables")
const { singup, login, logout } = require("../controller/user")

const router=express.Router()
router.post('/signup',singup)
router.get('/login',login)
router. delete('/logout',logout)

router.post('/post',post_tables)




module.exports=router