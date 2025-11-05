<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En este componente formativo se abordan los lineamientos y el protocolo nacional para la valoración de apoyos, dirigido a personas facilitadoras. Específicamente, se enfatiza en la importancia de que, durante el desarrollo del procedimiento, en las entrevistas y en la retroalimentación del informe, se tenga en cuenta el lineamiento del lenguaje y la manera de referirse a las personas con discapacidad, pues muchas veces este puede conllevar juicios y generar exclusión. Dentro de los lineamientos está también el de la accesibilidad, derecho que requiere la implementación de ajustes razonables que se constituyan en acciones afirmativas, permitiendo a la persona con discapacidad lograr la autonomía y la autodeterminación. También se reflexiona sobre el capacitismo, pues en este punto es fundamental insistir en que la valoración de apoyos no debe realizarse desde el enfoque de la deficiencia, sino que se propone un cambio de perspectiva centrado en la autonomía de las personas con discapacidad. Por último, se brindan elementos sobre la elaboración del informe de valoración y la retroalimentación a las personas con discapacidad y sus redes de apoyo.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Lineamientos y protocolo de la valoración de apoyos, integra los elementos esenciales para la elaboración de informes técnicos centrados en la persona. Aborda la planeación y los aspectos clave que orientan la estructuración del informe, garantizando coherencia, rigor y pertinencia en el proceso. Profundiza en el desarrollo de la valoración a partir de los lineamientos y del protocolo nacional, destacando el uso adecuado del lenguaje, la accesibilidad comunicativa y la reflexión sobre el capacitismo como práctica que debe evitarse. Finalmente, enfatiza la importancia de una finalización cuidadosa y una retroalimentación constructiva, que aseguren la comprensión, participación y empoderamiento de la persona con discapacidad y su red de apoyo.")
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
