const fadein=document.querySelector(".tagline");window.onload=function(){setTimeout(function(){fadein.style.opacity=1,fadein.classList.add("slide")},1e3)};const toggle=document.getElementById("nav-btn"),page=document.getElementById("page");toggle.onclick=function(){toggle.classList.toggle("active"),page.classList.toggle("active")};const ctainer=document.getElementsByClassName("container"),bbtn=document.getElementsByClassName("btn"),button=document.getElementsByClassName("btn");for(i=0;i<button.length;i++)button[i].addEventListener("click",toggleItem,!1);function toggleItem(){let a=this.id;for(i=0;i<button.length;i++)button[i].id===a?button[i].classList.add("toggle"):button[i].classList.remove("toggle");!function(){let b=document.getElementsByClassName("container");for(i=0;i<b.length;i++)a===b[i].id?b[i].classList.add("show"):b[i].classList.remove("show")}()}function back(){for(i=0;i<ctainer.length;i++)ctainer[i].classList.remove("show");for(i=0;i<bbtn.length;i++)bbtn[i].classList.remove("toggle")}