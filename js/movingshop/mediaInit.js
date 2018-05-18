
// cctv5 Init
function media_0Init(argument)
{	
	var _num = argument.length;
	var _height = 0;
	var _dom = $('<div></div>');

	for (var i = 0; i < _num; i++) {
		var _temp = argument[i];
		var _imgBox = $('<p id="media_0_'+i+'" ></p>');

		var _img = $('<img />');
		_img.attr('src','http://www.future-ad.com/'+_temp['imgurl']);
		_img.attr('width',_temp['imgwidth']);
		_img.attr('height',_temp['imgheight']);

		_height += parseInt(_temp['imgheight']);

		if (_temp['imglinktype'] == 0 && _temp['imglinkurl'] != '')
		{
			//站内链接
			_dom.addClass('class',"link_inside");
			_imgBox.attr('link_inside',_temp['imglinkurl']);
		}
		else if(_temp['imglinktype'] == 1 && _temp['imglinkurl'] != '')
		{
			//站外链接
			_imgBox.attr('target',"_blank");
			_imgBox.attr('href',_temp['imglinkurl']);
		}

		_img.appendTo(_imgBox);
		_imgBox.appendTo(_dom);

		if (i < (_num - 1)) //not Last
		{
			$('<img src="images/line.png" />').appendTo(_dom);
			_height += 1;
		}
	};

	_dom.height(_height);

	_dom.appendTo($('#media_0_box'));

}

function media_1Init(argument)
{	
	var _num = argument.length;
	var _height = 0;
	var _dom = $('<div></div>');

	for (var i = 0; i < _num; i++) {
		var _temp = argument[i];
		var _imgBox = $('<p id="media_1_'+i+'" ></p>');

		var _img = $('<img />');
		_img.attr('src','http://www.future-ad.com/'+_temp['imgurl']);
		_img.attr('width',_temp['imgwidth']);
		_img.attr('height',_temp['imgheight']);

		_height += parseInt(_temp['imgheight']);

		if (_temp['imglinktype'] == 0 && _temp['imglinkurl'] != '')
		{
			//站内链接
			_dom.addClass('class',"link_inside");
			_imgBox.attr('link_inside',_temp['imglinkurl']);
		}
		else if(_temp['imglinktype'] == 1 && _temp['imglinkurl'] != '')
		{
			//站外链接
			_imgBox.attr('target',"_blank");
			_imgBox.attr('href',_temp['imglinkurl']);
		}

		_img.appendTo(_imgBox);
		_imgBox.appendTo(_dom);
		
		if (i < (_num - 1)) //not Last
		{
			$('<img src="images/line.png" />').appendTo(_dom);
			_height += 1;
		}
	};

	_dom.height(_height);

	_dom.appendTo($('#media_1_box'));

}

