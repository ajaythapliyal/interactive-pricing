/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
const interactive = (() => {
    const slider = document.querySelector('.progress-bar')
    const progress = document.querySelector('.progress')
    const toggleCircle = document.querySelector('.toggle-circle')

    slider.onmousedown = (event) => {
        progress.style.width = `${progressPct(event.pageX)}%`
        document.onmousemove = (moveEvent) => {
            progress.style.width = `${progressPct(moveEvent.pageX)}%`
        }
    }

    document.onmouseup = () => {
        document.onmousemove = null
    }

    function progressPct(touchLoc) {
        const pct = ((touchLoc - slider.offsetLeft) / slider.offsetWidth) * 100
        return pct > 100 ? 100 : pct < 0 ? 0 : pct
    }

    function toggle() {
        if (toggleCircle.classList.contains('toggle-monthly')) {
            toggleCircle.classList.remove('toggle-monthly')
            toggleCircle.classList.add('toggle-yearly')
        } else {
            toggleCircle.classList.remove('toggle-yearly')
            toggleCircle.classList.add('toggle-monthly')
        }
    }

    return {
        toggle,
    }
})()
