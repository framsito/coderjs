const calcularForm = document.querySelector("#calcularForm");
const eliminarResultadoButton = document.querySelector("#eliminarResultadoButton");
const limpiarLocalStorageButton = document.querySelector("#limpiarLocalStorageButton");

calcularForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById("principal").value);
    const tasa = parseFloat(document.getElementById("tasa").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);

    if (isNaN(principal) || isNaN(tasa) || isNaN(tiempo)) {
        alert("Por favor, ingresá números válidos.");
        return;
    }

    const interes = (principal * tasa * tiempo) / 100;
    const montoTotal = principal + interes;

    const resultado = `
        Plata inicial: $${principal.toFixed(2)}<br>
        Tasa de interés: ${tasa}%<br>
        Tiempo: ${tiempo} años<br>
        Ganancia del interés: $${interes.toFixed(2)}<br>
        Monto Total: $${montoTotal.toFixed(2)}<br>
    `;

    document.getElementById("resultado").innerHTML = resultado;
    guardarResultado(resultado);

    // Agrega una alerta
    alert("Resultado enviado");

    // Limpia los campos del formulario
    document.getElementById("principal").value = "";
    document.getElementById("tasa").value = "";
    document.getElementById("tiempo").value = "";
});

eliminarResultadoButton.addEventListener("click", eliminarResultado);
limpiarLocalStorageButton.addEventListener("click", limpiarLocalStorage);

function eliminarResultado() {
    document.getElementById("resultado").innerHTML = "";
}

function guardarResultado(resultado) {
    const resultadosGuardados = JSON.parse(localStorage.getItem("resultados")) || [];
    resultadosGuardados.push(resultado);

    localStorage.setItem("resultados", JSON.stringify(resultadosGuardados));
}

function mostrarResultadosGuardados() {
    const resultadosGuardados = JSON.parse(localStorage.getItem("resultados"));
    const resultadosGuardadosElement = document.getElementById("resultadosGuardados");

    if (resultadosGuardados && resultadosGuardados.length > 0 && resultadosGuardadosElement) {
        resultadosGuardadosElement.innerHTML = "<h2>Resultados Guardados:</h2>";
        resultadosGuardados.forEach((resultado, index) => {
            resultadosGuardadosElement.innerHTML += `<p>Resultado ${index + 1}: ${resultado}</p>`;
        });
    }
}

function limpiarLocalStorage() {
    localStorage.removeItem("resultados");
    document.getElementById("resultadosGuardados").innerHTML = "";
}

mostrarResultadosGuardados();