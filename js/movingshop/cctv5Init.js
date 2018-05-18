
// cctv5 Init
function cctv5_Init(argument)
{	
	var _cctv5Box = $('<div></div>');
	var _height = 0;
	var _dom = $('<div></div>');
	for (var j= 0; j < 5; j++) {

		var _jsonData = argument['cctv5-'+j];
		var _num = _jsonData.length;
		var _imgBox = $('<p id="cctv5_'+j+'"></p>');

		for (var i = 0; i < _num; i++) {
			var _temp = _jsonData[i];
			

			var _img = $('<img />');
			_img.attr('src','http://www.future-ad.com/'+_temp['imgurl']);
			_img.attr('width',_temp['imgwidth']);
			_img.attr('height',_temp['imgheight']);

			_height += parseInt(_temp['imgheight']);

			if (_temp['imglinktype'] == 0 && _temp['imglinkurl'] != '')
			{
				//站内链接
				_img.addClass("link_inside");
				_img.attr('link_inside',_temp['imglinkurl']);
			}
			else if(_temp['imglinktype'] == 1 && _temp['imglinkurl'] != '')
			{
				//站外链接
				_img.attr('target',"_blank");
				_img.attr('href',_temp['imglinkurl']);
			}

			_img.appendTo(_imgBox);
			_imgBox.appendTo(_dom);

			if (i < (_num - 1)) //not Last
			{
				$('<img src="images/line.png">').appendTo(_dom);
				_height+= 1;
			}

		};
		_dom.appendTo(_cctv5Box);
	}
	_cctv5Box.height(_height);
	$('#cctv5_box').empty();
	_cctv5Box.appendTo($('#cctv5_box'));

}
