document.querySelector('.hide-right').addEventListener('click', hideRightNav)
document.querySelector('.hide-left').addEventListener('click', hideLeftNav)

function hideRightNav() {
    document.querySelector('.contributors-list').classList.toggle('change')
    document.querySelector('.hide-right').style.opacity = '1'
}

function hideLeftNav() {
    document.querySelector('.link-list').classList.toggle('change')
    document.querySelector('.hide-right').style.opacity = '1'
}

