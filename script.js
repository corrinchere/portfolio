 console.log('portfolio time')

 document.getElementById('aboutme').addEventListener('click', function(){
    document.getElementById('aboutmebox').classList.add('toggle-open');
} )

document.getElementById('about-close').addEventListener('click', function(){
    document.getElementById('aboutmebox').classList.remove('toggle-open');
} )

// document.getElementById('aboutme').addEventListener('click', function(){
//     document.body.style.opacity = ".50";
// } )