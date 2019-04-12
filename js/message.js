!function() {
  let view = document.querySelector('section.message')
  let model = {
    init: function() {
      var APP_ID = 'yKr1O4An9YbQniEByyOnLObw-gzGzoHsz'
      var APP_KEY = 'KTbk7qUDiWBfeOaWqXspA9sS'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    //fetch 获取数据
    fetch: function() {
      var query = new AV.Query('Message')
      return query.find() //find()返回一个Promise对象
    }, 
    //save创建存储数据
    save: function(name,content) {
      let Message = AV.Object.extend('Message')
      let message = new Message()
      return message.save({  //save()返回一个Promise对象
          content: content,
          name: name
        })
    } 
  }
  let controller = {
    view: null,
    model: null,
    messageList: null,
    form: null,
    init: function(view,model) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = document.querySelector('#postMessageForm')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function() {
      this.model.fetch()
        .then(messages => {
          let array = messages.map(items => items.attributes)
          array.forEach(item => {
            let li = document.createElement('li')
            li.innerText = `${item.name}:${item.content}`
            this.messageList.appendChild(li)
          })
        })
    },
    bindEvents: function() {
      this.form.addEventListener('submit', e => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function() {
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      this.model.save(name,content)
        .then(function(object) {
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name}:${object.attributes.content}`
          let messageList = document.querySelector('#messageList')
          messageList.appendChild(li)
          myForm.querySelector('input[name=content]').value = ''
          myForm.querySelector('input[name=name]').value = ''
          /*window.location.reload() //刷新页面*/
        })
    }
  }
  controller.init(view,model)
}.call()
