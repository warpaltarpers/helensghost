'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const API_CONFIG = require('./config.js');
const API_KEY = API_CONFIG.API_KEY;

// const https = require('https');
var request = require('then-request');

const config = {
    logging: true,
};

const app = new App(config);

var temp = 0;

// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        // Eventually, this will be this.ask(), but as of right now it will cause errors because this piece of shit doesn't do anything yet
        this.tell("Hey, Helen's Ghost here. What can I do for you?");

    },

    'NEW_USER': function() {
      this.tell("Hi, I'm Helen's Ghost. Don't worry, I've gotten pretty bored with scaring students, so now I might as well help them.");
    },

    'ThermoIntent': function() {

      // This is important because of the context of "this" used in the conditional statement.
      var tempThis = this;

      request('GET', 'https://api.apixu.com/v1/current.json?key=' + API_KEY + '&q=45056').then(function (res) {
        temp = Math.round(JSON.parse(res.getBody()).current.temp_f);
        console.log(temp);

        if(temp >= 58) {
          tempThis.tell("It's currently " + temp + " degrees outside, so my best guess is that your thermostat is set to cool");
        } else {
          tempThis.tell("It's currently " + temp + " degrees outside, so my best guess is that your thermostat is set to heat");
        }
      });

    },
});

module.exports.app = app;
