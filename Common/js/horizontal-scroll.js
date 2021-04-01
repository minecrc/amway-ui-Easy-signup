function horizonScroll(classNameParent, className) {
    let viewport = document.querySelector(classNameParent)
    let content = viewport.querySelector(className)

    let scr = new ScrollBooster({
        viewport: viewport,
        content: content,
        direction: "horizontal",
        scrollMode: "transform"
    })
}