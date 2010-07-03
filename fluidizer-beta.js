function trim(str){return (str||"").replace(/^\s+|\s+$/g,'')}
var selectors = []
function download(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET","http://anti15.welfarehost.com/cssproxy.php?cssurl="+encodeURIComponent(url),true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      callback(xhr.responseText);
    }
  }
  xhr.send()
} //TODO: implement

function update_selectors(){
  var delta = 0, count = 0, end = false, blocked_selectors = "*,div,p,body,span".split(",");
  
  for(var selectorx = selectors.length, maxWidth = 0, maxEl; selectorx--;){
    if(blocked_selectors.indexOf(selectors[selectorx].text) != -1) continue;
    try{
      var els = document.querySelectorAll(selectors[selectorx].text);
      if(els.length == 1 && els[0].getElementsByTagName("*").length > 15 
       && (els[0] == document.body || els[0].parentNode == document.body || els[0].parentNode.parentNode == document.body)
      ){
        if(parseInt(selectors[selectorx].width,10) > maxWidth){
          maxWidth = parseInt(selectors[selectorx].width,10);
          maxEl = els[0];
        }
      }
    }catch(err){}
  }
  var lmh = 0, bsh = document.body.scrollHeight;
  if(maxEl) lmh = maxEl.scrollHeight; 

  while(!end && count++ < 20){

    
    if(document.body.scrollWidth > window.innerWidth && (!maxEl || maxEl.scrollHeight <= (lmh+100)) && (document.body.scrollHeight <= (bsh + 100))){
      end = true;
      delta -= 100;
      //console.log('sub')
    }else{
      delta += 100;
      //console.log('add')
    }
    if(maxEl){
      lmh = maxEl.scrollHeight;
    }
    bsh = document.body.scrollHeight;
    

    for(var selectorx = selectors.length; selectorx--;){
      var selector = selectors[selectorx].text;
      for(var elements = document.querySelectorAll(selector), elementx = elements.length; elementx--;){
        var element = elements[elementx];
        //var width = parseInt(document.defaultView.getComputedStyle(element,null).getPropertyValue("width"),10);
        var width = parseFloat(selectors[selectorx].width,10);
        var unit = selectors[selectorx].width.replace(/^[\-\d\.]+/,''); //stolen from emile.js
        if(unit != "px"){
          if(unit == "em"){
            width = width * 16;
          }else{
            console.warn("not used to handling non-px units")
          }
        }
        if(width > 480 && blocked_selectors.indexOf(selector) == -1){ //TODO: a better solution.
          if(!element._originalWidth) element._originalWidth = width;
          element.style.width = (element._originalWidth + delta) + "px";
          //console.log(delta, element, (element._originalWidth + delta) + "px")
        }
      }
    }
  }
  if(maxWidth > 500){
    maxEl.style.width = "100%";
    maxEl.style.padding = "10px"
  }
}

function load(text){
  var selector = "", body = "", mode = 0;
  function add_selector(){
    var width = body.split(";").map(function(e){
      if(trim(e.split(":")[0]) == "width"){
        return trim(e.split(":")[1]);
      }
      return "";
    }).join("")
    if(selector && trim(selector) && width && trim(width)){
        selectors.push({text: trim(selector), width: width});
    }
    selector = "";
    body = ""
  }
  for(var i = 0; i < text.length; i++){
    if(text[i] == "{"){
     mode = 1;
    }else if(text[i] == "}"){
      add_selector()
      mode = 0;
    }else if(mode == 0){
     selector += text[i];
    }else if(mode == 1){
     body += text[i];
    }
  }
  add_selector()
  update_selectors()
}


for(var sheets = document.styleSheets, sheetx = sheets.length; sheetx --;){
  var sheet = sheets[sheetx];
  if(sheet.href && !sheet.cssRules){
    console.log(sheet.href)
    download(sheet.href, load)
  }else{
    for(var rules = sheet.cssRules, rulex = rules.length; rulex--;){ 
      var selector = rules[rulex].selectorText;
      if(rules[rulex].style && rules[rulex].style.width){
        selectors.push({text: selector, width: rules[rulex].style.width});
      }
    }
  }
}

update_selectors();




