
function val(result) {
    form.disp.value= form.disp.value+ result;
}

function calculate () {
    if (form.disp.value =="") {
        alert("Please enter the number")
    }else{
        form.disp.value=eval(form.disp.value);
    }
}

// when you click twice the result will clear
var btn =form.veql;
btn.addEventListener("dblclick",()=>{
    form.disp.value="";  
})