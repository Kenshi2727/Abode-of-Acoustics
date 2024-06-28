const menuOpen = $('#menu-open');
const menuClose = $('#menu-close');
const sidebar = $('.sidebar');

menuOpen.click(() => sidebar.css('left', '0'));

menuClose.click(() => sidebar.css('left', '-100%'));

const trending = $('.trending .info .buttons button');
var flag = false;
trending.click(() => {
    if (flag === false) {
        var audio = new Audio('./assets/songs/DuskTillDawn.mp3');
        audio.play();
        trending.text("Stop playing!");
        setTimeout(() => {
            trending.text("Listen Now!");
        }, 235000);
    }
    else {
        audio.pause();
        trending.text("Listen Now!");
    }
});


function playSound(song, duration) {
    var audio = new Audio('./assets/songs/' + song + '.mp3');
    audio.play();
    var currentImg = $('.music-player .top-section .song-info img');
    var h3 = $('.music-player .top-section .song-info .description h3');
    var h5 = $('.music-player .top-section .song-info .description h5');
    var playButton = $('.music-player .player-action .buttons .play-button');


}