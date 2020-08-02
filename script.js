function random_bg_color() {
    var body = document.body;
    var card = document.getElementById('mydiv');
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body.style.background = bgColor; 
    card.style.background = bgColor;

};

function randomImage() {
    var element = document.getElementById('wrapper');
    element.style.backgroundImage = 'url("https://source.unsplash.com/user/mustard81")';
    event.preventDefault();
    window.location.reload(true);
    
}


function darkMode() {
    var element = document.body;
    var card = document.getElementById('mydiv');
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


// Drag card event
var container = document.querySelector('#wrapper');
var dragItem = document.querySelector('#mydiv');

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }


