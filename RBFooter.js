
const template =  ddocumeent.createElement("template")
template.innerHTML = `
<style>
footer {
  padding-top:1em;
  font-family: 'Courier Prime', monospace;
  vertical-align:middle;
}
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

    customElements.define("rb-footer", RBFooter)
