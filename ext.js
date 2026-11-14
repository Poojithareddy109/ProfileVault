let myLeads=[]
let i=0;

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))

function render(leads){
    let listItems=""
    for(let i=0;i<leads.length;i++){
        listItems += `<li><a href="${leads[i]}" target="_blank"> ${leads[i]} </a></li>`
    } 

    ulEl.innerHTML = listItems
    
}

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    
    inputEl.value=""
    
    localStorage.setItem("leads",JSON.stringify(myLeads))
    render(myLeads)
    
    
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    ulEl.innerText=""
    myLeads=[]
})
const tabs=[
    {url : "https://www.linkedin.com/"}
]

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
     myLeads.push(tabs[0].url)
    
    localStorage.setItem("leads",JSON.stringify(myLeads))
    render(myLeads)

    })

   

})





