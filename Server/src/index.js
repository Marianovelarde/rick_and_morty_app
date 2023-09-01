const express = require('express')
const router = require("./routes/index.js")
const morgan = require("morgan")
const {conn} = require("./DB_connection.js")


const server = express()

const PORT = 3001

conn.sync({ force: true }).then(() => {
   server.listen(PORT, () => {
     console.log(`Server on  ${PORT}`);
   });
 })
 .catch(error => {
   console.log(error)
 });

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

 server.use(morgan("dev"))

 
 server.use("/rickandmorty", router)
 

 

//    ------------------HTTP----------------------- 
//  const http = require("http")
// const port = 3001;
// const getCharById = require("./controllers/getCharById.js")

// http.createServer((req, res) => {
//    res.setHeader('Access-Control-Allow-Origin', '*')
//    const {URL} = req
//    console.log(`Recibi una request de: ${URL}`)

//    if(URL.includes("/rickandmory/character")){
//       const id = Number(URL.split("/").pop())
//       getCharById(res,id)
//    } else {
//       res.writeHead(404, {"Content-Type": "application/json"})
//       return res.end(JSON.stringify({error: "Route not found"}))
//    }

// }).listen(port, "localhost", () => {
//    console.log("server on in " + port)
// })