
//Hide and show page part
const Homebtn = document.querySelector("#Homebtn");
const Pbtn = document.querySelector("#Pabtn");
const Hpbtn = document.querySelector("#Hpbtn");
const KMPbtn = document.querySelector("#KMPbtn");
const Gamebtn = document.querySelector("#Gamebtn");

const Home = document.querySelector("#Home");
const P = document.querySelector("#P");
const Hp = document.querySelector("#Hp");
const KMP = document.querySelector("#KMP");
const Game = document.querySelector("#Game");




const pin = document.querySelector("#pin");
const water = document.querySelector("#water");
const particle = document.querySelector("#particle");
const game = document.querySelector("#game");
const exp = document.querySelector("#expbtn");

const pressure = document.querySelector("#pressure");
const Gametitle = document.querySelector("#Gametitle");
const Hptitle = document.querySelector("#Hptitle");
const Kmptitle = document.querySelector("#Kmptitle");


const click = new Audio("audios/click.mp3");

function hideall(){ 
Home.style.display = "none";
P.style.display = "none";
Hp.style.display = "none";
KMP.style.display = "none";
Game.style.display = "none";
}

function hide4(){ 
P.style.display = "none";
Hp.style.display = "none";
KMP.style.display = "none";
Game.style.display = "none";
}

Homebtn.addEventListener("click", function(){
   hideall(); 
   Home.style.display = "flex";
});

Pbtn.addEventListener("click", function(){
   hideall(); 
   P.style.display = "flex";
});

Hpbtn.addEventListener("click", function(){
  hideall(); 
  Hp.style.display = "flex";
});

KMPbtn.addEventListener("click", function(){
  hideall(); 
  KMP.style.display = "flex";
});

Gamebtn.addEventListener("click", function(){
  hideall(); 
  Game.style.display = "flex";
});






const hamBtn=document.querySelector("#hamIcon");

hamBtn.addEventListener("click",toggleMenus);

const menuItemsList=document.querySelector("nav ul");

function toggleMenus(){
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Show Menu"; 
menuItemsList.classList.remove("menuShow");}
else{ 
hamBtn.innerHTML="Hide Menu"; 
menuItemsList.classList.add("menuShow");
}
}









pin.addEventListener("click", function(){
	click.play();
  hideall(); 
  P.style.display = "flex";
  pressure.scrollIntoView();
  behavior:"smooth";
});
exp.addEventListener("click", function(){
	click.play();
  hideall(); 
  P.style.display = "flex";
  pressure.scrollIntoView();
  behavior:"smooth";
});

water.addEventListener("click", function(){
	click.play();
  hideall(); 
  Hp.style.display = "flex";
  Hptitle.scrollIntoView();
behavior:"smooth";
});
hide4();

particle.addEventListener("click", function(){
	click.play();
  hideall(); 
  KMP.style.display = "flex";
  Kmptitle.scrollIntoView();
  behavior:"smooth";
});

game.addEventListener("click", function(){
	click.play();
  hideall(); 
  Game.style.display = "flex";
  Gametitle.scrollIntoView();
  behavior:"smooth";
});



//show ans and derivation part

const showBtn = document.querySelector("#showbtn");
const derivation = document.querySelector("#derivation");




showBtn.addEventListener("click", function(){

    if (derivation.style.display == "none" || derivation.style.display == "" ){
        derivation.style.display = "block";
    } 
	else {
        derivation.style.display = "none";
    }
});



const showans = document.querySelector("#showans");
const ans = document.querySelector("#ans");

showans.addEventListener("click", function(){


    if (ans.style.display == "none" || ans.style.display == "" ){
        ans.style.display = "block";
    } 
	else {
        ans.style.display = "none";
    }
});



// Game part

const leftimg = document.querySelector("#leftimg");
const rightimg = document.querySelector("#rightimg");
const score = document.querySelector("#score");
const result = document.querySelector("#result");

const question = [

{
	left:"images/highheel.jpeg",
	right:"images/shoe.jpg",
	answer:"left"
	
},

{
	left:"images/highheel.jpeg",
	right:"images/Knife.jpg",
	answer:"right"
	
},


{
	left:"images/brick.jpg",
	right:"images/Knife.jpg",
	answer:"right"
	
},

{
	left:"images/pin.jpg",
	right:"images/book.jpg",
	answer:"left"
	
},


{
	left:"images/book.jpg",
	right:"images/highheel.jpeg",
	answer:"right"
	
},

{
	left:"images/pin.jpg",
	right:"images/shoe.jpg",
	answer:"left"
	
},


{
	left:"images/brick.jpg",
	right:"images/brick2.jpg",
	answer:"right"
	
},


{
	left:"images/brick.jpg",
	right:"images/brick2.jpg",
	answer:"right"
	
},


{
	left:"images/Knife.jpg",
	right:"images/brick2.jpg",
	answer:"left"
	
},



{
	right:"images/Knife.jpg",
	left:"images/shoe.jpg",
	answer:"right"
	
},

];








function correct(){
	scoreget++;
  score.innerHTML = "Score:" + scoreget;
  result.innerHTML = "Correct!";
}



let scoreget = 0;
let answer = " ";
let answered = false;
let randomQns = 0;
let round = 0;
let totalRound = 10;

score.innerHTML = "Score:" + scoreget;


function challenge(){
	
	answered = false;
	result.innerHTML = " ";
	randomQns = Math.floor(Math.random() * question.length);

    leftimg.src = question[randomQns].left;

    rightimg.src = question[randomQns].right;

    answer = question[randomQns].answer;

}


function nextQns(){
	
	round++;
	if(round >= totalRound){
		
		result.innerHTML = "Game Completed!Final Score:" + scoreget + "/" + totalRound;
		
		return;
	}
    challenge();
	
}




leftimg.addEventListener("click", function(){
	
	click.play();
	if(answered){
		return;
	}
	
	
	answered = true;
	 if (answer == "left"){
  correct();
  } 
	else {
       result.innerHTML = "Wrong...";
    }
	
	setTimeout(nextQns, 1000);
	
	
});

rightimg.addEventListener("click", function(){
	
	click.play();
	
	if(answered){
		return;
	}
	
	answered = true;
	 if (answer == "right"){
		 correct();
    } 
	else {
       result.innerHTML = "Wrong...";
    }
	
	setTimeout(nextQns, 1000);
	

	
	
});



const reset1 = document.querySelector("#reset1");

reset1.addEventListener("click", function(){
	
	scoreget = 0;
	round = 0;
	score.innerHTML = "Score:" + scoreget;
	result.innerHTML = " ";
	challenge();
});

challenge();





//quiz part

const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);
const scorebox=document.querySelector("#scorebox");
const correctans = document.querySelector("#correctans");
const correctans2 = document.querySelector("#correctans2");
const correctans3 = document.querySelector("#correctans3");
const correctans4 = document.querySelector("#correctans4");
const correctans5 = document.querySelector("#correctans5");
const quizresult = document.querySelector("#quizresult");
var q1,q2,q3,q4,q5
let score2=0;
function CheckAns(){
score2=0; 
q1=document.querySelector("input[name='q1']:checked").value;
 
if(q1=="F/A"){
	score2++;
}
else{
	correctans.innerHTML = "Oops!The answer should be Force/Area";
}
q2=document.querySelector("input[name='q2']:checked").value;
if(q2=="Depth"){score2++;}

else{
	correctans2.innerHTML = "Oops!The answer should be Depth";
}

q3=document.querySelector("input[name='q3']:checked").value;
if(q3=="all"){score2++;}

else{
	correctans3.innerHTML = "Oops!The answer should be The same in all directions ";
}


q4=document.querySelector("input[name='q4']:checked").value;
if(q4=="Gas"){score2++;}

else{
	correctans4.innerHTML = "Oops!The answer should be Gas";
}


q5=document.querySelector("input[name='q5']:checked").value;
if(q5=="CR"){score2++;}

else{
	correctans5.innerHTML = "Oops!The answer should be Closely packed and regular";
}

scorebox.innerHTML="Score:"+score2 + "/5";

if(score2 == 5){

    quizresult.innerHTML = "Excellent!";

}

else if(score2 == 4){

    quizresult.innerHTML = "Great Job!";

}

else if(score2 == 3){

    quizresult.innerHTML = "Good!";

}

else if(score2 == 2){

    quizresult.innerHTML = "Keep Practicing!";

}

else{

    quizresult.innerHTML = "Try Harder!";

}
  resetquiz.classList.remove("hide");


}


// reset quiz

const resetquiz = document.querySelector("#resetquiz");

resetquiz.addEventListener("click", function(){

    const inputs = document.querySelectorAll("input");

    for(let i = 0; i < inputs.length; i++){

        inputs[i].checked = false;
    }

    scorebox.innerHTML = "Not submitted";
    quizresult.innerHTML = " ";
	correctans.innerHTML = " ";
	correctans2.innerHTML = " ";
	correctans3.innerHTML = " ";
	correctans4.innerHTML = " ";
	correctans5.innerHTML = " ";
	
	 resetquiz.classList.add("hide");

});



const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { 
btnWS.classList.remove("hide");
document.documentElement.requestFullscreen();
btnFS.classList.add("hide");
}
function exitFullscreen() {
btnFS.classList.remove("hide");
document.exitFullscreen();
btnWS.classList.add("hide");
}