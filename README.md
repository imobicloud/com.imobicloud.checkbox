# Titanium UI - Checkbox

Custom checkbox

![Checkbox example](http://i.imgur.com/lf1SKrY.png)

xml

	<Widget id="chkIndoor" src="com.imobicloud.checkbox" class="imc-checkbox"/>
	
tss

	".imc-checkbox" : { height: 24 }
		".imc-checkbox-icon": { width: 22.5, height: 24, left: 0 }
		".imc-checkbox-icon-normal": { image: '/images/checkbox.png' }
		".imc-checkbox-icon-selected": { image: '/images/checkbox-on.png' }
		".imc-checkbox-title": { left: 32.5, color: '#fff', font: { fontSize: 12, fontFamily: 'HelveticaNeue' } }
		// ".imc-checkbox-title-normal": {}
		// ".imc-checkbox-title-selected": {}
		
		/*
		// use iconfont for checkbox's icon
		".imc-iconfont-checkbox-icon": { left: 0, color: '#6389c1', font: { fontSize: 18, fontFamily: 'sportsmap_iconfont' } }
		".imc-iconfont-checkbox-icon-normal": { text: 'checkbox_e' }
		".imc-iconfont-checkbox-icon-selected": { text: 'checkbox_f' }
		".imc-iconfont-checkbox-title": { left: 32.5, color: '#fff', font: { fontSize: 12, fontFamily: 'HelveticaNeue' } }
		*/
		
js

	$.chkIndoor.load($, { id: 'indoor', selected: true, title: 'Indoor', classes: 'imc' });
	// or 
	// $.chkIndoor.load($, { id: 'indoor', selected: true, title: null, classes: 'imc' });
	
	/*
	// use iconfont for checkbox's icon
	// https://github.com/imobicloud/libs/blob/master/iconfont.js
	$.chkIndoor.load($, { id: 'indoor', selected: true, title: 'Indoor', classes: 'imc-iconfont', module: require('iconfont') });
	*/
	
	// get params
	$.chkIndoor.getParams();
	
	// get value
	$.chkIndoor.getValue(); // true or false
	
	// set value
	$.chkIndoor.setValue(false);
	
	$.chkIndoor.unload();