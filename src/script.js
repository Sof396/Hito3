mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



function patata() {
  fetch('https://worldtimeapi.org/api/ip')
      .then(response => response.json())
      .then(function(response){
        console.log(response)
        console.log(response.datetime)
        alert(response.datetime)
      })
}
