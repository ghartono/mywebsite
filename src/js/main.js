
//change innerhtml of content
function changeTemp(template) {
  if (template === "")
    template = "home"

  var temp = '[data-template='+template+'-page]'
  if (!findNode(temp))
    document.getElementById("content").innerHTML = document.querySelector('[data-template=error404-page]').innerHTML
  else
    document.getElementById("content").innerHTML = document.querySelector(temp).innerHTML

}

//on window load, get the url
window.onload = function(){
  var pathname = window.location.pathname
  var template = pathname.substr(1)


  changeTemp(template)
} 
