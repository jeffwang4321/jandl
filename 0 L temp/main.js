function eyetoggle(){
  if ($("#password-input").attr("type") == "password") {
    $("#password-input").attr("type", "text");
    document.getElementById('eyes').style.color = 'black';
  } else {
    $("#password-input").attr("type", "password");
    document.getElementById('eyes').style.color = 'lightgrey';
  }
}

//
function unlock(){
  if(document.getElementById('password-input').value == ''){
    document.getElementById('lock-page').style.display = 'none';
    document.getElementById('page1').style.display = 'block';
  }else{
    alert('Wrong Password');
  }
}

//
function unlock1(){
  if(document.getElementById('page1-input').value == ''){
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
  }else{
    alert('Wrong Answer');
  }
}

//
function unlock2(){
  if(document.getElementById('page2-input').value.toLowerCase() == ''){
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
  }else{
    alert('Wrong Answer');
  }
}

function unlock3(){
  if(document.querySelector('input[name="page3-radio"]:checked').value === '1'){
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'block';
  }else{
    alert('Wrong Answer');
  }
}

function unlock4(){
  if( document.getElementById("page4-check1").checked == true && 
      document.getElementById("page4-check2").checked == false &&
      document.getElementById("page4-check3").checked == true &&
      document.getElementById("page4-check4").checked == true){
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page5').style.display = 'block';
  }else{
    alert('Wrong Answer');
  }
}