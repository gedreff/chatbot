import Chat from "./chat";

export default class App {
  constructor(appNode) {
    this.appNode = appNode;

    this.chat = null;
  }

  render() {
    this.chat = new Chat(this.appNode);
    this.chat.render();
  }
}
