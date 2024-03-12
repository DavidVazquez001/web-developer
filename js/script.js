// Redirect to contact.html
function redirectToContact() {
  // window.location.href = './contacto.html'

  if (document.referrer.endsWith('/index.html')) {
    window.location.href = './pages/contacto.html'
  } else {
    window.location.href = './contacto.html'
  }
}
