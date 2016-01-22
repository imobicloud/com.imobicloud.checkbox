var G, params;

init(arguments[0] || {});
function init(args) {
	var exclude = ['id', 'children'];
	$.container.applyProperties(_.omit(args, exclude));
}

/*
 args = {
 	classes: '',
 	selected: false,
 	title: ''
 }
 * */
exports.load = function(_G, _params) {
	params && $.container.removeAllChildren();
	
	G = _G;
	params = _params;
	
	var classes = _params.classes,
		state = params.selected != true ? '-normal' : '-selected';
	$.container.add( G.UI.create('ImageView', { classes: classes + '-checkbox-icon '  + classes + '-checkbox-icon'  + state, touchEnabled: false }) );
	$.container.add( G.UI.create('Label',     { classes: classes + '-checkbox-title ' + classes + '-checkbox-title' + state, text: params.title, touchEnabled: false }) );
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
  	
  	children[0].applyProperties( G.createStyle({ classes: classes + '-checkbox-icon'  + state }) );
  	children[1].applyProperties( G.createStyle({ classes: classes + '-checkbox-title'  + state }) );
}
exports.setValue = setValue;

exports.getValue = function() {
	return params ? params.selected: false;
};

exports.getParams = function() {
	return params;
};