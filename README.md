Este es parte de repositorio del "Challenge" de alkemy de fecha Mayo 2021.

El proyecto no esta teerminado, pero ha alcanzado un nivel importante.

Los punos que considero claves de este proyecto, son los siguientes:

## Conceptos básicos de REACT

## Validación de formulario (Login) utilizando Formik
Para esto utilicé la librería formik, y creé unos eventos para manejar los diferentes estados del prceso de validación. Se puede tener acceso a un eveno que se activa al iniciar el proceso, lo que permitiría, por ejemplo mostrar un loader. 

Unavez realizada la consulta, se tiene acceso a dos eventos. Uno es "error" y el otro es "failed. El primero tiene que ver con problemas como errores de red, desconexión, etc. El segundo evento se dispara cuando todo (a nivel de conexión) ha marchado bien, pero la autenticación no ha sido exitosa. Lo mas probable es por no suministrar credenciales válidos.

## Ejecución de Consultas GET utilizando la librería AXIOS
Esta librería se utilizó para obtener datos de la API e superhéroes requerida para el challenge.

## Consultas medante PROXY para evitar errores CORS
Durate el desarrollo, se presento un inconveniente al intentar consultar la API. Para superar Este obstacúlo, tuve que crear un servidor EXPRESS hospedado en HEROKU. Su función es recibir las peticiónes que se quieren realizar a la API (Superhéroes), y añadir los encabezados necesarios para que no se orinigine un error por intentar acceder a la API desde otro dominio.

## Layout con bootstrap
Utilicé Bootstrap como lo solicitan los parámetros del challenge.

## Uso de Media Queries y Styled Components 
En lugar de utilizar una sola hoja CSS para toda la aplicación, me gusta utilizar módulos CSS para cada componente. Sin embargo, no se pueden hacer MEDIA QUERIES utilizando estos modulos (Hasta donde yo se). Por lo tanto, utilicé STYLED-COMPONENTS que permiten acceder a toda la potencia de CSS. Como el código de un styled component es muy engorroso para colocarlo en la definición del componente React, decidí colocar cada styled component en un archivo independiente, y obtiener un código más limpio.

## TODO:
Por razones personales no pude llevar el proyecto al 100% como tenia pensado. De igual manera, lo terminaré aunque ya la versión final no cuente para el challenge.

Los cambios y aspectos que considero se deben desarrollar:

* teminar de desarrollar la parte visual de la aplicación.
* Incorporar efectos y animaciones CSS.
* Colocar Loaders durante los procesos de carga de imágenes y al momento de enviar formularios.
...revisar, corregir, y seguir evisando...

