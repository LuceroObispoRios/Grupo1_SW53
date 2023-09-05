# Capitulo 5
## 5.1. Software Configuration Management.

### 5.1.1. Software Development Environment Configuration.

Para el presente trabajo, por motivo de comodidad, dominio o preferencia de ciertas herramientas tecnológicas en la actualidad. El equipo vio adecuado optar por las siguientes:

**Visual Studio Code**: Es un IDE o entorno de desarrollo integrado. En otras palabras, es un editor de código fuente líder en el mundo. Dado que, cuenta con el beneficio de poder complementarse con extensiones, trabajar con múltiples lenguajes de programación, etc. Por otro lado, este IDE es conocido por los integrantes del equipo, asi como han realizado proyectos con anterioridad. Por estos motivos, el equipo decidio trabajar con esta herramienta.   

*Ruta de descarga de Visual Studio Code*: https://code.visualstudio.com/
Una vez descargado el ejecutable, teniendo en cuenta el sistema operativo del usuario, se procede a 
la instalación, la cual es guiada e intuitiva. 	

![Visual Studio Code](/Informe/Imagenes/VisualStudioCodeLogo.png)


*Se han utilizado las siguientes extensiones, todas ellas se encuentran dentro de la tienda de extensiones en el IDE Visual Studio Code:*

**Live Server (Extensión de Visual Studio Code)**: La extensión "Live Server" es una herramienta esencial para cualquier desarrollador web que busque agilizar el proceso de desarrollo y pruebas de aplicaciones web. Con esta herramienta podemos tener una experiencia de desarrollo en tiempo real, permitiéndonos ver los cambios que realizamos en el Landing Page y el aplicativo web de inmediato en el navegador, sin necesidad de recargar la página manualmente. Esto nos permite  concentrarnos en la lógica y la apariencia de nuestro diseño sin interrupciones.

![Extension Live Server](/Informe/Imagenes/LiveServer.png)

**Auto Rename Tag (Extensión de Visual Studio Code)**: La extensión "AutoRenameTag" es una herramienta esencial que simplifica la edición de etiquetas HTML en el desarrollo web. Esta extensión permite cambiar automáticamente el nombre de una etiqueta y su cierre correspondiente cuando se modifica una de ellas. Esta extensión ahorra tiempo y posibles errores al equipo dado a la cantidad de actualizaciones en el código.

![Extension Auto Rename Tag](/Informe/Imagenes/AutoRenameTag.png)

**vscode-styled-components (Extensión de Visual Studio Code)**: La extensión "vscode-styled-components" fue de gran utilidad para el desarrollo del código CSS.  Los beneficios que esta extensión puede ofrecer es dar detalle sobre las propiedades y autocompletado  inteligente para las plantillas de estilo dentro de  componentes. Esto facilita la creación de CSS-JS de manera eficiente y ayuda a mantener  un código limpio y organizado.

![Extensión vscode-style-components](/Informe/Imagenes/vscode-style-components.png)


**Git**: Dado que es necesario colaborar en el proyecto tanto del landing page como el aplicativo web de  manera remota. Se optó por el sistema de control de versiones GIT. Dado que permite la colaboración activa de los miembros del equipo incluso cuando no tengan acceso a internet. Cada miembro almacena  un clon local del proyecto y puede realizar las actualizaciones correspondientes.    

*Ruta de descarga de Git*: https://git-scm.com/downloads    
Una vez descargado el ejecutable, teniendo en cuenta el sistema operativo del usuario, se procede a 
la instalación, la cual es guiada e intuitiva.

![Extensión vscode-style-components](/Informe/Imagenes/gitLogo.png)

**Github**: GitHub es la herramienta perfecta para nuestro equipo. En primer lugar, nos permite  mantener un control preciso de cada cambio en nuestro código, lo que facilita la colaboración  en tiempo real y minimiza los conflictos. Además, es posible realizar revisiones de código,  abrir problemas y fusionar solicitudes de extracción de manera fluida hace que nuestro  trabajo en equipo sea más eficiente y efectivo. En resumen, GitHub se ha convertido en el  núcleo de nuestra estrategia de desarrollo.

Ruta de descarga: https://desktop.github.com    
Una vez descargado el ejecutable, teniendo en cuenta el sistema operativo del usuario, se procede a la instalación, la cual es guiada e intuitiva.

![Extensión vscode-style-components](/Informe/Imagenes/GitHubLogo.png)

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
Convenciones: De acuerdo a W3Schools (s.f.), para facilitar la lectura y la coherencia en el código, es necesario usar espacios o tabulaciones de manera consistente, escribir los nombres de las etiquetas y de los archivos en minúsculas, usar comillas dobles para definir atributos en las etiquetas, usar el elemento <link> y <script> para relacion el archivo html con los archivos css y javascript respectivamente. Asimismo, es importante que cada elemento esté cerrado y que se agreguen solo comentarios significativos (“<!--” para iniciar un comentario y “-->” para cerrarlo).  

***CSS:***  
(file).css  
Descripción: Cascading Style Sheets en un lenguaje de hojas de estilo que es utilizado para dar formato y diseño a las páginas web.  
Convenciones: De acuerdo a MDN Web Docs (s.f.), para mejorar la legibilidad, se debe mantener los espacios adecuados, se usarán nombres de clases y selectores en minúscula y claros que reflejen su función, se debe procurar agrupar propiedades relacionadas juntas en el mismo bloque, y se usarán los id’s para poder modificar algún atributo en específico.  

***JavaScript:***  
(file).js  
Descripción: Lenguaje de programación que se usa para poder darle funcionalidades a las páginas web y que permita manipular su contenido y responder a acciones del usuario.  
Convenciones: De acuerdo a MDN Web Docs (s.f.), para mejorar la comprensión del código, se utilizaran nombre de variables y funciones en minúscula, no abreviados y que describan su propósito. Asimismo, se dividirán funciones largas en funciones más pequeñas para facilitar la lectura.  

### 5.1.4. Software Deployment Configuration.
Para almacenar y manejar el flujo de trabajo del equipo, hemos creado un repositorio en GitHub. Utilizaremos "main" como la rama principal para el desarrollo.
Para su configuración es necesario clonar el repositorio desde GitHub con el URL: https://github.com/LuceroObispoRios/Grupo1_SW53.git.  Este proceso descargará todo el contenido del repositorio en la máquina local.
Para el entorno de desarrollo se utilizará el Visual Studio Code.
A medida que el proyecto avance, se agregarán más elementos de configuración, incluyendo configuración para la base de datos relacional, configuración de pruebas y configuración de gestión de paquetes y dependencias.

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
| Attendees to meeting | Obispo, Lucero / O´Higgins, Andrea / Tasayco, Javier  |
| Sprint n - 0 Review Summary | Se termino de Arreglar los contenidos de los capitulos 1 a 4, y la opinion general es que se hizo satisfactoriamente respecto al tiempo que se utilizo. |
| Sprint n - 0 Retrospective Summary | Las opiniones del equipo indican que durante el transcurso de ese sprint se logro encontrar una manera en la cual esl grupo podria trabajar fluidamente. |
| | **Sprint Goal & User Stories** |
| Sprint & Goal | El objetivo del Sprint 1 sera terminar la Landing Page, asi como los sistemas de registro y login de la aplicación, desarrollandolos de manera que sean responsive y coherentes con el Diseño de Carga sin Estres, además de empezar las preparaciones para desplegar el suigiente sprint. |
| Sprint & Velocity | Debido al alcanze establecido para este sprint, asi como el tiempo que se tiene para realizar este considerando el trabajo anterior, el Velocity establecido para este sprint es 35 |
| Sum of Story Point | La suma de Story points que el equipo estara desarrollando este sprint es 30 |

#### 5.2.1.2. Sprint Backlog 1.  
  
|     Sprint #         |     Sprint 1                |                           |                                                        |                                                                                             |                   |                         |                      |
|----------------------|-----------------------------|---------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------------------|-------------------|-------------------------|----------------------|
|     User   Story     |                             |     Work –   Item/Task    |                                                        |                                                                                             |                   |                         |                      |
|     Id               |     Título                  |     Id                    |     Título                                             |     Descripción                                                                             |     Estimación    |     Asignado   a        |     Estado           |
|     HU001 – HU007    |     Manejo de Usuario       |     WI01                  |     Registro   de empresas de mudanza                  |     Hacer uso de HTML, CSS y JavaScript para implementar el registro de empresas            |     2h            |     Andrea O’Higgins    |     Completado       |
|                      |                             |     WI02                  |     Registro   de cliente                              |     Hacer uso de HTML, CSS y JavaScript para implementar el registro de cliente             |     2h            |     Andrea O’Higgins    |     Completado       |
|                      |                             |     WI03                  |     Iniciar   Sesión la plataforma                     |     Hacer uso de HTML, CSS y JavaScript para implementar la estructura   del login          |     4h            |     Andrea O’Higgins    |     Completado       |
|                      |                             |     WI04                  |     Solicitud   de servicio de mudanza                 |     Hacer uso de HTML, CSS y JavaScript para implementar la solicitud de   servicio         |     2h            |     Lucero Obispo       |     Por completar    |
|                      |                             |     WI05                  |     Visualizar   empresas de mudanza                   |     Hacer uso de HTML y CSS para visualizar las empresas de mudanza                         |     1h            |     Lucero Obispo       |     Completado       |
|                      |                             |     WI06                  |     Seleccionar   empresa de mudanza                   |     Hacer uso de HTML, CSS y JavaScript para seleccionar la empresa de   mudanza            |     2h            |     Lucero Obispo       |     Completado       |
|                      |                             |     WI07                  |     Cerrar   Sesión                                    |     Hacer uso de HTML, CSS y JavaScript para implementar el cierre de   sesión.             |     2h            |     Andrea O’Higgins    |     Por completar    |
|     HU008-HU011      |     Métodos de pago         |     WI08                  |     Elección   de membresía de empresa                 |     Hacer uso de HTML y JavaScript para implementar la elección de   membresía              |     2h            |     Lucero Obispo       |     Por completar    |
|                      |                             |     WI09                  |     Pago   de membresía                                |     Hacer uso de HTML y JavaScript para implementar el pago de membresía                    |     2h            |     Eric Cuevas         |     Por completar    |
|                      |                             |     WI10                  |     Selección   de método de pago                      |     Hacer uso de HTML y JavaScript para implementar la selección de método   de pago        |     3h            |     Eric Cuevas         |     Por completar    |
|                      |                             |     WI11                  |     Detalles   de pago                                 |     Hacer uso de HTML para implementar los detalles de pago                                 |     1h            |     Eric Cuevas         |     Por completar    |
|     HU012-HU016      |     Búsqueda de empresas    |     WI12                  |     Búsqueda de empresas cercanas                      |     Hacer uso de HTML y JavaScript para implementar la búsqueda de   empresa                |     1h            |     Javier Tasayco     |     Completado       |
|                      |                             |     WI13                  |     Filtrar por servicios ofrecidos                    |     Hacer uso de HTML y JavaScript para implementar el filtrado por servicios               |     2h            |     Javier Tasayco     |     Por completar    |
|                      |                             |     WI14                  |     Filtrar por calificación                           |     Hacer uso de HTML y JavaScript para implementar el filtrado por calificación            |     2h            |     Javier Tasayco     |     Por completar    |
|                      |                             |     WI15                  |     Visualización de disponibilidad                    |     Hacer uso de HTML y JavaScript para implementar la visualización de   disponibilidad    |     1h            |     Lucero Obispo       |     Por completar    |
|                      |                             |     WI16                  |     Visualizar perfil de empresa                       |     Hacer uso de HTML, CSS y JavaScript para implementar el perfil de empresa               |     1h            |     Lucero Obispo       |     Completado       |
|     HU017-HU021      |     Reserva de servicios    |     WI17                  |     Ingresar   a la reserva del servicio               |     Hacer uso de HTML y JavaScript para ingresar a la reserva del   servicio                |     2h            |     Eric Cuevas         |     Por completar    |
|                      |                             |     WI18                  |     Seleccionar   servicios a reservar                 |     Hacer uso de HTML y JavaScript para implementar la selección de   servicios             |     2h            |     Eric Cuevas         |     Completado       |
|                      |                             |     WI19                  |     Envío   de información sobre la posible reserva    |     Hacer uso de JavaScript para implementar el envío de información                        |     1h            |     Javier Tasayco     |     Por completar    |
|                      |                             |     WI20                  |     Contactar   con el trabajador de la empresa        |     Hacer uso de HTML para implementar el contacto con el trabajador                        |     1h            |     Javier Tasayco     |     Por completar    |
|                      |                             |     WI21                  |     Acordar   un precio por servicio reservado         |     Hacer uso de HTML y JavaScript para aceptar la reserva.                                 |     1h            |     Javier Tasayco     |     Por completar    |
  
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

![feature 1](/Informe/Imagenes/feature-us01.png)

![feature 2](/Informe/Imagenes/feature-us02.png)

![feature 3](/Informe/Imagenes/feature-us03.png)

![feature 4](/Informe/Imagenes/feature-us04.png)

![feature 5](/Informe/Imagenes/feature-us05.png)

![feature 6](/Informe/Imagenes/feature-us06.png)

![feature 7](/Informe/Imagenes/feature-us07.png)

![feature 8](/Informe/Imagenes/feature-us08.png)

![feature 9](/Informe/Imagenes/feature-us09.png)

![feature 10](/Informe/Imagenes/feature-us10.png)

![feature 11](/Informe/Imagenes/feature-us11.png)

![feature 12](/Informe/Imagenes/US012.jpg)

![feature 13](/Informe/Imagenes/US013.jpg)

![feature 14](/Informe/Imagenes/US014.jpg)

![feature 15](/Informe/Imagenes/US015.jpg)

![feature 16](/Informe/Imagenes/US016.jpg)

![feature 17](/Informe/Imagenes/US017.jpg)

![feature 18](/Informe/Imagenes/US018.jpg)

![feature 19](/Informe/Imagenes/US019.jpg)

![feature 20](/Informe/Imagenes/US020.jpg)

![feature 21](/Informe/Imagenes/US021.jpg)


#### 5.2.1.5. Execution Evidence for Sprint Review.  

***Primer Sprint***  
Durante este sprint, nos enfocamos en completar el landing page y en las páginas de registro para cuenta de empresa, registro para cuenta de cliente, inicio de sesión y la página de búsqueda de empresas.  
![landing page](/Informe/Imagenes/execution_sprint1.JPG)  

![landing page](/Informe/Imagenes/execution2_sprint1.JPG)  

![landing page](/Informe/Imagenes/execution3_sprint1.JPG)  

![inicio sesion](/Informe/Imagenes/execution4_sprint1.JPG)  

![busqueda empresa](/Informe/Imagenes/execution5_sprint1.JPG)  

![busqueda empresa](/Informe/Imagenes/execution6_sprint1.JPG)  

![registro cliente](/Informe/Imagenes/execution7_sprint1.JPG) 

![registro empresa](/Informe/Imagenes/execution8_sprint1.JPG) 

![registro empresa](/Informe/Imagenes/execution9_sprint1.JPG) 

Link al repositorio de codigo: [https://github.com/LuceroObispoRios/Grupo1_SW53.git]  
Link a la plataforma:  
Link al video de ejecución:  

#### 5.2.1.6. Services Documentation Evidence for Sprint Review.

*Para este **primer** Sprint no fue contemplado la evidencia de la documentación de nuestros servicios.*

#### 5.2.1.7. Software Deployment Evidence for Sprint Review.

*Para este **primer** avance, el cual abarcaba la landing page, asi como el registro y login de usuarios, no se llevo a cabo un despliegue de la aplicación.*  

#### 5.2.1.8. Team Collaboration Insights during Sprint.
***Primer Sprint***  
Durante el primer sprint, el equipo optó por dividir los puntos entre todos los integrantes por cada capítulo para completar el informe. También, se optó por dividir las páginas por integrante teniendo en cuenta que estas deberán ser responsive y funcionales. Para asegurar que todo esté realizado correctamente, se organizaron reuniones constantes que se llevaron a cabo a través de Google Meet, donde se logró completar el informe y el código de las páginas landing page, registro para cuenta de empresa, registro para cuenta de cliente, inicio de sesión y la página de búsqueda de empresas.  
A continuación, se presentan screenshots que reflejan el trabajo realizado durante este sprint.  

![team collaboration](/Informe/Imagenes/teamcollaboration_sprint1.png)   

![team collaboration](/Informe/Imagenes/teamcollaboration2_sprint1.png)   

![team collaboration](/Informe/Imagenes/teamcollaboration3_sprint1.png)   

