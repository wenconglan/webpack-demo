!function() {
  //给导航栏加滚动时的变动
  let view = document.querySelector('#topNavBar')
  let controller = {
    view: null,
    init: function(view) {
      this.view = view
      this.bindEvents() //等价于this.bingdEvents.call(this)
    },
    bindEvents: function(){
      let view = this.view
      window.addEventListener('scroll', function(xxx) {
        if (window.scrollY > 0) {
          this.active
        } else {
          this.deactive
        }
      }.bind(this))  //这里花括号后面用bind(this)绑定controller为this，或者使用箭头函数废除内部this
    },
    active: function(){
      view.classList.add('adhering')
    },
    deactive: function(){
      view.classList.remove('adhering')
    }
  }
  controller.init(view)
}.call()
