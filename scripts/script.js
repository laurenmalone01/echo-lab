
$(document).ready(function(){ 
  console.log("doc is ready");

  $("#btnGetFacts").click(function (){
  
      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName);
      
        $("#coolNameFactsOutput").html(coolFacts);
      });

});

function generateCoolNameFacts(userName){
  let coolFacts='';

  // coolFacts = "<h5>" +noName(userName);

  coolFacts = "<h5>" + nameLength(userName);
  coolFacts += "<h5>" + nameStart(userName);
  coolFacts += "<h5>" + nameEnd(userName);
  coolFacts += "<h5>" + nameReverse(userName);
  coolFacts += "<h5>" + bandRec(userName);

  return coolFacts;
}

// function noName(name){
//   if (typeof name !== 'string'){
//     // int i = 1;
//     return "Please enter a NAME (no special characters or numbers)"
//   }
// }


function nameLength(name){
  return "Your name is " + name.length + " letters long";
}

function nameStart(name){
  return "The First letter is " + name.charAt(0);
}

function nameEnd(name){
  let lastIndex = name.length - 1
  return "The Last letter of your name is " + name[lastIndex]
}

function nameReverse(name){
  return "I put my thing down, flip it and reverse it: " + name.split("").reverse().join("");
}

function bandRec(name){
  if (name == "cumbie"){
    return "You should listen to Nickelback"
  }
  else if (name.length <= 4){
    return "You should listen to Green Day"
  }
  else if (name.length >= 5){
    return "You should listen to Queen"
  }
  
}


var input = document.getElementById("userName");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btnGetFacts").click();
  }
});
//$ = jquery's way of naming stuff
//$(...) = what's inside () is the "object" we are messing with
// .ready() = method of $jQ
// .ready(...) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediate Invoked F/n Expression
