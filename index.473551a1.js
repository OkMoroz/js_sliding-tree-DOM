document.querySelectorAll(".tree li").forEach(function(e){var t=e.querySelector("ul");if(t){var n=document.createElement("span"),l=t.parentElement;n.textContent=l.firstChild.textContent.trim(),e.firstChild.replaceWith(n),n.addEventListener("click",function(){var e="none"!==t.style.display;t.style.display=e?"none":"block"})}});
//# sourceMappingURL=index.473551a1.js.map
