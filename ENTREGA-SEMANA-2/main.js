/*
//1. Escribe una función que reciba un parámetro y lo imprima en consola.

function repeat() {

    const textParam = prompt('ingrese un parametro', 'escibe algo');

    console.log(`el parmetro es: ${ textParam }`);
}

repeat()
*/
//2. Escribe una función que reciba dos parámetros, los sume e imprima en consola el resultado de la operación.
/*
function sums() {

    let numb1 = parseInt(prompt('Ingrese un numero'));
    let numb2 = parseInt(prompt('Ingrese otro numero '));

    const sum = (numb1 + numb2)

    console.log(`el resultado de la suma es ${ sum }`)
}

sums()

*/
// 3. Escribe una función que reciba dos parámetros, los reste e imprima en consola el resultado de la operación.
/*
function subtraction() {

    let numb1 = parseInt(prompt('Ingrese un numero'));
    let numb2 = parseInt(prompt('Ingrese otro numero '));

    const subttrac = (numb1 - numb2)

    console.log(`el resultado de la resta es ${ subttrac }`)
}

subtraction()
*/

// 4. Escribe una función que reciba dos parámetros, los multiplique e imprima en consola el resultado de la operación.
/*
function multiplication() {

    let numb1 = parseInt(prompt('Ingrese un numero'));
    let numb2 = parseInt(prompt('Ingrese otro numero '));

    const multip = (numb1 * numb2)

    console.log(`el resultado de la multiplicacion es ${ multip }`)
}

multiplication()
*/

//Escribe una función que reciba dos parámetros, los divida e imprima en consola el resultado de la operación. 
/*
function division() {

    const numb1 = parseInt(prompt('Ingrese un numero'));

    const numb2 = parseInt(prompt('Ingrese otro numero '));
    if (numb2 == 0) {
        alert('no pudes dividir entre 0');
    }
    const divs = (numb1 / numb2)

    console.log(`el resultado de la division es ${ divs }`)
}

division()
*/

// 5. Escribe una función que reciba el radio de un círculo como parámetro, calcule el área del círculo e imprima en consola.
/*
function calculateArea() {

    const pi = 3.1416;

    const raduis = parseFloat(prompt('Ingrese el valor del radio '));
    const area = (pi * raduis * raduis);

    console.log(`el area del circulo es ${area} (metros cuadrados)`)
}

calculateArea()
*/

//6.Escribe una función que reciba como parámetro un valor en metros e imprima en consola su equivalente en kilómetros, con máximo dos decimales.
/*
function convert() {

    const meters = parseFloat(prompt('Ingrese el valor en metros '));

    console.log(`el valoen kilometros es ${(meters/1000).toFixed(2)}`)

}
convert()
*/
//Escribe una función que reciba como parámetro un valor en grados Celsius e imprima en consola su equivalente en grados Farenheit, con máximo dos decimales.
/*
function degrees() {

    const celsius = parseFloat(prompt('Ingrese el valor en metros '));

    console.log(`el valo en grados Centigrados es ${((celsius*(9/5)+32)).toFixed(2)}`)

}
degrees()
*/