
function store(){
 var data = document.querySelector('textarea').value;    
localStorage.setItem('data',data)  
}

function restore (){
 var data = document.querySelector('textarea   ');  
var getValue= localStorage.getItem('data');
data.value=getValue;
}

////////////kgvk
window.addEventListener('load',()=>{
 restore();    
})

window.addEventListener('beforeunload',()=>{
store();     
})

function reload(){
 window.location.reload(); 
}

var data = document.querySelector('textarea   ');  
data.addEventListener('focus',()=>{
 //alert('focus')
})

data.addEventListener('blur',()=>{
 //alert('blur')    
})







///////>>>>>>>>>>>
window.addEventListener('keyup',()=>{
//alert("sto")  
store();
})
///////>>>>>>>>>>>



///////>>>>>>>>>>>
///////>>>>>>>>>>>
///////>>>>>>>>>>>
///////>>>>>>>>>>>


        










///////>>>>>>>>>>>
