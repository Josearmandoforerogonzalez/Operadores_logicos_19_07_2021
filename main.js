// let vasoPlastico = true;
// let cafeSinAzucar = false;
// console.log(vasoPlastico && cafeSinAzucar);




// let resultado = 5>3;
// let resultado2 = 5>=5;
// console.log(`Valor de la variable resultado:`,resultado,` y valor de la variable resultado2:`,resultado2);
// console.log(resultado,` && `,resultado2,` = `,(resultado && resultado2));

let A = 0;
let B = 0;

console.log(`%c         OPERADORES LOGICOS                `,' border-bottom: .10em solid #aaa; padding:.1em; font-size: 2em;');

console.log(`%cOperadores AND`,`background: #ddeeff;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%c1. A: ${!(!A)} (OPERADOR AND) B: ${!B} A && B = ${!(!A) && !B}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%c2. A: ${A} (OPERADOR AND) B: ${B} A && B = ${A && B}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%c3. A: ${!A} (OPERADOR AND) B: ${!B} A && B = ${!A && !B}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%c4. A:${!A} (OPERADOR AND) B:${B} A && B = ${!A && B}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%c                                                     `,' border-bottom: .10em solid #aaa; padding:.1em; font-size: 2em;');

console.log(`%cOperadores OR`,`background: #ddeeff;font-family: Arial, Helvetica, sans-serif; font-weight: bold;`);
console.log(`%c1. A: ${!(!A)} (OPERADOR OR) B: ${!B} A || B = ${!(!A) || !B}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%c2. A: ${A} (OPERADOR OR) B: ${B} A || B = ${A || B}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%c3. A: ${!A} (OPERADOR OR) B: ${!B} A || B = ${!A || !B}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%c4. A: ${!A} (OPERADOR OR) B: ${B} A || B = ${!A || B}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%cA: ${A} B: ${B} Datos verdaderos`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;`);
console.log(`%c                                                     `,' border-bottom: .10em solid #aaa; padding:.1em; font-size: 2em;border: 1px solid #aaa;');

console.log(`%cOperadores NOT`,`background: #ddeeff;font-family: Arial, Helvetica, sans-serif; font-weight: bold;`);
console.log(`%c 1. A: ${A} (OPERADOR NOT) !A ${!A}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);
console.log(`%c 2. B: ${B} (OPERADOR NOT) !B ${!B}`,`background: #dfd;font-family: Arial, Helvetica, sans-serif; font-weight: bold;border: 1px solid #aaa;`);









// //OPERADORES AND
// console.log(`%cOperadores AND`,`background: #ddeeff;font-family: Arial, Helvetica, sans-serif; font-weight: bold;`);
// console.log(`%c1. A:`,!(!A),` (OPERADOR AND) B:`,!B,` A && B =`,!(!A) && !B),`background: #ddeeff;font-family: Arial, Helvetica, sans-serif; font-weight: bold;`;
// console.log(`2. A:`,A,` (OPERADOR AND) B:`,B,` A && B =`,A && B);
// console.log(`3. A:`,!A,` (OPERADOR AND) B:`,!B,` A && B =`,!A && !B);
// console.log(`4. A:`,!A,` (OPERADOR AND) B:`,B,` A && B =`,!A && B);
// console.log(`A:`,A,`B:`,B,`Datos verdaderos`);

// // console.log(`A:`,A,` (OPERADOR NOT) !A`,!A);
// // console.log(`B:`,B,` (OPERADOR NOT) !B`,!B);
// // OPERADORES OR
// console.log(`Operadores OR`);
// console.log(`1. A:`,!(!A),` (OPERADOR OR) B:`,!B,` A || B =`,!(!A) || !B);
// console.log(`2. A:`,A,` (OPERADOR OR)) B:`,B,` A || B =`,A || B);
// console.log(`3. A:`,!A,` (OPERADOR OR)) B:`,!B,` A || B =`,!A || !B);
// console.log(`4. A:`,!A,` (OPERADOR OR))) B:`,B,` A || B =`,!A || B);
// console.log(`A:`,A,`B:`,B,`Datos verdaderos`);


// //OPERADORES NOT
// console.log(`Operadores NOT`);
// console.log(`1. A:`,!(!A),` (OPERADOR OR)) !A =`,!A);
// console.log(`2. B (OPERADOR OR)) B:`,B,` !B =`, !B);





// Operador AND (&&)
let tablaAND = document.querySelector("#myTablaAND");
tablaAND.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) && !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>
    <tr>
        <td>${  !A}</td>
        <td>${!B}</td>
        <td>${!A && !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A && B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
// Operador OR (||)
let tablaOR = document.querySelector("#myTablaOR");
tablaOR.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) || !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A || B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${!B}</td>
        <td>${!A || !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A || B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
// Operador NOT (!)
let tablaNOT = document.querySelector("#myTablaNOT");
tablaNOT.innerHTML = `
    <tr>
        <td>${A}</td>
        <td></td>
        <td>${!A}</td>
    </tr>
    <tr>
        <td></td>
        <td>${B}</td>
        <td>${!B}</td>
    </tr>
`;


