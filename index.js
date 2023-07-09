var randomnumber1=Math.random();
randomnumber1=randomnumber1*6;
randomnumber1=Math.floor(randomnumber1);

var randomnumber2=Math.random();
randomnumber2=randomnumber2*6;
randomnumber2=Math.floor(randomnumber2);

var arr=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
var x=arr[randomnumber1];
var y=arr[randomnumber2];
document.querySelector(".img1").setAttribute("src",x);
document.querySelector(".img2").setAttribute("src",y);
if(randomnumber1===randomnumber2){
    document.querySelector(".container h1").textContent="Draw";
}
else if(randomnumber1>=randomnumber2){
    document.querySelector(".container h1").textContent="🚩player 1 wins";
}
else{
    document.querySelector(".container h1").textContent="player 2 wins🚩";
}