function generate(type, id, text) {
  const element = document.createElement(type);
  element.id = id;
  element.innerText = text;
  document.body.appendChild(element);
}

function addTask() {
  const btn = document.querySelector('#criar-tarefa')
  btn.addEventListener('click', () => {
    const textInput = document.querySelector('#texto-tarefa');
    const newTask = document.createElement('li');
    newTask.innerText = textInput.value;
    document.getElementById("lista-tarefas").appendChild(newTask);
    textInput.value = '';

    // 7.
    newTask.addEventListener('click', (event) => {
      resetColor()
      event.target.style.backgroundColor = 'gray'
    })

    // 9.
    newTask.addEventListener('dblclick', (event) => {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed')
      } else {
        event.target.classList.add('completed')
      }
    })
  })
}

// 8.
function resetColor() {
  const list = document.getElementsByTagName('li');
  for (let index = 0; index < list.length; index+=1) {
    const element = list[index];
    element.style.backgroundColor = 'white';
    
  }
}

function erase() {
  const btn = document.getElementById('apaga-tudo');
  btn.addEventListener('click', () => {
    // const list = document.querySelectorAll('li')
    // for (let index = 0; index < list.length; index+= 1) {
    //   const li = list[index];
    //   li.remove()
    // }
    const ol = document.querySelector('#lista-tarefas');
    ol.innerHTML = ''
  })
}

function eraseCompleted() {
  const btn = document.querySelector('#remover-finalizados');
  btn.addEventListener('click', () => {

    const list = document.querySelectorAll(".completed")
    for (let index = 0; index < list.length; index+= 1) {
      const li = list[index];
      li.remove()
    }
  })
}

// 1.
generate("header", '', "Minha Lista de Tarefas");

// 2.
generate("p", "funcionamento", "Clique duas vezes em um item para marca-lo como completo");

// 3.
generate('input', 'texto-tarefa', '');

// 5.
generate('button', 'criar-tarefa', 'Criar')

// 10.
generate('button', 'apaga-tudo', 'Apagar')

// 11
generate('button', 'remover-finalizados', 'Apagar Finalizados')

// 4.
generate('ol', 'lista-tarefas', '');

// 5 e 6.
addTask();

// 10.
erase()

// 11.
eraseCompleted()