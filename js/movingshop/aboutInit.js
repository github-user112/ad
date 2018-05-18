
// cctv5 Init
function aboutInit(argument,index)
{	
	var jsonData = argument['about-'+index];
	var _num = jsonData.length;
	var _height = 0;
	var _dom = $('#about_'+index+'_box');
	_dom.empty();

	for (var i = 0; i < _num; i++) {
		var _temp = jsonData[i];
		var _img = $('<img />');
		_img.attr('src','http://www.future-ad.com/'+_temp['imgurl']);
		_img.attr('width',_temp['imgwidth']);
		_img.attr('height',_temp['imgheight']);

		_height += parseInt(_temp['imgheight']);

		if (_temp['imglinktype'] == 0 && _temp['imglinkurl'] != '')
		{
			//站内链接
			_img.addClass('class',"link_inside");
			_img.attr('link_inside',_temp['imglinkurl']);
		}
		else if(_temp['imglinktype'] == 1 && _temp['imglinkurl'] != '')
		{
			//站外链接
			_img.attr('target',"_blank");
			_img.attr('href',_temp['imglinkurl']);
		}
		_img.appendTo(_dom);

		if(_height > 489){
			//文章内容  竖向滚动
			_dom.mCustomScrollbar({
				set_height:"489",
				mouseWheel:true,
				mouseWheelPixels:950
			});

			//文章内容  竖向滚动 样式设定
			var scrollbar_dom = _dom.children('.mCustomScrollBox');
			scrollbar_dom.children('.mCSB_scrollTools').css({
				// height:'380px',
				// margin:'0 0'
			});
			scrollbar_dom.children('.mCSB_container').css({
				'margin-right':'0'
			});
			scrollbar_dom.children('.mCSB_scrollTools').children('.mCSB_draggerContainer').children('.mCSB_draggerRail').css({
				'margin-left':'2px'
			});
			scrollbar_dom.children('.mCSB_scrollTools').children('.mCSB_draggerContainer').children('.mCSB_dragger').css({
				'background':"#ec1c24 url('images/scrollbar_bg1.png') no-repeat center center",
				'width':'5px',
				'bottom':'0'
			});

			scrollbar_dom.children('.mCSB_scrollTools').children('.mCSB_draggerContainer').children('.mCSB_dragger').children('.mCSB_dragger_bar').css({
				'display':"none"
			});
			//文章内容  竖向滚动 样式设定
		}

	};

	
	_dom.height(489);

}


function about_1Init(argument,index)
{	
	var jsonData = argument['about-'+index];
	var _num = jsonData.length;
	var _width = 0;
	var _dom = $('#description_corporate_culture_img');
	_dom.empty();

	for (var i = 0; i < _num; i++) {
		var _temp = jsonData[i];
		var _img = $('<img />');
		_img.attr('src','http://www.future-ad.com/'+_temp['imgurl']);
		_img.attr('width',_temp['imgwidth']);
		_img.attr('height',_temp['imgheight']);

		_width += parseInt(_temp['imgwidth']);

		if (_temp['imglinktype'] == 0 && _temp['imglinkurl'] != '')
		{
			//站内链接
			_img.addClass('class',"link_inside");
			_img.attr('link_inside',_temp['imglinkurl']);
		}
		else if(_temp['imglinktype'] == 1 && _temp['imglinkurl'] != '')
		{
			//站外链接
			_img.attr('target',"_blank");
			_img.attr('href',_temp['imglinkurl']);
		}
		_img.appendTo(_dom);
	};

	
	_dom.width(_width);

}

function about_3Init(argument,index)
{	
	var jsonData = argument['about-'+index];
	var _rowNum = 6;
	var _colNum = 4;
	var _scene_num = Math.ceil(jsonData.length / 24);
	var _width = 0;
	var _dom = $('#about_3_box');
	var _scene_box = $('<div class="carousel_scene box_955" ></div>');
	var _content_box = $('<div class="content_box box" style="position: relative;"></div>');

	var _loc1 = 0;
	for (var j = 0; j < _scene_num; j++) {
		var _content = $('<div style="float:left; width:955px; height:389px;"></div>');
		var _table = $('<table class="partner_logo_table"></table>');
		for (var _col = 0; _col < _colNum; _col++) {
			var _tr = $('<tr></tr>');
			for (var _row = 0; _row < _rowNum; _row++) {
				
				var _td = $('<td></td>');
				if (jsonData[_loc1])
				{
					var _temp = jsonData[_loc1];
					var _img = $('<img />');
					_img.attr('src','http://www.future-ad.com/'+_temp['imgurl']);
					_img.attr('width',_temp['imgwidth']);
					_img.attr('height',_temp['imgheight']);
					_img.appendTo(_td);
				}
				_td.appendTo(_tr);
				_loc1 ++;
				
			};
			_tr.appendTo(_table);
		};
		_table.appendTo(_content);
		_content.appendTo(_content_box);
		_width += 955;
	};

	_content_box.appendTo(_scene_box);
	_scene_box.prependTo(_dom);
	_content_box.width(_width);
}

