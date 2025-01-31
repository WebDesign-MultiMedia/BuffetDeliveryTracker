const idSelect = document.getElementById('id').querySelector('option')
const idInput = document.getElementById('IdInput');

idSelect.addEventListener('click', ()=>{
    idInput.style.display = 'block';
    idInput.style.backgroundColor = 'red';
})