var sheet, rule, width, elements, element;
for(var sheets = document.styleSheets, sheetx = sheets.length; sheetx --;){
  sheet = sheets[sheetx]
  if(sheet.cssRules){
    for(var rules = sheet.cssRules, rulex = rules.length; rulex--;){
      rule = rules[rulex];
      if(rule && rule.style && (width = rule.style.width)){
        
        var elarr = []
        if((elements = document.querySelectorAll(rule.selectorText)).length > 0){
          for(var elementx = elements.length; elementx --; ){
            if(element = elements[elementx]){
              elarr.push(element)
            }
          }
        }
        
        var lastwidth = 0, widthmin = 0, widthmax = 0, widthsum = 0;
        for(var elen = elarr.length; elen --;){
          var width = document.defaultView.getComputedStyle(elarr[elen],null).getPropertyValue("width"); //stolen from quirksmode
          
          var widthnum = parseInt(width, 10)
          var unit = width.replace(/^[\-\d\.]+/,''); //stolen from emile.js
          if(unit != "px"){
            console.warn("not used to handling non-px units")
          }
          if(lastwidth && lastwidth != widthnum){
            console.warn("different value for same selector:",lastwidth,widthnum)
          }
          if(!lastwidth){
            widthmin = widthnum
          }
          widthmin = Math.min(widthmin, widthnum);
          widthmax = Math.max(widthmax, widthnum);
          widthsum += widthnum;
          lastwidth = widthnum;
        }
        if(elarr.length){
          var widthavg = widthsum/elarr.length;
          if(widthavg == widthmin == widthmax){
          }else{
            console.warn("averages different from min and max")
          }
          console.log("average width",widthavg)
          console.log("widthmin",widthmin)
          console.log("widthmax",widthmax);
          var delta = 200//window.innerWidth - widthmax;
          for(var elen = elarr.length; elen --;){
            var width = document.defaultView.getComputedStyle(elarr[elen],null).getPropertyValue("width"); //stolen from quirksmode
            if(parseInt(width, 10) > 480){ //TODO: a purtierful solution
              elarr[elen].style.width = (parseInt(width, 10) + delta) + "px"
            }
          }
        }
        
      }
    }
  }
}

var delta = 200, selectors = [];

while(delta > 0){
  if(document.body.scrollWidth > window.innerWidth){
    delta = -200;
  }

  var sheet, rule, width, elements, element;
  for(var sheets = document.styleSheets, sheetx = sheets.length; sheetx --;){
    sheet = sheets[sheetx]
    if(sheet.cssRules){
      for(var rules = sheet.cssRules, rulex = rules.length; rulex--;){
        rule = rules[rulex];
        if(rule && rule.style && (width = rule.style.width)){
          
          var elarr = []
          if((elements = document.querySelectorAll(rule.selectorText)).length > 0){
            for(var elementx = elements.length; elementx --; ){
              if(element = elements[elementx]){
                elarr.push(element)
              }
            }
          }
          if(elarr.length){
            for(var elen = elarr.length; elen --;){
              var width = document.defaultView.getComputedStyle(elarr[elen],null).getPropertyValue("width"); //stolen from quirksmode
              if(parseInt(width, 10) > 480){ //TODO: a purtierful solution
                elarr[elen].style.width = (parseInt(width, 10) + delta) + "px"
                selectors.push(rule.selectorText)
              }
            }
          }
        }
      }
    }
  }
}














var delta = 200, selectors = [];

while(delta > 0){
  if(document.body.scrollWidth > window.innerWidth){
    delta = -200;
  }
          
  var elarr = []
  var sheet, rule, width, elements, element;
  for(var sheets = document.styleSheets, sheetx = sheets.length; sheetx --;){
    sheet = sheets[sheetx]
    if(sheet.cssRules){
      for(var rules = sheet.cssRules, rulex = rules.length; rulex--;){
        rule = rules[rulex];
        if(rule && rule.style && (width = rule.style.width)){

          if((elements = document.querySelectorAll(rule.selectorText)).length > 0){
            for(var elementx = elements.length; elementx --; ){
              if(element = elements[elementx]){
                elarr.push(element)
              }
            }
          }

        }
      }
    }
  }
  if(elarr.length){
    for(var elen = elarr.length; elen --;){
      
      var width = document.defaultView.getComputedStyle(elarr[elen],null).getPropertyValue("width"); //stolen from quirksmode
      if(parseInt(width, 10) > 480){ //TODO: a purtierful solution
        elarr[elen].style.width = (parseInt(width, 10) + delta) + "px"
        selectors.push(rule.selectorText)
      }
    }
  }
}













var delta = 200;

while(delta > 0){
  if(document.body.scrollWidth > window.innerWidth){
    delta = -200;
  }

  var sheet, rule, width, elements, element;
  for(var sheets = document.styleSheets, sheetx = sheets.length; sheetx --;){
    sheet = sheets[sheetx]
    if(sheet.cssRules){
      for(var rules = sheet.cssRules, rulex = rules.length; rulex--;){
        rule = rules[rulex];
        if(rule && rule.style && (width = rule.style.width)){
          
          var elarr = []
          if((elements = document.querySelectorAll(rule.selectorText)).length > 0){
            for(var elementx = elements.length; elementx --; ){
              if(element = elements[elementx]){
                elarr.push(element)
              }
            }
          }
          if(elarr.length){
            for(var elen = elarr.length; elen --;){
              var width = document.defaultView.getComputedStyle(elarr[elen],null).getPropertyValue("width"); //stolen from quirksmode
              if(parseInt(width, 10) > 480){ //TODO: a purtierful solution
                elarr[elen].style.width = (parseInt(width, 10) + delta) + "px"
              }
            }
          }
        }
      }
    }
  }
}



var delta = 200;



var sheet, rule, width, elements, element;
for(var sheets = document.styleSheets, sheetx = sheets.length; sheetx --;){
  sheet = sheets[sheetx]
  if(sheet.cssRules){
    for(var selectorx = sheet.cssRules.length; selectorx--;){
      var selector = sheet.cssRules[selectorx].selectorText;
      for(var elements = document.querySelectorAll(selector), elementx = elements.length; elementx--;){
        var element = elements[elementx];
        var width = parseInt(document.defaultView.getComputedStyle(element,null).getPropertyValue("width"),10);
        if(width > 480){ //TODO: a better solution.
          if(!element._originalWidth) element._originalWidth = width;
          element.style.width = (element._originalWidth + delta) + "px";
          console.log((element._originalWidth + delta) + "px")
        }
      }
    }
  }
}






function trim(str){return (str||"").replace(/^\s+|\s+$/g,'')}
var selectors = []
function download(){} //TODO: implement

function update_selectors(){
  var delta = 0, end = false, blocked_selectors = "*,div,p,body,span".split(",");
  while(!end){
    if(document.body.scrollWidth > window.innerWidth){
      end = true;
      delta -= 200;
      console.log('sub')
    }else{
      delta += 200;
      console.log('add')
    }
    var  usel = [];
    for(var selectorx = selectors.length; selectorx--;){
      var selector = selectors[selectorx];
      for(var elements = document.querySelectorAll(selector), elementx = elements.length; elementx--;){
        var element = elements[elementx];
        var width = parseInt(document.defaultView.getComputedStyle(element,null).getPropertyValue("width"),10);
        //var width = parseInt(selectors[selectorx].width,10);
        if(width > 480 && blocked_selectors.indexOf(selector) == -1){ //TODO: a better solution.
          usel.push(selector)
          if(!element._originalWidth) element._originalWidth = width;
          element.style.width = (element._originalWidth + delta) + "px";
          console.log((element._originalWidth + delta) + "px")
        }
      }
    }
    console.log(usel)
  }
}


for(var sheets = document.styleSheets, sheetx = sheets.length; sheetx --;){
  var sheet = sheets[sheetx];
  if(sheet.href && !sheet.cssRules){
    console.log(sheet.href)
    download(sheet.href, function(text){
      var selector = "", mode = 0;
      for(var i = 0; i < text.length; i++){
        if(text[i] == "{") mode = 1;
        else if(text[i] == "}"){
          if(selector && trim(selector)) selectors.push(trim(selector));
          mode = 0;
        }else if(mode == 0) selector += text[i];
      }
      if(selector && trim(selector) && selectors.indexOf(trim(selector)) == -1) 
        selectors.push(trim(selector));
      update_selectors();
    })
  }else{
    for(var rules = sheet.cssRules, rulex = rules.length; rulex--;){ 
      var selector = rules[rulex].selectorText;
      if(rules[rulex].style && rules[rulex].style.width && selectors.indexOf(selector) == -1){
        selectors.push(selector);
      }
    }
  }
}

update_selectors();

























function trim(str){return (str||"").replace(/^\s+|\s+$/g,'')}
var selectors = []
function download(){} //TODO: implement

function update_selectors(){
  var delta = 0, count = 0, end = false, blocked_selectors = "*,div,p,body,span".split(",");
  while(!end && count++ < 20){
    if(document.body.scrollWidth > window.innerWidth){
      end = true;
      delta -= 100;
      //console.log('sub')
    }else{
      delta += 100;
      //console.log('add')
    }
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
        if(width > 380 && blocked_selectors.indexOf(selector) == -1){ //TODO: a better solution.
          if(!element._originalWidth) element._originalWidth = width;
          element.style.width = (element._originalWidth + delta) + "px";
          //console.log((element._originalWidth + delta) + "px")
        }
      }
    }
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
























var sheet, rule, width, elements, element, delta = 200;
for(var sheets = document.styleSheets, sheetx = sheets.length; sheetx --;){
  sheet = sheets[sheetx];
  console.log("Sheet Raw",sheetx)
  if(sheet.cssRules){
    console.log("Sheet",sheetx);
    for(var rules = sheet.cssRules, rulex = rules.length; rulex--;){
      rule = rules[rulex];
      console.log("rule",rulex,rule)
      if(rule && rule.style){
        
        var elarr = []
        if((elements = document.querySelectorAll(rule.selectorText)).length > 0){
          //console.log(elements, rule.selectorText)
          for(var elementx = elements.length; elementx --; ){
            if(element = elements[elementx]){
              elarr.push(element)
            }
          }
        }
        if(elarr.length){
          for(var elen = elarr.length; elen --;){
            var width = document.defaultView.getComputedStyle(elarr[elen],null).getPropertyValue("width"); //stolen from quirksmode
            if(parseInt(width, 10) > 480){ //TODO: a purtierful solution
              elarr[elen].style.width = (parseInt(width, 10) + delta) + "px"
              console.log(width)
            }else{
              console.log(width)
            }
          }
        }
        
      }
    }
  }
}






function getStyle(element, property){
  var val = document.defaultView.getComputedStyle(element,null).getPropertyValue(property);
  return [
          parseInt(val, 10), 
          val.replace(/^[\-\d\.]+/,'') //stolen from emile.js
         ]
}

var delta = 200;
//while(delta > 0){
  if(document.body.scrollWidth > window.innerWidth){
    delta = -200;
  }
  for(var elements = document.getElementsByTagName("*"), elementx = elements.length; elementx--;){
    var element = elements[elementx];
    var width = getStyle(element,"width")
    if(width[1] == "px"){
      if(width[0] > 480 && element.offsetHeight > 54)
      {
        element.style.width = (width[0] + delta) + "px";
        element.style.margin = 0;
        console.log(width[0], (width[0] + delta) + "px")
      }
    }else{
      console.log("weird unit", width[1])
    }
  }
//}



















function trim(str){return (str||"").replace(/^\s+|\s+$/g,'')}
var selectors = [];

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
}


load("      div {hello: poop;asdf: 324px;width: 42}\n eating marshmallows, .tasty:hover {nom: nomnom; margin: 42px solid potato}")





