
// select all button together
let buttons = document.querySelectorAll("button");

// select input in which we want ot show the numbers
let inp = document.querySelector("input");

for(let btn of buttons){
    btn.addEventListener("click",function(event){
        let btnText = event.target.innerText;

        if(btnText == 'C'){
            inp.value='';
        }
        else if(btnText == '='){
            try{
                inp.value = eval(inp.value);
            }
            catch(event){
                inp.value = "Noi bataunga"
            }
        }
        else{
            inp.value += btnText;
        }
    })
}