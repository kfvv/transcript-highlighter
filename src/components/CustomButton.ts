import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("custom-button")
export class CustomButton extends LitElement {
  @property({ type: String }) label = "Click";
  @property({ type: Boolean }) disabled = false;

  static styles = css`
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 6px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  `;

  render() {
    return html`<button
      .disabled=${this.disabled}
      @click=${this._onClick}
    >
      ${this.label}
    </button>`;
  }

  private _onClick(e: Event) {
    if (this.disabled) return;

    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("button-click", {
        detail: { label: this.label },
        bubbles: true,
        composed: true,
      })
    );
  }
}
