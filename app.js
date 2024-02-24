
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

window.addEventListener('click',ev=>{
     store();
})


window.addEventListener('beforeunload',()=>{
store();     
})

function reload(){
 window.location.reload(); 
}

var data = document.querySelector('textarea   ');  









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

///////>>>>>>>>>>>

document.addEventListener("click", function(event) {
    var clickedElement = event.target;

var btn=document.getElementsByClassName('btn');

for(i=0;i<=btn.length;i++){
//console.log(btn[i])
var ourKey =btn[i];


if(clickedElement==ourKey){
 
// console.log(clickedElement)

console.log("Clicked element:", clickedElement);

// know yuu can write here 

//

console.log(clickedElement.innerText)

var textarea = document.querySelector("textarea");
var insertAfter = textarea.selectionStart; // Change this to the desired number of characters

    var currentText = textarea.value;

    if (currentText.length >=insertAfter) {
        var newText = currentText.substring(0, insertAfter) + 
        clickedElement.innerText
        + currentText.substring(insertAfter);
        textarea.value = newText;
        
        
        
  /////      
  /////
console.log(insertAfter)
textarea.setSelectionRange(insertAfter+1,insertAfter+1);
textarea.focus();
  
  
  
  /////      
  /////      
  /////      
  /////      
        
       
       
       
       
       
       
        
        
    }


//

//textarea.focus();


//
//



}
}



    
});

///////>>>>>>>>>>>




///////>>>>>>>>>>>
///////>>>>>>>>>>>
///////>>>>>>>>>>>
///////>>>>>>>>>>>
///////>>>>>>>>>>>
///////>>>>>>>>>>>
