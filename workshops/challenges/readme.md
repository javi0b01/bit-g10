# DESAFÍOS

Cada uno de los desafíos debe ser implementado con funciones

1. Imprimir por consola los números del 1 al 100
2. Guardar los nombres de 10 paises e imprimir uno a uno por consola
3. Pedir al usuario que adivine un número entre 1 y 5, dar máximo 2 intentos
- Si el usuario adivina el número mostrar "Ganaste! adivinaste el número secreto"
- Si el usuario pierde mostrar "Perdiste, tuviste 2 intentos".
4. Crear una función
- Recibir por parámetros nombre y apellido
- Guardar los parámetros recibidos en un objeto
- Imprimir nombre completo usando el objeto
- Ejemplo de salida: Nombre completo: Pepita Pérez
5. Crear una función que reciba del usuario nombre y apellido
- Imprimir en consola un objeto con los datos recibidos
- Retornar un arreglo con los valores recibidos
6. Crear 4 funciones, cada una debe realizar una operación aritmética básica
- (suma, resta, multiplicación y división)
- Cada función debe recibir 2 números y retornar el resultado según corresponda
- Solicitar al usuario que ingrese 2 números enteros
- Mostrarle al usuario el resultado de cada operación
- Ej Entrada: 10 2
- Ej Salida: 10 + 2 = 12
7. Pregunte al usuario si desea continuar
- Si el usuario ingresa exantamente "NO" mostrar "adiós" y terminar el programa
- En caso contrario mostrar "Hola 'n' veces"
8. Solicitar del usuario una frase
- Mostrar cuantas vocales tiene la frase ingresada
9. Solicitar del usuario usuario y contraseña
- Guardar datos de entrada en un objeto
- Imprima por consola los datos ingresados usando el spread operator

---

- Crear un proyecto de Angular
- Reiniciar la plantilla
- Crear 3 componentes (Páginas: inicio, desafíos, página no encontrada)
- Configurar la rutas
- Crear una navegación

* Desafíos (componente)
- Crear un componente padre
- Crear un componente hijo
- Implementar el componente "padre" dentro de "desafíos"
- Implementar el componente "hijo" dentro de "padre"

* Hijo (componente)
  - Mostrar un número cero
  - Mostrar dos botones, uno para incrementar y otro para decrementar
  - El número debe ser leído de un valor entregado por el "padre"
  - Cada botón debe ejecutar su propio método

* Padre (componente)
  - Pasar un valor númerico al componente "hijo", debe ser leído de una propiedad

* Hijo (componente)
  - Cada vez que se ejecute un método (incremento, decremento) emitir evento al "padre"

* Padre (componente)
  - Escuchar el evento del "hijo" y recibir el valor emitido
  - Calcular y mostrar el doble del valor emitido

* UI
  - Cambiar el color de fondo según el valor del contador
  - Cuando el valor del contador sea cero mostrar fondo neutro
  - Cuando el valor del contador sea negativo mostrar fondo en tono rojo
  - Cuando el valor del contador sea positivo mostrar fondo en tono verde
