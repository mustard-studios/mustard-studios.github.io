function random_bg_color() {
    var body = document.body;
    var card = document.getElementById('card');
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body.style.background = bgColor; 
    card.style.background = bgColor;

};

function requestImage() {
    window.location.reload(true);
    // return false;
}


function darkMode() {
    var element = document.body;
    var card = document.getElementById('card');
    element.removeAttribute('style');
    element.classList.toggle('dark');
    card.removeAttribute('style');
    card.classList.toggle('dark');
};

function mailTo() {
    window.location.href = "mailto:jason@mstrd-studios.com";
};

function myResume() {
    window.open('https://github.com/mustard-studios/mustard-studios.github.io/blob/master/assets/documents/jMustardResume.pdf', '_blank');
}