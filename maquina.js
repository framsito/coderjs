function calcularInteres(principal, tasa, tiempo) {
  const interes = (principal * tasa * tiempo) / 100;
  const montoTotal = principal + interes;

  document.write(`Plata inicial: $${principal.toFixed(2)}<br>`);
  document.write(`Tasa de interés: ${tasa}%<br>`);
  document.write(`Tiempo: ${tiempo} años<br>`);

  if (interes > 0) {
    document.write(`Ganancia del interés: $${interes.toFixed(2)}<br>`);
  } else if (interes < 0) {
    document.write(`Pérdida del supuesto interés: $${(-interes).toFixed(2)}<br>`);
  } else {
    document.write("No hay cambios en tu guita<br>");
  }

  document.write(`Monto Total: $${montoTotal.toFixed(2)}<br>`);
}

function obtenerNumeroInput(mensaje) {
  let input = prompt(mensaje);
  while (isNaN(input) || input === "") {
    input = prompt("Poné solo números! " + mensaje);
  }
  return parseFloat(input);
}

document.write("<h1>Calculadora de interés</h1>");

const principal = obtenerNumeroInput("Cuánta guita pusiste?:");
const tasa = obtenerNumeroInput("Decime la tasa de interés (%):");
const tiempo = obtenerNumeroInput("Por cuántos años vas a dejarla laburando?:");

calcularInteres(principal, tasa, tiempo);