const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config")

// This file empties the Books collection and inserts the books below


mongoose.connect(process.env.ATLAS_URL || "mongodb://localhost/mern",
   mongoOptions
);

// const userSeed = 
//    {
//       username: "Admin",
//       email: "admin@contact.us",
//       password: "1"
//    }
;


