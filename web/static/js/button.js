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

            // sounds can only be triggered after a mouse interaction
            // let soundPlayer = document.querySelector("#ambientSound");
            // soundPlayer.components.sound.playSound();

            // remove startButton
            buttonEnter.parentNode.remove(buttonEnter);

            // fade out uiDiv background
            uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.0)";
            uiDiv.style["transition"] = "background-color 1000ms linear";

            data = $.get("/key_val");
        }

        // activate for desktop/touchscreen
        buttonEnter.addEventListener('touchstart', fadeIn);
        buttonEnter.addEventListener('mousedown', fadeIn);
    }
});