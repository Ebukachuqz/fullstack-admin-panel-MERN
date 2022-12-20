require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// route imports
const mainRoute = require("./routes/mainRoute");
const managementRoute = require("./routes/managementRoute");
const salesRoute = require("./routes/salesRoute");
const usersRoute = require("./routes/usersRoute");

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
app.use("/main", mainRoute);
app.use("/users", usersRoute);
app.use("/sales", salesRoute);
app.use("/management", managementRoute);

// Moongoose connect then run server
const port = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to MongoDB");
    app.listen(port, () => console.log(`server is listening on Port ${port}`));
  })
  .catch((error) => console.log(error));
