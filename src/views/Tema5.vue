<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Agentes para la vigilancia basada en comunidad

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img-01.png', alt='Imagen decorativa')
    
    .row.mb-4
      .col-1.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img-02.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-right") Los agentes fundamentales dentro del proceso de vigilancia basada en comunidad son los vigías y gestores comunitarios, personas que son parte de la comunidad quienes cuentan con las habilidades habladas anteriormente, trabajo comunitario y apoyan acciones para la construcción del tejido social en un territorio. A continuación, se describe quiénes son estos dos actores: 

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
      .row.justify-content-center(titulo="Vigías comunitarios")
        .col-lg-5.order-lg-1.order-2
          p.mb-0 Miembros de la comunidad que no tienen un antecedente reconocido de trabajo comunitario y que son designados por la comunidad para representarlos en la estrategia de vigilancia basada en comunidad. Estos vigías emergen en comunidades no organizadas o muy aisladas o cuyos líderes o lideresas comunitarios consideran a una persona específica para este proceso.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema5/img-03.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Gestores comunitarios")
        .col-lg-5.order-lg-1.order-2
          p.mb-0 Personas de o que en la comunidad tienen o desarrollan trabajo comunitario en su territorio y que como actividad complementaria o central desarrollan o podrían realizar la vigilancia basada en comunidad.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema5/img-04.png', alt="Imagen decorativa")

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p.mb-0 El ciclo de un agente comunitario podría resumirse como:

    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img-05.png', alt='Imagen decorativa')
      .col-lg-6      
        ol.lista-ol--cuadro
          li(data-aos="flip-up") 
            .lista-ol--cuadro__vineta
              span 1
            | Ser reconocido por la comunidad a la que pertenece.

          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 2
            | Manifestar su interés y registrarse.

          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 3
            | Recibir el entrenamiento.

          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 4
            | Ser identificado como agente comunitario.
          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 5
            | Reconocer los formatos y mecanismos de reporte.
          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 6
            | Conocer al líder o lideres territoriales de la REVCOM.
          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 7
            | Ser presentado a la comunidad.
          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 8
            | Recibir reportes de situaciones de interés en salud pública.
          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 9
            | Reportar al territorio.
          li(data-aos="flip-right") 
            .lista-ol--cuadro__vineta
              span 10
            | Promover la autogestión, la movilización social y el análisis comunitario.

    p.mb-4 En esta temática es importante conocer el siguiente pódcast que se explica quién puede desempeñarse como vigía y gestor comunitario en la Vigilancia Basada en Comunidad (VBC), detallando las características de su perfil y las actividades que cada uno realiza. Finalmente, se subraya la relevancia de las habilidades blandas para fortalecer el trabajo en salud comunitaria:  

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-8
        .bg-color-8.tarjeta
          .p-4.p-md-3
            .row.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema5/img-06.svg", data-aos="zoom-in")
              .col-lg.mb-3.mb-lg-0
                h4(data-aos="fade-left").mb-4(style="color:#FF955E") Pódcast
                p.text-white Lo invitamos a escuchar el siguiente Pódcast:
        
                TarjetaAudio.color-secundario.bg-color-white.mb-3(
                  texto="Entendiendo la discapacidad paso a paso"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )


</template>

<script>
export default {
  name: 'Tema5',
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
