let langBtn = document.querySelector('#headerLang');
let lang1 = document.querySelector('.lang1');
let lang2 = document.querySelector('.lang2');
let lang3 = document.querySelector('.lang3');



langBtn.addEventListener('click', function () {
    if (langBtn.classList.contains('active')) {
        lang2.style.display = 'none';
        lang3.style.display = 'none';
        langBtn.classList.remove('active');
    } else {
        lang2.style.display = 'block';
        lang3.style.display = 'block';
        langBtn.classList.add('active');
    }
})

function langSwitch() {
    switch (lang1.innerHTML) {
        case 'LT':
            lang2.innerHTML = 'EN';
            lang3.innerHTML = 'DK';
            break;
        case 'EN':
            lang2.innerHTML = 'LT';
            lang3.innerHTML = 'DK';
            break;
        case 'DK':
            lang2.innerHTML = 'LT';
            lang3.innerHTML = 'EN';
    }
}

lang2.addEventListener('click', function () {
    lang1.innerHTML = lang2.innerHTML;
    lang2.style.display = 'none';
    lang3.style.display = 'none';
    langSwitch();
})

lang3.addEventListener('click', function () {
    lang1.innerHTML = lang3.innerHTML;
    lang2.style.display = 'none';
    lang3.style.display = 'none';
    langSwitch();
})

let arrow1 = document.querySelector('.hoverArrow1');
let arrow2 = document.querySelector('.hoverArrow2');
let div1 = document.querySelector('.aboutArrow1');
let div2 = document.querySelector('.aboutArrow2');
let cert1 = document.querySelector('.cert1');
let cert2 = document.querySelector('.cert2');
let cert3 = document.querySelector('.cert3');

div1.addEventListener('mouseover', function () {
    arrow1.src = "src/arrowHover.webp";
})

div1.addEventListener('mouseout', function () {
    arrow1.src = "src/arrow.webp";
})

div2.addEventListener('mouseover', function () {
    arrow2.src = "src/arrowHover.webp";
})

div2.addEventListener('mouseout', function () {
    arrow2.src = "src/arrow.webp";
})

cert1.addEventListener('mouseover', function () {
    cert1.src = "src/cert1hover.webp";
})

cert1.addEventListener('mouseout', function () {
    cert1.src = "src/cert1.webp";
})

cert2.addEventListener('mouseover', function () {
    cert2.src = "src/cert2hover.webp";
})

cert2.addEventListener('mouseout', function () {
    cert2.src = "src/cert2.webp";
})

cert3.addEventListener('mouseover', function () {
    cert3.src = "src/cert3hover.webp";
})

cert3.addEventListener('mouseout', function () {
    cert3.src = "src/cert3.webp";
})
