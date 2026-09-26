// Small enhancements: today's date on the daily card, and the copy-email button.
(function () {
  var today = document.getElementById('today');
  if (today) {
    try {
      today.textContent = new Date().toLocaleDateString('en-GB', {
        weekday: 'short', day: 'numeric', month: 'short'
      });
    } catch (e) { /* keep "Every day" */ }
  }

  var btn = document.getElementById('copy');
  var msg = document.getElementById('copied');
  var email = document.getElementById('email');
  if (!btn || !email) return;

  function selectEmail() {
    var range = document.createRange();
    range.selectNodeContents(email);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    msg.textContent = 'Selected. Press Ctrl+C or ⌘C to copy.';
  }

  btn.addEventListener('click', function () {
    var text = email.textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        msg.textContent = 'Email copied.';
      }, selectEmail);
    } else {
      selectEmail();
    }
  });
})();