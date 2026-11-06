(function () {
  var svg = document.getElementById('wave');
  if (!svg) return;
  var ns = 'http://www.w3.org/2000/svg';
  var n = 115, w = 920 / n;
  // Syllable-like envelope: bursts of energy separated by short pauses.
  for (var i = 0; i < n; i++) {
    var t = i / n;
    var env = Math.abs(Math.sin(t * Math.PI * 7.3)) * (0.55 + 0.45 * Math.sin(t * Math.PI));
    var h = Math.max(3, (env * 0.85 + 0.15 * ((i * 37) % 11) / 11) * 66);
    var r = document.createElementNS(ns, 'rect');
    r.setAttribute('x', (i * w + w * 0.2).toFixed(2));
    r.setAttribute('width', (w * 0.6).toFixed(2));
    r.setAttribute('y', ((72 - h) / 2).toFixed(2));
    r.setAttribute('height', h.toFixed(2));
    r.setAttribute('rx', '1.5');
    r.style.fill = i % 9 === 4 ? 'var(--warm)' : 'var(--accent)';
    r.style.opacity = (0.35 + env * 0.65).toFixed(2);
    svg.appendChild(r);
    r.style.setProperty('--delay', (i * 14) + 'ms');
  }
})();
