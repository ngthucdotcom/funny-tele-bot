require('dotenv').config();
const app = require('./app');
const server = app.listen(process.env.PORT || 9090, () =>{
    console.log(`Server listening on config:`, server.address());
});