var bcrypt=require('bcrypt');

var password="Kashif@123"
console.log(bcrypt.hashSync(password,10));