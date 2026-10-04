const pages=[...document.querySelectorAll('.page')],nav=[...document.querySelectorAll('nav button')],title=document.querySelector('#title');
function go(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));nav.forEach(n=>n.classList.toggle('active',n.dataset.page===id));title.textContent=id[0].toUpperCase()+id.slice(1);location.hash=id}
nav.forEach(n=>n.onclick=()=>go(n.dataset.page));
const h=location.hash.slice(1);if(h&&document.getElementById(h))go(h);else nav[0].classList.add('active');
