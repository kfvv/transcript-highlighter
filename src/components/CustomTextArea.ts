import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("custom-textarea")
export class CustomTextArea extends LitElement {
  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";

  static styles = css`
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    textarea {
      width: 100%;
      font-size: 1rem;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-sizing: border-box;
      font-family: inherit;
      min-height: 120px;
      resize: none;
      background-color: #f5e9dc;
    }

    textarea:focus {
      border-color: blue;
      outline: none;
    }
  `;

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : null}
      <textarea
        placeholder=${this.placeholder}
        .value=${this.value}
        @input=${this._onInput}
      ></textarea>
    `;
  }

  private _onInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent("input-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }
}
