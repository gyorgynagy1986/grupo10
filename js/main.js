const sr = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 3000,
    delay: 150,
    //reset: true
  })

sr.reveal(`.sfr`, {distance: '100px', origin: 'right', duration: 1800, delay: 50,} )


const text = document.querySelector('.text-container');


const mediaQuery = window.matchMedia('(min-width: 1200px)');

mediaQuery.addListener(handleMediaQueryChange);

function handleMediaQueryChange(event) {

  if (event.matches) {

  text.style.top = 0;    
   
   window.addEventListener('scroll', function() {
       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       
       text.style.top = `${scrollTop * 20 / 26  - window.pageYOffset}px`
   
     });
  } else {
  
  }

}

handleMediaQueryChange(mediaQuery);