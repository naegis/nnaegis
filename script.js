function sendMail(){
  let parms = {
    name : document.getElementById("email").value,
    email: document.getElementById("email").value,
    subject: "Portfolio Email",
    message: document.getElementById("textarea").value
  }
  emailjs.send("service_lgl4rfh", "template_ds6r6gp", parms).then(alert("Email has been sent"))

}

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}






function downloadFile() {
         window.open("Resume_Fajardo, Ma. Betina.pdf")
      }

      const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [

  "#fff"
];




circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
