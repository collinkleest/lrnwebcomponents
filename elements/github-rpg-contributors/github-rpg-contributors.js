/**
 * Copyright 2025 haxtheweb
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/rpg-character/rpg-character.js";

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
      return contributors;
    } catch (error) {
      console.error("Failed to fetch from github api with error", error);
    }
  }

  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if (this.repo && this.organization) {
      this.__contributors = await this.fetchContributors(
        this.organization,
        this.repo,
      );
    }
  }

  async updated(changedProperties) {
    super.updated(changedProperties);
    if (
      changedProperties.has("repo") ||
      changedProperties.has("organization")
    ) {
      this.__contributors = await this.fetchContributors(
        this.organization,
        this.repo,
      );
    }
  }

  static get properties() {
    return {
      ...super.properties,
      organization: { type: String },
      repo: { type: String },
      __contributors: { type: Array },
    };
  }

  static get styles() {
    return [super.styles, css``];
  }

  render() {
    return this.__contributors?.map((contributor) => {
      return html`<rpg-character seed="${contributor.login}"></rpg-character>`;
    });
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
