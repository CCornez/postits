import "../css/style.scss";
import Postit from "./classes/Postit";

new Array(200)
  .fill("")
  .forEach(() => new Postit("Makro", ["iPhone", "kabeljauw", "beamer"]));

document.body.onclick = () => {
  Postit.allPostits.forEach((postit) => postit.htmlRef.remove());
  console.log(`Removed ${Postit.countAll()} items.`);
  Postit.allPostits.length = 0;
};
