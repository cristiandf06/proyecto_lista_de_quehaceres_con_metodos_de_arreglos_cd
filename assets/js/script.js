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

const inputAgregar = document.getElementById("ingresarTarea");
const botonAgregar = document.getElementById("agregarTarea");
const spanTareasTotales = document.getElementById("tareasTotales");
const spanTareasRealizadas = document.getElementById("tareasRealizadas");
const divTareas = document.getElementById("tareas");

let nuevoId = 4;
renderTareas(); //Permite que al recargar la página, quede guardada las tareas anteriores.
tareasTotales();
tareasRealizadas();

botonAgregar.addEventListener("click", function () {
    
    crearTarea();

    renderTareas();
});

function crearTarea () {
    let nuevaTarea = inputAgregar.value;

    tareas.push({
        id: nuevoId,
        descripcion: nuevaTarea,
        completado: false
    })
    
    nuevoId++;
}

function removeElement(event){

}

function renderTareas(){
    let html = "";

    tareas.forEach(function (tarea) {
        let checkboxChequeado = "";

        if(tarea.completado){
            checkboxChequeado = "checked";
        };

        let template = `
            <div style="width:10%">${tarea.id}</div>
            <div style="width:70%">
                <label class="form-check-label" for="exampleCheck">${tarea.descripcion}</label>
            </div>
            <div style="width:10%">
                <input type="checkbox" class="form-check-input check_in" id="completado-${tarea.id}" ${checkboxChequeado} onchange="actualizarTarea(${tarea.id})">
            </div>
            <div style="width:10%">
                <i class="uil uil-times-circle icons delete" onclick="borrar(${tarea.id})" ></i>
            </div>
            `;

        html += template;
    });

    divTareas.innerHTML = html;
};

function actualizarTarea(id){

    const indexTarea = tareas.findIndex(tarea => tarea.id == id);

    const completada = document.getElementById("completado-" + id).checked;

    tareas[indexTarea].completado = completada;

    tareasRealizadas()
};

function tareasTotales(){
    let total = tareas.length;

    spanTareasTotales.innerHTML = total;
}

function tareasRealizadas(){
    let tareasCompletadas = tareas.filter(tarea => tarea.id)
    let realizadas = tareasCompletadas.length;

    spanTareasRealizadas.innerHTML = realizadas;
}

function borrar(id){
    const indexBorrar = tareas.findIndex(tarea => tarea.id == id)
    tareas.splice(indexBorrar, 1)
    renderTareas()
    }