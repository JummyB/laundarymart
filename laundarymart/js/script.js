function welcome() {
	var x = document.getElementById('nav')
	console.log(x)
	// x.style.backgroundColor = '#222'
}

function openSideBar() {
	var x = document.getElementById('mobile-nav-full')
	var y = document.getElementById('tab-to-close')
	x.style.marginLeft = '0'
	x.style.marginTop = '0'
	y.style.display = 'block'
}

function closeSideBar() {
	var x = document.getElementById('mobile-nav-full')
	var y = document.getElementById('tab-to-close')
	x.style.marginLeft = '-80vw'
	x.style.marginTop = '-100vw'
	y.style.display = 'none'
}
function navify() {
	var x = document.getElementById('nav')
	console.log(window.pageYOffset)
	
	if (window.pageYOffset > 120) {
		x.className = 'fixed-nav hidden-xs'
	}

	else if (pageYOffset < 59) {
		x.className = 'hidden-xs'
	}
}