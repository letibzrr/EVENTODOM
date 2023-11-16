const inNome = document.getElementById('inNome')
const rbMasculino = document.getElementById('rbMasculino')
const rbFeminino = document.getElementById('rbFeminino')
const inAltura = document.getElementById('inAltura')

const outResposta = document.getElementById('outResposta')

const btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click',function(){
    let nome = inNome.value
    let masculino = rbMasculino.checked
    let feminino = rbFeminino.checked
    let altura = Number(inAltura.value)

    if(nome === '' || nome === Number || (masculino === false && feminino === false)){
        alert('Por favor, informe seu nome e selecione o seu sexo biológico!')
        inNome.focus()
        return
    }
    if(altura<=0 || altura>2.74 || isNaN(altura)){
        alert('Por favor, informe sua altura!')
        inAltura.focus()
        return
    }
    let peso
    if(masculino){
        peso = 22 * Math.pow(altura, 2)
    }else if(feminino){
        peso = 21 * Math.pow(altura, 2)
    }

    outResposta.textContent = `${nome}: Seu Peso Ideal é: ${peso.toFixed(2)}kg`
})

const btnLimpar = document.getElementById('btnLimpar')
btnLimpar.addEventListener('click', function(){
    location.reload();
})



