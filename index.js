var numSquare = 8 ;
var colors = generateRandomColors(numSquare);
var h1 = document.querySelector("h1");
var pickedColor = pickedColors();
var rgb = document.querySelector(".span1");
var massage = document.querySelector(".span2");
var resetButton = document.querySelector(".reset")
rgb.textContent = pickedColor
var squares = document.querySelectorAll(".square");
var mediumButton = document.querySelector(".mediumbutton");
var hardButton = document.querySelector(".hardbutton");
var easyButton = document.querySelector(".easybutton");
var container = document.querySelector(".container");
mediumButton.addEventListener("click", function(){
    this.classList.add("selected")
    hardButton.classList.remove("selected");
    easyButton.classList.remove("selected");
    numSquare=4
    colors =generateRandomColors(numSquare);
    pickedColor =pickedColors()
    rgb.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    massage.textContent ="";
    resetButton.textContent = "New Colors"
    for (var i = 0; i < squares.length; i++) {
        
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display="block"
        }
        else{
            squares[i].style.display='none'
        };
        
    }
})
easyButton.addEventListener("click", function(){
    this.classList.add("selected")
    hardButton.classList.remove("selected");
    mediumButton.classList.remove("selected");
    numSquare=2
    colors =generateRandomColors(numSquare);
    pickedColor =pickedColors()
    rgb.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    massage.textContent ="";
    resetButton.textContent = "New Colors";
    
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            
        }
        else{
            squares[i].style.display='none'
        };
        
    }
})
hardButton.addEventListener("click", function(){
    this.classList.add("selected")
    mediumButton.classList.remove("selected");
    easyButton.classList.remove("selected");
    numSquare = 8
    colors =generateRandomColors(numSquare);
    pickedColor =pickedColors()
    rgb.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    massage.textContent ="";
    resetButton.textContent = "New Colors";

    for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display='block'
    }
})
resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquare);
    pickedColor =pickedColors();
    rgb.textContent = pickedColor
    for(var i = 0 ; i< squares.length ; i++ ){
        squares[i].style.background = colors[i];
    };
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent ="New Colors";
    massage.textContent =""
})
for(var i = 0 ; i< squares.length ; i++ ){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click" , function(){
        
        var clickedColor = this.style.background
        if(clickedColor === pickedColor){
            massage.textContent ="CORRECT!";
            changeColor(clickedColor)
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        }
        else{
            this.style.background = "transparent";
            massage.textContent = "TRY AGAIN!!"
        }
    })
}
function changeColor(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
        
    }
}
function pickedColors(){
    var random =Math.floor((Math.random()*colors.length))
    return colors[random]
}
function generateRandomColors(value){
    var arr = [];
    for (var i = 0; i < value; i++) {
        arr.push(randomColors())
    }
    return arr
}
function randomColors() {
    var r =Math.floor(Math.random()*255+1);
    var g = Math.floor(Math.random()*255+1);
    var b =Math.floor(Math.random()*255+1);
    return "rgb(" + r + ", "+ g + ", "+ b +")"
}