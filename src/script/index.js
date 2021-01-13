window.onload = e => {

    const imgContainer = document.querySelectorAll('.img-container')
    imgContainer.forEach(container => {
        const outer = [container.offsetWidth, container.offsetHeight]
        const img = container.querySelector('img')
        const inner = [img.offsetWidth, img.offsetHeight]
        let sub = [inner[0] - outer[0], inner[1] - outer[1]]
        container.scrollLeft = sub[0] / 2
        container.scrollTop = sub[1] / 2

        container.onclick = e => {
            document.body.classList.toggle('full-screen')
            container.classList.toggle('full-screen')
        }

    })




}