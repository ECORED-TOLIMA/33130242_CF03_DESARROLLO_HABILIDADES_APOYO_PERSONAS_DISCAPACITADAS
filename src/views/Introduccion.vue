<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
  
    .row.justify-content-center.align-items-end.mb-4
      .col-lg-9.order-lg-1.order-2
        p(data-aos="fade-left") Seguramente, en la labor como persona facilitadora de las valoraciones de apoyo, surgen las preguntas: 
        .tarjeta.tarjeta--BGC02.p-2.mb-4
          .col
            ul.lista-ul--color.mb-0
              li.d-flex.align-items-start
                i.fas.fa-user
                p.mb-0 #[b ¿Cuál es la forma más adecuada de referirse a las personas con discapacidad?] 
              li.d-flex.align-items-start
                i.fas.fa-user
                p.mb-0 #[b ¿Qué lineamientos específicos deben tenerse en cuenta para llevar a cabo la valoración de apoyos?] 
              li.d-flex.align-items-start
                i.fas.fa-user
                p.mb-0 #[b ¿Existe un protocolo específico relacionado con este proceso?] 
              li.d-flex.align-items-start
                i.fas.fa-user
                p.mb-0 #[b ¿Qué aspectos tener en cuenta en la entrevista y la retroalimentación del informe con respecto a dichos lineamientos?] 
        .row.align-items-end.justify-content-center
          .col-lg-9.order-lg-1.order-2
            .bloque-texto-c.color-primario-oscuro.p-4(data-aos="fade-left")
              p.mb-0 Las respuestas a estas preguntas se encuentran en el presente componente formativo, el cual constituye un elemento clave para el desarrollo de dicha labor. La forma en que se nombra a las personas con discapacidad, desde el lenguaje, puede incidir directamente en la generación de dinámicas de discriminación o exclusión. Por ello, también será necesario identificar las barreras presentes en el entorno, con el fin de evaluar el nivel de accesibilidad y aplicar los ajustes razonables y las acciones afirmativas que garanticen el ejercicio pleno de los derechos. Así, en el proceso de valoración de apoyos, incluyendo la entrevista y retroalimentación del informe, es fundamental tener en cuenta estos lineamientos de lenguaje y accesibilidad.
          .col-lg-3.col-md-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4.px-0(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/introduccion/img-02.svg" alt="Imagen decorativa")
      .col-lg-3.col-md-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/introduccion/img-01.png" alt="Imagen decorativa")
              
    p Finalmente, se aborda el informe de valoración de apoyos, documento que sintetiza el proceso realizado y que debe ser construido, retroalimentado y validado por la propia persona con discapacidad. Esto se debe a que, en última instancia, será a quien se dirijan los apoyos, en favor de su autonomía, autodeterminación y accesibilidad.
    p.mb-5 Por lo anterior, se invita a conocer el siguiente video:

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
