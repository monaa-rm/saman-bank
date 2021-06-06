let cnum = document.querySelector("#cardnumber");
let input= document.querySelectorAll("input");
let circleradio = document.getElementById("circleradio");
let cvv2 = document.getElementById("cvv2");
let mounth = document.getElementById("mounth");
let year = document.getElementById("year");
let email = document.getElementById("email");
let password = document.getElementById("password");
let allowsave = 0
cnum.addEventListener("keydown",isNumberKey);
cvv2.addEventListener("keydown",isNumberKey);
mounth.addEventListener("keydown",isNumberKey);
year.addEventListener("keydown",isNumberKey);

 function isNumberKey(event){
       var charCode = (event.which) ? event.which : event.keyCode
       if ( charCode > 48 && charCode < 57){
            return true;
       }else if( charCode > 96 && charCode < 105){
            return true;
       }else if(charCode == 8){
             return true;
       }
       else{
            event.preventDefault()
       }

  }





 window.addEventListener("load",getData())
 function getData(){
            if(localStorage.getItem('user') != null){
                 let details = localStorage.getItem('user');
                 console.log("mioooooo"+details);
                 details = JSON.parse(details);
                 console.log('...............' + details);
                  cnum.value = details.cardnumber;
                  cvv2.value = details.cvv2;
                  mounth.value = details.mounth;
                  year.value = details.year;
                  email.value = details.email;
                  password.value = details.password
            }else{
                 cnum.value = "";
            }
 }
 ////////


document.forms.frm.addEventListener("submit",function(){
      getData();
      let details = {
            cardnumber: cnum.value,
            cvv2: cvv2.value,
            mounth: mounth.value,
            year: year.value,
            password: password.value,
            email: email.value
      };
        
        details = JSON.stringify(details);
        let left = getComputedStyle(circleradio).getPropertyValue("left");
     // if((cnum.value != "") && (cnum.value.length < 16) && (cnum.value != "undefined")){ 
             if(left == '14px'){

             localStorage.setItem('user', details)
             
           
       }else if(left == '1px'){
   
            localStorage.removeItem('user');
       }
    //   }
})
document.getElementById("radio").addEventListener("click",function(){
      let left = getComputedStyle(circleradio).getPropertyValue("left");
     if(left == "14px"){   
        circleradio.style.left = "1px";
        circleradio.style.backgroundColor = "rgb(112, 114, 111)";
   }else if(left == "1px"){
      circleradio.style.left = "14px";
      circleradio.style.backgroundColor = "rgb(141, 206, 218)";
     }

 })
 
if(mounth.value != null){
      mounth.addEventListener("blur",function(){
            if(parseInt(mounth.value) == 0){
                  mounth.value = "";
            }
      if(mounth.value.length <3 ){
            if((mounth.value > 0) && (mounth.value < 10)){
                  mounth.value = "0" + parseInt(mounth.value);
                  return Number(mounth.value);
            }
      }else{
            mounth.value = mounth.value.substring(1);
             }
      })
}
if(year.value != null){
      year.addEventListener("blur",function(){
            if(parseInt(year.value) == 0){
                  year.value = "00";

            }
      if(year.value.length <3 ){
            if((year.value > 0) && (year.value < 10)){
                  year.value = "0" + parseInt(year.value);
      
            }
      }else{
            year.value = year.value.substring(1);
             }
      })
}