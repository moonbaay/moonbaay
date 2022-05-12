const bodyOnScroll =  document.querySelector('body')
const headerOnScrollEl = document.querySelector('header')
const aOnscroll = document.querySelectorAll("#nav-ul li a");
const aboutMeTitleOnscroll = document.getElementById('about-title')
const footerBg = document.querySelector('footer')
const contactContentLeft = document.getElementById('contact-content-left')
const subtitleText = document.querySelector('.subtitle')
const text = subtitleText.textContent
const subtitleTextArr = text.split('')
subtitleText.textContent = "";


for (let index = 0; index < subtitleTextArr.length; index++) {
    subtitleText.innerHTML += '<span>' + subtitleTextArr[index]+'</span>'
    
}
let char = 0;
let timer = setInterval(onTick,100)

function onTick(){
    const ch = subtitleText.querySelectorAll('span')[char]
    ch.classList.add('fade')
    char++
    if(char === subtitleTextArr.length){
        end()
        return
    }
}

function end(){
    clearInterval(timer)
    timer = null
}

const contact = document.getElementById("contact");

let contactY = 2200

window.onscroll = function(){
    headerOnScroll()
    highLightNavLink()
}

function headerOnScroll(){
    if(document.documentElement.scrollTop>50){
        headerOnScrollEl.classList.add('header-onscroll')

       
    }else{
        headerOnScrollEl.classList.remove('header-onscroll');

    }
  
}
function highLightNavLink(){
    const sections = document.querySelectorAll('.section')
    const links = document.querySelectorAll('.link')

    let cur = ''
    sections.forEach(section=>{
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if(pageYOffset >= (sectionTop - sectionHeight/3) ){
            cur = section.getAttribute('id')
        }

    })

    links.forEach(link =>{
        link.classList.remove('active')
        contactContentLeft.classList.remove("contact-content-left-block");
        if(link.classList.contains(cur)){
            link.classList.add('active')
            contactContentLeft.classList.add('contact-content-left-block')
        }
    })
}

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const gradientBtn = document.querySelector(".btn-gradient");
const heroPage = document.querySelector('.hero')
const getRandomNumber =()=>{
    return Math.floor(Math.random() * hex.length)
}

function getRandomColor(){
    let hexColor = '#'
    let hexColor1 = "#";
    let hexColor2 = "#";
        for (let i = 0; i < 6; i++) {
             hexColor += hex[getRandomNumber()];
             hexColor1 += hex[getRandomNumber()];
             hexColor2 += hex[getRandomNumber()];
             i++
        }

        gradientBtn.style.background = `linear-gradient(90deg, ${hexColor}, ${hexColor1},${hexColor1}`;
        gradientBtn.style.transition = `all 2s linear`
        footerBg.style.background = `linear-gradient(left, ${hexColor}, ${hexColor1},${hexColor1}`;
}
window.addEventListener('DOMContentLoaded',function(){
        setInterval(getRandomColor,3000)
        navGrid()
})

function navGrid(){
    const navFlex = document.querySelector('.nav-flex')
    const burgerIcon = document.querySelector('.burger-bar')
    const xIcon = document.querySelector('.x-mark')
    burgerIcon.addEventListener('click',function(){
        navFlex.classList.toggle('nav-grid');
        headerOnScrollEl.classList.remove("header-onscroll");
        burgerIcon.classList.remove('burger-bar')
        xIcon.classList.add('x-mark-show')
    })

    xIcon.addEventListener('click', function(){
        navFlex.classList.remove("nav-grid");
        headerOnScrollEl.classList.remove("header-onscroll");
        burgerIcon.classList.add("burger-bar");
        xIcon.classList.remove("x-mark-show");
    })
}

