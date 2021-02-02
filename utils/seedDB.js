const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config")

mongoose.connect(process.env.ATLAS_URL || "mongodb://localhost/waste-of-time",
   mongoOptions
);

const userSeed =
{
   username: "Admin",
   name: "Lilly",
   email: "admin@contact.us",
   password: "1",
   highScore: 150,
   status: "second tier",
   gameScore: 180,
}

// db.User.deleteMany({})
//    .then(()=> db.User.create(userSeed))
//    .catch(err => {
//       console.log(err),
//       process.exit(1);
//    })

