const fetchPromise = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
fetchPromise
    .then((response) => {
        return response.json();
    })
    
    .then((finalData) => {
        let table = document.createElement('table');
        let tBody = document.createElement('tbody');
        for (let i = 0; i < finalData.length; i++) {
            let row = getData(finalData[i].name , finalData[i].flag);
            tBody.appendChild(row);
        }
        table.append(tBody);
        document.body.append(table);
    })
    
function getData(name,flag){
    let row = document.createElement('tr');
    let columnname = document.createElement('td');
    columnname.innerHTML = name;
    let columnimg = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute('src',flag);
    img.width = "250"
    img.height = "150"
    columnimg.appendChild(img);
    row.append(columnname,columnimg);
    return row;
}    
    