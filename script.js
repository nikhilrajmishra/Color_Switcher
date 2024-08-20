const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector('body')
  
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='Black'){
            // body.style.backgroundColor = 'black'
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id==='white'){
            // body.style.backgroundColor = 'white'
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id==='blue'){
            // body.style.backgroundColor = 'blue'
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id==='yellow'){
            // body.style.backgroundColor = 'yellow'
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id==='Red'){
            // body.style.backgroundColor = 'yellow'
            body.style.backgroundColor = e.target.id;
        }
    });
});
