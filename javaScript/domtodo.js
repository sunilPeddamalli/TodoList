

erase();
line();

function line(){
	var li=document.querySelectorAll("li")

	for(var i=0;i<li.length;i++){
		li[i].addEventListener("click",function(){
			this.classList.toggle("completed");
		})
	}
}


function erase(){
	var remove=document.querySelectorAll(".delete")

	for(var i=0;i<remove.length;i++){
		remove[i].addEventListener("click",function(event){
			this.parentNode.remove();
			event.stopPropagation();
		})
	}
}

var input=document.querySelector("input[type='text']")
var ul=document.querySelector("ul")

input.addEventListener("keypress",function(){
	var add=this.value;
	if(event.which===13){
	this.value=""
	var newLi=document.createElement("li");
	newLi.innerHTML="<span class='delete'><i class='fas fa-trash-alt'></i></span>"
	newLi.append(" "+add);
	ul.append(newLi)
	erase()
	line()
	}

})
 
var plus=document.querySelector("#abc")
var minus=document.querySelector("#xyz")

plus.addEventListener("click",function(){
	input.classList.add("hide")
	this.style.display="none"
	minus.style.display="inline-block"
})

minus.addEventListener("click",function(){
	input.classList.remove("hide")
	this.style.display="none"
	plus.style.display="inline-block"
})