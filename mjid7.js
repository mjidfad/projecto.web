
var inicio7=document.querySelector(".b-7");/*t*/
var start_7=document.querySelector(".test7");/*t*/
var start1=document.querySelector(".inicio");
var seguinete7=document.querySelector(".bb3_7");/*t*/
var list7=document.querySelector(".option-list7");/*t*/
var box7=document.querySelector(".fin7");/*t*/
var out7=document.querySelector(".exit7");/*t*/
var extra7=document.querySelector(".button7");/*t*/
var b111=document.querySelector(".b11");

var s7=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg7=localStorage.getItem("mjid7");/*t*/
 if(storg7==null){
     inicio7.className="b-7";
 }else{ inicio7.className=storg7;}})();

function mjid7() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_7.classList.add("start-test7");//add boxtest de test3
    s7=2700;
    numbe7(1);
    quest7(0);
    optiselc7();}
      //button reptir test 1

function oki1_7(){/*t*/
    box7.classList.remove("active7");
    start_7.classList.add("start-test7");
    seguinete7.classList.remove("bbb3");  
    s7=2700;
    counter=0;
    num=1;
    score=0;
    quest7(counter);
    numbe7(num);
    optiselc7();
    countdown7=setInterval(function(){setup7();},1000);}  /*t*/ 
    
    seguinete7.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions7.length-1) {
            counter++;
            num++;
            quest7(counter);
            numbe7(num);
           seguinete7.classList.remove("bbb3");}
            else{
            start_7.classList.remove("start-test7");
            fin7(); }}

    function p2_7(){/*pulsar buton home para atras*/ /*t*/
            start_7.classList.remove("start-test7");
            start1.classList.remove("star-inicio");
            s7=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest7(index){/*gunction de preguntas array*/  /*t*/
            var text7=document.querySelector(".pregunta7");
            var list7=document.querySelector(".option-list7");
           
            text7.innerHTML='<h1>'+questions7[index].question+'</h1>'; 
            list7.innerHTML='<div class="opti7"><h3>'+questions7[index].option[0]+'</h3></div>'
            +'<div class="opti7"><h3>'+questions7[index].option[1]+'</h3></div>'
            +'<div class="opti7"><h3>'+questions7[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list7.querySelectorAll(".opti7");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc7(this)"); 
            if(list7.children[i].textContent==""){
                list7.children[i].classList.add("quito7"); } }}
         

    function optiselc7(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions7[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list7.children[i].textContent==correct){list7.children[i].style="background:green;";  }
            else if(list7.children[i].textContent==""){
            list7.children[i].classList.add("quito6");}/*t*/
            else{ list7.children[i].style.background="red";list7.children[i].style.color="white"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete7.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe7(index){/*t*/
            var numbe=document.querySelector(".footer7");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions7.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto7=document.getElementById("col7");
            var fini7=document.querySelector(".finish7");
    function fin7(){/*t*/
            start_7.classList.remove("start-test7");
            box7.classList.add("active7");
              //resultado de el tirpo
var minute=44-Math.floor(s12/60); 
var second=60-s7 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out7.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions7.length +"</h1></h1></span>";
inicio7.className="green7";
fini7.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>"; 
localStorage.setItem("mjid7","green7");//poner local storge
foto7.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out7.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions7.length +"</h1></h1></span>";
inicio7.className="red7";
fini7.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>"; 
localStorage.setItem("mjid7","red7");//poner local storge
foto7.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_7(){/*t*/
    // window.location.reload();
    start_7.classList.remove("start-test7");
    start1.classList.remove("star-inicio");
    box7.classList.remove("active7");
    s7=2700;
    counter=0;
    num=1;
    score=0;
    quest7(counter);
    numbe7(num);}

/*time descont*/
     var s7=2700;
count7=document.querySelector(".timer7"),
countdown7=setInterval(function(){
setup7();},1000);/*t*/
function setup7(){/*t*/
    var minutes=Math.floor(s7/60);
        sec=s7 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count7.innerHTML=minutes+":"+sec;}
        if(s7<600){ count7.style.color="red";
                clearInterval(countdown7);
                count7.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s7>0){s7=s7-1;}
               else{
                    clearInterval(countdown7);
                    count7.innerHTML="<p style='color red'>time off</p>";
                    count7.style.background="red";
                    count7.style.color="black"; }}
     
    
    
    

var questions7=[
{question:"La forma política del Estado español es una / الشكل السياسي للدولة الإسبانية",
ansower:"monarquía parlamentaria / ملكي برلمانية",
option:[
"república federal / جمهورية فيدرالية","monarquía parlamentaria / ملكي برلمانية","monarquía federal / الملكية الفيدرالية"
]},{
question:"En la Constitución se establece la separación entre el poder ejecutivo, el legislativo y el  / ينص الدستور على الفصل بين السلطة التنفيذية والتشريعية و",
ansower:"judicial / القضائية",
option:[
"informativo /  المعلوماتية","político / السياسية","judicial / القضائية"
]},
{question:"Convocar elecciones corresponde al  / الدعوة للانتخابات يتوافق مع",
ansower:"Rey / الملك",
option:[
"presidente del Gobierno / رئيس الحكومة","Rey / الملك","Ministro de Interior / وزير الداخلية"
]},{
question:"La bandera azul con 12 estrellas amarillas en círculo es el símbolo de / العلم الأزرق مع 12 نجمة صفراء في دائرة هو رمز",
ansower:"la Unión Europea / الاتحاد الأوروبي",
option:[
"la Unión Europea / الاتحاد الأوروبي","la Comisión de Europa / المفوضية الأوروبية","la Organización de Seguridad y Cooperación en Europa / منظمة الأمن والتعاون في أوروبا"
]},
{question:"El mando superior de las Fuerzas y Cuerpos de Seguridad del Estado corresponde a / يتبع القيادة العليا لقوات وهيئات أمن الدولة",
ansower:"Ministro del Interior / وزير الداخلية",
option:[
"Ministro de Justicia / وزير العدل","Ministro del Interior / وزير الداخلية","Ministro de Defensa / وزير الدفاع"
]},{
question:"Las poblaciones de las ciudades autónomas de Ceuta y Melilla están representadas en el Congreso cada una por  يتم تمثيل سكان مدينتي سبتة ومليلية في الكونغرس من قبل",
ansower:"un diputado / نائب",
option:[
"un diputado / نائب","dos diputados / نائبان","tres diputados / ثلاثة نواب"
]},
{question:"La defensa de la integridad territorial de España corresponde a / يتوافق الدفاع عن وحدة أراضي إسبانيا مع",
ansower:"las Fuerzas Armadas / القوات المسلحة",
option:[
"la Policía Nacional y las Policías Autonómicas / الشرطة الوطنية والشرطة المستقلة","la Policía Nacional y la Guardia Civil / الشرطة الوطنية والحرس المدني","las Fuerzas Armadas / القوات المسلحة"
]},{
question:"Cómo se llaman los órganos de gobierno de la Comunidad Autónoma de Canarias? / ما هي الهيئات الإدارية لجهة الحكم الذاتي لجزر الكناري؟",
ansower:"Cabildos / مجالس الكناري",
option:[
"Cabildos / مجالس الكناري","Consejos Insulares / مجالس الجزر","Diputaciones / وفود"
]},
{question:"Cuál es el órgano de gobierno en los municipios? / ما هي الهيئة الإدارية في البلديات؟",
ansower:"El ayuntamiento / البلدية",
option:[
"Cabildo / مجلس الكناري","La diputación / وفد","El ayuntamiento / البلدية"
]},{
question:"El registro de Organizaciones No Gubernamentales para Desarrollo (ONGD) está adscrito a la / سجل المنظمات غير الحكومية للتنمية (NGDO) مرفق ب",
ansower:"Agencia Española de Cooperación / وكالة التعاون الاسبانية",
option:[
"Agencia Tributaria / وكالة الضرائب","Agencia Española de Cooperación / وكالة التعاون الاسبانية","Agencia Española de Protección de datos / وكالة حماية البيانات الإسبانية"
]},
{question:"Se puede obligar a alguien a declarar su ideología, religión o creencias / يمكن إجبار شخص ما على إعلان أيديولوجيته أو دينه أو معتقداته",
ansower:"Falso / خطأ",
option:[
"Verdadero / صحيح","Falso / خطأ",""
]},{
question:"Todos tienen derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como el deber de conservarlo / لكل فرد الحق في التمتع ببيئة مناسبة لنمو شخصه ، وكذلك واجب الحفاظ عليه",
ansower:"Verdadero / صحيح",
option:[
"Verdadero / صحيح","Falso / خطأ",""
]},
{question:"Se puede ser condenado o sancionado por acciones y omisiones que en el momento de producirse no constituían delito / يمكن إدانتك أو معاقبتك على أفعال وإغفالات لم تكن تشكل جريمة في وقت حدوثها",
ansower:"Falso / خطأ",
option:[
"Verdadero / صحيح","Falso / خطأ",""
]},{
question:"La capital de la comunidad autónoma de Cantabria es  عاصمة جهة كانتابريا المتمتع بالحكم الذاتي هي",
ansower:"Santander / سانتاندير",
option:[
"Palma de Mallorca / بالما دي مايوركا","Oviedo / أوفييدو","Santander / سانتاندير"
]},
{question:"En el centro de la península ibérica, los inviernos son fríos, los veranos calurosos y llueve poco. Este clima es  في وسط شبه الجزيرة الأيبيرية ، الشتاء بارد ، والصيف حار ، وهطول الأمطار قليل. هذا المناخ",
ansower:"Continental / قاري",
option:[
"Subtropical / شبه استوائي","Oceánico / محيطي","Continental / قاري"
]},{
question:"Cuál es la profesión de Penélope Cruz? / ما هي مهنة بينيلوبي كروز؟",
ansower:"Actriz / ممثلة",
option:[
"Actriz / ممثلة","Guitarrista /عازفة الجيتار ","Cantante / مغنية"
]},
{question:"El rey de España que gobernó la mayor extensión conocida de territorios en el mundo fue   ملك إسبانيا الذي حكم أكبر مساحة معروفة من الأراضي في العالم",
ansower:"Felipe II / فليب 2",
option:[
"Felipe II / فليب 2","Felipe III / فليب 3","Felipe IV / فليب 4"
]},{
question:"En qué año terminó la Guerra Civil española? / في أي عام انتهت الحرب الأهلية الإسبانية؟",
ansower:"1939",
option:[
"1898","1936","1939"
]},
{question:"La solicitud de nacionalidad debe presentarse en / يجب تقديم طلب الجنسية في",
ansower:"el Ministerio de Justicia / وزارة العدل",
option:[
"el Ministerio de Asuntos Exteriores, Unión Europea y Cooperación / وزارة الشؤون الخارجية والاتحاد الأوروبي والتعاون","una oficina del Registro Civil / مكتب السجل المدني","el Ministerio de Justicia / وزارة العدل"
]},{
question:"La bebida típica de Asturias es / المشروب النموذجي لأستورياس هو",
ansower:"la sidra / عصير التفاح",
option:[
"el cava / نبيد تقليدي","la cerveza / جعة","la sidra / عصير التفاح"
]},
{question:"Qué número reciben los trabajadores al comenzar su primer empleo? / ما هو العدد الذي يحصل عليه العمال عند بدء عملهم الأول؟",
ansower:"El de la Seguridad Social / الضمان الاجتماعي",
option:[
"El del pasaporte / جواز السفر","El número de servicio / رقم الخدمة","El de la Seguridad Social / الضمان الاجتماعي"
]},{
question:"Cómo se llama el establecimiento, con un horario establecido, en el que se presta la atención médica básica (medicina de familia, pediatría y enfermería)? / ما اسم المنشأة بجدول زمني محدد تقدم فيه الرعاية الطبية الأساسية (طب الأسرة وطب الأطفال والتمريض)؟",
ansower:"Centro de Salud / مركز صحي",
option:[
"Farmacia / صيدلية","Centro de Salud / مركز صحي","Hospital / مستشفى"
]},
{question:"Cómo se llama el informativo de la televisión pública Televisión Española que se ofrece en directo a las 15:00 y a las 21:00 horas? / ما اسم البرنامج الإخباري على التلفزيون العام الذي يُعرض مباشرة في الساعة 3:00 مساءً والساعة 9:00 مساءً؟",
ansower:"Telediario / نشرة الأخبار",
option:[
"Noticiario / نشرة","Telenoticias / أخبار","Telediario / نشرة الأخبار"
]},{
question:"Cuál es el sector de mayor peso en la economía española?  ما هو القطاع الأكثر ثقلًا في الاقتصاد الإسباني؟",
ansower:"Servicios / الخدمات",
option:[
"Agricultura / الزراعة","Servicios / الخدمات","Construcción / البناء"
]},
{question:"Cómo se llama el documento oficial que recoge las fechas de todos los contratos de trabajo de una persona? / ما هو اسم الوثيقة الرسمية التي تجمع تواريخ جميع عقود العمل للشخص؟",
ansower:"El informe de vida de Laboral / تقرير الحياة العمالية",
option:[
"El informe de vida de Laboral / تقرير الحياة العمالية","Recibo de finiquito / إيصال تسوية","Certificado profesionalidad / شهادة الاحتراف"
]}


];
    