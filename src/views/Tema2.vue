<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Protocolo de protección personal

    .cajon-b.color-secundario.p-4.mb-4(data-aos="fade-right")
      p Los elementos de protección personal (EPP) se definen como la indumentaria a utilizar por el personal de la salud o afines con el objetivo de crear una barrera física entre el prestador del servicio, el entorno o un elemento determinado, es decir los EPP protegen de riesgo y evitan contacto directo con material orgánico o demás elementos que puedan causar daño a las personas. Los EPP deben usarse de manera articulada con otras estrategias de prevención requeridas según el tipo de atención a realizar en el contexto de la salud y la cosmética. 
      p Sabes ¿cuáles son los tipos de riesgos que usted se puede aproximar? Lee con atención para encontrar una respuesta.  Existen trabajos que por sus condiciones exponen al trabajador a un peligro que puede generar una enfermedad o lesión. Algunos riesgos existentes son: 

    .row.justify-content-center
      .col-lg-10.BG01(data-aos="fade-right")
        SlyderA
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-lg-10.mb-4
              img.mb-4(src='@/assets/curso/tema2/img01.png')
              h4 <span style="color:#483C8C !important; font-weight: bold;"> Riesgos físicos </span> 
              p.mb-4 Es la posibilidad que existe de sufrir un daño corporal en diferentes grados de intensidad; entre los principales riesgos físicos se encuentra la exposición a diferentes temperaturas extremas (calor o frío), exposición a fuertes ruidos por tiempos prolongados, tipos de movimientos que generen vibraciones en donde se ven afectadas las articulaciones y presión arterial, el sometimiento a iluminaciones (oscuridad y deslumbramiento), radiación ionizante y no ionizante y manipulación de maquinaria pesada.
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-lg-10.mb-4
              img.mb-4(src='@/assets/curso/tema2/img02.png')
              h4 <span style="color:#483C8C !important; font-weight: bold;"> Riesgos biológicos </span> 
              p.mb-4 Son todos los que por presencia de microorganismos (bacterias, hongos, virus o parásitos) y microorganismos se puede ver afectada la salud en un entorno laboral, pueden causar enfermedad temporal, permanente y la muerte. Existen trabajos que por sus condiciones se consideran de alto riesgo biológicos estos son para los profesionales de la salud, agropecuarios y biológicos. 
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-lg-10.mb-4
              img.mb-4(src='@/assets/curso/tema2/img03.png')
              h4 <span style="color:#483C8C !important; font-weight: bold;"> Riesgos químicos </span> 
              p.mb-4 Aquellas condiciones que pueden afectar la salud de un trabajador por contacto no controlado con agentes químicos; pueden ser por inhalación, ingestión o absorción de sustancias nocivas para la salud. 
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-lg-10.mb-4
              img.mb-4(src='@/assets/curso/tema2/img04.png')
              h4 <span style="color:#483C8C !important; font-weight: bold;"> Riesgos ergonómicos </span> 
              p.mb-4 En su mayoría el riesgo ergonómico se da por posturas incorrectas en trabajos de oficina que son sedentarios o trabajos que son repetitivos en sus movimientos que con el tiempo pueden causar un gran daño y lesiones a nivel musculoesquelético y generar dolores por diferentes lesiones, también se encuentra el levantamiento excesivo de peso con o sin una técnica adecuada. 
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-lg-10.mb-4
              img.mb-4(src='@/assets/curso/tema2/img05.png')
              h4 <span style="color:#483C8C !important; font-weight: bold;"> Riesgos psicosociales </span> 
              p.mb-4 Afectan de manera notable la salud de los trabajadores y se derivan de las deficiencias en el planteamiento, la organización y la gestión del trabajo, así como de un nulo entorno social en el lugar de trabajo, todo esto puede generar resultados psicológicos, físicos y sociales negativos, como el estrés laboral, el agotamiento o la depresión en la persona; para prevenir esto es importante las pausas activas en el trabajo y respetar los horarios laborales.
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-lg-10.mb-4
              img.mb-4(src='@/assets/curso/tema2/img06.png')
              h4 <span style="color:#483C8C !important; font-weight: bold;"> Riesgos ambientales </span> 
              p.mb-4  Son todos aquellos que no se pueden controlar, probabilidad de que ocurra una catástrofe o un evento propio de la naturaleza o por acción del hombre. Existen riesgos naturales (todos aquellos riesgos geológicos) y riesgos antrópicos (aquellas circunstancias causadas por las acciones del ser humano).
          .row.justify-content-center.align-items-center.mb-4.p-4
            .col-lg-10.mb-4
              img.mb-4(src='@/assets/curso/tema2/img07.png')
              h4 <span style="color:#483C8C !important; font-weight: bold;"> Riesgos mecánicos </span> 
              p.mb-4 Conjunto de eventos que pueden causar daño a un trabajador como quemaduras, cortes, golpes, entre otros; en su mayoría se presentan por la manipulación de herramientas y vehículos. 

      .col-lg-10.mb-4(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-lg-11
              p Los elementos de protección personal son variados y dan respuesta a las diferentes actividades que se pueden desarrollar en los diversos ambientes laborales de los sectores económicos. A continuación, se realiza una descripción de los que se pueden utilizar en el sector de cosmética ornamental, facial y corporal respectivamente. 
      .col-lg-8.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img06.svg')

      .col-lg-10(data-aos="fade-right")
        SlyderB.mb-5(:datos="datosSlyder")

      .col-lg-8.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img06.svg')

      .col-lg-10.mb-4(data-aos="fade-right")
        p Dentro del proceso de atención a los usuarios, se debe garantizar el correcto uso de los elementos de protección personal, los cuales servirán como barrera de protección ante los posibles riesgos que se puedan evidenciar dentro del proceso de atención. La colocación de los elementos de protección personal sigue una secuencia previamente establecida, la cual asegura la utilización de manera adecuada, de modo tal que no afecte la realización del servicio por el operador. Es importante tener claro el riesgo al cual se encuentra expuesto por la ejecución del procedimiento, de esta manera se define qué elementos de protección se requeridos. A continuación, se muestra de manera general la secuencia de colocación y retiro de los elementos de protección posterior a la higienización de manos y con el uniforme y zapatos puestos.

  .container.tarjeta.tarjeta--blanca
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img15.svg') 

      .tarjeta.BG03.p-3(x="13%" y="96%")
        p Desde una de las manos, se toma el guante de la mano contraria y se extrae. El guante permanece en la mano que tiene aún el guante. Desde un dedo de la otra mano que quedó libre, se debe retirar el guante desde la parte interna, la que está en contacto con la piel y que, por ende, es la zona limpia. Se deben desechar en la caneca de residuos biológicos. Si la piel llegase a tocar la parte sucia de los guantes, se debe lavar las manos inmediatamente y aplicar loción desinfectante o alcohol.
    
      .tarjeta.BG03.p-3(x="24.9%" y="96%")
        p Se retira desamarrando la parte de atrás, sacando los brazos y las manos. Si es de un solo uso, enrollar siempre por la parte interna y desecharla en la caneca de residuos biológicos. Si es de varios usos, previamente, antes de retirar los guantes, debió quedar limpia.

      .tarjeta.BG03.p-3(x="37.8%" y="96%")
        p Guardarlas limpias, en el lugar designado para ello.

      .tarjeta.BG03.p-3(x="51.6%" y="96%")
        p Si es de un solo uso, desecharla, o si es reutilizable, guardar limpia en el lugar asignado.

      .tarjeta.BG03.p-3(x="63.8%" y="96%")
        p Limpiar pijama antifluido o uniforme.

      .tarjeta.BG03.p-3(x="76.6%" y="96%")
        p Retirar el calzado especializado para dicha labor -botas plásticas.

      .tarjeta.BG03.p-3(x="89.5%" y="96%")
        p Lavar muy bien las manos, antebrazo y brazo.
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-4
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right").mb-4
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img16.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Es importante tener presente que la colocación del uniforme (batas) y los zapatos, se debe realizar en el momento de ingresar al área de trabajo y el retiro debe realizarse al fin de la jornada.
            <br><br>
            p En la siguiente tabla se relacionan los elementos de protección personal a utilizar según el servicio de estética ornamental, facial y corporal. 
  
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1
      span Elementos de protección y servicios de estética
   
    table.mb-5(data-aos="fade-right")
      thead.BG07 
        tr
          th.text-white Procedimiento 
          th.text-white Gorro 
          th.text-white Protector Auditivo  
          th.text-white Gafas/ careta 
          th.text-white Mascarilla 
          th.text-white Respirador con filtro 
          th.text-white Bata/ Delantal 
          th.text-white Uniforme 
          th.text-white Guantes 
          th.text-white Zapatos  
      tbody    
        tr.BG11
          th Tratamientos faciales y corporales
          td.text-center Sí
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
        tr 
          th Maquillaje
          td.text-center No
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
        tr.BG11 
          th Procedimientos químicos (cabellos y uñas) 
          td.text-center No
          td.text-center No
          td.text-center Sí
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
        tr 
          th Corte de cabello y barbería 
          td.text-center No
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
        tr.BG11 
          th Cepillado y planchado del cabello  
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center No
          td.text-center Sí
        tr 
          th Manicura y pedicura   
          td.text-center No
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center No
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
          td.text-center Sí
  
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right").mb-4
        p Dentro del conjunto de elementos de protección personal encontramos dos rutas, disposición como residuo o reutilización. A continuación, se relaciona el elemento de protección personal y el adecuado manejo después de su uso.
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2
          span Uso y reuso de EPP.         
        .tabla-b.mb-5(data-aos="fade-right")
          .tabla-b__header.color-acento-contenido
            tr
              th.text-white Elemento de Protección Personal 
              td.text-white <strong>Reutilización EPP</strong> 
              td.text-white <strong>Descarte del Residuo</strong>
          table        
            tr.BG06
              td Gorro de tela 
              td Sí, lavado y desinfección 
              td 
            tr.BG04
              td Protector Auditivo 
              td Sí, limpieza  
              td 
            tr.BG06
              td Gafas/careta  
              td Sí, limpieza y desinfección   
              td      
            tr.BG04
              td Mascarilla   
              td   
              td Sí, Riesgo biológico (bolsa roja).
            tr.BG06
              td Respirador con filtro    
              td Sí, según recomendación del fabricante  
              td 
            tr.BG04
              td Bata/Delantal     
              td Sí, limpieza y desinfección   
              td 
            tr.BG06
              td Uniforme      
              td Sí, limpieza y desinfección   
              td 
            tr.BG04
              td Guantes      
              td  
              td Sí, riesgo biológico (bolsa roja).
            tr.BG06
              td Zapatos      
              td Sí, limpieza 
              td

      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Bata plástica y pijama antifluido',
        texto:
          'La tela antifluido, por sus características, sirve como una barrera que ayuda a rechazar las posibles partículas de líquidos. Se recomienda que sea pantalón y camisa por separado, además, un gorro para cubrir la cabeza o recoger el cabello; superpuesto a esto, debe usarse una bata o delantal plástico que cubra toda la parte delantera, desde el pecho hasta las rodillas, y que cubra por completo los brazos, por lo general, se cierra por la parte posterior de la cintura. Existen otros tipos de batas, tipo overol, que tienen cierres en la parte delantera y son completamente plásticas.',
        imagen: require('@/assets/curso/tema2/img08.png'),
      },
      {
        titulo: 'Botas plásticas o protección para calzado',
        texto:
          'Se recomienda que sean botas plásticas blancas largas, idealmente, que cubran desde la planta del pie hasta unos 2 o 3 dedos abajo de la rodilla, con esto se evitará que posibles derrames de líquidos o sangre se filtren en el calzado, además, es necesario que sean de color blanco, pues permite que siempre se evidencie la limpieza de ellas.',
        imagen: require('@/assets/curso/tema2/img09.png'),
      },
      {
        titulo: 'Gafas o careta plástica',
        texto:
          'Es normal que existan salpicaduras o derrames de fluidos corporales, por ello se debe cubrir el rostro y sobre todo los ojos, que deben ser aislados con este tipo de elementos para evitar infecciones.',
        imagen: require('@/assets/curso/tema2/img10.png'),
      },
      {
        titulo: 'Protección respiratoria',
        texto:
          'Es fundamental tener siempre tapabocas especializados para la protección, porque existen micropartículas de elementos patógenos que se albergan en el aire y penetran a través de la respiración. Se recomienda el uso de mascarillas tipo N95.<br><br>Deben quedar bien ajustados ubicándolos alrededor de la cabeza, cuello u orejas, según su forma. Lo más importante es que cubra por completo las vías respiratorias, desde el tabique de la nariz hasta la barbilla.',
        imagen: require('@/assets/curso/tema2/img11.png'),
      },
      {
        titulo: 'Guantes',
        texto:
          'Se recomienda que sean de material resistente, como el nitrilo o la goma. Los de látex no se recomiendan para el uso funerario, pues el material es poroso, lo que genera que el líquido o pequeñas partículas se filtren más rápido. Se usan para cubrir por completo la mano y los dedos hasta hacer contacto con el área de la muñeca que aísla la bata, protegiendo así por completo las extremidades superiores. Se tienen que cambiar cuando se rompan.',
        imagen: require('@/assets/curso/tema2/img12.png'),
      },
      {
        titulo: 'Tapón auditivo',
        texto:
          'Este elemento es para la protección auditiva, su uso se recomienda para prácticas o procedimientos con equipos que generen ruido.<br><br> <strong> Nota.</strong> El material del tapón se encuentre fabricado con espuma o silicona.',
        imagen: require('@/assets/curso/tema2/img13.png'),
      },
      {
        titulo: 'Gorro',
        texto:
          'Este elemento tiene como función recoger el cabello, evitando así contaminación en doble vía. Estos pueden ser desechables o de tela repelente/antimicrobiana.',
        imagen: require('@/assets/curso/tema2/img14.png'),
      },
    ],
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
