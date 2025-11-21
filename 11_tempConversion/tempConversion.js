const convertToCelsius = function(f) {
let conversionC = (f - 32) * 5/9; // formula de la conversion de temperatura fahrenheit a C°

if(conversionC % 1 == 0){ // esta es una solucion rapida a la forma en que se evalua el resultado
      return conversionC;

}else {
  return +conversionC.toFixed(1); // (+)es un operador unario de js que intenta convertir a numero una string, me parecio la forma mas directa de hacerlo

}



};

const convertToFahrenheit = function(c) {

let conversionF = (c * 9/5) + 32;
if(conversionF % 1 == 0){
  return conversionF;
  
}else{
return +conversionF.toFixed(1);

}



}; // GJ

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
