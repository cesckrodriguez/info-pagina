

let alto  = window.screen.height;//nos dice el alto de la pantalla
let ancho = window.screen.width;//nos dice el ancho de la pantalla

let respuesta = confirm(`El alto de la panta es ${alto} y el ancho es ${ancho}, Desea hacer la compra?`);

if(respuesta==true){
    alert("Felicidades por su nueva pantalla");

}else{
    alert("Compra cancelada.")
}


//Mostrar en pantalla todos los datos de una pagina como el url, hostname, patname y dominio

let protocolo = window.location.protocol;
let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;

let info = `la URL del sitio es ${href}<br>
            el protocolo utilizado es ${protocolo}<br>
            la locacion es ${hostname}<br>
            el pathname es${pathname}<br>
            `

            document.write(info)