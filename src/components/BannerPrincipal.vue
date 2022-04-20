<template lang="pug">
.banner-principal
  
  .container.degrade.tarjeta
    
    .row.banner-principal__row(
      :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
    )
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          img.banner-img1(:src="globalData.imagenBannerPrincipal")
          .imagen_flotante.imagen_flotante_1: img(src="@/assets/curso/flotante01.svg")
          .imagen_flotante.imagen_flotante_2: img(src="@/assets/curso/flotante02.svg")
          .imagen_flotante.imagen_flotante_3: img(src="@/assets/curso/flotante03.svg") 
          .imagen_flotante.imagen_flotante_4: img(src="@/assets/curso/flotante04.svg") 
          .imagen_flotante.imagen_flotante_5: img(src="@/assets/curso/flotante05.svg") 
          .imagen_flotante.imagen_flotante_6: img(src="@/assets/curso/flotante06.svg")   
          
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">

.banner-principal__row
  background-size: cover
  background-position: center
.banner-principal .degrade
  background: white
  background-size: 200% 200% !important
  animation: gradient 6s ease infinite
  animation-direction: alternate
@keyframes gradient
  0%
		background-position: 0% 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0% 50%



.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.contenedor-imagenes
  position: relative

.imagen_flotante
  &_1
    animation: float1 12s ease-in-out infinite
    position: absolute
    top: 0%
    left: 0%
    width: 110px
  &_2
    animation: float1 10s ease-in-out infinite
    position: absolute
    top: 58%
    left: 10%
    width: 100px
  &_3
    animation: float1 5s ease-in-out infinite
    position: absolute
    top: 56%
    left: 73%
    width: 100px

  &_4
    animation: float1 5s ease-in-out infinite
    position: absolute
    top: -5%
    right: 220%
    width: 24px

  &_5
    animation: float2 5s ease-in-out infinite
    position: absolute
    top: -5%
    right: 230%
    width: 25px

  &_6
    animation: float2 5s ease-in-out infinite
    position: absolute
    top: 85%
    right: 226%
    width: 43px


@keyframes float1
	0%
  	transform: translatex(20px)
	50%
		transform: translatex(0px)
	100%
		transform: translatex(20px)
@keyframes float2
	0%
  	transform: translatey(20px)
	50%
		transform: translatey(0px)
	100%
		transform: translatey(20px)
@keyframes float3
	0%
  	transform: translatey(0px)
	50%
		transform: translatey(-20px)
	100%
		transform: translatey(s0px)
</style>
