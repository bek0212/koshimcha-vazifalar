function salom() {
  let elInp1 = document.querySelector(".inp1").value;
  let elInp2 = document.querySelector(".inp2").value;
  let elInp3 = document.querySelector(".inp3").value;

  if (elInp1 < elInp2 && elInp2 < elInp3) {
    alert("bular togri sonlar");
  } else {
    alert("Natogri kiritingiz Masalan: 1,2,3");
  }
}

function kirish(){
    let elInput1 = document.querySelector('.input1').value
    let elInput2 = document.querySelector('.input2').value

    if(elInput1>elInput2){
      alert(elInput1  + ' Katta raqam')
    }
    else if (elInput1<elInput2){
      alert(elInput2  + ' Katta raqam')
    }
    else{
      alert('faqat raqam kiriting')
    }
}


function jins(){
  let elImg1 = document.querySelector('.img1')
  let elImg2 = document.querySelector('.img2')
  let elInputt = document.querySelector('.inputt').value.toLowerCase()


  let rasm1 = 'erkak'
  let rasm2 = 'ayol'

  if(elInputt == rasm1){
    elImg1.style.opacity = 1
    alert('QABUL QILINDI boshqa urinmang')
  }
  else if (elInputt == rasm2){
    elImg2.style.opacity = 3
    alert('QABUL QILINDI boshqa urinmang')
  }

  else{
    alert('Siz sozni notogri kiritingiz')
  }



}
