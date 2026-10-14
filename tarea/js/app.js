// ===== app.js =====

import nuevoEstudiante, { curso, estudiantes } from "./datos.js";
import { reporte, promedio, estado } from "./calculos.js";

// Unir estudiantes + nuevoEstudiante usando spread de arreglo
const todos = [...estudiantes, nuevoEstudiante];

// Mostrar en consola
console.log(`Curso: ${curso}`);
todos.forEach(est => console.log(reporte(est)));

// Mostrar en la página
const lista = document.querySelector("#reportes");
todos.forEach(({ nombre, notas }) => {
  const prom = promedio(...notas);
  lista.innerHTML += `<li>${nombre}: ${prom.toFixed(1)} - ${estado(prom)}</li>`;
});