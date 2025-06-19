const express = require('express');
const app=express();
app.set('trust proxy', true);
const PORT = 3000;
app.get('/api/whoami',(req,res)=>{
    const ipaddress =  req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    res.json({ipaddress: ipaddress,
    language: language,
    software: software
    });
});

app.listen(PORT,()=>{
    console.log("welcome to request parser");
});

module.exports = app;
