Reveal.initialize({
  controls: false,
  dependencies: [
    { src: '/assets/js/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ],
  height: 720,
  history: true,
  keyboard: {
    27: function() { console.log("ESC pressed"); return true },
    116: function() { console.log("F5 pressed"); return true }
  },
  slideNumber: true,
  transition: "convex",
  width: 1280
});
