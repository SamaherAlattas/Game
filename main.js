
let level1=['C','R','T','A','m','o','o','n']
let level=['b','a','r','i','l','l','n','g','e','d']
let level3=['','']

let words1=['CART','CAR','RAT','moon','no','on']
let words=['bring','ball','bread','bed','big','ring']
let user=[]
let x= Math.floor(Math.random() * 6) //understand
let b=0;
// let words=[]


let score=[]
let play=[]
let next= false



// $(".nav").append('<li>'+level1[0]+'</li>');


$(document).ready(function(){
  $('.next').hide()
  $('.again').hide()


  console.log('jjjjjjj')
  showLetters();
 



})

function showLetters(){
  

     //show the letters to the ueser
     for (let i = 0; i < level.length; i++) {
         
      $(".nav").append('<li class="A">'+level[i]+'</li>');

  }
// prebeing the list of word elements
    for (let j = 0; j < words[x].length; j++) {
      $(".board").append('<li class='+j+'></li>');

    }
  
    
 
        
        
}

// moving itereting to full letters
function MakeWord(event){
  console.log('works')
  console.log('x  '+x)
  console.log('SS '+words[x].length)
  
while (true) {
  console.log('while')
 if($('.board .'+b).text()==""|| $('.board .'+b).text()==null){  //if the lettel place is empty
  console.log('yes its empyu')
  $('.board .'+b).html('<p>'+$(event.target).text()+'</p>')  //git input feom ueser and full the same indes
  play.push($(event.target).text()) // save uerer input 
  console.log(play)
  console.log('b '+b)
  b++;
  break;
 
 }


  
}

if(play.length==words[x].length){
let word = play.join("")
let flag= false;
console.log('rr '+word)
for (let i = 0; i < words.length; i++) {
  if(word == words[i]){ //if the word esest in woed arry 
 
  //   swal({
  //     title: "Win",
  //     text: 'Braaavoooooo',
  //     html: true,
     
      
  // });
  $('.next').show()
  $('.again').show()
  $('.resrtBtn').hide()

  // $('body').append('<button class="next" >continue</button>')
    swal('win :)')
console.log('win :)')
flag=true;

  }
  
}
if(!flag){
     swal('lose :(')

  console.log('lose :(')
}

}

}

function resetButton(){
console.log('RESET')

  b=0// to remove letter by letter
  
  console.log(b)
  console.log("AA "+words[x].length)

  while (b < words[x].length) {
console.log('before '+ $('.board .'+b).text())
     $('.board .'+b).html(null) // make the board empty-- remove 
     console.log('text  '+$('.board .'+b).text())
 play.pop()
     b++; 
     
   }
   b=0;// make it zero so it start over
   console.log("play "+play)


   
}

//reset button

$('.resrtBtn').on('click',resetButton)


  //click on the letter
  $(".nav").on('click', MakeWord)

