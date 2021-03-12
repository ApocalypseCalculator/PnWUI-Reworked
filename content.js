if (window.getComputedStyle(document.body, null).backgroundImage.includes("linear-gradient")) {
    document.body.style = "background: linear-gradient(to bottom, rgb(85, 72, 95) 0, rgb(76, 94, 70) 100%) !important;";
}
var lightstyle = "rgb(151, 151, 133);";

window.addEventListener("load", function () {
    setTimeout(function () {
        var svgs = document.getElementsByClassName("main-svg");
        if (window.location.pathname.startsWith("/nation") || window.location.pathname.startsWith("/alliance/id=")) {
            svgs.item(3).style = `background: ${lightstyle}`;
            svgs.item(0).style = `background: ${lightstyle}`;
        }
        else if (window.location.pathname.includes("world-graphs")) {
            svgs.item(0).style = `background: ${lightstyle}`;
        }
        var bgs = document.getElementsByClassName("bg");
        for (let i = 0; i < bgs.length; i++) {
            bgs.item(i).style = `fill: ${lightstyle}`;
        }
    }, 500);
})
