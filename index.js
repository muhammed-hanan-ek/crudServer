// import json server
const jsonServer=require('json-server')
// create server for crud
const crudServer=jsonServer.create()
// create middleware
const middleware=jsonServer.defaults()
// set Route
const route=jsonServer.router('db.json')
// to available app in port
const PORT = 3000 || process.env.PORT

crudServer.use(middleware)
crudServer.use(route)
crudServer.listen(PORT,()=>{
    console.log(`Crud server started at the port ${PORT} and waiting for client request`);
    
})