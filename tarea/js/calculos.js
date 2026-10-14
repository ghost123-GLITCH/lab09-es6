// ===== calculos.js =====

// Arrow function con rest (...notas)
export const promedio = (...notas) => {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
  };
  
  // Arrow function con parámetro por defecto (minima = 13)
  export const estado = (nota, minima = 13) => 
    nota >= minima ? "Aprobado" : "Desaprobado";
  
  // Arrow function con desestructuración y template literal
  export const reporte = ({ nombre, notas }) => {
    const prom = promedio(...notas);
    return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
  };