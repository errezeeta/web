(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o);a(12),a(13);var l=function(){const[e,t]=Object(n.useState)(!0),a=()=>{window.scrollY>50?t(!1):t(!0)};return Object(n.useEffect)(()=>{const e=e=>{const{clientX:t,clientY:a}=e,n=30*(t/window.innerWidth-.5),r=30*(a/window.innerHeight-.5);document.querySelectorAll(".hero h1, .hero p, .profile-photo img, .cta-button").forEach(e=>{e.style.transform=`translate(${n}px, ${r}px)`})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),Object(n.useEffect)(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]),r.a.createElement("div",{className:"landing-page"},r.a.createElement("header",{className:"hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"profile-photo"},r.a.createElement("img",{src:"https://errezeeta.github.io/javier.dev/portait.JPG",alt:"That's me :)"})),r.a.createElement("h1",null,"Hi! I'm Javier Ram\xedrez"),r.a.createElement("p",null,"Telematics Engineer | UX Engineer | Data Visualization Specialist"),r.a.createElement("br",null),r.a.createElement("a",{href:"#projects",className:"cta-button"},"See My Projects")),r.a.createElement("div",{className:`scroll-arrow ${e?"":"hidden"}`,onClick:()=>{console.log("acruiv");const e=document.getElementById("about");e&&e.scrollIntoView({behavior:"smooth"})}},r.a.createElement("span",null,"\u25bc"))),r.a.createElement("section",{id:"about",className:"about-section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,"I'm a telematics engineer with two years of experience in frontend development, focusing on libraries like D3.js for data visualization. My goal is to combine my passion for development and user experience to create interactive and dynamic interfaces."))),r.a.createElement("section",{id:"projects",className:"projects-section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Projects"),r.a.createElement("div",{className:"project-list"},r.a.createElement("div",{className:"project-card"},r.a.createElement("h3",null,"Project 1"),r.a.createElement("p",null,"Brief description of your project."),r.a.createElement("a",{href:"https://github.com/your-profile/project1",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")),r.a.createElement("div",{className:"project-card"},r.a.createElement("h3",null,"Project 2"),r.a.createElement("p",null,"Brief description of another project."),r.a.createElement("a",{href:"https://github.com/your-profile/project2",target:"_blank",rel:"noopener noreferrer"},"View on GitHub"))))),r.a.createElement("section",{id:"contact",className:"contact-section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Contact"),r.a.createElement("p",null,"If you're interested in collaborating or have any questions, feel free to reach out!"),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:jramirezsamc@gmail.com",className:"cta-button"},"Send an Email"))),r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"\xa9 2024 Javier Ram\xedrez. All rights reserved.")))};var i=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:o,getTTFB:c}=t;a(e),n(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null))),i()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.d61f7709.chunk.js.map