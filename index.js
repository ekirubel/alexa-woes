module.change_code = 1;
'use strict'

var alexa = require('alexa-app');
var app = new alexa.app('alexa-woes');

app.launch(function(request, response) {
    response.say('What\'s up?').reprompt('It\'s working').shouldEndSession(false);
});

app.error = function(exception, request, response) {
    console.log(exception);
    console.log(request);
    console.log(response);
    response.say('Something is wrong, yo!' + error.message);
}

app.intent('alexaWoes',
    {
        "utterances":[
            "where he was last night"
        ]
    },
    function(request, response) {
        // Eventually this will play an aduio clip once I figure that out
        response.say("He says, " +
            "<audio src='https://dl.dropboxusercontent.com/s/vi426qd2ff74u2l/Drake%20-%20Know%20Yourself%202015.mp3'/>");
    }
);

module.exports = app;
