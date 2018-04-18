import App from "./app";

(() => {
  const appNode = document.getElementById("content");
  new App(appNode).render();
})();
