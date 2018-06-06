

document.addEventListener("DOMContentLoaded", (e) => {
  var pathname = window.location.pathname
  var template = pathname.substr(1)
  var id = "[id=content]"
  var node = findNode(id)
  //renderContent(temp)
  
  if (template === "")
    template = "home"

  var temp = '[data-template='+template+'-page]'  
  if (!findNode(temp))
    document.querySelector(id).innerHTML = document.querySelector('[data-template=error404-page]').innerHTML
  else
    document.querySelector(id).innerHTML = document.querySelector(temp).innerHTML
  
})

function renderContent (template) {
  const node = findNode('[id=content]')

  betterRender(template, node)
}

function betterRender (template, node, scope) {
  const el = render(template, scope, node)

  loadNodeSources(el)
}
