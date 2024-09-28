const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.6c3q0.mongodb.net/user_app');

const user= mongoose.model('users',{
    uname: String,
    pass: String,
    name: String,
    hash: String
});
const shubham=new user({
    uname:"shubham",
    pass:"test",
    name:"Shubham Patel pote",
    hash:"10f6d3ce9d854d1ebfc1ca7d1981fafc122a9970093382f2c5c72cfa6ab47572"
});
shubham.save().then(()=>{
    console.log("Saved");
});