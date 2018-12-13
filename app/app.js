'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const API_CONFIG = require('./config.js');
const API_KEY = API_CONFIG.API_KEY;

const https = require('https');
//const Results = require('results');

const config = {
    logging: true,
};

const app = new App(config);

var temp = 0.0;


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        // Eventually, this will be this.ask(), but as of right now it will cause errors because this piece of shit doesn't do anything yet
        this.tell("Hey, Helen's Ghost here. What can I do for you?");

    },

    'NEW_SESSION': function() {
      // Important to get this data (bread) after this.tell() so it doesn't hold it up. Also important to do this on NEW_SESSION so the data will always be ready.
      https.get('https://api.openweathermap.org/data/2.5/weather?zip=45056,us&units=imperial&APPID=' + API_KEY, (res) => {
        let rawData='';

        res.on('data', (chunk) => { rawData += chunk });
        res.on('end', () => {
          console.log('Function Response: ' + JSON.parse(rawData).main.temp);
          temp = Math.round(JSON.parse(rawData).main.temp);


          console.log(temp);

    });
  });
    },

    'NEW_USER': function() {
      this.tell("Hi, I'm Helen's Ghost. Don't worry, I've gotten pretty bored with scaring students, so now I might as well help them.");
    },

    'ThermoIntent': function() {
      if(temp >= 58) {
        this.tell("It's currently " + temp + " degrees outside, so my best guess is that your thermostat is set to cool");
      } else {
        this.tell("It's currently " + temp + " degrees outside, so my best guess is that your thermostat is set to heat");
      }
    }
});

module.exports.app = app;
