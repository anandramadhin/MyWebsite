function init() {
   $("#mobile").hide(1);
   $("#web").hide(1);
   $("#game").hide(1);
};

$("#web_button").click(function () {
   $("#web").show('fast');
   $("#mobile").hide('fast');
   $("#game").hide('fast');
});

$("#mobile_button").click(function () {
   $("#mobile").show('fast');
   $("#web").hide('fast');
   $("#game").hide('fast');
});

$("#game_button").click(function () {
   $("#game").show('fast');
   $("#web").hide('fast');
   $("#mobile").hide('fast');
});

