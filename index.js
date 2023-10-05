import express from "express";
import path from "path";
const app = express();

const users = [];

app.use(express.static(path.join(path.resolve(), "public")));
//using middlewares
//isko use krke hum form me se value extract kr payenge
app.use(
  express.urlencoded({
    extended: true,
  })
);

// setting up view engine
app.set("view engine", "ejs");
app.get("/success",(req,res)=>{
  res.render("success");
})
app.get("/", (req, res) => {
  res.render("index");

  // res.render("index");

  //  const pathLocation = path.resolve();
  //    console.log(path.join(pathLocation,"/index.html"))
  // res.sendFile(path.join(pathLocation,"/index.html"));

  // suppose karo hume backend se name show krna hai front end pe render krke
  // res.render()

  // 400 status code error ke sath message bhi send kr skte hai ese
  // res.status(400).send("Meri marzi");

  // res.send(500);
  // res.statusCode=404;

  // ye humne api bnayi hai khud ki
  // res.json({
  //     success:true,
  //     products:[],
  // })
});
app.get("/users",(req,res)=>{
  res.json({
    users,
  })
});
app.post("/contact", (req, res) => {
  // req.body se hume form ki values mil gyi specifically bole toh name aur email
  // console.log(req.body);
  users.push({ username: req.body.name, email: req.body.email });
  res.redirect("/success")
;});

app.listen(5000, () => {
  console.log("Server is working");
});
