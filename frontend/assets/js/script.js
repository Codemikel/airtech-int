// URL de la API de PHP
const apiUrl = 'http://localhost/API.REST.PHP/api-rest/get_all_client.php';

// Función para cargar todos los clientes
async function loadClients() {
    const response = await fetch(apiUrl);
    const clients = await response.json();
    const tableBody = document.querySelector('#client-table tbody');
    
    // Limpiar la tabla antes de agregar los nuevos datos
    tableBody.innerHTML = '';

    // Agregar los clientes a la tabla
    clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.city}</td>
            <td>${client.telephone}</td>
            <td style="display: flex;">
                <!-- Botón de Editar -->
                <button style="background-color: blue;" onclick="editClient(${client.id}, '${client.name}', '${client.email}', '${client.city}', '${client.telephone}')">Editar</button>
                <!-- Botón de Eliminar -->
                <button style="background-color: red;" onclick="deleteClient(${client.id})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Función para agregar un nuevo cliente
document.getElementById("add-client-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const formData = new FormData(this);
    const params = new URLSearchParams(formData).toString(); // Convertir el formulario a parámetros de URL

    // Realizar la solicitud GET con los parámetros de URL
    fetch("http://localhost/API.REST.PHP/api-rest/create_client.php?" + params, {
        method: "POST"
    })
    .then(response => response.text())
    .then(data => {
        // Mostrar mensaje de éxito
        document.getElementById("responseMessage").innerText = "✅ Cliente creado correctamente.";
        document.getElementById("responseMessage").style.color = "green";
        loadClients(); // Recargar la lista de clientes
    })
    .catch(error => {
        // Mostrar mensaje de error
        console.error("Error:", error);
        document.getElementById("responseMessage").innerText = "❌ Error al crear el cliente.";
        document.getElementById("responseMessage").style.color = "red";
    });
});

// Función para editar un cliente
function editClient(id, name, email, city, telephone) {
    // Mostrar el formulario de edición
    document.getElementById('add-client-form').style.display = 'none';
    document.getElementById('edit-client-form').style.display = 'block';

    // Rellenar los campos con los datos del cliente
    document.getElementById('edit-id').value = id;
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-email').value = email;
    document.getElementById('edit-city').value = city;
    document.getElementById('edit-telephone').value = telephone;
}

// Evento para actualizar el cliente
document.getElementById('edit-client-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const id = document.getElementById('edit-id').value;
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;
    const city = document.getElementById('edit-city').value;
    const telephone = document.getElementById('edit-telephone').value;

    const updateUrl = `http://localhost/API.REST.PHP/api-rest/update_client.php?id=${id}&name=${name}&email=${email}&city=${city}&telephone=${telephone}`;
    const response = await fetch(updateUrl, {
        method: 'PUT'
    });

    if (response.ok) {
        // Mostrar mensaje de éxito
        alert('Cliente actualizado correctamente!');
        loadClients();
        document.getElementById('edit-client-form').style.display = 'none';
    } else {
        // Mostrar mensaje de error
        alert('Error al actualizar el cliente');
    }

    document.getElementById('add-client-form').style.display = 'block';
    document.getElementById('edit-client-form').style.display = 'none';
});

async function deleteClient(id) {
    const deleteUrl = `http://localhost/API.REST.PHP/api-rest/delete_client.php?id=${id}`;
    const response = await fetch(deleteUrl, {
        method: 'DELETE'
    });

    if (response.ok) {
        // Mostrar mensaje de éxito
        alert('Cliente eliminado correctamente!');
        loadClients();
    } else {
        // Mostrar mensaje de error
        alert('Error al eliminar cliente');
    }
}

// Cargar los clientes al cargar la página
window.onload = loadClients;
