let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let add = document.getElementById("input-btn");
let tabBtn = document.getElementById("tab-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") );

if(leadsFromLocalStorage) {
myLeads = leadsFromLocalStorage;
renderLeads(myLeads)
}



add.addEventListener("click", function() {
myLeads.push(inputEl.value);
inputEl.value = " ";
localStorage.setItem("myLeads", JSON.stringify(myLeads) );
renderLeads(myLeads)
;}); 

function renderLeads(leads) {
    let listItem = "";
    for(let i = 0; i < leads.length; i++ ) {
        listItem += `<li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>`;
    }
    ulEl.innerHTML = listItem;
} 


let TheDeleteButton = document.getElementById("delete-el");
TheDeleteButton.addEventListener("dblclick", function() {
ulEl.innerHTML = "";
myLeads = [];
localStorage.clear();
}); 















































