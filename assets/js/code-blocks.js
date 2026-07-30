(function () {
  'use strict';

  function init() {
    document.querySelectorAll('.highlighter-rouge').forEach(function (block) {
      if (block.querySelector('.code-header')) return;

      var classes = block.className.split(' ');
      var langClass = classes.find(function (c) { return c.startsWith('language-'); });
      var language = langClass ? langClass.replace('language-', '') : '';

      var header = document.createElement('div');
      header.className = 'code-header no-print';

      var left = document.createElement('span');
      if (language) {
        left.className = 'code-header__left';
        var badge = document.createElement('span');
        badge.className = 'code-header__language';
        badge.textContent = language;
        left.appendChild(badge);
      }
      header.appendChild(left);

      var button = document.createElement('button');
      button.className = 'copy-code-button';
      button.type = 'button';
      button.setAttribute('aria-label', 'Copy code to clipboard');
      button.innerHTML =
        '<svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
        '<svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><polyline points="20 6 9 17 4 12"/></svg>';

      button.addEventListener('click', function () {
        var code = block.querySelector('code');
        if (!code) return;
        var text = code.textContent;

        var done = function () {
          var ci = button.querySelector('.copy-icon');
          var ck = button.querySelector('.check-icon');
          if (ci) ci.style.display = 'none';
          if (ck) ck.style.display = 'block';
          button.classList.add('copy-code-button--copied');
          setTimeout(function () {
            if (ci) ci.style.display = 'block';
            if (ck) ck.style.display = 'none';
            button.classList.remove('copy-code-button--copied');
          }, 2000);
        };

        var fallback = function (t) {
          try {
            var ta = document.createElement('textarea');
            ta.value = t;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            done();
          } catch (e) { /* clipboard unavailable */ }
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () { fallback(text); });
        } else {
          fallback(text);
        }
      });

      var right = document.createElement('span');
      right.className = 'code-header__right';
      right.appendChild(button);
      header.appendChild(right);

      var highlight = block.querySelector('.highlight');
      if (highlight) {
        block.insertBefore(header, highlight);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
