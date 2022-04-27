export default {
  global: {
    componenteFormativo: 'Protocolo de bioseguridad',
    descripcionCurso:
      'En el presente componente se exponen todos los elementos relacionados con el correcto manejo de los procesos de bioseguridad indispensables para la correcta ejecución de las actividades asistenciales en el marco de cuidar de la salud de los trabajadores y usuarios. Pensando en el proceso de aprendizaje se ha dispuesto aspectos relacionados con las precauciones universales, elementos de protección personal y manejo adecuado de residuos. Bienvenido.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal2.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pilares de la bioseguridad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Protocolo de protección personal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas asépticas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manejo de residuos hospitalarios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      texto:
        'Álvarez Heredia, F; Faizal, E; & Valderrama, F.  (2010). Riesgos biológicos y bioseguridad (2a. ed.). ECOE Ediciones.https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69149?page=97',
      tipo: 'Libro.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/171334',
    },
    {
      texto:
        'Resolución 2827 de 2006 [Ministro de la Protección Social]. Por la cual se adopta el Manual de bioseguridad para establecimientos que desarrollen actividades cosméticas o con fines de embellecimiento facial, capilar, corporal y ornamental.',
      tipo: 'Otro.',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_2827_de_2006.pdf',
    },
    {
      texto:
        'Moscoso Gama, J. M. (2020). Manual de Bioseguridad. El Cid Editor.',
      tipo: 'Libro.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/69149',
    },
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). Guía de limpieza y desinfección.',
      tipo: 'Otro.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/11/GUIA_DE_LIMPIEZA_Y_DESINFECCION.pdf',
    },
    {
      texto:
        'Decreto 351 del 2014. [Ministerio de Salud y Protección Social]. Por el cual se reglamenta la gestión integral de los residuos generados en la atención en salud y otras actividades. Febrero 19 de 2014. Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). Guía de limpieza y desinfección.',
      tipo: 'Otro.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56755',
    },
    {
      texto:
        'Decreto 4741 de 2005 [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Diciembre 30 de 2005.',
      tipo: 'Otro.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=18718',
    },
    {
      texto:
        'Mora Valencia, C; Berbeo Rodríguez, M.  (2010). Manual de procedimientos para la gestión integral de los residuos hospitalarios en Colombia.',
      tipo: 'Otro.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/IA/INS/manual-gestion-integral-residuos.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social, Ministerio de Ambiente y Desarrollo Sostenible y Ministerio de Transporte. (2015). Proyecto de manual para la gestión integral de residuos generados en la atención de salud y otras actividades.',
      tipo: 'Otro.',
      link:
        'http://www.saludcapital.gov.co/CTDLab/Publicaciones/2015/Proyecto%20de%20Manual%20para%20la%20Gesti%C3%B3n%20Integral%20de%20Residuos-2015.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agente biológico',
      significado:
        'Son todos los organismos vivos y aquellas sustancias que provienen de los mismos, los cuales se encuentran en el lugar de trabajo y pueden producir efectos negativos en el estado de salud de los trabajadores. Estos efectos negativos pueden ser infecciosos, tóxicos o alérgicos.',
    },
    {
      termino: 'Limpieza',
      significado:
        'Se refiere a la remoción de la materia orgánica e inorgánica visible y es realizada generalmente con agua y detergente',
    },
    {
      termino: 'Prestadores del servicio público especial de aseo',
      significado:
        'Son las empresas que realizan las actividades de recolección, transporte, aprovechamiento, tratamiento y disposición final de los mismos, con el uso de tecnología apropiada y siguiendo los lineamientos establecidos por los Ministerios del Medio Ambiente y de salud, impactando positivamente en la utilización social y económica de los recursos administrativos, técnicos y financieros.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Es la unión de técnicas basadas en normas, y medidas de tipo preventivo, que logran conformar un estándar el cual permite examinar los procesos, compararlos con los modelos deseables y necesarios dentro de la ejecución de las actividades con el fin de lograr una correcta organización y desarrollo de un procedimiento, ocupación u oficio determinado. ',
    },
    {
      termino: 'Residuos hospitalarios y similares',
      significado:
        'Se refiere a las sustancias, los materiales o subproductos de tipo sólidos, líquido o gaseoso que son generados por actividad productiva.',
    },
    {
      termino: 'Residuos infecciosos o de riesgo biológico',
      significado:
        'Son los que contienen microorganismos patógenos con el suficiente grado de virulencia y concentración que puede llegar a producir una enfermedad infecciosa en aquellos huéspedes susceptibles.',
    },
    {
      termino: 'Sanitización',
      significado:
        'Es el método utilizado para reducir la presencia microbiana que contiene un objeto o sustancia, logrando niveles seguros para la población.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Heredia, F; Faizal, E; & Valderrama, F.  (2010). Riesgos biológicos y bioseguridad (2a. ed.). ECOE Ediciones.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69149?page=97',
    },
    {
      referencia:
        'Decreto 351 del 2014. [Ministerio de Salud y Protección Social]. Por el cual se reglamenta la gestión integral de los residuos generados en la atención en salud y otras actividades. Febrero 19 de 2014.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56755 ',
    },
    {
      referencia:
        'Decreto 4741 de 2005 [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Diciembre 30 de 2005.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=18718',
    },
    {
      referencia:
        'Decreto 2676 [Presidencia de la República de Colombia]. Por el cual se reglamenta la gestión integral de los residuos hospitalarios y Similares. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-2676-de-2000.pdf',
    },
    {
      referencia:
        'Moscoso Gama, J. M. (2020). Manual de Bioseguridad. El Cid Editor.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/171334',
    },
    {
      referencia:
        'Mora Valencia, C; Berbeo Rodríguez, M.  (2010). Manual de procedimientos para la gestión integral de los residuos hospitalarios en Colombia.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/IA/INS/manual-gestion-integral-residuos.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, Ministerio de Ambiente y Desarrollo Sostenible y Ministerio de Transporte. (2015). Proyecto de manual para la gestión integral de residuos generados en la atención de salud y otras actividades.',
      link:
        'http://www.saludcapital.gov.co/CTDLab/Publicaciones/2015/Proyecto%20de%20Manual%20para%20la%20Gesti%C3%B3n%20Integral%20de%20Residuos-2015.pdf',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente y Ministerio de Salud. (2002). Gestión integral de residuos hospitalarios y similares en Colombia. Manual de procedimiento.',
      link:
        'https://www.slideshare.net/viluvedu/manual-residuos-hospitalarios-1',
    },
    {
      referencia:
        'Norma General Técnica 199 2018 [Gobierno de Chile]. Sobre esterilización y desinfección en establecimientos de atención en salud.',
      link:
        'https://www.minsal.cl/wp-content/uploads/2018/05/NT-de-esterilizaci%C3%B3n-y-DAN-con-rectificaciones-y-resoluciones-a.pdf',
    },
    {
      referencia:
        'Resolución 2184 de 2019 [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual empezará a regir en el 2021 el código de colores blanco, negro y verde para la separación de residuos en la fuente con el objetivo de fomentar la cultura ciudadana en materia de separación de residuos en el país.',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_minambienteds_2184_2019.htm',
    },
    {
      referencia:
        'Resolución 01164 de 2002 [Ministerio del Medio Ambiente]. Por la cual se adopta el Manual de Procedimientos para la Gestión Integral de los residuos hospitalarios y similares.',
      link:
        'https://www.ins.gov.co/Normatividad/Resoluciones/RESOLUCION%201164%20DE%202002.pdf',
    },
    {
      referencia:
        'Resolución 2827 de 2006 [Ministro de la Protección Social]. Por la cual se adopta el Manual de bioseguridad para establecimientos que desarrollen actividades cosméticas o con fines de embellecimiento facial, capilar, corporal y ornamental.',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_2827_de_2006.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
