function check(){
    var score=0;
    var ans1=document.getElementById('a1');
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');

    if(ans1.checked===true){
       score++;
       alert("Q1 is right")
    }
    else{
        alert("Wrong");
    }

    var ans21=document.getElementById('a21');
    var ans22=document.getElementById('a22');
    var ans23=document.getElementById('a23');
    var ans24=document.getElementById('a24');
    if(ans23.checked===true){
       score++;
       alert("Q2 is right")
    }
    else{
        alert("Wrong");
    }
    var ans31=document.getElementById('a31');
    var ans32=document.getElementById('a32');
    var ans33=document.getElementById('a33');
    var ans34=document.getElementById('a34');
    if(ans33.checked===true){
       score++;
       alert("Q3 is right")
    }
    else{
        alert("Wrong");
    }
alert(score *100/3+"%");
}