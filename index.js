//  import JSON SERVER ⬇️ .

const jsonserver = require('json-server');

// To create SERVER ⬇️.

const server = jsonserver.create();

//create router===== last step.

const router = jsonserver.router("db.json")


// Create middle WARE : Act as a parser ⬇️.


const middlware =jsonserver.defaults();

  
// create port (variable should be in captital)⬇️.

const PORT = process.env.PORT || 7000;

// middle ware use in server ⬇️.

server.use(middlware);

// use router 

server.use(router)
// To run server 

server.listen(PORT, ()=>{
    console.log("Media Player server started at port: " + PORT);
});


