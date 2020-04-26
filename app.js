const express = require("express");
const app = express();

const loginRouter = require("./routes/loginRoute");
const registerRouter = require("./routes/registerRoute");
const courseTypeRouter = require("./routes/courseTypeRoute");
const trainingTypeRouter = require("./routes/trainingtypeRoute");
const courseCategoryRouter = require("./routes/courseCategoryRoute");
const courseStatusRouter = require("./routes/courseStatusRoute");
const courseAreaRouter = require("./routes/courseAreaRoute");


app.use(express.json());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/courseType', courseTypeRouter);
app.use('/trainingType', trainingTypeRouter);
app.use('/courseCategory', courseCategoryRouter);
app.use('/courseStatus', courseStatusRouter);
app.use('/courseArea', courseAreaRouter);                 // it will be business, HR, Administration,...
app.use(express.static(`${__dirname}/public`));


//middleware capture current date
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });
  
module.exports = app;