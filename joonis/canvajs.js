
function joon() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.strokeStyle = "blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50);
        tx.lineTo(200, 280);
        tx.stroke();
    }
}

function puhasta() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function kolmnurk() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.fillStyle = "blue";
        tx.strokeStyle = "red";
        tx.lineWidth = 3;

        tx.moveTo(50, 50);
        tx.lineTo(200, 280);
        tx.lineTo(30, 350);
        tx.closePath();

        tx.fill();
        tx.stroke();
    }
}

function ristkylik() {
    const canvas = document.getElementById('canvas');
    let l = document.getElementById('laius');
    let k = document.getElementById('kyrgus');

    if (canvas.getContext && l.value > 0 && k.value > 0) {
        let tx = canvas.getContext('2d');

        tx.fillStyle = "red";
        tx.fillRect(100, 150, Number(l.value), Number(k.value));
    }
}

function ring() {
    const canvas = document.getElementById('canvas');
    const r = document.getElementById('raadius');

    if (canvas.getContext && r.value > 0 && r.value <= 50) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.strokeStyle = "black";
        tx.fillStyle = "yellow";
        tx.arc(100, 100, Number(r.value), 0, 2 * Math.PI);

        tx.fill();
        tx.stroke();
    }
}


// Juhuslik pilt
function pilt() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        const fail = new Image();

        let number = Math.floor(Math.random() * 10000);

        fail.src = "https://picsum.photos/100/100?random=" + number;

        fail.onload = function() {
            tx.drawImage(fail, 50, 50, 100, 100);
        };
    }
}


// LIHTNE AUTO

// Esimene ratas
function Ratas1() {
    const canvas = document.getElementById('canvas');
    const r = document.getElementById('raadius');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.fillStyle = "black";
        tx.arc(140, 290, Number(r.value), 0, 2 * Math.PI);
        tx.fill();
    }
}

// Teine ratas
function Ratas2() {
    const canvas = document.getElementById('canvas');
    const r = document.getElementById('raadius');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.beginPath();
        tx.fillStyle = "black";
        tx.arc(290, 290, Number(r.value), 0, 2 * Math.PI);
        tx.fill();
    }
}

// Auto kere
function Kere() {
    const canvas = document.getElementById('canvas');

    let l = document.getElementById('laius');
    let k = document.getElementById('kyrgus');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.fillStyle = "red";
        tx.fillRect(100, 240, 220, 50);
    }
}

// Auto tuled
function Tuled() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        tx.fillStyle = "yellow";
        tx.fillRect(315, 250, 8, 15);

        tx.fillStyle = "orange";
        tx.fillRect(95, 250, 8, 15);
    }
}


// MINU AUTO - LAMBORGHINI

function minu() {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let tx = canvas.getContext('2d');

        // Kere
        tx.beginPath();
        tx.fillStyle = "yellow";
        tx.strokeStyle = "black";
        tx.lineWidth = 2;

        tx.moveTo(35, 260);
        tx.lineTo(65, 220);
        tx.lineTo(130, 205);
        tx.lineTo(175, 165);
        tx.lineTo(265, 165);
        tx.lineTo(325, 220);
        tx.lineTo(365, 240);
        tx.lineTo(365, 270);
        tx.lineTo(35, 270);
        tx.closePath();

        tx.fill();
        tx.stroke();

        // Aknad
        tx.beginPath();
        tx.fillStyle = "lightblue";

        tx.moveTo(145, 205);
        tx.lineTo(180, 175);
        tx.lineTo(255, 175);
        tx.lineTo(295, 215);
        tx.closePath();

        tx.fill();
        tx.stroke();

        // Uks
        tx.beginPath();
        tx.moveTo(220, 175);
        tx.lineTo(220, 260);
        tx.stroke();

        // Esituled
        tx.fillStyle = "white";
        tx.fillRect(345, 240, 15, 8);

        // Tagatuled
        tx.fillStyle = "red";
        tx.fillRect(38, 240, 15, 8);

        // Rattad
        tx.beginPath();
        tx.fillStyle = "black";

        tx.arc(105, 270, 25, 0, 2 * Math.PI);
        tx.arc(305, 270, 25, 0, 2 * Math.PI);

        tx.fill();

        // Veljed
        tx.beginPath();
        tx.fillStyle = "silver";

        tx.arc(105, 270, 12, 0, 2 * Math.PI);
        tx.arc(305, 270, 12, 0, 2 * Math.PI);

        tx.fill();

        // Nimi
        tx.fillStyle = "black";
        tx.font = "bold 12px Arial";
        tx.fillText("LAMBORGHINI", 130, 245);
    }
}
//getElementById() – otsib elementi ID järgi.
//
//
//
// getContext("2d") – võimaldab Canvasel joonistada.
//
//
//
// fillRect() – joonistab ristküliku.
//
//
//
// arc() – joonistab ringi.
//
//
//
// clearRect() – kustutab joonistuse.