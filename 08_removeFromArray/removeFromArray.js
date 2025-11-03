const removeFromArray = function(array ,...args) {
    
    //let unico = 0; esta variable lo haria mas legible pero meeh
    const unicos = [];
    let coincidio = false;

    for (let i = 0; i < array.length ; i++ ){ // i representa el indice del primer array
        for(let e = 0; e < args.length; e++){ // e representa el indice del segundo array
            if(array[i] === args[e]){
                coincidio = true;
                break;
            }

        }// FIN DE FOR 2

        if(coincidio == false){
            unicos.push(array[i]);

        }else{
            coincidio = false;
        
        }


    }// FIN DE FOR 1

    return(unicos);




};

// Do not edit below this line
module.exports = removeFromArray;
// oooh yeeaaa