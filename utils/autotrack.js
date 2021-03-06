var sa = {},
  _ = {};
sa.para = {
  name: "sensors",
  server_url: "https://mini.cnyings.com/mini/track/capture",
  max_string_length: 200,
  datasend_timeout: 25e3,
  autoTrack: {
    appLaunch: !0,
    appShow: !0,
    appHide: !0,
    pageShow: !0,
    pageHide: !0,
    mpClick: !0
  },
  show_log: 0,
  preset_properties: {},
  framework: {}
}, sa.setPara = function (e) {
  sa.para = _.extend2Lev(sa.para, e), _.isObject(sa.para.register) && _.extend(_.info.properties, sa.para.register), sa.para.name || (sa.para.name = "sensors");
  var t = sa.para.server_url;
  t ? (-1 !== t.indexOf("/sa.gif") && (sa.para.server_url = t.replace("/sa.gif", "/sa")), sa.para.preset_properties = _.isObject(sa.para.preset_properties) ? sa.para.preset_properties : {}) : console.log("\u8bf7\u4f7f\u7528 setPara() \u65b9\u6cd5\u8bbe\u7f6e server_url \u6570\u636e\u63a5\u6536\u5730\u5740,\u8be6\u60c5\u53ef\u67e5\u770bhttps://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0")
}, sa._queue = [], sa.getSystemInfoComplete = !1;
var ArrayProto = Array.prototype,
  FuncProto = Function.prototype,
  ObjProto = Object.prototype,
  slice = ArrayProto.slice,
  toString = ObjProto.toString,
  hasOwnProperty = ObjProto.hasOwnProperty,
  LIB_VERSION = "1.0.19",
  LIB_NAME = "AlipayMini",
  source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term",
  latest_source_channel = ["$latest_utm_source", "$latest_utm_medium", "$latest_utm_campaign", "$latest_utm_content", "$latest_utm_term", "$latest_sa_utm"],
  sa_referrer = "\u76f4\u63a5\u6253\u5f00";
sa.lib_version = LIB_VERSION;
var is_first_launch = !1,
  mpshow_time = null,
  viewshow_time=null,
  first_show_page = !1,
  logger = "object" == typeof logger ? logger : {};
logger.info = function () {
    if (sa.para.show_log && "object" == typeof console && console.log) try {
      return console.log.apply(console, arguments)
    } catch (e) {
      console.log(arguments[0])
    }
  },
  function () {
    FuncProto.bind;
    var e = ArrayProto.forEach,
      t = ArrayProto.indexOf,
      r = Array.isArray,
      a = {},
      n = _.each = function (t, r, n) {
        if (null == t) return !1;
        if (e && t.forEach === e) t.forEach(r, n);
        else if (t.length === +t.length) {
          for (var s = 0, i = t.length; s < i; s++)
            if (s in t && r.call(n, t[s], s, t) === a) return !1
        } else
          for (var o in t)
            if (hasOwnProperty.call(t, o) && r.call(n, t[o], o, t) === a) return !1
      };
    _.logger = logger, _.extend = function (e) {
      return n(slice.call(arguments, 1), function (t) {
        for (var r in t) void 0 !== t[r] && (e[r] = t[r])
      }), e
    }, _.extend2Lev = function (e) {
      return n(slice.call(arguments, 1), function (t) {
        for (var r in t) void 0 !== t[r] && null !== t[r] && (_.isObject(t[r]) && _.isObject(e[r]) ? _.extend(e[r], t[r]) : e[r] = t[r])
      }), e
    }, _.coverExtend = function (e) {
      return n(slice.call(arguments, 1), function (t) {
        for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
      }), e
    }, _.isArray = r || function (e) {
      return "[object Array]" === toString.call(e)
    }, _.isFunction = function (e) {
      try {
        return /^\s*\bfunction\b/.test(e)
      } catch (e) {
        return !1
      }
    }, _.isArguments = function (e) {
      return !(!e || !hasOwnProperty.call(e, "callee"))
    }, _.toArray = function (e) {
      return e ? e.toArray ? e.toArray() : _.isArray(e) ? slice.call(e) : _.isArguments(e) ? slice.call(e) : _.values(e) : []
    }, _.values = function (e) {
      var t = [];
      return null == e ? t : (n(e, function (e) {
        t[t.length] = e
      }), t)
    }, _.include = function (e, r) {
      var s = !1;
      return null == e ? s : t && e.indexOf === t ? -1 != e.indexOf(r) : (n(e, function (e) {
        if (s || (s = e === r)) return a
      }), s)
    }
  }(), _.trim = function (e) {
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  }, _.isObject = function (e) {
    return "[object Object]" == toString.call(e) && null != e
  }, _.isEmptyObject = function (e) {
    if (_.isObject(e)) {
      for (var t in e)
        if (hasOwnProperty.call(e, t)) return !1;
      return !0
    }
    return !1
  }, _.isUndefined = function (e) {
    return void 0 === e
  }, _.isString = function (e) {
    return "[object String]" == toString.call(e)
  }, _.isDate = function (e) {
    return "[object Date]" == toString.call(e)
  }, _.isBoolean = function (e) {
    return "[object Boolean]" == toString.call(e)
  }, _.isNumber = function (e) {
    return "[object Number]" == toString.call(e) && /[\d\.]+/.test(String(e))
  }, _.isJSONString = function (e) {
    try {
      JSON.parse(e)
    } catch (e) {
      return !1
    }
    return !0
  }, _.decodeURIComponent = function (e) {
    var t = "";
    try {
      t = decodeURIComponent(e)
    } catch (r) {
      t = e
    }
    return t
  }, _.encodeDates = function (e) {
    return _.each(e, function (t, r) {
      _.isDate(t) ? e[r] = _.formatDate(t) : _.isObject(t) && (e[r] = _.encodeDates(t))
    }), e
  }, _.formatDate = function (e) {
    function t(e) {
      return e < 10 ? "0" + e : e
    }
    return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
  }, _.searchObjDate = function (e) {
    _.isObject(e) && _.each(e, function (t, r) {
      _.isObject(t) ? _.searchObjDate(e[r]) : _.isDate(t) && (e[r] = _.formatDate(t))
    })
  }, _.formatString = function (e) {
    return e.length > sa.para.max_string_length ? (logger.info("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + e), e.slice(0, sa.para.max_string_length)) : e
  }, _.searchObjString = function (e) {
    _.isObject(e) && _.each(e, function (t, r) {
      _.isObject(t) ? _.searchObjString(e[r]) : _.isString(t) && (e[r] = _.formatString(t))
    })
  }, _.unique = function (e) {
    for (var t, r = [], a = {}, n = 0; n < e.length; n++)(t = e[n]) in a || (a[t] = !0, r.push(t));
    return r
  }, _.strip_sa_properties = function (e) {
    return _.isObject(e) ? (_.each(e, function (t, r) {
      if (_.isArray(t)) {
        var a = [];
        _.each(t, function (e) {
          _.isString(e) ? a.push(e) : logger.info("\u60a8\u7684\u6570\u636e-", t, "\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
        }), 0 !== a.length ? e[r] = a : (delete e[r], logger.info("\u5df2\u7ecf\u5220\u9664\u7a7a\u7684\u6570\u7ec4"))
      }
      _.isString(t) || _.isNumber(t) || _.isDate(t) || _.isBoolean(t) || _.isArray(t) || (logger.info("\u60a8\u7684\u6570\u636e-", t, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete e[r])
    }), e) : e
  }, _.strip_empty_properties = function (e) {
    var t = {};
    return _.each(e, function (e, r) {
      null != e && (t[r] = e)
    }), t
  }, _.utf8Encode = function (e) {
    var t, r, a, n, s = "";
    for (t = r = 0, a = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, n = 0; n < a; n++) {
      var i = e.charCodeAt(n),
        o = null;
      i < 128 ? r++ : o = i > 127 && i < 2048 ? String.fromCharCode(i >> 6 | 192, 63 & i | 128) : String.fromCharCode(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128), null !== o && (r > t && (s += e.substring(t, r)), s += o, t = r = n + 1)
    }
    return r > t && (s += e.substring(t, e.length)), s
  }, _.base64Encode = function (e) {
    var t, r, a, n, s, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      o = 0,
      c = 0,
      p = "",
      u = [];
    if (!e) return e;
    e = _.utf8Encode(e);
    do {
      t = (s = e.charCodeAt(o++) << 16 | e.charCodeAt(o++) << 8 | e.charCodeAt(o++)) >> 18 & 63, r = s >> 12 & 63, a = s >> 6 & 63, n = 63 & s, u[c++] = i.charAt(t) + i.charAt(r) + i.charAt(a) + i.charAt(n)
    } while (o < e.length);
    switch (p = u.join(""), e.length % 3) {
      case 1:
        p = p.slice(0, -2) + "==";
        break;
      case 2:
        p = p.slice(0, -1) + "="
    }
    return p
  }, _.info = {
    currentProps: {},
    properties: {
      $lib: LIB_NAME,
      $lib_version: String(LIB_VERSION)
    },
    getSystem: function () {
      var e = this.properties,
        t = !0;
      function r() {
        t && (t = !0, my.getSystemInfo({
          success: function (t) {
            var r, a;
            e.$model = t.model, e.$screen_width = Number(t.screenWidth), e.$screen_height = Number(t.screenHeight), e.$os = (r = t.platform, "ios" === (a = r.toLowerCase()) ? "iOS" : "android" === a ? "Android" : r), e.$os_version = t.system.indexOf(" ") > -1 ? t.system.split(" ")[1] : t.system, e.$manufacturer = t.brand
          },
          complete: function () {
            var t, r = (new Date).getTimezoneOffset();
            my.getAppIdSync && (t = my.getAppIdSync().appId), t && (e.$app_id = t), _.isNumber(r) && (e.$timezone_offset = r), sa.getSystemInfoComplete = !0, sa.checkIsComplete()
          }
        }))
      }
      my.getNetworkType({
        success: function (t) {
          e.$network_type = t.networkType, r()
        },
        complete: function () {
          r()
        }
      })
    },
    setStatusComplete: function () {
      if (sa.getSystemInfoComplete) return !1;
      sa.getSystemInfoComplete = !0, sa._queue.length > 0 && (_.each(sa._queue, function (e) {
        sa.prepareData.apply(sa, slice.call(e))
      }), sa._queue = [])
    }
  }, sa._ = _, sa.prepareData = function (e, t) {
    if (!sa.isComplete) return sa._queue.push(arguments), !1;
    var r = {
      distinct_id: this.store.getDistinctId(),
      lib: {
        $lib: LIB_NAME,
        $lib_method: "code",
        $lib_version: String(LIB_VERSION)
      },
      properties: {}
    };
    _.extend(r, e), _.isObject(e.properties) && !_.isEmptyObject(e.properties) && _.extend(r.properties, e.properties), e.type && "profile" === e.type.slice(0, 7) || (r.properties = _.extend({}, _.info.properties, sa.store.getProps(), _.info.currentProps, r.properties), "object" == typeof sa.store._state && "number" == typeof sa.store._state.first_visit_day_time && sa.store._state.first_visit_day_time > (new Date).getTime() ? r.properties.$is_first_day = !0 : r.properties.$is_first_day = !1), r.properties.$time && _.isDate(r.properties.$time) ? (r.time = 1 * r.properties.$time, delete r.properties.$time) : r.time = 1 * new Date, _.searchObjDate(r), _.searchObjString(r), sa.send(r, t)
  }, sa.checkIsComplete = function () {
    this.isComplete = !1, this.getSystemInfoComplete && this.hasInit && (this.isComplete = !0, sa._queue.length > 0 && (_.each(sa._queue, function (e) {
      sa.prepareData.apply(sa, slice.call(e))
    }), sa._queue = []))
  }, sa.store = {
    getUUID: function () {
      return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8)
    },
    // ????????????id
    getUserId: function () {
      const authData = my.getStorageSync({
        key: 'AUTH_TOKEN_DATA'
      }).data || {}
      return authData ? authData.alipayUserId : this.store.getDistinctId()
    },
    setStorage: function () {},
    getStorage: function () {
      return my.getStorageSync({
        key: "sensorsdata2015_zfb"
      }) || {}
    },
    _state: {},
    toState: function (e) {
      "object" == typeof e && e.distinct_id ? this._state = e : this.set("distinct_id", this.getUUID())
    },
    getFirstId: function () {
      return this._state.first_id
    },
    getDistinctId: function () {
      return this._state.distinct_id
    },
    getProps: function () {
      return this._state.props || {}
    },
    setProps: function (e, t) {
      var r = this._state.props || {};
      t ? this.set("props", e) : (_.extend(r, e), this.set("props", r))
    },
    set: function (e, t) {
      var r = {};
      for (var a in "string" == typeof e ? r[e] = t : "object" == typeof e && (r = e), this._state = this._state || {}, r) this._state[a] = r[a];
      this.save()
    },
    change: function (e, t) {
      this._state[e] = t
    },
    save: function () {
      my.setStorageSync({
        key: "sensorsdata2015_zfb",
        data: this._state
      })
    },
    init: function () {
      var e = this.getStorage().data;
      if (e) this.toState(e);
      else {
        is_first_launch = !0;
        var t = new Date,
          r = t.getTime();
        t.setHours(23), t.setMinutes(59), t.setSeconds(60), sa.setOnceProfile({
          $first_visit_time: new Date
        }), this.set({
          distinct_id: this.getUUID(),
          first_visit_time: r,
          first_visit_day_time: t.getTime()
        })
      }
    }
  }, sa.setProfile = function (e, t) {
    sa.prepareData({
      type: "profile_set",
      user_id: sa.store.getUserId(),
      properties: e
    }, t)
  }, sa.setOnceProfile = function (e, t) {
    sa.prepareData({
      type: "profile_set_once",
      user_id: sa.store.getUserId(),
      properties: e
    }, t)
  }, sa.track = function (e, t, r) {
   t.analysis?t.analysis.channel= sa.store.channel?sa.store.channel:'':{}
    t.$url_path =_.getCurrentPath() || ''
    this.prepareData({
      type: "track",
      event: e,
      user_id: sa.store.getUserId(),
      properties: Object.assign({},t)
    }, r)
  }, sa.identify = function (e, t) {
    if ("number" == typeof e) e = String(e);
    else if ("string" != typeof e) return !1;
    var r = sa.store.getFirstId();
    !0 === t ? r ? sa.store.set("first_id", e) : sa.store.set("distinct_id", e) : r ? sa.store.change("first_id", e) : sa.store.change("distinct_id", e)
  }, sa.trackSignup = function (e, t, r, a) {
    var n = sa.store.getFirstId() || sa.store.getDistinctId();
    sa.store.set("distinct_id", e), sa.prepareData({
      original_id: n,
      distinct_id: e,
      type: "track_signup",
      event: t,
      properties: r
    }, a)
  }, sa.registerApp = function (e) {
    _.isObject(e) && !_.isEmptyObject(e) && (_.info.currentProps = _.extend(_.info.currentProps, e))
  }, sa.clearAppRegister = function (e) {
    _.isArray(e) && _.each(_.info.currentProps, function (t, r) {
      _.include(e, r) && delete _.info.currentProps[r]
    })
  }, sa.clearAllRegister = function () {
    sa.store.setProps({}, !0)
  }, sa.login = function (e) {
    var t = sa.store.getFirstId(),
      r = sa.store.getDistinctId();
    e !== r && (t ? sa.trackSignup(e, "$SignUp") : (sa.store.set("first_id", r), sa.trackSignup(e, "$SignUp")))
  }, sa.logout = function (e) {
    var t = sa.store.getFirstId();
    t ? (sa.store.set("first_id", ""), !0 === e ? sa.store.set("distinct_id", sa.store.getUUID()) : sa.store.set("distinct_id", t)) : logger.info("\u6ca1\u6709first_id\uff0clogout\u5931\u8d25")
  }, sa.getAnonymousID = function () {
    if (!_.isEmptyObject(sa.store._state)) return sa.store._state.first_id || sa.store._state.distinct_id;
    logger.info("\u8bf7\u5148\u521d\u59cb\u5316SDK")
  }, sa.getLocation = function () {
    my.getSetting({
      success: function (e) {
        if (!e.authSetting.location) return !1;
        my.getLocation({
          success: function (e) {
            sa.registerApp({
              $latitude: e.latitude * Math.pow(10, 6),
              $longitude: e.longitude * Math.pow(10, 6)
            })
          },
          fail: function (e) {
            console.log("\u83b7\u53d6\u4f4d\u7f6e\u5931\u8d25\uff1a", e)
          }
        })
      }
    })
  }, sa.initial = function () {
    this._.info.getSystem(), this.store.init(), _.isObject(this.para.register) && (_.info.properties = _.extend(_.info.properties, this.para.register))
  }, sa.init = function () {
    if (!0 === this.hasInit) return !1;
    this.hasInit = !0, sa.checkIsComplete()
  }, sa.send = function (e) {
    try {
      var t = "";
      e._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15), logger.info(e),
        t = sa.para.server_url
      const data = e;
      ! function () {
        if (my.canIUse("request")) var e = my.request({
            url: t,
            dataType: "json",
            method: "POST",
            data: data,
            headers: {
              'content-type': 'application/json'
            },
            complete: function () {
              r && clearTimeout(r)
            }
          }),
          r = setTimeout(function () {
            _.isObject(e) && _.isFunction(e.abort) && e.abort()
          }, sa.para.datasend_timeout);
        else var a = my.httpRequest({
            url: t,
            dataType: "json",
            method: "POST",
            data: data,
            complete: function () {
              r && clearTimeout(n)
            }
          }),
          n = setTimeout(function () {
            _.isObject(a) && _.isFunction(a.abort) && a.abort()
          }, sa.para.datasend_timeout)
      }()

    } catch (error) {
      console.log('request', error)
    }
  }, _.getPath = function (e) {
    return e = "string" == typeof e ? e.replace(/^\//, "") : "\u53d6\u503c\u5f02\u5e38"
  }, _.getQueryParam = function (e, t) {
    var r = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
    return null === r || r && "string" != typeof r[1] && r[1].length ? "" : _.decodeURIComponent(r[1])
  }, _.getMPScene = function (e) {
    return "number" == typeof e || "string" == typeof e && "" !== e ? e = "ali-" + String(e) : "\u672a\u53d6\u5230\u503c"
  }, _.getQuery = function (e) {
    var t = {};
    if (e && _.isObject(e.query) && (t = _.extend({}, e.query), e.query.qrCode && _.extend(t, _.getObjFromQuery(_.decodeURIComponent(e.query.qrCode)))), e && _.isObject(e.referrerInfo) && e.referrerInfo.extraData) {
      var r = {};
      _.isObject(e.referrerInfo.extraData) && !_.isEmptyObject(e.referrerInfo.extraData) ? r = e.referrerInfo.extraData : _.isJSONString(e.referrerInfo.extraData) && (r = JSON.parse(e.referrerInfo.extraData)), _.extend(t, r)
    }
    return t
  }, _.setUtm = function (e, t) {
    var r = _.getQuery(e),
      a = {},
      n = _.getCustomUtmFromQuery(r, "$", "_", "$"),
      s = _.getCustomUtmFromQuery(r, "$latest_", "_latest_", "$latest_");
    return a.pre1 = n, a.pre2 = s, _.extend(t, a.pre1), a
  }, _.getObjFromQuery = function (e) {
    var t = e.split("?"),
      r = {};
    return t && t[1] ? (_.each(t[1].split("&"), function (e) {
      var t = e.split("=");
      t[0] && t[1] && (r[t[0]] = t[1])
    }), r) : {}
  }, _.getCustomUtmFromQuery = function (e, t, r, a) {
    if (!_.isObject(e)) return {};
    var n = {};
    if (e.sa_utm)
      for (var s in e) "sa_utm" !== s ? _.include(sa.para.source_channel, s) && (n[r + s] = e[s]) : n[a + s] = e[s];
    else
      for (var s in e) - 1 === (" " + source_channel_standard + " ").indexOf(" " + s + " ") ? _.include(sa.para.source_channel, s) && (n[r + s] = e[s]) : n[t + s] = e[s];
    return n
  }, _.existLatestUtm = function () {
    var e = !1;
    return _.each(latest_source_channel, function (t, r) {
      _.info.currentProps[t] && (e = !0)
    }), e
  }, _.setQuery = function (e) {
    if (e && _.isObject(e) && !_.isEmptyObject(e)) {
      var t = [];
      return _.each(e, function (e, r) {
        "q" === r && _.isString(e) && 0 === e.indexOf("http") || "scene" === r || t.push(r + "=" + e)
      }), t.join("&")
    }
    return ""
  }, _.setLatestChannel = function (e) {
    _.isEmptyObject(e) || (function (e, t) {
      var r = !1;
      for (var a in t) e[t[a]] && (r = !0);
      return r
    }(e, latest_source_channel) && sa.clearAppRegister(latest_source_channel), sa.registerApp(e))
  }, _.getCurrentPath = function () {
    var e = "\u672a\u53d6\u5230";
    try {
      var t = getCurrentPages();
      e = t[t.length - 1].route
    } catch (e) {
      logger.info(e)
    }
    return e
  }, sa.appLaunch = function (e, t) {
    t && _.isObject(t) || (t = {});
    var r = {};
    e && e.path && (r.$url_path = _.getPath(e.path));
    var a = _.setUtm(e, r);
    is_first_launch ? (r.$is_first_time = !0, _.isEmptyObject(a.pre1) || sa.setOnceProfile(a.pre1)) : r.$is_first_time = !1, _.isEmptyObject(a.pre2) || _.setLatestChannel(a.pre2);
    var n = _.getMPScene(e.scene);
    n && (r.$scene = n, sa.registerApp({
      $latest_scene: r.$scene
    })), _.extend(r, t), sa.para.autoTrack && sa.para.autoTrack.appLaunch && sa.track("$MPLaunch", r)
  }, sa.appShow = function (e, t) {
    t && _.isObject(t) || (t = {});
    var r = {};
    mpshow_time = (new Date).getTime(), first_show_page = !0, e && e.path && (r.$url_path = _.getPath(e.path));
    var a = _.setUtm(e, r);
    _.isEmptyObject(a.pre2) || _.setLatestChannel(a.pre2), !0 === sa.para.preset_properties.location && sa.getLocation();
    var n = _.getMPScene(e.scene);
    n && (r.$scene = n, sa.registerApp({
      $latest_scene: r.$scene
    })), _.extend(r, t), sa.para.autoTrack && sa.para.autoTrack.appShow && sa.track("$MPShow", r)
  }, sa.appHide = function (e) {
    e && _.isObject(e) || (e = {});
    var t = (new Date).getTime(),
      r = {};
    r.$url_path = _.getCurrentPath(), mpshow_time && t - mpshow_time > 0 && (t - mpshow_time) / 36e5 < 24 && (r.event_duration = (t - mpshow_time) / 1e3), _.extend(r, e), sa.para.autoTrack && sa.para.autoTrack.appHide && sa.track("$MPHide", r)
    var a = getCurrentPages(),
      n = a[a.length - 1];
    try {
      _.isObject(n) ? (r.$url_query = n.sensors_mp_url_query ? n.sensors_mp_url_query : "", first_show_page && (first_show_page = !1, !_.existLatestUtm() && n.utm && _.isObject(n.utm.pre2) && sa.registerApp(n.utm.pre2)), n.utm && _.isObject(n.utm.pre1) && _.extend(t, n.utm.pre1)) : r.$url_query = ""
    } catch (e) {
      logger.info(e)
    }
  }, sa.pageShow = function (e) {
    var t = {},
      r = _.getCurrentPath();
    t.$url_path = r;
    var a = getCurrentPages(),
      n = a[a.length - 1];
    viewshow_time = (new Date).getTime()
    try {
      _.isObject(n) ? (t.$url_query = n.sensors_mp_url_query ? n.sensors_mp_url_query : "", first_show_page && (first_show_page = !1, !_.existLatestUtm() && n.utm && _.isObject(n.utm.pre2) && sa.registerApp(n.utm.pre2)), n.utm && _.isObject(n.utm.pre1) && _.extend(t, n.utm.pre1)) : t.$url_query = ""
    } catch (e) {
      logger.info(e)
    }
    _.extend(t, e), sa.para.autoTrack && sa.para.autoTrack.pageShow && sa.track("$MPViewScreen", t)
  },
  sa.pageHide = function (e) {
    var t = {},
      r = _.getCurrentPath();
    t.$url_path = r;
    var a = getCurrentPages(),
      n = a[a.length - 1];
      var date = (new Date).getTime();
      t.event_duration = (date - viewshow_time) / 1e3;
    try {
      _.isObject(n) ? (t.$url_query = n.sensors_mp_url_query ? n.sensors_mp_url_query : "", first_show_page && (first_show_page = !1, !_.existLatestUtm() && n.utm && _.isObject(n.utm.pre2) && sa.registerApp(n.utm.pre2)), n.utm && _.isObject(n.utm.pre1) && _.extend(t, n.utm.pre1)) : t.$url_query = ""
    } catch (e) {
      logger.info(e)
    }
    _.extend(t, e), sa.para.autoTrack && sa.para.autoTrack.pageHide && sa.track("$MPViewHide", t)
  },
  sa.pageLoad = function (e, t) {
    if (t && _.isObject(t) && _.isObject(e)) try {
      e.sensors_mp_url_query = _.setQuery(t);
      let { channel } = t
      if(channel){
        sa.store.channel=channel
      }
      var r = {};
      r.pre1 = _.getCustomUtmFromQuery(t, "$", "_", "$"), r.pre2 = _.getCustomUtmFromQuery(t, "$latest_", "_latest_", "$latest_"), e.utm = r
    } catch (e) {
      logger.info(e)
    }
  },
  sa.quick = function () {
    var e = arguments[0],
      t = arguments[1],
      r = arguments[2],
      a = _.isObject(r) ? r : {};
    "appLaunch" === e || "appShow" === e ? t ? sa[e](t, a) : logger.info("App\u7684launch\u548cshow\uff0c\u5728sensors.quick\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5fc5\u987b\u4f20\u5165App\u7684options\u53c2\u6570") : "appHide" === e && (a = _.isObject(t) ? t : {}, sa[e](a))
  }, Object.defineProperty($global, "saAlipay", {
    enumerable: !1,
    configurable: !1,
    value: {}
  });
var mpHooks = {
  onLoad: 1,
  onShow: 1,
  onHide: 1,
  onReady: 1,
  onUnload: 1,
  onTitleClick: 1,
  onPullDownRefresh: 1,
  onReachBottom: 1,
  onPageScroll: 1,
  onResize: 1,
  onTabItemTap: 1,
  onOptionMenuClick: 1,
  onPopMenuClick: 1,
  onPullIntercept: 1,
  onAddToFavorites: 1,
  onShareAppMessage: 1,
  onShareTimeline: 1,
  eventHandler: 1,
  data: 1
};

function click_proxy(e, t) {
  var r = e[t];
  e[t] = function () {
    var e = r.apply(this, arguments),
      t = {},
      a = "",
      n = arguments[0] && arguments[0].currentTarget || {},
      b = arguments[0] && arguments[0].buttonTarget || {},
      d = arguments[0] && arguments[0].detail || {},
      s = arguments[0] && arguments[0].target || {},
      isAuto = true
    if (_.isObject(sa.para.framework) && _.isObject(sa.para.framework.taro) && !sa.para.framework.taro.createApp && s.id && n.id && s.id !== n.id) return e;
    if (_.isObject(arguments[0])) {
      var i = n.dataset || {};
      var btn = b.dataset || {};
      a = arguments[0].type,
        t.$url_path = _.getCurrentPath(),
        t.$element_id = n.id,
        t.$element_content = i.content,
        t.$element_name = i.name
        t.analysis = Object.assign({},
        i.saParam || {},
        btn.saParam || {},
       { 
        title: i.title || btn.title,
        name: i.name || btn.name,
        vaule: i.value || btn.value,
        courseId:i.courseId || btn.courseId,
        type: n.tagName,
        formId: d.formId
        }
        )
      var pages = getCurrentPages(),
        n = pages[pages.length - 1];
      try {
        _.isObject(n) ? (t.$url_query = n.sensors_mp_url_query ? n.sensors_mp_url_query : "", first_show_page && (first_show_page = !1, !_.existLatestUtm() && n.utm && _.isObject(n.utm.pre2) && sa.registerApp(n.utm.pre2)), n.utm && _.isObject(n.utm.pre1) && _.extend(t, n.utm.pre1)) : t.$url_query = ""
      } catch (e) {
        logger.info(e)
      }
      isAuto = sa.para.isAuto ? false : (i.saClose ? !i.saClose : !btn.saClose)
    }
    return a && _.isClick(a) && isAuto && sa.track("$MPClick", t), e
  }
}
_.getMethods = function (e) {
  var t = [];
  for (var r in e) "function" != typeof e[r] || mpHooks[r] || t.push(r);
  return t
}, _.isClick = function (e) {
  return !!{
    tap: 1,
    blur: 1,
    submit: 1,
    longTap: 1
  } [e]
}, $global.saAlipay.App = function (e) {
  var t = e.onShow,
    r = e.onLaunch,
    a = e.onHide;
  return e.onShow = function () {
    t && t.apply(this, arguments), sa.appShow(arguments[0])
  }, e.onLaunch = function () {
    this[sa.para.name] = sa, r && r.apply(this, arguments), sa.appLaunch(arguments[0])
  }, e.onHide = function () {
    a && a.apply(this, arguments), sa.appHide(arguments[0])
  }, $global.saAlipay.useApp = !0, App(e)
}, $global.saAlipay.Page = function (e) {
  var t = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(e);
  if (t)
    for (var r = 0, a = t.length; r < a; r++) click_proxy(e, t[r]);
  var n = e.onShow,
    s = e.onLoad;
  return e.onShow = function () {
    n && n.apply(this, arguments), sa.pageShow()
  }, e.onLoad = function () {
    s && s.apply(this, arguments), sa.pageLoad(this, arguments[0])
  }, $global.saAlipay.usePage = !0, Page(e)
};
var oldApp = App;
App = function (e) {
  if (oldApp.apply(this, arguments), $global.saAlipay.useApp) return !1;
  var t = e.onShow,
    r = e.onLaunch,
    a = e.onHide;
  e.onLaunch = function () {
    this[sa.para.name] = sa, r && r.apply(this, arguments), sa.appLaunch(arguments[0])
  }, e.onShow = function () {
    t && t.apply(this, arguments), sa.appShow(arguments[0])
  }, e.onHide = function () {
    a && a.apply(this, arguments), sa.appHide(arguments[0])
  }
};
var oldPage = Page;
Page = function (e) {
  if (oldPage.apply(this, arguments), $global.saAlipay.usePage) return !1;
  var t = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(e);
  if (t)
    for (var r = 0, a = t.length; r < a; r++) click_proxy(e, t[r]);
  var n = e.onShow,
    s = e.onLoad,
    h = e.onHide;
  e.onShow = function () {
      n && n.apply(this, arguments), sa.pageShow()
    },
    e.onLoad = function (e) {
      s && s.apply(this, arguments),
        sa.pageLoad(this, arguments[0])
    }
  e.onHide = function () {
    h && h.apply(this, arguments), sa.pageHide()
  }
};
var oldComponent = Component;
Component = function (t) {
  try {
    var e = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(t.methods);
    if (e)
      for (var a = 0, r = e.length; a < r; a++) click_proxy(t.methods, e[a]);
    mp_proxy(t.methods, "onLoad", "pageLoad"), mp_proxy(t.methods, "onShow", "pageShow"), "function" == typeof t.methods.onShareAppMessage && sa.autoTrackCustom.pageShare(t.methods), oldComponent.apply(this, arguments)
  } catch (t) {
    oldComponent.apply(this, arguments)
  }
}, sa.initial();
export default sa;