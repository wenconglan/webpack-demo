!function() {
  var APP_ID = 'yKr1O4An9YbQniEByyOnLObw-gzGzoHsz'
  var APP_KEY = 'KTbk7qUDiWBfeOaWqXspA9sS'

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  })

  var query = new AV.Query('Message')
  query.find().then(function(messages) {
    let array = messages.map(items => items.attributes)
    array.forEach(item => {
      let li = document.createElement('li')
      li.innerText = `${item.name}:${item.content}`
      let messageList = document.querySelector('#messageList')
      messageList.appendChild(li)
    })
  })

  let myForm = document.querySelector('#postMessageForm')
  myForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    let Message = AV.Object.extend('Message')
    let message = new Message()
    message
      .save({
        content: content,
        name: name
      })
      .then(function(object) {
        console.log('success1')
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
        myForm.querySelector('input[name=name]').value = ''
        /*window.location.reload() //刷新页面*/
      })
  })
}.call()
