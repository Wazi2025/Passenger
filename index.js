let count = 0;

let CountEl = document.getElementById("count-el");
let SaveEl = document.getElementById("save-el");

//test examples

//test examples

//image swap test
let img = document.createElement("img");
const picSAL = "gfx/sal.png";
const picSalute = "gfx/Salute.jpg";
let picURL = picSAL;
//image swap test

function increment() {
    
    count += 1;

    console.log(count);
    CountEl.innerText = count;

        
   //showImage();
}

function save(){
    let prevCount = count + " - ";
    SaveEl.textContent += prevCount;
    count = 0;
    CountEl.innerText = count;
    console.log("count: ",count);

}

function showImage() {

    //switches between the two images when button is clicked
    if (picURL == picSAL) {
        picURL = picSalute;
    } else {
        picURL = picSAL;
    }
    
    img.src = picURL; //switch URL's
    document.body.appendChild(img);
    

    console.log(picURL);  
    console.log(document.body.childNodes);

}


let Lap1 = 34
let Lap2 = 35

function addTimes() {
    totalTime = Lap1 + Lap2
    console.log(totalTime)
}

addTimes()

let lapsCompleted = 0

function incrementLapTimes(){
    lapsCompleted = lapsCompleted + 3
    return lapsCompleted
}

console.log(incrementLapTimes())

