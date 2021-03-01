
var inicio2=document.querySelector(".b-2");/*t*/
var start_2=document.querySelector(".test2");/*t*/
var start1=document.querySelector(".inicio");
var seguinete2=document.querySelector(".bb3_2");/*t*/
var list2=document.querySelector(".option-list2");/*t*/
var box2=document.querySelector(".fin2");/*t*/
var out2=document.querySelector(".exit2");/*t*/
var extra2=document.querySelector(".button2");/*t*/
var b111=document.querySelector(".b11");

var s2=2700;
var counter=0;
var num=1;
var score=0;

(()=>{//aplicar local sorge
 var storg2=localStorage.getItem("mjid2");/*t*/
 if(storg2==null){
     inicio2.className="b-2";
 }else{ inicio2.className=storg2;}})();

function mjid2() {//buton test2  /*t*/
    start1.classList.add("star-inicio");
    start_2.classList.add("start-test2");//add boxtest de test2
    s2=2700;
    numbe2(1);
    quest2(0);
    optiselc2();}
      //button reptir test 1

function oki1_2(){/*t*/
    box2.classList.remove("active2");
    start_2.classList.add("start-test2");
    seguinete2.classList.remove("bbb3");  
    s2=2700;
    counter=0;
    num=1;
    score=0;
    quest2(counter);
    numbe2(num);
    optiselc2();
    countdown2=setInterval(function(){setup2();},1000);}  /*t*/ 
    
    seguinete2.onclick=()=>{/*buton seguiente*/ /*t*/
        if(counter<questions2.length-1) {
            counter++;
            num++;
            quest2(counter);
            numbe2(num);
            seguinete2.classList.remove("bbb3");}
            else{
            start_2.classList.remove("start-test2");
            fin2(); }}

    function p2_2(){/*pulsar buton home para atras*/ /*t*/
            start_2.classList.remove("start-test2");
            start1.classList.remove("star-inicio");
            s2=2700;
            counter=0;
            num=1;
            score=0;}       
     
    function quest2(index){/*gunction de preguntas array*/  /*t*/
            var text=document.querySelector(".pregunta2");
            var list2=document.querySelector(".option-list2");
           
            text.innerHTML='<h1>'+questions2[index].question+'</h1>'; 
            list2.innerHTML='<div class="opti2"><h3>'+questions2[index].option[0]+'</h3></div>'
            +'<div class="opti2"><h3>'+questions2[index].option[1]+'</h3></div>'
            +'<div class="opti2"><h3>'+questions2[index].option[2]+'</h3></div>';
            /*true false*/
            var list1=list2.querySelectorAll(".opti2");
            for(let i=0;i<list1.length;i++){
            list1[i].setAttribute("onclick","optiselc2(this)"); 
            if(list2.children[i].textContent==""){
                list2.children[i].classList.add("quito2"); } }}
         

    function optiselc2(ansower){/*t*/
            var userans=ansower.textContent;
            var correct=questions2[counter].ansower;
            var allopcion=list2.children.length;
            if(userans==correct){ score += 1; ansower.style.background="green"; }
            else{ansower.style.background="red";}
            
        /*cuando la respuesta es incorrecta sacar correcta automati*/
            for(var i=0;i < allopcion; i++){
            if( list2.children[i].textContent==correct){list2.children[i].style.background="green"; }
            else if(list2.children[i].textContent==""){
            list2.children[i].classList.add("quito2");}/*t*/
            else{ list2.children[i].style.background="red"; }}
                                         
        //cuamdo se selectiona deja de selecionar
            for(let i=0; i<allopcion;i++){
            list.children[i].classList.add("disab") ;
            seguinete2.classList.add("bbb3"); }}
        //contador de preguntas//
    
    function numbe2(index){/*t*/
            var numbe=document.querySelector(".footer2");
            numbe.innerHTML="<h3> pregunta "+index+" de "+questions2.length+"</h3>";}

        /*div resultado*/
 
            var bhome1=document.querySelector(".bbbb1");
            var bnext2=document.querySelector(".bbbb2");
            var foto2=document.getElementById("col2");///t
            var fini2=document.querySelector(".finish2");
            
    function fin2(){/*t*/
            start_2.classList.remove("start-test2");
            box2.classList.add("active2");

            var minute=44-Math.floor(s12/60); 
            var second=60-s2 %60;
            if(second<10  ){second="0"+second;}
            if (minute <10 ) {minute="0"+minute;}
          
           
            if (score>=15) {
out2.innerHTML="<span style='color:green;'><h1 >genial. has probado<h1>"+ score +" de "+ questions2.length +"</h1></h1></span>";
inicio2.className="green2";
 fini2.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid2","green2");//poner local storge
foto2.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";} 
            else {
out2.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions2.length +"</h1></h1></span>";
inicio2.className="red2";
fini2.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";
localStorage.setItem("mjid2","red2");//poner local storge
foto2.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";}  }

    function oki2_2(){/*t*/
    // window.location.reload();
    start_2.classList.remove("start-test2");
    start1.classList.remove("star-inicio");
    box2.classList.remove("active2");
    s2=2700;
    counter=0;
    num=1;
    score=0;
    quest2(counter);
    numbe2(num);}

/*time descont*/
     var s2=2700;
count2=document.querySelector(".timer2"),
countdown2=setInterval(function(){
setup2();},1000);/*t*/
function setup2(){/*t*/
    var minutes=Math.floor(s2/60);
        sec=s2 %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count2.innerHTML=minutes+":"+sec;}
        if(s2<600){ count2.style.color="red";
                clearInterval(countdown2);
                count2.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s2>0){s2=s2-1;}
               else{
                    clearInterval(countdown2);
                    count2.innerHTML="<p style='color red'>time off</p>";
                    count2.style.background="red";
                    count2.style.color="black"; }}
     
    
    
    

    var questions2=[
        {
        question:"La sede oficial del Rey de España es /  المقر الرسمي لملك إسبانيا ",
        ansower:"el Palacio Real / القصر الملكي",
        option:[
            "el Palacio de la Moncloa / قصر مونكلوا","el Palacio de la Zarzuela / قصر زارزويلا","el Palacio Real / القصر الملكي"
        ]},{
        question:"Las comunidades autónomas pueden utilizar, junto con la bandera de España, sus propias banderas en /  يمكن لجهات الحكم الذاتي استخدام أعلامها الخاصة مع علم إسبانيا",
        ansower:"sus edificios públicos / مبانيها العامة",
        option:[
        "actos oficiales / الأعمال الرسمية","sus edificios públicos / مبانيها العامة","sus edificios públicos y actos oficiales / المباني العامة والمناسبات الرسمية"
        ]},{
        question:"El gobierno y la protección de las provincias corresponde   الحكومة وحماية المحافظات يتوافق مع",
        ansower:"los ayuntamientos / البلديات",
        option:[
        "los ayuntamientos / البلديات"," las diputaciones /  المجالس ","las asambleas regionales / الجمعيات الإقليمية"
        ]},
        {
        question:"El Gobierno responde de su gestión política ante / تستجيب الحكومة لإدارتها السياسية ل",
        ansower:"El Congreso de los Diputados / مجلس النواب",
        option:[
         "El Congreso de los Diputados / مجلس النواب","El Rey / الملك","el Senado / مجلس الشيوخ"
            ]},{
        question:"El poder judicial está constituido por  / يتكون القضاء من",
        ansower:"los jueces y los magistrados / القضاة وقضاة الصلح",
        option:[
        " los ministros y el presidente / الوزراء والرئيس","los diputados y los senadores / النواب وأعضاء مجلس الشيوخ","los jueces y los magistrados / القضاة وقضاة الصلح"
            ]},{
        question:"Quién puede presentar una queja al Defensor del Pueblo?  من يمكنه تقديم شكوى إلى أمين المظالم؟",
        ansower:"Todos los ciudadanos, españoles o extranjeros / جميع المواطنين  الإسبان أو الأجانب",
        option:[
        "Solo los ciudadanos legalmente residentes  المواطنون المقيمون بشكل قانوني فقط","Solo los españoles mayores de 18 años / فقط الإسبان الذين تزيد أعمارهم عن 18 عامًا","Todos los ciudadanos, españoles o extranjeros / جميع المواطنين  الإسبان أو الأجانب"
            ]}, {
        question:"El Estado español se organiza territorialmente en  / الدولة الإسبانية منظمة إقليميا في",
         ansower:"Municipios, provincias y comunidades autónomas / البلديات والمقاطعات وجهات الحكم الذاتي",
        option:[
        "Municipios, cantones y regiones administrativas / البلديات والكانتونات والمناطق الإدارية","Municipios, provincias y comunidades autónomas / البلديات والمقاطعات وجهات الحكم الذاتي","Municipios, distritos y estados federales / البلديات والمقاطعات والولايات الاتحادية"
                ]},{
        question:"Cómo se llama la norma extraordinaria que dicta el gobierno en circunstancias especiales y que tiene rango de ley? / ما هو اسم القاعدة غير العادية التي تمليها الحكومة في الظروف الخاصة والتي لها قوة القانون؟",
        ansower:"Decreto ley / مرسوم قانون",
        option:[
         " Reglamento / أنظمة","Decreto ley / مرسوم قانون","Ley orgánica /  قانون عضوي"
                ]},{
        question:"Quiénes forman parte del órgano ejecutivo de las comunidades autónomas? / من هم جزء من الهيئة التنفيذية لجهات الحكم الذاتي؟ ",
        ansower:"El presidente y los consejeros / الرئيس والمديرون",
        option:[
        "El presidente y los ministros / الرئيس والوزراء","El presidente y los concejales / الرئيس والمستشارون","El presidente y los consejeros / الرئيس والمديرون"
                ]}, {
        question:"A quiénes se elige en las elecciones generales? / من ينتخب في الانتخابات العامة؟",
        ansower:"a los senadores y diputados / أعضاء مجلس الشيوخ والنواب",
        option:[
        "a los senadores y diputados / أعضاء مجلس الشيوخ والنواب","a los concejales y diputados /  أعضاء المجالس والنواب"," a los senadores y eurodiputados / أعضاء مجلس الشيوخ والنواب الاوربيون"
            ]},{
        question:"Los extranjeros en España tienen los mismos derechos que los españoles, aunque España no haya firmado tratados específicos al respecto con su país de origen   يتمتع الأجانب في إسبانيا بنفس الحقوق التي يتمتع بها الإسبان ، على الرغم من أن إسبانيا لم توقع معاهدات محددة في هذا الصدد مع بلدهم الأصلي",
        ansower:"Falso / خطأ",
        option:[
        " Verdadero / صحيح","Falso / خطأ",""
        ]},{
        question:"Las asociaciones con fines lucrativos están reguladas por ley / ينظم القانون الجمعيات الهادفة للربح",
        ansower:"Verdadero / صحيح",
        option:[
        "Verdadero / صحيح","Falso / خطأ",""
        ]},{                          
        question:"Todos deben contribuir al sostenimiento de los gastos públicos de acuerdo con su capacidad económica / يجب على الجميع المساهمة في الحفاظ على النفقات العامة حسب قدرتها الاقتصادية",
        ansower:"Verdadero / صحيح",
        option:[
            "Verdadero / صحيح","Falso / خطأ",""
        ]},{
        question:"Huesca, Teruel y Zaragoza forman parte de la comunidad autónoma de / وسكا و تيروال و سرقوسة جزء من جهة الحكم الذاتي",
        ansower:"Aragón / اراكون",
        option:[
        "Aragón / اراكون","País Vasco / بلاد الباسك","Cataluña / كاتالونيا"
        ]},{
        question:"El principal río que desemboca en el mar Mediterráneo es el / النهر الرئيسي الذي يصب في البحر الأبيض المتوسط ​​هو نهر",
        ansower:"Ebro / ايبرو",
        option:[
        "Tajo / تاخو","Ebro / ايبرو","Duero / دويرو"
        ]},{
        question:"El Ballet Nacional de España realiza  / تؤدي فرقة الباليه الوطنية الإسبانية",
        ansower:"Distintos estilos de danza / أنماط مختلفة من الرقص",
        option:["Danza contemporánea / الرقص المعاصر","Danza clásica / رقصة كلاسيكية","Distintos estilos de danza / أنماط مختلفة من الرقص"
            ]},{
        question:"Quién fue nombrado primer presidente de Gobierno después de la aprobación de la Constitución española en 1978? / من تم تعيينه كأول رئيس للوزراء بعد المصادقة على الدستور الإسباني عام 1978؟",
        ansower:"Adolfo Suárez",
        option:[
        "Felipe González","Leopoldo Calvo Sotelo","Adolfo Suárez"
            ]},{
        question:"El 6 de diciembre se celebra en España / يتم الاحتفال بيوم 6 ديسمبر في إسبانيا ",
        ansower:"El Día de la Constitución / يوم الدستور",
        option:[
        "El Día del Libro / يوم الكتاب","La llegada de Colón a América / وصول كولومبوس إلى أمريكا","El Día de la Constitución / يوم الدستور"
            ]},{
        question:"Qué cuerpo de seguridad gestiona la expedición del DNI?  ما هي الجهة الأمنية التي تدير إصدارالهوية الوطنية",
         ansower:"La Policía Nacional / الشرطة الوطنية",
        option:[
        "La Policía Nacional / الشرطة الوطنية","La Guardia Civil / الحرس المدني","La Policía Local / الشرطة المحلية"
                ]},{
        question:"La tramitación del libro de familia se realiza en / اجرائات ملف الحالة المدنية يتم في",
        ansower:"El Registro Civil / السجل المدني",
        option:[
         "El Registro Civil / السجل المدني"," La Seguridad Social / ضمان اجتماعي","Las comisarías de policía / مراكز الشرطة"
                ]},{
        question:"La hectárea es una unidad de medida referida a  / الهكتار هو وحدة القياس المشار إليها",
        ansower:"La superficie / المساحة",
        option:[
        "El tiempo / الوقت"," La masa / كتلة","La superficie / المساحة"
                ]},{
        question:"El Bachillerato en España / البكالوريا في أسبانيا",
        ansower:"Se compone de dos cursos académicos / يتكون من دورتين أكاديميتين",
        option:[
        "Es obligatorio / إلزامي","Se compone de dos cursos académicos / يتكون من دورتين أكاديميتين","Es la enseñanza a alumnos de 14 a 16 años / تعليم الطلاب من سن 14 إلى 16 سنة"
            ]},{
        question:"Cuál de estos productos exporta España a otros países en mayor cantidad que importa? / أي من هذه المنتجات تصدر إسبانيا إلى دول أخرى بكميات أكبر مما تستورد؟",
        ansower:"Calzado / الأحذية",
        option:[
        "Petróleo / البترول","Ropa / ملابس","Calzado / الأحذية"
        ]},{
        question:"Los taxis en España / سيارات الأجرة في إسبانيا",
        ansower:"llevan una luz verde cuando están libres / تحمل الضوء الأخضر عندما تكون حرة",
        option:[
        "llevan una luz verde cuando están libres / تحمل الضوء الأخضر عندما تكون حرة","se pueden compartir entre varios clientes /  يمكن مشاركتها بين عدة عملاء","son todos de color rojo / كلها دات لون احمر"
        ]},{
        question:"El organismo que gestiona los impuestos estatales y aduaneros de España es / الهيئة التي تدير الضرائب الحكومية والجمركية في إسبانيا هي",
        ansower:"la Agencia Tributaria / مصلحة الضرائب",
        option:[
        "el Instituto Nacional de Estadística / المعهد الوطني للإحصاء","el Consejo Económico y Social / المجلس الاقتصادي والاجتماعي","la Agencia Tributaria / مصلحة الضرائب"
        ]}      
    ];