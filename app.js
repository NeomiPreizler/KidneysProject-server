const bodyParser=require("body-parser");

require('dotenv').config();
const express = require("express");
const { connect } = require("http2");
const app = express();
// const database = require('./mySqlConnection');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
// app.use("/users",)

const PORT = process.env.PORT || 3600;

console.log(process.env.NODE_ENV);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded());

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/donaters", require("./routes/donatersRoutes"));
app.use('/api/crossovers',require("./routes/crossoversRoutes"));
app.use("/api/needDonation", require("./routes/needsDonationRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));


// app.use("/api/donaters/personal", require("./routes/donatersRoutes"));
// app.use("/api/donaters/medical", require("./routes/donatersRoutes"));

// connect to static files:
// const path = require('path')
// app.use('/', express.static(path.join(__dirname,'public')))

// app.use('/', require('./routes/root'))
// app.listen("5000",()=>{
//     console.log("app running");
// })

app.listen(PORT, ()=>
 console.log(`Server running on port ${PORT}`));