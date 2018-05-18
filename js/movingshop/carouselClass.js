//轮播控制
function carouselClass(box_id,auto,time)
{
  if (typeof(box_id) == 'undefined') return console.error("carousel_Class 未设置 box_id");
  if (typeof(auto) == 'undefined') auto = false;
  if (typeof(time) == 'undefined') time = 5000;

  var box = $('#'+box_id);
  var content = box.children('.carousel_scene').children('.content_box');
  content.css({'position':'relative'});
  var nav = box.children('.nav_box');

  var contentChildren = content.children();
  var contentNum = contentChildren.length;

  var singleWidth = contentChildren.first().width();
  var singleHeight = contentChildren.first().height();

  var contentNowIndex = 0;//当前位置

  content.width(singleWidth*contentNum);
  content.width('10000px');

  // console.log(singleWidth);
  // console.log(10000);
  //添加导航
  nav.empty();
  for (var i = 0; i < contentNum; i++) {
    nav.append('<li class="nav_point"></li>');
  };

  var navA = nav.children();
  nav.width(navA.first().width() * contentNum); //设置宽度
  navA.first().addClass('nav_point_active');//点亮第一导航


  //是否开启自动轮播
  var c_time;
  
  if (auto == true){
    c_time= setTimeout(next,time);
    content.hover(
      function (){
        clearTimeout(c_time);
        // console.log('clearTimeout');
      },
      function () {
        c_time= setTimeout(next,time);
        // console.log('setTimeout');
      }
    );
  } 

  //点击事件
  navA.bind('click',function(){
    var _index = $(this).index();
    next(_index);
  });

  function next(_contentNowIndex)
  {
    
    // console.log('1234');
    if (typeof(_contentNowIndex) != 'undefined') contentNowIndex = _contentNowIndex;
    else contentNowIndex ++;
    contentNowIndex = contentNowIndex >= contentNum ? 0 : contentNowIndex;

    if (contentNowIndex == contentNum - 1) {
      arrow_right.hide();
    }
    else
    {
      arrow_right.show();
    }
    if (contentNowIndex == 0) arrow_left.hide();
    else arrow_left.show();

    // console.log(contentNowIndex);
    for (var i = 0; i < navA.length; i++) {
      $(navA[i]).removeClass('nav_point_active');
    };
    $(navA[contentNowIndex]).addClass('nav_point_active');
    TweenMax.to(content,.75,{left:-singleWidth*contentNowIndex,ease:Strong.easeOut});
    if (auto == true){
      clearTimeout(c_time);
      c_time = setTimeout(next,time); 
    } 
  }


  var arrow_left = box.find('.arrow_left');
  var arrow_right = box.find('.arrow_right');

  arrow_left.hide();
  arrow_right.bind('click',function(){
    contentNowIndex++;
    contentNowIndex = contentNowIndex >= contentNum ? contentNum : contentNowIndex;
    next(contentNowIndex);
  });

  arrow_left.bind('click',function(){
    contentNowIndex = contentNowIndex - 1;
    contentNowIndex = contentNowIndex < 0 ? 0 : contentNowIndex;
    next(contentNowIndex);
  });

  arrow_left.hover(
    function(){
      $(this).children('.arrow_left_img_hover').show();
    },
    function(){
      $(this).children('.arrow_left_img_hover').hide();
    }
  );

  arrow_right.hover(
    function(){
      $(this).children('.arrow_right_img_hover').show();
    },
    function(){
      $(this).children('.arrow_right_img_hover').hide();
    }
  );

};
