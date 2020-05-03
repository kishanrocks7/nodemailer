const express = require('express');
const bodyParser = require('body-parser');
const nodemailer=require('nodemailer');

const path = require('path');



const app = express();
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/donate.html'));
});
app.use(express.static('html'));



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());




app.post('/submit', (req, res) => {
    const output = `
    <html>
    <head>
    <style>
    body {
            background-color:green;
            background-image:url(kishan.jpg);
            background-size: auto auto;
            background-repeat:no-repeat;
            background-size:cover;
    }
    </style>
    </head>
    <body>
    <center>
    
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.mail}</p>
        <p>Email: ${req.body.mobile}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1>${req.body.name}</h1> <h1> you will be contacted soon by one of our team member </h1>
    </center>
    </body>
    </html>
    `;
    transporter = nodemailer.createTransport({
        service:'Gmail', // true for 465, false for other ports
        auth: {
          user: 'kratitiwari5034@gmail.com', // generated ethereal user
          pass: 'kishan@123' // generated ethereal password
        }
      });


      const mailOptions = {
        from: 'kratitiwari5034@gmail.com', // sender address
        to: req.body.mail, // list of receivers
        subject: 'Subject of your email', // Subject line
        html: output // plain text body
      };
      
      transporter.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
    
      
});


app.listen(8081, () => console.log("Server Started..."));



  