/* jquery comes along with the page */

//for auto sign in
var pandoraEmail = 'your@pandora.email';
var pandoraPass = 'your-pandora-password';

//a couple styles to make the page layout more compactly
$("#brandingBar .rightcolumn").css('right', '210px !important');
$('#brandingBar .middlecolumn').css('left' ,'-211px !important');


//keep them playing by clicking the interface
//every 30 min
setInterval( function() {
    $('.dots .dot').trigger('click');
}, 30*(60*1000));

//on a 1 second interval:
// - set a better page title
// - sometimes pandora gets confused, this clicks 
//   the reload link in their "we've messed up" message
setInterval( function() {
    //page title
    var stationName, songName, artistName;
    stationName = $('#stationList .selected .stationNameText').text();
    songName = $('#trackInfo .info .songTitle').text();
    artistName = $('#trackInfo .info  .artistSummary').text();
    window.document.title = stationName + " :: " + artistName + " :: " + songName;
    
    //reload link
    var reloadLink;
    reloadLink = $('.toastItemReload');
	if(reloadLink.length) {
		$('.toastItemReload').trigger('click');
	}
}, 1000);


//auto sign in
//check to see if there's a login link or a user link
//as soon as there is one, either stop this loop or
//sign in .
loginInterval = setInterval( function() {
    var submitted, processed, wasVisible;
    processed = false;
    wasVisible = false;
    //if .anonymousUser is visible
    if($("#brandingBar .anonymousUser").is(':visible')) {
        //click on the .signInLink child
        $('#brandingBar .anonymousUser .signInLink').trigger('click');
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
}, 500);

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