!function() {
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
}.call()
