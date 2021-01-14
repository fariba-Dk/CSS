

function rockPaperScissorsPrompt(){
  //prompt 
  let user = prompt ('Type in rock, paper or scissors?');

  //use Math.random to assign 0, 1, 2 

  let random = Math.floor(Math.random()* 3);

  let computer = "";
  //assign comp to r, p, s
  if (random === 1){
      console.log('rock');
      computer = 'rock';
  } else if (random === 2){
      console.log('paper');
      computer = 'paper';
  } else{
      console.log('scissors');
      computer = 'scissors';
  }
   //run my conditionals based on possibilities
  if (computer === user){
      console.log('hahahaha a tie!!');   
  }else if (computer === 'rock' && user === 'scissors'){
      console.log('Looooooooooooser');
  }else if (computer === 'paper' && user === 'scissors'){
      console.log('Whatever.. you WIN!');
  }else if (computer === 'scissors' && user === 'scissors'){
      console.log('I don\'t think so!!');
  }else if (computer === 'rock' && user === 'paper'){
      console.log('How nice for you!! You WIN!');
  }else if (computer === 'paper' && user === 'rock'){
      console.log('Looooooservile');
  }else if (computer === 'scissors' && user === 'paper'){
      console.log('Cuttch Ya!');  
  }else if (computer === 'scissors' && user === 'rock'){
      console.log('Good FoYo....YOU WIN!');
  }else if (computer === 'paper' && user === 'paper'){
    console.log('Oooooop\'s a tie!!');
  }else if (computer === 'rock' && user === 'rock') {
      console.log('You got LUCKY ...It\' a tie!!');   
  } else{
    console.log('Hey, go learn how to type!!!!');
  }
 }
rockPaperScissorsPrompt();


