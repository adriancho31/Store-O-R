// var nombre = "Adrian";

// let apellido;

// apellido = "      Ortiz         "
// console. log(apellido)

// const
// pi = 3.141619;
// const numero = 3;
// let casado = true;//booleano => verdadero o falso
// let numeros = [1,2,3,4,5,6,7,8,9,0]; //esto es un array

// const producto = {id:1, nombre: "laptop", precio:5000,} //esto es un obejto

// //strings y sus metodos

// const totalNombre = nombre.length
// const incluido = nombre.includes("p");
// const remplazadp = nombre.replace("so","sin");
// const repetido = apellido.repeat(10);
// const sinEspacios = apellido.trim()//eliminar los espacios vacíos
// const sinEspaciosInicio = apellido.trimStart()//eliminar espacios vacios
// const sinEspaciosFinal = apellido.trimEnd() // eliminar los espacios vacios
// console.log(sinEspacios);

//numeros y operaciones/


// let numero1 = prompt("Ingresa el primer número:");
// let numero2 = prompt("Ingresa el segundo número:");

// numero1 = Number(numero1);
// numero2 = Number(numero2);

// if (numero1 === numero2) {
//   console.log("Los números son iguales. Resultado:", numero1 * numero2);
// } else if (numero1 > numero2) {
//   console.log("El primer número es mayor. Resultado:", numero1 - numero2);
// } else {
//   console.log("El segundo número es mayor. Resultado:", numero1 + numero2);
// }



// let num1 = Number(prompt("Ingresa el primer número:"));
// let num2 = Number(prompt("Ingresa el segundo número:"));
// let num3 = Number(prompt("Ingresa el tercer número:"));
// let mayor, posicion;

// if (num1 >= num2 && num1 >= num3) {
//   mayor = num1;
//   posicion = "primer";
// } else if (num2 >= num1 && num2 >= num3) {
//   mayor = num2;
//   posicion = "segundo";
// } else {
//   mayor = num3;
//   posicion = "tercer";
// }

// console.log("El número mayor es:", mayor);
// console.log("Fue el", posicion, "número ingresado.");




// let horasTrabajadas = Number(prompt("Ingresa las horas trabajadas:"));
// let pagoPorHora = Number(prompt("Ingresa el valor de una hora normal:"));

// let horasNormales = Math.min(horasTrabajadas, 40);
// let horasExtras = Math.max(horasTrabajadas - 40, 0);

// let horasDoble = Math.min(horasExtras, 8);
// let horasTriple = Math.max(horasExtras - 8, 0);

// let pagoNormal = horasNormales * pagoPorHora;
// let pagoDoble = horasDoble * (pagoPorHora * 2);
// let pagoTriple = horasTriple * (pagoPorHora * 3);

// let totalPagado = pagoNormal + pagoDoble + pagoTriple;

// console.log("Pago por horas normales:", pagoNormal);
// console.log("Pago por horas al doble:", pagoDoble);
// console.log("Pago por horas al triple:", pagoTriple);
// console.log("Total pagado:", totalPagado);






// let salario = Number(prompt("Ingresa tu salario mensual:"));
// let antiguedad = Number(prompt("Ingresa tu antigüedad en años:"));
// let porcentaje = 0;

// if (antiguedad < 1) {
//   porcentaje = 0.05;
// } else if (antiguedad < 2) {
//   porcentaje = 0.07;
// } else if (antiguedad < 5) {
//   porcentaje = 0.10;
// } else if (antiguedad < 10) {
//   porcentaje = 0.15;
// } else {
//   porcentaje = 0.20;
// }

// let utilidad = salario * porcentaje;
// console.log("Utilidad anual que recibes:", utilidad);





// let valorCompra = Number(prompt("Ingresa el valor de la compra:"));
// let colorBolita = prompt("Ingresa el color de la bolita (blanco, verde, amarilla, azul, roja):").toLowerCase();

// let descuento = 0;

// if (colorBolita === "verde") {
//   descuento = 0.10;
// } else if (colorBolita === "amarilla") {
//   descuento = 0.25;
// } else if (colorBolita === "azul") {
//   descuento = 0.50;
// } else if (colorBolita === "roja") {
//   descuento = 1.00;
// } 

// let totalPagar = valorCompra - (valorCompra * descuento);
// console.log("Color de bolita:", colorBolita);
// console.log("Descuento aplicado:", descuento * 100, "%");
// console.log("Total a pagar:", totalPagar);





// let edad = Number(prompt("Ingresa tu edad:"));
// let antiguedad = Number(prompt("Ingresa tu antigüedad en el empleo (en años):"));

// if (edad >= 60 && antiguedad >= 25) {
//   console.log("Clasificación: Jubilación por antigüedad adulta");
// } else if (edad >= 60 && antiguedad < 25) {
//   console.log("Clasificación: Jubilación por edad");
// } else if (edad < 60 && antiguedad >= 25) {
//   console.log("Clasificación: Jubilación por antigüedad joven");
// } else {
//   console.log("Clasificación: No aplica para ningún tipo de jubilación");
// }





// let cantidad = Number(prompt("¿Cuántas computadoras vas a comprar?"));
// const precio = 1000000;
// let total = cantidad * precio;
// let descuento = 0;

// if (cantidad < 5) {
//   descuento = 0.10;
// } else if (cantidad < 10) {
//   descuento = 0.20;
// } else {
//   descuento = 0.40;
// }

// let valorDescuento = total * descuento;
// let totalPagar = total - valorDescuento;

// console.log("Descuento aplicado:", descuento * 100, "%");
// console.log("Valor del descuento:", valorDescuento);
// console.log("Total a pagar:", totalPagar);





// let respuesta1 = prompt("1. ¿Colón descubrió América? (Sí/No)");
// if (respuesta1 === "Sí") {
//   let respuesta2 = prompt("2. ¿La independencia de Colombia fue en 1810? (Sí/No)");
//   if (respuesta2 === "Sí") {
//     let respuesta3 = prompt("3. ¿Brasil ganó el mundial de 1990? (Sí/No)");
//     if (respuesta3 === "No") {
//       console.log("¡Ganaste! Respondiste correctamente las 3 preguntas.");
//     } else {
//       console.log("Respuesta incorrecta. Fin del juego.");
//     }
//   } else {
//     console.log("Respuesta incorrecta. Fin del juego.");
//   }
// } else {
//   console.log("Respuesta incorrecta. Fin del juego.");
// }




// let capital = Number(prompt("Ingresa tu capital actual:"));
// let nuevoSaldo = 0;
// let prestamo = 0;

// if (capital < 0) {
//   nuevoSaldo = 10000;
//   prestamo = nuevoSaldo - capital;
// } else if (capital >= 0 && capital <= 20000) {
//   nuevoSaldo = 20000;
//   prestamo = nuevoSaldo - capital;
// } else {
//   nuevoSaldo = capital;
// }

// let equipo = 5000;
// let mobiliario = 2000;
// let restante = nuevoSaldo - equipo - mobiliario;
// let insumos = restante / 2;
// let incentivos = restante / 2;

// console.log("Nuevo saldo:", nuevoSaldo);
// console.log("Préstamo solicitado:", prestamo);
// console.log("Equipo de cómputo:", equipo);
// console.log("Mobiliario:", mobiliario);
// console.log("Compra de insumos:", insumos);
// console.log("Incentivos al personal:", incentivos);



// let cedula = prompt("Ingresa la cédula:");
// let nombre = prompt("Ingresa el nombre del trabajador:");
// let HT = Number(prompt("Ingresa las horas trabajadas en la quincena:"));

// let VHO = HT <= 60 ? 7000 : 10000;

// let HO = Math.min(HT, 80);
// let HE = Math.max(HT - 80, 0);

// let VPHO = HO * VHO;

// let HEN = Math.min(HE, 8);
// let HED = Math.max(HE - 8, 0);

// let VPHEN = HEN * (VHO * 1.25);
// let VPHED = HED * (VHO * 1.75);
// let VPHE = VPHEN + VPHED;
// let VTP = VPHO + VPHE;

// console.log("Cédula:", cedula);
// console.log("Nombre:", nombre);
// console.log("HT (Horas Totales):", HT);
// console.log("VHO (Valor Hora Ordinaria):", VHO);
// console.log("HO (Horas Ordinarias):", HO);
// console.log("HE (Horas Extras):", HE);
// console.log("VPHO (Pago Horas Ordinarias):", VPHO);
// console.log("VPHEN (Pago Horas Extras Nocturnas):", VPHEN);
// console.log("VPHED (Pago Horas Extras Dominicales):", VPHED);
// console.log("VPHE (Pago Total Horas Extras):", VPHE);
// console.log("VTP (Valor Total Pagado):", VTP);



// let mes = prompt("Ingresa el nombre de un mes:");
// let numeroMes;

// if (mes === "Enero") {
//   numeroMes = 1;
// } else if (mes === "Febrero") {
//   numeroMes = 2;
// } else if (mes === "Marzo") {
//   numeroMes = 3;
// } else if (mes === "Abril") {
//   numeroMes = 4;
// } else if (mes === "Mayo") {
//   numeroMes = 5;
// } else if (mes === "Junio") {
//   numeroMes = 6;
// } else if (mes === "Julio") {
//   numeroMes = 7;
// } else if (mes === "Agosto") {
//   numeroMes = 8;
// } else if (mes === "Septiembre") {
//   numeroMes = 9;
// } else if (mes === "Octubre") {
//   numeroMes = 10;
// } else if (mes === "Noviembre") {
//   numeroMes = 11;
// } else if (mes === "Diciembre") {
//   numeroMes = 12;
// } else {
//   numeroMes = null;
// }

// if (numeroMes !== null) {
//   console.log("El número del mes es:", numeroMes);
// } else {
//   console.log("Este no es el mes. Escribir el nombre con la primera letra en mayuscula.");
// }









// soy una funcion autoejecutable o IIFI

(()=>{
    console.log('soy una funcion autoejecutable');
})();

//metodos de array : filter,reduce,find,some,ever


//el carrito es un array de objetos 
const carrito=[
    {nombre:"laptop",precio: 5000, marca: "lenovo"},
    {nombre:"Desktop",precio: 15000, marca: "Hp"},
    {nombre:"Todo en uno",precio: 25000, marca: "Samsung"},
    {nombre:"SmartWatch",precio: 4500, marca: "Redmi"},
    {nombre:"SmartTv",precio: 13000, marca: "lg"},
    {nombre:"Tablet",precio: 10000, marca: "lenovo"},
]


for(let i = 0; i < 10; i++){
    console.log(`imprimiendo la variable ${i}`);

}

//metodos de array :foreach. filter, reduce,find,some,ever

carrito.forEach((producto)=>{
    // console.log(`lista de productos ${ JSON.stringify(producto)}`); //el metodo stringy convierte a json
    //console.log(producto);
    //json significa Obejto de notacion javascript
    //un json es un formato de transferencia de datos
});


// el filter me devuelve un array 

const resultado = carrito.filter((producto)=>{
    producto.precio >= 5000
});

    //console.log(resultado);

    // el map, tambien devuelve un dato, permite hacer operaciones

const result = carrito.map((producto)=>{
     return  producto.precio - (producto.producto *0.10); //return significa devolver un dato
     //lo que está debajo del return nunca se ejecutará
     //tampoco funciona fuera de funciones
     //aquí el return está explicito
    
});
// console.log(result);

// el reduce es como una suma , sirve para hacer operaciones matematicas
// también devuelve una array 

const total = carrito.reduce (( total,producto)=> total = total +=producto.precio,0);


// 

// el find es encontrar un elemento 

const encontrado = carrito.find(producto=> producto.nombre == "Tablet");
// console.log(encontrado);


//el some busca algo o similar a la busqueda

const alguno = carrito.some(producto=> producto.nombre == "Ta");
// console.log(alguno);


//Every evalúa si todos los elementos cumplen una condicion

const personas = [
    {nombre: "Adrian", edad: 18},
    {nombre: "Davinson", edad: 18},
    {nombre: "Juangui", edad: 18},
    {nombre: "Checho", edad: 18},
    ]

const mayores = personas.every ((personas)=> personas.edad ==18);
// console.log(mayores);

//el findindex encuentra el indice de un elemento 
const index = personas.findIndex((persona)=>persona.nombre== "Davinson")
// console.log(index);


//los callbacks
// es una funcion que recibe como parametro otra funcion

const estudiantes = ["Mateo","Dilan","Evelin"];


// const nombre = prompt("ingresa tu nombre: ")
const agregarAlumno = (nombre,callback)=>{
    estudiantes.push(nombre)
    callback(nombre);

}

const saludo = (nombre)=>{
    // console.log(`Bienvenid@ ${nombre} a la clase mi papacho`);
}

//agregarAlumno(nombre,saludo);



//temporizadores en javascript, tambien son funciones asincronas
//setTimeout ejecuta un codigo cuando se acaba un tiempo

setTimeout( ()=>{
    console.log(`me ejecuto despues de determinado tiempo`);
    
},2000)//dos mil milisengundos

const intervalo = setInterval ( ()=>{
    console.log(`me ejecuto cada cierto tiempo`);

})


//crelarInterval, clearSetTimeout

clearInterval(intervalo);


// const paises = ["colombia","España","Usa","Mexico"];

// const promesa = (()=>{
//     return new Promise((resolve,reject)=>{
//         const encontrado = paises.find(pais => pais == "Colombia");
//         setTimeout( ()=>{
//             if(encontrado){
//                 resolve
//             }
//         })

//     }
















//El FETCH
//Es tambien una promesa
//Es una api nueva nativa de javascript para consumir apis

const url = 'https://jsonplaceholder.typicode.com/posts';

const getData = ()=> {
    fetch(url)
   .then(response=>response.json())
   .then(error=>console.log(result))
    .catch(error=>console.error(error))
    }

    getData();

    //las funciones asincronas que hemos visto son:


    //las promesas entre este el fecth
    //los temporizadores como el setTimeout,setInterval y ahora vamos a ver la asinc-await

    async function getDatos(){
        const response = await fetch(url);
        const result = response.json();
        console.log(result);
    }