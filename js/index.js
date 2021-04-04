const data = { "33": 8, "50": 45, "45": 15, "24": 97, "14": 88, "59": 9, "58": 26, "35": 31, "82": 14, "63": 67, "31": 65, "36": 15, "30": 37, "91": 20, "84": 61, "96": 82, "17": 79, "43": 9, "2": 34, "52": 68, "77": 6, "57": 70, "92": 52 }


window.addEventListener('load', event => {
    const ascene = document.getElementById("camera");
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];
            var node = document.createElement("a-sphere");
            node.setAttribute('position', { x: parseInt(key) / 350, y: value / 350, z: -1 },);
            node.setAttribute('radius', '0.01');
            node.setAttribute('color', '#EF2D5E');
            ascene.appendChild(node);
        }
    }
});