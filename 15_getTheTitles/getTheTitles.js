const getTheTitles = function(elementos) {

let titulos = new Array(elementos.length);

for(let i = 0 ; i < elementos.length ; i++){
    // estamos dentro del primer array
        titulos[i] = elementos[i]["title"];   

}

return titulos;



};

// Do not edit below this line
module.exports = getTheTitles;
