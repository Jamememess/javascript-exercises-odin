const reverseString = function(palabra) {

    let array = palabra.split("");
    palabra = "";

    let i = array.length - 1 ;

    while(i >= 0){
      palabra += array[i];
      --i;
    }

    return palabra;
      // OOOUH YEAAAAAH
};

// Do not edit below this line
module.exports = reverseString;
