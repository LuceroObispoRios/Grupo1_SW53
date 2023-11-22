# Capítulo 3: Requirements Specification
## 3.1. To-Be Scenario Mapping

**To Be Ciudadano**

![to be segmento ciudadano](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/To-be_Ciudadano.png?raw=true)

**To Be Empresa**

![to be segmento empresa](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/To-be_Empresa.png?raw=true)

## 3.2. User Stories
  
<table>
    <tr>
        <th>Epic/Story ID</th>
        <th>Título</th>
        <th>Descripción</th>
        <th>Criterios de Aceptación</th>
        <th>Relacionado con (Epic ID)</th>
    </tr>
    <tr>
        <td>Manejo de Usuario</td>
        <td>Registro de Empresa de Mudanzas</td>
        <td>Como empresario, quiero poder registrar mi empresa de mudanza en la plataforma para que esté disponible y así poder realizar servicios de mudanza a los clientes.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario ingresa al formulario de registro de empresa. DADO  QUE soy un representante autorizado de una empresa de mudanzas, CUANDO acceda a la página de registro Y seleccione la opción cuenta de empresa de mudanza o carga, ENTONCES aparece un formulario de registro que solicita información de la empresa, incluyendo username, email, ubicación, número de contacto, contraseña, los servicios que ofrece y una descripción corta de la empresa.</li>
                <li><strong>Escenario 2:</strong> El usuario registra sus datos de empresa correctamente. DADO  QUE, estoy completando el registro de mi empresa de mudanzas, CUANDO ingreso la información requerida, Y presiono el botón “Registrar Empresa”, ENTONCES recibo una confirmación en pantalla de que la empresa se ha registrado correctamente.</li>
            </ul>
        </td>
        <td>#1</td>
    </tr>
    <tr>
        <td>Manejo de Usuario</td>
        <td>Registro de Cliente</td>
        <td>Como usuario nuevo de Carga sin estrés, deseo registrarme en la plataforma para poder solicitar servicios de mudanza cuando los necesite.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario ingresa al formulario de registro de cliente. DADO QUE soy un cliente interesado en utilizar el servicio de mudanzas, CUANDO acceda a la página de registro de clientes, Y seleccione la opción cuenta de cliente, ENTONCES puedo ver un formulario de registro que solicita información básica.</li>
                <li><strong>Escenario 2:</strong> El usuario registra sus datos de cliente correctamente. DADO QUE estoy completando el registro como cliente, CUANDO ingreso la información requerida como son los campos nombre, apellido materno, apellido paterno, celular, dirección, correo electrónico, contraseña, Y presiono el botón “Registrar”, ENTONCES recibo una confirmación en pantalla de que mi registro se ha completado con éxito.</li>
            </ul>
        </td>
        <td>#1</td>
    </tr>
    <tr>
        <td>Manejo de Usuario</td>
        <td>Iniciar Sesión en la plataforma</td>
        <td>Como usuario registrado de Carga sin estrés, quiero poder iniciar sesión en mi cuenta para acceder a mis opciones según mi tipo de cuenta.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario cliente inicia sesión. DADO QUE, soy un usuario tipo cliente registrado en la plataforma, CUANDO ingreso mi dirección de correo electrónico o usuario, y contraseña en el formulario de inicio de sesión, ENTONCES soy redirigido a la página de búsqueda de empresas.</li>
                <li><strong>Escenario 2:</strong> El usuario empresa inicia sesión. DADO QUE, soy un usuario tipo empresa registrado en la plataforma, CUANDO ingreso mi dirección de correo electrónico o usuario, y contraseña en el formulario de inicio de sesión, ENTONCES soy redirigido a la página de mi perfil.</li>
                <li><strong>Escenario 3:</strong> El usuario inicia sesión con datos incorrectos. DADO QUE, ingresé datos incorrectos al intentar iniciar sesión, CUANDO presiono el botón de inicio de sesión, ENTONCES recibo un mensaje de error que indique que la cuenta no existe.</li>
            </ul>
        </td>
        <td>#1</td>
    </tr>
    <tr>
        <td>Manejo de Usuario</td>
        <td>Ajustes de cuenta de cliente</td>
        <td>Como cliente registrado en Carga sin estrés, quiero ajustar los datos de mi cuenta para que refleje mis datos actuales.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario modifica sus datos satisfactoriamente. DADO QUE soy un cliente que haya iniciado sesión en Carga sin estrés, Y seleccione la opción de “Editar Perfil”, CUANDO llene los datos en el formulario, nombre, apellido materno, apellido paterno, celular, dirección y confirme el correo electrónico y su contraseña, Y seleccione el botón de “Guardar cambios” , ENTONCES, la aplicación validará y modificará los datos actuales.</li>
                <li><strong>Escenario 2:</strong> El usuario ya no desea modificar sus datos. DADO QUE soy un cliente que haya iniciado sesión en Carga sin estrés , Y seleccione la opción de “Editar Perfil”, Y desee salir de la página de edición de datos, CUANDO, seleccione el botón “Cancelar” entonces se mostrará la página de búsqueda de empresas. </li>
                <li><strong>Escenario 3:</strong> El usuario modifica sus datos y coloca datos erróneos. DADO QUE soy un cliente que haya iniciado sesión en Carga sin estrés, , CUANDO llene los datos en el formulario, Y llene con datos erróneos el campo de correo electrónico y contraseña, CUANDO selecciono el botón “Guardar cambios”, ENTONCES, la página no permitirá actualizar los datos.</li>
            </ul>
        </td>
        <td>#1</td>
    </tr>
    <tr>
        <td>Manejo de Usuario</td>
        <td>Ajustes de cuenta de empresa</td>
        <td>Como empresa usuaria de Carga sin estrés, quiero ajustar los datos de la cuenta de empresa para que reflejen el estado actual de esta.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario modifica sus datos satisfactoriamente. DADO QUE el usuario haya iniciado sesión en Carga sin estrés, Y seleccione la opción de “Editar Perfil”, CUANDO llene los datos en el formulario, nombre de empresa, correo, dirección, teléfono, descripción, Y marque las opciones de servicio que ofrece dentro de la lista que se muestra,  Y su contraseña, Y seleccione el botón de “Guardar cambios” , ENTONCES, la aplicación validará y modificará los datos actuales.</li>
                <li><strong>Escenario 2:</strong> El usuario ya no desea modificar sus datos. DADO QUE, que el usuario haya iniciado sesión en Carga sin estrés , Y seleccione la opción de “Editar Perfil”, Y desee salir de la página de edición de datos, CUANDO, seleccione el botón “Cancelar” entonces se mostrará la página de principal de empresas. </li>
                <li><strong>Escenario 3:</strong> El usuario modifica sus datos y coloca datos erróneos. DADO QUE,  el usuario haya iniciado sesión en Carga sin estrés, , CUANDO llene los datos en el formulario, Y llene con datos erróneos el campo de correo electrónico y contraseña, CUANDO selecciono el botón “Guardar cambios”, ENTONCES, la página no permitirá actualizar los datos.</li>
            </ul>
        </td>
        <td>#1</td>
    </tr>
    <tr>
        <td>Manejo de Usuario</td>
        <td>Cerrar Sesión</td>
        <td>Como usuario quiero cerrar la sesión de la cuenta empresarial para mantener la seguridad de la cuenta.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario empresa cierra sesión. DADO QUE, soy un usuario con tipo de cuenta empresa autenticado en la plataforma, CUANDO hago clic en la opción "Cerrar Sesión" en cualquier página, ENTONCES soy redirigido a la landing page, Y mi sesión se cierra con éxito.</li>
                <li><strong>Escenario 2:</strong> El usuario cliente cierra sesión. DADO QUE, soy un usuario con tipo de cuenta cliente autenticado en la plataforma, CUANDO hago clic en la opción "Cerrar Sesión" en cualquier página, ENTONCES soy redirigido a la landing page, Y mi sesión se cierra con éxito.</li>
        <td>#1</td>
    </tr>
    <tr>
        <td>Manejo de Usuario</td>
        <td>Elección de membresía de empresa</td>
        <td>Como usuario empresa quiero una opción que permita aumentar mi visibilidad dentro de la plataforma para captar clientes.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario visualiza los planes de membresía. DADO QUE, soy un representante autorizado de una empresa de mudanzas, CUANDO accedo a la sección de elección de membresía en mi perfil, ENTONCES puedo visualizar los diferentes planes de membresía disponibles.</li>
                <li><strong>Escenario 2:</strong> El usuario selecciona un plan de membresía. DADO QUE soy un representante autorizado de una empresa de mudanzas, CUANDO selecciono un plan de membresía, ya sea de 3 meses, 6 meses o 1 año, Y presiono el botón “Adquirir Membresía”, ENTONCES se muestra la página de pago.</li>
        </td>
        <td>#1</td>
    </tr>
    <tr>
        <td>Manejo de Usuario</td>
        <td>Pago de membresía</td>
        <td>Como usuario empresa quiero poder ingresar los detalles de mi tarjeta para pagar la membresía.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario paga la membresía que eligió. DADO QUE estoy en la página de procesamiento de pagos para un plan de membresía premium, CUANDO elija el método de pago Y coloque la información de mi tarjeta Y presione "Pagar", ENTONCES el sistema procesa la transacción de manera segura y exitosa.</li>
                <li><strong>Escenario 2:</strong> El usuario ingresa datos incorrectos en el sistema de pago. DADO QUE soy un representante autorizado de una empresa de mudanzas, CUANDO el sistema detecta un problema durante el procesamiento del pago, como datos incorrectos, ENTONCES los campos que necesitan una corrección son sombreados de color rojo indicando alerta.</li>
                <li><strong>Escenario 3:</strong> El usuario visualiza los beneficios de la membresía que eligió. DADO QUE, he realizado con éxito el pago de la membresía premium, CUANDO vuelvo a mi perfil de empresa, ENTONCES se aplican los beneficios de la membresía premium de manera inmediata.</li>
            </ul>
        </td>
        <td>#1</td>
    </tr>
    <tr>
        <td>Métodos de pago</td>
        <td>Pago para reserva de servicio</td>
        <td>Como usuario cliente quiero poder elegir entre diferentes métodos de pago al reservar el servicio de mudanza para elegir el que más se acomode a mi preferencia y pueda pagar el servicio exitosamente.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> Registro seguro de la tarjeta al momento de la reserva. DADO QUE, el usuario está en el proceso de reserva de servicio de mudanza o carga. CUANDO, introduce los detalles de su tarjeta ENTONCES  se guardan los datos de manera segura y protegida, utilizando un formulario de pago encriptado y confiable.</li>
                <li><strong>Escenario 2:</strong> Cobro automático al finalizar el servicio. DADO QUE, el servicio de mudanza o carga ha sido completado con éxito según la reserva. CUANDO, la plataforma indica la finalización del servicio. ENTONCES se procederá a cobrar automáticamente el importe acordado previamente de la tarjeta registrada al realizar la reserva.</li>
            </ul>
        </td>
        <td>#2</td>
    </tr>
    <tr>
        <td>Métodos de pago</td>
        <td>Detalles de pago</td>
        <td>Como usuario cliente quiero poder revisar los detalles de pago de todas mis reservas para poder ver los costos de los servicios contratados.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario visualiza su historial de pagos. DADO QUE, el usuario cliente se encuentra en la página de su perfil. CUANDO, selecciona “Historial de pagos” Y haya realizado pagos anteriormente. ENTONCES, se muestra en forma de lista el historial de pagos los cuales contienen información detallada.</li>
                <li><strong>Escenario 2:</strong> El usuario visualiza su historial de pagos sin ningún registro. DADO QUE, el usuario cliente se encuentra en la página de su perfil. CUANDO, selecciona “Historial de pagos” Y no haya realizado pagos anteriormente. ENTONCES, se muestra el mensaje “No existen pagos registrados hasta la fecha”.</li>
            </ul>
        </td>
        <td>#2</td>
    </tr>
    <tr>
        <td>Búsqueda de empresas</td>
        <td>Búsqueda de empresas cercanas</td>
        <td>Como usuario cliente quiero poder buscar empresas que ofrezcan servicios de mudanza o carga cercanos a mi ubicación actual para asegurarme que el servicio sea conveniente.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario ingresa su ubicación para buscar empresas. DADO QUE, el usuario está en el landing page logueado con su cuenta personal. CUANDO, presione el botón de “Búsqueda”. ENTONCES aparece un campo donde puedo ingresar mi ubicación actual. </li>
                <li><strong>Escenario 2:</strong> El usuario visualiza las empresas de acuerdo a su ubicación. DADO QUE, he ingresado mi ubicación. CUANDO, presione el botón de “Buscar”. ENTONCES, me aparece una página que muestra una lista de empresas que ofrecen servicios de mudanza o carga que estén dentro de un radio definido de mi ubicación.</li>
                <li><strong>Escenario 3:</strong> El usuario modifica la ubicación de búsqueda de empresas. DADO QUE, estoy viendo la lista de empresas cercanas. CUANDO, modifique mi ubicación o ajuste el radio de búsqueda. ENTONCES, los resultados de la búsqueda se actualizan.</li>
            </ul>
        </td>
        <td>#3</td>
    </tr>
    <tr>
        <td>Búsqueda de empresas</td>
        <td>Filtrar por servicios ofrecidos</td>
        <td>Como usuario cliente quiero poder filtrar las empresas por los servicios que ofrecen para encontrar aquellas que ofrecen el servicio que deseo.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario visualiza la opción de búsqueda por servicios. DADO QUE soy un usuario logueado con su cuenta personal y está en el landing page. CUANDO, me dirija a la página de búsqueda de empresas”. ENTONCES, aparece un input en el cual se puede buscar por nombre de servicios.</li>
                <li><strong>Escenario 2:</strong> El usuario realiza la opción de búsqueda por servicios seleccionados. DADO QUE, estoy viendo el buscador CUANDO, escriba las letras del nombre del servicio que quiero. ENTONCES, se muestran las filas con las empresas que tienen ese tipo de servicio.</li>
            </ul>
        </td>
        <td>#3</td>
    </tr>
    <tr>
        <td>Búsqueda de empresas</td>
        <td>Filtrar por calificación</td>
        <td>Como usuario cliente quiero poder ordenar a las empresas de acuerdo por la cantidad de estrellas promedio y número de reseñas para tener la seguridad de encontrar calidad y confiabilidad en el servicio.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario visualiza las opciones de filtro de ordenamiento de las empresas. DADO QUE, me encuentro en el landing page y estoy logueado con mi cuenta personal. CUANDO, presione el botón de “Búsqueda”. ENTONCES, se muestra la opción “Ordenar por calificación” y la opción “Ordenar por número de reseñas”</li>
                <li><strong>Escenario 2:</strong> El usuario selecciona el filtro de ordenamiento por calificación. DADO QUE, el usuario está viendo la lista de empresas. CUANDO, selecciona la opción de “Ordenar por calificación”. ENTONCES, la plataforma reorganiza los resultados para mostrar primero las empresas con las calificaciones más altas, es decir los ordena de 5 estrellas a 0 estrellas.</li>
                <li><strong>Escenario 3:</strong> El usuario selecciona el filtro de ordenamiento por reseñas. DADO QUE, el usuario está viendo la lista de empresas. CUANDO, selecciona la opción de “Ordenar por número de reseñas”, ENTONCES, la plataforma reorganiza los resultados para mostrar primero las empresas con los números de reseñas más altos.</li>
            </ul>
        </td>
        <td>#3</td>
    </tr>
    <tr>
        <td>Reserva de servicios</td>
        <td>Visualizar perfil de empresa</td>
        <td>Como usuario cliente quiero poder visualizar el perfil de cada empresa para conocer su información detallada y así tomar una decisión informada y confiable al seleccionar la empresa adecuada para mis necesidades.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario selecciona una empresa para ver su información. DADO QUE, estoy viendo la lista de empresas disponibles. CUANDO, haga clic en una fila de una tabla que guarda información específica de una empresa. ENTONCES, el sistema me redirige a la página del perfil de esa empresa. </li>
                <li><strong>Escenario 2:</strong> El usuario visualiza la información detallada de una empresa. DADO QUE, estoy en el perfil de la empresa. CUANDO, me desplace hacia abajo. ENTONCES, la página muestra una breve descripción, su ubicación, logo, calificación promedio, reseñas anteriores, teléfono disponibilidad y servicios ofrecidos, así como el botón de “Reserva”. </li>
            </ul>
        </td>
        <td>#4</td>
    </tr>
    <tr>
        <td>Reserva de servicios</td>
        <td>Envío de información sobre la posible reserva</td>
        <td>Como cliente quiero hacer una reserva sobre los servicios que ofrece la empresa de mudanza para que estos tengan más detalle de la reserva que quiero.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario visualiza el formulario de reservación de servicio. DADO QUE, el cliente esté viendo los servicios ofrecidos por una empresa, CUANDO, presione “Reservar”, ENTONCES, se muestra un formulario para reservar los servicios de esa empresa.</li>
                <li><strong>Escenario 2:</strong> El usuario realiza la reserva del servicio. DADO QUE, el cliente se encuentra en el formulario de reserva de servicios de una empresa, CUANDO, rellene los campos fecha de hoy, servicios, dirección de entrega, dirección de destino, fecha cuando el servicio se lleva a cabo, hora cuando el servicio se lleva a cabo., Y presione “Realizar reserva”, ENTONCES se guarda la reserva en el historial de reservas. </li>
            </ul>
        </td>
        <td>#4</td>
    </tr>
    <tr>
        <td>Reserva de servicios</td>
        <td>Acordar un precio por servicio reservado</td>
        <td>Como empresa quiero acordar horarios y precio por los servicios tras conversar con el cliente para realizar la mudanza.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> Los usuarios visualizan la opción para editar los detalles del servicio. DADO QUE, el cliente y un trabajador de la empresa de mudanza están en chat en vivo, CUANDO, terminen de definir detalles, ENTONCES, el usuario empresa se dirige a la pantalla de historial de reservas para editar los detalles de la reserva.</li>
                <li><strong>Escenario 2:</strong> El usuario cliente visualiza la opción de pago de servicio. DADO QUE, el usuario empresa se encuentra en la pantalla de historial de reservas, CUANDO, edite los campos precios, fecha y hora de la reserva Y presione el icono de editar, ENTONCES, se pone visible el botón de pagar para el usuario cliente.</li>
            </ul>
        </td>
        <td>#4</td>
    </tr>
    <tr>
        <td>Reserva de servicios</td>
        <td>Visualizar historial de reservas</td>
        <td>Como usuario cliente quiero poder ver los servicios de mudanza contratados para tener control y seguimiento de mis transacciones dentro de la aplicación.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario ingresa a reservas. DADO QUE el usuario ingresa a la sección de reservas, CUANDO, seleccione el botón ver historial de reservas. ENTONCES, aparecerá la página del historial. </li>
                <li><strong>Escenario 2:</strong> El usuario visualiza su historial de reservas. DADO QUE el usuario se encuentra en la página del historial de reservas. CUANDO, el usuario haga scroll. ENTONCES, la página le permitirá ver más reservas hechas anteriormente. </li>
                <li><strong>Escenario 3:</strong> El usuario busca una reserva anterior. DADO QUE el usuario se encuentra en la página del historial de reservas Y se ubica en la parte inferior de la página Y se visualiza un paginador con botones con flechas hacia adelante y atrás. CUANDO, el usuario seleccione uno de los botones. ENTONCES, la página le permitirá ver sus reservas anteriores o posteriores. </li>
                <li><strong>Escenario 4:</strong> El usuario visualiza sus últimas reservas. DADO QUE el usuario ingresa a la sección de reservas. CUANDO, la plataforma carga la página. ENTONCES, las últimas reservas se visualizarán primero y las más antiguas al último.</li>
            </ul>
        </td>
        <td>#4</td>
    </tr>
    <tr>
        <td>Reserva de servicios</td>
        <td>Visualizar varias reservas en una página</td>
        <td>Como usuario cliente quiero visualizar varias reservas en una sola página para que pueda tener una vista panorámica de todos mis servicios de mudanza contratados de manera fácil y rápida.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario cambia la cantidad de reservas que se visualiza en una página. DADO QUE el usuario se encuentra en la página del historial de reservas Y se ubica en la parte inferior de la página Y se visualiza el paginador Y al lado derecho se encuentra la opción desplegable, CUANDO, el usuario seleccione esta opción. ENTONCES, se visualizará el desplegable con las opciones de visualización de 4, 8 y 12 páginas. </li>
                <li><strong>Escenario 2:</strong> El usuario selecciona el número de reservas para visualizarse en la página. DADO QUE el usuario seleccionó el desplegable del paginador,  CUANDO,el usuario seleccione el número de reservas que se visualizará 4, 8 o 12. ENTONCES, la página mostrará la cantidad de reservas que eligió el usuario.</li>
            </ul>
        </td>
        <td>#4</td>
    </tr>
    <tr>
        <td>Reserva de servicios</td>
        <td>Comunicación mediante chat con la empresa</td>
        <td>Como usuario cliente quiero comunicarme con la empresa que reservé para poder coordinar los detalles de la mudanza.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario ingresa al chat. DADO QUE, el usuario ingresa a su historial de reservas. Y en su última reserva aparece como estado “En curso”, Y se mostrará en el recuadro de su última reserva un botón “Chat”, CUANDO seleccione el botón, ENTONCES se desplegará un diálogo con un chat, este contendrá un campo donde ingresar el mensaje y en la parte inferior el botón de “Enviar mensaje”.</li>
                <li><strong>Escenario 2:</strong> El usuario envía mensaje. DADO QUE, el usuario seleccione el botón “Chat”, Y se muestre el diálogo del chat, Y se muestra dentro del diálogo el título “Chat”, Y el usuario escriba el mensaje en el recuadro. CUANDO,  seleccione el botón “Enviar mensaje” que está en la parte inferior. ENTONCES, se guardará el mensaje.</li>
                <li><strong>Escenario 3:</strong> El usuario cancela el envío del mensaje. DADO QUE, el usuario seleccione el botón “Chat”, Y se muestre el diálogo del chat, Y se muestra dentro del diálogo el título “Chat” y el nombre de la empresa a enviar mensaje, Y el usuario escriba el mensaje en el recuadro. CUANDO,  seleccione el botón “X”  está en la parte superior. ENTONCES, el diálogo de chat se cerrará.</li>
            </ul>
        </td>
        <td>#4</td>
    </tr>
    <tr>
        <td>Reserva de servicios</td>
        <td>Servicio de carga rápida</td>
        <td>Como usuario cliente, quiero poder realizar reservas de servicios de mudanza o carga para el mismo día de manera rápida y sin complicaciones, para poder programar y asegurar el servicio de forma inmediata y conveniente según mis necesidades de última hora.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario selecciona el servicio de carga rápida. DADO QUE, el usuario está en la página de “búsqueda de empresas”, Y visualiza el botón de “carga rápida”, CUANDO seleccione el botón “carga rápida”, ENTONCES se mostrará una ventana indicando que se buscará un servicio de carga rápida.</li>
                <li><strong>Escenario 2:</strong> El usuario busca  carga rápida. DADO QUE, el usuario visualiza la ventana de carga rápida, CUANDO, haga click en el botón “Buscar carga rápida”, ENTONCES se registrará inmediatamente una reserva.</li>
            </ul>
        </td>
        <td>#4</td>
    </tr>
    <tr>
        <td>Reseñas</td>
        <td>Escribir reseñas sobre el servicio</td>
        <td>Como usuario cliente, quiero poder escribir reseñas sobre el servicio de mudanza o carga recibido para compartir mi experiencia con otros usuarios.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario escribe una reseña. DADO QUE he completado un servicio de mudanza o carga con la empresa, CUANDO acceda a la sección de historial de reservas, Y seleccione el botón de “Review”, ENTONCES puedo calificar a la empresa y redactar una reseña que describa mi experiencia general con el servicio.</li>
                <li><strong>Escenario 2:</strong> El usuario decide cancelar la redacción de una reseña. DADO QUE, el usuario ha accedido a la sección de reseñas después de completar un servicio de mudanza o carga con la empresa, CUANDO el usuario comienza a redactar una reseña detallada pero decide cancelarla o ya no desea continuar con la redacción. ENTONCES selecciona el botón 'x' ubicado en la esquina superior derecha de la ventana. Y la ventana se cierra de inmediato sin guardar ningún contenido.</li>
            </ul>
        </td>
        <td>#5</td>
    </tr>
    <tr>
        <td>Reseñas</td>
        <td>Visualizar reseñas de las empresas</td>
        <td>Como usuario cliente, quiero poder visualizar reseñas y comentarios sobre las empresas de mudanza o carga para evaluar la calidad de los servicios antes de tomar una decisión.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario visualiza la sección de reseñas. DADO QUE, el usuario está explorando las empresas de mudanza o carga, CUANDO acceda a la página de perfil de una empresa, ENTONCES veo en la parte inferior un desplegable  de las reseñas de la empresa.</li>
                <li><strong>Escenario 2:</strong> El usuario visualiza todas las reseñas de las compañia. DADO QUE, el usuario está visualizando los detalles de  la empresa de mudanza o carga CUANDO seleccione el desplegable de las reseñas, ENTONCES mostrará las comentarios de otros usuarios sobre la empresa y sus servicios.</li>
            </ul>
        </td>
        <td>#5</td>
    </tr>
    <tr>
        <td>Reserva de servicios</td>
        <td>Cancelar reserva</td>
        <td>Como usuario, quiero poder cancelar la reserva en curso para tener la flexibilidad de modificar mis planes según sea necesario.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario visualiza el botón de cancelar. DADO QUE, el usuario tenga una reserva con estado ‘En curso’, CUANDO el usuario se dirija a la sección de ‘Reservas’, ENTONCES, visualizará en la reserva más reciente la opción de ‘Cancelar’.</li>
                <li><strong>Escenario 2:</strong> El usuario cancela la reserva. DADO QUE, el usuario se encuentre en la sección de ‘Reservas, CUANDO seleccione el botón ‘Cancelar’, ENTONCES, el estado de la reserva cambiará automáticamente a ‘Finalizado’.</li>
            </ul>
        </td>
        <td>#4</td>
    </tr>
    <tr>
        <td>Reserva de servicios</td>
        <td>Editar pago de la reserva</td>
        <td>Como usuario empresa, después de coordinar los detalles de la mudanza con el cliente, quiero tener la capacidad de editar la información de pago asociada a la reserva para reflejar cambios en los costos acordados.</td>
        <td>
            <ul>
                <li><strong>Escenario 1:</strong> El usuario visualiza la edición del pago. DADO QUE, el usuario tenga una reserva con estado ‘En curso’, Y se dirija en la sección de ‘Historial de reservas’  CUANDO seleccione el botón de editar ENTONCES, se visualizará un campo para ingresar el monto del pago y botones ‘Guardar’ y ‘Cancelar’.</li>
                <li><strong>Escenario 2:</strong> El usuario edita el pago. DADO QUE, el usuario se encuentre editando el pago, CUANDO ingrese el monto solicitado y seleccione el botón de ‘Guardar’ ENTONCES se visualizará el cambio del pago en la reserva.</li>
            </ul>
        </td>
        <td>#4</td>
    </tr>
</table>



## 3.3. Impact Mapping

![impact map](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/Javier/feature/Informe/Imagenes/Impact%20map%20CSE.png?raw=true)

## 3.4. Product Backlog

| **# Orden** | **User Story Id** | **Título** | **Descripción** | **Story Points (1/2/3/5/8)** |
|--------------|--------------|--------------|--------------|--------------|
| 1| HU01    | Registro de Empresa de Mudanzas  | Como empresario, quiero poder registrar mi empresa de mudanza en la plataforma para que esté disponible y así poder realizar servicios de mudanza a los clientes.    | 3|
| 2| HU02   | Registro de Cliente    | Como usuario nuevo de Carga sin estrés, deseo registrarme en la plataforma para poder solicitar servicios de mudanza cuando los necesite.   | 2|
| 3| HU03    | Iniciar Sesión en la plataforma    | Como usuario registrado de Carga sin estrés, quiero poder iniciar sesión en mi cuenta para acceder a mis opciones según mi tipo de cuenta.     | 3|
| 4| HU04   | Ajustes de cuenta de cliente  | Como cliente registrado en Carga sin estrés, quiero ajustar los datos de mi cuenta para que refleje mis datos actuales.    | 2|
| 5| HU05   | Ajustes de cuenta de empresa   | Como empresa usuaria de Carga sin estrés, quiero ajustar los datos de la cuenta de empresa para que reflejen el estado actual de esta.    | 3|
| 6| HU06   | Cerrar Sesión   | Como usuario quiero cerrar la sesión de la cuenta empresarial para mantener la seguridad de la cuenta.   | 1|
| 7| HU07   | Elección de membresía de empresa    | Como usuario empresa quiero una opción que permita aumentar mi visibilidad dentro de la plataforma para captar clientes.    | 2|
| 8| HU08    | Pago de membresía  | *Como usuario empresa quiero poder ingresar los detalles de mi tarjeta para pagar la membresía.   | 3|
| 9| HU09   | Pago para reserva de servicio   | Como usuario cliente quiero poder elegir entre diferentes métodos de pago al reservar el servicio de mudanza para elegir el que más se acomode a mi preferencia y pueda pagar el servicio exitosamente.   | 5|
| 10| HU10    | Detalles de pago   | Como usuario cliente quiero poder revisar los detalles de pago de todas mis reservas para poder ver los costos de los servicios contratados.   | 3|
| 11| HU11   | Búsqueda de empresas cercanas  | Como usuario cliente quiero poder buscar empresas que ofrezcan servicios de mudanza o carga cercanos a mi ubicación actual para asegurarme que el servicio sea conveniente.   | 2|
| 12| HU12   | Filtrar por servicios ofrecidos  | Como usuario cliente quiero poder filtrar las empresas por los servicios que ofrecen para encontrar aquellas que ofrecen el servicio que deseo.   | 3|
| 13| HU13   | Filtrar por calificación | Como usuario cliente quiero poder ordenar a las empresas de acuerdo por la cantidad de estrellas promedio y número de reseñas para tener la seguridad de encontrar calidad y confiabilidad en el servicio.   | 2|
| 14| HU14    | Visualizar perfil de empresa    | Como usuario cliente quiero poder visualizar el perfil de cada empresa para conocer su información detallada y así tomar una decisión informada y confiable al seleccionar la empresa adecuada para mis necesidades. | 2|
| 15| HU15   | Envío de información sobre la posible reserva  | Como cliente quiero hacer una reserva sobre los servicios que ofrece la empresa de mudanza para que estos tengan más detalle de la reserva que quiero.    | 5|
| 16| HU16   | Acordar un precio por servicio reservado | Como empresa quiero acordar horarios y precio por los servicios tras conversar con el cliente para realizar la mudanza.   | 3|
| 17| HU17   | Visualizar historial de reservas | Como usuario cliente quiero poder ver los servicios de mudanza contratados para tener control y seguimiento de mis transacciones dentro de la aplicación.  | 5|
| 18| HU18   | Visualizar varias reservas en una página | Como usuario cliente quiero visualizar varias reservas en una sola página para que pueda tener una vista panorámica de todos mis servicios de mudanza contratados de manera fácil y rápida.  | 3|
| 19| HU19   | Comunicación mediante chat con la empresa | Como usuario cliente quiero comunicarme con la empresa que reservé para poder coordinar los detalles de la mudanza.   | 5|
| 20| HU20   | Servicio de carga rápida | Como usuario cliente, quiero poder realizar reservas de servicios de mudanza o carga para el mismo día de manera rápida y sin complicaciones, para poder programar y asegurar el servicio de forma inmediata y conveniente según mis necesidades de última hora.   | 5|
| 21| HU21   | Escribir reseñas sobre el servicio | Como usuario cliente, quiero poder escribir reseñas sobre el servicio de mudanza o carga recibido para compartir mi experiencia con otros usuarios.   | 3|
| 22| HU22   | Visualizar reseñas de las empresas | Como usuario cliente, quiero poder visualizar reseñas y comentarios sobre las empresas de mudanza o carga para evaluar la calidad de los servicios antes de tomar una decisión.   | 3|
| 23| HU23   | Cancelar reserva | Como usuario, quiero poder cancelar la reserva en curso para tener la flexibilidad de modificar mis planes según sea necesario.   | 3|
| 24| HU24   | Editar pago de la reserva | Como usuario empresa, después de coordinar los detalles de la mudanza con el cliente, quiero tener la capacidad de editar la información de pago asociada a la reserva para reflejar cambios en los costos acordados.   | 3|

# Capítulo 4: Product Design

## 4.1. Style Guidelines

### 4.1.1. General Style Guidelines
A continuación, se presentará los materiales gráficos a emplear para el reconocimiento de la marca.

**Main Logo & Branding**      
El logo está conformado por: Un camión caracteriztico del transporte de objetos. Este objeto simboliza el agente principal de la marca (lo que el usuario desea/espera encontrar).
Por otro lado, este camión esta encerrado por un círculo el cual representa movimiento y globalidad. La complementación de estos ítems, inspira optimismo y energía. Derivado de ello transmitimos la idea de que la aplicación ofrece servicios eficaces, ágiles y accesible.
Los colores usados como amarillo y azul crean un ambiente de confianza, profesionalidad, elegancia y solidez.    
Del mismo modo se considera el nombre del proyecto para relacionarlo con la imagen del camión.

![logo](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/CargaSinEstres-V1/public-images/Cargalogo.png?raw=true)

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
- Cronológico: Si el usuario desea ver las reservas de los servicios que realizó, entonces estas aparecerán en una lista de forma cronológica, siendo la solicitud más antigua la que aparece en la parte de abajo y la solicitud realizada recientemente en la parte de arriba.

### 4.2.2. Labeling Systems.
A continuación, se definirán las etiquetas a utilizar para agrupar conjuntos de información desde los distintos toolbar, así como las asociaciones entre las mismas.

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

![Landing Page Mock-up](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/LandingPageWireframeResponsive.png?raw=true)  

## 4.4. Web Applications UX/UI Design.  
### 4.4.1. Web Applications Wireframes.  
![Registro de cliente - wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/registro-cliente-wireframe.png?raw=true) 
![Registro de empresa - wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/registro-empresa-wireframe.png?raw=true) 
![inicio-sesion-wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/wireframe-login.png?raw=true)  
![mobile-companySearch-wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/wireframeDesktop-CompanySearch.png?raw=true)
![mobile-companyDetail-wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/wireframeDesktop-CompanyDetail.png?raw=true)
![Chat de una reserva - wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/chat-reserva-wireframe.png?raw=true) 
![Formulario membresia - wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/formulario-membresia-wireframe.png?raw=true)  
![Boleta Compra - wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/boleta-wireframe.png?raw=true)
![historial-reservas-wireframe](https://raw.githubusercontent.com/LuceroObispoRios/Grupo1_SW53/Andrea/feature/Informe/Imagenes/wireframe-historial-reservas.png)   
![mobile-companySearch-wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/wireframeMobile-CompanySearch.png?raw=true)
![mobile-companyDetail-wireframe](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/wireframeMobile-CompanyDetail.png?raw=true)

### 4.4.2. Web Applications Wireflow Diagrams.  
![wireframe-flow1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/wireflow-wireframe-1.png?raw=true)
  
![wireframe-flow2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/wireframes-flow2.png?raw=true)  

![wireframe-flow3](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/wireframes-flow3.png?raw=true)

### 4.4.2. Web Applications Mock-ups.  
![registro-cliente-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/registro-cliente-mockup.png?raw=true)  
![registro-empresa-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/registro-empresa-mockup.png?raw=true)  
![ajustes-empresa-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ajustes-empresa-mockup.png?raw=true)  
![ajustes-cliente-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/ajustes-cliente-mockup.png?raw=true)  
![inicio-sesion-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/login-mockup.png?raw=true)  
![destokp-companySearch-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/searchCompany-mockup.png?raw=true)  
![destokp-companySearch-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/companyProfile-mockup.png?raw=true)  
![Chat de una reserva](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/chat-mockup.png?raw=true)  
![Formulario membresia](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/membershipForm-mockup.png?raw=true)  
![Boleta Compra](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/boleta-compra.png?raw=true)  
![historial-reservas-mockup](https://raw.githubusercontent.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/bookingHistory-mobile-mockup.png)  

![mobile-login-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/login-mobile-mockup.png?raw=true)  
![mobile-cliente-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/registro-cliente-mockup-m.png)  
![mobile-empresa-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/registro-empresa-mockup-m.png)  
![mobile-companySearch-mockup](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/companyProfile-mobile-mockup.png?raw=true)  

### 4.4.3. Web Applications User Flow Diagrams.  
![mockup-flow1](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/wireflow-mockup-1.png?raw=true)    
  
![mockup-flow2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/wireflow-mockup-2.png?raw=true)  

![mockup-flow2](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/develop/Informe/Imagenes/mockup-flow3.png?raw=true) 

## 4.5. Web Applications Prototyping.  
El prototipo de secuencia web se encuentra en el siguiente enlace :   
[https://www.figma.com/proto/FFKvovSKPyL6LW7e2DDSph/Wireframes?type=design&node-id=26-453&t=wLRuXHHBxMj8lVew-1&scaling=min-zoom&page-id=2%3A3&starting-point-node-id=26%3A453&show-proto-sidebar=1&mode=design](https://www.figma.com/proto/FFKvovSKPyL6LW7e2DDSph/Wireframes?type=design&node-id=26-453&t=wLRuXHHBxMj8lVew-1&scaling=min-zoom&page-id=2%3A3&starting-point-node-id=26%3A453&show-proto-sidebar=1&mode=design)  

El prototipo de secuencia mobile se encuentra en el siguiente enlace :  
[https://www.figma.com/proto/FFKvovSKPyL6LW7e2DDSph/Wireframes?type=design&node-id=26-885&t=1YhgDvhIeuMcfiDB-1&scaling=min-zoom&page-id=2%3A3&starting-point-node-id=26%3A885&show-proto-sidebar=1&mode=design](https://www.figma.com/proto/FFKvovSKPyL6LW7e2DDSph/Wireframes?type=design&node-id=26-885&t=1YhgDvhIeuMcfiDB-1&scaling=min-zoom&page-id=2%3A3&starting-point-node-id=26%3A885&show-proto-sidebar=1&mode=design)  

## 4.6. Domain-Driven Software Architecture.

Los diagramas c4 se realizaron con Structurizr.   Enlace:[https://www.structurizr.com/share/85676/294b91b5-fde5-4ad9-bb61-11105de941e6](https://www.structurizr.com/share/85676/294b91b5-fde5-4ad9-bb61-11105de941e6)  
  
### 4.6.1. Software Architecture Context Diagram.

En el diagrama de contexto se observa la relación de tipos de usuarios que interactúan con la aplicación, los cuales son "Ciudadano" y "Empresa". Así como los sistemas externos que se utilizan para el funcionamiento de la aplicación como el sistema de pago Niubiz.  

![Context Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Contexto-v2.png?raw=true)  


### 4.6.2. Software Architecture Container Diagrams.

En el diagrama de contenedores se observa la relación de los componentes dentro de nuestra aplicación, como el landing page, la aplicación web, los contextos, la base de datos y el API REST.

![Container Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Contenedor-v2.png?raw=true)  


### 4.6.3. Software Architecture Components Diagrams.

Los componentes de nuestra aplicación se dividen en 3 contextos, y el patron utilizado es el siguiente:  
El patrón **Repository** utilizado para separar la capa de acceso a datos de la capa de la lógica de negocio. Además, ayuda a decidir si debe recuperar datos de una red o usar resultados almacenados en caché de una base de datos local, lo que mejora la gestión de datos y la eficiencia de la aplicación.  

**Business Context**
![Business Component Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Service-Components-v2.png?raw=true)  

**User Management Context**
![User ManagementComponent Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/User-Management-Components-v2.png?raw=true)  

**Security Context**
![Security Component Diagram](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Security-Components-v2.png?raw=true)  

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
![Database](https://github.com/LuceroObispoRios/Grupo1_SW53/blob/main/Informe/Imagenes/Carga_sin_estresDB.png?raw=true)  
