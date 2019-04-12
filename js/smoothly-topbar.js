!function() {
  //点击导航栏自动滚动到对应元素
  let view = document.querySelector('nav.menu')
  let controller = {
    view: null,
    aTags: null,
    init: function(view) {
      this.view = view
      this.initAnimation()
      this.bindEvents()
    },
    initAnimation: function() {
      function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      requestAnimationFrame(animate)
    },
    scrollToElement: function(element) {
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
    },
    bindEvents: function() {
      this.aTags = this.view.querySelectorAll('nav.menu>ul>li>a')
      //设置添加缓动函数
      for (let i = 0; i < this.aTags.length; i++) {
        this.aTags[i].onclick = (x) => {
          x.preventDefault() //阻止原来锚点跳转，阻止所有默认动作
          let a = x.currentTarget
          let href = a.getAttribute('href')
          let element = document.querySelector(href)
          this.scrollToElement(element)
        }
      }
    }
  }
  controller.init(view)
}.call()
