(()=>{"use strict";const e=[{code:"Backquote",inner:{en:"`",ru:"ё"},onshift:{en:"~",ru:"Ё"},type:"symb"},{code:"Digit1",inner:{en:"1",ru:"1"},onshift:{en:"!",ru:"!"}},{code:"Digit2",inner:{en:"2",ru:"2"},onshift:{en:"@",ru:'"'}},{code:"Digit3",inner:{en:"3",ru:"3"},onshift:{en:"#",ru:"№"}},{code:"Digit4",inner:{en:"4",ru:"4"},onshift:{en:"$",ru:";"}},{code:"Digit5",inner:{en:"5",ru:"5"},onshift:{en:"%",ru:"%"}},{code:"Digit6",inner:{en:"6",ru:"6"},onshift:{en:"^",ru:":"}},{code:"Digit7",inner:{en:"7",ru:"7"},onshift:{en:"&",ru:"?"}},{code:"Digit8",inner:{en:"8",ru:"8"},onshift:{en:"*",ru:"*"}},{code:"Digit9",inner:{en:"9",ru:"9"},onshift:{en:"(",ru:"("}},{code:"Digit0",inner:{en:"0",ru:"0"},onshift:{en:")",ru:")"}},{code:"Minus",inner:{en:"-",ru:"-"},onshift:{en:"_",ru:"_"}},{code:"Equal",inner:{en:"=",ru:"="},onshift:{en:"+",ru:"+"}},{code:"Backspace",inner:{en:"Backspace",ru:"Backspace"},onshift:{en:"Backspace",ru:"Backspace"},type:"func"},{code:"Tab",inner:{en:"Tab",ru:"Tab"},onshift:{en:"Tab",ru:"Tab"},type:"func"},{code:"KeyQ",inner:{en:"q",ru:"й"},onshift:{en:"Q",ru:"Й"}},{code:"KeyW",inner:{en:"w",ru:"ц"},onshift:{en:"W",ru:"Ц"}},{code:"KeyE",inner:{en:"e",ru:"у"},onshift:{en:"E",ru:"У"}},{code:"KeyR",inner:{en:"r",ru:"к"},onshift:{en:"R",ru:"К"}},{code:"KeyT",inner:{en:"t",ru:"е"},onshift:{en:"T",ru:"Е"}},{code:"KeyY",inner:{en:"y",ru:"н"},onshift:{en:"Y",ru:"Н"}},{code:"KeyU",inner:{en:"u",ru:"г"},onshift:{en:"U",ru:"Г"}},{code:"KeyI",inner:{en:"i",ru:"ш"},onshift:{en:"I",ru:"Ш"}},{code:"KeyO",inner:{en:"o",ru:"щ"},onshift:{en:"O",ru:"Щ"}},{code:"KeyP",inner:{en:"p",ru:"з"},onshift:{en:"P",ru:"З"}},{code:"BracketLeft",inner:{en:"[",ru:"х"},onshift:{en:"{",ru:"Х"}},{code:"BracketRight",inner:{en:"]",ru:"ъ"},onshift:{en:"}",ru:"Ъ"}},{code:"Backslash",inner:{en:"\\",ru:"\\"},onshift:{en:"|",ru:"/"}},{code:"Delete",inner:{en:"Del",ru:"Del"},onshift:{en:"Del",ru:"Del"},type:"func"},{code:"CapsLock",inner:{en:"CapsLock",ru:"CapsLock"},onshift:{en:"CapsLock",ru:"CapsLock"},type:"func"},{code:"KeyA",inner:{en:"a",ru:"ф"},onshift:{en:"A",ru:"Ф"}},{code:"KeyS",inner:{en:"s",ru:"ы"},onshift:{en:"S",ru:"Ы"}},{code:"KeyD",inner:{en:"d",ru:"в"},onshift:{en:"D",ru:"В"}},{code:"KeyF",inner:{en:"f",ru:"а"},onshift:{en:"F",ru:"А"}},{code:"KeyG",inner:{en:"g",ru:"п"},onshift:{en:"G",ru:"П"}},{code:"KeyH",inner:{en:"h",ru:"р"},onshift:{en:"H",ru:"Р"}},{code:"KeyJ",inner:{en:"j",ru:"о"},onshift:{en:"J",ru:"О"}},{code:"KeyK",inner:{en:"k",ru:"л"},onshift:{en:"K",ru:"Л"}},{code:"KeyL",inner:{en:"l",ru:"д"},onshift:{en:"L",ru:"Д"}},{code:"Semicolon",inner:{en:";",ru:"ж"},onshift:{en:":",ru:"Ж"}},{code:"Quote",inner:{en:"'",ru:"э"},onshift:{en:'"',ru:"Э"}},{code:"Enter",inner:{en:"Enter",ru:"Enter"},onshift:{en:"Enter",ru:"Enter"}},{code:"ShiftLeft",inner:{en:"Shift",ru:"Shift"},onshift:{en:"onshift",ru:"onshift"},type:"func"},{code:"KeyZ",inner:{en:"z",ru:"я"},onshift:{en:"Z",ru:"Я"}},{code:"KeyX",inner:{en:"x",ru:"ч"},onshift:{en:"X",ru:"Ч"}},{code:"KeyC",inner:{en:"c",ru:"с"},onshift:{en:"C",ru:"С"}},{code:"KeyV",inner:{en:"v",ru:"м"},onshift:{en:"V",ru:"М"}},{code:"KeyB",inner:{en:"b",ru:"и"},onshift:{en:"B",ru:"И"}},{code:"KeyN",inner:{en:"n",ru:"т"},onshift:{en:"N",ru:"Т"}},{code:"KeyM",inner:{en:"m",ru:"ь"},onshift:{en:"M",ru:"Ь"}},{code:"Comma",inner:{en:",",ru:"б"},onshift:{en:"<",ru:"Б"}},{code:"Period",inner:{en:".",ru:"ю"},onshift:{en:">",ru:"Ю"}},{code:"Slash",inner:{en:"/",ru:"."},onshift:{en:"?",ru:","}},{code:"ArrowUp",inner:{en:"▲",ru:"▲"},onshift:{en:"▲",ru:"▲"}},{code:"ShiftRight",inner:{en:"Shift",ru:"Shift"},onshift:{en:"onshift",ru:"onshift"},type:"func"},{code:"ControlLeft",inner:{en:"Ctrl",ru:"Ctrl"},onshift:{en:"Ctrl",ru:"Ctrl"},type:"func"},{code:"AltLeft",inner:{en:"Alt",ru:"Alt"},onshift:{en:"Alt",ru:"Alt"},type:"func"},{code:"Space",inner:{en:"Space",ru:" "},onshift:{en:" ",ru:" "},type:"func"},{code:"AltRight",inner:{en:"Alt",ru:"Alt"},onshift:{en:"Alt",ru:"Alt"},type:"func"},{code:"ArrowLeft",inner:{en:"◄",ru:"◄"},onshift:{en:"◄",ru:"◄"}},{code:"ArrowDown",inner:{en:"▼",ru:"▼"},onshift:{en:"▼",ru:"▼"}},{code:"ArrowRight",inner:{en:"►",ru:"►"},onshift:{en:"►",ru:"►"}},{code:"ControlRight",inner:{en:"Ctrl",ru:"Ctrl"},onshift:{en:"Ctrl",ru:"Ctrl"},type:"func"}],n={elements:{container:null,keysContainer:null,textarea:null,guide:null,title:null,keys:[]},eventHandlers:{oninput:null},properties:{value:"",capsLock:!1,lang:"en"},init(){this.elements.container=document.createElement("div"),this.elements.title=document.createElement("h1"),this.elements.title.innerHTML="RS School Virtual Keyboard",this.elements.textarea=document.createElement("textarea"),this.elements.textarea.classList.add("textarea"),this.elements.main=document.createElement("div"),this.elements.keysContainer=document.createElement("div"),this.elements.guide=document.createElement("p"),this.elements.guide.textContent="Language Swtich: Shift + Alt",this.elements.container.classList.add("container"),this.elements.main.classList.add("keyboard"),this.elements.keysContainer.classList.add("keyboard-keys"),this.elements.keysContainer.appendChild(this.createKeys()),this.elements.keys=this.elements.keysContainer.querySelectorAll(".key"),console.log(this.elements.keys),this.elements.main.appendChild(this.elements.keysContainer),document.body.appendChild(this.elements.container),this.elements.container.appendChild(this.elements.title),this.elements.container.appendChild(this.elements.textarea),this.elements.container.appendChild(this.elements.main),this.elements.container.appendChild(this.elements.guide),document.querySelectorAll(".textarea").forEach((e=>{e.addEventListener("focus",(()=>{this.open(e.value,(n=>{e.value=n}))}))}))},createKeys(){const n=document.createDocumentFragment();return e.forEach((e=>{const t=document.createElement("button"),i=-1!==["Backspace","Esc","Enter","ShiftRight","ControlRight","Delete"].indexOf(e.code);switch(t.setAttribute("type","button"),t.classList.add("key",e.code),e.code){case"Backspace":t.classList.add("key-wide","func"),t.textContent=e.inner.en,t.addEventListener("click",(()=>{this.properties.value=this.properties.value.substring(0,this.properties.value.length-1),this._triggerEvent("oninput")}));break;case"CapsLock":t.classList.add("key-wide","key-caps","func"),t.textContent=e.inner.en,t.addEventListener("click",(()=>{this.toggleCapsLock(),t.classList.toggle("caps_active",this.properties.capsLock),console.log("CapsTut")}));break;case"Tab":t.classList.add("func"),t.textContent=e.inner.en,t.addEventListener("click",(e=>{e.preventDefault();const n=this.elements.textarea.selectionStart,t=this.elements.textarea.selectionEnd;this.properties.value=this.properties.value.substring(0,n)+"\t"+this.properties.value.substring(t),this.elements.textarea.selectionStart=this.selectionEnd=n+1,this._triggerEvent("oninput"),this.elements.textarea.focus(),console.log("neyasno")}));break;case"Enter":t.classList.add("key-wide","func"),t.textContent=e.inner.en,t.addEventListener("click",(()=>{this.properties.value+="\n",this._triggerEvent("oninput")}));break;case"Space":t.classList.add("key-space","space","func"),t.textContent=e.inner.en,t.addEventListener("click",(()=>{this.properties.value+=" ",this._triggerEvent("oninput")}));break;case"Delete":case"ControlRight":case"ControlLeft":case"AltLeft":case"AltRight":t.classList.add("func"),t.textContent=e.inner.en;break;case"ShiftLeft":t.classList.add("key-wide","func"),t.textContent=e.inner.en,t.addEventListener("click",(()=>{this.elements.keys.forEach((n=>{"en"===this.properties.lang&&console.log(e.code)}))}));break;case"ShiftRight":t.classList.add("key-wide","func"),t.textContent=e.inner.en,t.addEventListener("click",(()=>{this.toggleCapsLock()}));break;default:t.textContent="en"===this.properties.lang?e.inner.en:e.inner.ru,this.elements.textarea.focus(),t.addEventListener("click",(()=>{this.properties.value+=this.properties.capsLock?e.onshift.en:e.inner.en,this._triggerEvent("oninput")}))}n.appendChild(t),i&&n.appendChild(document.createElement("br"))})),n},langChange(){document.onkeydown=function(e){"ControlLeft"===e.code&&(document.onkeyup=function(e){"AltLeft"==e.code?console.log("zdes"):document.onkeyup=null})}},_triggerEvent(e){"function"==typeof this.eventHandlers[e]&&(this.eventHandlers[e](this.properties.value),this.elements.textarea.focus(),console.log("what"))},toggleCapsLock(){this.properties.capsLock=!this.properties.capsLock;for(const e of this.elements.keys)"en"!==this.properties.lang||e.classList.contains("func")||(e.textContent=this.properties.capsLock?e.textContent.toUpperCase():e.textContent.toLowerCase())},handleKey(){document.onkeydown=function(e){n.elements.textarea.focus(),document.querySelector(`.${e.code}`).classList.add("active"),document.querySelector(`.${e.code}`)===document.querySelector(".CapsLock")&&n.toggleCapsLock()},document.onkeyup=function(e){document.querySelector(`.${e.code}`).classList.remove("active"),n.elements.textarea.focus()}},open(e,n){this.properties.value=e,this.eventHandlers.oninput=n,this.elements.textarea.focus()}};window.addEventListener("DOMContentLoaded",(()=>{n.init(),n.handleKey(),n.open("",(e=>{console.log(e)}))}))})();