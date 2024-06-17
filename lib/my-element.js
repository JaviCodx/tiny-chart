import { LitElement, css, html } from 'lit'
import { Task } from '@lit/task'

import { customElement, property } from 'lit/decorators.js'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export default class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  static get properties() {
    return {
      greeting: {type: String},
      data: {attribute: false},
      items: {type: Array},
    };
  }


  render() {
    return html`
      <div>
   cacaaa
      </div>
    `
  }




}


window.customElements.define('my-element', MyElement);
