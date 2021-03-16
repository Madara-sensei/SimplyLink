const express = require ("express");
const app = express();
const firebase = require ("firebase");
const nodemailer = require ("nodemailer");
var domain = "https://digitalyze.agency/home";
var digitalyzeMail = "contact.digitalyze.agency@gmail.com";
var digitalyzePassword = "OrientKamasu59";
var fs  = require("fs")

var brochure = fs.readFile('./ad_mail.html', function (err, html){
    if (err) {
        throw err; 
    }  
});


const firebaseConfig = {
    apiKey: "AIzaSyDl3sv9kr4PaVmBaElh_ZZ6zAMuwbxStLI",
    authDomain: "digitalyzeapi.firebaseapp.com",
    projectId: "digitalyzeapi",
    storageBucket: "digitalyzeapi.appspot.com",
    messagingSenderId: "476856798921",
    appId: "1:476856798921:web:8794479a61dd210a87c718"
  };
  firebase.initializeApp(firebaseConfig);

  let transporter = nodemailer.createTransport({
    service:'gmail',
    
    auth: {
      user: digitalyzeMail, // generated ethereal user
      pass: digitalyzePassword, // generated ethereal password
    },
  });

app.get('/digitalyze-contact-form',function(req,res){
    if(req.get('Origin')== domain){
        try{
            const customerData = {
                user_mail: req.body.mail,
                user_project: req.body.project,
                user_description: req.body.description
             }
     
             let mailData = transporter.sendMail({
                 from: customerData.mail, 
                 to: digitalyzeMail, 
                 subject: customerData.user_project,
                 text: customerData.user_description // Subject line
     
             });
     

        }catch{
                res.status(404).send("Errol can't send form").end();
        }
     

    }else{
        res.status(400).send("Request refused");
    }

    

})

app.get('/digitalyze-brochure-sender',function(req,res){
    if(req.get('origin')== domain){
        try{   
            let user_mail = req.body.mail
            let mailData = transporter.sendMail({
                from:'Digitalyze Agency',
                to: user_mail,
                subject:"Build your profesional website - Digitalyze.agency",
                html:brochure
            })

        }catch{
            res.status(404).send("Can't send mail").end();
        }
        

    }else{
        res.status(400).send("Request refused");
    }


})


app.listen(3000);