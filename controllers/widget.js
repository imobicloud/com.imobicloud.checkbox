var G, params;

init(arguments[0] || {});
function init(args) {
	var exclude = ['id', 'children'];
	$.container.applyProperties(_.omit(args, exclude));
}

/*
 _params = {
 	classes: '',
 	selected: false,
 	title: '', or null
 	module: null // use iconfont module for icon. ex: require('iconfont')
 }
 * */
exports.load = function(_G, _params) {
	params && $.container.removeAllChildren();
	
	G = _G;
	params = _params;
	
	var classes = _params.classes,
		state = _params.selected != true ? '-normal' : '-selected';
		
	var checkboxStyle = { classes: classes + '-checkbox-icon '  + classes + '-checkbox-icon'  + state, touchEnabled: false };
	if (_params.module == null) {
		$.container.add( _G.UI.create('ImageView', checkboxStyle) );
	} else {
		$.container.add( _params.module.createLabel( _G.createStyle(checkboxStyle) ) );
	}
	
	if (_params.title) {
		$.container.add( _G.UI.create('Label', { classes: classes + '-checkbox-title ' + classes + '-checkbox-title' + state, text: _params.title, touchEnabled: false }) );
	}
};

exports.unload = function() {
	$.container.removeAllChildren();
	G = params = null;
};

function checkboxClick(e) {
	setValue(!params.selected);
  	$.trigger('change', { value: params.selected });
}

function setValue(isSelected) {
  	params.selected = isSelected;
  	
  	var classes = params.classes,
  		children = $.container.children,
  		state = params.selected != true ? '-normal' : '-selected';
  	
  	var checkboxStyle = G.createStyle({ classes: classes + '-checkbox-icon'  + state });
  	if (params.module && checkboxStyle.text) {
  		checkboxStyle.text = params.module.getText(checkboxStyle.text);
	}
  	children[0].applyProperties(checkboxStyle);
  	
  	children[1].applyProperties( G.createStyle({ classes: classes + '-checkbox-title'  + state }) );
}
exports.setValue = setValue;

exports.getValue = function() {
	return params ? params.selected: false;
};

exports.getParams = function() {
	return params;
};