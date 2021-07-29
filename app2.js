

const images = document.querySelectorAll('img');



const lazyImage = (entries, observer) => {
    entries
    .filter(entry => entry.isIntersecting)
    .forEach((entry) => {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
    
    img.setAttribute('src', src);
    observer.disconnect();
    console.log('load');
    
})
}


images.forEach((img) =>{
    const observer = new IntersectionObserver(lazyImage);
    observer.observe(img);
}); 

 
const iframe = document.querySelectorAll('iframe');



const lazyFrame = (entries, observer) => {
    entries
    .filter(entry => entry.isIntersecting)
    .forEach((entry) => {
       const frame = entry.target;
       const src = frame.getAttribute('frame-lazy');

     frame.setAttribute('src', src);
     observer.disconnect();
     console.log('loadframe');
    
  })
  }


iframe.forEach((frame) =>{
     const observer = new IntersectionObserver(lazyFrame);
    observer.observe(frame);
 }); 
