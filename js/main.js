


(function (){
    //start here
    document.getElementById ("myHeading").innerHTML = "Turab's Website"
    document.querySelector("li").setAttribute("class", "currentPage")
    document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk")
    const myBtn = document.getElementById("myTestBtn");
    myBtn.addEventListener('click', function(ev){

        console.dir(ev);
    })

    // let redBtn = document.querySelector(".red")
    // redBtn.addEventListener('click', function(){
    //     document.body.setAttribute("class", "redBack");
    // })

    // let greenBtn = document.querySelector(".green")
    // greenBtn.addEventListener('click', function(){
    //     document.body.setAttribute("class", "greenBack")
    // })

    // let blueBtn = document.querySelector(".blue")
    // blueBtn.addEventListener('click', function(){
    //     document.body.setAttribute("class", "blueBack")
    // })

    

    let colBtns = document.querySelectorAll(".colPicker")
    
    console.dir(colBtns)
    
    colBtns.forEach(colBtns => {
    colBtns.addEventListener('click', function(ev) {
        console.info(`Button clicked: ${ev.target.textContent}`);
        let backCol = ev.target.innerText;
        backCol = backCol.toLowerCase();
        backCol = backCol + 'Back'
        document.body.setAttribute('class', backCol)        
        });
    });
 })();
   
    //end here
let imageAr = [

    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
]

let currentIndex =0; 
const img = document.getElementById('myImages')

img.addEventListener('click', function(){
    currentIndex++;
    if(currentIndex >= imageAr.length)
    {
        currentIndex = 0;
    }

    img.src = imageAr[currentIndex];
})

