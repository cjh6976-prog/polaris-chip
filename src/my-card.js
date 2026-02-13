import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Lebron James";
    this.src = "https://th.bing.com/th/id/R.5af687f216bd088ac5d037b6e1d4d375?rik=qWahTogEkot0tA&pid=ImgRaw&r=0";
    this.alt = "Lebron";
    this.paragraph = "Lebron James is widely considered one of the greatest basketball players of all time. Lebron has scored over 50,000 points in his career and has 4 NBA Championships. Along with that, he has also won league 4 MVPs.";
    this.buttonText = "Details";
    this.buttonLink = "https://hax.psu.edu";
    this.fancy = false;
   

  }

  static get styles() {
    return css`
    
    .Image{
  max-width:200px;
  height: 150px;
  margin: 16px auto;
  border-radius: 12px;
  border: 5px solid var(--my-card-border-color, yellow);
}
.Paragraph{
  text-align: center;
  color: var(--my-card-text-color, yellow);
}
.Button{
  background-color: var(--my-card-button-color, yellow);
  margin: auto;
  border: 4px solid var(--my-card-button-border-color, black);
  display: none;
}
.Card {
  background-color: var(--my-card-background-color, purple);
  padding: 12px;
  margin: 64px auto;
  width: var(--my-card-width, 400px);
  text-align: center;
  border: 5px solid var(--my-card-border-color, yellow);
  border-radius: 12px;
  display: inline-block;
  min-height: 400px;
}
.Heading {
  color: var(--my-card-text-color, yellow);
  font-size: 32px;
  text-decoration: underline;
}
.summary {
  color: white;
}
details {
  height: 100px;
}
details[open] .Paragraph {
  max-height: 48px;
  overflow-y: auto;
  margin: auto 16px;
}


@media 
  (min-width: 500px) and
  (max-width: 800px) 
{
   .Button {
     display: inline-block;
  }
}

@media 
  (max-width: 500px)
{
  .Card {
    width: 300px;
}
  .Image{
    width: 100px;
    margin: 12px;
  }
  .Heading {
    font-size: 20px;
  }
  .Paragraph{
    font-size: 12px;
  }
  
  }
  

      :host {
        display: inline-block;
        vertical-align: top;

        --my-card-background-color: purple;
        --my-card-text-color: yellow;
        --my-card-border-color: yellow;
        --my-card-width: 400px;
      }
      :host([fancy]) .Card {
  background-color: pink;
  border-color: hotpink;
}
:host([fancy]) .Heading {
  color: hotpink;
}
:host([fancy]) .Button {
  background-color: hotpink;
  border-color: white;
}
:host([fancy]) .Image {
  border-color: hotpink;
}
:host([fancy]) .Paragraph {
  color: hotpink; 
    `;
  }
  openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
    return html`
<div class="Wrapper">
<div class="Card">
    <h1 class="Heading">${this.title}</h1>
    <img class="Image" src="${this.src}" alt="${this.alt}">
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary class="summary">Description</summary>
  <div>
<p class="Paragraph"><slot>${this.paragraph}</slot></p>
</div>
</details>
  <a href="${this.buttonLink}">
    
<button class="Button">${this.buttonText}</button>
    
  </a>
</div>
</div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      src: { type: String },
      alt: { type: String },
      paragraph: { type: String },
      fancy: { type: Boolean, reflect: true },
      buttonText: { type: String, attribute: 'button-text' },
      buttonLink: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
