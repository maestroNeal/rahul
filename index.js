var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomImageSource="imageDice/"+randomImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomSource2="imageDice/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🙆🏾‍♂️ Rahul WON! 🙆🏾";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=" 💁🏾‍♂️ You WON! 💁🏾";
}
else{
    document.querySelector("h1").innerHTML=" 🙅🏾‍♂️ DRAW! 🙅🏾 ";
}