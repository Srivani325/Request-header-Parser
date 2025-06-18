const express = require('express');
const app=express();
app.set('trust proxy', true);
const PORT = 3000;
app.get('/api/whoami',(req,res)=>{
    const ipaddress =  req.headers['x-forwarded-for']?.split(',')[0] || req.ip;
    // const language = req.headers['accept-language'];
    // const software = req.headers['user-agent'];
    res.json({ipaddress
        // language,
        // software
    });
});

app.listen(PORT,()=>{
    console.log("welcome to request parser");
});

module.exports = app;
