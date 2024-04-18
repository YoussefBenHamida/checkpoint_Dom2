// select the color box and change color-btn

let btn = document.getElementById('color-box')

btn.addEventListener("click",function(){
    btn.style.backgroundColor = randomColor();
})

//Generate a random color
function randomColor(){
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i =0 ; i<6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color 
}