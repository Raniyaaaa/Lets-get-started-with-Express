const http = require('http');
const express = require('express');
const bodyParser=require('body-parser')
const path = require('path')
const app = express();
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const contactRoutes = require("./routes/contactUs")
const succesRoutes = require("./routes/success")
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(succesRoutes)


app.use((req,res,next)=>{
 res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);
