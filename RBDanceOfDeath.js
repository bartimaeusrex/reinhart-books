

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class RBDanceOfDeath extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
    <div class="danceofdeath multiply source">
      <a href="https://50watts.com/A-Modern-Dance-of-Death" target="_blank" class="highlighter">Source</a>
    </div>
        `
        }
    }

    window.customElements.define("rb-danceofdeath", RBDanceOfDeath)

