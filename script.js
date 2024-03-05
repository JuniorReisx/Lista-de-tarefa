const botao = document.getElementById("enviar")


botao.addEventListener('click', ()=>{

  let input = document.getElementById("input").value
  
   tarefas(input)
   document.getElementById("input").value = "";

})

let i = 0

function tarefas(input){
   const divs = document.getElementById("divs")
   
   let Div = document.createElement("div")
   Div.className = "Tarefas";
   Div.innerHTML = `<h3> Tarefa de N${i  + 1 }</h3> 
                <p> Tarefa:${input}</p>   `
i++
    divs.appendChild(Div)
    
}
