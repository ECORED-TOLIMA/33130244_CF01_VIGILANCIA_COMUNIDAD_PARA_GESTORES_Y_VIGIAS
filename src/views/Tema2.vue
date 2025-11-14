<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Habilidades blandas
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.png', alt='Imagen decorativa')

    p.mb-4 Las habilidades blandas, a menudo denominadas habilidades socioemocionales o destrezas para la vida, se consideran esenciales para un crecimiento completo, tanto en el ámbito del saber cómo en el formativo. Estas capacidades pueden clasificarse en tres áreas principales:  

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-02.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
            h4.text-center.mt-5(style="color:#12263F") Área 1
            p.text-center.mb-0(style="color:#12263F") Son las que facilitan la interacción social. 
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-03.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
            h4.text-center.mt-5(style="color:#12263F") Área 2
            p.text-center.mb-0(style="color:#12263F") Son las que conciernen al procesamiento del pensamiento. 
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-04.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FFDD8B;")
            h4.text-center.mt-5(style="color:#12263F") Área 3
            p.text-center.mb-0(style="color:#12263F") Son aquellas vinculadas a la gestión de las emociones. 
    
    .row.justify-content-center
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p(style="color:#000") Es crucial entender que estas categorías no operan de forma aislada, sino que suelen influirse y complementarse mutuamente. Su relevancia radica en que constituyen un pilar fundamental para el éxito y la evolución tanto en la trayectoria profesional como en la vida cotidiana (De La Ossa, 2022). Las habilidades blandas son capacidades personales y sociales que permiten interactuar de manera efectiva y positiva con otros.  
        .cajon.cajon.color-primario.p-4
          p.mb-0 En salud comunitaria destacan el empoderamiento, liderazgo y comunicación, esenciales para el trabajo colaborativo y la transformación social (Vargas, 2023). Estas son fundamentales para el trabajo con la comunidad, porque posibilitan la comunicación efectiva, la empatía, la resolución positiva de conflictos y la creación de lazos de confianza, lo que convierte los procesos colectivos en espacios colaborativos, inclusivos y sostenibles. 
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-05.svg' alt="Imagen decorativa")

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1. Empoderamiento

    .row
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img-06.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-right") Entendido como la capacidad de las personas o grupos para tomar decisiones, influir en su entorno, asumir responsabilidades y actuar con autonomía frente a los desafíos. Por ejemplo, un grupo de mujeres se organiza para una campaña de promoción de la salud y defiende sus derechos en espacios públicos. Cuando una comunidad es empoderada favorece la participación comunitaria activa, la autogestión de proyectos y la búsqueda de la equidad (Vargas, 2023).

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2. Liderazgo

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-9.order-2
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Es la habilidad para guiar, motivar, inspirar y coordinar a un equipo hacia objetivos comunes, facilitando la toma de decisiones colectivas y el desarrollo de iniciativas. Por ejemplo, un líder comunitario que escucha activamente, negocia ante autoridades y moviliza recursos para mejorar el acceso a servicios de salud. El impacto de esta acción es probable que genera cohesión social, confianza y sentido de propósito en los grupos (Vargas, 2023). 
        p El liderazgo basado en habilidades blandas, inspira confianza, genera motivación y fomenta la participación colectiva, promoviendo transformaciones sociales más profundas y sostenibles. Líderes comunitarios con estas competencias son capaces de gestionar intereses diversos y de mediar en situaciones difíciles, impulsando soluciones colaborativas e innovadoras, motivando a que exista: 
      .col-lg-3.col-md-6.col-8.order-1.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img-07.png', alt='Imagen decorativa')

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
      .row.justify-content-center(titulo="Capacitación continua")
        .col-lg-6.order-lg-1.order-2
          p.mb-0 En los espacios de participación, se debe realizar sensibilización o capacitaciones a los agentes comunitarios en temas relacionados con la salud, la vigilancia epidemiológica y la gestión comunitaria de situaciones de interés en salud pública. También en habilidades de comunicación, liderazgo, resolución de conflictos, inteligencia emocional, etc. En el marco de la Vigilancia Basada en Comunidad, esta es una exigencia que los departamentos, distritos y municipios deben desarrollar a partir de su lineamiento nacional.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img-08.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Delegación de responsabilidades")
        .col-lg-6.order-lg-1.order-2
          p.mb-0 Se debe otorgar a la comunidad responsabilidades específicas dentro del proceso de VBC, fomentando su autonomía.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img-09.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Creación de espacios de decisión")
        .col-lg-6.order-lg-1.order-2
          p.mb-0 Es necesario incluir a la comunidad en la toma de decisiones sobre las acciones a implementar. Se debe promover su participación en los espacios de rendición de cuentas y aquellos que involucren a la REVCOM como COVECOM. 
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img-10.png', alt="Imagen decorativa")

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3. Comunicación

    p.mb-4 La comunicación es un proceso fundamental y multifacético mediante el cual los seres vivos intercambian información, ideas, sentimientos y significados. Se compone de varias partes esenciales, basado en Shannon & Weaver, 1949:  

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/figura-1-1.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="41%" y="20.5%" numero="+")(style="background-color:#FDD5BA")
            p Este mensaje codificado viaja a través de un canal (el medio por el cual se transmite, como el habla, la escritura o un gesto) hacia un receptor, quien lo decodifica (interpreta las señales para entender el mensaje). 
          .tarjeta.tarjeta--blanca.p-3(x="64.5%" y="11.5%" numero="+")(style="background-color:#FDD5BA")
            p Luego, el mensaje llega al receptor, quien recibe, interpreta y decodifica el mensaje emitido, interpretando su contenido según el contexto.
          .tarjeta.tarjeta--blanca.p-3(x="12.5%" y="79.5%" numero="+")(style="background-color:#FDD5BA")
            p Durante este proceso, pueden presentarse ruidos (cualquier interferencia que distorsione el mensaje) y todo ocurre dentro de un contexto específico que influye en la interpretación. 
          .tarjeta.tarjeta--blanca.p-3(x="59.1%" y="37%" numero="+")(style="background-color:#FDD5BA")
            p Finalmente, el receptor envía una retroalimentación o feedback al emisor, confirmando la recepción y comprensión del mensaje y cerrando el ciclo comunicativo.
          .tarjeta.tarjeta--blanca.p-3(x="78.5%" y="88.5%" numero="+")(style="background-color:#FDD5BA")
            p Comienza con un emisor que desea transmitir una idea o mensaje, el cual es codificado (convertido en señales, palabras o gestos). 
        figure.movil
          img(src='@/assets/curso/temas/tema2/figura-2-1.svg', alt='Imagen decorativa')

    p.mb-4 De acuerdo con la Organización Panamericana de la Salud (OPS/OMS, 2025) y con relación a la salud comunitaria y la participación ciudadana, la comunicación del riesgo se entiende como un proceso interactivo de intercambio de información y opiniones entre individuos, grupos e instituciones sobre la naturaleza, magnitud, significado y control de un riesgo para la salud pública. No se trata de una simple transmisión de datos unidireccional, sino de un diálogo que busca el entendimiento mutuo. El objetivo es que las personas y las comunidades puedan tomar decisiones informadas para proteger su salud, basadas en una comprensión clara de los riesgos, sus posibles consecuencias y las medidas preventivas disponibles. Para ser efectiva, esta comunicación debe ser oportuna, transparente, consistente y basada en la confianza. 

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.px-4.py-4.mb-4
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/tema2/img-11.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Es un pilar fundamental de la confianza y de la legitimidad de las intervenciones, esto es, que la comunicación no solo facilita la identificación de necesidades y recursos locales, sino que asegura legitimidad y pertinencia en la población. Así, la comunicación es importante cuando, por ejemplo, un promotor de salud explica diagnósticos a las familias usando un lenguaje adaptado a su contexto cultural y nivel de comprensión; si el mensaje es claro, conciso, oportuno y accesible, se asegura que la comunicación sea efectiva, sostenible y convoque a los intereses de las comunidades.

    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-12.png', alt='Imagen decorativa')
      .col-lg-8.mb-lg-0.mb-4(data-aos="fade-left")
        p En general, la comunicación es una herramienta que favorece prevenir conflictos, mejora la adherencia a tratamientos y fortalece la alianza entre comunidad y sector salud. Cuando la comunicación es asertiva, es considerada como una habilidad para expresar de manera clara, directa y respetuosa los propios pensamientos, necesidades, sentimientos y opiniones, manteniendo el equilibrio entre defender los propios derechos y respetar los de los demás, sin recurrir a la agresividad ni la sumisión, Por lo anterior, la comunicación se convierte en una habilidad blanda fundamental para el ejercicio del liderazgo en cualquier comunidad. El desarrollo de esta habilidad es crucial para lograr procesos participativos, intervenciones sostenibles y una atención humanizada en contextos comunitarios (Vargas, 2023). No es una competencia técnica que se aprende de memoria, sino un conjunto de destrezas interpersonales que incluyen la escucha activa, la empatía, la claridad verbal y no verbal, la capacidad de persuasión, ser asertivo y la habilidad para interpretar y adaptarse a diferentes contextos sociales y culturales. Estas cualidades son fundamentales para fomentar la cohesión social y la cooperación el cambio social y resolver conflictos, trascendiendo cualquier conocimiento técnico específico y siendo cruciales en cualquier ámbito de la vida personal y profesional.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4. Fomentar la cohesión social y la cooperación

    p A través del diálogo, las narrativas compartidas (historias, tradiciones, valores) y la transmisión de información relevante, los miembros de una comunidad construyen una comprensión común de quiénes son, qué les importa y cuáles son sus objetivos colectivos. Los espacios de comunicación permiten expresar emociones, celebrar logros y lamentar pérdidas juntos, fortaleciendo los lazos afectivos y el sentido de comunidad. La escucha activa hace que las personas se sientan valoradas y comprendidas, lo que reduce la sensación de aislamiento y aumenta la integración.

    Separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.5. Fomento del cambio social

    .row.no-gutters.align-items-center.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/temas/tema2/img-13.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/temas/tema2/img-14.svg' alt="Imagen decorativa")
        p Un líder comunitario, un profesional de la salud o un activista, busca modificar actitudes, comportamientos, normas o estructuras dentro de un sistema (una comunidad, una organización, la sociedad). Sin una comunicación estratégica y bien ejecutada, la capacidad de estos liderazgos para influir, persuadir y movilizar se vería severamente limitada.
        p.mb-0 La comunicación para el cambio (Gumucio, 2011) es un enfoque que se centra no solamente en transformar comportamientos sino transformar las normas sociales, las percepciones culturales, las políticas públicas y las estructuras de poder que subyacen a los problemas de salud y bienestar en una comunidad. En términos de la Vigilancia Basada en Comunidad, el principio de movilización social y autogestión busca justamente vincular a los liderazgos en su transformación de las realidades locales ( Instituto Nacional de Salud, 2023).

    Separador

    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.6. Resolución de conflictos

    p.mb-4.text-center La sinergia entre comunicación y resolución de conflictos es lo que dota de resiliencia y sostenibilidad a la salud comunitaria. Por ejemplo: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-17.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4 
              h4 Comunicación
              p Una comunicación robusta previene conflictos al generar entendimiento mutuo.
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img-18.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Habilidades
              p Mientras que las habilidades para la resolución de conflictos aseguran que, cuando estos surgen, se manejen de forma que fortalezca las relaciones en lugar de dañarlas. 

    .row.justify-content-center
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema2/img-19.svg', alt='').m-auto
          .col-xl
            p.mb-0 Juntas, estas habilidades blandas empoderan a la comunidad para dialogar, decidir y actuar colectivamente, no solo para mejorar su salud, sino para construir un tejido social más fuerte, cohesionado y capaz de enfrentar sus propios desafíos de manera autónoma.
























</template>

<script>
export default {
  name: 'Tema2',
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
