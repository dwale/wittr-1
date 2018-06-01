self.addEventListener('fetch', function(event){
    console.log('The fetched event', event.request);
});