const d= document.querySelector('.form-todo');
const m= document.querySelector(".form-todo input[type='text']");
const g=document.querySelector(".todo-list");

d.addEventListener("submit", (e)=>{
    e.preventDefault();
    const f=m.value;
    const newli= document.createElement("li");
    const innertext= `<span class="">${f}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newli.innerHTML=innertext;
    g.append(newli);



});

g.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove"))
    { 
        const targeted=e.target.parentNode;
        targeted.remove();
    }
    if(e.target.classList.contains("done"))
    { 
        const lispan=e.target.parentNode.previousElementSibling;
        
        lispan.style.textDecoration ="line-through";
    }
});