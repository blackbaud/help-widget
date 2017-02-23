
function createWidget() {
  const body = document.getElementsByTagName('body')[0];
  const iframe = document.createElement('iframe');
  const link = document.createElement('link');

  iframe.src = 'https://sky.blackbaud-dev.com/help/renxt/getting-started';
  iframe.className = 'bb-help-iframe';

  link.rel = 'stylesheet';
  link.href = 'bb-help-widget.css';

  body.appendChild(iframe);
  document.head.appendChild(link);

  return Object.freeze({});
}

const Widget = createWidget();

export { Widget };
