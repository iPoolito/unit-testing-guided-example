function sum(a, b) {
 

  if(a && !b){
    b=0;
    return a+b;
  }
  if(b&&!a){
    a=0;
    return b+a;
  }
  if(!a||!b){
    return 0;
  }
  return a+b;
}

function subtract(a, b) {
  if(!a && !b){
    return 0;
  }
  if(a && !b){
    return a;
  }
  if(b&&!a){
    return b;
  }
  else {
    return a-b;}
}

function divide(a, b) {
  if(b==0){
  throw new Error('No puedes dividir entre 0');
     }
  return a/b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
