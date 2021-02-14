const knex = require("knex");

const knexfile = require("../knexfile");

// get env variable to pull knexfile config //

module.exports = knex(knexfile);