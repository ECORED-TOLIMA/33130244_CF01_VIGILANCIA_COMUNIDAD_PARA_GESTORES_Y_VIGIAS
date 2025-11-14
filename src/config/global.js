export default {
  global: {
    componenteFormativo: 'Fundamentos de la Vigilancia Basada en Comunidad',
    descripcionCurso:
      'Este componente formativo aborda la Vigilancia Basada en Comunidad, enfocándose en el análisis participativo y el diagnóstico comunitario; integrando factores sociodemográficos, socioambientales, cosmogonía, liderazgo y habilidades blandas. Se da importancia a la vigilancia en salud pública, la autogestión, los sistemas de alerta temprana, el papel de redes y agentes comunitarios en la detección, respuesta local y fortalecimiento del tejido social.',
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
        titulo: 'Análisis participativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Condiciones sociodemográficas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Condiciones socioambientales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aspectos culturales y cosmogonía',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Identificación de líderes en la comunidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Soluciones a los problemas en salud',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Diagnóstico participativo',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Herramientas de diagnóstico participativo',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Análisis participativo comunitario',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Habilidades blandas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Empoderamiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Liderazgo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Comunicación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Fomentar la cohesión social y la cooperación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Fomento del cambio social',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Resolución de conflictos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Construcción de tejido social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Estrategias para fortalecer la construcción del tejido social',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Vigilancia en salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Sistema de Alerta Temprana (SAT)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de vigilancia en salud pública',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modalidades de la vigilancia en salud pública',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Agentes para la vigilancia basada en comunidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Red de Vigilancia Epidemiológica Basada en Comunidad (REVCOM)',
        desarrolloContenidos: true,
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
      tema: '1.7.	Herramientas de diagnóstico participativo',
      referencia:
        'Consorcio Coopi-Care (2015). Mapeo Participativo Comunitario -MPC-. Una experiencia aplicada en el noveno plan de acción 2014-2015. https://dipecholac.net/docs/files/1037-mpc-dipecho-2014-2015.pdf',
      tipo: 'Documento',
      link: 'https://dipecholac.net/docs/files/1037-mpc-dipecho-2014-2015.pdf',
    },
    {
      tema: '3. Construcción de tejido social',
      referencia:
        'Instituto Nacional de Salud. (2025). ReVcom. https://www.ins.gov.co/Noticias/Paginas/ReVCom.aspx',
      tipo: 'Manual',
      link: 'https://www.ins.gov.co/Noticias/Paginas/ReVCom.aspx',
    },
    {
      tema: '4. Vigilancia en salud pública',
      referencia:
        'Instituto Nacional de Salud. (2025). Lineamientos para la Vigilancia Basada en la Comunidad.',
      tipo: 'Documento',
      link:
        'https://www.ins.gov.co/Noticias/ReVCom/Lineamientos%20para%20la%20Vigilancia%20Basada%20en%20Comunidad%202025.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agentes comunitarios',
      significado:
        'líderes o personas designadas por la comunidad que, voluntariamente y de acuerdo con su experiencia en trabajo comunitario, participan como vigías y gestores en la REVCOM.',
    },
    {
      termino: 'Alerta',
      significado:
        'manifestación de un evento peligroso para la salud, a partir del monitoreo del comportamiento de este, para que se establezcan las acciones recomendadas de control.',
    },
    {
      termino: 'Comité de Vigilancia Epidemiológica Comunitario (COVECOM)',
      significado:
        'espacios de encuentro y participación entre integrantes de la Red de Vigilancia Epidemiológica basada en Comunidad (REVCOM) y el conjunto de personas que representan las instituciones que participan en la vigilancia basada en comunidad. Su objetivo es generar escenarios de análisis participativo comunitario en los cuales se permita a los asistentes apropiar conocimientos del comportamiento epidemiológico de eventos de interés en salud pública, acciones de promoción de la salud y prevención de la enfermedad, como también de movilización social entorno a las necesidades de las comunidades.',
    },
    {
      termino: 'EAPB',
      significado:
        'la empresa administradora de planes de beneficios es la entidad encargada de administrar los planes de salud que incluye las entidades promotoras de salud, subsidiado, empresas solidarias de salud y asociaciones mutuales. Estas entidades son las encargadas de gestionar recursos para la sostenibilidad del sistema en el que se asegure el acceso a los servicios y la calidad de estos.',
    },
    {
      termino: 'Eventos de interés en salud pública',
      significado:
        'son aquellas enfermedades y afecciones de la salud que se presentan en la población humana.',
    },
    {
      termino: 'Gestor comunitario',
      significado:
        'persona que en la comunidad tiene o desarrolla trabajo comunitario en su territorio y que como actividad complementaria o central desarrollan o podrían realizar la vigilancia basada en comunidad.',
    },
    {
      termino: 'Institución Prestadora de Salud',
      significado:
        'entidad pública o privada, legalmente constituida y habilitada por la autoridad sanitaria competente en Colombia, cuya finalidad es ofrecer, de manera directa o a través de terceros, servicios de salud a las personas. Estas instituciones pueden incluir hospitales, clínicas y otros establecimientos de salud, que son fundamentales para garantizar el acceso a la atención médica de calidad en el sistema de salud en el país.',
    },
    {
      termino: 'Instituto Nacional de Salud',
      significado:
        'entidad pública perteneciente al sistema de ciencia, tecnología e innovación y al sistema general de seguridad social en salud, encargada de desarrollar y gestionar, con enfoque de territorio, el conocimiento científico en salud, la vigilancia y seguridad sanitaria, actuar como laboratorio nacional de referencia, coordinar las redes especiales, producir insumos, medicamentos y tecnologías de interés especial para la salud pública y formar personal sanitario generando evidencia para apoyar la toma de decisiones en la formulación y evaluación de política, con el fin de contribuir a mejorar la calidad de vida, la salud de la población y la soberanía sanitaria.',
    },
    {
      termino: 'Movilización social',
      significado:
        'capacidad de la comunidad de expresar necesidades, participar de decisiones y tomar acciones a favor de la salud.',
    },
    {
      termino: 'Red de Vigilancia Basada en Comunidad',
      significado:
        'refiere a los nodos conformados por los actores pertenecientes a la comunidad (vigías y gestores), los cuales realizan el reporte de las señales de las situaciones de interés en salud pública identificadas.',
    },
    {
      termino: 'Señal',
      significado:
        'situación que puede indicar o predecir una alerta en salud pública.',
    },
    {
      termino: 'Sistema de Alerta Temprana',
      significado:
        'componente de la gestión del riesgo que busca detectar oportunamente cualquier situación anormal, emergente o reemergente, incluyendo la alteración de la frecuencia de un evento de interés en salud pública, para generar su análisis inmediato, la valoración del riesgo y la determinación de la acción a realizar.',
    },
    {
      termino: 'Situación de interés en salud pública',
      significado:
        'conjunto de potenciales eventos o factores relacionados con estos hechos. La vigilancia basada en comunidad puede detectar señales de diferentes situaciones de interés en salud pública.',
    },
    {
      termino: 'Vigías comunitarios',
      significado:
        'miembros de la comunidad que no tienen un antecedente reconocido de trabajo comunitario, y que son designados por la comunidad para representarlos en la estrategia de vigilancia basada en comunidad.',
    },
    {
      termino: 'Vigilancia Basada en Comunidad',
      significado:
        'es la sistemática y el reporte de eventos (situaciones) de interés en salud pública en la comunidad, por miembros (agentes) de esta misma.',
    },
  ],
  referencias: [
    {
      referencia:
        'ACNUR. (2024). <em>Herramienta de ACNUR para el diagnóstico participativo agosto 2024-publicación provisoria.</em>  Cedeño Velásquez, N. V., Loor Lino, L, E. & Romero Chávez, S. A. (2019). Contexto sociodemográfico y situación organizacional de la población Maconta. Revista: Caribeña de Ciencias Sociales.',
      link:
        'https://www.eumed.net/rev/caribe/2019/09/situacion-organizacional-maconta.html',
    },
    {
      referencia:
        'Consorcio Coopi-Care (2015). <em>Mapeo Participativo Comunitario -MPC-. Una experiencia aplicada en el noveno plan de acción 2014-2015.</em>',
      link: 'https://dipecholac.net/docs/files/1037-mpc-dipecho-2014-2015.pdf',
    },
    {
      referencia:
        'De La Ossa V, J. (2022). Habilidades blandas y ciencia. <em>Revista Colombiana de Ciencia Animal Recia, 14</em>(1), e945.',
      link: 'https://doi.org/10.24188/RECIA.V14.N1.2022.945',
    },
    {
      referencia:
        'Garcés Unamuno, D. C. (2023). <em>Análisis de la construcción del tejido social en comunidades aledañas al relleno sanitario. Caso de las comunidades de El Belén e Itulcachi, y el relleno sanitario de El Inga.</em> Pontificia Universidad Católica del Ecuador.',
      link:
        'https://repositorio.puce.edu.ec/server/api/core/bitstreams/7dafd649-e57f-47ee-902e-60810e187d9f/content',
    },
    {
      referencia:
        'Geilfus, F. (2002). <em>80 herramientas para el desarrollo participativo Diagnóstico, Planificación Monitoreo y Evaluación.</em>',
    },
    {
      referencia:
        'Gobierno Federal - Semrnat. (s.f.). <em>Diagnóstico participativo - Métodos e instrumentos para realizar el diagnóstico participativo comunitario.</em>',
      link:
        'http://www.conafor.gob.mx:8080/documentos/docs/37/4017Diagnóstico%20participativo.pdf',
    },
    {
      referencia:
        'Gomà, R. (2007). La acción comunitaria: transformación social y construcción de ciudadanía. <em>Revista de educación social, (7).</em>',
      link:
        'https://eduso.net/res/revista/7/marco-teorico/la-accion-comunitaria-transformacion-social-y-construccion-de-ciudadania',
    },
    {
      referencia:
        'Gumucio Dragon, A. (2011). Comunicación para el cambio social: clave del desarrollo participativo. <em>Signo y Pensamiento, 30</em>(58), 26-39.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-48232011000100002&lng=en&nrm=iso&tlng=es',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2023). <em>Caja de herramientas para la gestión del riesgo colectivo en brotes, epidemias y eventos de interés en salud pública. Etapa 1. Sistema de alerta temprana: identificación del riesgo en salud pública.</em>',
    },
    {
      referencia:
        'Instituto Nacional de Salud (2023). <em>Etapa 1.2. Sistema de alerta temprana: vigilancia basada en comunidad-fases de implementación.</em>',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2025). <em>Red de Vigilancia Epidemiológica Basada en Comunidad.</em>',
    },
    {
      referencia:
        'López Sánchez, M. P., Alberich, T., Aviñó, D., Francés García, F., Ruiz-Azarola, A. & Villasante, T. (2018). Participatory tools and methods for community action. SESPAS Report 2018. In <em>Gaceta Sanitaria</em> (Vol. 32, pp. 32–40). Ediciones Doyma, S.L.',
      link: 'https://doi.org/10.1016/j.gaceta.2018.06.008',
    },
    {
      referencia:
        'Presidencia de la República. (2016). Resolución 3202 de 2016. Por la cual se adopta el Manual Metodológico para la elaboración e implementación de las Rutas Integrales de Atención en Salud — RIAS, se adopta un grupo de Rutas Integrales de Atención en Salud desarrolladas por el Ministerio de Salud y Protección Social dentro de la Política de Atención Integral en Salud —PAIS y se dictan otras disposiciones.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3202-de-2016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2006). Decreto 3518 de 2066. por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=21859',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social - OPS. (2008). <em>Referentes conceptuales y abordajes sobre Determinantes Ambientales.</em>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/Referentes_Conceptuales_y_Abordajes_sobre_Determinantes_Ambientales.pdf',
    },
    {
      referencia:
        'Ministerio del Interior, Ecuador. (s.f.). Modelo diagnóstico participativo.',
    },
    {
      referencia:
        'Morozova, M., Fasolko, T., Poliuha, V., Veselska, L. & Prinsess Bagration, K. (2022). Formación de habilidades blandas en comunicación y resolución de conflictos en estudiantes. <em>Revista de Investigación Apuntes Universitarios, 12</em>(3).',
      link: 'https://doi.org/10.17162/au.v12i3.1113 ',
    },
    {
      referencia:
        'OPS/OMS. (2025). <em>Comunicación de riesgos y participación de la comunidad, y comunicación social.</em>',
      link:
        'https://www.paho.org/es/temas/inmunizacion/caja-herramientas-inmunizacion/comunicacion-riesgos-participacion-comunidad',
    },
    {
      referencia:
        'Peñuela Rodríguez, F. E. & Córdoba Torres, D. F. (2020). Factores sociodemográficos de familias en el barrio Patriotas de Tunja. <em>Dialnet, 5</em>, 56–67.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=10153174',
    },
    {
      referencia:
        'Secretaría de Integración Social. (2023). <em>Centros de desarrollo comunitario Documento metodológico.</em>',
    },
    {
      referencia:
        'Shannon, C. E. & Weaver, W. (1949). <em>The mathematical theory of communication.</em> University of Illinois Press.',
    },
    {
      referencia:
        'Subsecretaría de Prevención y Participación Ciudadana Dirección General de Prevención del Delito y Participación Ciudadana. (2011). <em>El Tejido Social y su Fortalecimiento.</em>',
      link:
        'http://ssp.gob.mx/portalWebApp/ShowBinary?nodeId=%2FBEA+Repository%2F1214181%2F%2Farchivo',
    },
    {
      referencia:
        'Vargas, R & Zaldivar Acosta, M. (2023). Habilidades Blandas: una respuesta para la mejora de la atención de profesionales de la salud. <em>Revista Española de Educación Médica, 3,</em> 62–68.',
    },
    {
      referencia:
        'Watson Lewis, G. E., Gaviria Uribe, A., Ruiz Gómez, F., De Jesús Osorio, E., Fernando Correa, L., Estrada, A., Correa, L. F., Quan, D. A., Santander, A., Valderrama, M. J. & Guemes, G. B. (s.f.). <em>Directivos Delegados Comité Técnico del Convenio Por el Ministerio de Salud Por la OPS/OMS y Protección Social.</em>',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
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
          nombre: 'Sandra Paola Cataño Mora',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Luz Dary Quintero Torres',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Gina M. Morales S',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Fabian Nicolas Moreno Anzola',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Diego Felipe López Ávila',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'Diana Alexandra Moreno Santamaria',
          cargo: 'Contratista',
          centro: 'Instituto Nacional de Salud',
        },
        {
          nombre: 'María Elena Tamayo Bustamante',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
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
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
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
