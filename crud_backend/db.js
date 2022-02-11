const Pool = require('pg').Pool;
const   pool = new Pool({
    user:"postgres",
    password:"Password@ssw0rd",
    host:"localhost",
    port:"5432",
    database:"crud"
});

module.exports = pool;