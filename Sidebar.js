



// Sidebar toggle function //
var toggle = true;
function toggleSidebar() {
if (toggle) {
document.getElementById("mySidebar").style.width = "170px";
this.toggle = false;
} else {
document.getElementById("mySidebar").style.width = "80px";
document.getElementById("mySidebar").style.opacity = "1";
this.toggle = true;
 }
}


document.getElementById("mySidebar").addEventListener("mouseover", mouseOver);
document.getElementById("mySidebar").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("mySidebar").style.marginRight="0px";
}
function mouseOut() {
  document.getElementById("mySidebar").style.marginRight="-50px";
}

// Icon "plus" & "minus" switch function //
function toggleIconToMinus() { 
document.getElementById("plus").style.display="none";  document.getElementById("minus").style.display="block"; 
}
function toggleIconToPlus() { document.getElementById("minus").style.display="none";       document.getElementById("plus").style.display="block"; 
}


