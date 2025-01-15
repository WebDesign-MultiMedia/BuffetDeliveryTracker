async function singleData(name) {
    const url = `https://sheetdb.io/api/v1/knvxv3inyom8t/search?Name=${encodeURIComponent(name)}`;

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
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
     const name = document.getElementById("searchName").value;
     const data = await singleData(name);

        // TABLE ONE
    const tableDate = document.getElementById('dataTable1').querySelector("tbody");
    tableDate.innerHTML = "";

    data.forEach(entry => {
        const rowDate = tableDate.insertRow();
        rowDate.insertCell().textContent = entry.Date || "";
    })

        // TABLE TWO
     const tableBody0 = document.getElementById("dataTable2").querySelector("tbody");
     tableBody0.innerHTML= "";

    data.forEach(entry => {
        const row = tableBody0.insertRow();
        // row.insertCell().textContent = entry.Date || "";
        row.insertCell().textContent = entry.Name || "";
        row.insertCell().textContent = entry.Address || "";
        row.insertCell().textContent = entry.Contact || "";
        // row.insertCell().textContent = entry.Items || "";
        // row.insertCell().textContent = entry.Cost || "";
        // row.insertCell().textContent = entry.Payment || "";
    })

     const entry = data[0];


    // const tableBody = document.getElementById("dataTable").querySelector("tbody");
    // tableBody.innerHTML = "";

    // if (data.length === 0) {
    //     const row = tableBody.insertRow();
    //     const cell =  row.insertCell();

    //     cell.colSpan = 9;
    //     cell.textContent = "No data found";
    //     return;
    // }

    // data.forEach(entry => {
    //     const row = tableBody.insertRow();
    //     row.insertCell().textContent = entry.Items || "";
    //     row.insertCell().textContent = entry.Cost || "";
    //     row.insertCell().textContent = entry.Payment || "";
    // });
}
