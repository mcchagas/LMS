const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_LMS_PASSWORD);
mongoose.connect(DB, {
  useNewUrlParser: true, 
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(con => {
//  console.log(con.connections);
  console.log('DB Connection to LMS collection in MongoDB successful');
})



//server running na porta 3000 - START SERVER
const port = "3000";
app.listen(port, () => {
  console.log(`The app LMS is running on the port ${port}`);
});
