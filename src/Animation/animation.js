window.onload = function () {
    const alphbets = document.getElementsByClassName('hero__alphabet');
    for (let i = 0; i <= alphbets.length; i++) {
        alphbets[i]?.addEventListener('animationend', function () {
            alphbets[i].classList.remove('alphabet-animated');
        });

        alphbets[i]?.addEventListener('mouseover', function () {
            alphbets[i].classList.add('alphabet-animated')
        })
    }


    // Works section Project Card Collapible Bar functinality code
    const collapibleBar = document.getElementsByClassName('project-card__header');
    let i;
    for (i = 0; i < collapibleBar.length; i++) {
        collapibleBar[i].addEventListener('click', function () {
            var content = this.nextElementSibling
            if (content.style.display === 'flex') {
                content.style.display = 'none';
                this.classList.remove('project-card__header--expanded');
            } else {
                content.style.display = 'flex';
                this.classList.add('project-card__header--expanded');
            }
        })
    }
}