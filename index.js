function scuberGreetingForFeet(ride){

     if(ride<=400)
      {
     
       return 'This one is on me!';
}
else if(ride > 400 && ride <=2000)  
  {
     
     return 'That will be twenty bucks.';
  }
  else if(ride > 2000 && ride <= 2500)
  {
    return 'I will gladly take your thirty bucks.';
  }
  else if(ride > 2500){
    return 'No can do.';
  }
}
  // Write your code here!


function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  return tip === 'generous' ? 'Thank you so much.' : tip === 'not as generous' ? 'Thank you.' : 'Bye.';
}