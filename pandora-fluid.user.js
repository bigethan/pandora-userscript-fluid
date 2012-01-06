/* jquery comes along with the page */

//for auto sign in
var pandoraEmail = 'your@pandora.email';
var pandoraPass = 'your-pandora-password';

//keep them playing by clicking the interface
setInterval( function() {
    $('.dots .dot').trigger('click');
}, 30*(60*1000));

//set a better page title
setInterval( function() {
    var stationName, songName;
    stationName = $('#stationList .selected .stationNameText').text();
    songName = $('#trackInfo .info .songTitle').text();
    artistName = $('#trackInfo .info  .artistSummary').text();
    songName = $('#trackInfo .songTitle').text();
    window.document.title = stationName + " :: " + artistName + " :: " + songName;
}, 1000);


//auto sign in
//check to see if there's a login link or a user link
//as soon as there is one, either stop this loop
//sign in if needed.
loginInterval = setInterval( function() {
    var processed = false;
    var wasVisible = false;
    //if .anonymousUser is visible
    if($("#brandingBar .anonymousUser").is(':visible')) {
        //click on the .signInLink child
        window.location.hash = $('#brandingBar .anonymousUser .signInLink').attr('href');
        //fill and submit the form with pandoraEmail and pandoraPass
        $(".signinForm input[name='email']").attr('value', pandoraEmail);
        $(".signinForm input[name='password']").attr('value', pandoraPass);
        submitted = $(".signinForm input[type='submit']").trigger('click');
        if(submitted.length > 0) {
            processed = true;
        }
    }

    if(loginInterval && processed) {
        clearInterval(loginInterval);
    }
}, 300);

//add menu items
window.fluid.addDockMenuItem("Play", function() {
    $('#playbackControl .playButton a').trigger('click');

});

window.fluid.addDockMenuItem("Pause", function() {
    $('#playbackControl .pauseButton a').trigger('click');
});

window.fluid.addDockMenuItem("Pause for 5 min", function() {
    $('#playbackControl .pauseButton a').trigger('click');
    setTimeout(function() {
        $('#playbackControl .playButton a').trigger('click');
    }, (1000*60)*5);
});


window.fluid.addDockMenuItem("Thumbs Down", function() {
    $('#playbackControl .thumbDownButton a').trigger('click');
});

window.fluid.addDockMenuItem("Thumbs Up", function() {
    $('#playbackControl .thumbUpButton a').trigger('click');
});

window.fluid.addDockMenuItem("Skip Track", function() {
    $('#playbackControl .skipButton a').trigger('click');
});