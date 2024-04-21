const el = document.getElementById('unixtime');

setInterval(() => {
  el.setAttribute('data-content', Date.now());
}, 1000);
