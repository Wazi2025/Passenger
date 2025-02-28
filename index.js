let count = 0;

let CountEl = document.getElementById("count-el");
let SaveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    CountEl.innerText = count;  
}

function save(){
    let prevCount = count + " - ";
    SaveEl.textContent += prevCount;
    count = 0;
    CountEl.innerText = count;    
}


