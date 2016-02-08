function formValidation()  
{  
	var a = document.forms["fname"]["uname"].value;	//to validate name
	var b = document.forms["fname"]["email"].value;	//to validate email id
	var c = document.forms["fname"]["msg"].value;	//to validate message
	if(b==null || b=="" || a==null || a=="" || c==null || c=="")
	{
		document.getElementById("output").innerHTML="Please complete the form.";	//if form is incomplete
		return false;
	}
	var flag1=0;
	var indexOfAt=b.indexOf("@");	
	var indexOfDot=b.lastIndexOf(".");
	if(indexOfAt<1 || indexOfDot<indexOfAt+2 || indexOfDot+2>=b.length)
	{
		document.getElementById("output").innerHTML="Please enter valid email.";
		flag1=1;
		return false;
	}
	var flag2=0;
	if(!/^[a-zA-Z]*$/g.test(a))
	{
		document.getElementById("output").innerHTML="Please enter valid name.";
		flag2=1;
		return false;
	}
	
	if(flag1==0 && flag2==0 && c!=null && b!=null && b!="" && a!=null && a!="" && c!=null && c!="")
	{
		document.getElementById("output").innerHTML="Your message is submitted successfully.";
		return false;
	}
}
	
	