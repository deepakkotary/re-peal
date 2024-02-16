if('serviceWorker' in navigator){
     navigator.serviceWorker.register('/sw.js').catch(ev=>{
          console.log(ev);
     })
}