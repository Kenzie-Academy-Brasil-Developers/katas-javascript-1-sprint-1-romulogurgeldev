function oneThroughTwenty() {
  let meuRetorno = [];
  for (let i = 1; i <= 20; i++) {
      //código
meuRetorno.push(i);
  }

  return meuRetorno;
}
console.log (oneThroughTwenty());
//call function oneThroughTwenty

function evensToTwenty() {

  let meuRetorno = [];
  for (let i = 1; i <= 20; i++) {
      //código
      if (i%2==0){
      meuRetorno.push(i);
      }
  }

  return meuRetorno;
}
console.log (evensToTwenty());

//call function evensToTwenty

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

 let meuRetorno = [];
  for (let i = 0; i <= 20; i++) {
     //código
     if (i%2!=0){
   meuRetorno.push(i);
     }
 }

 return meuRetorno;
}
console.log (oddsToTwenty());


//call function oddsToTwenty

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];
 for (let i = 1; i <= 100; i++) {
     //código
     if (i%5==0){
     meuRetorno.push(i);
     }
 }

 return meuRetorno;
}
console.log (multiplesOfFive());
//call function multiplesOfFive

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];
 for (let i = 1; i<= 100; i++) {
     //código
     if (i**(1/2)%1===0){
  meuRetorno.push(i);
     }
 }

 return meuRetorno;
}
console.log (squareNumbers());

//call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];
  for (let i = 20; i >= 1; i--) {
      //código
 meuRetorno.push(i);
  }

  return meuRetorno;
}
console.log (countingBackwards());

//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];
  for (let i = 20; i >= 1; i--) {
      //código
      if (i%2==0){
      meuRetorno.push(i);
      }
  }

  return meuRetorno;
}
console.log (evenNumbersBackwards());

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];
  for (let i = 20; i >= 1; i--) {
      //código
      if (i%2!=0){
      meuRetorno.push(i);
      }
  }

  return meuRetorno;
}
console.log (oddNumbersBackwards());
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];
  for (let i = 100; i >= 1; i--) {
      //código
      if (i%5==0){
      meuRetorno.push(i);
      }
  }
 
  return meuRetorno;
 }
 console.log (multiplesOfFiveBackwards());
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];
  for (let i = 100; i>= 1; i--) {
      //código
      if (i**(1/2)%1===0){
   meuRetorno.push(i);
      }
  }
 
  return meuRetorno;
 }
 console.log (squareNumbersBackwards());

//call function squareNumbersBackwards
