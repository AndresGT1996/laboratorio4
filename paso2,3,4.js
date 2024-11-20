const prompt = require("prompt-sync")({sigint:true});
// • Paso 2. Función para realizar operaciones 

function realizarOperacion (a,b,operacion){

    switch (operacion) {
        case 1:
             let suma = a + b;
            console.log("El resultado de la suma es:" + suma);
            break;

            case 2:
                let resta = a - b;
                console.log("El resultado de la resta es: " + resta);
                break;

                case 3:
                    if ( b=== 0) {
                        console.log("No se puede dividir por el numero 0")
                        
                    }
                    else { 
                        let division = a / b;
                    console.log("el resultado de la division es: " + division);
                    }
                    break;
                    

                    case 4:
                       let multiplicacion = a * b;
                        console.log("el resultado de la multiplicacion es: " + multiplicacion);
                        break;
    
        default:
            console.log("Ingrese una opción valida");
            break;
    }
}

while (contador = true) {

    console.log("Calculadora")
console.log("1.Suma")
console.log("2.Resta")
console.log("3.Division")
console.log("4.Multiplicacion")

let operacion = parseFloat(prompt("Ingrese la operacion que desea realizar: "));
let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingresa el segundo numero: "));

realizarOperacion(num1,num2,operacion);

let salirWhile = prompt("Desea continuar realizando otra operación? (Si/No): ")
if (salirWhile === "no" || salirWhile === "No") {
    console.log("Ha salido de la calculadora");
    break;
}

}



