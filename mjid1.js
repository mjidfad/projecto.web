
var inicio=document.querySelector(".b1");
var start=document.querySelector(".test");
var start1=document.querySelector(".inicio");
var seguinete=document.querySelector(".bb3");
var list=document.querySelector(".option-list");
var box=document.querySelector(".fin");
var out=document.querySelector(".exit");
var extra=document.querySelector(".button");
var b111=document.querySelector(".b11");
var s=2700;
var counter=0;
var num=1;
var score=0;
(()=>{//aplicar local sorge
var storg=localStorage.getItem("mjid");
 if(storg==null){
     inicio.className="b1";
    }else{ inicio.className=storg;}})();
   
    b111.onclick=()=>{
      //remove local storge from all 
    localStorage.removeItem("mjid");
    localStorage.removeItem("mjid2"); 
    localStorage.removeItem("mjid3");
    localStorage.removeItem("mjid4");
    localStorage.removeItem("mjid5");
    localStorage.removeItem("mjid6");
    localStorage.removeItem("mjid7");
    localStorage.removeItem("mjid8");
    localStorage.removeItem("mjid9");
    localStorage.removeItem("mjid10");
    localStorage.removeItem("mjid11");
    localStorage.removeItem("mjid12");
    window.location.reload();}
  
//inicio.onclick=()=>{/*pulsar button teste1*/
function mjid() {
    

start.classList.add("start-test");
start1.classList.add("star-inicio");
 s=2700;
//inicio.style.background="green";
numbe(1);
    quest(0);
    optiselc();
    cl();
  //localStorage.removeItem("mjid");  
    
  }



function p2(){/*pulsar buton home para atras*/
    start.classList.remove("start-test");
    start1.classList.remove("star-inicio");
    s=2700;
    counter=0;
  num=1;
  score=0;
 
   
}

    seguinete.onclick=()=>{/*buton seguiente*/
        
    
        if(counter<questions.length-1) {
            counter++;
            num++;
             quest(counter);
             numbe(num);
             
             seguinete.classList.remove("bbb3");}
        else{
           //alert  ("teste terminado");
            // clearInterval(countdown);
              start.classList.remove("start-test");
              box.classList.add("active");
               fin(); }
               
   }

    
 //button reptir test 1
 //box.onclick=()=>{
     function oki1(){
    box.classList.remove("active");
    start.classList.add("start-test");
    seguinete.classList.remove("bbb3");  
  
 s=2700;
 counter=0;
 num=1;
 score=0;

quest(counter);
numbe(num);
//clearInterval(countdown); 
 optiselc();
 countdown=setInterval(function(){ setup();},1000);}

function quest(index){/*gunction de preguntas array*/
    var text=document.querySelector(".pregunta");
    var list=document.querySelector(".option-list");
   
    text.innerHTML='<h1>'+questions[index].question+'</h1>';
    list.innerHTML='<div class="opti"><h3>'+questions[index].option[0]+'</h3></div>'
    +'<div class="opti"><h3>'+questions[index].option[1]+'</h3></div>'
    +'<div class="opti"><h3>'+questions[index].option[2]+'</h3></div>';
    /*true false*/
 var list1=list.querySelectorAll(".opti");
 for(let i=0;i<list1.length;i++){
    list1[i].setAttribute("onclick","optiselc(this)"); 
    if(list.children[i].textContent==""){
      list.children[i].classList.add("quito1");
 }
  }
}

 
 function optiselc(ansower){
     
    var userans=ansower.textContent;
    var correct=questions[counter].ansower;
    var allopcion=list.children.length;
      if(userans==correct){ score += 1; ansower.style.background="green"; }
      else{ansower.style.background="red";}
/*cuando la respuesta es incorrecta sacar correcta automati*/
  
  for(var i=0;i < allopcion; i++){
    if( list.children[i].textContent==correct){list.children[i].style.background="green"; }
    else if(list.children[i].textContent==""){
      list.children[i].classList.add("quito");
 }    
    else{ list.children[i].style.background="red"; }
                                 }
                        
                          
    //cuamdo se selectiona deja de selecionar
    for(let i=0; i<allopcion;i++){
        list.children[i].classList.add("disab") ;
         seguinete.classList.add("bbb3");
                                 }
                               }
 /*he quitado }*/
 
  

    //contador de preguntas//
    function numbe(index){
        var numbe=document.querySelector(".footer");
        numbe.innerHTML="<h3> pregunta "+index+" de "+questions.length+"</h3>";
        }
       

       
/*time descont*/

var s=2700;
count=document.querySelector(".time"),
countdown=setInterval(function(){
setup();},1000);/*t*/
function setup(){/*t*/
    var minutes=Math.floor(s/60);
        sec=s %60;
        if(sec<10  ){sec="0"+sec;}
        if (minutes <10 ) {minutes="0"+minutes;}  
              else {count.innerHTML=minutes+":"+sec;}
        if(s<600){ count.style.color="red";
                clearInterval(countdown);
                count.innerHTML="<p style='color:red;'>time off</p>"; }
        if(s>0){s=s-1;}
               else{
                    clearInterval(countdown);
                    count.innerHTML="<p style='color red'>time off</p>";
                    count.style.background="red";
                    count.style.color="black"; }}
     
     
    /*llamar abox reasult*/                
/*div resultado*/
  //var end=document.querySelector(".res");
   var bhome1=document.querySelector(".bbbb1");
   var bnext2=document.querySelector(".bbbb2");
   var foto=document.getElementById("col");
   var fini=document.querySelector(".finish");
                function fin(){
                   start.classList.remove("start-test");
                    box.classList.add("active");
   var minute=44-Math.floor(s12/60); 
   var second=60-s %60;
                    if(second<10  ){second="0"+second;}
                    if (minute <10 ) {minute="0"+minute;}
                   if (score>=15) {
out.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions.length +"</h1></h1></span>";
inicio.style.background ="green";
fini.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";       
foto.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/like.jpg";
localStorage.setItem("mjid","green");//poner local storge
                 } else {
 out.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions.length +"</h1></h1></span>";
 inicio.style.background ="red";
 fini.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";       
 foto.src="https://rawcdn.githack.com/mjidfad/nacionalidad/3b259227fff1bd46f11548288b9f4b0b1352eb42/dontlike.png";
 localStorage.setItem("mjid","red");//poner local storge
}
                         
                                }
    //button atras en test 1
   
        function oki2(){
      //volver a inicio
       start.classList.remove("start-test");
       start1.classList.remove("star-inicio");
       box.classList.remove("active");
       s=2700;
       counter=0;
       num=1;
       score=0;
      
      quest(counter);
      numbe(num);
      //localStorage.removeItem("mjid");
      //inicio.className="b1";
}

let questions=[{
  question:"La Constitución garantiza la libertad religiosa de los individuos y las comunidades, por eso España es un país   يضمن الدستور الحرية الدينية للأفراد والجماعات ، وبهذا المعنى فإن الدولة الإسبانية هي",
      ansower:"Aconfesional / غير طائفية",         
      option:["Aconfesional / غير طائفية","Católico / كاثوليكي","Laico  /علماني"]},
  
{ question:"Cuál de las siguientes fuerzas y cuerpos de seguridad es de ámbito nacional? / أي من القوى والهيئات الأمنية التالية ذات نطاق وطني؟",
ansower:"La Guardia Civil / الحرس المدني",
option:["Los Mossos d’Esquadra / موسوس دي إسكوادرا "," La Policía Foral / شرطة فورال","La Guardia Civil / الحرس المدني"]},
        {question:"El jefe del Estado es? / رأس الدولة هو",
      ansower:"El Rey / الملك",
option:["El presidente del Gobierno / رئيس الحكومة ","El Rey / الملك",
"El ministro de Asuntos Exteriores, Unión Europea y Cooperación  وزير الشؤون الخارجية والاتحاد الأوروبي والتعاون"
]},
      { question:"El heredero de la Corona de España, desde su nacimiento, tiene el título de Príncipe o Princesa de / يحمل وريث ولي العهد منذ ولادته لقب أمير أو أميرة",
ansower:"Asturias / أستورياس",
option:[                           
"Asturias / أستورياس","Andalucía / الأندلس","Aragón /  أراجون"]},

{
question:"Generalmente, se considera que el primer Rey de España fue /  بشكل عام ، يعتبر أن أول ملك لإسبانيا كان",
ansower:"Carlos I / كارلوس الأول",
option:[
"Felipe II / فيليب الثاني","Fernando el Santo / فرديناند المقدس","Carlos I / كارلوس الأول"
]},
{
question:"Cuántos colores tiene la bandera española? / كم عدد ألوان العلم الاسباني",
ansower:"2",
option:[
"2","3","4"
]},
{
question:"Cuántas veces ha presidido España el Consejo Europeo?  كم مرة ترأست إسبانيا المجلس الأوروبي؟",
ansower:"Cuatro veces / أربع مرات",
option:[
"Dos veces / مرتين","Tres veces / ثلاث مرات","Cuatro veces / أربع مرات"
]},
{
question:"El Congreso de los Diputados designa al /  مجلس النواب يعين",
ansower:"presidente del Gobierno / رئيس الحكومة",
option:[
"presidente del Gobierno / رئيس الحكومة","presidente de la Comunidad /رئيس الجهة ","jefe del Estado / رأس الدولة"
]},
{
question:"Cuál de estas tres ciudades españolas está entre las diez más pobladas? / أي من هذه المدن الإسبانية الثلاث هي من بين المدن العشر الأكثر كثافة سكانية؟",
ansower:"Málaga / مالقة",
option:[
"Málaga / مالقة","Gijón / كيزون","Toledo / طليطيلة"]},
{
question:"La organización que defiende y promueve los intereses de los trabajadores se denomina / تسمى المنظمة التي تدافع عن مصالح العمال وتعززها",
ansower:"Sindicato / حزب العمال",
option:[
"Asociación / جمعية","Partido / حزب","Sindicato / حزب العمال"
]},
{
question:"Se puede limitar a una persona el derecho a entrar y salir libremente de España por motivos ideológicos / يمكن تقييد حق أي شخص في دخول إسبانيا ومغادرتها بحرية لأسباب أيديولوجية",
ansower:"Falso / خاطئ",
option:[
"Verdadero / صحيح","Falso / خاطئ",""
]},
{
question:"Los poderes públicos garantizarán la defensa de los consumidores y usuarios, protegiendo la seguridad, la salud y los intereses económicos de los mismos / تضمن السلطات العامة الدفاع عن المستهلكين والمستخدمين وحماية سلامتهم وصحتهم ومصالحهم الاقتصادي",
ansower:"Verdadero / صحيح",
option:[
"Verdadero / صحيح","Falso / خاطئ",""
]},
{
question:"Los españoles pueden plantear reclamaciones ante instituciones europeas /  يمكن للإسبان تقديم شكاوى إلى المؤسسات الأوروبية",
ansower:"Verdadero / صحيح",
option:[
"Verdadero / صحيح","Falso / خاطئ",""
]},  
{
question:"En qué comunidad autónoma se encuentra la ciudad de Pamplona? / في أي جهة  مستقلة تقع مدينة بامبلونا",
ansower:"Comunidad Foral de Navarra / جهة فورال في نافارا",
option:[
"Comunidad de Madrid / جهة  مدريد","Comunidad de Aragón / جهة اراكون","Comunidad Foral de Navarra / جهة فورال في نافارا"
]},  
{
question:"La capital de Castilla-La Mancha es… عاصمة كاستيلا لامانشا هي",
ansower:"Toledo / طليطلة",
option:[
"Ciudad Real / سيداد ريال","Guadalajara / كوادالاخارا","Toledo / طليطلة"
]},
{
question:"Qué es el Camino de Santiago? / ما هو كامينو دي سانتياغو؟",
ansower:"Una ruta de peregrinación / طريق الحج",
option:[
"Una ciudad de Galicia / مدينة في غاليسيا","Una ruta de peregrinación / طريق الحج","Una obra de teatro / مسرحية"
]},
{
question:"Al periodo comprendido entre la muerte de Franco y las elecciones generales de 1982 se lo conoce como / الفترة بين وفاة فرانكو والانتخابات العامة 1982 معروفة باسم",
ansower:"la Transición / الانتقال",
option:[
"la Transición / الانتقال"," el Modernismo / الحداثة","la Tecnocracia / التكنوقراطية"
]},
{
question:"Quién recibió el premio Nobel de Literatura en 1956? / من حصل على جائزة نوبل للآداب عام 1956؟",
ansower:"Juan Ramón Jiménez",
option:[
"Vicente Aleixandre","Camilo José Cela","Juan Ramón Jiménez"
]},
{
question:"Cómo se denomina la unión jurídica de dos personas que crea un vínculo conyugal mediante ciertos ritos o formalidades legales, con obligaciones y derechos? / ماذا يسمى الاتحاد القانوني بين شخصين والذي ينشئ رابطة زوجية من خلال طقوس معينة أو شكليات قانونية ، مع التزامات وحقوق",
ansower:"Matrimonio / زواج",
option:[
"Pareja de hecho / الشريك المحلي","Matrimonio / زواج"," Pareja formal / شريكان رسميان"
]},
{
question:"Cuál de las siguientes conductas no es adecuada en una comunidad de vecinos? / أي من السلوكيات التالية لا يناسب مجتمع الحي",
ansower:"Lavar coches y motos en el garaje / غسل السيارات والدراجات النارية بالجراج",
option:[
"Reducir el nivel de ruido entre las 22:00 y las 8:00 h / تقليل مستوى الضوضاء بين الساعة 10:00 مساءً و 8:00 صباحًا"," Depositar la basura en bolsas bien cerradas /ضع القمامة في أكياس مغلقة بإحكام","Lavar coches y motos en el garaje / غسل السيارات والدراجات النارية بالجراج"
]},
{
question:"Estado español aplica la política fiscal a los ciudadanos a través del pago de / تطبق الدولة الإسبانية السياسة المالية على المواطنين من خلال دفع",
ansower:"Impuestos directos e indirectos / الضرائب المباشرة وغير المباشرة",
option:[
"Impuestos directos / الضرائب المباشرة"," Impuestos indirectos / الضرائب غير المباشرة","Impuestos directos e indirectos / الضرائب المباشرة وغير المباشرة"
]},  
{
question:"documentación necesaria para cambiar de centro médico es / الوثائق اللازمة لتغيير المركز الطبي هي",
ansower:"DNI, Tarjeta Sanitaria anterior y el certificado de empadronamiento    / بطاقة الهوية والبطاقة الصحية السابقة وشهادة التسجيل",
option:[
"DNI, Tarjeta Sanitaria anterior y el certificado de empadronamiento    / بطاقة الهوية والبطاقة الصحية السابقة وشهادة التسجيل","DNI, historial médico y una carta de su médico anterior     /  بطاقة الهوية والتاريخ الطبي ورسالة من طبيبك السابق","DNI, Tarjeta Sanitaria anterior e historial médico     / بطاقة الهوية ، البطاقة الصحية السابقة والتاريخ الطبي"

]},   
{
question:"Si compramos una botella de agua de 750 ml, estamos comprando una botella de / إذا اشترينا زجاجة 750 مل من الماء ، فإننا نشتري زجاجة",
ansower:"3/4 litro",
option:[
"1 litro","1/2 litro","3/4 litro"
]},
{
question:"El límite de velocidad para los coches dentro de las ciudades es de  / الحد الأقصى للسرعة للسيارات داخل المدن هو",
ansower:"50 km/h",
option:[
"40 km/h","50 km/h","60 km/h"
]},

{
question:"Qué impuesto pagan los residentes en España en función de la renta o el dinero ganado (salario, ingresos como autónomos, etc.)? /ما هي الضريبة التي يدفعها سكان إسبانيا على أساس الدخل أو الأموال المكتسبة (الراتب ، دخل العمل الحر ، إلخ) ",
ansower:"IRPF (Impuesto sobre la Renta de las Personas Físicas) / IRPF (ضريبة الدخل الشخصي)",
option:[
"IRPF (Impuesto sobre la Renta de las Personas Físicas) / IRPF (ضريبة الدخل الشخصي)","IVA (Impuesto sobre el Valor Añadido) / ضريبة القيمة المضافة (ضريبة القيمة المضافة)","IS (Impuesto sobre Sociedades) / IS (ضريبة الشركات)"
]}];
