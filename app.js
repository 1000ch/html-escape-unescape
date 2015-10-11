const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};

const unescapeMap = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#x27;': "'",
  '&#x60;': '`'
};

const escapeRegex = new RegExp(`[${Object.keys(escapeMap).join('')}]`, 'g');
const unescapeRegex = new RegExp(`(${Object.keys(unescapeMap).join('|')})`, 'g');

const escapeHTML = string => string.replace(escapeRegex, match => escapeMap[match]);
const unescapeHTML = string => string.replace(unescapeRegex, match => unescapeMap[match]);

window.onload = e => {

  'use strict';

  const escapeInput  = document.querySelector('#escape-input');
  const escapeOutput = document.querySelector('#escape-output');
  const unescapeInput  = document.querySelector('#unescape-input');
  const unescapeOutput = document.querySelector('#unescape-output');

  escapeInput.addEventListener('input', e => escapeOutput.value = escapeHTML(escapeInput.value));
  unescapeInput.addEventListener('input', e => unescapeOutput.value = unescapeHTML(unescapeInput.value));
};
