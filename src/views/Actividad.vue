<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Protocolo y lineamientos de la valoración de apoyos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> promover la comprensión y apropiación de los principios, etapas y lineamientos del protocolo nacional para la valoración de apoyos, logrando apropiar el uso del lenguaje, la accesibilidad y los enfoques que garantizan procesos inclusivos, éticos y centrados en la persona.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Los dos lineamientos básicos para el informe de valoración de apoyos son:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Accesibilidad y lenguaje.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Accesibilidad y ajustes razonables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acciones afirmativas y lenguaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Valoración y adjudicación de apoyos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El habla de la diversidad funcional plantea que todo ser humano es único, no implica menos derechos, sino que reafirma al sujeto autónomo, diferente, físicamente distinto y diverso.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El enunciado anterior es incorrecto porque es natural que todo ser humano sea diferente y diverso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El enunciado anterior es correcto porque la diversidad es propia de todo ser humano; su funcionamiento hace parte de dicha diversidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El enunciado anterior es incorrecto porque la diversidad funcional es un modelo que se enfoca en la deficiencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El enunciado anterior es correcto porque la diversidad funcional es un modelo que se enfoca en diferencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Ante la identificación de cada tipo de discapacidad debe usarse y anteponerse el término persona porque:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las personas con discapacidad han sido excluidas históricamente; anteponer “persona” reconoce su dignidad y condición como sujetas y sujetos de derechos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se antepone “persona” por algo meramente formal, pues ello no implica un reconocimiento de los derechos ni la visibilización de la diversidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No se debía anteponer “persona” porque se asume que toda persona lo es, sin necesidad de reiterarlo en el lenguaje técnico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ninguna de las anteriores refleja adecuadamente el enfoque inclusivo, ni el reconocimiento pleno de derechos desde el lenguaje respetuoso y afirmativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'Un ajuste razonable es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluación de condiciones que se realiza a una persona con discapacidad para identificar exclusivamente los apoyos económicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Adaptaciones que buscan garantizar la autonomía de personas con discapacidad, atendiendo a sus necesidades particulares.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Estrategia que brinda herramientas a personas con discapacidad para fortalecer aprendizajes, que le servirán para la vida',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Medida temporal que sustituye las capacidades de la persona con discapacidad para facilitar su integración laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'Una acción afirmativa es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es una estrategia concreta que contribuye directamente a que las personas con discapacidad ejerzan su autonomía.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Es únicamente el resultado de un análisis de necesidades, sin implicar acciones concretas que promuevan autonomía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es una herramienta que por sí sola, garantiza todos los derechos de las personas con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es una estrategia centrada en redes de apoyo, pero no garantiza la autonomía de personas con discapacidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes aspectos no debe tenerse en cuenta en el informe de valoración de apoyos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El informe de valoración de apoyos es un documento claro y detallado que identifica los apoyos necesarios para cada persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un documento escrito con lenguaje fácil que propone ajustes razonables según el tipo de discapacidad y necesidades particulares de cada persona.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El informe puede incluir apoyos como asistentes personales, animales de servicio o herramientas tecnológicas que favorezcan la autonomía de la persona.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El informe de valoración de apoyos se centra únicamente en describir las limitaciones de la persona sin considerar su entorno o potencial de desarrollo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Refleja de forma clara e inequívoca la voluntad y preferencias de la persona con discapacidad.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Proyecto de vida.', esCorrecta: true },
            { id: 'b', texto: 'Decisiones prioritarias.', esCorrecta: false },
            { id: 'c', texto: 'Ajustes razonables.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Motivaciones y finalidad del informe.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Determinaciones o posibles actos jurídicos que requieren ser formalizados:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Motivaciones y finalidad del informe.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acciones para promover la autonomía.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Ajustes razonables.', esCorrecta: false },
            { id: 'd', texto: 'Decisiones prioritarias.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Adaptaciones que puedan aplicarse en la formalización de los apoyos:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Decisiones prioritarias.', esCorrecta: false },
            { id: 'b', texto: 'Ajustes razonables.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Acciones para promover la autonomía.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Proyecto de vida.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Actos necesarios para fomentar autonomía y toma decisiones:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Motivaciones y finalidad del informe.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Decisiones prioritarias.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Acciones para promover la autonomía.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Ajustes razonables.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'Razones para realizar la valoración de apoyos:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Motivaciones y finalidad del informe.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acciones para promover la autonomía.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Decisiones prioritarias.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Acciones para promover la autonomía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Con qué propósito se implementó el documento “Valorar apoyos para tomar decisiones Lineamiento y protocolo nacional de apoyos en el marco de la Ley 1996 de 2019”?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para establecer sanciones legales a las personas facilitadoras de apoyo que omitan el protocolo nacional de valoraciones de apoyos vigente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para brindar ayuda económica a todas las personas con discapacidad y así garantizar su autonomía y toma de decisiones personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para establecer criterios que permitan hacer diagnóstico médico, psiquiátrico y psicológico para cada discapacidad, según la clasificación internacional vigente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para constituir una herramienta técnica nacional alineada con el derecho internacional y constitucional sobre derechos de las personas con discapacidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Cuando se habla de discapacidad, el lenguaje es un elemento relevante, pues su uso puede generar juicios de valor o percepciones negativas (Díaz, Gómez & Míguez, 2023). Esto:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque representa una condición que históricamente ha implicado carga social y connotaciones negativas hacia la persona con discapacidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque refleja un tecnicismo originado en el discurso médico, que excluye enfoques sociales sobre la discapacidad y su diversidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque fue definido por organismos internacionales, alejados de realidades socioculturales propias de cada país y contexto local específico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque alude únicamente a personas “disminuidas físicas”, ignorando otros tipos de discapacidad en la reflexión sobre inclusión y derechos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la expresión empleada en el artículo 47 de la Constitución Política de Colombia de 1991 para referirse a las personas que presentan alguna discapacidad, que actualmente se considera inapropiada y debe evitarse en valoraciones de apoyo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Personas con discapacidad.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Personas en situación de discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Personas con diversidad funcional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuidos físicos, sensoriales y psíquicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'El propósito de las tres dimensiones de la accesibilidad —accesibilidad, ajustes razonables y acciones afirmativas— en los procesos de valoración de apoyos para personas con discapacidad, tiene como propósito común:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar el derecho de todas las personas con discapacidad a vivir con libertad, autonomía y participación plena en la sociedad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Clasificar tipos de discapacidad según criterios médicos, para identificar ayudas estandarizadas dirigidas a todas las personas con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Promover lenguaje común que facilite comunicación entre profesionales médicos al atender a personas con discapacidad en distintos contextos clínicos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar quién incumple el protocolo de valoración de apoyos y establecer los cargos correspondientes dentro del sistema judicial nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El informe definitivo de la valoración de apoyos debe ser validado por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La familia nuclear de la persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La persona con discapacidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El médico tratante de la persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El psicólogo tratante de la persona con discapacidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El modelo social de la discapacidad modificó entre otros, el cómo nombrar a las personas con discapacidad.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'El derecho al error complementa el lineamiento actual, reconociendo que impedir decisiones a personas con discapacidad refuerza el capacitismo y vulnera su autonomía, especialmente en discapacidades intelectuales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Las personas con discapacidad son nombradas así, porque ellas mismas decidieron que este término era pertinente porque las hacía visibles en todos los escenarios de participación del mundo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Exigir decisiones perfectas a personas con discapacidad refleja capacitismo, pues impone estándares injustos que no se aplican a quienes son considerados “plenamente capaces” o “inteligentes”.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
