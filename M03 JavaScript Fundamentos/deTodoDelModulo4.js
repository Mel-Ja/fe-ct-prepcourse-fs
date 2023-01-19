function mayorYMenor(num){
    if(num > 5 && num < 10 && num % 2 === 0){
        console.log(true);
    }else{
        console.log(false);
    }
}

//mayorYMenor(6);

function operadorOr(str){
    if(str === 'Henry' || str.length < 4){
        console.log(true);
    }else{
        console.log(false);
    }
}
//operadorOr('Melany');
//operadorOr('Henry');
//operadorOr('Key');

function negacion(permiso){
    if(permiso !== true){
        console.log('Tiene permiso');
    }else{
        console.log('No tiene permiso');
    }
}
//negacion(false);

function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3){
        console.log(true);
    }else{
        console.log(false);
    }
}
//condicionCompleja(3);


var suma = 0
//while (suma < 3){
//    suma = suma + 1;
//    console.log(suma);
//}

for(let i =0; i<10; i++){
    if(i % 2 === 0){
        continue;
    }
//    console.log(i);
}

var suma = 0;
while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };