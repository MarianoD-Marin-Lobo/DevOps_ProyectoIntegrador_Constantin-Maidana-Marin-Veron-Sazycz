# Proyecto Integrador DevOps

**Nombre del Proyecto:** `ProyectoIntegrador_DevOps_Constantin-Maidana-Marin-Veron-Sazycz`

## Descripción del Proyecto

Este proyecto consiste en una aplicación web simple que se constituye de una lista de tareas o pendientes, mejor conocida en inglés como “To-Do List”, cuyo objetivo es condensar la adquisisición y comprensión de los conocimientos adquiridos durante la cursada de la presente cátedra “Seminario de actualización: DevOps”, mediante la puesta en práctica de las herramientas y procesos clave del ciclo de vida de un software como lo son su desarrollo, control de versiones, contenerización, automatización de tests, y despliegue en un entorno CI/CD.

En concreto, nuestra aplicación “To-Do List” está compuesta por:
- backend/ -> Código de servidor Node.js, API REST y conexión a MongoDB.
- frontend/ -> Página HTML y lógica en JavaScript.
- tests/ -> Pruebas automatizadas con Jest y Supertest.
- Dockerfile y docker-compose.yml para facilitar su ejecución.
- .github/workflows/ -> Pipeline CI/CD con GitHub Actions.


## Estructura global del proyecto:

Consultar el archivo 'project-structure.txt'.



## Instrucciones para correr localmente con Docker

Requisitos previos:
-	Tener instalados Docker, Docker Compose y Docker Desktop
-	Tener instalado MongoDB Compass (opcional, para ver los datos)

Pasos:
1.	Clonar el repositorio: 
        git clone https://github.com/MarianoD-Marin-Lobo/DevOps_ProyectoIntegrador_Constantin-Maidana-Marin-Veron-Sazycz
2.	Construir y ejecutar los contenedores: 
        docker-compose up --build
3.	Esperar que el backend se conecte a MongoDB correctamente (se verá en logs).
4.	Abrir el frontend en el navegador:
    -	Si se usa serve, correr: 
            cd frontend
            npx serve
        Y abrir la URL que indique (ej: http://localhost:3000)
    -	Si se usa Visual Studio Code: 
            Abrir el archivo 'index.html' y haciendo click derecho sobre el código seleccionar 'Open with Live Server'.
5.	Opcional: Visualizar los datos en MongoDB Compass conectando a:
        mongodb://localhost:27017/tododb



## Descripción del pipeline DevOps:

Ubicado en `.github/workflows/ci-cd.yml`, el pipeline realiza:
- Checkout del repositorio.
- Instalación de dependencias.
- Ejecución de pruebas con Jest.
- Build de la imagen Docker.
- (Opcional: Push de imagen a Docker Hub y despliegue a entorno cloud).



## Conclusiones:

- Este proyecto permitió aplicar de manera integrada los conceptos fundamentales de DevOps.
- La contenerización simplifica la instalación y ejecución.
- El uso de pruebas y pipelines de CI mejora la calidad del software.
- Usar MongoDB permite una gestión flexible de datos.
- El trabajo en equipo con control de versiones facilita la colaboración.




# Integrantes y Roles que desempeñamos:

- Constantin, Madelaine ---> Tester: Escribió las pruebas automatizadas con Jest y verificó su integridad.

- Maidana, Martin ---> Project Manager y documentación: Organizó las tareas, verificó avances y redactó el presente README.

- Marin, Mariano Daniel ---> Desarrollador Frontend: Creó la interfaz en HTML, CSS y JavaScript que permite interactuar con la API.

- Veron, Lorena Ramis ---> DevOps / Automatización y despliegue: Se encargó de crear los archivos de Docker, el docker-compose y el pipeline de integración continua en GitHub.

- Sazycz, Pablo ---> Desarrollador Backend: Desarrolló el servidor Node.js, API REST y la conexión con MongoDB que manejan las tareas y la conexión a la base de datos.