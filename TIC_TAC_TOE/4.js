// restart Game Button
var  restart = document.querySelector("#b")




// grabs all the squares
var squares =document.querySelectorAll("td");




// clear all the squares
function clearBoard(){
    for (var i=0; i<squares.length; i++){
        squares[i].textContent = '';
    }
}
restart.addEventListener('click',clearBoard);
// check the square marker
function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}

// for loop to add event listeners to all the squares