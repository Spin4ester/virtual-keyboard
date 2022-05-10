/* eslint-disable linebreak-style */

import keys from './keys';
import './style.css';

const Keyboard = {
  elements: {
    container: null,
    keysContainer: null,
    textarea: null,
    guide: null,
    title: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
  },

  properties: {
    value: '',
    capsLock: false,
    // localStorage.getItem('language') === 'ru' ? 'ru' : 'en'
    lang: 'en',
  },

  init() {
    // Created Main elements
    this.elements.container = document.createElement('div');
    this.elements.title = document.createElement('h1');
    this.elements.title.innerHTML = 'RS School Virtual Keyboard';
    this.elements.textarea = document.createElement('textarea');
    this.elements.textarea.classList.add('textarea');

    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');
    this.elements.guide = document.createElement('p');
    this.elements.guide.textContent = 'Language Swtich: Not working...Yet';

    // Adding classes

    this.elements.container.classList.add('container');
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard-keys');

    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.key');

    // Add to DOM

    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.container);
    this.elements.container.appendChild(this.elements.title);
    this.elements.container.appendChild(this.elements.textarea);
    this.elements.container.appendChild(this.elements.main);
    this.elements.container.appendChild(this.elements.guide);

    document.querySelectorAll('.textarea').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    keys.forEach((key) => {
      const keyElement = document.createElement('button');
      const nextRow = ['Backspace', 'Esc', 'Enter', 'ShiftRight', 'ControlRight', 'Delete'].indexOf(key.code) !== -1;

      // Add attributes / classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('key', key.code);

      switch (key.code) {
        case 'Backspace':
          keyElement.classList.add('key-wide', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this.triggerEvent('oninput');
          });
          break;

        case 'CapsLock':

          keyElement.classList.add('key-wide', 'key-caps', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle('caps_active', this.properties.capsLock);
          });

          break;

        case 'Tab':
          // keyElement.classList.add('key-wide');
          keyElement.classList.add('func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', (event) => {
            event.preventDefault();
            const start = this.elements.textarea.selectionStart;
            const end = this.elements.textarea.selectionEnd;

            this.properties.value = `${this.properties.value.substring(0, start)}\t${this.properties.value.substring(end)}`;
            this.elements.textarea.selectionStart = this.selectionEnd;
            this.selectionEnd = start + 1;
            this.triggerEvent('oninput');
            this.elements.textarea.focus();
          });
          break;

        case 'Enter':
          keyElement.classList.add('key-wide', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent('oninput');
          });
          break;

        case 'Space':
          keyElement.classList.add('key-space', 'space', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.triggerEvent('oninput');
          });
          break;

        case 'Delete':
          keyElement.classList.add('func');
          keyElement.textContent = key.inner.en;

          //   keyElement.addEventListener('click', () => {
          //     this.properties.value += ' ';
          //     this.triggerEvent('oninput');
          //   });
          break;

        case 'ShiftLeft':
          keyElement.classList.add('key-wide', 'func');
          keyElement.textContent = key.inner.en;

          break;

        case 'ShiftRight':
          keyElement.classList.add('key-wide', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
          });
          break;

        case 'ControlRight':
          keyElement.classList.add('func');
          keyElement.textContent = key.inner.en;

          break;

        case 'ControlLeft':
          keyElement.classList.add('func');
          keyElement.textContent = key.inner.en;

          break;

        case 'AltLeft':
          keyElement.classList.add('func');
          keyElement.textContent = key.inner.en;

          break;

        case 'AltRight':
          keyElement.classList.add('func');
          keyElement.textContent = key.inner.en;

          break;

        default:

          keyElement.textContent = this.properties.lang === 'en' ? key.inner.en : key.inner.ru;
          this.elements.textarea.focus();

          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock ? key.onshift.en : key.inner.en;

            this.triggerEvent('oninput');
          });
          break;
      }
      fragment.appendChild(keyElement);

      if (nextRow) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },

  //   langChange() {
  //     document.onkeydown = function (event) {
  //       if (event.code === 'ControlLeft') {
  //         document.onkeyup = function (event) {
  //           if (event.code == 'AltLeft') {
  //             console.log('zdes');
  //           } else {
  //             document.onkeyup = null;
  //           }
  //         };
  //       }
  //     };
  //   },

  triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
      this.elements.textarea.focus();
    }
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    this.elements.keys.forEach((key) => {
      if (this.properties.lang === 'en' && !key.classList.contains('func')) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    });
  },

  handleKey() {
    document.onkeydown = function (event) {
      Keyboard.elements.textarea.focus();
      document.querySelector(`.${event.code}`).classList.add('active');
      if (document.querySelector(`.${event.code}`) === document.querySelector('.CapsLock')) {
        Keyboard.toggleCapsLock();
      }
    };
    document.onkeyup = function (event) {
      document.querySelector(`.${event.code}`).classList.remove('active');
      Keyboard.elements.textarea.focus();

      // if(document.querySelector(`.${event.code}`) === document.querySelector('.CapsLock')) {
      //     Keyboard.toggleCapsLock();
      // }
    };
  },

  open(initialValue, oninput) {
    this.properties.value = initialValue;
    this.eventHandlers.oninput = oninput;
    this.elements.textarea.focus();
  },

};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
  Keyboard.handleKey();
});
