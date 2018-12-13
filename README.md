# Helen's Ghost
[![forthebadge](https://forthebadge.com/images/badges/powered-by-netflix.svg)](https://forthebadge.com)

An Alexa Skill built specifically for Peabody and McKee residents at Miami University.

## About

Residents of the community know well that the physical facilities can be less than perfect at times. They also know that Peabody Hall is supposedly haunted by the ghost of Helen Peabody, the first president of Western College. In respectful memory of her, we are bringing a tool that allows the community to have a little ease of mind.

It will be built using the [jovo framework](http://jovo.tech), which allows us to make this thing crazy fast. Also, porting to Google Assistant is made super easy because that logic and interaction model are universal, and jovo automatically "translates" the files into things that Alexa and Google Assistant can understand. If you're brave enough to set up ask-cli and aws-cli, then it's definitely worth a try. Another plus is that during testing stages (and even beyond), you don't have to deal with AWS Lambda, because who *actually* enjoys doing that?

## Roadmap

Right now, the skill is in its very early stages, and there is no anticipated date for deployment. At the time, the skill is being built and tested using Amazon's Alexa, however with release of version 1.0, it will be ported to Google Assistant to ensure that most everyone will have access to it.

There will also be an opportunity at some point for members of the community to request features, because it is being tailored to them after all.

## Contributing

As far as contributing, we don't really care what you do. It is open source, you know. However, if you have any questions (given that the jovo framework is pretty new, and documentation for all of this is kind of lackluster at times), feel free to email us.

Also, to put in your own OpenWeatherMap API key, I would recommend doing the following:

* Create a file called config.js in the /app:
~~~~
module.exports = {
  API_KEY: 'myAPIKey'
}
~~~~

* Then import it into app.js:

~~~~
const API_CONFIG = require('./config.js');
const API_KEY = API_CONFIG.API_KEY;
~~~~

* Be sure to add config.js to your .gitignore file!!!
* This is also the same method I would use for AWS credentials, because this project will involve DynamoDB at some point.

## Some really helpful libraries/frameworks/etc that are used in this project

* As previously mentioned, [Jovo](http://jovo.tech) will make your life much easier, and they have fantastic support if you need help.
* [Atom](http://atom.io) is a great text editor and is PPL's editor of choice.
* [APIXU](http://apixu.com) has a great free-tier weather API that is more than sufficient for our needs, and probably yours too.
