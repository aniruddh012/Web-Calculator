let display=document.querySelector(".inp");
let btnAll=document.querySelectorAll('td');
btnAll.forEach((elem,index,array)=>{
    elem.addEventListener("click",()=>{
        if(elem.innerHTML=="="){
            const sol=eval(display.value);
            display.value=sol;
        }
        else if(elem.innerHTML=="C"){
            display.value="";
        }
        else{
        display.value+=elem.innerHTML;
    }
    })
})