function random_bg_color() {
    var body = document.body;
    var brand = body.getElementsByTagName('h1');
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body.style.background = bgColor;    
};


function myFunction() {
    var element = document.body;
    var writing = element.getElementsByTagName('i');
    element.removeAttribute('style');
    element.classList.toggle('dark');
};