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
const body = document.getElementById('bodyPg');
const btn  = document.getElementById('letsTrack');
btn.addEventListener('click', () =>{

    imgLogo.style.display = 'none';
    title.style.display = 'none';
    cusform.style.display = 'flex';
    cusform.style.justifyContent = 'center';
    body.style.background = 'black';
})

// SUBMIT FORM 
document.addEventListener("DOMContentLoaded", ()=>{
const smtBtn = document.getElementById("sbBtn");
smtBtn.addEventListener("click", ()=>{

    event.preventDefault();

    async function gSheetSubmit() {
        const url = "https://sheetdb.io/api/v1/knvxv3inyom8t";
        const data = {
            Date : document.getElementById("Date").value ,
            Name : document.getElementById("Name").value,
            Contact : document.getElementById('Contact').value,
            Address : document.getElementById('Address').value,
            Items : document.getElementById('Items').value,
            Quantities : document.getElementById('Quantities').value,
            Requests : document.getElementById('Requests').value,
            Cost : document.getElementById('Cost').value,
            Payment : document.getElementById('Payment').value
        };
        try{
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type" : "application/json",
                },
            });
            if(!res.ok){
                throw new Error(`Response status: ${res.status}`);
            }
            const json = await res.json();
            console.log(json);
        } catch(err){
            console.error(err.message);
            
        }
    }

    gSheetSubmit();

    // swal("Here's the title!", "...and here's the text!");

    setTimeout(() => {
        location.reload(); 
     }, 3000);
});
});