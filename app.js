import { documentReady } from 'https://unpkg.com/html-ready';

const escapeMap = new Map([
  ['&', '&amp;'],
  ['<', '&lt;'],
  ['>', '&gt;'],
  ['"', '&quot;'],
  ["'", '&#x27;'],
  ['`', '&#x60;']
]);

const unescapeMap = new Map([
  ['&amp;', '&'],
  ['&lt;', '<'],
  ['&gt;', '>'],
  ['&quot;', '"'],
  ['&#x27;', "'"],
  ['&#x60;', '`']
]);

const escapeRegex = new RegExp(`[${[...escapeMap.keys()].join('')}]`, 'g');
const unescapeRegex = new RegExp(`(${[...unescapeMap.keys()].join('|')})`, 'g');

const escapeHTML = string => string.replace(escapeRegex, match => escapeMap.get(match));
const unescapeHTML = string => string.replace(unescapeRegex, match => unescapeMap.get(match));

documentReady.then(() => {
  const escapeInput  = document.querySelector('#escape-input');
  const escapeOutput = document.querySelector('#escape-output');
  const unescapeInput  = document.querySelector('#unescape-input');
  const unescapeOutput = document.querySelector('#unescape-output');

  escapeInput.addEventListener('input', e => escapeOutput.value = escapeHTML(escapeInput.value));
  unescapeInput.addEventListener('input', e => unescapeOutput.value = unescapeHTML(unescapeInput.value));
});
