// async function singleData(name) {
//     const url = `https://sheetdb.io/api/v1/knvxv3inyom8t/search?Name=${encodeURIComponent(name)}`;
//     // const urlAddress = `https://sheetdb.io/api/v1/knvxv3inyom8t/search?Address=${encodeURIComponent(name)}`;

//     try {
//         const res = await fetch(url, {
//             method: "GET",
//             headers: {
//                 "Content-Type" : "application/json",
//             },
//         });
//         if (!res.ok) {
//             throw new Error(`Response status: ${res.status}`);
//         } 
//         const json = await res.json();
//         return json;
//     } catch (error) {
//         console.error(error.message);
//         return [];
//     }
// }

async function singleData(searchField, searchValue) {
    const url = `https://sheetdb.io/api/v1/knvxv3inyom8t/search?${encodeURIComponent(searchField)}=${encodeURIComponent(searchValue)}`;

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        const json = await res.json();
        return json;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

async function fetchDataDisplay() {
    const searchField = document.getElementById("searchField").value; // Dropdown or input field for the search field
    const searchValue = document.getElementById("searchValue").value; // Input field for the search value

    if (!searchField || !searchValue) {
        console.error("Search field or value is missing");
        return;
    }

    const data = await singleData(searchField, searchValue);

    // Customer Order Number
    const tblOrderNum = document.getElementById("orderNumData").querySelector("tbody");
    tblOrderNum.innerHTML = "";

    data.forEach(entry =>{
        const rowOrderNum = tblOrderNum.insertRow();
        rowOrderNum.insertCell().textContent = entry.Id || "";
    })

    

    // Customer Date
    const tableBody0 = document.getElementById("orderDateData").querySelector("tbody");
    tableBody0.innerHTML = "";

    data.forEach(entry => {
        const row = tableBody0.insertRow();
        row.insertCell().textContent = entry.Date || "";
        // row.insertCell().textContent = entry.Name || "";
        // row.insertCell().textContent = entry.Address || "";
        // row.insertCell().textContent = entry.Contact || "";
        // row.insertCell().textContent = entry.Items || "";
        // row.insertCell().textContent = entry.Cost || "";
        // row.insertCell().textContent = entry.Payment || "";
    });

    if (data.length === 0) {
        console.log("No results found.");
    }
        // Customer Info
    const tblCusInfo = document.getElementById("customerInfoData").querySelector("tbody");
    tblCusInfo.innerHTML = "";

    data.forEach(entry => {
        const rowCusInfo = tblCusInfo.insertRow();
        rowCusInfo.insertCell().textContent = entry.Name || "";
        rowCusInfo.insertCell().textContent = entry.Address || "";
        rowCusInfo.insertCell().textContent = entry.Contact|| "";
    })

        // Customer Details 
    const tblCusDetail = document.getElementById("customerDetailData").querySelector("tbody");
    tblCusDetail.innerHTML = "";

    data.forEach(entry =>{
        const rowCusDeta = tblCusDetail.insertRow();
        rowCusDeta.insertCell().textContent = entry.Items || "";
        rowCusDeta.insertCell().textContent = entry.Quantities || "";
        rowCusDeta.insertCell().textContent = entry.Cost || "";
        rowCusDeta.insertCell().textContent = entry.Payment || "";
    })

    tblOrderNum.style.color = 'gold';
    tableBody0.style.color = 'gold';
    tblCusInfo.style.color = 'gold';
    tblCusDetail.style.color = 'gold';

}

// ICON

// let bckBtn = document.getElementById('bkBtn');

// bckBtn.addEventListener('mouseenter', () => icnColor('white', ''));
// bckBtn.addEventListener('mouseleave', () => icnColor('gold', ''));

// function icnColor(icnClr) {
//     bckBtn.style.color = icnClr;
// }

const iconSearch = document.getElementById('search');
const lookupField = document.getElementById('lookUpCon');

iconSearch.addEventListener('click', () =>{
    
    if(lookupField.style.display === 'block'){
        lookupField.style.display = 'none';
    } else{
        lookupField.style.display = 'block';
    }
})


    // BACK HOME
    const homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('mouseenter', () =>{
        homeBtn.style.color = 'gold';
    })