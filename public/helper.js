function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function filterFunction1() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput1");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown1");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function filterFunction2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

  let input1, filter1, a1, i1, btn1, input2, filter2, a2, i2, btn2;
  input2 = document.getElementById("myInput2");
  filter2 = input2.value.toUpperCase();
  div2 = document.getElementById("myDropdown2");
  btn2 = document.querySelector(".dropbtn2");
  a2 = div2.getElementsByTagName("a");
  for (i2 = 0; i2 < a2.length; i2++) {
    let current2 = a2[i2];
    a2[i2].addEventListener("click", () => {
      btn2.innerHTML = current2.innerHTML;
      document.getElementById("myDropdown2").classList.toggle("show");
    });
  }

  input1 = document.getElementById("myInput1");
  filter1 = input1.value.toUpperCase();
  div1 = document.getElementById("myDropdown1");
  btn1 = document.querySelector(".dropbtn1");
  a1 = div1.getElementsByTagName("a");
  for (i1 = 0; i1 < a1.length; i1++) {
    let current1 = a1[i1];
    a1[i1].addEventListener("click", () => {
      btn1.innerHTML = current1.innerHTML;
      document.getElementById("myDropdown1").classList.toggle("show");
    });
  }

  document.querySelector(".dropbtn1").addEventListener("click",(event)=>{
    event.preventDefault();
  });

  document.querySelector(".dropbtn2").addEventListener("click",(event)=>{
    event.preventDefault();
  });


  function valuef(){
    let val1 = document.querySelector(".dropbtn1").innerText;
    let val2 = document.querySelector(".dropbtn2").innerText;
    let str = "";

    if(val1 === "Select base")  str += "$$";
    else str += val1;
    str +="-"
    if(val2 === "Select quote")  str += "$$";
    else str += val2;
    document.querySelector("#finalsubmit").value = str;
  }