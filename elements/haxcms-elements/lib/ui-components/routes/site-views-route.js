/**
 * Copyright 2022 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { MicroFrontendRegistry } from "@lrnwebcomponents/micro-frontend-registry/micro-frontend-registry.js";
import { enableServices } from "@lrnwebcomponents/micro-frontend-registry/lib/microServices.js";
import "@lrnwebcomponents/simple-fields/lib/simple-tags.js";
import "@lrnwebcomponents/simple-fields/lib/simple-fields-field.js";
import "@lrnwebcomponents/simple-fields/lib/simple-fields-tag-list.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";
import "@lrnwebcomponents/editable-table/lib/editable-table-display.js";

import { iconFromPageType } from "@lrnwebcomponents/course-design/lib/learning-component.js";
import { autorun, toJS } from "mobx";
/**
 * `site-uuid-link`
 * `UUID to render an accurate link and title in the site`
 *
 * @demo demo/index.html
 */
export class SiteViewsRoute extends LitElement {
  static get tag() {
    return "site-views-route";
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          font-size: 16px;
        }
        editable-table-display::part(tag-link),
        a {
          text-decoration: none;
          font-size: 16px;
        }
        [data-active] {
          background-color: var(--simple-colors-default-theme-accent-1);
        }
        simple-icon-button-lite {
          border-radius: 0;
          font-size: 16px;
        }
        /* list display */
        .list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .list-item {
          margin: 0;
          padding: 16px;
          border-bottom: 1px solid var(--simple-colors-default-theme-grey-3);
        }
        .list-item:hover {
          background-color: var(--simple-colors-default-theme-grey-2);
        }
        .list-link a {
          font-size: 32px;
        }
        .list-breadcrumb {
          font-size: 10px;
        }


        /* editable table display */
        editable-table-display,
        editable-table-display::part(table),
        table,tr,th,td {
          font-size: 16px;
        }
    `];
  }

  constructor() {
    super();
    this.loading = false;
    this.params = {
      display: "list",
    };
    this.results = [];
    this._debounce = null;
    enableServices(["haxcms"]);
    autorun(() => {
      const routerLocation = store.currentRouterLocation;
      clearTimeout(this._debounce);
      this._debounce = setTimeout(async () => {
        await this.rebuildSearchResults();        
      }, 0);
    });
  }

  async rebuildSearchResults() {
    if (!this.loading && store.getInternalRoute() === "views") {
      const rawParams = new URLSearchParams(location.search);
      const searchParams = Object.fromEntries(rawParams);
      this.params = {...this.params,...searchParams};
      // ensure display is always stateful even if not directly set
      if (!searchParams.display) {
        rawParams.set('display', this.params.display || 'list');
        window.history.replaceState({}, "", decodeURIComponent(`./x/views?${rawParams}`));
      }
      const site = toJS(store.manifest);
      let base = document.querySelector("base").href;
      if (!base) {
        base = '/';
      }
      const params = {
        type: "site",
        site: {
          file: base + "site.json",
          id: site.id,
          title: site.title,
          author: site.author,
          description: site.description,
          license: site.license,
          metadata: site.metadata,
          items: site.items,
        },
        link: base,
        ...searchParams
      };
      this.loading = true;
      const response = await MicroFrontendRegistry.call(
        "@haxcms/views",
        params
      );
      if (response.data) {
        this.results = response.data;
      }
      this.loading = false;
    }
  }

  toggleDisplay(e) {
    const params = new URLSearchParams(window.location.search);
    params.set('display', e.target.dataset.display);
    window.history.pushState({}, "", decodeURIComponent(`./x/views?${params}`));
    this.params = Object.fromEntries(params);
  }

  toggleMediaDisplay(e) {
    const params = new URLSearchParams(window.location.search);
    params.set('mediatype', e.target.dataset.mediatype);
    window.history.pushState({}, "", decodeURIComponent(`./x/views?${params}`));
    this.params = Object.fromEntries(params);
  }

  // allows for removing the search filter, click needs a second for data to update
  evaluateTagValue(e) {
    setTimeout(() => {
      if (this.shadowRoot.querySelector('simple-fields-tag-list').tagList.length === 0) {
        const params = new URLSearchParams(window.location.search);
        params.delete('tag');
        window.history.pushState({}, "", decodeURIComponent(`./x/views?${params}`)); 
        this.params = Object.fromEntries(params);
      }        
    }, 0);
  }

  render() {
    return html`
    <simple-icon-button-lite ?data-active="${this.params.display === "list"}" data-display="list" @click="${this.toggleDisplay}" icon="hax:module">List display</simple-icon-button-lite>
    <simple-icon-button-lite ?data-active="${this.params.display === "table"}" data-display="table" @click="${this.toggleDisplay}" icon="editable-table:col-striped">Table display</simple-icon-button-lite>
    <simple-icon-button-lite ?data-active="${this.params.display === "card"}" data-display="card" @click="${this.toggleDisplay}" icon="image:grid-on">Card display</simple-icon-button-lite>
    <simple-icon-button-lite ?data-active="${this.params.display === "media"}" data-display="media" @click="${this.toggleDisplay}" icon="hax:multimedia">Media display</simple-icon-button-lite>
    <simple-icon-button-lite @click="${this.rebuildSearchResults}" icon="refresh">Refresh data</simple-icon-button-lite>
    
    <simple-fields-tag-list
      style="background-color:transparent;"
      label="Tags"
      single-value-only
      @click="${this.evaluateTagValue}"
      .value="${this.params.tag || null}"
    ></simple-fields-tag-list>
    ${this.loading ? html`<h3>Loading...</h3>` : html`<h3>Results</h3>
${this.params.display === "list" ? this.listTemplate() : nothing}
${this.params.display === "table" ? this.tableTemplate() : nothing}
${this.params.display === "card" ? this.cardTemplate() : nothing}
${this.params.display === "media" ? this.mediaTemplate() : nothing}
    <slot></slot>`}`;
  }

  iconFromKey(key) {
    switch (key) {
      case "audio":
        return "av:volume-up";
      case "selfChecks":
        return "hax:check";
      case "objectives":
        return "hax:learning-outcome";
      case "authorNotes":
        return "hax:note";
      case "images":
        return "image:photo";
      case "h5p":
        return "hax:h5p";
      case "headings":
        return "editor:format-size";
      case "dataTables":
        return "editor:table-chart";
      case "specialTags":
        return "hax:tag";
      case "links":
        return "editor:link";
      case "placeholders":
        return "editor:insert-comment";
      case "siteremotecontent":
        return "hax:remote";
      case "video":
        return "av:videocam";
      default:
        return "hax:module";
    }
  }

  mediaTemplate() {
    let mediaKeys = [
      "audio",
      "selfChecks",
      "objectives",
      "authorNotes",
      "images",
      "h5p",
      "headings",
      "dataTables",
      "specialTags",
      "links",
      "placeholders",
      "siteremotecontent",
      "video"
  ];
    return html`
    <div>
      ${mediaKeys.map((key) => html`
        <simple-icon-button-lite ?data-active="${this.params.mediatype === key}" data-mediatype="${key}" @click="${this.toggleMediaDisplay}" icon="${this.iconFromKey(key)}">${key}</simple-icon-button-lite>
      `)}
    </div>
    <div>
    ${this.results.map((item) => html`
      ${mediaKeys.map((key) => html`${item.media && item.media[key] && typeof item.media[key] == "string" && this.params.mediatype === key ? unsafeHTML(item.media[key]) : nothing}`)}
      `)}
    </div>
    `;
  }

  listTemplate() {
    return html`
    <ul class="list">
      ${this.results.map(
      (item) => html`
        <li class="list-item">
          <div class="list-link"><a href="${item.slug}">${item.title}</a></div>
          <div class="list-breadcrumb">${this.calculateBreadcrumb(item).map(item => html`
          <span>${item.title}</span> `)}</div>
        ${item.metadata.tags && item.metadata.tags != "" ? item.metadata.tags
        .split(",")
        .map(
          (tag) => html`<a href="x/views?tag=${tag.trim()}">
          <simple-tag
            auto-accent-color
            value="${tag.trim()}"
            accent-color="${item.accentColor}"
          ></simple-tag></a>`
        ) : nothing}
      </li>`)}
      </ul>`;
  }


  tableTemplate() {
    return html`
    <editable-table-display 
      accent-color="cyan" 
      bordered 
      caption="Content matching your search criteria" 
      numeric-styles
      column-header
      printable
      downloadable
      sort
      striped>
    <table>
      <tr>
        <th>Icon</th>
        <th>Type</th>
        <th>Title</th>
        <th>Tags</th>
        <th>Updated</th>
        <th>Created</th>
        <th>Status</th>
      </tr>
    ${this.results.map(
      (item) => html`
      <tr>
        <td>${item.metadata.pageType ? html`<simple-icon title="${item.metadata.pageType}" icon="${iconFromPageType(item.metadata.pageType)}"></simple-icon>` : nothing}</td>
        <td>${item.metadata.pageType ? item.metadata.pageType : nothing}</td>
        <td><a href="${item.slug}">${item.title}</a></td>
        <td>
          ${item.metadata.tags && item.metadata.tags != "" ? item.metadata.tags
          .split(",")
          .map(
            (tag) => html`<a part="tag-link" href="x/views?tag=${tag.trim()}">
            <simple-tag
              auto-accent-color
              value="${tag.trim()}"
              accent-color="${item.accentColor}"
            ></simple-tag></a>`
          ) : nothing}
        </td>
        <td>
          <simple-datetime
            format="m/j/y"
            timestamp="${item.metadata.created}"
            unix
            class="info-date"
          ></simple-datetime>
        </td>
        <td>
          <simple-datetime
            format="m/j/y"
            timestamp="${item.metadata.updated}"
            unix
            class="info-date"
          ></simple-datetime>
        </td>
        <td>
          ${item.metadata.published !== false ? `published` : `unpublished`}
        </td>
      </tr>`)}
      </table>
      </editable-table-display>`;
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      // change if tag changes, always change if coming to or from media since it's a larger query
      if (propName === "params" && oldValue && this.params && (oldValue.tag !== this.params.tag || this.params.display === "media")) {
        this.rebuildSearchResults();
      }
    });
  }

  cardTemplate() {
    return html`${this.results.map(
      (item) => html`
        <accent-card image-src="http://placekitten.com/200/600" accent-color="red" horizontal accent-heading>
          <div slot="heading">${item.title}</div>
          <div slot="subheading">${item.metadata.tags && item.metadata.tags != "" ? item.metadata.tags
                .split(",")
                .map(
                  (tag) => html`<a href="x/views?tag=${tag.trim()}">
                  <simple-tag
                    auto-accent-color
                    value="${tag.trim()}"
                    accent-color="${item.accentColor}"
                  ></simple-tag></a>`
                ) : nothing}</div>
          <div slot="content">        <a href="${item.slug}">Link to content</a>
        </div>
        </accent-card>`)}`;
  }

  calculateBreadcrumb(activeItem) {
    let items = [];
    const site = toJS(store.manifest);
    let itemBuilder = activeItem;
    // walk back through parent tree
    while (itemBuilder && itemBuilder.parent != null) {
      itemBuilder = site.items.find(
        (i) => i.id == itemBuilder.parent
      );
      // double check structure is sound
      if (itemBuilder) {
        items.unshift({
          title: itemBuilder.title,
        });
      }
    }
    return items;
  }

  activateView(e) {
     const params = new URLSearchParams(window.location.search);
     params.set('tag', e.target.value);
     window.history.pushState({}, "", decodeURIComponent(`./x/views?${params}`));
  }

  static get properties() {
    return {
      results: {
        type: Array,
      },
      loading: {
        type: Boolean,
        reflect: true
      },
      params: {
        type: Object,
      },
    }
  }
}

customElements.define(SiteViewsRoute.tag, SiteViewsRoute);