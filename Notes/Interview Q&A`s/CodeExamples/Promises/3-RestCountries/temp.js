let main = document.body
let mydiv = document.createElement("div")
mydiv.setAttribute("style","width:100%;height:auto;")
mydiv.setAttribute("class","card-group")
let header_div = document.createElement("div")
header_div.setAttribute("style","text-align:center;color:black;")
let header = document.createElement("h1")
header.innerText = "World Countries Data";
header_div.appendChild(header)
main.appendChild(header_div)
main.appendChild(mydiv)


function getinfo() {
    var xhr = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
     xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status >= 300) {
            reject("Error, status code = " + xhr.status)
          } else {
            resolve(xhr.responseText);
          }
        }
      }
      xhr.open('get', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true)
      xhr.send();
    });
  }
  getinfo().then(data=>{
    arr = JSON.parse(data)
    console.log(arr)
    for(let i=0;i<data.length;i++){
        let outer_div = document.createElement("div")
        outer_div.setAttribute("style","display:flex;justify-content:center;padding:5px;")
        outer_div.setAttribute("class","col-4")
        let card_div = document.createElement("div")
        card_div.setAttribute("class","card")
        
        let flag_img = document.createElement("img")
        flag_img.setAttribute("class","card-img-top")
        flag_img.setAttribute("src",arr[i]["flag"])
        flag_img.setAttribute("style","width:300px;height:200px;")
        
        let card_body = document.createElement("div")
        card_body.setAttribute("class","card-body")
        
        let card_head = document.createElement("h5")
        card_head.setAttribute("class","card-title")
        card_head.innerText = arr[i]["name"]
        
        let card_capital = document.createElement("p")
        card_capital.setAttribute("class","card-text")
        card_capital.innerText = "Capital : " + arr[i]["capital"]
        
        let card_region = document.createElement("p")
        card_region.setAttribute("class","card-text")
        card_region.innerText = "Region : " + arr[i]["region"]

        let card_lat = document.createElement("p")
        card_lat.setAttribute("class","card-text")
        card_lat.innerText = "Latlng : " + arr[i]["latlng"]
        
        let card_currency = document.createElement("p")
        card_currency.setAttribute("class","card-text")
        card_currency.innerHTML = `Currency Name: ${arr[i]["currencies"][0]["name"]} <br> Currency Code: ${arr[i]["currencies"][0]["code"]} <br> Currency Symbol: ${arr[i]["currencies"][0]["symbol"]}`
        
        card_body.appendChild(card_head)
        card_body.appendChild(card_capital)
        card_body.appendChild(card_region)
        card_body.appendChild(card_lat)
        card_body.appendChild(card_currency)
        

        card_div.appendChild(flag_img)
        card_div.appendChild(card_body)
        outer_div.appendChild(card_div)
        mydiv.appendChild(outer_div)
    }
})