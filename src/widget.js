
function createWidget() {
  const body = document.getElementsByTagName('body')[0];
  const iframe = document.createElement('iframe');

  iframe.src = 'https://sky.blackbaud-dev.com/help/renxt/getting-started';
  iframe.className = 'bb-help-iframe';

  body.appendChild(iframe);

  return Object.freeze({});
}

const Widget = createWidget();

export { Widget };