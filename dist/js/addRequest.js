"use strict";var articleListParentNode=document.querySelector(".section1"),request=fetch("http://localhost:3000/article/?limit=11");request.then(function(e){return e.json()}).then(function(e){e.forEach(function(e){e='<section class="section1__item">\n         <figure class="image-container">\n             <section class="img-gradient"></section>\n             <img src="'.concat(e.pic,'" alt="image" />\n            \n         </figure>\n         <article class="section1__item-content">\n             <h2>').concat(e.title,"</h2>\n             <p>").concat(e.content,'</p>\n              <a href="../Article.htm" target="_blank" rel="noopener noreferrer">Читать далее</a> \n             <section class="section1__item-number">\n                <section class="number">300</section>\n                <section class="plus" data-change="+1"></section>\n                <section class="minus" data-change="-1"></section>\n            </section>\n         </article>\n     </section>');articleListParentNode.insertAdjacentHTML("beforeend",e)});document.getElementsByTagName("a")[2]}).catch(function(e){console.log(e)});