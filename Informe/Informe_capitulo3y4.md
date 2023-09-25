# Capítulo 3: Requirements Specification
## 3.1. To-Be Scenario Mapping

**To Be Ciudadano**

![to be segmento ciudadano](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/To-be_Ciudadano.png?raw=true)

**To Be Empresa**

![to be segmento empresa](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/To-be_Empresa.png?raw=true)

## 3.2. User Stories
  
![TUser Stories Parte 1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Userstories1.png?raw=true)
![TUser Stories Parte 2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Userstories2.png?raw=true)
![TUser Stories Parte 3](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Userstories3.png?raw=true)
![TUser Stories Parte 4](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Userstories4.png?raw=true)
![TUser Stories Parte 5](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Userstories5.png?raw=true)

| Epic/Story ID | Título                               | Descripción                                                                                                  | Criterios de Aceptación                                                                                                                                      | Relacionado con (Epic ID) |
|---------------|-------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------:|    
| Historial de reservas | Visualizar historial de reservas | Como usuario cliente quiero poder ver los servicios de mudanza contratados para tener control y seguimiento de mis transacciones dentro de la aplicación. | Escenario 1: El usuario ingresa a reservas. Dado que el usuario ingresa a la sección de reservas. Cuando seleccione el botón ver historial de reservas. Entonces aparecerá la página del historial. Escenario 2: El usuario visualiza su historial de reservas. Dado que el usuario se encuentra en la página del historial de reservas. Cuando el usuario haga scroll. Entonces la página le permitirá ver más reservas hechas anteriormente. Escenario 3: El usuario busca una reserva anterior. Dado que el usuario se encuentra en la página del historial de reservas Y se ubica en la parte inferior de la página Y se visualiza un paginador con botones con flechas hacia adelante y atrás. Cuando el usuario seleccione uno de los botones. Entonces la página le permitirá ver sus reservas anteriores o posteriores. Escenario 4: El usuario visualiza sus últimas reservas. Dado que el usuario ingresa a la sección de reservas. Cuando la plataforma carga la página. Entonces las últimas reservas se visualizarán primero y las más antiguas al último. | #5 |
| Historial de reservas | Visualizar varias reservas en una página | Como usuario cliente quiero visualizar varias reservas en una sola página para que pueda tener una vista panorámica de todos mis servicios de mudanza contratados de manera fácil y rápida. | Escenario 1: El usuario cambia la cantidad de reservas que se visualiza en una página. Dado que el usuario se encuentra en la página del historial de reservas Y se ubica en la parte inferior de la página Y se visualiza el paginador Y al lado derecho se encuentra la opción desplegable Cuando el usuario seleccione esta opción. Entonces se visualizará el desplegable con las opciones de visualización de 4, 8 y 12 páginas. Escenario 2: El usuario selecciona el número de reservas para visualizarse en la página. Dado que el usuario seleccionó el desplegable del paginador. Cuando el usuario seleccione el número de reservas que se visualizará 4, 8 o 12. Entonces la página mostrará la cantidad de reservas que eligió el usuario. | #5 |

## 3.3. Impact Mapping

![impact map](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ImpactMap.png?raw=true)

## 3.4. Product Backlog

| **# Orden** | **User Story Id** | **Título** | **Descripción** | **Story Points (1/2/3/5/8)** |
|--------------|--------------|--------------|--------------|--------------|
| 1| HU01    | Creación de cuenta  | **Como** gerente de una empresa de mudanzas, **quiero** poder crear una cuenta en "Carga sin Estrés" desde la landing page, **para** tener acceso a la plataforma y gestionar eficientemente los servicios de mudanza que ofrecemos.    | 3|
| 2| HU02   | Selección de tipo de cuenta    | **Como** gerente de una empresa de mudanzas,**quiero** tener la opción de seleccionar que estoy creando una cuenta para mi empresa al registrarme en "Carga sin Estrés", **para** asegurarme de que la plataforma comprenda que represento a una empresa y facilite la gestión de los servicios de mudanza ofrecidos.   | 2|
| 3| HU03    | Ingreso de Datos    | **Como** universitario, **quiero** ingresar los datos requeridos **para** crear mi cuenta en “Carga sin estrés”     | 3|
| 4| HU04   | Inicio de Sesión   | **Como** oficinista con una cuenta en "Carga sin estrés", **quiero** tener la capacidad de iniciar sesión directamente desde la página de inicio , **para** acceder de manera rápida y conveniente a mi cuenta y utilizar los servicios ofrecidos.    | 2|
| 5| HU05   | Ajustes de Cuenta   | **Como** universitario **quiero** poder ajustar los detalles de mi cuenta desde dentro de “Carga sin estrés” **para** cambiar datos que ya no reflejan mi estado actual    | 3|
| 6| HU06   | Editar Perfil de Trabajador   | **Como** trabajador de una empresa de carga **quiero** tener la capacidad de editar mi perfil **para** proporcionar detalles precisos que presenten una imagen más confiable y profesional de mi.   | 3|
| 7| HU07   | Cerrar Sesión    | **Como** trabajador de una empresa de carga **quiero** cerrar la sesión de la cuenta empresarial **para** mantener la seguridad de la cuenta.    | 2|
| 8| HU08    | Elección de membresía de empresa  | **Como** usuario empresa **quiero** una opción que permita aumentar mi visibilidad dentro de la plataforma **para** captar clientes.   | 3|
| 9| HU09   | Pago de membresía   | **Como** usuario empresa **quiero** poder ingresar los detalles de mi tarjeta **para** pagar la membresía.   | 5|
| 10| HU10    | Selección de método de pago   | **Como** cliente **quiero** poder elegir entre diferentes métodos de pago al reservar el servicio de mudanza **para** elegir el que más se acomode a mi preferencia.   | 5|
| 11| HU11   | Detalles de pago  | **Como** usuario cliente **quiero** poder revisar los detalles de pago **para** poder ver los costos de los servicios contratados.   | 2|
| 12| HU12   | Búsqueda de empresas cercanas  | **Como** usuario cliente **quiero** poder buscar empresas que ofrezcan servicios de mudanza o carga cercanos a mi ubicación actual **para** asegurarme que el servicio sea conveniente.   | 5|
| 13| HU13   | Filtrar por servicios ofrecidos | **Como** usuario cliente **quiero** poder filtrar las empresas por los servicios que ofrecen **para** encontrar aquellas que ofrecen el servicio que deseo.   | 3|
| 14| HU14    | Filtrar por calificación    | **Como** usuario cliente **quiero** poder ordenar a las empresas de acuerdo por la cantidad de estrellas promedio y número de reseñas **para** tener la seguridad de encontrar calidad y confiabilidad en el servicio. | 2|
| 15| HU15   | Visualización de disponibilidad  | **Como** usuario cliente **quiero** encontrar empresas que estén disponibles para una fecha específica **para** tener la seguridad que mi mudanza se realizará en un horario y fecha conveniente.    | 5|
| 16| HU16   | Visualizar perfil de empresa | **Como** usuario cliente **quiero** poder visualizar el perfil de cada empresa **para** conocer su información detallada y así tomar una decisión informada y confiable al seleccionar la empresa adecuada para mis necesidades.   | 3|
| 17| HU17   | Ingresar a la reserva del servicio | **Como** cliente **quiero** ingresar a la información de los servicios **para** ver si esa empresa es la que me conviene reservar.  | 5|
| 18| HU18   | Seleccionar servicios a reservar | **Como** cliente **quiero** poder seleccionar los servicios que necesito de la lista ofrecida por la empresa **para** reservarlos.  | 3|
| 19| HU19   | Envío de información sobre la posible reserva | **Como** cliente **quiero** que la información de los servicios que escogí se envíe a la empresa de mudanza **para** que estos tengan más detalle de la reserva que quiero.   | 5|
| 20| HU20   | Contactar con el trabajador de la empresa | **Como** trabajador de una empresa de mudanza **quiero** poder comunicarme con el cliente una vez haya enviado los servicios que quiere **para** aclarar detalles adicionales.   | 3|
| 21| HU21   | Acordar un precio por servicio reservado | **Como** cliente **quiero** acordar detalles y precio por los servicios tras conversar con el trabajador **para** realizar mi mudanza en otro momento.  | 3|


# Capítulo 4: Product Design

## 4.1. Style Guidelines

### 4.1.1. General Style Guidelines
A continuación, se presentará los materiales gráficos a emplear para el reconocimiento de la marca.

**Main Logo & Branding**      
El logo está conformado por: Un camión caracteriztico del transporte de objetos. Este objeto simboliza el agente principal de la marca (lo que el usuario desea/espera encontrar).
Por otro lado, este camión esta encerrado por un círculo el cual representa movimiento y globalidad. La complementación de estos ítems, inspira optimismo y energía. Derivado de ello transmitimos la idea de que la aplicación ofrece servicios eficaces, ágiles y accesible.
Los colores usados como amarillo y azul crean un ambiente de confianza, profesionalidad, elegancia y solidez.    
Del mismo modo se considera el nombre del proyecto para relacionarlo con la imagen del camión.

![logo](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Proyecto/image/Cargalogo.png?raw=true)

**Typography**
Se definieron dos tipos de tipografías que cumpliesen con el propósito definido de mostrar optimismo y elegancia. Estas son: Open Sans y Robot.

![tipografía](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Typography.png?raw=true)

**Colors**  
Los colores definidos para la marca son:

![LogoColor](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/LogoColors.png?raw=true)

**Spacing**

![íconos](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Spacing.png?raw=true)

**Icons**

Dado las condiciones necesarias para una experiencia adaptable e intuitiva del usuario. Los botones cumplen con transmitir la idea principal del rol que cumplen.

![íconos](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/iconos.png?raw=true)

### 4.1.2. Web Style Guidelines

**Representative Icons**

A continuación, los íconos presentes comunican al usuario sobre la sección en la que se encuentran. Por este motivo, es esencial que el significado de cada ícono sea deductible y adaptable para cada dispositivo (responsive). 

![íconos](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/RepresentativeIcons.png?raw=true)


**Buttons**     
Los botones en el aplicativo web deben cumplir el rol asignado. De la misma manera, debe existir un evento que distingua un botón en espera y resaltado.

## 4.2. Information Architecture

### 4.2.1. Organization Systems.
En esta parte, se establece la conexión entre el sistema visual de organización y los grupos de información del programa de manera apropiada. Además, se determinará cuándo se aplicarán los esquemas de categorización de contenido.

***Organizacion jerarquica***

Proximidad: Se trata sobre colocar elementos relacionados juntos y hacer que los usuarios perciban que están conectados de alguna manera. Este principio se puede utilizar en nuestro programa a la hora de agrupar los reviews que dejan los clientes en las empresas. También, luego de obtener los resultados de búsqueda, es importante colocar toda la información relacionada a una empresa de tal forma que quede junta, pero separado a la información de las otras empresas que también salieron como resultado de la búsqueda.
Color: El color negro es aquel que brinda mayor contraste, por tanto, para este programa se utilizarán fuentes de letra de color negro, mientras que los colores del fondo serán más claros para llevar a cabo el contraste.
Organizar fuentes: Con el objetivo de hacer que la página web sea fácil de leer y entender para el usuario, se deberá crear una jerarquía de tipo de letra que consiste en fuentes de título, subtítulos, encabezados graduados y demás texto. Entonces, para destacar los títulos se utilizará la variación de tamaño de letra, así como el peso de la fuente seleccionada.

***Esquemas de categorización***

- Según audiencia: El contenido del programa será categorizado para 2 audiencias, los cuales son los usuarios que desean solicitar servicios de mudanza o carga y los que brindan estos servicios.
- Por tópicos: Cuando se lleva a cabo la búsqueda de trabajadores que brinden estos servicios, los usuarios clientes tienen a su disposición distintos filtros y campos como criterios de búsqueda.
- Cronológico: Si el usuario desea ver las reservas de los servicios que realizó, entonces estas aparecerán en una lista de forma cronológica, siendo la solicitud más antigua la que aparece en la parte de arriba y la solicitud realizada recientemente en la parte de abajo.

### 4.2.2. Labeling Systems.
A continuación, se definirán las etiquetas a utilizar para agrupar conjuntos de información, así como las asociaciones entre las mismas.

![General Style Guidelines](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/LabelingSystems.png?raw=true)

### 4.2.3. SEO Tags and Meta Tags

***Landing page:***
* Titulo:
~~~
<title>Carga Sin Estrés</title>
~~~
* Meta tags description:
~~~
<meta name="description" content="Encuentra a los expertos en mudanza y carga que necesitas. Nuestra plataforma te conecta con profesionales de confianza para simplificar tu próxima mudanza. Cotiza, compara y elige la solución perfecta para tus necesidades de transporte en un solo lugar"/>
~~~
* Keywords:
~~~
<meta name="keywords" content="carga, mudanza, busqueda, empresas, embalaje, transporte, montaje, desmontaje"/>
~~~
* Author:
~~~
<meta name="author" content="Lucero Obispo, Andrea O'Higgins, Eric Cuevas, Javier Sebastian" />
~~~

### 4.2.4. Searching Systems.  
La aplicación de mudanzas y transporte contará con un sistema de búsqueda que permitirá visualizar todas las empresas de mudanza y transporte. Al inicio de la página principal, se visualizarán las empresas destacadas, aquellas que han adquirido una membresía para poder aparecer en esta sección, y debajo de ellas se listarán las demás empresas. Además, con el objetivo de simplificar la elección de la empresa por parte de los usuarios, se visualizarán los datos principales de cada empresa, incluyendo su nombre, logotipo y los servicios que ofrecen. Asimismo, los usuarios podrán explorar fácilmente las distintas opciones de empresas a través de filtros. Éstos permitirán la búsqueda de empresas por cercanía, en función de los servicios que el usuario haya seleccionado, la calificación por estrellas y las reseñas de la empresa, así como su disponibilidad.
  
### 4.2.5. Navigation Systems.  
Se dispondra de un menu despegable en la parte superior de la de la aplicación, el cual mostrara las secciones de contenido disponibles.   
El “navbar” permitirá al usuario podernavegar a cualquier sección de la página, en cualquier momento, esto permitirá a los usuarios ver todo  
el contenido sin tener que volver al principio y cuando sea necesario, con un botón, volver a desplegar el navbar en mobile, o de manera  
incluso más sencilla en web dirigiendose al menu directamente.  
  
## 4.3. Landing Page UI Design.  
### 4.3.1. Landing Page Wireframe.  
A continuación, los wireframes realizados para el proyecto:  

**Landing Page Wireframe (escritorio)**    
Para el presente trabajo, se realizó el wireframe correspondiente para el diseño de la landing page para "Carga sin Estres".    
Desde una primera instancia, se definen secciones de interés como: Inicio, servicios, planes, testimonios y los botones CTA (Iniciar sesión y Registrarse).

![Landing Page Wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/LandinPageWireframe.png?raw=true)

**Landing Page Wireframe (Mobile)**   
Además se elaboró el diseño de una landing page adaptable a la resolución de cualquier pantalla (Responsive) desde el cual el usuario visualiza correctamente el contenido de "Carga sin Estres".   
Dado este motivo, se presenta la vista desde un dispositivo móvil:

![Landing Page Wireframe Mobile](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/wireframe-mobile-landing.png?raw=true)


### 4.3.2. Landing Page Mock-up.
Una vez definido el wireframe, aplicamos los estilos definidos previamente en el punto 4.1 (Styles guidelines). 
A continuación, los mock-ups realizados para el proyecto:

**Landing Page Mock-Up (escritorio)**   
Estilos aplicados para resolución de pantalla de escritorio.

![Landing Page Mock-up](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/LandingPageMockUp.png?raw=true)

**Landing Page Wireframe (Mobile)**  
Estilos aplicados para resolución de pantalla mobile.

![Landing Page Mock-up](/Informe/Imagenes/LandingPageMockupResponsive.png)(https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/LandingPageMockupResponsive.png?raw=true)  

## 4.4. Web Applications UX/UI Design.  
### 4.4.1. Web Applications Wireframes.  
![Registro de cliente - wireframe](/Informe/Imagenes/registro-cliente-wireframe.png) 
![Registro de empresa - wireframe](/Informe/Imagenes/registro-empresa-wireframe.png) 
![inicio-sesion-wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/wireframe-login.png?raw=true)  
![Busqueda de empresas - wireframe](/Informe/Imagenes/busqueda-empresas-wireframe.png)
![Chat de una reserva - wireframe](/Informe/Imagenes/chat-reserva-wireframe.png) 
![Formulario membresia - wireframe](/Informe/Imagenes/formulario-membresia-wireframe.png)  
![Boleta Compra - wireframe](/Informe/Imagenes/boleta-wireframe.png)

![historial-reservas-wireframe](https://raw.githubusercontent.com/LuceroObispoRios/Grupo1_SW53/Andrea/feature/Informe/Imagenes/wireframe-historial-reservas.png) 
![chat-reserva-wireframe](https://raw.githubusercontent.com/LuceroObispoRios/Grupo1_SW53/Andrea/feature/Informe/Imagenes/wireframe-chat-reserva.png)  


### 4.4.2. Web Applications Wireflow Diagrams.  
![wireframe-flow1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/wireframes-flow1.png?raw=true)
  
![wireframe-flow2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/wireframes-flow2.png?raw=true)  

### 4.4.2. Web Applications Mock-ups.  
![registro-cliente-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/mockup-registro-cliente.png?raw=true)  
![registro-empresa-mockup](/Informe/Imagenes/registro-empresa-mockup.png)  
![inicio-sesion-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/mockup_login.png?raw=true)  
![Busqueda de empresas](/Informe/Imagenes/busqueda-empresas-mockup.png)
![Chat de una reserva](/Informe/Imagenes/chat-reserva.png) 
![Formulario membresia](/Informe/Imagenes/formulario-membresia.png)  
![Boleta Compra](/Informe/Imagenes/boleta-compra.png)


![mobile-login-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/login-mobile.png?raw=true)
![mobile-cliente-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/registro-cliente-mobile.png?raw=true)  
![mobile-empresa-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/registro-empresa.mobile.png?raw=true)  
![historial-reservas-mockup](https://raw.githubusercontent.com/LuceroObispoRios/Grupo1_SW53/Andrea/feature/Informe/Imagenes/mockup-historial-reservas.png)  
![chat-reserva-mockup](https://raw.githubusercontent.com/LuceroObispoRios/Grupo1_SW53/Andrea/feature/Informe/Imagenes/mockup-chat-reserva.png)  

### 4.4.3. Web Applications User Flow Diagrams.  
![mockup-flow1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/mockup-flow1.png?raw=true)    
  
![mockup-flow2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/mockup-flow2.png?raw=true)   

## 4.5. Web Applications Prototyping.  
El prototipo de secuencia web se encuentra en el siguiente enlace :   
[https://www.figma.com/proto/FFKvovSKPyL6LW7e2DDSph/Wireframes?type=design&node-id=26-453&t=wLRuXHHBxMj8lVew-1&scaling=min-zoom&page-id=2%3A3&starting-point-node-id=26%3A453&show-proto-sidebar=1&mode=design](https://www.figma.com/proto/FFKvovSKPyL6LW7e2DDSph/Wireframes?type=design&node-id=26-453&t=wLRuXHHBxMj8lVew-1&scaling=min-zoom&page-id=2%3A3&starting-point-node-id=26%3A453&show-proto-sidebar=1&mode=design)  

El prototipo de secuencia mobile se encuentra en el siguiente enlace :  
[https://www.figma.com/proto/FFKvovSKPyL6LW7e2DDSph/Wireframes?type=design&node-id=26-885&t=1YhgDvhIeuMcfiDB-1&scaling=min-zoom&page-id=2%3A3&starting-point-node-id=26%3A885&show-proto-sidebar=1&mode=design](https://www.figma.com/proto/FFKvovSKPyL6LW7e2DDSph/Wireframes?type=design&node-id=26-885&t=1YhgDvhIeuMcfiDB-1&scaling=min-zoom&page-id=2%3A3&starting-point-node-id=26%3A885&show-proto-sidebar=1&mode=design)  

## 4.6. Domain-Driven Software Architecture.

Los diagramas c4 se realizaron con Structurizr.   Enlace:[https://www.structurizr.com/share/85676/294b91b5-fde5-4ad9-bb61-11105de941e6](https://www.structurizr.com/share/85676/294b91b5-fde5-4ad9-bb61-11105de941e6)  
  
### 4.6.1. Software Architecture Context Diagram.

![Context Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Contexto.png?raw=true)  

### 4.6.2. Software Architecture Container Diagrams.

![Container Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Contenedor.png?raw=true)  

### 4.6.3. Software Architecture Components Diagrams.
**Service Context**

![Service Component Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ServiceComponents.png?raw=true)  

**Account Context**
![Account Component Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/AccountComponents.png?raw=true)  

**Notification Context**
![Notification Component Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/NotificationComponents.png?raw=true)  

## 4.7. Software Object-Oriented Design.

### 4.7.1. Class Diagrams.
El diagrama de clases se realizo con la pagina Lucidchart, este es el enlace del diagrama: [https://lucid.app/lucidchart/c9014eb0-9946-4bec-94b9-7b2daffbd7ea/edit?viewport_loc=-668%2C-172%2C3028%2C1565%2C0_0&invitationId=inv_178b2402-cdb0-42b0-ad04-ffbc706d72ae]  
![Notification Component Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/DiagramaDeClases.png?raw=true)  

### 4.7.2. Class Dictionary.  
![Class_Dictionary_1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ClassDictionary1.JPG?raw=true)  
![Class_Dictionary_2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ClassDictionary2.JPG?raw=true)  
![Class_Dictionary_3](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ClassDictionary3.JPG?raw=true)  
![Class_Dictionary_4](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ClassDictionary4.JPG?raw=true)  
![Class_Dictionary_5](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ClassDictionary5.JPG?raw=true)  
![Class_Dictionary_6](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ClassDictionary6.JPG?raw=true)  
![Class_Dictionary_7](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ClassDictionary7.JPG?raw=true)  

## 4.8. Database Design.

### 4.8.1. Database Diagram.
![Database](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/Eric/feature/Informe/Imagenes/Carga_sin_estresDB.png?raw=true)  
