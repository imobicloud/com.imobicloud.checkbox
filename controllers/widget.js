var selected = false;

init(arguments[0] || {});

/*
 args = {
 	selected: 'false',
 	title: ''
 }
 * */
function init(args) {
	var exclude = ['id', 'selected', 'title', 'font'];
	$.vCheckbox.applyProperties( _.omit(args, exclude) );
	
  	setValue(args.selected == 'true');
	$.title.text = args.title;
}

function checkboxClick(e) {
	setValue(!selected);
  	$.trigger('change', { value: selected });
}

function setValue(isSelected) {
  	selected = isSelected;
	$.icon.applyProperties( $.createStyle({ classes: 'imc-checkbox-icon-' + (isSelected ? 'selected' : 'normal') }) );
}
exports.setValue = setValue;

exports.getValue = function() {
	return selected;
};