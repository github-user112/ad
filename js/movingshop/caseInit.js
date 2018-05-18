
// cctv5 Init
function caseInit(argument,index)
{	
	var jsonData = argument['case-'+index];
	var _rowNum = 3;
	var _colNum = 2;
	var _scene_num = Math.ceil(jsonData.length / (_rowNum * _colNum) );
	var _width = 0;
	var _dom = $('#case_'+index+'_box');
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
					_imgBox.attr('case_id',index);
					_imgBox.attr('case_index',_loc1);

					var _img = $('<img />');
					_img.attr('src','http://www.future-ad.com/'+_temp['smallimgurl']);
					_img.appendTo(_imgBox);

					var _redBox = $('<div class="red_box" style="opacity: 1;"></div>');
					_redBox.appendTo(_imgBox);

					var _title = $('<div class="title">'+_temp['title1']+'<br>'+_temp['title2']+'</div>');
					_title.appendTo(_imgBox);

					var _timeA = _temp['time'].split(' ');
					var _time = $('<div class="time">'+_timeA[0]+'</div>');
					_time.appendTo(_imgBox);

					_imgBox.appendTo(_td);

				}
				else
				{
					var _imgBox = $('<div class="case_single_box" is_none="true" style="cursor:default;" ></div>');

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

