function darkMode(){
    const pagina = document.body
    pagina.classList.toggle("dark-mode")
    const isDarkMode = document.body.classList.contains("dark-mode")
    let textoBotao = isDarkMode ? "Modo Claro" : "Modo Escuro";
    document.querySelector("button").textContent = textoBotao;
}
