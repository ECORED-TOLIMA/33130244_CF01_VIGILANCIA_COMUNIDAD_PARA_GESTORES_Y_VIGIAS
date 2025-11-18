<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Análisis participativo

    .row.justify-content-center.align-items-center
      .col-lg-5.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='Imagen decorativa')
      .col-lg-7       
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img-02.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0(data-aos="fade-left") El análisis participativo se define como los métodos y técnicas que facilitan la participación de las comunidades en el diagnóstico, la planificación y la evaluación de proyectos y acciones locales, permitiendo recoger información, analizar problemáticas y consensuar soluciones de manera colaborativa (Geilfus, 2002).
        .bloque-texto-c.color-secundario.p-3(style="background-color:#F4E9E7")
          p.mb-0 Se entiende por análisis participativo al enfoque metodológico donde las personas involucradas—como comunidades, grupos sociales o territorios—expresan sus percepciones, conocimientos y opiniones para intervenir sobre situaciones que los afectan directamente. El objetivo es empoderar a los participantes a través de su involucramiento en la identificación de necesidades, la deliberación de causas y la construcción de soluciones colectivas (ACNUR, 2024).

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1. Condiciones sociodemográficas 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img-03.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4
        p Las condiciones sociodemográficas son el conjunto de características sociales y demográficas que definen y describen a una población o grupo humano. Comprenden los rasgos sociales y demográficos que permiten caracterizar a grupos de personas. Estas condiciones influyen directamente en la calidad de vida, el acceso a servicios y las oportunidades de desarrollo de los individuos (Peñuela Rodríguez & Córdoba Torres, 2020; Cedeño Velásquez et al., 2019, p. 3)
        p Las principales variables sociodemográficas son: 
        .bg-color-2.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img-04.svg', alt='')
            .col-lg
              .p-2
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-user.bg-color-3
                    p.mb-0 Edad.
                  li.d-flex
                    i.fas.fa-user.bg-color-3
                    p.mb-0 Sexo o género.
                  li.d-flex
                    i.fas.fa-user.bg-color-3
                    p.mb-0 Estado civil.
                  li.d-flex
                    i.fas.fa-user.bg-color-3
                    p.mb-0 Nivel educativo.
                  li.d-flex
                    i.fas.fa-user.bg-color-3
                    p.mb-0 Ocupación y situación laboral.
            .col-lg
              .p-2
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-user.bg-color-3
                    p.mb-0 Nivel socioeconómico e ingresos.
                  li.d-flex
                    i.fas.fa-user.bg-color-3
                    p.mb-0 Composición y tamaño familiar.
                  li.d-flex
                    i.fas.fa-user.bg-color-3
                    p.mb-0 Nacionalidad y lugar de residencia.
                  li.d-flex
                    i.fas.fa-user.bg-color-3
                    p.mb-0 Religión y pertenencia étnica.

    p.mb-4.text-center Algunos ejemplos de las condiciones sociodemográficas pueden ser: 

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img-07.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
            h4.text-center.mt-5(style="color:#12263F") Estudios e ingresos
            p.text-center.mb-0(style="color:#12263F") Una comunidad urbana con alta escolaridad y nivel de ingresos medio.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img-08.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
            h4.text-center.mt-5(style="color:#12263F") Acceso a servicios
            p.text-center.mb-0(style="color:#12263F") Familias mono parentales con bajo acceso a servicios de salud.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img-09.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
            h4.text-center.mt-5(style="color:#12263F") Ocupación laboral
            p.text-center.mb-0(style="color:#12263F") Trabajadores con diferentes rangos de edad, escolaridad y ocupación en una empresa.

    p.mb-4 Los estudios demográficos permiten: describir, analizar y comparar distintas poblaciones con el fin de identificar vulnerabilidades, necesidades y desigualdades sociales. Además, son centrales en el diseño de políticas públicas, estrategia de salud, programas sociales, estudios de mercado, entre otros.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .bg-color-1.tarjeta.py-3.px-4.h-100
          p.mb-0 Por esto, las condiciones sociodemográficas constituyen la base indispensable para comprender la dinámica social y demográfica de un territorio o grupo poblacional, porque actúan como un espejo multifacético que refleja tanto la composición intrínseca de la comunidad como los factores externos que moldean su existencia. Al analizar elementos como la edad, el sexo, la distribución geográfica, los niveles educativos, la ocupación y el estado socioeconómico, se puede trazar un perfil exhaustivo que va más allá de los números. 
    
    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img-84.svg', alt='Imagen decorativa')
      .col-9
        p.mb-0(data-aos="fade-left") Esta información no solo indica "quiénes son", sino que también permite inferir "cómo viven", "qué necesidades tienen" y "a qué riesgos están expuestos". Es a partir de este conocimiento fundamental que se pueden diseñar intervenciones pertinentes y equitativas, ya que se basan en una comprensión profunda de las realidades estructurales y contextuales de la población. (Peñuela Rodríguez & Córdoba Torres, 2020; Cedeño Velásquez et al., 2019).

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Etapas de ciclos de vida 

    p.mb-4 Las etapas del ciclo de vida son los grandes periodos de desarrollo que atraviesa una persona desde la concepción hasta la muerte y constituyen el eje central para los estudios, De acuerdo con la Resolución 3202 de 2016 en Colombia, las etapas del ciclo de vida establecidas son las siguientes: 

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-10-01.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="5%" y="33.5%" numero="+")(style="background-color:#FFFFFF")
            p Considerada desde la gestación hasta los 5 años, marcada por el rápido crecimiento físico y desarrollo cognitivo.
          .tarjeta.tarjeta--blanca.p-3(x="27%" y="20%" numero="+")(style="background-color:#FFFFFF")
            p De 12 a 17 años, caracterizada por cambios puberales, búsqueda de identidad y autonomía.
          .tarjeta.tarjeta--blanca.p-3(x="17.5%" y="89.5%" numero="+")(style="background-color:#FFFFFF")
            p De 6 a 11 años, asociada a la socialización escolar y desarrollo emocional.
          .tarjeta.tarjeta--blanca.p-3(x="40%" y="89.5%" numero="+")(style="background-color:#FFFFFF")
            p De 18 a 28 años, donde se consolida el desarrollo personal, educativo y laboral.
          .tarjeta.tarjeta--blanca.p-3(x="63.5%" y="10.5%" numero="+")(style="background-color:#FFFFFF")
            p De 29 a 59 años, etapa de mayor productividad, consolidación familiar y profesional.
          .tarjeta.tarjeta--blanca.p-3(x="78%" y="86.7%" numero="+")(style="background-color:#FFFFFF")
            p Desde los 60 años y más, donde aumentan retos de salud y adaptación social (Ministerio de Salud y Protección Social, 2016).
        figure.movil
          img(src='@/assets/curso/temas/tema1/img-10-02.svg', alt='Imagen decorativa')

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Enfoque y conceptos claves

    p Las etapas del ciclo de vida son los periodos cronológicos en el desarrollo humano (primera infancia, infancia, adolescencia, juventud, adultez, vejez), definidos por rangos de edad, características biológicas, psicológicas y sociales.
    p.mb-4 El ciclo de vida implica que los riesgos y oportunidades para la salud varían según el estadio y se reconoce que las exposiciones tempranas (como la nutrición prenatal y la infancia) pueden tener efectos duraderos. Esto se estudia con el fin de identificar la incidencia y prevalencia de enfermedades y eventos de salud en cada etapa, reconociendo ventanas de oportunidad y momentos críticos para intervenciones públicas.

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/temas/tema1/img-11.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/temas/tema1/img-12.svg' alt="Imagen decorativa")
        p.mb-0 Las etapas del ciclo de vida son así herramienta fundamental para organizar el estudio de poblaciones y planificar acciones de salud pública eficaces y adaptadas, asimismo, estas etapas permiten organizar la atención integral en salud reconociendo las características y necesidades específicas de cada momento vital a lo largo del curso de vida (Ministerio de Salud y Protección Social, 2016).

    .fondo2-t2.px-md-5.px-4.py-4
      .row.justify-content-center
        .col-lg-2.col-sm-7.col-10.mb-4(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema1/img-13.svg', alt='Imagen decorativa')
        .col-lg-8(data-aos="fade-left")
          p Por su parte, las RIAS (Rutas Integrales de Atención en Salud) constituyen paquetes organizados de acciones para la atención, prevención y promoción en salud, diseñadas específicamente para las necesidades particulares de cada etapa del ciclo de vida, por esto, cada momento de los mencionados tiene una o varias RIAS asociadas que determinan los protocolos y servicios específicos para atender las particularidades en salud de ese grupo de edad (Ministerio de Salud y Protección Social, 2016).
          p Un ejemplo de ello es:  

        .col-lg-10(data-aos="fade-down")
          .tarjeta--container.row.mb-4
            .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#FFC025")
              .row.justify-content-center.mb-3
                .col-lg-4.col-6
                  figure
                    img(src='@/assets/curso/temas/tema1/img-14.svg', alt='Imagen decorativa')
              h4.text-center.mb-4 Primera infancia
              p.mb-0 Las RIAS para primera infancia incluyen intervenciones en vacunación y nutrición dirigidas a niños de 0 a 5 años.
            .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#FA9757")
              .row.justify-content-center.mb-3
                .col-lg-4.col-6
                  figure
                    img(src='@/assets/curso/temas/tema1/img-15.svg', alt='Imagen decorativa')
              h4.text-center.mb-4 Vejez
              p.mb-0 Las RIAS para vejez priorizan prevención de enfermedades crónicas, rehabilitación y paliación. 
          p Las RIAS usan las etapas del ciclo de vida como referencia para adaptar las acciones de salud pública y clínica, asegurando pertinencia y eficiencia en la atención (Ministerio de Salud y Protección Social, 2016).
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2. Condiciones socioambientales

    p.mb-4 Las condiciones socioambientales son el conjunto de factores sociales y ambientales que interactúan para influir en la salud de los individuos y comunidades (Departamento Nacional de Planeación, 2008). Se entienden como las circunstancias derivadas de la interacción entre personas y su entorno físico (aire, agua, suelo), químico, biológico y social (hábitos, relaciones, organización comunitaria). Estas condiciones incluyen aspectos como calidad del aire, acceso a agua potable, vivienda adecuada, saneamiento, exposición a contaminantes, ruido ambiental, condiciones de trabajo y acceso a espacios verdes.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#FFC025")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-16.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 En salud pública las condiciones socioambientales se valoran como determinantes porque influencian la aparición y frecuencia de enfermedades, así como la calidad de vida de la población. La contaminación atmosférica, la segregación residencial, el acceso desigual a servicios y el cambio climático son factores socioambientales que pueden generar disparidades en salud, especialmente en grupos vulnerables como niños y adultos mayores (Watson Lewis et al., s.f.).

    p.mb-4.text-center Para complementar lo anterior, a continuación, se relacionan algunas condiciones ambientales y la consecuencia presentada por cada una: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-17.svg' alt='AvatarTop')
          h4.text-center Contaminación del aire urbano
          p.mb-0 Automotores e industrias que aumentan el riesgo de enfermedades respiratorias crónicas.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-18.svg' alt='AvatarTop')
          h4.text-center Falta de acceso a agua potable y saneamiento básico
          p.mb-0 Zonas rurales y periferias urbanas se relacionan con enfermedades gastrointestinales.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-19.svg' alt='AvatarTop')
          h4.text-center Vivienda precaria
          p.mb-0 Exposición a hacinamiento y sin ventilación, que favorece la transmisión de infecciones.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-20.svg' alt='AvatarTop')
          h4.text-center Ruido ambiental elevado
          p.mb-0 Barrios cercanos a las autopistas o zonas comerciales, implicando insomnio y estrés crónico.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-21.svg' alt='AvatarTop')
          h4.text-center Trabajo en condiciones insalubres 
          p.mb-0 Exposición ocupacional a sustancias químicas peligrosas (plomo, solventes, pesticidas), vinculados a enfermedades ocupacionales.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-22.svg' alt='AvatarTop')
          h4.text-center Desigualdad social y desagregación residencial
          p.mb-0 Comunidades con menor acceso a infraestructura y servicios de salud presentan mayores tasas de enfermedad y mortalidad.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img-23.svg' alt='AvatarTop')
          h4.text-center Ausencia de espacios verdes y recreativos
          p.mb-0 Limita el ejercicio físico y la interacción social, aumentando el riesgo de enfermedades cardiovasculares y problemas de salud mental

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario-medio.p-4
          p.mb-0 Las condiciones socioambientales reflejan la manera en que la organización social y el entorno físico pueden proteger o perjudicar la salud; además, son objeto central de políticas públicas orientadas a la equidad, la prevención y la promoción de la vida saludable (Departamento Nacional de Planeación, 2008).

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3. Aspectos culturales y cosmogonía

    p La cosmogonía y los aspectos culturales de una comunidad son la base que da sentido y guía a la vida de las personas, su salud y la manera en que cuidan de sí mismas y de quienes las rodean. Cada grupo humano, según su historia, etnia y entorno, cuenta con saberes, valores, costumbres y relatos propios sobre cómo surgió la vida y qué significa estar bien o enfermarse. Por eso, todo lo que se pensaba sobre los antepasados acerca de la salud, sigue influyendo hasta hoy en cómo se sanan, previenen enfermedades y buscan sentirse bien en compañía de las familias y los vecinos. 
    p.mb-4 Para entender esta temática, es preciso revisar los siguientes ejes de comprensión intercultural: 

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial(data-aos="zoom-in")
          .row.mb-0(numero="1" titulo="Cosmogonía: el origen, la vida y la salud")(data-aos="fade-left")
            .col-12
              p En las comunidades indígenas de la Amazonía, por ejemplo, la salud depende del equilibrio entre la persona, la comunidad y la naturaleza. Los rituales, la sanación y las plantas medicinales tienen un papel fundamental. Para los Wayúu de Colombia, la salud está profundamente conectada con la armonía que mantienen con sus antepasados y su entorno. Así, la cosmogonía da sentido no solo a la vida, sino a las formas de cuidado comunitario, pues orienta las normas y creencias sobre el cuerpo, la enfermedad y la relación con lo espiritual y natural.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-24.png', alt='Imagen decorativa')
          .row.mb-0(numero="2" titulo="Cada comunidad, una visión propia")
            .col-12
              p La cosmogonía no es exclusiva de los pueblos indígenas. Cualquier grupo—urbano, rural o de otra procedencia—tiene sus propias maneras de comprender el mundo. Por eso, las prácticas y conocimientos ligados a la salud deben surgir del respeto y el diálogo entre todas las personas, sin imponer una única forma de ver la vida. Así se fomenta el respeto mutuo, la inclusión y la equidad, haciendo que todos se sientan parte de las decisiones que afectan su bienestar. Así se evitan imposiciones, se favorece el diálogo abierto, la inclusión, el consentimiento y la equidad.  
              figure
                img(src='@/assets/curso/temas/tema1/img-25.png', alt='Imagen decorativa')
          .row.mb-0(numero="3" titulo="Diversidad de prácticas y saberes")
            .col-12
              p En Colombia, la diversidad es enorme. Los afrocolombianos, los Arhuacos y los pueblos andinos cuentan con sanadores tradicionales, celebraciones, rituales agrarios y conocimientos que han pasado de generación en generación. Prácticas como el “buen vivir” (sumak kawsay) muestran cómo la salud surge de armonizar relaciones humanas, naturaleza y costumbres ancestrales. Aunque existen similitudes, cada grupo establece sus propias normas sobre género, comida, la vida, la muerte y la forma de ver el territorio (López, et al, 2018)
              p Armonizar estas dimensiones permite adaptar la prevención, la promoción y la atención, garantizando el bienestar integral según las realidades de cada pueblo o comunidad. Pese a las similitudes, se pude decir que cada uno define normas respecto al género, la edad, la alimentación, la muerte, la espiritualidad y el uso del territorio acorde a ellos. Las prácticas de cuidado y sanación no solo buscan curar síntomas físicos, sino restablecer el equilibrio espiritual, económico, familiar, ambiental y social, recurriendo a disimiles rituales tales como plantas medicinales, curanderos, limpias, baños, agradecimientos y mediaciones con los ancestros. 
              p Comprender y respetar la cosmogonía permite diseñar intervenciones de salud pública pertinentes, incorporar promotores culturales, fortalecer el trabajo participativo y dialogar con las prácticas de autocuidado y sanación colectiva, promoviendo una perspectiva intercultural y el reconocimiento de la autonomía de los pueblos.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-26.png', alt='Imagen decorativa')
          .row.mb-0(numero="4" titulo="Diálogo entre medicina ancestral y occidental")
            .col-12
              p Las personas sabias, como chamanes, curanderos y parteras, tienen un papel central en la salud comunitaria. Saben cómo usar plantas, símbolos y rituales; además, muchas veces median entre la medicina tradicional y la occidental. Por eso, es importante que los sistemas de salud oficial reconozcan estos saberes y se adapten respetuosamente a cada comunidad. La Organización Panamericana de la Salud, recomienda flexibilidad, diálogo y empatía para que los protocolos médicos sean efectivos y culturalmente pertinentes porque permite interactuar entre la visión occidental, la medicina tradicional y salud comunitaria para lograr un bienestar integral, sostenible e inclusivo (Organización Panamericana de la Salud, 2025).
              p El enfoque de interculturalidad en salud es un eje transversal que busca potenciar el acceso y la eficacia de las intervenciones, valorando la diversidad y promoviendo la equidad. Para lograrlo, es crucial establecer espacios de comunicación y negociación entre los profesionales de la salud, líderes comunitarios y sabedores ancestrales. Este enfoque implica el reconocimiento de las prácticas, rituales y conocimientos locales como elementos válidos y complementarios a los procesos de atención biomédica, eliminando así juicios etnocentristas.
              figure
                img(src='@/assets/curso/temas/tema1/img-27.png', alt='Imagen decorativa')
          .row.mb-0(numero="5" titulo="Competencia cultural y enfoque intercultural")
            .col-12
              p Atender la salud no solo es tratar enfermedades: exige reconocer la diversidad y la cultura de cada persona. Por eso, quienes desarrollan acciones en salud deben aprender y practicar competencia cultural—una capacidad que se construye con conciencia, conocimientos y habilidades para entender y respetar creencias y comportamientos diferentes. Ignorar la cultura es ignorar a la persona misma y eso puede dificultar cualquier proceso de cuidado o sanación.
            .col-12.mb-0
              figure
                img(src='@/assets/curso/temas/tema1/img-28.png', alt='Imagen decorativa')
          .row.mb-0(numero="6" titulo="Hacia una salud más inclusiva")
            .col-12
              p El enfoque intercultural busca mejorar la salud y el bienestar sumando conocimientos médicos y saberes ancestrales, eliminando prejuicios y sumando voces, desde las parteras tradicionales hasta los líderes espirituales y comunitarios. De este modo, la prevención, promoción y la atención médica se vuelven más pertinentes y equitativas. Un ejemplo de esto es el parto intercultural, donde se respeta tanto lo médico como lo tradicional o el uso de plantas medicinales avaladas por las costumbres y coordinadas con los profesionales de la salud y las parteras o quienes realizan acciones para la atención del parto desde la comunidad.
              figure
                img(src='@/assets/curso/temas/tema1/img-29.png', alt='Imagen decorativa')

    .row.justify-content-center
      .col-xl-10
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema1/img-30.svg', alt='').m-auto
          .col-xl
            p.mb-0 En conclusión, comprender y respetar la cosmogonía y los saberes tradicionales, permite construir una salud pública capaz de responder mejor a las necesidades de cada comunidad, incorporando la diversidad, el diálogo y el trabajo conjunto hacia el bienestar integral de todas y todos.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4. Identificación de líderes en la comunidad

    p La identificación de líderes, las formas de organización y las características de las organizaciones de base comunitaria, junto con los espacios de integración, son aspectos esenciales para el desarrollo comunitario y la participación social. De acuerdo con el Secretaría de Integración Social (2016), se tienen diversas formas de identificar liderazgos: se basa en analizar las concepciones y los métodos que un líder utiliza. 
    p.mb-4 Los estilos de liderazgo se clasifican en #[b función de su nivel de control y participación.] Por un lado, se encuentran los estilos más tradicionales, encontrando:    

    .bg-full-width.bg-color-6
      .px-4.px-md-5
        .row.mb-4(data-aos="flip-up")
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-5.h-100
              .tarjeta-numerada__numero
                .h2 1
              h4.text-center 
                b El autocrático
              p.text-center El líder ejerce un control total y toma decisiones unilaterales.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-5.h-100
              .tarjeta-numerada__numero
                .h2 2
              h4.text-center 
                b El administrativo
              p.text-center Se enfoca en mantener la operación sin problemas.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 3
              h4.text-center 
                b El democrático
              p.text-center Consulta a otros, pero retiene la autoridad final.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-adicional-4.p-5.h-100
              .tarjeta-numerada__numero
                .h2 4
              h4.text-center 
                b El colaborativo
              p.text-center Donde el liderazgo y las decisiones importantes se comparten equitativamente entre los miembros. 

        .row.justify-content-center.mb-4
          .col-xl-10
            .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1.p-4.mb-4(data-aos="zoom-in").espacio___movil_1
              .col-xl-auto(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/tema1/img-31.svg', alt='').m-auto
              .col-xl
                p.mb-0 Estos estilos se distinguen por la dinámica de poder y la distribución de responsabilidades en el grupo (Secretaría de Integración Social, 2016)

            p Además de estas categorías, existe una segunda clasificación de tipos de liderazgo que se centra en #[b la naturaleza del intercambio entre el líder y los seguidores.] Estos liderazgos se dividen en los siguientes:   

        .row.justify-content-center.mb-4(data-aos="flip-up")
          .col-lg-6.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/img-32.svg' alt='AvatarTop')
              .tarjeta.color1(style= "width: 100%")
                .p-4 
                  h4 Liderazgo transaccional
                  p La relación se basa en un intercambio directo de beneficios, como el pago por un trabajo o el cumplimiento de una tarea. 
          .col-lg-6.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema1/img-33.svg' alt='AvatarTop')
              .tarjeta.color1(style= "width: 100%")
                .p-4
                  h4 Liderazgo transformacional
                  p Se enfoca en inspirar a las personas a seguir una visión compartida que se alinea con sus aspiraciones, con el objetivo de lograr un cambio real y significativo.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .d-flex.flex-wrap.align-items-center.tarjeta01
          .imagen-02
            figure.mb-0
              img(src='@/assets/curso/temas/tema1/img-85.svg' alt='Servidor' class='img-fluid')
          
          .contenido-tarjeta.p-4
            p.mb-0(data-aos="fade-down") En esencia, para identificar un estilo de liderazgo, es necesario observar si el líder se guía por la supervisión, el empoderamiento, la provisión de una visión o el uso del poder. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-34.png', alt='Imagen decorativa')
      .col-lg-7.mb-lg-0(data-aos="fade-left")
        p De acuerdo con estos planteamientos, del desarrollo de liderazgo se obtienen múltiples beneficios que fortalecen la capacidad de una comunidad para generar y sostener el cambio. Uno de los resultados principales es la activación de los individuos y las organizaciones comunitarias, lo que fomenta su participación y compromiso en las acciones futuras. Además, permite aumentar el acceso y la representación de grupos en estado de vulnerabilidad, excluidos o estigmatizados, dándoles una voz para definir y abordar problemas importantes.
        p El desarrollo de liderazgo también ayuda a cultivar un sentido de pertenencia comunitaria y una responsabilidad compartida, lo que a su vez fortalece la cohesión del grupo. Esta práctica es fundamental para que las iniciativas de cambio sean representativas de la comunidad y para diversificar el equipo de liderazgo con una variedad de habilidades y perspectivas.   

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img-35.svg', alt='Imagen decorativa')
      .col-9
        p.mb-0(data-aos="fade-right") Además de los beneficios internos, el desarrollo de liderazgo incrementa el alcance y la penetración de las intervenciones. Al conectar a más personas con los programas, se logra un mayor impacto a nivel de la población, ya que se aprovechan las redes sociales existentes. Esto también ayuda a mantener las tasas de cambio comunitario a largo plazo, ya que el nuevo liderazgo con fuertes lazos sociales con la comunidad puede sostener los esfuerzos en el tiempo.

    .row.justify-content-center.mb-4
      .col-lg-5.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        img(src='@/assets/curso/temas/tema1/img-36.png' alt="Imagen decorativa")
      .col-lg-7.order-lg-1.order-2.mb-lg-0.mb-4
        p(style="color:#000") Finalmente, la implementación de métodos democráticos y consensuados para la toma de decisiones, que son una parte inherente del desarrollo de liderazgo, contribuye a aumentar la satisfacción de los miembros y a mejorar el funcionamiento general de cualquier iniciativa 
        p(style="color:#000") De esta forma, la identificación se realiza al observar quién motiva, moviliza, representa y promueve el bienestar colectivo, algunos ejemplos son:
        .tarjeta.tarjeta--BGC03.p-4
          .col
            ul.lista-ul--color
              li.d-flex.align-items-start
                i.fas.fa-user
                | Quienes coordinan comités vecinales o promueven la participación ciudadana. 
              li.d-flex.align-items-start
                i.fas.fa-user
                | Personas a las que la comunidad consulta para resolver conflictos. 
              li.d-flex.align-items-start
                i.fas.fa-user
                | Individuos líderes en proyectos sociales, jornadas de limpieza o actividades educativas. 
              li.d-flex.align-items-start
                i.fas.fa-user
                | Miembros reconocidos por su integridad, capacidad de escucha, compromiso y empatía.
      
    p.mb-4 Algunas de las organizaciones comunitarias son estructuras de acción colectiva para atender necesidades comunes y promover derechos. Algunas de estas son: 

    .row.justify-content-center.mb-3(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-37.svg", alt="alt").img90.m-auto
          h4.text-center Juntas de acción comunal
          p.mb-0 Gestionan infraestructura y servicios para el barrio o vereda. 
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-38.svg", alt="alt").img90.m-auto
          h4.text-center Asociaciones de vecinos
          p.mb-0 Resuelven problemáticas territoriales, promueven el desarrollo y representan a la colectividad. 
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-39.svg", alt="alt").img90.m-auto
          h4.text-center Comités temáticos
          p.mb-0 Agrupaciones por interés (ambiental, educación, cultura, salud). 
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-40.svg", alt="alt").img90.m-auto
          h4.text-center Clubes
          p.mb-0 Encontrando juveniles, deportivos, culturales o centros de madres que abordan necesidades específicas del grupo.

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Características de organizaciones de base comunitaria
    
    p.mb-4 Las organizaciones de base comunitaria se caracterizan por su naturaleza profundamente local y su enfoque en las necesidades y problemas específicos de un área geográfica, como una vereda, un barrio o una ciudad. Estas organizaciones operan bajo un modelo de liderazgo comunitario, donde son los propios liderazgos locales quienes toman las riendas de la organización y dirigen las actividades.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#FFF3D3")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-41.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left") 
        p.mb-0 Este enfoque fomenta la participación, el empoderamiento y la movilización de los miembros de la comunidad, animándolos a involucrarse directamente en la búsqueda de soluciones y en la implementación de proyectos que los beneficien. Además de su base local, estas iniciativas son predominantemente sin fines de lucro, lo que significa que todos sus recursos y esfuerzos se reinvierten directamente en la comunidad que sirven. Su propósito principal es mejorar el bienestar social y el funcionamiento general del grupo.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        p Por ello, su trabajo se orienta a desarrollar soluciones que promuevan la salud, el progreso y la calidad de vida de sus miembros. Todo esto garantiza que las iniciativas comunitarias se mantengan fieles a su misión de servir y empoderar a las comunidades en los territorios (Secretaría de Integración Social, 2016). 
        p Dentro de los ejemplos estas organizaciones están:

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#FFF3D3")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img-43.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 Bancos de alimentos
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#FDD5BA")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img-44.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 Asociaciones de vecinos
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#FFF3D3")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img-45.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 Iglesias
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#FDD5BA")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img-46.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 Centros culturales y deportivos

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Espacios de integración o encuentros comunitarios 

    p.mb-4 La creación de lugares apropiados para la interacción se fundamenta en cuatro características esenciales que fomentan la participación y la cohesión social. Estos espacios deben ofrecer a las personas un motivo para ir y otro para quedarse. Además, es crucial que los usuarios se sientan seguros y cómodos y que el lugar sea acogedor y accesible para todos (Secretaría de Integración Social, 2016). 

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.px-4.py-4.mb-4
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/tema1/img-71.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Son ámbitos donde se reúnen los miembros para fortalecer vínculos, discutir problemas, acordar acciones y celebrar logros. Particularmente en el contexto colombiano existen espacios como asambleas y reuniones periódicas de asociaciones vecinales; ferias, mercados campesinos, ferias artesanales o eventos deportivos; centros comunitarios, bibliotecas, grupos de lectura o culturales, comités, parques urbanos y espacios de aprendizaje compartido; talleres participativos, jornadas de limpieza, noches de cine al aire libre y fiestas tradicionales. Estos elementos son fundamentales para el desarrollo sostenible y la cohesión social en cualquier comunidad.
        p Puntualmente, para el caso de la estrategia de vigilancia basada en comunidad este espacio corresponde al Comité Epidemiológico de Vigilancia Comunitaria (COVECOM) u otros en los que se ponen en discusión los temas que afecta la salud de la comunidad.

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5. Soluciones a los problemas en salud

    p.mb-4 Las soluciones a los problemas de salud en una comunidad son intervenciones estructuradas y acciones colectivas diseñadas para mejorar el bienestar de la población. Estas iniciativas abordan directamente los factores que causan enfermedad y malestar, promoviendo una participación activa de los miembros de la comunidad. Son esfuerzos coordinados, a menudo en colaboración con instituciones y equipos multidisciplinarios, que buscan resolver las principales necesidades sanitarias de una población, reducir las inequidades y mejorar su calidad de vida. Un aspecto fundamental de estas soluciones es que consideran la realidad local, los factores sociales, ambientales, económicos y la cultura en la toma de decisiones, asegurando así una pertinencia y un impacto mayores.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-9.order-2
        .tarjeta.tarjeta--BGC01.p-4.mb-4
          p.mb-0 En el ámbito de la salud pública, estas soluciones se manifiestan a través de una serie de estrategias integrales. Se favorecen los modelos de trabajo que abarcan un abordaje multisectorial, lo que significa que la salud no se ve como una responsabilidad exclusiva del sector médico, sino que involucra a la educación, el urbanismo, el medio ambiente y otros campos. La participación comunitaria y el trabajo en red, a través de alianzas locales e intersectoriales, son cruciales. Este enfoque colaborativo garantiza que la planificación, ejecución y evaluación de las acciones respondan de manera efectiva a las necesidades únicas de cada territorio, promoviendo la prevención, el acceso equitativo a servicios y una mejora sostenible de la calidad de vida. 
        p Una de las soluciones más comunes y efectivas en salud pública son las #[b campañas de vacunación.] Su objetivo principal es reducir la incidencia de enfermedades prevenibles por inmunización, protegiendo a individuos y a la comunidad en general. Complementariamente, se implementan #[b programas de educación para la salud], los cuales incluyen talleres sobre nutrición, salud sexual, prevención de adicciones y otras enfermedades en distintos entornos, como instituciones educativas para niños y centros de atención para adultos mayores.
      .col-lg-3.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img-47.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p(style="color:#000") El trabajo colaborativo va más allá de los programas educativos. Se organizan #[b mesas de trabajo] que reúnen a líderes institucionales y comunitarios, desde el orden nacional hasta el municipal. Estos espacios de concertación son fundamentales para identificar situaciones de interés en salud y para coordinar respuestas efectivas. Además, se desarrollan #[b proyectos de infraestructura] que impactan directamente en la salud, como la creación de "caminos escolares seguros" para reducir accidentes, mejorar la infraestructura urbana y fomentar hábitos saludables en la población escolar y joven. 
        .cajon.cajon.color-primario.p-4
          p.mb-0 La promoción de estilos de vida saludables es otra solución prioritaria. Esto abarca un amplio espectro de acciones, que van desde fomentar la #[b alimentación y nutrición sana] y promover el #[b ejercicio físico] hasta trabajar en la #[b disminución de conductas no saludables,] como el consumo de cigarrillo, alcohol y sustancias psicoactivas. Estas iniciativas se centran en el empoderamiento individual y colectivo para tomar decisiones que mejoren el bienestar a largo plazo. 
      .col-lg-5.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-48.png' alt="Imagen decorativa")

    p Por último, es indispensable garantizar el #[b acceso a servicios médicos de forma oportuna y eficaz.] Esto requiere una infraestructura adecuada, como centros de salud bien equipados y con personal idóneo. En zonas remotas de difícil acceso, las #[b brigadas de salud y la telemedicina] se han consolidado como herramientas esenciales para brindar atención. Adicionalmente, las #[b intervenciones ambientales] son cruciales, con mejoras en los sistemas de agua potable, saneamiento básico, gestión de residuos sólidos y control de vectores. Todas estas soluciones tienen un mayor impacto cuando no son exclusivas de unos pocos actores, sino que integran la voz y la participación de la comunidad en todas sus fases, desde el diagnóstico hasta la evaluación de los resultados.

    Separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.6. Diagnóstico participativo

    p.mb-4 El diagnóstico participativo es una metodología comunitaria que involucra activamente a los miembros de la comunidad para analizar su realidad, identificar necesidades, recursos y oportunidades, así como decidir colectivamente sobre los problemas prioritarios y sus posibles soluciones. Se trata de una construcción colectiva que promueve la reflexión, la apropiación y el desarrollo de capacidades dentro de la comunidad. (Gobierno Federal, s.f.; Gomà, 2007).

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img-86.svg', alt='Imagen decorativa')
      .col-9
        p Este proceso se aplica con frecuencia en proyectos comunitarios para garantizar una planeación social que oriente intervenciones en sectores como la salud, la educación, la gestión de recursos o cualquier ámbito que requiera comprender la realidad desde la perspectiva de quienes la viven.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#FFC025")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-49.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left") 
        p.mb-0 Esta metodología permite a la comunidad ser la protagonista en la identificación, comprensión y priorización de sus propios problemas y fortalezas. A diferencia de los diagnósticos tradicionales que son realizados por expertos externos, este enfoque busca que la comunidad se apropie del conocimiento sobre su realidad, permitiéndole no solo reconocer sus desafíos, sino también sus propios recursos y capacidades para resolverlos. El proceso fortalece el capital social y genera propuestas de solución que son legítimas y viables porque surgen del consenso y la experiencia de quienes viven la situación. (Gomà, 2007) 
    
    p.mb-4 El diagnóstico participativo genera una visión compartida de la situación comunitaria, fortalece la organización local y legitima las decisiones colectivas. Basado en Gomà (2007), sus principales resultados son: 

    .tarjeta--BG03.px-md-5.p-lg-0.p-4.mb-5
      .row.justify-content-center.align-items-center.my-lg-5.my-4
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
          figure
            img(src='@/assets/curso/temas/tema1/img-50.png', alt='alt' style='margin-bottom: -23px;')
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-4 col-xl-4")
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img-51.svg", alt="alt")
              p.text-center Identificación clara de problemas, causas y soluciones desde la perspectiva de la comunidad.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img-52.svg", alt="alt")
              p.text-center Prioridad consensuada de necesidades y recursos, evitando interpretaciones externas y sesgadas.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img-53.svg", alt="alt")
              p.text-center Mayor apropiación, motivación y compromiso de la comunidad en la ejecución de las acciones propuestas.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img-54.svg", alt="alt")
              p.text-center Desarrollo de capacidades para la autogestión, empoderamiento y sostenibilidad de los procesos sociales.
      
    p.mb-4 El análisis participativo con la comunidad implica la aplicación de herramientas que permiten recolectar información y fomentar la discusión grupal en ambientes abiertos y horizontalmente organizados. Los pasos suelen incluir: 

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-55.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Gobierno Federal, 2024
            h5.t2.mb-2 Gobierno Federal, 2024
            p Aplicar dinámicas grupales, entrevista, mapas y técnicas visuales para identificar problemas y oportunidades.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-56.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Ministerio del Interior - Ecuador, 2024
            h5.t2.mb-2 Ministerio del Interior - Ecuador, 2024
            p Sistematizar resultados y validar el consenso grupal.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-57.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Ministerio del Interior - Ecuador, 2024
            h5.t2.mb-2 Ministerio del Interior - Ecuador, 2024
            p Su relevancia está en que promueve decisiones informadas, respeto por la diversidad de voces y apropiación de las acciones colectivas.

    p.mb-4 Dentro de las herramientas participativas están: 

    .tarjeta--BG03.align-items-center.pt-3.mb-5
      .col-lg-12.col-12.py-lg-0.py-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none.order-lg-2.order-2(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/img-87.png', alt='Imagen decorativa')
          .col-md-8.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
            SlyderF.custom.color-acento-botones.order-lg-1.order-2(columnas="col-lg-4 col-xl-4")
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/tema1/img-88.svg", alt="alt")
                h4.text-center Mapeo comunitario
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/tema1/img-89.svg", alt="alt")
                h4.text-center Matrices de problemas / soluciones
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/tema1/img-90.svg", alt="alt")
                h4.text-center Grupos focales
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/tema1/img-91.svg", alt="alt")
                h4.text-center Lluvia o tormenta de ideas
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/tema1/img-92.svg", alt="alt")
                h4.text-center Dinámicas lúdicas y visuales
              .tarjeta.bgslyder.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    img(src="@/assets/curso/temas/tema1/img-93.svg", alt="alt")
                h4.text-center Encuestas participativas
          
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p Cualquiera que sea usada con la comunidad debe considerar la cultura y la dinámica de las comunidades, lo que implica un conocimiento previo de sus formas de organización, horarios y espacios de reunión, para asegurar una planificación efectiva y culturalmente respetuosa. 

    Separador

    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.7. Herramientas de diagnóstico participativo

    p Existen múltiples herramientas y técnicas de diagnóstico participativo diseñadas para involucrar activamente a las comunidades en el análisis de sus propias realidades. Estas metodologías se caracterizan por ser flexibles y visuales, lo que facilita la comprensión y el diálogo entre personas con distintos niveles de alfabetización o formación académica. Su propósito principal es generar un saber colectivo que empodere a la comunidad. 
    p.mb-4 De acuerdo a lo anterior, a continuación, se presentan algunas de las herramientas más representativas y eficaces, con su debida explicación: 

    .tarjeta--BG04.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Mapeo comunitario
              p.mb-0(style="color:#000 !important") Es una estrategia enriquecedora, su elaboración está inmersa dentro de un proceso de organización y articulación comunitaria; además, consiste en que los propios habitantes dibujen un mapa de su territorio. Así, se ponen de manifiesto las dinámicas espaciales, las desigualdades y los puntos críticos, lo que permite a los participantes reflexionar sobre el impacto de su entorno en el bienestar colectivo. 
            .col-lg-6.col-10.order-1.order-lg-2.mb-4  
              figure
                img(src='@/assets/curso/temas/tema1/img-58.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Árbol de problemas y soluciones
              p.mb-0(style="color:#000 !important") Resulta útil para profundizar en las causas y consecuencias de una problemática concreta. El tronco del árbol representa el problema central, las raíces simbolizan las causas subyacentes y las ramas los efectos o repercusiones. Una vez terminado el “árbol de problemas”, se construye el “árbol de soluciones”, donde las causas se transforman en acciones concretas y los efectos negativos en resultados positivos. Esta metodología promueve el pensamiento crítico y estratégico. 
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-59.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Matrices de priorización
              p.mb-0(style="color:#000 !important") Permiten a la comunidad valorar y clasificar sus problemas según criterios consensuados como la importancia, urgencia o viabilidad de solución. Los participantes votan o asignan puntajes a cada asunto, favoreciendo la toma de decisiones colectiva y legitimando las prioridades de acción. De este modo, los proyectos se enfocan en las necesidades más urgentes del grupo. 
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-60.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Grupos focales
              p.mb-0(style="color:#000 !important") Son espacios de diálogo guiado donde se reúne a un pequeño grupo de personas con características similares (por ejemplo, jóvenes, mujeres, líderes comunitarios) para profundizar sobre un tema específico. Un facilitador modera la discusión y crea un ambiente de confianza, permitiendo que los participantes compartan sus experiencias, percepciones y opiniones, lo que enriquece la información cualitativa obtenida.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-61.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Historias de vida y los relatos comunitarios
              p.mb-0(style="color:#000 !important") Emplean técnicas narrativas que recogen experiencias individuales y la memoria colectiva de la comunidad. Documentar las trayectorias de vida o narrar la historia de algún acontecimiento relevante permite conocer la evolución de los problemas y las soluciones a lo largo del tiempo. Estas historias fortalecen la identidad, la resiliencia y sirven de aprendizaje para las nuevas generaciones. 
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-62.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") El Diagrama de Venn
              p.mb-0(style="color:#000 !important") Es una herramienta ideal para analizar las relaciones entre actores sociales e instituciones presentes en el territorio. Los participantes dibujan círculos que representan grupos, organizaciones e instituciones; el tamaño y la superposición de los círculos indica la importancia y el nivel de interacción entre ellos. Así, se visualizan las redes de poder y colaboración, así como los aliados clave y posibles vacíos en la articulación social. 
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-63.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Caminatas de observación
              p.mb-0(style="color:#000 !important") Consisten en recorridos guiados por miembros de la comunidad a través de su espacio. Durante la caminata, junto con el facilitador, observan, documentan y dialogan sobre los recursos, problemas y oportunidades que se encuentran. Esta técnica brinda un conocimiento directo y fomenta la reflexión colectiva sobre los aspectos físicos y sociales del entorno. 
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-64.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Calendario estacional
              p.mb-0(style="color:#000 !important") Es una herramienta que ayuda al grupo a visualizar los cambios en actividades, eventos y problemas a lo largo del año. Se señala en el calendario cuándo ocurren las épocas de siembra y cosecha, las enfermedades más frecuentes, las fiestas tradicionales o los periodos de mayor escasez de alimentos. Esta información resulta esencial para planificar intervenciones ajustadas a las particularidades culturales y temporales de la comunidad. 
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-65.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Línea de tiempo histórica
              p.mb-0(style="color:#000 !important") Permite reconstruir cronológicamente los eventos más significativos de la comunidad. Se identifican hitos como la llegada de servicios públicos, desastres naturales o el inicio de proyectos colectivos. Este ejercicio no solo ayuda a comprender la evolución de los problemas, sino también a reconocer la resiliencia y la capacidad del grupo para superar desafíos a lo largo de los años.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-66.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Lluvias o tormenta de ideas
              p.mb-0(style="color:#000 !important") Consiste en que los participantes sugieren propuestas y soluciones a partir de una problemática común de personas sentadas en círculo alrededor de una hoja grande, escribiendo o dibujando propuestas en papel, colocando notas adhesivas, pequeñas ilustraciones y gráficos que expresan sus aportes de forma colectiva y visual (Geilfus, 2002).
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-67.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4(style="color:#000 !important") Encuestas participativas
              p.mb-0(style="color:#000 !important") En ellas los participantes responden preguntas abiertas sobre su entorno y necesidades, permitiendo ajustar planes según el contexto local, por medio de una serie de formularios o cuestionarios abiertos con íconos de personas rellenando respuestas en grupo o de manera individual, representando cómo se recogen las opiniones en papel o digitalmente (Geilfus, 2002).
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-68.png', alt='Imagen decorativa')

    p.mb-4 Conociendo ya las principales herramientas de diagnóstico participativo, es importante ahondar un poco y ejemplificar las siguientes:

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 A. Mapeo comunitario
    
    p.mb-4 Un ejemplo al respecto de cómo puede verse y plantearse se presenta en las siguientes dos figuras:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-2
          h5 Figura 1.
          span <em>Representación de mapeo comunitario</em>    

        .row.bg-color-4.justify-content-center.align-items-center.p-4
          .col-lg-10
            figure
              img(src='@/assets/curso/temas/tema1/figura-1.png', alt='Figura 1 que hace la representación de cómo se plantea un mapeo dentro en una comunidad. Destacando los facilitadores que lo explican y la misma comunidad que presta atención a lo que en él se menciona y los procesos que se deben llevar a cabo para una adecuada aplicación.', style="width: 1043px").m-auto

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-2
          h5 Figura 2.
          span <em>Diseño de mapeo comunitario</em>  

        .row.bg-color-5.justify-content-center.align-items-center.p-4
          .col-lg-10
            figure.desktop
              img(src='@/assets/curso/temas/tema1/figura-2-1v.svg', alt='Descripción: La ilustración presenta a una persona pensativa rodeada de burbujas de diálogo con preguntas relacionadas con las acciones de personas con discapacidad. La escena se compone de una figura central, una persona con cabello rojizo y vestimenta verde, situada en el centro de la imagen. Alrededor de ella, se dispersan tres burbujas de diálogo que contienen preguntas relacionadas con la manera en cómo se hace referencia a las personas con discapacidad. La composición está equilibrada, guiando la vista del espectador a través de las preguntas y hacia la persona central, quien parece estar reflexionando sobre ellas, señalada por los signos de interrogación sobre su cabeza. La disposición de las burbujas de diálogo y su tamaño varían, creando un ritmo visual y enfatizando la importancia de cada cuestión. El sujeto principal es una persona joven, con cabello rojizo largo y una expresión de preocupación, con las manos entrelazadas bajo la barbilla. La vestimenta de la persona consiste en una blusa verde oscura. Los signos de interrogación sobre su cabeza indican incertidumbre o reflexión. El estilo de la imagen es simple y directo, con líneas limpias y colores planos, lo que sugiere una ilustración didáctica o explicativa. La técnica empleada parece ser digital, con contornos definidos y un diseño gráfico. El uso de burbujas de diálogo es característico de las ilustraciones que buscan comunicar información de manera clara y concisa. La paleta de colores es limitada, con tonos suaves y agradables, lo que contribuye a la legibilidad y facilita la comprensión de la información. El fondo es blanco, lo que centra la atención en la persona y las preguntas. La iluminación es uniforme, sin sombras ni efectos especiales, lo que enfatiza la claridad y la simplicidad de la comunicación visual. La ausencia de elementos decorativos en el fondo refuerza el propósito didáctico de la imagen. El ambiente general es neutro, propicio para la reflexión sobre el tema del apoyo y la inclusión, sin distracciones visuales que desvíen la atención del mensaje principal.', style="width: 1043px").m-auto
            figure.movil
              img(src='@/assets/curso/temas/tema1/figura-2-2v.svg', alt='Descripción: La ilustración presenta a una persona pensativa rodeada de burbujas de diálogo con preguntas relacionadas con las acciones de personas con discapacidad. La escena se compone de una figura central, una persona con cabello rojizo y vestimenta verde, situada en el centro de la imagen. Alrededor de ella, se dispersan tres burbujas de diálogo que contienen preguntas relacionadas con la manera en cómo se hace referencia a las personas con discapacidad. La composición está equilibrada, guiando la vista del espectador a través de las preguntas y hacia la persona central, quien parece estar reflexionando sobre ellas, señalada por los signos de interrogación sobre su cabeza. La disposición de las burbujas de diálogo y su tamaño varían, creando un ritmo visual y enfatizando la importancia de cada cuestión. El sujeto principal es una persona joven, con cabello rojizo largo y una expresión de preocupación, con las manos entrelazadas bajo la barbilla. La vestimenta de la persona consiste en una blusa verde oscura. Los signos de interrogación sobre su cabeza indican incertidumbre o reflexión. El estilo de la imagen es simple y directo, con líneas limpias y colores planos, lo que sugiere una ilustración didáctica o explicativa. La técnica empleada parece ser digital, con contornos definidos y un diseño gráfico. El uso de burbujas de diálogo es característico de las ilustraciones que buscan comunicar información de manera clara y concisa. La paleta de colores es limitada, con tonos suaves y agradables, lo que contribuye a la legibilidad y facilita la comprensión de la información. El fondo es blanco, lo que centra la atención en la persona y las preguntas. La iluminación es uniforme, sin sombras ni efectos especiales, lo que enfatiza la claridad y la simplicidad de la comunicación visual. La ausencia de elementos decorativos en el fondo refuerza el propósito didáctico de la imagen. El ambiente general es neutro, propicio para la reflexión sobre el tema del apoyo y la inclusión, sin distracciones visuales que desvíen la atención del mensaje principal.', style="width: 1043px").m-auto

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p De acuerdo con lo establecido por el Consorcio Coopi-Care (2015), en el mapeo comunitario se combina el uso de instrumentos gráficos y geográficos, además de herramientas de desarrollo comunitario que permiten a los agentes comunitarios analizar su entorno, visualizar los cambios, proponer alternativas de solución a los problemas encontrados y elaborar planes para mejorar sus condiciones de vida.
        .cajon.cajon.color-secundario-medio.p-4
          p Entre los usos del mapeo comunitario se pueden mencionar, la elaboración de diagnósticos, planificación de actividades, monitoreo y evaluación e intercambio de información; puntos importantes que permiten contribuir en el desarrollo de las comunidades.
          p.mb-0 Lo siguientes son los pasos para la elaboración del mapeo comunitario: 

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 Paso 1. Definición del propósito

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-69.png', alt='Imagen decorativa')
      .col-lg-7       
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img-70.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0(data-aos="fade-left") El mapeo comunitario es una herramienta versátil y puede servir para muchos propósitos diferentes.
        p El primer paso para la realización del mapeo comunitario es la definición del propósito. Para ello, se deben contestar las siguientes preguntas: 
        ul.lista-ul--color
          li.d-flex.align-items-start
            i.fas.fa-user
            | ¿Cuál es el propósito de llevar a cabo el ejercicio de mapeo comunitario?  
          li.d-flex.align-items-start
            i.fas.fa-user
            | ¿Qué tipos de datos son necesarios para alcanzar este objetivo?
          li.d-flex.align-items-start
            i.fas.fa-user
            | ¿Cómo se utilizará la información recopilada?

    p.mb-4 La siguiente tabla, explica los aspectos a tener en cuenta en este primer paso:

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          i Aspectos para tener en cuenta en la definición del propósito
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 20%") 
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 80%") 
            tbody
              tr(data-aos="fade-right")
                td.text-center #[b Propósitos]
                td Identificar características, condiciones, amenazas, vulnerabilidades, riesgos y recursos de la comunidad que sirvan de base para la identificación de situaciones de interés en salud pública.
              tr(data-aos="fade-right")  
                td.text-center #[b Tipo de datos a identificar]
                td #[b Amenazas:] 
                  ul.lista-ul
                    li(data-aos="fade-right")
                      ul
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Áreas de deslizamiento.
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Basureros.
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Torres de telefonía.
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Torres eléctricas.
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Rutas peligrosas.
                  p #[b Vulnerabilidades:] 
                    ul.lista-ul
                      li(data-aos="fade-right")
                        ul
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Viviendas expuestas.
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Edificios comunales expuestos (escuela, salón comunal, iglesias, cementerio, campo de futbol, puesto de salud/centros comunitarios, cancha polideportivo).
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Vías de acceso expuestas (carreteras y caminos de herradura).
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Puentes expuestos.
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Medios de vida expuesto.
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Área deforestada.
                  p Capacidades y recursos: 
                    ul.lista-ul
                      li(data-aos="fade-right")
                        ul
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Zona segura.
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Censo poblacional: viviendas, habitantes hombres y mujeres, de acuerdo a la tabla de beneficiarios del proyecto (niños y niñas menores de 5 años, de 5 a 17 años, de 18 a 49, mayores de 65 años y personas con discapacidad).
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Población escolar (niños por grado) (información secundaria).
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Ríos.
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Fuentes de agua.
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Sistema de acueducto (captación, línea de conducción, tanque de distribución).
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Puentes.
                  p #[b Análisis de riesgos de la comunidad:]
                    ul.lista-ul
                      li(data-aos="fade-right")
                        ul
                          li(data-aos="fade-right") 
                            i.lista-ul__vineta
                            | Zonas de riesgo, alta, media, baja.
              tr(data-aos="fade-right")  
                td.text-center #[b Utilización de la información]
                td La información del mapeo comunitario se utilizará para identificar de forma participativa las situaciones de interés en salud pública.

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 Paso 2. Crear el mapa 

    p.mb-4 Para crear el mapa se deben realizar las siguientes actividades:

    .row.justify-content-center.mb-0
      .col-lg-12.col-12
        .cajon.cajon.C02.px-4.py-4.mb-4
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/tema1/img-72.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              ul.lista-ul--color
                li.d-flex.align-items-start
                  i.fas.fa-user
                  | Seleccionar el área a ser mapeada. Puede ser una comunidad, dos comunidades, una cuenca, etc.
                li.d-flex.align-items-start
                  i.fas.fa-user
                  | Consultar información existente del área a ser mapeada. 
                li.d-flex.align-items-start
                  i.fas.fa-user
                  | Elaborar la imagen del mapa de forma manual o digital. Para ser impreso, este deberá tener un tamaño adecuado, la escala correcta y buena resolución. Adicionalmente, debe tener los elementos básicos de un mapa.

    p.mb-4 En cuanto a las dimensiones:

    ul.lista-ul--color
      li.d-flex.align-items-start
        i.fas.fa-user
        | El mapa debe tener por lo menos 1.50 por 1.50 metros. Esto permitirá que un número suficiente de personas puedan participar activamente en el ejercicio de mapeo.
      li.d-flex.align-items-start
        i.fas.fa-user
        | El área de interés debe ocupar la mayor superficie de la imagen del mapa, la zona de enfoque debe abarcar la mayor superficie posible de la imagen del mapa. 
      li.d-flex.align-items-start
        i.fas.fa-user
        | La escala debe permitir la visibilidad de las casas y lugares pequeños.
      li.d-flex.align-items-start
        i.fas.fa-user
        | La simbología debe ser discreta e intuitiva. Los símbolos que se elijan para representar la información en la imagen digital deben ser cuidadosamente seleccionados.

    .tarjeta.tarjeta--gris2.p-3.mb-4
      .row.justify-content-around
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-82.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color:#583F00") Símbología MPC
              p Es importante que acceda al siguiente documento elaborado por el Consorcio Coopi-Care (2015), para que conozca todo lo relacionado con la simbología para elaborar el mapa comunitario.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Simbologia_mapeo_comunitario.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-4 Para finalizar lo relacionado con el mapeo comunitario, es importante saber que la herramienta de mapeo comunitario debe permitir:

    .row.justify-content-center.mb-0
      .col-lg-5.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-73.png', alt='Imagen decorativa')
      .col-lg-5       
        ul.lista-ul--color
          li.d-flex.align-items-start
            i.fas.fa-user
            | Identificar los recursos naturales, y recursos de la comunidad.
          li.d-flex.align-items-start
            i.fas.fa-user
            | Identificar los problemas, riesgos, vulnerabilidades y amenazas. 
          li.d-flex.align-items-start
            i.fas.fa-user
            | Determinar la ubicación de la infraestructura existente. 
          li.d-flex.align-items-start
            i.fas.fa-user
            | Intercambiar información entre técnicos y comunitarios. 
          li.d-flex.align-items-start
            i.fas.fa-user
            | Verificar la información.  
          li.d-flex.align-items-start
            i.fas.fa-user
            | Identificar las necesidades.
          li.d-flex.align-items-start
            i.fas.fa-user
            | Identificar la existencia de lugares de intervenciones.
          li.d-flex.align-items-start
            i.fas.fa-user
            | Realizar el seguimiento de acciones realizadas.

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 B. Matriz de problemas / soluciones 
    
    p Es una herramienta participativa que busca identificar, analizar, priorizar y vincular los principales problemas de una comunidad con posibles alternativas de solución, facilitando el consenso y la toma de decisiones colectiva (Tabla 2). 
    p.mb-4 Se trata de un instrumento que organiza en filas y columnas los problemas identificados y las soluciones propuestas, ayudando a visualizar causas, efectos y criterios de priorización. Es fundamental para la planificación estratégica local y para transformar los diagnósticos comunitarios en planes de acción concretos. 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-74.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 En salud pública y procesos comunitarios, la matriz permite que líderes, agentes y habitantes dialoguen abiertamente sobre necesidades reales, prioricen las más relevantes y acuerden de manera colaborativa las soluciones viables. Favorece la transparencia, el empoderamiento y el seguimiento de los resultados fortaleciendo la corresponsabilidad en la gestión local.
          br
          br
          | El grupo identifica problemas principales en columnas y plantea posibles soluciones en filas, permitiendo un análisis compartido (López-Sánchez et al., 2018).

    p.mb-4 Su representación se da de la siguiente manera:

    .row.justify-content-center.mb-0
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          i Ejemplo de matriz para la identificación de problemas
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 25%") Problema
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 25%") No agua potable
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 25%") Desnutrición
                th(data-aos="fade-down")(style= "background-color: #E0F6E1; width: 25%") Enfermedad diarreica
            tbody
              tr(data-aos="fade-right")
                td Solución
                td 
                  ul.lista-ul
                    li(data-aos="fade-right")
                      ul
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Filtros de agua.
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Tratamiento del agua. 
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Municipio garantiza el tratamiento del agua.
                td
                  ul.lista-ul
                    li(data-aos="fade-right")
                      ul
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Preparación inocua de los alimentos.
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Patrones de cuidado.
                td
                  ul.lista-ul
                    li(data-aos="fade-right")
                      ul
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Consumo de agua potable.
                        li(data-aos="fade-right") 
                          i.lista-ul__vineta
                          | Patrones de cuidado.

    .row.mb-4.ms-0
      .col-auto.bg-c1(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/temas/ico.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 C. Grupos focales
    
    p El valor del grupo focal en el diagnóstico participativo radica en su capacidad para ir más allá de la mera recolección de datos, facilitando una verdadera inmersión en la cosmovisión y la lógica comunitaria. Un moderador hábil puede guiar la conversación para identificar las prioridades sentidas por la comunidad, entender sus prácticas tradicionales y captar las narrativas locales sobre salud y bienestar. Esta técnica no solo genera información cualitativa rica y contextualizada, sino que también empodera a los participantes al validar sus voces y experiencias. Al sentirse escuchados y representados, los miembros de la comunidad desarrollan un mayor sentido de apropiación sobre los resultados del diagnóstico, lo que es fundamental para la posterior planificación y ejecución de acciones participativas.
    p.mb-4 Lo anterior, se representa de la siguiente manera:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-2
          h5 Figura 3. 
          span <em>Grupo focal participativo</em>    

        .row.bg-color-4.justify-content-center.align-items-center.p-4
          .col-lg-10
            figure
              img(src='@/assets/curso/temas/tema1/figura-3.svg', alt='Figura 3 que relaciona la manera como se representa un grupo focal participativo que se compone de diferentes personas que establecen un diálogo, por medio de diferentes participantes, los cuales son guiados por un moderador y unas tarjetas que ayudan a llevar la oratorio o discusión.', style="width: 1043px").m-auto

    Separador

    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.8. Análisis participativo comunitario

    p.mb-4 El análisis participativo es un método que pone en práctica los métodos y las herramientas mencionadas previamente. En él se involucra a las comunidades en la investigación y comprensión de sus propios desafíos, necesidades y recursos. A diferencia de un análisis convencional, donde un experto externo recopila y evalúa los datos, en este enfoque la comunidad es la principal investigadora. Los miembros de la comunidad, junto con facilitadores externos, analizan su propia situación, identifican las causas de sus problemas y definen las posibles soluciones desde su perspectiva (Gomà, 2007).

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/temas/tema1/img-75.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/temas/tema1/img-76.svg' alt="Imagen decorativa")
        p.mb-0 Este proceso busca empoderar a las personas al validar sus conocimientos y experiencias. Al participar activamente, la comunidad no solo genera información más rica y contextualizada, sino que también fortalece su capacidad para la toma de decisiones y la acción colectiva. El análisis participativo es, en esencia, un proceso de aprendizaje mutuo y empoderamiento que promueve la autogestión y la sostenibilidad de los proyectos, ya que las soluciones propuestas son diseñadas y apropiadas por quienes se verán directamente beneficiados por ellas. 

    p.mb-4 El proceso se lleva a cabo por medio de las siguientes fases en dicho orden: 

    .bg-c2.px-md-5.px-4.mb-0
      .tarjeta.BGIMG01.mb-4
        .p-4.p-lg-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-7.order-lg-1.order-2
                h4 Preparación y el acercamiento a la comunidad 
                p En esta fase, los facilitadores establecen un primer contacto, se presentan y explican el propósito de la metodología, buscando generar confianza y legitimidad. Se identifican los líderes, las organizaciones y los actores clave de la comunidad. El objetivo no es imponer una agenda, sino escuchar las preocupaciones y los temas que la comunidad considera relevantes. Es un momento crucial para negociar la participación y asegurar que el proceso sea mutuamente beneficioso, respetando la cosmogonía y la dinámica social existentes. El acercamiento con la comunidad puede ser mediante las técnicas previamente mencionadas en este componente (el mapeo comunitario, grupos focales, encuestas participativas, entre otros), con el fin de identificar e involucrar a los líderes en la comunidad que serán los representantes de la comunidad en los espacios de discusión. 
              .col-lg-5.col-12.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img-77.png' style="width: 500px" ,alt='').m-auto
            .row.justify-content-center
              .col-lg-7.order-lg-1.order-2
                h4 Diagnóstico y mapeo de la realidad 
                p Una vez que se establece la confianza, se pasa a esta fase. Aquí, se utilizan una variedad de herramientas visuales y creativas para que la comunidad explore su propio contexto. Métodos como el mapeo comunitario permiten a los participantes dibujar y señalar los recursos, problemas y riesgos en un mapa de su territorio. Asimismo, las matrices de problemas y soluciones ayudan a identificar las causas subyacentes de las problemáticas y a priorizar las áreas de intervención. En esta etapa, el facilitador guía, pero la comunidad es quien dirige el análisis y la reflexión. 
              .col-lg-5.col-12.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img-78.png' style="width: 500px" ,alt='').m-auto
            .row.justify-content-center
              .col-lg-7.order-lg-1.order-2
                h4 Análisis y priorización
                p La información recopilada en el diagnóstico se analiza de manera colectiva. Los participantes discuten y debaten sobre las relaciones de causa y efecto, las dinámicas de poder y los factores que influyen en sus situaciones. Este análisis profundo y compartido permite a la comunidad ir más allá de los síntomas para abordar las raíces de los problemas. Debe hacerse de manera integral, profundizando en el porqué del comportamiento de los reportes y no únicamente en si estos se confirmaron o descartaron, además, en el uso de datos generados desde el comportamiento epidemiológico territorial con el fin de generar acciones individuales y colectivas, activando la autogestión y movilización social. (Gomà, 2007). Por esto, no se debe desconocer las formas de organización existentes en la comunidad, siendo estas las posibles redes a consolidar. 
              .col-lg-5.col-12.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img-79.png' style="width: 500px" ,alt='').m-auto
            .row.justify-content-center
              .col-lg-7.order-lg-1.order-2
                h4 Planificación de la acción y la movilización
                p Con los problemas priorizados, la comunidad, con el apoyo de los facilitadores, diseña un plan de acción concreto. Se definen objetivos claros, se asignan roles y responsabilidades; además, se establecen los plazos. Este plan no es un documento estático, sino un compromiso vivo y flexible. En esta etapa, el análisis se convierte en el motor para la movilización social, donde la comunidad se organiza para implementar las soluciones que ha cocreado, ya sea a través de proyectos de autogestión, campañas de incidencia o la colaboración con otras instituciones.
              .col-lg-5.col-12.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img-79.png' style="width: 500px" ,alt='').m-auto
            .row.justify-content-center
              .col-lg-7.order-lg-1.order-2
                h4 Evaluación y la reflexión
                p Una vez que las acciones están en marcha, la comunidad evalúa los resultados de forma participativa. Se discute qué funcionó, qué no y por qué. Este proceso de retroalimentación es vital para ajustar las estrategias y asegurar la sostenibilidad del proyecto a largo plazo. La evaluación no solo mide el éxito, sino que también fortalece la capacidad de la comunidad para aprender de sus propias experiencias, convirtiéndose en un agente de cambio continuo y autónomo.  
              .col-lg-5.col-12.order-lg-2.order-1.mb-lg-0.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/img-79.png' style="width: 500px" ,alt='').m-auto

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col-lg-12.col-12
          p El análisis participativo es una herramienta fundamental en el proceso de la Vigilancia Basada en Comunidad. Este proceso es realizado por los miembros de la comunidad, agentes comunitarios y personal de salud e instituciones que son parte de un territorio, con el fin de cooperar con la identificación, análisis y movilización social, frente a las situaciones de interés en salud pública que se presentan en estos (Geilfus, 2002). Para esto, la comunidad se vale de las Redes de Vigilancia Epidemiológica Basada en Comunidad (REVCOM), siendo esta la encargada de emitir las señales al Sistema de Alerta Temprana (SAT), para iniciar la gestión del riesgo colectivo e individual de estas. Con la participación activa de la comunidad se favorece la protección de la salud, así como, influir en la toma de decisiones y ejercer control social de las acciones que se desarrollan en los territorios. Estas acciones pueden realizarse en espacios como COVECOM, comités locales, mesas de trabajo, en los que se comparte la presentación de las situaciones de salud, las actividades realizadas con la comunidad, así como la respuesta institucional a estas. 












</template>

<script>
export default {
  name: 'Tema1',
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
