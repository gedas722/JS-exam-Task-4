/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
// 1. Source - local json file.

const ENDPOINT = "cars.json";
const output = document.getElementById("output");
const card = document.createElement("list");
// 2. Main function

const carBrandCard = (data) => {
  for (let i = 0; i < data.length; i++) {
    card.innerHTML += `<div>
    <h3 style="text-align:center">${data[i].brand}</h3>
    <p style="text-align:center">&nbsp;${data[i].models}&nbsp;</p>
    <br>
    </div>`;
  }
  output.append(card);
};

// 3. Data fetch function
const getCarData = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  carBrandCard(data);
};

// 4. Start code on page load
window.onload = getCarData();
