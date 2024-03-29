function slider({container, slide, nextArrow, prevArrow, totalCounter, curentCounter, wrapper, field}) {

    // Slider

    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(curentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width


    let slideIndex = 1
    let offset = 0


    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`
    } else {
        total.textContent = slides.length
        current.textContent = slideIndex
    }




    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '0.5s all'

    slidesWrapper.style.overflow = 'hidden'


    slides.forEach(slide => {
        slide.style.width = width
    })

    slider.style.position = 'relative'

    const indicators = document.createElement('ol'),
        dots = []

    indicators.classList.add('carousel-indicators')
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `


    slider.append(indicators)


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i + 1)
        dot.classList.add('dot')



        if (i == 0) {
            dot.style.opacity = '1'
        }
        indicators.append(dot)
        dots.push(dot)
    }

    function replacer(num) {
        return +num.replace(/\D/g, '')
    }




    next.addEventListener('click', () => {

        if (offset == replacer(width) * (slides.length - 1)) {
            offset = 0
        } else {
            offset += replacer(width)
        }

        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        currentSlide()
        opacity()



    })


    prev.addEventListener('click', () => {

        if (offset == 0) {
            offset = replacer(width) * (slides.length - 1)
        } else {
            offset -= replacer(width)
        }

        slidesField.style.transform = `translateX(-${offset}px)`


        if (slideIndex == 1) {
            slideIndex = slides.length
        } else {
            slideIndex--
        }


        currentSlide()
        opacity()

    })


    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')
            slideIndex = slideTo
            offset = replacer(width) * (slideTo - 1)
            slidesField.style.transform = `translateX(-${offset}px)`
            currentSlide()
            opacity()
        })
    })


    function opacity() {
        dots.forEach(dot => {
            dot.style.opacity = '.5'
        })
        dots[slideIndex - 1].style.opacity = 1
    }

    function currentSlide() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
    }

    // ******************************** свой код

    function autoShow() {
        if (offset == replacer(width) * (slides.length - 1)) {
            offset = 0
        } else {
            offset += replacer(width)
        }

        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
        dots.forEach(dot => {
            dot.style.opacity = '.5'
        })
        dots[slideIndex - 1].style.opacity = 1

    }

    // setInterval(() => {
    //     autoShow()
    // }, 5000);

    // showSlides(slideIndex)

    // SLIDER #2

    // if(slides.length < 10) {
    //     total.textContent = `0${slides.length}`
    // }else {
    //     total.textContent = slides.length
    // }

    // function showSlides(n) {
    //     if(n > slides.length) {
    //         slideIndex = 1
    //         console.log('asd');
    //     }


    //     if(n < 1) {
    //         slideIndex = slides.length
    //         console.log('qwe');
    //     }

    //     // slides.forEach(item => item.style.display = 'none')

    //     // slides[slideIndex - 1].style.display = 'block';

    //     slides.forEach(item => item.classList.add('hide'))

    //     slides[slideIndex - 1].classList.add('show')
    //     slides[slideIndex - 1].classList.remove('hide')
    //     slides[slideIndex - 1].classList.remove('show')


    //     if(slides.length < 10) {
    //         current.textContent = `0${slideIndex}`
    //     }else {
    //         current.textContent = slideIndex
    //     }

    // }

    // function plusSlides(n) { 
    //     showSlides(slideIndex += n)
    //  }


    //  prev.addEventListener('click', () => {
    //     plusSlides(-1)
    //  })

    //  next.addEventListener('click', () => {
    //     plusSlides(1)
    //  })
}

export default slider;