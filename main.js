const pre = document.querySelector('.pre')
const next = document.querySelector('.next')
const line = document.querySelector('.line')
const circle = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive ++;
    if(currentActive > circle.length){
        currentActive = circle.length
    }else{
        update();
    }
})
pre.addEventListener('click', () => {
    currentActive --;
    if(currentActive < 1){
        currentActive = 1;
    }else{
        update();
    }
})
function update (){
    circle.forEach((circle ,index) => {
        if(currentActive > index){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const active = document.querySelectorAll('.active')
    
    // line.style.width = (active.length - 1) / (circle.length - 1) * 100 + '%'
if(currentActive == circle.length){
    next.disabled = true
}else{
    next.disabled = false
}
 if(currentActive == 1){
        pre.disabled = true
    }else{
        pre.disabled = false
    }
    }
