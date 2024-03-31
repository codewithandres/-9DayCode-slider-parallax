
const option = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18,
    }
}

const setBgPosition = (slide, index) => {

    const x = -(slide.target + flkty.x) / 3;

    slides[index].style.backgroundPosition = `${x}px`;

}

const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, option);

flkty.on('scroll', () => {
    flkty.slides.map(setBgPosition)
})