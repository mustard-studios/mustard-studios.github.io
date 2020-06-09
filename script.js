function random_bg_color() {
    var body = document.body;
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body.style.background = bgColor;    
};


function myFunction() {
    var element = document.body;
    element.removeAttribute('style');
    element.classList.toggle('dark');
};

function mailTo() {
    window.location.href = "mailto:jason@mstrd-studios.com";
};

function myResume() {
    window.open('https://github.com/mustard-studios/mustard-studios.github.io/blob/master/documents/jMustardResume.pdf', '_blank');
}