const settingsBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide')
})