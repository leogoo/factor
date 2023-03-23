import ReactDOM from 'react-dom';
import MyHello from './MyHello';

export class MyHelloElement extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || '';

    ReactDOM.render(
      <MyHello name={name} />,
      this,
    );
  }
}
