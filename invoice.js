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

    // CUSTOMER INFO
    const tableBody0 = document.getElementById("dataTable2").querySelector("tbody");
    tableBody0.innerHTML = "";

    data.forEach(entry => {
        const row = tableBody0.insertRow();
        row.insertCell().textContent = entry.Date || "";
        row.insertCell().textContent = entry.Name || "";
        row.insertCell().textContent = entry.Address || "";
        row.insertCell().textContent = entry.Contact || "";
        row.insertCell().textContent = entry.Items || "";
        row.insertCell().textContent = entry.Cost || "";
        row.insertCell().textContent = entry.Payment || "";
    });

    if (data.length === 0) {
        console.log("No results found.");
    }
}

