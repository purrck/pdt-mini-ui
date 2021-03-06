var sa = {},
  _ = {};
sa.para = {
  name: "sensors",
  server_url: "https://mini.cnyings.com/mini/track/captures",
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
  framework: {},
  batch_send: !0
}, sa.setPara = function (t) {
  sa.para = _.extend2Lev(sa.para, t), _.isObject(sa.para.register) && _.extend(_.info.properties, sa.para.register), sa.para.name || (sa.para.name = "sensors");
  var e = sa.para.server_url;
  if (e) {
    -1 !== e.indexOf("/sa.gif") && (sa.para.server_url = e.replace("/sa.gif", "/sa")), sa.para.preset_properties = _.isObject(sa.para.preset_properties) ? sa.para.preset_properties : {};
    var a = {
      send_timeout: 6e3,
      max_length: 6
    };
    t && t.datasend_timeout || sa.para.batch_send && (sa.para.datasend_timeout = 1e4), !0 === sa.para.batch_send ? sa.para.batch_send = _.extend({}, a) : _.isObject(sa.para.batch_send) ? sa.para.batch_send = _.extend({}, a, sa.para.batch_send) : sa.para.batch_send = !1
  } else console.log("\u8bf7\u4f7f\u7528 setPara() \u65b9\u6cd5\u8bbe\u7f6e server_url \u6570\u636e\u63a5\u6536\u5730\u5740,\u8be6\u60c5\u53ef\u67e5\u770bhttps://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0")
}, sa._queue = [], sa.getSystemInfoComplete = !1;
var ArrayProto = Array.prototype,
  FuncProto = Function.prototype, 
  ObjProto = Object.prototype,
  slice = ArrayProto.slice,
  toString = ObjProto.toString,
  hasOwnProperty = ObjProto.hasOwnProperty,
  LIB_VERSION = "1.1.3",
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
    } catch (t) {
      console.log(arguments[0])
    }
  },
  function () {
    FuncProto.bind;
    var t = ArrayProto.forEach,
      e = ArrayProto.indexOf,
      a = Array.isArray,
      r = {},
      n = _.each = function (e, a, n) {
        if (null == e) return !1;
        if (t && e.forEach === t) e.forEach(a, n);
        else if (e.length === +e.length) {
          for (var s = 0, i = e.length; s < i; s++)
            if (s in e && a.call(n, e[s], s, e) === r) return !1
        } else
          for (var o in e)
            if (hasOwnProperty.call(e, o) && a.call(n, e[o], o, e) === r) return !1
      };
    _.logger = logger, _.extend = function (t) {
      return n(slice.call(arguments, 1), function (e) {
        for (var a in e) void 0 !== e[a] && (t[a] = e[a])
      }), t
    }, _.extend2Lev = function (t) {
      return n(slice.call(arguments, 1), function (e) {
        for (var a in e) void 0 !== e[a] && null !== e[a] && (_.isObject(e[a]) && _.isObject(t[a]) ? _.extend(t[a], e[a]) : t[a] = e[a])
      }), t
    }, _.coverExtend = function (t) {
      return n(slice.call(arguments, 1), function (e) {
        for (var a in e) void 0 !== e[a] && void 0 === t[a] && (t[a] = e[a])
      }), t
    }, _.isArray = a || function (t) {
      return "[object Array]" === toString.call(t)
    }, _.isFunction = function (t) {
      try {
        return /^\s*\bfunction\b/.test(t)
      } catch (t) {
        return !1
      }
    }, _.isArguments = function (t) {
      return !(!t || !hasOwnProperty.call(t, "callee"))
    }, _.toArray = function (t) {
      return t ? t.toArray ? t.toArray() : _.isArray(t) ? slice.call(t) : _.isArguments(t) ? slice.call(t) : _.values(t) : []
    }, _.values = function (t) {
      var e = [];
      return null == t ? e : (n(t, function (t) {
        e[e.length] = t
      }), e)
    }, _.include = function (t, a) {
      var s = !1;
      return null == t ? s : e && t.indexOf === e ? -1 != t.indexOf(a) : (n(t, function (t) {
        if (s || (s = t === a)) return r
      }), s)
    }
  }(), _.trim = function (t) {
    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  }, _.isObject = function (t) {
    return "[object Object]" == toString.call(t) && null != t
  }, _.isEmptyObject = function (t) {
    if (_.isObject(t)) {
      for (var e in t)
        if (hasOwnProperty.call(t, e)) return !1;
      return !0
    }
    return !1
  }, _.isUndefined = function (t) {
    return void 0 === t
  }, _.isString = function (t) {
    return "[object String]" == toString.call(t)
  }, _.isDate = function (t) {
    return "[object Date]" == toString.call(t)
  }, _.isBoolean = function (t) {
    return "[object Boolean]" == toString.call(t)
  }, _.isNumber = function (t) {
    return "[object Number]" == toString.call(t) && /[\d\.]+/.test(String(t))
  }, _.isJSONString = function (t) {
    try {
      JSON.parse(t)
    } catch (t) {
      return !1
    }
    return !0
  }, _.decodeURIComponent = function (t) {
    var e = "";
    try {
      e = decodeURIComponent(t)
    } catch (a) {
      e = t
    }
    return e
  }, _.encodeDates = function (t) {
    return _.each(t, function (e, a) {
      _.isDate(e) ? t[a] = _.formatDate(e) : _.isObject(e) && (t[a] = _.encodeDates(e))
    }), t
  }, _.formatDate = function (t) {
    function e(t) {
      return t < 10 ? "0" + t : t
    }
    return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + "." + e(t.getMilliseconds())
  }, _.searchObjDate = function (t) {
    _.isObject(t) && _.each(t, function (e, a) {
      _.isObject(e) ? _.searchObjDate(t[a]) : _.isDate(e) && (t[a] = _.formatDate(e))
    })
  }, _.formatString = function (t) {
    return t.length > sa.para.max_string_length ? (logger.info("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + t), t.slice(0, sa.para.max_string_length)) : t
  }, _.searchObjString = function (t) {
    _.isObject(t) && _.each(t, function (e, a) {
      _.isObject(e) ? _.searchObjString(t[a]) : _.isString(e) && (t[a] = _.formatString(e))
    })
  }, _.parseSuperProperties = function (t) {
    _.isObject(t) && (_.each(t, function (e, a) {
      if (_.isFunction(e)) try {
        t[a] = e(), _.isFunction(t[a]) && (logger.info("\u60a8\u7684\u5c5e\u6027- " + a + " \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete t[a])
      } catch (e) {
        delete t[a], logger.info("\u60a8\u7684\u5c5e\u6027- " + a + " \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
      }
    }), _.strip_sa_properties(t))
  }, _.unique = function (t) {
    for (var e, a = [], r = {}, n = 0; n < t.length; n++)(e = t[n]) in r || (r[e] = !0, a.push(e));
    return a
  }, _.strip_sa_properties = function (t) {
    return _.isObject(t) ? (_.each(t, function (e, a) {
      if (_.isArray(e)) {
        var r = [];
        _.each(e, function (t) {
          _.isString(t) ? r.push(t) : logger.info("\u60a8\u7684\u6570\u636e-", e, "\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
        }), 0 !== r.length ? t[a] = r : (delete t[a], logger.info("\u5df2\u7ecf\u5220\u9664\u7a7a\u7684\u6570\u7ec4"))
      }
      _.isString(e) || _.isNumber(e) || _.isDate(e) || _.isBoolean(e) || _.isArray(e) || (logger.info("\u60a8\u7684\u6570\u636e-", e, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"), delete t[a])
    }), t) : t
  }, _.strip_empty_properties = function (t) {
    var e = {};
    return _.each(t, function (t, a) {
      null != t && (e[a] = t)
    }), e
  }, _.utf8Encode = function (t) {
    var e, a, r, n, s = "";
    for (e = a = 0, r = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, n = 0; n < r; n++) {
      var i = t.charCodeAt(n),
        o = null;
      i < 128 ? a++ : o = i > 127 && i < 2048 ? String.fromCharCode(i >> 6 | 192, 63 & i | 128) : String.fromCharCode(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128), null !== o && (a > e && (s += t.substring(e, a)), s += o, e = a = n + 1)
    }
    return a > e && (s += t.substring(e, t.length)), s
  }, _.base64Encode = function (t) {
    var e, a, r, n, s, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      o = 0,
      c = 0,
      p = "",
      u = [];
    if (!t) return t;
    t = _.utf8Encode(t);
    do {
      e = (s = t.charCodeAt(o++) << 16 | t.charCodeAt(o++) << 8 | t.charCodeAt(o++)) >> 18 & 63, a = s >> 12 & 63, r = s >> 6 & 63, n = 63 & s, u[c++] = i.charAt(e) + i.charAt(a) + i.charAt(r) + i.charAt(n)
    } while (o < t.length);
    switch (p = u.join(""), t.length % 3) {
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
      var t = this.properties,
        e = !0;
      function a() {
        e && (e = !0, my.getSystemInfo({
          success: function (e) {
            var a, r;
            t.$model = e.model, t.$screen_width = Number(e.screenWidth), t.$screen_height = Number(e.screenHeight), t.$os = (a = e.platform, "ios" === (r = a.toLowerCase()) ? "iOS" : "android" === r ? "Android" : a), t.$os_version = e.system.indexOf(" ") > -1 ? e.system.split(" ")[1] : e.system, t.$manufacturer = e.brand
          },
          complete: function () {
            var e, a = (new Date).getTimezoneOffset();
            my.getAppIdSync && (e = my.getAppIdSync().appId), e && (t.$app_id = e), _.isNumber(a) && (t.$timezone_offset = a), sa.getSystemInfoComplete = !0, sa.checkIsComplete()
          }
        }))
      }
      my.getNetworkType({
        success: function (e) {
          t.$network_type = e.networkType, a()
        },
        complete: function () {
          a()
        }
      })
    },
    setStatusComplete: function () {
      if (sa.getSystemInfoComplete) return !1;
      sa.getSystemInfoComplete = !0, sa._queue.length > 0 && (_.each(sa._queue, function (t) {
        sa.prepareData.apply(sa, slice.call(t))
      }), sa._queue = [])
    }
  }, sa._ = _, sa.prepareData = function (t, e) {
    if (!sa.isComplete) return sa._queue.push(arguments), !1;
    var a = {
      distinct_id: this.store.getDistinctId(),
      lib: {
        $lib: LIB_NAME,
        $lib_method: "code",
        $lib_version: String(LIB_VERSION)
      },
      properties:{}
    };
    _.extend(a, t), _.isObject(t.properties) && !_.isEmptyObject(t.properties) && _.extend(a.properties, t.properties), 
    t.type && "profile" === t.type.slice(0, 7) || (a._track_id = Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String(Date.now()).slice(-4)),
    a.properties = _.extend({}, _.info.properties, sa.store.getProps(), _.info.currentProps, a.properties), 
   "object" == typeof sa.store._state && "number" == typeof sa.store._state.first_visit_day_time && sa.store._state.first_visit_day_time > (new Date).getTime() ? a.properties.$is_first_day = !0 : a.properties.$is_first_day = !1),
    a.properties.$time && _.isDate(a.properties.$time) ? (a.time = 1 * a.properties.$time, delete a.properties.$time) : a.time = 1 * new Date, _.parseSuperProperties(a.properties), 
    a.properties = Object.assign(a.properties || {},t.properties || {})
    _.searchObjDate(a),
     _.searchObjString(a), 
    sa.para.batch_send ? sa.sendStrategy.send(a) : sa.send(a)
  },
   sa.checkIsComplete = function () {
    this.isComplete = !1, this.getSystemInfoComplete && this.hasInit && (this.isComplete = !0, sa._queue.length > 0 && (_.each(sa._queue, function (t) {
      sa.prepareData.apply(sa, slice.call(t))
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
    mem: {
      mdata: [],
      getLength: function () {
        return this.mdata.length
      },
      add: function (t) {
        this.mdata.push(t)
      },
      clear: function (t) {
        this.mdata.splice(0, t)
      }
    },
    toState: function (t) {
      "object" == typeof t && t.distinct_id ? this._state = t : this.set("distinct_id", this.getUUID())
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
    setProps: function (t, e) {
      var a = this._state.props || {};
      e ? this.set("props", t) : (_.extend(a, t), this.set("props", a))
    },
    set: function (t, e) {
      var a = {};
      for (var r in "string" == typeof t ? a[t] = e : "object" == typeof t && (a = t), this._state = this._state || {}, a) this._state[r] = a[r];
      this.save()
    },
    change: function (t, e) {
      this._state[t] = e
    },
    save: function () {
      my.setStorageSync({
        key: "sensorsdata2015_zfb",
        data: this._state
      })
    },
    init: function () {
      var t = this.getStorage().data;
      if (t) this.toState(t);
      else {
        is_first_launch = !0;
        var e = new Date,
          a = e.getTime();
        e.setHours(23), e.setMinutes(59), e.setSeconds(60), sa.setOnceProfile({
          $first_visit_time: new Date
        }), this.set({
          distinct_id: this.getUUID(),
          first_visit_time: a,
          first_visit_day_time: e.getTime()
        })
      }
    }
  }, sa.setProfile = function (t, e) {
    sa.prepareData({
      type: "profile_set",
        user_id: sa.store.getUserId(),
        properties: t
    }, e)
  }, sa.setOnceProfile = function (t, e) {
    sa.prepareData({
      type: "profile_set_once",
      properties: t
    }, e)
  }, sa.track = function (t, e, a) {
    e.analysis?e.analysis.channel= sa.store.channel?sa.store.channel:'':{}
    e.$url_path =_.getCurrentPath() || ''
    this.prepareData({
      type: "track",
      user_id: sa.store.getUserId(),
      event: t,
      properties: e
    }, a)
  }, sa.identify = function (t, e) {
    if ("number" == typeof t) t = String(t);
    else if ("string" != typeof t) return !1;
    var a = sa.store.getFirstId();
    !0 === e ? a ? sa.store.set("first_id", t) : sa.store.set("distinct_id", t) : a ? sa.store.change("first_id", t) : sa.store.change("distinct_id", t)
  }, sa.trackSignup = function (t, e, a, r) {
    var n = sa.store.getFirstId() || sa.store.getDistinctId();
    sa.store.set("distinct_id", t), sa.prepareData({
      original_id: n,
      distinct_id: t,
      type: "track_signup",
      event: e,
      properties: a
    }, r)
  }, sa.registerApp = function (t) {
    _.isObject(t) && !_.isEmptyObject(t) && (_.info.currentProps = _.extend(_.info.currentProps, t))
  }, sa.clearAppRegister = function (t) {
    _.isArray(t) && _.each(_.info.currentProps, function (e, a) {
      _.include(t, a) && delete _.info.currentProps[a]
    })
  }, sa.clearAllRegister = function () {
    sa.store.setProps({}, !0)
  }, sa.login = function (t) {
    var e = sa.store.getFirstId(),
      a = sa.store.getDistinctId();
    t !== a && (e ? sa.trackSignup(t, "$SignUp") : (sa.store.set("first_id", a), sa.trackSignup(t, "$SignUp")))
  }, sa.logout = function (t) {
    var e = sa.store.getFirstId();
    e ? (sa.store.set("first_id", ""), !0 === t ? sa.store.set("distinct_id", sa.store.getUUID()) : sa.store.set("distinct_id", e)) : logger.info("\u6ca1\u6709first_id\uff0clogout\u5931\u8d25")
  }, sa.getAnonymousID = function () {
    if (!_.isEmptyObject(sa.store._state)) return sa.store._state.first_id || sa.store._state.distinct_id;
    logger.info("\u8bf7\u5148\u521d\u59cb\u5316SDK")
  }, sa.getLocation = function () {
    my.getSetting({
      success: function (t) {
        if (!t.authSetting.location) return !1;
        my.getLocation({
          success: function (t) {
            sa.registerApp({
              $latitude: t.latitude * Math.pow(10, 6),
              $longitude: t.longitude * Math.pow(10, 6)
            })
          },
          fail: function (t) {
            console.log("\u83b7\u53d6\u4f4d\u7f6e\u5931\u8d25\uff1a", t)
          }
        })
      }
    })
  }, sa.initial = function () {
    this._.info.getSystem(), this.store.init(), _.isObject(this.para.register) && (_.info.properties = _.extend(_.info.properties, this.para.register))
  }, sa.init = function () {
    if (!0 === this.hasInit) return !1;
    this.hasInit = !0, sa.para.batch_send && sa.sendStrategy.init(), sa.checkIsComplete()
  }, sa.send = function (t) {
    var e = "";
    t._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15), logger.info(t), t._flush_time = Date.now(), t = JSON.stringify(t), e = -1 !== sa.para.server_url.indexOf("?") ? sa.para.server_url + "&data=" + encodeURIComponent(_.base64Encode(t)) : sa.para.server_url + "?data=" + encodeURIComponent(_.base64Encode(t));
    ! function () {
      if (my.canIUse("request")) var t = my.request({
          url: e,
          dataType: "JSON",
          method: "POST",
          headers: {
             'content-type': 'application/json'
          },
          complete: function () {
            a && clearTimeout(a)
          }
        }),
        a = setTimeout(function () {
          _.isObject(t) && _.isFunction(t.abort) && t.abort()
        }, sa.para.datasend_timeout);
      else var r = my.httpRequest({
          url: e,
          dataType: "JSON",
          method: "POST",
          complete: function () {
            a && clearTimeout(n)
          }
        }),
        n = setTimeout(function () {
          _.isObject(r) && _.isFunction(r.abort) && r.abort()
        }, sa.para.datasend_timeout)
    }()
  }, sa.sendStrategy = {
    dataHasSend: !0,
    syncStorage: !1,
    is_first_batch_write: !0,
    failTime: 0,
    init: function () {
      my.getStorage({
        key: "sensors_prepare_data",
        complete: function (t) {
          var e = t.data && _.isArray(t.data) ? t.data : [];
          let mdata =  e.concat(sa.store.mem.mdata)
          let obj = {}
          let arrMdata =  mdata.reduce((item,next) =>{
               obj[next.time] ? '' : obj[next.time] = true && item.push(next);
                return item;
            },[])
          sa.store.mem.mdata = arrMdata, sa.sendStrategy.syncStorage = !0
        }
      }), this.batchInterval()
    },
    onAppHide: function () {
      sa.para.batch_send && this.batchSend()
    },
    send: function (t) {
      return !!sa.para.server_url && (this.dataHasChange = !0, sa.store.mem.getLength() >= 300 ? (logger.info("\u6570\u636e\u91cf\u5b58\u50a8\u8fc7\u5927\uff0c\u6709\u5f02\u5e38"), !1) : (logger.info(t), sa.store.mem.add(t), void(sa.store.mem.getLength() >= sa.para.batch_send.max_length && this.batchSend())))
    },
    batchWrite: function () {
      let t = this;
      this.dataHasChange && (this.is_first_batch_write && (this.is_first_batch_write = !1, setTimeout(function () {
        t.batchSend()
      }, 1e3)), this.syncStorage && (my.setStorageSync({
        key: "sensors_prepare_data",
        data: sa.store.mem.mdata
      }), this.dataHasChange = !1))
    },
    batchInterval() {
      let t = this;
      ! function e() {
        setTimeout(function () {
          t.batchSend(), e()
        }, sa.para.batch_send.send_timeout * Math.pow(2, t.failTime))
      }(),
      function e() {
        setTimeout(function () {
          t.batchWrite(), e()
        }, 500)
      }()
    },
    batchSend() {
      if (this.dataHasSend) {
        let e = this,
          a = sa.store.mem.mdata,
          r = a.length;
        if (_.isArray(a) && a.length > 0) {
          this.dataHasSend = !1;
          var t = Date.now();
          a.forEach(function (e) {
            e._flush_time = t
          }), 
          my.request({
            url: sa.para.server_url,
            method: "POST",
            data: a,
            dataType: "JSON",
            success: function (t) {
              e.batchRemove(r)
            },
            fail: function (t) {
              e.sendFail()
            }
          })
        }
      }
    },
    batchRemove(t) {
      this.dataHasSend = !0, this.dataHasChange = !0, sa.store.mem.clear(t), this.batchWrite(), this.failTime = 0
    },
    sendFail() {
      this.dataHasSend = !0, this.failTime++
    }
  }, _.getPath = function (t) {
    return t = "string" == typeof t ? t.replace(/^\//, "") : "\u53d6\u503c\u5f02\u5e38"
  }, _.getQueryParam = function (t, e) {
    var a = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
    return null === a || a && "string" != typeof a[1] && a[1].length ? "" : _.decodeURIComponent(a[1])
  }, _.getMPScene = function (t) {
    return "number" == typeof t || "string" == typeof t && "" !== t ? t = "ali-" + String(t) : "\u672a\u53d6\u5230\u503c"
  }, _.getQuery = function (t) {
    var e = {};
    if (t && _.isObject(t.query) && (e = _.extend({}, t.query), t.query.qrCode && _.extend(e, _.getObjFromQuery(_.decodeURIComponent(t.query.qrCode)))), t && _.isObject(t.referrerInfo) && t.referrerInfo.extraData) {
      var a = {};
      _.isObject(t.referrerInfo.extraData) && !_.isEmptyObject(t.referrerInfo.extraData) ? a = t.referrerInfo.extraData : _.isJSONString(t.referrerInfo.extraData) && (a = JSON.parse(t.referrerInfo.extraData)), _.extend(e, a)
    }
    return e
  }, _.setUtm = function (t, e) {
    var a = _.getQuery(t),
      r = {},
      n = _.getCustomUtmFromQuery(a, "$", "_", "$"),
      s = _.getCustomUtmFromQuery(a, "$latest_", "_latest_", "$latest_");
    return r.pre1 = n, r.pre2 = s, _.extend(e, r.pre1), r
  }, _.getObjFromQuery = function (t) {
    var e = t.split("?"),
      a = {};
    return e && e[1] ? (_.each(e[1].split("&"), function (t) {
      var e = t.split("=");
      e[0] && e[1] && (a[e[0]] = e[1])
    }), a) : {}
  }, _.getCustomUtmFromQuery = function (t, e, a, r) {
    if (!_.isObject(t)) return {};
    var n = {};
    if (t.sa_utm)
      for (var s in t) "sa_utm" !== s ? _.include(sa.para.source_channel, s) && (n[a + s] = t[s]) : n[r + s] = t[s];
    else
      for (var s in t) - 1 === (" " + source_channel_standard + " ").indexOf(" " + s + " ") ? _.include(sa.para.source_channel, s) && (n[a + s] = t[s]) : n[e + s] = t[s];
    return n
  }, _.existLatestUtm = function () {
    var t = !1;
    return _.each(latest_source_channel, function (e, a) {
      _.info.currentProps[e] && (t = !0)
    }), t
  }, _.setQuery = function (t) {
    if (t && _.isObject(t) && !_.isEmptyObject(t)) {
      var e = [];
      return _.each(t, function (t, a) {
        "q" === a && _.isString(t) && 0 === t.indexOf("http") || "scene" === a || e.push(a + "=" + t)
      }), e.join("&")
    }
    return ""
  }, _.setLatestChannel = function (t) {
    _.isEmptyObject(t) || (function (t, e) {
      var a = !1;
      for (var r in e) t[e[r]] && (a = !0);
      return a
    }(t, latest_source_channel) && sa.clearAppRegister(latest_source_channel), sa.registerApp(t))
  }, _.getCurrentPath = function () {
    var t = "\u672a\u53d6\u5230";
    try {
      var e = getCurrentPages();
      t = e[e.length - 1].route
    } catch (t) {
      logger.info(t)
    }
    return t
  }, sa.appLaunch = function (t, e, a) {
    e && _.isObject(e) || (e = {});
    var r = {};
    t && t.path && (r.$url_path = _.getPath(t.path));
    var n = _.setUtm(t, r);
    is_first_launch ? (r.$is_first_time = !0, _.isEmptyObject(n.pre1) || sa.setOnceProfile(n.pre1)) : r.$is_first_time = !1, _.isEmptyObject(n.pre2) || _.setLatestChannel(n.pre2);
    var s = _.getMPScene(t.scene);
    s && (r.$scene = s, sa.registerApp({
      $latest_scene: r.$scene
    })), _.extend(r, e), (!a || sa.para.autoTrack && sa.para.autoTrack.appLaunch) && sa.track("$MPLaunch", r)
  }, sa.appShow = function (t, e, a) {
    e && _.isObject(e) || (e = {});
    var r = {};
    mpshow_time = (new Date).getTime(), first_show_page = !0, t && t.path && (r.$url_path = _.getPath(t.path));
    var n = _.setUtm(t, r);
    _.isEmptyObject(n.pre2) || _.setLatestChannel(n.pre2), !0 === sa.para.preset_properties.location && sa.getLocation();
    var s = _.getMPScene(t.scene);
    s && (r.$scene = s, sa.registerApp({
      $latest_scene: r.$scene
    })), _.extend(r, e), (!a || sa.para.autoTrack && sa.para.autoTrack.appShow) && sa.track("$MPShow", r)
  }, 
  sa.appHide = function (t, e) {
    t && _.isObject(t) || (t = {});
    var a = (new Date).getTime(),
      r = {};
    r.$url_path = _.getCurrentPath(), mpshow_time && a - mpshow_time > 0 && (a - mpshow_time) / 36e5 < 24 && (r.event_duration = (a - mpshow_time) / 1e3), _.extend(r, t), (!e || sa.para.autoTrack && sa.para.autoTrack.appHide) && sa.track("$MPHide", r), sa.sendStrategy.onAppHide()
      var a = getCurrentPages(),
      n = a[a.length - 1];
    try {
      _.isObject(n) ? (r.$url_query = n.sensors_mp_url_query ? n.sensors_mp_url_query : "", first_show_page && (first_show_page = !1, !_.existLatestUtm() && n.utm && _.isObject(n.utm.pre2) && sa.registerApp(n.utm.pre2)), n.utm && _.isObject(n.utm.pre1) && _.extend(t, n.utm.pre1)) : r.$url_query = ""
    } catch (e) {
      logger.info(e)
    }
  },
   sa.pageShow = function (t, e) {
    var a = {},
      r = _.getCurrentPath();
    a.$url_path = r;
    var n = getCurrentPages(),
      s = n[n.length - 1];
      viewshow_time = (new Date).getTime()
    try {
      _.isObject(s) ? (a.$url_query = s.sensors_mp_url_query ? s.sensors_mp_url_query : "", first_show_page && (first_show_page = !1, !_.existLatestUtm() && s.utm && _.isObject(s.utm.pre2) && sa.registerApp(s.utm.pre2)), s.utm && _.isObject(s.utm.pre1) && _.extend(a, s.utm.pre1)) : a.$url_query = ""
    } catch (t) {
      logger.info(t)
    }
    _.extend(a, t), (!e || sa.para.autoTrack && sa.para.autoTrack.pageShow) && sa.track("$MPViewScreen", a)
  }, 
  sa.pageHide = function (t, e) {
    var a = {},
      r = _.getCurrentPath();
    a.$url_path = r;
    var n = getCurrentPages(),
      s = n[n.length - 1],
      date = (new Date).getTime();
      a.event_duration = (date - viewshow_time) / 1e3;
    try {
      _.isObject(s) ? (a.$url_query = s.sensors_mp_url_query ? s.sensors_mp_url_query : "", first_show_page && (first_show_page = !1, !_.existLatestUtm() && s.utm && _.isObject(s.utm.pre2) && sa.registerApp(s.utm.pre2)), s.utm && _.isObject(s.utm.pre1) && _.extend(a, s.utm.pre1)) : a.$url_query = ""
    } catch (t) {
      logger.info(t)
    }
    _.extend(a, t), (!e || sa.para.autoTrack && sa.para.autoTrack.pageHide) && sa.track("$MPViewHide", a)
  }, 
  sa.pageLoad = function (t, e) {
    if (e && _.isObject(e) && _.isObject(t)) try {
      let { channel } = e
      if(channel){
         sa.store.channel=channel
      }
      t.sensors_mp_url_query = _.setQuery(e);
      var a = {};
      a.pre1 = _.getCustomUtmFromQuery(e, "$", "_", "$"), a.pre2 = _.getCustomUtmFromQuery(e, "$latest_", "_latest_", "$latest_"), t.utm = a
    } catch (t) {
      logger.info(t)
    }
  }, sa.quick = function () {
    var t = arguments[0],
      e = arguments[1],
      a = arguments[2],
      r = _.isObject(a) ? a : {};
    "appLaunch" === t || "appShow" === t ? e ? sa[t](e, r) : logger.info("App\u7684launch\u548cshow\uff0c\u5728sensors.quick\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5fc5\u987b\u4f20\u5165App\u7684options\u53c2\u6570") : "appHide" === t && (r = _.isObject(e) ? e : {}, sa[t](r))
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
function click_proxy(t, e) {
  var a = t[e];
  t[e] = function () {
    var t = a.apply(this, arguments),
      e = {},
      r = "",
      isAuto = true;
    if (_.isObject(arguments[0])) {
      var n = arguments[0].currentTarget || {},
        s = arguments[0].target || {},
        b = arguments[0].buttonTarget || {},
        d =arguments[0].detail || {};
      if (_.isObject(sa.para.framework) && _.isObject(sa.para.framework.taro) && !sa.para.framework.taro.createApp && s.id && n.id && s.id !== n.id) return t;
      var i = n.dataset || {};
      let btn = b.dataset || {}
      r = arguments[0].type, 
      e.$url_path = _.getCurrentPath(),
      e.$element_id = n.id,
      e.$element_type = n.tagName,
      e.$element_content = i.content,
      e.$element_name = i.name
      e.analysis =  Object.assign({},
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
        _.isObject(n) ? (e.$url_query = n.sensors_mp_url_query ? n.sensors_mp_url_query : "", first_show_page && (first_show_page = !1, !_.existLatestUtm() && n.utm && _.isObject(n.utm.pre2) && sa.registerApp(n.utm.pre2)), n.utm && _.isObject(n.utm.pre1) && _.extend(e, n.utm.pre1)) : e.$url_query = ""
      } catch (e) {
        logger.info(e)
      }
       isAuto = sa.para.isAuto ? false : (i.saClose ? !i.saClose : !btn.saClose)
    }
    return r && _.isClick(r) && isAuto && sa.track("$MPClick", e), t
  }
}
_.getMethods = function (t) {
  var e = [];
  for (var a in t) "function" != typeof t[a] || mpHooks[a] || e.push(a);
  return e
}, _.isClick = function (t) {
  return !!{
    tap: 1,
    blur: 1,
    submit: 1,
    longTap: 1
  } [t]
}, $global.saAlipay.App = function (t) {
  var e = t.onShow,
    a = t.onLaunch,
    r = t.onHide;
  return t.onShow = function () {
    e && e.apply(this, arguments), sa.appShow(arguments[0], {}, !0)
  }, t.onLaunch = function () {
    this[sa.para.name] = sa, a && a.apply(this, arguments), sa.appLaunch(arguments[0], {}, !0)
  }, t.onHide = function () {
    r && r.apply(this, arguments), sa.appHide({}, !0)
  }, $global.saAlipay.useApp = !0, App(t)
}, $global.saAlipay.Page = function (t) {
  var e = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(t);
  if (e)
    for (var a = 0, r = e.length; a < r; a++) click_proxy(t, e[a]);
  var n = t.onShow,
    s = t.onLoad,
    h = t.onHide;
  return t.onShow = function () {
    n && n.apply(this, arguments), sa.pageShow({}, !0)
  },
  t.onHide = function (){
    h && h.apply(this, arguments), sa.pageHide({}, !0)
  },
   t.onLoad = function () {
    s && s.apply(this, arguments), sa.pageLoad(this, arguments[0])
  }, $global.saAlipay.usePage = !0, Page(t)
};
var oldApp = App;
App = function (t) {
  if (oldApp.apply(this, arguments), $global.saAlipay.useApp) return !1;
  var e = t.onShow,
    a = t.onLaunch,
    r = t.onHide;
  t.onLaunch = function () {
    this[sa.para.name] = sa, a && a.apply(this, arguments), sa.appLaunch(arguments[0], {}, !0)
  }, t.onShow = function () {
    e && e.apply(this, arguments), sa.appShow(arguments[0], {}, !0)
  }, t.onHide = function () {
    r && r.apply(this, arguments), sa.appHide({}, !0)
  }
};
var oldPage = Page;
Page = function (t) {
  if ($global.saAlipay.usePage) return !1;
  var e = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(t);
  if (e)
    for (var a = 0, r = e.length; a < r; a++) click_proxy(t, e[a]);
  var n = t.onShow,
    s = t.onLoad,
    h = t.onHide;
  t.onShow = function () {
    n && n.apply(this, arguments), sa.pageShow({}, !0)
  }, 
  t.onHide = function () {
    h && h.apply(this, arguments), sa.pageHide({}, !0)
  }, 
  t.onLoad = function () {
    s && s.apply(this, arguments), sa.pageLoad(this, arguments[0])
  }, 
  oldPage.apply(this, arguments)
};
var oldComponent = Component;
Component = function (t) {
  try {
    var e = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(t.methods);
    if (e)
      for (var a = 0, r = e.length; a < r; a++) click_proxy(t.methods, e[a]);
    mp_proxy(t.methods, "onLoad", "pageLoad"), mp_proxy(t.methods, "onShow", "pageShow",'pageHide'), "function" == typeof t.methods.onShareAppMessage && sa.autoTrackCustom.pageShare(t.methods), oldComponent.apply(this, arguments)
  } catch (t) {
    oldComponent.apply(this, arguments)
  }
},
sa.initial();
export default sa;