document.querySelector('.hide-right').addEventListener('click', hideRightNav)
document.querySelector('.hide-left').addEventListener('click', hideLeftNav)

function hideRightNav() {
    document.querySelector('.contributors-list').classList.toggle('change')
}

function hideLeftNav() {
    document.querySelector('.link-list').classList.toggle('change')
}

