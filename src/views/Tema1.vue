<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Planeación y aspectos para tener en cuenta en el informe de la valoración de apoyos
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-2
          h5 Figura 1.
          span <em>Comunicación tecnológica</em>    

        .row.bg-color-5.justify-content-center.align-items-center.p-4
          .col-lg-10
            figure
              img(src='@/assets/curso/temas/tema1/img-10.svg', alt='Esta imagen muestra una ilustración estilo caricatura con dos personas interactuando, ubicada en un entorno abstracto que parece relacionado con la comunicación o la tecnología. A la izquierda, hay una persona representada como masculina, con cabello color marrón y vestido con un suéter rojo y pantalones oscuros; su postura refleja que tiene los brazos cruzados, lo que puede denotar interés o reflexión. A la derecha, se encuentra una persona representada como femenina con cabello negro voluminoso y vestida con un suéter amarillo y pantalones oscuros; sostiene una tableta electrónica de color oscuro en una mano, mientras parece estar involucrada en una actividad tecnológica. El fondo tiene un diseño minimalista con colores suaves como tonos verdes y azules, además contiene elementos gráficos como un cuadro de diálogo amarillo y uno blanco con puntos que simbolizan mensajes, pequeños engranajes verdes en el lado izquierdo y una representación de un sobre rojo con signos decorativos a la derecha. También se observa un símbolo de llamada telefónica en blanco cerca de la tableta, lo que refuerza el contexto de comunicación digital. La atmósfera de la imagen es profesional pero amigable, transmitiendo una sensación de interacción dinámica relacionada con tecnología, colaboración o aprendizaje, a través de los objetos tecnológicos y el intercambio de ideas simbolizado por los cuadros de diálogo. Los detalles adicionales, como las hojas en tonos verdes en la parte inferior y las formas abstractas y geométricas alrededor, complementan el tema visual moderno y comunicativo.', style="width: 1043px").m-auto
        
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#A8B8FF")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-02.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Desde el punto de vista procedimental y técnico, la fase de alistamiento o preparación para la realización de la valoración de apoyos es de vital importancia.
        br
        br 
        p La valoración de apoyos se centra en identificar los apoyos requeridos por cada persona, no en evaluar sus circunstancias en distintos ámbitos. Es fundamental insistir en que las personas con discapacidad son, ante todo, seres humanos y que actualmente el enfoque predominante es el del modelo social de la discapacidad. Este modelo reconoce que la persona está por encima de cualquier condición física, psíquica o sensorial.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12
        .row(data-aos="fade-down")
          .col.mb-3
            p.mb-0 El modelo social plantea que la discapacidad surge de la interacción entre una deficiencia y las barreras del entorno que limitan la autonomía. Por ello, se debe tener en cuenta lo siguiente: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-03.svg", alt="alt").img90.m-auto
          h4.text-center.mb-4.bg-color-2.text-white.p-2 Diagnóstico
          p.text-center.mb-0 Aunque conocer los diagnósticos médicos y acceder a las historias clínicas puede ser útil para una valoración adecuada, el diagnóstico por sí solo, no determina la existencia de discapacidad.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-04.svg", alt="alt").img90.m-auto
          h4.text-center.mb-4.bg-color-2.text-white.p-2 Percepción
          p.text-center.mb-0 En este sentido, la valoración debe partir de la percepción que cada persona tiene sobre su cuerpo o su mente, pero lo verdaderamente esencial es identificar las barreras que enfrenta. 
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img-05.svg", alt="alt").img90.m-auto
          h4.text-center.mb-4.bg-color-2.text-white.p-2 Ajustes
          p.text-center.mb-0 Este proceso permite establecer los ajustes razonables necesarios para que cada persona pueda expresarse libremente, tomar decisiones y participar en cualquier actividad.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="zoom-in")
        p En este contexto, es importante que quienes facilitan el proceso de valoración de apoyos conozcan el procedimiento de certificación de discapacidad, ya que puede ser una herramienta útil para orientar la valoración.
        .bloque-texto-c.color-secundario.p-3(style="background-color:#CDECEB")
          p.mb-0 De acuerdo con lo anterior, la Resolución 113 de 2020, “Por la cual se dictan disposiciones en relación con la certificación de discapacidad y el Registro de Localización y Caracterización de Personas con Discapacidad”, y su actualización, la Resolución 1197 de 2024, que deroga la Resolución 1239 de 2022, ambas expedidas por el Ministerio de Salud y Protección Social, constituyen referentes normativos clave. Estas normas abordan la discapacidad desde una perspectiva interdisciplinaria y reconocen que el punto de partida es el autorreconocimiento. Es decir, no se trata de que una tercera persona determine quién tiene o no discapacidad, sino que es cada persona quien se identifica como tal.

      .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema1/img-06.png" alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-07.svg', alt='Imagen decorativa')
      .col-lg-11
        p.mb-0(data-aos="fade-left") Además, estas resoluciones incluyen un anexo técnico que, mediante preguntas, permite identificar las barreras que enfrentan las personas en su vida cotidiana. Aunque la valoración de apoyos no tiene como objetivo clasificar la discapacidad, conocer el proceso de certificación —y especialmente este anexo— resulta fundamental para comprender que lo que se está identificando son barreras. En el marco de la valoración, esta identificación sirve para proponer ajustes razonables, ya sea en términos de accesibilidad o de apoyos personales.

    .row.no-gutters.align-items-center.mb-5.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/temas/tema1/img-08.png', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/temas/tema1/icono.svg' alt="Imagen decorativa")
        p.mb-0 Se enfatiza, finalmente, que la interdisciplinariedad es clave para una valoración adecuada. Por ello, incorporar criterios de áreas distintas a la medicina o al derecho permite ampliar la comprensión de las necesidades y las posibles respuestas ante los requerimientos de las personas con discapacidad. En última instancia, estas respuestas deben garantizar el ejercicio pleno de capacidades, orientadas a que cada persona pueda alcanzar autonomía y autodeterminación.


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
