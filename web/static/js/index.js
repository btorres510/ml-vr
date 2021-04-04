// runs when user clicks button
AFRAME.registerComponent('start', {

    init: function () {
        // block pointer events until buttonEnter is clicked
        let uiDiv = document.getElementById("uiDiv");
        uiDiv.style["pointer-events"] = "auto";

        // set up background blocker
        uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.75)";

        // indicate clickable with hand cursor (desktop)
        let buttonEnter = document.getElementById("buttonEnter");
        buttonEnter.style.cursor = "pointer";

        // fade-in functionality
        let fadeIn = function () {
            // allow point events again
            uiDiv.style["pointer-events"] = "none";

            // remove startButton
            buttonEnter.parentNode.remove(buttonEnter);

            // fade out uiDiv background
            uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.0)";
            uiDiv.style["transition"] = "background-color 1000ms linear";

            $.ajax({
                type: "GET",
                url: "/key_val",
                success: function (data) {
                    var myObj = data;
                    displayData(myObj);
                }
            });

            $.ajax({
                type: "GET",
                url: "/plane_data",
                success: function (data) {
                    var myObj = data;
                    console.log(myObj);
                }
            });

        }

        // activate for desktop/touchscreen
        buttonEnter.addEventListener('touchstart', fadeIn);
        buttonEnter.addEventListener('mousedown', fadeIn);
    }
});

const displayData = (data) => {
    const ascene = document.getElementById("camera");
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];
            var node = document.createElement("a-sphere");
            node.setAttribute('position', { x: (parseInt(key) / 150) - 0.5, y: (value / 150) - 0.5, z: -1 },);
            node.setAttribute('radius', '0.02');
            node.setAttribute('color', 'red');
            ascene.appendChild(node);
        }
    }
};