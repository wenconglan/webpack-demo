!function() {
  //添加页面滚动到元素上滑且高亮对应的导航栏标签
  let specialTags = document.querySelectorAll('[data-skipLabel]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

  //高亮显示的元素
  findClosestAndRemoveOffset()
  window.addEventListener('scroll', function(xxx) {
    findClosestAndRemoveOffset()
  })



  /*函数内容*/
  function findClosestAndRemoveOffset() {
    let minIndex = 0
    let specialTags = document.querySelectorAll('[data-skipLabel]')
    for (let i = 1; i < specialTags.length; i++) {
      if (
        Math.abs(specialTags[i].offsetTop - window.scrollY) <
        Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
      ) {
        minIndex = i
      }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothers = li.parentNode.children
    for (let i = 0; i < brothers.length; i++) {
      brothers[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
}.call()

