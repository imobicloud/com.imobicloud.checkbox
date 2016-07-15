var args = $.args;

init();
function init() {
	var exclude = ['id', 'children', 'selected', 'module', 'Icon', 'IconOff', 'IconOn', 'Title', 'TitleOff', 'TitleOn'];
	$.container.applyProperties(_.omit(args, exclude));
	
	loadCheckbox();
}

function loadCheckbox() {
  	var checkboxStyle = _.extend(args.Icon, args.selected != true ? args.IconOff : args.IconOn, { touchEnabled: false });	
	if (args.module == null) {
		$.container.add( $.UI.create('ImageView', checkboxStyle) );
	} else {
		$.container.add( require(args.module).createLabel( $.createStyle(checkboxStyle) ) );
	}
		
	if (args.Title) {
		var titleStyle = _.extend(args.Title, args.selected != true ? args.TitleOff : args.TitleOn, { touchEnabled: false });
		$.container.add( $.UI.create('Label', titleStyle) );
	}
}

function checkboxClick(e) {
	setValue(!args.selected);
  	$.trigger('click', { id: args.id, value: args.selected });
}

function setValue(isSelected) {
  	args.selected = isSelected;
  	
  	var children = $.container.children;
  	
  	var checkboxStyle = args.selected != true ? args.IconOff : args.IconOn;
  	if (args.module && checkboxStyle.text) {
  		checkboxStyle.text = require(args.module).getText(checkboxStyle.text);
	}
	children[0].applyProperties(checkboxStyle);
  	
  	if (args.TitleOn && children[1]) {
  		children[1].applyProperties( args.selected != true ? args.TitleOff : args.TitleOn );
  	}
  	
}
exports.setValue = setValue;

exports.getValue = function() {
	return args.selected;
};

