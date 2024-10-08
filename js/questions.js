// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "¿Qué papel ejercen los servidores dentro de un dominio?",
    answer: "Ambas respuestas son correctas",
    options: [
      "Controladores de dominio",
      "Ninguna de las respuestas es correcta",
      "Servidores miembro",
      "Ambas respuestas son correctas",
    ],
  },
  {
    numb: 2,
    question:
      "Siglas de la herramienta o aplicación que se usa para la interfaz gráfica del cliente (escribirlo en MAYUSCULAS)",
    answer: "GUI",
    options: ["GUI", "CLI", "API", "OS"],
  },
  {
    numb: 3,
    question:
      "¿Qué recomendaciones hace Microsoft antes de instalar o subir de versión en WS?",
    answer:
      "Deshabilitar el antivirus, Desconectar el SAI del puerto serie, Diagnosticar la RAM",
    options: [
      "Desinstalar los drivers o controladores específicos",
      "Diagnosticar la RAM",
      "Desconectar el SAI del puerto serie",
      "Deshabilitar la VPN",
      "Instalar un SAI para evitar que se quede sin luz durante la actualización",
      "Deshabilitar el antivirus",
    ],
  },
  {
    numb: 4,
    question:
      "¿Qué implica la ventaja de Centralización de los recursos dentro de la arquitectura cliente/servidor?",
    answer:
      "Que los recursos comunes a todos los usuarios se administran en el servidor, evitando situaciones de redundancia o inconsistencia de información en BBDD",
    options: [
      "Que se pueden añadir o suprimir clientes sin que el funcionamiento de la red se vea afectado",
      "Que los recursos comunes a todos los usuarios se administran en el servidor, evitando situaciones de redundancia o inconsistencia de información en BBDD",
      "Que al disponer de un mecanismo central de autenticación, las posibilidades de acceso indebido se reducen enormemente",
      "Que los clientes tienen poca trascendencia en el esquema y sus necesidades de administración son menores",
    ],
  },
  {
    numb: 5,
    question: "¿Qué es un servidor de archivos?",
    answer:
      "Servidor para crear almacenes de documentos en un lugar centralizado",
    options: [
      "Servidor para crear almacenes de documentos en un lugar centralizado",
      "Servidor donde el intercambio se limita a un solo mensaje de solicitud o respuesta (agrupación), como p.ej. en los cajeros automáticos",
      "Servidor normalmente asociado al uso de aplicaciones cliente/servidor donde un proceso cliente requiera datos al servidor de bases de datos",
      "Servidor que da soporte al procesamiento distribuido, donde un objeto puede hacer uso de los métodos de otros objetos sin importar dónde estén almacenados",
    ],
  },
  {
    numb: 6,
    question:
      "¿Qué permite la manera Compartida de la característica de Distribución del espacio en los S.O. en red?",
    answer:
      "Niveles de acceso distintos en función de los permisos dados por el administrador de la red",
    options: [
      "El mismo nivel de acceso para el único grupo con el que se comparte dicha carpeta",
      "Niveles de acceso distintos en función de los permisos dados por el administrador de la red",
      "Diferentes niveles de acceso para el único grupo con el que se comparte dicha carpeta",
      "Mismo nivel de acceso según los permisos dados por el administrador de la red",
    ],
  },
  {
    numb: 7,
    question:
      "¿En qué consiste la característica de Gestión de la red en los S.O. en red?",
    answer:
      "Ayuda a los administradores a controlar el comportamiento de la red mediante herramientas de gestión",
    options: [
      "Ayuda a los administradores a controlar el comportamiento de la red mediante herramientas de gestión",
      "Escalabilidad y administración descentralizada",
      "Permite al administrador de la red determinar las personas o grupos de personas que tendrán la posibilidad de acceder a los recursos",
      "Controla el acceso privado, compartido o público",
    ],
  },
  {
    numb: 8,
    question: "¿Qué es el controlador de dominio?",
    answer:
      "Servidores que pertenecen al dominio y contienen una copia de las cuentas de usuario y de otros datos",
    options: [
      "Uno de los clientes que pertenece al dominio y contiene una copia de las cuentas de usuario y de otros datos",
      "Ninguna de las respuestas es correcta",
      "Servidores que pertenecen al dominio y contienen una copia de las cuentas de usuario y de otros datos",
      "El usuario administrador de la red que se encarga de aplicar los permisos a los usuarios del dominio",
    ],
  },
  {
    numb: 9,
    question: "¿Qué definición de Sistema Operativo de Red es más correcta?",
    answer:
      "Es aquel que mantiene a dos o más ordenadores unidos a través de algún medio de comunicación (bien físico o de otro tipo)",
    options: [
      "Es aquel que mantiene a 1 o más ordenadores unidos a través de algún medio de comunicación (físico o no)",
      "Es aquel que mantiene a dos o más ordenadores unidos a través de algún medio de comunicación (bien físico o de otro tipo)",
      "Es aquel que mantiene a dos o más ordenadores unidos a través de algún medio de comunicación físico",
      "Es aquel que mantiene a 1 o más ordenadores unidos a través de algún medio de comunicación físico",
    ],
  },
  {
    numb: 10,
    question:
      "¿Qué mejora respecto a los S.O. monopuesto aporta la característica de Bloqueo de archivos o registro en los S.O. en red?",
    answer:
      "Que un mismo archivo o un registro de un archivo puede ser usado por más de un usuario",
    options: [
      "Que bloquea un archivo cuando lo abre un usuario, para que no pueda ser usado por otro usuario, evitando pérdida de información",
      "Que lleva un registro de los ficheros bloqueados por si hay algún problema de sobreescritura entre usuarios",
      "Que un mismo archivo o un registro de un archivo sólo puede ser usado por un usuario",
      "Que un mismo archivo o un registro de un archivo puede ser usado por más de un usuario",
    ],
  },
  {
    numb: 11,
    question: "¿Cuántos grupos o modelos de S.O. en Red existen?",
    answer: "Cliente/servidor y entre iguales",
    options: [
      "Cliente/servidor y entre iguales",
      "Servidor principal y clientes",
      "Todas las respuestas son correctas",
      "Windows Server y Linux Server",
    ],
  },
  {
    numb: 12,
    question:
      "¿Qué definición de Middleware en una arquitectura cliente/servidor es más exacta?",
    answer:
      "Es la parte que se encarga de la comunicación entre el cliente y el servidor",
    options: [
      "Es la parte que se encarga de la comunicación entre el cliente y el servidor",
      "Es el protocolo que se encarga de transmitir los mensajes de error del servidor al cliente",
      "Es el cable de red que une el servidor con el cliente",
      "Ninguna de las respuestas es correcta",
    ],
  },
  {
    numb: 13,
    question:
      "Siglas de la denominación de libre distribución de licencia Linux (escribirlo en MAYUSCULAS)",
    answer: "GPL",
    options: ["GPL", "GNU", "MIT", "BSD"],
  },
  {
    numb: 14,
    question: "¿En qué año se lanzó WS 2019?",
    answer: "2018",
    options: ["2018", "2020", "2021", "2019"],
  },
  {
    numb: 15,
    question:
      "¿Qué diferencias suelen haber entre las diferentes ediciones de cada versión de Windows Server?",
    answer: "Se empaquetan con diferentes herramientas y capacidades",
    options: [
      "Ninguna de las respuestas es correcta",
      "El tamaño de la BBDD de Active Directory",
      "Se empaquetan con diferentes herramientas y capacidades",
      "Únicamente el número de máquinas virtuales que puedes instalar",
    ],
  },
  {
    numb: 16,
    question:
      "¿Para qué sirve la opción de Cambiar horas activas de Windows Update?",
    answer:
      "Para que no aplique las actualizaciones y realice reinicios durante las horas de oficina",
    options: [
      "Para que no permita entrar al Administrador al servidor durante el horario de oficina",
      "Para que cuando nos vayamos a otro país, nos permita ver las horas de nuestro sitio de origen",
      "Para que solo realice descargas y actualizaciones durante ese periodo",
      "Para que no aplique las actualizaciones y realice reinicios durante las horas de oficina",
    ],
  },
  {
    numb: 17,
    question:
      "Escribe el número de TB máximos de memoria que permite la edición Datacenter de WS 2019",
    answer: "24",
    options: ["16", "24", "32", "48"],
  },
  {
    numb: 18,
    question:
      "¿Es posible pasar de una versión gráfica a una de texto en WS 2019?",
    answer: "No",
    options: [
      "No",
      "Sí, pero únicamente si subimos de una edición inferior a una superior",
      "Sí, pero únicamente en el caso de la edición Standard",
      "Sí, pero únicamente en el caso de la edición Datacenter",
    ],
  },
  {
    numb: 19,
    question:
      "¿Es posible pasar de una versión de evaluación a una edición oficial?",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 20,
    question: "¿Cuáles son las ediciones de WS 2019?",
    answer: "Essentials, Standard y Datacenter",
    options: [
      "Home y Profesional",
      "Essentials, Standard y Datacenter",
      "Standard y Active Directory",
      "Standard, Datacenter y Profesional",
    ],
  },
  {
    numb: 21,
    question: "¿Qué limitación tiene la edición Datacenter de WS 2019?",
    answer: "Necesita CAL y no tiene límite de máquinas virtuales (MV)",
    options: [
      "Máximo de 50 usuarios y 2 máquinas virtuales",
      "Necesita CAL y no tiene límite de máquinas virtuales (MV)",
      "La licencia se basa en núcleos de servidor, admite un máximo de 2 MV, y necesita CAL",
      "Máximo de 25 usuarios y/o 50 dispositivos, y 2 procesadores. No permite virtualización",
    ],
  },
  {
    numb: 22,
    question: "¿Qué tipos de instalación permite WS 2019?",
    answer: "CON interfaz gráfica, y SIN interfaz gráfica",
    options: [
      "Al tratarse de un servidor, únicamente la INTERFAZ NO GRÁFICA, para optimizar su rendimiento",
      "Únicamente INTERFAZ GRÁFICA",
      "CON interfaz gráfica, y SIN interfaz gráfica",
      "3 tipos: CON interfaz gráfica, SIN interfaz gráfica, y una opción especial de INTERFAZ DE SERVIDOR BÁSICA",
    ],
  },
  {
    numb: 23,
    question:
      "¿Cuál es la última versión de Windows Server que ha salido al mercado?",
    answer: "Windows Server 2022",
    options: [
      "Windows Server 2022",
      "Windows Server 2016",
      "Windows Server 2012",
      "Windows Server 2020",
    ],
  },
  {
    numb: 24,
    question: "¿Qué equivalencia de versión de escritorio tiene WS 2019?",
    answer: "Windows 10",
    options: ["Windows 8", "Windows 10", "Windows XP", "Windows 7"],
  },
  {
    numb: 25,
    question:
      "Siglas de la herramienta de manejo de agrupación consolas de Windows Server anterior a la versión Windows Administration Center (escribirlo en MAYUSCULAS)",
    answer: "MMC",
    options: ["WAC", "MMC", "CMA", "PMS"],
  },
  {
    numb: 26,
    question:
      "En una relación de confianza establecida entre 2 dominios, ¿cuál es el dominio de salida?",
    answer: "Es el dominio donde inicia sesión el usuario",
    options: [
      "Es el dominio que confía y permite pasar al usuario de otro dominio",
      "Es el dominio donde inicia sesión el usuario",
      "Es el dominio al que se quiere acceder en una relación de confianza unidireccional",
      "Es el dominio al que se quiere acceder en una relación de confianza transitiva",
    ],
  },
  {
    numb: 27,
    question: "Otra de las ventajas de Active Directory es",
    answer: "Todas las respuestas son válidas",
    options: [
      "Administrar políticas y aplicar actualizaciones en toda la organización",
      "Gestionar grupos a través de herramientas de administración",
      "Todas las respuestas son válidas",
      "Realizar operaciones de forma simultánea y centralizada",
    ],
  },
  {
    numb: 28,
    question:
      "¿Cuál de las siguientes ventajas corresponde a la Unidad Organizativa?",
    answer:
      "Permite establecer una estructura lógica de nuestra organización y así simplificar su administración",
    options: [
      "Permite varios controladores de dominio asociados",
      "Permite que coexistan varios dominios dentro de un bosque",
      "Permite características específicas según la clase a la que pertenezca cada objeto",
      "Permite establecer una estructura lógica de nuestra organización y así simplificar su administración",
    ],
  },
  {
    numb: 29,
    question:
      "¿Cuál de las siguientes ventajas corresponde a la Unidad Organizativa?",
    answer:
      "Simplifica la delegación de autoridad (completa o parcialmente) a otros usuarios o grupos",
    options: [
      "Simplifica la delegación de autoridad (completa o parcialmente) a otros usuarios o grupos",
      "Permite varios controladores de dominio asociados",
      "Permite características específicas según la clase a la que pertenezca cada objeto",
      "Permite que coexistan varios dominios dentro de un bosque",
    ],
  },
  {
    numb: 30,
    question: "El objetivo de un árbol en Active Directory (AD) es…",
    answer:
      "Fragmentar los datos del AD parar replicar solo las partes comunes y así ahorrar ancho de banda en la red",
    options: [
      "Fragmentar los datos del AD parar delimitar las políticas de seguridad y evitar problemas de acceso",
      "Fragmentar los datos del AD parar replicar solo las partes comunes y así ahorrar ancho de banda en la red",
      "Ninguna respuesta es correcta",
      "Jerarquizar los dominios para restringir los accesos de usuarios de niveles más bajos",
    ],
  },
  {
    numb: 31,
    question:
      "¿Sobre qué puede almacenar información Active Directory? Elige la respuesta más completa",
    answer: "Sobre cualquier cosa u objeto que forme parte de la red",
    options: [
      "Sobre cualquier cosa u objeto que forme parte de la red",
      "Principalmente sobre usuarios, grupos y equipos",
      "Sobre carpetas compartidas y lugares de almacenamiento",
      "Sobre usuarios, sitios y ordenadores",
    ],
  },
  {
    numb: 32,
    question:
      "¿Cuál de los siguientes roles del Maestro de Operaciones NO existe?",
    answer: "Domain Confidence Master",
    options: [
      "RID Master",
      "Domain Name Master",
      "Schema Master",
      "Domain Confidence Master",
    ],
  },
  {
    numb: 33,
    question: "¿Pueden existir diferentes dominios dentro de un bosque?",
    answer:
      "Si, y además cada uno de ellos con su propia colección de objetos y unidades organizativas",
    options: [
      "No, solo llega al nivel de árbol y con la condición de que tengan la misma colección de objetos y unidades organizativas",
      "Si, y además cada uno de ellos con su propia colección de objetos y unidades organizativas",
      "No, no es posible de ninguna de las maneras",
      "Si, pero con la condición de que tengan la misma colección de objetos y unidades organizativas",
    ],
  },
  {
    numb: 34,
    question: "¿Qué peculiaridad tiene un Directorio Activo?",
    answer:
      "Los elementos almacenados en él pueden ser diferentes unos de otros",
    options: [
      "Los elementos almacenados en él pueden ser diferentes unos de otros",
      "Se basa en el concepto de Dominio que introdujo WS 2008",
      "Guarda información sobre personas, empresas y entidades",
      "Se guarda la información en una BBDD no jerárquica",
    ],
  },
  {
    numb: 35,
    question:
      "¿Qué tipo de relación de confianza es cuando los usuarios del dominio A puede acceder a los recursos del dominio B, pero los usuarios del dominio B no pueden acceder a los recursos del dominio A? (en MAYÚSCULAS)",
    answer: "UNIDIRECCIONAL",
    options: ["UNIDIRECCIONAL", "BIDIRECCIONAL", "TRANSITIVA", "DIRECTA"],
  },
  {
    numb: 36,
    question:
      "Siglas del conjunto de herramientas propio de Microsoft que permite el acceso a características de AD con una interfaz orientada a objetos (en MAYÚSCULAS)",
    answer: "ADSI",
    options: ["ADSI", "WAC", "LDAP", "GPO"],
  },
  {
    numb: 37,
    question:
      "¿Qué 2 pasos hay que realizar para degradar un controlador dominio de Active Directory (AD) desde la interfaz gráfica de WS 2019?",
    answer:
      "Primero degradar el controlador de dominio, y después desinstalar los roles implicados",
    options: [
      "Primero desinstalar el rol de Servicios de dominio de AD y luego desinstalar el servidor DNS",
      "Desinstalar el servidor de DNS y luego degradar el controlador de dominio",
      "Primero degradar el controlador de dominio, y después desinstalar los roles implicados",
      "Primero desinstalar los roles implicados y luego degradar el controlador de dominio",
    ],
  },
  {
    numb: 38,
    question:
      "¿Cómo se denomina cada uno de los tipos de información almacenada en un ESQUEMA? (en MAYÚSCULAS)",
    answer: "ATRIBUTO",
    options: ["ATRIBUTO", "ELEMENTO", "OBJETO", "CARACTERÍSTICA"],
  },
];
