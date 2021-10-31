let logo = document.createElement("img");
logo.src = "imgs/logo.webp";
logo.setAttribute("width", "100px");
let aValues = ['home', 'about', 'services', 'contact'];
let header = document.createElement("header");
let nav = document.createElement("nav");
let ulList = document.createElement("ul");
let hover = "text-decoration: none; padding: 5px 10px; text-align: center; margin: 15px; font-size: 20px; color: #777; text-transform: capitalize;";
for(let i = 0; i < 4; i++)
{
    let liItems = document.createElement("li");
    let aLinks = document.createElement("a");
    aLinks.href = "#";
    aLinks.className = "link";
    liItems.style.cssText = "display: inline-block;";
    aLinks.style.cssText = hover;
    aLinks.onmousemove = function(){
        aLinks.style.cssText = "background-color: #333;text-decoration: none; padding: 5px 10px; text-align: center; margin: 15px; font-size: 20px; color: #FFF; text-transform: capitalize;"
    };
    aLinks.onmouseleave = function(){
        aLinks.style.cssText = hover;
    };
    aLinks.appendChild(document.createTextNode(aValues[i]));
    liItems.appendChild(aLinks);
    ulList.appendChild(liItems);
}
nav.appendChild(ulList);
header.prepend(logo);
header.appendChild(nav);
document.body.appendChild(header);
header.style.cssText = "display: flex; flex-direction:row; justify-content: space-between; align-items: center";
header.lastElementChild.firstElementChild.style.cssText = "list-style: none;";

/* ####################################################################################### */

let container = document.createElement("div");
container.className = "container";

container.style.cssText = "display: flex; justify-content: space-around; flex-wrap: wrap; background-color: #eee;";



for(let i = 1; i <= 15; i++)
{
    let productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.style.cssText = "width: calc((100%) / 3.5); margin: 10px ; background-color: #FFF; padding: 20px 10px; text-align: center; color: #e5e5e5";
    let productSpan = document.createElement("span");
    productSpan.style.cssText = "display: block; text-align: center; font-size: 25px; font-weight: bold; margin-bottom: 5px; color: #000; line-height: 2;"
    let number = document.createTextNode(i);
    productSpan.appendChild(number);
    let productText = document.createTextNode("Product");
    productDiv.appendChild(productSpan);
    productDiv.appendChild(productText);
    container.appendChild(productDiv);
}

document.body.appendChild(container);

/* ####################################################################################### */

let footer = document.createElement("footer");
let footerText = document.createTextNode("Copyright 2021");
footer.appendChild(footerText);
footer.style.cssText = "text-align: center; background-color: #0e563f; color: #FFF; padding: 10px 0;";
document.body.appendChild(footer);




