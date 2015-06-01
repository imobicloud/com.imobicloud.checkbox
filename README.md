# Titanium UI - Checkbox

Custom checkbox

![Checkbox example](http://i.imgur.com/lf1SKrY.png)

xml

	<Widget id="vCheckbox" src="com.imobicloud.checkbox" selected="true" title="Remember me" class="custom-checkbox"/>
	
tss

	// default styles
	".imc-checkbox" : { height: 24 }
		".imc-checkbox-icon": { width: 22.5, height: 24, left: 0, touchEnabled: false }
		".imc-checkbox-icon-normal": { image: '/images/checkbox.png' }
		".imc-checkbox-icon-selected": { image: '/images/checkbox-on.png' }
		".imc-checkbox-title": { left: 32.5, color: '#fff', font: { fontSize: 12, fontFamily: 'HelveticaNeue' }, touchEnabled: false }
		
	// custom style	
	".custom-checkbox": { width: Titanium.UI.SIZE, top: 118 }
		// ".custom-checkbox-icon": { image: '/images/another-checkbox.png' }
		".custom-checkbox-title": { font: { fontSize: 15, fontFamily: 'HelveticaNeue' } }
		
js

	// update custom style
	$.vCheckbox.updateViews({
		// '#icon': $.createStyle({ classes: 'custom-checkbox-icon' }),
		'#title': $.createStyle({ classes: 'custom-checkbox-title' })
	});
	
	// get value
	$.vCheckbox.getValue(); // true or false
	
	// set value
	$.vCheckbox.getValue(false);
	
	