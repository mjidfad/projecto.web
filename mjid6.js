
var inicio6=document.querySelector(".b-6");/*t*/
var start_6=document.querySelector(".test6");/*t*/
var start1=document.querySelector(".inicio");
var seguinete6=document.querySelector(".bb3_6");/*t*/
var list6=document.querySelector(".option-list6");/*t*/
var box6=document.querySelector(".fin6");/*t*/
var out6=document.querySelector(".exit6");/*t*/
var extra6=document.querySelector(".button6");/*t*/
var b111=document.querySelector(".b11");

var s6=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg6=localStorage.getItem("mjid6");/*t*/
 if(storg6==null){
     inicio6.className="b-6";
 }else{ inicio6.className=storg6;}})();

function mjid6() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_6.classList.add("start-test6");//add boxtest de test3
    s6=2700;
    numbe6(1);
    quest6(0);
    optiselc6();}
      //button reptir test 1

function oki1_6(){/*t*/
    box6.classList.remove("active6");
    start_6.classList.add("start-test6");
    seguinete6.classList.remove("bbb3");  
    s6=2700;
    counter=0;
    num=1;
    score=0;
    quest6(counter);
    numbe6(num);
    optiselc6();
    countdown6=setInterval(function(){setup6();},1000);}  /*t*/ 
    
    seguinete6.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions6.length-1) {
            counter++;
            num++;
            quest6(counter);
            numbe6(num);
           seguinete6.classList.remove("bbb3");}
            else{
            start_6.classList.remove("start-test6");
            fin6(); }}

    function p2_6(){/*pulsar buton home para atras*/ /*t*/
            start_6.classList.remove("start-test6");
            start1.classList.remove("star-inicio");
            s6=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest6(index){/*gunction de preguntas array*/  /*t*/
            var text6=document.querySelector(".pregunta6");
            var list6=document.querySelector(".option-list6");
           
            text6.innerHTML='<h1>'+questions6[index].question+'</h1>'; 
            list6.innerHTML='<div class="opti6"><h3>'+questions6[index].option[0]+'</h3></div>'
            +'<div class="opti6"><h3>'+questions6[index].option[1]+'</h3></div>'
            +'<div class="opti6"><h3>'+questions6[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list6.querySelectorAll(".opti6");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc6(this)"); 
            if(list6.children[i].textContent==""){
                list6.children[i].classList.add("quito6"); } }}
         

    function optiselc6(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions6[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
           else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list6.children[i].textContent==correct){list6.children[i].style.background="green"; }
            else if(list6.children[i].textContent==""){
            list6.children[i].classList.add("quito6");}/*t*/
            else{ list6.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete6.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe6(index){/*t*/
            var numbe=document.querySelector(".footer6");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions6.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto6=document.getElementById("col6");
            var fini6=document.querySelector(".finish6");
    function fin6(){/*t*/
            start_6.classList.remove("start-test6");
            box6.classList.add("active6");

            //resultado de el tirpo
var minute=44-Math.floor(s6/60); 
var second=60-s6 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out6.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions6.length +"</h1></h1></span>";
inicio6.className="green6";
fini6.innerHTML="<h3> tu tiempo es  00:"+minute+":"+second+"</h3>";
localStorage.setItem("mjid6","green6");//poner local storge
foto6.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out6.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions6.length +"</h1></h1></span>";
inicio6.className="red6";
fini6.innerHTML="<h3> tu tiempo es  00:"+minute+":"+second+"</h3>";
localStorage.setItem("mjid6","red6");//poner local storge
foto6.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_6(){/*t*/
    // window.location.reload();
    start_6.classList.remove("start-test6");
    start1.classList.remove("star-inicio");
    box6.classList.remove("active6");
    s6=2700;
    counter=0;
    num=1;
    score=0;
    quest6(counter);
    numbe6(num);}

/*time descont*/
     var s6=2700;
count6=document.querySelector(".timer6"),
countdown6=setInterval(function(){
setup6();},1000);/*t*/
function setup6(){/*t*/
    var minutes=Math.floor(s6/60);
        sec=s6 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count6.innerHTML=minutes+":"+sec;}
        if(s6<600){ count6.style.color="red";
                clearInterval(countdown6);
                count6.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s6>0){s6=s6-1;}
               else{
                    clearInterval(countdown6);
                    count6.innerHTML="<p style='color red'>time off</p>";
                    count6.style.background="red";
                    count6.style.color="black"; }}

var questions6=[
{question:"Una de las principales funciones del Senado es aprobar  إحدى الوظائف الرئيسية لمجلس الشيوخ هي الموافقة",
ansower:"Los Presupuestos Generales del Estado / الموازنات العامة للدولة",
option:[
"las leyes orgánicas / القوانين العضوية","Los Presupuestos Generales del Estado / الموازنات العامة للدولة","el nombramiento de los ministros / تعيين الوزراء"
]},{
question:"Los colores de la bandera de la Comunidad Autónoma de Cantabria son / ألوان علم مجتمع كانتابريا المتمتع بالحكم الذاتي هي",
ansower:"blanco y rojo / الأبيض والأحمر",
option:[
"blanco y rojo / الأبيض والأحمر","amarillo y rojo / الأصفر والأحمر","blanco y verde / أبيض وأخضر"
]},
{question:"Según la Constitución, el Estado español promueve como valores superiores de su ordenamiento jurídico, entre otros / وفقًا للدستور ، تروج الدولة الإسبانية لقيم عليا لنظامها القانوني ، من بين أمور أخرى",
ansower:"la libertad y la justicia / الحرية والعدالة",
option:[
"la igualdad y la tolerancia / المساواة والتسامح","la libertad y la justicia / الحرية والعدالة","la justicia y la prudencia / العدل والحصافة"
]},{
question:"Quiénes forman parte del Gobierno? / من هم جزء من الحكومة؟",
ansower:"Los ministros / الوزراء",
option:[
"Los ministros / الوزراء","Los alcaldes / رؤساء البلديات","Los concejales / أعضاء المجلس"
]},
{question:"El segundo período ordinario de reunión de las Cámaras es / الاجتماع العادي الثاني للغرف هو",
ansower:"de febrero a junio / فبراير إلى يونيو",
option:[
"de enero a junio / من يناير إلى يونيو","de enero a julio / من يناير إلى يوليو","de febrero a junio / فبراير إلى يونيو"
]},{
question:"Las sesiones conjuntas del Congreso y el Senado son presididas por / يترأس الجلسات المشتركة للكونغرس ومجلس الشيوخ",
ansower:"el presidente del Congreso / رئيس الكونجرس",
option:[
    "el presidente del Gobierno / رئيس الحكومة","el presidente del Congreso / رئيس الكونجرس","el Rey / الملك"
]},
{question:"La regulación del tráfico en las ciudades corresponde a la  تنظيم المرور في المدن يتوافق مع",
ansower:"Policía Local / الشرطة المحلية",
option:[
"Policía Nacional / الشرطة الوطنية","Guardia Civil / الحرس المدني","Policía Local / الشرطة المحلية"
]},{ 
question:"El Gobierno ofrece toda la información sobre novedades e iniciativas de la Administración Electrónica de España a través del / تقدم الحكومة جميع المعلومات حول أخبار ومبادرات الإدارة الإلكترونية لإسبانيا من خلال",
ansower:"PAE (Portal de Administración Electrónica) / PAE (بوابة الإدارة الإلكترونية)",
option:[
"PAE (Portal de Administración Electrónica) / PAE (بوابة الإدارة الإلكترونية)","INE (Instituto Nacional de Estadística) / INE (المعهد الوطني للإحصاء)","BOE (Boletín Oficial del Estado) / BOE (الجريدة الرسمية للدولة)"
]},
{question:"En materia de nacionalidad, inmigración, emigración, extranjería y derecho de asilo, la competencia exclusiva es de / في مسائل الجنسية والهجرة والهجرة والأجانب وحق اللجوء ، يكون الاختصاص الحصري",
ansower:"el Estado / الدولة",
option:[
"las comunidades autónomas / الجهات المستقلة","los ayuntamientos / البلديات","el Estado / الدولة"
]},{
question:"De cuántos miembros se compone el Congreso de los Diputados? / كم عدد أعضاء مجلس النواب؟",
ansower:"350",
option:[
"300","350","400"
]},
{question:"Los ciudadanos pueden proponer nuevas leyes ante el Defensor del Pueblo / يمكن للمواطنين اقتراح قوانين جديدة على أمين المظالم",
ansower:"Falso / خطأ",
option:[
"Verdadero / صحيح","Falso / خطأ",""
]},{
question:"Las penas de cárcel y las medidas de seguridad están orientadas en España hacia la reeducación y reinserción social / يتم توجيه أحكام السجن والتدابير الأمنية في إسبانيا نحو إعادة التثقيف وإعادة الإدماج الاجتماعي",
ansower:"Verdadero / صحيح",
option:[
"Verdadero / صحيح","Falso / خطأ",""
]},
{question:"Los españoles tienen la obligación de declarar los bienes que posean en el extran- jero por un valor inferior a 50.000 euros / الإسبان ملزمون بالإعلان عن الأصول التي يمتلكونها في الخارج بقيمة أقل من 50000 يورو",
ansower:"Falso / خطأ",
option:[
"Verdadero / صحيح","Falso / خطأ",""
]},{
question:"De qué comunidad autónoma es capital Sevilla? / أي جهة مستقلة هي عاصمة إشبيلية؟",
ansower:"Andalucía / الأندلس",
option:[
"Extremadura / إستريمادورا","Galicia / غاليسيا","Andalucía / الأندلس"
]},
{question:"Cuál de los siguientes ríos desemboca en territorio español? / أي من الأنهار التالية يصب في الأراضي الإسبانية؟",
ansower:"Guadalquivir / الواد الكبير",
option:[
"Duero / دويرو","Tajo / تاخو","Guadalquivir / الواد الكبير"
]},{
question:"Los personajes principales de la novela El Quijote son Don Quijote y / الشخصيات الرئيسية في رواية دون كيشوت هي دون كيشوت و",
ansower:"Sancho Panza / سانشو بانزا",
option:[
"El Cid / السيد","Sancho Panza / سانشو بانزا","Don Juan / دون جوان"
]},
{question:"En qué fecha entró en vigor el Tratado de adhesión por el que España se integró en la Comunidad Europea (hoy Unión Europea)? / في أي تاريخ دخلت معاهدة الانضمام التي انضمت إسبانيا بموجبها إلى المجموعة الأوروبية (الاتحاد الأوروبي اليوم) حيز التنفيذ؟",
ansower:"El 1 de enero de 1986 / الواحد يناير 1986",
option:[
    "El 1 de enero de 1986 / الواحد يناير 1986","El 26 de julio de 1977 / ال 26 يوليو1977","El 12 de junio de 1985 /ال 12 يونيو1977 "
]},{
question:"Qué ciudad es famosa por sus Fallas? / ما المدينة التي تشتهر بفاياس؟",
ansower:"Valencia / فالنسيا",
option:[
"Pontevedra / بونتيفيدرا ","Valencia / فالنسيا"," Segovia /سيغوفيا "
]},
{question:"A qué edad es obligatorio tener el DNI? / في أي سن اجباري الحصول على الهوية الوطنية؟  ",
ansower:"A los 14 años / في عمر 14 سنة",
option:[
"A los 18 años / في سن 18","A los 14 años / في عمر 14 سنة","A los 16 años / في سن ال 16"
]},{
question:"Cuál de las siguientes familias es una familia numerosa en España? / أي من العائلات التالية هي عائلة كبيرة في إسبانيا؟",
ansower:"Una pareja con 3 hijos / زوجان مع 3 أطفال",
option:[
" Una pareja con 1 hijo / زوجان مع طفل واحد","Una pareja con 2 hijos / زوجان مع طفلين","Una pareja con 3 hijos / زوجان مع 3 أطفال"
]},
{question:"Cuál de estos canales de comunicación es organismo público? / أي من قنوات الاتصال التالية هي هيئة عامة؟",
ansower:"Radio Nacional de España / راديو اسبانيا الوطني",
option:[
"Antena 3 TV / هوائي 3 تلفزيون","Radio Nacional de España / راديو اسبانيا الوطني"," La Cadena Ser / Ser سلسلة "
]},{
question:"En España, los propietarios de los perros deben identificar los con / في إسبانيا ، يجب على أصحاب الكلاب تحديد هوية الكلاب ب",
ansower:"un microchip / رقاقة",
option:[
    "un microchip / رقاقة","una cadena / سلسلة","un collar / عقد"
]},
{question:"El turrón y el mazapán son dulces típicos de / تورون ومارزيبان حلوى نموذجية من",
ansower:"Navidad / عيد الميلاد",
option:[
"Navidad / عيد الميلاد","San Juan / سان خوان","Semana Santa / اسبوع عيد الفصح"
]},{
question:"España exporta productos principalmente a países de  تصدر إسبانيا المنتجات بشكل رئيسي إلى دول",
ansower:"la Unión Europea / الاتحاد الأوروبي",
option:[
" el Norte de África / شمال أفريقيا"," Hispanoamérica / اميركا اللاتينية","la Unión Europea / الاتحاد الأوروبي"
]},
{question:"Cuál es el impuesto que pagan al Estado todos los consumidores al comprar productos y bienes o contratar servicios? / ما هي الضريبة التي يدفعها جميع المستهلكين للدولة عند شراء المنتجات والسلع أو التعاقد على الخدمات؟",
ansower:"IVA (Impuesto sobre el Valor Añadido) / ضريبة القيمة المضافة (ضريبة القيمة المضافة)",
option:[
"IS (Impuesto sobre Sociedades) / IS (ضريبة الشركات)","IVA (Impuesto sobre el Valor Añadido) / ضريبة القيمة المضافة (ضريبة القيمة المضافة)","IRPF (Impuesto sobre la Renta de las Personas Físicas) / IRPF (ضريبة الدخل الشخصي)"
]}
];     