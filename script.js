var fName = document.getElementById('fname');
var lName = document.getElementById('lname');
var skills=document.getElementById('skillset');
var address=document.getElementById('address');
var affiliation=document.getElementById('affilia');
var education=document.getElementById('edu');
var email=document.getElementById('email');
var phone=document.getElementById('number');
var PS=document.getElementById('Psummary');
var WH=document.getElementById('WH')
var submitButton = document.getElementById('submit-btn');
var clearButton = document.getElementById('clear-btn');
submitButton.addEventListener("click", submitFunction);

function submitFunction() 
{   
    if(fName.value==""||lName.value == ""||skills.value==""||address.value==""||affiliation.value==""||education.value==""||email.value==""||phone.value==""||PS.value==""||WH.value=="")
    {
    alert('all input fields are not filled')
    }
    else{
    window.localStorage.setItem('Fname',fName.value);
    window.localStorage.setItem('Lname',lName.value);
    window.localStorage.setItem('Skill',skills.value);
    window.localStorage.setItem('address',address.value);
    window.localStorage.setItem('aff',affiliation.value);
    window.localStorage.setItem('edu',education.value);
    window.localStorage.setItem('email',email.value);
    window.localStorage.setItem('phone',phone.value);
    window.localStorage.setItem('PS',PS.value);
    window.localStorage.setItem('WH',WH.value);
    window.open("template.html");
    }
} 




