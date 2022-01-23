const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const mongoose = require("mongoose");
const userModel = require("./models/user.js");
const prodModel=require("./models/userprod.js");

mongoose
    .connect("mongodb://127.0.0.1:27017/login")
    .then(() => console.log("mongo db connected"));

//add product table
    mongoose
    .connect("mongodb://127.0.0.1:27017/product")
    .then(() => console.log("mongo db connected"));

//reg-add, fetch, delete, add product, login, display in textbox
//registration
app.post("/api/registier", (req, res) => {
    const newUser = req.body;
    userModel.create(newUser);
    return res.json({ data: "sucessfully" });
})
//add product
app.post("/api/Addproduct", (req, res) => {
    const newUser = req.body;
    prodModel.create(newUser);
    return res.json({ data: "product added" });
})
//fetch
app.get("/api/fetch", async (req, res) => {
    const userlist = await userModel.find({}, { username: true });
    if (userlist.length == 0) {
        return res.send({ data: "no user found" });
    }
    return res.send({ data: userlist });
});
//Delete
app.delete("/api/delete:username", async (req, res) => {
    const username = req.params.username;
    const deleteuser = await userModel.findOneAndDelete({ username });
    console.log(deleteuser);
    if (deleteuser) {
        return res.send("user deleted");
    }
    else {
        return res.send("user not found");
    }
})
//login
app.post("/api/login", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const LoginUser = await userModel.find({ name : username, password : password });
    if (LoginUser) {
        return res.json({ data : LoginUser });
    } else {
        return res.json({ data : "Username or password Wrong !!" });
    }
})
app.listen(port, () => console.log('server running on port 4000'));
