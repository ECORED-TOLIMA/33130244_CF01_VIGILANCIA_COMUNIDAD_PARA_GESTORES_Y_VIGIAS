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
      tema:
        'Comprensión de la corresponsabilidad en la Vigilancia Basada en Comunidad',
      titulo: 'Cuestionario',
      introduccion:
        '<strong>Objetivo:</strong> analizar los fundamentos conceptuales y operativos de la Vigilancia Basada en Comunidad, identificando su papel dentro del sistema de salud pública y la corresponsabilidad comunitaria en la detección, notificación y control de eventos de interés sanitario.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es considerada como la red de vínculos y relaciones que une a los integrantes de la comunidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'RIAS (Rutas Integrales de Atención).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comité de vigilancia epidemiológico comunitario.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Tejido social.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Matriz de problemas soluciones.',
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
            '¿En qué consiste el análisis participativo y cuál es su principal objetivo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es un método de investigación aplicado sólo por expertos externos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Consiste en un proceso para recopilar información estadística.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es un enfoque que promueve la participación comunitaria en diagnósticos, planificación y evaluación, empoderando a los participantes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Es la aplicación de tecnologías digitales en proyectos de salud.',
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
            '¿Cuáles son las variables sociodemográficas más relevantes para caracterizar una población?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Edad, género, estado civil, nivel educativo, ocupación, ingresos, composición familiar, nacionalidad y lugar de residencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Identidad política y religión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Consumo tecnológico y hobbies.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de mascotas y preferencias de ocio.',
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
          texto:
            '¿De qué manera influyen las condiciones socioambientales en la salud comunitaria?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'No afectan en absoluto.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Solo inciden en la contaminación visual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinan la aparición de enfermedades y la calidad de vida, al interactuar factores sociales y ambientales como agua, vivienda, contaminación y acceso a servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo influyen en la construcción de viviendas.',
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
          texto:
            '¿Qué rol desempeñan los aspectos culturales y la cosmogonía en las prácticas de salud comunitaria?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ningún rol significativo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Solo afectan la alimentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Orientan creencias, valores y prácticas de salud, condicionando la percepción del bienestar, enfermedad y relación con el entorno.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Determinan únicamente los rituales religiosos.',
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
            '¿Cómo pueden identificarse los líderes y cuáles son los estilos reconocidos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aquellos que siempre deciden en solitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Quienes coordinan, motivan, movilizan y representan el bienestar colectivo, con estilos como autocrático, democrático, colaborativo y transformacional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo quienes tienen cargos oficiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo quien habla más en las reuniones.',
              esCorrecta: false,
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
            '¿Cuáles son las principales herramientas diagnósticas participativas y sus objetivos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exámenes de laboratorio y evaluaciones clínicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mapas comunitarios, árbol de problemas y soluciones, matrices de priorización, grupos focales, historias de vida, diagramas de Venn, caminatas, calendarios estacionales y líneas de tiempo, para comprender necesidades y buscar solucione.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'opcion_3', esCorrecta: false },
            { id: 'd', texto: 'opcion_4', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué elementos caracterizan a las organizaciones de base comunitaria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son entidades estatales centralizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se enfocan en actividades lucrativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Son locales, buscan el bienestar colectivo y operan bajo liderazgo comunitario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Están compuestas solo por profesionales universitarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué importancia tienen las habilidades blandas como comunicación, empoderamiento y resolución de conflictos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son irrelevantes en procesos de salud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permiten fortalecer la cohesión, participación y resolución de problemas comunitarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo influyen en el trabajo individual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sirven únicamente para reuniones informales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué importancia tienen las habilidades blandas como comunicación, empoderamiento y resolución de conflictos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son irrelevantes en procesos de salud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permiten fortalecer la cohesión, participación y resolución de problemas comunitarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo influyen en el trabajo individual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sirven únicamente para reuniones informales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'El análisis participativo busca imponer soluciones externas a las comunidades para resolver sus problemas locales',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Las condiciones sociodemográficas incluyen variables como edad, sexo, nivel educativo y ocupación, que ayudan a caracterizar grupos poblacionales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Las condiciones socioambientales no influyen en la salud pública de una comunidad.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'La cosmogonía y las prácticas culturales no se consideran relevantes para el trabajo en salud comunitaria.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'El diagnóstico participativo permite a la comunidad identificar y priorizar sus problemas de salud, mediante herramientas como el mapeo y las matrices de soluciones.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El liderazgo comunitario es importante porque facilita la motivación, la representación y la participación activa de la comunidad en proyectos de salud.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'La vigilancia en salud pública se realiza únicamente desde las instituciones médicas, sin participación comunitaria.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Las habilidades blandas como la comunicación, la empatía y el liderazgo son fundamentales para fortalecer el trabajo comunitario en salud pública.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'El Sistema de Alerta Temprana (SAT) permite la identificación oportuna de riesgos para la salud y la respuesta inmediata ante emergencias.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La estrategia de Vigilancia Basada en Comunidad (VBC) es un proceso aislado del Sistema Nacional de Vigilancia en Salud Pública.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
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
