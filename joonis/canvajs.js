function joon() {
    const canvas = document.getElementById("canvas");
    //joon - линия
    if (canvas.getContext) {
        let tx = canvas.getContext("2d");
        tx.beginPath();
        tx.strokeStyle = "blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50);
        tx.lineTo(200, 300);
        tx.stroke();
    }
}


    function puhasta() {

        const canvas = document.getElementById("canvas");
        if (canvas.getContext("2d")) {
            let tx = canvas.getContext("2d");
            tx.clearRect(0, 0, 400, 400);

    }
}
    function kolmnurk(){
        const canvas = document.getElementById("canvas");
        if (canvas.getContext("2d")){
            let tx = canvas.getContext();
            tx.beginPath();
            tx.strokeStyle = "blue";
            tx.fillStyle = "red";
            tx.lineWidth = 3;
            tx.moveTo(50, 50);
            tx.lineTo(200, 300);
            tx.lineTo(30, 350);
            tx.lineTo(50, 50);
            tx.file();
            tx.stroke();
        }
    }
function ristylik() {
        const canvas = document.getElementById("canvas");
        let l=document.createElement('laius');
        let k=document.createElement('kyrgus');
        if (canvas.getContext("2d")){
            let tx = canvas.getContext("2d");
            tx.fillStyle = "green";
            tx.fillRect(100, 150, l.value,k.value);
        }
}
    function ring() {
        const canvas = document.getElementById("canvas");
        const r=document.createElement('radius');
        if (canvas.getContext("2d")){
            let tx = canvas.getContext("2d");
            tx.fillStyle = "yellow ";
            tx.strokeStyle="black";
            tx.arc(100, 100, r.value, 0, 2*Math.PI, true);
            tx.fill();
            tx.stroke();
        }
    }

    function pilt() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext("2d")){
        const fail=new Image();
        fail.src=canvas.toDataURL("https://picsum.photos/100/100?random=1");
        fail.onload=()=>{
            tx.drawImage(fail,50, 50, 100, 100);
        }
    }
    }