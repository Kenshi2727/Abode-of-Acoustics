const menuOpen = $('#menu-open');
const menuClose = $('#menu-close');
const sidebar = $('.sidebar');

menuOpen.click(() => sidebar.css('left', '0'));

menuClose.click(() => sidebar.css('left', '-100%'));

const trending = $('.trending .info .buttons button');
var flag = false;
var audio = new Audio('./assets/songs/DuskTillDawn.mp3');
trending.click(() => {
    if (flag === false) {
        flag = true;
        const img = $('.container .right-section .music-player .song-info img');
        img.attr('src', './assets/images/trending.png');
        const h3 = $('.container .right-section .music-player .song-info .description h3');
        h3.text('Dusk Till Dawn');
        const h5 = $('.container .right-section .music-player .song-info .description h5');
        h5.text('Zayn Malik');


        audio.play();
        trending.text("Stop playing!");
        setTimeout(() => {
            trending.text("Listen Now!");
        }, 235000);
    }
    else {
        flag = false;
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