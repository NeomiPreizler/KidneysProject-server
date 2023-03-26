const bodyParser = require("body-parser");
require('dotenv').config();
const express = require("express");
const { connect } = require("http2");
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const PORT = process.env.PORT || 3600;

console.log(process.env.NODE_ENV);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded());

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

console.log("ndfddg");

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/donater", require("./routes/donatersRoutes"));
app.use("/api/needDonation", require("./routes/needsDonationRoutes"));
app.use('/api/crossovers', require("./routes/crossoversRoutes"));

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`));