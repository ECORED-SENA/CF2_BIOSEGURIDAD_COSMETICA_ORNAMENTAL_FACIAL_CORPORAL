<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Técnicas asépticas

    .cajon-b.color-secundario.p-4.mb-4(data-aos="fade-right")
      p En algunas etapas de la historia humana se han identificado diversos momentos en la relación con el concepto de asepsia, historiadores manifiestan que en la edad media se tuvo la idea que la suciedad producía una capa protectora contra las enfermedades. Durante la revolución industrial se iniciaron procesos y procedimientos de higiene que hoy son conocidos como resultado de la búsqueda de la calidad en la productividad. La implementación de procedimientos de asepsia son un mecanismo de defensa y ruptura de la cadena de transmisión de infecciones que causan enfermedades humanas. Cada método de limpieza, desinfección, esterilización ayudarán a minimizar y reducir el riesgo de contagio de infecciones.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-g.color-acento-botones.mb-5.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La asepsia es un proceso por el cual se trata de eliminar o disminuir la presencia de microorganismos que se encuentran alojados sobre objetos, superficies inanimadas, instrumental, entre otros.  Su principal objetivo es evitar que los microorganismos sobre los que se actúa se conviertan en una fuente de contaminación.
        p.mb-5 Es importante que usted entienda que al proceso de limpieza le antecede la desinfección y esterilización. Cabe mencionar que por limpieza se debe entender en el desecho de la materia orgánica de los elementos o superficies, para ello se utiliza agua y detergente. La operación de la limpieza de los materiales, equipos y otros comienza con su recepción, luego se debe clasificar según su forma y material, seguidamente se debe hacer un prelavado y lavado, esta secuencia termina con el secado. Todo ello permite pasar al proceso de sanitización y esterilización. 

      .col-lg-8.mb-5(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-11
              p.text-center En la limpieza se pueden identificar tres grandes protagonistas: el agua, el jabón y la fuerza. Le sugerimos identificar la característica de estos a continuación. 

      
      .row.mb-5.justify-content-center
        .col-12.col-lg-4.col-md-6(data-aos="fade-right").mb-3.mb-md-0
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bgr2(:style="{'background-image': `url(${require('@/assets/curso/tema3/img02.png')})`}")
              .tarjeta-flip__contenido.BG06.p-4.p-xl-5                  
                p Esta molécula es ampliamente reconocida como la fuente de vida, debido a sus componentes y los beneficios que ésta ofrece. Químicamente el agua se define como el solvente universal gracias a su estructura molecular. En los procesos de limpieza su función es fundamental a esta generar los puentes de unión entre las soluciones detergentes y la suciedad favoreciendo la remoción o desprendimiento de la superficie y facilitando la acción del detergente.
        .col-12.col-lg-4.col-md-6.mb-3.mb-md-0
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bgr2(:style="{'background-image': `url(${require('@/assets/curso/tema3/img03.png')})`}")
              .tarjeta-flip__contenido.BG06.p-4.p-xl-5                  
                p Productos sintéticos, por lo general derivados del petróleo, solubles en el agua, efectivos para la limpieza de áreas y elementos inanimados. Debido a sus componentes de afinidad grasa y con el agua se pueden crear puentes de agua que remueven la suciedad. Dentro de los productos detergentes podemos encontrar aquellos que por su PH pueden clasificarse en: 1. Jabones ácidos (ácido sulfúrico) 2. Jabones neutros y 3.  Jabones Básicos.
        .col-12.col-lg-4.col-md-6(data-aos="fade-left").mb-5
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bgr2(:style="{'background-image': `url(${require('@/assets/curso/tema3/img04.png')})`}")
              .tarjeta-flip__contenido.BG06.p-4.p-xl-5                  
                p Cuando se habla de procesos de limpieza, la fuerza hace referencia a la intensidad energética aplicada para desprender la suciedad de la superficie, tales como: 1. Fuerza centrífuga (lavadora) 2. Fuerza presión (hidrolavadoras) entre otros. En este caso para las áreas de cosmetología la fuerza aplicada depende del elemento a lavar.  Si hablamos de lencería, estas pueden ser sometidas a procedimientos en la lavadora, mientras que las superficies pueden ser a través de hidro lavadoras o remoción manual.
        p Comprendido las características de los elementos protagonistas en la limpieza, a continuación, se menciona el paso a paso de la limpieza de pisos, paredes y superficies en el contexto de la cosmetología ornamental, facial y corporal. 

    .row.BGIMG03.justify-content-center.mb-5    
      .col-lg-5(data-aos="fade-right")
        hr
        .row.justify.content-center.align-items-center
          .col-lg-2
            img.img60(src='@/assets/curso/tema3/img06.svg')
          .col-10
            p Elimine mecánicamente toda materia en las superficies y objetos se ejecuta con agua y jabón, para bajar la carga de microorganismos por medio del arrastre mecánico.
        hr
      .col-lg-5(data-aos="fade-left")
        hr
        .row.justify.content-center.align-items-center
          .col-lg-2
            img.img60(src='@/assets/curso/tema3/img07.svg')
          .col-10
            p Arrastre mecánicamente la materia orgánica utilizando varios elementos tales como: trapo, cepillo o trapeador. 
            br
        hr
      .col-lg-10.mb-4(data-aos="fade-right")
        .row.justify.content-center.align-items-center
          .col-lg-1.col-sm-10.mb-4
            img.img60(src='@/assets/curso/tema3/img08.svg')
          .col-11.col-sm-10
            p Haga la limpieza con agua y detergentes que tengan acción bactericida o germicida, para disminuir la carga de agentes patógenos o microorganismos. La limpieza en el contexto de la cosmetología se recomienda ejecutarse en los siguientes pasos:
      .col-lg-8
        .row.justify.content-center.align-items-center
          .col-lg-6.col-sm-10.mb-4(data-aos="fade-right")
            .row.BGIMG07.p-4.me-md-2
              .col-3
              .col-9
                p <br> Realice una limpieza inicialmente con el trapero húmedo para recoger el polvo y las diversas partículas.
          .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
            .row.BGIMG08.p-3
              .col-3
              .col-9
                p <br> Haga uso de dos baldes, para que en uno se mezcle el agua y jabón y en el otro sólo agua para enjuagar.      
          .col-lg-6.col-sm-10.mb-4(data-aos="fade-right")
            .row.BGIMG09.p-1.me-md-2
              .col-3
              .col-9
                p <br><br>Inicie la limpieza con los lugares más limpios y termine en los más sucios. 
                br
          .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
            .row.BGIMG10.p-3
              .col-3
              .col-9
                <br>
                p <br> Lave con agua y jabón los elementos utilizados.
                <br>
      .col-lg-10.mb-3
        <br><hr><br>
        .row.justify.content-center.align-items-center(data-aos="fade-right")
          .col-lg-1.col-sm-2.justify.content-center
            img.img60(src='@/assets/curso/tema3/img10.svg')
          .col-11.col-sm-10
            p Diligencie el formato de registro de la ejecución de procedimientos de limpieza. En este se describe el cronograma de periodicidad de prácticas de limpieza, responsable de la ejecución, productos utilizados, la fecha y el paso a paso de cómo se realizó. 

      .col-lg-6.mb-5(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
          .tarjeta.BG04.p-4
            p.text-center Las personas asignadas para que realicen el proceso de limpieza deben contar con los artículos de protección personal descritos anteriormente.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        p Comprendida la información anterior es momento de acercarse al proceso de desinfección y esterilización, los cuales hacen parte de las técnicas asépticas. Estos contribuyen a la minimización de la contaminación de superficies y elementos de trabajo, garantizando así seguridad en los procesos y procedimientos aplicados; pero ¿qué es la desinfección? Y ¿qué es la esterilización?; para responder estos interrogantes lea lo siguiente. 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.BGIMG04.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-5.mb-4
            figure
              img(src='@/assets/curso/tema3/img12.svg')
          .col-10
            h2.text-center Desinfección
            p Consiste en eliminar los microorganismos presentes en objetos u otras superficies mediante un proceso físico y químico, este último se caracteriza por el uso de productos químicos desinfectantes.
      .col-md.tarjeta.BGIMG05.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-5
            figure.mb-4
              img(src='@/assets/curso/tema3/img13.svg')
          .col-10
            h2.text-center Esterilización
            p Se define como la liberación de microorganismos de un producto o superficie. Este proceso permite la muerte de toda forma de vida microbiana, incluyendo las bacterias y las formas esporuladas altamente resistentes, como lo son los hongos, las esporas y los virus.      

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        p Es importante tener en cuenta que los productos desinfectantes a elegir deben traer en su etiquetado las especificaciones o modo de preparación y estos deben estar acorde con el tipo de área a desinfectar y las necesidades dentro de la operación, en la clasificación de #[i spaulding] se puede identificar cuáles procedimientos aplicar en la desinfección y esterilización. Tenga presente que existen factores que alteran la desinfección. Ellos son:1. Exposición a los rayos solares, 2. Mezclas con agua caliente y otros detergentes. Cuando haga uso del hipoclorito recuerde que una vez mezclado con agua fría al paso de 4 horas este pierde sus propiedades microbicidas. Entendidas estas orientaciones en el contexto de la desinfección, a continuación, se describen algunos métodos de asepsia que usted puede aplicar en su contexto laboral. 

    #MapaGroup01.row.mb-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-10
          .row.justify-content-center.bgImg02.mb-5
            .col-3
              button.EditBtn(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
                figure
                  img(src='@/assets/curso/tema3/img16.svg', alt='1A')
              .multi-collapse1.brBTN.collapse.show(data-bs-parent='#MapaGroup01')
            .col-3
              button.EditBtn(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='false' aria-controls='.multi-collapse2')
                figure
                  img(src='@/assets/curso/tema3/img17.svg', alt='2A')
              .multi-collapse2.brBTN.collapse(data-bs-parent='#MapaGroup01')
            .col-3
              button.EditBtn(data-bs-toggle='collapse' data-bs-target='.multi-collapse3' aria-expanded='false' aria-controls='.multi-collapse3')
                figure
                  img(src='@/assets/curso/tema3/img18.svg', alt='3A')
              .multi-collapse3.brBTN.collapse(data-bs-parent='#MapaGroup01')  
      .mb-0.brdbtnD1
        .multi-collapse1.row.justify-content-center.align-items-center.pb-4.collapse.show(data-bs-parent='#MapaGroup01')
          .col-md-8.mb-4.mb-md-0           
            h4 <span style="color:#483C8C !important; font-weight: bold;">Descontaminación </span>
            p Es el proceso utilizado para disminuir la carga patógena de los objetos que se encuentran supuestamente contaminados ya sea por bacterias, virus u hongos, mediante el uso de sustancias de efecto biocida. Este término engloba los siguientes procesos tanto de limpieza, esterilización como desinfección y sus niveles de desinfección.
            img(src='@/assets/curso/tema3/img19.png')
        .multi-collapse2.row.justify-content-center.align-items-center.pb-4.collapse(data-bs-parent='#MapaGroup01')
          .col-md-8.mb-4
            h4 <span style="color:#483C8C !important; font-weight: bold;">Limpieza </span>
            p Es el proceso que se realiza a los instrumentos y equipos con el fin de eliminar la suciedad, empleando métodos físicos o químicos para tal fin. Existen diferentes tipos de limpieza. <br>
            figure.mb-4
              img(src='@/assets/curso/tema3/img20.png')
            ol.lista-ol--cuadro.mb-4
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Rutinaria, es la limpieza que se realiza en forma diaria con la aplicación de las técnicas básicas de limpieza.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | General, es aquella limpieza que se realiza en profundidad en las superficies de uso cotidiano.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Terminal, es la limpieza realizada al finalizar un proceso.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Especial, aquella que se realiza en situaciones excepcionales.
            .cajon.color-primario.p-4.mb-4
              .row.justify-content-center.align-items-center
                .col-lg-11
                  p El instrumental se deberá lavar manualmente. Los instrumentos pequeños, finos y delicados tales como agujas, mangos de bisturí, cánulas, exploradores y demás instrumentos que cumplan con esta característica se recomienda lavarse con cepillos abrasivos o esponjas. 
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4
                h4 ¿Qué tipo de productos se utilizan para la limpieza?
                <br> 
                p Regularmente se usan detergentes enzimáticos y estos productos deben diluirse en agua fría o tibia para evitar la emisión de vapores y que los restos biológicos queden adheridos sobre el instrumental. Recordemos que el agua caliente coagula la sangre y es mucho más difícil de eliminar. 
              .col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/tema3/img21.svg')
              .col-lg-9
                figure.mb-4
                  img(src='@/assets/curso/tema3/img22.png')
                p.text-center Para la correcta limpieza de los aparatos e instrumental usado en la cosmetología ornamental, facial y corporal ejecute estos pasos. 
              .col-lg-12
                figure.mb-4
                  img(src='@/assets/curso/tema3/img23.svg')

        .multi-collapse3.row.justify-content-center.align-items-center.pb-4.collapse(data-bs-parent='#MapaGroup01')
          .col-md-8.mb-4
            h4 <span style="color:#483C8C !important; font-weight: bold;">Esterilización o desinfección de alto nivel </span>
            p La esterilización es un proceso por el cual se destruyen todos los microorganismos viables presentes en un objeto o superficie, incluidas las esporas bacterianas. Para lograr una correcta esterilización lo primero que se debe de realizar es la limpieza exhaustiva del material a esterilizar, que lleva a la eliminación de la suciedad visible y la materia orgánica que se encuentra alojada en una superficie u objeto, reduciendo así el número de microorganismos. 
            figure.mb-4
              img(src='@/assets/curso/tema3/img24.png')
            p.mb-4 Existen diferentes métodos para lograr la esterilización, pero la escogencia de un método dependerá de las especificaciones del fabricante quien determina si el material se si puede o no se puede reprocesar. Los métodos más usados de esterilización son físicos y químicos. Veamos sus especificaciones. 
          .col-lg-10.mb-4
            .tabla-a.color-acento-contenido.mb-5 
              table                
                thead
                  tr.text-white
                    th Tipo de esterilización
                    th Método de esterilización
                    th Ventajas
                    th Desventajas
                tbody
                  tr.BG06
                    td Físico
                    td Vapor 
                    td •No es tóxico.<br>•Rápido efecto biocida.<br>•Ciclo rápido, 20 minutos a 121ºC y a 134ºC entre 3 a 5 minutos. 
                    td •No es apto para el material termosensible.<br>•Riesgo de humedad y de oxidación.
                  tr
                    td Físico
                    td Calor Seco 
                    td •No es corrosivo.<br>•Esterilización de sustancias en polvo o no acuosas.<br>•Temperatura promedio entre 140ºC y 190ºC.
                    td Mayor tiempo de esterilización.
                  tr.BG06
                    td Físico
                    td Radiación ionizante 
                    td •Método muy eficiente en la desactivación de microorganismos.<br>•Es rápido, flexible y tiene gran capacidad de penetración en lo materiales.
                    td Solo puede ser aplicada dentro de instalación especificas con un alto nivel de seguridad.
                  tr
                    td Químico
                    td Plasma/Vapor de peróxido de hidrógeno 
                    td •Seguro para trabajadores y medio ambiente.<br>•No tóxico.<br>•Ciclos rápidos.
                    td •No procesa la celulosa, tela o líquidos.<br>•Sensible a la presencia de humedad.<br>•Contenedores especiales.
                  tr.BG06
                    td Químico
                    td Oxido de etileno 
                    td •Alta eficacia.<br>•Buena difusión y penetrabilidad.<br>•Relativamente económico.<br>•Temperatura entre 37 a 63 ºC por un tiempo entre 1 a 6 horas.
                    td •Necesita recipientes especiales y tiempo para airearse una vez culminado el ciclo.<br>•Incapaz de desactivar priones.
                  tr
                    td Químico
                    td Ozono 
                    td Esterilización de material sensible a la temperatura.
                    td Es de uso limitado.
                  tr.BG06
                    td Químico
                    td Gas/solución de formaldehído 
                    td •Alto poder germicida.<br>•No es explosivo ni inflamable en las concentraciones necesarias para esterilizar.
                    td •Altamente tóxico.<br>•Tiempo de desinfección entre 2 a 4 horas.
          .col-lg-10.mb-4.BG09
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4
                h4 Esterilización o desinfección de alto nivel 
                <br> 
                p La desinfección de alto nivel se refiere al proceso de desinfección capaz de eliminar casi todos los microorganismos, incluyendo todos los virus y hongos, el bacilo de la tuberculosis e incluso algunas endosporas. Este proceso se emplea principalmente para realizar la desinfección a los instrumentos que no pueden ser esterilizados.
                br
                h4 Almacenamiento adecuado
                <br> 
                p Cuando los objetos o instrumentos han sido desinfectados o esterilizados estos deberán de ser guardados en recipientes adecuadamente esterilizado o desinfectado por un máximo de una semana después de tratarlos.
              .col-lg-4.mb-4
                figure
                  img(src='@/assets/curso/tema3/img26.png')  
    .row.justify-content-center.BG09
      .col-lg-6.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img27.png')                                                       
      .col-lg-10.mb-4(data-aos="fade-right")
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p Ahora que se identificado la importancia de la limpieza, desinfección y esterilización como base para la prevención de la propagación de infecciones es importante tener presente que una limpieza previa adecuada reduce sustancialmente la carga de patógenos y eliminará residuos orgánicos e inorgánicos con el fin de facilitar los procesos. Si este paso se realiza de manera adecuada, contribuye positivamente para que la desinfección y esterilización sean exitosas.          



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
