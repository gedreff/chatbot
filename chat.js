import Dialog from "./dialog";
import Footer from "./footer";

export default class Chat {
  constructor(baseNode) {
    this.baseNode = baseNode;

    this.dialog = null;
    this.footer = null;
  }

  renderHeader() {
    const header = document.createElement("header");
    const headerTitle = document.createTextNode("Chat Bot");

    header.appendChild(headerTitle);
    this.baseNode.appendChild(header);
  }

  renderFooter() {
    // this.footer = document.createElement("footer");
    // this.baseNode.appendChild(this.footer);
    this.footer = new Footer(this.baseNode);
    this.footer.render();
  }

  renderContent() {
    this.dialog = new Dialog(this.baseNode).render();
  }

  render() {
    this.renderHeader();
    this.renderContent();
    this.renderFooter();
  }
}
