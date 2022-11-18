function suma(x,y) {
    x=parseInt(document.getElementById("numero01").value);
    y=parseInt(document.getElementById("numero02").value);

    let resultado = document.getElementById("resultado");

    let suma=x+y;
    resultado.innerHTML = suma;
}