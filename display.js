window.onload = function() {
    document.getElementById("home-nav").onclick = function() {
        toggleView("home");
    }
    document.getElementById("etc-nav").onclick = function() {
        toggleView("etc");
    }
}

function toggleView(view) {
    switch (view) {
        case "home":
            document.getElementById("overview-c").style.display = "block"
            document.getElementById("etc-c").style.display = "none";
            break;
        case "etc":
            document.getElementById("overview-c").style.display = "none"
            document.getElementById("etc-c").style.display = "block";
            break;
        default:
    }
}