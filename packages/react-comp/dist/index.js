import { MyHelloElement } from "./components/webComponentTest";
var CUSTOM_TAG = 'my-hello';
if (!window.customElements.get(CUSTOM_TAG)) {
  window.customElements.define(CUSTOM_TAG, MyHelloElement);
}