var args = $.args;
var checkboxLoader, checkboxUpdater;

init();
function init() {
	var exclude = [
		'id', 'children', 
		'deferLoading', 'module', 'selected', 
		'Icon', 'IconOff', 'IconOn', 'Title', 'TitleOff', 'TitleOn'
	];
	$.container.applyProperties(_.omit(args, exclude));
	
	checkboxLoader = loadCheckbox;
	checkboxUpdater = updateCheckbox;
	
	if (args.deferLoading !== true) {
		checkboxLoader(args, $.container);
	}
}

exports.init = function(params) {
	params.checkboxLoader && (checkboxLoader = params.checkboxLoader);
	params.checkboxUpdater && (checkboxUpdater = params.checkboxUpdater);
    checkboxLoader(args, $.container);
};

function loadCheckbox(params, container) {
	var isSelected = params.selected;
	
  	var checkboxStyle = _.extend(params.Icon, isSelected ? params.IconOn : params.IconOff, { touchEnabled: false });	
	if (params.module == null) {
		container.add( $.UI.create('ImageView', checkboxStyle) );
	} else {
		container.add( require(params.module).createLabel( $.createStyle(checkboxStyle) ) );
	}
		
	if (params.Title) {
		var titleStyle = _.extend(params.Title, isSelected ? params.TitleOn : params.TitleOff, { touchEnabled: false });
		container.add( $.UI.create('Label', titleStyle) );
	}
}

function updateCheckbox(params, container) {
	var isSelected = params.selected;
  	var children = container.children;
  	
  	var checkboxStyle = isSelected ? params.IconOn : params.IconOff;
  	if (params.module && checkboxStyle.text) {
  		checkboxStyle.text = require(params.module).getText(checkboxStyle.text);
	}
	children[0].applyProperties(checkboxStyle);
  	
  	if (params.TitleOn && children[1]) {
  		children[1].applyProperties( isSelected ? params.TitleOn : params.TitleOff );
  	}
}

function checkboxClick(e) {
	setValue(!args.selected);
  	$.trigger('click', { id: args.id, value: args.selected });
}

function setValue(isSelected) {
	if (isSelected != args.selected) {
		args.selected = isSelected;
  		checkboxUpdater(args, $.container);
	}
}
exports.setValue = setValue;

exports.getValue = function() {
	return args.selected;
};

