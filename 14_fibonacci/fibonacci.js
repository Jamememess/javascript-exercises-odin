const fibonacci = function(rango) {
let anterior = 0;
let actual = 1;
let suma ;

if (rango < 0){ // es rango un numero negativo?
//si entonces f bro
return "OOPS";

}else{

    for (let i = 1; i <= rango ; i++){ // donde rango es el numero de veces que se realizara la serie y si ese sera justo el valor de esa posicion que interesante patron
   // actual se suma con en alterior y el valor se almacena en suma
        suma = actual + anterior;
   // luego anterior adquiere el valor de actual
        anterior = actual;
   // y actual adquiere el de la suma
        actual = suma;

}
return anterior ; // anterior es la posicion que rango quiere obtener xD
}


};  // SALE PUES

// Do not edit below this line
module.exports = fibonacci;
