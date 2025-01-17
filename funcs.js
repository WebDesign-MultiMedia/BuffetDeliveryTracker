const title = document.getElementById('topContainer');
const imgLogo = document.getElementById('logo');
const cusform = document.getElementById('CustomerDetails');
const topBtn = document.getElementById('letsTrack')

function showElement(appear, delay){
    setTimeout(() => {
        appear.style.display = 'block';
    }, delay);
}

showElement(title,1000);
showElement(imgLogo, 1000);
showElement(topBtn, 1000);

// BOTTON
const body = document.getElementById('bodyPg');
const btn  = document.getElementById('letsTrack');


btn.addEventListener('mouseenter', () => btnStyles('navy', 'white', '1px solid gold'));
btn.addEventListener('mouseleave', () => btnStyles('black', 'white', '1px solid white'));

function btnStyles(bkg, color, border){
    btn.style.backgroundColor = bkg;
    btn.style.color = color;
    btn.style.border = border;
}

const btnClick  = document.getElementById('letsTrack');
btnClick.addEventListener('click', ()=> btnCli('none', 'center', 'navy', 'flex'));

function btnCli(display, justifyContent, background, dflex){
    const logSheets = document.getElementById('logExcelSheetG');
    logSheets.style.display = 'block'
    imgLogo.style.display = display;
    title.style.display = display;
    cusform.style.display = dflex;
    cusform.style.justifyContent = justifyContent;
    body.style.background = background;

}




// SUBMIT FORM 
document.addEventListener("DOMContentLoaded", ()=>{
const smtBtn = document.getElementById("sbBtn");

smtBtn.addEventListener('mouseenter', ()=> btnHover('darkgreen','white'));
smtBtn.addEventListener('mouseleave', ()=> btnHover('green','white'))

function btnHover(bkgrnd, texColor){
    smtBtn.style.background = bkgrnd;
    smtBtn.style.color = texColor;
}


smtBtn.addEventListener('click', async (event)=>{

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

    await gSheetSubmit();

     swal("Submitted Successfully!", "...Keep on tracking!");
     document.getElementById('CustomerDetails').reset();
    // setTimeout(() => {
    //    
    // }, 3000);
});
});


        // GOOGLE SHEET LOG SIDE BAR
const gExcel = document.getElementById('gSheet');
const invoiceSheet = document.getElementById('invoiSheet');
const mapView = document.getElementById('mapView');

invoiceSheet.addEventListener('mouseenter', () => invStyle('red', 'white'));
invoiceSheet.addEventListener('mouseleave', () => invStyle('white', 'red'));
gExcel.addEventListener('mouseenter', () => setStyles('red', 'white'));
gExcel.addEventListener('mouseleave', () => setStyles('white', 'red'));
gExcel.addEventListener('click', () => setStyles('blue', 'white'));
mapView.addEventListener('mouseenter', ()=> mapStyle('red', 'white'));
mapView.addEventListener('mouseleave', ()=> mapStyle('white', 'red'));

function invStyle(clr, sColor) {
    invoiceSheet.style.color = clr;
    invoiceSheet.style.filter = `drop-shadow(1px 1px 0px ${sColor})`;
    
}
function setStyles(color, shadowColor){
    gExcel.style.color = color;
    gExcel.style.filter = `drop-shadow(1px 1px 0px ${shadowColor})`;
}

function mapStyle(clR, shColor){
    mapView.style.color = clR;
    mapView.style.filter = `drop-shadow(1px 1px 0px ${shColor})`;
}


// CLOSE OPEN BUTTON

function tggleVis(button, target) {
    if (target.style.display === 'block') {
        target.style.display = 'none';
        button.style.color = 'rgb(186, 6, 6)'
    } else {
        target.style.display = 'block';
        button.style.color = 'green'
    }
}

document.getElementById('opnClsBtn').addEventListener('click', () => {
    tggleVis(document.getElementById('opnClsBtn'), document.getElementById('Items'));
})
document.getElementById('opnClsBtn2').addEventListener('click', () => {
    tggleVis(document.getElementById('opnClsBtn2'), document.getElementById('Requests'));
})