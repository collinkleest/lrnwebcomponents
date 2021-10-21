/**
 * Copyright 2021 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { SimplePopover } from "@lrnwebcomponents/simple-popover/simple-popover.js";
/**
 * `vocab-term`
 * `a vocabulary term visualized in the page`
 * @demo demo/index.html
 * @element vocab-term
 */
class VocabTerm extends LitElement {
  static get properties() {
    return {
      popoverMode: { type: Boolean, reflect: true, attribute: "popover-mode" },
      links: { type: Array },
    };
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.closeText = "";
    this.openText = "";
    this.popoverMode = false;
    this.term = "";
    if (this.querySelector("summary")) {
      this.term = this.querySelector("summary").innerText;
    }
    this.information = "";
    if (this.querySelector(`[slot="information"]`)) {
      this.information = this.querySelector(`[slot="information"]`).innerText;
    }
    this.links = [];
    if (this.querySelector(".links a")) {
      this.querySelectorAll(".links a").forEach((el) => {
        console.log(el);
        console.log(el.innerText);
        this.links.push({
          title: el.innerText,
          href: el.getAttribute("href"),
        });
      });
    }
  }
  /**
   * LitElement style callback
   */
  static get styles() {
    // support for using in other classes
    let styles = [];
    if (super.styles) {
      styles = super.styles;
    }
    return [
      ...styles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }
  /**
   * LitElement render callback
   */
  render() {
    return html` ${!this.popoverMode
      ? html`
          <div>
            ${this.links.length > 0
              ? html`
                  <ul>
                    ${this.links.map(
                      (el) => html`
                        <li><a href="${el.href}">${el.title}</a></li>
                      `
                    )}
                  </ul>
                `
              : ``}
          </div>
        `
      : html`
          <details>
            <summary id="summary">${this.term}</summary>
            <simple-popover for="summary" auto position="top">
              <p>${this.information}</p>
              ${this.links.length > 0
                ? html`
                    <ul>
                      ${this.links.map(
                        (el) => html`
                          <li><a href="${el.href}">${el.title}</a></li>
                        `
                      )}
                    </ul>
                  `
                : ``}
            </simple-popover>
          </details>
        `}`;
  }
  /**
   * Convention we use
   */
  static get tag() {
    return "vocab-term";
  }
  /*
   * provides click for keyboard if open property is not supported by browser
   */
  _handleClick(e) {
    if (this.details && typeof this.details.open === "undefined") {
      this.toggleOpen();
      e.preventDefault();
      e.stopPropagation();
    }
  }
  /**
   * provides support for keyboard if open property is not supported by browser
   */
  _handleKeyup(e) {
    if (
      (this.details &&
        typeof this.details.open === "undefined" &&
        e.keyCode == 13) ||
      e.keyCode == 32
    ) {
      this.toggleOpen();
      e.preventDefault();
      e.stopPropagation();
    }
  }
  /**
   * toggles the element
   */
  toggleOpen() {
    if (this.details.hasAttribute("open")) {
      this.details.removeAttribute("open");
      if (this.details.open) this.details.open = false;
    } else {
      this.details.setAttribute("open", "");
      if (this.details.open) this.details.open = true;
    }
  }
  /**
   * LitElement ready
   */
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }
  /**
   * LitElement life cycle - property changed
   */
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      /* notify example
      // notify
      if (propName == 'format') {
        this.dispatchEvent(
          new CustomEvent(`${propName}-changed`, {
            detail: {
              value: this[propName],
            }
          })
        );
      }
      */
      /* observer example
      if (propName == 'activeNode') {
        this._activeNodeChanged(this[propName], oldValue);
      }
      */
      /* computed example
      if (['id', 'selected'].includes(propName)) {
        this.__selectedChanged(this.selected, this.id);
      }
      */
    });
  }
}
customElements.define(VocabTerm.tag, VocabTerm);
export { VocabTerm };
