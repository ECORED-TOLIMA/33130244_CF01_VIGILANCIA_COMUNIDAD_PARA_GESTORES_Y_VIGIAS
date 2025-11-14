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
        .col-lg-6.order-lg-1.order-2
          p.mb-0 Miembros de la comunidad que no tienen un antecedente reconocido de trabajo comunitario y que son designados por la comunidad para representarlos en la estrategia de vigilancia basada en comunidad. Estos vigías emergen en comunidades no organizadas o muy aisladas o cuyos líderes o lideresas comunitarios consideran a una persona específica para este proceso.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema5/img-03.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Gestores comunitarios")
        .col-lg-6.order-lg-1.order-2
          p.mb-0 Personas de o que en la comunidad tienen o desarrollan trabajo comunitario en su territorio y que como actividad complementaria o central desarrollan o podrían realizar la vigilancia basada en comunidad.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema5/img-04.png', alt="Imagen decorativa")

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p.mb-0 El ciclo de un agente comunitario podría resumirse como:

    .row.justify-content-center.mb-0
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
