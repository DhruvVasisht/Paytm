const express = require('express');
const router = express.Router();
const zod = require('zod');
const jwt = require("jsonwebtoken");
const {User} = require('../models/db');
const JWT_SECRET = require('../config/config');

const signedUpSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
});
router.post("/signup", async(req,res)=>{
    const body = req.body;
    const {success} = signedUpSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message: "Email Already Taken / Incorrect Inputs"
        })
    }

    const existingUser = await User.findOne({
        username: body.username
    })

    if(existingUser){
        return res.json({
            message: "Email Already Taken / Incorrect Inputs"
        })
    }

    const user = await User.create({
        username: body.username,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName
    });
    
    const userId = user._id;

    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        message: "User Created Successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})


router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
});

module.exports = router;