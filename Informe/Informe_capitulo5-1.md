# Capitulo 5
## 5.1. Software Configuration Management.

### 5.1.1. Software Development Environment Configuration.

Para el presente trabajo, por motivo de comodidad, dominio o preferencia de ciertas herramientas tecnológicas en la actualidad. El equipo vio adecuado optar por las siguientes:

**Visual Studio Code**: Es un IDE o entorno de desarrollo integrado. En otras palabras, es un editor de código fuente líder en el mundo. Dado que, cuenta con el beneficio de poder complementarse con extensiones, trabajar con múltiples lenguajes de programación, etc. Por otro lado, este IDE es conocido por los integrantes del equipo, asi como han realizado proyectos con anterioridad. Por estos motivos, el equipo decidio trabajar con esta herramienta.   

*Ruta de descarga de Visual Studio Code*: https://code.visualstudio.com/
Una vez descargado el ejecutable, teniendo en cuenta el sistema operativo del usuario, se procede a 
la instalación, la cual es guiada e intuitiva. 	

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/VisualStudioCodeLogo.png?raw=true" alt="Visual Studio Code" width="600px">

*Se han utilizado las siguientes extensiones, todas ellas se encuentran dentro de la tienda de extensiones en el IDE Visual Studio Code:*

**Live Server (Extensión de Visual Studio Code)**: La extensión "Live Server" es una herramienta esencial para cualquier desarrollador web que busque agilizar el proceso de desarrollo y pruebas de aplicaciones web. Con esta herramienta podemos tener una experiencia de desarrollo en tiempo real, permitiéndonos ver los cambios que realizamos en el Landing Page y el aplicativo web de inmediato en el navegador, sin necesidad de recargar la página manualmente. Esto nos permite  concentrarnos en la lógica y la apariencia de nuestro diseño sin interrupciones.

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/LiveServer.png?raw=true" alt="Extensión vscode-style-components" width="700px">

**Auto Rename Tag (Extensión de Visual Studio Code)**: La extensión "AutoRenameTag" es una herramienta esencial que simplifica la edición de etiquetas HTML en el desarrollo web. Esta extensión permite cambiar automáticamente el nombre de una etiqueta y su cierre correspondiente cuando se modifica una de ellas. Esta extensión ahorra tiempo y posibles errores al equipo dado a la cantidad de actualizaciones en el código.

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/AutoRenameTag.png?raw=true" alt="Extensión vscode-style-components" width="700px">

**vscode-styled-components (Extensión de Visual Studio Code)**: La extensión "vscode-styled-components" fue de gran utilidad para el desarrollo del código CSS.  Los beneficios que esta extensión puede ofrecer es dar detalle sobre las propiedades y autocompletado  inteligente para las plantillas de estilo dentro de  componentes. Esto facilita la creación de CSS-JS de manera eficiente y ayuda a mantener  un código limpio y organizado.

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/vscode-style-components.png?raw=true" alt="Extensión vscode-style-components" width="700px">

**Git**: Dado que es necesario colaborar en el proyecto tanto del landing page como el aplicativo web de  manera remota. Se optó por el sistema de control de versiones GIT. Dado que permite la colaboración activa de los miembros del equipo incluso cuando no tengan acceso a internet. Cada miembro almacena  un clon local del proyecto y puede realizar las actualizaciones correspondientes.    

*Ruta de descarga de Git*: https://git-scm.com/downloads    
Una vez descargado el ejecutable, teniendo en cuenta el sistema operativo del usuario, se procede a 
la instalación, la cual es guiada e intuitiva.

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/gitLogo.png?raw=true" alt="git Logo" widht="700px">

**Github**: GitHub es la herramienta perfecta para nuestro equipo. En primer lugar, nos permite  mantener un control preciso de cada cambio en nuestro código, lo que facilita la colaboración  en tiempo real y minimiza los conflictos. Además, es posible realizar revisiones de código,  abrir problemas y fusionar solicitudes de extracción de manera fluida hace que nuestro  trabajo en equipo sea más eficiente y efectivo. En resumen, GitHub se ha convertido en el  núcleo de nuestra estrategia de desarrollo.

Ruta de descarga: https://desktop.github.com    
Una vez descargado el ejecutable, teniendo en cuenta el sistema operativo del usuario, se procede a la instalación, la cual es guiada e intuitiva.

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/GitHubLogo.png?raw=true" alt="Extensión vscode-style-components" width="400px">

### 5.1.2. Source Code Management.
El repositorio de Github donde esta el proyecto y el markdown de este informe será [https://github.com/LuceroObispoRios/Grupo1_SW53.git]  
  
Implementaremos una main branch, la cual representara la versión estable del software. Por otro lado para cada feature se creara un Branch separado llamado feature/nombre. Esto nos permitira trabajar en cada feature sin afectar el main branch.  
  
Estas ramas se deben distinguir claramente y por ello es que utilizaran prefijos descriptivos que identifiquen la funcionalidad que se esta desarrollando en la rama. Por ejemplo, si estamos trabajando una función de registro de usuarios, se podria utilizar el prefijo "feature/registration" en el nombremiento de la rama. Al mismo tiempo se recomienda el uso de guiones (-) u otros separadores como barras diagonales(/) cuando sea meritorio en el nombre de las ramas. Esto mejora la estructura del nombre y la legibilidad de este.  
  
Otras cuestiones del manejo del codigo son utilizar letras minusculas, para mantener consistencia y evitar problemas potenciales en el control de versiones, en los nombres de las branches, asi como ser concisos con el nombramiento de archivos y ramas, evitando a su vez nombres genericos o ambiguos. Por ultimo, aunque no lo planteamos como obligatorio, es usar el idioma inglés en el repositorio, tanto en archivos como ramas, de esta manera se mantiene mayor coherencia y uniformidad.  
  
### 5.1.3. Source Code Style Guide & Conventions.

***Gherkin:***   
(user Story).feature  
Descripción: Es un lenguaje específico de Dominio (DSL), diseñado para resolver un problema muy específico en “pasos”. Está diseñado para ser legible y comprensible tanto por técnicos como por personas no técnicas como perfiles de negocio.  
Convenciones: De acuerdo a Cucumber (s.f.), Gherkin utiliza palabras clave específicas como “Given” (dado), “When” (cuando), “Then” (entonces) y “And” (y) para estructurar escenarios claros y comprensibles; mientras que, las tablas se utilizan para representar datos de entrada y salida usados en los escenarios. Asimismo, se deben tener en cuenta sólo agregar comentarios significativos (líneas que comienza con ”#”) y que cada archivo Gherkin contiene una única característica, y esta contiene uno o más escenarios.  

***HTML:***    
(file).html  
Descripción: Hypertext Makeup Language es el lenguaje estándar que se utiliza para crear y estructurar el contenido de páginas web. Consiste en una serie de etiquetas y elementos que definen diferentes partes del contenido para que se vean o comporten de una determinada manera. 
Convenciones: De acuerdo a W3Schools (s.f.), para facilitar la lectura y la coherencia en el código, es necesario usar espacios o tabulaciones de manera consistente, escribir los nombres de las etiquetas y de los archivos en minúsculas, usar comillas dobles para definir atributos en las etiquetas, usar el elemento "link" y "script" para relacion el archivo html con los archivos css y javascript respectivamente. Asimismo, es importante que cada elemento esté cerrado y que se agreguen solo comentarios significativos (“<!-” para iniciar un comentario y “->” para cerrarlo).  

***CSS:***  
(file).css  
Descripción: Cascading Style Sheets en un lenguaje de hojas de estilo que es utilizado para dar formato y diseño a las páginas web.  
Convenciones: De acuerdo a MDN Web Docs (s.f.), para mejorar la legibilidad, se debe mantener los espacios adecuados, se usarán nombres de clases y selectores en minúscula y claros que reflejen su función, se debe procurar agrupar propiedades relacionadas juntas en el mismo bloque, y se usarán los id’s para poder modificar algún atributo en específico.  

***JavaScript:***  
(file).js  
Descripción: Lenguaje de programación que se usa para poder darle funcionalidades a las páginas web y que permita manipular su contenido y responder a acciones del usuario.  
Convenciones: De acuerdo a MDN Web Docs (s.f.), para mejorar la comprensión del código, se utilizaran nombre de variables y funciones en minúscula, no abreviados y que describan su propósito. Asimismo, se dividirán funciones largas en funciones más pequeñas para facilitar la lectura.  

***Angular:***    
Descripción: Framework de desarrollo de apliciones web escalables y dinámicas, se basa en typescript.   
Convenciones: De acuerdo a Angular (s.f.), la nomenclatura se hace con nombres descriptivos y para separa palabras se utlizan guiones. Se debe utilizar un estructura de carpeta para separar los componentes, módulos y servicios.

### 5.1.4. Software Deployment Configuration.  
Para el desplegue de nuestra aplicación decidimos usar firebase.  

El despliegue de la aplicación se realiza primero creando una cuenta en [https://firebase.google.com](https://firebase.google.com), a partir de eso, se debe crear un proyecto vacio en el cual guardar el despliegue del proyecto.  
![Proyecto en Firebase](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/FirebaseProyecto.JPG?raw=true)

Para realizar el despliegue en si, se tiene que ejecutar los siguientes comandos en orden :  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/comando1.JPG?raw=true" alt="paso 1" width="500px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/comando2.JPG?raw=true" alt="paso 2" width="300px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/comando3.JPG?raw=true" alt="paso 3" width="500px">  
  
En este punto se generara la carpeta dist   
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/carpeta-dist.JPG?raw=true" alt="carpeta Dist" width="600px">     
  
Y se tendra que colocar las variables de entorno en environment.prod.ts  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/variables-entorno.JPG?raw=true" alt="variables" width="500px">  
  
Ahora, para inicializar el despliegue:  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/comando4.JPG?raw=true" alt="paso 4" width="600px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/comando5.JPG?raw=true" alt="paso 5" width="700px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/comando6.JPG?raw=true" alt="paso 6" width="500px">  
  
Con esto nuestra aplicación fue desplegada y se puede encontrar en el siguiente link:  
[https://carga-sin-estres.web.app](https://cargasinestres-tb2.web.app)

*Para que funcione correctamente esta entrega se tiene que hacer json-server --watch db.json a nuestra db en json

## 5.2. Landing Page, Services & Applications Implementation.

### 5.2.1. Sprint 1

#### 5.2.1.1. Sprint Planning 1.
| **Sprint 1** | |
|:---: | :---| 
| | **Sprint planning background** |   
| Date | 27/08/23 |
| Time | 08:00 PM |
| Location | Google Meet - Virtual Meeting |
| Prepared by | Cuevas, Eric |
| Attendees to meeting | Obispo, Lucero / O´Higgins, Andrea / Sebastian, Javier  |
| Sprint n - 0 Review Summary | Se termino de Arreglar los contenidos de los capitulos 1 a 4, y la opinion general es que se hizo satisfactoriamente respecto al tiempo que se utilizo. |
| Sprint n - 0 Retrospective Summary | Las opiniones del equipo indican que durante el transcurso de ese sprint se logro encontrar una manera en la cual esl grupo podria trabajar fluidamente. |
| | **Sprint Goal & User Stories** |
| Sprint & Goal | El objetivo del Sprint 1 sera terminar la Landing Page, asi como los sistemas de registro y login de la aplicación, desarrollandolos de manera que sean responsive y coherentes con el Diseño de Carga sin Estres, además de empezar las preparaciones para desplegar el suigiente sprint. |
| Sprint & Velocity | Lo que respecta al velocity para el primer sprint, no se puede definir puesto que no hay datos históricos sobre los story points cumplidos anteriormente. |
| Sum of Story Point | La suma de Story points que el equipo estara desarrollando este sprint es 12 |

#### 5.2.1.2. Sprint Backlog 1.  
  
A continuación, se describe las tareas que se realizaran durante el primer sprint.
El objetivo del Sprint 1 sera terminar la Landing Page, asi como los sistemas de registro y login de la aplicación, desarrollandolos de manera que sean responsive y coherentes con el Diseño de Carga sin Estres, además de empezar las preparaciones para desplegar el siguiente sprint.

|     Sprint #         |     Sprint 1                |                           |                                                        |                                                                                             |                   |                         |                      |
|----------------------|-----------------------------|---------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------------------|-------------------|-------------------------|----------------------|
|     User   Story     |                             |     Work –   Item/Task    |                                                        |                                                                                             |                   |                         |                      |
|     Id               |     Título                  |     Id                    |     Título                                             |     Descripción                                                                             |     Estimación    |     Asignado   a        |     Estado           |
|     HU001   |     Manejo de Usuario empresa       |     WT01                  |     Registro de empresas de mudanza                  |     Hacer uso de HTML, CSS y JavaScript para implementar el registro de empresas            |     2h            |     Eric Cuevas    |     Completado       |
|     HU002   |     Manejo de Usuario cliente       |     WT02                  |     Registro de cliente                              |     Hacer uso de HTML, CSS y JavaScript para implementar el registro de cliente             |     2h            |     Javier Sebastian    |     Completado       |
|     HU003   |     Iniciar Sesión en la plataforma |     WT03                  |     Implementar un formulario con validación para inicio de sesión    |     Hacer uso de HTML, CSS y JavaScript para implementar la estructura   del login          |     4h            |     Andrea O’Higgins    |     Completado       |
|     HU014   |     Visualizar perfil de empresa    |     WT04                  |     Visualizar  empresas de mudanza en Landing Page    |     Hacer uso de HTML y CSS para visualizar los perfiles de las  empresas de mudanza                         |     1h            |     Lucero Obispo       |     Por Completar       |
|     HU011   |     Búsqueda de empresas    |     WT06                  |     Búsqueda de empresas cercanas                      |     Hacer uso de HTML y JavaScript para implementar la búsqueda de   empresa                |     1h            |     Lucero Obispo    |     Completado       |
  
#### 5.2.1.3. Development Evidence for Sprint Review.

| **Repository** | **Branch** | **Commit Id** | **Commit Message** | **Commit Message Body** | **Commited on (Date)** |
|--------|----------|--------|-------|-------|--------|
| https://github.com/LuceroObispoRios/Grupo1_SW53.git   | main  |  3b6e981055c0120a6b25f0bba205656250d84836  |  Create index.html | -   |  29/08/2023 |
|    | main  | e19687997459a00e8648a07ebf95406e94adda0d   | Add files via upload (Add login)  | -   | 31/08/2023  |
|    | main  | 4a38865e64891a2c073d059c1a4311c089d79e56   | Add files via upload (Search)  | -   | 31/08/2023  |
|    | main  | 8d57461a769e4092ba68f220ed197f09be3ba397   | Add files via upload (Company-Reg)  | -   | 02/09/2023  |
|    | main  | b09be2e234097dc8a890375794befb1cab343595   | Add Registro de cliente   | -   | 03/09/2023  |


#### 5.2.1.4. Testing Suite Evidence for Sprint Review.
Acceptance Tests de los User Stories, archivos .feature utilizando el lenguaje Gherkin
<div style="text-align:center;" >
   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature01-sprint1.png?raw=true" alt="feature 1" width="600px">   

   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature02-sprint1.png?raw=true" alt="feature 2" width="600px">  
   
   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature03-sprint1.png?raw=true" alt="feature 3" width="600px">  

   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature04-sprint1.png?raw=true" alt="feature 4" width="600px">  

   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature05-sprint1.png?raw=true" alt="feature 5" width="600px">  

   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature06-sprint1.png?raw=true" alt="feature 6" width="600px">    

   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature07-sprint1.png?raw=true" alt="feature 7" width="600px">  

   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature08-sprint1.png?raw=true" alt="feature 8" width="600px">  

   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature09-sprint1.png?raw=true" alt="feature 9" width="600px">  

   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature10-sprint1.png?raw=true" alt="feature 10" width="600px">  

   <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature11-sprint1.png?raw=true" alt="feature 11" width="600px">   

![feature 12](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature12-sprint1.jpg?raw=true)  

![feature 13](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature13-sprint1.jpg?raw=true)  

![feature 14](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature14-sprint1.jpg?raw=true)  

![feature 15](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature15-sprint1.jpg?raw=true)  

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature16-sprint1.jpg?raw=true" alt="feature 16" width="600px">  

![feature 17](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature17-sprint1.jpg?raw=true)  

![feature 18](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature18-sprint1.jpg?raw=true)  

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature19-sprint1.jpg?raw=true" alt="feature 19" width="600px">  

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature20-sprint1.jpg?raw=true" alt="feature 20" width="600px">  

<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature21-sprint1.jpg?raw=true" alt="feature 21" width="600px">
</div>

#### 5.2.1.5. Execution Evidence for Sprint Review.  

***Primer Sprint***  
Durante este sprint, nos enfocamos en completar el landing page y en las páginas de registro para cuenta de empresa, registro para cuenta de cliente, inicio de sesión y la página de búsqueda de empresas.  
![landing page](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution_sprint1.JPG?raw=true)  

![landing page](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution2_sprint1.JPG?raw=true)  

![landing page](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution3_sprint1.JPG?raw=true)   

![inicio sesion](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution4_sprint1.JPG?raw=true)   

![busqueda empresa](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution5_sprint1.JPG?raw=true)  

![busqueda empresa](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution6_sprint1.JPG?raw=true)  

![registro cliente](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution7_sprint1.JPG?raw=true)  

![registro empresa](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution8_sprint1.JPG?raw=true)  

![registro empresa](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution9_sprint1.JPG?raw=true)  

Link al repositorio de codigo: [https://github.com/LuceroObispoRios/Grupo1_SW53.git](https://github.com/LuceroObispoRios/Grupo1_SW53.git)  
Link a la plataforma:  [https://luceroobisporios.github.io/Grupo1_SW53/Proyecto/index.html](https://luceroobisporios.github.io/Grupo1_SW53/Proyecto/index.html)  
Link al video de ejecución:  [https://upcedupe-my.sharepoint.com/:v:/g/personal/u202111465_upc_edu_pe/Ec9MST7T0FdKif_wwyg4Qv0BzdIxDk2OLVc9u-MLUXRWag?e=TDbCvF](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202111465_upc_edu_pe/Ec9MST7T0FdKif_wwyg4Qv0BzdIxDk2OLVc9u-MLUXRWag?e=TDbCvF)  
  
#### 5.2.1.6. Services Documentation Evidence for Sprint Review.

*Para este **primer** Sprint no fue contemplado la evidencia de la documentación de nuestros servicios.*  

#### 5.2.1.7. Software Deployment Evidence for Sprint Review.

Para este **primer** avance, el cual abarcaba la landing page, asi como el registro y login de usuarios, se llevo a cabo un desplegue por medio de GitHub Pages.  
![Page_deployment](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/landing-page-deployment.jpeg?raw=true)  
  
#### 5.2.1.8. Team Collaboration Insights during Sprint.
***Primer Sprint***  
Durante el primer sprint, el equipo optó por dividir los puntos entre todos los integrantes por cada capítulo para completar el informe. También, se optó por dividir las páginas por integrante teniendo en cuenta que estas deberán ser responsive y funcionales. Para asegurar que todo esté realizado correctamente, se organizaron reuniones constantes que se llevaron a cabo a través de Google Meet, donde se logró completar el informe y el código de las páginas landing page, registro para cuenta de empresa, registro para cuenta de cliente, inicio de sesión y la página de búsqueda de empresas.  

**GitFlow** 
Durante el primer sprint, nos enfocamos en establecer una base sólida para el proyecto. Trabajamos en la rama main, donde nos dedicamos a la elaboración del informe y la creación de la landing page. Una vez que finalizamos estos elementos, procedimos a realizar el despliegue en GitHub Pages, trasladando específicamente el proyecto de la landing page a una rama llamada deployment para su implementación.  

A continuación, se presentan screenshots que reflejan el trabajo realizado durante este sprint.  

![team collaboration](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/teamcollaboration_sprint1.png?raw=true)   

![team collaboration](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/teamcollaboration2_sprint1.png?raw=true)   

![team collaboration](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/teamcollaboration3_sprint1.png?raw=true)   

---  

### 5.2.2. Sprint 2

#### 5.2.2.1. Sprint Planning 2.  
  
| **Sprint 2** | |
|:---: | :---| 
| | **Sprint planning background** |   
| Date | 11/09/23 |
| Time | 08:00 PM |
| Location | Google Meet - Virtual Meeting |
| Prepared by | Cuevas, Eric |
| Attendees to meeting | Obispo, Lucero / O´Higgins, Andrea / Tasayco, Javier  |
| Sprint n - 1 Review Summary | Se Inicio con el desarrollo de la aplicación web, implementandose la landing page y los principios de otras partes de la aplicación, asi como se termino una primera versión del informe |
| Sprint n - 1 Retrospective Summary | Junto con el feedback recibido, podemos acordar que varias partes del desarrollo en ambos el informe y aplicación necesitan mejoras para cumplir los estandares requeridos, aspiramos a que este sprint 2 sea mejor. |
| | **Sprint Goal & User Stories** |
| Sprint & Goal | El objetivo del Sprint 2 sera terminar con la sección de manejo de usuario, lo cual engloba el registro y ajuste de datos de ambos tipos de usuario, asi como el inicio de sesión de la app, y tambien se terminara con la busqueda de empresas, vista principal del cliente. A su vez se avanzaran la vista de membresias para empresas, del historial de reservas del cliente, asi como los servicios y componentes del dominio Public.|
| Sprint & Velocity | El Sprint Velocity establecido para este sprint es 12 |
| Sum of Story Point | La suma de Story points que el equipo estara desarrollando este sprint es 41 |   
  
#### 5.2.2.2. Sprint Backlog 2.  

|     Sprint #         |     Sprint 2                |                           |                                                        |                                                                                             |                   |                         |                      |
|----------------------|-----------------------------|---------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------------------|-------------------|-------------------------|----------------------|
|     User   Story     |                             |     Work –   Item/Task    |                                                        |                                                                                             |                   |                         |                      |
|     Id               |     Título                  |     Id                    |     Título                                             |     Descripción                                                                             |     Estimación    |     Asignado   a        |     Estado           |
|     HU004      |     Ajustes de cuenta de cliente    |     WT01                  |     Implemetar el formulario para edición de cuenta cliente               |     Hacer uso de HTML y JavaScript para mostrar un formulario con los datos a editar dado una cuenta cliente                |     2h            |     Eric Cuevas         |     Completado    |
|     HU005      |     Ajustes de cuenta de empresa    |     WT02                  |     Implemetar el formulario para edición de cuenta empresa               |     Hacer uso de HTML y JavaScript para mostrar un formulario con los datos a editar dado una cuenta empresa                 |     2h            |     Eric Cuevas         |     Completado    |
|     HU006   |      Cerrar Sesión     |     WT03                  |     Implementar el botón de cerrar sesión                                    |     Hacer uso de HTML, CSS y JavaScript para implementar el cierre de   sesión.            |     2h            |     Eric Cuevas    |     Completado    |
|     HU007      |     Elección   de membresía de empresa        |     WT04                  |        Visualizar y seleccionar una membresia              |     Hacer uso de HTML y JavaScript para implementar la elección de   membresía*              |     2h            |     Javier Sebastian      |     Completado    |
|     HU008      |     Pago   de membresía        |     WT05                 |             Implementar un formulario de subscripción             |     Hacer uso de HTML y JavaScript para implementar el pago de membresía                    |     2h            |     Javier Sebastian        |     Completado    |
|     HU008      |     Pago   de membresía        |     WT06                  |            Selección de método de pago                      |     Hacer uso de HTML y JavaScript para implementar la selección de método   de pago        |     3h            |     Javier Sebastian         |         Completado    |
|     HU010      |      Detalles de pago            |     WT07                  |             Implementar un ticket de pago dada una subscripción         |     Hacer uso de HTML para implementar los detalles de pago                                 |     1h            |     Javier Sebastian         |     Completado    |
|     HU012      |     Filtrar por servicios ofrecidos   |     WT08                  |           Implementar el filtrado de empresas por servicios ofrecidos              |     Hacer uso de HTML y JavaScript para implementar el filtrado por servicios*               |     2h            |     Lucero Obispo     |     Completado    |
|     HU013      |    Filtrar por calificación      |     WT09              |              Implementar el filtrado de empresas por calificación                  |     Hacer uso de HTML y JavaScript para implementar el filtrado por calificación            |     2h            |     Lucero Obispo     |     Por completar    |
|     HU014   |     Visualizar perfil de empresa    |     WT10                  |     Visualización de disponibilidad de empresa                    |     Hacer uso de HTML y JavaScript para implementar la visualización de   disponibilidad de una empresa    |     1h            |     Lucero Obispo       |     Completado    |
|     HU015      |     Envío de información sobre la posible reserva    |     WT11                  |     Ingresar   a la reserva del servicio               |     Hacer uso de HTML y JavaScript para ingresar a la reserva del   servicio                |     2h            |     Eric Cuevas         |     Completado    |
|     HU015      |     Envío de información sobre la posible reserva    |     WT12                  |     Seleccionar   servicios a reservar                 |     Hacer uso de HTML y JavaScript para implementar la selección de   servicios             |     2h            |     Eric Cuevas         |     Completado       |
|     HU015      |     Envío de información sobre la posible reserva    |     WT13                  |     Realizar una solicitud del servicio               |     Hacer uso de HTML y JavaScript para realizar una solicitud del servicio                 |     2h            |     Eric Cuevas         |     Completado    |
|     HU017 & HU018      |    Visualizar historial de reservas     |     WT14                  |     Listar todas las reservas realizadas por un usuario cliente            |     Hacer uso de HTML y JavaScript para listar todas las reservas realizadas por un usuario cliente en cards.                 |     2h            |     Eric Cuevas         |     In Process    |
|     HU016 & HU019   |     Acordar un precio por servicio reservado & Comunicación mediante chat con la empresa      |     WT15                  |     Implementar un chat entre cliente y miembro de la empresa                 |     Hacer uso de HTML, CSS y JavaScript para implementar la comunicación del servicio mediante chat         |     4h            |     Lucero Obispo       |     In Process    |

#### 5.2.2.3. Development Evidence for Sprint Review.

Para este Sprint se desarrolló el Frontend de la plataforma.

![Development Evidence](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/development-evidence-sprint2-os.png?raw=true)  

#### 5.2.2.4. Testing Suite Evidence for Sprint Review.

Acceptance Tests actualizados de los User Stories, archivos .feature utilizando el lenguaje Gherkin.
  
<div style="text-align:center;">
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature01-sprint2.png?raw=true" alt="Feature 1" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature02-sprint2.png?raw=true" alt="Feature 2" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature03-sprint2.png?raw=true" alt="Feature 3" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature04-sprint2.png?raw=true" alt="Feature 4" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature05-sprint2.png?raw=true" alt="Feature 5" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature06-sprint2.png?raw=true" alt="Feature 6" width="600px">    
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature07-sprint2.png?raw=true" alt="Feature 7" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature08-sprint2.png?raw=true" alt="Feature 8" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature09-sprint2.png?raw=true" alt="Feature 9" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature10-sprint2.png?raw=true" alt="Feature 10" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature11-sprint2.png?raw=true" alt="Feature 11" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature12-sprint2.png?raw=true" alt="Feature 12" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature13-sprint2.png?raw=true" alt="Feature 13" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature14-sprint2.png?raw=true" alt="Feature 14" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature15-sprint2.png?raw=true" alt="Feature 15" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature16-sprint2.png?raw=true" alt="Feature 16" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature17-sprint2.png?raw=true" alt="Feature 17" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature18-sprint2.png?raw=true" alt="Feature 18" width="600px">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature19-sprint2.png?raw=true" alt="Feature 19" width="600px">  
</div>


#### 5.2.2.5. Execution Evidence for Sprint Review. 
***Segundo Sprint***  
Durante este sprint, nos enfocamos en terminar con la sección de manejo de usuario, lo cual engloba el registro y ajuste de datos de ambos tipos de usuario, asi como el inicio de sesión de la app, y tambien con la busqueda de empresas, vista principal del cliente. A su vez se avanzaran la vista de membresias para empresas, del historial de reservas del cliente, asi como los servicios y componentes del dominio Public.  
 
![Login-sprint2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-login.JPG?raw=true)  
![Registrar-cliente](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-registrarCliente.JPG?raw=true)   
![registrar-empresa1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-RegistrarEmpresa1.JPG?raw=true)  
![registrar-empresa2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-RegistrarEmpresa2.JPG?raw=true)  
![ajustes de cliente](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-ClientSettings.JPG?raw=true)  
![busqueda de empresas](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-Busqueda.JPG?raw=true)  
![Carta de información de empresa](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-Busqueda2.JPG?raw=true)  
![historial de reservas](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-historial.JPG?raw=true)  
![historial de reservas](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-historial2.JPG?raw=true)   
![ajustes de empresa 1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-CompanySettings.JPG?raw=true)   
![ajustes de empresa 2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-CompanySetting2.JPG?raw=true)  
![membresias](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-Membresias.JPG?raw=true)  
![formulario membresias 1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-FormMembresia.JPG?raw=true)  
![formulario membresias 2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/SP2-FormMembresia2.JPG?raw=true)  

#### 5.2.2.6. Services Documentation Evidence for Sprint Review.  

**Introduccion:**  
Para este segundo sprint se ha logrado implementar 12 endpoints, los cuales han sido exitosamente logrados y documentados.  
Los metodos GET clients y companies con parametro de id estan relacionados a la pantalla de Login, para verificar que el usuario existe en la base de datos json.  
Asmismo, los metodos POST companies y clientes estan relacionados a las pantallas de Register Client y Register Company para registrar la informacion tanto del cliente como de la empresa.  
Los metodos PUT clients y companies estan relacionados a las pantallas Client Settings y Company Settings, para editar los datos de estos.  
Los metodos GET companies y GET companies con parametro de id, estan relacionados a la pantalla de Busqueda de Empresas, donde el usuario puede ver la lista completa de empresa, y cuando le da click a una fila puede acceder a la informacion de una empresa en especifica.  
Por ultimo, los metodos POST bookingHistory, GET booking History, asi como los metodos GET chat y POST chat permiten al usuario crear una reserva como visualizar en el historia de reservas, teniendo en cuenta que desde este historial se puede crear mensajes.

**Tabla:**  

|     **Endpoint**    | **Metodo HTTP** |           **Acciones (Explicacion del response)**                                                           | **Enlace** | 
|--------|----------|--------|-------|
|  /companies         |       GET       | 200 OK: Retorna la lista de todas las empresas registradas                                                  |   [https://carga-sin-estres.web.app/company-table](https://carga-sin-estres.web.app/company-table)      |
|  /companies/{id}    |       GET       | 200 OK: Retorna información de la compañía correspondiente al ID especificado (parametro: id, ejemplo: '1') |   [https://carga-sin-estres.web.app/company/1](https://carga-sin-estres.web.app/company/1)         |
|  /bookingHistory    |       POST      | 201 Created: Indica que la reserva ha sido creada exitosamente                                              |   [https://carga-sin-estres.web.app/company/1](https://carga-sin-estres.web.app/company/1)         |
|  /bookingHistory    |       GET       | 200 OK: Retorna la lista de todas las reservas de historial registradas                                     |   [https://carga-sin-estres.web.app/history-cards](https://carga-sin-estres.web.app/history-cards)         |
|  /chat              |       GET       | 200 OK: Retorna la lista de todos los mensajes de chat registrados                                          |   [https://carga-sin-estres.web.app/history-cards](https://carga-sin-estres.web.app/history-cards)         |
|  /chat              |       POST      | 201 Created: Indica que el mensaje de chat ha sido creado exitosamente                                      |   [https://carga-sin-estres.web.app/history-cards](https://carga-sin-estres.web.app/history-cards)         |
|  /clients           |       GET       | 200 OK: Retorna la información del cliente si el email y contrasena son válidas                             |   [https://carga-sin-estres.web.app/login](https://carga-sin-estres.web.app/login)         |
|  /companies         |       GET       | 200 OK: Retorna la información de la empresa si el email y contrasena son válida                            |   [https://carga-sin-estres.web.app/login](https://carga-sin-estres.web.app/login)         |
|  /clients           |       POST      | 201 Created: Indica que el cliente ha sido creado exitosamente                                              |   [https://carga-sin-estres.web.app/client-form](https://carga-sin-estres.web.app/client-form)         |
|  /companies         |       POST      | 201 Created: Indica que la compañía ha sido creada exitosamente                                             |   [https://carga-sin-estres.web.app/company-form](https://carga-sin-estres.web.app/company-form)         |
|  /clients/{id}      |       PUT       | 200 OK: Indica que los datos del cliente han sido actualizados exitosamente (paranetro, ejemplo: '31')      |   [https://carga-sin-estres.web.app/client-settings/1](https://carga-sin-estres.web.app/client-settings/1)         |
|  /companies/{id}    |       PUT       | 200 OK: Indica que los datos de la compañía han sido actualizados exitosamente (paranetro, ejemplo: '2')    |   [https://carga-sin-estres.web.app/client-settings/8](https://carga-sin-estres.web.app/company-settings/8)         |  

Link del Repositorio de Web Services: [https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/CargaSinEstres-V1/src/app/services/carga-sin-estres-data.service.ts](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/CargaSinEstres-V1/src/app/services/carga-sin-estres-data.service.ts)  

**Captura de interaccion con datos de prueba**   

*Registrar Cliente*  
- Antes de registrar cliente Lucero. Como se puede ver, el unico cliente es Eric  
![servicios-ejemplos](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/services1.JPG?raw=true)

- Despues de registrar cliente Lucero. Como se pueder, el db.json cambio, pues se ha agregado un nuevo registro que guarda la informacion del cliente lucero. Mediante la sintaxis POST /clients  
![servicios-ejemplos](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/services2.JPG?raw=true)

*Obtener la informacion de una empresa por su id*  
- Mediante la sintaxis GET /companies/{id}. En la consola se puede visualizar la informacion obtenida de esa empresa en especifico  
![servicios-ejemplos](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services3.JPG?raw=true)  

*Realizar una reserva*  
- Antes de realizar una reserva
<div style="text-align:center;">
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services4.JPG?raw=true" alt="servicio ejemplos" width="600px">
</div>

- Mediante la sintaxis POST /bookingHistory. Se crea una reserva y se almacena el db.json, se puede ver en la consola la informacion de la nueva reserva.
![servicios-ejemplos](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/services5.JPG?raw=true)  

**Editar datos de un cliente**  
- Antes de presionar el boton de guardar cambios, se puede ver en la consola que la informacion del cliente actual es la informacion de Eric.
<div style="text-align:center;">
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/services6.JPG?raw=true" alt="servicio ejemplos" width="600px">
</div>

- Mediante la sintaxis PUT /clients/{id}. Se edita los datos cliente Eric, y son reemplazados por la del cliente Celia  
![servicios-ejemplos](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/services7.JPG?raw=true)  
  
#### 5.2.2.7. Software Deployment Evidence for Sprint Review.
La aplicación desplegada se encuentra en el siguiente enlace  
[https://cargasinestres-tb2.web.app](https://cargasinestres-tb2.web.app),  
más para su correcto funcionamiento, se necesita desplegar el servidor json-server de nustro archivo db.json, en cual se encuentra en el siguiente enlace [https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/CargaSinEstres-V1/src/assets/db.json](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/CargaSinEstres-V1/src/assets/db.json)  
  
#### 5.2.2.8. Team Collaboration Insights during Sprint.

**GitFlow**   
En el segundo sprint, adoptamos un enfoque más centrado en el desarrollo de funcionalidades. Cada miembro del equipo creó y trabajó en ramas individuales denominadas nombre-del-integrante/feature para desarrollar diversas funcionalidades utilizando Angular. De esta forma, cada uno de nosotros tenía su propia rama personalizada, lo que nos permitió trabajar de manera eficiente y llevar un registro claro de nuestras contribuciones al proyecto. Luego, fusionamos estos avances en la rama develop para consolidar el progreso general del proyecto. Simultáneamente, continuamos avanzando con el informe en la rama main. Al finalizar el sprint, unimos todos los cambios de la rama develop a la rama main para presentar una versión unificada del trabajo realizado.

![network 1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Network1.png?raw=true)  
![network 2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Network2.png?raw=true)  
**Contribuitors**    
![contribuitors](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/contribuitors.png?raw=true)  

### 5.2.3. Sprint 3

#### 5.2.3.1. Sprint Planning 3  
  
| **Sprint 3** | |
|:---: | :---| 
| | **Sprint planning background** |   
| Date | 2/10/23 |
| Time | 10:00 PM |
| Location | Discord - Virtual Meeting |
| Prepared by | Cuevas, Eric |
| Attendees to meeting | Obispo, Lucero / O´Higgins, Andrea / Sebastian, Javier |
| Sprint 2 Review Summary | Se realizo el sprint 2, se mejoro el codigo y se trato de terminar el aspecto front-end de la aplicación |
| Sprint 2 Retrospective Summary | Se trabajo fluidamente, participando todos por igual en la realización del proyecto, más en la opinión del grupo creemos que pudimos haber terminado más partes del front-end. |
| | **Sprint Goal & User Stories** |
| Sprint & Goal | El objetivo del Sprint 3 sera terminar Frontend de la applicación, asi como avanzar el back-end hasta un punto funcional que podamos completar el siguiente sprint. |
| Sprint & Velocity | Debido al alcanze establecido para este sprint, el Velocity establecido para este sprint es 30. |
| Sum of Story Point | La suma de Story points que el equipo estara desarrollando este sprint es 26. |  

#### 5.2.3.1. Sprint Backlog 3 

|     Sprint #         |     Sprint 3                |                           |                                                        |                                                                                             |                   |                         |                      |
|----------------------|-----------------------------|---------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------------------|-------------------|-------------------------|----------------------|
|     User   Story     |                             |     Work –   Item/Task    |                                                        |                                                                                             |                   |                         |                      |
|     Id               |     Título                  |     Id                    |     Título                                             |     Descripción                                                                             |     Estimación    |     Asignado   a        |     Estado           |
|     US09   |     Pago para reserva de servicio      |     WT01                  |     Implementar selección de método de pago para reserva            |     Recuperar el método de pago de una cuenta para realizar la reserva         |     3            |     Eric Cuevas      |     Done    |
|     US10   |     Detalles de pago      |     WT02                  |     Implementar el detalle de pago posterior a una reserva                 |     Recuperar el detalle de pago y listarlo en las reservas realizadas por el cliente         |     3           |     Lucero Obispo       |     Done    |
|     US11   |     Búsqueda de empresas cercanas      |     WT03                 |     Implementar la reserva rápida                 |     Recuperar la información de las empresas cercanas a la ubicación del usuario         |    5            |     Lucero Obispo      |     Done    |
|     US16 & US19   |     Comunicación mediante chat con la empresa      |     WT04                  |     Implementar un chat              |      Implementar el sistema de mensajería entre cliente y representante/trabajador de una empresa        |     5            |     Andrea O'higgins      |     Done    |
|     US17   |     Visualizar historial de reservas cliente      |     WT05                  |     Implementar historial de reservas para usuario cliente                 |     Recuperar la información de las reservas realizadas por un usuario y mostrarlas mediante tarjetas         |     5          |     Javier Sebastian       |     Done    |
|     US18   |     Visualizar historial de reservas empresa      |     WT06                  |     Implementar historial de reservas para usuario empresa                  |     Recuperar la información de las reservas solicitadas hacia la empresa y mostrarlas mediante tarjetas         |     5            |     Andre O'higgins       |     Done    |


#### 5.2.3.3. Development Evidence for Sprint Review.
  
<div style="text-align:center;">
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/development-evidence-sprint3-1.png?raw=true" alt="Development Evidence - parte 1" width="450">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/development-evidence-sprint3-2.png?raw=true" alt="Development Evidence - parte 2" width="450">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/development-evidence-sprint3-3.png?raw=true" alt="Development Evidence - parte 3" width="450">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/development-evidence-sprint3-4.png?raw=true" alt="Development Evidence - parte 4" width="450">  
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/development-evidence-sprint3-5.png?raw=true" alt="Development Evidence - parte 5" width="450">  
</div>  
  
#### 5.2.3.4. Testing Suite Evidence for Sprint Review.

Acceptance Tests actualizados de los User Stories, archivos .feature utilizando el lenguaje Gherkin.

**feature 9**   
<div style="text-align:center;">
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature9-sprint3.png?raw=true" alt="Feature 9" width="600px">
</div>

**feature 10** 
<div style="text-align:center;">
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature11-sprint3.png?raw=true" alt="Feature 10" width="600px">
</div>

**feature 11** 
<div style="text-align:center;">
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature12-sprint3.png?raw=true" alt="Feature 11" width="600px">
</div>

**feature 16**
<div style="text-align:center;">
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature17-sprint3.png?raw=true" alt="Feature 16" width="600px">
</div>

**feature 17** 
<div style="text-align:center;">
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature18-sprint3.png?raw=true" alt="Feature 17" width="600px">
</div>

**feature 18** 
<div style="text-align:center;">
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature19-sprint3.png?raw=true" alt="Feature 18" width="600px">
</div>

**feature 19** 
<div style="text-align:center;">
    <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/feature20-sprint3.png?raw=true" alt="Feature 19" width="600px">
</div>
  
#### 5.2.3.5. Execution Evidence for Sprint Review  

Durante el Tercer Sprint, logramos implementar diversas funcionalidades en el front-end, estas incluyen la incorporación de filtros para una búsqueda de empresas por nombre, servicios y ubicación, a través de la ubicación ingresada por el usuario o su ubicación actual. Además, hemos agregado la función de carga rápida, que permite la generación instantánea de reservas. Agregamos la visualización destacada para las empresas con membresía, y hemos habilitado la función de reseñas y chat en la sección de historial de reservas. Asimismo, creamos vistas diferenciadas para clientes y empresas, cada uno tiene su historial de reservas. Por otro lado, en el backend, hemos desarrollado los servicios para las entidades clave, incluyendo cliente, empresa, historial de reservas, chat, reseñas, pago y empresa contratada, junto con la implementación del DTO y Model Mapper.   

<div style="text-align:center;">
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution-busqueda%20-empresas.png?raw=true" alt="busqueda de empresas" width="600px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution-chat.png?raw=true" alt="chat reserva" width="600px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution-carga-rapida.png?raw=true" alt="carga rapida" width="600px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution-rese%C3%B1a.png?raw=true" alt="escribir reseña" width="600px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution-visualizacion-rese%C3%B1a.png?raw=true" alt="visualizar reseña" width="600px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution-boleta-membresia.png?raw=true" alt="boleta membresía" width="600px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution-filtro-ubicacion.png?raw=true" alt="filtro ubicación" width="600px">  
<img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/execution-filtro-servicios.png?raw=true" alt="filtro servicios" width="600px">  
</div>


#### 5.2.3.6. Services Documentation Evidence for Sprint Review.  

**Introduccion:**  
Para este tercer sprint se ha logrado implementar 11 endpoints, los cuales han sido exitosamente logrados y documentados.  
Los metodos GET clients y companies con parametro de id estan relacionados a la pantalla de Login, para verificar que el usuario existe en la base de datos json.  
Asmismo, los metodos POST companies y clientes estan relacionados a las pantallas de Register Client y Register Company para registrar la informacion tanto del cliente como de la empresa.  
Los metodos GET all companies y GET companies con parametro de id, estan relacionados a la pantalla de Busqueda de Empresas, donde el usuario puede ver la lista completa de empresa, y cuando le da click a una fila puede acceder a la informacion de una empresa en especifica.  
Los metodos GET all reviews y GET reviews con parametro de id, estan relacionados a la pantalla de Informacion de Empresa porque aqui se visualizaran las reseñas que recibe una empresa en especifica, mientras que en la pantalla Historial de Reservas se podrá crear una reseña, una vez la reserva tenga como estado finalizado.
Por ultimo, los metodos POST bookingHistory, GET booking History con parametro id cliente o empresa, permiten al usuario crear una reserva como visualizar el historia de reservas de una empresa o cliente en especifico.

**Tabla:**  

|     **Endpoint**    | **Metodo HTTP** |           **Acciones (Explicacion del response)**                                                           | **Enlace** | 
|--------|----------|--------|-------|
|  /companies                    |       GET       | 200 OK: Retorna la lista de todas las empresas registradas                                                  | [http://localhost:8080/api/v1/companies](http://localhost:8080/api/v1/companies)  |
|  /companies/{id}               |       GET       | 200 OK: Retorna información de la compañía correspondiente al ID especificado (parametro: id, ejemplo: '1') | [http://localhost:8080/api/v1/companies/1](http://localhost:8080/api/v1/companies/1)     |
|  /companies                    |       POST      | 201 Created: Indica que la compañía ha sido creada exitosamente                                             | [http://localhost:8080/api/v1/companies](http://localhost:8080/api/v1/companies)     |
|  /clients/login                |       GET       | 200 OK: Retorna la información del cliente si el email y contrasena son válidas                             | [http://localhost:8080/api/v1/clients/login](http://localhost:8080/api/v1/clients/login)  |
|  /companies/login              |       GET       | 200 OK: Retorna la información de la empresa si el email y contrasena son válidas                           | [http://localhost:8080/api/v1/companies/login](http://localhost:8080/api/v1/companies/login)  |
|  /clients                      |       POST      | 201 Created: Indica que el cliente ha sido creado exitosamente                                              | [http://localhost:8080/api/v1/clients](http://localhost:8080/api/v1/clients) |
|  /clients/{id}                 |       PUT       | 200 OK: Retorna información del cliente correspondiente al ID especificado (parametro: id, ejemplo: '1')    | [http://localhost:8080/api/v1/clients/1](http://localhost:8080/api/v1/clients/1) |
|  /reviews                      |       POST      | 201 Created: Indica que la reseña ha sido creada exitosamente                                               | [http://localhost:8080/api/v1/reviews](http://localhost:8080/api/v1/reviews) |
|  /reviews/company/{companyId}  |       GET       | 200 OK: Retorna información de la reseña correspondiente al copmanyID (parametro: companyId, ejemplo: '1')  | [http://localhost:8080/api/v1/companies/1](http://localhost:8080/api/v1/reviews/1)     |
|  /bookingHistory               |       POST      | 201 Created: Indica que la reserva ha sido creada exitosamente                                              | [http://localhost:8080/api/v1/bookingHistory](http://localhost:8080/api/v1/bookingHistory)       |
|  /bookingHistory/client/{id}   |       GET       | 200 OK: Retorna todas las reservas de historial registradas segun id cliente (parametro: id, ejemplo: '1')  | [http://localhost:8080/api/v1/bookingHistory/client/1](http://localhost:8080/api/v1/bookingHistory/client/1)  |
|  /bookingHistory/company/{id}  |       GET       | 200 OK: Retorna todas las reservas de historial registradas segun id company (parametro: id, ejemplo: '1')  | [http://localhost:8080/api/v1/bookingHistory/client/1](http://localhost:8080/api/v1/bookingHistory/company/1)  |


Link del Repositorio de Web Services: [https://github.com/LuceroObispoRios/Grupo1_SW53/tree/develop/Backend/CargaSinEstres ](https://github.com/LuceroObispoRios/Grupo1_SW53/tree/develop/Backend/CargaSinEstres)  
Link del swagger: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html )  

**Capturas de interaccion con datos de prueba**  
- Registrar empresa (POST)   
El usuario agrega una nueva empresa a la base de datos para registrarse. Esta operación se realiza mediante una solicitud HTTP POST. En este ejemplo vemos que el usuario ha colocado todos datos necesarios para registrar su empresa Transporte y Mudanzas Rapi2
Una vez que se haya registrado la empresa, el servidor enviará una respuesta al cliente que realizó la solicitud POST. Esta respuesta generalmente incluirá un código de estado HTTP para indicar si la operación se realizó con éxito (por ejemplo, código 201 - Creado) o si hubo algún error (por ejemplo, código 400 - Error de solicitud).   
![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services1_3.JPG?raw=true)   
- Registrar cliente (POST)   
El usuario agrega un nuevo cliente a la base de datos para registrarse. Esta operación se realiza mediante una solicitud HTTP POST. En este ejemplo vemos que el usuario Lucero ha colocado todos datos necesarios para registrar su cuenta personal
Una vez que se haya registrado el cliente, el servidor enviará una respuesta al cliente que realizó la solicitud POST. Esta respuesta generalmente incluirá un código de estado HTTP para indicar si la operación se realizó con éxito (por ejemplo, código 201 - Creado) o si hubo algún error (por ejemplo, código 400 - Error de solicitud).    
![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services2_3.JPG?raw=true)   
- Registrar reserva (POST)   
El usuario agrega una nueva reserva para solicitar servicios de mudanza. Esta operación se realiza mediante una solicitud HTTP POST. En este ejemplo vemos que el usuario colocado todos datos necesarios para solicitar una reserva.
Una vez que se solicitado la reserva, el servidor enviará una respuesta al cliente que realizó la solicitud POST. Esta respuesta generalmente incluirá un código de estado HTTP para indicar si la operación se realizó con éxito (por ejemplo, código 201 - Creado) o si hubo algún error (por ejemplo, código 400 - Error de solicitud).   
![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services3_3.JPG?raw=true)  
- Registrar reseña (POST)   
El usuario agrega una nueva reseña a la base de datos para calificar el servicio brindado por una empresa. Esta operación se realiza mediante una solicitud HTTP POST. En este ejemplo vemos que el usuario ha colocado todos datos necesarios para publicar su reseña.
Una vez que se haya creado la reseña, el servidor enviará una respuesta al cliente que realizó la solicitud POST. Esta respuesta generalmente incluirá un código de estado HTTP para indicar si la operación se realizó con éxito (por ejemplo, código 201 - Creado) o si hubo algún error (por ejemplo, código 400 - Error de solicitud).   
![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services4_3.JPG?raw=true)  
- Obtener lista de todas las empresas (GET)   
Los usuarios desean consultar una lista de todas las empresas registradas en la plataforma de búsqueda de servicios de mudanza. Esta operación se realiza mediante una solicitud HTTP GET. A continuación, se presenta un ejemplo en el que un cliente solicita la lista de todas las empresas disponibles.  
![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services5_3.JPG?raw=true)  
- Obtener empresa por su id (GET)  
Los usuarios desean consultar la información de una empresa específica en la plataforma de búsqueda de servicios de mudanza. Esta operación se realiza mediante una solicitud HTTP GET utilizando el identificador único (ID) de la empresa. A continuación, se presenta un ejemplo en el que un cliente solicita la información de una empresa por su ID.    
![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services6_3.JPG?raw=true)   
- Obtener cliente por su id (GET)
Los usuarios desean consultar su información personal, por eso se brinda el id del cliente. Esta operación se realiza mediante una solicitud HTTP GET utilizando el identificador único (ID) del cliente. A continuación, se presenta un ejemplo en el que se solicita la información de un cliente por su ID.  
![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services7_3.JPG?raw=true)  
- Obtener cliente por email y contraseña (GET)
Esta funcionalidad permite la consulta de información de un cliente utilizando su dirección de correo electrónico y contraseña. Esta funcionalidad ayuda a poder logearse en la aplicacion como usuario tipo cliente. Se realiza una solicitud HTTP GET para verificar la identidad y obtener detalles del cliente correspondiente al correo electrónico y contraseña proporcionados. A continuación, se presenta un ejemplo en el que se solicita la información del cliente por correo electrónico y contraseña.  
<div style="text-align:center;">  
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services8_3.JPG?raw=true" alt="services" width="600px">   
</div>  
- Obtener reseñas por el id de la empresa (GET)   
Esta funcionalidad permite obtener reseñas específicas asociada a una empresa. Se realiza una solicitud HTTP GET para recuperar los detalles de una reseña en función del identificador único (ID) de la empresa. A continuación, se presenta un ejemplo en el que se solicita la información de una reseña por el ID de la empresa.   
  
<div style="text-align:center;">  
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services9_3.JPG?raw=true" alt="services" width="500px">   
</div>   
  
- Obtener reserva por id cliente (GET)   
Esta funcionalidad permite obtener reservas específicas asociada a un cliente. Se realiza una solicitud HTTP GET para recuperar los detalles de la reserva en función del identificador único (ID) del cliente. A continuación, se presenta un ejemplo en el que se solicita la información de una reserva por el ID del cliente.    
  
![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services10_3.JPG?raw=true)     
  
- Obtener reserva por id empresa (GET)   
Esta funcionalidad permite obtener reservas específicas asociada a una empresa. Se realiza una solicitud HTTP GET para recuperar los detalles de la reserva en función del identificador único (ID) del cliente. A continuación, se presenta un ejemplo en el que se solicita la información de una reserva por el ID de la empresa.
  
![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services11_3.JPG?raw=true)   
  
- Obtener empresa por email y contraseña (GET)  
Esta funcionalidad permite la consulta de información de una empresa utilizando su dirección de correo electrónico y contraseña. Esta funcionalidad ayuda a poder logearse en la aplicacion como usuario tipo empresa. Se realiza una solicitud HTTP GET para verificar la identidad y obtener detalles de la empresa correspondiente al correo electrónico y contraseña proporcionados. A continuación, se presenta un ejemplo en el que se solicita la información de la empresa por correo electrónico y contraseña.   

![services](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/services12_3.JPG?raw=true)   


#### 5.2.3.7. Software Deployment Evidence for Sprint Review.  

La aplicación desplegada se encuentra en el siguiente enlace  
[https://cargasinestres-tb2.web.app](https://cargasinestres-tb2.web.app),  
*más para su correcto funcionamiento para este entrega, se necesita desplegar el servidor json-server de nustro archivo db.json, en cual se encuentra en el siguiente enlace [https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/CargaSinEstres-V1/src/assets/db.json](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/CargaSinEstres-V1/src/assets/db.json)  
  
Asu vez, tambien se ha desplegado el backend por medio de zeabur  
[https://cargasinestres.zeabur.app/swagger-ui/index.html](https://cargasinestres.zeabur.app/swagger-ui/index.html)  
El cual utiliza una base de datos desplegada en railway, y cuyo repositorio desde el que se toman los archivos de despliege es el siguiente :  
[Repositorio de despliegue backend - Carga Sin Estres](https://github.com/Ericcuevas03/grupo1-backend-openSource-V2/tree/main)  
  
#### 5.2.3.8. Team Collaboration Insights during Sprint.

**GitFlow**   
Durante el tercer sprint, continuamos nuestra metodología de trabajo colaborativo utilizando ramas feature individuales para cada miembro del equipo. De esa forma, se logra garantizar que cada integrante tuviera su propio espacio para trabajar de manera efectiva y mantener un registro claro de sus aportaciones al proyecto en un entorno de colaboración sin problemas. Posteriormente, cada integrante consolida su trabajo en la rama develop en cuanto a la programación del frontend y backend del proyecto, lo que permitió un avance progresivo y sistemático de este. Mientras tanto, seguimos realizando ajustes y progresos en el informe en la rama main. Al culminar el sprint, incorporamos nuevamente los cambios de la rama develop a la rama main para presentar la versión final del proyecto, con todas las funcionalidades implementadas y el informe actualizado en su estado más reciente.  

<div style="text-align:center;">  
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/gitflow1_3.JPG?raw=true" alt="gitflow" width="600px">   
    
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/gitflow2_3.JPG?raw=true" alt="gitflow" width="600px">  
    
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/gitflow3_3.JPG?raw=true" alt="gitflow" width="600px">  
    
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/gitflow4_3.JPG?raw=true" alt="gitflow" width="600px">  
    
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/gitflow5_3.JPG?raw=true" alt="gitflow" width="600px">  
    
  <img src="https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/gitflow6_3.JPG?raw=true" alt="gitflow" width="600px">  
</div>   
