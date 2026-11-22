
let count = 0;

document.querySelector(".add").addEventListener('click',function(){
    count++;
    
    document.querySelector(".count").innerHTML = `<span>${count}</span>`
})
document.querySelector(".sub").addEventListener('click',function(){
    count--;
    if(count===-1)
    {
        count=0;
    document.querySelector(".count").innerHTML = `<span>${count}</span>`
    }
    document.querySelector(".count").innerHTML = `<span>${count}</span>`
})

document.querySelector(".reset").addEventListener("click", function(){
    count=0;
    document.querySelector(".count").innerHTML =`<span>${count}</span>`
})
