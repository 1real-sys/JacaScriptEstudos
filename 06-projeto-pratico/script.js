// ============================================
// LISTA DE TAREFAS - PROJETO PRÁTICO
// ============================================

// Selecionar elementos do DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');
const totalTasksSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTasks');

// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Validar entrada
    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    
    // Criar objeto tarefa
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    // Adicionar ao array
    tasks.push(task);
    
    // Limpar input
    taskInput.value = '';
    
    // Atualizar interface
    renderTasks();
    updateStats();
}

// Função para renderizar tarefas na tela
function renderTasks() {
    // Limpar lista
    taskList.innerHTML = '';
    
    // Criar elementos para cada tarefa
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <span class="task-text" onclick="toggleTask(${task.id})">
                ${task.text}
            </span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">
                Excluir
            </button>
        `;
        
        taskList.appendChild(li);
    });
}

// Função para marcar tarefa como concluída
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        updateStats();
    }
}

// Função para deletar tarefa
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
    updateStats();
}

// Função para limpar tarefas concluídas
function clearCompleted() {
    tasks = tasks.filter(t => !t.completed);
    renderTasks();
    updateStats();
}

// Função para atualizar estatísticas
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    
    totalTasksSpan.textContent = total;
    completedTasksSpan.textContent = completed;
}

// Event Listeners
addButton.addEventListener('click', addTask);

// Adicionar tarefa com Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

clearButton.addEventListener('click', clearCompleted);

// Inicializar
updateStats();

// ============================================
// DICAS PARA ESTUDAR ESTE CÓDIGO:
// ============================================
// 
// 1. DOM Manipulation:
//    - document.getElementById()
//    - createElement()
//    - innerHTML
//    - appendChild()
//
// 2. Event Listeners:
//    - addEventListener()
//    - click, keypress events
//
// 3. Array Methods:
//    - push(), filter(), find(), forEach()
//
// 4. Arrow Functions:
//    - () => {}
//
// 5. Template Strings:
//    - `${variavel}`
//
// ============================================
// DESAFIOS PARA PRATICAR:
// ============================================
//
// 1. Salvar tarefas no localStorage
// 2. Adicionar botão de editar tarefa
// 3. Adicionar filtros (todas, ativas, concluídas)
// 4. Adicionar animações CSS
// 5. Adicionar data/hora às tarefas
// 6. Permitir ordenar tarefas por drag-and-drop
// 7. Adicionar categorias/tags às tarefas
