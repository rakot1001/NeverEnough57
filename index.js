"use strict";

fetch("./data.json")
  .then((response) => {
    console.log(response);

    const jsonPromise = response.json();
    return jsonPromise;
  })
  .then((jsonData) => {
    console.table(jsonData);

    const stringData = JSON.stringify(jsonData, null, 4);
    document.body.append(stringData);
  })
  .catch((error) => {
    console.log("Error");
   
    document.body.append("Error happened");
  })
  .finally(() => {
    document.getElementById("load").remove();
  })
