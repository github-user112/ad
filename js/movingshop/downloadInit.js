


// 首页轮播...
function download_Init (argument) {
	// keywords
	var _boxs = $('#downloads_keys_box').children('.keys_list_box');
	for (var i = 0; i < _boxs.length; i++) {
		var _box = $(_boxs[i]);
		var _keywords = argument[i]['keyword'].split(' ');
		for (var j = 0; j < _keywords.length; j++) {
			var _temp = $('<li class="keys_single_box" >'+_keywords[j]+'</li>');
			_box.append(_temp);
		};
	};
}



