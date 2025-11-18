<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 6
      h1 Red de Vigilancia Epidemiológica Basada en Comunidad (REVCOM)

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema6/img-01.png', alt='Imagen decorativa')
    
    .bg-full-width.bg-color-6
      .px-4.px-md-5
        .row.justify-content-center.mb-4(data-aos="fade-left")
          .col-lg-2.col-4.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img-02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p Es el eje en el que la comunidad se enlaza a la estrategia de Vigilancia Basada en Comunidad. Esta se orienta a integrar a las comunidades en la vigilancia de la salud pública mediante la participación de sus miembros, a través de la identificación, monitoreo y reporte de situaciones de interés en salud pública. La REVCOM promueve el empoderamiento comunitario y la movilización social para prevenir las condiciones que pueden afectar la salud de la población. Esta red aprovecha el conocimiento local y las relaciones en la comunidad, capacitando a sus miembros para actuar como "vigías" o "gestores" comunitarios, facilitando la identificación temprana de problemas de salud pública y asegurando una respuesta rápida y efectiva.
            p.mb-0 Sus objetivos principales son:
          
        ul.lista-ul--color.mb-5
          li.d-flex
            i.fas.fa-user.bg-color-3
            p.mb-0 Fortalecer la vigilancia comunitaria mediante la participación directa de líderes, familias y organizaciones locales.
          li.d-flex
            i.fas.fa-user.bg-color-3
            p.mb-0 Detectar de manera temprana eventos o situaciones que puedan afectar la salud colectiva, como brotes, enfermedades transmisibles, desastres o factores ambientales.
          li.d-flex
            i.fas.fa-user.bg-color-3
            p.mb-0 Establecer canales de comunicación efectivos entre la comunidad y las entidades de salud para mejorar la respuesta frente a emergencias sanitarias.
          li.d-flex
            i.fas.fa-user.bg-color-3
            p.mb-0 Fomentar el empoderamiento social, impulsando la corresponsabilidad en la prevención y el cuidado de la salud.
          li.d-flex
            i.fas.fa-user.bg-color-3
            p.mb-0 Consolidar redes locales de apoyo que favorezcan la cooperación entre instituciones, organizaciones y la ciudadanía.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-8.col-12
        .bg-color-7.p-4
          p.mb-0.text-center De igual manera, se deben tener en cuenta, las siguientes estrategias de implementación: 

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img-03.svg' alt='AvatarTop')
          h4.text-center Capacitación y sensibilización comunitaria
          p.mb-0 Formación continua de actores locales para identificar signos de alerta, reportar casos y participar en acciones preventivas.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img-04.svg' alt='AvatarTop')
          h4.text-center Articulación interinstitucional
          p.mb-0 Coordinación entre autoridades de salud, instituciones educativas, organizaciones sociales y gobiernos locales para garantizar apoyo técnico y logístico.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img-05.svg' alt='AvatarTop')
          h4.text-center Uso de herramientas tecnológicas y de comunicación
          p.mb-0 Implementación de aplicaciones, líneas telefónicas o medios comunitarios para reportar información sanitaria.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img-06.svg' alt='AvatarTop')
          h4.text-center Promoción de la acción colectiva
          p.mb-0 Desarrollo de jornadas de salud, campañas educativas y actividades de movilización social orientadas al bienestar común.
        .tarjeta.tarjeta--BGC02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema6/img-07.svg' alt='AvatarTop')
          h4.text-center Retroalimentación constante
          p.mb-0 Devolución de la información recolectada a la comunidad para fortalecer la confianza y la participación sostenida.



</template>

<script>
export default {
  name: 'Tema6',
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
