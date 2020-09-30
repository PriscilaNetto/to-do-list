// criar uma função tarefa (criarTarefa) alert que exiba "tarefa criada" quando o usuário clicar no botao (div) de add.

// Após adicionar uma tarefa, o input deve ficar vazio

// Se o usuario tentar adicionar uma tarefa vazia, dar um alerta e não pode deixar criar a tarefa vazia


let botao = document.querySelector('#adicionar-tarefa')
let inputTarefa = document.querySelector('#tarefa-digitada')
let divTarefas = document.querySelector('#tarefas')

function addAcaoFinalizarTarefa() {
  let listaDeBotoes = document.querySelectorAll('.botao-tarefa')

  for (let i = 0; i < listaDeBotoes.length; i++) {
    let botao = listaDeBotoes[i];

    botao.addEventListener('click', function () {

      if (window.confirm("você deseja excluir?")) {

        //pega o objeto que é o avô dele
        botao.parentElement.parentElement.remove()
      }

    })
  }
}

function criarTarefa() {

  if (inputTarefa.value.trim() == "") {
    return alert("Campo tarefa não pode ficar vazio")
  }


  let tarefa = ` 
  <div class="col-md-4 mb-4">
    <div class="card-tarefa">
        <div class="texto-tarefa">
            ${inputTarefa.value}
        </div>
        <div class="botao-tarefa">
            <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
        </div>
    </div>
  </div>
  `


  divTarefas.innerHTML += tarefa
  alert("tarefa criada: " + inputTarefa.value)
  inputTarefa.value = ''
  addAcaoFinalizarTarefa()
};

botao.addEventListener('click', criarTarefa)
inputTarefa.addEventListener("keypress", function (event) {

  console.log(event);

  if (event.key == 'Enter') {
    criarTarefa()
  }

});











