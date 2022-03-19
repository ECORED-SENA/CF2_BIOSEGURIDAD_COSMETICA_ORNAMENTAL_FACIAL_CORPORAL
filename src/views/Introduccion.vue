<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white i          
      h1 Introducción

    .cajon-b.color-secundario.p-3.mb-5
      p.mb-0 Apreciado aprendiz le damos la bienvenida a esta experiencia de aprendizaje que surge en el marco de los lineamientos de enseñanza y aprendizaje del SENA, para iniciar le invitamos a revisar el siguiente recurso de aprendizaje.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
     
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
