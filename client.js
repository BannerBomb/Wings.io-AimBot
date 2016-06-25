(function(t, y$$1, q) {
  function Vb(b) {
	  	  setInterval(function() {
				window.planes = p.planes;  
	  }, 100);
    Wb = b;
    var e = 0;
    for (;5 >= e;e++) {
      var f = e;
      var d = p.planes[f][b][7];
      var a = y$$1.createElement("canvas");
      var c = a.getContext("2d");
      var g = p.frames.plane8;
      a.width = g.width;
      a.height = g.height;
      c.translate(g.width / 2, g.height / 2);
      g.draw(c);
      d.draw(c);
      d = a.toDataURL("image/png");
      a = void 0;
      c = y$$1.styleSheets.length;
      g = 0;
      for (;g < c;g++) {
        var h = y$$1.styleSheets[g];
        if (null == h.href) {
          a = h;
          break;
        }
      }
      if (a.addRule) {
        a.addRule(".btn-decal" + (f + 1) + ":before", "background-image: url(" + d + ")");
      } else {
        a.insertRule(".btn-decal" + (f + 1) + ":before{background-image: url(" + d + ")}", a.cssRules.length);
      }
    }
    e = 0;
    for (;5 >= e;e++) {
      q("#check" + e).hide();
    }
    q("#check" + b).show();
  }
  function Xb(b) {
    Yb = b;
    var e = 0;
    for (;5 >= e;e++) {
      q("#checkD" + e).hide();
    }
    q("#checkD" + b).show();
  }
  function Zb() {
    za = false;
    q("#beta").show();
    Ab();
  }
  function $b() {
    var b = -1 < navigator.userAgent.indexOf("Chrome");
    var e = -1 < navigator.userAgent.indexOf("Safari");
    if (b) {
      if (e) {
        e = false;
      }
    }
    return e;
  }
  function ac() {
    var b = "Low";
    if (xa) {
      b = "High";
    }
    var e = q("#graphicsID")[0];
    if (e) {
      e.childNodes[0].data = "Graphics: " + b;
    }
  }
  function bc() {
    q("#pfArrow").show();
    q("#pfText").show();
  }
  function cc() {
    q("#copycheckimage").hide();
    q("#copyLink").show();
    q("#copyLinkBox").hide();
    q("#overlay2").fadeIn(200);
    q("#pfArrow").hide();
    q("#pfText").hide();
    setTimeout(function() {
      q("#copycheckimage").fadeIn(300);
    }, 200);
    setTimeout(function() {
      q("#overlay2").fadeOut(200);
    }, 1E3);
    db = false;
  }
  function dc() {
    var b = "images/sound_off.png";
    if (1 == K) {
      $ = K = 0;
    } else {
      if (0 == K) {
        K = 1;
        $ = 0.05;
        b = "images/sound_on.png";
      }
    }
    t.localStorage.muteVol = K;
    q("#soundImg")[0].src = b;
  }
  function ec() {
    if (-1 == fc) {
      q("#mpu-top").show();
      var b = q("#ldr-top");
      if (b) {
        b.show();
      }
      refreshSlots();
    }
  }
  function Gc() {
    if (A) {
      window.A.disconnect();
    }
  }
  function Bb() {
    $ = 1 * K;
    q("#overlay").hide();
    R = false;
  }
  function gc() {
    if (za) {
      var b = Math.floor((N - Cb) / 1E3);
      if (0 > b) {
        b = 0;
      }
      var e = 10 - b;
      if (0 > e) {
        za = false;
        Ab();
      } else {
        b = q("#countdownText")[0];
        e = y$$1.createTextNode(e);
        b.replaceChild(e, b.firstChild);
        setTimeout(gc, 500);
      }
    }
  }
  function Hc() {
    if (0 < hc) {
      q("#continueTop").show();
      q("#continueBR").show();
      q("#continue").show();
      q("#nickInput").hide();
      q("#skinPanel").hide();
      q("#howto").hide();
      za = true;
      Cb = +new Date;
      gc();
    }
    q("#overlay").fadeIn(500);
    $ = 0.05 * K;
    G.clearBonusDisplay();
  }
  function Db(b) {
    ec();
    R = true;
    if (!W) {
      ma = 1;
      u = null;
    }
    bc();
    if (0 <= b) {
      za = true;
      q("#beta").hide();
      var e = q("#curScore")[0];
      var f;
      f = v.isInstagib() ? y$$1.createTextNode("Kills: " + b) : y$$1.createTextNode("Current Score: " + b);
      e.replaceChild(f, e.firstChild);
    }
    hc = b;
    setTimeout(Hc, 1E3);
  }
  function Ab() {
    q("#continueTop").hide();
    q("#continueBR").hide();
    q("#continue").hide();
    q("#nickInput").show();
    q("#skinPanel").hide();
    q("#howto").show();
    q("#beta").show();
    Cb = +new Date;
  }
  function Sa() {
    Eb = Object.keys(D).length;
    y$$1.title = "Wings!";
  }
  function ic() {
    ua = true;
    q("#firstRightBox").hide();
    q("#afterRightBox").show();
  }
  function Fb() {
    try {
      return t.self !== t.top;
    } catch (b) {
      return true;
    }
  }
  function Ta(b) {
    var e = "";
    if (10 > b) {
      e = "0";
    }
    return e + parseInt(b);
  }
  function jc(b) {
    var e = parseInt(b / 1E3);
    b = parseInt(e / 60);
    e = e - 60 * b;
    var f = parseInt(b / 60);
    b -= 60 * f;
    return 0 == f ? Ta(b) + ":" + Ta(e) : Ta(f) + ":" + Ta(b) + ":" + Ta(e);
  }
  function ra(b, e, f, d) {
    return Math.sqrt((f - b) * (f - b) + (d - e) * (d - e));
  }
  function ia() {
    return 50 > +new Date - N;
  }
  function X(b, e, f) {
    var d = E.getBounds();
    return b + f >= d[0].x && (b - f <= d[1].x && (e + f >= d[0].y && e - f <= d[1].y)) ? true : false;
  }
  function aa(b, e, f) {
    return b < e ? e : b > f ? f : b;
  }
  function Ba(b, e, f, d) {
    if (b) {
      this._size = b;
    }
    if (e) {
      this._color = e;
    }
    this._stroke = !!f;
    if (d) {
      this._strokeColor = d;
    }
  }
  function Y(b, e, f) {
    if (b) {
      this._size = b;
    }
    if (e) {
      this._color = e;
    }
    if (f) {
      this._secondColor = f;
    }
  }
  function ea(b) {
    if ("" == b) {
      b = "<Unnamed>";
    }
    return b;
  }
  function Ca(b, e, f, d, a, c) {
    c /= 2;
    b.beginPath();
    b.moveTo(e, f + c);
    b.lineTo(e, f + a - c);
    b.quadraticCurveTo(e, f + a, e + c, f + a);
    b.lineTo(e + d - c, f + a);
    b.quadraticCurveTo(e + d, f + a, e + d, f + a - c);
    b.lineTo(e + d, f + c);
    b.quadraticCurveTo(e + d, f, e + d - c, f);
    b.lineTo(e + c, f);
    b.quadraticCurveTo(e, f, e, f + c);
    b.closePath();
    b.fill();
  }
  function kc(b, e, f, d, a, c) {
    c /= 2;
    b.beginPath();
    b.moveTo(e, f + c);
    b.lineTo(e, f + a);
    b.lineTo(e + d, f + a);
    b.lineTo(e + d, f + c);
    b.quadraticCurveTo(e + d, f, e + d - c, f);
    b.lineTo(e + c, f);
    b.quadraticCurveTo(e, f, e, f + c);
    b.closePath();
    b.fill();
  }
  function eb(b, e, f) {
    var d = b * Math.cos(f) - e * Math.sin(f);
    b = e * Math.cos(f) + b * Math.sin(f);
    return{
      x : d,
      y : b
    };
  }
  var Tb;
  var Ub;
  t.location.href.split("/");
  var fb = "https:" == t.location.protocol;
  var fc = t.location.search.indexOf("secure");
  var lc = t.location.pathname.indexOf("mobile");
  if (fb) {
    if (-1 == fc) {
     // t.location.href = "http://wings.io/";
    }
  }
  var Gb = 1E3 / 30 * 3;
  var Ic = [{
    r : 255,
    g : 0,
    b : 0
  }, {
    r : 255,
    g : 119,
    b : 0
  }, {
    r : 255,
    g : 202,
    b : 0
  }, {
    r : 174,
    g : 231,
    b : 24
  }, {
    r : 0,
    g : 119,
    b : 255
  }, {
    r : 236,
    g : 19,
    b : 213
  }];
  var fa = 2;
  var gb = 0;
  var hb = 0;
  var ja = 0;
  var U;
  var mc = 0;
  var nc = 0;
  var H;
  var da = {};
  var Ua;
  var ib;
  var Hb = 1;
  var W = false;
  var sa = true;
  var Ib = false;
  var N = 0;
  var Jb = 0;
  var B = 1600;
  var Kb = B / 2 - 100;
  var S = 5E3;
  var ma = 1;
  var R = true;
  var Eb = 0;
  var Va = 0;
  var Lb = false;
  var jb = 1;
  var Wb = 0;
  var Yb = 0;
  var na = 0;
  var oc = 0;
  var za = false;
  var Cb;
  var hc = 0;
  var $ = 1;
  var K = t.localStorage.muteVol;
  var pc = 3;
  var qc = 750;
  var rc = 5;
  var sc = 10;
  var tc = 20;
  var uc = 150;
  var w$$1 = 1;
  var kb = 0;
  var vc = 0;
  var wc = 0.3;
  var Ha = false;
  var Ia = null;
  var xa = true;
  var lb;
  var ga;
  var ka;
  var mb;
  var ua = false;
  if (lc) {
    ua = true;
  }
  var nb = true;
  var Ja = true;
  var ob = true;
  var pb = true;
  var qb = true;
  var Wa = true;
  var rb = true;
  var sb = true;
  var Mb = true;
  var M;
  var T;
  var p;
  var A;
  var I = {};
  var D = {};
  var Q = {};
  var Z = {};
  var ha = [];
  var u;
  var oa;
  var Nb;
  var Ka = 0;
  var E;
  var G;
  var la;
  var ta;
  var J;
  var Xa = {};
  var tb = 0;
  var v;
  var pa;
  var Ya = {};
  var db = false;
  (function() {
    var b = t.location.search;
    if ("?" == b.charAt(0)) {
      b = b.slice(1);
    }
    b = b.split("&");
    var e = 0;
    for (;e < b.length;e++) {
      var f = b[e].split("=");
      Ya[f[0]] = f[1];
    }
  })();
  if ("true" == t.localStorage.lq || 1 == lc) {
    xa = false;
  }
  var ub = null;
  var xc = function() {
    var b$$0 = "";
    if (fb) {
      b$$0 = "s";
    }
    q.get("http" + b$$0 + "://ip2l.wings.io/cc", function(b) {
      ub = b.substring(0, 2);
      t.localStorage.wingsCC = ub;
      t.localStorage.wingsCCTime = +new Date;
    }, "text");
  };
  if (void 0 == t.localStorage.wingsCCTime || void 0 != t.localStorage.wingsCC && 2 != t.localStorage.wingsCC.length) {
    xc();
  } else {
    if (288E5 < +new Date - t.localStorage.wingsCCTime) {
      xc();
    } else {
      ub = t.localStorage.wingsCC;
    }
  }
  var Ob = function() {
    N = +new Date;
    var b = 0;
    if (0 < Jb) {
      b = N - Jb;
    }
    Jb = N;
    M.update(b);
    M.draw(b);
    t.requestAnimationFrame(Ob);
    if (Ib) {
      Ib = false;
    }
  };
  y$$1.body.onselectstart = function() {
    return false;
  };
  t.switchSkins = function() {
    Zb();
    if (Lb) {
      q("#howto").show();
      q("#skinPanel").hide();
    } else {
      q("#howto").hide();
      q("#skinPanel").show();
    }
    Lb = !Lb;
  };
  t.setSkinColor = function(b) {
    Vb(b);
  };
  t.setDecal = function(b) {
    Xb(b);
  };
  t.clickPlay = function(b) {
    if (W) {
      Bb();
    } else {
      y$$1.getElementsByTagName("canvas")[0].style.cursor = "url(images/crosshair.png) 16 16, auto";
      kb++;
      U.mouseMoved = false;
      window.A.sendNick(b, za);
      if (za) {
        Ab();
        za = false;
      }
      if (v.isSpaceWars()) {
        G.showTip("Hint: Earn points faster by destroying asteroids.");
      } else {
        if (!y$$1.fullscreenElement) {
          if (!y$$1.mozFullScreenElement) {
            if (!y$$1.webkitFullscreenElement) {
              if (!y$$1.msFullscreenElement) {
                if (!(2 != kb && (4 != kb && 6 != kb))) {
                  G.showTip("Press 'F' to toggle Fullscreen");
                }
              }
            }
          }
        }
      }
    }
  };
  t.setSpectate = function(b) {
    ic();
    y$$1.getElementsByTagName("canvas")[0].style.cursor = "default";
    Bb();
    vc++;
    Zb();
    if (W) {
      window.A.leave();
      W = false;
      M.waitUntilNextFollow();
    } else {
      M.followTopPlayer();
    }
    ma = 0;
    if (vc % 2 || 1 >= Eb) {
      G.showTip("Press 'ESC' to go back");
    } else {
      G.showTip("Click to follow next player");
    }
  };
  t.setContinue = function() {
    q("#topGui").show();
    q("#roomFailed").hide();
    if (!Fb()) {
      
    }
    window.A.getServerAndConnect();
  };
  t.toggleGraphics = function() {
    xa = !xa;
    M.resize();
    t.localStorage.lq = !xa;
    ac();
  };
  t.copyRoomLink = function() {
    q("#copyLink").hide();
    q("#copyLinkBox").show();
    var b = q("#roomlinkInput")[0];
    b.value = "http://wings.io/#" + window.A.roomID;
    db = true;
    if ($b()) {
      q("#copyButton")[0].childNodes[0].data = "Close";
      q("#safariTooltip").show();
    }
    setTimeout(function() {
      b.setSelectionRange(0, b.value.length);
      b.select();
      b.focus();
    }, 100);
  };
  t.setCopy = function() {
    var b = q("#roomlinkInput")[0];
    b.value = "http://wings.io/#" + window.A.roomID;
    b.setSelectionRange(0, b.value.length);
    b.select();
    b.focus();
    if ($b()) {
      q("#copyLinkBox").hide();
      q("#copyLink").show();
      db = false;
    } else {
      try {
        y$$1.execCommand("copy");
      } catch (e) {
      }
      cc();
    }
  };
  t.toggleMute = function() {
    dc();
  };
  if (void 0 == K) {
    K = 1;
  }
  var La = t.navigator.userAgent;
  var yc = -1 < La.indexOf("MSIE ") || -1 < La.indexOf("Trident/");
  if (-1 != La.indexOf("Android") || (-1 != La.indexOf("iPhone") || (-1 != La.indexOf("iPad") || -1 != La.indexOf("iPod")))) {
    //t.location.href = "http://wings.io/m";
  }
  if (0 == K || yc) {
    K = 1;
    dc();
  }
  if (yc) {
    q("#sndIcon").hide();
  }
  var vb;
  t.onblur = function() {
    vb = setTimeout(Gc, 3E5);
    sa = false;
    $ = 0;
    if (J) {
      J.sound.volume(0);
      J.sound.volume(0, lb);
      J.sound.volume(0, ga);
      J.sound.volume(0, ka);
      if (mb) {
        J.sound.volume(0, mb);
      }
    }
  };
  t.onfocus = function() {
    if (vb) {
      clearTimeout(vb);
      vb = null;
    }
    Ib = sa = true;
    $ = 1 * K;
    var b;
    for (b in D) {
      D[b].clearTrail();
    }
  };
  y$$1.oncontextmenu = function() {
    return false;
  };
  var Jc = function() {
    this.eventType = {
      EVENT_NONE : 0,
      EVENT_WAITING : 1,
      EVENT_WARSHIP : 2,
      EVENT_INSTAGIB : 3,
      EVENT_GLADIATOR : 4,
      EVENT_SPACEWARS : 5
    };
    this.type = this.eventType.EVENT_NONE;
    this.endTime = 0;
    this.waiting = this.machinegunSwitch = this.railSwitch = false;
    this.warshipsLeft = 3;
    this.warshipsEscaped = this.warshipsDestroyed = 0;
    this.setType = function(b) {
      this.type = b;
      if (this.isSpaceWars()) {
        q("#pfText").css({
          "-webkit-filter" : "brightness(100%)"
        });
        q("#pfArrow").css({
          "-webkit-filter" : "brightness(100%)"
        });
      } else {
        q("#pfText").css({
          "-webkit-filter" : "brightness(0%)"
        });
        q("#pfArrow").css({
          "-webkit-filter" : "brightness(0%)"
        });
      }
      if (this.isWarship()) {
        this.warshipsLeft = 3;
        this.warshipsEscaped = this.warshipsDestroyed = 0;
      }
    };
    this.isInEvent = function() {
      return this.type != this.eventType.EVENT_NONE && 0 == this.waiting;
    };
    this.isInstagib = function() {
      return this.type == this.eventType.EVENT_INSTAGIB && 0 == this.waiting;
    };
    this.isSpaceWars = function() {
      return this.type == this.eventType.EVENT_SPACEWARS && 0 == this.waiting;
    };
    this.isWarship = function() {
      return this.type == this.eventType.EVENT_WARSHIP && 0 == this.waiting;
    };
    this.getEventName = function() {
      return this.type == this.eventType.EVENT_INSTAGIB ? "SUDDEN DEATH" : this.type == this.eventType.EVENT_SPACEWARS ? "SPACE WARS" : this.type == this.eventType.EVENT_WARSHIP ? "WARSHIP ATTACK" : "NEW EVENT";
    };
    this.getEventColor = function() {
      return this.type == this.eventType.EVENT_SPACEWARS ? "#FF3300" : "#fe6800";
    };
    this.setWarshipInfo = function(b, e, f) {
      this.warshipsLeft = b;
      this.warshipsDestroyed = e;
      this.warshipsEscaped = f;
    };
  };
  Ba.prototype = {
    _value : "",
    _color : "#000000",
    _stroke : false,
    _strokeColor : "#000000",
    _strokeWidth : 3,
    _size : 16,
    _canvas : null,
    _ctx : null,
    _dirty : false,
    _scale : 1,
    _font : "px 'proxima-nova-1','proxima-nova-2', Arial Black",
    _usingRoundedFrame : false,
    _hmargin : 3,
    _vmargin : -1,
    _frameOpacity : 0.2,
    setFont : function(b) {
      if (this._font != b) {
        this._font = b;
        this._dirty = true;
      }
    },
    setSize : function(b) {
      if (this._size != b) {
        this._size = b;
        this._dirty = true;
      }
    },
    setScale : function(b) {
      if (this._scale != b) {
        this._scale = b;
        this._dirty = true;
      }
    },
    setColor : function(b) {
      if (this._color != b) {
        this._color = b;
        this._dirty = true;
      }
    },
    setStroke : function(b) {
      if (this._stroke != b) {
        this._stroke = b;
        this._dirty = true;
      }
    },
    setStrokeWidth : function(b) {
      if (this._stroke != b) {
        this._strokeWidth = b;
        this._dirty = true;
      }
    },
    setStrokeColor : function(b) {
      if (this._strokeColor != b) {
        this._strokeColor = b;
        this._dirty = true;
      }
    },
    setValue : function(b) {
      if (b != this._value) {
        this._value = b;
        this._dirty = true;
      }
    },
    setHMargin : function(b) {
      if (b != this._hmargin) {
        this._hmargin = b;
        this._dirty = true;
      }
    },
    setVMargin : function(b) {
      if (b != this._vmargin) {
        this._vmargin = b;
        this._dirty = true;
      }
    },
    setUsingRoundedFrame : function(b) {
      if (b != this._usingRoundedFrame) {
        this._usingRoundedFrame = b;
        this._dirty = true;
      }
    },
    setRoundedFrameOpacity : function(b) {
      if (b != this._frameOpacity) {
        this._frameOpacity = b;
        this._dirty = true;
      }
    },
    render : function() {
      if (null == this._canvas) {
        this._canvas = y$$1.createElement("canvas");
        this._ctx = this._canvas.getContext("2d");
      }
      if (this._dirty) {
        this._dirty = false;
        var b = this._canvas;
        var e = this._ctx;
        var f = this._value;
        var d = this._scale;
        var a = this._size;
        var c = "Bold " + a + this._font;
        e.font = c;
        var g = e.measureText(f).width;
        var h = this._hmargin;
        var r = 2;
        if (-1 < this._vmargin) {
          r = this._vmargin;
        }
        var n = 0;
        if (this._stroke) {
          n = this._strokeWidth;
        }
        b.width = (g + 2 * h + n) * d;
        b.height = (a + 2 * r + n) * d;
        e.font = c;
        e.scale(d, d);
        e.globalAlpha = 1;
        e.lineJoin = "round";
        e.lineWidth = this._strokeWidth;
        e.strokeStyle = this._strokeColor;
        if (this._usingRoundedFrame) {
          e.fillStyle = "#000000";
          e.globalAlpha = this._frameOpacity;
          Ca(e, 0, 0, b.width, b.height, 10);
          e.globalAlpha = 1;
        }
        e.fillStyle = this._color;
        if (this._stroke) {
          e.strokeText(f, h + 2, a + r / 2);
        }
        e.fillText(f, h + 2, a + r / 2);
      }
      return this._canvas;
    }
  };
  Y.prototype = {
    _value : "",
    _color : "#000000",
    _secondColor : "#FFFFFF",
    _size : 16,
    _canvas : null,
    _ctx : null,
    _dirty : false,
    _scale : 1,
    _font : "px 'proxima-nova-1','proxima-nova-2', Arial Black",
    _extrude : 3,
    _usingFrame : false,
    _usingRoundedFrame : false,
    _angX : 0,
    _angY : 0,
    _d : 5,
    _addTop : 0,
    setAddTop : function(b) {
      if (b != this._addTop) {
        this._addTop = b;
        this._dirty = true;
      }
    },
    setFont : function(b) {
      if (this._font != b) {
        this._font = b;
        this._dirty = true;
      }
    },
    setSize : function(b) {
      if (this._size != b) {
        this._size = b;
        this._dirty = true;
      }
    },
    setScale : function(b) {
      if (this._scale != b) {
        this._scale = b;
        this._dirty = true;
      }
    },
    setColor : function(b) {
      if (this._color != b) {
        this._color = b;
        this._dirty = true;
      }
    },
    setSecondColor : function(b) {
      if (this._secondColor != b) {
        this._secondColor = b;
        this._dirty = true;
      }
    },
    setValue : function(b) {
      if (b != this._value) {
        this._value = b;
        this._dirty = true;
      }
    },
    setUsingRoundedFrame : function(b) {
      if (b != this.__usingRoundedFrame) {
        this._usingRoundedFrame = b;
        this._dirty = true;
      }
    },
    setUsingFrame : function(b) {
      if (b != this._usingFrame) {
        this._usingFrame = b;
        this._dirty = true;
      }
    },
    calcAngVector : function(b) {
      this._angX = Math.sin(b) * this._d;
      this._angY = Math.cos(b) * this._d;
    },
    render : function() {
      if (null == this._canvas) {
        this._canvas = y$$1.createElement("canvas");
        this._ctx = this._canvas.getContext("2d");
      }
      if (this._dirty) {
        this._dirty = false;
        var b = this._canvas;
        var e = this._ctx;
        var f = this._value;
        var d = this._scale;
        var a = this._size;
        var c = "Bold " + a + this._font;
        e.font = c;
        var g = e.measureText(f).width;
        var h = ~~(0.2 * a);
        b.width = (g + 6 + 10 + 2 * this._d) * d;
        b.height = (a + h + this._extrude + 2 * this._d + this._addTop) * d;
        e.font = c;
        e.scale(d, d);
        if (this._usingFrame) {
          e.globalAlpha = 1;
          e.fillStyle = "#000000";
          e.moveTo(this._angX, this._angY + 15 * w$$1);
          e.lineTo(b.width + this._angX - 4 * w$$1, this._angY + 7 * w$$1);
          e.lineTo(b.width + this._angX - 15 * w$$1, b.height + this._angY - 9 * w$$1);
          e.lineTo(this._angX + 5 * w$$1, b.height + this._angY - 17 * w$$1);
          e.fill();
        }
        if (this._usingRoundedFrame) {
          e.globalAlpha = 0.3;
          Ca(e, 0, 0, b.width, b.height, 40);
          e.globalAlpha = 1;
        }
        b = this._extrude;
        for (;0 <= b;b--) {
          d = b;
          e.fillStyle = 0 == b ? this._color : this._secondColor;
          e.fillText(f, 8 + this._d, a - h / 2 + d + this._d + this._addTop);
        }
      }
      return this._canvas;
    }
  };
  Kc = function() {
    this.loaded = false;
    this.onLoad = null;
    this.spriteSheetLoaded = false;
    this.gameSheet;
    this.frames = {};
    this.whitePlaneImages = {};
    this.planeFrames;
    this.planeFramesReflex;
    this.planes = [];
    this.doubleKillCanvas;
    this.tripleKillCanvas;
    this.quadKillCanvas;
    this.multiKillCanvas;
    this.warshipImage;
    this.whiteWarshipImage;
    this.cannonImage;
    this.warshipIcon;
    this.warshipLoaded = false;
    this.warshipTextureLoadCount = 0;
    this.asteroidLoaded = false;
    this.asteroidImage;
    this.whiteAsteroidImage;
    this.blinkImage;
    this.loadGameSpritesheet = function() {
      this.gameSheet = new Image;
      this.gameSheet.src = "images/sheet.png";
      this.gameSheet.onload = function() {
        p.loadGameSpritesheetFrames();
        p.spriteSheetLoaded = true;
        p.loadAnimations();
        p.generateHudIcons();
        p.loaded = true;
        p.onLoad();
      };
    };
    this.loadGameSpritesheetFrames = function() {
      var b = gameSheetInfo.length;
      var e = 0;
      for (;e < b;e++) {
        var f = gameSheetInfo[e];
        var d = new wb;
        d.setFrameInfo(f, this.gameSheet);
        this.frames[f[0]] = d;
      }
      e = 1;
      for (;8 >= e;e++) {
        b = this.frames["plane" + e].renderTintedFrame("#FFFFFF").canvas;
        this.whitePlaneImages["plane" + e] = b;
      }
      e = 0;
      for (;5 >= e;e++) {
        this.planes[e] = [];
      }
      this.loadPlaneImages();
      e = 0;
      for (;5 >= e;e++) {
        this.loadPlaneDecal(0, e);
        this.loadPlaneDecal(1, e);
        this.loadPlaneDecal(2, e);
        this.loadPlaneDecal(3, e);
        this.loadPlaneDecal(4, e);
        this.loadPlaneDecal(5, e);
      }
    };
    this.loadPlaneImages = function(b, e) {
      var f = [];
      var d = [];
      var a = 1;
      for (;8 >= a;a++) {
        var c = this.frames["plane" + a];
        f.push(c);
        d.push(c.renderTintedFrame("rgba(0,100,255,1.0)"));
      }
      this.planeFrames = f;
      this.planeFramesReflex = d;
    };
    this.loadPlaneDecal = function(b, e) {
      var f = Ic[e];
      var d = [];
      var a = 1;
      for (;8 >= a;a++) {
        var c = this.frames["decal" + b + "_" + a];
        c.generateRGBKs();
        c = c.generateTintImage2(f.r, f.g, f.b, 1);
        d.push(c);
      }
      this.planes[b][e] = d;
    };
    this.loadAnimations = function() {
      var b = new Pb;
      var e = new Pb;
      var f = 0;
      for (;13 > f;f++) {
        b.addFrame(this.frames["s" + f]);
        e.addFrame(this.frames["s" + f].renderTintedFrame("#2b9bf5"));
      }
      b.setInterval(1E3 / 30);
      T.addAnimationInfo("splash", b);
      e.setInterval(1E3 / 30);
      T.addAnimationInfo("splashReflex", e);
      b = new Pb;
      b.addFrame(this.frames.e0);
      b.addFrame(this.frames.e0);
      b.addFrame(this.frames.e2);
      b.addFrame(this.frames.e3);
      b.addFrame(this.frames.e4);
      b.addFrame(this.frames.e5);
      b.addFrame(this.frames.e5);
      b.addFrame(this.frames.e7);
      b.addFrame(this.frames.e7);
      b.addFrame(this.frames.e9);
      b.addFrame(this.frames.e10);
      b.addFrame(this.frames.e11);
      b.addFrame(this.frames.e11);
      b.addFrame(this.frames.e13);
      b.addFrame(this.frames.e14);
      b.addFrame(this.frames.e15);
      b.addFrame(this.frames.e16);
      b.addFrame(this.frames.e17);
      b.addFrame(this.frames.e18);
      b.addFrame(this.frames.e19);
      b.addFrame(this.frames.e20);
      b.addFrame(this.frames.e21);
      b.addFrame(this.frames.e22);
      b.setInterval(1E3 / 30);
      T.addAnimationInfo("explosion", b);
    };
    this.generateTintedKillIcon = function(b, e, f, d) {
      var a;
      a = p.frames.iconkill;
      frameIconR = p.frames.killR;
      var c = a.generateRGBKs();
      f = a.generateTintImage(c, b, e, f);
      b = y$$1.createElement("canvas");
      b.width = f.width;
      b.height = f.height;
      e = b.getContext("2d");
      e.drawImage(f.canvas, 0, 0);
      d = frameIconR.renderTintedFrame(d);
      d.x = a.width / 2;
      d.y = a.height / 2;
      d.draw(e);
      return b;
    };
    this.generateHudIcons = function() {
      var b = 30;
      var e = 0;
      e = this.generateTintedKillIcon(205, 154, 109, "#FFFFFF");
      var f = this.generateTintedKillIcon(172, 121, 76, "#BBBBBB");
      var d = y$$1.createElement("canvas");
      d.width = e.width;
      d.height = e.height + b;
      var a = d.getContext("2d");
      e = e.getContext("2d");
      f = f.getContext("2d");
      a.drawImage(f.canvas, 0, 0);
      a.drawImage(e.canvas, 0, b);
      this.doubleKillCanvas = d;
      b = 10;
      e = 70;
      d = 0.9;
      var c = this.generateTintedKillIcon(167, 176, 185, "#FFFFFF");
      f = this.generateTintedKillIcon(129, 138, 148, "#BBBBBB");
      var g = y$$1.createElement("canvas");
      g.width = c.width + e;
      g.height = c.height + b;
      var h = g.getContext("2d");
      e = c.getContext("2d");
      f = f.getContext("2d");
      a = g.width / 2 - c.width / 2 * d;
      h.save();
      h.translate(a, 0);
      h.scale(d, d);
      h.drawImage(f.canvas, -30, 0);
      h.drawImage(f.canvas, 30, 0);
      h.restore();
      a = g.width / 2 - c.width / 2;
      h.drawImage(e.canvas, a, b);
      this.tripleKillCanvas = g;
      shift2Y = 20;
      shift2X = 160;
      d = 0.95;
      c = this.generateTintedKillIcon(240, 164, 0, "#FFFFFF");
      f = this.generateTintedKillIcon(200, 124, 0, "#ddaf63");
      b = this.generateTintedKillIcon(158, 98, 0, "#b25c5c");
      g = y$$1.createElement("canvas");
      g.width = c.width + shift2X;
      g.height = c.height + 1.5 * shift2Y;
      a = g.width / 2 - c.width / 2 * d;
      h = g.getContext("2d");
      e = c.getContext("2d");
      f = f.getContext("2d");
      b = b.getContext("2d");
      h.save();
      h.translate(a, 0);
      h.scale(d, d);
      h.drawImage(b.canvas, 0, 0);
      h.restore();
      a = g.width / 2 - c.width / 2 * d;
      h.save();
      h.translate(a, 0);
      h.scale(d, d);
      h.drawImage(f.canvas, -35, 15);
      h.drawImage(f.canvas, 35, 15);
      h.restore();
      a = g.width / 2 - c.width / 2;
      h.drawImage(e.canvas, a, 1.5 * shift2Y);
      this.quadKillCanvas = g;
      c = this.generateTintedKillIcon(222, 0, 0, "#FFFFFF");
      f = this.generateTintedKillIcon(172, 0, 0, "#d68080");
      b = this.generateTintedKillIcon(133, 0, 0, "#b25c5c");
      g = y$$1.createElement("canvas");
      g.width = c.width + shift2X;
      g.height = c.height + 1.5 * shift2Y;
      a = g.width / 2 - c.width / 2 * 0.65;
      h = g.getContext("2d");
      e = c.getContext("2d");
      f = f.getContext("2d");
      b = b.getContext("2d");
      h.save();
      h.translate(a, 0);
      h.scale(0.65, 0.65);
      h.drawImage(b.canvas, -105, 10);
      h.drawImage(b.canvas, 105, 10);
      h.drawImage(b.canvas, -40, 10);
      h.drawImage(b.canvas, 40, 10);
      h.drawImage(b.canvas, 0, shift2Y);
      h.restore();
      a = g.width / 2 - c.width / 2 * d;
      h.save();
      h.translate(a, 0);
      h.scale(d, d);
      h.drawImage(f.canvas, -35, shift2Y);
      h.drawImage(f.canvas, 35, shift2Y);
      h.restore();
      a = g.width / 2 - c.width / 2;
      h.drawImage(e.canvas, a, 1.5 * shift2Y);
      this.multiKillCanvas = g;
    };
    this.load = function(b) {
      this.onLoad = b;
      this.loadGameSpritesheet();
    };
    this.loadTintImage = function(b, e, f) {
      var d = y$$1.createElement("canvas");
      var a = d.getContext("2d");
      var c = b.width;
      var g = b.height;
      d.width = c;
      d.height = g;
      var h = y$$1.createElement("canvas");
      h.width = c;
      h.height = g;
      c = h.getContext("2d");
      c.fillStyle = f;
      c.fillRect(0, 0, h.width, h.height);
      c.globalCompositeOperation = "destination-atop";
      c.drawImage(b, 0, 0);
      a.globalAlpha = 1;
      a.drawImage(h, 0, 0);
      e(d);
    };
    this.verifyWarshipLoaded = function() {
      if (3 == this.warshipTextureLoadCount) {
        this.warshipLoaded = true;
      }
    };
    this.loadWarshipEvent = function() {
      if (!this.warshipLoaded) {
        this.warshipImage = new Image;
        this.warshipImage.src = "images/events/battleship.png";
        this.warshipImage.onload = function() {
          p.warshipLoaded = true;
          p.loadTintImage(p.warshipImage, function(b) {
            p.whiteWarshipImage = b;
            p.warshipTextureLoadCount++;
            p.verifyWarshipLoaded();
          }, "#FFFFFF");
        };
        this.cannonImage = new Image;
        this.cannonImage.src = "images/events/shipcannon.png";
        this.cannonImage.onload = function() {
          p.warshipTextureLoadCount++;
          p.verifyWarshipLoaded();
        };
        this.warshipIcon = new Image;
        this.warshipIcon.src = "images/events/warshipIcon.png";
        this.warshipIcon.onload = function() {
          p.warshipTextureLoadCount++;
          p.verifyWarshipLoaded();
        };
      }
    };
    this.loadAsteroidEvent = function() {
      if (!this.asteroidLoaded) {
        this.asteroidImage = new Image;
        this.asteroidImage.src = "images/events/asteroid.png";
        this.asteroidImage.onload = function() {
          p.asteroidLoaded = true;
          p.loadTintImage(p.asteroidImage, function(b) {
            p.whiteAsteroidImage = b;
          }, "#FF3333");
        };
        this.blinkImage = new Image;
        this.blinkImage.src = "images/events/blink.png";
      }
    };
  };
  var Lc = function() {
    var b = this;
    var e = false;
    var f = 0;
    var d = 0;
    this.angle = Math.PI;
    this.throttle = 0;
    this.rotationValue = 0.1;
    this.varAngle = 0;
    this.mouseMoved = false;
    b.keydown = function(a) {
      if (67 == a.keyCode && (R && db)) {
        setTimeout(function() {
          cc();
        }, 10);
      } else {
        if (!R) {
          if (32 == a.keyCode) {
            if (W) {
              window.A.sendShooting(true);
            }
          } else {
            if (188 != a.keyCode) {
              if (49 != a.keyCode) {
                if (222 == a.keyCode) {
                  Mb = !Mb;
                } else {
                  if (51 == a.keyCode) {
                    sb = !sb;
                    console.log("Toggled Gradient to " + sb);
                  } else {
                    if (52 == a.keyCode) {
                      nb = !nb;
                      console.log("Toggled drawClouds to " + nb);
                    } else {
                      if (53 == a.keyCode) {
                        Ja = !Ja;
                        console.log("Toggled drawWater to " + Ja);
                      } else {
                        if (54 == a.keyCode) {
                          ob = !ob;
                          console.log("Toggled drawExplosions to " + ob);
                        } else {
                          if (55 == a.keyCode) {
                            pb = !pb;
                            console.log("Toggled drawSun to " + pb);
                          } else {
                            if (56 == a.keyCode) {
                              qb = !qb;
                              console.log("Toggled drawItems to " + qb);
                            } else {
                              if (57 == a.keyCode) {
                                Wa = !Wa;
                                console.log("Toggled drawTrails to " + Wa);
                              } else {
                                if (48 == a.keyCode) {
                                  rb = !rb;
                                  console.log("Toggled drawSplashes to " + rb);
                                } else {
                                  if (27 == a.keyCode) {
                                    ec();
                                    $ = 0.05 * K;
                                    q("#overlay").show();
                                    bc();
                                    R = true;
                                    if (!W) {
                                      ma = 1;
                                      u = null;
                                    }
                                  } else {
                                    if (70 == a.keyCode) {
                                      if (y$$1.fullscreenElement || (y$$1.mozFullScreenElement || (y$$1.webkitFullscreenElement || y$$1.msFullscreenElement))) {
                                        if (y$$1.exitFullscreen) {
                                          y$$1.exitFullscreen();
                                        } else {
                                          if (y$$1.msExitFullscreen) {
                                            y$$1.msExitFullscreen();
                                          } else {
                                            if (y$$1.mozCancelFullScreen) {
                                              y$$1.mozCancelFullScreen();
                                            } else {
                                              if (y$$1.webkitExitFullscreen) {
                                                y$$1.webkitExitFullscreen();
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        if (y$$1.documentElement.requestFullscreen) {
                                          y$$1.documentElement.requestFullscreen();
                                        } else {
                                          if (y$$1.documentElement.msRequestFullscreen) {
                                            y$$1.documentElement.msRequestFullscreen();
                                          } else {
                                            if (y$$1.documentElement.mozRequestFullScreen) {
                                              y$$1.documentElement.mozRequestFullScreen();
                                            } else {
                                              if (y$$1.documentElement.webkitRequestFullscreen) {
                                                y$$1.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                                              }
                                            }
                                          }
                                        }
                                      }
                                      G.clearTip();
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    b.keyup = function(a) {
      if (!R) {
        if (!(32 != a.keyCode)) {
          if (W) {
          //  A.sendShooting(false);
          } else {
            if (1 == ma) {
              ma = 0;
              M.followTopPlayer();
            } else {
              ma = 1;
              u = null;
            }
            if (v.isSpaceWars()) {
              setTimeout(M.respawnParticles, 500);
            }
          }
        }
      }
    };
    b.mousedown = function(a) {
      if (!R) {
        if (W) {
          if (0 == a.button) {
            window.A.sendShooting(true);
          }
        } else {
          if (0 == ma) {
            if (0 == a.button) {
              M.PlayerFollowing(true);
            } else {
              if (2 == a.button) {
                M.PlayerFollowing(false);
              }
            }
          } else {
            e = true;
            f = a.clientX;
            d = a.clientY;
          }
        }
      }
    };
    b.mouseup = function(a) {
      if (!R) {
        if (W) {
          if (0 == a.button) {
          //  A.sendShooting(false);
          }
        } else {
          e = false;
        }
      }
    };
    b.mousemove = function(a) {
      if (!R && (b.mouseMoved = true, mc = a.clientX, nc = a.clientY, e)) {
        var c = a.clientY - d;
        var g = E.x;
        var h = E.y;
        g = g - (a.clientX - f);
        h = h - c;
        if (h < -B / 2) {
          h = -B / 2;
        } else {
          if (h > B / 2) {
            h = B / 2;
          }
        }
        if (g < -S) {
          g = -S;
        } else {
          if (g > S) {
            g = S;
          }
        }
        E.setPosition(window.x, window.y);
       // f = a.clientX;
       // d = a.clientY;
	   f = window.x;
	   d = window.y;
      }
	  window.A.sendShooting(true);
    };
    this.addListeners = function() {
      y$$1.addEventListener("mousedown", b.mousedown, false);
      y$$1.addEventListener("mousemove", b.mousemove, false);
      y$$1.addEventListener("mouseup", b.mouseup, false);
      y$$1.addEventListener("keydown", b.keydown, false);
      y$$1.addEventListener("keyup", b.keyup, false);
    };
  };
  var Nc = function() {
    var b$$0 = [];
    this.draw = function(e) {
      var f = [];
      var d = 0;
      for (;d < b$$0.length;d++) {
        var a = b$$0[d];
        if (void 0 == D[a.id]) {
          f.push(a);
        } else {
          if (a.weapon == Ma) {
            e.lineWidth = 2 + 5 * (1 - a.a);
            e.beginPath();
            var c = parseInt(255 * a.a);
            var g = e.createLinearGradient(a.hitPosition.x, a.hitPosition.y, a.origPosition.x, a.origPosition.y);
            if (0 > a.a) {
              a.a = 0;
            }
            var h = 255;
            if (1 == a.special) {
              h = 0;
              c = parseInt(0.4 * c);
            } else {
              if (2 == a.special) {
                h = 200;
                c = parseInt(0.1 * c);
              }
            }
            g.addColorStop(0, "rgba(255," + h + "," + c + "," + a.a + ")");
            g.addColorStop(a.a, "rgba(255," + h + "," + c + "," + a.a + ")");
            g.addColorStop(1, "rgba(255," + h + "," + c + ",0.0)");
            e.strokeStyle = g;
            e.moveTo(a.origPosition.x, a.origPosition.y);
            e.lineTo(a.hitPosition.x, a.hitPosition.y);
            e.stroke();
            g = (a.hitPosition.x - a.origPosition.x) / 100;
            h = (a.hitPosition.y - a.origPosition.y) / 100;
            var r = a.angle;
            var n = a.origPosition.x;
            var k = a.origPosition.y;
            var m = 0;
            e.beginPath();
            e.lineWidth = 2 == a.special ? 10 : 4;
            var l = 5;
            if (a.special) {
              l = 8;
            }
            c = 0;
            for (;100 > c;c++) {
              m = m + Math.PI / 4;
              n = Math.sin(m - 4 * a.a) * (6 + (1 - a.a) * l);
              var x = n * Math.cos(r);
              var s = n * Math.sin(r);
              n = a.origPosition.x + g * c;
              k = a.origPosition.y + h * c;
              if (0 == c) {
                e.moveTo(n + x, k + s);
              } else {
                e.lineTo(n + x, k + s);
              }
            }
            e.stroke();
            a.a -= 0.04;
            if (0 > a.a) {
              f.push(a);
            }
          } else {
            if (v.isSpaceWars()) {
              c = 45;
              if (a.isKing) {
                c = 90;
              }
              g = a.curPosition.x;
              h = a.curPosition.y;
              r = a.curPosition.x - a.origPosition.x;
              m = a.curPosition.y - a.origPosition.y;
              r = Math.sqrt(r * r + m * m);
              if (r > c) {
                r = a.curPosition.x - a.direction.x * c;
                m = a.curPosition.y - a.direction.y * c;
              } else {
                r = a.origPosition.x;
                m = a.origPosition.y;
              }
              if (a.isKing) {
                e.shadowColor = "green";
                e.lineWidth = 9;
                e.strokeStyle = "rgba(50,255,50,0.7)";
                e.beginPath();
                e.moveTo(g, h);
                e.lineTo(r, m);
                e.stroke();
                e.lineWidth = 4;
                e.strokeStyle = "rgba(150,255,150,1.0)";
              } else {
                if (a.weapon != Za) {
                  e.shadowColor = "red";
                  e.lineWidth = 7;
                  e.strokeStyle = "rgba(255,50,50,1.0)";
                  e.beginPath();
                  e.moveTo(g, h);
                  e.lineTo(r, m);
                  e.stroke();
                  e.lineWidth = 3;
                  e.strokeStyle = "rgba(255,150,150,1.0)";
                } else {
                  e.shadowColor = "red";
                  e.lineWidth = 7;
                  e.strokeStyle = "rgba(255,126,39,1.0)";
                  e.beginPath();
                  e.moveTo(g, h);
                  e.lineTo(r, m);
                  e.stroke();
                  e.lineWidth = 3;
                  e.strokeStyle = "rgba(255,255,255,1.0)";
                }
              }
              e.beginPath();
              e.moveTo(g, h);
              e.lineTo(r, m);
              e.stroke();
              if (a.finish) {
                f.push(a);
              } else {
                c = a.curPosition.x - a.hitPosition.x;
                g = a.curPosition.y - a.hitPosition.y;
                c = Math.sqrt(c * c + g * g);
                a.a -= 0.05;
                g = 70 + 10 * Math.random();
                if (c < g) {
                  a.finish = true;
                  a.curPosition.x = a.hitPosition.x;
                  a.curPosition.y = a.hitPosition.y;
                } else {
                  a.curPosition.x += a.direction.x * g;
                  a.curPosition.y += a.direction.y * g;
                }
              }
            } else {
              e.lineWidth = 3;
              e.beginPath();
              c = 140;
              g = a.curPosition.x;
              h = a.curPosition.y;
              r = a.curPosition.x - a.origPosition.x;
              m = a.curPosition.y - a.origPosition.y;
              r = Math.sqrt(r * r + m * m);
              if (r > c) {
                r = a.curPosition.x - a.direction.x * c;
                m = a.curPosition.y - a.direction.y * c;
              } else {
                r = a.origPosition.x;
                m = a.origPosition.y;
              }
              c = e;
              n = s = x = l = void 0;
              n = r - g;
              s = m - h;
              var p = g + 0.05 * n;
              k = h + 0.05 * s;
              l = Math.sqrt(n * n + s * s);
              n = n / l;
              s = s / l;
              n = 3 * n;
              s = 3 * s;
              l = p + -s;
              x = k + n;
              s = p - -s;
              n = k - n;
              c.moveTo(g, h);
              c.lineTo(l, x);
              c.lineTo(r, m);
              c.lineTo(s, n);
              e.fillStyle = "rgba(255,255,255," + a.a + ")";
              e.fill();
              if (a.finish) {
                f.push(a);
              } else {
                c = a.curPosition.x - a.hitPosition.x;
                g = a.curPosition.y - a.hitPosition.y;
                c = Math.sqrt(c * c + g * g);
                a.a -= 0.05;
                g = 100;
                if (c < g) {
                  a.finish = true;
                  a.curPosition.x = a.hitPosition.x;
                  a.curPosition.y = a.hitPosition.y;
                } else {
                  a.curPosition.x += a.direction.x * g;
                  a.curPosition.y += a.direction.y * g;
                }
              }
            }
          }
        }
      }
      c = 0;
      for (;c < f.length;c++) {
        e = b$$0.indexOf(f[c]);
        b$$0.splice(e, 1);
      }
      f.length = 0;
    };
    this.addShot = function(e, f, d, a) {
      if (ia() && ua) {
        var c = D[e];
        if (c) {
          var g = {};
          g.id = e;
          g.angle = c.angle;
          g.isKing = na == e;
          g.hitPosition = {
            x : 10 * f,
            y : 10 * d
          };
          g.special = 0;
          if (v.isInstagib()) {
            g.special = 1;
          } else {
            if (v.isSpaceWars()) {
              g.special = 2;
            }
          }
          g.a = 1;
          g.weapon = a;
          f = eb(0, -10, c.angle);
          e = c.x + f.x;
          d = c.y + f.y;
          g.origPosition = {
            x : e,
            y : d
          };
          c = g.hitPosition.x - e;
          f = g.hitPosition.y - d;
          if (a != va) {
            a = Math.sqrt(c * c + f * f);
            g.direction = {
              x : c / a,
              y : f / a
            };
            g.curPosition = {
              x : e,
              y : d
            };
            g.finish = false;
            if (X(e, d, 100) || X(g.hitPosition.x, g.hitPosition.y, 100)) {
              b$$0.push(g);
            }
          }
          a = B / 2;
          if (g.hitPosition.y > a) {
            e = f / c;
            la.addSplash((a - (g.hitPosition.y - e * g.hitPosition.x)) / e, a + 6, 1, false);
          }
        }
      }
    };
    this.addMissileImpact = function(b, f) {
      var d = 10 * b;
      var a = 10 * f;
      if (X(d, a, 100) && ia()) {
        var c = T.createAnimation("explosion");
        c.setScale(1);
        c.posX = 10 * b;
        c.posY = 10 * f;
        T.runAnimationBehind(c);
        d = 1 - ra(d, a, H.x, H.y) / Na;
        J.playSound(Mc, d, 1, Oa, null);
      }
    };
    this.addSplash = function(b, f, d, a) {
      if (rb && (!v.isSpaceWars() && (X(b, f, 100) && ia()))) {
        var c = T.createAnimation("splash");
        var g = T.createAnimation("splashReflex");
        c.setScale(d);
        if (a) {
          c.scaleX *= 1.2 + 0.4 * Math.random();
        }
        c.posX = b;
        c.posY = f - 61 * c.scaleY / 2;
        T.runAnimation(c);
        g.scaleX = c.scaleX;
        g.posX = c.posX;
        g.posY = c.posY + 77;
        g.scaleY = -2;
        T.runAnimationLayer2(g);
      }
    };
  };
  var Rc = function() {
    var b$$0;
    var e$$0;
    var f$$0;
    var d$$0 = 0;
    var a$$0 = true;
    var c$$0;
    var g$$0;
    var h$$0;
    var r$$0;
    var n$$0 = new Oc;
    var k$$0;
    var m$$0;
    var l$$0;
    var x;
    var s$$0;
    var z$$0;
    var wa;
    var q;
    var E;
    var ya = -1;
    var xb = false;
    var t;
    var C;
    var P;
    var V;
    var L;
    var ba;
    var G;
    var ca = 1;
    var Da = 0;
    var Ea;
    var Aa;
    var qa;
    var B;
    var F = 0;
    var Pa;
    var Fa;
    var Qa;
    var H = 0;
    var $a;
    var M;
    var T = -1;
    var Q = false;
    var O = 0;
    var I;
    var S;
    var Z;
    var K;
    var U;
    var $;
    var X = null;
    var ha = null;
    var da;
    var aa;
    var ga;
    var fa;
    var sa;
    var ka = 0;
    var la = 0;
    var ra = null;
    var ia;
    var ja;
    var ta;
    var pa;
    this.draw = function(F) {
      if (xb) {
        C = y$$1.createElement("canvas");
        var s = C.getContext("2d");
        this.renderLeaderboard(s, C);
      }
      if (0 < ka) {
        this.DrawWinnerLabel(F);
      } else {
        if (0 < la) {
          this.DrawWarshipDestroyedLabel(F);
        } else {
          if (C) {
            if (0 < Eb) {
              if (!R || za) {
                this.drawLeaderboard(F);
              }
            }
          }
          if (u && !R) {
            F.save();
            F.scale(w$$1, w$$1);
            s = p.frames.indicator;
            F.translate(s.width / 2 + 6, s.height / 2 + 6);
            s.draw(F);
            this.DrawCurrentWeaponIcon(F, u.weapon);
            if (null == wa) {
              wa = new Ba(19, "#FFFFFF");
            }
            var z = v.isInstagib();
            if (ya != u.GetAmmo() || null == q) {
              var P = "\u221e";
              if (!z) {
                ya = u.GetAmmo();
                if (-1 < ya) {
                  P = ya;
                }
              }
              wa.setValue(P);
              q = wa.render();
              E = q.width;
            }
            F.globalAlpha = 1;
            F.drawImage(q, 0.57 * -E, 0.19 * s.height + 9.5);
            F.restore();
            this.DrawScore(F);
          }
          if (0 < d$$0) {
            s = 0;
            z = +new Date - d$$0;
            if (4E3 > z) {
              s = 3E3 > z ? 1 : 1 - (z - 3E3) / 1E3;
            } else {
              d$$0 = 0;
            }
            if (!h$$0) {
              z = 20;
              P = false;
              if (f$$0) {
                r$$0 = new Y(40 * w$$1, "#FF0000", "#990000");
                r$$0.setValue(f$$0);
                r$$0.setUsingFrame(true);
                P = true;
                r$$0.setAddTop(25);
              } else {
                r$$0 = null;
                z = 35;
              }
              h$$0 = new Y(z * w$$1, "#FF0000", "#990000");
              h$$0.setValue(e$$0);
              h$$0.setUsingFrame(!P);
            }
            z = 0.25 * canvas.height;
            if (a$$0) {
              h$$0.setColor("#00ea11");
              h$$0.setSecondColor("#006b08");
              if (r$$0) {
                r$$0.setColor("#00ea11");
                r$$0.setSecondColor("#006b08");
              }
            } else {
              h$$0.setColor("#ff0608");
              h$$0.setSecondColor("#a20400");
              if (r$$0) {
                r$$0.setColor("#ff0608");
                r$$0.setSecondColor("#a20400");
              }
            }
            P = h$$0.render();
            var L;
            if (f$$0) {
              L = r$$0.render();
            }
            F.globalAlpha = s;
            if (L) {
              F.drawImage(L, 0.5 * canvas.width - L.width / 2, z - 5);
            }
            F.drawImage(P, 0.5 * canvas.width - P.width / 2, z);
            F.globalAlpha = 1;
          }
          if (k$$0) {
            z = 0.6 * canvas.height;
            s = m$$0 / 1E3 * 10;
            if (1 < s) {
              s = 1;
            }
            if (!g$$0) {
              g$$0 = new Y(30 * w$$1, "#FF0000", "#990000");
            }
            g$$0.setValue(k$$0);
            g$$0.setUsingFrame(true);
            P = g$$0.render();
            L = 0.1 * Math.sin(m$$0 / 100) * w$$1;
            F.save();
            F.translate(0.5 * canvas.width, z);
            F.scale(1 + L, 1 + L);
            F.translate(-P.width / 2, 0);
            F.globalAlpha = s;
            F.drawImage(P, 0, 0);
            F.restore();
          }
          if (l$$0) {
            z = 0.397 * canvas.height;
            s = 1;
            if (!x) {
              x = new Y(20 * w$$1, "#FF0000", "#990000");
            }
            x.setValue(l$$0);
            x.setUsingFrame(false);
            P = x.render();
            F.save();
            F.translate(0.5 * canvas.width, z);
            F.scale(0.8, 0.8);
            F.translate(-P.width / 2, 0);
            F.globalAlpha = s;
            F.drawImage(P, 0, 0);
            F.restore();
          }
          if (window.A.hasConnection) {
            if (ua) {
              if (v.waiting) {
                this.DrawWarmupTime(F);
              } else {
                if (v.isInEvent()) {
                  this.DrawEventLabel(F);
                } else {
                  if (Ha) {
                    if (!R) {
                      this.DrawLaserDeployed(F);
                    }
                  }
                }
              }
            }
          }
          if (null == k$$0) {
            if (n$$0.shouldDraw()) {
              F.save();
              F.translate(0.5 * canvas.width, 0.67 * canvas.height);
              n$$0.draw(F);
              F.restore();
            }
          }
          if (!W) {
            if (!R) {
              L = "FREE MODE";
              if (0 == ma) {
                L = u ? "Following " + ea(u.name) : "FOLLOW MODE";
              }
              if (!c$$0) {
                c$$0 = new Y(30 * w$$1, "#ffd118", "#b56006");
              }
              c$$0.setValue(L);
              c$$0.setUsingFrame(true);
              P = c$$0.render();
              F.globalAlpha = 1;
              z = 0.14 * canvas.height;
              F.drawImage(P, 0.5 * canvas.width - P.width / 2, z);
            }
          }
          if (Pa) {
            if (4E3 > H) {
              if (null == Qa) {
                Fa = new Ba(20 * w$$1, "#ffd118", true, "#633504");
                Fa.setValue(Pa);
                Fa.setStrokeWidth(5);
                Fa.setRoundedFrameOpacity(0.5);
                Fa.setHMargin(5);
                Fa.setUsingRoundedFrame(true);
                Qa = Fa.render();
              }
              L = 1;
              if (300 > H) {
                L = H / 300;
                L = Math.sqrt(L, 10);
              } else {
                if (3700 < H) {
                  L = 1 - (H - 3700) / 300;
                  L = Math.sqrt(L, 10);
                }
              }
              F.drawImage(Qa, Ua / 2 - Qa.width / 2, ib - 1.1 * Qa.height * L);
            } else {
              Pa = null;
            }
          }
          if (!R) {
            Ea.draw(F);
          }
          if (!R) {
            if (0 < na) {
              this.DrawKing(F);
            }
          }
          if (xb) {
            xb = false;
          }
          if (b$$0 != w$$1) {
            c$$0 = g$$0 = null;
            b$$0 = w$$1;
          }
        }
      }
    };
    this.DrawKing = function(a) {
      if (t && (0 < t.length && 0 < Object.keys(D).length)) {
        var c = D[t[0]];
        if (c) {
          var d = ea(c.name);
          if (u) {
            if (F != c.id) {
              if (c.id == u.id) {
                J.playSound(Pc, 1, 1, 1, null);
              }
            }
          }
          F = c.id;
          if (d != Aa) {
            qa = new Y(25 * w$$1, "#fe9b00", "#6e3800");
            c = " ";
            if (!xa) {
              c = "";
            }
            qa.setValue(c + "  King: " + d);
            qa.setUsingRoundedFrame(true);
          }
          Aa = d;
          B = qa.render();
        }
        if (qa) {
          a.save();
          d = 0.86 * canvas.height;
          a.drawImage(B, 0.5 * canvas.width - B.width / 2, d);
          c = 20;
          if (!xa) {
            c = 13;
          }
          a.translate(0.5 * canvas.width - B.width / 2 + c, d + B.height / 2 - 2 * w$$1);
          a.scale(w$$1, w$$1);
          p.frames.crown.draw(a);
          a.restore();
        }
      }
    };
    this.DrawLaserDeployed = function(a) {
      a.save();
      if (Ia != T) {
        T = Ia;
        M = new Y(25 * w$$1, "#fbc521", "#c78109");
        if (Ia) {
          M.setValue("     Super Weapon: " + Ia);
        } else {
          M.setValue("     Find The Super Weapon!");
        }
        M.setUsingRoundedFrame(true);
        $a = M.render();
      }
      var c = 0.05 * canvas.height;
      a.drawImage($a, 0.5 * canvas.width - $a.width / 2, c);
      var d = 30;
      if (!xa) {
        d = 20;
      }
      a.translate(0.5 * canvas.width - $a.width / 2 + d, c + $a.height / 2);
      a.scale(w$$1, w$$1);
      p.frames.laser.draw(a);
      a.restore();
    };
    this.DrawScore = function(a) {
      if (0 < u.rank) {
        var c = P * w$$1;
        var d = c;
        var b = 30 * w$$1;
        var g = 5 * w$$1;
        var h = 10 * w$$1;
        var e = Ua - c - 5;
        var k = L + 5 + 5;
        if (void 0 == s$$0) {
          s$$0 = y$$1.createElement("canvas");
          z$$0 = s$$0.getContext("2d");
        }
        if (-1 != u.score) {
          s$$0.width = d;
          s$$0.height = b;
          z$$0.font = 16 * w$$1 + "px 'proxima-nova-1','proxima-nova-2', Arial Black";
          z$$0.globalAlpha = 0.3;
          z$$0.textBaseline = "hanging";
          Ca(z$$0, 0, 0, c, b, 30 * w$$1);
          z$$0.globalAlpha = 1;
          b = 2;
          for (;0 <= b;b--) {
            var n = 0;
            if (0 != b) {
              z$$0.fillStyle = "rgba(100,49,0,1.0)";
              n = b;
            } else {
              z$$0.fillStyle = "rgba(255,156,0,1.0)";
            }
            z$$0.fillText(u.rank + ". You ", g, h + n);
            d = z$$0.measureText(u.score).width;
            z$$0.fillText(u.score, c - g - d, h + n);
          }
        }
        a.drawImage(s$$0, e, k + 5);
      }
    };
    this.DrawWarmupTime = function(a) {
      if (Q) {
        Q = false;
        var c = v.endTime - N;
        if (0 > parseInt(c)) {
          return;
        }
        S = new Y(23 * w$$1, v.getEventColor(), "#6e3800");
        S.setValue(v.getEventName());
        U = S.render();
        Z = new Y(20 * w$$1, "#fe9b00", "#6e3800");
        Z.setValue("STARTS IN");
        $ = Z.render();
        I = new Y(27 * w$$1, "#fe9b00", "#6e3800");
        I.setValue(jc(c));
        K = I.render();
      }
      if (K) {
        c = 0.8 * canvas.height;
        var d = U.width;
        d = $.width > d ? $.width : d;
        d = K.width > d ? K.width : d;
        a.fillStyle = "#000000";
        a.globalAlpha = 0.3;
        Ca(a, canvas.width - d - 20, c, d, 102, 20);
        a.globalAlpha = 1;
        a.drawImage(U, canvas.width - d - 20, c);
        a.drawImage($, canvas.width - d / 2 - $.width / 2 - 20, c + 36);
        a.drawImage(K, canvas.width - d / 2 - K.width / 2 - 20, c + 60);
      }
    };
    this.DrawEventLabel = function(a) {
      if (Q) {
        Q = false;
        var c = v.endTime - N;
        if (0 > parseInt(c)) {
          c = 0;
        }
        S = new Y(25 * w$$1, v.getEventColor(), "#6e3800");
        S.setValue(v.getEventName());
        U = S.render();
        I = new Y(25 * w$$1, "#fe9b00", "#6e3800");
        if (v.isWarship()) {
          if (0 < v.warshipsLeft) {
            I.setValue("Warships Left: " + v.warshipsLeft);
          } else {
            if (0 == v.warshipsEscaped) {
              I.setValue("All Warships Destroyed!");
            } else {
              I.setValue(v.warshipsDestroyed + " Destroyed, " + v.warshipsEscaped + " Escaped!");
            }
          }
        } else {
          I.setValue(jc(c));
        }
        K = I.render();
      }
      if (K) {
        c = 0.01 * canvas.height;
        var d = K.width < U.width ? U.width : K.width;
        a.fillStyle = "#000000";
        a.globalAlpha = 0.3;
        Ca(a, canvas.width / 2 - d / 2, c, d, 69, 20);
        a.globalAlpha = 1;
        a.drawImage(U, canvas.width / 2 - U.width / 2, c);
        a.drawImage(K, canvas.width / 2 - K.width / 2, c + 30);
      }
    };
    this.DrawWinnerLabel = function(a) {
      if (!ga) {
        if (X) {
          ga = new Y(55 * w$$1, "#fe6800", "#6e3800");
          ga.setValue("WINNER");
          fa = ga.render();
          sa = new Y(45 * w$$1, "#fe9b00", "#6e3800");
          sa.setValue(X);
          renderedWinnerNameCachedText = sa.render();
        }
      }
      if (fa) {
        var c = 0.13 * canvas.height;
        var d = fa.width > renderedWinnerNameCachedText.width ? fa.width : renderedWinnerNameCachedText.width;
        a.fillStyle = "#000000";
        a.globalAlpha = 0.3;
        Ca(a, canvas.width / 2 - d / 2, c, d, 140, 20);
        a.globalAlpha = 1;
        a.drawImage(fa, canvas.width / 2 - fa.width / 2, c);
        a.drawImage(renderedWinnerNameCachedText, canvas.width / 2 - renderedWinnerNameCachedText.width / 2, c + 70);
      }
    };
    this.DrawWarshipDestroyedLabel = function(a) {
      if (!ia) {
        ia = new Y(45 * w$$1, "#fe6800", "#6e3800");
        if (null == ra) {
          ia.setValue("WARSHIP");
        } else {
          ia.setValue(ra);
        }
        ja = ia.render();
        ta = new Y(35 * w$$1, "#fe9b00", "#6e3800");
        if (null == ra) {
          ta.setValue("ESCAPED!");
        } else {
          ta.setValue("DESTROYED A WARSHIP!");
        }
        pa = ta.render();
      }
      if (ja) {
        var c = 0.13 * canvas.height;
        var d = ja.width > pa.width ? ja.width : pa.width;
        a.fillStyle = "#000000";
        a.globalAlpha = 0.3;
        Ca(a, canvas.width / 2 - d / 2, c, d, 114, 20);
        a.globalAlpha = 1;
        a.drawImage(ja, canvas.width / 2 - ja.width / 2, c);
        a.drawImage(pa, canvas.width / 2 - pa.width / 2, c + 60);
      }
    };
    this.DrawLastEventWinner = function(a) {
      if (null != X) {
        if (X != ha) {
          da = new Ba(15 * w$$1, "#EEEEEE");
          da.setFont("px 'proxima-nova-1','proxima-nova-2', Arial Black");
          da.setValue("Last Event Winner: " + ea(X) + " ");
          da.setUsingRoundedFrame(true);
          ha = X;
          aa = da.render();
        }
      }
      if (aa) {
        var c = 10 * w$$1;
        a.drawImage(aa, canvas.width - aa.width - c, canvas.height - aa.height - c);
      }
    };
    this.DrawCurrentWeaponIcon = function(a, c) {
      if (G != c) {
        G = c;
        Da = 1;
      }
      if (1 == Da) {
        ca -= 0.15;
        if (0 >= ca) {
          ba = G;
          ca = 0;
          Da = 2;
        }
      } else {
        if (2 == Da) {
          ca += 0.15;
          if (1 <= ca) {
            ca = 1;
            Da = 0;
          }
        }
      }
      var d = 0;
      var b = 0;
      var g = 0;
      var h;
      var e = true;
      switch(ba) {
        case Ra:
          d = 254;
          b = 69;
          g = 31;
          h = p.frames.iconRocket;
          break;
        case Ga:
          d = 112;
          b = 130;
          g = 144;
          h = p.frames.iconMachinegun;
          break;
        case Za:
          d = 243;
          b = 150;
          g = 40;
          h = p.frames.iconTrishoot;
          break;
        case Ma:
          d = 40;
          b = 179;
          g = 243;
          h = p.frames.iconRailgun;
          break;
        case ab:
          d = 181;
          b = 25;
          g = 255;
          h = p.frames.iconMelee;
          break;
        case bb:
          g = b = d = 127;
          h = p.frames.iconBombdrop;
          break;
        case va:
          h = p.frames.iconLaserFull;
          e = false;
          break;
        default:
          return;
      }
      a.save();
      var k = Math.sqrt(ca);
      a.translate(0, -16);
      a.scale(k, k);
      a.translate(0, 16);
      a.lineWidth = 3;
      if (e) {
        a.beginPath();
        a.arc(-1, -11, 34, 0, 2 * Math.PI);
        a.closePath();
        a.fillStyle = "rgba(0,0,0,0.4)";
        a.fill();
        a.beginPath();
        a.arc(-1, -17, 34, 0, 2 * Math.PI);
        a.closePath();
        a.strokeStyle = "rgba(255,255,255,1.0)";
        a.fillStyle = "rgba(" + d + "," + b + "," + g + ",1.0)";
        a.fill();
        a.stroke();
      }
      a.translate(-1, -16);
      h.draw(a);
      a.restore();
    };
    this.update = function(a) {
      m$$0 += a;
      H += a;
      Ea.update(a);
      n$$0.update(a);
      O -= a;
      if (0 > O) {
        O += 1E3;
        Q = true;
      }
      if (0 < ka) {
        ka -= a;
      }
      if (0 < la) {
        la -= a;
      }
    };
    this.renderLeaderboard = function(a, c) {
      P = 270;
      L = 0;
      var d = 5 * w$$1;
      var b = 10 * w$$1;
      var g = 23 * w$$1;
      var h = 18 * w$$1;
      var e;
      var k = 60 * w$$1;
      var n = 5 * w$$1;
      e = L += d + g + d;
      var f = t.length;
      if (10 < f) {
        f = 10;
      }
      var r = 0;
      var m = 0;
      for (;m < f;m++) {
        var F = D[t[m]];
        if (F) {
          L += h + b;
          F = a.measureText(ea(F.name)).width;
          if (r < F) {
            r = F;
          }
        }
      }
      L -= b;
      if (r > k) {
        P += r - k;
      }
      V = P * w$$1;
      L += d;
      L += n;
      c.width = V;
      c.height = L;
      k = h + "px 'proxima-nova-1','proxima-nova-2', Arial Black";
      a.fillStyle = "rgba(0,0,0,0.3)";
      Ca(a, 0, 0, V, L, 30 * w$$1);
      a.fillStyle = "rgba(204,84,0,1.0)";
      kc(a, 0, 2, V, 32 * w$$1, 30 * w$$1);
      a.fillStyle = "rgba(254,102,3,1.0)";
      kc(a, 0, 0, V, 32 * w$$1, 30 * w$$1);
      m = "LEADERBOARD";
      if (v.isInstagib()) {
        m = "KILLS";
      }
      a.font = g + "px 'proxima-nova-1','proxima-nova-2', Arial Black";
      a.textBaseline = "hanging";
      F = a.measureText(m).width;
      a.fillStyle = "rgba(255,255,0,0.5)";
      a.fillText(m, V / 2 - F / 2, d + 1);
      a.fillStyle = "rgba(178,32,0,1.0)";
      a.fillText(m, V / 2 - F / 2, d);
      a.font = k;
      e += n;
      m = 0;
      for (;m < f;m++) {
        if (F = D[t[m]]) {
          n = 2;
          for (;0 <= n;n--) {
            g = ". ";
            if (!(F.inGame && F.id != na)) {
              g = ".     ";
            }
            r = m + 1 + g + ea(F.name);
            g = 0;
            if (0 != n) {
              a.fillStyle = "rgba(100,49,0,1.0)";
              g = n;
            } else {
              a.fillStyle = oa == F.id ? "rgba(255,156,0,1.0)" : "rgba(255,220,0,1.0)";
            }
            a.font = k;
            a.measureText(r);
            a.fillText(r, d, e + g);
            r = a.measureText(F.score).width;
            if (F.inGame) {
              if (F.id == na) {
                a.save();
                l = 38;
                if (9 == m) {
                  l = 50;
                }
                a.translate(l * w$$1, e + g + 7 * w$$1);
                a.scale(w$$1, w$$1);
                p.frames.crown.draw(a);
                a.restore();
              }
            } else {
              a.save();
              var l = 38;
              if (9 == m) {
                l = 50;
              }
              a.translate(l * w$$1, e + g + 7 * w$$1);
              a.scale(w$$1, w$$1);
              p.frames.skull.draw(a);
              a.restore();
            }
            a.fillText(F.score, V - d - r, e + g);
          }
          e += h + b;
        }
      }
    };
    this.drawLeaderboard = function(a) {
      a.drawImage(C, Ua - V - 5, 5);
    };
    this.addActivityMessage = function(a) {
      Ea.addActivityMessage(a);
    };
    this.addMessage = function(c, b, g) {
      e$$0 = c;
      h$$0 = null;
      f$$0 = g;
      d$$0 = +new Date;
      a$$0 = b;
    };
    this.showTip = function(a) {
      if (Pa) {
        this.clearTip();
      }
      Pa = a;
      H = 0;
      Qa = null;
    };
    this.clearTip = function() {
      Pa = null;
    };
    this.showTargetLockedMessage = function() {
      if (!l$$0) {
        l$$0 = "[ LOCKED ]";
      }
    };
    this.clearTargetLockedMessage = function() {
      l$$0 = null;
    };
    this.showWarningMessage = function(a) {
      k$$0 = a;
      m$$0 = 0;
    };
    this.clearWarningMessage = function() {
      k$$0 = null;
    };
    this.refreshLeaderboard = function(a) {
      t = a;
      xb = true;
    };
    this.addBonus = function(a, c) {
      n$$0.push(a, c);
    };
    this.clearBonusDisplay = function() {
      n$$0.clear();
    };
    this.clearNearMiss = function() {
      n$$0.clearNearMiss();
    };
    this.setLastWinner = function(a, c) {
      X = ea(a);
      console.log("Last Event Winner: " + a);
      if (c) {
        ga = null;
        ka = 6E3;
      }
    };
    this.setWarshipRemoved = function(a) {
      ra = a;
      la = 5E3;
      ia = null;
    };
    Ea = new Qc;
  };
  var Qc = function() {
    var b = [];
    var e$$0 = [];
    this.update = function(f) {
      if (0 < e$$0.length) {
        if (15E3 < N - e$$0[0]) {
          b.shift();
          e$$0.shift();
        }
      }
    };
    this.draw = function(e) {
      e.globalAlpha = 1;
      var d = canvas.height - 180 * w$$1;
      var a;
      for (a in b) {
        e.drawImage(b[a], 25, d + 26 * w$$1 + 5 + 14 * a * w$$1 + 15 * a * w$$1);
      }
    };
    this.addActivityMessage = function(f) {
      var d = new Ba(14 * w$$1, "#EEEEEE");
      d.setFont("px 'proxima-nova-1','proxima-nova-2', Arial Black");
      d.setValue("\u2022 " + f);
      d.setUsingRoundedFrame(true);
      d.setHMargin(10);
      d.setVMargin(4);
      f = d.render();
      b.push(f);
      e$$0.push(+new Date);
      if (5 < b.length) {
        b.shift();
        e$$0.shift();
      }
      f = 0;
      var a;
      for (a in b) {
        d = b[a].width + 5 + 5;
        if (d > f) {
          f = d;
        }
      }
    };
  };
  var Rb = function() {
    var b$$0 = this;
    this.lastUpdate = this.highlightValue = 0;
    this.id = -1;
    this.dstY = this.dstX = this.origY = this.origX = this.prevY = this.prevX = this.y = this.x = 0;
    this.energy = 255;
    this.inGame = true;
    this.updateBool = false;
    this.momentum = this.speed = this.colorHue = 0;
    this.maxMomentum = 8;
    this.dstAngle = this.origAngle = this.angle = 0;
    this.controlAngle = -90;
    this.rotSpeed = 4;
    this.directionX = 0;
    this.directionY = -1;
    this.targetY = this.targetX = 0;
    this.targetMomentum = this.maxMomentum;
    this.name = "";
    this.first_set = true;
    this.rank = -1;
    this.score = 0;
    this.frameSwitchTime = 40;
    this.timeToNextFrame = 0;
    this.flameState = 1;
    this.lastImage;
    this.lastImageReflex;
    this.flipLastImage = 1;
    this.planeImages = p.planeFrames;
    this.planeImagesReflex = p.planeFramesReflex;
    this.decalFrames;
    this.decalID = this.colorID = 0;
    this.isShooting = this.isBot = this.hadHover = this.hover = false;
    var e$$0 = 0;
    var f$$0 = 100;
    var d$$0 = false;
    var a$$0 = new yb;
    var c$$0;
    a$$0.fixedColor = true;
    var g$$0;
    var h$$0 = 0;
    this.weapon = Ga;
    this.ammo = -1;
    var r = this.laserFrame = this.laserTimer = 0;
    var n;
    var k$$0 = 0;
    var m$$0 = 0;
    var l$$0 = 1;
    var x = 0;
    var s = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1];
    var z$$0;
    var wa = false;
    var q$$0 = 0;
    var w$$0 = 0;
    var y$$0 = 0;
    var t = 0;
    var E = 0;
    var C = 0;
    var P = 1;
    var V$$0 = 0;
    var L$$0 = 0;
    var ba$$0 = false;
    var zc = true;
    var ca = false;
    var Da = 0;
    var Ea = 0;
    var Aa = 0;
    var qa = null;
    this.update = function(b) {
      if (this.inGame) {
        var g = 400;
        if (ca) {
          if (this.weapon == va) {
            g = 800;
          }
        }
        if (X(this.x, this.y, g)) {
          if (!wa) {
            if (a$$0) {
              a$$0.clear();
            }
            if (c$$0) {
              c$$0.clear();
            }
            wa = true;
          }
        } else {
          wa = false;
        }
        g = this.weapon == va && this.isShooting;
        if (0 < e$$0) {
          f$$0 -= b;
          if (0 > f$$0) {
            f$$0 = 100;
            d$$0 = !d$$0;
          }
          e$$0 -= b;
        }
        if (M.moveLeft) {
          this.controlAngle += this.rotSpeed;
        }
        if (M.moveRight) {
          this.controlAngle -= this.rotSpeed;
        }
        if (360 < this.controlAngle) {
          this.controlAngle = 0;
        } else {
          if (0 > this.controlAngle) {
            this.controlAngle = 360;
          }
        }
        var k = aa((N - this.lastUpdate) / Gb, 0, 1);
        this.prevX = this.x;
        this.prevY = this.y;
        var m = k * (this.dstY - this.origY) + this.origY;
        this.x = k * (this.dstX - this.origX) + this.origX;
        this.y = m;
        this.angle = k * (this.dstAngle - this.origAngle) + this.origAngle;
        k = this.x + 12 * Math.sin(-this.angle);
        m = this.y + 12 * Math.cos(-this.angle);
        if (a$$0) {
          a$$0.setPosition(k, m);
          if (v.isSpaceWars()) {
            a$$0.width = 0.6;
            if (this.id == na) {
              if ("#00FF00" != a$$0.style) {
                a$$0.style = "#00FF00";
              }
            }
          }
        }
        if (c$$0) {
          c$$0.setPosition(k, m);
        }
        if (k = !this.hover && (!n && (!this.isInvulnerable() && !g))) {
          if (0 == this.hadHover) {
            this.hadHover = true;
            a$$0.push();
          }
        } else {
          this.hadHover = false;
        }
        if (a$$0) {
          a$$0.enabled = k;
          a$$0.update(b);
        }
        if (c$$0) {
          c$$0.enabled = k;
          c$$0.update(b);
        }
        k = B / 2;
        m = k - 150;
        if (this.y > m && (this.y < k && 0 >= h$$0)) {
          h$$0 = 5;
          var l = Math.random() / 2;
          m = (0.5 + (0.5 - (k - this.y) / (k - m) * 0.5)) * (0.95 + l);
          l = 20 * Math.sin(this.angle);
          la.addSplash(this.x - l, k + 5 * Math.random(), m, true);
        }
        h$$0 -= b;
        if (n) {
          k = this.x + 12 * Math.sin(-this.angle);
          m = this.y + 12 * Math.cos(-this.angle);
          n.setPosition(k, m);
          n.update(b);
        }
        if (u == this) {
          hb = 0 == fa ? hb + b : 0;
        }
        if (2 != fa) {
          if (D[gb]) {
            w$$0 = Math.sqrt(hb / qc);
            if (1 < w$$0) {
              w$$0 = 1;
            }
            q$$0 -= b;
            if (0 >= q$$0) {
              if (0 == fa) {
                q$$0 = 0.7 > w$$0 ? 200 + q$$0 : 80 + q$$0;
                J.playSound(Qb, 0.1, 1, O, null);
              } else {
                if (1 == fa) {
                  G.showTargetLockedMessage();
                  q$$0 = 50 + q$$0;
                  J.playSound(Qb, 0.1, 1.58, O, null);
                }
              }
            }
          }
        } else {
          q$$0 = 0;
          G.clearTargetLockedMessage();
        }
        if (0 < ja) {
          y$$0 -= b;
          if (0 > y$$0) {
            y$$0 = 100;
            J.playSound(Qb, 0.1, 0.5, O, null);
          }
        } else {
          y$$0 = 0;
        }
        if (this == u) {
          if (!ga) {
            J.playSound(Sc, 0.6, 1, O, function(a) {
              ga = a;
            });
          }
          if (!ka) {
            J.playSound(Tc, 0, 1, O, function(a) {
              ka = a;
            });
          }
          k = (B / 2 - this.y) / 1E3;
          if (1 < k) {
            k = 1;
          }
          if (ga) {
            m = J.sound._nodeById(ga);
            J.sound.volume(0.5 * $, ga);
            if (0.01 > k && !v.isSpaceWars()) {
              if (m) {
                if (m.bufferSource) {
                  m.bufferSource.playbackRate.value = 0.1;
                }
              }
            } else {
              l = this.speed / 30;
              if (1 < l) {
                l = 1;
              }
              t += (0.3 + 0.8 * l - t) / 30;
              if (m) {
                if (m.bufferSource) {
                  m.bufferSource.playbackRate.value = t;
                }
              }
            }
          }
          if (ka) {
            m = 0;
            if (0.2 > k) {
              if (0.01 < k) {
                if (!v.isSpaceWars()) {
                  m = 1.7 * (0.2 - k);
                }
              }
            }
            J.sound.volume(m * $, ka);
          }
        }
        if (g) {
          k = ra(this.x, this.y, H.x, H.y);
          g = 1 - k / 3E3;
          if (1 < g) {
            g = 1;
          }
          if (0.1 > g) {
            g = 0;
          }
          if (0 == Aa) {
            J.playSound(Uc, 0.2 * g, 0.5, O, null);
            if (!qa) {
              J.playSound(Vc, 0.2 * g, 1, O, function(a) {
                mb = qa = a;
              });
            }
          } else {
            if (qa) {
              J.sound.volume(0.2 * g * $, qa);
            }
          }
          this.laserTimer += b;
          Aa += b;
        } else {
          this.stopLaserSound();
        }
        if (n) {
          if (this.weapon == ab) {
            if (1 < this.ammo) {
              this.ammo = 1;
            }
          }
        }
        if (0 < r) {
          r -= b;
        }
        if (z$$0) {
          z$$0.update(b);
        }
        if (0 < V$$0) {
          V$$0 -= b;
        }
      }
    };
    this.getCurrentFrameNum = function(a) {
      a = parseInt(g$$0 / (2 * Math.PI / 28)) + 1;
      return a = s[(a - 1) % 14];
    };
    this.draw = function(b, h) {
      if (this.inGame && wa) {
        if (a$$0) {
          a$$0.draw(b);
        }
        if (c$$0) {
          c$$0.draw(b);
        }
        if (!n) {
          b.save();
          b.translate(this.x, this.y);
          this.timeToNextFrame -= h;
          if (0 >= this.timeToNextFrame) {
            this.flameState = !this.flameState;
            this.timeToNextFrame = this.frameSwitchTime;
          }
          if (this.hover) {
            if (v.isSpaceWars()) {
              b.scale(0.5, 0.5);
            } else {
              b.scale(0.8, 0.8);
            }
          }
          if (this.flameState) {
            b.scale(0.88, 0.88);
          }
          b.rotate(this.angle - Math.PI / 2);
          b.translate(-23, 0);
          if (this.isInvulnerable()) {
            if (d$$0) {
              b.globalAlpha = 0.3;
            }
          }
          p.frames.throttleFlame.draw(b);
          b.restore();
        }
        g$$0 = Math.abs((this.angle - Math.PI / 2) % (2 * Math.PI)) + 2 * Math.PI / 28 / 2;
        if (0 < this.angle - Math.PI / 2) {
          g$$0 = 2 * Math.PI - g$$0;
        }
        this.flipLastImage = g$$0 > 0.5 * Math.PI && g$$0 < 1.5 * Math.PI ? -1 : 1;
        if (0 < r) {
          b.save();
          b.translate(this.x, this.y);
          b.scale(0.8, 0.8 * this.flipLastImage);
          b.rotate((this.angle - Math.PI / 2) * this.flipLastImage);
          b.translate(-15, -4);
          var e = 1;
          if (60 > r) {
            e = r / 60;
          } else {
            if (240 < r) {
              e = (300 - r) / 60;
            }
          }
          b.globalAlpha = e;
          p.frames.punch.draw(b);
          b.restore();
        }
        b.save();
        b.translate(this.x, this.y);
        b.scale(0.7, 0.7);
        b.rotate(this.angle - Math.PI / 2);
        if (n) {
          k$$0 -= h;
          if (0 > k$$0) {
            k$$0 = m$$0;
            x++;
            if (8 == x) {
              l$$0 *= -1;
            }
          }
          x %= 14;
          e = s[x];
        } else {
          x = e = this.getCurrentFrameNum(b);
        }
        b.scale(1, this.flipLastImage * l$$0);
        this.lastImage = this.planeImages[e - 1];
        if (void 0 == this.lastImage) {
          this.lastImage = this.planeImages[0];
        }
        this.lastImageReflex = this.planeImagesReflex[e - 1];
        if (void 0 == this.lastImageReflex) {
          this.lastImageReflex = this.planeImagesReflex[0];
        }
        if (this.isInvulnerable()) {
          if (d$$0) {
            b.globalAlpha = 0.3;
          }
        }
        this.lastImage.draw(b);
        var f = this.decalFrames[e - 1];
        if (void 0 == f) {
          f = this.decalFrames[0];
        }
        f.draw(b);
        if (16 < this.speed) {
          C += 0.06;
          if (0.9 < C) {
            C = 0.9;
          }
        } else {
          C -= 0.06;
          if (0 > C) {
            C = 0;
          }
        }
        b.rotate(-Math.PI / 2);
        b.translate(0, 8);
        P++;
        if (1 < P) {
          P = 0;
        }
        if (0 == P) {
          E += 1;
          if (2 < E) {
            E = 0;
          }
        }
        b.globalAlpha = C;
        p.frames["turbo" + E].draw(b);
        b.restore();
        if (0 < this.highlightValue) {
          if (!this.isInvulnerable()) {
            this.highlightValue -= 0.05;
            if (0 > this.highlightValue) {
              this.highlightValue = 0;
            }
            b.save();
            b.translate(this.x, this.y - 1);
            b.scale(0.7, 0.7);
            b.rotate(this.angle - Math.PI / 2);
            b.globalAlpha = this.highlightValue;
            e = p.whitePlaneImages["plane" + e];
            if (g$$0 > 0.5 * Math.PI && g$$0 < 1.5 * Math.PI) {
              b.scale(1.2, -1.2);
            } else {
              b.scale(1.2, 1.2);
            }
            if (e) {
              b.drawImage(e, -e.width / 2, -e.height / 2);
            }
            b.restore();
          }
        }
        if (n) {
          n.draw(b);
        }
        if (this.weapon == va) {
          e = false;
          if (!(g$$0 > 0.5 * Math.PI && g$$0 < 0.5 * Math.PI + Math.PI)) {
            e = true;
          }
          if (this.isShooting) {
            b.save();
            var z = this.x - 10 * Da;
            var L = this.y - 10 * Ea;
            f = 500;
            if (ca) {
              f = Math.sqrt(z * z + L * L) - 10;
            }
            if (100 > f) {
              f = 100;
            }
            var q = p.frames.laser_opening.height;
            var u = Aa / 50;
            var V = 1;
            var w = 0.75 * Math.PI;
            z = false;
            if (u > w) {
              u = u < 2 * w ? u - w : w;
              V = Math.sin(0.04 * Aa);
            } else {
              z = true;
            }
            b.translate(this.x, this.y);
            b.rotate(this.angle + Math.PI);
            if (e) {
              b.translate(2, 22);
            } else {
              b.translate(-2, 22);
            }
            var y = L = Math.sin(u) / Math.sin(w);
            var ba = true;
            if (z) {
              if (u < 0.5 * Math.PI) {
                ba = false;
              } else {
                u -= 0.5 * Math.PI;
                y = Math.sin(u) / Math.sin(w);
              }
            }
            if (ba) {
              b.scale((1 + 0.2 * V) * y, 1);
              b.translate(0, q / 2);
              p.frames.laser_opening.draw(b);
              f -= q;
              b.translate(0, f / 2 + q / 2 - 1);
              b.scale(1, f);
              p.frames.laser_stretch.draw(b);
              b.scale(1, 1 / f);
              b.translate(0, f / 2 - 10);
              if (50 < this.laserTimer) {
                this.laserTimer = 0;
                this.laserFrame = (this.laserFrame + 1) % 3;
              }
              if (ca) {
                p.frames["laser_collision" + this.laserFrame].draw(b);
              } else {
                f = p.frames.laserfade.width;
                b.rotate(Math.PI / 2);
                b.translate(f / 2, 0);
                p.frames.laserfade.draw(b);
              }
            }
            b.restore();
            b.save();
            b.translate(this.x, this.y);
            b.rotate(this.angle + Math.PI);
            if (e) {
              b.translate(2, 22);
            } else {
              b.translate(-2, 22);
            }
            if (z) {
              b.scale(L, L);
              b.translate(0, 15);
              b.beginPath();
              b.arc(0, 0, 15, 0, 2 * Math.PI);
              b.fill();
            }
            b.restore();
          }
          b.save();
          b.translate(this.x, this.y);
          b.rotate(this.angle + Math.PI);
          b.translate(-3, 18);
          if (e) {
            b.scale(-1, 1);
            b.translate(-6, 0);
          }
          b.rotate(-Math.PI / 2);
          p.frames.laserplug.draw(b);
          b.restore();
        }
      }
    };
    this.drawReflection = function(a, c) {
      if (this.inGame && wa) {
        var b = B / 2;
        var d = b - this.y;
        if (!(0 > d || 170 < d)) {
          var h = d / 170;
          a.save();
          a.translate(this.x, b + d - 25);
          a.scale(0.8, 0.8 * -this.flipLastImage * (1 + 4 * h));
          if (g$$0 > 0.5 * Math.PI && g$$0 < 1.5 * Math.PI) {
            a.rotate(1.5 * Math.PI + (g$$0 - Math.PI / 2) + Math.PI);
          } else {
            a.rotate(this.angle - Math.PI / 2);
          }
          b = 1;
          if (30 > d && 15 <= d) {
            b = (d - 15) / 15;
          } else {
            if (15 > d) {
              b = 0;
            }
          }
          a.globalAlpha = 0.7 * (1 - h) * b;
          this.lastImageReflex.draw(a);
          a.restore();
        }
      }
    };
    this.drawInput = function(a) {
      if (this.inGame) {
        var c = -U.angle + Math.PI;
        var b = !U.hover;
        if (0.01 >= b) {
          b = 0.3;
        }
        a.save();
        a.translate(this.x, this.y);
        a.rotate(c);
        a.translate(0, -28 - 10 * b);
        a.fillStyle = "rgba(255,255,255,0.4)";
        a.beginPath();
        a.moveTo(-8.8 * b, 0);
        a.lineTo(8.8 * b, 0);
        a.lineTo(0, -22 * b);
        a.fill();
        a.restore();
        if (2 != fa) {
          if (c = D[gb]) {
            this.DrawLockCrosshair(a, c.x, c.y, w$$0, fa);
          }
        }
        if (0 < ja) {
          this.DrawLockCrosshair(a, this.x, this.y, 1, 1);
        }
        a.lineWidth = 1;
        a.beginPath();
        if (v.isSpaceWars()) {
          a.strokeStyle = "rgba(255,255,255,0.3)";
        } else {
          a.strokeStyle = "rgba(0,0,255,0.1)";
        }
        a.arc(this.x, this.y, 75, 0, 2 * Math.PI);
        a.closePath();
        a.stroke();
      }
    };
    this.DrawLockCrosshair = function(a, c, b, d, g) {
      if (this.inGame) {
        a.lineWidth = 4;
        a.save();
        var h = 1;
        if (0 == fa) {
          h = 1 + 2 * (1 - d);
        }
        a.beginPath();
        d = "hsla(43,100%," + (100 - 40 * d) + "%,1.0)";
        if (1 == g) {
          d = "rgba(255,0,0,1.0)";
        } else {
          a.setLineDash([12 * h, 6 * h, 12 * h, 0]);
        }
        a.strokeStyle = d;
        g = 30 * h;
        a.rect(c - g / 2, b - g / 2, g, g);
        a.stroke();
        a.restore();
      }
    };
    this.drawInfo = function(a) {
      if (this.inGame && wa) {
        a.save();
        a.translate(this.x, this.y);
        if (!v.isInstagib()) {
          a.fillStyle = "rgba(126,219,226,1)";
          a.shadowOffsetX = 0;
          a.shadowOffsetY = 0;
          a.shadowBlur = 0;
          a.shadowColor = "rgba(255, 255, 255, 0.7)";
          a.lineWidth = 1;
          var c = 28;
          if (na == this.id) {
            c *= 2;
          }
          var d = 127.5;
          if (127.5 > this.energy && 63.75 < this.energy) {
            d = 30;
          } else {
            if (63.75 > this.energy) {
              d = 0;
            }
          }
          a.fillStyle = "hsl(" + d + ", 100%, 50%)";
          a.fillRect(-c / 2 + 0, 20, this.energy / 255 * c, 8);
          a.strokeStyle = "rgba(255,255,255,1.0)";
          a.strokeRect(-c / 2, 20, c, 8);
        }
        if (zc) {
          a.fillStyle = "rgba(255,255,255,1)";
          a.fillStyle = "rgba(255,255,255,1.0)";
          a.font = "Bold 15px 'proxima-nova-1','proxima-nova-2', arial, sans-serif";
          a.textBaseline = "hanging";
          c = a.measureText(b$$0.name).width;
          d = 38;
          if (v.isInstagib()) {
            d = 20;
          }
          a.fillText(b$$0.name, -c / 2, d);
        }
        a.restore();
        c = false;
        if (na == this.id) {
          c = true;
        }
        d = false;
        if (tb == this.id) {
          d = true;
        }
        if (c || (0 < V$$0 || (ba$$0 || d))) {
          a.save();
          a.translate(this.x, this.y - 30);
          if (ba$$0) {
            p.frames.pause.draw(a);
          } else {
            if (c) {
              p.frames.crown.draw(a);
            } else {
              if (d) {
                p.frames.revengeIcon.draw(a);
              } else {
                p.frames.frenzyIcon.draw(a);
              }
            }
          }
          a.restore();
        }
        if (z$$0) {
          a.save();
          d = 0;
          if (c) {
            d = 30;
          }
          a.translate(this.x, this.y - d);
          z$$0.draw(a);
          a.restore();
        }
      }
    };
    this.setPose = function(b, d, g, h) {
      this.origX = this.x;
      this.origY = this.y;
      this.origAngle = this.dstAngle;
      this.dstX = 10 * b;
      this.dstY = 10 * d;
      this.dstAngle = g;
      if (this.first_set) {
        this.origX = this.dstX;
        this.origY = this.dstY;
        this.x = this.dstX;
        this.y = this.dstY;
        this.origAngle = this.dstAngle;
        this.first_set = false;
        if (!window.A.firstClientListing) {
          e$$0 = 1E3 * pc;
        }
      } else {
        b = this.dstX - this.origX;
        d = this.dstY - this.origY;
        this.speed = Math.sqrt(b * b + d * d) / 3;
      }
      if (!this.inGame) {
        this.inGame = true;
        if (a$$0) {
          a$$0.clear();
        }
        if (c$$0) {
          c$$0.clear();
        }
      }
    };
    this.trailEffect = function() {
      if (sa) {
        if (a$$0) {
          a$$0.trailEffect();
        }
      }
    };
    this.hit = function(a) {
      if (ia()) {
        this.highlightValue = 1;
      }
    };
    this.setScore = function(a) {
      var c = a - this.score;
      if (0 < c) {
        if (this == u) {
          if (!z$$0) {
            z$$0 = new Wc;
          }
          if (ia()) {
            z$$0.addScore(c);
          }
        }
      }
      this.score = a;
    };
    this.incScore = function(a) {
      this.setScore(this.score + a);
    };
    this.setName = function(c) {
      this.name = c;
      if ("" == c || null == c) {
        a$$0 = new yb;
        a$$0.fixedColor = true;
        a$$0.style = I[Ga];
        a$$0.clear();
      }
    };
    this.setFlagInfo = function(b) {
      if (0 < b) {
        var d = b & 255;
        b >>= 8;
        var g = b & 255;
        b >>= 8;
        var h = 0 < (b & 4) ? true : false;
        var e = 0 < (b & 2) ? true : false;
        zc = 0 < (b & 8) ? true : false;
        c$$0 = new Xc;
        c$$0.flipX = e;
        c$$0.flipY = h;
        c$$0.scale = g / 100;
        c$$0.stringScale = d / 100;
        c$$0.setTexture(this.name);
      } else {
        this.showName = true;
      }
      a$$0 = new yb;
      a$$0.fixedColor = true;
      a$$0.style = I[Ga];
      a$$0.clear();
    };
    this.setEnergy = function(a) {
      this.energy = a;
      if (25 > a && !n) {
        n = new Ac;
        n.init(15, this.x, this.y);
        k$$0 = 0;
        m$$0 = 20 + 40 * Math.random();
        if (u == this) {
          J.playSound(Yc, 0.7, 1, O, null);
          G.clearNearMiss();
        }
      } else {
        if (25 <= a) {
          if (n) {
            delete n;
            n = null;
            l$$0 = 1;
          }
        }
      }
    };
    this.GetAmmo = function() {
      return 1 == this.weapon ? -1 : this.ammo;
    };
    this.setColorID = function(a) {
      this.colorID = a;
      this.decalFrames = p.planes[this.decalID][this.colorID];
    };
    this.setDecalID = function(a) {
      this.decalID = a;
      this.decalFrames = p.planes[this.decalID][this.colorID];
    };
    this.setColorHue = function(a) {
      this.colorHue = a;
    };
    this.getSpeedDirectionX = function() {
      return this.x - this.prevX;
    };
    this.getSpeedDirectionY = function() {
      return this.y - this.prevY;
    };
    this.setRank = function(a) {
      this.rank = a;
    };
    this.isInvulnerable = function() {
      return 0 < e$$0;
    };
    var I = {
      1 : "rgba(255, 255, 255, 0.6)",
      2 : "rgba(255, 156, 0, 1.0)",
      4 : "rgba(255, 43, 0, 1.0)",
      8 : "rgba(0, 140, 255, 1.0)",
      16 : "rgba(255, 255, 0, 1.0)",
      128 : "rgba(255, 0, 255, 1.0)",
      256 : "rgba(137, 137, 137, 1.0)"
    };
    a$$0.style = I[Ga];
    this.setWeapon = function(c) {
      a$$0.style = I[c];
      a$$0.width = 1;
      this.weapon = c;
    };
    this.cleanup = function() {
      if (ga) {
        J.sound.stop(ga);
      }
      if (ka) {
        J.sound.stop(ka);
      }
      this.stopLaserSound();
      ka = ga = null;
      this.first_set = true;
      this.inGame = false;
      G.clearTargetLockedMessage();
      ja = 0;
    };
    this.setFrenzy = function() {
      V$$0 = 1E4;
    };
    this.incKills = function() {
      L$$0++;
    };
    this.getKills = function() {
      return L$$0;
    };
    this.setPaused = function(a) {
      ba$$0 = a ? true : false;
    };
    this.setIsBot = function(a) {
      this.isBot = a;
    };
    this.setIsShooting = function(a) {
      if (!a) {
        if (this.isShooting) {
          this.laserTimer = Aa = 0;
        }
      }
      this.isShooting = a;
    };
    this.laserHit = function(a, c, b) {
      Da = a;
      Ea = c;
      ca = b;
    };
    this.prepareFollow = function() {
    };
    this.stopLaserSound = function() {
      if (qa) {
        J.sound.stop(qa);
        qa = mb = null;
      }
    };
    this.dash = function() {
      if (this == u) {
        J.playSound(Zc, 0.15, 1, O, null);
      }
      r = 300;
    };
    this.dashing = function() {
      return 0 < r;
    };
    this.clearTrail = function() {
      if (a$$0) {
        a$$0.clear();
      }
    };
  };
  var ad = function() {
    function b$$0(a, c) {
      if (0 <= a) {
        if (24 > a) {
          f$$0[a] += c;
        }
      }
    }
    var e$$0;
    var f$$0;
    var d$$0;
    var a$$0;
    var c$$0;
    var g;
    var h$$0 = [];
    var r$$0 = 0;
    this.update = function(b) {
      c$$0 = 1.1 * canvas.width / E.zoom;
      g = c$$0 / 25;
      a$$0 = Math.floor(H.x / g);
      if (null != d$$0) {
        if (d$$0 != a$$0) {
          if (0 < d$$0 - a$$0) {
            f$$0.splice(24, 24);
            f$$0.splice(0, 0, 0);
            e$$0.splice(24, 24);
            e$$0.splice(0, 0, 0);
          } else {
            f$$0.splice(0, 1);
            f$$0.push(0);
            e$$0.splice(0, 1);
            e$$0.push(0);
          }
        }
      }
      d$$0 = a$$0;
      var k = 0;
      for (;25 > k;k++) {
        e$$0[k] = 2 * f$$0[k] - e$$0[k];
      }
      k = f$$0;
      f$$0 = e$$0;
      e$$0 = k;
      k = f$$0[0];
      var m = f$$0[0];
      var l = f$$0[1];
      f$$0[0] = 0.99 * (0.9 * m + 0.5 * (k + l) * (1 - 0.9));
      f$$0[0] = aa(f$$0[0], -100, 100);
      var x = 1;
      for (;24 > x;++x) {
        k = m;
        m = l;
        l = f$$0[x + 1];
        f$$0[x] = 0.99 * (0.9 * m + 0.5 * (k + l) * (1 - 0.9));
        f$$0[x] = aa(f$$0[x], -100, 100);
      }
      k = m;
      m = l;
      f$$0[24] = 0.99 * (0.9 * m + 0.5 * (k + l) * (1 - 0.9));
      f$$0[24] = aa(f$$0[24], -100, 100);
      k = m;
      m = l;
      f$$0[0] = 0.99 * (0.9 * m + 0.5 * (k + l) * (1 - 0.9));
      f$$0[0] = aa(f$$0[0], -100, 100);
      k = m;
      m = l;
      f$$0[1] = 0.99 * (0.9 * m + 0.5 * (k + l) * (1 - 0.9));
      f$$0[1] = aa(f$$0[1], -100, 100);
      k = m;
      f$$0[24] = 0.99 * (0.9 * l + 0.5 * (k + l) * (1 - 0.9));
      f$$0[24] = aa(f$$0[24], -100, 100);
      k = parseInt(24 * Math.random());
      m = 20 * Math.random() / 20;
      f$$0[k - 1] += m / 2;
      f$$0[k] += m;
      f$$0[k + 1] += m / 2;
      l = E.getBounds();
      if (l[1].y > B / 2) {
        k = h$$0.length;
        r$$0 -= b;
        if (0 > r$$0) {
          r$$0 = 125.6;
          if (20 > k) {
            m = new $c;
            h$$0.push(m);
            l = l[1].x - l[0].x;
            x = 0;
            if (u) {
              x = 50 * u.getSpeedDirectionX();
            }
            l = Math.random() * l - l / 2 + x;
            x = 250 * Math.random();
            m.setPosition(l + H.x, B / 2 + x + 30, x);
          }
        }
        l = [];
        x = 0;
        for (;x < k;x++) {
          m = h$$0[x];
          m.update(b);
          if (m.deleting) {
            l.push(m);
          }
        }
        b = 0;
        for (;b < l.length;b++) {
          k = h$$0.indexOf(l[b]);
          h$$0.splice(k, 1);
        }
        l.length = 0;
      }
    };
    this.drawBehind = function(a) {
      var c = B / 2 - H.y;
      var b = 0.5 + c / (B / 2) * 6;
      this.drawWaterArea(a, 2 * b, "rgba(9,188,255,1.0)", 100, 0.25, 0.6, c);
      c = B / 2 - H.y;
      b = 0.5 + c / (B / 2) * 6;
      this.drawWaterArea(a, 4 * b, "rgba(8,164,254,1.0)", 100, 0.75, 0.8, c);
      this.drawWaterArea(a, 13 * b, "rgba(7,142,252,1.0)", 1E3, 0, 1, c);
    };
    this.drawFront = function(b) {
      var d = B / 2 - H.y;
      var e = a$$0 * g;
      var f = B / 2 + -30;
      var r = b.createLinearGradient(0, f, 0, f + (600 + 2 * d));
      r.addColorStop(0, "rgba(7,142,252,1.0)");
      r.addColorStop(0.55, "rgba(0,132,232,1.0)");
      r.addColorStop(1, "rgba(0,90,190,1.0)");
      b.fillStyle = r;
      b.beginPath();
      b.moveTo(e + g - c$$0 / 2, f + 30);
      b.lineTo(e + g + c$$0 / 2, f + 30);
      b.lineTo(e + 25 * g - c$$0 / 2, 1030 + f);
      b.lineTo(e + g - c$$0 / 2, 1030 + f);
      b.fill();
      b.restore();
      e = h$$0.length;
      f = 0;
      for (;f < e;f++) {
        h$$0[f].draw(b, d);
      }
    };
    this.drawWaterArea = function(b, d, h, e, r, s, z) {
      z = a$$0 * g;
      var p = B / 2 + -30;
      b.save();
      b.fillStyle = h;
      b.beginPath();
      b.moveTo(z + g - c$$0 / 2, f$$0[0] * s + p + d);
      h = 1;
      for (;25 > h;h++) {
        var u = h;
        u = u + parseInt(25 * r);
        u = u % 25;
        b.lineTo(z + (h + 1) * g - c$$0 / 2, f$$0[u] * s + d + p);
      }
      b.lineTo(z + 25 * g - c$$0 / 2, e + d + p);
      b.lineTo(z + g - c$$0 / 2, e + d + p);
      b.fill();
      b.restore();
    };
    this.disturbSurface = function(c, d) {
      var h = 12.5;
      h = Math.floor(c / g) - a$$0 + 12.5;
      b$$0(h - 2, d / 2);
      b$$0(h - 1, d / 2);
      b$$0(h, d);
      b$$0(h + 1, d / 2);
      b$$0(h + 2, d / 2);
    };
    (function() {
      e$$0 = [];
      f$$0 = [];
      var a = 0;
      for (;25 > a;a++) {
        e$$0.push(0);
        f$$0.push(0);
      }
    })();
  };
  var $c = function() {
    var b$$0 = [118.17, 11.98, 26.9, -3.43, 1.91, -19.41, 0.45, -19.48, -0.82, -19.55, -52.05, 2.79, -118.88, 11.55, -121.21, 11.85, -0.57, -3.74, 0.26, -4.04, 0.57, -4.15, 121.8, 12.59, 118.17, 11.98];
    var e;
    var f;
    var d$$0;
    var a$$0;
    this.deleting = false;
    var c$$0 = 0;
    this.speed = 0.02;
    this.setPosition = function(c, b, r) {
      e = c;
      f = b;
      d$$0 = r;
      a$$0 = d$$0 / 250;
    };
    this.update = function(a) {
      c$$0 += a / 1E3 * this.speed * 60;
      if (c$$0 >= Math.PI) {
        this.deleting = true;
      }
    };
    this.draw = function(d, h) {
      if (!this.deleting) {
        d.save();
        var r = Math.sin(c$$0);
        d.globalAlpha = Math.sqrt(r);
        d.translate(e, f - 4 * c$$0 + h / 500 * 150 * a$$0);
        d.scale(0 + 1 * r, 0 + 0.8 * r);
        d.translate(0, -20);
        d.fillStyle = "#b3dff9";
        d.beginPath();
        r = b$$0.length;
        var n = 0.1 + 0.9 * a$$0;
        d.moveTo(b$$0[0] * n + 0, b$$0[1] * n + 0);
        var k = 2;
        for (;k < r;k += 6) {
          d.bezierCurveTo(b$$0[k] * n + 0, b$$0[k + 1] * n + 0, b$$0[k + 2] * n + 0, b$$0[k + 3] * n + 0, b$$0[k + 4] * n + 0, b$$0[k + 5] * n + 0);
        }
        d.fill();
        d.restore();
      }
    };
  };
  var bd = function() {
    var b$$0 = [[-142.21, -1.18, -143.28, 0.36, -123.09, 11.23, -103.01, 13.96, -81.96, 16.82, -65.17, 14.9, -64.36, 15.65, -41.42, 37.12, -28.62, 36.17, -16.75, 36.02, 18.19, 35.56, 38.19, 16.67, 39.3, 18.03, 50.57, 31.83, 67.87, 39.26, 84.68, 33.47, 95.27, 29.83, 123.57, 5.67, 121.35, -3.74, 118.45, -15.98, 89.66, -8.14, 88.44, -10.77, 74.28, -41.45, 51.47, -22.75, 50.8, -23.76, 38.13, -43.02, 24.97, -62.52, -2.75, -60.1, -31.37, -57.6, -55.13, -17.35, -55.49, -17.57, -98.49, -44.18, -132.86, -14.55, 
    -142.21, -1.18], [-162.55, -1.68, -169.22, -19.07, -134.4, -35.44, -105.42, -35.13, -45.5, -34.48, -16.08, -8.51, 20.84, -12.63, 32.11, -13.89, 20.28, -39.57, 35.04, -45.63, 50.56, -52, 67.52, -44.38, 81.19, -32.08, 94.38, -20.22, 83.96, -10.24, 86.36, -8.17, 92.3, -3.06, 110.55, -8.9, 114.01, -1.75, 116.98, 4.4, 87.88, 27.98, 55.69, 21.98, 53.83, 21.64, 55.47, 33.56, 20.71, 36.54, 5.28, 37.87, -8.91, 30.47, -14.55, 25.77, -17.17, 23.58, -33.82, 38.42, -52.98, 36.38, -65.86, 35.01, -74.62, 20.26, 
    -78.34, 16.38, -80.92, 13.67, -151.51, 27.09, -162.55, -1.68], [-132.9, 30.86, -125.9, 10.58, -96.55, -22.97, -85.94, -23.79, -61.71, -25.67, -53.16, -17.53, -50.03, -17.63, -46.79, -17.74, -37.17, -49.76, -6.45, -50.02, 26.73, -50.29, 38.01, -16.34, 44.61, -16.75, 52.59, -17.25, 57.84, -24.32, 79.01, -23.54, 98.83, -22.8, 96.09, -12.23, 103.77, -9.21, 111.97, -5.97, 134.38, -11.68, 144.73, 7.12, 152.17, 20.65, 110.44, 38.48, 91.74, 39.3, 47.05, 41.27, -50.64, 19.62, -67.45, 24.81, -90.4, 31.9, 
    -100.01, 37.45, -121.08, 38.84, -125.4, 39.13, -134.8, 36.38, -132.9, 30.86], [-142.3, 3.86, -142.68, -5.86, -66.59, -26.42, -45.57, -34.65, -22.55, -43.64, -21.3, -84.89, 5.81, -86.9, 25.18, -88.34, 99.82, -49.94, 103.2, -10.26, 104.1, 0.3, 137.86, -21.94, 136.83, -10.3, 133.75, 24.38, 117.81, 21.85, 111.08, 24.7, 107.63, 26.15, 88.76, 26.4, 83.17, 23.68, 82.44, 23.32, 49.7, 40.09, 19.75, 36.6, -18.88, 32.08, -37.22, 21.23, -53.51, 11.08, -57.67, 8.49, -66.63, 26.07, -94.62, 26.33, -103.38, 
    26.41, -112.73, 24.98, -123.85, 15.85, -126.35, 13.8, -141.87, 14.59, -142.3, 3.86], [-142.63, 14.15, -142.06, 12.44, -131.98, 6.01, -92.96, -13.64, -80.08, -20.13, -78.45, -40.22, -32.37, -45.14, 6.08, -49.25, 5.44, -26.43, 8.78, -26.51, 11.15, -26.56, 20.61, -40.86, 44.75, -43.15, 61.05, -44.69, 72.86, -34.19, 77.21, -31.3, 84.42, -26.5, 149.08, -20.62, 150.6, 0.29, 152.12, 21.2, 123.52, 42.13, 64.54, 49.68, 23.28, 54.96, 37.73, 31.1, 25.32, 30.57, 13.73, 30.07, -6.57, 48.69, -21.45, 46.17, 
    -44.71, 42.24, -48.23, 33.33, -81.8, 18.87, -122.06, 1.53, -142.83, 14.75, -142.63, 14.15], [-128.91, -3.91, -100.79, -29.51, -75.44, -28.12, -55.48, -25.64, -35.53, -23.16, -10.93, -12.78, 7.7, -16, 15.92, -17.42, 33.99, -43.08, 54.49, -43.88, 83.11, -44.99, 85.4, -21.07, 89.46, -21.25, 94.52, -21.48, 107.89, -29.23, 117.73, -3.17, 118.89, -0.07, 136.54, 16.66, 149.39, 19.53, 149.68, 19.59, 95.95, 10.58, 17.5, 16.07, -5.04, 17.65, -60.8, 45.1, -108.87, 48.31, -130.84, 49.78, -145.13, 42.1, -143.01, 
    29.93, -140.38, 14.79, -134.29, 0.99, -128.91, -3.91], [-105.63, 33.5, -112.73, 24.78, -104.42, 20.23, -104.9, 18.35, -106.19, 13.28, -101.31, -5.25, -88.8, -11.01, -73.37, -18.1, -65.27, -18.01, -49.55, -16.92, -46.11, -16.68, -52.73, -32.67, -37.48, -39.53, -19.05, -47.81, 18.24, -26.76, 24.38, -21.56, 26.14, -20.07, 44.72, -32.26, 63.81, -26.11, 106.07, -12.51, 112.47, 3.21, 124.03, 10.2, 146.91, 24.05, 177.98, 16.35, 176.28, 17.17, 108.58, 50.11, -0.39, 35.83, -2.15, 35.9, -18.66, 36.6, -90.36, 
    52.25, -105.63, 33.5], [-515.42, -79.84, -511.96, -82.38, -492.91, -99.15, -444.49, -84.74, -379.42, -65.39, -353.57, -29.63, -347.84, -16.74, -347.52, -16.02, -326.45, -32.16, -294.56, -21.93, -266.34, -12.88, -255.45, 16.99, -233.61, 34.9, -195.97, 65.76, -153.63, 30.14, -135.04, 43.22, -79.08, 82.59, 0.11, -91.66, 104.06, 4.27, 177.97, 72.49, 215.12, 9.81, 234.44, 16.08, 252.34, 21.9, 289.03, 43.31, 332.29, 27.33, 368.2, 14.06, 416.81, -38.28, 429.68, -21.59, 445.63, -0.91, 440.5, -8.41, 442.5, 
    -17, 454.3, -67.56, 497.46, -97.75, 506.29, -79.88, 515.12, -62.02, 527.33, 105.09, 482.02, 105.88, 436.97, 106.67, -558.17, 136.12, -560.32, 90.04, -566.63, -45.23, -534.53, -65.79, -515.42, -79.84]];
    var e$$0 = [[876.66, -374.819, 1, 1.26], [97.633, -380.736, 0, 1], [192.926, 241.051, 2, 1], [-600.648, -471.205, 3, 1], [-1012.119, -182.729, 4, 1], [-309.131, -16.817, 5, 1], [-909.922, 275.895, 6, 1], [433.972, -27.105, 4, 0.82], [1061.589, 28.127, 5, 1], [1393.747, -174.289, 5, 0.61], [1571.903, 160.019, 0, 1.4], [2070.708, -424.461, 5, 1], [1890.094, -38.011, 3, 0.74], [2641.256, 167.835, 2, 1.3], [2775.003, -273.566, 1, 1.73], [3600.865, -10.901, 6, 1], [4304.657, -434.446, 3, 1.02], [4514.504, 
    49.961, 5, 1.34], [-1873.248, 78.997, 2, 1.85], [-1738.956, -423.752, 0, 1], [-2562.487, -248.492, 5, 1], [-2908.07, 273.062, 1, 1], [-3511.442, -140.75, 3, 1], [-3067.546, -513.007, 5, 1], [-4294.653, 81.801, 4, 1.18], [-4341.772, -444.099, 2, 1.49], [4534.451, 552.148, 7, 1], [3523.869, 548.891, 7, 1], [2523.538, 545.869, 7, 1], [1527.226, 539.951, 7, 1], [524.44, 534.033, 7, 1], [-491.107, 531.244, 7, 1], [-1491.259, 530.667, 7, 1], [-2491.026, 527.456, 7, 1], [-3488.818, 522.618, 7, 1], [-4489.133, 
    520.724, 7, 1], [5540.582, 549.447, 7, 1], [6532.003, 553.506, 7, 1], [5332.871, -202.519, 3, 0.92], [6297.753, -518.992, 0, 1.4], [6571.46, 146.567, 1, 1], [-5608.643, -91.44, 1, 1], [-6554.049, -474.834, 5, 1], [-6324.28, 338.097, 5, 1], [-5497.194, 515.894, 7, 1], [-6495.769, 511.43, 7, 1]];
    var f$$0 = [];
    var d$$0 = [];
    this.drawCloudShape = function(a, c, b, d, e) {
      a.beginPath();
      var f = d.length;
      a.moveTo(d[0] * e + c, d[1] * e + b);
      var k = 2;
      for (;k < f;k += 6) {
        a.bezierCurveTo(d[k] * e + c, d[k + 1] * e + b, d[k + 2] * e + c, d[k + 3] * e + b, d[k + 4] * e + c, d[k + 5] * e + b);
      }
      a.fill();
    };
    this.drawCloud = function(a, c, g, h, e, f, k, m) {
      if (-7E3 > c) {
        c = (-c + 7E3) % 14E3;
        c = 7E3 - c;
      }
      var l = c + d$$0[h][0] * e;
      var x = g + d$$0[h][1] * e;
      var s = c + d$$0[h][2] * e;
      var z = g + d$$0[h][3] * e;
      var p = E.getBounds();
      l = l > p[1].x || (s < p[0].x || (x > p[1].y || z < p[0].y)) ? false : true;
      if (l) {
        a.save();
        a.fillStyle = "rgba(190,227,249," + f + ")";
        this.drawCloudShape(a, c, g, b$$0[h], e);
        a.clip();
        a.fillStyle = "rgba(179,222,250," + f + ")";
        this.drawCloudShape(a, c + k, g + m, b$$0[h], e);
        a.restore();
      }
    };
    this.drawPreRenderedCloud = function(a, c, b, h, e, n) {
      if (-7E3 > c) {
        c = (-c + 7E3) % 14E3;
        c = 7E3 - c;
      }
      var k = d$$0[e][0];
      var m = d$$0[e][1];
      var l = c + k * n;
      var x = b + m * n;
      var s = c + d$$0[e][2] * n;
      e = b + d$$0[e][3] * n;
      var z = E.getBounds();
      l = l > z[1].x || (s < z[0].x || (x > z[1].y || e < z[0].y)) ? false : true;
      if (l) {
        a.drawImage(f$$0[h], c + k * n, b + m * n);
      }
    };
    this.update = function(a) {
      Va -= 0.03 * a;
    };
    this.drawClouds = function(a) {
      var c = e$$0.length;
      var b = 0;
      for (;b < c;b++) {
        var d = 2;
        var f = e$$0[b][0];
        var n = e$$0[b][1];
        var k = 1;
        var m = 1;
        var l = 3;
        var x = 9;
        if (0 == b % 2 && 7 != e$$0[b][2]) {
          f += 0.2 * (H.x - f);
          n += 0.2 * (H.y - n);
          k = 0.2;
          m = 0.7;
          l = 1;
          x = 3;
          d = 0.5;
          n *= Hb;
        } else {
          if (7 == e$$0[b][2]) {
            k = 0.8;
            n = Kb;
          }
        }
        this.drawCloud(a, f + Va / 4 * d, n, e$$0[b][2], e$$0[b][3] * m, k, l, x);
      }
    };
    this.drawPreRenderedClouds = function(a) {
      var c = e$$0.length;
      var b = Va;
      var d = Hb;
      if (!ua) {
        d = 0.6;
        b = 200;
      }
      var f = 0;
      for (;f < c;f++) {
        var n = 2;
        var k = e$$0[f][0];
        var m = e$$0[f][1];
        var l = 1;
        if (0 == f % 2 && 7 != e$$0[f][2]) {
          k += 0.2 * (H.x - k);
          m += 0.2 * (H.y - m);
          n = 0.5;
          m *= d;
          l = 0.7;
        } else {
          if (7 == e$$0[f][2]) {
            m = Kb;
          }
        }
        this.drawPreRenderedCloud(a, k + b / 4 * n, m, f, e$$0[f][2], e$$0[f][3] * l);
      }
    };
    this.preRender = function(a) {
      a = e$$0.length;
      var c = 1;
      var g = 0;
      for (;g < a;g++) {
        var h = e$$0[g][2];
        var r = -d$$0[h][0] + d$$0[h][2];
        var n = -d$$0[h][1] + d$$0[h][3];
        var k;
        k = y$$1.createElement("canvas");
        var m = k.getContext("2d");
        var l = c = 1;
        var x = 3;
        var s = 9;
        if (0 == g % 2 && 7 != e$$0[g][2]) {
          c = 0.2;
          l = 0.7;
          x = 1;
          s = 3;
        } else {
          if (7 == e$$0[g][2]) {
            c = 0.8;
          }
        }
        l = e$$0[g][3] * l;
        var z = -d$$0[h][0] * l;
        var p = -d$$0[h][1] * l;
        k.width = r * l;
        k.height = n * l;
        m.fillStyle = "rgba(190,227,249," + c + ")";
        this.drawCloudShape(m, z, p, b$$0[h], l);
        m.clip();
        m.fillStyle = "rgba(179,222,250," + c + ")";
        this.drawCloudShape(m, z + x, p + s, b$$0[h], l);
        f$$0.push(k);
      }
    };
    (function() {
      var a = 0;
      for (;a < b$$0.length;a++) {
        var c = b$$0[a];
        var e = c.length;
        var h = 9999;
        var f = 9999;
        var n = -9999;
        var k = -9999;
        var m = true;
        var l = 0;
        for (;l < e;l++) {
          var x = c[l];
          if (m) {
            if (x < h) {
              h = x;
            }
            if (x > n) {
              n = x;
            }
          } else {
            if (x < f) {
              f = x;
            }
            if (x > k) {
              k = x;
            }
          }
          m = !m;
        }
        d$$0.push([h, f, n, k]);
      }
    })();
    this.preRender();
  };
  var dd = function() {
    var b$$0 = [];
    var e$$0 = 0;
    var f$$0;
    this.waves;
    var d$$0 = function() {
      this.vertexes = [];
      this.type = 0;
      this.add = function(a, c, b) {
        this.vertexes.push({
          x : a,
          y : c
        });
        this.type = b;
      };
      this.draw = function(a, c) {
        if (7 == this.type) {
          if (a.fillStyle = "#F0F000", 3 != c) {
            return;
          }
        } else {
          if (8 == this.type) {
            if (a.fillStyle = "#0000F0", 2 != c) {
              return;
            }
          } else {
            if (a.fillStyle = "#f00000", 1 != c) {
              return;
            }
          }
        }
        a.beginPath();
        var b = this.vertexes.length;
        var d = this.vertexes[0];
        a.moveTo(d.x, d.y);
        d = 1;
        for (;d < b;d++) {
          var e = this.vertexes[d];
          a.lineTo(e.x, e.y);
        }
        a.closePath();
        a.fill();
      };
    };
    var a$$0 = function() {
      this.posY = this.posX = 0;
      this.radius = 10;
      this.draw = function(a, c) {
        if (1 == c) {
          a.beginPath();
          a.fillStyle = "#f00";
          a.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
          a.closePath();
          a.fill();
        }
      };
    };
    this.loadColliders = function(c$$0) {
      var e = new XMLHttpRequest;
      e.open("GET", c$$0, true);
      e.responseType = "arraybuffer";
      e.onload = function(c) {
        if (c = e.response) {
          c = new DataView(c);
          var g = 0;
          var k = c.getUint8(g, true);
          g = g + 1;
          if (191 != k) {
            console.log("ERROR LOADING MAP FILE");
          } else {
            for (;;) {
              var f = c.getUint8(g, true);
              g = g + 1;
              if (0 == f) {
                break;
              } else {
                if (1 == f || (2 == f || (3 == f || (4 == f || (5 == f || (6 == f || (7 == f || 8 == f))))))) {
                  if (k = c.getUint8(g, true), g += 1, 1 == k) {
                    k = c;
                    f = new a$$0;
                    var l = k.getFloat32(g, true);
                    g = g + 4;
                    var x = k.getFloat32(g, true);
                    g = g + 4;
                    k = k.getFloat32(g, true);
                    g = g + 4;
                    f.posX = 10 * l;
                    f.posY = 10 * -x;
                    f.radius = 10 * k;
                    b$$0.push(f);
                  } else {
                    if (2 == k) {
                      k = c;
                      l = k.getUint16(g, true);
                      g += 2;
                      x = 0;
                      for (;x < l;x++) {
                        var s = k.getUint16(g, true);
                        g = g + 2;
                        var z = new d$$0;
                        var p = 0;
                        for (;p < s;p++) {
                          var u = k.getFloat32(g, true);
                          g = g + 4;
                          var q = k.getFloat32(g, true);
                          g = g + 4;
                          z.add(10 * u, 10 * -q, f);
                        }
                        b$$0.push(z);
                      }
                    }
                  }
                } else {
                  if (9 == f || (10 == f || 11 == f)) {
                    g += 4;
                    g += 4;
                    g += 4;
                  } else {
                    if (43 == f) {
                      g += 4;
                      g += 4;
                      g += 4;
                    }
                  }
                }
              }
            }
          }
        }
      };
      e.send(null);
      console.log("Map loaded!");
    };
    this.drawColliders = function(a) {
      var c = b$$0.length;
      var d = 0;
      for (;d < c;d++) {
        b$$0[d].draw(a, 1);
      }
    };
    this.drawWater = function(a) {
      if (Ja) {
        var c = b$$0.length;
        var d = 0;
        for (;d < c;d++) {
          b$$0[d].draw(a, 2);
        }
      }
    };
    this.drawGrassSand = function(a) {
      var c = b$$0.length;
      var d = 0;
      for (;d < c;d++) {
        b$$0[d].draw(a, 3);
      }
    };
    this.drawGradient = function(a) {
      var c = (canvas.width / 2 + (E.x * E.zoom - canvas.width / 2)) / E.zoom;
      var b = (canvas.height / 2 + (E.y * E.zoom - canvas.height / 2)) / E.zoom;
      var d = 0.75 * B;
      if (v.isSpaceWars()) {
        d = B;
      }
      d = a.createLinearGradient(0, -d, 0, d);
      var f = 39;
      var m = 161;
      if (v.isSpaceWars()) {
        f = 0;
        m = 55;
      }
      if (0 < e$$0) {
        var l = e$$0 / 2500;
        if (1 < l) {
          l = 1;
        }
        f += (255 - f) * l;
        m += (255 - m) * l;
      }
      if (v.isSpaceWars()) {
        d.addColorStop(0, "rgba(" + parseInt(f) + ",0,0,1.0)");
        d.addColorStop(0.3, "rgba(" + parseInt(m) + ",0,55,1.0)");
        d.addColorStop(0.5, "rgba(" + parseInt(m) + ",0,75,1.0)");
        d.addColorStop(0.7, "rgba(" + parseInt(m) + ",0,55,1.0)");
        d.addColorStop(1, "rgba(" + parseInt(f) + ",0,0,1.0)");
      } else {
        if (sb) {
          d.addColorStop(0, "rgba(" + parseInt(f) + ",145,202,1.0)");
          d.addColorStop(1, "rgba(" + parseInt(m) + ",231,252,1.0)");
        } else {
          d = "#62bae2";
        }
      }
      a.fillStyle = d;
      a.fillRect(c - canvas.width / 2 / E.zoom, b - canvas.height / 2 / E.zoom, canvas.width / E.zoom, canvas.height / E.zoom);
    };
    this.drawWaterBehind = function(a) {
      if (Ja) {
        this.waves.drawBehind(a);
      }
    };
    this.drawWaterFront = function(a) {
      if (Ja) {
        this.waves.drawFront(a);
      }
    };
    this.drawLimits = function(a) {
      var c = (canvas.width / 2 + (E.x * E.zoom - canvas.width / 2)) / E.zoom;
      var b = (canvas.height / 2 + (E.y * E.zoom - canvas.height / 2)) / E.zoom;
      var d = 500;
      var e = 2 * B;
      var f = 0;
      var l = 0;
      var x = 0;
      var s = 0;
      if (0 < c) {
        var z = S - c;
        if (z < d) {
          f = Math.min(1 - z / d, 1);
          f *= 0.2;
        }
      } else {
        z = S + c;
        if (z < d) {
          l = Math.min(1 - z / d, 1);
          l *= 0.2;
        }
      }
      if (v.isSpaceWars()) {
        d = 200;
        if (0 > b) {
          z = B / 2;
          z += b;
          if (z < d) {
            x = Math.min(1 - z / d, 1);
            x *= 0.2;
          }
        } else {
          z = B / 2;
          z -= b;
          if (z < d) {
            s = Math.min(1 - z / d, 1);
            s *= 0.2;
          }
        }
      }
      if (0 < c) {
        d = f;
        d = x > d ? x : d;
        f = d = s > d ? s : d;
      } else {
        d = l;
        d = x > d ? x : d;
        l = d = s > d ? s : d;
      }
      s = x = d;
      if (0 < f) {
        a.fillStyle = "rgba(200,0,0," + f + ")";
        a.fillRect(S, -e / 2, 2500, e);
      } else {
        a.fillStyle = "rgba(200,0,0," + l + ")";
        a.fillRect(-S - 2500, -e / 2, 2500, e);
      }
      if (v.isSpaceWars()) {
        if (0 > b) {
          a.fillStyle = "rgba(200,0,0," + x + ")";
          a.fillRect(-S, -B / 2 - 2500, 2 * S, 2500);
        } else {
          a.fillStyle = "rgba(200,0,0," + s + ")";
          a.fillRect(-S, B / 2, 2 * S, 2500);
        }
      }
      if (!v.isSpaceWars()) {
        a.fillStyle = "rgba(255,255,255,0.10)";
        a.fillRect(c - canvas.width / 2 / E.zoom, -B / 2 - 1, canvas.width / E.zoom, 6);
      }
    };
    this.draw = function(a) {
      if (pb && !v.isSpaceWars()) {
        var c = 0.97 * E.x + 450;
        var b = 0.97 * E.y - 100;
        var d = a.createRadialGradient(c, b, 70, c, b, 350);
        d.addColorStop(0, "rgba(255,255,255,0.4)");
        d.addColorStop(0.1, "rgba(255,255,255,0.13)");
        d.addColorStop(0.15, "rgba(255,255,255,0.05)");
        d.addColorStop(0.2, "rgba(255,255,255,0)");
        a.fillStyle = d;
        a.fillRect(c - 175, b - 175, 350, 350);
        a.fillStyle = "rgba(255,255,255,1)";
        a.beginPath();
        a.arc(c, b, 70, 0, 2 * Math.PI);
        a.fill();
      }
      if (nb) {
        if (!v.isSpaceWars()) {
          f$$0.drawPreRenderedClouds(a);
        }
      }
    };
    var c$$1 = false;
    this.update = function(a) {
      if (ua || !c$$1) {
        if (c$$1 = true, this.waves.update(a), f$$0.update(a), null != u) {
          var b = u.x < -S || u.x > S;
          if (v.isSpaceWars()) {
            b |= u.y > B / 2 || u.y < -B / 2;
          }
          if (b) {
            if (0 == e$$0) {
              J.playSound(cd, 1, 1, 1, null);
              G.showWarningMessage("YOU ABANDONED THE FIGHT!");
            }
            e$$0 += a;
          } else {
            if (0 < e$$0) {
              G.clearWarningMessage();
            }
            e$$0 = 0;
          }
        }
      }
    };
    this.waves = new ad;
    f$$0 = new bd;
  };
  var Ga = 1;
  var Za = 2;
  var Ra = 4;
  var Ma = 8;
  var va = 16;
  var ab = 128;
  var bb = 256;
  var ed = function() {
    this.id = -1;
    this.y = this.x = 0;
    this.radius = 1.5;
    this.type;
    this.sinScaleY = this.sinScaleX = 0;
    this.fadingOut = this.grabbing = false;
    var b$$0 = this.alpha = 0;
    var e = 0;
    var f$$0 = Math.random() * Math.PI * 2;
    var d$$0 = 1;
    var a$$0 = 0;
    var c$$0 = 0;
    var g$$0 = 0;
    var h$$0;
    var r;
    var n = 1;
    var k = 1;
    var m = 1;
    var l = 0;
    var x = false;
    this.update = function(f) {
      var z = 0.06 * f;
      if (64 != this.type) {
        if (!v.isSpaceWars()) {
          var p = B / 2 - 20;
          var u = this.y + e;
          l += f / 400;
          if (u < p) {
            if (u > p - 30) {
              d$$0 = (p - u) / 30;
            }
            if (1 > this.alpha) {
              this.alpha += f / 1E3;
              if (1 < this.alpha) {
                this.alpha = 1;
              }
            }
            e = (N - b$$0) / 1E3 * wc * 60;
          } else {
            a$$0 += 0.1 * z;
            e += 0.1;
            k -= 0.008;
            if (0 > k) {
              k = 0;
            }
            m = Math.sqrt(k);
          }
        }
        if (this.fadingOut) {
          if (x || (v.isSpaceWars() || v.isInstagib())) {
            delete I[this.id];
          } else {
            e += 0.25;
            this.alpha -= f / 1E3;
            if (0 >= this.alpha) {
              delete I[this.id];
            }
          }
        }
      }
      if (this.grabbing) {
        if (f = D[c$$0]) {
          p = Math.pow(g$$0, 2);
          this.x = h$$0 + (f.x - h$$0) * p;
          this.y = r + (f.y - r) * p;
          n = 1 - p;
          g$$0 += 0.07 * z;
          if (1 < g$$0) {
            delete I[this.id];
          }
        } else {
          delete I[this.id];
        }
      }
    };
    this.drawItem = function(c, b) {
      if (64 == this.type) {
        c.save();
        c.beginPath();
        this.sinScaleX += 0.1;
        this.sinScaleY += 0.12;
        c.translate(this.x, this.y + e);
        c.scale((1 + Math.sin(this.sinScaleX) / 6) * n * 1.3, (1 + Math.sin(this.sinScaleY) / 6) * n * 1.3);
        b.draw(c);
      } else {
        if (x || v.isSpaceWars()) {
          if (u) {
            if (v.isSpaceWars()) {
              if (u.id == na) {
                g = 0.3;
              }
            }
          }
          c.save();
          c.beginPath();
          this.sinScaleX += 0.1;
          this.sinScaleY += 0.12;
          c.translate(this.x, this.y);
          c.scale((1 + Math.sin(this.sinScaleX) / 6) * n * 1.3, (1 + Math.sin(this.sinScaleY) / 6) * n * 1.3);
          c.scale(2, 2);
          c.globalAlpha = g;
          p.frames.wing.draw(c);
          c.scale(0.5, 0.5);
          b.draw(c);
        } else {
          var g = 1;
          if (!!u) {
            if (!(u.weapon != va)) {
              if (!(this.type != Za && (this.type != Ra && (this.type != Ma && (this.type != ab && this.type != bb))))) {
                g = 0.3;
              }
            }
          }
          var h = p.frames.parachute;
          h.y = -h.height / 2 + 100 * (1 - m);
          c.save();
          if (this.grabbing) {
            c.translate(this.x, this.y);
          } else {
            c.translate(this.x, this.y + e);
          }
          c.rotate(0.2 * Math.sin(l + f$$0) * d$$0);
          c.scale(1 * n, 1 * n);
          c.translate(0, 10);
          c.globalAlpha = this.alpha * g * 1;
          c.save();
          if (0 < a$$0) {
            c.globalAlpha = m * g * 1;
          }
          c.scale(1 * (1 + (1 - m)), 1 * m);
          h.draw(c);
          c.restore();
          g = 0;
          if (this.type == va) {
            g = 8;
          }
          c.translate(0, 4 * Math.sin(a$$0) + g + 10);
          b.draw(c);
          c.globalAlpha = 1;
        }
      }
      c.restore();
    };
    this.draw = function(a) {
      if (qb) {
        var c = 40;
        var b;
        if (32 == this.type) {
          b = p.frames.health;
        } else {
          if (this.type == Za) {
            b = p.frames.trishoot;
          } else {
            if (this.type == Ma) {
              b = p.frames.railgun;
            } else {
              if (this.type == Ra) {
                b = p.frames.missile;
              } else {
                if (this.type == ab) {
                  b = p.frames.melee;
                } else {
                  if (this.type == bb) {
                    b = p.frames.bombdrop;
                  } else {
                    if (this.type == va) {
                      b = p.frames.laser;
                    } else {
                      if (64 == this.type) {
                        c = 10;
                        b = p.frames.wing;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        var d = this.y;
        if (!this.grabbing) {
          d += e;
        }
        if (!this.grabbing) {
          if (!X(this.x, d, c)) {
            return;
          }
        } else {
          if (!X(this.x, this.y, c)) {
            return;
          }
        }
        this.drawItem(a, b);
      }
    };
    this.fadeOut = function() {
      this.fadingOut = true;
    };
    this.playerGrab = function(a) {
      this.grabbing = true;
      c$$0 = a;
      this.y += e;
      h$$0 = this.x;
      r = this.y;
      delete I[this.id];
      this.id = "g" + this.id;
      I[this.id] = this;
      if (u) {
        if (c$$0 == u.id) {
          if (!v.isInstagib()) {
            if (64 == this.type) {
              u.incScore(rc);
            } else {
              u.incScore(sc);
            }
          }
        }
      }
    };
    this.setPosition = function(a, c) {
      this.x = 10 * a;
      this.y = 10 * c;
      if (this.y > -B / 2) {
        this.alpha = 1;
      }
      b$$0 = +new Date;
    };
    if (v.isSpaceWars()) {
      x = true;
    }
  };
  var sd = function() {
    function b$$0(b, a, c) {
      if (!(169 != a && (172 != a && (162 != a && 178 != a)))) {
        if (!c) {
          ha = [];
        }
      }
      var e = false;
      var h = 1;
      var f = 1;
      var n = 0;
      if (!c) {
        window.A.lastUpdateBool = !window.A.lastUpdateBool;
      }
      for (;;) {
        n++;
        var k = b.getUint32(h, true);
        h = h + 4;
        if (0 == k) {
          c = b;
          f = a;
          n = c.getUint8(h, true);
          h += 1;
          k = 0;
          for (;k < n;k++) {
            var m = c.getUint32(h, true);
            h = h + 4;
            if (163 == f || (162 == f || 169 == f)) {
              var l = c.getUint8(h, true);
              h = h + 1;
            }
            var x = c.getFloat32(h, true);
            h = h + 4;
            var s = -c.getFloat32(h, true);
            h = h + 4;
            var p = c.getUint32(h, true);
            h = h + 4;
            var q = Z[m];
            if (null == q) {
              q = new fd;
              Z[m] = q;
              if (!(163 != f && (162 != f && 169 != f))) {
                q.setType(l);
              }
              m = D[p];
              var v = false;
              if (!m) {
                v = true;
                m = Q[p];
              }
              if (m) {
                var w = O;
                var y = 1;
                if (v) {
                  w = Oa;
                  v = ra(m.x, m.y, H.x, H.y);
                  y = 1 - v / Na;
                  if (0.01 < y) {
                    J.playSound(gd, y, 1, w, null);
                  }
                  m.cannonShoot();
                } else {
                  if (!(u && p == u.id)) {
                    w = Oa;
                    v = ra(m.x, m.y, H.x, H.y);
                    y = 1 - v / Na;
                  }
                  if (0.01 < y) {
                    J.playSound(hd, y, 1, w, null);
                  }
                  m.ammo--;
                }
              }
            }
            q.lastUpdate = N;
            q.setPosition(x, s, p);
          }
          if (162 == a || (178 == a || (163 == a || (179 == a || (169 == a || 172 == a))))) {
            l = h;
            for (;;) {
              c = b.getUint32(l, true);
              l += 4;
              if (0 == c) {
                break;
              }
              h = Q[c];
              if (178 == a || 162 == a) {
                f = b.getUint8(l, true);
                l += 1;
                if (null == h) {
                  h = new jd;
                  Q[c] = h;
                  h.setType(f);
                }
              }
              h.id = c;
              h.lastUpdate = N;
              c = b.getFloat32(l, true);
              l += 4;
              f = -b.getFloat32(l, true);
              l += 4;
              n = b.getFloat32(l, true);
              l += 4;
              k = b.getUint16(l, true);
              l += 2;
              x = b.getUint8(l, true);
              l += 1;
              if (h.type == zb) {
                s = -b.getFloat32(l, true);
                l += 4;
                p = b.getFloat32(l, true);
                l += 4;
                h.setCannonAngle(p);
                h.setFloatValue(s);
              } else {
                if (!(h.type != cb)) {
                  if (!(162 != a && 178 != a)) {
                    s = b.getUint8(l, true);
                    l += 1;
                    h.setFragment(s);
                  }
                }
              }
              h.setState(x);
              h.setPose(c, f, n);
              h.setEnergy(k);
            }
          }
          break;
        }
        var t = b.getUint16(h, true);
        h = h + 2;
        x = t & 1;
        s = t & 2;
        var E = t & 4;
        p = t & 1024;
        q = t & 2048;
        if (!(1 != n)) {
          if (!(163 != a && 179 != a)) {
            na = t & 512 ? k : 0;
          }
        }
        if (x) {
          m = b.getFloat32(h, true);
          h += 4;
          w = -b.getFloat32(h, true);
          h += 4;
          v = b.getFloat32(h, true);
          h += 4;
          y = b.getUint8(h, true);
          h += 1;
        }
        var C = D[k];
        var P = t & 256;
        if (C && (P && C.setFrenzy(), C.setPaused(E), u == C)) {
          E = t & 8;
          var V = t & 16;
          var L = t & 32;
          var ba = t & 128;
          var B = t & 4096;
          if (t & 64) {
            G.addBonus(64, 0);
          } else {
            if (L) {
              G.addBonus(32, 0);
            } else {
              if (V) {
                G.addBonus(16, 0);
              } else {
                if (E) {
                  G.addBonus(8, 0);
                }
              }
            }
          }
          if (B) {
            G.addBonus(4096, 0);
            Xa[C.id] = 0;
          }
          if (ba) {
            G.addBonus(128, 0);
          }
          if (P) {
            G.addBonus(256, C.getKills());
          }
        }
        var ca;
        if (162 == a || (178 == a || (169 == a || 172 == a))) {
          ca = b.getUint32(h, true);
          h += 4;
        }
        if (162 != a && 178 != a || !x) {
          if (!(162 != a && 178 != a)) {
            if (!x) {
              if (!(null != C)) {
                C = new Rb;
                D[k] = C;
                C.inGame = false;
              }
            }
          }
        } else {
          if (162 == a) {
            t = b.getUint16(h, true);
            h += 2;
          } else {
            t = b.getUint8(h, true);
            h += 1;
          }
          P = b.getUint16(h, true);
          h += 2;
          E = b.getUint8(h, true);
          h += 1;
          V = b.getUint8(h, true);
          h += 1;
          L = b.getUint32(h, true);
          h += 4;
          ba = "";
          for (;;) {
            B = b.getUint16(h, true);
            h += 2;
            if (0 == B) {
              break;
            }
            ba += String.fromCharCode(B);
          }
          if (null == C) {
            C = new Rb;
            D[k] = C;
          }
          if (-1 != ba.indexOf("\ufdfd")) {
            ba = "<Unnamed>";
          }
          C.setColorID(E);
          C.setDecalID(V);
          C.setName(ba);
          C.setFlagInfo(L);
          C.setWeapon(t);
          C.ammo = P;
        }
        if (null == C) {
          console.log("ERROR: Receiving data for a player (" + k + ") that does not exist, ignoring!");
        } else {
          if (C.id = k, C.lastUpdate = N, C.updateBool = window.A.lastUpdateBool, x && (C.setPose(m, w, v), C.energy = y, C.setEnergy(y), C.hover = s, C.setIsBot(p), C.setIsShooting(q)), 169 == a || (172 == a || (162 == a || 178 == a))) {
            C.setScore(ca);
            if (!c) {
              if (1 == f) {
                oc = k;
              }
              ha.push(k);
              e = true;
              C.setRank(f);
              f++;
            }
          }
        }
      }
      if (e) {
        G.refreshLeaderboard(ha);
      }
    }
    function e$$0(b, a) {
      var c = 1;
      var e = b.getUint16(c, true);
      c = c + 2;
      var h = b.getUint32(c, true);
      c = c + 4;
      var f;
      if (168 == a) {
        f = b.getUint8(c, true);
        c += 1;
      } else {
        f = b.getUint16(c, true);
        c += 2;
      }
      if (0 < h) {
        var n = 1;
        var k = kd;
        if (32 > f || (128 == f || 256 == f)) {
          c = b.getUint16(c, true);
          D[h].setWeapon(f);
          D[h].ammo = c;
        } else {
          if (64 == f) {
            D[h].trailEffect();
            k = ld;
            if (null != this.lastGrabbedWingTime) {
              f = N - this.lastGrabbedWingTime;
              if (1E3 > f) {
                window.A.wingsInARow++;
              } else {
                window.A.wingsInARow = 0;
              }
              n = 1 + 0.05 * window.A.wingsInARow;
              if (1.5 < n) {
                n = 1.5;
              }
            }
            this.lastGrabbedWingTime = N;
          } else {
            if (32 == f) {
              k = md;
            }
          }
        }
        if (u) {
          if (h == u.id) {
            J.playSound(k, 1, n, O, null);
          }
        }
        I[e].playerGrab(h);
      } else {
        I[e].fadeOut();
      }
    }
    var f$$0;
    this.firstClientListing = true;
    this.sentHello = this.hasConnection = false;
    this.lastGrabbedWingTime = this.remoteHost = null;
    this.connectRetry = this.wingsInARow = 0;
    this.lastUpdateBool = false;
    this.roomNumber = 0;
    this.directed = false;
    this.roomID = 0;
    this.getServerAndConnect = function() {
      var b = null;
      b = "";
      var a$$0;
      if (!Fb()) {
        a$$0 = parent.location.hash;
      }
      if (a$$0) {
        b = a$$0;
        b = b.substring(1, b.length);
        b = ";" + b;
        window.A.directed = true;
      } else {
        if (Ya.ip) {
          b = Ya.ip;
          b = b.replace("%3A", ":");
          window.A.remoteHost = b;
          window.A.connect();
          return;
        }
      }
      a$$0 = ub;
      if (Ya.cc) {
        a$$0 = Ya.cc;
      }
      if (void 0 == a$$0) {
        setTimeout(window.A.getServerAndConnect, 200);
      } else {
        var c$$0 = "";
        if (fb) {
          c$$0 = "s";
        }
        q.ajax({
          url : "http" + c$$0 + "://master.wings.io/",
          type : "PUT",
          success : function(a) {
            if ("0" == a) {
              q("#topGui").hide();
              q("#topGuiConnecting").hide();
              q("#roomFailed").show();
            } else {
              a = a.split("!");
              window.A.roomID = 0;
              if (1 < a.length) {
                window.A.roomID = a[1];
              }
              var c = a[0];
              a = c.split("/");
              window.A.roomNumber = 0;
              if (1 < a.length) {
                window.A.roomNumber = a[1];
                c = a[0];
              }
              window.A.remoteHost = c;
              window.A.connect();
            }
          },
          error : function() {
            setTimeout(window.A.getServerAndConnect, 1E3);
          },
          dataType : "text",
          contentType : "text/plain",
          method : "PUT",
          cache : false,
          crossDomain : true,
          data : a$$0 + b
        });
      }
    };
    this.connect = function() {
      if (sa) {
        var b = "ws://" + window.A.remoteHost;
        if (fb) {
          b = window.A.remoteHost.split(":")[0].split(".");
          var a = parseInt(window.A.roomNumber) + 8079 + 1E3;
          b = "wss://ip-" + b[0] + "-" + b[1] + "-" + b[2] + "-" + b[3] + ".wings.io:" + a;
        }
        if (0 < window.A.roomNumber) {
          b = b + "/" + window.A.roomNumber;
        }
        try {
          f$$0 = new WebSocket(b);
        } catch (c) {
          setTimeout(window.A.getServerAndConnect, 1E3);
          return;
        }
        f$$0.binaryType = "arraybuffer";
        f$$0.onopen = window.A.onSocketOpen;
        f$$0.onclose = window.A.onSocketClose;
        f$$0.onmessage = window.A.onSocketMessage;
        f$$0.onError = window.A.onError;
      } else {
        setTimeout(window.A.getServerAndConnect, 100);
      }
    };
    this.disconnect = function() {
      if (window.A.directed) {
        if (!Fb()) {
       //  t.location.hash = "";
        }
        window.A.directed = false;
      }
      window.A.roomID = 0;
      if (f$$0) {
        f$$0.close();
      }
    };
    this.onSocketOpen = function(b) {
      window.A.connectRetry = 0;
      window.A.hasConnection = true;
      window.A.directed = false;
      if (p.loaded) {
        window.A.hello();
      }
    };
    this.onSocketClose = function(b) {
      window.A.connectionClosed();
    };
    this.onSocketMessage = function(b) {
      window.A.processMessage(b.data);
    };
    this.onError = function(b) {
      console.log("socket error");
    };
    this.hello = function() {
      window.A.sendSingleByte(1);
      window.A.ping();
      window.A.sentHello = true;
      q("#copyLink").fadeIn(300);
      q("#topGui").show();
      q("#topGuiConnecting").hide();
      q(".btn-needs-server").removeAttr("disabled");
      q("#nick").focus();
    };
    this.processMessage = function(d) {
      d = new DataView(d);
      var a = d.getUint8(0);
      if (0 != a) {
        if (160 == a) {
          var c = 1;
          a = -d.getUint32(c, true);
          c = c + 4;
          var g = d.getFloat32(c, true);
          c = c + 4;
          var f = d.getFloat32(c, true);
          c = c + 4;
          var r = d.getFloat32(c, true);
          c = c + 4;
          var n = d.getFloat32(c, true);
          c = c + 4;
          d.getFloat32(c, true);
          c = c + 4;
          var k = d.getFloat32(c, true);
          c = c + 4;
          var m = d.getFloat32(c, true);
          c = c + 4;
          var l = d.getFloat32(c, true);
          c = c + 4;
          var x = d.getFloat32(c, true);
          d = d.getFloat32(c + 4, true);
          Va = a;
          S = 10 * g;
          B = 10 * f;
          qc = 1E3 * r;
          pc = n;
          Hb = B / 2 / 650;
          Kb = B / 2 - 100;
          wc = k;
          uc = m;
          rc = l;
          sc = x;
          tc = d;
        } else {
          if (161 == a || 171 == a) {
            ic();
            c = 1;
            g = d.getUint32(c, true);
            c += 4;
            f = d.getFloat32(c, true);
            c += 4;
            r = -d.getFloat32(c, true);
            c += 4;
            n = d.getFloat32(c, true);
            c += 4;
            k = d.getUint8(c, true);
            c += 1;
            m = d.getUint8(c, true);
            c += 1;
            d = d.getUint32(c, true);
            u = new Rb;
            u.id = g;
            u.setColorID(k);
            u.setDecalID(m);
            u.setName(myName);
            u.setFlagInfo(d);
            u.setPose(f, r, n);
            u.updateBool = window.A.lastUpdateBool;
            D[g] = u;
            oa = g;
            W = true;
            Bb();
            Sa();
            if (161 == a) {
              Xa[g] = 0;
            }
          } else {
            if (162 == a || 178 == a) {
              b$$0(d, a, false);
              this.firstClientListing = false;
              Sa();
            } else {
              if (169 == a || 172 == a) {
                b$$0(d, a, false);
                Sa();
              } else {
                if (163 == a || 179 == a) {
                  b$$0(d, a, false);
                } else {
                  if (164 == a || 180 == a) {
                    if (164 == a) {
                      b$$0(d, 162, true);
                    } else {
                      b$$0(d, 178, true);
                    }
                    Sa();
                  } else {
                    if (165 == a) {
                      r = 1;
                      a = d.getUint32(r, true);
                      r += 4;
                      if (c = D[a]) {
                        g = d.getUint32(r, true);
                        r += 4;
                        f = d.getUint8(r, true);
                        d = d.getUint32(r + 1, true);
                        r = u;
                        if (!r) {
                          if (Nb) {
                            r = Nb;
                          }
                        }
                        if (r) {
                          if (g == r.id) {
                            n = ea(D[a].name);
                            G.addMessage("You killed", true, n);
                            if (!v.isInstagib()) {
                              if (a == na) {
                                r.incScore(uc);
                              } else {
                                r.incScore(tc);
                              }
                            }
                          }
                        }
                        if (0 < g) {
                          if (g = D[g]) {
                            G.addActivityMessage(ea(c.name) + " was Killed by " + ea(g.name));
                            g.incKills();
                            Xa[c.id] = g.id;
                          } else {
                            G.addActivityMessage(ea(c.name) + " was Killed");
                          }
                          T.addExplosion(c.dstX, c.dstY, c.getSpeedDirectionX(), c.getSpeedDirectionY());
                          if (u) {
                            if (u.id == a) {
                              if (g) {
                                G.addMessage("Killed by", false, ea(g.name));
                              } else {
                                G.addMessage("You were killed", false, null);
                              }
                              if (W) {
                                W = false;
                                Nb = u;
                                u = null;
                                ma = 1;
                                Db(d);
                              } else {
                                u = null;
                                M.waitUntilNextFollow();
                              }
                            }
                          }
                        } else {
                          Xa[c.id] = 0;
                          if (u) {
                            if (u.id == a) {
                              if (5 == f) {
                                G.addMessage("You left!", false, null);
                              } else {
                                if (4 == f) {
                                  G.addMessage("Abandoned!", false, null);
                                } else {
                                  if (1 == f) {
                                    G.addMessage("Crashed!", false, null);
                                  } else {
                                    if (6 == f) {
                                      G.addMessage("Exploded!", false, null);
                                    } else {
                                      if (7 == f) {
                                        G.addMessage("KAMIKAZE!!", false, null);
                                      } else {
                                        if (8 == f) {
                                          G.addMessage("You were killed by a Warship!", false, null);
                                        } else {
                                          if (3 == f) {
                                            G.addMessage("Splash!", false, null);
                                            J.playSound(nd, 0.7, 1, O, null);
                                            la.addSplash(u.x, B / 2 + 10, 2, false);
                                          } else {
                                            G.addMessage("You were killed!", false, null);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              if (W) {
                                W = false;
                                u = null;
                                ja = 0;
                                ma = 1;
                                Db(d);
                              } else {
                                u = null;
                                M.waitUntilNextFollow();
                              }
                            }
                          }
                          if (5 == f) {
                            G.addActivityMessage(ea(c.name) + " left");
                          } else {
                            if (4 == f) {
                              G.addActivityMessage(ea(c.name) + " abandoned");
                            }
                          }
                          T.addExplosion(c.dstX, c.dstY, 0.5 * c.getSpeedDirectionX(), 0.5 * c.getSpeedDirectionY());
                        }
                        if (null == c) {
                          console.log("ERROR: Trying to remove a player that didnt exist!");
                        } else {
                          D[a].cleanup();
                        }
                      } else {
                        if (d = Q[a]) {
                          if (d.type == cb) {
                            if (v.isSpaceWars()) {
                              T.addExplosion(d.x, d.y, 0, 0);
                              if (3 != d.fragment) {
                                d = 1 - ra(d.x, d.y, H.x, H.y) / Na;
                                if (0.01 < d) {
                                  J.playSound(Bc, d, 0.4, Oa, null);
                                }
                              }
                            }
                          }
                          Q[a].cleanup();
                          delete Q[a];
                        }
                      }
                      Sa();
                    } else {
                      if (166 == a || 176 == a) {
                        c = 1;
                        g = d.getUint16(c, true);
                        c += 2;
                        f = 0;
                        for (;f < g;f++) {
                          n = d.getUint32(c, true);
                          c += 4;
                          if (176 == a) {
                            r = d.getUint16(c, true);
                            c += 2;
                          } else {
                            r = d.getUint8(c, true);
                            c += 1;
                          }
                          m = 1;
                          l = Cc;
                          switch(r) {
                            case Ga:
                              l = v.isSpaceWars() ? na == n ? od : Sb : pd;
                              break;
                            case Za:
                              if (v.isSpaceWars()) {
                                m = 0.7;
                                l = Sb;
                              } else {
                                l = qd;
                              }
                              break;
                            case Ma:
                              if (v.isSpaceWars()) {
                                l = Sb;
                                m = 1.3;
                              } else {
                                l = rd;
                              }
                            ;
                          }
                          k = D[n];
                          if (!k) {
                            if (0 < n) {
                              if (x = Q[n]) {
                                console.log("specialEntity did shoot: " + x.id);
                              }
                            }
                          }
                          x = O;
                          var s = 1;
                          if (!(u && n == u.id)) {
                            if (!!k) {
                              x = Oa;
                              s = 1 - ra(k.x, k.y, H.x, H.y) / Na;
                            }
                          }
                          if (0.01 < s) {
                            if (l != Cc) {
                              J.playSound(l, s, m, x, null);
                            }
                          }
                          m = d.getUint16(c, true);
                          c += 2;
                          if (r == ab) {
                            k.dash();
                          }
                          l = d.getUint8(c, true);
                          c += 1;
                          x = 0;
                          for (;x < l;x++) {
                            s = d.getFloat32(c, true);
                            c = c + 4;
                            var z = -d.getFloat32(c, true);
                            c = c + 4;
                            var q = 0;
                            q = false;
                            if (r != Ra && r != bb) {
                              la.addShot(n, s, z, r);
                            } else {
                              q = d.getUint32(c, true);
                              c = c + 4;
                              var w = Z[q];
                              if (w) {
                                delete Z[q];
                                delete w;
                              }
                              q = true;
                            }
                            w = false;
                            for (;;) {
                              var y = d.getUint32(c, true);
                              c = c + 4;
                              if (0 == y) {
                                break;
                              }
                              var t = D[y];
                              var E = false;
                              if (!t) {
                                if (t = Q[y]) {
                                  E = true;
                                }
                              }
                              if (!(y == na)) {
                                if (!E) {
                                  q = false;
                                }
                              }
                              if (t) {
                                t.hit(r);
                                if (k) {
                                  if (r == va) {
                                    w = true;
                                    k.laserHit(s, z, true);
                                  }
                                }
                                if (u) {
                                  if (u.id == y) {
                                    J.playSound(Dc, 1, 1, O, null);
                                  } else {
                                    if (n == u.id) {
                                      J.playSound(Dc, 1, 2, O, null);
                                    }
                                  }
                                }
                              }
                            }
                            if (k) {
                              if (!w) {
                                k.laserHit(s, z, false);
                              }
                            }
                            if (q) {
                              la.addMissileImpact(s, z);
                            }
                          }
                          if (0 < n) {
                            if (n = D[n]) {
                              if (r != Ra) {
                                if (r != bb) {
                                  n.ammo = m;
                                  n.setWeapon(r);
                                }
                              }
                            }
                          }
                        }
                      } else {
                        if (167 == a || 174 == a) {
                          c = 1;
                          for (;;) {
                            g = d.getUint16(c, true);
                            if (0 == g) {
                              break;
                            }
                            c += 2;
                            if (174 == a) {
                              f = d.getUint16(c, true);
                              c += 2;
                            } else {
                              f = d.getUint8(c, true);
                              c += 1;
                            }
                            r = d.getFloat32(c, true);
                            c += 4;
                            n = -d.getFloat32(c, true);
                            c += 4;
                            k = new ed;
                            I[g] = k;
                            k.id = g;
                            k.setPosition(r, n);
                            k.type = f;
                          }
                        } else {
                          if (168 == a || 173 == a) {
                            e$$0(d, a);
                          } else {
                            if (170 == a) {
                              a = 1;
                              c = d.getUint8(a, true);
                              if (3 == c) {
                                ja++;
                              } else {
                                if (4 == c) {
                                  ja--;
                                } else {
                                  gb = 2 != c ? d.getUint32(a + 1, true) : 0;
                                  hb = 0;
                                  fa = c;
                                }
                              }
                            } else {
                              if (16 == a) {
                                c = d.getUint8(1, true);
                                a = d.getUint32(2, true);
                                v.type = c;
                                v.waiting = true;
                                v.endTime = +new Date + 1E3 * a;
                              } else {
                                if (17 == a) {
                                  v.type = v.eventType.EVENT_NONE;
                                  v.waiting = false;
                                  v.endTime = 0;
                                } else {
                                  if (18 == a || 19 == a) {
                                    c = 1;
                                    g = d.getUint8(c, true);
                                    c++;
                                    a = d.getUint32(c, true);
                                    c += 4;
                                    v.waiting = false;
                                    v.setType(g);
                                    if (v.type == v.eventType.EVENT_WARSHIP) {
                                      f = d.getUint8(c, true);
                                      c++;
                                      g = d.getUint8(c, true);
                                      c++;
                                      d = d.getUint8(c, true);
                                      v.setWarshipInfo(f, g, d);
                                    }
                                    M.whiteFlash = 1;
                                    v.endTime = +new Date + 1E3 * a;
                                    if (v.isInstagib()) {
                                      v.railSwitch = true;
                                    } else {
                                      if (v.isWarship()) {
                                        p.loadWarshipEvent();
                                      } else {
                                        if (v.isSpaceWars()) {
                                          p.loadAsteroidEvent();
                                        }
                                      }
                                    }
                                  } else {
                                    if (20 == a) {
                                      if (v.type != v.eventType.EVENT_WARSHIP) {
                                        M.whiteFlash = 1;
                                      }
                                      v.waiting = false;
                                      if (v.isInstagib() || v.isSpaceWars()) {
                                        v.machinegunSwitch = true;
                                      }
                                      v.setType(v.eventType.EVENT_NONE);
                                    } else {
                                      if (22 == a) {
                                        v.waiting = false;
                                        if (v.type != v.eventType.EVENT_NONE) {
                                          if (v.type != v.eventType.EVENT_WARSHIP) {
                                            M.whiteFlash = 1;
                                          }
                                          v.setType(v.eventType.EVENT_NONE);
                                        }
                                      } else {
                                        if (23 == a) {
                                          c = 1;
                                          g = d.getUint32(c, true);
                                          c += 4;
                                          if (0 < g) {
                                            if (a = D[g]) {
                                              a = ea(a.name);
                                              G.setWarshipRemoved(a);
                                            }
                                          } else {
                                            G.setWarshipRemoved(null);
                                          }
                                          a = d.getUint8(c, true);
                                          c += 1;
                                          g = d.getUint8(c, true);
                                          c += 1;
                                          d = d.getUint8(c, true);
                                          v.setWarshipInfo(a, g, d);
                                        } else {
                                          if (21 == a) {
                                            g = d.getUint8(1, true);
                                            c = 2;
                                            a = "";
                                            for (;;) {
                                              f = d.getUint16(c, true);
                                              c += 2;
                                              if (0 == f) {
                                                break;
                                              }
                                              a += String.fromCharCode(f);
                                            }
                                            G.setLastWinner(a, g);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    this.connectionClosed = function() {
      M.gameCleanup();
      window.A.sentHello = false;
      window.A.hasConnection = false;
      window.A.firstClientListing = true;
      Db(-1);
      q("#topGui").hide();
      q("#topGuiConnecting").show();
      q("#copyLink").fadeOut(300);
      q(".btn-needs-server").attr("disabled", "disabled");
      var b = this.connectRetry;
      if (5 < b) {
        b = 5;
      }
      setTimeout(this.getServerAndConnect, 1E3 + 1E3 * b);
      window.A.connectRetry++;
    };
    this.sendSingleByte = function(b) {
      var a = new ArrayBuffer(1);
      (new DataView(a)).setUint8(0, b);
      f$$0.send(a);
    };
    this.sendNick = function(b, a) {
      myName = b;
      var c = new ArrayBuffer(3 + 2 * b.length);
      var e = new DataView(c);
      var h = 2;
      if (a) {
        h = 8;
      }
      e.setUint8(0, h);
      e.setUint8(1, Wb);
      e.setUint8(2, Yb);
      h = 0;
      for (;h < b.length;++h) {
        e.setUint16(3 + 2 * h, b.charCodeAt(h), true);
      }
      f$$0.send(c);
    };
    this.sendInput = function() {
      var b = new ArrayBuffer(10);
      var a = new DataView(b);
      a.setUint8(0, 3);
      a.setFloat64(1, U.angle, true);
      var c = 0;
      if (U.hover || !sa) {
        c |= 1;
      }
      if (!sa || R) {
        c |= 2;
      }
      a.setUint8(9, c, true);
      f$$0.send(b);
    };
    this.sendDirection = function() {
      var b = new ArrayBuffer(9);
      var a = new DataView(b);
      a.setUint8(0, 4);
      a.setFloat64(1, U.angle, true);
      f$$0.send(b);
    };
    this.sendThrottle = function() {
      var b = new ArrayBuffer(2);
      var a = new DataView(b);
      a.setUint8(0, 6);
      if (1 == U.throttle) {
        a.setUint8(1, 1);
      } else {
        a.setUint8(1, 0);
      }
      f$$0.send(b);
    };
    this.sendBraking = function(b) {
      var a = new ArrayBuffer(2);
      var c = new DataView(a);
      c.setUint8(0, 4);
      if (b) {
        c.setUint8(1, 1);
      } else {
        c.setUint8(1, 0);
      }
      f$$0.send(a);
    };
    this.sendShooting = function(b) {
      var a = new ArrayBuffer(2);
      var c = new DataView(a);
      c.setUint8(0, 5);
      if (b) {
        c.setUint8(1, 1);
      } else {
        c.setUint8(1, 0);
      }
      f$$0.send(a);
    };
    this.leave = function() {
      var b = new ArrayBuffer(1);
      (new DataView(b)).setUint8(0, 7);
      f$$0.send(b);
    };
    this.ping = function() {
      if (this.hasConnection) {
        var b = new ArrayBuffer(1);
        (new DataView(b)).setUint8(0, 0);
        f$$0.send(b);
      }
    };
  };
  var yd = function(b$$0) {
    function e$$0() {
      if (W) {
        if (window.A.hasConnection) {
          window.A.sendInput();
        }
      }
    }
    var f$$0 = this;
    var d$$0;
    var a$$0;
    var c$$0 = 0;
    var g = 0;
    var h = 0;
    var r = false;
    var n = 1;
    var k;
    var m = 0;
    var l = 0;
    var x = false;
    var s = 1;
    var z;
    var y = 0;
    var K = 0;
    var M = false;
    var ya = 1;
    var N;
    this.whiteFlash = 0;
    f$$0.followTopPlayer = function() {
      var a = -1;
      var b = 0;
      for (id in D) {
        if (D[id].inGame) {
          var c = D[id].score;
          if (a < c) {
            a = c;
            b = id;
          }
        }
      }
      if (b) {
        u = D[b];
        u.prepareFollow();
        Ka = oa = b;
      }
    };
    f$$0.PlayerFollowing = function(a) {
      c$$0 = 0;
      if (0 == ha.length) {
        oa = 0;
        u = null;
      } else {
        var b = false;
        if (0 == Ka) {
          b = true;
        }
        if (!b) {
          b = false;
          var d;
          for (d in ha) {
            if (b) {
              var e = D[ha[d]];
              if (!e.inGame) {
                continue;
              }
              oa = ha[d];
              u = e;
              u.prepareFollow();
              Ka = oa;
              return;
            }
            if (ha[d] == Ka) {
              if (a) {
                b = true;
              } else {
                d--;
                if (0 > d) {
                  d = ha.length - 1;
                }
                e = D[ha[d]];
                oa = ha[d];
                u = e;
                u.prepareFollow();
                Ka = oa;
                return;
              }
            }
          }
        }
        oa = a = ha[0];
        u = D[a];
        u.prepareFollow();
        Ka = a;
      }
    };
    f$$0.waitUntilNextFollow = function() {
      c$$0 = 3E3;
    };
    f$$0.update = function(a) {
      if (u) {
        if (!u.inGame) {
          if (0 == ma) {
            u = null;
            oa = 0;
          }
        }
      }
      if (G) {
        G.update(a);
      }
      if (lb) {
        J.sound.volume($, lb);
      }
      Ha = false;
      var b;
      for (b in I) {
        I[b].update(a);
        if (I[b]) {
          if (!Ha) {
            if (I[b].type == va) {
              Ha = true;
              Ia = null;
            }
          }
        }
      }
      var e = null;
      for (b in Z) {
        Z[b].update(a);
        if (Z[b].finished) {
          e = b;
        }
      }
      if (e) {
        delete Z[e];
      }
      e = null;
      for (b in D) {
        if (D[b].updateBool != window.A.lastUpdateBool) {
          if (D[b] == u) {
            oa = 0;
          }
          delete D[b];
        } else {
          if (!Ha) {
            if (D[b].weapon == va) {
              if (D[b].inGame) {
                Ha = true;
                Ia = ea(D[b].name);
              }
            }
          }
          if (oc == b) {
            if (D[b].inGame) {
              e = D[b];
            }
          }
          if (v.railSwitch) {
            D[b].setWeapon(Ma);
            D[b].ammo = -1;
          } else {
            if (v.machinegunSwitch) {
              D[b].setWeapon(Ga);
              D[b].ammo = -1;
            }
          }
          D[b].update(a);
        }
      }
      for (b in Q) {
        Q[b].update(a);
      }
      if (v.railSwitch) {
        v.railSwitch = false;
      }
      if (v.machinegunSwitch) {
        v.machinegunSwitch = false;
      }
      E.update(a);
      if (!W && (0 == ma && (null == u && (c$$0 -= a, 0 >= c$$0)))) {
        for (b in D) {
          if (D[b].inGame) {
            u = D[b];
            u.prepareFollow();
            oa = b;
          }
          break;
        }
      }
      if (v.isSpaceWars()) {
        for (i in pa) {
          pa[i].update(E.getBounds(), E.zoom);
          var f = pa[i];
          if (0.1 < Math.abs(da.x) + Math.abs(da.y)) {
            f.x -= (f.z - 1) * da.x * 0.5;
            f.y -= (f.z - 1) * da.y * 0.5;
          }
        }
        da.x = 0;
        da.y = 0;
      }
      T.update(a);
      H = {
        x : (d$$0.width / 2 + (E.x * E.zoom - d$$0.width / 2)) / E.zoom,
        y : (d$$0.height / 2 + (E.y * E.zoom - d$$0.height / 2)) / E.zoom
      };
      ta.update(a);
      if (null != u) {
        if (U.mouseMoved) {
          a = 1;
          if (!xa) {
            a = 2;
          }
          Tb = (mc + (E.x * E.zoom - d$$0.width * a / 2)) / E.zoom;
          Ub = (nc + (E.y * E.zoom - d$$0.height * a / 2)) / E.zoom;
          a = Tb - u.x;
          var p = Ub - u.y;
          f = Math.sqrt(a * a + p * p);
          a /= f;
          p /= f;
          U.hover = 75 < f ? 0 : 1;
          var q = f = 0;
          if (sa) {
            f = a;
            q = -p;
          }
          if (0 != f) {
            a = Math.atan(q / f);
            if (0 > f) {
              a = Math.PI + a;
            }
            a += Math.PI / 2;
            U.angle = a;
          }
        } else {
          U.hover = 1;
          U.angle = Math.PI;
        }
      }
      q = E.getBounds();
      a = q[1].x;
      f = q[0].x;
      p = q[0].y;
      q = q[1].y;
      if (e && !X(e.x, e.y, 30)) {
        var w = H.x - e.x;
        var t = H.y - e.y;
        var C = Math.sqrt(w * w + t * t);
        n = 1;
        if (1300 < C) {
          n = 1300 / C;
          if (0.4 > n) {
            n = 0.4;
          }
        }
        t /= w;
        C = H.y - t * H.x;
        h = 0 > w ? t * a + C : t * f + C;
        if (h < p) {
          h = p;
        } else {
          if (h > q) {
            h = q;
          }
        }
        g = (h - C) / t;
        if (1 < t) {
          t = 1;
        } else {
          if (-1 > t) {
            t = -1;
          }
        }
        k = Math.acos(t);
        if (0 > w) {
          k += Math.PI;
        }
        r = true;
      } else {
        r = false;
      }
      var B;
      w = false;
      if (tb = u ? Xa[u.id] : 0) {
        if (0 < tb) {
          B = D[tb];
          if (B == e) {
            w = true;
          }
        }
      }
      if (!B || (X(B.x, B.y, 30) || w)) {
        x = false;
      } else {
        w = H.x - B.x;
        t = H.y - B.y;
        B = Math.sqrt(w * w + t * t);
        s = 1;
        if (1300 < B) {
          s = 1300 / B;
          if (0.4 > s) {
            s = 0.4;
          }
        }
        t /= w;
        C = H.y - t * H.x;
        l = 0 > w ? t * a + C : t * f + C;
        if (l < p) {
          l = p;
        } else {
          if (l > q) {
            l = q;
          }
        }
        m = (l - C) / t;
        if (1 < t) {
          t = 1;
        } else {
          if (-1 > t) {
            t = -1;
          }
        }
        z = Math.acos(t);
        if (0 > w) {
          z += Math.PI;
        }
        x = true;
      }
      if (v.isWarship()) {
        B = 99999;
        e = 0;
        var O;
        var F;
        var R;
        var Y;
        for (b in Q) {
          if (C = Q[b], C.state == Ec && (C.x > -S && C.x < S)) {
            w = H.x - C.x;
            t = H.y - C.y;
            var aa = Math.sqrt(w * w + t * t);
            if (aa < B) {
              O = C.x;
              F = C.y;
              B = aa;
              e = b;
              R = w;
              Y = t;
            }
          }
        }
        if (0 < e) {
          if (X(O, F, 120)) {
            M = false;
          } else {
            if (1300 < B) {
              ya = 900 / B;
              if (0.3 > ya) {
                ya = 0.3;
              }
            }
            t = Y / R;
            C = H.y - t * H.x;
            K = 0 > R ? t * a + C : t * f + C;
            if (K < p) {
              K = p;
            } else {
              if (K > q) {
                K = q;
              }
            }
            y = (K - C) / t;
            if (1 < t) {
              t = 1;
            } else {
              if (-1 > t) {
                t = -1;
              }
            }
            N = Math.acos(t);
            if (0 > R) {
              N += Math.PI;
            }
            M = true;
          }
        } else {
          M = false;
        }
      }
    };
    f$$0.draw = function(b) {
      if (p.loaded) {
        E.setupContext();
        ta.drawGradient(a$$0);
        ta.draw(a$$0);
        var c = E.getBounds()[1].y;
        var e = false;
        if (v.isSpaceWars()) {
          for (i in pa) {
            pa[i].draw(a$$0);
          }
        } else {
          if (c > B / 2 - 25) {
            e = true;
            ta.drawWaterBehind(a$$0);
          }
        }
        if (ua) {
          var f;
          for (f in I) {
            I[f].draw(a$$0);
          }
          la.draw(a$$0);
          for (f in Z) {
            Z[f].draw(a$$0, b);
          }
          for (f in D) {
            D[f].draw(a$$0, b);
          }
          for (f in D) {
            D[f].drawInfo(a$$0);
          }
          if (W) {
            u.drawInput(a$$0);
          }
          for (f in Q) {
            Q[f].draw(a$$0);
          }
          T.drawExplosions(a$$0);
          T.drawBehind(a$$0);
        }
        if (e) {
          ta.drawWaterFront(a$$0);
        }
        if (ua) {
          if (!v.isSpaceWars()) {
            for (f in D) {
              D[f].drawReflection(a$$0, b);
            }
            for (f in Z) {
              Z[f].drawReflection(a$$0, b);
            }
            for (f in Q) {
              Q[f].drawReflection(a$$0, b);
            }
          }
          T.drawLayer2(a$$0);
          T.draw(a$$0);
          for (f in Q) {
            Q[f].drawInfo(a$$0);
          }
          ta.drawLimits(a$$0);
          if (r) {
            b = 1;
            c = 0 < na;
            a$$0.save();
            a$$0.translate(g, h);
            a$$0.scale(n, n);
            if (c) {
              a$$0.save();
              e = eb(0, 50, -k);
              a$$0.translate(e.x, e.y);
              p.frames.crown.draw(a$$0);
              a$$0.restore();
            }
            a$$0.rotate(-k);
            e = 1.2;
            if (c) {
              a$$0.translate(0, -(-20 - 10 * b));
              e = 0.9;
            } else {
              a$$0.translate(0, -(-30 - 10 * b));
            }
            a$$0.fillStyle = "rgba(255,102,0,0.8)";
            a$$0.beginPath();
            a$$0.moveTo(-8 * b * e, 0);
            a$$0.lineTo(8 * b * e, 0);
            a$$0.lineTo(0, -20 * b * e);
            a$$0.fill();
            a$$0.restore();
          }
          if (x) {
            b = 1;
            a$$0.save();
            a$$0.translate(m, l);
            a$$0.scale(s, s);
            a$$0.save();
            e = eb(0, 50, -z);
            a$$0.translate(e.x, e.y);
            p.frames.revengeIcon.draw(a$$0);
            a$$0.restore();
            a$$0.rotate(-z);
            a$$0.translate(0, -(-20 - 10 * b));
            e = 0.9;
            a$$0.fillStyle = "rgba(255,102,0,0.8)";
            a$$0.beginPath();
            a$$0.moveTo(-8 * b * e, 0);
            a$$0.lineTo(8 * b * e, 0);
            a$$0.lineTo(0, -20 * b * e);
            a$$0.fill();
            a$$0.restore();
          }
          if (M) {
            if (p.warshipIcon) {
              b = 1;
              a$$0.save();
              a$$0.translate(y, K);
              a$$0.scale(ya, ya);
              a$$0.save();
              e = eb(0, 80, -N);
              a$$0.translate(e.x, e.y);
              a$$0.drawImage(p.warshipIcon, -p.warshipIcon.width / 2, -p.warshipIcon.height / 2);
              a$$0.restore();
              a$$0.rotate(-N);
              e = 0.9;
              a$$0.translate(0, -(-20 - 10 * b));
              a$$0.fillStyle = "rgba(255,102,0,0.8)";
              a$$0.beginPath();
              a$$0.moveTo(-8 * b * e, 0);
              a$$0.lineTo(8 * b * e, 0);
              a$$0.lineTo(0, -20 * b * e);
              a$$0.fill();
              a$$0.restore();
            }
          }
        }
        E.startUILayer();
        if (Mb) {
          G.draw(a$$0);
        }
        if (0 < this.whiteFlash) {
          a$$0.save();
          a$$0.globalAlpha = this.whiteFlash;
          a$$0.fillStyle = "#FFFFFF";
          a$$0.fillRect(0, 0, d$$0.width, d$$0.height);
          a$$0.restore();
          this.whiteFlash -= 0.015;
        }
      }
    };
    f$$0.gameCleanup = function() {
      u = void 0;
      oa = 0;
      W = false;
      gb = ja = 0;
      if (G) {
        G.clearBonusDisplay();
      }
      for (id in I) {
        delete I[id];
      }
      I = {};
      for (id in Z) {
        delete Z[id];
      }
      Z = {};
      for (id in D) {
        delete D[id];
      }
      D = {};
      for (id in Q) {
        delete Q[id];
      }
      Q = {};
    };
    var R$$0;
    f$$0.resize = function(a) {
      C$$0();
      if (v.isSpaceWars()) {
        if (R$$0) {
          clearTimeout(R$$0);
        }
        R$$0 = setTimeout(f$$0.respawnParticles, 200);
      }
    };
    var C$$0 = function() {
      var a = 2;
      if (xa) {
        a = 1;
      }
      d$$0.width = t.innerWidth / a;
      d$$0.height = t.innerHeight / a;
      Ua = d$$0.width;
      ib = d$$0.height;
      var b = ib * a;
      var c = -50 + 50 * a + "%";
      a = "translate(" + c + "," + c + ") scale(" + a + ")";
      q("#canvas").css({
        transform : a
      });
      q("#canvas").css({
        "-ms-transform" : a
      });
      q("#canvas").css({
        "-webkit-transform" : a
      });
      w$$1 = 0.92 * Math.max(ib / 850, Ua / 1500);
      w$$1 *= t.devicePixelRatio / jb;
      c = Math.min(1, b / 850);
      a = 640 * c;
      if (0 < a) {
        c = "translate(-50%,0%) scale(" + c + ")";
        q("#mainDialog").css({
          transform : c
        });
        q("#mainDialog").css({
          "-ms-transform" : c
        });
        q("#mainDialog").css({
          "-webkit-transform" : c
        });
        b = b / 2 - 0.48 * a;
        q("#mainDialog").css({
          top : b + "px"
        });
      }
    };
    f$$0.respawnParticles = function() {
      pa = [];
      var a = 0;
      for (;150 > a;a++) {
        pa.push(new td);
      }
    };
    d$$0 = b$$0;
    a$$0 = d$$0.getContext("2d");
    C$$0();
    ta = new dd;
    T = new ud;
    f$$0.respawnParticles();
    p = new Kc;
    p.load(function() {
      console.log("Resources loaded!");
      G = new Rc;
      la = new Nc;
      if (window.A.hasConnection) {
        if (!window.A.sentHello) {
          window.A.hello();
        }
      }
      setInterval(e$$0, 40);
      Xb(Math.floor(5 * Math.random()) + 1);
      Vb(Math.floor(5 * Math.random()) + 1);
      console.log("Loading sounds!");
      J = new vd;
      J.load(function() {
        J.playSound(wd, 1, 1, O, function(a) {
          lb = a;
        });
      });
    });
    myName = "";
    E = new xd(d$$0, a$$0, 0, 0);
    window.A = new sd;
    window.window.A.getServerAndConnect();
  };
  var xd = function(b$$0, e, f$$0, d$$0) {
    var a$$0 = this;
    this.x = f$$0;
    this.y = d$$0;
    this.minZoom = 1;
    this.maxZoom = 2;
    this.zoom = this.minZoom;
    var c$$0 = 0;
    var g;
    var h = 0;
    var r = 0;
    var n = 0;
    var k = 0;
    this.setupContext = function() {
      var c = a$$0.zoom;
      var d = b$$0.width / 2 - a$$0.x * c;
      var f = b$$0.height / 2 - a$$0.y * c;
      e.setTransform(1, 0, 0, 1, 0, 0);
      e.translate(d + n, f + k);
      e.scale(c, c);
    };
    this.applyShake = function(a) {
      if (ua) {
        if (0 < c$$0) {
          var b = g;
          if (250 > c$$0) {
            b = c$$0 / 1E3 / 0.5 * g;
          }
          h += 1;
          r += 1.1;
          var d = Math.sin(h) * (b / 4);
          b = Math.cos(r) * b;
          n = d;
          k = b;
          c$$0 -= a;
        } else {
          k = n = 0;
        }
      }
    };
    this.update = function(b) {
      var c = a$$0.maxZoom + (a$$0.minZoom - a$$0.maxZoom);
      if (!ua) {
        a$$0.y = 470;
      }
      if (W || (1 != ma || R)) {
        a$$0.zoom = 1 / (t.devicePixelRatio / jb) * 1.2;
        a$$0.zoom *= w$$1;
        if (null != u) {
          da.x = u.x - a$$0.x;
          da.y = u.y - a$$0.y;
          a$$0.x = u.x;
          a$$0.y = u.y;
        }
      } else {
        c = 1 / (t.devicePixelRatio / jb) * 0.7 * w$$1;
        a$$0.zoom += (c - a$$0.zoom) / 10;
      }
      this.applyShake(b);
    };
    this.setPosition = function(b, c) {
      da.x = b - a$$0.x;
      da.y = c - a$$0.y;
      a$$0.x = b;
      a$$0.y = c;
    };
    this.shake = function() {
      if (ua) {
        c$$0 = 500;
        g = 7;
      }
    };
    this.getBounds = function() {
      return[{
        x : a$$0.x - b$$0.width / 2 / a$$0.zoom,
        y : a$$0.y - b$$0.height / 2 / a$$0.zoom
      }, {
        x : a$$0.x + b$$0.width / 2 / a$$0.zoom,
        y : a$$0.y + b$$0.height / 2 / a$$0.zoom
      }];
    };
    this.getOuterBounds = function() {
      return[{
        x : a$$0.x - b$$0.width / 2 / a$$0.minZoom,
        y : a$$0.y - b$$0.height / 2 / a$$0.minZoom
      }, {
        x : a$$0.x + b$$0.width / 2 / a$$0.minZoom,
        y : a$$0.y + b$$0.height / 2 / a$$0.minZoom
      }];
    };
    this.getInnerBounds = function() {
      return[{
        x : a$$0.x - b$$0.width / 2 / a$$0.maxZoom,
        y : a$$0.y - b$$0.height / 2 / a$$0.maxZoom
      }, {
        x : a$$0.x + b$$0.width / 2 / a$$0.maxZoom,
        y : a$$0.y + b$$0.height / 2 / a$$0.maxZoom
      }];
    };
    this.startUILayer = function() {
      e.setTransform(1, 0, 0, 1, 0, 0);
    };
  };
  var wb = function() {
    this.width;
    this.height;
    var b$$0;
    var e$$0;
    var f$$0;
    var d$$0;
    var a$$0 = void 0;
    this.y = this.x = 0;
    var c$$0;
    var g$$0;
    this.canvas;
    this.frameWithCanvas = function(a, b, d) {
      this.width = a.width;
      this.height = a.height;
      this.canvas = a;
      c$$0 = b;
      g$$0 = d;
    };
    this.setFrameInfo = function(h, r) {
      a$$0 = r;
      b$$0 = h[1];
      e$$0 = h[2];
      this.width = h[3];
      this.height = h[4];
      f$$0 = h[5];
      d$$0 = h[6];
      c$$0 = -this.width * f$$0;
      g$$0 = -this.height * d$$0;
    };
    this.draw = function(d) {
      if (a$$0) {
        d.drawImage(a$$0, b$$0, e$$0, this.width, this.height, c$$0 + this.x, g$$0 + this.y, this.width, this.height);
      } else {
        d.drawImage(this.canvas, 0, 0, this.width, this.height, c$$0 + this.x, g$$0 + this.y, this.width, this.height);
      }
    };
    this.renderTintedFrame = function(d) {
      var f = y$$1.createElement("canvas");
      var n = f.getContext("2d");
      f.width = this.width;
      f.height = this.height;
      var k = y$$1.createElement("canvas");
      k.width = this.width;
      k.height = this.height;
      var m = k.getContext("2d");
      m.fillStyle = d;
      m.fillRect(0, 0, k.width, k.height);
      m.globalCompositeOperation = "destination-atop";
      m.drawImage(a$$0, b$$0, e$$0, this.width, this.height, 0, 0, this.width, this.height);
      n.globalAlpha = 1;
      n.drawImage(k, 0, 0);
      d = new wb;
      d.frameWithCanvas(f, c$$0, g$$0);
      return d;
    };
    this.getImageCopy = function() {
      var c = y$$1.createElement("canvas");
      c.width = this.width;
      c.height = this.height;
      var d = c.getContext("2d");
      d.drawImage(a$$0, b$$0, e$$0, this.width, this.height, 0, 0, this.width, this.height);
      var f = d.getImageData(0, 0, this.width, this.height);
      return{
        canvas : c,
        ctx : d,
        toData : f.data,
        to : f
      };
    };
    this.generateTintImage2 = function(d, f, n, k) {
      var m = y$$1.createElement("canvas");
      m.width = this.width;
      m.height = this.height;
      var l = m.getContext("2d");
      l.drawImage(a$$0, b$$0, e$$0, this.width, this.height, 0, 0, this.width, this.height);
      var p = l.getImageData(0, 0, this.width, this.height);
      var s = p.data;
      var q = s.length;
      var t = 0;
      for (;t < q;) {
        s[t] = s[t++] * (1 - k) + d * k;
        s[t] = s[t++] * (1 - k) + f * k;
        s[t] = s[t++] * (1 - k) + n * k;
        s[t] = 0.8 * s[t++];
      }
      l.putImageData(p, 0, 0);
      d = new wb;
      d.frameWithCanvas(m, c$$0, g$$0);
      return d;
    };
    this.generateTintImage = function(a, b, d, e) {
      var f = y$$1.createElement("canvas");
      f.width = this.width;
      f.height = this.height;
      var l = f.getContext("2d");
      l.globalAlpha = 1;
      l.globalCompositeOperation = "copy";
      l.drawImage(a[3], 0, 0);
      l.globalCompositeOperation = "lighter";
      if (0 < b) {
        l.globalAlpha = b / 255;
        l.drawImage(a[0], 0, 0);
      }
      if (0 < d) {
        l.globalAlpha = d / 255;
        l.drawImage(a[1], 0, 0);
      }
      if (0 < e) {
        l.globalAlpha = e / 255;
        l.drawImage(a[2], 0, 0);
      }
      a = new wb;
      a.frameWithCanvas(f, c$$0, g$$0);
      return a;
    };
    this.generateRGBKs = function() {
      var c = [];
      var d = y$$1.createElement("canvas");
      d.getContext("2d");
      d.width = this.width;
      d.height = this.height;
      d = y$$1.createElement("canvas");
      d.width = this.width;
      d.height = this.height;
      d = d.getContext("2d");
      d.drawImage(a$$0, b$$0, e$$0, this.width, this.height, 0, 0, this.width, this.height);
      var f = d.getImageData(0, 0, this.width, this.height).data;
      var g = f.length;
      var m = this.getImageCopy();
      var l = this.getImageCopy();
      var p = this.getImageCopy();
      d = this.getImageCopy();
      var s = 0;
      for (;s < g;s += 4) {
        m.toData[s] = f[s];
        m.toData[s + 1] = 0;
        m.toData[s + 2] = 0;
        m.toData[s + 3] = f[s + 3];
        l.toData[s] = 0;
        l.toData[s + 1] = f[s + 1];
        l.toData[s + 2] = 0;
        l.toData[s + 3] = f[s + 3];
        p.toData[s] = 0;
        p.toData[s + 1] = 0;
        p.toData[s + 2] = f[s + 2];
        p.toData[s + 3] = f[s + 3];
        d.toData[s] = 0;
        d.toData[s + 1] = 0;
        d.toData[s + 2] = 0;
        d.toData[s + 3] = f[s + 3];
      }
      m.ctx.putImageData(m.to, 0, 0);
      l.ctx.putImageData(l.to, 0, 0);
      p.ctx.putImageData(p.to, 0, 0);
      d.ctx.putImageData(d.to, 0, 0);
      f = new Image;
      f.src = m.canvas.toDataURL();
      m = new Image;
      m.src = l.canvas.toDataURL();
      l = new Image;
      l.src = p.canvas.toDataURL();
      p = new Image;
      p.src = d.canvas.toDataURL();
      c.push(f);
      c.push(m);
      c.push(l);
      c.push(p);
      return c;
    };
    this.renderToCanvas = function() {
      var c = y$$1.createElement("canvas");
      var d = c.getContext("2d");
      c.width = this.width;
      c.height = this.height;
      var f = y$$1.createElement("canvas");
      f.width = this.width;
      f.height = this.height;
      f.getContext("2d");
      if (a$$0) {
        d.drawImage(a$$0, b$$0, e$$0, this.width, this.height, 0, 0, this.width, this.height);
      } else {
        d.drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
      }
      d.globalAlpha = 1;
      d.drawImage(f, 0, 0);
      return c;
    };
  };
  var ud = function() {
    var b$$0 = {};
    var e$$0 = [];
    var f$$0 = [];
    var d$$0 = [];
    var a$$0 = [];
    this.addAnimationInfo = function(a, d) {
      b$$0[a] = d;
    };
    this.setAnimationInterval = function(a, d) {
      b$$0[a].setInterval(d);
    };
    this.createAnimation = function(a) {
      a = b$$0[a];
      var d = new Fc;
      d.setup(a);
      return d;
    };
    this.runAnimation = function(a) {
      e$$0.push(a);
    };
    this.runAnimationLayer2 = function(a) {
      f$$0.push(a);
    };
    this.runAnimationBehind = function(a) {
      d$$0.push(a);
    };
    this.addBlast = function(a, b, d, e, f) {
      var k = T.createAnimation("explosion");
      k.setScale(d);
      k.posX = a;
      k.posY = b;
      T.runAnimationBehind(k);
      a = 1 - ra(a, b, H.x, H.y) / Na;
      if (0.01 < a) {
        J.playSound(Bc, a * f, 1, e, null);
      }
    };
    this.addExplosion = function(b, d, e, f) {
      if (ob && (X(b, d, 100) && ia())) {
        if (1 >= a$$0.length) {
          var n = new zd;
          n.init(b, d, e, f);
          a$$0.push(n);
        }
        this.addBlast(b, d, 1, Oa, 1);
        E.shake();
      }
    };
    this.update = function(b) {
      var g;
      for (g in e$$0) {
        var h = e$$0[g];
        h.update(b);
        if (h.deleting) {
          e$$0.splice(g, 1);
          delete h;
        }
      }
      for (g in d$$0) {
        h = d$$0[g];
        h.update(b);
        if (h.deleting) {
          d$$0.splice(g, 1);
          delete h;
        }
      }
      for (g in f$$0) {
        h = f$$0[g];
        h.update(b);
        if (h.deleting) {
          f$$0.splice(g, 1);
          delete h;
        }
      }
      var r;
      for (r in a$$0) {
        g = a$$0[r];
        g.update(b);
        if (g.deleting) {
          a$$0.splice(r, 1);
          delete g;
        }
      }
    };
    this.drawBehind = function(a) {
      var b;
      for (b in d$$0) {
        var e = d$$0[b];
        a.save();
        a.translate(e.posX, e.posY);
        a.scale(e.scaleX, e.scaleY);
        a.rotate(e.rotation);
        e.draw(a);
        a.restore();
      }
    };
    this.drawLayer2 = function(a) {
      var b;
      for (b in f$$0) {
        var d = f$$0[b];
        a.save();
        a.translate(d.posX, d.posY);
        a.scale(d.scaleX, d.scaleY);
        a.rotate(d.rotation);
        d.draw(a);
        a.restore();
      }
    };
    this.draw = function(a) {
      var b;
      for (b in e$$0) {
        var d = e$$0[b];
        a.save();
        a.translate(d.posX, d.posY);
        a.scale(d.scaleX, d.scaleY);
        a.rotate(d.rotation);
        d.draw(a);
        a.restore();
      }
    };
    this.drawExplosions = function(b) {
      var d;
      for (d in a$$0) {
        a$$0[d].draw(b);
      }
    };
  };
  var Fc = function() {
    var b$$0 = 0;
    var e = 0;
    var f = 0;
    this.frames;
    this.frameCount = 0;
    this.deleting = false;
    this.posY = this.posX = 0;
    this.scaleY = this.scaleX = 1;
    this.rotation = 0;
    this.alpha = 1;
    this.copy = function(b) {
      b = new Fc;
      b.frames = this.frames;
      b.frameCount = this.frameCount;
      b.deleting = this.deleting;
      b.posX = this.posX;
      b.posY = this.posY;
      b.scaleX = this.scaleX;
      b.scaleY = this.scaleY;
      b.rotation = this.rotation;
      b.alpha = this.alpha;
      b.setInterval(e);
      return b;
    };
    this.setup = function(b) {
      e = b.interval;
      this.frames = b.frames;
      this.frameCount = b.frames.length;
    };
    this.setInterval = function(b) {
      e = b;
    };
    this.update = function(d) {
      if (!this.deleting) {
        if (f > e) {
          b$$0++;
          f -= e;
        }
        f += d;
        if (b$$0 >= this.frameCount) {
          this.deleting = true;
        }
      }
    };
    this.setScale = function(b) {
      this.scaleY = this.scaleX = b;
    };
    this.draw = function(d) {
      if (1 > this.alpha) {
        d.globalAlpha = this.alpha;
      }
      this.frames[b$$0].draw(d);
    };
  };
  var Pb = function() {
    this.frames = [];
    this.interval = 0;
    this.addFrame = function(b) {
      this.frames.push(b);
    };
    this.setInterval = function(b) {
      this.interval = b;
    };
  };
  gameSheetInfo = [["bomb", 522, 34, 11, 8, 0.545, 0.5], ["bombdrop", 887, 196, 23, 23, 0.5, 0.5], ["crown", 775, 232, 23, 19, 0.5, 0.5], ["decal0_1", 991, 205, 30, 9, 0.417, 0.556], ["decal0_2", 1023, 210, 29, 8, 0.397, 0.5], ["decal0_3", 991, 231, 27, 12, 0.352, 0.5], ["decal0_4", 241, 239, 28, 15, 0.375, 0.467], ["decal0_5", 882, 23, 26, 18, 0.327, 0.5], ["decal0_6", 785, 23, 30, 19, 0.417, 0.474], ["decal0_7", 622, 23, 28, 20, 0.375, 0.5], ["decal0_8", 351, 232, 29, 22, 0.397, 0.5], ["decal1_1", 
  1030, 200, 31, 8, 0.565, 0.625], ["decal1_2", 1034, 189, 32, 9, 0.516, 0.778], ["decal1_3", 1030, 200, 31, 8, 0.532, 0.5], ["decal1_4", 978, 174, 32, 13, 0.516, 0.538], ["decal1_5", 209, 239, 30, 15, 0.55, 0.6], ["decal1_6", 978, 118, 25, 18, 0.7, 0.5], ["decal1_7", 751, 23, 32, 19, 0.547, 0.474], ["decal1_8", 716, 23, 33, 19, 0.53, 0.474], ["decal2_1", 2, 243, 35, 11, 0.5, 0.727], ["decal2_2", 39, 243, 35, 11, 0.5, 0.636], ["decal2_3", 135, 242, 35, 12, 0.5, 0.583], ["decal2_4", 172, 242, 35, 
  12, 0.5, 0.5], ["decal2_5", 1005, 132, 35, 9, 0.5, 0.444], ["decal2_6", 1003, 143, 35, 9, 0.5, 0.444], ["decal2_7", 651, 247, 35, 7, 0.5, 0.571], ["decal2_8", 1005, 120, 35, 10, 0.5, 0.5], ["decal3_1", 991, 189, 15, 8, 0.833, 0.625], ["decal3_2", 523, 2, 13, 8, 0.808, 0.625], ["decal3_3", 977, 86, 12, 10, 0.708, 0.6], ["decal3_4", 978, 23, 11, 13, 0.773, 0.538], ["decal3_5", 715, 239, 12, 15, 0.792, 0.533], ["decal3_6", 977, 68, 12, 16, 0.792, 0.5], ["decal3_7", 977, 48, 12, 18, 0.792, 0.5], ["decal3_8", 
  523, 12, 12, 20, 0.792, 0.5], ["decal4_1", 688, 247, 25, 7, 0.62, 0.714], ["decal4_2", 978, 138, 23, 9, 0.587, 0.667], ["decal4_3", 1042, 220, 20, 10, 0.525, 0.6], ["decal4_4", 113, 243, 20, 11, 0.525, 0.545], ["decal4_5", 1020, 220, 20, 11, 0.525, 0.545], ["decal4_6", 1008, 191, 20, 12, 0.525, 0.5], ["decal4_7", 1012, 175, 20, 14, 0.525, 0.5], ["decal4_8", 271, 239, 21, 15, 0.548, 0.467], ["decal5_1", 991, 245, 27, 8, 0.648, 0.5], ["decal5_2", 393, 224, 27, 6, 0.648, 0.333], ["decal5_3", 991, 
  216, 27, 13, 0.648, 0.538], ["decal5_4", 1039, 171, 27, 16, 0.648, 0.5], ["decal5_5", 977, 98, 26, 18, 0.635, 0.5], ["decal5_6", 817, 23, 26, 19, 0.635, 0.474], ["decal5_7", 652, 23, 25, 20, 0.66, 0.5], ["decal5_8", 382, 232, 28, 22, 0.589, 0.5], ["e0", 384, 87, 51, 51, 0.549, 0.51], ["e10", 207, 2, 88, 85, 0.489, 0.541], ["e11", 659, 45, 92, 79, 0.511, 0.494], ["e13", 810, 121, 91, 73, 0.527, 0.562], ["e14", 825, 44, 79, 72, 0.57, 0.444], ["e15", 912, 189, 77, 65, 0.597, 0.385], ["e16", 207, 89, 
  80, 57, 0.613, 0.491], ["e17", 903, 118, 73, 69, 0.671, 0.406], ["e18", 991, 23, 73, 65, 0.411, 0.692], ["e19", 422, 224, 40, 29, 0.425, 0.448], ["e2", 597, 129, 83, 80, 0.566, 0.537], ["e20", 800, 231, 34, 23, 0.5, 0.565], ["e21", 836, 231, 32, 23, 0.5, 0.522], ["e22", 870, 222, 31, 23, 0.516, 0.522], ["e3", 303, 147, 88, 83, 0.557, 0.53], ["e4", 384, 2, 88, 83, 0.557, 0.53], ["e5", 297, 2, 85, 84, 0.541, 0.5], ["e7", 205, 151, 96, 86, 0.448, 0.488], ["e9", 118, 151, 85, 89, 0.482, 0.483], ["frenzy", 
  393, 140, 128, 82, 0.5, 0.5], ["frenzyIcon", 956, 23, 20, 23, 0.5, 0.5], ["health", 906, 90, 23, 23, 0.5, 0.5], ["iconBombdrop", 347, 88, 35, 52, 0.486, 0.452], ["iconLaserFull", 753, 44, 70, 75, 0.5, 0.5], ["iconMachinegun", 622, 211, 27, 36, 0.519, 0.5], ["iconMelee", 729, 203, 39, 32, 0.5, 0.5], ["iconRailgun", 546, 87, 42, 42, 0.5, 0.5], ["iconRocket", 625, 45, 32, 37, 0.5, 0.541], ["iconTrishoot", 474, 45, 40, 40, 0.5, 0.475], ["iconkill", 682, 126, 126, 75, 0.5, 0.5], ["indicator", 2, 2, 
  203, 147, 0.5, 0.5], ["killR", 729, 237, 44, 17, 0.364, 1.794], ["laser", 289, 89, 56, 56, 0.5, 0.5], ["laser_collision0", 799, 203, 36, 26, 0.542, 0.442], ["laser_collision1", 464, 224, 37, 27, 0.473, 0.426], ["laser_collision2", 503, 224, 34, 27, 0.485, 0.426], ["laser_opening", 956, 48, 19, 67, 0.5, 0.5], ["laser_stretch", 207, 148, 19, 1, 0.5, 0.5], ["laserfade", 539, 2, 527, 19, 0.5, 0.5], ["laserplug", 294, 239, 18, 15, 0.5, 0.5], ["melee", 931, 90, 23, 23, 0.5, 0.5], ["missile", 906, 56, 
  23, 23, 0.5, 0.5], ["missile_attack", 1019, 165, 18, 8, 0.5, 0.5], ["nearmiss", 2, 151, 114, 90, 0.5, 0.5], ["parachute", 837, 196, 25, 25, 0.5, 0.5], ["pause", 697, 203, 30, 34, 0.5, 0.735], ["plane1", 1005, 106, 35, 12, 0.5, 0.667], ["plane2", 76, 243, 35, 11, 0.5, 0.636], ["plane3", 910, 41, 35, 13, 0.5, 0.538], ["plane4", 910, 23, 35, 16, 0.5, 0.5], ["plane5", 845, 23, 35, 18, 0.5, 0.5], ["plane6", 679, 23, 35, 19, 0.5, 0.474], ["plane7", 585, 23, 35, 20, 0.5, 0.5], ["plane8", 314, 232, 35, 
  22, 0.5, 0.5], ["punch", 539, 218, 81, 36, 0.5, 0.5], ["railgun", 931, 56, 23, 23, 0.5, 0.5], ["revenge", 523, 134, 72, 82, 0.514, 0.5], ["revengeIcon", 978, 149, 20, 23, 0.5, 0.5], ["s0", 1E3, 154, 17, 18, 0.647, -0.361], ["s1", 864, 196, 21, 24, 0.619, -0.063], ["s10", 474, 2, 47, 14, 0.489, -1.036], ["s11", 1005, 90, 52, 14, 0.5, -1.107], ["s12", 1019, 154, 19, 9, 0.526, -1.944], ["s2", 516, 45, 30, 40, 0.467, 0.363], ["s3", 514, 87, 30, 45, 0.5, 0.433], ["s4", 437, 87, 34, 50, 0.529, 0.45], 
  ["s5", 473, 87, 39, 46, 0.513, 0.38], ["s6", 548, 45, 39, 39, 0.513, 0.269], ["s7", 651, 211, 44, 34, 0.523, 0.162], ["s8", 474, 18, 46, 25, 0.522, -0.14], ["s9", 537, 23, 46, 20, 0.5, -0.475], ["skull", 1040, 146, 20, 23, 0.5, 0.5], ["throttleFlame", 1042, 131, 23, 13, 0.5, 0.5], ["trishoot", 1042, 106, 23, 23, 0.5, 0.5], ["turbo0", 590, 86, 30, 41, 0.467, 0.5], ["turbo1", 589, 45, 34, 39, 0.559, 0.526], ["turbo2", 622, 86, 23, 39, 0.348, 0.5], ["wing", 770, 203, 27, 27, 0.5, 0.5]];
  var Ad = function() {
    this.color = {
      h : "61",
      s : "100%",
      l : "100%",
      a : 1
    };
    this.rotation = 0;
    this.scale = 1;
    this.pos = {
      x : 0,
      y : 0
    };
    this.speed = {
      x : 0,
      y : 0
    };
    this.time = 0;
    this.used = this.active = false;
    this.rotationSpeed = 0;
    this.draw = function(b) {
      b.save();
      b.translate(this.pos.x, this.pos.y);
      b.scale(this.scale, this.scale);
      b.rotate(this.rotation);
      var e = "hsla(" + this.color.h + "," + this.color.s + "," + this.color.l + "," + this.color.a + ")";
      b.translate(20, -2);
      b.beginPath();
      b.arc(0, 0, 25, 0, 2 * Math.PI, false);
      b.fillStyle = e;
      b.fill();
      b.beginPath();
      b.arc(-15, -32, 7, 0, 2 * Math.PI, false);
      b.fillStyle = e;
      b.fill();
      b.restore();
    };
  };
  var Ac = function() {
    var b$$0 = 0;
    var e$$0 = 0;
    var f = [];
    var d = 0;
    this.life = 400;
    var a$$0;
    var c$$0;
    var g$$0;
    var h$$0;
    this.debreeAge = 0;
    this.alpha = 1;
    this.init = function(r, n, k) {
      d = r;
      a$$0 = 0;
      c$$0 = -0.03;
      h$$0 = g$$0 = 0;
      b$$0 = n;
      e$$0 = k;
      r = this.life / d;
      n = 0;
      for (;n < d;n++) {
        k = new Ad;
        this.resetParticle(k);
        k.active = false;
        k.time = r * n;
        f.push(k);
      }
    };
    this.resetParticle = function(a) {
      a.pos.x = b$$0;
      a.pos.y = e$$0;
      a.speed.x = g$$0;
      a.speed.y = h$$0;
      a.time = 0;
      a.color.a = 1;
      a.rotationSpeed = (Math.random() - 0.5) / 10;
      a.rotation = 360 * Math.random();
    };
    this.update = function(b) {
      b = 1E3 / 60;
      var e = 0;
      for (;e < d;e++) {
        var g = f[e];
        if (g.time >= this.life) {
          if (!g.active) {
            g.active = true;
            g.time %= this.life;
          }
          this.resetParticle(g);
        }
        g.time += b;
        if (g.active) {
          var h = g.time / this.life;
          if (1 < h) {
            h = 1;
          }
          g.pos.x += 1 * g.speed.x;
          g.pos.y += 1 * g.speed.y;
          if (0 <= h && 0.1 > h) {
            var l = h / 0.1;
            g.scale = 0.2;
          } else {
            g.scale = 0.2 + (h - 0.1);
          }
          g.rotation += g.rotationSpeed;
          if (0 <= h && 0.1 > h) {
            l = h / 0.1;
            if (0.8 < l) {
              l = 0.8;
            }
            g.color.a = l;
          } else {
            g.color.a = 0.9 - (h - 0.1);
          }
          if (0 <= h && 0.25 > h) {
            l = h / 0.25;
            g.color.h = 61 * (1 - l);
            g.color.s = "100%";
            g.color.l = "50%";
          } else {
            if (0.25 <= h) {
              if (0.3 >= h) {
                l = (h - 0.25) / (0.3 - 0.25);
                g.color.h = 0;
                g.color.s = 100 * (1 - l) + "%";
                g.color.l = 100 * (0.4 + 0.1 * (1 - l)) + "%";
              }
            }
          }
          g.speed.x += 1 * a$$0;
          g.speed.y += 1 * c$$0;
        }
      }
    };
    this.updateExplosion = function(b) {
      b = 1E3 / 60;
      var e = 0;
      for (;e < d;e++) {
        var g = f[e];
        if (g.time >= this.life) {
          if (!g.active) {
            g.active = true;
            g.time %= this.life;
          }
          this.resetParticle(g);
        }
        g.time += b;
        if (g.active) {
          var h = g.time / this.life;
          if (1 < h) {
            h = 1;
          }
          g.pos.x += 1 * g.speed.x;
          g.pos.y += 1 * g.speed.y;
          if (0 <= h && 0.1 > h) {
            var l = h / 0.1;
            g.scale = 0.25;
          } else {
            g.scale = 0.25 + (h - 0.1);
          }
          g.rotation += g.rotationSpeed;
          if (0 <= h && 0.1 > h) {
            l = h / 0.1;
            if (0.8 < l) {
              l = 0.8;
            }
            g.color.a = l * (1 - this.debreeAge);
          } else {
            l = Math.pow(1 - (h - 0.1) / 0.9, 1 + 5 * this.debreeAge);
            g.color.a = l.toFixed(2);
          }
          g.color.a *= this.alpha;
          if (0 <= h && 0.25 > h) {
            l = h / 0.25;
            g.color.h = (61 * (1 - l)).toFixed(2);
            h = 100 * (1 - this.debreeAge);
            g.color.s = h.toFixed(2) + "%";
            g.color.l = "50%";
          } else {
            if (0.25 <= h) {
              if (0.4 >= h) {
                l = (h - 0.25) / (0.4 - 0.25);
                g.color.h = 0;
                h = 100 * (1 - l) * (1 - this.debreeAge);
                g.color.s = h.toFixed(2) + "%";
                g.color.l = (100 * (0.4 + 0.1 * (1 - l))).toFixed(2) + "%";
              }
            }
          }
          g.speed.x += 1 * a$$0;
          g.speed.y += 1 * c$$0;
        }
      }
    };
    this.updateMissileSmoke = function(b) {
      b = 1E3 / 60;
      var e = 0;
      for (;e < d;e++) {
        var g = f[e];
        if (g.time >= this.life) {
          if (!g.active) {
            g.active = true;
            g.time %= this.life;
          }
          this.resetParticle(g);
        }
        g.time += b;
        if (g.active) {
          var h = g.time / this.life;
          if (1 < h) {
            h = 1;
          }
          g.pos.x += 1 * g.speed.x;
          g.pos.y += 1 * g.speed.y;
          if (0 <= h && 0.1 > h) {
            var l = h / 0.1;
            g.scale = 0.2;
          } else {
            g.scale = 0.2 + 0.1 * (h - 0.1);
          }
          g.rotation += g.rotationSpeed;
          if (0 <= h && 0.1 > h) {
            l = h / 0.1;
            if (0.8 < l) {
              l = 0.8;
            }
            g.color.a = l;
          } else {
            g.color.a = 0.9 - (h - 0.1);
          }
          if (0 <= h && 0.25 > h) {
            g.color.h = 57;
            g.color.s = "21%";
            g.color.l = "50%";
          } else {
            if (0.25 <= h) {
              l = (h - 0.25) / 0.75;
              g.color.h = 57;
              g.color.s = "21%";
              h = 50 - 50 * l;
              if (10 > h) {
                h = 10;
              }
              g.color.l = h + "%";
            }
          }
          g.speed.x += 1 * a$$0;
          g.speed.y += 1 * c$$0;
        }
      }
    };
    this.setPosition = function(a, c) {
      b$$0 = a;
      e$$0 = c;
    };
    this.setLife = function(a) {
      this.life = a;
    };
    this.draw = function(a) {
      var b = d - 1;
      for (;0 <= b;b--) {
        var c = f[b];
        if (c.active) {
          c.draw(a);
        }
      }
    };
  };
  var zd = function() {
    function b$$0(a) {
      return Math.random() * a - a / 2;
    }
    this.deleting = false;
    var e$$0 = [];
    var f;
    var d$$0;
    this.init = function(a, c, e, h) {
      f = a;
      d$$0 = c;
      a = 2 + 4 * Math.random();
      c = 2 + 4 * Math.random();
      var p = 2 + 4 * Math.random();
      Math.random();
      var n = Math.PI / 4;
      var k = b$$0(Math.PI / 2);
      var m = b$$0(n) + k;
      var l = Math.cos(m);
      m = Math.sin(m);
      var x = 2 / 3 * Math.PI + b$$0(n) + k;
      var s = Math.cos(x);
      x = Math.sin(x);
      k = 4 / 3 * Math.PI + b$$0(n) + k;
      n = Math.cos(k);
      k = Math.sin(k);
      this.addDebree(l * a + e, m * a + h);
      this.addDebree(s * c + e, x * c + h);
      this.addDebree(n * p + e, k * p + h);
    };
    this.addDebree = function(a, b) {
      var g = new Bd;
      g.init(f, d$$0);
      g.setSpeed(a, b);
      e$$0.push(g);
    };
    this.update = function(a) {
      var b = 0;
      for (debreeID in e$$0) {
        var d = e$$0[debreeID];
        d.update(a);
        if (d.deleting) {
          e$$0.splice(debreeID, 1);
          delete d;
        }
        b++;
      }
      if (0 == b) {
        this.deleting = true;
      }
    };
    this.draw = function(a) {
      for (debreeID in e$$0) {
        e$$0[debreeID].draw(a);
      }
    };
  };
  var Bd = function() {
    var b$$0;
    var e;
    var f;
    var d;
    var a$$0;
    var c$$0 = 0.08;
    if (v.isSpaceWars()) {
      c$$0 = 0;
    }
    var g$$0;
    var h;
    var p;
    var n = 0;
    this.deleting = false;
    this.init = function(a, b) {
      g$$0 = a;
      h = b;
      p = new Ac;
      p.init(15, g$$0, h);
    };
    this.setSpeed = function(c, g) {
      b$$0 = c;
      e = g;
      f = 0;
      d = 0.2 * b$$0;
      a$$0 = 0.2 * e;
    };
    this.update = function(k) {
      f += c$$0;
      g$$0 += b$$0;
      h += e + f;
      b$$0 *= 0.975;
      e *= 0.975;
      c$$0 *= 0.975;
      if (Math.abs(b$$0) < Math.abs(d)) {
        b$$0 = d;
      }
      if (Math.abs(e) < Math.abs(a$$0)) {
        e = a$$0;
      }
      if (3 < f) {
        f = 3;
      }
      n += k;
      if (500 < n && 2300 >= n) {
        p.debreeAge = (n - 500) / 2300;
      } else {
        if (2300 < n && 2500 >= n) {
          p.alpha = (2500 - n) / 200;
        } else {
          if (2500 < n) {
            delete p;
            this.deleting = true;
          }
        }
      }
      if (!this.deleting) {
        p.setPosition(g$$0, h);
        p.updateExplosion(k);
      }
    };
    this.draw = function(a) {
      if (!this.deleting) {
        p.draw(a);
      }
    };
  };
  var fd = function() {
    this.lastUpdate = 0;
    this.id = -1;
    this.angle = this.speed = this.dstY = this.dstX = this.origY = this.origX = this.prevY = this.prevX = this.y = this.x = 0;
    this.controlAngle = -90;
    this.frameSwitchTime = 40;
    this.timeToNextFrame = 0;
    this.flameState = 1;
    this.lastImage;
    this.first_set = true;
    this.colorHue = 0;
    var b$$0 = new yb;
    var e$$0 = 0;
    var f$$0 = 0;
    this.finished = false;
    this.type = 0;
    this.update = function(d) {
      var a = aa((N - this.lastUpdate) / Gb, 0, 1);
      var c = this.y - this.prevY;
      if (0 == this.x - this.prevX) {
        if (0 == c) {
          f$$0++;
          if (50 < f$$0) {
            this.finished = true;
          }
        }
      }
      this.prevX = this.x;
      this.prevY = this.y;
      this.x = a * (this.dstX - this.origX) + this.origX;
      this.y = a * (this.dstY - this.origY) + this.origY;
      b$$0.setPosition(this.x, this.y);
      b$$0.update(d);
      if (1 == this.type) {
        if (v.isSpaceWars()) {
          this.angle += 0.2;
        }
      } else {
        if (2 != this.type) {
          a = B / 2;
          c = a - 100;
          if (this.y > c && (this.y < a && 0 >= e$$0)) {
            e$$0 = 5;
            var g = Math.random() / 2;
            c = (0.2 + (0.5 - (a - this.y) / (a - c) * 0.5)) * (0.95 + g);
            g = 20 * Math.sin(this.angle);
            la.addSplash(this.x - g, a + 5 * Math.random(), c, true);
          }
          e$$0 -= d;
        }
      }
    };
    this.draw = function(d, a) {
      var c = 1;
      this.timeToNextFrame -= a;
      if (0 >= this.timeToNextFrame) {
        this.flameState = !this.flameState;
        this.timeToNextFrame = this.frameSwitchTime;
      }
      var e = 0.7;
      if (this.flameState) {
        e = 1;
      }
      if (0 == this.type) {
        b$$0.width = 1.5 * e;
        b$$0.style = "rgba(247, 189, 57, 1.0)";
        b$$0.draw(d);
        b$$0.width = 0.4 * e;
        b$$0.style = "rgba(232, 247, 59, 1.0)";
        b$$0.draw(d);
        d.save();
        d.translate(this.x, this.y);
        if (this.flameState) {
          d.scale(0.7, 0.7);
        } else {
          d.scale(0.9, 0.9);
        }
        d.rotate(this.angle);
        d.translate(-27, 0);
        p.frames.throttleFlame.draw(d);
        d.restore();
      }
      d.save();
      d.translate(this.x, this.y);
      if (2 != this.type) {
        if (1 == this.type) {
          c = 1.4;
        }
        d.scale(c, c);
        if (1 == this.type) {
          if (p.blinkImage) {
            if (v.isSpaceWars()) {
              d.scale(2, 2);
              d.drawImage(p.blinkImage, -p.blinkImage.width / 2, -p.blinkImage.height / 2);
              d.scale(0.5, 0.5);
            }
          }
        }
        d.rotate(this.angle);
        if (0 == this.type) {
          p.frames.missile_attack.draw(d);
        } else {
          p.frames.bomb.draw(d);
        }
      } else {
        d.beginPath();
        d.fillStyle = "#FF0000";
        d.arc(0, 0, 6, 0, 2 * Math.PI);
        d.fill();
        d.beginPath();
        d.fillStyle = "#FFFFFF";
        d.arc(0, 0, 4, 0, 2 * Math.PI);
        d.fill();
      }
      d.restore();
    };
    this.drawReflection = function(b, a) {
      var c = B / 2;
      var e = c - this.y;
      if (!(0 > e || 170 < e)) {
        var f = e / 170;
        b.save();
        b.translate(this.x, c + e - 25);
        c = 1;
        if (30 > e && 15 <= e) {
          c = (e - 15) / 15;
        } else {
          if (15 > e) {
            c = 0;
          }
        }
        b.globalAlpha = 0.7 * (1 - f) * c;
        b.scale(1.1, 0.6);
        b.beginPath();
        b.fillStyle = "rgba(0,100,255,1.0)";
        b.arc(0, 0, 10, 0, 2 * Math.PI);
        b.fill();
        b.restore();
      }
    };
    this.setPosition = function(b, a, c) {
      this.origX = this.dstX;
      this.origY = this.dstY;
      this.dstX = 10 * b;
      this.dstY = 10 * a;
      if (this.first_set) {
        if (b = D[c]) {
          a = 5 * Math.abs(Math.cos(b.angle + Math.PI / 2));
          this.origX = b.x;
          this.origY = b.y + a;
          this.x = b.x;
          this.y = b.y;
        } else {
          this.x = this.dstX;
          this.y = this.dstY;
          this.origX = this.dstX;
          this.origY = this.dstY;
        }
        this.first_set = false;
        if (1 == this.type) {
          this.angle = Math.PI / 2;
        }
      }
      if (0 == this.type) {
        b = this.dstX - this.origX;
        a = this.dstY - this.origY;
        this.angle = 0 <= b ? Math.atan(a / b) : Math.atan(a / b) + Math.PI;
      }
    };
    this.setColorHue = function(b) {
      this.colorHue = b;
    };
    this.setType = function(d) {
      this.type = d;
      if (0 != d) {
        delete b$$0;
      }
    };
    this.getSpeedDirectionX = function() {
      return this.x - this.prevX;
    };
    this.getSpeedDirectionY = function() {
      return this.y - this.prevY;
    };
    b$$0.tailAddJointInterval = 30;
    b$$0.enabled = true;
    b$$0.trailTime = 100;
    b$$0.width = 1.2;
    b$$0.fixedColor = true;
  };
  var yb = function() {
    this.tailAddJointInterval = 50;
    this.timeToNextJoint = 0;
    this.tailJoints = [[]];
    this.trailTimeEffectStart = this.trailTime = 600;
    this.trailEffectTime = 0;
    this.enabled = false;
    this.width = 1;
    var b$$0;
    var e$$0;
    this.fixedColor = false;
    this.style;
    this.update = function(f) {
      var d = this.tailJoints.length - 1;
      if (0 >= this.timeToNextJoint && -1 < d) {
        this.timeToNextJoint = this.tailAddJointInterval;
        if (this.enabled) {
          this.tailJoints[d].push({
            x : b$$0,
            y : e$$0,
            origX : b$$0,
            origY : e$$0,
            t : N,
            fx : (600 - Math.abs(this.trailEffectTime - 600)) / 600,
            style : this.style
          });
        }
        var a = 0;
        for (;a <= d;a++) {
          var c = this.tailJoints[a].length;
          if (0 < c) {
            c = N - this.tailJoints[a][0].t;
            if (c > this.trailTime) {
              this.tailJoints[a].splice(0, 1);
              if (0 == this.tailJoints[a].length) {
                this.tailJoints.splice(a, 1);
              }
            }
            break;
          }
        }
      }
      var g = this.timeToNextJoint / 50;
      d = this.tailJoints.length - 1;
      a = 0;
      for (;a <= d;a++) {
        c = this.tailJoints[a].length;
        if (!(1 >= c)) {
          c = N - this.tailJoints[a][0].t;
          if (c > this.trailTime - this.tailAddJointInterval) {
            c = this.tailJoints[a][0].origY - this.tailJoints[a][1].origY;
            this.tailJoints[a][0].x = this.tailJoints[a][1].origX + (this.tailJoints[a][0].origX - this.tailJoints[a][1].origX) * g;
            this.tailJoints[a][0].y = this.tailJoints[a][1].origY + c * g;
          }
        }
      }
      this.timeToNextJoint -= f;
      this.trailEffectTime = 0 > this.trailEffectTime ? 0 : this.trailEffectTime - f;
    };
    this.draw = function(b) {
      if (Wa) {
        var d = this.tailJoints.length;
        var a = 0;
        for (;a < d;a++) {
          var c = this.tailJoints[a].length;
          var e = 0;
          for (;e < c - 1;e++) {
            b.strokeStyle = this.tailJoints[a][e].style;
            var h = e / c * (8 + 8 * this.tailJoints[a][e].fx);
            if (0 == h) {
              h = 0.1;
            }
            b.lineWidth = h * this.width;
            b.beginPath();
            b.lineTo(this.tailJoints[a][e].x, this.tailJoints[a][e].y);
            b.lineTo(this.tailJoints[a][e + 1].x, this.tailJoints[a][e + 1].y);
            b.stroke();
          }
        }
      }
    };
    this.setPosition = function(f, d) {
      b$$0 = f;
      e$$0 = d;
    };
    this.push = function() {
      this.tailJoints.push([]);
    };
    this.trailEffect = function() {
      this.trailEffectTime = 1200;
    };
    this.clear = function() {
      this.tailJoints = [[]];
    };
  };
  var Xc = function() {
    this.tailJoints = [[]];
    this.maxPoints = 1;
    this.flagDivisions = 5;
    this.letterMinDistance = this.pointMinDistance = 10;
    this.texture;
    this.textureWidth;
    this.textureHeight;
    this.loaded = this.enabled = false;
    this.width = 1;
    var b$$0;
    var e;
    this.style;
    this.flagHeight;
    this.flipX = false;
    this.flipY = true;
    this.stringScale = this.scale = 1;
    this.setTexture = function(b) {
      this.texture = new Image;
      this.texture.src = "flags/" + b.toLowerCase() + ".png";
      var d = this;
      this.texture.onload = function() {
        d.textureWidth = d.texture.width;
        d.textureHeight = d.texture.height;
        d.maxPoints = parseInt(d.textureWidth / 12);
        d.flagDivisions = d.maxPoints - 1;
        var a = d.scale;
        d.flagHeight = 0.5 * d.textureHeight * a;
        a = d.textureWidth * a / d.flagDivisions;
        d.pointMinDistance = a;
        d.letterMinDistance = a;
        d.enabled = true;
        d.loaded = true;
      };
    };
    this.update = function(f) {
      f = false;
      var d = this.tailJoints[0].length;
      if (0 == d) {
        f = true;
      } else {
        var a = this.tailJoints[0][d - 1];
        var c = a = Math.sqrt(Math.pow(a.x - b$$0, 2) + Math.pow(a.y - e, 2));
        if (1 < d) {
          c = this.tailJoints[0][d - 2];
          c = Math.sqrt(Math.pow(c.x - b$$0, 2) + Math.pow(c.y - e, 2));
        }
        if (a > this.pointMinDistance) {
          if (c > 3 * this.pointMinDistance) {
            f = true;
          }
        }
      }
      if (f) {
        this.tailJoints[0].push({
          x : b$$0,
          y : e,
          origX : b$$0,
          origY : e,
          t : N,
          fx : 0,
          style : this.style
        });
        if (d > this.maxPoints) {
          this.tailJoints[0].splice(0, 1);
        }
      }
    };
    this.draw = function(f) {
      if (Wa && (this.loaded && 0 < this.tailJoints.length)) {
        var d;
        var a;
        var c = this.letterMinDistance;
        var g = true;
        var h = 0;
        var p = 0;
        var n;
        var k;
        var m;
        var l;
        var x;
        var s;
        var q = this.tailJoints[0].length - 2;
        for (;0 <= q;q--) {
          var t = this.tailJoints[0][q].x;
          var w = this.tailJoints[0][q].y;
          var u;
          if (g) {
            d = b$$0;
            a = e;
          }
          var v = t - d;
          var y = w - a;
          var E;
          var C;
          u = Math.sqrt(Math.pow(v, 2) + Math.pow(y, 2));
          if (0 == u) {
            console.log("OOPS! Division by ZERO! " + q + " : " + v + ":::" + y);
          } else {
            E = v / u;
            C = y / u;
          }
          v = false;
          var A;
          var B;
          if (0 < u - c) {
            A = d + E * c;
            B = a + C * c;
            c = this.letterMinDistance;
            if (0 < h) {
              if (p < this.flagDivisions) {
                d = this.flagHeight;
                n = A - n;
                k = B - k;
                n /= this.letterMinDistance;
                k /= this.letterMinDistance;
                k = -k * d;
                n *= d;
                u = A + k;
                v = B + n;
                y = A - k;
                var D = B - n;
                d = this.textureWidth;
                a = this.textureHeight;
                var G;
                var H;
                var J;
                var K;
                if (this.flipY && 0 < E) {
                  G = 0;
                  H = a;
                } else {
                  G = a;
                  H = 0;
                }
                if (this.flipX && 0 < E) {
                  J = p / this.flagDivisions * d;
                  K = (p + 1) / this.flagDivisions * d;
                } else {
                  J = d * (1 - p / this.flagDivisions);
                  K = d * (1 - (p + 1) / this.flagDivisions);
                }
                d = f;
                a = this.texture;
                m = [{
                  x : x,
                  y : s,
                  u : J,
                  v : G
                }, {
                  x : m,
                  y : l,
                  u : J,
                  v : H
                }, {
                  x : u,
                  y : v,
                  u : K,
                  v : H
                }, {
                  x : y,
                  y : D,
                  u : K,
                  v : G
                }];
                l = [[0, 1, 2], [2, 3, 0]];
                x = 0;
                for (;2 > x;x++) {
                  var I = l[x];
                  s = m[I[0]].x;
                  u = m[I[1]].x;
                  v = m[I[2]].x;
                  y = m[I[0]].y;
                  D = m[I[1]].y;
                  G = m[I[2]].y;
                  H = m[I[0]].u;
                  J = m[I[1]].u;
                  K = m[I[2]].u;
                  var M = m[I[0]].v;
                  var N = m[I[1]].v;
                  I = m[I[2]].v;
                  d.save();
                  d.beginPath();
                  d.moveTo(s, y);
                  d.lineTo(u, D);
                  d.lineTo(v, G);
                  d.closePath();
                  d.clip();
                  var O = H * N + M * K + J * I - N * K - M * J - H * I;
                  d.transform((s * N + M * v + u * I - N * v - M * u - s * I) / O, (y * N + M * G + D * I - N * G - M * D - y * I) / O, (H * u + s * K + J * v - u * K - s * J - H * v) / O, (H * D + y * K + J * G - D * K - y * J - H * G) / O, (H * N * v + M * u * K + s * J * I - s * N * K - M * J * v - H * u * I) / O, (H * N * G + M * D * K + y * J * I - y * N * K - M * J * G - H * D * I) / O);
                  d.drawImage(a, 0, 0);
                  d.restore();
                }
                p++;
              } else {
                break;
              }
              m = A + k;
              l = B + n;
              x = A - k;
              s = B - n;
            } else {
              d = this.flagHeight;
              n = A - b$$0;
              k = B - e;
              n /= this.letterMinDistance;
              k /= this.letterMinDistance;
              k = -k * d;
              n *= d;
              m = A + k;
              l = B + n;
              x = A - k;
              s = B - n;
              f.strokeStyle = "rgba(255, 255, 255, 0.3)";
              f.lineWidth = 2;
              f.beginPath();
              f.lineTo(b$$0, e);
              f.lineTo(A + k * this.stringScale, B + n * this.stringScale);
              f.stroke();
              f.beginPath();
              f.lineTo(b$$0, e);
              f.lineTo(A - k * this.stringScale, B - n * this.stringScale);
              f.stroke();
            }
            n = A;
            k = B;
            h++;
            v = true;
          } else {
            c -= u;
          }
          if (v) {
            d = A;
            a = B;
            q++;
          } else {
            d = t;
            a = w;
          }
          if (g) {
            g = false;
          }
        }
      }
    };
    this.setPosition = function(f, d) {
      b$$0 = f;
      e = d;
    };
    this.push = function() {
    };
    this.trailEffect = function() {
    };
    this.clear = function() {
      this.tailJoints = [[]];
    };
  };
  var Wc = function() {
    var b = [];
    var e = [];
    var f$$0;
    this.update = function(d) {
      if (0 < e.length) {
        if (2E3 < N - e[0]) {
          b.shift();
          e.shift();
        }
      }
    };
    this.draw = function(d) {
      d.globalAlpha = 1;
      var a;
      for (a in b) {
        var c = b[a];
        var f = (N - e[a]) / 2E3;
        var h = f = Math.sqrt(f);
        h = 0.8 >= h ? h / 0.8 : 1 - (h - 0.8) / 0.2;
        d.globalAlpha = h;
        d.drawImage(c, -c.width / 2, 40 * -f - 10);
      }
      d.globalAlpha = 1;
    };
    this.addScore = function(d) {
      var a = false;
      if (f$$0) {
        if (500 > N - f$$0) {
          a = true;
        }
      }
      var c;
      c = new Ba(13, "#FFFFFF");
      c.setFont("px 'proxima-nova-1','proxima-nova-2', Arial Black");
      if (a) {
        d = b[b.length - 1].number + d;
      } else {
        f$$0 = N;
      }
      c.setValue("+" + d);
      c = c.render();
      c.number = d;
      if (a) {
        b.pop();
        b.push(c);
      } else {
        b.push(c);
        e.push(+new Date);
      }
    };
  };
  var pd = "shot";
  var Sb = "laser";
  var od = "kinglaser";
  var qd = "trishot";
  var rd = "rail";
  var hd = "mlaunch";
  var Mc = "mexpl";
  var Bc = "mexpl";
  var Dc = "phit";
  var kd = "weapgrab";
  var md = "hgrab";
  var ld = "winggrab";
  var cd = "warn";
  var Qb = "lockon";
  var Pc = "king";
  var Sc = "planeloop";
  var Tc = "waterloop";
  var wd = "env";
  var nd = "bigsplash";
  var Yc = "crash";
  var Uc = "lasershot";
  var Vc = "laserloop";
  var Zc = "woosh";
  var gd = "cannonshoot";
  var Cc = "";
  var O = 0;
  var Oa = 3;
  var Na = 600;
  var vd = function() {
    this.sound;
    var b$$0 = false;
    var e = {};
    var f = {
      bigsplash : [0, 1889.795918367347],
      cannonshoot : [3E3, 777.8684807256235],
      crash : [5E3, 991.7913832199545],
      env : [7E3, 4486.984126984126, 1],
      hgrab : [13E3, 208.9115646258506],
      king : [15E3, 1162.01814058957],
      kinglaser : [18E3, 533.9909297052152],
      laser : [2E4, 203.4467120181418],
      laserloop : [22E3, 898.934240362813, 1],
      lasershot : [24E3, 367.6643990929698],
      lockon : [26E3, 46.14512471655274],
      mexpl : [28E3, 1007.8231292517011],
      mlaunch : [31E3, 661.4512471655338],
      phit : [33E3, 206.30385487528002],
      planeloop : [35E3, 1427.7551020408196, 1],
      rail : [38E3, 840.7482993197277],
      shot : [4E4, 101.81405895691853],
      trishot : [42E3, 392.81179138321676],
      warn : [44E3, 2109.365079365077],
      waterloop : [48E3, 629.9092970521514, 1],
      weapgrab : [5E4, 202.06349206349472],
      winggrab : [52E3, 111.97278911564723],
      woosh : [54E3, 486.2585034013591]
    };
    this.load = function(d) {
      this.sound = new Howl({
        urls : ["sounds/out.ogg", "sounds/out.m4a", "sounds/out.mp3", "sounds/out.ac3"],
        sprite : f,
        onload : function() {
          b$$0 = true;
          if (d) {
            d();
          }
        }
      });
    };
    this.playSound = function(d$$0, a, c, g, h) {
      if (b$$0 && (0 != K && sa)) {
        a *= $;
        var p = f[d$$0];
        if (!e[d$$0]) {
          e[d$$0] = 0;
        }
        if (!(0 < g && e[d$$0] >= g)) {
          this.sound.play(d$$0, function(b) {
            var d = J.sound._nodeById(b);
            if (d) {
              if (d.bufferSource) {
                d.bufferSource.playbackRate.value = c;
              }
            }
            J.sound.volume(a, b);
            if (h) {
              h(b);
            }
          });
          p = p[1];
          if (g != O) {
            e[d$$0]++;
          }
          setTimeout(function() {
            if (g != O) {
              e[d$$0]--;
            }
          }, p);
        }
      }
    };
    this.stop = function(d) {
      if (b$$0) {
        d.stop();
      }
    };
    this.setVolume = function(b) {
      this.sound.volume(b);
    };
  };
  var Oc = function() {
    var b$$0 = [];
    var e$$0 = 0;
    var f = null;
    var d$$0 = null;
    var a$$0 = null;
    var c$$0 = null;
    var g = 0;
    var h = 0;
    e$$0 = 2E3;
    var r = false;
    var n = 1;
    var k = false;
    var m$$0 = 0;
    var l = 0;
    this.update = function(a) {
      if (1 == g) {
        h += a;
        if (h > e$$0) {
          r = true;
        }
      }
      if (r) {
        g -= 0.2;
        if (0 > g) {
          g = 0;
          b$$0.shift();
          if (0 < b$$0.length) {
            this.processCode(b$$0[0]);
          } else {
            d$$0 = null;
          }
        }
        m$$0 = -(1 - g);
      } else {
        if (1 > g) {
          g += 0.2;
          if (1 < g) {
            g = 1;
          }
        }
        m$$0 = 1 - (1.5 * g - 0.75) / 0.75;
      }
    };
    this.draw = function(a) {
      if (d$$0) {
        a.globalAlpha = g;
        a.scale((n + 0.2 * m$$0) * w$$1, (n + 0.2 * m$$0) * w$$1);
        a.drawImage(d$$0, -d$$0.width / 2, -d$$0.height + 120);
        a.drawImage(currentText2Render, -currentText2Render.width / 2, 110);
        if (k) {
          c$$0.y = 30;
          c$$0.draw(a);
        } else {
          a.drawImage(c$$0, -c$$0.width / 2 - 5, -c$$0.height - d$$0.height + 120);
        }
      }
    };
    this.replaceCode = function(a) {
      var c;
      for (c in b$$0) {
        if (64 >= b$$0[c] && 64 >= a) {
          return b$$0[c] < a ? (b$$0[c] = a, c) : -2;
        }
        if (256 == b$$0[c] && 256 == a || (128 == b$$0[c] && 128 == a || 4096 == a)) {
          return c;
        }
      }
      return-1;
    };
    this.push = function(a, c) {
      if (256 == a) {
        l = c;
      }
      var d = this.replaceCode(a);
      if (-1 == d) {
        b$$0.push(a);
        if (1 == b$$0.length) {
          this.processCode(a);
        }
      } else {
        if (0 == d) {
          this.processCode(a);
        }
      }
    };
    this.processCode = function(b) {
      r = false;
      g = h = 0;
      var e = "";
      var m = "KILL";
      var q;
      k = false;
      if (8 == b) {
        e = "DOUBLE";
        q = "#cd9a6d";
        c$$0 = p.doubleKillCanvas;
        n = 0.8;
      } else {
        if (16 == b) {
          e = "TRIPLE";
          q = "#95b9c9";
          c$$0 = p.tripleKillCanvas;
          n = 0.9;
          m += "!";
        } else {
          if (32 == b) {
            e = "QUAD";
            q = "#f0a400";
            c$$0 = p.quadKillCanvas;
            n = 1;
            m += "!!";
          } else {
            if (64 == b) {
              e = "MULTI";
              q = "#de0000";
              c$$0 = p.multiKillCanvas;
              n = 1.1;
              m += "!!";
            } else {
              if (128 == b) {
                e = "NEAR";
                q = "#ffe774";
                c$$0 = p.frames.nearmiss;
                n = 0.8;
                m = "MISS";
                k = true;
              } else {
                if (4096 == b) {
                  e = "REVENGE";
                  q = "#dd1824";
                  c$$0 = p.frames.revenge;
                  n = 1;
                  m = "KILL";
                  k = true;
                } else {
                  if (256 == b) {
                    e = l + " KILL STREAK!";
                    q = "#a5dd11";
                    c$$0 = p.frames.frenzy;
                    n = 0.8;
                    m = "";
                    k = true;
                  }
                }
              }
            }
          }
        }
      }
      if ("" != e) {
        f = new Ba(40, q, true, "#000000");
        f.setValue(e);
        f.setStrokeWidth(10);
        d$$0 = f.render();
        a$$0 = new Ba(40, q, true, "#000000");
        a$$0.setValue(m);
        a$$0.setStrokeWidth(10);
        currentText2Render = a$$0.render();
      }
    };
    this.clearNearMiss = function() {
      var a;
      for (a in b$$0) {
        if (128 == b$$0[a]) {
          if (0 == a) {
            h = e$$0;
          } else {
            b$$0.splice(a, 1);
          }
          break;
        }
      }
    };
    this.clear = function() {
      b$$0 = [];
      if (null != d$$0) {
        r = true;
      }
    };
    this.shouldDraw = function() {
      return g;
    };
  };
  var td = function() {
    var b = this;
    b.x = 0;
    b.y = 0;
    b.z = 1 * Math.random() + 0.3;
    b.size = 1.2;
    b.opacity = 0.8 * Math.random() + 0.1;
    b.update = function(e) {
      if (0 == b.x || 0 == b.y) {
        b.x = Math.random() * (e[1].x - e[0].x) + e[0].x;
        b.y = Math.random() * (e[1].y - e[0].y) + e[0].y;
      }
      var f = e[1].x - e[0].x;
      var d = e[1].y - e[0].y;
      if (b.x < e[0].x) {
        b.x += Math.ceil((e[0].x - b.x) / f) * f;
      }
      if (b.y < e[0].y) {
        b.y += Math.ceil((e[0].y - b.y) / d) * d;
      }
      if (b.x > e[1].x) {
        b.x -= Math.ceil((b.x - e[1].x) / f) * f;
      }
      if (b.y > e[1].y) {
        b.y -= Math.ceil((b.y - e[1].y) / d) * d;
      }
    };
    b.draw = function(e) {
      e.fillStyle = "rgba(226,219,226," + b.opacity + ")";
      e.beginPath();
      e.arc(b.x, b.y, this.z * this.size, 0, 2 * Math.PI, true);
      e.closePath();
      e.fill();
    };
  };
  var zb = 1;
  var cb = 2;
  var Ec = 0;
  var jd = function() {
    this.lastUpdate = this.highlightValue = this.state = 0;
    this.id = -1;
    this.dstFloatValue = this.dstY = this.dstX = this.origFloatValue = this.origY = this.origX = this.prevFloatValue = this.prevY = this.prevX = this.floatValue = this.y = this.x = 0;
    this.energy = 255;
    this.inGame = true;
    this.updateBool = false;
    this.dstAngle = this.origAngle = this.angle = Math.PI / 2;
    this.name = "";
    this.first_set = true;
    var b$$0 = this.isShooting = this.isBot = false;
    this.type = 0;
    this.warshipContext = this.warshipCanvas = null;
    var e$$0 = 1;
    var f$$0 = 20;
    var d$$0 = 100;
    var a$$0 = 1;
    this.fragment = 1;
    this.recoilTime = this.cannonAngle = 0;
    this.update = function(c) {
      if (this.inGame) {
        if (X(this.x, this.y + this.floatValue, 120)) {
          if (!b$$0) {
            b$$0 = true;
          }
        } else {
          b$$0 = false;
        }
        var g = aa((N - this.lastUpdate) / Gb, 0, 1);
        this.prevX = this.x;
        this.prevY = this.y;
        this.prevFloatValue = this.floatValue;
        var h = g * (this.dstY - this.origY) + this.origY;
        var q = g * (this.dstFloatValue - this.origFloatValue) + this.origFloatValue;
        this.x = g * (this.dstX - this.origX) + this.origX;
        this.y = h;
        this.floatValue = q;
        this.angle = g * (this.dstAngle - this.origAngle) + this.origAngle;
        this.cannonAngle = g * (this.dstCannonAngle - this.origCannonAngle) + this.origCannonAngle;
        if (0 < this.highlightValue) {
          this.highlightValue -= 0.06;
          if (0 > this.highlightValue) {
            this.highlightValue = 0;
          }
        }
        if (this.type == zb) {
          if (1 == this.state) {
            if (0 < f$$0) {
              e$$0 -= 0.02;
              if (0 > e$$0) {
                e$$0 = 0;
              }
              d$$0 -= c;
              if (0 > d$$0) {
                d$$0 = 150;
                f$$0 -= 1;
                g = Math.random() * p.warshipImage.width - p.warshipImage.width / 2;
                h = Math.random() * p.warshipImage.height / 2 - p.warshipImage.height / 4;
                T.addBlast(this.x + g, this.y + h + q, 0.5, O, 2);
              }
            }
          }
        }
        if (2 == this.state) {
          a$$0 -= 0.01;
          if (0 > a$$0) {
            a$$0 = 0;
          }
        } else {
          a$$0 += 0.01;
          if (1 < a$$0) {
            a$$0 = 1;
          }
        }
        this.recoilTime = 0 < this.recoilTime ? this.recoilTime - c : 0;
      }
    };
    this.loadWarshipCanvas = function() {
      var a = y$$1.createElement("canvas");
      var b = a.getContext("2d");
      var d = p.warshipImage.height;
      a.width = p.warshipImage.width;
      a.height = d;
      this.warshipCanvas = a;
      this.warshipContext = b;
    };
    this.draw = function(c) {
      if (this.inGame && b$$0) {
        if (this.type == zb && p.warshipLoaded) {
          if (p.warshipImage && (!this.warshipCanvas && this.loadWarshipCanvas()), this.warshipCanvas) {
            c.save();
            c.globalAlpha = a$$0;
            c.translate(this.x, this.y - 4);
            this.warshipContext.clearRect(0, 0, this.warshipCanvas.width, this.warshipCanvas.height);
            var d = 0.267 * this.warshipCanvas.width;
            var e = 0.63 * this.warshipCanvas.height;
            this.warshipContext.save();
            this.warshipContext.translate(0, this.floatValue + 4);
            this.warshipContext.translate(this.warshipCanvas.width / 2, this.warshipCanvas.height / 2);
            this.warshipContext.rotate(this.angle);
            this.warshipContext.translate(-this.warshipCanvas.width / 2, -this.warshipCanvas.height / 2);
            this.warshipContext.translate(d, e);
            this.warshipContext.rotate(-this.cannonAngle);
            d = 10 * (1 - this.recoilTime / 200);
            this.warshipContext.translate(0.5 * -p.cannonImage.width, -20 - d);
            this.warshipContext.drawImage(p.cannonImage, 0, 0);
            this.warshipContext.restore();
            this.warshipContext.save();
            this.warshipContext.translate(0, this.floatValue + 4);
            this.warshipContext.translate(this.warshipCanvas.width / 2, this.warshipCanvas.height / 2);
            this.warshipContext.rotate(this.angle);
            this.warshipContext.translate(-this.warshipCanvas.width / 2, -this.warshipCanvas.height / 2);
            this.warshipContext.drawImage(p.warshipImage, 0, 0);
            if (0 < this.highlightValue) {
              this.warshipContext.globalAlpha = 0.8 * this.highlightValue;
              this.warshipContext.drawImage(p.whiteWarshipImage, 0, 0);
              this.warshipContext.globalAlpha = 1;
            }
            this.warshipContext.restore();
            if (1 == this.state) {
              c.globalAlpha = 0.8;
            }
            c.drawImage(this.warshipCanvas, -p.warshipImage.width / 2, -p.warshipImage.height / 2);
            c.restore();
          }
        } else {
          if (this.type == cb) {
            if (p.asteroidImage) {
              c.save();
              c.globalAlpha = a$$0;
              c.translate(this.x, this.y);
              c.rotate(-this.angle);
              d = (3 - this.fragment + 1) / 3;
              c.scale(d, d);
              c.drawImage(p.asteroidImage, -p.asteroidImage.width / 2, -p.asteroidImage.height / 2);
              if (0 < this.highlightValue) {
                c.globalAlpha = 0.8 * this.highlightValue;
                c.drawImage(p.whiteAsteroidImage, -p.asteroidImage.width / 2, -p.asteroidImage.height / 2);
                c.globalAlpha = 1;
              }
              c.restore();
            }
          }
        }
      }
    };
    this.drawReflection = function(c, d) {
      if (this.inGame) {
        if (b$$0) {
          if (this.type == zb) {
            if (p.warshipLoaded) {
              c.save();
              c.globalAlpha = 0.15 * a$$0;
              c.translate(this.x, this.y + this.warshipCanvas.height - 4);
              c.scale(1, -1);
              c.drawImage(this.warshipCanvas, -p.warshipImage.width / 2, -p.warshipImage.height / 2);
              c.restore();
              c.save();
              c.translate(this.x + 85 + this.floatValue + 100 * this.angle, this.y + this.warshipCanvas.height / 2 - 4);
              c.globalAlpha = e$$0 * a$$0;
              c.beginPath();
              c.moveTo(-3, 1.5);
              c.lineTo(0, -1.5);
              c.lineTo(-300, 0);
              c.fillStyle = "rgba(255,255,255,1.0)";
              c.fill();
              c.restore();
              c.globalAlpha = 1;
            }
          }
        }
      }
    };
    this.drawInput = function(a) {
    };
    this.drawInfo = function(a) {
      if (this.inGame && (b$$0 && (this.state == Ec && 65535 != this.energy))) {
        a.save();
        a.translate(this.x, this.y);
        a.fillStyle = "rgba(126,219,226,1)";
        a.shadowOffsetX = 0;
        a.shadowOffsetY = 0;
        a.shadowBlur = 0;
        a.shadowColor = "rgba(255, 255, 255, 0.7)";
        a.lineWidth = 1;
        var d = 28;
        var e;
        if (this.type == cb) {
          e = 50 / this.fragment;
          d *= 3 / this.fragment;
        } else {
          e = 55;
          d *= 5;
        }
        var f = 512;
        if (32767.5 > this.energy && 16383.75 < this.energy) {
          f = 30;
        } else {
          if (16383.75 > this.energy) {
            f = 0;
          }
        }
        a.fillStyle = "hsl(" + f + ", 100%, 50%)";
        a.fillRect(-d / 2 + 0, e + 0, this.energy / 65535 * d, 8);
        a.strokeStyle = "rgba(255,255,255,1.0)";
        a.strokeRect(-d / 2, e, d, 8);
        a.restore();
      }
    };
    this.hit = function(a) {
      if (ia()) {
        this.highlightValue = a == Ra || this.type == cb ? this.highlightValue + 1 : this.highlightValue + 0.3;
        if (1 < this.highlightValue) {
          this.highlightValue = 1;
        }
      }
    };
    this.setPose = function(a, b, d) {
      this.origX = this.x;
      this.origY = this.y;
      this.origAngle = this.dstAngle;
      this.dstX = 10 * a;
      this.dstY = 10 * b;
      this.dstAngle = d;
      if (this.first_set) {
        this.origX = this.dstX;
        this.origY = this.dstY;
        this.x = this.dstX;
        this.y = this.dstY;
        this.origAngle = this.dstAngle;
        this.first_set = false;
      } else {
        a = this.dstX - this.origX;
        b = this.dstY - this.origY;
        this.speed = Math.sqrt(a * a + b * b) / 3;
      }
      if (!this.inGame) {
        this.inGame = true;
      }
    };
    this.setFloatValue = function(a) {
      this.origFloatValue = this.floatValue;
      this.dstFloatValue = 10 * a;
      if (this.first_set) {
        this.floatValue = this.dstFloatValue;
      }
    };
    this.setType = function(a) {
      this.type = a;
    };
    this.setState = function(a) {
      this.state = a;
    };
    this.setEnergy = function(a) {
      this.energy = a;
    };
    this.setFragment = function(b) {
      this.fragment = b;
      if (3 != b) {
        if (1 == b) {
          a$$0 = 0;
        }
      }
    };
    this.setCannonAngle = function(a) {
      this.origCannonAngle = this.cannonAngle;
      this.dstCannonAngle = a;
      if (this.first_set) {
        this.cannonAngle = this.dstCannonAngle;
      }
    };
    this.cannonShoot = function() {
      this.recoilTime = 200;
    };
    this.getSpeedDirectionX = function() {
      return this.x - this.prevX;
    };
    this.getSpeedDirectionY = function() {
      return this.y - this.prevY;
    };
    this.cleanup = function() {
      this.first_set = true;
      this.inGame = false;
    };
  };
  t.onload = function() {
    if (Modernizr.canvas) {
      if (Modernizr.websockets) {
        if (null == M) {
          if (t.devicePixelRatio) {
            jb = 1 < t.devicePixelRatio ? 2 : 1;
          }
          v = new Jc;
          M = new yd(y$$1.getElementById("canvas"));
          t.addEventListener("resize", M.resize, false);
          U = new Lc;
          U.addListeners();
          if (t.requestAnimationFrame) {
            t.requestAnimationFrame(Ob);
          } else {
            setInterval(Ob, 1E3 / 60);
          }
          q("#overlay").show();
        }
        M.resize();
        ac();
      }
    }
  };
})(window, document, jQuery);
console.log('AimBot Loaded');