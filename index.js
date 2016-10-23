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
            "where were you",
            "where you been"
        ]
    },
    function(request, response) {
        // Eventually this will play an aduio clip once I figure that out
        var clip = "https://www.dropbox.com/s/gk31detdwjydkxs/Drake%20-%20Know%20Yourself%202015.wav?dl=1";
        response.say("<audio src=" + clip + "/>");
    }
);

module.exports = app;
