const franquiciasNBA = [
 
  {
    nombre: "Golden State Warriors",
    ciudad: "San Francisco, California",
    estadio: "Chase Center",
    anillos: 7,
    valor: "$8.8 mil millones",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg"
  },
  {
    nombre: "Chicago Bulls",
    ciudad: "Chicago, Illinois",
    estadio: "United Center",
    anillos: 6,
    valor: "$5.0 mil millones",
    imagen: "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg"
  },
  {
    nombre: "Boston Celtics",
    ciudad: "Boston, Massachusetts",
    estadio: "TD Garden",
    anillos: 17,
    valor: "$6.0 mil millones",
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg"
  },
  {
    nombre: "Miami Heat",
    ciudad: "Miami, Florida",
    estadio: "Kaseya Center",
    anillos: 3,
    valor: "$4.0 mil millones",
    imagen: "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg"
  }
];

const contenedor = document.getElementById("catalogo");

franquiciasNBA.forEach(equipo => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML = `
    <img src="${equipo.imagen}" alt="${equipo.nombre}" />
    <h2>${equipo.nombre}</h2>
    <p>${equipo.ciudad}</p>
    <div class="estadio">Estadio: ${equipo.estadio}</div>
    <p>Anillos ganados: 🏆 ${equipo.anillos}</p>
    <p>Valor estimado: 💰 ${equipo.valor}</p>
    <button class="boton">Ver más</button>
  `;

  contenedor.appendChild(tarjeta);
});

