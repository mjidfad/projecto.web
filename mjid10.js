
var inicio10=document.querySelector(".b-10");/*t*/
var start_10=document.querySelector(".test10");/*t*/
var start1=document.querySelector(".inicio");
var seguinete10=document.querySelector(".bb3_10");/*t*/
var list10=document.querySelector(".option-list10");/*t*/
var box10=document.querySelector(".fin10");/*t*/
var out10=document.querySelector(".exit10");/*t*/
var extra10=document.querySelector(".button10");/*t*/
var b111=document.querySelector(".b11");

var s10=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg10=localStorage.getItem("mjid10");/*t*/
 if(storg10==null){
     inicio10.className="b-10";
 }else{ inicio10.className=storg10;}})();

function mjid10() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_10.classList.add("start-test10");//add boxtest de test3
    s10=2700;
    numbe10(1);
    quest10(0);
    optiselc10();}
      //button reptir test 1

function oki1_10(){/*t*/
    box10.classList.remove("active10");
    start_10.classList.add("start-test10");
    seguinete10.classList.remove("bbb3");  
    s10=2700;
    counter=0;
    num=1;
    score=0;
    quest10(counter);
    numbe10(num);
    optiselc10();
    countdown10=setInterval(function(){setup10();},1000);}  /*t*/ 
    
    seguinete10.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions10.length-1) {
            counter++;
            num++;
            quest10(counter);
            numbe10(num);
           seguinete10.classList.remove("bbb3");}
            else{
            start_10.classList.remove("start-test10");
            fin10(); }}

    function p2_10(){/*pulsar buton home para atras*/ /*t*/
            start_10.classList.remove("start-test10");
            start1.classList.remove("star-inicio");
            s10=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest10(index){/*gunction de preguntas array*/  /*t*/
            var text10=document.querySelector(".pregunta10");
            var list10=document.querySelector(".option-list10");
           
            text10.innerHTML='<h1>'+questions10[index].question+'</h1>'; 
            list10.innerHTML='<div class="opti10"><h3>'+questions10[index].option[0]+'</h3></div>'
            +'<div class="opti10"><h3>'+questions10[index].option[1]+'</h3></div>'
            +'<div class="opti10"><h3>'+questions10[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list10.querySelectorAll(".opti10");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc10(this)"); 
            if(list10.children[i].textContent==""){
                list10.children[i].classList.add("quito10"); } }}
         

    function optiselc10(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions10[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list10.children[i].textContent==correct){list10.children[i].style="background:green;";  }
            else if(list10.children[i].textContent==""){
            list10.children[i].classList.add("quito10");}/*t*/
            else{ list10.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete10.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe10(index){/*t*/
            var numbe=document.querySelector(".footer10");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions10.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto10=document.getElementById("col10");
            var fini10=document.querySelector(".finish10");
    function fin10(){/*t*/
            start_10.classList.remove("start-test10");
            box10.classList.add("active10");
             //resultado de el tirpo
var minute=44-Math.floor(s10/60); 
var second=60-s10 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}
fini10.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
            if(score>=15){
out10.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions10.length +"</h1></h1></span>";
inicio10.className="green10";
fini10.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid10","green10");//poner local storge
foto10.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out10.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions10.length +"</h1></h1></span>";
inicio10.className="red10";
fini10.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid10","red10");//poner local storge
foto10.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_10(){/*t*/
    // window.location.reload();
    start_10.classList.remove("start-test10");
    start1.classList.remove("star-inicio");
    box10.classList.remove("active10");
    s10=2700;
    counter=0;
    num=1;
    score=0;
    quest10(counter);
    numbe10(num);}

/*time descont*/
     var s10=2700;
count10=document.querySelector(".timer10"),
countdown10=setInterval(function(){
setup10();},1000);/*t*/
function setup10(){/*t*/
    var minutes=Math.floor(s10/60);
        sec=s10 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count10.innerHTML=minutes+":"+sec;}
        if(s10<600){ count10.style.color="red";
                clearInterval(countdown10);
                count10.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s10>0){s10=s10-1;}
               else{
                    clearInterval(countdown10);
                    count10.innerHTML="<p style='color red'>time off</p>";
                    count10.style.background="red";
                    count10.style.color="black"; }}
     
    
    
    

var questions10=[
    {question:"El referéndum para la aprobación de la Constitución española se celebró el día  / في ذلك اليوم ، تم إجراء الاستفتاء على الموافقة على الدستور الإسباني",
    ansower:"6 de diciembre de 1978",
    option:[
    "22 de noviembre de 1975","15 de junio de 1977","6 de diciembre de 1978"
    ]},{
    question:"Todos los españoles tienen el deber de conocer la lengua من واجب كل الإسبان معرفة اللغة ",
    ansower:"oficial / الرسمية",
    option:[
    "oficial / الرسمية","local / المحلية","autonómica / الجهوية"
    ]},
    {question:"La sede de la Presidencia del Gobierno y residencia oficial del presidente es el / مقر رئاسة الحكومة والمقر الرسمي للرئيس هو",
    ansower:"Palacio de la Moncloa / قصر مونكلوا",
    option:[
    "Palacio Real / قصر ملكي","Palacio de la Moncloa / قصر مونكلوا","Palacio de la Zarzuela / قصر زارزويلا"
    ]},{
    question:"Los proyectos de ley son aprobados por / تمت الموافقة على القوانين من قبل",
    ansower:"el Consejo de Ministros / مجلس الوزراء",
    option:[
    "el Consejo de Ministros / مجلس الوزراء","el Congreso de los Diputados / مجلس النواب","el presidente del Gobierno / رئيس الحكومة"
    ]},
    {question:"Las Cortes Generales controlan la acción  / المحاكم العامة تراقب عمل",
    ansower:"del Gobierno / الحكومة",
    option:[
    "de las provincias / الاقاليم","de las comunidades autónomas / الجهات المستقلة","del Gobierno / الحكومة"
    ]},{
    question:"El número de habitantes de España es aproximadamente de / عدد سكان اسبانيا تقريبا",
    ansower:"47 millones",
    option:[
    "35 millones","47 millones","62 millones"
    ]},
    {question:"El Consejo General del Poder Judicial / المجلس العام للقضاء",
    ansower:"garantiza la independencia de los jueces / يضمن استقلال القضاة",
    option:[
    "garantiza la independencia de los jueces / يضمن استقلال القضاة","es diferente en cada comunidad autónoma / إنها مختلفة في كل جهة مستقلة","está formado por ministros / يتكون من وزراء"
    ]},{
    question:"Las provincias limítrofes con características históricas, culturales y económicas comunes, las islas y las provincias con especial entidad regional histórica fueron la base de / كانت المقاطعات المجاورة ذات الخصائص التاريخية والثقافية والاقتصادية المشتركة والجزر والمحافظات ذات الكيان الإقليمي التاريخي الخاص أساسًا",
    ansower:"las comunidades autónomas / الجهات المستقلة",
    option:[
    "las comunidades autónomas / الجهات المستقلة","los municipios / البلديات","los distritos / المقاطعات"
    ]},
    {question:"En materia de Sanidad e Higiene, la competencia exclusiva es de / في مسائل الصحة والنظافة ، يكون الاختصاص الحصري",
    ansower:"las comunidades autónomas / الجهات المستقلة",
    option:[
    "Los ayuntamientos / البلديات","las comunidades autónomas / الجهات المستقلة","el Estado / الدولة"
    ]},{
    question:"Cómo se llaman los órganos de gobierno de las provincias españolas? / ماذا تسمى الهيئات الإدارية للمقاطعات الإسبانية؟",
    ansower:"Diputaciones / المجالس",
    option:[
    "Consejos Insulares / مجالس الجزر","Cabildos / مجالس الكناري","Diputaciones / المجالس"
    ]},
    {question:"La mayoría de edad en España es a los 16 años / سن الرشد في إسبانيا هو 16 سنة",
    ansower:"Falso / خطأ",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},{
    question:"Los profesores universitarios tienen derecho a enseñar con libertad, dentro de los límites de la Constitución/  لأساتذة الجامعات الحق في التدريس بحرية في حدود الدستور",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح" ,"Falso / خطأ",""
    ]},
    {question:"Las asociaciones con fines lucrativos están reguladas por ley / ينظم القانون الجمعيات الهادفة للربح",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},{
    question:"El pico más alto de España, con 3718 metros es / أعلى قمة في إسبانيا هي 3718 متر",
    ansower:"el Teide / تايد",
    option:[
    "el Aneto / أنيتو"," el Mulhacén / مولهاسن","el Teide / تايد"
    ]},
    {question:"El río más largo de Galicia es el  / أطول نهر في غاليسيا هو نهر",
    ansower:"Miño / مينيو",
    option:[
    "Miño / مينيو","Sil / سيل","Duero / دورو"
    ]},{
    question:"En qué ciudad de España se encuentra La Alhambra, que es patrimonio de la Humanidad? / في أي مدينة إسبانيا يوجد قصر الحمراء ، وهو أحد مواقع التراث العالمي؟",
    ansower:"Granada / غرناطة",
    option:[
    "Granada / غرناطة","Córdoba / قرطبة","Sevilla / اشبيلية"
    ]},
    {question:"Qué toman los españoles la noche del 31 de diciembre para celebrar el cambio de año? /ماذا يأكل الأسباني ليلة 31 ديسمبر احتفالاً بتغيير العام؟ ",
    ansower:"Uvas / عنب",
    option:[
    "Aceitunas / زيتون","Uvas / عنب","Lentejas / عدس"
    ]},{
    question:"El Cervantes es un premio que se concede a .......de España e Hispanoamérica / السرفانت هي جائزة تُمنح لـ ....... من إسبانيا وأمريكا اللاتينية",
    ansower:"escritores / كتاب",
    option:[
    "escritores / كتاب","pintores / رسامين","actores / ممثلين"
    ]},
    {question:"El DNI o NIE, una fotografía reciente y un informe de actitud psicológica son necesarios para solicitar el / DNI أو NIE ، صورة حديثة وتقرير موقف نفسي ضرورية لطلب",
    ansower:"carné de conducir / رخصة السياقة",
    option:[
    "carné de conducir / رخصة السياقة","pasaporte / جواز السفر","número de identificación fiscal / رقم التعريف الضريبي"
    ]},{
    question:"La baja por maternidad en España, de carácter general por un solo hijo, puede ser de hasta / يمكن أن تصل إجازة الأمومة في إسبانيا ذات الطابع العام لطفل واحد",
    ansower:"16 semanas",
    option:[
    "10 semanas","16 semanas","20 semanas"
    ]},
    {question:"En España hay 14 días festivos al año, nacionales, autonómicos y / يوجد في إسبانيا 14 عطلة في السنة ، وطنية وإقليمية و",
    ansower:"Locales / محلية",
    option:[
    "Regionales / جهوية"," Provinciales / اقليمية","Locales / محلية"
    ]},{
    question:"Las bibliotecas públicas son gratuitas para / المكتبات العامة مجانية",
    ansower:"todos / الجميع",
    option:[
    "los niños / الاطفال","todos / الجميع","los parados / الاباء"
    ]},
    {question:"Los viajes de vacaciones para las personas mayores de 65 años los organiza  / يتم تنظيم رحلات العطلات للأشخاص الذين تزيد أعمارهم عن 65 عامًا",
    ansower:"el IMSERSO (Instituto de Mayores y Servicios Sociales) / IMSERSO (معهد المسنين والخدمات الاجتماعية)",
    option:[
    "el IMSERSO (Instituto de Mayores y Servicios Sociales) / IMSERSO (معهد المسنين والخدمات الاجتماعية)","el IEF (Instituto de Estudios Fiscales) / IEF (معهد الدراسات المالية)","el ICO (Instituto de Crédito Oficial) / ال ICO (معهد الائتمان الرسمي)"
    ]},{
    question:"El aeropuerto Adolfo Suárez está en / مطار أدولفو سواريز في",
    ansower:"Madrid / مدريد",
    option:["Madrid / مدريد","barcelona / برشلونة","bilbao / بيلباو"]},{
    question:"A qué usuarios de transporte se refiere este aviso “El Abono Normal finalizará su validez al cumplir el cliente los 65 años. A partir de esta fecha podrá cargar el Abono Tercera Edad? / إلى أي من مستخدمي النقل يشير هذا الإشعار؟ ستنتهي صلاحية البطاقة العادية عندما يبلغ العميل 65 عامًا. من هذا التاريخ يمكنك تحميل بطاقة الجيل الثالت",    
    ansower:"A jubilados / للمتقاعدين",
    option:[
    "A niños / الاطفال","A parados / الاباء","A jubilados / للمتقاعدين"
    ]}
    
    
    ];
     