// const Swal = require('sweetalert2')

// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
// })


const title = document.getElementById('topContainer');
const imgLogo = document.getElementById('logo');
const cusform = document.getElementById('CustomerDetails');
const topBtn = document.getElementById('letsTrack')

function showElement(appear, delay){
    setTimeout(() => {
        appear.style.display = 'block';
    }, delay);
}

showElement(title,2000);
showElement(imgLogo, 4000);
showElement(topBtn, 6000);

// BOTTON

const btn  = document.getElementById('letsTrack');
btn.addEventListener('click', () =>{

    imgLogo.style.display = 'none';
    title.style.display = 'none';
    cusform.style.display = 'flex';
    cusform.style.justifyContent = 'center';
    
})