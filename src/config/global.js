export default {
  global: {
    componenteFormativo: 'Lineamientos y protocolo de la valoración de apoyos',
    descripcionCurso:
      'En este componente formativo se orienta hacia el desarrollo de la valoración de apoyos, aplicando el lineamiento de lenguaje para referirse a las personas con discapacidad. También incluye el lineamiento de accesibilidad, que permite identificar barreras y aplicar ajustes razonables. Todo ello encaminado a la autonomía y el ejercicio pleno de derechos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Planeación y aspectos para tener en cuenta en el informe de la valoración de apoyos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Desarrollo de la valoración: lineamientos y protocolo nacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lineamiento del lenguaje',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Lineamiento de accesibilidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Aspectos de enfoque y reflexión del capacitismo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Finalización y retroalimentación del informe',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Aspectos para tener en cuenta en la finalización del informe',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Retroalimentación del informe',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.1. Lineamiento del lenguaje',
      referencia:
        'Montenegro, Guevara, E. (2016). El uso del lenguaje más allá de las normas. <em>Sophia: Colección de Filosofía de la Educación,</em> (20), 247–266.',
      tipo: 'Artículo de Revista',
      link: 'https://www.redalyc.org/pdf/4418/441846839011.pdf ',
    },
    {
      tema: '2.1. Lineamiento del lenguaje',
      referencia:
        'UNICEF. (2021). <em>Directrices para un lenguaje inclusivo en el ámbito de la discapacidad.</em>',
      tipo: 'Documento',
      link:
        'https://www.unicef.org/peru/sites/unicef.org.peru/files/2021-10/DIRECTRICES%20PARA%20UN%20LENGUAJE%20INCLUSIVO%20EN%20EL%20%C3%81MBITO%20DE%20LA%20DISCAPACIDAD.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'medidas pertinentes para asegurar el acceso de las personas con discapacidad, en igualdad de condiciones con las demás, al entorno físico, el trans¬porte, la información y las comunicaciones, incluidos los sistemas y las tecnolo¬gías de la información y las comunicaciones, y a otros servicios e instalaciones. Decreto 1421 de 2017.',
    },
    {
      termino: 'Acciones afirmativas',
      significado:
        'medidas pertinentes para asegurar el acceso de las personas con discapacidad, en igualdad de condiciones con las demás, al entorno físico, el trans¬porte, la información y las comunicaciones, incluidos los sistemas y las tecnolo¬gías de la información y las comunicaciones, y a otros servicios e instalaciones. Decreto 1421 de 2017.',
    },
    {
      termino: 'Ajustes razonables',
      significado:
        'se entenderán las modificaciones y adaptaciones necesarias y adecuadas que no impongan una carga desproporcionada o indebida, cuando se requieran en un caso particular, para garantizar a las personas con discapacidad el goce o ejercicio, en igualdad de condiciones con las demás, de todos los derechos humanos y libertades fundamentales. (Convención sobre los Derechos de las Personas con Discapacidad, 2006, Art. 2).',
    },
    {
      termino: 'Apoyos',
      significado:
        'los apoyos de los que trata la presente ley son tipos de asistencia que se prestan a la persona con discapacidad para facilitar el ejercicio de su capacidad legal. Esto puede incluir la asistencia en la comunicación, la asistencia para la comprensión de actos jurídicos y sus consecuencias, así como la asistencia en la manifestación de la voluntad y preferencias personales. (Ley 1996, 2019, Colombia, Art. 3).',
    },
    {
      termino: 'Autonomía',
      significado:
        'en todas las actuaciones se respetará el derecho de las personas a autodeterminarse, a tomar sus propias decisiones, a equivocarse, a su independencia y al libre desarrollo de la personalidad conforme a la voluntad, deseos y preferencias propias, siempre y cuando estos, no sean contrarios a la Constitución, a la ley, y a los reglamentos internos que rigen las entidades públicas y privadas. (Ley 1996, 2019, Colombia, Art. 4).',
    },
    {
      termino: 'Barreras',
      significado:
        'cualquier tipo de obstáculo que impida el ejercicio efectivo de los derechos de las personas con algún tipo de discapacidad. Estas pueden ser: a) Actitudinales: aquellas conductas, palabras, frases, sentimientos, preconcepciones, estigmas, que impiden u obstaculizan el acceso. b) Condiciones de igualdad de las personas con y/o en situación de discapacidad a los espacios, objetos, servicios y en general a las posibilidades que ofrece la sociedad. c) Comunicativas: aquellos obstáculos que impiden o dificultan el acceso a la información, a la consulta, al conocimiento y en general, el desarrollo en condiciones de igualdad del proceso comunicativo de las personas con discapacidad a través de cualquier medio o modo de comunicación, incluidas las dificultades en la interacción comunicativa de las personas. d) Físicas: Aquellos obstáculos materiales, tangibles o construidos que impiden o dificultan el acceso y el uso de espacios, objetos y servicios de carácter público y privado, en condiciones de igualdad por parte de las personas con discapacidad. (Ley 1618, 2013, Colombia, Art.2)',
    },
    {
      termino: 'Capacidad jurídica',
      significado:
        'según la Corte Constitucional colombiana es la capacidad de goce y capacidad de ejercicio: a) Capacidad de goce: aptitud general que tiene toda persona natural o jurídica para ser sujeto de derechos y obligaciones, y es, sin duda alguna, el atributo esencial de la personalidad jurídica. (Corte Constitucional, Sentencia C-983 de 2002, M.P. Dr. Jaime Córdoba Triviño). b) Capacidad de ejercicio: consiste en la habilidad que la ley le reconoce a una persona para poderse obligar por sí misma, sin la intervención o autorización de otra. Implica, entonces, el poder realizar negocios jurídicos e intervenir en el comercio jurídico, sin que para ello requiera acudir a otro. (Corte Constitucional, Sentencia C-983 de 2002, M.P. Dr. Jaime Córdoba Triviño.) ',
    },
    {
      termino: 'Derechos humanos',
      significado:
        'los derechos humanos son derechos inherentes a todos los seres humanos, sin distinción alguna de raza, sexo, nacionalidad, origen étnico, lengua, religión o cualquier otra condición. Entre los derechos humanos se incluyen el derecho a la vida y a la libertad; a no estar sometido ni a esclavitud ni a torturas; a la libertad de opinión y de expresión; a la educación y al trabajo, entre otros muchos. Estos derechos corresponden a todas las personas, sin discriminación alguna. (Naciones Unidas, s.f.).',
    },
    {
      termino: 'Discapacidad',
      significado:
        'es un concepto que evoluciona y que resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás. (Convención sobre los Derechos de las Personas con Discapacidad, 2006, Preámbulo).',
    },
    {
      termino: 'Lenguaje inclusivo',
      significado:
        'desde la Convención Internacional por los Derechos de las Personas con Discapacidad de Naciones Unidas (ONU) se dispuso que el término adecuado para referirse a este grupo de la población sea Personas con Discapacidad o Personas en Situación de Discapacidad. (Ministerio de Salud y Protección Social, 2020).',
    },
    {
      termino: 'Persona facilitadora de la valoración de apoyos',
      significado:
        'es la persona natural, designada por la entidad pública o privada, para coordinar y llevar a cabo el proceso de valoración de apoyos de acuerdo con los lineamientos y el protocolo nacional para la realización de la valoración de apoyos expedidos por el ente rector del Sistema Nacional de Discapacidad. (Decreto 487, 2022, Colombia, Art. 2.8.2.5.1.).',
    },
    {
      termino: 'Valoración de apoyos',
      significado:
        'es el proceso que se realiza, con base en estándares técnicos, que tiene como finalidad determinar cuáles son los apoyos formales que requiere una persona para tomar decisiones relacionadas con el ejercicio de su capacidad legal. (Ley 1996, 2019, Colombia, Art. 3).',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, G. (2023). <em>El capacitismo, estructura mental de exclusión de las personas con discapacidad.</em>',
      link:
        'http://www.convenciondiscapacidad.es/wp-content/uploads/2023/02/el-capacitismo.pdf',
    },
    {
      referencia:
        'Asamblea General de las Naciones Unidas. (2006). <em>Convención sobre los Derechos de las Personas con Discapacidad y Protocolo Facultativo.</em>',
      link:
        'https://www.un.org/disabilities/documents/convention/convoptprot-s.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (1997, febrero 7). Ley 361 de 1997. Por la cual se establecen mecanismos de integración social de las personas con limitación y se dictan otras disposiciones. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=343  ',
    },
    {
      referencia:
        'Congreso de Colombia. (2009, julio 31). Ley 1346 de 2009. Por medio de la cual se aprueba la “Convención sobre los Derechos de las Personas con Discapacidad”, adoptada por la Asamblea General de las Naciones Unidas el 13 de diciembre de 2006.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=37150',
    },
    {
      referencia:
        'Congreso de Colombia. (2019, agosto 26). Ley 1996 de 2019. Por medio de la cual se establece el régimen para el ejercicio de la capacidad legal de las personas con discapacidad mayores de edad.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=99712',
    },
    {
      referencia:
        'Díaz, S., Fernández, I., Gómez, A. & Míguez, M. (2019). Deconstrucción del sujeto de la discapacidad desde la perspectiva decolonial. En <em>¿Quién es el sujeto de la discapacidad? Exploraciones, configuraciones y potencialidades</em> (pp. 23–46). CLACSO, GT Estudios Críticos en Discapacidad.',
    },
    {
      referencia:
        'Díaz, S., Gómez, A. P. & Míguez, M. N. (Coords.). (2023). <em>Decolonialidad y “discapacidad”: Nuevos horizontes de sentido.</em> CLACSO.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Ley 1618 de 2013. Por medio de la cual se establecen las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PS/documento-balance-1618-2013-240517.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020, enero 31). <em>Resolución 113 de 2020.</em> Por la cual se dictan disposiciones en relación con la certificación de discapacidad y el Registro de Localización y Caracterización de Personas con Discapacidad.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20113%20de%202020.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2024, julio 5). <em>Resolución 1197 de 2024.</em> Por la cual se dictan disposiciones en relación con el procedimiento de certificación de discapacidad y el Registro de Localización y Caracterización de Personas con Discapacidad y se deroga la Resolución 1239 de 2022.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No%201197%20de%202024.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (s.f.). <em>Derechos humanos.</em>',
      link: 'https://www.un.org/es/global-issues/human-right',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2001). <em>Clasificación Internacional del Funcionamiento, de la Discapacidad y de la Salud (CIF).</em>',
      link:
        'https://aspace.org/assets/uploads/publicaciones/e74e4-cif_2001.pdf',
    },
    {
      referencia:
        'Palacios, A. & Romañach, J. (2007). <em>El modelo de la diversidad: La bioética y los derechos humanos como herramienta para alcanzar la plena dignidad en la diversidad funcional.</em> Diversitas.',
    },
    {
      referencia:
        'Presidencia de la República. (2017, agosto 29). Decreto 1421 de 2017. Por el cual se reglamenta en el marco de la educación inclusiva la atención educativa a la población con discapacidad.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87040',
    },
    {
      referencia:
        'Presidencia de la República. (2022, abril 1). Decreto 487 de 2022. Por el cual se adiciona la Parte 8 en el Libro 2 del Decreto 1081 de 2015, en el sentido de reglamentar la prestación del servicio de valoración de apoyos que realicen las entidades públicas y privadas en los términos de la Ley 1996 de 2019.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=185226',
    },
    {
      referencia:
        'Red por los Derechos de las Personas con Discapacidad (REDI). (2023). <em>Sistemas de apoyo, ajustes razonables y ajustes de procedimientos.</em>',
      link:
        'https://argentina.unfpa.org/sites/default/files/pub-pdf/sistemas-de-apoyo-ajustes-razonables.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy Castillo Pérez',
          cargo: 'Experto temática',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'Johan Andrey Rodríguez Rodríguez ',
          cargo: 'Experto temático',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'Mary Blanca Ángel Franco ',
          cargo: 'Experto temática',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'Martha Cecilia Builes Alzate ',
          cargo: 'Experto temática',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'María Patricia Sarmiento ',
          cargo: 'Directora',
          centro:
            'Dirección para la Garantía de los Derechos de las Personas con Discapacidad',
        },
        {
          nombre: 'Jenny Elizabeth Tibocha Julio',
          cargo: 'Profesional especializada',
          centro:
            'Dirección para la Garantía de los Derechos de las Personas con Discapacidad',
        },
        {
          nombre: 'Angie Vanessa Soto Arango ',
          cargo: 'Profesional especializada',
          centro:
            'Dirección para la Garantía de los Derechos de las Personas con Discapacidad',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica ',
          centro:
            'Centro de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
