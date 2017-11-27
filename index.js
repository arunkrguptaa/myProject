const express = require('express');
//const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
//87946249453-2hrup7q2p0bbb9ftajqg2vj4jbr2l1ug.apps.googleusercontent.com 
//NAWCSYIyX6VBqGq1Y9F5W_n3 

//passport.use(new GoogleStrategy());
app.get('/', ( req, res ) => {
    res.send({hey: 'bitch'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT); 