import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "./CustomTextArea";
import "./CustomButton";
import "./CustomCard";
import "./CustomTextInput";
import "./TranscriptCard";
import "@attendi/speech-service";

@customElement("transcript-highlighter")
export class TranscriptHighlighter extends LitElement {
  @state() private rawTitle: string = "";
  @state() private rawText: string = "";
  @state() private isPreview: boolean = false;
  @state() private submitted: Array<{ title: string; html: string }> = [];
  static styles = css`

    .input-microphone__wrapper attendi-microphone,
    .textarea-microphone__wrapper attendi-microphone {
      align-self: center;
    }

    .input-microphone__wrapper {
      display: flex;
      gap: 0.5rem;
    }

    custom-textinput, custom-textarea {
      flex-grow: 1;
    }

    .input-microphone__wrapper attendi-microphone {
      margin-top: 2rem;
    }

    .textarea-microphone__wrapper {
      display: flex;
      gap: 0.5rem;
    }

    .textarea-microphone__wrapper attendi-microphone {
      margin-top: -3rem;
    }

    .transcript-card-wrapper {
      margin-top: 2rem;
    }
  `;

  private _highlightText(text: string): string {
    // categories
    const meds = ["omeprazole", "simvastatin", "paracetamol", "simbrinza"];
    const symptoms = ["nausea", "headache", "fatigue"];
    const actions = ["follow-up", "prescribed", "refer"];

    // Split text into words and non-word separators (spaces, punctuation)
    const words = text.split(/(\W+)/);

    // Map over all the words and wrap recognized words with appropriate markup.
    return words
      .map((word) => {
        // convert to lowercase and remove non-letter characters
        const normalized = word.toLowerCase().replace(/[^a-z-]/g, "");

        if (meds.includes(normalized)) {
          return `<a class="med" href="https://www.apotheek.nl/medicijnen/${normalized}" target="_blank" rel="noopener noreferrer">${word}</a>`;
        }
        if (symptoms.includes(normalized)) {
          return `<span class="symptom">${word}</span>`;
        }
        if (actions.includes(normalized)) {
          return `<span class="action">${word}</span>`;
        }

        return word;
      })
      .join("");
  }

  render() {
    return html`
      <custom-card
        title="Medical report"
        text="Type or speak a medical transcript, and it will highlight medications, symptoms, and actions."
      >
        ${this.isPreview
          ? html`
              <div class="highlight">
                ${unsafeHTML(this._highlightText(this.rawText))}
              </div>
              <button @click=${() => (this.isPreview = false)}>Edit</button>
            `
          : html`
              <div class="input-microphone__wrapper">
                <custom-textinput
                  .value=${this.rawTitle}
                  label="Titel"
                  @input-change=${(e: CustomEvent) => {
                    this.rawTitle = e.detail?.value || "";
                  }}
                ></custom-textinput>
                <attendi-microphone
                  default-plugins="[]"
                  @click=${() => {
                    this.rawTitle = "Fatigue and nausea";
                  }}
                ></attendi-microphone>
              </div>

              <div class="textarea-microphone__wrapper">
                <custom-textarea
                  .value=${this.rawText}
                  label="Verslag"
                  @input-change=${(e: CustomEvent) => {
                    this.rawText = e.detail?.value || "";
                  }}
                ></custom-textarea>
                <attendi-microphone
                  default-plugins="[]"
                  @click=${() => {
                    this.rawText =
                      "The patient reports nausea and fatigue, was prescribed simbrinza and paracetamol, and will follow-up after the specialist refer.";
                  }}
                ></attendi-microphone>
              </div>

              <custom-button
                .disabled=${!this.rawText.trim()}
                label="Confirm"
                @button-click=${() => {
                  const htmlText = this._highlightText(this.rawText);
                  this.submitted = [
                    ...this.submitted,
                    { title: this.rawTitle, html: htmlText },
                  ];
                  this.rawText = "";
                  this.rawTitle = "";
                  this.isPreview = false;
                }}
              ></custom-button>
            `}
      </custom-card>

      ${this.submitted.map(
        (entry) => html`
          <div class="transcript-card-wrapper">
            <transcript-card
              .title=${entry.title}
              .text=${entry.html}
            ></transcript-card>
          </div>
        `
      )}
    `;
  }
}
