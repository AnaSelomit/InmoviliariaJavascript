const options = [
    {
        nombre: "Departamento Ceibo A",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "https://www.igms.cl/wp-content/uploads/2023/01/Ceibo-depto1.jpg",
        cuartos: 2,
        metros: 52,
    },
    {
        nombre: "Departamento Ceibo B",
        descripcion: "Desde las alturas todo se ve mejor",
        src: ["https://www.igms.cl/wp-content/uploads/2023/01/Ceibo-depto4.jpg"],
        cuartos: 4,
        metros: 80,
    },
    {
        nombre: "Departamento + jardín",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "https://www.igms.cl/wp-content/uploads/2023/01/Ceibo-jardin.jpg",
        cuartos: 3,
        metros: 120,
    },
    {
        nombre: " Peumo + azotea",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "https://www.igms.cl/wp-content/uploads/2023/01/Peumo-azotea2.jpg",
        cuartos: 3,
        metros: 120,
    },
    {
        nombre: "Peumo A",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "https://www.igms.cl/wp-content/uploads/2023/01/Peumo-depto5.jpg",
        cuartos: 3,
        metros: 90,
    },
    {
        nombre: "Peumo B",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "https://www.igms.cl/wp-content/uploads/2023/01/Peumo-depto6.jpg",
        cuartos: 3,
        metros: 90,
    },
];

const gallery = document.querySelector("#gallery");
const cuartos = document.querySelector("#cuartos");
const desde = document.querySelector("#desde");
const hasta = document.querySelector("#hasta");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");

const crearTarjeta = (propiedades) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const template = `
    <img src="${propiedades.src}">
		<h5>${propiedades.nombre}</h5>
		<p>${propiedades.descripcion}</p>
		<p>Cuartos: ${propiedades.cuartos}</p>
		<p>Metros Cuadrados: ${propiedades.metros}</p>
    `;

    card.innerHTML = template;
    gallery.appendChild(card);
};

for (let propiedades of options) {
    crearTarjeta(propiedades);
}

btn.addEventListener("click", () => {
    // Guia para entenderme
    // const edad = Number(filtro.value);
    // for (let personaje of personajes) {
    //     if (personaje.edad >= edad) {
    //         crearTarjeta(personaje);
    //     }
    // }

    if (cuartos.value === "" || desde.value === "" || hasta.value === "") {
        alert(" rellena campos faltantes");
    }

    gallery.innerHTML = "";

    const piezas = Number(cuartos.value);
    const inicio = Number(desde.value);
    const final = Number(hasta.value);
    let cantidades = 0;

    for (let propiedades of options) {
        if (propiedades.cuartos >= piezas && propiedades.metros >= inicio && propiedades.metros <= final) {
            crearTarjeta(propiedades);
            cantidades++;
        }
    }

    total.innerHTML = cantidades;
});
