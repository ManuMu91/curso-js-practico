## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
    R/Es un espacio reservado en memoria, que sirve para dar un valor.
    Puede ser cualquier tipo de dato.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
    R/Declarar en pocas palabras es darle un nombre a la variable y reservar 
    un espacio en memoria. Y Inicializar es cuando declaramos la variable y 
    en esa misma linea le damos un valor a esa misma variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
    R/bueno en que en la suma se hace la operacion de sumar y, en concatenar 
    strings podemos unir palabras o frases utilizando el operador de suma. 
    ejemplo:
    suma 4 + 4 = 8   Concatenar  "Hola, " + "Platzi" = Hola Platzi    

- ¿Cuál operador me permite sumar o concatenar?
    R/ El operador de suma (+)

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre  =  String 
- Apellido  =  String
- Nombre de usuario en Platzi  =  String
- Edad  = Number
- Correo electrónico  =  String
- Mayor de edad  =  Boolean
- Dinero ahorrado  =  Number
- Deudas  =  number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

    R/  var nombre = "Manuel";
        var apellido = "Niño";
        var nombreUsuarioPlatzi = "Victor Manuel";
        var edad = 31;
        var correoElec = manuel@gmail.com;
        var mayorDeEdad = true;
        var dineroAhorrado = 500.000;
        var deudas = 300.000;

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

    R/  nombreCompleto = nombre + " " + apellido;
        dineroReal = dineroAhorrado - deudas;

        console.log(nombreCompleto);
        console.log(dineroReal);


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
    R/  Es un bloque de codigo en el cual se resuelve un problema y se puede reutilizar,Y llamarse o ejecutarse mas adelante. Existe la Funcion Declarativa y la            
    Expresativa                                                           

- ¿Cuándo me sirve usar una función en mi código?
    R/Cuando necesitamos dar una serie de instrucciones o calcular valores, de los cuales necesito retornar o como resultado otro valor.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
    R/Que los PARAMETROS son los nombres que aparecen en la definicion de la funcion dentro de parentesis ().Y los ARGUMENTOS son los valores que le pasamos al llamar o ejecutar la funcion. 

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + " " + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
```js
R/
function presentacion(completeName, nickName)
    {
        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName + ".");
    }
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
    R/Es la forma en que ejecutamos cierto bloque de codigo dependiendo de la condicion que hayamos colocado

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    R/existe la condicional if, else y else if
    y tambien existe la switch que se divide en casos.
    Y la diferencia es que las condiciones en switch deben ser iguales a casos o algo especifico. Y normalmente un if se utiliza para comprobar si es true o false, mientras que Switch compara un valor con cierta cantidad de valores.Tambien en Switch se compara todos los Cases con la misma variable, y el If nos permite hacer validaciones o comparaciones distintas.

- ¿Puedo combinar funciones y condicionales?
    R/ Si se pueden combinar

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
```js
R/
const tipoDeSuscripcion = "Basic"

if (tipoDeSuscripcion === "Basic")
    {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if(tipoDeSuscripcion === "Expert")
        {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }
    else if (tipoDeSuscripcion === "ExpertPlus")
        {
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }
    else 
        {
            console.log("Solo puedes tomar los cursos gratis");
        }
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
    R/
```js
    
const suscripcion = "Basic"

function conocerTipoSuscripcion(suscripcion){

if (suscripcion === "Basic")
    {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
if(suscripcion === "Expert")
        {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            return;
        }
if (suscripcion === "ExpertPlus")
        {
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            return;
        }
if (suscripcion === "free") 
        {
            console.log("Solo puedes tomar los cursos gratis");
            return;
        }
console.warn("Ese tipo de suscripcion no existe")
}

```

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objeto y un solo condicional. 😏

    R/
```js
const tiposDeSuscripciones = 
    {
        Free: "Solo puedes tomar los cursos gratis",
        Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
        Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
        ExpertPlus: "Tu y alguien mas pueden tomar TODOS los cursos de Platzi"
    }

function conocerTipoSuscripcion1(suscripcion)
    {
        if(tiposDeSuscripciones[suscripcion])
            {
                console.log(tiposDeSuscripciones[suscripcion]);
                return;
            }
        console.warn("Ese tipo de suscripcion no existe");
    }
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
    R/Es una estructura utilizada para hacer tareas repetitivas con respecto a una condicion, la cual se sequira repitiendo hasta que la condicion de false.

- ¿Qué tipos de ciclos existen en JavaScript?
    R/for y while

- ¿Qué es un ciclo infinito y por qué es un problema?
    R/Un ciclo infinito es cuando no colocamos una condicion para que finalice el ciclo, y este sigue infinitamente probocando que se bloque nuestra computadora.

- ¿Puedo mezclar ciclos y condicionales?
    R/ si

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
```
    R/
```js
    var number = 0

    while(number < 5)
        {
            console.log("El valor de number es: " + number++);
        }
```
```
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
    R/
```js
    var number = 10

while(number >= 2)
    {
        console.log("El valor de number es: " + number--);
    }
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

    R/
```js    
var suma = prompt("Cuanto es 2 + 2");

while(suma != 4)
    {
        suma = prompt("Ingrese un valor correcto");
    }
console.log("Muy bien felicitaciones");
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
    R/Es una estructura que permite almacenar cualquier cantidad de datos localizandolos o organizandolos por indices y separados por comas.

- ¿Qué es un objeto?
    R/Son estructuras de datos que permite almacenar valores dividiendolos en propiedades y valores y se debe colocar dentro de llaves ({}).

- ¿Cuándo es mejor usar objetos o arrays?
    R/Los arrays se deben utilizar cuando tenemos datos simples o con solo un valor. A diferencia con los objetos que se utilizan cuando hay distintos objetos y propiedades con distintos valores.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    R/si se pueden mezclar colocar un array dentro de un bojeto como facilmente un objeto dentro de una arrary. Ejemplo:
    ```js
    var array = [1, "Hola", {nombre: pedro, apellido: saenz}]

    let obj = 
        {
            nombre: pedro,
            apellido: saenz,
            tel: [2675986, 3112637484]
        }

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
    R/
```js
var motos = ["MT-09", "Z-1000", "R-1", "BMW RR-1000", "BMW-1200R"]

function moto1(motos)
    {
        console.log(motos[0]);
    }
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
    R/
```js    
    var motos2 = ["MT-09", "Z-1000", "R-1", "BMW RR-1000", "BMW-1200R"]

    motos2.forEach(function(moto)
                   {
                       console.log(moto)
                   });
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
    R/ 
```js
var motos = 
    {
        nombre:"MT-09",
        marca: "Yamaha", 
        costo: 44900000      
    }

    function imprimirCadaElemento(motos)
        {
            const arMotos = Object.values(motos);
            for (let i = 0; i < arMotos.length; i++)
                {
                    console.log(arMotos[i]);
                }
        };
```