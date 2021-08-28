const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

for(let button of buttons){
    button.addEventListener('click',(e)=>{
        const buttonText = e.target.innerText;
       
        if(buttonText==='x'){
            display.value+="*";
        }else if(buttonText==='AC'){
            display.value="";
        }else if(buttonText==='='){
            try{
                display.value=eval(display.value);
            }catch(e){
                console.log(e);
                display.value="Error";
            }
            
        }else{
            display.value+=buttonText;
        }
    })
}