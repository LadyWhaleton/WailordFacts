'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "undefined"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Wailord Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "Wailord is a huge Pokémon based on the blue whale. It has small beady eyes, a huge mouth, and a throat that is lined with grooves. It has a blue back with and four white spots, and a tan, grooved underbelly. It has two pairs of fins along its sides and a horizontal tail at the back.",
    "When Wailord is jumping out of the water, it makes a giant splash due to its large size. It can dive deep at 10,000 feet (3,000 meters) in one breath. It lives in the sea in large groups called pods. A pod of Wailord travels together in order to search for food, and is able to eat large quantities at one time. It is the tallest known Pokémon.",
    "Wailord evolves from Wailmer starting at level 40.",
    "Wailord is the 321st Pokemon.",
    "Wailord is a Water type Pokemon. It is weak to Electric and Grass Pokemon.",
    "It takes about 10537 to 10793 steps to hatch a Wailord egg.",
    "Wailord weighs about 877.4 lbs or 398.0 kg.",
    "Wailord, the Float Whale Pokémon. Wailord is the largest Pokémon yet discovered. When diving out of the water in pursuit of its prey, it makes quite an impressive sight.",
    "Wailord, the Float Whale Pokémon. Wailord can dive nearly ten-thousand feet on one breath.",
    "Wailord is the largest of all identified Pokémon up to now. This giant Pokémon swims languorously in the vast open sea, eating massive amounts of food at once with its enormous mouth.",
    "Its immense size is the reason for its popularity. Wailord watching is a favorite sightseeing activity in various parts of the world.",
    "With 170 base HP, Wailord has the highest HP base stat of all Water-type Pokémon.",
    "This Pokémon is based on the blue whale, the largest known animal to ever exist. It also resembles a submarine, a blimp, and a torpedo.",
    "Wailord is a combination of whale, wail (referring to the sounds or songs that whales and this Pokémon might make), and lord."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a Wailord fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};