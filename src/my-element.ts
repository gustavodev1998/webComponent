import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'



@customElement('rocketseat-header')
export class MyElement extends LitElement {


  @property({ type: Boolean }) logo = false;

  @property({ type: String }) menu = '';

  @property({ type: Array }) data = new Array;

  @property({ type: String }) login = '';

  @property({ type: String }) button = '';

  static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto&display=swap');

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Roboto', 'Poppins', sans-serif;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 16px;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }

    ul li a {
      height: 80px;
      margin: 0 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #707184;
      position: relative;
    }


    ul li a:hover {
      color: #ececec;
    }

    ul li a:hover::after {
      content:  "";
      position: absolute;
      width: 100%;
      bottom: 0;
      border: 1px solid #9466ff;
    }

    .account {
      color: #fff;
      cursor: pointer;
      display: flex;
    align-items: center;
    justify-content: center;
    }

    .account a {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: bold;
    }

    .register {
      padding: 12px 19px;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
    }

    .login {
      padding: 12px 23px;
      background-color: #121214;
      border: 1px solid #9466ff;
      color: #fff;
      cursor: pointer;
      border-radius: 4px;
    }

    .login:hover {
      padding: 12px 23px;
      background-color: #9466ff;
      border: 1px solid #121214;
      color: #fff;
      border-radius: 4px;
    }


    nav { 
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mainbar {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header {
      margin-bottom: 85px;
      width: 100%;
      background-color: #121214;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
      border-bottom: 1px solid #242424;
    }

    .header nav {
      width: 80%;
    }

    #img-login {
      position: absolute;
      display: block;
    }

  `


  renderDefault() {
    return html``
  }

  renderLogo() {
    return html`

      <style>
        svg { 
          background: white;
          width: 50px;
          height: 50px;
          margin-right: 15px;
        }
      </style>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
    `;
  }


  renderButton() {
    return html`
      <a href="" class="login">
        ${this.button}
      </a>
    `
  }

  renderLogin() {
    return html`
      <a href="" class="register">
        <img src="" alt="Logo" id="img-login">
        ${this.login}
      </a>
    `;
  }

  render() {
    this.data = this.menu.split(',');
    return html`
     <header class="header">
        <nav>
          ${this.logo ? this.renderLogin() : this.renderDefault()}

          <ul>
            <li><a href="#">${this.data[0]}</a></li>
            <li><a href="#">${this.data[1]}</a></li>
            <li><a href="#">${this.data[2]}</a></li>
            <li><a href="#">${this.data[3]}</a></li>
          </ul>

          <div class="account">
            ${this.login ? this.renderLogo() : this.renderDefault()}
            ${this.button ? this.renderButton() : this.renderDefault()}
          </div>
        </nav>
     </header>
    `
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'rocketseat-header': MyElement
  }
}
