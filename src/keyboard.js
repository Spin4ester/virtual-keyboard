/* eslint-disable linebreak-style */

import keys from './keys.js';

const Keyboard = {
  elements: {
    container: null,
    keysContainer: null,
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
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Adding classes
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard-keys');
    this.elements.keysContainer.appendChild(this._createKeys())

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();

    keys.forEach((key) => {
      const keyElement = document.createElement('button');
      const nextRow = ['backspace', 'esc', 'enter', 'rightShift', 'rightCtrl'].indexOf(key.code) !== -1;

      // Add attributes / classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('key');

      switch (key.code) {
        case 'backspace':
          keyElement.classList.add('key-wide');
          keyElement.textContent = key.inner.en;

          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0, this.properties.length - 1);
            this._triggerEvent('oninput');
          });
          break;


          case 'caps':

          keyElement.classList.add('key-wide', 'key-caps');

          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle('caps_active', this.properties.capsLock);
          });
          break;


          case 'tab':
            keyElement.classList.add('key-wide');
            keyElement.textContent = key.inner.en;
  
            keyElement.addEventListener('click', () => {
              this.properties.value = this.properties.value.substring(0, this.properties.length - 1);
              this._triggerEvent('oninput');
            });
            break;

          case 'enter':
          keyElement.classList.add('key-wide');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('oninput');
          });
          break;
          

          case 'space':
          keyElement.classList.add('key-space');

          keyElement.addEventListener('click', () => {
            this.properties.value += " ";
            this._triggerEvent('oninput');
          });
          break;


          default:

          keyElement.textContent = this.properties.lang === 'en' ? key.inner.en : key.inner.ru;

          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            this._triggerEvent('oninput');
          });
          break;

      }
      fragment.appendChild(keyElement);

      if(nextRow) {
          fragment.appendChild(document.createElement('br'));
      }

      console.log(key.inner.en);
    });

    return fragment;
  },

  //   _triggerEvent(handlerName) {
  //     console.log(`Event triggered! Event Name:${handlerName}`);
  //   },

  //   _toggleCapsLock() {
  //     console.log('CapsLock Toggled');
  //   },

};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
