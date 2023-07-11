const app = require('./app');
const server = app.listen(9090, () =>{
    console.log(`Server listening on config:`, server.address());
});