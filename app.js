  //inputs
  const dayInp=document.getElementById("day");
  const monthInp=document.getElementById("month");
  const yearInp=document.getElementById("year");

  //outputs
  const dayOut=document.getElementById("DD");
  const monthOut=document.getElementById("MM");
  const yearOut=document.getElementById("YY");

  //form
  const form=document.querySelector("form");

  //form submit
  form.addEventListener("submit",handleSubmit);

  const date=new Date();
  let day=date.getDate();
  let month=date.getMonth();
  let year=date.getFullYear();

  const months=[31,28,31,30,31,30,31,31,30,31,30,31];

  function validate(){
      const inputs=document.querySelectorAll("input");
      let validator=true;
      inputs.forEach((i)=>{
          const parent=i.parentElement;
          if(!i.value){
              i.style.borderColor="red";
              parent.querySelector("small").innerHTML="This field is required";
              validator=false;
          }
          else if(monthInp.value>12){
              monthInp.style.borderColor="red";
              monthInp.querySelector("small").innerHTML="must be a valid month";
              validator=false;
          }
          else if(dayInp.value>31){
              dayInp.style.borderColor="red";
              dayInp.querySelector("small").innerHTML="must be a valid day";
              validator=false;
          }
          else{
              i.style.borderColor="black";
              parent.querySelector("small").innerHTML="";
              validator=true;
          }
      })
      return validator;
  }


  function handleSubmit(e){
      e.preventDefault();
      if(validate()){
          if(dayInp.value>day){
              day=day+months[month-1];
              month=month-1;
          }

          if(monthInp.value>month){
              month=month+12;
              year=year-1;
          }

          const d=day - dayInp.value;
          const m=month - monthInp.value+1;
          const y=year -yearInp.value;

          dayOut.innerHTML=d;
          monthOut.innerHTML=m;
          yearOut.innerHTML=y;
      }
  }

  