require("dotenv").config();
require("express-async-errors");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// route imports
const generalRoute = require("./routes/generalRoute");
const managementRoute = require("./routes/managementRoute");
const salesRoute = require("./routes/salesRoute");
const usersRoute = require("./routes/usersRoute");
const User = require("./models/User");
const { dataUser } = require("./mock/data");
const errorHandler = require("./middlewares/errorHandler");

// Configurations
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

// Routes
app.use("/general", generalRoute);
app.use("/users", usersRoute);
app.use("/sales", salesRoute);
app.use("/management", managementRoute);

// Middlewares
app.use(errorHandler);

// Moongoose connect then run server
const port = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connect to MongoDB");
    app.listen(port, () => console.log(`server is listening on Port ${port}`));

    /* Run this just once to add mock data to db */
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(error));
