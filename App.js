const express = require('express');
const app=express();
app.set('trust proxy', true);
const PORT = 3000;
app.get('/api/whoami',(req,res)=>{
    const ipvalue = req.ip;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    res.json({ipaddress:ipvalue,
        language : language,
        software : software
    });
});

app.listen(PORT,()=>{
    console.log("welcome to request parser");
});

module.exports = app;
