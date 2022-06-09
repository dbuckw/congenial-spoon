/* Accordion adapted from https://www.w3schools.com/howto/howto_js_accordion.asp */
var acc = document.getElementsByClassName("accordion");
var i;
for (i=0; i<acc.length; i++) {
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var panel=this.nextElementSibling;
        if (panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/* Menu adapted from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp */
function myFunction() {
    var x=document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}