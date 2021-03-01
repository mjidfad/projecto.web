
var inicio8=document.querySelector(".b-8");/*t*/
var start_8=document.querySelector(".test8");/*t*/
var start1=document.querySelector(".inicio");
var seguinete8=document.querySelector(".bb3_8");/*t*/
var list8=document.querySelector(".option-list8");/*t*/
var box8=document.querySelector(".fin8");/*t*/
var out8=document.querySelector(".exit8");/*t*/
var extra8=document.querySelector(".button8");/*t*/
var b111=document.querySelector(".b11");

var s8=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg8=localStorage.getItem("mjid8");/*t*/
 if(storg8==null){
     inicio8.className="b-8";
 }else{ inicio8.className=storg8;}})();

function mjid8() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_8.classList.add("start-test8");//add boxtest de test3
    s8=2700;
    numbe8(1);
    quest8(0);
    optiselc8();}
      //button reptir test 1

function oki1_8(){/*t*/
    box8.classList.remove("active8");
    start_8.classList.add("start-test8");
    seguinete8.classList.remove("bbb3");  
    s8=2700;
    counter=0;
    num=1;
    score=0;
    quest8(counter);
    numbe8(num);
    optiselc8();
    countdown8=setInterval(function(){setup8();},1000);}  /*t*/ 
    
    seguinete8.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions8.length-1) {
            counter++;
            num++;
            quest8(counter);
            numbe8(num);
           seguinete8.classList.remove("bbb3");}
            else{
            start_8.classList.remove("start-test8");
            fin8(); }}

    function p2_8(){/*pulsar buton home para atras*/ /*t*/
            start_8.classList.remove("start-test8");
            start1.classList.remove("star-inicio");
            s8=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest8(index){/*gunction de preguntas array*/  /*t*/
            var text8=document.querySelector(".pregunta8");
            var list8=document.querySelector(".option-list8");
           
            text8.innerHTML='<h1>'+questions8[index].question+'</h1>'; 
            list8.innerHTML='<div class="opti8"><h3>'+questions8[index].option[0]+'</h3></div>'
            +'<div class="opti8"><h3>'+questions8[index].option[1]+'</h3></div>'
            +'<div class="opti8"><h3>'+questions8[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list8.querySelectorAll(".opti8");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc8(this)"); 
            if(list8.children[i].textContent==""){
                list8.children[i].classList.add("quito8"); } }}
         

    function optiselc8(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions8[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list8.children[i].textContent==correct){list8.children[i].style="background:green;";  }
            else if(list8.children[i].textContent==""){
            list8.children[i].classList.add("quito8");}/*t*/
            else{ list8.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete8.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe8(index){/*t*/
            var numbe=document.querySelector(".footer8");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions8.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto8=document.getElementById("col8");
            var fini8=document.querySelector(".finish8");
    function fin8(){/*t*/
            start_8.classList.remove("start-test8");
            box8.classList.add("active8");
               //resultado de el tirpo
var minute=44-Math.floor(s8/60); 
var second=60-s8 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out8.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions8.length +"</h1></h1></span>";
inicio8.className="green8";
fini8.innerHTML="<h3> tu tiempo es  :00"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid8","green8");//poner local storge
foto8.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out8.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions8.length +"</h1></h1></span>";
inicio8.className="red8";
fini8.innerHTML="<h3> tu tiempo es  :00"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid8","red8");//poner local storge
foto8.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_8(){/*t*/
    // window.location.reload();
    start_8.classList.remove("start-test8");
    start1.classList.remove("star-inicio");
    box8.classList.remove("active8");
    s8=2700;
    counter=0;
    num=1;
    score=0;
    quest8(counter);
    numbe8(num);}

/*time descont*/
     var s8=2700;
count8=document.querySelector(".timer8"),
countdown8=setInterval(function(){
setup8();},1000);/*t*/
function setup8(){/*t*/
    var minutes=Math.floor(s8/60);
        sec=s8 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count8.innerHTML=minutes+":"+sec;}
        if(s8<600){ count8.style.color="red";
                clearInterval(countdown8);
                count8.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s8>0){s8=s8-1;}
               else{
                    clearInterval(countdown8);
                    count8.innerHTML="<p style='color red'>time off</p>";
                    count8.style.background="red";
                    count8.style.color="black"; }}
     
    
    
    

var questions8=[
{
question:"Según la Constitución española, la soberanía nacional reside en / وفقًا للدستور الإسباني ، تكمن السيادة الوطنية",
ansower:"el pueblo español / الدولة الاسبانية",
option:[
"el Congreso de los Diputados / مجلس النواب","el Gobierno del Estado / حكومة الدولة","el pueblo español / الدولة الاسبانية"
]},
{
question:"Las leyes que regulan los derechos fundamentales y el desarrollo de las libertades públicas son las leyes / القوانين التي تنظم الحقوق الأساسية وتطور الحريات العامة هي القوانين",
ansower:"orgánicas / القوانين العضوية",
option:[
"ordinarias / القوانين العادية","orgánicas / القوانين العضوية","de enjuiciamiento civil / من الإجراءات المدنية"
]},
{
question:"Cuál es la tercera ciudad española en número de habitantes, después de Madrid y Barcelona? / ما هي ثالث مدينة إسبانية من حيث عدد السكان بعد مدريد وبرشلونة؟",
ansower:"Valencia / فالنسيا",
option:[
"Valencia / فالنسيا","Bilbao / بيلباو","Sevilla / اشبيلية"
 ]},
{
question:"Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma? / أي من الخيارات التالية هي لغة رسمية مشتركة في جهة مستقلة؟",
ansower:"El euskera / أوسكيرا",
option:[
"El euskera / أوسكيرا","El aragonés / الأراغون","El bable / الكتاب المقدس"
]},
{
 question:"El organismo que vela por la unidad de la lengua española es  الجهة التي تراقب وحدة اللغة الإسبانية هي ",
ansower:"la Real Academia Española / الأكاديمية الملكية الإسبانية",
option:[
"el Instituto Cervantes / معهد سرفانتس","la Real Academia Española / الأكاديمية الملكية الإسبانية","el Ministerio de Educación / وزارة التربية والتعليم"
]},
{
question:"En la organización de la Administración General del Estado se distinguen tres niveles: estatal, autonómico y / في تنظيم الإدارة العامة للدولة ، هناك ثلاثة مستويات: الدولة ، والحكم الذاتي و",
ansower:"local / محلي",
option:[
"regional / إقليمي","central / وسط","local / محلي"
    ]},
    {
question:"Cuál es el órgano supremo consultivo del Gobierno de España? / ما هي الهيئة الاستشارية العليا لحكومة إسبانيا؟",
ansower:"el Consejo de Estado / مجلس الدولة",
option:[
"El Tribunal Constitucional / المحكمة الدستورية","el Consejo de Estado / مجلس الدولة","el Parlamento Europeo / البرلمان الأوروبي"
]},   
{
question:"El control de la entrada y salida del territorio nacional de españoles y extranjeros corresponde a / تتوافق السيطرة على دخول وخروج الإسبان والأجانب من الأراضي الوطنية",
ansower:"la Policía Nacional / الشرطة الوطنية",
option:[
"la Policía Local / الشرطة المحلية","la Policía Nacional / الشرطة الوطنية","la Guardia Civil / الحرس المدني"
]},
{
    question:"Las leyes orgánicas normativas de las ciudades y comunidades autónomas de España se denominan / تسمى القوانين العضوية التنظيمية للمدن والمجتمعات المتمتعة بالحكم الذاتي في إسبانيا",
    ansower:"Estatutos de Autonomía / النظام الأساسي للحكم الذاتي",
    option:[
    "Leyes de Autonomía / قوانين الحكم الذاتي","Estatutos de Autonomía / النظام الأساسي للحكم الذاتي","Reglamentos de Autonomía / لوائح الحكم الذاتي"
    ]},
    {
    question:"Los españoles son mayores de edad a los / يبلغ الإسبان السن القانوني في",
    ansower:"18 años",
    option:[
    "16 años","18 años","21 años"
    ]},
    {
    question:"Los profesores, los padres y los alumnos intervienen en el control y gestión de los centros sostenidos por la Administración con fondos públicos / يتدخل المعلمون وأولياء الأمور والطلاب في مراقبة وإدارة المراكز التي تدعمها الإدارة بأموال عامة",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
     ]},
    {
    question:"En caso de huelga, la ley no garantiza el mantenimiento de los servicios esenciales de la comunidad / في حالة الإضراب ، لا يضمن القانون الحفاظ على الخدمات المجتمعية الأساسية",
    ansower:"Falso / خطأ",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},
    {
     question:"La edad mínima para contraer matrimonio en España es de 16 años / الحد الأدنى لسن الزواج في إسبانيا هو 16 عامًا",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},
    {
    question:"En el estrecho de Gibraltar se unen el océano Atlántico y el mar / يلتقي المحيط الأطلسي والبحر في مضيق جبل طارق",
    ansower:"Mediterráneo / البحر المتوسط",
    option:[
    "Cantábrico / كانتابريان","Mediterráneo / البحر المتوسط","Menor / أقل"
        ]},
        {
    question:"Qué sistema montañoso separa España de Francia? / أي نظام جبلي يفصل إسبانيا عن فرنسا؟",
    ansower:"Pirineos / بيرينيه",
    option:[
    "Sierra de Gredos / سييرا دي جريدوس","Pirineos / بيرينيه","Picos de Europa / قمم أوروبا"
    ]},   
    {
    question:"Cuál es la profesión de Mario Vargas Llosa? / ما هي مهنة ماريو فارغاس يوسا؟",
    ansower:"Escritor / كاتب",
    option:[
    "Escritor / كاتب","Profesor / استاد","Bailarín / راقص"
    ]},
    {
question:"En qué ciudad se encuentra el monumento La Sagrada Familia de Gaudí? / في أي مدينة يقع نصب لا ساغرادا فاميليا الذي رسمه غاودي؟",
ansower:"En Barcelona / برشلونة",
        option:[
"En Granada / غرناطة","En Madrid / مدريد","En Barcelona / برشلونة"
        ]},
        {
question:"Qué premios promueven en España los valores científicos, culturales y humanísticos que son patrimonio universal? / ما هي الجوائز التي تروج للقيم العلمية والثقافية والإنسانية التي تعتبر تراثًا عالميًا في إسبانيا؟",
ansower:" Premios Princesa de Asturias / جوائز أميرة أستورياس",
        option:[
" Premios Princesa de Asturias / جوائز أميرة أستورياس","Premios Goya / جوائز جويا","Premios Cervantes / جوائز سرفانتس"
        ]},
        {
 question:"La certificación de nacimiento o nacionalidad, una fotografía reciente y el certificado de empadronamiento son necesarios para solicitar / يلزم تقديم شهادة الميلاد أو الجنسية وصورة شخصية حديثة وشهادة التسجيل",
 ansower:"el DNI / بطاقة الهوية الوطنية",
        option:[
" el carné de conducir / رخصة قيادة","la tarjeta sanitaria / البطاقة الصحية","el DNI / بطاقة الهوية الوطنية"
         ]},
        {
question:"Los......de una vivienda pagan anualmente el Impuesto sobre Bienes Inmuebles (IBI) / يدفع ...... لمنزل ضريبة العقارات (IBI) سنويا",
ansower:"propietarios / الملاك",
        option:[
"propietarios / الملاك","inquilinos / المستأجرين", "inquilinos y propietarios / المستأجرين والمالكين"
        ]},
        {
 question:"Los colegios públicos / المدارس العامة",
ansower:"están financiados por el Gobierno / بتمويل من الحكومة",
        option:[
 "pueden contratar los profesores que quieran / يمكنهم توظيف المعلمين الذين يريدون","están financiados por el Gobierno / بتمويل من الحكومة","pueden decidir su número de plazas / يمكنهم تحديد عدد الأماكن الخاصة بهم"
        ]},
        {
question:"Dónde se puede encontrar el siguiente aviso “La entrada incluye el acceso a la colección y a las exposiciones temporales el día de la visita”? / أين يمكنك العثور على الإشعار التالي تتضمن التذكرة الدخول إلى المجموعة والمعارض المؤقتة في يوم الزيارة؟",
ansower:"En un museo / في متحف",
        option:[
"En unos grandes almacenes / في مستودع كبير","En un museo / في متحف","En un banco / في أحد البنوك"
            ]},
            {
question:"La regulación del tráfico dentro de las ciudades en la mayor parte del territorio español corresponde a / يتوافق تنظيم المرور داخل المدن في معظم الأراضي الإسبانية",
ansower:"la Policía Local / الشرطة المحلية",
    option:[
"la Policía Nacional / الشرطة الوطنية","la Guardia Civil / الحرس المدني","la Policía Local / الشرطة المحلية"
        ]},   
        {
question:"Una persona mayor de 18 años puede obtener el título de Graduado en Educación Secundaria Obligatoria (ESO) en   يمكن لأي شخص يزيد عمره عن 18 عامًا الحصول على لقب خريج في التعليم الثانوي الإلزامي (ESO) في",
ansower:"un centro de Educación de Personas adultas / مركز تعليم الكبار",
option:[
"un centro de Educación de Personas adultas / مركز تعليم الكبار"," un centro de Enseñanza Primaria / مركز تعليم ابتدائي"," una universidad / الجامعة "
        ]},
        {
question:"Qué es un Parador de Turismo? / ماهو نزل سياحي",
ansower:"Un hotel en un lugar de interés histórico o cultural / فندق في مكان ذو أهمية تاريخية أو ثقافية",
option:[
"Un albergue situado en el Camino de Santiago / نزل يقع في كامينو دي سانتياغو","Un circuito turístico con varias paradas / دائرة سياحية بها عدة محطات","Un hotel en un lugar de interés histórico o cultural / فندق في مكان ذو أهمية تاريخية أو ثقافية"
            ]}

    ];