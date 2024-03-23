
const send = document.getElementById("send")

const Sessao = document.getElementById("divs")

send.addEventListener('click', ()=>{
    const valor = document.getElementById("input").value
    appear(valor)
    document.getElementById("input").value = "";
})

function appear(valor){
    const paragrafo = document.createElement("p")
    const div = document.createElement("div")
    div.className = "lista"; // Corrected this line

    paragrafo.innerHTML = valor
    div.appendChild(paragrafo)
   Sessao.appendChild(div)

}

