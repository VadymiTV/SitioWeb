function buscarPaginas() {
    let input = document.getElementById("buscador").value.toLowerCase();
    let paginas = document.querySelectorAll("#lista-paginas li");

    paginas.forEach(li => {
        let texto = li.textContent.toLowerCase();
        li.style.display = texto.includes(input) ? "" : "none";
    });
}
