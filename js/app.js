let rollButton = document.getElementById("rollButton");

rollButton.addEventListener('click',function(){

let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomNumber2 = Math.floor(Math.random() * 6) + 1

let randomImageSource1 = './img/dice' + randomNumber1 + '.png' // simplicandoo código de cima porem é o mesmo.

let randomImageSource2 = './img/dice' + randomNumber2 + '.png' // simplicandoo código de cima porem é o mesmo.

document.querySelectorAll('img')[0].setAttribute('src', randomImageSource1) //refatorado.

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2) //refatorado.



if
    (randomNumber1 > randomNumber2){

    document.querySelector('h1').innerHTML = 'J<span>o</span>gador <span>1</span> Ganh<span>o</span>u🏆'
    

   
    
}else if ((randomNumber2 > randomNumber1)){

    document.querySelector('h1').innerHTML = 'J<span>o</span>gador <span>2</span> Ganh<span>o</span>u🏆'
}else{

    document.querySelector('h1').innerHTML = 'Em<span>p</span>ate'
}

})



