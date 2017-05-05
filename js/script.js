

var Player1 = {token:"X"}
var Player2 = {token:"O"}
var currentPlayer = Player1;




//top row
var cell = document.getElementById("tl");
cell.addEventListener("click", function(){
cell.innerHTML = currentPlayer.token


if(currentPlayer == Player1){
  currentPlayer = Player2
}

else{
  currentPlayer = Player1
}

checkForWinner();
});

var cell2 = document.getElementById("tc");
cell2.addEventListener("click", function() {
cell2.innerHTML = currentPlayer.token

//toggling between x ando
if(currentPlayer == Player1){
  currentPlayer= Player2
}
else{
  currentPlayer = Player1
}
console.log(cell2.innerHTML)
checkForWinner();
});


var cell3 = document.getElementById("tr");
cell3.addEventListener("click", function() {
cell3.innerHTML = currentPlayer.token

if(currentPlayer == Player1){
  currentPlayer= Player2
}
else{
  currentPlayer = Player1
}
console.log("clicked");
checkForWinner();
});


//middle row
var cell4 =document.getElementById("ml");
cell4.addEventListener("click", function() {
  cell4.innerHTML = currentPlayer.token

if(currentPlayer == Player1){
  currentPlayer= Player2
}
else{
  currentPlayer = Player1
}
checkForWinner();
});

var cell5 =document.getElementById("mc");
cell5.addEventListener("click", function() {
  cell5.innerHTML = currentPlayer.token

  if(currentPlayer == Player1){
  currentPlayer= Player2
}
else{
  currentPlayer = Player1
}
checkForWinner();
});
var cell6 =document.getElementById("mr");
cell6.addEventListener("click", function() {
  cell6.innerHTML = currentPlayer.token

  if(currentPlayer == Player1){
  currentPlayer= Player2
}
else{
  currentPlayer = Player1
}
checkForWinner();
});
//bottom row

var cell7 =document.getElementById("bl");
cell7.addEventListener("click", function() {
 cell7.innerHTML = currentPlayer.token

 if(currentPlayer == Player1){
  currentPlayer= Player2
}
else{
  currentPlayer = Player1
}
checkForWinner();
});
var cell8 =document.getElementById("bc");
cell8.addEventListener("click", function() {
  cell8.innerHTML = currentPlayer.token

   if(currentPlayer == Player1){
  currentPlayer= Player2
}
else{
  currentPlayer = Player1
}
checkForWinner();
});

var cell9 =document.getElementById("br");
cell9.addEventListener("click", function() {
  cell9.innerHTML = currentPlayer.token

   if(currentPlayer == Player1){
  currentPlayer= Player2
}
else{
  currentPlayer = Player1
}
checkForWinner();
});




function compareAndValidateSquares(square1, square2){
  var isComparisonValid = false;

  if(square1.text() == square2.text()){
    isComparisonValid = true;

    console.log("squares have the same text value");

    if(square1.text() == ""){
      isComparisonValid = false;

      console.log("but the value is an empty string");
    }
  }

  return isComparisonValid;

}


function checkForWinner(){

  // if (compareAndValidateSquares($("#tl"), $("#tc")) && compareAndValidateSquares($("#tl"),$("#tr"))||
  //     compareAndValidateSquares($("#ml"), $("#mc")) && compareAndValidateSquares ($("#ml"), $("#mr"))||
  //     compareAndValidateSquares($("#bl"), $("#bc")) && compareAndValidateSquares ($("#bl"), $("#br"))||
  //     compareAndValidateSquares($("#tl"), $("#ml")) && compareAndValidateSquares ($("#tl"), $("#bl"))||
  //     compareAndValidateSquares($("#tc"), $("#mc")) && compareAndValidateSquares ($("#tc"), $("#bc"))||
  //     compareAndValidateSquares($("#tr"), $("#mr")) && compareAndValidateSquares ($("#tr"), $("#br"))||
  //     compareAndValidateSquares($("#tl"), $("#mc")) && compareAndValidateSquares ($("#tl"), $("#br"))||
  //     compareAndValidateSquares($("#tr"), $("#mc")) && compareAndValidateSquares ($("#tr"), $("#bl")))
  //   {
  //  alert("player wins");
  //  boardReset();
  // }

  // Top Row
  if (compareAndValidateSquares($("#tl"), $("#tc")) && compareAndValidateSquares($("#tl"),$("#tr"))) {
    if ($('#tl').text() === 'X') {
      alert('Hooray. You won Mario!')
    } else {
      alert('Congratulations DOnkeyKong you are Victorious!')
    }
    boardReset();
  }

  // Middle Row
  if (compareAndValidateSquares($("#ml"), $("#mc")) && compareAndValidateSquares($("#ml"),$("#mr"))) {
    if ($('#ml').text() === 'X') {
      alert("Win for team Mario")
    } else {
      alert('Tean DOnkeyKong won!')
    }
    boardReset();
  }
  //bottom row
if (compareAndValidateSquares($("#bl"), $("#bc")) && compareAndValidateSquares($("#bl"),$("#br"))) {
    if ($('#bl').text() === 'X') {
      alert('Hey it is Mario')
    } else {
      alert('Donkey Kong for the Win!')
    }
    boardReset();
  }
//left column
if (compareAndValidateSquares($("#tl"), $("#ml")) && compareAndValidateSquares($("#tl"),$("#bl"))) {
    if ($('#tl').text() === 'X') {
      alert('Victory is yours Mario')
    } else {
      alert('DOnkeyKong loves the sweet smell of Victory')
    }
    boardReset();
  }

//middle column
if (compareAndValidateSquares($("#tc"), $("#mc")) && compareAndValidateSquares($("#tc"),$("#bc"))) {
    if ($('#tc').text() === 'X') {
      alert('Mario Wins')
    } else {
      alert('Rainbows and butterflies for DOnkeyKong')
    }
    boardReset();
  }
  //right column
if (compareAndValidateSquares($("#tr"), $("#mr")) && compareAndValidateSquares($("#tr"),$("#br"))) {
    if ($('#tr').text() === 'X') {
      alert('The force was with you Mario')
    } else {
      alert('The odds were in your favor today DOnkeyKong')
    }
    boardReset();
  }
//diagonal left
if (compareAndValidateSquares($("#tl"), $("#mc")) && compareAndValidateSquares($("#tl"),$("#br"))) {
    if ($('#tl').text() === 'X') {
      alert('Yippee Mario won')
    } else {
      alert('Yippee DOnkeyKong Won')
    }
    boardReset();
  }
  //diagonal right

  if (compareAndValidateSquares($("#tr"), $("#mc")) && compareAndValidateSquares($("#tr"),$("#bl"))) {
    if ($('#tr').text() === 'X') {
      alert('Player 1 wins')
    } else {
      alert('Player 2 wins')
    }
    boardReset();
  }


};


function boardReset() {
  $("td").html("")
}



// function checkForWinner(){
//   if ($("#cell4").text() === $("#cell5").text() === $("#cell6").text()
//     )

// function checkForWinner(){
//   if ($("#cell7").text() === $("#cell8").text() === $("#cell9").text()
//     alert("Player wins")
//     )



// });


