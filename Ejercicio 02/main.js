function farenheit(numero) {
    let resultado = document.getElementById("resultado");
    numero = parseInt(document.getElementById("numero").value);
    let faren = (numero*1.8)+32;
    resultado.innerHTML= faren;
}
function celcius(numero) {
    let resultado = document.getElementById("resultado");
    numero = parseInt(document.getElementById("numero").value);
    let cel = (numero-32)*(5/9);
    resultado.innerHTML= cel;
}