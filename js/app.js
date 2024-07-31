document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = Array.from (slider.querySelectorAll(".slide"));
    const button1 = document.querySelector(".slider__button1");
    const button2 = document.querySelector(".slider__button2");
    const button3 = document.querySelector(".slider__button3");
    const styleButton = document.querySelector(".style_mode")
    const themeLink = document.querySelector("#theme-link")
    const cryptorangeList = document.querySelector("cryptorange__ul")
    console.log(themeLink)
    let slideIndex = 1;

    button1.addEventListener("click", button1Event)
    button2.addEventListener("click", button2Event)
    button3.addEventListener("click", button3Event)
    styleButton.addEventListener("click", changeStyle)

    function button1Event() {
        slideIndex = 1;
        updateSlider()
    }
    function button2Event() {
        slideIndex = 2;
        updateSlider()
    }
    function button3Event() {
        slideIndex = 3;
        updateSlider()
    }

    function updateSlider() {
        slides.forEach((slide) => {
            if (window.innerWidth > 1400) {
                if (slideIndex == 1) {
                    slide.style.transform = "translateY(0)"
                    button1.style.backgroundColor = "#41A4DF"
                    button2.style.backgroundColor = ""
                    button3.style.backgroundColor = ""
                } else if (slideIndex == 2) {
                    slide.style.transform = "translateY(-508px)"
                    button2.style.backgroundColor = "#41A4DF"
                    button1.style.backgroundColor = ""
                    button3.style.backgroundColor = ""
                } else if (slideIndex == 3) {
                    slide.style.transform = "translateY(-1016px)"
                    button3.style.backgroundColor = "#41A4DF"
                    button1.style.backgroundColor = ""
                    button2.style.backgroundColor = ""
                }
            } else {
                if (slideIndex == 1) {
                    slide.style.transform = "translateX(0)"
                    button1.style.backgroundColor = "#41A4DF"
                    button2.style.backgroundColor = ""
                    button3.style.backgroundColor = ""
                } else if (slideIndex == 2) {
                    slide.style.transform = "translateX(-355px)"
                    button2.style.backgroundColor = "#41A4DF"
                    button1.style.backgroundColor = ""
                    button3.style.backgroundColor = ""
                } else if (slideIndex == 3) {
                    slide.style.transform = "translateX(-710px)"
                    button3.style.backgroundColor = "#41A4DF"
                    button1.style.backgroundColor = ""
                    button2.style.backgroundColor = ""
                }
            }
            
        });
    }

    function changeStyle() {
        if (themeLink.getAttribute('href') === '') {
            themeLink.setAttribute('href', './css/styleMode.css');
            document.getElementById("features__oneclick__video").setAttribute("src", "./video/One click to start_dark.mp4");
            document.getElementById("features__exchange__video").setAttribute("src", "./video/exchange-dark.mp4");
            document.getElementById("features__send__video").setAttribute("src", "./video/Send coins to users_dark.mp4");

        } else {
            themeLink.setAttribute('href', '');
            document.getElementById("features__oneclick__video").setAttribute("src", "./video/One click to start.mp4");
            document.getElementById("features__exchange__video").setAttribute("src", "./video/exchange-light.mp4");
            document.getElementById("features__send__video").setAttribute("src", "./video/Send coins to users.mp4");
        }
    }

    function cryptorangeAnimaton() {
        setTimeout(() => {
            document.querySelector("#cryptorange__ETH").style.transform = "scale(1.1)"
            if (themeLink.getAttribute('href') === '') {
                document.querySelector("#cryptorange__ETH_p").style.color = "black"
            } else {
                document.querySelector("#cryptorange__ETH_p").style.color = "white"
            }
            
            setTimeout(() => {
                document.querySelector("#cryptorange__ETH").style.transform = "scale(1)"
                if (themeLink.getAttribute('href') === '') {
                    document.querySelector("#cryptorange__ETH_p").style.color = "rgba(0, 0, 0, 0.6)"
                } else {
                    document.querySelector("#cryptorange__ETH_p").style.color = "rgba(255, 255, 255, 0.6)"
                }
                
            }, 300)
        }, 0)

        setTimeout(() => {
            document.querySelector("#cryptorange__USDT").style.transform = "scale(1.1)"
            if (themeLink.getAttribute('href') === '') {
                document.querySelector("#cryptorange__USDT_p").style.color = "black"
            } else {
                document.querySelector("#cryptorange__USDT_p").style.color = "white"
            }
            setTimeout(() => {
                document.querySelector("#cryptorange__USDT").style.transform = "scale(1)"
                if (themeLink.getAttribute('href') === '') {
                    document.querySelector("#cryptorange__USDT_p").style.color = "rgba(0, 0, 0, 0.6)"
                } else {
                    document.querySelector("#cryptorange__USDT_p").style.color = "rgba(255, 255, 255, 0.6)"
                }
            }, 300)
        }, 300)

        setTimeout(() => {
            document.querySelector("#cryptorange__TON").style.transform = "scale(1.1)"
            if (themeLink.getAttribute('href') === '') {
                document.querySelector("#cryptorange__TON_p").style.color = "black"
            } else {
                document.querySelector("#cryptorange__TON_p").style.color = "white"
            }
            setTimeout(() => {
                document.querySelector("#cryptorange__TON").style.transform = "scale(1)"
                document.querySelector("#cryptorange__TON_p").style.color = ""
            }, 300)
        }, 600)

        setTimeout(() => {
            document.querySelector("#cryptorange__BTC").style.transform = "scale(1.1)"
            if (themeLink.getAttribute('href') === '') {
                document.querySelector("#cryptorange__BTC_p").style.color = "black"
            } else {
                document.querySelector("#cryptorange__BTC_p").style.color = "white"
            }
            setTimeout(() => {
                document.querySelector("#cryptorange__BTC").style.transform = "scale(1)"
                document.querySelector("#cryptorange__BTC_p").style.color = ""
            }, 300)
        }, 900)

        setTimeout(() => {
            document.querySelector("#cryptorange__TRX").style.transform = "scale(1.1)"
            if (themeLink.getAttribute('href') === '') {
                document.querySelector("#cryptorange__TRX_p").style.color = "black"
            } else {
                document.querySelector("#cryptorange__TRX_p").style.color = "white"
            }
            setTimeout(() => {
                document.querySelector("#cryptorange__TRX").style.transform = "scale(1)"
                document.querySelector("#cryptorange__TRX_p").style.color = ""
            }, 300)
        }, 1200)

        setTimeout(() => {
            document.querySelector("#cryptorange__LTC").style.transform = "scale(1.1)"
            if (themeLink.getAttribute('href') === '') {
                document.querySelector("#cryptorange__LTC_p").style.color = "black"
            } else {
                document.querySelector("#cryptorange__LTC_p").style.color = "white"
            }
            setTimeout(() => {
                document.querySelector("#cryptorange__LTC").style.transform = "scale(1)"
                document.querySelector("#cryptorange__LTC_p").style.color = ""
            }, 300)
        }, 1500)

        setTimeout(() => {
            document.querySelector("#cryptorange__USDC").style.transform = "scale(1.1)"
            if (themeLink.getAttribute('href') === '') {
                document.querySelector("#cryptorange__USDC_p").style.color = "black"
            } else {
                document.querySelector("#cryptorange__USDC_p").style.color = "white"
            }
            setTimeout(() => {
                document.querySelector("#cryptorange__USDC").style.transform = "scale(1)"
                document.querySelector("#cryptorange__USDC_p").style.color = ""
            }, 300)
        }, 1800)

        setTimeout(() => {
            document.querySelector("#cryptorange__BNB").style.transform = "scale(1.1)"
            if (themeLink.getAttribute('href') === '') {
                document.querySelector("#cryptorange__BNB_p").style.color = "black"
            } else {
                document.querySelector("#cryptorange__BNB_p").style.color = "white"
            }
            setTimeout(() => {
                document.querySelector("#cryptorange__BNB").style.transform = "scale(1)"
                document.querySelector("#cryptorange__BNB_p").style.color = ""
            }, 300)
        }, 2100)
    }
    updateSlider()
    window.addEventListener('resize', updateSlider);
    cryptorangeAnimaton()
    setInterval(() => {
        cryptorangeAnimaton()
    }, 3000);
})