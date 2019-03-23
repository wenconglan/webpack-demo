//设置页面读取动画可见
setTimeout(function(){
  welcomePage.classList.remove('active')
 },1000)

 //监听导航栏鼠标进入动作，并添加进入时显示的元素
 let liTags = document.getElementsByClassName('secondMenu')
      for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function(x) {
          x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function(x) {
          x.currentTarget.classList.remove('active')
        }
      }

 let aTags = document.querySelectorAll('nav.menu>ul>li>a')
 for (let i=0; i<aTags.length; i++){
   aTags[i].onclick = function(x){
   x.preventDefault() //阻止原来锚点跳转，阻止所有默认动作
   let a = x.currentTarget
   let href = a.getAttribute('href')
   let element = document.querySelector(href)
   let top = element.offsetTop
   window.scrollTo(0,top-80)
   }
 }