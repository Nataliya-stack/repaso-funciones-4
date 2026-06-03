const inputEl = document.getElementById("inputTexto");
const inputNum = document.getElementById("inputNumero")
const btnEl = document.getElementById("btnCalcular");
const resultEl = document.getElementById("resultadoTexto");

const repeatTexto = (texto, numero) => texto.repeat(numero);

btnEl.addEventListener("click", () => {
    const texto = inputEl.value;
    const numero = parseInt(inputNum.value);

    if (texto === "" || isNaN(numero) || numero <= 0) {
        resultEl.textContent = "Error: ¡Los campos no pueden estar vacío!";        
        resultEl.style.color = "red";
        return; 
    }

    resultEl.innerHTML = `${repeatTexto(texto + "<br>", numero)}`;
    resultEl.style.color = "white";

    inputEl.value = "";
    inputNum.value = "";
    inputEl.focus();
});
