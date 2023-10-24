document.body.form.color='white';
function getVal(val){
  if(document.getElementById("myresult").value=="Format Error"){
      document.getElementById("myresult").value="";
          document.getElementById("myresult").style.color="white";
  }
  if (val=="AC"){
  
    document.getElementById("myresult").value="";
  }
  else if(val=="=")
  {
      let r=document.getElementById("myresult").value;
      try {

   let result=eval(r);
       document.getElementById("myresult").value=result;
      } catch (error) {
          document.getElementById("myresult").value="Format Error";
          document.getElementById("myresult").style.color="red";
      }

    }
  else{
    
  let exp=document.getElementById("myresult").value+val;
  document.getElementById("myresult").value=exp;
   }
}

