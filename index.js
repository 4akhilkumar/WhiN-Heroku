const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression=require('compression');
const dotenv=require('dotenv');
const helmet=require('helmet');
const path=require('path');
const connection = mongoose.connection;
const app = express();
dotenv.config({path:"./config.env"});
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://Database4WhiN:Database4WhiN@whin.wbc8o.mongodb.net/WhiN?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});

connection.once('open', () => console.log("connected to the mongodb"));

const booktravelRoute=require('./routes/booktravelRoute');
const booktourRoute=require('./routes/booktourRoute');
const bookhospitalityRoute=require('./routes/bookhospitalityRoute');
const donateRoute=require('./routes/donateRoute');
const contactusRoute=require('./routes/contactusRoute');
const userRoute=require('./routes/userRoute');

app.use(compression());
app.use(express.static(process.cwd() + "/whin/dist/whin"));
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", "https:", "http:", "data:", "ws:"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https:", "http:", "data:"],
        scriptSrc: ["'self'", "https:", "http:", "blob:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https:", "http:"],
      },
    })
);

// app.use(express.static(__dirname + '/whin/dist/whin'));
// app.get('/*', function(req,res) {
//     res.sendFile(path.join(__dirname+'/whin/dist/whin/index.html'));
// });

app.use(cors());
app.use(bodyParser.json());
app.use('/booktravel',booktravelRoute);
app.use('/booktour',booktourRoute);
app.use('/bookhospitality',bookhospitalityRoute);
app.use('/donate',donateRoute);
app.use('/contactus',contactusRoute);
app.use('/user',userRoute);

app.post('/verify', (req,res) => {
  var secretKey = '6LfiBhQaAAAAALj72o9LBq7ruMMJe_WgCDIYK8WZ';
  var userKey = req.body.token;
  axios.post('https://www.google.com/recaptcha/api/siteverify?secret='+secretKey+'&response='+userKey).then(response => {
      console.log("got response ", response.data)
      if(response.data.success) {
          return res.status(200).json({
              response: "Verification Successful"
          });
      }
      return res.status(401).json({
          error: "Verification Failed"
      });
      }).catch(error => {
          res.status(500).json({
            error: "Server Not Responding"  
          })
  });
});

app.get("*", (req, res) => { 
    res.sendFile(path.resolve(process.cwd() + "/whin/dist/whin/index.html"));
});

app.listen(port, () => console.log(`running on the server ${port}`));
