
let toggleBtn = document.querySelector('.nav-icon').addEventListener('click',myFunctionToggle);

//function for toggle
function myFunctionToggle(){
    console.log(1)
let menu = document.getElementById('menu');
if(menu.style.display=== 'block'){
    menu.style.display='none';
}else{
    menu.style.display='block';
}
}

// function togglefunction(e){
//     e.classList.toggle('active')
// }