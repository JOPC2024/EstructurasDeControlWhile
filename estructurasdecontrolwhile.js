function edcw(numEjer)
{
    //Ejercicio 3 : Estructuras de control: WHILE.
    //Deberas realizar los ejercicios anexados abajo:
    if(Number.isInteger(numEjer))
    {
        //1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
        if(numEjer==1)
        {
            uno();
        }
        //2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
        else if(numEjer==2)
        {
            dos();
        }
        //3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
        else if(numEjer==3)
        {
            tres();
        }
        //4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
        else if(numEjer==4)
        {
            cuatro();
        }
        //5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
        else if(numEjer==5)
        {
            cinco();
        }
    }
    else
    {
        alert('ejercicio no encontrado')
    }

    function uno()
    {
        let numero = prompt('Favor de introducir un numero cualquiera:');
        let con = 1;
        let arreglo = [];
        numero = parseInt(numero);
        if(Number.isInteger(numero))
        {
            while(con<=numero)
            {
                if(con%5 == 0)
                {
                    arreglo.push(con);
                    console.log(con);
                }
                con++;
            }
            alert(arreglo);
        }
        else
        {
            alert('el dato que introdujo no es un numero, vuelve a intentarlo');
        }
    }
    function dos()
    {
        let n1 = prompt('Favor de introducir un numero en el rango de 1 a 50:');
        let n2 = prompt('introduce un segundo numero en el rango de 1 a 50:');
        let con = 1;
        let arreglo = [];
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        if(Number.isInteger(n1) && Number.isInteger(n2))
        {
            if((n1 >= 1 && n1 <= 50) && (n2 >= 1 && n2 <= 50))
            {
                while(con<=50)
                {
                    if(con == n1 || con == n2)
                    {
                        arreglo.push(con+' Lotería');
                        console.log(con+' Lotería');
                    }
                    else
                    {
                        arreglo.push(con);
                        console.log(con);
                    }
                    con++;
                }
            }
            else
            {
                alert('uno de los numeros que introdujo no esta en el rango de 1 a 50, favor de volver a intentar');
            }
            alert(arreglo);
        }
        else
        {
            alert('uno de los datos que introdujiste no es un numero, favor de volver a intentar');
        }
    }
    function tres()
    {
        let numeros = 1;
        let arreglo=[];
        while(numeros != 0)
        {
            numeros=prompt('Favor de introducir un numero cualquiera\nuna vez que alla finalizado de colocar numeros\npuede salir del programa introduciendo el numero 0');
            numeros=parseInt(numeros);
            if(Number.isInteger(numeros))
            {
                arreglo.push(numeros);
            }
            else
            {
                alert('el dato introducido no es un numero, vuelve a intentarlo');
            }
        }
        alert(arreglo);
        console.log(arreglo);

    }
    function cuatro()
    {
        let cadena = 'a';
        let arreglo = [];
        let nuevaCadena = '';
        const pattern = new RegExp('^[A-Z]+$', 'i');
        while(cadena.length !== 0)
        {
            cadena = prompt('Favor de introducir una letra o palabra cualquiera\nuna vez que alla finalizado de colocar una letra o palabra cualquiera\npuede salir del programa dejando el campo vacio');
            if(pattern.test(cadena))
            {
                arreglo.push(cadena);
            }
        }
        arreglo.forEach(function(palabra)
        {
            nuevaCadena+=palabra+' ';
        });
        alert(nuevaCadena);
    }
    function cinco()
    {
        let semana = [
        {dia:'lunes',mensaje:'Prefiero arrepentirme de las cosas que he hecho que de las cosas que no he hecho'},
        {dia:'martes',mensaje:'Sal de tu zona de confort. Solo puedes crecer si estás dispuesto a sentirte incómodo cuando intentas algo nuevo'},
        {dia:'miercoles',mensaje:'La energía y la persistencia conquistan todas las cosas'},
        {dia:'jueves',mensaje:'La acción es la clave fundamental de todo éxito'},
        {dia:'viernes',mensaje:'Puedes desperdiciar tu vida trazando líneas. O puedes vivir tu vida cruzándolas'},
        {dia:'sabado',mensaje:'Hecho es mejor que perfecto.'},
        {dia:'domingo',mensaje:'Ve a descansar'}];
        let diaSemana = '';
        while(diaSemana != 'domingo')
        {
            diaSemana = prompt('Favor de introducir un dia de la semana');
            diaSemana = diaSemana.toLocaleLowerCase();
            semana.forEach(function(diaSem)
            {
                if(diaSem.dia == diaSemana)
                {
                    alert(diaSem.mensaje);
                }
            });
        }

    }
}