const express =require("express");
const app=express();
const path=require("path");
app.set("view engine","e.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));


// remoe after create

app.get("/try",function(req,res){
  res.render("adil.ejs");
})

app.get("/",function(req,res){
    res.render("home.ejs");
})


 app.get("/show",function(req,res){
    res.render("create.ejs")
})
// app.post("/create" , async (req,res)=>{
//     let {name,title,image}=req.body 
//    let u= await userModel.create({
//       name,
//       title,
//       image
//     });
//     res.send(u)
//   })
  // app.get("/read" , async (req,res)=>{
  //   let user=await userModel.find();
  //   res.render('doc.ejs',{user});
  // })
  
app.get("/user",function(req,res){
    res.render("profile.ejs");
})

app.get("/chat",function(req,res){
    res.render("chat.ejs");
})

app.get("/view",function(req,res){
    res.render("chatuser.ejs");
})



app.get("/appointment",function(req,res){
  res.render("appointment.ejs");
})
app.listen(3000);