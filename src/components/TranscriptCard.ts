import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "../components/CustomCard";

@customElement("transcript-card")
export class TranscriptCard extends LitElement {
  @property({ type: String }) title = "";
  @property({ type: String }) text = "";

  static styles = css`
    .highlight .med {
      color: blue;
      font-weight: bold;
    }
    .highlight .symptom {
      color: red;
      font-weight: bold;
    }
    .highlight .action {
      color: green;
      font-weight: bold;
    }
  `;

  render() {
    return html`
     <custom-card .title=${this.title} text="">
        <div class="highlight">
          ${unsafeHTML(this.text)}
        </div>
      </custom-card>
    `;
  }
}
