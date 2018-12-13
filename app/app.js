'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


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
      this.tell("Looks like blah blah blah")
    }
});

module.exports.app = app;
