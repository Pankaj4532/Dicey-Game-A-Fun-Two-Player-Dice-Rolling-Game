function closeModal(){
    const modal = document.getElementById("winner-modal");
    modal.classList.remove("show");
    
    setTimeout(()=>{
        modal.style.display ="none";
    },300);
}


document.getElementById("roll-btn").addEventListener("click",function (){

    //naming player
    const player1 = document.getElementById("Player1-name").value || "player 1";
    const player2 = document.getElementById("Player2-name").value || "player 2";

    //  Play dice sound
    var diceSound = new Audio("sounds/dice.mp3");
    diceSound.play();

    //getting images

    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    // animate images

    image1.classList.add("animate-dice");
    image2.classList.add("animate-dice");

    setTimeout(function (){
        //removing animation
    image1.classList.remove("animate-dice");
    image2.classList.remove("animate-dice");

    var randomNum1 = Math.floor(Math.random()*6)+1;
    var randomNum2 = Math.floor(Math.random()*6)+1;

    var sourceImage1 ="images/dice"+randomNum1+".png";
    var sourceImage2 ="images/dice"+randomNum2+".png";

    image1.setAttribute("src",sourceImage1);
    image2.setAttribute("src",sourceImage2);

    //declaring results
    const resultText = winner(randomNum1,randomNum2,player1,player2);

    //dynamic titles for winner

    var titles = ["Champion","Victory Goes To","Winner is","Success goes to"];
    var randomTitles = titles[Math.floor(Math.random()*titles.length)];

    document.getElementById("modal-title").textContent=randomTitles;
    document.getElementById("winner-message").textContent=resultText;

    //showing modal
    const modal = document.getElementById("winner-modal");
    modal.style.display ="block";
    modal.classList.add("show");


    },500);

});

// SHOOWING RESULTS AFTER WINNING
function winner(num1,num2,p1="Player 1",p2="Player 2"){
    let result;
    if(num1>num2){
        result=`${p1} wins`;
    }
    else if(num2>num1){
        result=`${p2} wins`;
    }
    else{
        result="Match was draws"
    }
    return result;
}