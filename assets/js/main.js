document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var body = document.body;
  var scrim = document.querySelector('.nav-scrim');

  function closeNav() { body.classList.remove('nav-open'); }

  if (toggle) {
    toggle.addEventListener('click', function () {
      body.classList.toggle('nav-open');
    });
  }
  if (scrim) scrim.addEventListener('click', closeNav);

  // Mobile submenu accordion (only matters on small screens; CSS hides duplicate desktop behaviour)
  document.querySelectorAll('.has-sub > .nav-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (window.innerWidth > 900) return; // desktop uses hover
      e.preventDefault();
      btn.parentElement.classList.toggle('open');
    });
  });

  // Close mobile nav on link click (leaf links)
  document.querySelectorAll('nav.main-nav a:not(.nav-btn)').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });
});
