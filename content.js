if (window.getComputedStyle(document.body, null).backgroundImage.includes("linear-gradient")) {
    document.body.style = "background: linear-gradient(to bottom, rgb(85, 72, 95) 0, rgb(76, 94, 70) 100%) !important;";
}
var lightstyle = "rgb(151, 151, 133);";

//REMOVE AD ELEMENT
document.getElementsByClassName("alert-info").item(0).remove()

window.addEventListener("load", function () {
    setTimeout(function () {
        //SET GRAPH BACKGROUNDS
        var svgs = document.getElementsByClassName("main-svg");
        if (/^\/nation\/id=[0-9]{1,7}$/.test(window.location.pathname) || /^\/alliance\/id=[0-9]{1,5}$/.test(window.location.pathname)) {
            if (svgs.item(6)) {
                svgs.item(6).style = `background: ${lightstyle}`;
            }
            if (svgs.item(3)) {
                svgs.item(3).style = `background: ${lightstyle}`;
            }
            if (svgs.item(0)) {
                svgs.item(0).style = `background: ${lightstyle}`;
            }
        }
        else if (window.location.pathname.includes("world-graphs")) {
            svgs.item(0).style = `background: ${lightstyle}`;
        }
        var bgs = document.getElementsByClassName("bg");
        for (let i = 0; i < bgs.length; i++) {
            bgs.item(i).style = `fill: ${lightstyle}`;
        }
    }, 200);
})
