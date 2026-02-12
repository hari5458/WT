function performSearch(){
  let inputText = document.getElementById("inputText").value;
  let searchText = document.getElementById("searchText").value;
  let output = document.getElementById("outputText");

  try {
    let matches = inputText.match(new RegExp(searchText,"g"));
    output.value = matches ? matches.join("\n") : "No matches found";
  } catch {
    output.value = "Invalid regex";
  }
}

function performReplace(){
  let inputText = document.getElementById("inputText").value;
  let searchText = document.getElementById("searchText").value;
  let replaceText = document.getElementById("replaceText").value;
  let output = document.getElementById("outputText");

  try {
    output.value = inputText.replace(
      new RegExp(searchText,"g"), replaceText);
  } catch {
    output.value = "Invalid regex";
  }
}

function performFormat(){
  let inputText = document.getElementById("inputText").value;
  document.getElementById("outputText").value =
    inputText.replace(/\b\w/g,c=>c.toUpperCase());
}