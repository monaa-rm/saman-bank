let cnum = document.querySelector("#cardnumber");
let input= document.querySelectorAll("input");


window.addEventListener("load",function(){
      if(Cookies.get('cardnumber') != ""){
            cnum.value = Cookies.get('cardnumber');
      }else{
           cnum.value = "";
      }
})
document.getElementById("radio").addEventListener("click",function(){
if((cnum.value != "") && (cnum.value.length >= 16) && (cnum.value != "undefined")){
   let circleradio = document.getElementById("circleradio");
   let left = getComputedStyle(circleradio).getPropertyValue("left");
     if(left == "1px"){   
        circleradio.style.left = "14px";
        circleradio.style.backgroundColor = "rgb(141, 206, 218)";
        //////////////
           
       Cookies.set('cardnumber', cnum.value, { expires: 365 })
    

   }else if(left == "14px"){
    circleradio.style.left = "1px";
        circleradio.style.backgroundColor = "rgb(112, 114, 111)";
        Cookies.remove('cardnumber')
     }
}
 })


let mounth = document.getElementById("mounth");
if(mounth.value != null){
      mounth.addEventListener("blur",function(){
      if(mounth.value.length <2 ){
            if((mounth.value > 1) || (mounth.value < 10)){
                  mounth.value = "0" + mounth.value;
                  return Number(mounth.value);
            }  
      }else{
            alert(mounth.value)
           // mounth.value ="0"+ Number(mounth.value);
           mounth.value = substring(1,mounth.value.length);

      }
      })
}

let year = document.getElementById("year");
if(year.value != null){
      year.addEventListener("blur",function(){
            if(year.value.length <2 ){
            if((Number(year.value) > 1) || (Number(year.value) < 10)){
                  year.value = "0" + year.value;
                  return Number(year.value);
            }  
      }else{
            year.value = substring(1,year.value.length);
      }
      })
}
