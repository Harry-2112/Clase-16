function calcular(x,y){
    x = parseFloat(document.getElementById("numero01").value);
    y = parseFloat(document.getElementById("numero02").value);

    let resultado = document.getElementById("resultado");
    let resta = parseFloat(x-y).toFixed(2);
    resultado.innerHTML = "El Resultado de la resta es " + resta;
}