/* eslint-disable linebreak-style */

import keys from './keys.js';

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
    this.elements.guide.textContent = 'Language Swtich: Shift + Alt';

    // Adding classes

    this.elements.container.classList.add('container');
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard-keys');

    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.key');
    console.log(this.elements.keys);

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
      const nextRow = ['Backspace', 'Esc', 'Enter', 'RightShift', 'RightCtrl', 'Delete'].indexOf(key.code) !== -1;

      // Add attributes / classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('key');

      switch (key.code) {
        case 'Backspace':
          keyElement.classList.add('key-wide', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0, this.properties.length - 1);
            this._triggerEvent('oninput');
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

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0, this.properties.length - 1);
            this._triggerEvent('oninput');
          });
          break;

        case 'Enter':
          keyElement.classList.add('key-wide', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('oninput');
          });
          break;

        case 'Space':
          keyElement.classList.add('key-space', 'space', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('oninput');
          });
          break;

        case 'Delete':
          keyElement.classList.add('func');
          keyElement.textContent = key.inner.en;

          //   keyElement.addEventListener('click', () => {
          //     this.properties.value += ' ';
          //     this._triggerEvent('oninput');
          //   });
          break;

        case 'LeftShift':
          keyElement.classList.add('key-wide', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('oninput');
          });
          break;

        case 'RightShift':
          keyElement.classList.add('key-wide', 'func');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('oninput');
          });
          break;

        case 'CtrlRight':
          keyElement.classList.add('func');
          keyElement.textContent = key.inner.en;

          break;

        case 'CtrlLeft':
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

          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock ? key.onshift.en : key.inner.en;
            this._triggerEvent('oninput');
          });
          break;
      }
      fragment.appendChild(keyElement);

      if (nextRow) {
        fragment.appendChild(document.createElement('br'));
      }

    //   console.log(key.inner.en);
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (this.properties.lang === 'en' && !key.classList.contains('func')) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },

  open(initialValue, oninput) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.elements.textarea.focus();
  },

};



window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
  Keyboard.open('Type here', (currentValue) => {
    console.log(currentValue);
  });
});


document.onkeydown = function(event) {
    console.log(event.code);
    console.log(event.keyCode);    
    Keyboard.elements.textarea.focus();
    // document .querySelector('')
}
