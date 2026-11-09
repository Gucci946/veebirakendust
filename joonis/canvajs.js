
function joon() {
    const canvas = document.getElementById("canvas");
    const tx = canvas.getContext("2d");

    tx.beginPath();
    tx.strokeStyle = "blue";
    tx.lineWidth = 3;
    tx.moveTo(50, 50);
    tx.lineTo(200, 300);
    tx.stroke();
}

function puhasta() {
    const canvas = document.getElementById("canvas");
    const tx = canvas.getContext("2d");

    tx.clearRect(0, 0, canvas.width, canvas.height);
}

function kolmnurk() {
    const canvas = document.getElementById("canvas");
    const tx = canvas.getContext("2d");

    tx.beginPath();
    tx.strokeStyle = "blue";
    tx.fillStyle = "red";
    tx.lineWidth = 3;

    tx.moveTo(50, 50);
    tx.lineTo(200, 300);
    tx.lineTo(30, 350);
    tx.closePath();

    tx.fill();
    tx.stroke();
}

function ristylik() {
    const canvas = document.getElementById("canvas");
    const tx = canvas.getContext("2d");

    const laius = Number(document.getElementById("laius").value);
    const korgus = Number(document.getElementById("korgus").value);

    if (laius > 0 && korgus > 0) {
        tx.fillStyle = "green";
        tx.fillRect(100, 150, laius, korgus);
    }
}

function ring() {
    const canvas = document.getElementById("canvas");
    const tx = canvas.getContext("2d");

    const r = Number(document.getElementById("raadius").value);

    if (r > 0 && r <= 100) {
        tx.beginPath();
        tx.fillStyle = "yellow";
        tx.strokeStyle = "black";
        tx.arc(100, 100, r, 0, 2 * Math.PI);

        tx.fill();
        tx.stroke();
    }
}

function pilt() {
    const canvas = document.getElementById("canvas");
    const tx = canvas.getContext("2d");

    const fail = new Image();

    const juhuslikNumber = Math.floor(Math.random() * 10000);

    fail.crossOrigin = "anonymous";

    fail.src = "https://picsum.photos/seed/" + juhuslikNumber + "/200/150";

    fail.onload = function() {
        tx.drawImage(fail, 50, 50, 200, 150);
    };

    fail.onerror = function() {
        alert("Pilti ei saanud laadida!");
    };
}
