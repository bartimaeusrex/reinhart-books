
// This template uses the "shadow DOM", which means that everything is contained within this file. All the styling, all the content. So yes, all the CSS styling would need to be repeated here from the main CSS file. 

const template =  document.createElement("template")
template.innerHTML = `
<style>
::selection {background: rgba(80, 201, 86, 0.253);}
.multiply {mix-blend-mode: multiply;}
.img-2em {width:2em;}
footer {
  padding-top:1em;
  font-family: 'Courier Prime', monospace;
  vertical-align:middle;
}

.disclaimer {
  margin:1em 0;
  font-size:.75em;
  line-height: 90%;
}

.aside {
  background-color: #75262600;
  color:#070707a8;
}
.aside::before {content:"["}
.aside::after {content:"]"}

a {
  color: #070707;
  text-decoration:none;
  background-color: #f0eadcff;
}

.highlighter {
  background-color: rgba(255, 240, 155, 0.3);
  text-decoration:underline solid orange;
  text-underline-offset: .25em;
}
.highlighter:hover {text-decoration:underline solid rgba(26, 65, 42, 0.527);}
.highlighter::after {content:" ➼"}
.highlighter:hover::after {content:" ➹"}

</style>

<footer>
<a href="https://curiouser.house/" target="_blank"><img class="img-2em multiply" src="images/curiouserhouse.png" /></a>
<a href="https://pilcrow.monster/" target="_blank"><img class="img-2em multiply" src="images/pilcrowmonster.png" /></a>
<a href="https://www.instagram.com/mrpatrickreinhart/" target="_blank"><img class="img-2em multiply" src="images/instagram.png" /></a>
<a href="https://fable.co/178026429369" target="_blank"><img class="img-2em multiply" src="images/fable.jpg" /></a>
<a href="https://app.thestorygraph.com/profile/mrpatrickreinhart" target="_blank"><img class="img-2em multiply" src="images/storygraph.jpg" /></a>
<a href="https://bookshop.org/shop/curiouserhouse" target="_blank"><img class="img-2em multiply" src="images/bookshop.png" /></a>
<br />
■ <a href="mailto:patrick@reinhartbooks.com" class="highlighter">patrick@reinhartbooks.com</a>
<div class="disclaimer aside">Disclaimer: All links to books on Bookshop.org are affiliate links, on which I earn a small commission <em>if</em> you end up buying books through them. Otherwise, there will be no ads, no SEO, and no use of AI.</div>
</footer>
`


class RBFooter extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode:"open"})
        shadow.append(template.content.cloneNode(true))
        }
    }

    window.customElements.define("rb-footer", RBFooter)

