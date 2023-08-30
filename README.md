# SwapBook
SwapBook: Plataforma en línea para intercambio seguro de libros usados. Regístrate, agrega libros, busca y solicita intercambios. Perfiles, mensajería y reseñas. Fomenta la comunidad lectora. Privacidad y seguridad prioritarias. Promueve compartir conocimiento y colaboración.

En esta oportunidad me encuentro ideando una aplicación de intercambio en físico de libros usados, que pretende crear una red de lectores en Argentina, que permita a través de la cooperación voluntaria, el acceso a libros de cualquier género y crear una comunidad sólida de lectores.

Las tecnologías con las cuales estoy desarrollando esta aplicación, son las siguientes:

React: Esta tecnología constituye el corazón de la interfaz de usuario de la aplicación. A través del empleo del framework React, puedo estructurar y gestionar eficientemente los componentes que conforman la interfaz de usuario, brindando una experiencia interactiva y fluida a los usuarios finales.

MongoDB: La elección de MongoDB como sistema de gestión de bases de datos aporta escalabilidad y flexibilidad a la aplicación. Esta tecnología de base de datos NoSQL me permite almacenar y gestionar datos de manera eficiente, adaptándose a las necesidades cambiantes de la aplicación.

Bootstrap para React: La utilización de la librería Bootstrap adaptada a React proporciona una base sólida para el diseño y la presentación de la interfaz de usuario. Esto asegura la coherencia visual y una experiencia de usuario intuitiva a lo largo de toda la aplicación.

Express: Establece un flujo de trabajo eficaz en el manejo de rutas y solicitudes. Express simplifica el proceso de creación de endpoints y facilita la interacción entre el frontend y el backend.

Mongoose: Para garantizar una interacción fluida con la base de datos MongoDB, he optado por utilizar Mongoose. Esta biblioteca de modelado de objetos facilita la definición de esquemas y operaciones de base de datos, optimizando la manipulación de los datos almacenados.

Express Validator: Con el fin de asegurar la integridad y validez de los datos enviados por los usuarios, he integrado Express Validator. Esta tecnología ofrece un mecanismo eficiente para validar y sanitizar las entradas, previniendo posibles vulnerabilidades y errores en la aplicación.

Axios: Facilita la gestión de la comunicación asincrónica, entre el backend, el frontend permitiendo la obtención y envío de datos de manera eficiente.

Además, mi aplicación se beneficia de la integración con APIs externas, en específico:

Google Cloud para Nodemailer con OAuth2.0: La adopción de Google Cloud API con OAuth2.0 para Nodemailer brinda un método seguro y confiable para el envío de correos electrónicos. Esto garantiza la autenticación adecuada y protección de la información sensible de los usuarios.

Google Books API: La incorporación de la API de Google Books enriquece la funcionalidad de la aplicación al permitir a los usuarios acceder a información relevante sobre libros. Esta integración ofrece una valiosa fuente de datos externos para mejorar la experiencia del usuario.

En resumen, la sinergia entre estas tecnologías y APIs constituye la base sobre la cual estoy construyendo mi aplicación. Cada una de ellas desempeña un papel fundamental en áreas específicas del desarrollo, permitiendo la creación de un producto final coherente, eficiente y plenamente funcional.

Las prestaciones en curso en el frontend actualmente se desglosan de la siguiente manera:

Formularios de Registro: He implementado formularios de registro que abarcan tanto usuarios como libros. Estos componentes de la interfaz facilitan la recopilación de datos relevantes y, a través de una interacción sincronizada con el backend, inician solicitudes HTTP de tipo POST. Estas solicitudes permiten el registro preciso de usuarios y libros en la base de datos MongoDB, consolidando la información en un formato estructurado y accesible.

Búsqueda de Libros por Identificación (ID): He instaurado un formulario que propicia la búsqueda de libros mediante la utilización del identificador único del libro. Esta búsqueda se lleva a cabo mediante solicitudes de tipo GET, que se dirigen al backend para obtener el libro correspondiente en base a su ID. Esta funcionalidad optimiza la recuperación de información puntual y específica.

Búsqueda de Libros por Título: He diseñado y habilitado un formulario específico para la búsqueda de libros por título. Este proceso de búsqueda se ejecuta a través de una interacción con la API de Google Books, lo que garantiza la accesibilidad a una amplia base de datos de libros. La respuesta de la API se representa visualmente en una tarjeta en el componente "PerfilUsuario". La implementación de esta función enriquece la aplicación al proporcionar una interfaz amigable para descubrir y acceder a recursos literarios con base en los títulos deseados.


El backend de mi aplicación presenta las siguientes prestaciones :

Registro y Gestión de Usuarios con Validadores: El backend facilita la creación y administración de usuarios, implementando validadores que aseguran la integridad de los datos ingresados.

Operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en Libros y Usuarios: Se han establecido operaciones CRUD completas para tanto los libros como los usuarios, permitiendo la manipulación eficiente y coherente de la información almacenada.

Integración de API de Búsqueda de Libros: Se ha incorporado la API GoogleBooks de búsqueda de libros, mejorando la funcionalidad de búsqueda en la aplicación al facilitar a los usuarios el acceso a una amplia gama de recursos literarios.

Envío de Correos Electrónicos Tras el Registro de Usuarios: El backend está configurado para enviar correos electrónicos automáticamente después de que los usuarios se registren, garantizando una comunicación efectiva y personalizada.

Instrucciones para el Uso:

Instala las dependencias requeridas ejecutando el comando npm install.

Configura las variables de entorno, incluyendo la conexión a la base de datos y las claves de las APIs utilizadas.

Inicia el servidor utilizando el comando npm start.

Accede a la aplicación a través de un navegador web o herramientas de prueba de API, según corresponda.

Estas directrices permiten un despliegue fluido y efectivo de la aplicación, asegurando que tanto el backend como el frontend funcionen en armonía y proporcionen una experiencia satisfactoria para los usuarios y los desarrolladores.

La evolución de mi aplicación sigue en curso, con un enfoque en mejorar la experiencia del usuario y garantizar su seguridad. En esta fase de desarrollo, mi prioridad es ampliar el conjunto de validadores, con el propósito de proporcionar una experiencia más gratificante y confiable para los usuarios. Adicionalmente, estoy dedicando esfuerzos a la integración cohesiva de las restantes características del backend con el frontend. Esta etapa de integración busca asegurar la sincronización efectiva entre ambos componentes, culminando en una aplicación completa y cohesionada que ofrezca una experiencia fluida y de alta calidad para los usuarios finales.


A continuación, presentaré la visión integral de mi aplicación, detallando todas las funcionalidades que abarcará una vez completada:

Nombre de la plataforma: "SwapBook"

SwapBook es una plataforma en línea donde los amantes de la lectura pueden intercambiar libros usados de manera sencilla y segura. Los usuarios pueden registrarse, agregar libros que desean intercambiar, explorar la biblioteca de otros usuarios y solicitar intercambios. La plataforma promoverá el espíritu de compartir conocimiento y fomentará la comunidad lectora.

Funcionalidades principales:

Registro y autenticación:

Los usuarios podrán registrarse con una cuenta personal y autenticarse en la plataforma.
Pueden iniciar sesión utilizando su dirección de correo electrónico o mediante cuentas sociales como Google o Facebook.

Perfil de usuario:

Cada usuario tendrá un perfil personal donde podrá agregar información sobre sus intereses, géneros favoritos y una lista de libros disponibles para el intercambio.
También podrán ver los libros que están buscando para intercambiar.

Agregar libros para intercambiar:

Los usuarios podrán agregar libros que deseen intercambiar. Para ello, deberán proporcionar detalles como título, autor, género y una breve descripción del estado del libro.

Búsqueda y exploración:

Los usuarios podrán buscar libros disponibles para el intercambio por título, autor o género.
Se mostrará una lista de libros que coincidan con la búsqueda, junto con información sobre el usuario que los tiene disponibles.

Solicitar intercambios:

Los usuarios podrán enviar solicitudes de intercambio a otros usuarios que tengan libros que les interesen.
El propietario del libro recibirá una notificación y podrá aceptar o rechazar la solicitud.

Sistema de mensajería:

Se implementará un sistema de mensajería interna para que los usuarios puedan comunicarse y coordinar los detalles del intercambio, como la dirección de envío o el lugar de encuentro.

Calificaciones y reseñas:

Después de un intercambio exitoso, los usuarios podrán calificar y dejar comentarios sobre la experiencia.
Estas calificaciones y reseñas ayudarán a construir una comunidad de confianza y garantizar una experiencia positiva en la plataforma.


Notificaciones:

Los usuarios recibirán notificaciones en tiempo real sobre solicitudes de intercambio, mensajes nuevos y actualizaciones relevantes.
Recuerda que la seguridad y privacidad son fundamentales para una plataforma como esta. Asegúrate de proteger los datos de los usuarios y utilizar protocolos de seguridad para las transacciones y comunicaciones.

Con “SwapBook”, brindaré a los amantes de la lectura una forma sencilla de intercambiar libros usados y fomentar una comunidad colaborativa. 


Agradecimientos:

Quiero expresar mi agradecimiento a Academia Numen por brindarme una formación excepcional. Asimismo, deseo agradecer a la fundación Acnur y a Colectividades, por proporcionarme la valiosa oportunidad de formar parte de su programa. Gracias a esta experiencia, he adquirido habilidades de programación que me capacitarán para concebir proyectos con el potencial de mejorar la calidad de vida de numerosas personas.
