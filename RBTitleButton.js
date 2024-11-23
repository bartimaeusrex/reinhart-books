

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class RBTitleButton extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
  <a href="./"><p id="title"><!-- #TITLE::AFTER TEXT IN CSS FILE -->
    <img src="images/rb_header_humane.png" width="200px"/>
  </p></a>
        `
        }
    }

    window.customElements.define("rb-titlebutton", RBTitleButton)

