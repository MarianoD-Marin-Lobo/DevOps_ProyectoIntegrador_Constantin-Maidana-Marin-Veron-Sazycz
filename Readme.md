# Proyecto Integrador DevOps

**Nombre del Proyecto:** `ProyectoIntegrador_Constantin-Maidana-Marin-Veron-Sazycz`

## Descripción del Proyecto

Este proyecto es una aplicación web tipo ToDo List desarrollada con Node.js para el backend,
MongoDB como base de datos y HTML/JS para el frontend. Se incluyen prácticas completas de
DevOps: contenerización con Docker, pruebas automatizadas, CI/CD con GitHub Actions, y
despliegue en entorno de prueba.

## Instrucciones para correr localmente con Docker

1. Asegurarse de tener Docker y Docker Compose instalados.
2. Clonar el repositorio.
3. Ejecutar en consola:
 docker-compose up --build
4. Acceder a la aplicación en: http://localhost:3000


## Estructura del proyecto:
- backend/ -> Código de servidor Node.js, API REST y conexión a MongoDB.
- frontend/ -> Página HTML y lógica en JavaScript.
- tests/ -> Pruebas automatizadas con Jest y Supertest.
- .github/workflows/ -> Pipeline CI/CD con GitHub Actions.

## Descripción del pipeline DevOps:
Ubicado en `.github/workflows/ci-cd.yml`, el pipeline realiza:
- Checkout del repositorio.
- Instalación de dependencias.
- Ejecución de pruebas con Jest.
- Build de la imagen Docker.
- (Opcional: Push de imagen a Docker Hub y despliegue a entorno cloud).

## Conclusiones y roles del equipo:
Cada integrante participó en el desarrollo, testeo, contenerización y automatización del proyecto,
colaborando activamente mediante Git y GitHub.

# Integrantes:
- Constantin, Madelaine
- Maidana, Martin
- Marin, Mariano Daniel
- Veron, Lorena Ramis
- Sazycz, Pablo