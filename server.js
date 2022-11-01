require('dotenv').config()
const express = require('express');
const app = express()
//  let data = {
//     "slackUsername": "Ogonnayacn", 
//     "backend": true, 
//     "age": 26, 
//     "bio": "I am Ogonnaya charles Nnamdi from Nigeria and i am backend developer"
//  }
app.use(express.json());
 app.get('/', (req, res) => {
    res.status(200).json({ "slackUsername": "Ogonnayacn", 
    "backend": true, 
    "age": 26, 
    "bio": "I am Ogonnaya charles Nnamdi from Nigeria and i am backend developer" })
 })

 const port = process.env.PORT || 3000

 const start = async () => {
    try {
        app.listen(port, () =>
          console.log(`Server is listening on port ${port}...`)
        );
      } catch (error) {
        console.log(error);
      }
 }

 start()