
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
let m1=parseInt(document.getElementById("mark1").value);
let m2=parseInt(document.getElementById("mark2").value);
let m3=parseInt(document.getElementById("mark3").value);
let m4=parseInt(document.getElementById("mark4").value);
let m5=parseInt(document.getElementById("mark5").value);
if(m1 && m2 && m3 && m4 && m5 != isNaN){
    console.log("hello");
}else{
    alert("any of the field is not a number or mark is missing");
}
total=m1+m2+m3+m4+m5;
grade=total/5;

let out=document.getElementById("out");
out.innerText=grade;
});
