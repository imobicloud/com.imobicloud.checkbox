# Titanium UI - Checkbox

Custom checkbox

![Checkbox example](http://i.imgur.com/lf1SKrY.png)

xml

	<Widget id="chkIndoor" src="com.imobicloud.checkbox" class="checkbox checkbox-indoor" onClick="chkIndoorClick"/>
	
tss

	".checkbox": { height: 24,
		Icon: { width: 22.5, height: 24, left: 0 },
		IconOff: { image: '/images/checkbox.png' },
	 	IconOn: { image: '/images/checkbox-on.png' },
	 	Title: { left: 32.5, color: '#fff', font: { fontSize: 12, fontFamily: 'HelveticaNeue' } },
	 	// TitleOff: {},
	 	// TitleOn: {}
	}
	".checkbox-indoor": { selected: true, Title: { text: 'Indoor' } }

	/*
	// use iconfont for checkbox's icon
	".checkbox": { height: 24,
		module: 'iconfont',
		Icon: { left: 0, color: '#6389c1', font: { fontSize: 18, fontFamily: 'sportsmap_iconfont' } },
		IconOff: { text: 'checkbox_e' },
	 	IconOn: { text: 'checkbox_f' },
	 	Title: { left: 32.5, color: '#fff', font: { fontSize: 12, fontFamily: 'HelveticaNeue' } },
	 	// TitleOff: {},
	 	// TitleOn: {}
	}
	*/
		
js

	// get value
	$.chkIndoor.getValue(); // true or false
	
	// set value
	$.chkIndoor.setValue(false);
	
	function chkIndoorClick(e) {
		// e.id
		// e.value
	}
	
Change log:

- 7/15/2016: 
	+ remove function load
	+ remove function unload
	+ remove function getParams
	+ remove change event
	+ add click event
	+ change tss
	
	