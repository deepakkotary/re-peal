
function store(){
 var data = document.querySelector('textarea');    
localStorage.setItem('data',data.value);   
}

function restore (){
 var data = document.querySelector('textarea');  
var getValue= localStorage.getItem('data');
data.innerText=getValue;
}
window.addEventListener('load',()=>{
 restore();    
})

window.addEventListener('beforeunload',()=>{
store();     
})

function reload(){
 window.location.reload(); 
}

var data = document.querySelector('textarea');  
data.addEventListener('focus',()=>{
 //alert('focus')
})

data.addEventListener('blur',()=>{
 //alert('blur')    
})