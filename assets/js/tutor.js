let tareas = [
    {
        id: 1,
        descripcion: "Hacer mercado",
        completado: true
    },
    {
        id: 2,
        descripcion: "Estudiar para la prueba",
        completado: false
    },
    {
        id: 3,
        descripcion: "Sacar a pasear a Tobby",
        completado: false
    },
];

const inputAgregar = document.getElementById("inputAgregar");
const botonAgregar = document.getElementById("btnAgregar");
const spanTareasTotales = document.getElementById("tareasTotales");
const spanTareasRealizadas = document.getElementById("tareasRealizadas");
const divTareas = document.getElementById("tareas");

let nuevoId = 4;
renderTareas();
tareasTotales();
tareasRealizadas;

botonAgregar.addEventListener('click', function () {

    crearTarea();
    
    renderTareas();
    
});

function crearTarea (){
    let nuevaTarea = inputAgregar.value;

    tareas.push({
        id: nuevoId,
        descripcion: nuevaTarea,
        completado: false
    })

    nuevoId++;
}

function renderTareas(){
    let html = "";

    tareas.forEach(function (tarea) {
        let checkboxChequeado = "";

        if (tarea.completado) {
            checkboxChequeado = "checked"   
        }

        let template = `
            <div style="width:10%">${tarea.id}</div>
            <div style="width:70%">${tarea.descripcion}</div>
            <div style="width:10%">
                <input type="checkbox" id="completado-${tarea.id}" ${checkboxChequeado} 
                onchange="actualizarTarea(${tarea.id})">
            </div>
            <div style="width:10%" class="mt-2">
                <buttom class="btn btn-danger">x</buttom>
            </div>
        `;

        html += template;
    })

    divTareas.innerHTML = html;
}

function actualizarTarea(id) {

    const indexTarea = tareas.findIndex(tarea => tarea.id == id);

    const completada = document.getElementById("completado-" + id).checked;

    tareas[indexTarea].completado = completada;

    // renderTareas();
    // tareasTotales();
    tareasRealizadas()
}

/* function actualizarTarea(id) {

    const indexTarea = tareas.findIndex(tarea => tarea.id == id);

    tareas.splice(indexTarea, 1);

    renderTareas();
    tareasTotales();
    tareasRealizadas()
} */

function tareasTotales(){
    let total = tareas.length;

    spanTareasTotales.innerHTML = total;
}

function tareasRealizadas(){
    let tareasCompletadas = tareas.filter(tarea => tarea.completado)
    let realizadas = tareasCompletadas.length;

    spanTareasRealizadas.innerHTML = realizadas;
}