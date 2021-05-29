const button = document.querySelector('.company'),
      project = document.querySelector('.project');

function scrollTo(element){
    window.scroll({
        left:0,
        top:element.offsetTop,
        behavior:"smooth"
    })
}
button.addEventListener('click',() => {
    scrollTo(project)
})


$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      });
  });


const tabs = document.querySelectorAll('.catalog__tab'),
tabsContent = document.querySelectorAll('.content')


function hideTabContent(){
    tabsContent.forEach(item => {
        item.classList.remove('content')
        item.classList.add('not-act')
    });
}
function showTabContent(i = 0){
    tabsContent[i].classList.add('content');
    tabsContent[i].classList.remove('not-act');
    tabs[i].classList.add('active');
}
hideTabContent();
showTabContent();
tabs.forEach((item) => {
    item.addEventListener('click' , (event) => {
        const target = event.target;
        if(target && target.classList.contains('active')){
            console.log('yes')
        }else{
            tabs.forEach((item,i) => {
                if(target == item){           
                    hideTabContent();
                    showTabContent(i);
                }else{
                    item.classList.remove('active')  
                }
            })
        }
    })
})