const express = require('express');

const app = express();
const PORT =  3000;
app.use('/',(req,res)=>{
    res.send('hello from home page');
});
app.use('/about',(req,res)=>{
    res.send('hello!! from about page');
});
app.use('/contact',(req,res)=>{
    res.send(' Heyy! from contact page');
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
