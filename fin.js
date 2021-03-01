
   var bhome1=document.querySelector(".bbbb1");
   var bnext2=document.querySelector(".bbbb2");
   var foto=document.getElementById("col");
   var fini=document.querySelector(".finish");

function fin(){
    start.classList.remove("start-test");
     box.classList.add("active");
var minute=44-Math.floor(s12/60); 
var second=60-s12 %60;
     if(second<10  ){second="0"+second;}
     if (minute <10 ) {minute="0"+minute;}
    fini.innerHTML="<h3> tu tiempo es  00:"+minute+":"+ second +"</h3>";                    

     
     if (score>=15) {
out.innerHTML="<span style='color:green;'><h1>genial. has probado<h1>"+ score +" de "+ questions.length +"</h1></h1></span>";
inicio.style.background ="green";
foto.src="like.jpg";
localStorage.setItem("mjid","green");//poner local storge
  } else {
out.innerHTML="<span style='color:red;'><h1>no has probado<h1>"+ score +" de "+ questions.length +"</h1></h1></span>";
inicio.style.background ="red";
foto.src="dontlike.png";
localStorage.setItem("mjid","red");//poner local storge
}
          
                 }
                 var b111=document.querySelector(".b11");
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
                  window.location.reload();                