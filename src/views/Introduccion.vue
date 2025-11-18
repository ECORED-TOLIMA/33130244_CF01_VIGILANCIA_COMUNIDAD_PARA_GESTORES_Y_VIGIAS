<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-9.order-2
        p El análisis participativo y la vigilancia basada en comunidad son estrategias centrales para fortalecer la salud pública desde las realidades locales. Estas metodologías promueven la participación activa de la población en la identificación de necesidades, el diagnóstico colaborativo y la construcción de soluciones, integrando aspectos sociodemográficos, socioambientales y culturales para lograr una comprensión integral de las dinámicas comunitarias.
        .tarjeta.tarjeta--BGC01.p-4.mb-4
          p.mb-0 El reconocimiento de liderazgos, la organización social, el respeto por cosmogonías y tradiciones, así como el fomento de habilidades blandas como la comunicación, el liderazgo y la empatía, generan cohesión social y potencian la autogestión y la movilización frente a problemáticas en salud. Herramientas como el mapeo comunitario, las matrices de problemas/soluciones y los grupos focales permiten una toma de decisiones inclusiva y legítima, adaptada a cada territorio.
        p.mb-0 El fortalecimiento del tejido social y la articulación de agentes y redes comunitarias, junto con sistemas de alerta temprana aseguran la detección, la respuesta rápida y efectiva y la sostenibilidad de las acciones, permitiendo avanzar hacia comunidades más resilientes, equitativas y capacitadas para enfrentar retos en salud pública.
      .col-lg-3.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/introduccion/img-01.svg', alt='Imagen decorativa')
    
    .fondo3-t3.px-md-5.px-4.py-4
      p.mb-4.text-center Por lo anterior, se invita a conocer el siguiente video que contextualiza sobre la temática a tratar:

      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
