const express = require("express");
const morgan = require("morgan");
const usersRoutes = require("./Routes/users")
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use("/users", usersRoutes);
// start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`server listnning on ${port}`);
