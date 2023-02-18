function jj(id){
   let render=document.querySelector(`#${id}`)
 if(render.style.display=="none"){
    render.style.display="block"
 }else{
    render.style.display="none"
 }
 
}
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}