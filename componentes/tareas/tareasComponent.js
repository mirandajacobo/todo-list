import { crearTarea } from "../../modulos/itemTarea/itemTarea.js";

export function tareas(tareasDb) {
    let panelListado = document.createElement('div');
    panelListado.className = "panel-listado-tareas";

    tareasDb.forEach((e, i) => {
        panelListado.appendChild(
            crearTarea(
                i,
                e.nombre,
                e.estado_tarea,
                e.fecha_asignada,
                e.fecha_entrega,
                e.integrantes,
                e.claseEstado
            )
        );
    });

    return panelListado;
}