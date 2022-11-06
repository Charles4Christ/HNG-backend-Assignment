require('dotenv').config({ path: 'routes/.env' })
const express = require('express');
const app = express()

const connectDB = require('./db/connectDB')

const routes = require('./routes/routes')
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

 app.use('/', routes)


 const port = process.env.PORT || 3000

 const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
          console.log(`Server is listening on port ${port}...`)
        );
      } catch (error) {
        console.log(error);
      }
 }

 start()