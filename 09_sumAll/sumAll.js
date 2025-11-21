const sumAll = function(valor1, valor2) {

let menor;    
let mayor;
let total ;
let error = "ERROR";
// paso 1 comprobar vaores    

    if ( typeof valor1 == "number" && typeof valor2 == "number" ){
		if ( (valor1 > 0 && valor2 > 0) && (valor1 % 1 == 0 && valor2 % 1 == 0 ) ){
			
            // paso 2 determinar el menor
            if (valor1 < valor2 ){
                menor = valor1;
                mayor = valor2;
                total = valor1;

            }else{ // si llega aqui quiere decir que valor 2 es el menor
                menor = valor2;
                mayor = valor1;
                total = valor2; // total toma el valor del menor para la implementacion del algoritmo
            }
			
        for (  ; menor < mayor  ; menor++ ){
        total += (menor +1);

        }

        return total;

				
				} else { return error ;}
			
		
	}else { return error ; }
}; //      Queda queda señores SSSIIIUUUUU 

// Do not edit below this line
module.exports = sumAll;
