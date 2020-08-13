// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.fontSize = "1.25rem";
    } else {
        document.getElementById("header").style.fontSize = "2.25rem";
    }
}