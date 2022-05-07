/* eslint-disable linebreak-style */

// import Keyboard from './keyboard';

const container = document.createElement('div');
container.classList.add('container');

const title = document.createElement('h1');
title.innerHTML = 'RS School Virtual Keyboard';

const textarea = document.createElement('textarea');

const guide = document.createElement('p');
guide.textContent = 'Language Swtich: Shift + Alt';


container.appendChild(title);
container.appendChild(textarea);
container.appendChild(keyboard);
keyboard.appendChild(keyboard_keys);
container.appendChild(guide);
