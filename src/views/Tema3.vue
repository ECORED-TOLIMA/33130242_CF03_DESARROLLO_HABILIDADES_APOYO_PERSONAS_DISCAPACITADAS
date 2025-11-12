<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Finalización y retroalimentación del informe

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#A8B8FF")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-01.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La etapa de finalización del informe de valoración de apoyos constituye un momento clave dentro del proceso, ya que representa el cierre formal del trabajo realizado junto a la persona con discapacidad y su red de apoyo. En esta fase, se organiza y sintetiza toda la información recolectada, con el fin de elaborar un documento que refleje fielmente la realidad, las necesidades, las preferencias y el proyecto de vida de la persona valorada.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1. Aspectos para tener en cuenta en la finalización del informe

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-2
          h5 Figura 9.
          span <em>Representación de un informe</em>    

        .row.bg-color-5.justify-content-center.align-items-center.p-4
          .col-lg-10
            figure
              img(src='@/assets/curso/temas/tema3/img-18.svg', alt='La imagen muestra un diseño gráfico simple que combina dos elementos principales sobre un fondo blanco. En el centro izquierdo, se encuentra un ícono que representa un documento o una hoja de papel. Este ícono tiene bordes redondeados y su contorno es de color azul oscuro, mientras que el interior es de un azul más claro y presenta varias líneas horizontales que simulan texto escrito. A la derecha del documento, parcialmente superpuesto sobre él, se encuentra otro ícono de forma circular con bordes ondulados en color azul oscuro y relleno turquesa. Dentro de este círculo, hay un símbolo de aprobación o "me gusta", representado por una mano con el pulgar hacia arriba de color azul oscuro y detalles en naranja intenso que resaltan el diseño. La composición de la imagen transmite una sensación de claridad, simplicidad y profesionalismo, con una paleta de colores suaves y contrastantes. No hay personas ni contextos físicos presentes y la imagen parece estar diseñada para propósitos ilustrativos o educativos, como en materiales de marketing, documentos o tutoriales.', style="width: 1043px").m-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-c.bloque-texto-c.color-primario-medio.p-4
          .row.justify-content-center.align-items-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img-17.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 Teniendo en cuenta lo desarrollado en el punto anterior, es importante recordar que los usos del lenguaje, en el informe de valoración de apoyos, son claves y en ese sentido se sugiere:

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-8.mb-4(data-aos="flip-left")
        .crd_hover_txt(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-03.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-4 No usar expresiones generalizadas
            h5.t2.mb-2 No usar expresiones generalizadas
            p.mb-0 Evitar utilizar expresiones genéricas o totalizantes para todas las personas.
      .col-xl-4.col-lg-6.col-md-8.mb-4(data-aos="flip-left")
        .crd_hover_txt(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-04.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-4 No copiar información de otros informes
            h5.t2.mb-2 No copiar información de otros informes
            p.mb-0 Evitar la práctica de copiar y pegar información de otros informes para agilizar, pues esto puede conllevar a una pérdida y confusión de la información.
      .col-xl-4.col-lg-6.col-md-8.mb-4(data-aos="flip-left")
        .crd_hover_txt(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-05.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-4 No emplear lenguaje técnico o abstracto
            h5.t2.mb-2 No emplear lenguaje técnico o abstracto
            p.mb-0 Evitar un lenguaje técnico o abstracto que no permita una fácil comprensión por parte de la persona con discapacidad y su red de apoyo.

    p Asimismo, es importante recordar que el informe de valoración de apoyos constituye el momento de cierre del proceso. En él se recopila la información aportada por la persona con discapacidad y su red de apoyo durante los distintos encuentros. Se espera que este documento sea claro, coherente y ajustado a la realidad de las personas cuyas necesidades de apoyo han sido valoradas.
    p.mb-4 Es fundamental tener presente que el informe debe incluir, como mínimo, los siguientes aspectos:

    .tarjeta--BG04.p-4.px-md-5.mb-0
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-5.order-2.order-lg-1
              h4(style="color:#000 !important") Motivaciones y finalidad del informe
              p.mb-0(style="color:#000 !important") ¿Cuáles son las razones para realizar la valoración de apoyos y cuál será el posible uso del informe? En caso de que este se utilice para solicitar una adjudicación judicial de apoyos y quien la promueve no sea la persona con discapacidad, sino una tercera persona, el informe debe señalar si la persona con discapacidad está o no completamente imposibilitada para manifestar su voluntad o preferencia, conforme a lo establecido en el artículo 38 de la Ley 1996 de 2019.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4  
              figure
                img(src='@/assets/curso/temas/tema3/img-06.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h4(style="color:#000 !important") Proyecto de vida
              p.mb-0(style="color:#000 !important") Se debe describir de manera general el proyecto de vida de la persona, reflejando de forma clara e inequívoca su voluntad y preferencias.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4    
              figure
                img(src='@/assets/curso/temas/tema3/img-07.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h4(style="color:#000 !important") Decisiones prioritarias
              p.mb-0(style="color:#000 !important") Es necesario incluir, de forma organizada y según su prioridad, las decisiones o posibles actos jurídicos que requieren ser formalizados.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img-08.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h4(style="color:#000 !important") Ajustes razonables
              p.mb-0(style="color:#000 !important") A partir de la información recopilada en la valoración, se deben proponer ajustes razonables que puedan aplicarse en la formalización de los apoyos.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img-09.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h4(style="color:#000 !important") Acciones para promover la autonomía
              p.mb-0(style="color:#000 !important") Se deben señalar con claridad las acciones necesarias para fomentar la autonomía y la toma de decisiones por parte de la familia y la red de apoyo en relación con la persona con discapacidad.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img-10.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h4(style="color:#000 !important") Dificultades identificadas
              p.mb-0(style="color:#000 !important") Es relevante incluir las dificultades que hayan surgido durante el proceso de valoración, como, por ejemplo, conflictos de intereses entre las personas propuestas como apoyo y la persona con discapacidad, así como tensiones familiares, personales o sociales. Estos aspectos deben explicarse de manera clara y suficiente, dado que son elementos importantes tanto para la persona con discapacidad como para la autoridad judicial.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img-11.png', alt='Imagen decorativa')

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2. Retroalimentación del informe

    .row.justify-content-center.mb-5
      .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-3.mb-3(style="background-color:#CDECEB; border-radius:none !important")
          .row.justify-content-center.align-items-center
            .col-auto.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img-13.svg', alt='Imagen decorativa')
            .col-lg-9.col-12.mb-0.order-lg-2.order-2.mb-lg-0
              p.mb-0 Una vez se cuenta con una versión preliminar del informe de valoración de apoyos, de acuerdo con el Lineamiento y el Protocolo Nacional, es fundamental realizar una instancia de retroalimentación con la persona con discapacidad y su red de apoyo. Este momento representa el cierre del proceso, en el cual se establece un diálogo a partir de la lectura del informe, se verifica y se corrobora la información recopilada, y se procede a consolidar la versión final del documento y a suscribir las actas correspondientes.
        p Se recomienda que, durante la lectura del informe, al finalizar cada apartado se formulen preguntas orientadoras como las siguientes:
      .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img-12.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-14.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5EAFF")
            h4.text-center.mt-5(style="color:#12263F") ¿Es claro lo que se ha leído?
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-15.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5EAFF")
            h4.text-center.mt-5(style="color:#12263F") ¿Hay alguna pregunta?
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-16.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5EAFF")
            h4.text-center.mt-5(style="color:#12263F") ¿Tiene alguna sugerencia o recomendación?

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        p.text-center Con estos elementos, se espera que la persona facilitadora encargada de la valoración de apoyos pueda elaborar el informe definitivo, el cual, como se ha mencionado, debe ser validado por la persona con discapacidad.



</template>

<script>
export default {
  name: 'Tema3',
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
