


// 首页轮播...
function index_0Init (argument) {
	var _width = 980;
	var _num = argument.length;
	var _Box = $('#index_kv_box');
	_Box.width(980 * _num);

	for (var i = 0; i < _num; i++) {

		var _temp = argument[i];

		var _img = $('<img/>');
		_img.attr('src','http://www.future-ad.com/'+_temp['imgurl']);
		_img.attr('width',_temp['imgwidth']);
		_img.attr('height',_temp['imgheight']);

		var _imgBox = $('<a></a>');
		_imgBox.attr('id',"index_0_"+i);
		if (_temp['imglinktype'] == 0)
		{
			//站内链接
			_imgBox.attr('class',"link_inside");
			_imgBox.attr('link_inside',_temp['imglinkurl']);
		}
		else if(_temp['imglinktype'] == 1)
		{
			//站外链接
			_imgBox.attr('target',"_blank");
			_imgBox.attr('href',_temp['imglinkurl']);
		}
		else if(_temp['imglinktype'] == 2)
		{
			_imgBox.attr('class',"link_video");
			_imgBox.attr('link_video',"index-0,"+i);
		}
		else if(_temp['imglinktype'] == 3)
		{
			_imgBox.attr('class',"link_img");
			_imgBox.attr('link_img',"index-0,"+i);
		}

		_img.appendTo(_imgBox);
		_imgBox.appendTo(_Box);
	};

	_Box.appendTo();

	 
}



//首页-banner
function indexBannerInit (argument,_index) {
	var _dom = $('#banner_'+_index);
	var _imgBox = _dom.children('.banner_box');

	var _img = $('<img />');
	var _temp = argument['indeximg'];
	_img.attr('src','http://www.future-ad.com/'+_temp['imgurl']);
	_img.attr('width',_temp['imgwidth']);
	_img.attr('height',_temp['imgheight']);

	if (_temp['imglinktype'] == 0)
	{
		//站内链接
		_dom.addClass("link_inside");
		_dom.attr('link_inside',_temp['imglinkurl']);
	}
	else if(_temp['imglinktype'] == 1)
	{
		//站外链接
		_dom.attr('target',"_blank");
		_dom.attr('href',_temp['imglinkurl']);
	}

	_img.appendTo(_imgBox);
}

// 重点推荐
function priorityInit(argument)
{
	var _jsonData = argument['listimg'];
	var _num = _jsonData.length;
	var _height = 0;
	var _dom = $('<div></div>');

	for (var i = 0; i < _num; i++) {
		var _temp = _jsonData[i];
		var _imgBox = $('<p id="priority_'+i+'" ></p>');

		var _img = $('<img />');
		_img.attr('src','http://www.future-ad.com/'+_temp['imgurl']);
		_img.attr('width',_temp['imgwidth']);
		_img.attr('height',_temp['imgheight']);

		_height += parseInt(_temp['imgheight']);

		if (_temp['imglinktype'] == 0)
		{
			//站内链接
			_dom.addClass('class',"link_inside");
			_imgBox.attr('link_inside',_temp['imglinkurl']);
		}
		else if(_temp['imglinktype'] == 1)
		{
			//站外链接
			_imgBox.attr('target',"_blank");
			_imgBox.attr('href',_temp['imglinkurl']);
		}

		_img.appendTo(_imgBox);
		_imgBox.appendTo(_dom);
		
	};

	_dom.height(_height);

	_dom.appendTo($('#priority_box'));
}

// 整合资源
function integrateResourcesInit(argument)
{
	var jsonData = argument['listimg'];
	var _rowNum = 3;
	var _colNum = 2;
	var _scene_num = Math.ceil(jsonData.length / (_rowNum * _colNum) );
	var _width = 0;
	var _dom = $('#index_2_box');
	var _scene_box = $('<div class="carousel_box" ></div>');

	var _loc1 = 0;
	for (var j = 0; j < _scene_num; j++) {
		var _table = $('<table class="case_table"></table>');
		for (var _col = 0; _col < _colNum; _col++) {
			var _tr = $('<tr></tr>');
			for (var _row = 0; _row < _rowNum; _row++) {
				
				var _td = $('<td></td>');
				if (jsonData[_loc1])
				{
					var _temp = jsonData[_loc1];

					var _imgBox = $('<div class="case_single_box" ></div>');
					_imgBox.attr('index_id',j);
					_imgBox.attr('case_index',_loc1);

					var _img = $('<img />');
					_img.attr('src','http://www.future-ad.com/'+_temp['smallimgurl']);
					_img.appendTo(_imgBox);

					var _redBox = $('<div class="red_box" style="opacity: 1;"></div>');
					_redBox.appendTo(_imgBox);

					_imgBox.appendTo(_td);

				}
				else
				{
					var _imgBox = $('<div class="case_single_box" ></div>');

					var _redBox = $('<div class="red_box" style="opacity: 1;"></div>');
					_redBox.appendTo(_imgBox);

					_imgBox.appendTo(_td);
				}
				_td.appendTo(_tr);
				_loc1 ++;
			};
			_tr.appendTo(_table);
		};
		_table.appendTo(_scene_box);
		_width += 952;
	};
	_scene_box.width(_width);
	_scene_box.prependTo(_dom);
}

