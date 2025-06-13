// Provincias (se cargan con JS)
const provincias = [
  "Santo Domingo", "La Vega", "Puerto Plata", "Santiago", "San Juan",
  "San Pedro de Macorís", "Barahona", "Azua", "Duarte", "Peravia"
];

const listaProvincias = document.getElementById("listaProvincias");
provincias.forEach(p => {
  const item = document.createElement("p");
  item.textContent = p;
  listaProvincias.appendChild(item);
});

// Galería de comida
const comidas = [
  { nombre: "La Bandera", imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2d/LaBandera.jpg" },
  { nombre: "Mangu", imagen: "https://upload.wikimedia.org/wikipedia/commons/0/03/Mang%C3%BA.jpg" },
  { nombre: "Sancocho", imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Sancocho.jpg" }
];

const galeria = document.getElementById("galeriaComida");
comidas.forEach(c => {
  const img = document.createElement("img");
  img.src = c.imagen;
  img.alt = c.nombre;
  galeria.appendChild(img);
});

// Modo oscuro
document.getElementById("modo").addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

// Trivia RD
const preguntas = [
  {
    pregunta: "¿Cuál es la capital de República Dominicana?",
    respuestas: ["Santiago", "La Romana", "Santo Domingo"],
    correcta: 2
  },
  {
    pregunta: "¿Qué música es originaria de RD?",
    respuestas: ["Salsa", "Merengue", "Cumbia"],
    correcta: 1
  },
  {
    pregunta: "¿Quién fue Juan Pablo Duarte?",
    respuestas: ["Un pelotero", "Fundador de la nación", "Presidente actual"],
    correcta: 1
  }
];
let actual = 0;
function cargarTrivia() {
  const p = preguntas[actual];
  document.getElementById("pregunta").textContent = p.pregunta;
  const lista = document.getElementById("respuestas");
  lista.innerHTML = "";
  p.respuestas.forEach((resp, i) => {
    const li = document.createElement("li");
    li.textContent = resp;
    li.style.cursor = "pointer";
    li.onclick = () => {
      document.getElementById("resultado").textContent =
        i === p.correcta ? "✅ ¡Correcto!" : "❌ Incorrecto";
      actual = (actual + 1) % preguntas.length;
      setTimeout(cargarTrivia, 2000);
    };
    lista.appendChild(li);
  });
}
cargarTrivia();
// Formulario
document.getElementById("formulario").addEventListener("submit", e => {
  e.preventDefault();
  alert("¡Gracias por tu mensaje!");
});