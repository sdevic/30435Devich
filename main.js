
//solo a fines de la practica voy a vender dos productos televisor y dvd,solo voy apermitir que compre un producto por vez(por que cada vez que  engancho a programar no paro y tengo otros temas que atender :) cobro con tarjeta(dos tipos) y efectivo hago varios tipos de descuento.
let tipoDePago ;
let tarjeta  ;
let descuento= parseInt ;
let precio= parseInt;
let productos;
let total = parseInt;
let valorDescuento = parseInt;

function prodcuto(){
    productos=prompt("ingrese 1 para televisor o 2 para dvd");
    if (productos == 1){
        precio = 50000;
        alert("ha seleccionado  televisor su precio es $" + precio);
        return precio;
    }else if(productos == 2){
        precio = 30000;
        alert("ha seleccionado  dvd su precio es $" + precio);
        return precio;
    }else{
        alert("Elnumero ingresado es incorrecto");
        prodcuto();
    }
   
     

}

 


function ingreseTipoDePago(){
    tipoDePago = prompt("Ingrese tipo de pago (Efectivo o Tarjeta)").toLocaleLowerCase();
    if(tipoDePago == "tarjeta"){
        ingreseTarjeta();
        return tipoDePago;
        return tarjeta;
    }else if(tipoDePago == "efectivo" ){
    return tipoDePago;
    }else{
        alert("a ingresado un tipo de pago incorrecto");
    }
}


function ingreseTarjeta(){
    tarjeta = prompt("Ingrese tarjeta (Visa o Mastercard)").toLowerCase();
    return tarjeta;
}
function ahorro(){
    
    switch(tipoDePago){

        case "tarjeta":
            if (tarjeta == "visa"){
                descuento = 10;
                alert("Ha seleccionado Visa y tiene un descuento del %" + descuento);
                return descuento;
            }else if(tarjeta == "mastercard"){
                descuento =  5;
                alert("Ha seleccionado Mastercard y tiene un descuento del %" + descuento);
                return descuento;
               }else{
                alert("la tarjeta ingresada es incorrecta");
                ingreseTarjeta();
               
            }
            break;

        case "efectivo":
            descuento =  20;
            alert("Ha seleccionado Efectivo y tiene un descuento del %" + descuento);
            return descuento;
            break;
        default:
            alert("el tipo de pago es incorrecto") ;
            ingreseTipoDePago();
            break      
    }
    

   
}

function precioFinal(){
    alert("precio $" +precio);
     valorDescuento =(precio* descuento)/100;
     alert("$"+ valorDescuento);
     total= precio - valorDescuento;
     alert(total);

}


prodcuto();
ingreseTipoDePago();
ahorro();
precioFinal();


