let count = 0 

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        const style = (event.currentTarget.classList)
        if(style.contains('decrease')){
            count--;
        }else if(style.contains('reset')){
            count = 0;
        }else if(style.contains('increase')){
            count++;
        }
        value.textContent = count

    if(count>0){
            value.style.color='#008000'
        }else if(count<0){
            value.style.color='#ff0000'
        }else if(count===0){
            value.style.color='#000000'
        }
    }) 
})