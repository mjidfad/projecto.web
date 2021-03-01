
var inicio9=document.querySelector(".b-9");/*t*/
var start_9=document.querySelector(".test9");/*t*/
var start1=document.querySelector(".inicio");
var seguinete9=document.querySelector(".bb3_9");/*t*/
var list9=document.querySelector(".option-list9");/*t*/
var box9=document.querySelector(".fin9");/*t*/
var out9=document.querySelector(".exit9");/*t*/
var extra9=document.querySelector(".button9");/*t*/
var b111=document.querySelector(".b11");

var s9=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg9=localStorage.getItem("mjid9");/*t*/
 if(storg9==null){
     inicio9.className="b-9";
 }else{ inicio9.className=storg9;}})();

function mjid9() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_9.classList.add("start-test9");//add boxtest de test3
    s9=2700;
    numbe9(1);
    quest9(0);
    optiselc9();}
      //button reptir test 1

function oki1_9(){/*t*/
    box9.classList.remove("active9");
    start_9.classList.add("start-test9");
    seguinete9.classList.remove("bbb3");  
    s9=2700;
    counter=0;
    num=1;
    score=0;
    quest9(counter);
    numbe9(num);
    optiselc9();
    countdown9=setInterval(function(){setup9();},1000);}  /*t*/ 
    
    seguinete9.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions9.length-1) {
            counter++;
            num++;
            quest9(counter);
            numbe9(num);
           seguinete9.classList.remove("bbb3");}
            else{
            start_9.classList.remove("start-test9");
            fin9(); }}

    function p2_9(){/*pulsar buton home para atras*/ /*t*/
            start_9.classList.remove("start-test9");
            start1.classList.remove("star-inicio");
            s9=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest9(index){/*gunction de preguntas array*/  /*t*/
            var text9=document.querySelector(".pregunta9");
            var list9=document.querySelector(".option-list9");
           
            text9.innerHTML='<h1>'+questions9[index].question+'</h1>'; 
            list9.innerHTML='<div class="opti9"><h3>'+questions9[index].option[0]+'</h3></div>'
            +'<div class="opti9"><h3>'+questions9[index].option[1]+'</h3></div>'
            +'<div class="opti9"><h3>'+questions9[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list9.querySelectorAll(".opti9");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc9(this)"); 
            if(list9.children[i].textContent==""){
                list9.children[i].classList.add("quito9"); } }}
         

    function optiselc9(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions9[counter].ansower;
            var allopcion=list.children.length;
            if(userans==correct){ score += 1; ansower.style.background="blue";}
           else{ansower.style.background="red"; }
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list9.children[i].textContent==correct){list9.children[i].style="background:green;";  }
            else if(list9.children[i].textContent==""){
            list9.children[i].classList.add("quito9");}/*t*/
            else{ list9.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;//?
            seguinete9.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe9(index){/*t*/
            var numbe=document.querySelector(".footer9");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions9.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto9=document.getElementById("col9");
            var fini9=document.querySelector(".finish9");
    function fin9(){/*t*/
            start_9.classList.remove("start-test9");
            box9.classList.add("active9");
             //resultado de el tirpo
var minute=44-Math.floor(s12/60); 
var second=60-s9 %60;
if(second<10  ){second="0"+second;}
if (minute <10 ) {minute="0"+minute;}

            if(score>=15){
out9.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions9.length +"</h1></h1></span>";
inicio9.className="green9";
fini9.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid9","green9");//poner local storge
foto9.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out9.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions9.length +"</h1></h1></span>";
inicio9.className="red9";
fini9.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid9","red9");//poner local storge
foto9.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_9(){/*t*/
    // window.location.reload();
    start_9.classList.remove("start-test9");
    start1.classList.remove("star-inicio");
    box9.classList.remove("active9");
    s9=2700;
    counter=0;
    num=1;
    score=0;
    quest9(counter);
    numbe9(num);}

/*time descont*/
     var s9=2700;
count9=document.querySelector(".timer9"),
countdown9=setInterval(function(){
setup9();},1000);/*t*/
function setup9(){/*t*/
    var minutes=Math.floor(s9/60);
        sec=s9 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count9.innerHTML=minutes+":"+sec;}
        if(s9<600){ count9.style.color="red";
                clearInterval(countdown9);
                count9.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s9>0){s9=s9-1;}
               else{
                    clearInterval(countdown9);
                    count9.innerHTML="<p style='color red'>time off</p>";
                    count9.style.background="red";
                    count9.style.color="black"; }}
     
    
    
    
var questions9=[
    {question:"El funcionamiento de las instituciones se garantiza por la....... de los poderes ejecu- tivo, legislativo y judicial / عمل المؤسسات مضمون من قبل…..... من السلطات التنفيذية والتشريعية والقضائية",
    ansower:"Separación / انفصال",
    option:[
    "Separación / انفصال","Relación / علاقة","Unión / اتحاد"
    ]},{
    question:"El mando supremo de las Fuerzas Armadas corresponde al  يتولى القيادة العليا للقوات المسلحة",
    ansower:"Rey / الملك",
    option:[
    "presidente del Gobierno / رئيس الحكومة","ministro de Defensa / وزير الدفاع","Rey / الملك"
    ]},
    {question:"Cuántas franjas tiene la bandera de España? / كم عدد الخطوط التي يحتوي عليها علم إسبانيا؟",
    ansower:"Tres horizontales / ثلاثة أفقية",
    option:[
        "Tres horizontales / ثلاثة أفقية","Dos horizontales / اثنان أفقية","Tres verticales / ثلاثة عمودية"
    ]},{
    question:"Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma? / أي من الخيارات التالية هي لغة رسمية مشتركة في جهة مستقلة؟",
    ansower:"El valenciano / بلنسية",
    option:[
    "El murciano / مورسيان","El valenciano / بلنسية","El bable / استوريانو"
    ]},
    {question:"Cuántas veces ha presidido España el Consejo Europeo?  كم مرة ترأست إسبانيا المجلس الأوروبي؟",
    ansower:"Cuatro veces / أربع مرات",
    option:[
    "Dos veces / مرتان","Tres veces / تلات مرات","Cuatro veces / أربع مرات"
    ]},{
    question:"En primera votación para la elección del presidente del Gobierno, se requiere una mayoría ...... de los votos de los diputados del Congreso / في الاقتراع الأول لانتخاب رئيس الوزراء يتطلب الأغلبية ...... من أصوات نواب الكونجرس",
    ansower:"absoluta / مطلقة",
    option:[
    "simple / بسيطة","absoluta / مطلقة","relativa / نسبية"
    ]},
    {question:"Cuál es de estos organismos forma parte del poder judicial? / أي من هذه الهيئات هي جزء من القضاء؟",
    ansower:"El Tribunal Supremo / المحكمة العليا",
    option:[
    "El Tribunal Supremo / المحكمة العليا","El Tribunal de Cuentas / ديوان المحاسبة","El Tribunal Constitucional / المحكمة الدستورية"
    ]},{
    question:"El presidente del Gobierno de España entre 1982 y 1996 fue / كان رئيس حكومة إسبانيا بين عامي 1982 و 1996",
    ansower:"Felipe González / فيليبي جونزاليس",
    option:[
    "José Luis Rodríguez Zapatero / خوسيه لويس رودريغيز ثاباتيرو","José María Aznar / خوسيه ماريا أثنار","Felipe González / فيليبي جونزاليس"
    ]},
    {question:"En materia de relaciones internacionales, la competencia es de / في مسائل العلاقات الدولية ، يكون الاختصاص",
    ansower:"el estado / الدولة",
    option:[
    "las comunidades autónomas / الجهات المستقلة","el estado / الدولة","los ayuntamientos / البلديات"
    ]},{
    question:"Los ciudadanos de la UE y de algunos países con acuerdos de reciprocidad, residentes en España, pueden votar en las elecciones / يمكن لمواطني الاتحاد الأوروبي وبعض الدول التي لديها اتفاقيات المعاملة بالمثل والمقيمين في إسبانيا التصويت في الانتخابات",
    ansower:"locales / المحلية",
    option:[
    "locales / المحلية","autonómicas / الإقليمية","generales / العامة"
    ]},
    {question:"Se garantiza el secreto de las comunicaciones de los españoles, salvo resolución judicial / سرية اتصالات الإسبان مكفولة ، باستثناء القرار القضائي",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},{
    question:"La declaración de la renta de las personas físicas debe hacerse anualmente / يجب تقديم إقرار دخل الأفراد سنويًا",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},
    {question:"Todos los ciudadanos tienen derecho a expresar y difundir libremente sus pensamientos, ideas y opiniones / لجميع المواطنين الحق في التعبير عن أفكارهم وأفكارهم وآرائهم ونشرها بحرية",
    ansower:"Verdadero / صحيح",
    option:[
    "Verdadero / صحيح","Falso / خطأ",""
    ]},{
    question:"Cuántas comunidades autónomas hay en España? / كم عدد جهات الحكم الذاتي الموجودة في إسبانيا؟",
    ansower:"17",
    option:[
    "7","17","27"
    ]},
    {question:"La extensa llanura situada en la zona central de España se denomina / يسمى السهل الشاسع الواقع في وسط إسبانيا",
    ansower:"Meseta / هضبة",
    option:[
    "Península / شبه جزيرة","Sierra / سلسلة جبال","Meseta / هضبة"
    ]},{
    question:"Cuál de estas tres obras literarias es de Federico García Lorca? / أي من هذه الأعمال الأدبية الثلاثة لفيديريكو غارسيا لوركا؟",
    ansower:"La casa de Bernarda Alba / منزل برناردا ألبا",
    option:[
    "El Quijote / كيشوت","El Cantar de Mio Cid /أغنية ميو سيد","La casa de Bernarda Alba / منزل برناردا ألبا"
    ]},
    {question:"Salvador Dalí era / كان سلفادور دالي",
    ansower:"pintor / رسام",
    option:[
    "escritor / كاتب","pintor / رسام","director de cine / مخرج سينمائي"
    ]},{
    question:"Qué tres culturas convivieron en la España medieval? / ما هي الثقافات الثلاث التي تعايشت في إسبانيا في العصور الوسطى؟",
    ansower:"La cristiana, la judía y la musulmana / المسيحية واليهودية والمسلمة",
    option:[
    "La cristiana, la judía y la musulmana / المسيحية واليهودية والمسلمة","La fenicia, la judía y la musulmana / الفينيقية واليهودية والمسلمة","La griega, la cristiana y la judía / اليونانية والمسيحية واليهودية"
    ]},
    {question:"Cuál de estas etapas educativas no es obligatoria en España? / أي من المراحل التعليمية التالية ليست إلزامية في إسبانيا؟",
    ansower:"Universitaria / الجامعية",
    option:[
    "Primaria / الابتدائية","Secundaria / الثانوية","Universitaria / الجامعية"
    ]},{
    question:"Cómo se llama la revisión que deben pasar obligatoriamente los coches? / ما هو الفحص الذي يجب أن تخضع له السيارات؟",
    ansower:"ITV ( Inspección Técnica de Vehículos) / ITV (الفحص الفني للمركبات)",
    option:[
    "IBI (Impuesto sobre Bienes Inmuebles) / IBI (ضريبة العقارات)","ITE (Inspección Técnica de Edificios) / ITE (الفحص الفني للمباني)","ITV ( Inspección Técnica de Vehículos) / ITV (الفحص الفني للمركبات)"
    ]},
    {question:"Un colegio concertado es un colegio privado que / المدرسة المستقلة هي مدرسة خاصة",
    ansower:"recibe subvenciones del Gobierno / يتلقى المنح الحكومية",
    option:[
    "recibe dinero de los bancos / يتلقى الأموال من البنوك","recibe subvenciones del Gobierno / يتلقى المنح الحكومية","financian los padres de los alumnos / آباء الطلاب"
    ]},{
    question:"Cuál de estas comarcas tiene una mayor producción de vino? / أي من هذه المناطق لديها أعلى إنتاج للنبيذ؟",
    ansower:"La Ribera del Duero / ريبيرا ديل دويرو",
    option:[
    "La Ribera del Duero / ريبيرا ديل دويرو","El Bierzo / البيرزو","La Vera / لا فيرا"
    ]},
    {question:"Cuál es el tiempo mínimo de cotización que da derecho a una pensión de jubilación? / ما هو الحد الأدنى لفترة الاشتراك التي تؤهلك لمعاش تقاعدي؟",
    ansower:"15 años",
    option:[
    "15 años","20 años","25 años"
    ]},{
    question:"Cómo se llama el establecimiento donde se pueden comprar medicinas con precios regulados, con un horario establecido mínimo y servicios de guardia? / ما هو اسم المؤسسة حيث يمكنك شراء الأدوية بأسعار منظمة ، مع حد أدنى للجدول الزمني المحدد وخدمات عند الطلب؟",
    ansower:"Farmacia / صيدلية",
    option:[
    "Hospital / مستشفى","Centro de Salud / مركز صحي","Farmacia / صيدلية"
    ]},
    {question:"La norma general que regula los derechos de los trabajadores en España es / القاعدة العامة التي تنظم حقوق العمال في إسبانيا هي",
    ansower:"el Estatuto de los Trabajadores / قانون العمال",
    option:[
    "el Servicio Público de Empleo Estatal / دائرة التوظيف العامة الحكومية ","el Estatuto de los Trabajadores / قانون العمال"," la Constitución / الدستور"
    ]}
    
    
    ];
     

      