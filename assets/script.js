async function cargarAlbunes() {
    try {
        const url = "https://jsonplaceholder.typicode.com/photos";
        const datos = await fetch(url);
        const fotos = await datos.json();

        for (i = 0; i <=20; i++) {
       
            $("#album").append(
            `
            <li>${fotos[i].title}</li>
            `
            );
        }
        
    } catch (error) {
        console.log("error de llamada");
        console.log("error.message");
    }
}

console.log("llegando esperar 3 segundos");

function iniciar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        cargarAlbunes();
        resolve("Informacion Enviada");
        }, 3000);
    });
}
iniciar().then(console.log);
