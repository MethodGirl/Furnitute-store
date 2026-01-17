let formWrapper = document.querySelector('.filter__form-wrapper');

export function toggleFilter() {
    const isVisible = formWrapper.classList.contains(
        'filter__form-wrapper--visibility'
    );

    if (!isVisible) {
        formWrapper.classList.add('filter__form-wrapper--visibility',
            'animate__animated',
            'animate__fadeIn')
    } else {
        formWrapper.classList.remove('animate__fadeIn')
        formWrapper.classList.add('animate__fadeOut');

        formWrapper.addEventListener('animationend', () => {
            formWrapper.classList.remove('filter__form-wrapper--visibility',
                'animate__animated',
                'animate__fadeOut'
            )
        }, {
            once: true
        });
    }
}

