
// Sidebar toggle function //
var mini = true;
function toggleSidebar() {
if (mini) {
document.getElementById("mySidebar").style.width = "170px";
this.mini = false;
} else {
document.getElementById("mySidebar").style.width = "80px";
document.getElementById("mySidebar").style.opacity = "1";
this.mini = true;
 }
}

// Icon "plus" & "minus" switch function //
function toggleIconToMinus() { 
document.getElementById("plus").style.display="none";  document.getElementById("minus").style.display="block"; 
}
function toggleIconToPlus() { document.getElementById("minus").style.display="none";       document.getElementById("plus").style.display="block"; 
}


