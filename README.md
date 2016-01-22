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
		
js

	$.chkIndoor.load($, { id: 'indoor', selected: true, title: 'Indoor', classes: 'imc' });
	
	// get params
	$.chkIndoor.getParams();
	
	// get value
	$.chkIndoor.getValue(); // true or false
	
	// set value
	$.chkIndoor.setValue(false);
	
	$.chkIndoor.unload();