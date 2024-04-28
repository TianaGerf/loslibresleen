function muestra_oculta(contenido, boton) {
    let div = document.getElementById(contenido);
    let btn = document.getElementById(boton);

    if (div.style.display === "none") {
        div.style.display = "flex";
        btn.innerText = "Ocultar";
    } else {
        div.style.display = "none";
        btn.innerText = "Ver más";
    }
}
