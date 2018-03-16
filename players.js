var p1=prompt("Enter Player 1 name - :");
var p2=prompt("Enter Player 2 name - :");
var z=document.querySelector("#one");
var y=document.getElementById("two");
z.innerHTML=p1;
y.innerHTML=p2;

var c=document.querySelector("#chances");
x.addEventListener("click", function(){
	c.innerText=x.value;
	isPlayerOne=false;
	isPlayerTwo=false;
});

var re=document.querySelector("#res");
re.addEventListener("click", function(){
	location.reload(); 								// REFRESHES THE PAGE
});

isPlayerOne=false;
isPlayerTwo=false;
var s=document.querySelector("t");
count=0;
z.addEventListener("click", function(){
	if(isPlayerTwo==false){
		count=count+1;
		s.innerText=count;
		if(count==c.innerText){
			s.style.color="green";          // Changes the color of a text
			s.innerText=count;
			count=count-1;
			isPlayerOne=true;
		}
	}
});

var t=document.querySelector("f");
counter=0;
y.addEventListener("click", function(){
	if(isPlayerOne==false){
		counter=counter+1;
		t.innerText=counter;
		if(counter==c.innerText){
			t.style.color="green";
			t.innerText=counter;
			counter=counter-1;
			isPlayerTwo=true;
		}
	}
});
