import { formularioComponent } from "../formulario/formularioComponent.js";

export function informacion(data) {
    let infoContainer = document.createElement('div');
    infoContainer.className = "info-container";

    let buttonContainer = document.createElement('div');
    buttonContainer.className = "button-container";

    let taskButton = document.createElement('button');
    taskButton.className = "task-button";
    taskButton.innerHTML = `<span class="material-icons">add_box</span> Nueva Tarea`;
    taskButton.id = "btnMostrarFormulario";

    let archivedButton = document.createElement('button');
    archivedButton.className = "archived-button";
    archivedButton.innerHTML = `<span class="material-icons">archive</span> Archivados`;

    buttonContainer.appendChild(taskButton);
    buttonContainer.appendChild(archivedButton);
    infoContainer.appendChild(buttonContainer);

    let card = document.createElement('div');
    card.className = "task-card";

    let statusLabel = document.createElement('span');
    statusLabel.className = `status-label ${data.claseEstado}`;
    statusLabel.innerText = data.estado || "Estado";
    card.appendChild(statusLabel);

    let title = document.createElement('h3');
    title.className = "task-title";
    title.innerText = data.titulo || "Título no disponible";
    card.appendChild(title);

    let description = document.createElement('p');
    description.className = "task-description";
    description.innerText = data.descripcion || "Descripción no disponible";
    card.appendChild(description);

    let dateContainer = document.createElement('div');
    dateContainer.className = "date-container";
    dateContainer.innerHTML = `
        <p><strong>Inicio:</strong> ${data.completado || "N/A"}</p>
        <p><strong>Entrega:</strong> ${data.entrega || "N/A"}</p>
    `;
    card.appendChild(dateContainer);
    
    let membersLabel = document.createElement('p');
    membersLabel.className = "members-label";
    membersLabel.innerText = "Integrantes";
    card.appendChild(membersLabel);

    let emojiContainer = document.createElement('div');
    emojiContainer.className = "emoji-container";
    (data.integrantes || []).forEach(e => {
        let emoji = document.createElement('span');
        emoji.className = "member-emoji";
        emoji.innerText = e;
        emojiContainer.appendChild(emoji);
    });
    card.appendChild(emojiContainer);

    let deleteIcon = document.createElement('button');
    deleteIcon.className = "delete-icon";
    deleteIcon.innerHTML = `<span class="material-icons">delete</span>`;
    card.appendChild(deleteIcon);

    infoContainer.appendChild(card);

    const formulario = formularioComponent();
    infoContainer.appendChild(formulario);

    taskButton.addEventListener("click", () => {
        formulario.style.display = (formulario.style.display === "none" || formulario.style.display === "") ? "block" : "none";
    });

    return infoContainer;
}