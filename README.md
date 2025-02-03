
## Instalación

### Back-end (API REST PHP)

1. Clona el repositorio en tu servidor local:

    ```bash
    git clone https://github.com/Codemikel/AirTech-Interview.git
    ```

2. Accede al directorio del back-end:

    ```bash
    cd API.REST.PHP
    ```

3. Configura las credenciales de tu base de datos en el archivo `includes/Database.class.php`:

    ```php
        private $host = 'localhost:8889';
        private $user = 'test';
        private $password = 'test';
        private $database = 'code_pills';
    ```

4. Asegúrate de tener una base de datos MySQL configurada con una tabla llamada `listado_clientes` que tenga los campos `id`, `name`, `email`, `city` y `telephone`.

5. Inicia tu servidor web (Apache o Nginx) y asegúrate de que el servidor esté apuntando al directorio `API.REST.PHP`.

6. Verifica que los endpoints funcionan correctamente accediendo a `http://localhost/API.REST.PHP/api-rest/get_all_client.php`.

### Front-end

1. Accede al directorio del front-end:

    ```bash
    cd frontend
    ```

2. Abre el archivo `index.html` en tu navegador.

## Funcionalidad

### Back-end (API REST PHP)

- **GET /api-rest/get_all_client.php**: Obtiene la lista de todos los clientes.
- **POST /api-rest/create_client.php**: Crea un nuevo cliente (requiere parámetros: `name`, `email`, `city`, `telephone`).
- **PUT /api-rest/update_client.php**: Actualiza un cliente existente (requiere parámetros: `id`, `name`, `email`, `city`, `telephone`).
- **DELETE /api-rest/delete_client.php**: Elimina un cliente (requiere parámetro: `id`).

### Front-end

- **Ver lista de clientes**: Los clientes se muestran automáticamente al cargar la página.
- **Agregar un nuevo cliente**: Completa el formulario y presiona "Agregar Cliente".
- **Editar un cliente**: Haz clic en **Editar** para modificar los datos de un cliente.
- **Eliminar un cliente**: Haz clic en **Eliminar** para borrar un cliente.

## Notas

- Asegúrate de que la API REST esté en ejecución antes de probar el front-end.
