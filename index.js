var randomNo = Math.floor(Math.random() * 6) + 1 ;

var imageSrc = "images/dice" + randomNo + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , imageSrc);


var randomNo2 = Math.floor(Math.random() * 6) + 1 ;

var imageSrc2 = "images/dice" + randomNo2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , imageSrc2);



if(randomNo > randomNo2){
    document.querySelector("h1").innerHTML = "No 1 Won";
}else if(randomNo2 > randomNo){
    document.querySelector("h1").innerHTML = "No 2 Won";
}else{
    document.querySelector("h1").innerHTML = "Its a tie";
}