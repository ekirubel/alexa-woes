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

app.intent('drakeWoes',
    {
        "utterances":[
            "where he was last night"
        ]
    },
    function(request, response) {
        response.say("He says, " +
            "<audio src='https://dl.dropboxusercontent.com/s/644n84or9e9fxwl/Drake%20-%20Know%20Yourself%202015%20%281%29.mp3'/>");
    }
);

app.intent('drakeFeeling',
    {
        "utterances":[
            "how he's feeling"
        ]
    },
    function(request, response) {
        response.say("He says, " +
            "<audio src='https://dl.dropboxusercontent.com/s/m62or8m76jad5t3/I-feel-blessed.mp3'/>");
    }
)

module.exports = app;
