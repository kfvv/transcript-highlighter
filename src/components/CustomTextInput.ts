import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("custom-textinput")
export class CustomTextInput extends LitElement {
  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";

  static styles = css`
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    input {
      width: 100%;
      font-size: 1rem;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-sizing: border-box;
      background-color: #f5e9dc;
    }

    input:focus {
      border-color: blue;
      outline: none;
    }
  `;

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : null}
      <input
        type="text"
        placeholder=${this.placeholder}
        .value=${this.value}
        @input=${this._onInput}
      ></input>
    `;
  }

  private _onInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.value = target.value;

    // use `bubble: true` to bubble up the event so the parent can listen to it
    // use `composed: true` to allow the event to cross Shadow DOM boundaries,
    this.dispatchEvent(
      new CustomEvent("input-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }
}
