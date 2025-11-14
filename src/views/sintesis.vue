<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 En este componente formativo se promueve la comprensión del papel de la comunidad como eje central en la construcción de entornos saludables y sostenibles. A través de la participación activa, la colaboración y el fortalecimiento de capacidades sociales, se busca reconocer la importancia del diálogo, la organización y la acción colectiva para identificar necesidades, generar soluciones y consolidar vínculos de confianza. Asimismo, se fomenta el desarrollo de competencias personales y comunitarias que favorecen la convivencia, el liderazgo y la gestión participativa de los procesos sociales y de salud. Desde esta perspectiva, la vigilancia en salud pública se entiende como un esfuerzo compartido que integra a las comunidades en la identificación temprana de riesgos y en la protección del bienestar colectivo, fortaleciendo el tejido social y la corresponsabilidad frente a los desafíos del territorio.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Fundamentos de la Vigilancia Basada en Comunidad, presenta la secuencia de aprendizaje del componente formativo, iniciando con el análisis participativo, donde se estudian las condiciones sociodemográficas, socioambientales y culturales de la comunidad, así como la identificación de líderes y la formulación de soluciones en salud, mediante herramientas de diagnóstico. Luego, se abordan las habilidades blandas, esenciales para el trabajo colaborativo, el liderazgo, la comunicación y la resolución de conflictos. Posteriormente, se profundiza en la construcción del tejido social, destacando estrategias para fortalecer la cohesión y la organización comunitaria. Finalmente, se estudia la vigilancia en salud pública, sus tipos y modalidades, el rol de los agentes comunitarios y la importancia de las redes como la REVCOM, que integran la participación ciudadana en la detección y respuesta ante eventos de salud.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
