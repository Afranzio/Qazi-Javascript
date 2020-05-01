//Challenge 1

function generateCat()
{
       var image = document.createElement("img");
       var div = document.getElementById("output");
       image.src="e.png";
       div.appendChild(image);
}


//Challenge 2


//yourchoice frontend
//remove all in div output and show yourchoice
//make computer choice but using random function
//connect the random number with color and compare the human choice
//create the final message
//connect the random choice with picture


function back(yourChoice)
{
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice = computerChoice();
    decideWinner=compare(humanChoice,botChoice);
    rpsfront(humanChoice,decideWinner,botChoice);
}
function computerChoice()
{
    cchoice = Math.floor(Math.random()*3);
    return["rock","paper","scissor"][cchoice];
}

function compare(yourchoice,computerchoice){
    var color = {
        "rock":{"rock":0.5,"paper":0,"scissor":1},
        "paper":{"rock":1,"paper":0.5,"scissor":0},
        "scissor":{"rock":0,"paper":1,"scissor":0.5}
    };
    yourscore=color[yourchoice][computerchoice];
    computerscore=color[computerchoice][yourchoice];

    if(yourscore===0){
        return{"message":"You_Lost","color":"red"};
   }else if(yourscore===1){
        return{"message":"You_Won!!","color":"green"};
    }else{
        return{"message":"Mactch_Tied","color":"yellow"};
    }

}

function rpsfront(yourchoice,finalmessage,computerchoice){
    var imgdb = {
        "rock":document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissor":document.getElementById("scissor").src
    };
    document.getElementById("rock").remove()
    document.getElementById("paper").remove()
    document.getElementById("scissor").remove()

    var humandiv = document.createElement("div");
    var compdiv = document.createElement("div");
    var msgdiv = document.createElement("div");

    humandiv.innerHTML="<img src='"+imgdb[yourchoice]+"'>";
    compdiv.innerHTML="<img src='"+imgdb[computerchoice]+"'>";
    msgdiv.innerHTML="<h1 style= color:" +finalmessage["color"]+">"+finalmessage["message"]+"</h1>";

    document.getElementById("play").appendChild(humandiv);
    document.getElementById("play").appendChild(msgdiv);
    document.getElementById("play").appendChild(compdiv);

}




//challenge 3
//copy all button to a variable to reuse
//Errors to work on it

var allBtn=document.getElementsByTagName("button");

var copyBtn=[];

for ( let i=0; i<allBtn.length; i++ ){
    copyBtn.push(allBtn[i].classList[1]);
}

function changeColor(val){
    if(val.value=="red" ){
        changeRed();
    }
    if(val.value=="green"){
        changeGreen();
    }
    if(val.value=="reset"){
        changeRest();
    }
    if(val.value=="random"){
        changerandom();
    }
}

function changeRed(){
    for ( let i=0; i<allBtn.length; i++ ){
        allBtn[i].classList.remove(allBtn[i].classList[1]);
        allBtn[i].classList.add(allBtn[i].classList.add("btn-danger"));
    }
}

function changeGreen(){
    for ( let i=0; i<allBtn.length; i++ ){
        allBtn[i].classList.remove(allBtn[i].classList[1]);
        allBtn[i].classList.add(allBtn[i].classList.add("btn-sucess"));
    }
}
function changerandom(){
    var col =  ["btn-danger",'btn-primary','btn-sucess','btn-warning']
    for ( let i=0; i<allBtn.length; i++ ){
        allBtn[i].classList.remove(allBtn[i].classList[1]);
        allBtn[i].classList.add(allBtn[i].classList.add(col[Math.floor(Math.random()*4)]));
    }
}

function changeRest(){
    for ( let i=0; i<allBtn.length; i++ ){
        allBtn[i].classList.remove(allBtn[i].classList[1]);
        allBtn[i].classList.add(allBtn[i].classList.add(copyBtn[i]));
    }
}


