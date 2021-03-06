/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { normalizeEventPath } from "@lrnwebcomponents/utils/utils.js";

/**
 * `rich-text-editor-selection`
 * singleton to manage selections, clipboards, ranges, and associations between all editors and toolbars
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @element rich-text-editor-selection
 * @demo ./demo/selection.html
 */
class RichTextEditorSelection extends LitElement {
  /**
   * gets valid commands list
   *
   * @readonly
   */
  get validCommands() {
    return [
      "backColor",
      "bold",
      "copy",
      "createLink",
      "cut",
      "decreaseFontSize",
      "defaultParagraphSeparator",
      "delete",
      "fontName",
      "fontSize",
      "foreColor",
      "formatBlock",
      "forwardDelete",
      "hiliteColor",
      "increaseFontSize",
      "indent",
      "insertBrOnReturn",
      "insertHorizontalRule",
      "insertHTML",
      "insertImage",
      "insertLineBreak",
      "insertOrderedList",
      "insertUnorderedList",
      "insertParagraph",
      "insertText",
      "italic",
      "justifyCenter",
      "justifyFull",
      "justifyLeft",
      "justifyRight",
      "outdent",
      "paste",
      "redo",
      "removeFormat",
      "selectAll",
      "strikethrough",
      "styleWithCss",
      "subscript",
      "superscript",
      "undo",
      "unlink",
      "useCSS",
    ];
  }
  constructor() {
    super();
    let sel = this;
    this.hidden = true;
    this.__toolbars = [];
    this.__clipboard = document.createElement("textarea");
    this.__clipboard.setAttribute("aria-hidden", true);
    this.__clipboard.style.position = "absolute";
    this.__clipboard.style.left = "-9999px";
    this.__clipboard.style.top = "0px";
    this.__clipboard.style.width = "0px";
    this.__clipboard.style.height = "0px";
    this.id = this._generateUUID();
    document.body.appendChild(this.__clipboard);
    window.addEventListener("register", this._handleRegistration.bind(sel));
    /*
    extendForward.addEventListener('click', () => {
      window.getSelection().modify('extend', 'forward', 'character');
    });

    extendBackward.addEventListener('click', () => {
      window.getSelection().modify('extend', 'backward', 'character');
    });*/
  }
  render() {
    return html`<slot></slot>`;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {});
  }

  /**
   * life cycle, element is disconnected
   */
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  /**
   * undo for canceled edits
   *
   * @param {object} editor
   * @memberof RichTextEditorSelection
   */
  cancelEdits(editor) {
    editor.revert();
    this.edit(editor, false);
  }

  /**
   * closes the toolbar
   *
   * @param {object} toolbar
   * @param {object} editor
   * @memberof RichTextEditorSelection
   */
  closeToolbar(toolbar, editor = toolbar.editor) {
    if (editor) this.disableEditing(editor);
    toolbar.editor = undefined;
    document.body.append(toolbar);
  }

  /**
   * disables editing
   *
   * @param {object} editor
   * @memberof RichTextEditorSelection
   */
  disableEditing(editor) {
    if (!!editor) {
      this.getRoot(editor).onselectionchange = undefined;
      editor.viewSource = false;
      editor.disableEditing();
      editor.makeSticky(false);
    }
  }

  /**
   * Updates selected range based on toolbar and editor
   * @param {event} e editor change event
   * @param {deselect} if editor is being deselected
   * @returns {void}
   */
  edit(editor, editable = true) {
    if (!!editor) {
      let toolbar = !editor ? undefined : this.getConnectedToolbar(editor),
        oldEditor = editable ? toolbar.editor : undefined;
      this.highlight(toolbar, false);
      if (toolbar && oldEditor !== editor) {
        if (!!oldEditor) this.disableEditing(oldEditor);
        toolbar.editor = editor;
        this.enableEditing(editor, toolbar);
      }
    }
  }
  /**
   * enables content editable
   *
   * @param {*} editor
   * @param {*} [toolbar=this.getConnectedToolbar(editor)]
   * @memberof RichTextEditorSelection
   */
  enableEditing(editor, toolbar = this.getConnectedToolbar(editor)) {
    if (!!editor) {
      editor.makeSticky(toolbar.sticky);
      editor.parentNode.insertBefore(toolbar, editor);
      editor.enableEditing();
      this.updateRange(editor);
      //editor.observeChanges(this.getRoot(editor));
      this.getRoot(editor).onselectionchange = (e) => {
        if (!toolbar.__promptOpen) this.updateRange(editor);
      };
    }
  }

  /**
   * expands selection to a specific ancestor
   * @param {string} selectors comma-separated list of selectors
   * @param {object} range
   * @returns {object} updated range
   */
  expandRangeTo(selectors = "", range) {
    let node = range ? this.getRangeNode(range) : undefined,
      tagName = node && node.tagName ? node.tagName.toLowerCase() : undefined,
      selectorsList = selectors.toLowerCase().replace(/\s*/g, "").split(",");
    if (selectorsList.includes(tagName)) {
      return node;
    } else if (node.closest(selectors)) {
      range.selectNode(node.closest(selectors));
      return range;
    }
  }

  /**
   * node selected or its parent node
   *
   * @param {object} range
   * @returns object
   * @memberof RichTextEditorSelection
   */
  getRangeNode(range) {
    let common = !range ? undefined : range.commonAncestorContainer,
      startContainer = !range ? undefined : range.startContainer,
      startOffset = !range ? undefined : range.startOffset,
      endContainer = !range ? undefined : range.endContainer,
      endOffset = !range ? undefined : range.endOffset,
      startNode =
        !startContainer || !startContainer.children
          ? undefined
          : startContainer.children[startOffset - 1],
      rootNode =
        startContainer === endContainer && endOffset - startOffset === 1
          ? startNode
          : common;
    return rootNode;
  }

  /**
   * gets closest shadowRoot or document from node
   *
   * @param {object} node
   * @returns object
   * @memberof RichTextEditorSelection
   */
  getRoot(node) {
    return !node || node === document
      ? document
      : node.parentNode
      ? this.getRoot(node.parentNode)
      : node;
  }

  /**
   * gets toolbar currently assocatied with given editor
   *
   * @param {*} editor
   * @returns
   * @memberof RichTextEditorSelection
   */
  getConnectedToolbar(editor) {
    if (!editor.id) editor.id = this._generateUUID();
    if (!editor.__connectedToolbar) {
      //get toolbar by id
      let toolbar,
        filter = !editor.toolbar
          ? []
          : (this.__toolbars || []).filter(
              (toolbar) => editor.toolbar && toolbar.id === editor.toolbar
            );
      //get toolbar by type
      if (filter.length === 0) {
        filter = !editor.type
          ? []
          : (this.__toolbars || []).filter(
              (toolbar) => editor.type && toolbar.type === editor.type
            );
      }
      //get any toolbar
      if (filter.length === 0) filter = this.__toolbars;
      if (filter[0]) {
        toolbar = filter[0];
      } else if (filter.length === 0) {
        //make toolbar
        toolbar = document.createElement(
          editor.type || "rich-text-editor-toolbar"
        );
        editor.parentNode.insertBefore(toolbar, editor);
      }
      toolbar.id = toolbar.id || editor.toolbar || this._generateUUID();
      editor.__connectedToolbar = toolbar;
    }
    return editor.__connectedToolbar;
  }

  /**
   * adds or removes hightlight
   * @param {object} contents contents to be highlighted
   * @param {boolean} [add=true] add highlight?
   * @returns {void}
   */
  highlight(toolbar, add = true, node) {
    this.toolbar = toolbar;
    let editor = toolbar ? toolbar.editor : undefined;
    if (!editor) return;
    if (add !== false) {
      if (toolbar.range) {
        this.hidden = false;
        toolbar.range.insertNode(this);
        if (node) this.append(node);
        toolbar.range.setStartAfter(this);
        this.range = toolbar.range;
      }
    } else {
      this.updateRange(toolbar.editor, toolbar.range);
      this.hidden = true;
      this.toolbar = undefined;
      this.range = undefined;
      document.body.appendChild(this);
    }

    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: add,
      })
    );
  }
  /**
   * selects and highlights a node
   *
   * @param {object} node
   * @param {object} toolbar
   * @returns {void}
   * @memberof RichTextEditorSelection
   */
  highlightNode(node, toolbar) {
    this.selectNode(node, toolbar.range, toolbar.editor);
    this.highlight(toolbar);
  }
  /**
   * gets clipboard data and pastes into an editor's range
   *
   * @param {obj} editor
   * @memberof RichTextEditorSelection
   */
  pasteFromClipboard(editor) {
    setTimeout(async () => {
      let sel = window.getSelection(),
        range = editor.range,
        text = await navigator.clipboard.readText();
      this.__clipboard.value = text;
      this.__clipboard.focus();
      this.__clipboard.select();
      document.execCommand("paste");
      sel.removeAllRanges();
      sel.addRange(range);
      this.pasteIntoEditor(editor, this.__clipboard.value);
    }, 2000);
  }
  /**
   * pastes content into editor's selected range
   *
   * @param {obj} editor editor
   * @param {obj} pasteContent content to paste
   * @memberof RichTextEditorSelection
   */
  pasteIntoEditor(editor, pasteContent) {
    if (editor) {
      let range = editor.range,
        div = document.createElement("div"),
        parent = range.commonAncestorContainer.parentNode,
        closest = parent.closest(
          "[editing=true]:not([disabled]),input:not([disabled]),textarea:not([disabled])"
        );
      if ((editor = closest)) {
        div.innerHTML = editor.sanitizeHTML(pasteContent);
        if (range && range.extractContents) {
          range.extractContents();
        }
        range.insertNode(div);
        while (div.firstChild) {
          div.parentNode.insertBefore(div.firstChild, div);
        }
        div.parentNode.removeChild(div);
      }
    }
  }
  /**
   * sets up editor's event listeners
   *
   * @param {object} editor
   * @param {boolean} [add=true]
   * @returns {object} toolbar
   * @memberof RichTextEditorSelection
   */
  registerEditor(editor, remove = false) {
    let toolbar = !editor ? undefined : this.getConnectedToolbar(editor),
      handlers = {
        click: (e) => this._handleEditorClick(editor, e),
        focus: (e) => {
          if (!toolbar.__promptOpen && !editor.disabled) this.edit(editor);
        },
        getrange: (e) => {
          if (!toolbar.__promptOpen) {
            this.toolbar = toolbar;
            this.updateRange(editor, editor.range);
          }
        },
        keydown: (e) => this._handleShortcutKeys(editor, e),
        pastefromclipboard: (e) => this.pasteFromClipboard(e.detail),
        pastecontent: (e) => this._handlePaste(e),
      };
    if (!remove) {
      //add event listeners
      Object.keys(handlers).forEach((handler) =>
        editor.addEventListener(handler, handlers[handler])
      );
    } else {
      Object.keys(handlers).forEach((handler) =>
        editor.removeEventListener(handler, handlers[handler])
      );
    }
    if (
      (editor.__connectedToolbar.show =
        "always" && !editor.__connectedToolbar.editor)
    )
      this.edit(editor);
    return editor.__connectedToolbar;
  }
  /**
   * updates toolbar list
   *
   * @param {*} toolbar
   * @param {boolean} [remove=false]
   * @memberof RichTextEditorSelection
   */
  registerToolbar(toolbar, remove = false) {
    let handlers = {
      command: (e) => {
        e.stopImmediatePropagation();
        let d = e.detail || {};
        this._handleCommand(toolbar, d.command, d.commandVal, d.range);
        // optional callback so that custom buttons can perform
        // custom toolbar and/or editor opperations
        if (d.button && d.button.commandCallback)
          d.button.commandCallback(toolbar.editor, toolbar, this);
      },
      disableediting: (e) => this.disableEditing((e.detail || {}).editor),
      highlight: (e) => {
        this.highlight(toolbar, e.detail);
      },
      highlightnode: (e) => {
        this.highlightNode(e.detail, toolbar);
      },
      pastefromclipboard: (e) => {
        e.stopImmediatePropagation();
        this.pasteFromClipboard(e.detail);
      },
      "rich-text-editor-prompt-closed": (e) => {
        toolbar.__promptOpen = false;
      },
      "rich-text-editor-prompt-open": (e) => {
        toolbar.__promptOpen = true;
      },
      setrange: (e) => {
        (this.range = (e.detail || {}).range),
          this.updateRange((e.detail || {}).editor, this.range);
        this.selectRange(this.range, (e.detail || {}).editor);
      },
      selectnode: (e) => {
        this.selectNode(e.detail, toolbar.range, toolbar.editor);
      },
      selectnodecontents: (e) => {
        this.selectNodeContents(e.detail, toolbar.range, toolbar.editor);
      },
      selectrange: (e) => {
        this.selectRange(e.detail, toolbar.editor);
      },
      wrapselection: (e) => {
        this.surroundRange(e.detail, toolbar.range);
      },
    };
    if (!remove && !toolbar.registered) {
      this.__toolbars.push(toolbar);
      Object.keys(handlers).forEach((handler) =>
        toolbar.addEventListener(handler, handlers[handler])
      );
      toolbar.registered = true;
    } else {
      toolbar.registered = false;
      Object.keys(handlers).forEach((handler) =>
        toolbar.removeEventListener(handler, handlers[handler])
      );
      //this.__toolbars = this.__toolbars.filter((bar) => bar !== toolbar);
    }
  }

  /**
   * sets selection range to specified node
   * @param {object} node node to select
   * @returns {void}
   */
  selectNode(node, range, editor = this.toolbar.editor) {
    if (!range) {
      let sel = window.getSelection();
      range = document.createRange();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (range) {
      range.selectNode(node);
      if (editor) this.updateRange(editor, range);
    }
  }
  /**
   * sets selection range to specified node's contents
   * @param {object} node node to select
   * @returns {void}
   */
  selectNodeContents(node, range, editor) {
    if (node) {
      if (!range) {
        let sel = window.getSelection();
        range = document.createRange();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      if (range) {
        range.selectNodeContents(node);
        if (editor) this.updateRange(editor, range);
      }
    }
  }
  /**
   * selects or deselects(collapses) a range
   *
   * @param {object} range
   * @param {boolean} [select=true] select range?
   * @memberof RichTextEditorSelection
   */
  selectRange(range, select = true, editor) {
    if (range) {
      if (select) {
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else {
        if (!range.isCollapsed) range.collapse();
      }
      if (editor) this.updateRange(editor);
    }
    return range;
  }
  /**
   * sets range to content within a node
   *
   * @param {object} node
   * @param {range} range
   * @returns
   * @memberof RichTextEditorSelection
   */
  surroundRange(node, range) {
    if (range) {
      range.surroundContents(node);
      if (editor) this.updateRange(editor);
    }
    return range;
  }
  /**
   * maintains consistent range info across toolbar and editor
   *
   * @param {object} editor
   * @param {range} range
   * @memberof RichTextEditorSelection
   */
  updateRange(editor, range) {
    if (editor) {
      let toolbar = this.getConnectedToolbar(editor);
      this.toolbar = toolbar;
      if (!range) range = editor.range;
      editor.range = range;
      if (toolbar) {
        toolbar.selectedNode = editor.selectedNode;
        toolbar.selectionAncestors = editor.selectionAncestors;
        toolbar.range = range;
      }
    }
  }

  /**
   * Generate a UUID
   * @returns {string} unique id
   */
  _generateUUID() {
    let hex = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    return "rte-" + "ss-s-s-s-sss".replace(/s/g, hex);
  }
  /**
   * preserves highlight on editor selection when editor is not focus
   *
   * @param {*} editor
   * @param {*} e
   * @memberof RichTextEditorSelection
   */
  _handleBlur(editor, e) {
    if (
      e.relatedTarget === null ||
      !e.relatedTarget.startsWith === "rich-text-editor"
    ) {
      this.edit(editor, true);
    } else if (editor) {
      this.highlight(editor.toolbar);
    }
  }
  /**
   * handles commands sent from toolbar
   *
   * @param {object} toolbar toolbar element
   * @param {string} command command string
   * @param {string} commandVal string for command
   * @param {object} range
   * @memberof RichTextEditorSelection
   */
  _handleCommand(toolbar, command, commandVal, range) {
    let editor = toolbar.editor;
    if (this.validCommands.includes(command)) {
      commandVal = editor ? editor.sanitizeHTML(commandVal) : commandVal;
      this.range = editor.range;
      this.updateRange(editor, range);
      this.selectRange(range, editor);
      if (command != "paste") {
        document.execCommand(command, false, commandVal);
      } else if (navigator.clipboard) {
        this.pasteFromClipboard(editor);
      }
      this.highlight(toolbar, false);
    } else if (command === "cancel") {
      if (editor) editor.revert();
      toolbar.close(editor);
    } else if (command === "close") {
      toolbar.close(editor);
    } else if (command === "viewSource") {
    }
  }
  /**
   * handles clicking on an editor
   * so that some elements can be clicked to open an edit prompt
   *
   * @param {object} editor
   * @param {event} e
   * @returns
   * @memberof RichTextEditorSelection
   */
  _handleEditorClick(editor, e) {
    if (!editor || editor.disabled) return;
    let toolbar = this.getConnectedToolbar(editor),
      focused = editor.__focused;
    if (!toolbar || toolbar.editor !== editor) this.edit(editor);
    editor.focus();
    if (focused) {
      let els = !toolbar ? [] : Object.keys(toolbar.clickableElements || {}),
        el = e.target || e.srcElement || { tagName: "" },
        evt = { detail: el },
        tagname = (el.tagName || "").toLowerCase();
      if (tagname && els.includes(tagname)) {
        console.log(el);
        e.preventDefault();
        toolbar.clickableElements[tagname](evt);
      }
    }
  }
  /**
   * registers parts of the editor so that selection can manage them
   *
   * @param {event} e
   * @memberof RichTextEditorSelection
   */
  _handleRegistration(e) {
    if (e.detail) {
      if (e.detail.toolbar)
        this.registerToolbar(e.detail.toolbar, e.detail.remove);
      if (e.detail.editor)
        this.registerEditor(e.detail.editor, e.detail.remove);
    }
  }

  /**
   * when a shortcut key is pressed, fire keypressed event on button associated with it
   * @param {object} editor editor that detects a shortcut key
   * @param {event} e key event
   */

  _handleShortcutKeys(editor, e) {
    let toolbar = !editor ? undefined : this.getConnectedToolbar(editor);
    if (editor.editing) toolbar._handleShortcutKeys(e);
  }
  /**
   * Store tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "rich-text-editor-selection";
  }

  static get properties() {
    return {
      editor: {
        type: Object,
      },
      collapsed: {
        type: Boolean,
        reflect: true,
        attribute: "collapsed",
      },
      hidden: {
        type: Boolean,
        reflect: true,
        attribute: "hidden",
      },
      id: {
        type: String,
        reflect: true,
        attribute: "id",
      },
      observer: {
        type: Object,
      },
      range: {
        type: Object,
      },
      toolbar: {
        type: Object,
      },
      __toolbars: {
        type: Array,
      },
    };
  }

  static get styles() {
    return [
      css`
        :host {
  background-color: var(--rich-text-editor-selection-bg, rgb(146, 197, 255));
          margin: 0;
          padding: 0;
          display: inline-block;
        }
        :host([hidden]) {
          display: none;
        }
        :host([collapsed]):after {
          content: '|';
          color: var(--simple-toolbar-selection-bg);
          background-color: transparent;
        }
        :host + *,
        ::slotted(*) {
  background-color: var(--rich-text-editor-selection-bg, rgb(146, 197, 255));
        }
      `,
    ];
  }
}
window.customElements.define(
  RichTextEditorSelection.tag,
  RichTextEditorSelection
);
export { RichTextEditorSelection };

window.RichTextEditorSelection = {};
window.RichTextEditorSelection.instance = null;
/**
 * Checks to see if there is an instance available, and if not appends one
 */
window.RichTextEditorSelection.requestAvailability = function () {
  if (window.RichTextEditorSelection.instance == null) {
    window.RichTextEditorSelection.instance = document.createElement(
      RichTextEditorSelection.tag
    );
    document.body.appendChild(window.RichTextEditorSelection.instance);
  }
  return window.RichTextEditorSelection.instance;
};
