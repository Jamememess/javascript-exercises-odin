const repeatString = function( frase, numero) {
    if (numero < 0) 
        return "ERROR";
    
    let string = "";
    for(let i = 1; i <= numero; i++){
        string += frase;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
