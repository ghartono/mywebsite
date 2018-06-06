

/*//change innerhtml of content
function changeTemp(template) {
  if (template === "")
    template = "home"

  var temp = '[data-template='+template+'-page]'
  const node = findNode('[id=content')
  if (!findNode(temp))
    render('error404', node)
  else
    document.getElementById("content").innerHTML = document.querySelector(temp).innerHTML

}

//on window load, get the url
window.onload = function(){


  onBrowse(
}

var node = findNode('[id=content]')
loadNodeSource(node)
var pathname = window.location.pathname
var template = pathname.substr(1)
function onBrowse(state, node, err, text,xhr)
{
  if (state != finish) return;
  var obj = {
    error: err,
    results: err ? undefined : JSON.parse(text)
  }
  render(template,obj,node);
  }
}

*/

document.addEventListener("DOMContentLoaded", (e) => {
  var pathname = window.location.pathname
  var template = pathname.substr(1)
  var node = findNode('[id=content]')

  if (template === "")
    template = "home"

  var temp = '[data-template='+template+'-page]'  
  if (!findNode(temp))
    document.getElementById("content").innerHTML = document.querySelector('[data-template=error404-page]').innerHTML
  else
    document.getElementById("content").innerHTML = document.querySelector(temp).innerHTML
})
