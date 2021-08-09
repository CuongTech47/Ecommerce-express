const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const db = require('./config/db/database')
const app = express();
const route = require("./routes/wed");
const session = require("express-session")  
//connect db
db.connect()
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, "public")));
//teaplate engine
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout:'main',
    
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(session({
  secret:"verygoodsecrect",
  resave:false,
  saveUninitialized:true
}))
//route
route(app);

app.listen(port, () => {
  console.log(`Server dang dc chay o port ${port}`);
});
