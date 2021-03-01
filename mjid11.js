
var inicio11=document.querySelector(".b-11");/*t*/
var start_11=document.querySelector(".test11");/*t*/
var start1=document.querySelector(".inicio");
var seguinete11=document.querySelector(".bb3_11");/*t*/
var list11=document.querySelector(".option-list11");/*t*/
var box11=document.querySelector(".fin11");/*t*/
var out11=document.querySelector(".exit11");/*t*/
var extra11=document.querySelector(".button11");/*t*/
var b111=document.querySelector(".b11");


var s11=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg11=localStorage.getItem("mjid11");/*t*/
 if(storg11==null){
     inicio11.className="b-11";
 }else{ inicio11.className=storg11;}})();

function mjid11() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_11.classList.add("start-test11");//add boxtest de test3
    s11=2700;
    numbe11(1);
    quest11(0);
    optiselc11();}
      //button reptir test 1

function oki1_11(){/*t*/
    box11.classList.remove("active11");
    start_11.classList.add("start-test11");
    seguinete11.classList.remove("bbb3");  
    s11=2700;
    counter=0;
    num=1;
    score=0;
    quest11(counter);
    numbe11(num);
    optiselc11();
    countdown11=setInterval(function(){setup11();},1000);}  /*t*/ 
    
    seguinete11.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions11.length-1) {
            counter++;
            num++;
            quest11(counter);
            numbe11(num);
           seguinete11.classList.remove("bbb3");}
            else{
            start_11.classList.remove("start-test11");
            fin11(); }}

    function p2_11(){/*pulsar buton home para atras*/ /*t*/
            start_11.classList.remove("start-test11");
            start1.classList.remove("star-inicio");
            s11=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest11(index){/*gunction de preguntas array*/  /*t*/
            var text11=document.querySelector(".pregunta11");
            var list11=document.querySelector(".option-list11");
        
            text11.innerHTML='<h1>'+questions11[index].question+'</h1>'; 
            list11.innerHTML='<div class="opti11"><h3>'+questions11[index].option[0]+'</h3></div>'
            +'<div class="opti11"><h3>'+questions11[index].option[1]+'</h3></div>'
            +'<div class="opti11"><h3>'+questions11[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list11.querySelectorAll(".opti11");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc11(this)"); 
            if(list11.children[i].textContent==""){
                list11.children[i].classList.add("quito11"); } }}
         

    function optiselc11(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions11[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list11.children[i].textContent==correct){list11.children[i].style="background:green;";  }
            else if(list11.children[i].textContent==""){
            list11.children[i].classList.add("quito10");}/*t*/
            else{ list11.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete11.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe11(index){/*t*/
            var numbe=document.querySelector(".footer11");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions11.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto11=document.getElementById("col11");
            var fini11=document.querySelector(".finish11");
    function fin11(){/*t*/
            start_11.classList.remove("start-test11");
            box11.classList.add("active11");
            //resultado de el tirpo
var minute=44-Math.floor(s12/60); 
var second=60-s11 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out11.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions11.length +"</h1></h1></span>";
inicio11.className="green11";
fini11.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid11","green11");//poner local storge
foto11.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out11.innerHTML="<span style='color:red;' ><h1>no has probado<h1>"+ score +" de "+ questions11.length +"</h1></h1></span>";
inicio11.className="red11";
fini11.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid11","red11");//poner local storge
foto11.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_11(){/*t*/
    // window.location.reload();
    start_11.classList.remove("start-test11");
    start1.classList.remove("star-inicio");
    box11.classList.remove("active11");
    s11=2700;
    counter=0;
    num=1;
    score=0;
    quest11(counter);
    numbe11(num);}

/*time descont*/
     var s11=2700;
count11=document.querySelector(".timer11"),
countdown11=setInterval(function(){
setup11();},1000);/*t*/
function setup11(){/*t*/
    var minutes=Math.floor(s11/60);
        sec=s11 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count11.innerHTML=minutes+":"+sec;}
        if(s11<600){ count11.style.color="red";
                clearInterval(countdown11);
                count11.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s11>0){s11=s11-1;}
               else{
                    clearInterval(countdown11);
                    count11.innerHTML="<p style='color red'>time off</p>";
                    count11.style.background="red";
                    count11.style.color="black"; }}
     
    
    
    

var questions11=[
    {question:"El Tribunal Constitucional es........de los poderes del Estado / المحكمة الدستورية ........ عن سلطات الدولة",
    ansower:"independiente / مستقلة",
    option:[
    "independiente / مستقلة","dependiente / اعتمادا","subordinado / المرؤوس"
    ]},{
    question:"Cómo se llaman los órganos de gobierno de la Comunidad Autónoma de las Islas Baleares? / ما هي الهيئات الإدارية لجهة الحكم الذاتي لجزر البليار؟",
    ansower:"Consejos insulares / مجالس الجزر",
    option:[
    " Diputaciones / المجالس","Cabildos / مجالس الكناري","Consejos insulares / مجالس الجزر"
    ]},
    {question:"La política sanitaria del Gobierno corresponde al / يتوافق مع سياسة الحكومة الصحية",
    ansower:"Ministerio de Sanidad, Consumo y Bienestar Social / وزارة الصحة والاستهلاك والرعاية الاجتماعية",
    option:[
    "Ministerio de Sanidad, Consumo y Bienestar Social / وزارة الصحة والاستهلاك والرعاية الاجتماعية","Ministerio de Trabajo, Migraciones y Seguridad Social / وزارة العمل والهجرة والضمان الاجتماعي","Ministerio de Asuntos Exteriores, Unión Europea y Cooperación  وزارة الخارجية والاتحاد الأوروبي والتعاون"
    ]},{
    question:"Los diputados del Congreso son elegidos para / يتم انتخاب أعضاء الكونجرس ل",
    ansower:"4 años",
    option:[
    "3 años","4 años","5 años"
    ]},
    {question:"Cuántos ciudadanos deben respaldar una iniciativa legislativa para poder presentar una proposición de ley?  /كم عدد المواطنين الذين يجب أن يدعموا مبادرة تشريعية ليتمكنوا من تقديم مشروع قانون؟",
    ansower:"500000",
    option:[
    "400000","500000","600000"
    ]},{
    question:"Cuántos senadores se eligen en cada provincia, con excepción de las islas y Ceuta y Melilla? / كم عدد أعضاء مجلس الشيوخ المنتخبين في كل محافظة ، باستثناء الجزر وسبتة ومليلية؟",
    ansower:"4",
    option:[
    "3","4","5"
    ]},
    {question:"Cada cuántos años, como máximo, se convocan obligatoriamente elecciones generales al parlamento español? / كل كم سنة ، على الأكثر ، تكون الانتخابات العامة للبرلمان الإسباني إلزامية؟",
    ansower:"Cada 4 años",
    option:[
    "Cada 3 años","Cada 4 años","Cada 5 años"
    ]},{
    question:"El teléfono de la Administración General del Estado que ofrece información sobre empleo público, becas o ayudas y subvenciones, organismos de las Administraciones, etc., es el / رقم هاتف الإدارة العامة للدولة التي تقدم معلومات عن التوظيف العام ، والمنح الدراسية أو المنح والإعانات ، والهيئات الحكومية ، وما إلى ذلك ، هو",
    ansower:"060",
    option:[
    "010","060","091"
    ]},
    {question:"Los concejales de los ayuntamientos son elegidos por / يتم انتخاب أعضاء المجالس البلدية من قبل",
    ansower:"los vecinos del municpio / سكان البلدية",
    option:[
    "los vecinos del municpio / سكان البلدية","los alcaldes / رئساء البلديات","los representantes provinciales / ممثلي المقاطعات"
    ]},{
    question:"En España la enseñanza básica es / التعليم الأساسي في إسبانيا هو",
    ansower:"obligatoria y gratuita / إلزامي ومجاني",
    option:[
    "obligatoria y gratuita / إلزامي ومجاني","obligatoria y de pago / إلزامي ومدفوعة","Voluntaria y gratuita / طوعي ومجاني"
    ]},
    {question:"La Constitución garantiza el derecho de los españoles a una vivienda digna / يكفل الدستور حق الإسبان في السكن اللائق",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},{
    question:"La Constitución española limita el número de partidos políticos / يحدد الدستور الإسباني عدد الأحزاب السياسية",
    ansower:"Falso / خطأ",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},
    {question:"Los ciudadanos tienen el derecho a participar en los asuntos públicos, directamente o por medio de representantes, libremente elegidos en las elecciones  للمواطنين الحق في المشاركة في الشؤون العامة ، مباشرة أو من خلال ممثلين ، يتم اختيارهم بحرية في الانتخابات.",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},{
    question:"De qué comunidad autónoma forman parte Castellón, Valencia y Alicante? / ما هي الجهة المستقلة التي تنتمي إليها كاستيلون وفالنسيا وأليكانتي؟",
    ansower:"Comunidad Valenciana / جهة فالنسيا",
    option:[
    "Principado de Asturias / إمارة أستورياس"," Andalucía / الاندلس","Comunidad Valenciana / جهة فالنسيا"
    ]},
    {question:"El clima de Canarias se denomina / مناخ جزر الكناري يسمى",
    ansower:"subtropical / شبه استوائي",
    option:[
    "subtropical / شبه استوائي","mediterráneo / متوسطي"," oceánico / محيطي"
    ]},{
    question:".......es una famosa figura del pensamiento español / ....... هو شخصية مشهورة في الفكر الإسباني",
    ansower:"María Zambrano / ماريا زامبرانو",
    option:[
    "Margarita Salas / مارجريت سالاس","Montserrat Caballé / مونتسيرات كابال","María Zambrano / ماريا زامبرانو"
    ]},
    {question:"En Cataluña, es tradicional regalar un libro y una rosa el día  / في كاتالونيا ، من المعتاد إهداء كتاب ووردة في اليوم",
    ansower:"de Sant Jordi / سانت جوردي",
    option:[
    "de Sant Jordi / سانت جوردي"," de la Diada / من الديادا","del comienzo de la primavera / من بداية الربيع"
    ]},{
    question:"El Quijote de Miguel de Cervantes es una / دون كيشوت من ميغيل دي سرفانتس هو",
    ansower:"novela / رواية",
    option:[
    "ópera / أوبرا","obra de teatro / مسرحية","novela / رواية"
    ]},
    {question:"El horario de Canarias, con respecto a la Península, tiene  الجدول الزمني لجزر الكناري ، فيما يتعلق بشبه الجزيرة ، لديه",
    ansower:"Una hora menos / ساعة أقل",
    option:[
    "Una hora menos / ساعة أقل","Una hora más / ساعة اكثر","Dos horas menos / ساعتين أقل"
    ]},{
    question:"En España hay pruebas especiales para el acceso de los adultos a la universidad a partir de los / في إسبانيا ، توجد اختبارات خاصة لدخول الكبار إلى الجامعة من",
    ansower:"25 años",
    option:[
    "18 años","23 años","25 años"
    ]},
    {question:"Cuál es el canal de televisión estatal que transmite noticias de actualidad nacional e internacional continuamente? / ما هي القناة التلفزيونية الحكومية التي تبث باستمرار الأخبار المحلية والدولية؟",
    ansower:"Canal 24 horas / قناة 24 ساعة",
    option:[
    "Teledeporte / الرياضية","La 1 / الاولى","Canal 24 horas / قناة 24 ساعة"
    ]},{
    question:"La regulación del tráfico en carretera en la mayor parte del territorio español corresponde a  / يتوافق تنظيم حركة المرور على الطرق في معظم الأراضي الإسبانية",
    ansower:"la Guardia Civil / الحرس المدني",
    option:[
    "la Policía Nacional / الشرطة الوطنية","la Guardia Civil / الحرس المدني","la Policía Local / الشرطة المحلية"
    ]},
    {question:"Si compramos 250 gramos de queso, estamos comprando........de queso / إذا اشترينا 250 جرامًا من الجبن ، فإننا نشتري ........ من الجبن",
    ansower:"1/4 de kilo",
    option:[
    "1/4 de kilo","1/3 de kilo","1/2 de kilo"
    ]},{
    question:"En un coche es obligatorio el uso del cinturón de seguridad / استخدام حزام الأمان إلزامي في السيارة",
    ansower:"En todos los asientos / في جميع المقاعد",
    option:[
    "En los asientos delanteros / في المقاعد الأمامية","Solo en el asiento del conductor / في مقعد السائق","En todos los asientos / في جميع المقاعد"
    ]},
    {question:"Un acuerdo firmado entre la empresa y los representantes de los trabajadores (sindicatos) es / اتفاقية موقعة بين الشركة وممثلي العمال (النقابات) هي",
    ansower:"Un convenio colectivo / اتفاق جماعي",
    option:[
    "Un convenio colectivo / اتفاق جماعي","Un código laboral / قانون العمل"," un finiquito / مستحقات "
    ]}
    
    
    ];
       