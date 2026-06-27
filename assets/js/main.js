// Minimal JS for header mobile toggle, smooth scroll and simple enhancements.
// No frameworks, vanilla JS.

document.addEventListener('DOMContentLoaded', function(){
  // Smooth link scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        var el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Simple mobile menu toggle (create button dynamically)
  var nav = document.querySelector('.main-nav');
  if(nav){
    var btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.type = 'button';
    btn.innerText = 'Menu';
    btn.style.padding = '8px 10px';
    btn.style.borderRadius = '8px';
    btn.style.border = '1px solid rgba(16,24,40,0.06)';
    btn.style.background = '#fff';
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', function(){
      if(nav.style.display === 'flex' || nav.style.display === '') nav.style.display = 'none';
      else nav.style.display = 'flex';
    });
    var headerInner = document.querySelector('.header-inner');
    headerInner.insertBefore(btn, headerInner.children[1]);
    // Hide toggle on wide screens
    function checkWidth(){
      if(window.innerWidth > 980){
        nav.style.display = 'flex';
        btn.style.display = 'none';
      } else {
        nav.style.display = 'none';
        btn.style.display = 'inline-block';
      }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
  }

  // Enhance code blocks copy (if any)
  document.querySelectorAll('pre code').forEach(function(codeBlock){
    var btn = document.createElement('button');
    btn.className = 'copy-code-btn';
    btn.innerText = 'Copy';
    btn.style.position = 'absolute';
    btn.style.right = '8px';
    btn.style.top = '8px';
    btn.style.padding = '6px 8px';
    btn.style.borderRadius = '6px';
    btn.style.border = 'none';
    btn.style.background = '#111827';
    btn.style.color = '#fff';
    btn.style.cursor = 'pointer';
    var pre = codeBlock.parentNode;
    pre.style.position = 'relative';
    pre.appendChild(btn);
    btn.addEventListener('click', function(){
      navigator.clipboard.writeText(codeBlock.innerText).then(function(){
        btn.innerText = 'Copied';
        setTimeout(function(){ btn.innerText = 'Copy'; },1500);
      }).catch(function(){
        btn.innerText = 'Error';
        setTimeout(function(){ btn.innerText = 'Copy'; },1500);
      });
    });
  });

});
