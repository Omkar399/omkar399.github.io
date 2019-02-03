



var submit = document.getElementById('sub');
submit.addEventListener('click',f1)


function f1(){
	var input =document.getElementById('input')
	var item = input.value
    var pass =document.getElementById('pass')
    var item1 = pass.value
    if(item=="abcde"&&item1=="45678")
     {
     	window.location.href ="123456.html"
     }
     else{
     	alert("Guessing won't work trust me ...")
     }
    }
