<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Vigilancia en salud pública

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='Imagen decorativa')
    
    p El Sistema Nacional de Vigilancia en Salud Pública (VSP) es la estructura oficial y operativa en Colombia para identificar, analizar y responder a eventos que afectan o pueden afectar la salud de la población facilitando la toma de decisiones informadas y la gestión oportuna de riesgos. Es un proceso sistemático y constante de recolección, análisis, interpretación y divulgación de datos sobre eventos y condiciones en salud pública (enfermedades, brotes, factores de riesgo) con el fin de orientar políticas, acciones de prevención, control y promoción de la salud en el país (Decreto 3518 de 2006, 2006).
    p.mb-4 De acuerdo al Instituto Nacional de Salud (2023), los actores de la vigilancia en salud pública en Colombia son: 

    .tarjeta--BG02.p-4
      .row.justify-content-center.align-items-center
        .col-lg-3.col-sm-7.col-10.mb-4(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema4/img-02.png', alt='Imagen decorativa')
        .col-lg-8(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Ministerio de Salud y Protección Social (MSPS).
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Instituto Nacional de Salud (INS).
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Entidades territoriales, se entiende por cada departamento, distrito y municipio que conforman el país.
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Instituciones Prestadoras de Servicios de Salud (IPS).
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Entidades Administradoras de Planes de Beneficios (EAPB).
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Superintendencia Nacional de Salud.
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA).
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Autoridades locales.
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Laboratorios de salud pública y laboratorios privados.
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Profesionales de la salud.
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Redes de atención.
            li.d-flex
              i.fas.fa-user.bg-color-3
              p.mb-0 Comunidades.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-03.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La vigilancia en salud pública es esencial porque permite detectar de manera oportuna brotes epidémicos, reemergencia de enfermedades y eventos inusuales. La información generada de estos eventos facilita la planeación, ejecución y evaluación de intervenciones para la prevención, control y promoción de la salud colectiva; a su vez, optimiza el uso de recursos sanitarios e informa la toma de decisiones políticas y administrativas (Instituto Nacional de Salud, 2023), con el fin de favorecer la protección de la salud individual y colectiva y anticipar la respuesta ante riesgos biológicos, ambientales y sociales. Además, genera oportunidades para el análisis y debate público sobre problemáticas de salud y equidad.

    p La misión del sistema de vigilancia en salud pública es velar por el identificar, recolectar, difundir, controlar y mitigar eventos de interés en salud pública como: enfermedades transmisibles y no transmisibles, brotes epidémicos y eventos inusuales, mortalidad materna e infantil, desnutrición, enfermedades inmunoprevenibles, violencias y lesiones, intoxicaciones, eventos ambientales y zoonosis, así como los factores de riesgo (incluidos los ambientales) y determinantes sociales vinculados al proceso salud-enfermedad.
    p.mb-4 Al respecto, se explica los siguiente:  

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-04.svg' alt='AvatarTop')
          h4.text-center Enfermedades transmisibles
          p.mb-0 Dengue, chikunguña, zika, malaria, tuberculosis, VIH/SIDA, hepatitis virales, tétanos, enfermedades respiratorias agudas, entre otras.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-05.svg' alt='AvatarTop')
          h4.text-center Enfermedades inmunoprevenibles
          p.mb-0 Sarampión, rubéola, tosferina, parotiditis, poliomielitis.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-06.svg' alt='AvatarTop')
          h4.text-center Brotes epidémicos o eventos inusuales
          p.mb-0 Cualquier incremento inesperado en casos de una enfermedad o aparición de nuevas patologías.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-07.svg' alt='AvatarTop')
          h4.text-center Eventos de salud materno-infantil
          p.mb-0 Mortalidad materna, muerte infantil y fetal, desnutrición infantil.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-08.svg' alt='AvatarTop')
          h4.text-center Intoxicaciones y lesiones
          p.mb-0 Por plaguicidas, metales pesados, accidentes ofídicos y envenenamientos.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-09.svg' alt='AvatarTop')
          h4.text-center Enfermedades crónicas seleccionadas
          p.mb-0 Cáncer, diabetes, hipertensión (sujetas a protocolos de vigilancia especiales)
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-10.svg' alt='AvatarTop')
          h4.text-center Violencias y lesiones
          p.mb-0 Violencia intrafamiliar, violencia de género, violencia contra niñas, niños y adolescentes, lesiones por causas externas.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-11.svg' alt='AvatarTop')
          h4.text-center Zoonosis y eventos de importancia ambiental
          p.mb-0 Rabia, leptospirosis, leishmaniasis, amenazas químicas y biológicas, entre otros.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1. Sistema de Alerta Temprana (SAT)

    p.mb-4 Un sistema de alerta en salud pública es una estructura organizada para detectar tempranamente, analizar y gestionar señales o indicadores de posibles amenazas o situaciones anormales que pueden afectar la salud de la población, permitiendo una respuesta rápida y oportuna.

    p.mb-4.text-center De acuerdo al Instituto Nacional de Salud (2023) para realizar este proceso, se deben seguir estos pasos: 

    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2
        LineaTiempoD.color-acento-botones.especial(data-aos="fade-down")
          .row(numero="1" titulo="Identificación y monitoreo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Recolección constante de información —a través de vigilancia epidemiológica, medios de comunicación, redes sociales, laboratorios y comunidad— para detectar señales o cambios inusuales en la frecuencia de eventos de salud.
          .row(numero="2" titulo="Análisis y valoración")
            .col-12.mb-4.mb-md-0
              p.mb-0 Evaluación rápida del significado y la importancia de las señales detectadas para confirmar su relevancia y nivel de riesgo.
          .row(numero="3" titulo="Notificación y comunicación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Transmisión inmediata de la alerta a los actores responsables a nivel local, regional y nacional.
          .row(numero="4" titulo="Respuesta e intervención")
            .col-12.mb-4.mb-md-0
              p.mb-0 Activación de equipos de respuesta rápida y adopción de medidas de control específicas según la naturaleza de la alerta (investigación, tratamiento, campañas).
          .row(numero="5" titulo="Seguimiento y cierre")
            .col-12.mb-4.mb-md-0
              p.mb-0 Monitoreo del evento, evaluación de la intervención y cierre formal de la alerta cuando ya no representa riesgo.
      .col-lg-4.order-lg-2.order-1.mb-3.col-md-8.col-10
        figure(data-aos="fade-down") 
          img(src='@/assets/curso/temas/tema4/img-12.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-xl-10
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema4/img-13.svg', alt='').m-auto
          .col-xl
            h4 Ejemplo
            p.mb-0 Durante desastres naturales como inundaciones o terremotos, el SAT permite identificar rápidamente amenazas a la salud (enfermedades transmitidas por agua, lesiones masivas) y coordina la respuesta.

    p El SAT es esencial para anticipar riesgos, reducir su impacto y proteger de manera efectiva la salud colectiva a través de la acción informada y coordinada entre todos los actores sociales y de salud. La Vigilancia en Salud Pública, es esencial para la seguridad sanitaria, ya que permite detectar, recolectar y analizar información sobre situaciones prioritarias en salud definidas por la normativa vigente, que asigna responsabilidades claras a cada actor del sistema. 
    p.mb-4 De acuerdo al Instituto Nacional de Salud (2023), para su desarrollo se cuenta con dos estrategias principales: 

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Vigilancia basada en indicadores")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/img-15.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            h4 Vigilancia basada en indicadores
            ul.lista-ul
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Eventos predefinidos.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Rutinaria.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Centinela.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Intensificada.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Estadísticas vitales.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Registros administrativos.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Laboratorio de referencia.

      .py-3.py-md-4(titulo="Vigilancia basada en eventos y otras fuentes")
        .row.justify-content-center.p-4
          .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/img-14.png', alt='Imagen decorativa')
          .col-lg-7.order-lg-2.order-2
            h4 Vigilancia basada en eventos y otras fuentes
            ul.lista-ul
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Monitoreo de redes sociales.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Monitoreo de noticias / rumores.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Monitoreo de poblaciones de interés especial.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Comunidad.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Información de otros sectores.
              li(data-aos="fade-right") 
                i.lista-ul__vineta
                | Información Internacional.

    p.text-center Partiendo de lo anterior, es importante explicar un poco más cada una:

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 A. Vigilancia basada en indicadores

    p Detecta casos de Eventos de Interés en Salud Pública (EISP), a través de las instituciones de salud, que luego los notifican en los sistemas de información. 
    p.mb-4 Algunos ejemplos de EISP son: 

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 B. Vigilancia basada en eventos y otras fuentes de información
    
    p Dentro de la participación comunitaria se enmarca la estrategia Vigilancia Basada en Comunidad (VBC), la cual permite a la comunidad detectar y notificar las situaciones de interés en salud pública, por medio de la REVCOM que conforman los vigías y agentes comunitarios.
    p.mb-4 La vigilancia basada en eventos y otras fuentes favorece la oportunidad para detectar casos, síndromes, conglomerados, muertes y otras situaciones de interés en salud pública que requieren de verificación por los servicios de salud y de cumplir la definición de caso, según los protocolos, serían ingresados en el sistema de información basada en indicadores. Esta es la integración ideal de la vigilancia en salud pública, especialmente para escenarios de alta dispersión geográfica, zonas rurales, poblaciones especiales, en las áreas más deprimidas de las zonas urbanas o en grupos con dificultades de acceso a los servicios de salud (Instituto Nacional de Salud, 2023).

    .row.no-gutters.align-items-center.style___box_1.m-0.mb-4(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/temas/tema4/img-16.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/temas/tema4/img-17.svg' alt="Imagen decorativa")
        p.mb-0 La vigilancia basada en comunidad adopta o adapta los procesos para la identificación del riesgo, utilizando el modelo de gestión del riesgo de EISP, brotes y epidemias, el cual incluye las etapas que permiten, en un contexto determinado, identificar, analizar, valorar y modificar el riesgo, así como comunicarlo y evaluar los procesos de dicha gestión (Figura 4). El conjunto de identificación, análisis y evaluación constituyen la triada de un sistema de alerta temprana. La vigilancia basada en comunidad es la detección sistemática y el reporte de eventos (situaciones) de interés en salud pública en la comunidad, por miembros (agentes) de esta misma (OMS/OPS, 2025). 

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-2
          h5 Figura 4.
          span <em>Modelo de gestión del riesgo de eventos de interés en salud pública, brotes y epidemias</em>  

        .row.bg-color-5.justify-content-center.align-items-center.p-4
          .col-lg-10
            figure.desktop
              img(src='@/assets/curso/temas/tema4/figura-1-1.svg', alt='Figura 4 que relaciona la estructura de cómo se compone un modelo de gestión de riesgos, el cual se específica en los eventos de interés en salud pública, brotes y epidemias. En este modelo, se establece un contexto y a partir de él, de identifica, analiza, evalúa, modifica y comunica el riesgo presente.', style="width: 1043px").m-auto
            figure.movil
              img(src='@/assets/curso/temas/tema4/figura-2-1.svg', alt='Figura 4 que relaciona la estructura de cómo se compone un modelo de gestión de riesgos, el cual se específica en los eventos de interés en salud pública, brotes y epidemias. En este modelo, se establece un contexto y a partir de él, de identifica, analiza, evalúa, modifica y comunica el riesgo presente.', style="width: 1043px").m-auto
    
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-4(data-aos="fade-right")
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular La vigilancia basada en comunidad es una estrategia progresiva de desarrollo de capacidades, para que agentes comunitarios identifiquen y gestionen potenciales situaciones de interés en salud pública en los territorios, especialmente en los niveles subnacionales de frontera, en comunidades de grupos étnicos (indígenas, afro, raizales, rom, palenqueros), en poblaciones ubicadas en áreas rurales y dispersas. Se extiende a las cabeceras municipales y zonas urbanas con condiciones de vulnerabilidad o barreras de acceso a los servicios de salud, así como en comunidades cerradas para la detección temprana de algunas de esas situaciones
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 - Instituto Nacional de Salud, 2023

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p(style="color:#000") La vigilancia basada en comunidad identifica señales que requieren ser valoradas y verificadas por un actor de la vigilancia basada en indicadores, de acuerdo con los protocolos vigentes de salud pública y como parte de los sistemas de alerta temprana para la gestión del riesgo. 
        p(style="color:#000") Esta estrategia se basa tanto en indicadores provenientes de fuentes autorizadas, principalmente relacionadas con la salud (OPS/OMS), como en información detectada por la propia comunidad. Así, la Vigilancia Epidemiológica Basada en Comunidad, promueve la participación comunitaria en la salud, articulando a los diferentes actores sociales en acciones de vigilancia epidemiológica y salud pública para fomentar el autocuidado individual y colectivo. Además, asegura la trazabilidad en la gestión de cada señal identificada, desde su detección hasta su cierre, monitoreando todo el proceso de forma sistemática y participativa.
      .col-lg-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img-18.png' alt="Imagen decorativa")

    p.text-center.mb-4 Según el Instituto Nacional de Salud (2023), son cinco los principios de la estrategia de vigilancia basada en comunidad: 

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/figura-3-1.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="14.5%" y="70.5%" numero="+")(style="background-color:#FDD5BA")
            p La vigilancia basada en comunidad se integra al sistema de vigilancia en salud pública, como un paso previo, simultáneo o complementario a la vigilancia basada en indicadores (instituciones de salud o relacionadas que notifican).
          .tarjeta.tarjeta--blanca.p-3(x="32.3%" y="70.5%" numero="+")(style="background-color:#FDD5BA")
            p La vigilancia basada en comunidad se adaptará o implementará según las características de la operación (poblacionales, sociales, culturales, geográficas y regionales) de cada nivel subnacional. La vigilancia respeta y se integra a las costumbres, prácticas y tradiciones de las comunidades. 
          .tarjeta.tarjeta--blanca.p-3(x="50%" y="70.5%" numero="+")(style="background-color:#FDD5BA")
            p Cada territorio avanza en la implementación de la vigilancia basada en comunidad, en calidad y cobertura, según las capacidades institucionales existentes y los recursos disponibles para su operación, dando prioridad a las necesidades de la población. 
          .tarjeta.tarjeta--blanca.p-3(x="67.8%" y="70.5%" numero="+")(style="background-color:#FDD5BA")
            p Es la capacidad de identificar y caracterizar con anticipación las posibles condiciones de riesgo para la salud de la población y orientar la aplicación oportuna de las intervenciones requeridas para preservar la salud individual o colectiva. 
          .tarjeta.tarjeta--blanca.p-3(x="85.5%" y="70.5%" numero="+")(style="background-color:#FDD5BA")
            p La vigilancia basada en comunidad aporta a la identificación y la modificación, por la comunidad, de las condiciones adversas relacionadas con las diferentes situaciones de interés en salud pública.
        figure.movil
          img(src='@/assets/curso/temas/tema4/figura-3-2.svg', alt='Imagen decorativa')

    p.mb-4 La vigilancia basada en comunidad es un mecanismo de participación comunitaria, como componente esencial de la promoción de la salud y la prevención de la enfermedad. Los objetivos de esta estrategia son: 

    .row.justify-content-center.mb-0
      .col-lg-12.col-12
        .cajon.cajon.C01.px-4.py-4.mb-4(style="background-color:#F4E9E7; border-radius:20px")
          .row.justify-content-center
            .col-lg-12.col-12
              ol.lista-ol--cuadro.lista-ol--separador
                li(data-aos="fade-left") 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Impulsar la participación de la comunidad para la identificación, análisis y movilización social ante las situaciones de interés en salud pública.
                li(data-aos="fade-left") 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Integrar la vigilancia basada en comunidad a los sistemas de alerta temprana como eje de la gestión del riesgo colectivo.
                li(data-aos="fade-left") 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Promover la articulación entre los sectores involucrados en la respuesta a situaciones de interés en salud pública, a partir de señales detectadas por la vigilancia basada en comunidad.

    p.mb-4 De conformidad con la estructura del sistema de vigilancia en salud pública, la VBC se desarrolla en el marco de los cinco subsistemas: información, análisis y divulgación, intervención, formación y evaluación.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2. Tipos de vigilancia en salud pública

    p.mb-4 Como se ha comentado, la vigilancia en salud pública se encarga de observar y analizar continuamente los eventos que pueden afectar la salud de la población. Su propósito es detectar a tiempo posibles riesgos, entender cómo se comportan las enfermedades y apoyar la toma de decisiones para proteger a la comunidad. Por ello, existen diferentes tipos de vigilancia que se adaptan a las necesidades y recursos de cada contexto, los cuales permiten obtener información valiosa para prevenir, controlar y responder de manera efectiva ante problemas de salud: 

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-4(tipo="n")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-down")
              h4 Vigilancia participativa
              p.mb-0 Involucra a la comunidad, profesionales de la salud y otros actores sociales en la recolección y notificación de información sobre eventos de salud, fortaleciendo la detección temprana y el empoderamiento local. Permite reportes directos desde la población y fomenta la Vigilancia Basada en la Comunidad.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema4/img-19.png', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema4/img-20.png', alt="Imagen decorativa")          
            .col-lg-8(data-aos="fade-down")
              h4 Vigilancia mediante sensores
              p.mb-0 Utiliza sensores, dispositivos digitales o tecnología de monitoreo (como plataformas web, redes sociales, aplicaciones móviles o dispositivos con conexión internet) para captar datos sobre aparición de síntomas, exposiciones o movimientos poblacionales en tiempo real.
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-down")
              h4 Vigilancia centinela
              p.mb-0 Consiste en seleccionar cuidadosamente ciertas instituciones, laboratorios o unidades de salud (llamadas “centinelas”) para recopilar información de alta calidad y profundidad sobre enfermedades o eventos específicos, que luego se extrapolan para comprender tendencias generales en la población.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema4/img-21.png', alt="Imagen decorativa")          
    
    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3. Modalidades de la vigilancia en salud pública

    .row.mb-4
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img-22.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-right") Luego de conocer los diferentes tipos de vigilancia en salud pública, es importante comprender las modalidades que orientan la forma en que se lleva a cabo la recolección de información. Estas modalidades determinan si la búsqueda de datos es pasiva o activa; es decir, si se espera la notificación de los casos o si se realiza una búsqueda directa y sistemática de los mismos. Entender cómo funcionan permite mejorar la detección temprana de enfermedades y fortalecer las acciones de control y prevención en la comunidad.

    p.mb-4 Por lo anterior, se explican estas dos modalidades:  

    .row.justify-content-center.ali(data-aos="fade-left")
      .col-lg-10(data-aos="fade-down")
        .tarjeta--container.row.mb-4
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#FFC025")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema4/img-23.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Vigilancia pasiva
            p.mb-0 Depende de la notificación rutinaria y espontánea de casos por parte de los servicios de salud u otras fuentes; no se realiza búsqueda activa, sino que se analizan los datos que llegan al sistema.
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#FA9757")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/temas/tema4/img-24.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Vigilancia activa 
            p.mb-0 El personal de salud realiza una búsqueda intencionada y sistemática de casos, datos o eventos, visitando centros médicos, revisando registros y realizando encuestas o entrevistas. Permite una detección más rápida y precisa de brotes y problemas emergente.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 Con base en lo expuesto la vigilancia en salud pública es esencial para anticipar y gestionar riesgos, garantizando la protección de la salud desde el nivel local hasta el nacional (Instituto Nacional de Salud, 2023).


























</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
