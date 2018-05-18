function loading_Class (canvas_id, hideCallBack, number = 27) {
  /**判断浏览器是否支持canvas**/
// try{  
    // document.createElement('canvas').getContext('2d');

  var canvas = $('#' + canvas_id)
  var ctx = canvas[0].getContext('2d')
  // ctx.globalAlpha = 1;
  var btn = canvas.parent().children('#logo_btn_box')
  var btnImg = btn.children('#logo_btn_t_box')

  // 背景
  var requestId = 0
  var bgRectA = new Array()

  var width = 0
  var height = 0
  var r = 0

  var xindexMid = 13
  var yindexMid = 7
  var xIndexStart = 0
  var xIndexEnd = number
  var yIndexStart = 0
  var yIndexEnd = 15

  var rectWidth = 100

  // logo
  var logoArray = new Array(Array(68, 20), Array(48, 24), Array(52, 24), Array(56, 24), Array(60, 24), Array(64, 24), Array(68, 24), Array(72, 24), Array(76, 24), Array(36, 28), Array(40, 28), Array(44, 28), Array(48, 28), Array(52, 28), Array(56, 28), Array(60, 28), Array(68, 28), Array(72, 28), Array(76, 28), Array(80, 28), Array(32, 32), Array(36, 32), Array(40, 32), Array(44, 32), Array(48, 32), Array(52, 32), Array(56, 32), Array(68, 32), Array(72, 32), Array(76, 32), Array(80, 32), Array(28, 36), Array(32, 36), Array(36, 36), Array(40, 36), Array(44, 36), Array(48, 36), Array(52, 36), Array(56, 36), Array(72, 36), Array(76, 36), Array(80, 36), Array(84, 36), Array(28, 40), Array(32, 40), Array(36, 40), Array(40, 40), Array(44, 40), Array(48, 40), Array(52, 40), Array(56, 40), Array(72, 40), Array(76, 40), Array(80, 40), Array(84, 40), Array(24, 44), Array(28, 44), Array(32, 44), Array(36, 44), Array(40, 44), Array(44, 44), Array(48, 44), Array(52, 44), Array(56, 44), Array(72, 44), Array(76, 44), Array(80, 44), Array(84, 44), Array(88, 44), Array(24, 48), Array(28, 48), Array(32, 48), Array(36, 48), Array(40, 48), Array(44, 48), Array(48, 48), Array(52, 48), Array(72, 48), Array(76, 48), Array(80, 48), Array(84, 48), Array(88, 48), Array(20, 52), Array(24, 52), Array(28, 52), Array(32, 52), Array(36, 52), Array(40, 52), Array(44, 52), Array(48, 52), Array(52, 52), Array(72, 52), Array(76, 52), Array(80, 52), Array(84, 52), Array(20, 56), Array(24, 56), Array(28, 56), Array(32, 56), Array(36, 56), Array(40, 56), Array(44, 56), Array(48, 56), Array(52, 56), Array(76, 56), Array(84, 56), Array(16, 60), Array(20, 60), Array(24, 60), Array(28, 60), Array(32, 60), Array(36, 60), Array(40, 60), Array(44, 60), Array(48, 60), Array(52, 60), Array(16, 64), Array(20, 64), Array(24, 64), Array(28, 64), Array(32, 64), Array(36, 64), Array(40, 64), Array(44, 64), Array(48, 64), Array(52, 64), Array(12, 68), Array(16, 68), Array(20, 68), Array(24, 68), Array(28, 68), Array(32, 68), Array(36, 68), Array(40, 68), Array(12, 72), Array(16, 72), Array(20, 72), Array(24, 72), Array(28, 72), Array(32, 72), Array(8, 76), Array(12, 76), Array(16, 76), Array(20, 76), Array(12, 80), Array(84, 32), Array(72, 56)
  )
  var numBalls = 0
  var fl = 250
  var vpX = width / 2
  var vpY = height / 2
  var logoRectA = new Array()
  var numBalls = 81
  var logoRectA2 = new Array()
  var TweenBlock

  var image = new Image()
  image.src = 'images/logo.png';

  (function init () {
    resizeInit()

    //背景init
    for (var i = xIndexStart; i < xIndexEnd; i++) {
      bgRectA[i] = new Array()
      for (var j = yIndexStart; j < yIndexEnd; j++) {
        var x = rectWidth * i
        var y = rectWidth * j
        var _r = Math.pow(Math.pow(i - xindexMid, 2) + Math.pow(j - yindexMid, 2), 0.5)
        // console.log(i+':'+j+':'+_r + ':' + Math.pow(_r / r,2));
        var rgb = 255 - Math.floor(120 * Math.pow(_r / r, 2))
        bgRectA[i][j] = new rectSprite(x, y, rectWidth, rectWidth)
        bgRectA[i][j].rgb = rgb
        bgRectA[i][j].rgbStart = rgb
        bgRectA[i][j].rgbMax = rgb + Math.floor(10 * Math.pow(_r / r, 2))
        bgRectA[i][j].rgbMix = rgb - Math.floor(10 * Math.pow(_r / r, 2))
      }
    }

    for (var i = 0; i < numBalls; i++) {
      // logoRectA

      var rect = new rectSprite(0, 0, 4, 4)
      var _loc1 = Math.min(i, 143)
      rect.xpos = _loc1 % 9 * 10 - 42
      rect.ypos = Math.floor(_loc1 / 9) * 10 - 42
      rect._xpos = rect.xpos
      rect._ypos = rect.ypos
      rect.dx = rect.xpos
      rect.dy = rect.ypos
      rect.zpos = 0
      rect._zpos = 0
      rotateX(rect, 0)
      rotateY(rect, rect.angleY * Math.PI / 180)
      doPerspective(rect)

      logoRectA[i] = rect
    }

    for (var i = 0; i < logoArray.length; i++) {
      // logoRectA

      var rect = new rectSprite(0, 0, 4, 4)
      var _loc1 = Math.min(i, 143)
      rect.xpos = _loc1 % 12 * 8 - 46
      rect.ypos = Math.floor(_loc1 / 12) * 8 - 46
      rect._xpos = rect.xpos
      rect._ypos = rect.ypos
      rect.dx = rect.xpos
      rect.dy = rect.ypos
      rect.zpos = 0
      rect._zpos = 0
      rotateX(rect, 0)
      rotateY(rect, rect.angleY * Math.PI / 180)
      doPerspective(rect)

      rect.isImage = true
      logoRectA2[i] = rect
    }

    resize()

    anmiaInit()
  })()

  function anmiaInit () {
    logoRectA.sort(function (a, b) {
      var _ar = a._xpos * a._xpos + a._ypos * a._ypos
      var _br = b._xpos * b._xpos + b._ypos * b._ypos
      return _br - _ar
    })

    TweenBlock = new TimelineMax({paused: true})
    TweenBlock.add(TweenMax.staggerFrom(logoRectA, .75, {
      alpha: 0,
      _xpos: 0,
      _ypos: 0,
      ease: Back.easeOut
    }, .01, bindMouse))
    TweenBlock.play()

  }

  function bindMouse () {
    logoRectA.sort(function (a, b) {
      var _ar = a._xpos * a._xpos + a._ypos * a._ypos
      var _br = b._xpos * b._xpos + b._ypos * b._ypos
      return _ar - _br
    })
    TweenBlock = new TimelineMax({repeat: -1})
    for (var i = 0; i < logoRectA.length; i++) {
      var rect = logoRectA[i]
      var _ro = Math.atan2(rect._ypos, rect._xpos)
      var _R = Math.pow(Math.pow(rect._xpos, 2) + Math.pow(rect._ypos, 2), .5)
      _R *= 1.2
      var _xpos = rect._xpos
      var _ypos = rect._ypos
      var _x = _R * Math.cos(_ro)
      var _y = _R * Math.sin(_ro)
      TweenBlock.insert(TweenMax.to(rect, .75, {_xpos: _x, _ypos: _y, ease: Back.easeIn}), 0.01 * (i / 2))
      TweenBlock.insert(TweenMax.to(rect, .75, {_xpos: _xpos, _ypos: _ypos, ease: Back.easeOut}), 0.01 * (i / 2) + .75)

    }

    // TweenBlock.insert(TweenMax.to(rect,.75,{}),0.01*(i / 2) + 3.75 );
    TweenBlock.play()

    btn.bind('mouseenter', showLogo)
  }

  function showLogo () {
    // console.log('mouseenter');
    logoRectA = logoRectA2
    logoArray.sort(function (a, b) {
      // body...
      return b[1] - a[1]
    })
    logoRectA.sort(function (a, b) {
      return a._ypos - b._ypos
    })
    logoRectA.sort(function (a, b) {
      return a._xpos - b._xpos
    })

    // 效果一
    TweenBlock = new TimelineMax({paused: true})
    TweenBlock.timeScale(1.5)
    for (var i = 0; i < logoArray.length; i++) {
      var rect = logoRectA[i]

      TweenBlock.insert(TweenMax.to(rect, 1, {_xpos: '-200', _ypos: '-=10', ease: Back.easeOut}), 0.01 * i)
      TweenBlock.insert(TweenMax.to(rect, 1, {
        _xpos: logoArray[i][1] - 50,
        _ypos: logoArray[i][0] - 50,
        _zpos: 0,
        alpha: 0,
        ease: Strong.easeOut,
        delay: 1
      }), 0.01 * i + 1)

    }

    TweenBlock.insert(TweenMax.staggerTo(logoRectA, 2, {angleY: -360, ease: Linear.easeNone}, 0.01), 0)
    TweenBlock.play()
    btnImg.show()

    showBtn()
    btn.unbind('mouseenter', showLogo)

    // 效果二
    // logoArray.sort(function (a,b) {
    //        // body...
    //        return a[0] - b[0];
    //    });
    // for (var i = 0; i < logoArray.length; i++) {
    //         // x logoArray[i][1]-50 y logoArray[i][0]-50
    //         var rect = logoRectA[i];
    //         var tl = new TimelineLite();
    //         tl.to(rect,.75,{_xpos:"-100", _ypos:"+=100",ease:Linear.easeNone,delay:0.01*i})
    //           .to(rect,.75,{_xpos:logoArray[i][1]-50,_ypos:logoArray[i][0]-50,_zpos:0, ease:Linear.easeNone,delay:.75});
    //       };
    //       TweenMax.staggerTo(logoRectA,2,{angleY:720,ease:Linear.easeNone},0.01);
  }

  function showBtn () {
    TweenMax.from(btnImg, 1, {y: '+60', alpha: 0, ease: Strong.easeOut, delay: 1})
    TweenMax.to($('#loading_btn'), .75, {y: '+=20', alpha: 1, ease: Strong.easeOut})
    TweenMax.fromTo($('#loading_btn div'), 1, {borderColor: '#858585'}, {
      borderColor: '#ffffff',
      ease: Linear.easeNone,
      repeat: -1,
      yoyo: true
    })
    TweenMax.to($('#loading_btn_line_0'), 1, {left: 5, top: 5, ease: Strong.easeInOut, repeat: -1, yoyo: true})
    TweenMax.to($('#loading_btn_line_1'), 1, {left: 77, top: 5, ease: Strong.easeInOut, repeat: -1, yoyo: true})
    TweenMax.to($('#loading_btn_line_2'), 1, {left: 5, top: 15, ease: Strong.easeInOut, repeat: -1, yoyo: true})
    TweenMax.to($('#loading_btn_line_3'), 1, {left: 77, top: 15, ease: Strong.easeInOut, repeat: -1, yoyo: true})

    btn.bind('click', showPage)
  }

  function showPage () {
    // body...
    // console.log('showpage');
    var _bgA = new Array()
    for (var i = xIndexStart; i < xIndexEnd; i++) {
      for (var j = yIndexStart; j < yIndexEnd; j++) {
        var rect = bgRectA[i][j]
        _bgA.push(rect)
      }
    }

    _bgA.sort(function (a, b) {
      // body...
      var _ar = Math.pow(Math.pow(a.x / 100 - xindexMid, 2) + Math.pow(a.y / 100 - yindexMid, 2), .5)
      var _br = Math.pow(Math.pow(b.x / 100 - xindexMid, 2) + Math.pow(b.y / 100 - yindexMid, 2), .5)
      return _ar - _br
    })

    TweenMax.staggerTo(_bgA, 1, {alpha: 0, ease: Linear.easeOut}, .005)
    TweenMax.to($('#loading_box'), 1.5, {alpha: 0, ease: Strong.easeOut, delay: .5, onComplete: clearLoadingBox})

    $('#loading_box').css({'background-color': 'transparent'})

    hideCallBack()
  }

  function clearLoadingBox () {
    // body...
    $('#loading_box').hide()
    $('#loading_box').remove()
    _stop()
  }

  function render () {
    ctx.clearRect(0, 0, width, height)
    for (var i = xIndexStart; i < xIndexEnd; i++) {
      // console.log(i)
      for (var j = yIndexStart; j < yIndexEnd; j++) {
        // console.log(j)
        var rect = bgRectA[i][j]
        rect.colorChange()
        var rgb = Math.round(rect.rgb)
        let coefficient = rgb/255
        let r =  Math.floor(rgb * (60 + 40 * rgb / 255) / 100 - 1124*Math.pow(1-coefficient,2))
        let g =  Math.floor(rgb * (80 + 20 * rgb / 255) / 100 + 532*Math.pow(1-coefficient,2))
        let b =  Math.floor(rgb - 3786*Math.pow(1-coefficient,2))
        // console.log('rgba(' + r + ',' + g + ',' + b + ',' + rect.alpha + ')')
        // console.log(1-coefficient)

        // ctx.font="30px Verdana";
        // ctx.fillStyle='red';
        // ctx.fillText(`${i},${j}`,rect.x - (2700 - width) / 2, rect.y - (1500 - height) / 2);

        // 200, 207, 214  //6
        // 181, 216, 150
        // 19,-9,64
        // ctx.fillStyle = 'rgba(' + Math.floor(rgb * (60 + 40 * rgb / 255) / 100) + ',' + Math.floor(rgb * (80 + 20 * rgb / 255) / 100) + ',' + rgb + ',' + rect.alpha + ')'
        ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + rect.alpha + ')'
        ctx.fillRect(rect.x - (2700 - width) / 2, rect.y - (1500 - height) / 2, rect.width, rect.height)
      }
    }
    // console.log(rect.alpha);
    requestId = window.requestAFrame(render)

    for (var i = 0; i < logoRectA.length; i++) {
      var rect = logoRectA[i]
      rotateX(rect, 0)
      rotateY(rect, rect.angleY * Math.PI / 180)
      doPerspective(rect)
      // var rgb = Math.round(rect.rgb);
      if (rect.visible) {
        ctx.fillStyle = 'rgba(54, 138, 55,' + rect.alpha + ')'
        ctx.fillRect(rect.x, rect.y, rect.width * rect.scale, rect.height * rect.scale)
        if (rect.isImage) {
          try {ctx.drawImage(image, Math.floor(rect._xpos + 50), Math.floor(rect._ypos + 50), 4, 4, Math.floor(rect.x), Math.floor(rect.y), Math.floor(rect.width * rect.scale), Math.floor(rect.height * rect.scale))}
          catch (e) {}

        }
        // drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
      }

    }
    // sortZ();

  }

  function _start () {
    requestId = window.requestAFrame(render)
  }

  function _stop () {
    if (requestId) window.cancelAFrame(requestId)
  }

  this.start = function () {
    _start()
  }

  // handle multiple browsers for requestAnimationFrame()
  window.requestAFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60) // shoot for 60 fps
      }
  })()

  // handle multiple browsers for cancelAnimationFrame()
  window.cancelAFrame = (function () {
    return window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id)
      }
  })()

  function rotateX (ball, angleX) {
    var cosX = Math.cos(angleX)
    var sinX = Math.sin(angleX)

    var y1 = ball._ypos * cosX - ball._zpos * sinX
    var z1 = ball._zpos * cosX + ball._ypos * sinX

    ball.ypos = y1
    ball.zpos = z1
  }

  function rotateY (ball, angleY) {
    var cosY = Math.cos(angleY)
    var sinY = Math.sin(angleY)

    var x1 = ball._xpos * cosY - ball._zpos * sinY
    var z1 = ball._zpos * cosY + ball._xpos * sinY

    ball.xpos = x1
    ball.zpos = z1
  }

  function doPerspective (ball) {
    if (ball.zpos > -fl) {
      var scale = fl / (fl + ball.zpos)
      ball.scale = scale
      ball.x = vpX + ball.xpos * scale
      ball.y = vpY + ball.ypos * scale
      ball.visible = true
    }
    else {
      ball.visible = false
    }
  }

  function sortZ () {
    logoRectA.sort(function (a, b) {
      return b.zpos - a.zpos
    })
  }

  function rectSprite (_x, _y, _width, _height) {
    this.scale = 1
    this.x = _x
    this.y = _y
    this.width = _width
    this.height = _height
    this.rgb = 245
    this.rgbStart = 245
    this.rgbMix = 199
    this.rgbMax = 199
    this.isShow = false
    this.isStop = true
    this.alpha = 1
    this.visible = true
    this.colorChange = function () {
      if (Math.random() > .99 && this.isStop) {
        this.isStop = false
        this.isShow = Math.random() > 0.5 ? true : false
      }
      else {
        if (this.isShow) this.rgb += 0.2
        else this.rgb -= 0.2
        if (this.rgb > this.rgbMax) this.isShow = false
        else if (this.rgb < this.rgbMix) this.isShow = true
        else if (this.rgb == this.rgbStart) this.isStop = true
      }

    }

    //3D用
    this.isImage = false
    this.angleY = 0
    this.angleX = 0
    this.xpos = 0
    this.ypos = 0
    this.zpos = 0
    this._xpos = 0
    this._ypos = 0
    this._zpos = 0
  }

  $(window).resize(function () {
    resize()
  })

  function resizeInit () {
    var cw = $(window).width()
    var ch = $(window).height()
    cw = Math.ceil(cw)
    ch = Math.ceil(ch)
    canvas.attr('width', cw)
    canvas.attr('height', ch)

    width = Math.ceil(cw)
    height = Math.ceil(ch)

    vpX = Math.ceil(width / 2)
    vpY = Math.ceil(height / 2)

    btn.css({'left': vpX - 50, 'top': vpY - 50})

    r = Math.max(cw, ch)
    r = Math.ceil(r / 100)
  }

  function resize () {

    resizeInit()

    for (var i = xIndexStart; i < xIndexEnd; i++) {
      for (var j = yIndexStart; j < yIndexEnd; j++) {
        var rect = bgRectA[i][j]
        var _r = Math.pow(Math.pow(i - xindexMid, 2) + Math.pow(j - yindexMid, 2), 0.5)
        var rgb = 255 - Math.floor(120 * Math.pow(_r / r, 2))
        rect.rgb = rgb
        rect.rgbStart = rgb
        rect.rgbMax = rgb + Math.floor(40 * Math.pow(_r / r, 2))
        rect.rgbMix = rgb - Math.floor(40 * Math.pow(_r / r, 2))
      }
    }
  }

// }catch(e){
//   return;
// }
}