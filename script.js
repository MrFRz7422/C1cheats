// Edit product names, prices and artwork initials in this list.
// These are placeholder prices; update them before publishing.
const products=[
{id:1,name:"Kicahook Prime + CFGs",type:"Digital product + configuration pack",price:9.99,cat:"featured",art:"KP",badge:"FEATURED"},
{id:2,name:"UE Premium + CFGs",type:"Digital product + configuration pack",price:14.99,cat:"tools",art:"UE"},
{id:3,name:"Elisium Prime + Built-in CFGs",type:"Digital product with built-in configurations",price:7.99,cat:"tools",art:"EP"},
{id:4,name:"Pigeon External for PC",type:"PC digital product",price:19.99,cat:"bundles",art:"PG",badge:"PC"}
];
let cart=[],filter="all";const $=id=>document.getElementById(id),money=n=>"£"+n.toFixed(2);
function render(){let q=$("search").value.toLowerCase();let list=products.filter(p=>(filter==="all"||p.cat===filter)&&(p.name+" "+p.type).toLowerCase().includes(q));$("products").innerHTML=list.map(p=>`<article class="card"><div class="art">${p.art}${p.badge?`<span class="badge">${p.badge}</span>`:""}</div><div class="details"><div class="row"><div><div class="name">${p.name}</div><div class="type">${p.type}</div></div><div class="price">${money(p.price)}</div></div><div class="bottom"><span>Digital delivery</span><button class="add" data-add="${p.id}">ADD TO CART +</button></div></div></article>`).join("");$("empty").hidden=!!list.length}
function renderCart(){$("cartCount").textContent=cart.reduce((s,p)=>s+p.qty,0);$("subtotal").textContent=money(cart.reduce((s,p)=>s+p.price*p.qty,0));$("items").innerHTML=cart.length?cart.map(p=>`<div class="cartline"><span>${p.name}<br><small>${p.qty} × ${money(p.price)}</small></span><span>${money(p.qty*p.price)}<br><button data-remove="${p.id}">Remove</button></span></div>`).join(""):"Your cart is empty."}
function openCart(){$("cart").classList.add("open");$("shade").classList.add("show")}function closeCart(){$("cart").classList.remove("open");$("shade").classList.remove("show")}
$("products").addEventListener("click",e=>{let id=+e.target.dataset.add;if(!id)return;let p=cart.find(x=>x.id===id);if(p)p.qty++;else cart.push({...products.find(x=>x.id===id),qty:1});renderCart();openCart()});
$("items").addEventListener("click",e=>{let id=+e.target.dataset.remove;if(id){cart=cart.filter(p=>p.id!==id);renderCart()}});
document.querySelector(".filters").addEventListener("click",e=>{if(!e.target.dataset.filter)return;filter=e.target.dataset.filter;document.querySelectorAll(".filters button").forEach(b=>b.classList.toggle("active",b===e.target));render()});
$("search").addEventListener("input",render);$("cartOpen").onclick=openCart;$("close").onclick=closeCart;$("shade").onclick=closeCart;
$("checkout").onclick=()=>$("modal").classList.add("show");$("modalClose").onclick=()=>$("modal").classList.remove("show");$("okay").onclick=()=>$("modal").classList.remove("show");
$("year").textContent=new Date().getFullYear();render();renderCart();