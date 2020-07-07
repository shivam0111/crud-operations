const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://admin:admin@cluster0-no5qi.mongodb.net/mongoDB?retryWrites=true&w=majority
`,{useUnifiedTopology: true,
    useNewUrlParser: true,},(err)=>{
    if(!err){console.log("MongoDB Connection Succeded")}
    else{console.log("Error in DB connection :"+err)}
});

require('./employee.model');
