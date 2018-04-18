export default class Footer {
  constructor(baseNode) {
    this.baseNode = baseNode;

    this.footerNode = null;
    this.input = null;
    this.button = null;
  }

  renderInput() {
    this.input = document.createElement("input");

    this.footerNode.appendChild(this.input);
  }

  renderButton() {
    this.button = document.createElement("button");
    const buttonTitle = document.createTextNode("OK");
    this.button.appendChild(buttonTitle);

    this.footerNode.appendChild(this.button);
  }

  render() {
    this.footerNode = document.createElement("footer");

    this.renderInput();
    this.renderButton();

    this.baseNode.appendChild(this.footerNode);
  }
}
