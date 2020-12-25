const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const btn = document.querySelector('.btn')
const greet = document.querySelector('.greeting')
const reset = document.querySelector('.reset-btn')


btn.addEventListener('click', () =>{
    btn.classList.add('display-none')
    btn.classList.remove('display')
    
    let load = 0
    let int = setInterval(blurring, 30)

    function new_fuc() {
        load++
        if (load == 90) {
            // action
            greet.classList.add('display')
            // btn.classList.add('display-none')
            // btn.classList.remove('display')
            reset.classList.add('display')
        }
        
    }

    setInterval(new_fuc, 50)

    function blurring() {
        load++
    
        if (load > 99) {
            clearInterval(int)
        }
    
        loadText.innerText = `${load}%`
        loadText.style.opacity = scale(load, 30, 100, 1, 0)
        bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    
    }
})


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

reset.addEventListener('click', () =>{
    btn.classList.add('display')
    reset.classList.remove('display')
    reset.classList.add('display-none')
    greet.classList.remove('display')

})
