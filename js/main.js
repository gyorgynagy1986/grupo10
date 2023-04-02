const sr = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 3000,
    delay: 150,
    //reset: true
  })

sr.reveal(`.sfr`, {distance: '100px', origin: 'right', duration: 1800, delay: 50,} )


const svgCrab = document.querySelector('.text-container');


const mediaQuery = window.matchMedia('(min-width: 1200px)');

mediaQuery.addListener(handleMediaQueryChange);

function handleMediaQueryChange(event) {

  if (event.matches) {

svgCrab.style.top = `${window.pageYOffset - 50}px`
    
   
   window.addEventListener('scroll', function() {
       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       
       svgCrab.style.top = `${scrollTop * 4 / 26  - 50}px`
   
     });
  } else {
    console.log('hello, where is the parralax ? :( ');
  }

}

handleMediaQueryChange(mediaQuery);