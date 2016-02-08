var myFirebaseRef = new Firebase("https://testshivani.firebaseio.com/");
myFirebaseRef.child("news1").on("value", function(snapshot) {
	document.getElementById('1').innerHTML=snapshot.val();			
});		
myFirebaseRef.child("newsText").on("value", function(snapshot) {
	document.getElementById('2').innerHTML=snapshot.val(); 
});
myFirebaseRef.child("news2").on("value", function(snapshot) {
	document.getElementById('3').innerHTML=snapshot.val(); 
});
myFirebaseRef.child("newsText2").on("value", function(snapshot) {
	document.getElementById('4').innerHTML=snapshot.val();  
});
myFirebaseRef.child("news3").on("value", function(snapshot) {
	document.getElementById('5').innerHTML=snapshot.val();  				
});
myFirebaseRef.child("newsText3").on("value", function(snapshot) {
	document.getElementById('6').innerHTML=snapshot.val();  			
});
myFirebaseRef.child("news4").on("value", function(snapshot) {	
	document.getElementById('7').innerHTML=snapshot.val();  
});
myFirebaseRef.child("newsText4").on("value", function(snapshot) {
	document.getElementById('8').innerHTML=snapshot.val();  
});
function myFunction(news) {
	var myWindow=window.open("","myWindow","width=700","height=700");
	myWindow.document.write(news);				
}
