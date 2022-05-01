/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
;(() => {
    const slider = document.querySelector('.progress-bar')
    const progress = document.querySelector('.progress')

    slider.onmousedown = (event) => {
        const pct = progressPct(event.pageX)
        progress.style.width = `${pct}%`

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
})()
