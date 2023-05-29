function helloworld() {
  document.getElementById("my-title").innerHTML = "My notebook";
  console.log("hello world");
}
function addData() {
  var li = document.createElement("li");
  li.innerHTML = document.getElementById("text-area").value;
  document.getElementById("data-list").appendChild(li);
}

document.getElementById("my-button").onclick = helloworld;

document.getElementById("add-data").onclick = addData;
