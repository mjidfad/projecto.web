
var inicio5=document.querySelector(".b-5");/*t*/
var start_5=document.querySelector(".test5");/*t*/
var start1=document.querySelector(".inicio");
var seguinete5=document.querySelector(".bb3_5");/*t*/
var list5=document.querySelector(".option-list5");/*t*/
var box5=document.querySelector(".fin5");/*t*/
var out5=document.querySelector(".exit5");/*t*/
var extra5=document.querySelector(".button5");/*t*/
var b111=document.querySelector(".b11");

var s5=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg5=localStorage.getItem("mjid5");/*t*/
 if(storg5==null){
     inicio5.className="b-5";
 }else{ inicio5.className=storg5;}})();

function mjid5() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_5.classList.add("start-test5");//add boxtest de test3
    s5=2700;
    numbe5(1);
    quest5(0);
    optiselc5();}
      //button reptir test 1

function oki1_5(){/*t*/
    box5.classList.remove("active5");
    start_5.classList.add("start-test5");
    seguinete5.classList.remove("bbb3");  
    s5=2700;
    counter=0;
    num=1;
    score=0;
    quest5(counter);
    numbe5(num);
    optiselc5();
    countdown5=setInterval(function(){setup5();},1000);}  /*t*/ 
    
    seguinete5.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions5.length-1) {
            counter++;
            num++;
            quest5(counter);
            numbe5(num);
           seguinete5.classList.remove("bbb3");}
            else{
            start_5.classList.remove("start-test5");
            fin5(); }}

    function p2_5(){/*pulsar buton home para atras*/ /*t*/
            start_5.classList.remove("start-test5");
            start1.classList.remove("star-inicio");
            s5=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest5(index){/*gunction de preguntas array*/  /*t*/
            var text5=document.querySelector(".pregunta5");
            var list5=document.querySelector(".option-list5");
           
            text5.innerHTML='<h1>'+questions5[index].question+'</h1>'; 
            list5.innerHTML='<div class="opti5"><h3>'+questions5[index].option[0]+'</h3></div>'
            +'<div class="opti5"><h3>'+questions5[index].option[1]+'</h3></div>'
            +'<div class="opti5"><h3>'+questions5[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list5.querySelectorAll(".opti5");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc5(this)"); 
            if(list5.children[i].textContent==""){
                list5.children[i].classList.add("quito5"); } }}
         

    function optiselc5(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions5[counter].ansower;
            var allopcion=list5.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
            else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list5.children[i].textContent==correct){list5.children[i].style.background="green"; }
            else if(list5.children[i].textContent==""){
            list5.children[i].classList.add("quito5");}/*t*/
            else{ list5.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete5.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe5(index){/*t*/
            var numbe=document.querySelector(".footer5");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions5.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto5=document.getElementById("col5");
            var fini5=document.querySelector(".finish5");
    function fin5(){/*t*/
            start_5.classList.remove("start-test5");
            box5.classList.add("active5");
//resultado de el tirpo
var minute=44-Math.floor(s12/60); 
var second=60-s5 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if (score>=15) {
out5.innerHTML="<span style='color:green;' ><h1>genial. has probado<h1>"+ score +" de "+ questions5.length +"</h1></h1></span>";
inicio5.className="green4";
fini5.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid5","green5");//poner local storge
foto5.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out5.innerHTML="<span style='color:red;' ><h1>no has probado<h1>"+ score +" de "+ questions5.length +"</h1></h1></span>";
inicio5.className="red5";
fini5.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid5","red5");//poner local storge
foto5.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_5(){/*t*/
    // window.location.reload();
    start_5.classList.remove("start-test5");
    start1.classList.remove("star-inicio");
    box5.classList.remove("active5");
    s5=2700;
    counter=0;
    num=1;
    score=0;
    quest5(counter);
    numbe5(num);}

/*time descont*/
     var s5=2700;
count5=document.querySelector(".timer5"),
countdown5=setInterval(function(){
setup5();},1000);/*t*/
function setup5(){/*t*/
    var minutes=Math.floor(s5/60);
        sec=s5 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count5.innerHTML=minutes+":"+sec;}
        if(s5<600){ count5.style.color="red";
                clearInterval(countdown5);
                count5.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s5>0){s5=s5-1;}
               else{
                    clearInterval(countdown5);
                    count5.innerHTML="<p style='color red'>time off</p>";
                    count5.style.background="red";
                    count5.style.color="black"; }}
     
    
    
    
 var questions5=[
{question:"La Constitución reconoce y garantiza el derecho a la autonomía de las nacionalidades regiones que integran España y la......entre todas ellas / يعترف الدستور ويضمن الحق في الاستقلال الذاتي للقوميات والمناطق التي تتكون منها إسبانيا و......من بينها جميعًا",
ansower:"solidaridad / التكافل",
option:[
 "solidaridad / التكافل","fraternidad / الأخوة","igualdad / المساواة"
]},{
question:"Las competencias en materia de educación están gestionadas por / الكفاءات في التعليم تدار من قبل",
ansower:"las comunidades autónomas / الجهات المستقلة",
option:[
"los ayuntamientos / البلديات","las comunidades autónomas / الجهات المستقلة","el Estado / الدولة"
]},{
question:"El poder ejecutivo corresponde / تتوافق السلطة التنفيذية",
ansower:"Al presidente del Gobierno y ministros / إلى رئيس الحكومة والوزراء",
option:[
 "A los jueces y magistrados / للقضاة وقضاة الصلح","Al presidente del Gobierno y ministros / إلى رئيس الحكومة والوزراء","A los diputados y senadores / للنواب وأعضاء مجلس الشيوخ"
]},{
question:"Los presupuestos generales del Estado son presentados por el Gobierno y aprobados por  / يتم تقديم الموازنات العامة للدولة من قبل الحكومة والموافقة عليها من قبل",
ansower:"el Congreso de los Diputados / مجلس النواب",
option:[
"el Rey / الملك","el Congreso de los Diputados / مجلس النواب","el ministro de Economía y Competitividad / وزير الاقتصاد والتنافسية"
]},{
question:"El primer período ordinario de reunión de las Cámaras es / أول اجتماع عادي للغرف هو",
ansower:"de septiembre a diciembre / من سبتمبر إلى ديسمبر",
option:[
 "de septiembre a diciembre / من سبتمبر إلى ديسمبر","de septiembre a noviembre / من سبتمبر إلى نوفمبر","de agosto a noviembre / من أغسطس إلى نوفمبر"
]},{
question:"El órgano con funciones de gobierno del poder judicial es el / الهيئة الإدارية للسلطة القضائية هي",
ansower:"Consejo General del Poder Judicial / المجلس العام للقضاء",
option:[
"Ministerio de Justicia / وزارة العدل","Tribunal Supremo / المحكمة العليا","Consejo General del Poder Judicial / المجلس العام للقضاء"
]},{
question:"A quién informa de su gestión el Defensor del Pueblo?  إلى من يقدم محقق الشكاوى؟",
ansower:"A las Cortes Generales / المحاكم العامة",
option:[
 "Al Rey / إلى الملك","A las Cortes Generales / المحاكم العامة","Al presidente del Gobierno / لرئيس الوزراء"
]},{
question:"El organismo que elabora y difunde estadísticas sobre España es / الهيئة التي تنتج وتنشر الإحصاءات عن إسبانيا هي",
ansower:"el Instituto Nacional de Estadística / المعهد الوطني للإحصاء",
option:[
"el Instituto Nacional de Estadística / المعهد الوطني للإحصاء","el Consejo Económico y Social / المجلس الاقتصادي والاجتماعي","la Agencia Tributaria / مصلحة الضرائب"
]},{
question:"El Ayuntamiento está formado por el alcalde y / يتكون مجلس المدينة من رئيس البلدية و",
ansower:"los concejales / المستشارين",
option:[
 "los diputados / النواب","los concejales / المستشارين","los senadores / أعضاء مجلس الشيوخ"
]},{
question:"Los españoles pueden votar a partir de los / يمكن للإسبان التصويت من",
ansower:"18 años",
option:[
"16 años","18 años","20 años"    
]},{
question:"La educación infantil (de 3 a 6 años) es obligatoria / التعليم في مرحلة الطفولة المبكرة (من 3 إلى 6 سنوات) إلزامي",
ansower:"Falso / خطأ",
option:[
 "Verdadero / صحيح","Falso / خطأ",""
]},{
question:"Se reconoce la autonomía de las Universidades en los términos que establezca la ley / يتم الاعتراف باستقلالية الجامعات في الشروط التي ينص عليها القانون",
ansower:"Verdadero / صحيح",
option:[
"Verdadero / صحيح","Falso / خطأ",""
]},{
question:"En España no está reconocido el derecho de asociación  حق تكوين الجمعيات غير معترف به في إسبانيا",
ansower:"Falso / خطأ",
option:[
 "Verdadero / صحيح ","Falso / خطأ",""
]},{
question:"La capital de la comunidad autónoma de Extremadura es  عاصمة إقليم إكستريمادورا المتمتع بالحكم الذاتي هي",
ansower:"Mérida / ميريدا",
option:[
"Badajoz / بدخوس","Cáceres / كاسيريس","Mérida / ميريدا"
]},{
question:"En qué ciudad se encuentra situada la sede del gobierno de la comunidad autónoma del País Vasco? / في أي مدينة يقع مقر حكومة منطقة الحكم الذاتي في إقليم الباسك؟",
ansower:"Vitoria / فيتوريا",
option:[
 "Bilbao / بلباو","Vitoria / فيتوريا","San Sebastián / القديس سيباستيان"
]},{
question:".......es responsable de los bienes del Estado que pertenecían a la Corona española /...... مسؤول عن أصول الدولة التي تخص التاج الإسباني",
ansower:"Patrimonio Nacional / التراث الوطني",
option:[
"Patrimonio Nacional / التراث الوطني","Patrimonio Real / التراث الملكي","Patrimonio Universal / التراث العالمي"
]},{
question:"Francisco de Goya era un famoso......español / كان فرانسيسكو دي جويا إسبانيًا مشهورًا .......",
ansower:"pintor / رسام",
option:[
 "pintor / رسام","músico / موسيقي","escritor / كاتب"
]},{
question:"Los premios Goya están relacionados con / ترتبط جوائز جويا بـ",
ansower:"el cine / السينما",
option:[
"el cine / السينما","la pintura / الرسم","la literatura / الأدب"
]},{
question:"Cuál es la tasa máxima de alcohol permitida a los conductores, en gramos por litro? / ما هو الحد الأقصى لمستوى الكحول المسموح به للسائقين بالجرام للتر؟",
ansower:"0,5",
option:[
 "0,5","0,9","0,7"
]},{
question:"Qué comida típica española tiene como principal ingrediente el tomate? / ما هو الطعام الإسباني النموذجي الذي يحتوي الطماطم كمكون رئيسي؟",
ansower:"El gazpacho / غازباتشو",
option:[
"El cocido / المطبوخ","El gazpacho / غازباتشو","La paella / الباييلا"
]},{
question:"Cómo se denomina la resolución de la Dirección Nacional de Empleo por la que se fijan anualmente las fiestas laborables para cada año? / ما هو اسم قرار مديرية التشغيل الوطنية الذي بموجبه تحدد إجازات العمل سنويا عن كل عام؟",
ansower:"Calendario laboral / تقويم العمل",
option:[
 "Calendario español / التقويم الاسباني","Calendario laboral / تقويم العمل","Calendario fiscal / التقويم المالي"
]},{
question:"Cuál de estos productos importa España de otros países en mayor cantidad que exporta? / أي من هذه المنتجات تستورد إسبانيا من دول أخرى بكميات أكبر مما تصدر؟",
ansower:"Petróleo / البترول",
option:[
"Calzado / الأحذية","Petróleo / البترول","Medicamentos / الأدوية"
]},{
question:"Cuál de las siguientes gestiones solo se puede hacer de manera presencial? / أي من الإجراءات التالية يمكن إجراؤه شخصيًا فقط؟",
ansower:"Renovar el pasaporte / تجديد جواز السفر",
option:[
 "Solicitar cita médica / طلب موعد طبي","Renovar el pasaporte / تجديد جواز السفر","Pagar una multa / دفع غرامة"
]},{
question:"Una persona que tiene a su cargo hijos menores de 18 años o hijos mayores de edad discapacitados, puede recibir una / يمكن للشخص المسؤول عن الأطفال الذين تقل أعمارهم عن 18 عامًا أو الأطفال المعوقين في السن القانونية الحصول على",
ansower:"ayuda familiar / مساعدة عائلية",
option:[
"pensión de viudedad / معاش الأرملة","ayuda familiar / مساعدة عائلية","prestación de desempleo / اعانة البطالة"
]},{
question:"Para su nombramiento, el presidente del Gobierno debe recibir la confianza /لتعيينه ، يجب على رئيس الوزراء الحصول على تقة ",
ansower:"del Congreso de los Diputados / مجلس النواب",
option:[
 "del Senado / مجلس الشيوخ","de las dos Cámaras / من الغرفتين","del Congreso de los Diputados / مجلس النواب"
]}
];