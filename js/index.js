const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

window.document.title = "Great Idea!";

let navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent ="Services";
navLinks[1].textContent ="Product";
navLinks[2].textContent ="Vision";
navLinks[3].textContent ="Features";
navLinks[4].textContent ="About";
navLinks[5].textContent ="Contact";

let cta_text = document.querySelector("div.cta-text h1");
cta_text.textContent = "DOM IS AWESOME";

const codeSnippet = document.querySelector('img#cta-img');

codeSnippet.src = 'img/header-img.png';

let cta_button = document.querySelector("div.cta-text button");
cta_button.textContent = "Get Started";

let h4_text_content = document.querySelectorAll("div.text-content h4");

h4_text_content[0].textContent = "FEATURES";
h4_text_content[1].textContent = "ABOUT";

let p_text_content = document.querySelectorAll("div.text-content p");

p_text_content[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";

p_text_content[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middle_img = document.querySelector("img.middle-img");

middle_img.src = "img/mid-page-accent.jpg";

let bottom_text_content_h4 = document.querySelectorAll("div.bottom-content div.text-content h4");

bottom_text_content_h4[0].textContent = "Services";
bottom_text_content_h4[1].textContent = "Product";
bottom_text_content_h4[2].textContent = "Vision";

let bottom_text_content_p = document.querySelectorAll("div.bottom-content div.text-content p");

bottom_text_content_p[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottom_text_content_p[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis."
bottom_text_content_p[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contract_h4 = document.querySelector("section.contact h4");
contract_h4.textContent = "Contact";
let contract_p = document.querySelectorAll("section.contact p");
contract_p[0].textContent = "123 Way 456 Street";
linebreak = document.createElement("br");
contract_p[0].appendChild(linebreak);
let rest_of_text = document.createTextNode("Somewhere, USA");
contract_p[0].appendChild(rest_of_text);
contract_p[1].textContent = "1 (888) 888-8888";
contract_p[2].textContent = "sales@greatidea.io";

let footer_p = document.querySelector("footer p");
footer_p.textContent = "Copyright Great Idea! 2018";
