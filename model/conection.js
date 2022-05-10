var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Savita@123",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
con.query("CREATE DATABASE 3rd_project", function (err, result) {
    if (err){
        console.log("Database  already created");
    }
    else{
        console.log("Database created");
    }
  });

const knex = require("knex")({

    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Savita@123',
      database: '3rd_project'
    }
  })
  function create_table() {
    knex.schema.hasTable("data_meraki").then(function (exists) {
      if (!exists) {
        console.log({ Success: `users table created successfully.` });
        
        return knex.schema.createTable("data_meraki", function (t) {
          t.increments('id').primary(),
            t.string('Name'),
            t.string('Password'),
            t.string('Email_id')
        });
      } else {
        console.log({ Sorry: `users table already exist!` });
      }
    });
  }
create_table()

function create_table_next() {
  knex.schema.hasTable("post_data").then(function (exists) {
    if (!exists) {
      console.log({ Success: `users table created successfully_2nd.`});
      
      return knex.schema.createTable("post_data", function (t) {
        t.increments('post_id').primary(),
          t.integer('user_id'),
          t.string('title'),
          t.string('text')
      });
    } else {
      console.log({ Sorry: `users table already exist!_2nd` });
    }
  });
}
create_table_next()


function create_like_dislike(){
  knex.schema.hasTable("likedislike").then(function(exist){
    if(!exist){
      console.log({Success:`user table created successfully.`});

      return knex.schema.createTable("likedislike",function(t){
        t.integer('post_id')
        t.integer('user_id')
        t.boolean('like')
        t.boolean('dislike')
      })
    }else{
      console.log({Sorry:`user table alredy exist`})
    }
  });
}
create_like_dislike()




module.exports=knex


