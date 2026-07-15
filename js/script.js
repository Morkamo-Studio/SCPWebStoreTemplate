const authButton = document.querySelector('.authButton')

if (authButton) {
    authButton.addEventListener('click', function() {
        alert("hello")
    })
}

const webLogo = document.querySelector('.web-site-logo');

if (webLogo) {
    webLogo.addEventListener('click', function() {
        webLogo.classList.add('spinWebLogo')
    })

    webLogo.addEventListener('animationend', function() {
        webLogo.classList.remove('spinWebLogo')
    })
}