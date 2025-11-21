const palindromes = function (cadena) {

	let indiceInverso = cadena.length - 1;
	let esPalindromo;
    let asc; // ascendente  
    let des; // descendente 

    // paso inicial y fundamental para que funcione el algoritmo, volver toda la cadena a minuscula 
    cadena = cadena.toLowerCase();
    
	for(let i = 0 ; i < cadena.length ; i++){
    asc = cadena.codePointAt(i) ;
    des = cadena.codePointAt(indiceInverso) ;

   if( asc >= 97 && asc <= 122 || asc >= 48 && asc <= 57 ){
        if( des >= 97 && des <= 122 || des >= 48 && des <= 57 ){

      if (cadena[i] !== cadena[indiceInverso] ){ // este if termina el bucle si la comparacion es falsa
			esPalindromo = false; // devuelve que false si aparece una         
            return esPalindromo;

            }else{ 
              
              --indiceInverso;
              if(indiceInverso < 0)
                 indiceInverso = 0;
             
                 continue;
             }
				
		}else { // else del 2do if de acceso o de la 2da variable
			
				
        --indiceInverso; 
        --i;
		continue;		
      }
}else{ // nos dice que asc no es de los grupos   
    if(des >= 97 && des <= 122 || des >= 48 && des <= 57){ // es el 2do indice de alguno de los 2 grupos?
                continue; // recorre el indice asc hasta encontrar un caracter valido y porque des es un caracter valido
			}else{ // si llegamos hasta aqui es porque ambas variables son invalidas entonces recorremos el indice en ambas variables o direcciones
        --des;
        continue;
      }
        
            }
			  
    }
      if(indiceInverso == 0 ) { 
			esPalindromo = true;    // eso espero porque si indice inverso llega antes a 0 que i al ultimo indice estara mal, al probarlo lo lo sabremos xDD
			return esPalindromo;
      }
       
 
};  //  SALE PUES.

// Do not edit below this line
module.exports = palindromes;
