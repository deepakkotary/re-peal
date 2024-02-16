
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

// In your main JavaScript file

// Request permission
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    console.log('Notification permission granted');
  } else {
    console.warn('Notification permission denied');
  }
});

// Subscribe to push notifications (using FCM as an example)
const messaging = firebase.messaging();
messaging.getToken().then(token => {
  console.log('FCM Token:', token);
  // Send this token to your server for later use
}).catch(error => {
  console.error('Error getting FCM token:', error);
});


///////>>>>>>>>>>>
///////>>>>>>>>>>>
