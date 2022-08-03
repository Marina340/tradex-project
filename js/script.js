$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:2,
      loop:true,
      nav:true,
      dots : false ,
      navText : ['<i class="fa-solid fa-arrow-left-long bg-primary text-white btnn1 p-1 "></i>' ,
       '<i class="fa-solid fa-arrow-right-long bg-primary btnn2 text-white p-1"></i>'],
       responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        760 : {
            items : 2,  
        }
    },

    });
  });
  var myForm = document.getElementById("myForm")
function nameValidation(element){
    var inputValue = element.value.trim()
    if(inputValue.length < 3 )  showError(element , "at least 3 character")
    else removeError(element)
}
function emailValidation(element){
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  console.log( emailPattern.test(element.value))
  if(emailPattern.test(element.value) == false) showError(element , "invalid email")
  else removeError(element)

}

function showError(ele , msg){
    ele.nextElementSibling.innerText = msg
}
function removeError(ele){
    ele.nextElementSibling.innerText = ""
}


myForm.addEventListener("input" , function(e){
    if(e.target.id == "userName"){
        nameValidation(e.target)
    }
    else if(e.target.id == "userEmail") {
        emailValidation(e.target)
    }
    else if(e.target.id == "userSubject"){
        nameValidation(e.target)
    }
})


myForm.addEventListener("submit" , function(e){
    e.preventDefault()

})
