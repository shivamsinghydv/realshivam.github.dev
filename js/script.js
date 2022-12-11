// register the service worker
if ('serviceWorker' in navigator){
  window.addEventListener('load',() =>{
    navigator.serviceWorker.register('/js/sw.js')
    .then(reg => {
      console.log('registered', reg)
    }).catch(err => {
      console.log('failed')
    })
  })
}

//typewriter
var i = 0;
var txt = "I am a web-developer from India.";
var speed = 18;
      
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewr").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
 }
}
window.onload = typeWriter();


// theme changer
const switchElement = document.querySelector('.switch')
      switchElement.addEventListener('click', () => {
        document.body.classList.toggle('dark')
      })

//header
