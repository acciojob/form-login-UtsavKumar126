function getFormvalue() {
    //Write your code here
	let doc=document.getElementById("form1");
	let fname=doc.getElementsByTagName("INPUT")[0].value;
	let Sname=doc.getElementsByTagName("INPUT")[1].value;

	alert(fname+" "+Sname);
	

}
