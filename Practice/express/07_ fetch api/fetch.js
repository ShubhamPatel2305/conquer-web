async function fetchApiData(){
    const endpoint="https://fakerapi.it/api/v2/addresses?_quantity=1000";
    const res=await fetch(endpoint);
    const data=await res.json();

    let buildingNumberArray=data.data.map((data)=>{
        return data.buildingNumber;
    });
    
    const div=document.getElementById("output");
    div.innerHTML=buildingNumberArray.join("<br>");
}