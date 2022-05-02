const bodyOnScroll =  document.querySelector('body')
const headerOnScrollEl = document.querySelector('header')
const aOnscroll = document.querySelectorAll("#nav-ul li a");
const aboutMeTitleOnscroll = document.getElementById('about-title')

window.onscroll = function(){headerOnScroll()}

function headerOnScroll(){
    if(document.documentElement.scrollTop>50){
        headerOnScrollEl.classList.add('header-onscroll')
        aOnscroll.forEach((item)=>{
            item.className = "a-onscroll"
        })
       
    }else{
        headerOnScrollEl.classList.remove('header-onscroll');
        aOnscroll.forEach((item) => {
          item.className = "";
        });
    }
    if(document.documentElement.scrollTop> 300){
         aboutMeTitleOnscroll.className = "about-me-h1-onscroll";
    }else{
        aboutMeTitleOnscroll.className = "about-me-title";   
    }
}

