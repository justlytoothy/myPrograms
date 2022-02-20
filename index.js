//Initialize Table, will be replaced later with a form to receive date and place within table
let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];

  //Generate the table heads
function genTHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
//Populate table cells with the data
function genTable(table,data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
    }
}


let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
genTable(table,mountains);
genTHead(table, data);
function testData() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let first = urlParams.get('fname');
    let stuff = document.getElementById("hi");
    stuff.innerHTML = first;
}
