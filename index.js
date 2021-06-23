console.log("hello world!")
const nameSection = document.getElementById('name-section');
// nameSection.innerText = "Mabel";
// nameSection.addEventListener('click', ()=>(console.log("this is one click")
//     ))

// const topSection = document.getElementById('top-section');
// topSection.style.backgroundColor = "black";
const nameInput = document.getElementById('name-input');


const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', ()=>{
    nameSection.innerText = nameInput.value;
})
const pronounField = document.getElementById('pronoun-field');
const btn = document.getElementById('btn');  
const pronounsSection = document.getElementById('pronouns-section');


btn.addEventListener('click', ()=>{
    pronounsSection.textContent = pronounField.value; 
})




