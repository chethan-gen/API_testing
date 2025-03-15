
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is your basic server.js setup!');
});
app.get('/ping',(req,res)=>{
    res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



