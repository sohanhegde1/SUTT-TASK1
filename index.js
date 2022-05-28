var Head1=document.getElementById('head1');
var Psum=document.getElementById('psum');
var SK1=document.getElementById('s1');
var loc1=document.getElementById('loc');
var email=document.getElementById('ema');
var phone=document.getElementById('pho');
var affilia=document.getElementById('affilia');
var edu=document.getElementById('edu');
var PS=document.getElementById('psum');
var WH=document.getElementById('WH');

var download=document.getElementById('download');
var para1=document.createElement('p');
var para2=document.createElement('p');
var para3=document.createElement('p');
var para4=document.createElement('p');
var para5=document.createElement('p');
var para6=document.createElement('p');
var para7=document.createElement('p');
var para8=document.createElement('p');
var para8=document.createElement('p');
var para9=document.createElement('p');

para1.innerText= window.localStorage.getItem('Fname').toUpperCase()+ "  " + window.localStorage.getItem('Lname').toUpperCase();
Head1.appendChild(para1);
para2.innerText=window.localStorage.getItem('Skill');
SK1.appendChild(para2);
para3.innerText=window.localStorage.getItem('address');
loc1.appendChild(para3);
para4.innerText=window.localStorage.getItem('email');
email.appendChild(para4);
para5.innerText=window.localStorage.getItem('phone');
phone.appendChild(para5);
para6.innerText= window.localStorage.getItem('aff');
affilia.appendChild(para6);
para7.innerText=window.localStorage.getItem('edu');
edu.appendChild(para7);
para8.innerText=window.localStorage.getItem('PS');
PS.appendChild(para8);
para9.innerText=window.localStorage.getItem('WH');
WH.appendChild(para9);
var btn = document.getElementById('download');
btn.addEventListener("click", generatePDF);

function generatePDF()
{
const docu=document.getElementById("invoice");
html2pdf().from(docu).save();
}