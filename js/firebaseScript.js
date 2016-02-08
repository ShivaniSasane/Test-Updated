var var1;	
var1=window.location.hash.substring(1);
var myFirebaseRef = new Firebase("https://testshivani.firebaseio.com/");
if(var1=="p1")
{									
	myFirebaseRef.child("news1").on("value", function(snapshot) {					
		document.getElementById("1").innerHTML=snapshot.val();
	});
	myFirebaseRef.child("newsText").on("value", function(snapshot) {		  
		document.getElementById("2").innerHTML=snapshot.val();
	});		
}
else if(var1=="p2")
{
	myFirebaseRef.child("news2").on("value", function(snapshot) {		
		document.getElementById("1").innerHTML=snapshot.val();
	});
	myFirebaseRef.child("newsText2").on("value", function(snapshot) {
		document.getElementById("2").innerHTML=snapshot.val();
	});
}
else if(var1=="p3")
{
	myFirebaseRef.child("news3").on("value", function(snapshot) {		
		document.getElementById("1").innerHTML=snapshot.val();
	});
	myFirebaseRef.child("newsText3").on("value", function(snapshot) {			
		document.getElementById("2").innerHTML=snapshot.val();
	});
}
else if(var1=="p4")
{
	myFirebaseRef.child("news4").on("value", function(snapshot) {			
		document.getElementById("1").innerHTML=snapshot.val();
	});
	myFirebaseRef.child("newsText4").on("value", function(snapshot) {
		document.getElementById("2").innerHTML=snapshot.val();
	});
}	
