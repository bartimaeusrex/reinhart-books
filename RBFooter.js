

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here as well.

class RBFooter extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <footer>
        <a href="https://curiouser.house/" target="_blank"><img class="img-2em multiply" src="images/curiouserhouse.png" /></a>
        <a href="https://pilcrow.monster/" target="_blank"><img class="img-2em multiply" src="images/pilcrowmonster.png" /></a>
        <a href="https://bsky.app/profile/mrpatrickreinhart.bsky.social" target="_blank"><img class="img-2em multiply" src="images/bsky.png" /></a>
        <a href="https://www.instagram.com/mrpatrickreinhart/" target="_blank"><img class="img-2em multiply" src="images/instagram.png" /></a>
        <a href="https://fable.co/178026429369" target="_blank"><img class="img-2em multiply" src="images/fable.jpg" /></a>
        <a href="https://app.thestorygraph.com/profile/mrpatrickreinhart" target="_blank"><img class="img-2em multiply" src="images/storygraph.jpg" /></a>
        <a href="https://bookshop.org/shop/curiouserhouse" target="_blank"><img class="img-2em multiply" src="images/bookshop.png" /></a>
        <br />
        ■ <a href="mailto:patrick@reinhartbooks.com" class="highlighter">patrick@reinhartbooks.com</a>
        <div class="disclaimer aside">Disclaimer: All links to books on Bookshop.org are affiliate links, on which I earn a small commission <em>if</em> you end up buying books through them. Otherwise, there will be no ads, no SEO, and no use of AI.</div>
        </footer>
        `
        }
    }

    window.customElements.define("rb-footer", RBFooter)

