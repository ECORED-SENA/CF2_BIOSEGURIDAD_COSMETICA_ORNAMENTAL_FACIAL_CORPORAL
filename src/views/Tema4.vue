<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Manejo de residuos hospitalarios

    .cajon-b.color-secundario.p-4.mb-4(data-aos="fade-right")
      p Es indispensable que todo generador de residuos sólidos y hospitalarios conozca, analice y cumpla con la normatividad y la legislación actual del manejo de estos residuos, sin importar su naturaleza jurídica ni su capacidad de generación. Todos estos residuos deberán depositarse de acuerdo con sus características y siguiendo el código de colores establecido para tal fin, el cual usted identificará más adelante, especialmente en el contexto de la cosmética ornamental, facial y corporal. Es importante que usted comprenda que los residuos hospitalarios, especialmente los elementos cortopunzantes suelen representar un riesgo mayor para quienes están en contacto en la cadena de uso, desecho y disposición final.

    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-g.color-primario.mb-4.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En los lugares que prestan servicios de salud y afines se realizan procesos de atención a usuarios con el uso de equipos y diversos materiales que generan residuos biológicos, químicos, farmacéuticos y radiactivos. Todos ellos originan grandes cantidades de residuos. Es por esta razón, que a partir de la emisión del Decreto 2676 de 2000 en Colombia se estructura la gestión integral de los residuos hospitalarios y similares.
        p El manejo de residuos ayudará a prevenir riesgos personales y colectivos, entendiendo por riesgos personales aquellos que afectan la integridad física y emocional de un ser humano a causa de una actividad laboral, mientras que un riesgo colectivo es un fenómeno o peligro que puede manifestarse en cualquier momento en un entorno social o natural. 
        p Conociendo las características de estos riesgos, se crean diferentes protocolos, que guían a los profesionales en buenas prácticas sobre el manejo de los residuos sanitarios. Estas prácticas tienen técnicas necesarias para su ejecución, a partir de los procedimientos de gestión interna y externa de residuos sanitarios.  
        br
        .row.BG12.justify.content-center.align-items-center.mb-4
          .col-lg-4
            img(src='@/assets/curso/tema4/img02.png' alt='AvatarTop')
          .col-lg-8.p-4
            p Para iniciar este proceso de aprendizaje, se debe entender que los residuos hospitalarios y similares se definen como elementos, insumos, materiales o instrumentos que tienen suficientes patógenos como para causar una enfermedad. Normalmente, están relacionados con fluidos corporales y sangre, resultantes de las actividades de diferentes sectores, tales como: cementerios, centros de estética y cosmetología, docencia, farmacias, mataderos, salud, tanatopraxia y veterinarios.

        p La gestión integral del manejo de residuos hospitalarios incluye una serie de pasos que van desde su generación hasta la disposición final de estos. Para esto, el generador deberá implementar, planear y ejecutar un plan de manejo que incluya procedimientos para evitar, disminuir, aprovechar y disponer adecuadamente los residuos peligrosos y no peligrosos generados en sus instalaciones. Cada organización deberá hacer su clasificación según su naturaleza, y su resultado es la identificación del tipo de residuos que genera. Según el Decreto 351 (Capítulo II, 2014), los residuos generados en la atención en salud y otras actividades se clasifican en residuos no peligrosos y peligrosos, con riesgo biológico o infeccioso.  Con la intención de que identifique esta clasificación, observe el siguiente recurso educativo. 
        br
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema4/img03.png') 

        .tarjeta.BG03.p-3(x="25.1%" y="25.2%")
          p Son los residuos producidos por el generador con características de origen infeccioso, radiactivo, químico, corrosivo, tóxico, entre otros, que representan un riesgo para la comunidad y el medio ambiente.

        .tarjeta.BG03.p-3(x="8.6%" y="49%")
          p Son residuos que representan un alto riesgo de infección, ya que pueden contener altas cargas de microorganismos patógenos, tales como virus, bacterias, hongos o parásitos.
    
        .tarjeta.BG03.p-3(x="25.1%" y="49%")
          p Son sustancias emisoras de energía predecible y continua en forma alfa, beta o de fotones, cuya interacción con materia puede dar lugar a rayos X y neutrones.

        .tarjeta.BG03.p-3(x="41.7%" y="49%")
          p Son residuos contaminados con sustancias químicas capaces de producir la muerte dependiendo de sus niveles de concentración, entre ellos se encuentran: los fármacos, los residuos derivados de tratamientos oncológicos, metales pesados (plomo, cromo, zinc, mercurio) y los aceites usados.
  
        .tarjeta.BG03.p-3(x="74.7%" y="49%")
          p Son todos los residuos que por sus características se pueden reintroducir a la cadena productiva o aquellos a los que se les puede dar un uso diferente.

        .tarjeta.BG03.p-3(x="83.1%" y="25.2%")
          p Residuos que no poseen peligrosidad o riesgo de infección o contaminación al medio ambiente o a la persona. Entre ellos: 1. Biogradables, 2. Reciclables, 3. Inertes, 4. Ordinarios.

        .tarjeta.BG03.p-3(x="91.5%" y="49%")
          p Son aquellos residuos que por sus características no puede ser aprovechados y por lo tanto debe darse una disposición final adecuada.  

        .tarjeta.BG03.p-3(x="8.6%" y="74.2%")
          p Son todos aquellos residuos provenientes de partes y/o restos humanos, como muestras de tejidos, biopsias, amputaciones, restos de cadáveres y fluidos corporales.
    
        .tarjeta.BG03.p-3(x="25.1%" y="74.2%")
          p Son todos los elementos resultantes de los procesos realizados donde el material esté contaminado con sangre o fluidos.

        .tarjeta.BG03.p-3(x="41.7%" y="74.2%")
          p Son los instrumentos que por su capacidad cortante o punzante puedan ocasionar un accidente percutáneo. Acá se encuentran las agujas, las hojas de bisturí, trocar y cuchillas.

        .tarjeta.BG03.p-3(x="58.3%" y="74.2%")
          p Son los restos de animales usados para fines de investigación, muestra o testeo, los cuales se encuentran contaminados con un agente infeccioso.
       

      .col-lg-6.mb-4
        figure
          img(src='@/assets/curso/tema3/img27.png') 
      .col-lg-10.mb-4
        p Identificados los residuos peligrosos y no peligrosos generados en las instalaciones de una organización, es importante la estructuración e implementación de un plan para la gestión integral de residuos hospitalarios y similares (PGIRH), el cual se estructura con base en dos componentes, según el Manual de procedimientos para la gestión integral de residuos hospitalarios y similares (MPGIRH) en Colombia (Ministerio del Medio Ambiente y Ministerio de Salud, 2002). Ellos son:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.BGIMG04.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-5.mb-4
            figure
              img(src='@/assets/curso/tema4/img04.png')
          .col-10
            h2.text-center Gestión interna
            p Según el Ministerio del Medio Ambiente y Ministerio de Salud (2002):
            p “Consiste en la planeación e implementación articulada de todas y cada una de las actividades realizadas al interior de la entidad generadora de residuos hospitalarios y similares” (p 32).
      .col-md.tarjeta.BGIMG05.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-5
            figure.mb-4
              img(src='@/assets/curso/tema4/img05.png')
          .col-10
            h2.text-center Gestión externa
            p Según el Ministerio del Medio Ambiente y Ministerio de Salud (2002):
            p “Es el conjunto de operaciones y actividades de la gestión de residuos que, por lo general, se realizan por fuera del establecimiento del generador, como la recolección, aprovechamiento, el tratamiento y/o disposición final”, (p.66).

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        p El plan para la gestión integral de residuos hospitalarios y similares (PGIRH) debe contar con un plan de contingencias, capacitación y socialización a sus empleados, un programa de seguridad y salud en el trabajo y cronograma de actividades. Este último debe actualizarse cada dos (2) años, si llegase a existir algún cambio que modifique la gestión de residuos, o cuando la entidad competente lo solicite.  Para establecer la cantidad de residuos generados, se lleva un registro que debe contener la siguiente información:

    .row.justify-content-center.BGIMG06.mb-4
      .col-lg-10.mb-4
        .row.justify-content-center.mb-4
          .col-lg-3
            img(src='@/assets/curso/tema4/img07.png')
          .col-lg-9.mb-4
            ol.lista-ol--cuadro.mb-4
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Peso en kilogramos de los residuos generados en cada área.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Diligenciamiento diario de los formatos establecidos para la realización de la consolidación.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Archivar estos soportes por el tiempo de 5 años.
          .col-lg-12.mb-4
            p Esta información ya diligenciada permitirá al generador identificar su clasificación de acuerdo con la cantidad de residuos peligrosos generados, siguiendo lo establecido en el Decreto 4741 de 2005.
          .col-lg-9
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Tabla 3
              span Tipo de generador.         
            .tabla-b.mb-5(data-aos="fade-right")
              .tabla-b__header.color-acento-contenido
                tr
                  th.text-white Tipo de generador 
                  td.text-white <strong>Cantidad de residuos o desechos peligrosos generados (kg/mes)</strong>                  
              table  
                caption Nota. Tomada del artículo 28, Decreto 4741 de 2005, p.14.      
                tr.BG11
                  td Gran generador 
                  td ≥1000 
                tr.BG04
                  td Mediano generador 
                  td 100 - 999  
                tr.BG11
                  td Pequeño generador 
                  td 10 - 99
                tr.BG04
                  td Microgenerador 
                  td <10 
          .col-lg-12.mb-4
            p Para realizar la planeación e implementación del plan de manejo integral de residuos hospitalarios y similares, se debe contar con un grupo administrativo de gestión sanitaria y ambiental que diseñe, ejecute y verifique la adherencia al plan de manejo; este está encabezado por un director general, uno administrativo y otro financiero, al igual que un empleado, un jefe de servicios y, por último, un representante del cuerpo médico.  Dentro de las actividades iniciales del grupo, también se establecen procesos y procedimientos especiales que garantizan el manejo integral de los residuos; estos son:
          .col-lg-6.mb-4
            figure
              img(src='@/assets/curso/tema3/img27.png')
    .row.justify-content-center
      .col-lg-10.mb-4
        LineaTiempoD.color-primario.mb-4
          .row.justify-content-center(numero="1" titulo="Diagnóstico ambiental y sanitario")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img08.png')
            .col-lg-6
              p Se debe generar la caracterización de los residuos generados, tanto de forma cualitativa como cuantitativa, llevando  control sobre las cantidades obtenidas, contando los vertimientos realizados al alcantarillado público, emisiones atmosféricas y demás residuos clasificados en el Decreto 4741 de 2005.
          .row.justify-content-center(numero="2" titulo="Programa de formación y educación")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img09.png')
            .col-lg-6
              p Ofrecer capacitaciones a todos los empleados de la empresa con el fin de garantizar el conocimiento sobre el manejo de los residuos generados en la institución, contemplando estrategias y medidas requeridas para garantizar el éxito del plan.
          .row.justify-content-center(numero="3" titulo="Segregación en la fuente")
            .col-lg-8.mb-4
              p Consiste en la separación, almacenamiento y transporte adecuado de los residuos generados al interior de la empresa. Este paso es fundamental para dar inicio al plan de manejo integral de residuos. Para la segregación de los residuos, se debe de contar con los recipientes o contenedores adecuados para evitar así que residuos no peligrosos se contaminen al tener contacto con residuos peligrosos. 
              p Para la realización de este procedimiento, se debe de cumplir con ciertas condiciones, entre ellas se encuentran:
            .col-lg-3.mb-4
              figure
                img(src='@/assets/curso/tema4/img10.png')
            .col-lg-10.BG13.mb-4
              TabsB.p-4
                .py-4.py-md-5(titulo="Separación")
                  .row.justify-content-center
                    .col-lg-6
                      p La separación correcta por características y código de colores de residuos peligrosos o no peligrosos es: 
                      br
                      a.anexo.mb-4(:href="obtenerLink('/downloads/infografia.pdf')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-pdf.svg")
                        .anexo__texto
                          p <span style="color:#006DF0 !important; font-weight: bold;">Anexo. Infografía separación.</span>
                .py-4.py-md-5(titulo="Recolección  y almacenamiento")
                  .row.justify-content-center
                    .col-lg-10
                      p Según particularidades de los residuos, si este tiene un alto porcentaje de líquido, se deberá usar bolsa antigoteo o doble bolsa, para así evitar posibles fugas, y esta no debe ser llenada más de 2/3 de su capacidad. 
                .py-4.py-md-5(titulo="Desactivados-Desinfectados")
                  .row.justify-content-center
                    .col-lg-10
                      p En el caso de residuos generados en laboratorios y material de osteosíntesis (placas, tornillos), tienen que ser desactivados-desinfectados en su lugar de generación, previo al transporte interno.
                .py-4.py-md-5(titulo="Peligrosidad")
                  .row.justify-content-center
                    .col-lg-10
                      p Si un material posee dos características de peligrosidad, deberá segregarse con la característica que posea mayor índice de peligrosidad.
                .py-4.py-md-5(titulo="Residuo anatomopatológico")
                  .row.justify-content-center
                    .col-lg-10
                      p Se debe de refrigerar a una temperatura no mayor a 4°C. Si es el resultado de procedimientos quirúrgicos o salas de parto, se trasladará al sitio de almacenamiento central inmediatamente culmine dicho procedimiento. Y si es un material líquido, en poca cantidad, se podrán aplicar sustancias gelificantes para retardar su proceso de descomposición. Pero si este representa mayor riesgo, deberá almacenarse en contenedores rígidos para evitar cualquier fuga.
                .py-4.py-md-5(titulo="Residuos cortopunzantes")
                  .row.justify-content-center
                    .col-lg-10
                      p Se depositarán en contenedores rígidos, sin capuchones en el caso de las agujas. Diligenciar adecuadamente la información solicitada en la etiqueta. Este contenedor no se llenará más de ¾ de su capacidad. Cuando esto suceda, se cerrará el contendor, asegurando su tapa para evitar accidentes, luego se deposita en una bolsa roja y se trasladará al lugar de almacenamiento central.
                .py-4.py-md-5(titulo="Residuos generados en aislamiento")
                  .row.justify-content-center
                    .col-lg-10
                      p Si se determina que hay un alto riesgo de infección y propagación por el agente infeccioso, se clasificará como residuo peligroso con riesgo biológico-infeccioso; incluso las sobras de comida, material que en otro caso sería reciclable o aprovechable, se depositarán en doble bolsa roja y se trasladaron al área de almacenamiento central, donde tendrán que ser diferenciadas de los demás residuos y llevadas a su disposición final lo antes posible.    
          .row.justify-content-center(numero="4" titulo="Desactivación")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img11.png')
            .col-lg-6
              p Todo residuo hospitalario debe desinfectarse y ser trasladado a plantas de incineración. Estos procesos de desinfección se realizan dependiendo del método con el que cuente la empresa. Para ello se podrá usar desinfección con autoclaves, calor en seco, radiación, microondas y uso de gases.
          .row.justify-content-center(numero="5" titulo="Movimiento interno de residuos")
            .col-lg-5.mb-4
              figure
                img(src='@/assets/curso/tema4/img12.png')
            .col-lg-6
              p Consiste en trasladar los residuos desde su lugar de generación hasta el sitio de almacenamiento central o interno. Este movimiento se debe realizar en las horas donde haya menos tránsito de personas, sin coincidir con movimiento de alimentos, material no contaminado o medicamentos. También se debe tener en cuenta que estos trayectos deben de ser lo más cortos posibles y no se usarán ductos para su evacuación. 
              p Según el Ministerio de Salud y Medio Ambiente (2015), este proceso se registrará minuciosamente dentro del plan de manejo integral de residuos, identificando: 
            .col-lg-11
              ol.lista-ol--cuadro.mb-4
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Frecuencias y horarios de recolección. 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Tipos de residuos a recolectar. 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Plano del establecimiento donde se identifique la ubicación de las áreas de generación de los residuos. 
          .row.justify-content-center(numero="6" titulo="Almacenamiento interno-central")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img13.png')
            .col-lg-6
              p Son sitios de depósito temporal de los residuos generados, los cuales deben estar en lugares restringidos al público. Para ello, se usarán elementos de señalización adecuada, contar con buena iluminación y ventilación, cobertura contra aguas lluvias, con paredes, techo y pisos de fácil limpieza, con equipos para apagar el fuego y evitar la entrada de roedores. 
          .row.justify-content-center(numero="7" titulo="Control de emisiones gaseosas y efluentes líquidos")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img14.png')
            .col-lg-6
              p Los residuos líquidos hospitalarios están cargados de agentes patógenos y materia orgánica, por eso, al momento de ser vertidos en un afluente, podrían llegar a causar un daño en la salud pública si no son tratados debidamente. Para esto, todo generador de dichos residuos deberá obtener los permisos y licencias establecidas para el cuidado del medio ambiente. 
          .row.justify-content-center(numero="8" titulo="Plan de contingencia")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img15.png')
            .col-lg-6
              p Como su nombre lo indica, es un plan para afrontar las situaciones adversas generadas dentro el manejo de residuos hospitalarios, tales como  incendios, inundaciones, terremotos, sismos, alteraciones del orden público y corte del suministro de energía y/o agua.
          .row.justify-content-center(numero="9" titulo="Indicadores de gestión interna")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img16.png')
            .col-lg-6
              p Es un conjunto de elementos que se establecen para la verificación del cumplimiento del plan integral para el manejo de los residuos hospitalarios. Uno de los procedimientos a realizar es el cálculo mensual de generación de residuos; para ello se usarán indicadores de destinación, capacitación, beneficios, estadísticas de accidentabilidad e indicadores de coincidencia. 
          .row.justify-content-center(numero="10" titulo="Informe y reporte a las autoridades")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img17.png')
            .col-lg-6
              p Los indicadores de gestión interna se transportan en un informe-reporte que tendrá que ser presentado a la autoridad ambiental y sanitaria, ya que representa el control y vigilancia del acatamiento de la normatividad. 
          .row.justify-content-center(numero="11" titulo="Programa de seguridad y salud el trabajador")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img18.png')
            .col-lg-6
              p El Ministerio del Trabajo, comprometido con el mejoramiento de las políticas del cuidado al trabajador, estableció el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), el cual debe ser implementado por todos los empleadores, y consiste en el desarrollo de un proceso lógico y por etapas, basado en la mejora continua, lo cual incluye la política, la organización, la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y la salud en los espacios laborales  (Ministerio del Trabajo, Decreto 1072 de 2015 Libro 2, Parte 2, Título 4, Capítulo 6).
          .row.justify-content-center(numero="12" titulo="Cronograma")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img19.png')
            .col-lg-6
              p Se tendrá un cronograma de actividades, donde se verifique el desarrollo de las actividades propuestas en el manual para la gestión integral de residuos, conteniendo información tal como actividades, los responsables y los indicadores.
          .row.justify-content-center(numero="13" titulo="Revisión y mejoramiento continuo de procesos")
            .col-lg-5
              figure
                img(src='@/assets/curso/tema4/img20.png')
            .col-lg-6
              p Se realizará un proceso de evaluación continuo para identificar si las metas planteadas en el plan de manejo se han cumplido o no, y así determinar posibles acciones de mejora dentro del proceso, lo que llevará a cumplir a cabalidad lo propuesto inicialmente. 
    
    .row.justify-content-center
      .col-lg-10.mb-4
        p Todo residuo hospitalario habrá de ser tratado para su desactivación y así realizar la disposición final de este teniendo en cuenta la normatividad y legislación vigente. Para ello, cada generador creará y efectuará un plan de limpieza y desinfección para todos los elementos, insumos, materiales y lugares que tuviesen contacto directo con los residuos, teniendo en cuenta las instrucciones y exigencias que garanticen la desactivación del material contaminado. Se cuenta con gran variedad de procesos para realizar estas actividades, entre ellos están: 
      .col-lg-10
        .row.justify-content-center.mb-4
          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/img21.png')
          .col-lg-9
            TabsA.color-acento-botones.mb-5
              .tarjeta.color-acento-botones--borde.p-4(titulo="Térmico con combustión")
                h4 Térmico con combustión
                p Utiliza energía térmica a temperaturas suficientes para causar combustión o pirólisis del residuo. (Ejemplo: pirólisis, incineración, etc.)
              .tarjeta.color-acento-botones--borde.p-4(titulo="Térmico sin combustión")
                h4 Térmico sin combustión
                p Utiliza energía térmica a temperaturas suficientes para destruir los microorganismos, pero no la suficiente para causar combustión o pirólisis del residuo. (Ejemplo: Autoclaves de calor húmedo, equipos de calor seco, microondas, infrarrojo, etc.) 
              .tarjeta.color-acento-botones--borde.p-4(titulo="Químico")
                h4 Químico
                p Utiliza desinfectantes químicos para destruir patógenos en el residuo. (Ejemplo: ácidos, álcalis, sustancias oxidantes, etc.).
              .tarjeta.color-acento-botones--borde.p-4(titulo="Por irradiación")
                h4 Por irradiación
                p Utiliza radiación para destruir patógenos en el residuo. (Ejemplo: Radiación UV, Cobalto 60, etc.)
        p Para que la gestión integral de residuos sea organizada de manera correcta, es indispensable que el personal que realiza la atención de usuarios conozca el código de colores para que de esta manera se pueda organizar adecuadamente la ubicación de los recipientes. En el año 2021 empiezan a regir nuevos códigos de colores para la separación de residuos según la Resolución 2184 de diciembre de 2019. Observe la siguiente caracterización de los colores con respecto a los objetos que se pueden depositar.

    .row.justify-content-center.align-items-center.BGIMG11.mb-2.p-0
      .col-lg-12
        <br><br><br><br>
      .col-lg-3.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img23.png' alt='AvatarTop')
          .tarjeta.BG04.p-4
            br            
            p.my-5 Color blanco será para depositar los residuos aprovechables como plástico, vidrio, metales, papel y cartón.
      .col-lg-3.d-flex.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img24.png' alt='AvatarTop')
          .tarjeta.BG04.p-4
            <br><br>
            p El color negro para depositar los residuos no aprovechables como el papel higiénico, servilletas, papeles y cartones contaminados con comida, papeles metalizados, entre otros.
      .col-lg-3.d-flex.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img25.png' alt='AvatarTop')
          .tarjeta.BG04.p-4            
            p.my-5  El color verde para depositar residuos orgánicos aprovechables como los restos de comida, desechos agrícolas, etc.
      .col-lg-7.mb-2
        p Es el código de colores que deberá ser adoptado por los municipios o distritos y permitirá facilitar la separación en los hogares y, si bien la norma no menciona cambios al manejo que debe darse a los residuos peligrosos en recipientes y bolsas rojas, dicha separación debe realizarse según la Resolución 01164 de 2002 en la que se expresa:
      .col-lg-9
        .tarjeta-avatar
            img(src='@/assets/curso/tema4/img26.png' alt='AvatarTop')
            .tarjeta.BG04.p-4
              <br><br>
              p.mb-0 El color rojo implica riesgo biológico, materiales biosanitarios o que han estado en contacto con fluidos corporales u órganos (como algodones, campos quirúrgicos, compresas, guantes, mascarillas, ropa descartable o de uso único contaminada con sangre y otros fluidos, sábanas y cobertores de mesas); anatomopatológicos, de animales, elementos cortopunzantes, radioactivos, residuos que contienen o están contaminados por radionúclidos en concentraciones o actividades superiores a los niveles de exención establecidos por la autoridad competente y para los cuales ya no se prevé ningún uso posterior; y otros como corrosivos, explosivos, inflamables, reactivos y tóxicos.
      .col-lg-12
        <br><br><br><br><br>

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        p El plan de gestión integral de residuos provenientes de centros de estética peluquerías y actividades similares PGIRP estará diseñado por los generadores, los prestadores del servicio de desactivación y especial de aseo para organizar las actividades que se requieren para dar garantía de una adecuada gestión de residuos provenientes de los prestadores que ofertan servicios en cosmética ornamental, facial y corporal. 
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-g.color-primario.mb-4.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img27.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Dentro del plan de gestión de residuos hospitalarios, es indispensable contar con la empresa que realiza el proceso de recolección de residuos. La empresa contratada debe cumplir con las funciones de recolección hasta la disposición final de los residuos (pasando por los procesos de aprovechamiento de residuos reciclables y tratamiento fuera de las instalaciones del prestador, siguiendo los lineamientos normativos.  Es importante tener presente que cuando se realiza el transporte de los residuos peligrosos de tipo infeccioso y no peligrosos para que se realice el almacenamiento central, el personal encargado de hacer esta acción interna de los residuos debe anotar en el formato Registro diario de Generación de residuos infecciosos y no peligrosos los datos: fecha de entrega, área de procedencia del residuo, cantidad en peso (Kg) y el tipo de desactivación realizada previo a su recolección interna. 
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p Es de relevancia, mencionar que el plan de gestión integral de residuos debe contar con plan de auditoría interna; así se debe tener en cuenta que las entidades de control y seguimiento podrán realizar auditorías al proceso. Es importante manifestar que se realizarán las respectivas auditorías internas estipuladas dentro del manual de bioseguridad y se deberán programar de manera eventual monitoreos aleatorios en las diversas áreas.  El proceso de auditoría tiene como objetivo revisar cada uno de los procedimientos y actividades planeadas en la gestión integral de residuos. Esto se hace con el fin de validar los resultados y establecer las medidas correctivas que se puedan generar. Esta evaluación deberá incluir la evaluación integral de todas las actividades del proceso: la segregación, el etiquetado, la manipulación y la desactivación.  

    

</template>

<script>
export default {
  name: 'Tema4',
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
