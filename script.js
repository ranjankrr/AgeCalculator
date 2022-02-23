const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
 const month =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 31];
submit.addEventListener("click", ()=>{
    let dateofbirth = document.getElementById("date-birth").value;
    let todayofdate =document.getElementById("current-date").value;
    //==== convert user input into date object============================
    const startDate = new Date(dateofbirth);
    const currentDate = new Date(todayofdate);
    //==============Your date of birth code here=-======================
     let startYear = startDate.getFullYear();
     let startMonth = startDate.getMonth() + 1;
     let startDay = startDate.getDate();
    //==============your today data code here==========================
     let currentYear = currentDate.getFullYear();
     let currentMonth = currentDate.getMonth() +1;
     let currentDay = currentDate.getDate();
     let bothYear =currentYear - startYear;
     let bothMonth, bothDate;
     if(currentMonth >= startMonth){
         bothMonth = currentMonth - startMonth;
         
     }
     else{
         bothYear--;
         bothMonth = 12 + currentMonth - startMonth;
        
     }
     if(currentDay >= startDay){
         bothDate = currentDay - startDay;
     }
     else{
         bothDate--;
         let days = month[currentMonth - 2];
         bothDate = days + currentDay - startDay;
         if(bothMonth < 0){
             bothMonth = 11;
             bothYear--;
         }
     }
     
     document.getElementById("display-age").value=`Your Age: ${bothYear} Years ${bothMonth} Months ${bothDate} Days`;
});
//========================reset-button code here==============
reset.addEventListener("click",()=>{
    let dateofbirth = document.getElementById("date-birth").value ="";
    let todayofdate =document.getElementById("current-date").value ="";
    document.getElementById("display-age").value="";

});
