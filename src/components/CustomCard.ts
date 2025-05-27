import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("custom-card")
export class CustomCard extends LitElement {
  @property({ type: String }) title = "";
  @property({ type: String }) text = "";

  static styles = css`
    .card__container {
      width: 100%;
      max-width: 600px;
      box-sizing: border-box;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      background: #fff;
      font-family: sans-serif;
    }

    .card__content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .card__title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .card__text {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  `;

  render() {
    return html`
      <div class="card__container">
        ${this.title
          ? html`<div class="card__title">${this.title}</div>`
          : null}
        ${this.text ? html`<div class="card__text">${this.text}</div>` : null}
        <div class="card__content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
