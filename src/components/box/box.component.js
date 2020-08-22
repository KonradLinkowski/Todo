export class Box extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    style.setAttribute('href', 'box.component.css');
    <link rel="stylesheet" type="text/css" href="index.css"></link>
    style.textContent = css;
    console.log(css)
    const div = document.createElement('div');
    div.textContent = 'test';
    div.classList.add('box');

    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}

customElements.define('todo-box', Box);
