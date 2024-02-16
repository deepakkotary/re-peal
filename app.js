
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
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;

  // You can show a custom button or UI to prompt the user to install
  // For example, display a button and add an event listener to trigger the install prompt
  const installButton = document.getElementById('installButton');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        // You can track here that the user added the app to the home screen
      } else {
        console.log('User dismissed the install prompt');
      }

      // Reset the deferredPrompt variable
      deferredPrompt = null;
    });
  });
});


///////>>>>>>>>>>>