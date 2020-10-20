const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');
const paragraph = document.createElement('p');
var currentdate = new Date(); 
var datetime = (currentdate.getMonth()+1) + "/" + currentdate.getDate()   + "/" + currentdate.getFullYear() 
                


paragraph.innerText = "Double Click to remove entry";
entryForm.append(paragraph.innerText);
let count = 1;
function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';
    
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = datetime;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function() {
        const allEntries = document.querySelectorAll('.single-entry');
       
       for(var i = 0; i < allEntries.length; i++){
           allEntries[i].style.display = 'none';
       }
        entryDiv.style.display = 'block';

    })
    displayEntryButton.addEventListener('dblclick', function(){
        entriesSection.removeChild(entryDiv);
        entriesNav.removeChild(displayEntryButton);
        count--;

    })
    
    count++
}

entryForm.addEventListener('submit', addEntryToDom)



                