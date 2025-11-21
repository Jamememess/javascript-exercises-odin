const add = function(numero1, numero2) {
  return numero1 + numero2;

};

const subtract = function(numero1, numero2) {
	return numero1 - numero2;
};

const sum = function(numeros) {
	let total = 0;
  for(let e of numeros){
    total += e; 
  }
  return total;

};

const multiply = function(numeros) {
let total = 1;
  for(let e of numeros){
    total *= e; 
  }
  return total;
};

const power = function(base, exp) {
  let total = base;
  for ( let i = 1 ; i < exp ; i++ ){
      total *= base; 
  }
    return  total;

};

const factorial = function(base) {
	if (base == 0){
      return 1;
  }
  if(base % 1 == 0){// determina si es entero ya que una factorial solo se realiza en enteros
    let total = 1;  // iniciamos i con 1 para que una ves dentro del bucle se le asigne el valor de base en la primera iteracion (1*base)
    for (let i = base ; i >= 1 ; i-- ){
        total *= i; // 
    }// Fin de for

    return total;

  }else{
    return "ERROR";
  }

}; // SALE PUES 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
