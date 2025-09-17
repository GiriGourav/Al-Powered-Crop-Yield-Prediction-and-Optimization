const User = require("../Model/UserModule");
const jwt = require('jsonwebtoken')
const cookie = require('cookie')
const bcrypt = require('bcrypt');
const { connection } = require("mongoose");

const signup = async (req, res) => {
    const {  } = req.body;
    //console.log(pass,"in signup")
    try {
        const existing = await User.findOne({  })
        if (existing) {
            return res.status(400).send({ message: "User already exist" })
        }
        const user = new User({  });
        await user.save()
        const token = jwt.sign({  }, process.env.JWT_SECRET, { expiresIn: "12h" });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 1000, // in milliseconds
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production"
        });
        return res.status(201).send({message:"User Created Successfully", user:{}});

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error signup" })
    }
}

const login = async (req, res) => {
    const { } = req.body;
    console.log(pass)
    try {
        const user = await User.findOne({  });
        if (!user) {
            res.status(404).send({ message: "no user exist" });
            return
        }
        //console.log(user)
        const isMatch = await bcrypt.compare(pass.toString(), user.password);
        console.log(isMatch)
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid credentials" });

        }
        const token = jwt.sign({  }, process.env.JWT_SECRET, { expiresIn: "12h" });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 1000, // in milliseconds
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production"
        });
        return res.status(200).send({message:"User  Found", user:{}});

        

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error login" })
    }
}

const verify = async (req, res) => {
    const token = req.cookies.token; // cookie sent automatically by browser
    if (!token) return res.status(401).send({ valid: false });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user=await User.findOne({});
        if(!user) return res.status(401).send({valid:false})
        
        res.status(200).send({   }); // send user info if needed
    } catch (err) {
        res.status(401).send({ valid: false, message: "Invalid token" });
    }
};

const logout = async (req, res) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0), // sets the cookie expiration in the past
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production"
        });
        res.status(200).send({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).send({ messgae: "server error" })
    }
}

module.exports = { signup, login, verify, logout }