// Product catalogue. Images are stored in the assets folder.
const products=[
{id:1,name:"Kiciahook V3 Premium",type:"Digital product + configuration pack",price:400,image:"assets/kiciahook.png",badge:"FEATURED"},
{id:2,name:"UE Prime + CFGs",type:"Digital product + configuration pack",price:400,image:"assets/ue-prime.png"},
{id:3,name:"Elisium Prime + Built-in CFGs",type:"Digital product with built-in configurations",price:500,image:"assets/elisium.png"},
{id:4,name:"Pigeon External for PC",type:"PC digital product",price:200,image:"assets/pigeon.png",badge:"PC"}
];
const $=id=>document.getElementById(id),money=n=>`${Math.round(n).toLocaleString("en-US")} Robux`;
function render(){
 const q=$("search").value.toLowerCase();
 const list=products.filter(p=>(p.name+" "+p.type).toLowerCase().includes(q));
 $("products").innerHTML=list.map(p=>`<article class="card"><div class="art"><img src="${p.image}" alt="${p.name}">${p.badge?`<span class="badge">${p.badge}</span>`:""}</div><div class="details"><div class="row"><div><div class="name">${p.name}</div><div class="type">${p.type}</div></div><div class="price">${money(p.price)}</div></div><div class="bottom"><span>Digital delivery</span><a class="order-link" href="https://discord.gg/QVkzQr9x2" target="_blank" rel="noopener noreferrer">ORDER VIA DISCORD ↗</a></div></div></article>`).join("");
 $("empty").hidden=!!list.length;
}
$("search").addEventListener("input",render);
$("year").textContent=new Date().getFullYear();
render();
