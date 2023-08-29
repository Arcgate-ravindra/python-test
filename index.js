const express = require('express');

const app = express();
app.use(express.json());

app.post('/test', (req,res) => {
    console.log(res);
    return res.send("successs");
})

app.listen(3000, () => {
    console.log('Server is running on 3000 port')
})