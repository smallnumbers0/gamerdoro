

document.querySelector('.contributors-list').addEventListener('click', hideRightNav)
document.querySelector('.link-list').addEventListener('click', hideLeftNav)

function hideRightNav() {
    document.querySelector('.contributors-list').classList.toggle('change')
}

function hideLeftNav() {
    document.querySelector('.link-list').classList.toggle('change')
}

