
var inicio3=document.querySelector(".b-3");/*t*/
var start_3=document.querySelector(".test3");/*t*/
var start1=document.querySelector(".inicio");
var seguinete3=document.querySelector(".bb3_3");/*t*/
var list3=document.querySelector(".option-list3");/*t*/
var box3=document.querySelector(".fin3");/*t*/
var out3=document.querySelector(".exit3");/*t*/
var extra3=document.querySelector(".button3");/*t*/
var b111=document.querySelector(".b11");

var s3=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg3=localStorage.getItem("mjid3");/*t*/
 if(storg3==null){
     inicio3.className="b-3";
 }else{ inicio3.className=storg3;}})();

function mjid3() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_3.classList.add("start-test3");//add boxtest de test3
    s3=2700;
    numbe3(1);
    quest3(0);
    optiselc3();}
      //button reptir test 1

function oki1_3(){/*t*/
    box3.classList.remove("active3");
    start_3.classList.add("start-test3");
    seguinete3.classList.remove("bbb3");  
    s3=2700;
    counter=0;
    num=1;
    score=0;
    quest3(counter);
    numbe3(num);
    optiselc3();
    countdown3=setInterval(function(){setup3();},1000);}  /*t*/ 
    
    seguinete3.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions3.length-1) {
            counter++;
            num++;
            quest3(counter);
            numbe3(num);
            seguinete3.classList.remove("bbb3");}
            else{
            start_3.classList.remove("start-test3");
            fin3(); }}

    function p2_3(){/*pulsar buton home para atras*/ /*t*/
            start_3.classList.remove("start-test3");
            start1.classList.remove("star-inicio");
            s3=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest3(index){/*gunction de preguntas array*/  /*t*/
            var text3=document.querySelector(".pregunta3");
            var list3=document.querySelector(".option-list3");
           
            text3.innerHTML='<h1>'+questions3[index].question+'</h1>'; 
            list3.innerHTML='<div class="opti3"><h3>'+questions3[index].option[0]+'</h3></div>'
            +'<div class="opti3"><h3>'+questions3[index].option[1]+'</h3></div>'
            +'<div class="opti3"><h3>'+questions3[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list3.querySelectorAll(".opti3");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc3(this)"); 
            if(list3.children[i].textContent==""){
                list3.children[i].classList.add("quito3"); } }}
         

    function optiselc3(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions3[counter].ansower;
            var allopcion=list3.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
            else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list3.children[i].textContent==correct){list3.children[i].style.background="green"; }
            else if(list3.children[i].textContent==""){
            list3.children[i].classList.add("quito3");}/*t*/
            else{ list3.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete3.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe3(index){/*t*/
            var numbe=document.querySelector(".footer3");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions3.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto3=document.getElementById("col3");
            var fini3=document.querySelector(".finish3");
    function fin3(){/*t*/
            start_3.classList.remove("start-test3");
            box3.classList.add("active3");
            //resultado de el tirpo
            var minute=44-Math.floor(s3/60); 
            var second=60-s3 %60;
            if(second<10  ){second="0"+second;}
            if (minute <10 ) {minute="0"+minute;}

            if (score>=15) {
out3.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions3.length +"</h1></h1></span>";
inicio3.className="green3";
fini3.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid3","green3");//poner local storge
foto3.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out3.innerHTML="<span style='color:red;' ><h1>no has probado<h1>"+ score +" de "+ questions3.length +"</h1></h1></span>";
inicio3.className="red3";
fini3.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid3","red3");//poner local storge
foto3.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_3(){/*t*/
    // window.location.reload();
    start_3.classList.remove("start-test3");
    start1.classList.remove("star-inicio");
    box3.classList.remove("active3");
    s3=2700;
    counter=0;
    num=1;
    score=0;
    quest3(counter);
    numbe3(num);}

/*time descont*/
     var s3=2700;
count3=document.querySelector(".timer3"),
countdown3=setInterval(function(){
setup3();},1000);/*t*/
function setup3(){/*t*/
    var minutes=Math.floor(s3/60);
        sec=s3 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count3.innerHTML=minutes+":"+sec;}
        if(s3<600){ count3.style.color="red";
                clearInterval(countdown3);
                count3.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s3>0){s3=s3-1;}
               else{
                    clearInterval(countdown3);
                    count3.innerHTML="<p style='color red'>time off</p>";
                    count3.style.background="red";
                    count3.style.color="black"; }}
     
 var questions3=[{
        question:"La ikurriña es la bandera oficial / ايكوريني هو العلم الرسمي",
        ansower:"del País Vasco / بلاد الباسك",
                        option:[
        " de Cataluña / كاطلونيا","del Principado de Asturias / امارة استوريس","del País Vasco / بلاد الباسك"
                            ]},{
                        question:"Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma? / أي من الخيارات التالية هي لغة رسمية مشتركة في جهة مستقلة",
                        ansower:"el catalán / الكاتالونية",
                        option:[
                            "el catalán / الكاتالونية","el murciano / مورسيان","el asturleonés / الاستورليوني"
                        ]},{
                        question:"A cuál de estas organizaciones internacionales pertenece España? / إلى أي من هذه المنظمات الدولية تنتمي إسبانيا",
                        ansower:"A la Organización de las Naciones Unidas (ONU) / إلى الأمم المتحدة",
                        option:[
                        "Al Mercado Común del Sur (MERCOSUR) / إلى السوق الجنوبية المشتركة (ميركوسور)","A la Organización de las Naciones Unidas (ONU) / إلى الأمم المتحدة","A la Unión Económica Euroasiática (UEE) / إلى الاتحاد الاقتصادي الأوراسي (UEE)"
                        ]},
                        {
                        question:"La tercera autoridad del Estado, tras el Rey y el presidente del Gobierno, es el / السلطة الثالثة للدولة  بعد الملك ورئيس الوزراء  هي",
                        ansower:" Presidente del Congreso de los Diputados / رئيس مجلس النواب",
                        option:[
                        " Presidente del Congreso de los Diputados / رئيس مجلس النواب","Jefe del Estado Mayor del Ejército / رئيس أركان الجيش","Ministro del Interior / وزير الداخلية"
                         ]},{
                        question:"La Cámara de representación territorial se llama / تسمى غرفة التمثيل الإقليمي",
                        ansower:"Senado / مجلس الشيوخ",
                        option:[
                        "Cámara de Comercio / الغرفة التجارية"," Congreso de los diputados / مجلس النواب","Senado / مجلس الشيوخ"
                        ]},{
                        question:"La vigilancia de puertos y aeropuertos, fronteras y costas corresponde a / يتوافق مراقبة الموانئ والمطارات والحدود والسواحل",
                        ansower:"La Guardia Civil / الحرس المدني",
                        option:[
                        " La Policía Nacional / الشرطة الوطنية","La Policía Local / الشرطة المحلية","La Guardia Civil / الحرس المدني"
                         ]}, {
                        question:"Cómo se llama la policía autonómica del País Vasco? / ما هو اسم الشرطة المستقلة في بلاد الباسك؟",
                         ansower:"Ertzaintza / إرتزاينتزا",
                        option:[
                        "La Guardia Civil / الحرس المدني","Mossos d'Esquadra / موسوس دي إسكوادرا","Ertzaintza / إرتزاينتزا"
                        ]},{
                        question:"Los trámites de inscripción de un recién nacido o registro de un matrimonio, se realizan en el / تتم إجراءات تسجيل المولود أو تسجيل الزواج في",
                        ansower:"Registro Civil / السجل المدني",
                     option:[
                   "Registro Civil / السجل المدني"," Registro Mercantil / تسجيل تجاري"," Registro de la Propiedad / تسجيل الملكية"  ]},{
                    question:"Quién es el representante de la Administración del Estado en una comunidad autónoma? / من هو ممثل إدارة الدولة في منطقة الحكم الذاتي؟",
                    ansower:"El delegado del Gobierno / مندوب الحكومة",
                    option:[
                    "El delegado del Gobierno / مندوب الحكومة","El presidente de la comunidad autónoma / رئيس مجتمع الحكم الذاتي","El presidente de la Asamblea autonómica / رئيس مجلس الحكم الذاتي"
                      ]}, {
                        question:"Además de en los consulados, los españoles que residen fuera de España pueden votar / بالإضافة إلى القنصليات ، يمكن للإسبان الذين يعيشون خارج إسبانيا التصويت",
                        ansower:"por correo postal / عن طريق البريد",
                        option:[
                        "por Internet / عن طريق الانترنت","por teléfono / عن طريق الهاتف","por correo postal / عن طريق البريد"
                         ]},{
                    question:"En España las fuerzas de seguridad pueden entrar en un domicilio privado sin resolución judicial en cualquier momento / في إسبانيا ، يمكن لقوات الأمن دخول منزل خاص دون قرار قضائي في أي وقت",
                    ansower:"Falso / خطأ",
                    option:[
                    "Verdadero / صحيح","Falso / خطأ",""
                     ]},{
                    question:"La ley limita el acceso de terceras personas a datos de carácter personal / يحد القانون من وصول الأطراف الثالثة إلى البيانات الشخصية",
                     ansower:"Verdadero / صحيح",
                     option:[
                     "Verdadero / صحيح","Falso / خطأ",""
                        ]},{                         
                    question:"Los españoles tienen derecho a elegir libremente su residencia y a circular libremente por el territorio nacional  للإسبان الحق في اختيار محل إقامتهم بحرية والتنقل بحرية في جميع أنحاء التراب الوطني ",
                    ansower:"Verdadero / صحيح",
                    option:[
                     "Verdadero / صحيح","Falso / خطأ",""
                        ]},{
                    question:"Las instituciones de la comunidad autónoma de......tienen su sede en Valladolid / مؤسسات مجتمع الحكم الذاتي ...... مقرها في بلد الوليد",
                    ansower:"Castilla y León / قشتالة و ليون",
                    option:[
                        "Castilla-La Mancha / كاستيا لا مانسا","Castilla y León / قشتالة و ليون","Canarias / الكناري"
                     ]},{
                    question:"En qué comunidad autónoma se encuentra la ciudad de Logroño? / في أي جهة مستقلة تقع مدينة لوغرونيو",
                    ansower:"La Rioja / لاريوخا",
                    option:[
                    "La Rioja / لاريوخا","Castilla y León / قستالة و ليون","País Vasco / بلاد الباسك"
                    ]}, {
                     question:"Miguel Hernández era un famoso...... español nacido en Orihuela / كان ميغيل هيرنانديز .....إسبانيًا مشهورًا ولد في أوريويلا",
                    ansower:"Poeta / شاعر",
                    option:[
                    "Poeta / شاعر","Cantante / مطرب","Actor / ممتل"
                    ]},{
                    question:"El baile típico de Galicia es / رقصة غاليسيا النموذجية هي",
                    ansower:"la muñeira / الدمية",
                    option:[
                    "el chotis / الشوتيس","la sardana / رقصة السردانة","la muñeira / الدمية"
                     ]},{
                    question:"Quién recibió el Premio Nobel de Fisiología y Medicina en 1959? / من حصل على جائزة نوبل في علم وظائف الأعضاء والطب عام 1959؟ ",
                    ansower:"Severo Ochoa",
                    option:[
                    "Severo Ochoa","Camilo José Cela","Santiago Ramón y Cajal"
                        ]},{
                    question:"Para qué gestión es necesario cumplir el siguiente requisito: “Haber residido en España durante 10 años de forma legal, continuada e inmediatamente anterior a la solicitud ? / ما هي الإدارة اللازمة للوفاء بالمتطلبات التالية أن تكون قد أقمت في إسبانيا لمدة 10 سنوات بشكل قانوني ومستمر وقبل تقديم الطلب مباشرة ",
                    ansower:"Para solicitar la nacionalidad española / للتقدم بطلب للحصول على الجنسية الإسبانية",
                    option:[
                        "Para solicitar la nacionalidad española / للتقدم بطلب للحصول على الجنسية الإسبانية","Para solicitar la ayuda por desempleo / لتقديم طلب مساعدة البطالة","Para solicitar una beca de estudios / للتقدم بطلب للحصول على منحة دراسية"
                        ]},{
                    question:"En España, las parejas con hijos que se divorcian pueden tener su custodia / في إسبانيا ، يمكن للأزواج الذين لديهم أطفال مطلقين الحصول على حضانتهم",
                    ansower:"compartida / مشتركة",
                    option:[
                     "exclusiva / حصرية","dividida / منقسمة","compartida / مشتركة"
                        ]},{
                    question:"El documento identificativo obligatorio para los españoles dentro del territorio nacional es / وثيقة الهوية الإلزامية للإسبان داخل الأراضي الوطنية هي",
                    ansower:"El documento nacional de identidad (DNI) / وثيقة الهوية الوطنية (DNI)",
                    option:[
                    "El pasaporte / جواز السفر","El documento nacional de identidad (DNI) / وثيقة الهوية الوطنية (DNI)","El número de identificación fiscal (NIF) / رقم التعريف الضريبي (NIF)"
                        ]},{
                    question:"Para hacer Formación Profesional Básica es necesario / للقيام بالتدريب المهني الأساسي فمن الضروري ",
                    ansower:"haber cumplido 15 años / بعد أن بلغ من العمر 15 عامًا",
                    option:[
                     "haber pasado un año en el extranjero / بعد أن أمضى سنة في الخارج","haber cumplido 15 años / بعد أن بلغ من العمر 15 عامًا","haber completado el Bachillerato / أكمل شهادة البكالوريا"
                        ]},{
                    question:"Cuál de los siguientes no es un medio público de comunicación audiovisual? / أي مما يلي ليس وسيلة عامة للاتصال السمعي البصري؟",
                    ansower:"Instituto de la Cinematografía y de las Artes Audiovisuales / معهد التصوير السينمائي والفنون السمعية البصرية",
                    option:[
                    "Radio Nacional de España / راديو اسبانيا الوطني","Instituto de la Cinematografía y de las Artes Audiovisuales / معهد التصوير السينمائي والفنون السمعية البصرية","Televisión Española / التلفزيون الاسباني"
                         ]},{
                     question:"Cuál de estas tres recomendaciones se puede encontrar en un parque? / أي من هذه التوصيات الثلاث يمكن العثور عليها في الحديقة؟",
                     ansower:"Respete las plantas y el mobiliario urbano / احترم النباتات والأثاث الحضري",
                     option:[
                    "Es conveniente abonar el billete con el importe exacto / من المريح دفع التذكرة بالمبلغ المحدد","Respete las plantas y el mobiliario urbano / احترم النباتات والأثاث الحضري","Mantenga la distancia de seguridad con el vehículo precedente   حافظ على مسافة آمنة من السيارة التي أمامك"
                    ]},{
                    question:"El acrónimo RENFE corresponde a  / مع RENFE يتوافق الاختصار",
                    ansower:"Red Nacional de los Ferrocarriles Españoles / الشبكة الوطنية للسكك الحديدية الإسبانية",
                     option:[
                    "Red Nacional de Fundaciones Estatales / الشبكة الوطنية لمؤسسات الدولة","Red Nacional de los Ferrocarriles Españoles / الشبكة الوطنية للسكك الحديدية الإسبانية","Red Nacional de Fondos Europeos /الشبكة الوطنية للصناديق الأوروبية "
                    ]}     
                     ];    
                                           