const express = require("express");
const app = express();

const courseTypeRouter = require("./routes/courseTypeRoute");
const trainingTypeRouter = require("./routes/trainingtypeRoute");
const courseCategoryRouter = require("./routes/courseCategoryRoute");
const courseStatusRouter = require("./routes/courseStatusRoute");
const courseAreaRouter = require("./routes/courseAreaRoute");
const courseClassificationRouter = require("./routes/courseClassificationRoute");

app.use(express.json());
app.use('/courseType', courseTypeRouter);
app.use('/trainingType', trainingTypeRouter);
app.use('/courseCategory', courseCategoryRouter);
app.use('/courseStatus', courseStatusRouter);
app.use('/courseArea', courseAreaRouter);
app.use('/courseClassification', courseClassificationRouter);                 // it will be business, HR, Administration,...

app.use(express.static(`${__dirname}/public`));


//middleware capture current date
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });
  
module.exports = app;