import { randomRange } from "../helpers";

class Postit {
  #title;
  #list;
  #listHTML;
  #x;
  #y;
  #rotation;
  #color;
  static allPostits = [];
  static countAll() {
    return Postit.allPostits.length;
  }
  constructor(title, list = []) {
    this.#title = title;
    this.#list = list;
    this.#listHTML = `<ul><li>${this.#list.join("</li><li>")}</li></ul>`;
    this.#x = randomRange(175, window.innerWidth - 195, true);
    this.#y = randomRange(74, window.innerHeight - 326, true);
    this.#rotation = randomRange(0, 11, true) * (Math.random() > 0.5 ? 1 : -1);
    this.#color = ["green", "pink", "yellow"][randomRange(0, 3, true)];
    this.htmlRef = this.#init();
    this.#style();
    Postit.allPostits.push(this);
  }
  #init() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div class= 'postit postit--${this.#color}'><h1>${this.#title}</h1>${
        this.#listHTML
      }</div>`
    );
    return document.querySelector(".postit:first-child");
  }
  #style() {
    const styles = {
      left: this.#x + "px",
      top: this.#y + "px",
      transform: `rotate(${this.#rotation}deg)`,
    };
    Object.assign(this.htmlRef.style, styles);
  }
}

export default Postit;
