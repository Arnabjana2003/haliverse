const canvas = document.querySelector("#canvas")

let i=0;
const colorArr = ["red","blue","yellow","pink","orange","skyblue"]

document.addEventListener('mousemove',(e)=>{
    if(i==colorArr.length) i=0;

    const circle = document.createElement('div')
    circle.classList.add('circle')

    const x = e.clientX
    const y = e.clientY
    circle.style.top = `${y - 25}px` 
    circle.style.left = `${x -25}px`
    circle.style.backgroundColor = colorArr[i]
    i++;
    canvas.appendChild(circle)


    setTimeout(()=>{
        canvas.removeChild(circle)
    },1000)
})