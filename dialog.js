export default class Dialog {
  constructor(baseNode) {
    this.baseNode = baseNode;
    this.list = null;

    this.messages = ["bonjour !", "hello!", "ça va ?", "wé, et toi ?"];
  }

  renderList() {
    this.list = document.createElement("ol");

    this.baseNode.appendChild(this.list);

    this.renderMessages();
  }

  renderMessages() {
    this.messages.forEach(message => {
      this.renderMessage(message);
    });
  }

  renderMessage(message) {
    const messageNode = document.createElement("li");
    const messageText = document.createTextNode(message);

    messageNode.appendChild(messageText);
    this.list.appendChild(messageNode);
  }

  render() {
    this.renderList();
  }
}
