function validaFormulario(){
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

    if(nome==''||email==''||senha==''){
        alert("Preencha os dados abaixo!")
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("E-mail inválido!")
    }
    if(senha.length>8){
        alert("Limite de caracteres excedido!")
    }
}