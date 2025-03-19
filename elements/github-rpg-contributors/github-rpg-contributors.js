/**
 * Copyright 2025 haxtheweb
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `github-rpg-contributors`
 *
 * @demo index.html
 * @element github-rpg-contributors
 */
export class GithubRpgContributors extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "github-rpg-contributors";
  }

  constructor() {
    super();
    this.githubApiUrl = " https://api.github.com";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/github-rpg-contributors.ar.json", import.meta.url)
          .href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  async fetchContributors(organization, repo) {
    try {
      const contributorsResponse = await fetch(
        `${this.githubApiUrl}/repos/${organization}/${repo}/contributors`,
      );
      const contributors = await contributorsResponse.json();
      console.log(contributors);
      this.__contributors = contributors;
    } catch (error) {
      console.error("Failed to fetch from github api with error", error);
    }
  }

  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if (this.repo && this.organization) {
      console.log("firstUpdated", changedProperties);

      await this.fetchContributors(this.organization, this.repo);
    }
  }

  async updated(changedProperties) {
    super.updated(changedProperties);
    console.log(changedProperties.keys());
    new Set(new Map().keys());
    console.log("updated", changedProperties);

    // await this.fetchContributors(this.organization, this.repo);
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      organization: { type: String },
      repo: { type: String },
      __contributors: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles, css``];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h3><span>:</span></h3>
      <slot></slot>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(
  GithubRpgContributors.tag,
  GithubRpgContributors,
);
