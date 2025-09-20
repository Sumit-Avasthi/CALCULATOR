let display = document.querySelector("#inputDisplay");
let button = document.querySelectorAll('button');

for(let i=0;i<button.length;i++)
{
    button[i].addEventListener("click",(event)=>{
        if(button[i].innerText === "AC")
        {
            display.value = "";
        }
        else if(button[i].innerText === "DEL")
        {
            display.value = display.value.slice(0,display.value.length-1);
        }
        else if(button[i].innerText === "=")
        {
            display.value = eval(display.value);
        }
        else{
            let str = button[i].innerText;
            display.value += str;
        }
    });
    
}