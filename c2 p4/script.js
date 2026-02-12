async function fetchData(){
  try{
    document.getElementById("loading").style.display="block";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users");

    const users = await response.json();
    renderData(users);

  } catch(e){
    alert("Failed to fetch data");
  }
  finally{
    document.getElementById("loading").style.display="none";
  }
}

function renderData(data){
  const body = document.getElementById("dataBody");
  body.innerHTML="";

  data.forEach(u=>{
    let row=document.createElement("tr");
    row.innerHTML=`
      <td>${u.id}</td>
      <td>${u.name}</td>
      <td>${u.email}</td>`;
    body.appendChild(row);
  });
}

fetchData();