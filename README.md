DESCRIPCIÓN
Se solicita implementar una aplicación la cual contará con un frontend, backend y
una base de datos, esta aplicación será desplegada mediante el uso de
contenedores. Además, se solicita que utilizar virtualización por hardware por ello el
desarrollo de la aplicación deberá hacerse utilizando del hipervisor de tipo 1 KVM.

FRONTEND
El estudiante deberá realizar una aplicación desarrollada en React, esta será un
CRUD para el control de vehículos, el cual contará con las siguientes funciones:
• Create: Registrar un nuevo vehículo.
• Read: Visualizar todos los vehículos registrados.
• Update: Modificar el registro de un vehículo en específico.
• Delete: Eliminar registro de un vehículo en específico.
Además, se contará con una función de filtrado de datos mediante el cual se podrá
visualizar todos los vehículos que cumplan con la característica de filtrado. El filtrado
se podrá realizar mediante: Marca, Modelo y Color.

BACKEND
Los datos para el funcionamiento de la aplicación serán obtenidos y almacenados
desde el servidor, por lo que se le solicita al estudiante realizar un servidor
desarrollado con el lenguaje Go.
DATA BASE
Se le solicita al estudiante realizar una base de datos con MongoDB para almacenar
todos los datos de los vehículos registros. Adicionalmente se deberá llegar un
registro de las funciones consultadas. Únicamente se agregará un log al momento
de registrar, actualizar o eliminar un vehículo.

DATOS INCIALES
Por motivos de calificación se solicita que el estudiante tenga los siguientes datos
ingresados en su base de datos:
• 2 vehículos de la misma marca.
• 2 vehículos del mismo modelo
• 2 vehículos del mismo color.
En total deben haber registrados como mínimo 6 vehículos diferentes en la base de
datos al iniciar la aplicación.

DOCKER
Para la creación y ejecución de los contenedores deber hacer uso de docker compose
mediante los comandos:
• docker-compose up -d
• docker-compose down

Además, se solicita que el estudiante utilice dokcer hub para publicar las imágenes
creadas para el funcionamiento de la aplicación. Deberá utilizar el siguiente formato
para las imágenes:
• <<user_dockerhub>>/frontend_p1_<<carnet>>
• <<user_dockerhub>>/backend_p1_<<carnet>>

Se requiere que la base de datos tenga persistencia de manera que al realizar un
docker-compose down y luego un docker-compose up -d, los datos de vehículos
y funciones deben seguir existiendo en la base de datos.