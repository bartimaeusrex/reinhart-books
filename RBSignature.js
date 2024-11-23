

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class RBSignature extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
    <br />
    <div class="align-right grenze">— Reinhart.<br />
      <a href="https://archive.org/details/billminder00robi/page/n338/mode/1up" target="_blank">
      <img class="img-4em multiply" src="images/whr_birdexecution.png"/></a>
    </div>
        `
        }
    }

    window.customElements.define("rb-signature", RBSignature)

