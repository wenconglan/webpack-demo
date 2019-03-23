//设置页面读取动画可见
welcomePage.classList.remove('active')

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
//设置添加缓动函数
function animate(time) {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}
requestAnimationFrame(animate)

for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(x) {
    x.preventDefault() //阻止原来锚点跳转，阻止所有默认动作
    let a = x.currentTarget
    let href = a.getAttribute('href')
    let element = document.querySelector(href)
    let top = element.offsetTop
    let currentTop = window.scrollY
    let targetTop = top - 80
    let s = Math.abs(targetTop - currentTop)
    let t = (s / 100) * 150
    if (t > 500) {
      t = 500
    }
    var coords = { y: currentTop } // 设置动作起点
    var tween = new TWEEN.Tween(coords)
      .to({ y: targetTop }, t) // 设置动作终点，动作时间
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function() {
        window.scrollTo(0, coords.y)
      })
      .start()
  }
}
//添加页面滑动效果
  let specialTags = document.querySelectorAll('[data-skipLabel]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

//高亮显示的元素
findClosest()
window.onscroll = function(xxx) {
  if (window.scrollY > 0) {
    topNavBar.classList.add('adhering')
  } else {
    topNavBar.classList.remove('adhering')
  }
  findClosest()
}
function findClosest(){
  let minIndex = 0
  let specialTags = document.querySelectorAll('[data-skipLabel]')
  for (let i = 1; i < specialTags.length; i++) {
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
      minIndex=i
    }
  }
  specialTags[minIndex].classList.remove('offset')
  let id = specialTags[minIndex].id
  let a = document.querySelector('a[href="#' + id + '"]')
  let li = a.parentNode
  let brothers = li.parentNode.children
  for (let i = 0; i < brothers.length; i++){
    brothers[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
}

