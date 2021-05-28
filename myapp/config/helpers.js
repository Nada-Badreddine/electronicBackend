//in this file we will connect our backend to our database


//how to connect our data base to node backend
const Mysqli = require('mysqli');
let conn = new Mysqli({
    Host: 'localhost', // IP/domain name 
    post: 3306, // port, default 3306 
    user: 'root', // username dans le data
    passwd: '', // password 
    db: 'mega_shop'
});

let db = conn.emit(false, ''); 

module.exports = {
    database: db //le variable database c'est celle ci qu'on va utiliser dans le projet
};