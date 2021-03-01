
var inicio12=document.querySelector(".b-12");/*t*/
var start_12=document.querySelector(".test12");/*t*/
var start1=document.querySelector(".inicio");
var seguinete12=document.querySelector(".bb3_12");/*t*/
var list12=document.querySelector(".option-list12");/*t*/
var box12=document.querySelector(".fin12");/*t*/
var out12=document.querySelector(".exit12");/*t*/
var extra12=document.querySelector(".button12");/*t*/
var b111=document.querySelector(".b11");

var s12=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg12=localStorage.getItem("mjid12");/*t*/
 if(storg12==null){
     inicio12.className="b-12";
 }else{ inicio12.className=storg12;}})();

function mjid12() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_12.classList.add("start-test12");//add boxtest de test3
    s12=2700;
    numbe12(1);
    quest12(0);
    optiselc12();}
      //button reptir test 1

function oki1_12(){/*t*/
    box12.classList.remove("active12");
    start_12.classList.add("start-test12");
    seguinete12.classList.remove("bbb3");  
    s12=2700;
    counter=0;
    num=1;
    score=0;
    quest12(counter);
    numbe12(num);
    optiselc12();
    countdown12=setInterval(function(){setup12();},1000);}  /*t*/ 
    
    seguinete12.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions12.length-1) {
            counter++;
            num++;
            quest12(counter);
            numbe12(num);
           seguinete12.classList.remove("bbb3");}
            else{
            start_12.classList.remove("start-test12");
            fin12(); }}

    function p2_12(){/*pulsar buton home para atras*/ /*t*/
            start_12.classList.remove("start-test12");
            start1.classList.remove("star-inicio");
            s12=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest12(index){/*gunction de preguntas array*/  /*t*/
            var text12=document.querySelector(".pregunta12");
            var list12=document.querySelector(".option-list12");
        
            text12.innerHTML='<h1>'+questions12[index].question+'</h1>'; 
            list12.innerHTML='<div class="opti12"><h3>'+questions12[index].option[0]+'</h3></div>'
            +'<div class="opti12"><h3>'+questions12[index].option[1]+'</h3></div>'
            +'<div class="opti12"><h3>'+questions12[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list12.querySelectorAll(".opti12");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc12(this)"); 
            if(list12.children[i].textContent==""){
                list12.children[i].classList.add("quito12"); } }}
         

    function optiselc12(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions12[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list12.children[i].textContent==correct){list12.children[i].style="background:green;";  }
            else if(list12.children[i].textContent==""){
            list12.children[i].classList.add("quito10");}/*t*/
            else{ list12.children[i].style.background="red";
        
        }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete12.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe12(index){/*t*/
            var numbe=document.querySelector(".footer12");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions12.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto12=document.getElementById("col12");
            var fini12=document.querySelector(".finish12");

    function fin12(){/*t*/
            start_12.classList.remove("start-test12");
            box12.classList.add("active12");
 var minute=44-Math.floor(s12/60); 
 var second=60-s12 %60;
 if(second<10  ){second="0"+second;}
 if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out12.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions12.length +"</h1></h1></span>";
inicio12.className="green12";
fini12.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid12","green12");//poner local storge
foto12.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out12.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions12.length +"</h1></h1></span>";
inicio12.className="red12";
fini12.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid12","red12");//poner local storge
foto12.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_12(){/*t*/
    // window.location.reload();
    start_12.classList.remove("start-test12");
    start1.classList.remove("star-inicio");
    box12.classList.remove("active12");
    s12=2700;
    counter=0;
    num=1;
    score=0;
    quest12(counter);
    numbe12(num);}

/*time descont*/
     var s12=2700;
count12=document.querySelector(".timer12"),
countdown12=setInterval(function(){
setup12();},1000);/*t*/
function setup12(){/*t*/
    var minutes=Math.floor(s12/60);
        sec=s12 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count12.innerHTML=minutes+":"+sec;}
        if(s12<600){ count12.style.color="red";
                clearInterval(countdown12);
                count12.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s12>0){s12=s12-1;}
               else{
                    clearInterval(countdown12);
                    count12.innerHTML="<p style='color red'>time off</p>";
                    count12.style.background="red";
                    count12.style.color="black"; }}
     
    
    
var questions12=[
    {
    question:"Si el Rey la Reina de España fuera menor de edad, ¿quién sería el regente hasta su mayoría de edad? / إذا كان ملك إسبانيا قاصرًا ، فمن سيكون الوصي حتى يبلغ سن الرشد؟",
    ansower:" El padre o la madre del Rey / والد الملك أو أمه",
    option:[
    " El ministro de Interior / وزير الداخلية","El presidente del Gobierno / رئيس الحكومة"," El padre o la madre del Rey / والد الملك أو أمه"
    ]},{
    question:"Los colores de la bandera española son / ألوان العلم الاسباني",
    ansower:" rojo y amarillo / أحمر و أصفر",
    option:[
    "blanco y rojo / الأبيض والأحمر","amarillo y blanco / أصفر وأبيض"," rojo y amarillo / أحمر و أصفر"
    ]},
    {question:"El......tiene como fin la promoción y la enseñanza del español y las lenguas cooficiales, y también la difusión de la cultura española e hispanoamericana / الغرض من ...... هو تعزيز وتعليم اللغة الإسبانية واللغات الرسمية المشتركة ، وكذلك نشر الثقافة الإسبانية وأمريكا اللاتينية",
    ansower:"Instituto Cervantes / معهد سرفانتس",
    option:[
    "Instituto Nacional de Administración Pública / المعهد الوطني للإدارة العامة","Instituto Cervantes / معهد سرفانتس","Instituto Nacional de Estadística / المعهد الوطني للإحصاء"
    ]},{
    question:"Cuántas veces ha reformado España su Constitución para adaptarse a las deci- siones y directivas europeas? / كم مرة قامت إسبانيا بإصلاح دستورها لتكييفه مع القرارات والتوجيهات الأوروبية؟",
    ansower:"Dos veces / مرتين",
    option:[
        "Ninguna / لا أحد","Una vez / مرة واحدة","Dos veces / مرتين"
    ]},
    {question:"Al poder legislativo le corresponde / السلطة التشريعية هي المسؤولة",
    ansower:"Elaborar leyes / اصدار القوانين",
    option:[
    "Elegir alcaldes / انتخاب رؤساء البلديات","Elaborar leyes / اصدار القوانين","Crear empleo / خلق فرص عمل"
    ]},{
    question:"Para aprobar, modificar o derogar una Ley Orgánica, es necesaria en el Congreso una mayoría / للموافقة على قانون أساسي أو تعديله أو إلغائه ، فإن الأغلبية في الكونغرس ضرورية",
    ansower:"absoluta / مطلقة",
    option:[
    "simple / عادية","relativa / نسبية","absoluta / مطلقة"
    ]},
    {question:"El Ejército español participa desde 1989 en misiones de paz de la / منذ عام 1989 ، شارك الجيش الإسباني في مهمات السلام في",
    ansower:"Organización de Naciones Unidas (ONU) / الأمم المتحدة (UN)",
    option:[
    "Organización de Naciones Unidas (ONU) / الأمم المتحدة (UN)","Organización de Estados Occidental (OEI) / منظمة الدول الغربية (OEI)","Unión Europea Occidental (UEO) / الاتحاد الأوروبي الغربي (WEU)"
    ]},{
    question:"La inspección y recaudación de los impuestos que gestiona el Estado corresponde a / يتولى فحص وتحصيل الضرائب التي تديرها الدولة",
    ansower:"La Agencia Tributaria / مصلحة الضرائب",
    option:[
    "El Consejo Económico y Social / المجلس الاقتصادي والاجتماعي","El Tribunal de Cuentas / محكمة المحاسبة","La Agencia Tributaria / مصلحة الضرائب"
    ]},
    {question:"Cómo se llama la policía autonómica de Cataluña? / ما هو اسم الشرطة المستقلة في كاتالونيا؟",
    ansower:"Mossos d’Esquadra / موسوس دي إسكوادرا",
    option:[
    "Guardia Civil / الحرس المدني","Mossos d’Esquadra / موسوس دي إسكوادرا","Ertzaintza / إرتزاينتزا"
    ]},{
    question:"En España, los cargos de presidente y vocales de las mesas electorales son / في إسبانيا ، مناصب الرئيس وأعضاء الطاولات الانتخابية هي",
    ansower:"Obligatorios / إلزامي",
    option:[
    "Obligatorios / إلزامي","Voluntarios / المتطوعين","Permanentes / دائم"
    ]},
    {question:"En España se regulan mediante ley las causas de separación y disolución matrimonial / في إسبانيا ، ينظم القانون أسباب انفصال وفسخ الزواج",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},{
    question:"Es obligatorio colaborar en un juicio, cuando así lo piden los jueces y tribunales / إن التعاون في المحاكمة أمر إلزامي ، عندما يطلبه القضاة والمحاكم",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},
    {question:"Los poderes públicos mantendrán un régimen público de Seguridad Social para todos los ciudadanos / تحافظ السلطات العامة على نظام الضمان الاجتماعي العام لجميع المواطنين ",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},{
    question:"Qué comunidad autónoma está situada al sur de Castilla-La Mancha? / أي جهة مستقلة يقع جنوب كستيا لا مانسا؟",
    ansower:"Andalucía / الاندلس",
    option:[
    "Castilla y León / قشتالة وليون"," Madrid / مدريد","Andalucía / الاندلس"
    ]},
    {question:"Cuál de estas provincias forma parte de la Comunidad Valenciana? / أي من هذه المقاطعات هي جزء من جهة بلنسية؟",
    ansower:"Castellón / كستيون",
    option:[
        "Albacete / البسيتي","Tarragona / تركونة","Castellón / كستيون"
    ]},{
    question:"Paco de Lucía fue un famoso / كان باكو دي لوسيا مشهورًا",
    ansower:"guitarrista / عازف الجيتار",
    option:[
    "pintor / رسام","guitarrista / عازف الجيتار","científico / عالم"
    ]},
    {question:"Quién fue nombrado primer presidente de Gobierno después de la aprobación de la Constitución española en 1978? / من تم تعيينه كأول رئيس للوزراء بعد إقرار الدستور الإسباني عام 1978؟",
    ansower:"Adolfo Suárez / أدولفو سواريز",
    option:[
    "Felipe González / فيليبي جونزاليس","Leopoldo Calvo Sotelo / ليوبولدو كالفو سوتيلو","Adolfo Suárez / أدولفو سواريز"
    ]},{
    question:"En qué ciudad española está el acueducto considerado Patrimonio de la Humanidad? / في أي مدينة إسبانية تعتبر القناة من مواقع التراث العالمي؟",
    ansower:"Segovia / سكوفيا",
    option:[
    "Segovia / سكوفيا","Sevilla / اشبيلية","Mérida / مريدا"
    ]},
    {question:"A qué edad se puede sacar el carné de conducir en España? / في أي سن يمكنك الحصول على رخصة قيادة في إسبانيا؟",
    ansower:"A los 18 años / في سن 18",
    option:[
    "A los 16 años / في سن 16","A los 18 años / في سن 18","A los 21 años / في سن 21"
    ]},{
    question:"El certificado de empadronamiento se solicita en / مطلوب شهادة التسجيل في",
    ansower:"el Ayuntamiento / مجلس المدينة",
    option:[
    "la asociación de vecinos / جمعية الحي","la oficina del Registro Civil / مكتب السجل المدني","el Ayuntamiento / مجلس المدينة"
    ]},
    {question:"El menú de tres platos que ofrecen los restaurantes de lunes a viernes al mediodía por un precio especial se llama / يتم استدعاء قائمة الطعام المكونة من ثلاثة أطباق التي تقدمها المطاعم من الاثنين إلى الجمعة ظهرًا بسعر خاص ",
    ansower:"menú del día / قائمة اليوم",
    option:[
    "menú especial / قائمة خاصة","menú del día / قائمة اليوم"," menú infantil / قائمة أطفال"
    ]},{
    question:"Cuál de los siguientes organismos económicos pertenece al Estado español? / أي من المنظمات الاقتصادية التالية تنتمي إلى الدولة الإسبانية؟",
    ansower:"La Comisión Nacional de Mercado de Valores / الهيئة الوطنية لسوق الأوراق المالية",
    option:[
    "La Comisión Nacional de Mercado de Valores / الهيئة الوطنية لسوق الأوراق المالية","El Fondo Monetario Internacional / صندوق النقد الدولي","El Banco Central Europeo / البنك المركزي الأوروبي"
    ]},
    {question:"Cuál es el número de teléfono único de asistencia al ciudadano ante cualquier emergencia en España? / ما هو رقم الهاتف الوحيد لمساعدة المواطن في حالة حدوث أي طارئ في إسبانيا",
    ansower:"112",
    option:[
    "112","060","911"
    ]},{
    question:"Uno de los principales puertos de España en transporte de viajeros es / أحد الموانئ الرئيسية لإسبانيا في نقل الركاب هو",
    ansower:"Algeciras / الجزيرة الخضراء",
    option:[
    "Alicante / اليكنتي","Gran Canaria / جزر الكناري","Algeciras / الجزيرة الخضراء"
    ]},
    {question:"En materia de Defensa y Fuerzas Armadas, la competencia exclusiva es / في مسائل الدفاع والقوات المسلحة ، يكون الاختصاص الحصري",
    ansower:"del Estado / الدولة",
    option:[
    "de los ayuntamientos / البلديات","del Estado / الدولة","de las comunidades autónomas / الجهات المستقلة"
    ]}
    
    
    ];
           