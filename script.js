const elementoNome = document.getElementById('nome'); 
const elementoSituacao = document.querySelector('#situacao'); 
const elementoImg = document.querySelector('img') 
let elementoBtn = document.querySelector('#alterar') 


elementoBtn.addEventListener('click', () =>{
   
    if(elementoBtn.value == "primeiro") {
        elementoImg.src = "desconfiado.png"
        elementoNome.innerText = "Pinscher 007" 
        elementoSituacao.innerText = "Desconfiado" 
        elementoBtn.value = "segundo" 
    } else if(elementoBtn.value == "segundo") { 
        elementoImg.src = "bravo.png" 
        elementoNome.innerText = "Sr.Pinscher Malvadão" 
        elementoSituacao.innerText = " Normal" 
        elementoBtn.value = "terceiro" 
    } else if(elementoBtn.value == "terceiro") { 
        elementoImg.src = "timido.png" 
        elementoNome.innerText = "Dr.Pinscher Acanhado" 
        elementoSituacao.innerText = " Timido" 
        elementoBtn.value = "quarto" 
    } else if(elementoBtn.value == "quarto") { 
        elementoImg.src = "baby.jpg" 
        elementoNome.innerText = "The baby Pinscher" 
        elementoSituacao.innerText = "Baby neurotic" 
        elementoBtn.value = "quinto" 
    } else { 
        elementoImg.src = "feliz.png" 
        elementoNome.innerText = "Pinscher Fake News" 
        elementoSituacao.innerText = "Feliz" 
        elementoBtn.value = "primeiro" 
    }
})
