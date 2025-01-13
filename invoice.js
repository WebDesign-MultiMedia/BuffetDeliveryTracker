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

     const tableBody0 = document.getElementById("dataTable2").querySelector("tbody");
     tableBody0.innerHTML= "";

    data.forEach(entry => {
        const row = tableBody0.insertRow();
        row.insertCell().textContent = entry.Name || "";
        row.insertCell().textContent = entry.Address || "";
        row.insertCell().textContent = entry.Contact || "";
    })

    //  const billToDiv = document.getElementById("billTo");
    //  const billToDetails = billToDiv.querySelector("div");
    //  billToDetails.innerHTML = "";

    //  if (data.length === 0) {
    //     billToDetails.innerHTML = "No Data Found";
    //     return ;
    //  }

    //  const entry = data[0];

    //  billToDetails.innerHTML = `
    //     <p>Name: ${entry.Name || "N/A"}</p>
    //     <p>Address: ${entry.Address || "N/A"}</p>
    //     <p>Contact: ${entry.Contact || "N/A"}</p>
    //  `

    const tableBody = document.getElementById("dataTable").querySelector("tbody");
    tableBody.innerHTML = "";

    if (data.length === 0) {
        const row = tableBody.insertRow();
        const cell =  row.insertCell();

        cell.colSpan = 9;
        cell.textContent = "No data found";
        return;
    }

    data.forEach(entry => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = entry.Items || "";
        row.insertCell().textContent = entry.Cost || "";
        row.insertCell().textContent = entry.Payment || "";
    });
}
