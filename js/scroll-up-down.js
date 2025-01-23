let styleTag = document.querySelector('style');
if(!styleTag) {
	styleTag = document.createElement('style');
	document.head.appendChild(styleTag);
}

const upDownWrapStyle = `.upDown-wrap{ 
		border:1px solid red;
		z-index:100; 
		position:fixed; 
		bottom:75px; 
		right:1vw;
		#upButton #upButtonItem,
		#downButton #downButtonItem{
			transition: 100ms;
			transition-timing-function: ease-in-out;
			-webkit-transition: 100ms;
			-webkit-transition-timing-function: ease-in-out;
		}
		svg:hover,
		svg:hover{
			cursor: pointer;
			#upButtonItem,
			#downButtonItem{
				fill:#7a7b7c;
			}
		}
	}`;
styleTag.appendChild(document.createTextNode(upDownWrapStyle));

const body = document.body;

const el = document.createElement('div');
const upEl = document.createElement('div');
const downEl = document.createElement('div');

body.appendChild(el);
el.appendChild(upEl);
el.appendChild(downEl);

el.classList.add('upDown-wrap');
el.setAttribute('id','upDownWrap');

upEl.id = 'upButton';
upEl.className = 'upDownMenu';
upEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="#c3c4c7"><path id="upButtonItem" d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg>`

downEl.id = 'downButton';
downEl.className = 'upDownMenu';
downEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="#c3c4c7"><path id="downButtonItem" d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>`

function clickUpDown(Event) {
	switch(Event.target.closest('.upDownMenu').id){
		case 'upButton':
			window.scrollTo({top:0, left:0, behavior:'smooth'});
			break
		case 'downButton':
			window.scrollTo({top:body.clientHeight, left:0, behavior:'smooth'});
			break
	}
}
el.addEventListener('click',clickUpDown)

// div 요소 생성 및 속성 추가
// const newDiv = Object.assign(document.createElement('div'), {
//   id: 'myId',
//   className: 'myClass'
// });