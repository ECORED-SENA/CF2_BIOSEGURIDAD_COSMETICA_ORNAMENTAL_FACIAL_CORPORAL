<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Pilares de la bioseguridad

    .cajon-b.color-secundario.p-3.mb-5
      p.mb-0 Pensar en la bioseguridad es acercarnos al conjunto de disposiciones y normas orientadas a la prevención de riesgos. Su objetivo es salvaguardar la salud y la seguridad de las personas que realizan procesos de atención a clientes, especialmente promover y garantizar la salud ocupacional de los trabajadores que son expuestos a riesgos biológicos y en este caso al personal que realiza atención en cosmética ornamental, facial y corporal. La bioseguridad incluye el manejo de los riesgos potenciales generados a partir de los agentes físicos, químicos y mecánicos de normas y medidas. Dentro de los componentes de la bioseguridad se encuentran los pilares básicos, los cuales definen las características mínimas que debe cumplir la bioseguridad. Ellos son:

    .row.justify-content-center
      .col-10.BG01
        SlyderA
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-10.mb-4
              img.mb-4(src='@/assets/curso/tema1/img01.png')
              h4 Autocuidado 
              p.mb-4 Son todas las prácticas diarias en beneficio de cuidar y proteger la salud, así mismo salvaguardar la integridad física. Para alcanzar el objetivo de proteger la salud es necesario que se realice un uso adecuado de los equipos y elementos que se deben utilizar en la protección personal.
    
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-10.mb-4
              img.mb-4(src='@/assets/curso/tema1/img02.png')
              h4 Universalidad 
              p.mb-4 Se refiere a que todos aquellos individuos que estén expuestos a los agentes biológicos deben seguir y adoptar las normas universales ya que se le considera un potencial agente portador y transmisor de microorganismos patógenos. 
    
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-10.mb-4
               img.mb-4(src='@/assets/curso/tema1/img03.png')
               h4 Barreras de protección
               p.mb-4 Se consideran barreras de protección a todos aquellos elementos que protegen a las personas de la trasmisión de infecciones. Para que se generen dichas barreras de protección existen dos vías, la primera se le denomina inmunizaciones activas más comúnmente conocida como vacunas; y la segunda se le denomina elementos de protección personal o barreras físicas.  
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-10.mb-4
               img.mb-4(src='@/assets/curso/tema1/img04.png')
               h4 Medidas de eliminación
               p.mb-4 Se refiere a la forma correcta de descartar todos aquellos elementos de riesgo patológico, teniendo como prioridad la protección de las personas y por supuesto la protección y conservación del medio ambiente.
    
    .row.justify-content-center
      .col-8
        img.mb-4(src='@/assets/curso/tema1/img06.svg')
    .row.justify-content-center
      .col-10.mb-4
        p En la literatura y la experiencia del ser humano en relación con la bioseguridad se recomiendan algunas conductas. Es importante tener presente que dentro de las actividades que se desarrollan en los establecimientos de cosmética ornamental, facial y corporal hay un conjunto de medidas de precaución. A continuación, se listan algunas de ellas: 
      .col-9.BGIMG01
        .row.justify-content-center     
          .col-11.mb-4
            br
            SlyderA(tipo="b")
              .row.p-4 
                P Conservar el lugar de labores en adecuadas condiciones de higiene y aseo. Todas las condiciones referentes a la ventilación, iluminación y temperatura de las diversas zonas del establecimiento deben ser óptimas. 
              .row.p-4 
                p Toda persona que sea atendida debe ser considerada como una persona potencialmente transmisora de agentes biológicos. 
              .row.p-4 
                p Es necesario que la actividad correspondiente a la limpieza de manos sea antes y después de la atención de cada usuario. Adicional, también se debe realizar cuando se tenga contacto con algún tipo de material patógeno. Se sugiere utilizar guantes cuando sea necesario. Algunos casos son cuando hay manipulación de elementos biológicos, manejo de instrumental o de equipos contaminados. 
              .row.p-4 
                p Los elementos de protección personal deben estar almacenados en buenas condiciones, en lugar seguro y de buena accesibilidad.
              .row.p-4 
                p Contar con protocolo de limpieza, desinfección y esterilización en caso de que aplique. Es importante tener presente que se debe utilizar material de un sólo uso, sólo podrá tener más de un uso, aquellos que cuente con la indicación en la ficha técnica por parte del proveedor. 
              .row.p-4 
                p Tener el plan de gestión integral de residuos acorde con lo escrito a nivel normativo. Se debe tener presente que todas las bolsas y recipientes que contengan desechos deben ser correctamente cerradas y dirigidas al lugar que esté destinado para su almacenamiento. 
              .row.p-4 
                p Se debe poner el símbolo universal de residuo biológico en la puerta donde quede el área donde se almacenan los residuos de este tipo y demás lugares que se estimen convenientes dentro del PGIRP (Plan de Gestión Integral de Residuos Provenientes de Centros de Estética peluquerías y actividades similares)
        
    .row.justify-content-center.align-items-center.mb-4.p-4
      .col-1
      .col-6
        p En 1987 surge el sistema de precauciones universales direccionado por el Centros para el Control y la Prevención de Enfermedades (CDC), cuya intención es prevenir la transferencia y control de infecciones y patógenos que provienen de la sangre a partir de técnicas y procedimientos que protegen al personal que participa de los procesos asistenciales.  Según Francisco Álvarez, Enriqueta Faizal y Fernando Valderrama (2010) el principio de la precaución universal es que todos los pacientes y sus fluidos corporales, independientemente de su diagnóstico de ingreso o motivo por el cual haya entrado al hospital o clínica deberán ser considerados como potencialmente infectantes, y se deben tomar las precauciones necesarias para prevenir que ocurra la transmisión.  A continuación, se hará la descripción de los principios que componen las precauciones de tipo universal. 
      .col-4
        img.mb-4(src='@/assets/curso/tema1/img07.jpg')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
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
