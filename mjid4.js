
var inicio4=document.querySelector(".b-4");/*t*/
var start_4=document.querySelector(".test4");/*t*/
var start1=document.querySelector(".inicio");
var seguinete4=document.querySelector(".bb3_4");/*t*/
var list4=document.querySelector(".option-list4");/*t*/
var box4=document.querySelector(".fin4");/*t*/
var out4=document.querySelector(".exit4");/*t*/
var extra4=document.querySelector(".button4");/*t*/
var b111=document.querySelector(".b11");

var s4=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg4=localStorage.getItem("mjid4");/*t*/
 if(storg4==null){
     inicio4.className="b-4";
 }else{ inicio4.className=storg4;}})();

function mjid4() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_4.classList.add("start-test4");//add boxtest de test3
    s4=2700;
    numbe4(1);
    quest4(0);
    optiselc4();}
      //button reptir test 1

function oki1_4(){/*t*/
    box4.classList.remove("active4");
    start_4.classList.add("start-test4");
    seguinete4.classList.remove("bbb3");  
    s4=2700;
    counter=0;
    num=1;
    score=0;
    quest4(counter);
    numbe4(num);
    optiselc4();
    countdown4=setInterval(function(){setup4();},1000);}  /*t*/ 
    
    seguinete4.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions4.length-1) {
            counter++;
            num++;
            quest4(counter);
            numbe4(num);
           seguinete4.classList.remove("bbb3");}
            else{
            start_4.classList.remove("start-test4");
            fin4(); }}

    function p2_4(){/*pulsar buton home para atras*/ /*t*/
            start_4.classList.remove("start-test4");
            start1.classList.remove("star-inicio");
            s4=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest4(index){/*gunction de preguntas array*/  /*t*/
            var text4=document.querySelector(".pregunta4");
            var list4=document.querySelector(".option-list4");
           
            text4.innerHTML='<h1>'+questions4[index].question+'</h1>'; 
            list4.innerHTML='<div class="opti4"><h3>'+questions4[index].option[0]+'</h3></div>'
            +'<div class="opti4"><h3>'+questions4[index].option[1]+'</h3></div>'
            +'<div class="opti4"><h3>'+questions4[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list4.querySelectorAll(".opti4");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc4(this)"); 
            if(list4.children[i].textContent==""){
                list4.children[i].classList.add("quito4"); } }}
         

    function optiselc4(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions4[counter].ansower;
            var allopcion=list4.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
            else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list4.children[i].textContent==correct){list4.children[i].style.background="green"; }
            else if(list4.children[i].textContent==""){
            list4.children[i].classList.add("quito4");}/*t*/
            else{ list4.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete4.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe4(index){/*t*/
            var numbe=document.querySelector(".footer4");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions4.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto4=document.getElementById("col4");
            var fini4=document.querySelector(".finish4");
    function fin4(){/*t*/
            start_4.classList.remove("start-test4");
            box4.classList.add("active4");
//resultado de el tirpo
var minute=44-Math.floor(s12/60); 
var second=60-s4 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}
          if (score>=15) {
out4.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions4.length +"</h1></h1></span>";
inicio4.className="green4";
fini4.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid4","green4");//poner local storge
foto4.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out4.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions4.length +"</h1></h1></span>";
inicio4.className="red4";
fini4.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid4","red4");//poner local storge
foto4.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_4(){/*t*/
    // window.location.reload();
    start_4.classList.remove("start-test4");
    start1.classList.remove("star-inicio");
    box4.classList.remove("active4");
    s4=2700;
    counter=0;
    num=1;
    score=0;
    quest4(counter);
    numbe4(num);}

/*time descont*/
     var s4=2700;
count4=document.querySelector(".timer4"),
countdown4=setInterval(function(){
setup4();},1000);/*t*/
function setup4(){/*t*/
    var minutes=Math.floor(s4/60);
        sec=s4 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count4.innerHTML=minutes+":"+sec;}
        if(s4<600){ count4.style.color="red";
                clearInterval(countdown4);
                count4.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s4>0){s4=s4-1;}
               else{
                    clearInterval(countdown4);
                    count4.innerHTML="<p style='color red'>time off</p>";
                    count4.style.background="red";
                    count4.style.color="black"; }}
     
    
    
    

  
    var questions4=[{
    question:"La más alta representación del Estado español en las relaciones internacionales corresponde al / أعلى تمثيل للدولة الإسبانية في العلاقات الدولية يتوافق مع",
    ansower:"Rey / الملك",
    option:[
     "ministro de Asuntos Exteriores, Unión Europea y Cooperación/  وزير الخارجية والاتحاد الأوروبي والتعاون","presidente del Gobierno / رئيس الحكومة","Rey / الملك"
        ]},{
    question:"El Congreso de los Diputados y el Senado constituyen el poder / يشكل مجلس النواب ومجلس الشيوخ السلطة",
    ansower:"legislativo / التشريعية",
    option:[
        "ejecutivo / التنفيذية","legislativo / التشريعية"," judicial / القضائية"
    ]},{
    question:"El poder legislativo corresponde a / السلطة التشريعية توافق مع",
    ansower:"los diputados y senadores / النواب وأعضاء مجلس الشيوخ",
    option:[
    "el presidente y los ministros / رئيس الحكومة و الوزراء","los jueces y los magistrados / القضاة وقضاة الصلح","los diputados y senadores / النواب وأعضاء مجلس الشيوخ"
    ]},
    {
    question:"La potestad para arbitrar el funcionamiento de las instituciones españolas corresponde al / تتوافق سلطة التحكيم في عمليات المؤسسات الإسبانية مع",
    ansower:"Rey / الملك",
    option:[
    "ministro del Interior / وزير الداخلية","jefe de Gobierno / رئيس الحكومة","Rey / الملك"
     ]},{
    question:"Cuál es el órgano que controla la gestión económico-financiera del Estado? / ما هي الجهة التي تتحكم في الإدارة الاقتصادية والمالية للدولة؟",
    ansower:"El Tribunal de Cuentas / محكمة المحاسبة",
    option:[
    "El Tribunal de Cuentas / محكمة المحاسبة","El Tribunal Constitucional / المحكمة الدستورية","El Tribunal Supremo / المحكمة العليا"
    ]},{
    question:"Cuántas provincias hay en España? / كم عدد المقاطعات الموجودة في إسبانيا؟",
    ansower:"50",
    option:[
    "50","52","40"
     ]}, {
    question:"El Congreso de los Diputados designa al / مجلس النواب يعين",
     ansower:"presidente del Gobierno / رئيس الحكومة",
    option:[
    "jefe del Estado / رأس الدولة","presidente de la Comunidad / رئيس الجهة ","presidente del Gobierno / رئيس الحكومة"
    ]},{
    question:"Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma? / أي من هذه الخيارات هي لغة رسمية مشتركة في جهة مستقل",
    ansower:"El gallego / الكايكو",
 option:[
"El murciano / المورسيانو","El aragonés / الاراكون","El gallego / الكايكو"  ]},{
question:"La administración civil de España corresponde al poder / تتوافق الإدارة المدنية لإسبانيا مع السلطة",
ansower:"Ejecutivo / التنفيذية",
option:[
"Legislativo / التشريعية","Judicial / القضائية","Ejecutivo / التنفيذية"
  ]}, {
    question:"Durante el siglo XX, la democracia en España se instauró bajo el reinado de / خلال القرن العشرين ، تأسست الديمقراطية في إسبانيا في عهد",
    ansower:"Juan Carlos I",
    option:[
    "Felipe IV ","Juan Carlos I","Alfonso XIII "
     ]},{
question:"Los españoles que obtienen la nacionalidad por residencia tienen los mismos derechos que los nacidos en España  يتمتع الإسبان الذين يحصلون على الجنسية عن طريق الإقامة بنفس الحقوق التي يتمتع بها من ولدوا في إسبانيا",
ansower:"Verdadero / صحيح",
option:[
"Verdadero / صحيح","Falso / خطأ",""
 ]},{
question:"Es obligatorio cumplir las sentencias de los jueces y tribunales / وجوب الامتثال لأحكام القضاة والمحاكم",
 ansower:"Verdadero / صحيح",
 option:[
 "Verdadero / صحيح","Falso / خطأ",""
    ]},{                          
question:"Todos los españoles tienen el derecho y el deber de defender a España / من حق جميع الإسبان ومن واجبهم الدفاع عن إسبانيا",
ansower:"Verdadero / صحيح",
option:[
 "Verdadero / صحيح","Falso / خطأ",""
    ]},{
question:"A qué grupo de islas pertenecen Mallorca, Menorca e Ibiza? / إلى أي مجموعة من الجزر تنتمي مايوركا ومينوركا وإيبيزا؟",
ansower:" Islas Baleares / جزر البليار",
option:[
    "Canarias / جزر الكناري"," Islas Baleares / جزر البليار","Islas Cíes / جزيرة سيس"
 ]},{
question:"Entre los países de Europa, España es uno de los más / من بين دول أوروبا ، تعد إسبانيا واحدة من أكثر الدول",
ansower:"cálidos / دافئة",
option:[
"lluviosos / ممطرة","cálidos / دافئة","fríos / باردة"
]}, {
 question:"Uno de los compositores españoles de música clásica más famosos es / أحد أشهر مؤلفي الموسيقى الكلاسيكية الإسبانية هو",
ansower:"Manuel de Falla / مانويل دي فالا",
option:[
"Josep Carreras / جوزيب كاريراس","Plácido Domingo / بلاسيدو دومينغو","Manuel de Falla / مانويل دي فالا"
]},{
question:"En qué ciudad de España se encuentra una famosa mezquita, patrimonio de la Humanidad? / في أي مدينة من إسبانيا يوجد مسجد مشهور ، موقع تراث عالمي؟",
ansower:"Córdoba / قرطبة",
option:[
"Madrid / مدريد","Córdoba / قرطبة","Santiago de Compostela / سانتياغو دي كومبوستيلا"
 ]},{
question:"En qué año conquistaron Granada los Reyes Católicos? / في أي عام احتل الملوك الكاثوليك غرناطة؟",
ansower:"1492",
option:[
"1452","1492","1472"
    ]},{
question:"Los trámites relativos al permiso de conducir se realizan en / يتم تنفيذ الإجراءات المتعلقة برخصة القيادة في",
ansower:"las jefaturas de tráfico / ادارة المرور",
option:[
    "las jefaturas de tráfico / ادارة المرور","las comisarías de policía / مراكز الشرطة","las delegaciones de Gobierno / الوفود الحكومية"
    ]},{
question:"EL IVTM (Impuesto de Vehículos de Tracción Mecánica) es el impuesto que pagan / IVTM (ضريبة مركبات الجر ميكانيكيًا) هي الضريبة التي يدفعونها",
ansower:"los propietarios de coches aptos para la circulación / أصحاب السيارات الصالحة للطرق",
option:[
 "las personas que obtienen el permiso de conducir / الأشخاص الذين حصلوا على رخصة قيادة","los propietarios de coches aptos para la circulación / أصحاب السيارات الصالحة للطرق","los viajeros que utilizan el transporte urbano / المسافرون الذين يستخدمون النقل الحضري"
    ]},{
question:"Legalmente, los españoles tienen dos apellidos, el primero es  / من الناحية القانونية ، لدى الإسبان لقبان ، الأول هو",
ansower:"el materno o el paterno / الأم أو الأب",
option:[
"el materno o el paterno / الأم أو الأب","el paterno / الأب","el materno / الأم"
    ]},{
question:"Además de los padres y profesores, ¿quiénes intervienen en el control y la gestión de los centros educativos sostenidos por la Administración? / بالإضافة إلى أولياء الأمور والمعلمين ، من هم المشاركون في مراقبة وإدارة المراكز التعليمية المدعومة من الإدارة؟",
ansower:"Los alumnos del centro / طلاب المركز",
option:[
 "Los inspectores de educación / مفتشو التعليم","Los concejales del municipio / مستشارو البلدية","Los alumnos del centro / طلاب المركز"
    ]},{
question:"La tarjeta sanitaria europea permite acceder gratuitamente a la sanidad pública durante / تسمح البطاقة الصحية الأوروبية بالوصول المجاني إلى الصحة العامة أثناء",
ansower:"2 años",
option:[
    "12 meses","2 años","6 meses"
     ]},{
 question:"La organización que trabaja para conseguir la integración de las personas con discapacidad visual es / المنظمة التي تعمل على تحقيق دمج الأشخاص ذوي الإعاقة البصرية هي",
 ansower:"La ONCE",
 option:[
"La ONCE","Cáritas","El CERMI"
]},{
question:"Un acuerdo firmado entre la empresa y los representantes de los trabajadores (sindicatos) es / اتفاقية موقعة بين الشركة وممثلي العمال (النقابات) هي",
ansower:"Un convenio colectivo / اتفاق جماعي",
 option:[
"Un finiquito / التسوية","Un código laboral / قانون العمل","Un convenio colectivo / اتفاق جماعي"
]}     
 ];    
    