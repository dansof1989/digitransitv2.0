// Accesibilidad
// Accesibilidad
// Accesibilidad
document.addEventListener("DOMContentLoaded", function () {     // Granatiza que el codigo js se ejecute al cargar la pagina
    const accesibilidadIcon = document.getElementById("accesibilidad-icon");    // toma el elemento con identificar accesilidad-icon
    const accesibilidadMenu = document.getElementById("accesibilidad-menu");    // toma el elemento con identificador accesibilidad-menu
    let altoContraste = false;     // Variable booleana para manejar el alto contraste
    let fontSize = 100; // Variable booleana para contorlar el tamaño del texto

    accesibilidadIcon.addEventListener("click", function () { // VEscucha el evento de click en el elmento con identificador accesibilidadMenu
        accesibilidadMenu.style.display = accesibilidadMenu.style.display === "block" ? "none" : "block";
    });

    document.getElementById("contraste-alto").addEventListener("click", function () {
        toggleAltoContraste(); // Escucha el click en el elemnto con identificador AltoContraste
    });

    document.getElementById("aumentar-texto").addEventListener("click", function () {
        aumentarTexto();
    });

    document.getElementById("disminuir-texto").addEventListener("click", function () {
        disminuirTexto();
    });

    document.getElementById("teclado-en-pantalla").addEventListener("click", function () {
        activarTecladoEnPantalla();
    });

    // Activa y Desactiva el Alto contraste
    function toggleAltoContraste() {
        altoContraste = !altoContraste;
        if (altoContraste) {
            // Estilo del alto contraste - color negro en el fondo y la letra blanca
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#fff";

            // cambian el fondo del main o el contenido principal para no alterar el header ni el footer
            const mainElement = document.getElementById("main"); 
            if (mainElement) {
                mainElement.style.backgroundColor = "#000000"; 
            }
        } else {
            // Para restaurar los estilos normal al querer desactivar el alto contraste
            document.body.style.backgroundColor = ""; // se deja en blanco para restaurar al anterior
            document.body.style.color = "";

            
            const mainElement = document.getElementById("main"); // 
            if (mainElement) {
                mainElement.style.backgroundColor = ""; 
            }
        }
    }

    // funcion para ajustar el tamaño del texto
    function aumentarTexto() { // aumenta el texto en +15%
        fontSize += 15;
        document.body.style.fontSize = fontSize + "%"; 
    }

    // funcuion para disminuir el tamaño del texto em -15%
    function disminuirTexto() {
        fontSize -= 15;
        document.body.style.fontSize = fontSize + "%";
    }

    
    function activarTecladoEnPantalla() {

    }
});


// Funcion para validar la edad en en formulario de digitacion de comparendos 
function validarEdad(input) { // toma el dato del input 
    const edad = parseInt(input.value, 10);
    if (isNaN(edad) || edad <= 16) { // indica que no puede ser menor de 16
        alert("La edad minima para un conductor en Colombia es 16 años."); // mensaje en pantalla si se digita un valor de menos de 16
        input.value = ""; // limpia el campo si se digita mal y sale el error
    }
}


// funcion para validar la correcta digitacion de los caracteres en el numero del comaprendo
function validateComparendo(inputElement) { // nombre de la funcion
    var inputValue = inputElement.value; // Variable 

    // variable la cual indica que deben ser 8 numeros 9 - 5 veces el 0 y los otros 7 caracteres numericos pueden ser indiferentes
    var regex = /^9{8}0{5}\d{7}$/;

    if (regex.test(inputValue)) { // El if para ver si el numero del comparendo es valido 
        
        inputElement.style.borderColor = 'green'; // muestra la caja del texto color verde 
    } else { // Sino cumple con los parametros, mostrara el mensaje en pantalla
        
        alert('El número de comparendo no el estandar. Debe comenzar con 8 dígitos "9", seguido de 5 dígitos "0" y luego los 7 dígitos que diferencian el comparendo.');
        inputElement.style.borderColor = 'red';
    }
}

//7Funciones de botones y de muestra de mensajes
//7Funciones de botones y de muestra de mensajes
//7Funciones de botones y de muestra de mensajes
document.addEventListener('DOMContentLoaded', function () { //Llamado a la funcion del coumento para que loc cargue en la pagina
    var botonGenerar = document.getElementById('generarPlanos'); // se obtiene la referencia del boton con id generarPklanos

    botonGenerar.addEventListener('click', function () { //evento de click del boton
        alert('Archivos Planos Generados con Exito'); //muestra ventana con mensaje 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var botonValidar = document.getElementById('validarPlanos');

    botonValidar.addEventListener('click', function () {
        alert('Archivos Validados con Exito');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var enviarInconsistencias = document.getElementById('sendInconsistencias');

    enviarInconsistencias.addEventListener('click', function () {
        alert('Inconsistencias Enviadas con Exito');
    });
});

//Funciones de carga de archivos depuracion
//Funciones de carga de archivos depuracion
//Funciones de carga de archivos depuracion
//Funciones de carga de archivos depuracion

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fileInput1').addEventListener('change', function () { //carga de archivo con el identifcador campo1
        var fileName = this.files[0].name;
        document.getElementById('campo1').value = fileName;
    });

    document.getElementById('fileInput2').addEventListener('change', function () {
        var fileName = this.files[0].name;
        document.getElementById('campo2').value = fileName;
    });

    document.getElementById('fileInput3').addEventListener('change', function () {
        var fileName = this.files[0].name;
        document.getElementById('campo3').value = fileName;
    });
});


//Funciones botones depuracion
//Funciones botones depuracion
//Funciones botones depuracion
//Funciones botones depuracion
//Funciones botones depuracion

document.addEventListener('DOMContentLoaded', function () {
    var enviarInconsistencias = document.getElementById('proceso1');

    enviarInconsistencias.addEventListener('click', function () {
        alert('Proceso Completado con Exito');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var enviarInconsistencias = document.getElementById('proceso2');

    enviarInconsistencias.addEventListener('click', function () {
        alert('Descarga de Arxhico Exitosa');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var enviarInconsistencias = document.getElementById('generarplanocorrecion');

    enviarInconsistencias.addEventListener('click', function () {
        alert('Generacion del Plano de Correcion Exitosa');
    });
});



//Funciones botones gradado y edicion de usuarios
//Funciones botones gradado y edicion de usuarios
//Funciones botones gradado y edicion de usuarios
//Funciones botones gradado y edicion de usuarios

document.addEventListener("DOMContentLoaded", function() {
    const editButtons = document.querySelectorAll(".edit-button"); //constantes para boton editar el cual edita algun campo
    const saveButtons = document.querySelectorAll(".save-button"); //constantes para boton guardar el cual edita algun campo

    editButtons.forEach((editButton, index) => {
        editButton.addEventListener("click", function() { //funcion para iocultar y mostrar botones
            // eculta el boton editar al dar click
            editButton.style.display = "none";
            // muestra el boton guardar al dar click
            saveButtons[index].style.display = "inline-block";
        });

        saveButtons[index].addEventListener("click", function() {
            // muestra boton editar
            editButton.style.display = "inline-block";
            // oculta el boton guardar
            saveButtons[index].style.display = "none";
        });
    });
});




