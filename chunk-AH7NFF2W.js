import {a as co} from "./chunk-XVQETGIZ.js";
import {a as qe, b as Vr, c as Fr, d as xr, f as Mr, g as kr, h as Gr, i as Br, j as Kr, k as zr, m as jr, o as Ot} from "./chunk-7QQKOPCW.js";
import {a as Ye, b as We, c as le} from "./chunk-US3HSYXZ.js";
import {a as wr} from "./chunk-GLMSGHBP.js";
import {a as Cr, c as He, g as Pr} from "./chunk-V4WBOWIB.js";
import {a as yt, c as lo} from "./chunk-4TTDQVEV.js";
import {b as uo} from "./chunk-M42VXZTJ.js";
import {a as ae} from "./chunk-3KUX7RCT.js";
import {a as Lr} from "./chunk-3LET2VVT.js";
import {g as ze, h as Sr} from "./chunk-XYLT5PZX.js";
import {d as je, h as Dr} from "./chunk-3LH2ZTEP.js";
import {b as so} from "./chunk-INSRYSWJ.js";
import {a as ao} from "./chunk-GJN5ONR7.js";
import {c as b, f as j} from "./chunk-62VJZGPO.js";
var Tt = b(Ze => {
    "use strict";
    Object.defineProperty(Ze, "__esModule", {
        value: !0
    });
    Ze.trackGAEvent = void 0;
    var Je = wr()
      , fa = function(t) {
        (0,
        Je.env)() === Je.STAGING || (0,
        Je.env)() === Je.PRODUCTION ? (window.dataLayer = window.dataLayer || [],
        window.dataLayer.push(t)) : console.warn("This would have sent the following data to Google Analytics, but GA tracking is disabled in dev. Use staging or production instead. ".concat(JSON.stringify(t)))
    };
    Ze.trackGAEvent = fa
}
);
var Vt = b(ye => {
    "use strict";
    Object.defineProperty(ye, "__esModule", {
        value: !0
    });
    var Pt = function() {
        function t() {}
        return t.prototype.handleError = function(e) {}
        ,
        t
    }();
    ye.NoopErrorHandler = Pt;
    var wt = new Pt;
    function Aa(t) {
        wt = t
    }
    ye.setErrorHandler = Aa;
    function ba() {
        return wt
    }
    ye.getErrorHandler = ba;
    function Ua() {
        wt = new Pt
    }
    ye.resetErrorHandler = Ua
}
);
var Ft = b($e => {
    "use strict";
    Object.defineProperty($e, "__esModule", {
        value: !0
    });
    var Sa;
    (function(t) {
        t[t.NOTSET = 0] = "NOTSET",
        t[t.DEBUG = 1] = "DEBUG",
        t[t.INFO = 2] = "INFO",
        t[t.WARNING = 3] = "WARNING",
        t[t.ERROR = 4] = "ERROR"
    }
    )(Sa = $e.LogLevel || ($e.LogLevel = {}))
}
);
var Gt = b( (Tc, kt) => {
    var sn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    sn ? (xt = new Uint8Array(16),
    kt.exports = function() {
        return sn(xt),
        xt
    }
    ) : (Mt = new Array(16),
    kt.exports = function() {
        for (var e = 0, r; e < 16; e++)
            (e & 3) === 0 && (r = Math.random() * 4294967296),
            Mt[e] = r >>> ((e & 3) << 3) & 255;
        return Mt
    }
    );
    var xt, Mt
}
);
var Bt = b( (Nc, ln) => {
    var un = [];
    for (Pe = 0; Pe < 256; ++Pe)
        un[Pe] = (Pe + 256).toString(16).substr(1);
    var Pe;
    function Da(t, e) {
        var r = e || 0
          , n = un;
        return [n[t[r++]], n[t[r++]], n[t[r++]], n[t[r++]], "-", n[t[r++]], n[t[r++]], "-", n[t[r++]], n[t[r++]], "-", n[t[r++]], n[t[r++]], "-", n[t[r++]], n[t[r++]], n[t[r++]], n[t[r++]], n[t[r++]], n[t[r++]]].join("")
    }
    ln.exports = Da
}
);
var dn = b( (Ac, fn) => {
    var La = Gt(), Ca = Bt(), cn, Kt, zt = 0, jt = 0;
    function Pa(t, e, r) {
        var n = e && r || 0
          , i = e || [];
        t = t || {};
        var o = t.node || cn
          , a = t.clockseq !== void 0 ? t.clockseq : Kt;
        if (o == null || a == null) {
            var u = La();
            o == null && (o = cn = [u[0] | 1, u[1], u[2], u[3], u[4], u[5]]),
            a == null && (a = Kt = (u[6] << 8 | u[7]) & 16383)
        }
        var s = t.msecs !== void 0 ? t.msecs : new Date().getTime()
          , l = t.nsecs !== void 0 ? t.nsecs : jt + 1
          , c = s - zt + (l - jt) / 1e4;
        if (c < 0 && t.clockseq === void 0 && (a = a + 1 & 16383),
        (c < 0 || s > zt) && t.nsecs === void 0 && (l = 0),
        l >= 1e4)
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        zt = s,
        jt = l,
        Kt = a,
        s += 122192928e5;
        var f = ((s & 268435455) * 1e4 + l) % 4294967296;
        i[n++] = f >>> 24 & 255,
        i[n++] = f >>> 16 & 255,
        i[n++] = f >>> 8 & 255,
        i[n++] = f & 255;
        var E = s / 4294967296 * 1e4 & 268435455;
        i[n++] = E >>> 8 & 255,
        i[n++] = E & 255,
        i[n++] = E >>> 24 & 15 | 16,
        i[n++] = E >>> 16 & 255,
        i[n++] = a >>> 8 | 128,
        i[n++] = a & 255;
        for (var _ = 0; _ < 6; ++_)
            i[n + _] = o[_];
        return e || Ca(i)
    }
    fn.exports = Pa
}
);
var En = b( (bc, pn) => {
    var wa = Gt()
      , Va = Bt();
    function Fa(t, e, r) {
        var n = e && r || 0;
        typeof t == "string" && (e = t === "binary" ? new Array(16) : null,
        t = null),
        t = t || {};
        var i = t.random || (t.rng || wa)();
        if (i[6] = i[6] & 15 | 64,
        i[8] = i[8] & 63 | 128,
        e)
            for (var o = 0; o < 16; ++o)
                e[n + o] = i[o];
        return e || Va(i)
    }
    pn.exports = Fa
}
);
var qt = b( (Uc, _n) => {
    var xa = dn()
      , gn = En()
      , Ht = gn;
    Ht.v1 = xa;
    Ht.v4 = gn;
    _n.exports = Ht
}
);
var Oe = b(H => {
    "use strict";
    Object.defineProperty(H, "__esModule", {
        value: !0
    });
    var Ma = qt();
    function ka() {
        return Ma.v4()
    }
    H.generateUUID = ka;
    function Ga() {
        return new Date().getTime()
    }
    H.getTimestamp = Ga;
    function Ba(t, e) {
        for (var r = !1, n = Object.keys(t), i = 0; i < n.length; i++)
            if (e === t[n[i]]) {
                r = !0;
                break
            }
        return r
    }
    H.isValidEnum = Ba;
    function Ka(t, e) {
        var r = {};
        return t.forEach(function(n) {
            var i = e(n);
            r[i] = r[i] || [],
            r[i].push(n)
        }),
        vn(r)
    }
    H.groupBy = Ka;
    function vn(t) {
        return Object.keys(t).map(function(e) {
            return t[e]
        })
    }
    H.objectValues = vn;
    function za(t) {
        return Object.keys(t).map(function(e) {
            return [e, t[e]]
        })
    }
    H.objectEntries = za;
    function ja(t, e) {
        for (var r, n = 0, i = t; n < i.length; n++) {
            var o = i[n];
            if (e(o)) {
                r = o;
                break
            }
        }
        return r
    }
    H.find = ja;
    function Ha(t, e) {
        var r = {};
        return t.forEach(function(n) {
            var i = e(n);
            r[i] = n
        }),
        r
    }
    H.keyBy = Ha;
    function qa(t) {
        for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
        var n = 0;
        return t.replace(/%s/g, function() {
            var i = e[n++]
              , o = typeof i;
            return o === "function" ? i() : o === "string" ? i : String(i)
        })
    }
    H.sprintf = qa;
    var Ya;
    (function(t) {
        t.ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event",
        t.DECISION = "DECISION:type, userId, attributes, decisionInfo",
        t.LOG_EVENT = "LOG_EVENT:logEvent",
        t.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE",
        t.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event"
    }
    )(Ya = H.NOTIFICATION_TYPES || (H.NOTIFICATION_TYPES = {}))
}
);
var On = b(ee => {
    "use strict";
    var Wa = ee && ee.__spreadArrays || function() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++)
            t += arguments[e].length;
        for (var n = Array(t), i = 0, e = 0; e < r; e++)
            for (var o = arguments[e], a = 0, u = o.length; a < u; a++,
            i++)
                n[i] = o[a];
        return n
    }
    ;
    Object.defineProperty(ee, "__esModule", {
        value: !0
    });
    var Xa = Vt()
      , et = Oe()
      , V = Ft()
      , hn = {
        NOTSET: 0,
        DEBUG: 1,
        INFO: 2,
        WARNING: 3,
        ERROR: 4
    };
    function Wt(t) {
        return typeof t != "string" || (t = t.toUpperCase(),
        t === "WARN" && (t = "WARNING"),
        !hn[t]) ? t : hn[t]
    }
    var mn = function() {
        function t() {
            this.defaultLoggerFacade = new In,
            this.loggers = {}
        }
        return t.prototype.getLogger = function(e) {
            return e ? (this.loggers[e] || (this.loggers[e] = new In({
                messagePrefix: e
            })),
            this.loggers[e]) : this.defaultLoggerFacade
        }
        ,
        t
    }()
      , Ja = function() {
        function t(e) {
            e === void 0 && (e = {}),
            this.logLevel = V.LogLevel.NOTSET,
            e.logLevel !== void 0 && et.isValidEnum(V.LogLevel, e.logLevel) && this.setLogLevel(e.logLevel),
            this.logToConsole = e.logToConsole !== void 0 ? !!e.logToConsole : !0,
            this.prefix = e.prefix !== void 0 ? e.prefix : "[OPTIMIZELY]"
        }
        return t.prototype.log = function(e, r) {
            if (!(!this.shouldLog(e) || !this.logToConsole)) {
                var n = this.prefix + " - " + this.getLogLevelName(e) + " " + this.getTime() + " " + r;
                this.consoleLog(e, [n])
            }
        }
        ,
        t.prototype.setLogLevel = function(e) {
            e = Wt(e),
            !et.isValidEnum(V.LogLevel, e) || e === void 0 ? this.logLevel = V.LogLevel.ERROR : this.logLevel = e
        }
        ,
        t.prototype.getTime = function() {
            return new Date().toISOString()
        }
        ,
        t.prototype.shouldLog = function(e) {
            return e >= this.logLevel
        }
        ,
        t.prototype.getLogLevelName = function(e) {
            switch (e) {
            case V.LogLevel.DEBUG:
                return "DEBUG";
            case V.LogLevel.INFO:
                return "INFO ";
            case V.LogLevel.WARNING:
                return "WARN ";
            case V.LogLevel.ERROR:
                return "ERROR";
            default:
                return "NOTSET"
            }
        }
        ,
        t.prototype.consoleLog = function(e, r) {
            switch (e) {
            case V.LogLevel.DEBUG:
                console.log.apply(console, r);
                break;
            case V.LogLevel.INFO:
                console.info.apply(console, r);
                break;
            case V.LogLevel.WARNING:
                console.warn.apply(console, r);
                break;
            case V.LogLevel.ERROR:
                console.error.apply(console, r);
                break;
            default:
                console.log.apply(console, r)
            }
        }
        ,
        t
    }();
    ee.ConsoleLogHandler = Ja;
    var we = V.LogLevel.NOTSET
      , Yt = null
      , In = function() {
        function t(e) {
            e === void 0 && (e = {}),
            this.messagePrefix = "",
            e.messagePrefix && (this.messagePrefix = e.messagePrefix)
        }
        return t.prototype.log = function(e, r) {
            for (var n = [], i = 2; i < arguments.length; i++)
                n[i - 2] = arguments[i];
            this.internalLog(Wt(e), {
                message: r,
                splat: n
            })
        }
        ,
        t.prototype.info = function(e) {
            for (var r = [], n = 1; n < arguments.length; n++)
                r[n - 1] = arguments[n];
            this.namedLog(V.LogLevel.INFO, e, r)
        }
        ,
        t.prototype.debug = function(e) {
            for (var r = [], n = 1; n < arguments.length; n++)
                r[n - 1] = arguments[n];
            this.namedLog(V.LogLevel.DEBUG, e, r)
        }
        ,
        t.prototype.warn = function(e) {
            for (var r = [], n = 1; n < arguments.length; n++)
                r[n - 1] = arguments[n];
            this.namedLog(V.LogLevel.WARNING, e, r)
        }
        ,
        t.prototype.error = function(e) {
            for (var r = [], n = 1; n < arguments.length; n++)
                r[n - 1] = arguments[n];
            this.namedLog(V.LogLevel.ERROR, e, r)
        }
        ,
        t.prototype.format = function(e) {
            return (this.messagePrefix ? this.messagePrefix + ": " : "") + et.sprintf.apply(void 0, Wa([e.message], e.splat))
        }
        ,
        t.prototype.internalLog = function(e, r) {
            !Yt || e < we || (Yt.log(e, this.format(r)),
            r.error && r.error instanceof Error && Xa.getErrorHandler().handleError(r.error))
        }
        ,
        t.prototype.namedLog = function(e, r, n) {
            var i;
            if (r instanceof Error) {
                i = r,
                r = i.message,
                this.internalLog(e, {
                    error: i,
                    message: r,
                    splat: n
                });
                return
            }
            if (n.length === 0) {
                this.internalLog(e, {
                    message: r,
                    splat: n
                });
                return
            }
            var o = n[n.length - 1];
            o instanceof Error && (i = o,
            n.splice(-1)),
            this.internalLog(e, {
                message: r,
                error: i,
                splat: n
            })
        }
        ,
        t
    }()
      , yn = new mn;
    function Za(t) {
        return yn.getLogger(t)
    }
    ee.getLogger = Za;
    function Qa(t) {
        Yt = t
    }
    ee.setLogHandler = Qa;
    function $a(t) {
        t = Wt(t),
        !et.isValidEnum(V.LogLevel, t) || t === void 0 ? we = V.LogLevel.ERROR : we = t
    }
    ee.setLogLevel = $a;
    function es() {
        return we
    }
    ee.getLogLevel = es;
    function ts() {
        yn = new mn,
        we = V.LogLevel.NOTSET
    }
    ee.resetLogger = ts
}
);
var te = b(tt => {
    "use strict";
    function Xt(t) {
        for (var e in t)
            tt.hasOwnProperty(e) || (tt[e] = t[e])
    }
    Object.defineProperty(tt, "__esModule", {
        value: !0
    });
    Xt(Vt());
    Xt(Ft());
    Xt(On())
}
);
var Jt = b(rt => {
    "use strict";
    Object.defineProperty(rt, "__esModule", {
        value: !0
    });
    rt.areEventContextsEqual = void 0;
    function rs(t, e) {
        var r = t.context
          , n = e.context;
        return r.accountId === n.accountId && r.projectId === n.projectId && r.clientName === n.clientName && r.clientVersion === n.clientVersion && r.revision === n.revision && r.anonymizeIP === n.anonymizeIP && r.botFiltering === n.botFiltering
    }
    rt.areEventContextsEqual = rs
}
);
var Rn = b(Re => {
    "use strict";
    Object.defineProperty(Re, "__esModule", {
        value: !0
    });
    Re.DefaultEventQueue = Re.SingleEventQueue = void 0;
    var ns = te()
      , is = ns.getLogger("EventProcessor")
      , os = function() {
        function t(e) {
            var r = e.timeout
              , n = e.callback;
            this.timeout = Math.max(r, 0),
            this.callback = n
        }
        return t.prototype.start = function() {
            this.timeoutId = setTimeout(this.callback, this.timeout)
        }
        ,
        t.prototype.refresh = function() {
            this.stop(),
            this.start()
        }
        ,
        t.prototype.stop = function() {
            this.timeoutId && clearTimeout(this.timeoutId)
        }
        ,
        t
    }()
      , as = function() {
        function t(e) {
            var r = e.sink;
            this.sink = r
        }
        return t.prototype.start = function() {}
        ,
        t.prototype.stop = function() {
            return Promise.resolve()
        }
        ,
        t.prototype.enqueue = function(e) {
            this.sink([e])
        }
        ,
        t
    }();
    Re.SingleEventQueue = as;
    var ss = function() {
        function t(e) {
            var r = e.flushInterval
              , n = e.maxQueueSize
              , i = e.sink
              , o = e.batchComparator;
            this.buffer = [],
            this.maxQueueSize = Math.max(n, 1),
            this.sink = i,
            this.batchComparator = o,
            this.timer = new os({
                callback: this.flush.bind(this),
                timeout: r
            }),
            this.started = !1
        }
        return t.prototype.start = function() {
            this.started = !0
        }
        ,
        t.prototype.stop = function() {
            this.started = !1;
            var e = this.sink(this.buffer);
            return this.buffer = [],
            this.timer.stop(),
            e
        }
        ,
        t.prototype.enqueue = function(e) {
            if (!this.started) {
                is.warn("Queue is stopped, not accepting event");
                return
            }
            var r = this.buffer[0];
            r && !this.batchComparator(r, e) && this.flush(),
            this.buffer.length === 0 && this.timer.refresh(),
            this.buffer.push(e),
            this.buffer.length >= this.maxQueueSize && this.flush()
        }
        ,
        t.prototype.flush = function() {
            this.sink(this.buffer),
            this.buffer = [],
            this.timer.stop()
        }
        ,
        t
    }();
    Re.DefaultEventQueue = ss
}
);
var Zt = b(x => {
    "use strict";
    Object.defineProperty(x, "__esModule", {
        value: !0
    });
    x.sendEventNotification = x.getQueue = x.validateAndGetBatchSize = x.validateAndGetFlushInterval = x.DEFAULT_BATCH_SIZE = x.DEFAULT_FLUSH_INTERVAL = void 0;
    var Tn = Rn()
      , us = te()
      , ls = Oe();
    x.DEFAULT_FLUSH_INTERVAL = 3e4;
    x.DEFAULT_BATCH_SIZE = 10;
    var Nn = us.getLogger("EventProcessor");
    function cs(t) {
        return t <= 0 && (Nn.warn("Invalid flushInterval " + t + ", defaulting to " + x.DEFAULT_FLUSH_INTERVAL),
        t = x.DEFAULT_FLUSH_INTERVAL),
        t
    }
    x.validateAndGetFlushInterval = cs;
    function fs(t) {
        return t = Math.floor(t),
        t < 1 && (Nn.warn("Invalid batchSize " + t + ", defaulting to " + x.DEFAULT_BATCH_SIZE),
        t = x.DEFAULT_BATCH_SIZE),
        t = Math.max(1, t),
        t
    }
    x.validateAndGetBatchSize = fs;
    function ds(t, e, r, n) {
        var i;
        return t > 1 ? i = new Tn.DefaultEventQueue({
            flushInterval: e,
            maxQueueSize: t,
            sink: r,
            batchComparator: n
        }) : i = new Tn.SingleEventQueue({
            sink: r
        }),
        i
    }
    x.getQueue = ds;
    function ps(t, e) {
        t && t.sendNotifications(ls.NOTIFICATION_TYPES.LOG_EVENT, e)
    }
    x.sendEventNotification = ps
}
);
var bn = b(An => {
    "use strict";
    Object.defineProperty(An, "__esModule", {
        value: !0
    })
}
);
var Sn = b(Un => {
    "use strict";
    Object.defineProperty(Un, "__esModule", {
        value: !0
    })
}
);
var Ln = b(nt => {
    "use strict";
    Object.defineProperty(nt, "__esModule", {
        value: !0
    });
    nt.LocalStorageStore = void 0;
    var Es = Oe()
      , gs = te()
      , Dn = gs.getLogger("EventProcessor")
      , _s = function() {
        function t(e) {
            var r = e.key
              , n = e.maxValues
              , i = n === void 0 ? 1e3 : n;
            this.LS_KEY = r,
            this.maxValues = i
        }
        return t.prototype.get = function(e) {
            return this.getMap()[e] || null
        }
        ,
        t.prototype.set = function(e, r) {
            var n = this.getMap();
            n[e] = r,
            this.replace(n)
        }
        ,
        t.prototype.remove = function(e) {
            var r = this.getMap();
            delete r[e],
            this.replace(r)
        }
        ,
        t.prototype.values = function() {
            return Es.objectValues(this.getMap())
        }
        ,
        t.prototype.clear = function() {
            this.replace({})
        }
        ,
        t.prototype.replace = function(e) {
            try {
                window.localStorage && localStorage.setItem(this.LS_KEY, JSON.stringify(e)),
                this.clean()
            } catch (r) {
                Dn.error(r)
            }
        }
        ,
        t.prototype.clean = function() {
            var e = this.getMap()
              , r = Object.keys(e)
              , n = r.length - this.maxValues;
            if (!(n < 1)) {
                var i = r.map(function(a) {
                    return {
                        key: a,
                        value: e[a]
                    }
                });
                i.sort(function(a, u) {
                    return a.value.timestamp - u.value.timestamp
                });
                for (var o = 0; o < n; o++)
                    delete e[i[o].key];
                this.replace(e)
            }
        }
        ,
        t.prototype.getMap = function() {
            try {
                var e = window.localStorage && localStorage.getItem(this.LS_KEY);
                if (e)
                    return JSON.parse(e) || {}
            } catch (r) {
                Dn.error(r)
            }
            return {}
        }
        ,
        t
    }();
    nt.LocalStorageStore = _s
}
);
var wn = b(ce => {
    "use strict";
    var vs = ce && ce.__extends || function() {
        var t = function(e, r) {
            return t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(n, i) {
                n.__proto__ = i
            }
            || function(n, i) {
                for (var o in i)
                    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
            }
            ,
            t(e, r)
        };
        return function(e, r) {
            t(e, r);
            function n() {
                this.constructor = e
            }
            e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
            new n)
        }
    }();
    Object.defineProperty(ce, "__esModule", {
        value: !0
    });
    ce.LocalStoragePendingEventsDispatcher = ce.PendingEventsDispatcher = void 0;
    var Is = te()
      , ms = Ln()
      , Cn = Oe()
      , ys = Is.getLogger("EventProcessor")
      , Pn = function() {
        function t(e) {
            var r = e.eventDispatcher
              , n = e.store;
            this.dispatcher = r,
            this.store = n
        }
        return t.prototype.dispatchEvent = function(e, r) {
            this.send({
                uuid: Cn.generateUUID(),
                timestamp: Cn.getTimestamp(),
                request: e
            }, r)
        }
        ,
        t.prototype.sendPendingEvents = function() {
            var e = this
              , r = this.store.values();
            ys.debug("Sending %s pending events from previous page", r.length),
            r.forEach(function(n) {
                try {
                    e.send(n, function() {})
                } catch {}
            })
        }
        ,
        t.prototype.send = function(e, r) {
            var n = this;
            this.store.set(e.uuid, e),
            this.dispatcher.dispatchEvent(e.request, function(i) {
                n.store.remove(e.uuid),
                r(i)
            })
        }
        ,
        t
    }();
    ce.PendingEventsDispatcher = Pn;
    var Os = function(t) {
        vs(e, t);
        function e(r) {
            var n = r.eventDispatcher;
            return t.call(this, {
                eventDispatcher: n,
                store: new ms.LocalStorageStore({
                    maxValues: 100,
                    key: "fs_optly_pending_events"
                })
            }) || this
        }
        return e
    }(Pn);
    ce.LocalStoragePendingEventsDispatcher = Os
}
);
var er = b(X => {
    "use strict";
    var Qt = X && X.__assign || function() {
        return Qt = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            return t
        }
        ,
        Qt.apply(this, arguments)
    }
    ;
    Object.defineProperty(X, "__esModule", {
        value: !0
    });
    X.formatEvents = X.buildConversionEventV1 = X.buildImpressionEventV1 = X.makeBatchedEventV1 = void 0;
    var Rs = "campaign_activated"
      , Ts = "custom"
      , Vn = "$opt_bot_filtering";
    function Fn(t) {
        var e = []
          , r = t[0];
        return t.forEach(function(n) {
            if (n.type === "conversion" || n.type === "impression") {
                var i = $t(n);
                n.type === "impression" ? i.snapshots.push(Mn(n)) : n.type === "conversion" && i.snapshots.push(xn(n)),
                e.push(i)
            }
        }),
        {
            client_name: r.context.clientName,
            client_version: r.context.clientVersion,
            account_id: r.context.accountId,
            project_id: r.context.projectId,
            revision: r.context.revision,
            anonymize_ip: r.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: e
        }
    }
    X.makeBatchedEventV1 = Fn;
    function xn(t) {
        var e = Qt({}, t.tags);
        delete e.revenue,
        delete e.value;
        var r = {
            entity_id: t.event.id,
            key: t.event.key,
            timestamp: t.timestamp,
            uuid: t.uuid
        };
        return t.tags && (r.tags = t.tags),
        t.value != null && (r.value = t.value),
        t.revenue != null && (r.revenue = t.revenue),
        {
            events: [r]
        }
    }
    function Mn(t) {
        var e, r, n = t.layer, i = t.experiment, o = t.variation, a = t.ruleKey, u = t.flagKey, s = t.ruleType, l = t.enabled, c = n ? n.id : null, f = (e = i?.id) !== null && e !== void 0 ? e : "", E = (r = o?.id) !== null && r !== void 0 ? r : "", _ = o ? o.key : "";
        return {
            decisions: [{
                campaign_id: c,
                experiment_id: f,
                variation_id: E,
                metadata: {
                    flag_key: u,
                    rule_key: a,
                    rule_type: s,
                    variation_key: _,
                    enabled: l
                }
            }],
            events: [{
                entity_id: c,
                timestamp: t.timestamp,
                key: Rs,
                uuid: t.uuid
            }]
        }
    }
    function $t(t) {
        var e = {
            snapshots: [],
            visitor_id: t.user.id,
            attributes: []
        };
        return t.user.attributes.forEach(function(r) {
            e.attributes.push({
                entity_id: r.entityId,
                key: r.key,
                type: "custom",
                value: r.value
            })
        }),
        typeof t.context.botFiltering == "boolean" && e.attributes.push({
            entity_id: Vn,
            key: Vn,
            type: Ts,
            value: t.context.botFiltering
        }),
        e
    }
    function Ns(t) {
        var e = $t(t);
        return e.snapshots.push(Mn(t)),
        {
            client_name: t.context.clientName,
            client_version: t.context.clientVersion,
            account_id: t.context.accountId,
            project_id: t.context.projectId,
            revision: t.context.revision,
            anonymize_ip: t.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: [e]
        }
    }
    X.buildImpressionEventV1 = Ns;
    function As(t) {
        var e = $t(t);
        return e.snapshots.push(xn(t)),
        {
            client_name: t.context.clientName,
            client_version: t.context.clientVersion,
            account_id: t.context.accountId,
            project_id: t.context.projectId,
            revision: t.context.revision,
            anonymize_ip: t.context.anonymizeIP,
            enrich_decisions: !0,
            visitors: [e]
        }
    }
    X.buildConversionEventV1 = As;
    function bs(t) {
        return {
            url: "https://logx.optimizely.com/v1/events",
            httpVerb: "POST",
            params: Fn(t)
        }
    }
    X.formatEvents = bs
}
);
var kn = b(tr => {
    "use strict";
    Object.defineProperty(tr, "__esModule", {
        value: !0
    });
    var Us = function() {
        function t() {
            this.reqsInFlightCount = 0,
            this.reqsCompleteResolvers = []
        }
        return t.prototype.trackRequest = function(e) {
            var r = this;
            this.reqsInFlightCount++;
            var n = function() {
                r.reqsInFlightCount--,
                r.reqsInFlightCount === 0 && (r.reqsCompleteResolvers.forEach(function(i) {
                    return i()
                }),
                r.reqsCompleteResolvers = [])
            };
            e.then(n, n)
        }
        ,
        t.prototype.onRequestsComplete = function() {
            var e = this;
            return new Promise(function(r) {
                e.reqsInFlightCount === 0 ? r() : e.reqsCompleteResolvers.push(r)
            }
            )
        }
        ,
        t
    }();
    tr.default = Us
}
);
var Bn = b(re => {
    "use strict";
    var Ss = re && re.__awaiter || function(t, e, r, n) {
        function i(o) {
            return o instanceof r ? o : new r(function(a) {
                a(o)
            }
            )
        }
        return new (r || (r = Promise))(function(o, a) {
            function u(c) {
                try {
                    l(n.next(c))
                } catch (f) {
                    a(f)
                }
            }
            function s(c) {
                try {
                    l(n.throw(c))
                } catch (f) {
                    a(f)
                }
            }
            function l(c) {
                c.done ? o(c.value) : i(c.value).then(u, s)
            }
            l((n = n.apply(t, e || [])).next())
        }
        )
    }
      , Ds = re && re.__generator || function(t, e) {
        var r = {
            label: 0,
            sent: function() {
                if (o[0] & 1)
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        }, n, i, o, a;
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        },
        typeof Symbol == "function" && (a[Symbol.iterator] = function() {
            return this
        }
        ),
        a;
        function u(l) {
            return function(c) {
                return s([l, c])
            }
        }
        function s(l) {
            if (n)
                throw new TypeError("Generator is already executing.");
            for (; r; )
                try {
                    if (n = 1,
                    i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i),
                    0) : i.next) && !(o = o.call(i, l[1])).done)
                        return o;
                    switch (i = 0,
                    o && (l = [l[0] & 2, o.value]),
                    l[0]) {
                    case 0:
                    case 1:
                        o = l;
                        break;
                    case 4:
                        return r.label++,
                        {
                            value: l[1],
                            done: !1
                        };
                    case 5:
                        r.label++,
                        i = l[1],
                        l = [0];
                        continue;
                    case 7:
                        l = r.ops.pop(),
                        r.trys.pop();
                        continue;
                    default:
                        if (o = r.trys,
                        !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                            r = 0;
                            continue
                        }
                        if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
                            r.label = l[1];
                            break
                        }
                        if (l[0] === 6 && r.label < o[1]) {
                            r.label = o[1],
                            o = l;
                            break
                        }
                        if (o && r.label < o[2]) {
                            r.label = o[2],
                            r.ops.push(l);
                            break
                        }
                        o[2] && r.ops.pop(),
                        r.trys.pop();
                        continue
                    }
                    l = e.call(t, r)
                } catch (c) {
                    l = [6, c],
                    i = 0
                } finally {
                    n = o = 0
                }
            if (l[0] & 5)
                throw l[1];
            return {
                value: l[0] ? l[1] : void 0,
                done: !0
            }
        }
    }
      , Ls = re && re.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    ;
    Object.defineProperty(re, "__esModule", {
        value: !0
    });
    re.LogTierV1EventProcessor = void 0;
    var Cs = te()
      , Te = Zt()
      , Ps = Ls(kn())
      , ws = Jt()
      , Vs = er()
      , Gn = Cs.getLogger("LogTierV1EventProcessor")
      , Fs = function() {
        function t(e) {
            var r = e.dispatcher
              , n = e.flushInterval
              , i = n === void 0 ? Te.DEFAULT_FLUSH_INTERVAL : n
              , o = e.batchSize
              , a = o === void 0 ? Te.DEFAULT_BATCH_SIZE : o
              , u = e.notificationCenter;
            this.dispatcher = r,
            this.notificationCenter = u,
            this.requestTracker = new Ps.default,
            i = Te.validateAndGetFlushInterval(i),
            a = Te.validateAndGetBatchSize(a),
            this.queue = Te.getQueue(a, i, this.drainQueue.bind(this), ws.areEventContextsEqual)
        }
        return t.prototype.drainQueue = function(e) {
            var r = this
              , n = new Promise(function(i) {
                if (Gn.debug("draining queue with %s events", e.length),
                e.length === 0) {
                    i();
                    return
                }
                var o = Vs.formatEvents(e);
                r.dispatcher.dispatchEvent(o, function() {
                    i()
                }),
                Te.sendEventNotification(r.notificationCenter, o)
            }
            );
            return this.requestTracker.trackRequest(n),
            n
        }
        ,
        t.prototype.process = function(e) {
            this.queue.enqueue(e)
        }
        ,
        t.prototype.stop = function() {
            try {
                return this.queue.stop(),
                this.requestTracker.onRequestsComplete()
            } catch (e) {
                Gn.error('Error stopping EventProcessor: "%s"', e.message, e)
            }
            return Promise.resolve()
        }
        ,
        t.prototype.start = function() {
            return Ss(this, void 0, void 0, function() {
                return Ds(this, function(e) {
                    return this.queue.start(),
                    [2]
                })
            })
        }
        ,
        t
    }();
    re.LogTierV1EventProcessor = Fs
}
);
var Kn = b(q => {
    "use strict";
    var xs = q && q.__createBinding || (Object.create ? function(t, e, r, n) {
        n === void 0 && (n = r),
        Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }
    : function(t, e, r, n) {
        n === void 0 && (n = r),
        t[n] = e[r]
    }
    )
      , Ee = q && q.__exportStar || function(t, e) {
        for (var r in t)
            r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && xs(e, t, r)
    }
    ;
    Object.defineProperty(q, "__esModule", {
        value: !0
    });
    Ee(Jt(), q);
    Ee(Zt(), q);
    Ee(bn(), q);
    Ee(Sn(), q);
    Ee(wn(), q);
    Ee(er(), q);
    Ee(Bn(), q)
}
);
var zn = b( (zc, rr) => {
    (function() {
        var t = this;
        function e(o, a) {
            for (var u = o.length, s = a ^ u, l = 0, c; u >= 4; )
                c = o.charCodeAt(l) & 255 | (o.charCodeAt(++l) & 255) << 8 | (o.charCodeAt(++l) & 255) << 16 | (o.charCodeAt(++l) & 255) << 24,
                c = (c & 65535) * 1540483477 + (((c >>> 16) * 1540483477 & 65535) << 16),
                c ^= c >>> 24,
                c = (c & 65535) * 1540483477 + (((c >>> 16) * 1540483477 & 65535) << 16),
                s = (s & 65535) * 1540483477 + (((s >>> 16) * 1540483477 & 65535) << 16) ^ c,
                u -= 4,
                ++l;
            switch (u) {
            case 3:
                s ^= (o.charCodeAt(l + 2) & 255) << 16;
            case 2:
                s ^= (o.charCodeAt(l + 1) & 255) << 8;
            case 1:
                s ^= o.charCodeAt(l) & 255,
                s = (s & 65535) * 1540483477 + (((s >>> 16) * 1540483477 & 65535) << 16)
            }
            return s ^= s >>> 13,
            s = (s & 65535) * 1540483477 + (((s >>> 16) * 1540483477 & 65535) << 16),
            s ^= s >>> 15,
            s >>> 0
        }
        function r(o, a) {
            var u, s, l, c, f, E, _, y, g, h;
            for (u = o.length & 3,
            s = o.length - u,
            l = a,
            f = 3432918353,
            _ = 461845907,
            h = 0; h < s; )
                g = o.charCodeAt(h) & 255 | (o.charCodeAt(++h) & 255) << 8 | (o.charCodeAt(++h) & 255) << 16 | (o.charCodeAt(++h) & 255) << 24,
                ++h,
                g = (g & 65535) * f + (((g >>> 16) * f & 65535) << 16) & 4294967295,
                g = g << 15 | g >>> 17,
                g = (g & 65535) * _ + (((g >>> 16) * _ & 65535) << 16) & 4294967295,
                l ^= g,
                l = l << 13 | l >>> 19,
                c = (l & 65535) * 5 + (((l >>> 16) * 5 & 65535) << 16) & 4294967295,
                l = (c & 65535) + 27492 + (((c >>> 16) + 58964 & 65535) << 16);
            switch (g = 0,
            u) {
            case 3:
                g ^= (o.charCodeAt(h + 2) & 255) << 16;
            case 2:
                g ^= (o.charCodeAt(h + 1) & 255) << 8;
            case 1:
                g ^= o.charCodeAt(h) & 255,
                g = (g & 65535) * f + (((g >>> 16) * f & 65535) << 16) & 4294967295,
                g = g << 15 | g >>> 17,
                g = (g & 65535) * _ + (((g >>> 16) * _ & 65535) << 16) & 4294967295,
                l ^= g
            }
            return l ^= o.length,
            l ^= l >>> 16,
            l = (l & 65535) * 2246822507 + (((l >>> 16) * 2246822507 & 65535) << 16) & 4294967295,
            l ^= l >>> 13,
            l = (l & 65535) * 3266489909 + (((l >>> 16) * 3266489909 & 65535) << 16) & 4294967295,
            l ^= l >>> 16,
            l >>> 0
        }
        var n = r;
        if (n.v2 = e,
        n.v3 = r,
        typeof rr < "u")
            rr.exports = n;
        else {
            var i = t.murmur;
            n.noConflict = function() {
                return t.murmur = i,
                n
            }
            ,
            t.murmur = n
        }
    }
    )()
}
);
var it = b(fe => {
    "use strict";
    Object.defineProperty(fe, "__esModule", {
        value: !0
    });
    fe.DEFAULT_UPDATE_INTERVAL = 5 * 60 * 1e3;
    fe.MIN_UPDATE_INTERVAL = 1e3;
    fe.DEFAULT_URL_TEMPLATE = "https://cdn.optimizely.com/datafiles/%s.json";
    fe.DEFAULT_AUTHENTICATED_URL_TEMPLATE = "https://config.optimizely.com/datafiles/auth/%s.json";
    fe.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT = [0, 8, 16, 32, 64, 128, 256, 512];
    fe.REQUEST_TIMEOUT_MS = 60 * 1e3
}
);
var jn = b(nr => {
    "use strict";
    Object.defineProperty(nr, "__esModule", {
        value: !0
    });
    var Ms = it()
      , ks = te()
      , Gs = ks.getLogger("DatafileManager")
      , Bs = "GET"
      , Ks = 4;
    function zs(t) {
        var e = t.getAllResponseHeaders();
        if (e === null)
            return {};
        var r = e.split(`\r
`)
          , n = {};
        return r.forEach(function(i) {
            var o = i.indexOf(": ");
            if (o > -1) {
                var a = i.slice(0, o)
                  , u = i.slice(o + 2);
                u.length > 0 && (n[a] = u)
            }
        }),
        n
    }
    function js(t, e) {
        Object.keys(t).forEach(function(r) {
            var n = t[r];
            e.setRequestHeader(r, n)
        })
    }
    function Hs(t, e) {
        var r = new XMLHttpRequest
          , n = new Promise(function(i, o) {
            r.open(Bs, t, !0),
            js(e, r),
            r.onreadystatechange = function() {
                if (r.readyState === Ks) {
                    var a = r.status;
                    if (a === 0) {
                        o(new Error("Request error"));
                        return
                    }
                    var u = zs(r)
                      , s = {
                        statusCode: r.status,
                        body: r.responseText,
                        headers: u
                    };
                    i(s)
                }
            }
            ,
            r.timeout = Ms.REQUEST_TIMEOUT_MS,
            r.ontimeout = function() {
                Gs.error("Request timed out")
            }
            ,
            r.send()
        }
        );
        return {
            responsePromise: n,
            abort: function() {
                r.abort()
            }
        }
    }
    nr.makeGetRequest = Hs
}
);
var Hn = b(ir => {
    "use strict";
    Object.defineProperty(ir, "__esModule", {
        value: !0
    });
    var qs = function() {
        function t() {
            this.listeners = {},
            this.listenerId = 1
        }
        return t.prototype.on = function(e, r) {
            var n = this;
            this.listeners[e] || (this.listeners[e] = {});
            var i = String(this.listenerId);
            return this.listenerId++,
            this.listeners[e][i] = r,
            function() {
                n.listeners[e] && delete n.listeners[e][i]
            }
        }
        ,
        t.prototype.emit = function(e, r) {
            var n = this.listeners[e];
            n && Object.keys(n).forEach(function(i) {
                var o = n[i];
                o(r)
            })
        }
        ,
        t.prototype.removeAllListeners = function() {
            this.listeners = {}
        }
        ,
        t
    }();
    ir.default = qs
}
);
var qn = b(ar => {
    "use strict";
    Object.defineProperty(ar, "__esModule", {
        value: !0
    });
    var or = it();
    function Ys() {
        return Math.round(Math.random() * 1e3)
    }
    var Ws = function() {
        function t() {
            this.errorCount = 0
        }
        return t.prototype.getDelay = function() {
            if (this.errorCount === 0)
                return 0;
            var e = or.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT[Math.min(or.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1, this.errorCount)];
            return e * 1e3 + Ys()
        }
        ,
        t.prototype.countError = function() {
            this.errorCount < or.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1 && this.errorCount++
        }
        ,
        t.prototype.reset = function() {
            this.errorCount = 0
        }
        ,
        t
    }();
    ar.default = Ws
}
);
var Xn = b(ge => {
    "use strict";
    var ot = ge && ge.__assign || function() {
        return ot = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
                e = arguments[r];
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            return t
        }
        ,
        ot.apply(this, arguments)
    }
      , Wn = ge && ge.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    ;
    Object.defineProperty(ge, "__esModule", {
        value: !0
    });
    var Xs = te()
      , Js = Oe()
      , Zs = Wn(Hn())
      , Ve = it()
      , Qs = Wn(qn())
      , J = Xs.getLogger("DatafileManager")
      , $s = "update";
    function eu(t) {
        return t >= Ve.MIN_UPDATE_INTERVAL
    }
    function Yn(t) {
        return t >= 200 && t < 400
    }
    var tu = {
        get: function() {
            return Promise.resolve("")
        },
        set: function() {
            return Promise.resolve()
        },
        contains: function() {
            return Promise.resolve(!1)
        },
        remove: function() {
            return Promise.resolve()
        }
    }
      , ru = function() {
        function t(e) {
            var r = this
              , n = ot(ot({}, this.getConfigDefaults()), e)
              , i = n.datafile
              , o = n.autoUpdate
              , a = o === void 0 ? !1 : o
              , u = n.sdkKey
              , s = n.updateInterval
              , l = s === void 0 ? Ve.DEFAULT_UPDATE_INTERVAL : s
              , c = n.urlTemplate
              , f = c === void 0 ? Ve.DEFAULT_URL_TEMPLATE : c
              , E = n.cache
              , _ = E === void 0 ? tu : E;
            this.cache = _,
            this.cacheKey = "opt-datafile-" + u,
            this.isReadyPromiseSettled = !1,
            this.readyPromiseResolver = function() {}
            ,
            this.readyPromiseRejecter = function() {}
            ,
            this.readyPromise = new Promise(function(y, g) {
                r.readyPromiseResolver = y,
                r.readyPromiseRejecter = g
            }
            ),
            i ? (this.currentDatafile = i,
            u || this.resolveReadyPromise()) : this.currentDatafile = "",
            this.isStarted = !1,
            this.datafileUrl = Js.sprintf(f, u),
            this.emitter = new Zs.default,
            this.autoUpdate = a,
            eu(l) ? this.updateInterval = l : (J.warn("Invalid updateInterval %s, defaulting to %s", l, Ve.DEFAULT_UPDATE_INTERVAL),
            this.updateInterval = Ve.DEFAULT_UPDATE_INTERVAL),
            this.currentTimeout = null,
            this.currentRequest = null,
            this.backoffController = new Qs.default,
            this.syncOnCurrentRequestComplete = !1
        }
        return t.prototype.get = function() {
            return this.currentDatafile
        }
        ,
        t.prototype.start = function() {
            this.isStarted || (J.debug("Datafile manager started"),
            this.isStarted = !0,
            this.backoffController.reset(),
            this.setDatafileFromCacheIfAvailable(),
            this.syncDatafile())
        }
        ,
        t.prototype.stop = function() {
            return J.debug("Datafile manager stopped"),
            this.isStarted = !1,
            this.currentTimeout && (clearTimeout(this.currentTimeout),
            this.currentTimeout = null),
            this.emitter.removeAllListeners(),
            this.currentRequest && (this.currentRequest.abort(),
            this.currentRequest = null),
            Promise.resolve()
        }
        ,
        t.prototype.onReady = function() {
            return this.readyPromise
        }
        ,
        t.prototype.on = function(e, r) {
            return this.emitter.on(e, r)
        }
        ,
        t.prototype.onRequestRejected = function(e) {
            !this.isStarted || (this.backoffController.countError(),
            e instanceof Error ? J.error("Error fetching datafile: %s", e.message, e) : typeof e == "string" ? J.error("Error fetching datafile: %s", e) : J.error("Error fetching datafile"))
        }
        ,
        t.prototype.onRequestResolved = function(e) {
            if (!!this.isStarted) {
                typeof e.statusCode < "u" && Yn(e.statusCode) ? this.backoffController.reset() : this.backoffController.countError(),
                this.trySavingLastModified(e.headers);
                var r = this.getNextDatafileFromResponse(e);
                if (r !== "")
                    if (J.info("Updating datafile from response"),
                    this.currentDatafile = r,
                    this.cache.set(this.cacheKey, r),
                    !this.isReadyPromiseSettled)
                        this.resolveReadyPromise();
                    else {
                        var n = {
                            datafile: r
                        };
                        this.emitter.emit($s, n)
                    }
            }
        }
        ,
        t.prototype.onRequestComplete = function() {
            !this.isStarted || (this.currentRequest = null,
            !this.isReadyPromiseSettled && !this.autoUpdate && this.rejectReadyPromise(new Error("Failed to become ready")),
            this.autoUpdate && this.syncOnCurrentRequestComplete && this.syncDatafile(),
            this.syncOnCurrentRequestComplete = !1)
        }
        ,
        t.prototype.syncDatafile = function() {
            var e = this
              , r = {};
            this.lastResponseLastModified && (r["if-modified-since"] = this.lastResponseLastModified),
            J.debug("Making datafile request to url %s with headers: %s", this.datafileUrl, function() {
                return JSON.stringify(r)
            }),
            this.currentRequest = this.makeGetRequest(this.datafileUrl, r);
            var n = function() {
                e.onRequestComplete()
            }
              , i = function(a) {
                e.onRequestResolved(a)
            }
              , o = function(a) {
                e.onRequestRejected(a)
            };
            this.currentRequest.responsePromise.then(i, o).then(n, n),
            this.autoUpdate && this.scheduleNextUpdate()
        }
        ,
        t.prototype.resolveReadyPromise = function() {
            this.readyPromiseResolver(),
            this.isReadyPromiseSettled = !0
        }
        ,
        t.prototype.rejectReadyPromise = function(e) {
            this.readyPromiseRejecter(e),
            this.isReadyPromiseSettled = !0
        }
        ,
        t.prototype.scheduleNextUpdate = function() {
            var e = this
              , r = this.backoffController.getDelay()
              , n = Math.max(r, this.updateInterval);
            J.debug("Scheduling sync in %s ms", n),
            this.currentTimeout = setTimeout(function() {
                e.currentRequest ? e.syncOnCurrentRequestComplete = !0 : e.syncDatafile()
            }, n)
        }
        ,
        t.prototype.getNextDatafileFromResponse = function(e) {
            return J.debug("Response status code: %s", e.statusCode),
            typeof e.statusCode > "u" || e.statusCode === 304 ? "" : Yn(e.statusCode) ? e.body : ""
        }
        ,
        t.prototype.trySavingLastModified = function(e) {
            var r = e["last-modified"] || e["Last-Modified"];
            typeof r < "u" && (this.lastResponseLastModified = r,
            J.debug("Saved last modified header value from response: %s", this.lastResponseLastModified))
        }
        ,
        t.prototype.setDatafileFromCacheIfAvailable = function() {
            var e = this;
            this.cache.get(this.cacheKey).then(function(r) {
                e.isStarted && !e.isReadyPromiseSettled && r !== "" && (J.debug("Using datafile from cache"),
                e.currentDatafile = r,
                e.resolveReadyPromise())
            })
        }
        ,
        t
    }();
    ge.default = ru
}
);
var Jn = b(_e => {
    "use strict";
    var nu = _e && _e.__extends || function() {
        var t = function(e, r) {
            return t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(n, i) {
                n.__proto__ = i
            }
            || function(n, i) {
                for (var o in i)
                    i.hasOwnProperty(o) && (n[o] = i[o])
            }
            ,
            t(e, r)
        };
        return function(e, r) {
            t(e, r);
            function n() {
                this.constructor = e
            }
            e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
            new n)
        }
    }()
      , iu = _e && _e.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    ;
    Object.defineProperty(_e, "__esModule", {
        value: !0
    });
    var ou = jn()
      , au = iu(Xn())
      , su = function(t) {
        nu(e, t);
        function e() {
            return t !== null && t.apply(this, arguments) || this
        }
        return e.prototype.makeGetRequest = function(r, n) {
            return ou.makeGetRequest(r, n)
        }
        ,
        e.prototype.getConfigDefaults = function() {
            return {
                autoUpdate: !1
            }
        }
        ,
        e
    }(au.default);
    _e.default = su
}
);
var Zn = b(sr => {
    "use strict";
    Object.defineProperty(sr, "__esModule", {
        value: !0
    });
    var uu = Jn();
    sr.HttpPollingDatafileManager = uu.default
}
);
var Ae = b(w => {
    "use strict";
    function li(t) {
        return t && typeof t == "object" && "default"in t ? t.default : t
    }
    Object.defineProperty(w, "__esModule", {
        value: !0
    });
    var F = te()
      , ft = Kn()
      , lu = li(qt())
      , cu = li(zn())
      , fu = Zn()
      , Ie = function() {
        return (Ie = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in e = arguments[r])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        ).apply(this, arguments)
    };
    function vr() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++)
            t += arguments[e].length;
        var n = Array(t)
          , i = 0;
        for (e = 0; e < r; e++)
            for (var o = arguments[e], a = 0, u = o.length; a < u; a++,
            i++)
                n[i] = o[a];
        return n
    }
    var du = Math.pow(2, 53);
    function Z(t) {
        for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
        if (!t)
            return {};
        if (typeof Object.assign == "function")
            return Object.assign.apply(Object, vr([t], e));
        for (var n = Object(t), i = 0; i < e.length; i++) {
            var o = e[i];
            if (o != null)
                for (var a in o)
                    Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a])
        }
        return n
    }
    function K(t, e) {
        return t ? fi(t, function(r) {
            return r[e]
        }) : {}
    }
    function se(t) {
        return Object.keys(t).map(function(e) {
            return t[e]
        })
    }
    function ci(t) {
        return Object.keys(t).map(function(e) {
            return [e, t[e]]
        })
    }
    function hr(t, e) {
        for (var r, n = 0, i = t; n < i.length; n++) {
            var o = i[n];
            if (e(o)) {
                r = o;
                break
            }
        }
        return r
    }
    function fi(t, e) {
        var r = {};
        return t.forEach(function(n) {
            var i = e(n);
            r[i] = n
        }),
        r
    }
    function S(t) {
        for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
        var n = 0;
        return t.replace(/%s/g, function() {
            var i = e[n++]
              , o = typeof i;
            return o === "function" ? i() : o === "string" ? i : String(i)
        })
    }
    var z, L = {
        assign: Z,
        currentTimestamp: function() {
            return Math.round(new Date().getTime())
        },
        isSafeInteger: function(t) {
            return typeof t == "number" && Math.abs(t) <= du
        },
        keyBy: K,
        uuid: function() {
            return lu()
        },
        isNumber: function(t) {
            return typeof t == "number"
        },
        getTimestamp: function() {
            return new Date().getTime()
        },
        isValidEnum: function(t, e) {
            for (var r = !1, n = Object.keys(t), i = 0; i < n.length; i++)
                if (e === t[n[i]]) {
                    r = !0;
                    break
                }
            return r
        },
        groupBy: function(t, e) {
            var r = {};
            return t.forEach(function(n) {
                var i = e(n);
                r[i] = r[i] || [],
                r[i].push(n)
            }),
            se(r)
        },
        objectValues: se,
        objectEntries: ci,
        find: hr,
        keyByUtil: fi,
        sprintf: S
    }, d = {
        NOTSET: 0,
        DEBUG: 1,
        INFO: 2,
        WARNING: 3,
        ERROR: 4
    }, O = {
        CONDITION_EVALUATOR_ERROR: "%s: Error evaluating audience condition of type %s: %s",
        DATAFILE_AND_SDK_KEY_MISSING: "%s: You must provide at least one of sdkKey or datafile. Cannot start Optimizely",
        EXPERIMENT_KEY_NOT_IN_DATAFILE: "%s: Experiment key %s is not in datafile.",
        FEATURE_NOT_IN_DATAFILE: "%s: Feature key %s is not in datafile.",
        IMPROPERLY_FORMATTED_EXPERIMENT: "%s: Experiment key %s is improperly formatted.",
        INVALID_ATTRIBUTES: "%s: Provided attributes are in an invalid format.",
        INVALID_BUCKETING_ID: "%s: Unable to generate hash for bucketing ID %s: %s",
        INVALID_DATAFILE: "%s: Datafile is invalid - property %s: %s",
        INVALID_DATAFILE_MALFORMED: "%s: Datafile is invalid because it is malformed.",
        INVALID_CONFIG: "%s: Provided Optimizely config is in an invalid format.",
        INVALID_JSON: "%s: JSON object is not valid.",
        INVALID_ERROR_HANDLER: '%s: Provided "errorHandler" is in an invalid format.',
        INVALID_EVENT_DISPATCHER: '%s: Provided "eventDispatcher" is in an invalid format.',
        INVALID_EVENT_TAGS: "%s: Provided event tags are in an invalid format.",
        INVALID_EXPERIMENT_KEY: "%s: Experiment key %s is not in datafile. It is either invalid, paused, or archived.",
        INVALID_EXPERIMENT_ID: "%s: Experiment ID %s is not in datafile.",
        INVALID_GROUP_ID: "%s: Group ID %s is not in datafile.",
        INVALID_LOGGER: '%s: Provided "logger" is in an invalid format.',
        INVALID_ROLLOUT_ID: "%s: Invalid rollout ID %s attached to feature %s",
        INVALID_USER_ID: "%s: Provided user ID is in an invalid format.",
        INVALID_USER_PROFILE_SERVICE: "%s: Provided user profile service instance is in an invalid format: %s.",
        NO_DATAFILE_SPECIFIED: "%s: No datafile specified. Cannot start optimizely.",
        NO_JSON_PROVIDED: "%s: No JSON object to validate against schema.",
        NO_VARIATION_FOR_EXPERIMENT_KEY: "%s: No variation key %s defined in datafile for experiment %s.",
        UNDEFINED_ATTRIBUTE: "%s: Provided attribute: %s has an undefined value.",
        UNRECOGNIZED_ATTRIBUTE: "%s: Unrecognized attribute %s provided. Pruning before sending event to Optimizely.",
        UNABLE_TO_CAST_VALUE: "%s: Unable to cast value %s to type %s, returning null.",
        USER_NOT_IN_FORCED_VARIATION: "%s: User %s is not in the forced variation map. Cannot remove their forced variation.",
        USER_PROFILE_LOOKUP_ERROR: '%s: Error while looking up user profile for user ID "%s": %s.',
        USER_PROFILE_SAVE_ERROR: '%s: Error while saving user profile for user ID "%s": %s.',
        VARIABLE_KEY_NOT_IN_DATAFILE: '%s: Variable with key "%s" associated with feature with key "%s" is not in datafile.',
        VARIATION_ID_NOT_IN_DATAFILE: "%s: No variation ID %s defined in datafile for experiment %s.",
        VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT: "%s: Variation ID %s is not in the datafile.",
        INVALID_INPUT_FORMAT: "%s: Provided %s is in an invalid format.",
        INVALID_DATAFILE_VERSION: "%s: This version of the JavaScript SDK does not support the given datafile version: %s",
        INVALID_VARIATION_KEY: "%s: Provided variation key is in an invalid format."
    }, p = {
        ACTIVATE_USER: "%s: Activating user %s in experiment %s.",
        DISPATCH_CONVERSION_EVENT: "%s: Dispatching conversion event to URL %s with params %s.",
        DISPATCH_IMPRESSION_EVENT: "%s: Dispatching impression event to URL %s with params %s.",
        DEPRECATED_EVENT_VALUE: "%s: Event value is deprecated in %s call.",
        EVENT_KEY_NOT_FOUND: "%s: Event key %s is not in datafile.",
        EXPERIMENT_NOT_RUNNING: "%s: Experiment %s is not running.",
        FEATURE_ENABLED_FOR_USER: "%s: Feature %s is enabled for user %s.",
        FEATURE_NOT_ENABLED_FOR_USER: "%s: Feature %s is not enabled for user %s.",
        FEATURE_HAS_NO_EXPERIMENTS: "%s: Feature %s is not attached to any experiments.",
        FAILED_TO_PARSE_VALUE: '%s: Failed to parse event value "%s" from event tags.',
        FAILED_TO_PARSE_REVENUE: '%s: Failed to parse revenue value "%s" from event tags.',
        FORCED_BUCKETING_FAILED: "%s: Variation key %s is not in datafile. Not activating user %s.",
        INVALID_OBJECT: "%s: Optimizely object is not valid. Failing %s.",
        INVALID_CLIENT_ENGINE: "%s: Invalid client engine passed: %s. Defaulting to node-sdk.",
        INVALID_DEFAULT_DECIDE_OPTIONS: "%s: Provided default decide options is not an array.",
        INVALID_DECIDE_OPTIONS: "%s: Provided decide options is not an array. Using default decide options.",
        INVALID_VARIATION_ID: "%s: Bucketed into an invalid variation ID. Returning null.",
        NOTIFICATION_LISTENER_EXCEPTION: "%s: Notification listener for (%s) threw exception: %s",
        NO_ROLLOUT_EXISTS: "%s: There is no rollout of feature %s.",
        NOT_ACTIVATING_USER: "%s: Not activating user %s for experiment %s.",
        NOT_TRACKING_USER: "%s: Not tracking user %s.",
        PARSED_REVENUE_VALUE: '%s: Parsed revenue value "%s" from event tags.',
        PARSED_NUMERIC_VALUE: '%s: Parsed event value "%s" from event tags.',
        RETURNING_STORED_VARIATION: '%s: Returning previously activated variation "%s" of experiment "%s" for user "%s" from user profile.',
        ROLLOUT_HAS_NO_EXPERIMENTS: "%s: Rollout of feature %s has no experiments",
        SAVED_VARIATION: '%s: Saved variation "%s" of experiment "%s" for user "%s".',
        SAVED_VARIATION_NOT_FOUND: "%s: User %s was previously bucketed into variation with ID %s for experiment %s, but no matching variation was found.",
        SHOULD_NOT_DISPATCH_ACTIVATE: '%s: Experiment %s is not in "Running" state. Not activating user.',
        SKIPPING_JSON_VALIDATION: "%s: Skipping JSON schema validation.",
        TRACK_EVENT: "%s: Tracking event %s for user %s.",
        UNRECOGNIZED_DECIDE_OPTION: "%s: Unrecognized decide option %s provided.",
        USER_ASSIGNED_TO_EXPERIMENT_BUCKET: "%s: Assigned bucket %s to user with bucketing ID %s.",
        USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is in experiment %s of group %s.",
        USER_BUCKETED_INTO_TARGETING_RULE: "%s: User %s bucketed into targeting rule %s.",
        USER_IN_FEATURE_EXPERIMENT: "%s: User %s is in variation %s of experiment %s on the feature %s.",
        USER_IN_ROLLOUT: "%s: User %s is in rollout of feature %s.",
        USER_NOT_BUCKETED_INTO_EVERYONE_TARGETING_RULE: "%s: User %s not bucketed into everyone targeting rule due to traffic allocation.",
        USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is not in experiment %s of group %s.",
        USER_NOT_BUCKETED_INTO_ANY_EXPERIMENT_IN_GROUP: "%s: User %s is not in any experiment of group %s.",
        USER_NOT_BUCKETED_INTO_TARGETING_RULE: "%s User %s not bucketed into targeting rule %s due to traffic allocation. Trying everyone rule.",
        USER_NOT_IN_FEATURE_EXPERIMENT: "%s: User %s is not in any experiment on the feature %s.",
        USER_NOT_IN_ROLLOUT: "%s: User %s is not in rollout of feature %s.",
        USER_FORCED_IN_VARIATION: "%s: User %s is forced in variation %s.",
        USER_MAPPED_TO_FORCED_VARIATION: "%s: Set variation %s for experiment %s and user %s in the forced variation map.",
        USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s does not meet conditions for targeting rule %s.",
        USER_MEETS_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s meets conditions for targeting rule %s.",
        USER_HAS_VARIATION: "%s: User %s is in variation %s of experiment %s.",
        USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
        USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s) and user (%s) in the forced decision map.",
        USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
        USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s) and user (%s) in the forced decision map.",
        USER_HAS_FORCED_VARIATION: "%s: Variation %s is mapped to experiment %s and user %s in the forced variation map.",
        USER_HAS_NO_VARIATION: "%s: User %s is in no variation of experiment %s.",
        USER_HAS_NO_FORCED_VARIATION: "%s: User %s is not in the forced variation map.",
        USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT: "%s: No experiment %s mapped to user %s in the forced variation map.",
        USER_NOT_IN_ANY_EXPERIMENT: "%s: User %s is not in any experiment of group %s.",
        USER_NOT_IN_EXPERIMENT: "%s: User %s does not meet conditions to be in experiment %s.",
        USER_RECEIVED_DEFAULT_VARIABLE_VALUE: '%s: User "%s" is not in any variation or rollout rule. Returning default value for variable "%s" of feature flag "%s".',
        FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Feature "%s" is not enabled for user %s. Returning the default variable value "%s".',
        VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Variable "%s" is not used in variation "%s". Returning default value.',
        USER_RECEIVED_VARIABLE_VALUE: '%s: Got variable value "%s" for variable "%s" of feature flag "%s"',
        VALID_DATAFILE: "%s: Datafile is valid.",
        VALID_USER_PROFILE_SERVICE: "%s: Valid user profile service provided.",
        VARIATION_REMOVED_FOR_USER: "%s: Variation mapped to experiment %s has been removed for user %s.",
        VARIABLE_REQUESTED_WITH_WRONG_TYPE: '%s: Requested variable type "%s", but variable is of type "%s". Use correct API to retrieve value. Returning None.',
        VALID_BUCKETING_ID: '%s: BucketingId is valid: "%s"',
        BUCKETING_ID_NOT_STRING: "%s: BucketingID attribute is not a string. Defaulted to userId",
        EVALUATING_AUDIENCE: '%s: Starting to evaluate audience "%s" with conditions: %s.',
        EVALUATING_AUDIENCES_COMBINED: '%s: Evaluating audiences for %s "%s": %s.',
        AUDIENCE_EVALUATION_RESULT: '%s: Audience "%s" evaluated to %s.',
        AUDIENCE_EVALUATION_RESULT_COMBINED: "%s: Audiences for %s %s collectively evaluated to %s.",
        MISSING_ATTRIBUTE_VALUE: '%s: Audience condition %s evaluated to UNKNOWN because no value was passed for user attribute "%s".',
        UNEXPECTED_CONDITION_VALUE: "%s: Audience condition %s evaluated to UNKNOWN because the condition value is not supported.",
        UNEXPECTED_TYPE: '%s: Audience condition %s evaluated to UNKNOWN because a value of type "%s" was passed for user attribute "%s".',
        UNEXPECTED_TYPE_NULL: '%s: Audience condition %s evaluated to UNKNOWN because a null value was passed for user attribute "%s".',
        UNKNOWN_CONDITION_TYPE: "%s: Audience condition %s has an unknown condition type. You may need to upgrade to a newer release of the Optimizely SDK.",
        UNKNOWN_MATCH_TYPE: "%s: Audience condition %s uses an unknown match type. You may need to upgrade to a newer release of the Optimizely SDK.",
        UPDATED_OPTIMIZELY_CONFIG: "%s: Updated Optimizely config to revision %s (project id %s)",
        OUT_OF_BOUNDS: '%s: Audience condition %s evaluated to UNKNOWN because the number value for user attribute "%s" is not in the range [-2^53, +2^53].',
        UNABLE_TO_ATTACH_UNLOAD: '%s: unable to bind optimizely.close() to page unload event: "%s"'
    }, ne = {
        BOT_FILTERING: "$opt_bot_filtering",
        BUCKETING_ID: "$opt_bucketing_id",
        STICKY_BUCKETING_KEY: "$opt_experiment_bucket_map",
        USER_AGENT: "$opt_user_agent",
        FORCED_DECISION_NULL_RULE_KEY: "$opt_null_rule_key"
    }, ve = {
        AB_TEST: "ab-test",
        FEATURE: "feature",
        FEATURE_TEST: "feature-test",
        FEATURE_VARIABLE: "feature-variable",
        ALL_FEATURE_VARIABLES: "all-feature-variables",
        FLAG: "flag"
    }, M = {
        FEATURE_TEST: "feature-test",
        ROLLOUT: "rollout",
        EXPERIMENT: "experiment"
    }, dr = {
        RULE: "rule",
        EXPERIMENT: "experiment"
    }, W = {
        BOOLEAN: "boolean",
        DOUBLE: "double",
        INTEGER: "integer",
        STRING: "string",
        JSON: "json"
    }, dt = {
        V2: "2",
        V3: "3",
        V4: "4"
    }, pr = {
        SDK_NOT_READY: "Optimizely SDK not configured properly yet.",
        FLAG_KEY_INVALID: 'No flag was found for key "%s".',
        VARIABLE_VALUE_INVALID: 'Variable value for key "%s" is invalid or wrong type.'
    };
    (function(t) {
        t.ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event",
        t.DECISION = "DECISION:type, userId, attributes, decisionInfo",
        t.LOG_EVENT = "LOG_EVENT:logEvent",
        t.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE",
        t.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event"
    }
    )(z || (z = {}));
    var di = Object.freeze({
        __proto__: null,
        LOG_LEVEL: d,
        ERROR_MESSAGES: O,
        LOG_MESSAGES: p,
        CONTROL_ATTRIBUTES: ne,
        JAVASCRIPT_CLIENT_ENGINE: "javascript-sdk",
        NODE_CLIENT_ENGINE: "node-sdk",
        REACT_CLIENT_ENGINE: "react-sdk",
        REACT_NATIVE_CLIENT_ENGINE: "react-native-sdk",
        REACT_NATIVE_JS_CLIENT_ENGINE: "react-native-js-sdk",
        NODE_CLIENT_VERSION: "4.9.2",
        DECISION_NOTIFICATION_TYPES: ve,
        DECISION_SOURCES: M,
        AUDIENCE_EVALUATION_TYPES: dr,
        FEATURE_VARIABLE_TYPES: W,
        DATAFILE_VERSIONS: dt,
        DECISION_MESSAGES: pr,
        get NOTIFICATION_TYPES() {
            return z
        }
    })
      , he = "CONFIG_VALIDATOR"
      , pu = [dt.V2, dt.V3, dt.V4]
      , Eu = function(t) {
        if (typeof t == "object" && t !== null) {
            var e = t
              , r = e.errorHandler
              , n = e.eventDispatcher
              , i = e.logger;
            if (r && typeof r.handleError != "function")
                throw new Error(S(O.INVALID_ERROR_HANDLER, he));
            if (n && typeof n.dispatchEvent != "function")
                throw new Error(S(O.INVALID_EVENT_DISPATCHER, he));
            if (i && typeof i.log != "function")
                throw new Error(S(O.INVALID_LOGGER, he));
            return !0
        }
        throw new Error(S(O.INVALID_CONFIG, he))
    }
      , gu = function(t) {
        if (!t)
            throw new Error(S(O.NO_DATAFILE_SPECIFIED, he));
        if (typeof t == "string")
            try {
                t = JSON.parse(t)
            } catch {
                throw new Error(S(O.INVALID_DATAFILE_MALFORMED, he))
            }
        if (typeof t == "object" && !Array.isArray(t) && t !== null && pu.indexOf(t.version) === -1)
            throw new Error(S(O.INVALID_DATAFILE_VERSION, he, t.version));
        return t
    }
      , pi = {
        handleError: function() {}
    }
      , _u = function(t) {
        return Object.keys(t).map(function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
        }).join("&")
    }
      , Ir = {
        dispatchEvent: function(t, e) {
            var r, n = t.params, i = t.url;
            t.httpVerb === "POST" ? ((r = new XMLHttpRequest).open("POST", i, !0),
            r.setRequestHeader("Content-Type", "application/json"),
            r.onreadystatechange = function() {
                if (r.readyState === 4 && e && typeof e == "function")
                    try {
                        e({
                            statusCode: r.status
                        })
                    } catch {}
            }
            ,
            r.send(JSON.stringify(n))) : (i += "?wxhr=true",
            n && (i += "&" + _u(n)),
            (r = new XMLHttpRequest).open("GET", i, !0),
            r.onreadystatechange = function() {
                if (r.readyState === 4 && e && typeof e == "function")
                    try {
                        e({
                            statusCode: r.status
                        })
                    } catch {}
            }
            ,
            r.send())
        }
    }
      , Qn = function() {
        function t() {}
        return t.prototype.log = function() {}
        ,
        t
    }();
    function Ei(t) {
        return new F.ConsoleLogHandler(t)
    }
    var $n, Fe, gi = Object.freeze({
        __proto__: null,
        NoOpLogger: Qn,
        createLogger: Ei,
        createNoOpLogger: function() {
            return new Qn
        }
    });
    function ei(t, e, r) {
        return {
            variationKey: null,
            enabled: !1,
            variables: {},
            ruleKey: null,
            flagKey: t,
            userContext: e,
            reasons: r
        }
    }
    (function(t) {
        t.BOOLEAN = "boolean",
        t.DOUBLE = "double",
        t.INTEGER = "integer",
        t.STRING = "string",
        t.JSON = "json"
    }
    )($n || ($n = {})),
    (Fe = w.OptimizelyDecideOption || (w.OptimizelyDecideOption = {})).DISABLE_DECISION_EVENT = "DISABLE_DECISION_EVENT",
    Fe.ENABLED_FLAGS_ONLY = "ENABLED_FLAGS_ONLY",
    Fe.IGNORE_USER_PROFILE_SERVICE = "IGNORE_USER_PROFILE_SERVICE",
    Fe.INCLUDE_REASONS = "INCLUDE_REASONS",
    Fe.EXCLUDE_VARIABLES = "EXCLUDE_VARIABLES";
    var vu = function() {
        function t(e) {
            var r, n = e.optimizely, i = e.userId, o = e.attributes;
            this.optimizely = n,
            this.userId = i,
            this.attributes = (r = Ie({}, o)) !== null && r !== void 0 ? r : {},
            this.forcedDecisionsMap = {}
        }
        return t.prototype.setAttribute = function(e, r) {
            this.attributes[e] = r
        }
        ,
        t.prototype.getUserId = function() {
            return this.userId
        }
        ,
        t.prototype.getAttributes = function() {
            return Ie({}, this.attributes)
        }
        ,
        t.prototype.getOptimizely = function() {
            return this.optimizely
        }
        ,
        t.prototype.decide = function(e, r) {
            return r === void 0 && (r = []),
            this.optimizely.decide(this.cloneUserContext(), e, r)
        }
        ,
        t.prototype.decideForKeys = function(e, r) {
            return r === void 0 && (r = []),
            this.optimizely.decideForKeys(this.cloneUserContext(), e, r)
        }
        ,
        t.prototype.decideAll = function(e) {
            return e === void 0 && (e = []),
            this.optimizely.decideAll(this.cloneUserContext(), e)
        }
        ,
        t.prototype.trackEvent = function(e, r) {
            this.optimizely.track(e, this.userId, this.attributes, r)
        }
        ,
        t.prototype.setForcedDecision = function(e, r) {
            var n, i = e.flagKey, o = (n = e.ruleKey) !== null && n !== void 0 ? n : ne.FORCED_DECISION_NULL_RULE_KEY, a = {
                variationKey: r.variationKey
            };
            return this.forcedDecisionsMap[i] || (this.forcedDecisionsMap[i] = {}),
            this.forcedDecisionsMap[i][o] = a,
            !0
        }
        ,
        t.prototype.getForcedDecision = function(e) {
            return this.findForcedDecision(e)
        }
        ,
        t.prototype.removeForcedDecision = function(e) {
            var r, n = (r = e.ruleKey) !== null && r !== void 0 ? r : ne.FORCED_DECISION_NULL_RULE_KEY, i = e.flagKey, o = !1;
            return this.forcedDecisionsMap.hasOwnProperty(i) && (this.forcedDecisionsMap[i].hasOwnProperty(n) && (delete this.forcedDecisionsMap[i][n],
            o = !0),
            Object.keys(this.forcedDecisionsMap[i]).length === 0 && delete this.forcedDecisionsMap[i]),
            o
        }
        ,
        t.prototype.removeAllForcedDecisions = function() {
            return this.forcedDecisionsMap = {},
            !0
        }
        ,
        t.prototype.findForcedDecision = function(e) {
            var r, n = (r = e.ruleKey) !== null && r !== void 0 ? r : ne.FORCED_DECISION_NULL_RULE_KEY, i = e.flagKey;
            if (this.forcedDecisionsMap.hasOwnProperty(e.flagKey)) {
                var o = this.forcedDecisionsMap[i];
                if (o.hasOwnProperty(n))
                    return {
                        variationKey: o[n].variationKey
                    }
            }
            return null
        }
        ,
        t.prototype.cloneUserContext = function() {
            var e = new t({
                optimizely: this.getOptimizely(),
                userId: this.getUserId(),
                attributes: this.getAttributes()
            });
            return Object.keys(this.forcedDecisionsMap).length > 0 && (e.forcedDecisionsMap = Ie({}, this.forcedDecisionsMap)),
            e
        }
        ,
        t
    }()
      , _i = ["and", "or", "not"];
    function Me(t, e) {
        if (Array.isArray(t)) {
            var r = t[0]
              , n = t.slice(1);
            switch (typeof r == "string" && _i.indexOf(r) === -1 && (r = "or",
            n = t),
            r) {
            case "and":
                return function(i, o) {
                    var a = !1;
                    if (Array.isArray(i)) {
                        for (var u = 0; u < i.length; u++) {
                            var s = Me(i[u], o);
                            if (s === !1)
                                return !1;
                            s === null && (a = !0)
                        }
                        return !a || null
                    }
                    return null
                }(n, e);
            case "not":
                return function(i, o) {
                    if (Array.isArray(i) && i.length > 0) {
                        var a = Me(i[0], o);
                        return a === null ? null : !a
                    }
                    return null
                }(n, e);
            default:
                return function(i, o) {
                    var a = !1;
                    if (Array.isArray(i)) {
                        for (var u = 0; u < i.length; u++) {
                            var s = Me(i[u], o);
                            if (s === !0)
                                return !0;
                            s === null && (a = !0)
                        }
                        return !!a && null
                    }
                    return null
                }(n, e)
            }
        }
        return e(t)
    }
    var hu = function() {
        function t(e, r) {
            var n, i;
            this.sdkKey = (n = e.sdkKey) !== null && n !== void 0 ? n : "",
            this.environmentKey = (i = e.environmentKey) !== null && i !== void 0 ? i : "",
            this.attributes = e.attributes,
            this.audiences = t.getAudiences(e),
            this.events = e.events,
            this.revision = e.revision;
            var o = (e.featureFlags || []).reduce(function(u, s) {
                return u[s.id] = s.variables,
                u
            }, {})
              , a = t.getExperimentsMapById(e, o);
            this.experimentsMap = t.getExperimentsKeyMap(a),
            this.featuresMap = t.getFeaturesMap(e, o, a),
            this.datafile = r
        }
        return t.prototype.getDatafile = function() {
            return this.datafile
        }
        ,
        t.getAudiences = function(e) {
            var r = []
              , n = [];
            return (e.typedAudiences || []).forEach(function(i) {
                r.push({
                    id: i.id,
                    conditions: JSON.stringify(i.conditions),
                    name: i.name
                }),
                n.push(i.id)
            }),
            (e.audiences || []).forEach(function(i) {
                n.indexOf(i.id) === -1 && i.id != "$opt_dummy_audience" && r.push({
                    id: i.id,
                    conditions: JSON.stringify(i.conditions),
                    name: i.name
                })
            }),
            r
        }
        ,
        t.getSerializedAudiences = function(e, r) {
            var n = "";
            if (e) {
                var i = "";
                e.forEach(function(o) {
                    var a = "";
                    if (o instanceof Array)
                        a = "(" + (a = t.getSerializedAudiences(o, r)) + ")";
                    else if (_i.indexOf(o) > -1)
                        i = o.toUpperCase();
                    else {
                        var u = r[o] ? r[o].name : o;
                        n || i === "NOT" ? (i = i === "" ? "OR" : i,
                        n = n === "" ? i + ' "' + r[o].name + '"' : n.concat(" " + i + ' "' + u + '"')) : n = '"' + u + '"'
                    }
                    a !== "" && (n !== "" || i === "NOT" ? (i = i === "" ? "OR" : i,
                    n = n === "" ? i + " " + a : n.concat(" " + i + " " + a)) : n = n.concat(a))
                })
            }
            return n
        }
        ,
        t.getExperimentAudiences = function(e, r) {
            return e.audienceConditions ? t.getSerializedAudiences(e.audienceConditions, r.audiencesById) : ""
        }
        ,
        t.mergeFeatureVariables = function(e, r, n, i, o) {
            var a = (e[n] || []).reduce(function(u, s) {
                return u[s.key] = {
                    id: s.id,
                    key: s.key,
                    type: s.type,
                    value: s.defaultValue
                },
                u
            }, {});
            return (i || []).forEach(function(u) {
                var s = r[u.id]
                  , l = {
                    id: u.id,
                    key: s.key,
                    type: s.type,
                    value: o ? u.value : s.defaultValue
                };
                a[s.key] = l
            }),
            a
        }
        ,
        t.getVariationsMap = function(e, r, n, i) {
            return e.reduce(function(o, a) {
                var u = t.mergeFeatureVariables(r, n, i, a.variables, a.featureEnabled);
                return o[a.key] = {
                    id: a.id,
                    key: a.key,
                    featureEnabled: a.featureEnabled,
                    variablesMap: u
                },
                o
            }, {})
        }
        ,
        t.getVariableIdMap = function(e) {
            return (e.featureFlags || []).reduce(function(r, n) {
                return n.variables.forEach(function(i) {
                    r[i.id] = i
                }),
                r
            }, {})
        }
        ,
        t.getDeliveryRules = function(e, r, n, i) {
            var o = t.getVariableIdMap(e);
            return i.map(function(a) {
                return {
                    id: a.id,
                    key: a.key,
                    audiences: t.getExperimentAudiences(a, e),
                    variationsMap: t.getVariationsMap(a.variations, r, o, n)
                }
            })
        }
        ,
        t.getRolloutExperimentIds = function(e) {
            var r = [];
            return (e || []).forEach(function(n) {
                n.experiments.forEach(function(i) {
                    r.push(i.id)
                })
            }),
            r
        }
        ,
        t.getExperimentsMapById = function(e, r) {
            var n = t.getVariableIdMap(e)
              , i = this.getRolloutExperimentIds(e.rollouts);
            return (e.experiments || []).reduce(function(o, a) {
                if (i.indexOf(a.id) === -1) {
                    var u = e.experimentFeatureMap[a.id]
                      , s = "";
                    u && u.length > 0 && (s = u[0]);
                    var l = t.getVariationsMap(a.variations, r, n, s.toString());
                    o[a.id] = {
                        id: a.id,
                        key: a.key,
                        audiences: t.getExperimentAudiences(a, e),
                        variationsMap: l
                    }
                }
                return o
            }, {})
        }
        ,
        t.getExperimentsKeyMap = function(e) {
            var r = {};
            for (var n in e) {
                var i = e[n];
                r[i.key] = i
            }
            return r
        }
        ,
        t.getFeaturesMap = function(e, r, n) {
            var i = {};
            return e.featureFlags.forEach(function(o) {
                var a = {}
                  , u = [];
                o.experimentIds.forEach(function(f) {
                    var E = n[f];
                    E && (a[E.key] = E),
                    u.push(n[f])
                });
                var s = (o.variables || []).reduce(function(f, E) {
                    return f[E.key] = {
                        id: E.id,
                        key: E.key,
                        type: E.type,
                        value: E.defaultValue
                    },
                    f
                }, {})
                  , l = []
                  , c = e.rolloutIdMap[o.rolloutId];
                c && (l = t.getDeliveryRules(e, r, o.id, c.experiments)),
                i[o.key] = {
                    id: o.id,
                    key: o.key,
                    experimentRules: u,
                    deliveryRules: l,
                    experimentsMap: a,
                    variablesMap: s
                }
            }),
            i
        }
        ,
        t
    }()
      , k = "PROJECT_CONFIG"
      , Iu = function(t, e) {
        e === void 0 && (e = null);
        var r, n, i, o, a = ((o = Z({}, r = t)).audiences = (r.audiences || []).map(function(u) {
            return Z({}, u)
        }),
        o.experiments = (r.experiments || []).map(function(u) {
            return Z({}, u)
        }),
        o.featureFlags = (r.featureFlags || []).map(function(u) {
            return Z({}, u)
        }),
        o.groups = (r.groups || []).map(function(u) {
            var s = Z({}, u);
            return s.experiments = (u.experiments || []).map(function(l) {
                return Z({}, l)
            }),
            s
        }),
        o.rollouts = (r.rollouts || []).map(function(u) {
            var s = Z({}, u);
            return s.experiments = (u.experiments || []).map(function(l) {
                return Z({}, l)
            }),
            s
        }),
        o.environmentKey = (n = r.environmentKey) !== null && n !== void 0 ? n : "",
        o.sdkKey = (i = r.sdkKey) !== null && i !== void 0 ? i : "",
        o);
        return a.__datafileStr = e === null ? JSON.stringify(t) : e,
        (a.audiences || []).forEach(function(u) {
            u.conditions = JSON.parse(u.conditions)
        }),
        a.audiencesById = K(a.audiences, "id"),
        Z(a.audiencesById, K(a.typedAudiences, "id")),
        a.attributeKeyMap = K(a.attributes, "key"),
        a.eventKeyMap = K(a.events, "key"),
        a.groupIdMap = K(a.groups, "id"),
        Object.keys(a.groupIdMap || {}).forEach(function(u) {
            (a.groupIdMap[u].experiments || []).forEach(function(s) {
                a.experiments.push(Z(s, {
                    groupId: u
                }))
            })
        }),
        a.rolloutIdMap = K(a.rollouts || [], "id"),
        se(a.rolloutIdMap || {}).forEach(function(u) {
            (u.experiments || []).forEach(function(s) {
                a.experiments.push(s),
                s.variationKeyMap = K(s.variations, "key")
            })
        }),
        a.experimentKeyMap = K(a.experiments, "key"),
        a.experimentIdMap = K(a.experiments, "id"),
        a.variationIdMap = {},
        a.variationVariableUsageMap = {},
        (a.experiments || []).forEach(function(u) {
            u.variationKeyMap = K(u.variations, "key"),
            Z(a.variationIdMap, K(u.variations, "id")),
            se(u.variationKeyMap || {}).forEach(function(s) {
                s.variables && (a.variationVariableUsageMap[s.id] = K(s.variables, "id"))
            })
        }),
        a.experimentFeatureMap = {},
        a.featureKeyMap = K(a.featureFlags || [], "key"),
        se(a.featureKeyMap || {}).forEach(function(u) {
            u.variables.forEach(function(s) {
                s.type === W.STRING && s.subType === W.JSON && (s.type = W.JSON,
                delete s.subType)
            }),
            u.variableKeyMap = K(u.variables, "key"),
            (u.experimentIds || []).forEach(function(s) {
                a.experimentFeatureMap[s] ? a.experimentFeatureMap[s].push(u.id) : a.experimentFeatureMap[s] = [u.id]
            })
        }),
        a.flagRulesMap = {},
        (a.featureFlags || []).forEach(function(u) {
            var s = [];
            u.experimentIds.forEach(function(c) {
                var f = a.experimentIdMap[c];
                f && s.push(f)
            });
            var l = a.rolloutIdMap[u.rolloutId];
            l && s.push.apply(s, l.experiments),
            a.flagRulesMap[u.key] = s
        }),
        a.flagVariationsMap = {},
        ci(a.flagRulesMap || {}).forEach(function(u) {
            var s = u[0]
              , l = u[1]
              , c = [];
            l.forEach(function(f) {
                f.variations.forEach(function(E) {
                    hr(c, function(_) {
                        return _.id === E.id
                    }) || c.push(E)
                })
            }),
            a.flagVariationsMap[s] = c
        }),
        a
    }
      , vi = function(t, e) {
        var r = t.experimentIdMap[e];
        if (!r)
            throw new Error(S(O.INVALID_EXPERIMENT_ID, k, e));
        return r.layerId
    }
      , hi = function(t, e, r) {
        var n = t.attributeKeyMap[e]
          , i = e.indexOf("$opt_") === 0;
        return n ? (i && r.log(d.WARNING, "Attribute %s unexpectedly has reserved prefix %s; using attribute ID instead of reserved attribute name.", e, "$opt_"),
        n.id) : i ? e : (r.log(d.DEBUG, O.UNRECOGNIZED_ATTRIBUTE, k, e),
        null)
    }
      , Ii = function(t, e) {
        var r = t.eventKeyMap[e];
        return r ? r.id : null
    }
      , mi = function(t, e) {
        var r = t.experimentKeyMap[e];
        if (!r)
            throw new Error(S(O.INVALID_EXPERIMENT_KEY, k, e));
        return r.status
    }
      , yi = function(t, e) {
        return t.variationIdMap.hasOwnProperty(e) ? t.variationIdMap[e].key : null
    }
      , Er = function(t, e) {
        if (t.experimentKeyMap.hasOwnProperty(e)) {
            var r = t.experimentKeyMap[e];
            if (r)
                return r
        }
        throw new Error(S(O.EXPERIMENT_KEY_NOT_IN_DATAFILE, k, e))
    }
      , mu = function(t, e) {
        var r = t.experimentIdMap[e];
        if (!r)
            throw new Error(S(O.INVALID_EXPERIMENT_ID, k, e));
        return r.trafficAllocation
    }
      , yu = function(t, e, r) {
        if (t.experimentIdMap.hasOwnProperty(e)) {
            var n = t.experimentIdMap[e];
            if (n)
                return n
        }
        return r.log(d.ERROR, O.INVALID_EXPERIMENT_ID, k, e),
        null
    }
      , ti = function(t, e, r) {
        if (!t)
            return null;
        var n = hr(t.flagVariationsMap[e], function(i) {
            return i.key === r
        });
        return n || null
    }
      , ur = function(t, e, r) {
        if (t.featureKeyMap.hasOwnProperty(e)) {
            var n = t.featureKeyMap[e];
            if (n)
                return n
        }
        return r.log(d.ERROR, O.FEATURE_NOT_IN_DATAFILE, k, e),
        null
    }
      , Oi = function(t) {
        return t.__datafileStr
    }
      , Ri = function(t) {
        var e;
        try {
            e = gu(t.datafile)
        } catch (n) {
            return {
                configObj: null,
                error: n
            }
        }
        if (t.jsonSchemaValidator)
            try {
                t.jsonSchemaValidator.validate(e),
                t.logger.log(d.INFO, p.VALID_DATAFILE, k)
            } catch (n) {
                return {
                    configObj: null,
                    error: n
                }
            }
        else
            t.logger.log(d.INFO, p.SKIPPING_JSON_VALIDATION, k);
        var r = [e];
        return typeof t.datafile == "string" && r.push(t.datafile),
        {
            configObj: Iu.apply(void 0, r),
            error: null
        }
    }
      , ri = function(t) {
        return !!t.sendFlagDecisions
    }
      , at = F.getLogger();
    function Ne(t, e) {
        return t instanceof Error ? t.message : e || "Unknown error"
    }
    var Ou = function() {
        function t(e) {
            this.updateListeners = [],
            this.configObj = null,
            this.optimizelyConfigObj = null,
            this.datafileManager = null;
            try {
                if (this.jsonSchemaValidator = e.jsonSchemaValidator,
                !e.datafile && !e.sdkKey) {
                    var r = new Error(S(O.DATAFILE_AND_SDK_KEY_MISSING, "PROJECT_CONFIG_MANAGER"));
                    return this.readyPromise = Promise.resolve({
                        success: !1,
                        reason: Ne(r)
                    }),
                    void at.error(r)
                }
                var n = null;
                e.datafile && (n = this.handleNewDatafile(e.datafile)),
                e.sdkKey && e.datafileManager ? (this.datafileManager = e.datafileManager,
                this.datafileManager.start(),
                this.readyPromise = this.datafileManager.onReady().then(this.onDatafileManagerReadyFulfill.bind(this), this.onDatafileManagerReadyReject.bind(this)),
                this.datafileManager.on("update", this.onDatafileManagerUpdate.bind(this))) : this.configObj ? this.readyPromise = Promise.resolve({
                    success: !0
                }) : this.readyPromise = Promise.resolve({
                    success: !1,
                    reason: Ne(n, "Invalid datafile")
                })
            } catch (i) {
                at.error(i),
                this.readyPromise = Promise.resolve({
                    success: !1,
                    reason: Ne(i, "Error in initialize")
                })
            }
        }
        return t.prototype.onDatafileManagerReadyFulfill = function() {
            if (this.datafileManager) {
                var e = this.handleNewDatafile(this.datafileManager.get());
                return e ? {
                    success: !1,
                    reason: Ne(e)
                } : {
                    success: !0
                }
            }
            return {
                success: !1,
                reason: Ne(null, "Datafile manager is not provided")
            }
        }
        ,
        t.prototype.onDatafileManagerReadyReject = function(e) {
            return {
                success: !1,
                reason: Ne(e, "Failed to become ready")
            }
        }
        ,
        t.prototype.onDatafileManagerUpdate = function() {
            this.datafileManager && this.handleNewDatafile(this.datafileManager.get())
        }
        ,
        t.prototype.handleNewDatafile = function(e) {
            var r = Ri({
                datafile: e,
                jsonSchemaValidator: this.jsonSchemaValidator,
                logger: at
            })
              , n = r.configObj
              , i = r.error;
            if (i)
                at.error(i);
            else {
                var o = this.configObj ? this.configObj.revision : "null";
                n && o !== n.revision && (this.configObj = n,
                this.optimizelyConfigObj = null,
                this.updateListeners.forEach(function(a) {
                    return a(n)
                }))
            }
            return i
        }
        ,
        t.prototype.getConfig = function() {
            return this.configObj
        }
        ,
        t.prototype.getOptimizelyConfig = function() {
            var e, r;
            return !this.optimizelyConfigObj && this.configObj && (this.optimizelyConfigObj = (e = this.configObj,
            r = Oi(this.configObj),
            new hu(e,r))),
            this.optimizelyConfigObj
        }
        ,
        t.prototype.onReady = function() {
            return this.readyPromise
        }
        ,
        t.prototype.onUpdate = function(e) {
            var r = this;
            return this.updateListeners.push(e),
            function() {
                var n = r.updateListeners.indexOf(e);
                n > -1 && r.updateListeners.splice(n, 1)
            }
        }
        ,
        t.prototype.stop = function() {
            this.datafileManager && this.datafileManager.stop(),
            this.updateListeners = []
        }
        ,
        t
    }()
      , Ru = Math.pow(2, 32)
      , ni = function(t) {
        var e = []
          , r = t.experimentIdMap[t.experimentId].groupId;
        if (r) {
            var n = t.groupIdMap[r];
            if (!n)
                throw new Error(S(O.INVALID_GROUP_ID, "BUCKETER", r));
            if (n.policy === "random") {
                var i = Tu(n, t.bucketingId, t.userId, t.logger);
                if (i === null)
                    return t.logger.log(d.INFO, p.USER_NOT_IN_ANY_EXPERIMENT, "BUCKETER", t.userId, r),
                    e.push([p.USER_NOT_IN_ANY_EXPERIMENT, "BUCKETER", t.userId, r]),
                    {
                        result: null,
                        reasons: e
                    };
                if (i !== t.experimentId)
                    return t.logger.log(d.INFO, p.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", t.userId, t.experimentKey, r),
                    e.push([p.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", t.userId, t.experimentKey, r]),
                    {
                        result: null,
                        reasons: e
                    };
                t.logger.log(d.INFO, p.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", t.userId, t.experimentKey, r),
                e.push([p.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", t.userId, t.experimentKey, r])
            }
        }
        var o = "" + t.bucketingId + t.experimentId
          , a = Ni(o);
        t.logger.log(d.DEBUG, p.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, "BUCKETER", a, t.userId),
        e.push([p.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, "BUCKETER", a, t.userId]);
        var u = Ti(a, t.trafficAllocationConfig);
        return u === null || t.variationIdMap[u] ? {
            result: u,
            reasons: e
        } : (u && (t.logger.log(d.WARNING, p.INVALID_VARIATION_ID, "BUCKETER"),
        e.push([p.INVALID_VARIATION_ID, "BUCKETER"])),
        {
            result: null,
            reasons: e
        })
    }
      , Tu = function(t, e, r, n) {
        var i = "" + e + t.id
          , o = Ni(i);
        n.log(d.DEBUG, p.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, "BUCKETER", o, r);
        var a = t.trafficAllocation;
        return Ti(o, a)
    }
      , Ti = function(t, e) {
        for (var r = 0; r < e.length; r++)
            if (t < e[r].endOfRange)
                return e[r].entityId;
        return null
    }
      , Ni = function(t) {
        try {
            var e = cu.v3(t, 1) / Ru;
            return Math.floor(1e4 * e)
        } catch (r) {
            throw new Error(S(O.INVALID_BUCKETING_ID, "BUCKETER", t, r.message))
        }
    }
      , st = F.getLogger();
    function Ai(t) {
        return /^\d+$/.test(t)
    }
    function pe(t) {
        var e = t.indexOf("-")
          , r = t.indexOf("+");
        return !(e < 0) && (r < 0 || e < r)
    }
    function bi(t) {
        var e = t.indexOf("-")
          , r = t.indexOf("+");
        return !(r < 0) && (e < 0 || r < e)
    }
    function ii(t) {
        var e = t
          , r = "";
        if (function(u) {
            return /\s/.test(u)
        }(t))
            return st.warn(p.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", t),
            null;
        if (pe(t) ? (e = t.substring(0, t.indexOf("-")),
        r = t.substring(t.indexOf("-") + 1)) : bi(t) && (e = t.substring(0, t.indexOf("+")),
        r = t.substring(t.indexOf("+") + 1)),
        typeof e != "string" || typeof r != "string")
            return null;
        var n = e.split(".").length - 1;
        if (n > 2)
            return st.warn(p.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", t),
            null;
        var i = e.split(".");
        if (i.length != n + 1)
            return st.warn(p.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", t),
            null;
        for (var o = 0, a = i; o < a.length; o++)
            if (!Ai(a[o]))
                return st.warn(p.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", t),
                null;
        return r && i.push(r),
        i
    }
    var G = "CUSTOM_ATTRIBUTE_CONDITION_EVALUATOR"
      , B = F.getLogger()
      , Nu = ["exact", "exists", "gt", "ge", "lt", "le", "substring", "semver_eq", "semver_lt", "semver_le", "semver_gt", "semver_ge"]
      , Y = {};
    function oi(t) {
        return typeof t == "string" || typeof t == "boolean" || L.isNumber(t)
    }
    function Ui(t, e) {
        var r = t.value
          , n = typeof r
          , i = t.name
          , o = e[i]
          , a = typeof o;
        return !oi(r) || L.isNumber(r) && !L.isSafeInteger(r) ? (B.warn(p.UNEXPECTED_CONDITION_VALUE, G, JSON.stringify(t)),
        null) : o === null ? (B.debug(p.UNEXPECTED_TYPE_NULL, G, JSON.stringify(t), i),
        null) : oi(o) && n === a ? L.isNumber(o) && !L.isSafeInteger(o) ? (B.warn(p.OUT_OF_BOUNDS, G, JSON.stringify(t), i),
        null) : r === o : (B.warn(p.UNEXPECTED_TYPE, G, JSON.stringify(t), a, i),
        null)
    }
    function ut(t, e) {
        var r = t.name
          , n = e[r]
          , i = typeof n
          , o = t.value;
        return o !== null && L.isSafeInteger(o) ? n === null ? (B.debug(p.UNEXPECTED_TYPE_NULL, G, JSON.stringify(t), r),
        !1) : L.isNumber(n) ? !!L.isSafeInteger(n) || (B.warn(p.OUT_OF_BOUNDS, G, JSON.stringify(t), r),
        !1) : (B.warn(p.UNEXPECTED_TYPE, G, JSON.stringify(t), i, r),
        !1) : (B.warn(p.UNEXPECTED_CONDITION_VALUE, G, JSON.stringify(t)),
        !1)
    }
    function xe(t, e) {
        var r = t.name
          , n = e[r]
          , i = typeof n
          , o = t.value;
        return typeof o != "string" ? (B.warn(p.UNEXPECTED_CONDITION_VALUE, G, JSON.stringify(t)),
        null) : n === null ? (B.debug(p.UNEXPECTED_TYPE_NULL, G, JSON.stringify(t), r),
        null) : typeof n != "string" ? (B.warn(p.UNEXPECTED_TYPE, G, JSON.stringify(t), i, r),
        null) : function(a, u) {
            var s = ii(u)
              , l = ii(a);
            if (!s || !l)
                return null;
            for (var c = s.length, f = 0; f < l.length; f++) {
                if (c <= f)
                    return pe(a) || bi(a) ? 1 : -1;
                if (Ai(s[f])) {
                    var E = parseInt(s[f])
                      , _ = parseInt(l[f]);
                    if (E > _)
                        return 1;
                    if (E < _)
                        return -1
                } else {
                    if (s[f] < l[f])
                        return pe(a) && !pe(u) ? 1 : -1;
                    if (s[f] > l[f])
                        return !pe(a) && pe(u) ? -1 : 1
                }
            }
            return pe(u) && !pe(a) ? -1 : 0
        }(o, n)
    }
    Y.exact = Ui,
    Y.exists = function(t, e) {
        var r = e[t.name];
        return r != null
    }
    ,
    Y.gt = function(t, e) {
        var r = e[t.name]
          , n = t.value;
        return !ut(t, e) || n === null ? null : r > n
    }
    ,
    Y.ge = function(t, e) {
        var r = e[t.name]
          , n = t.value;
        return !ut(t, e) || n === null ? null : r >= n
    }
    ,
    Y.lt = function(t, e) {
        var r = e[t.name]
          , n = t.value;
        return !ut(t, e) || n === null ? null : r < n
    }
    ,
    Y.le = function(t, e) {
        var r = e[t.name]
          , n = t.value;
        return !ut(t, e) || n === null ? null : r <= n
    }
    ,
    Y.substring = function(t, e) {
        var r = t.name
          , n = e[t.name]
          , i = typeof n
          , o = t.value;
        return typeof o != "string" ? (B.warn(p.UNEXPECTED_CONDITION_VALUE, G, JSON.stringify(t)),
        null) : n === null ? (B.debug(p.UNEXPECTED_TYPE_NULL, G, JSON.stringify(t), r),
        null) : typeof n != "string" ? (B.warn(p.UNEXPECTED_TYPE, G, JSON.stringify(t), i, r),
        null) : n.indexOf(o) !== -1
    }
    ,
    Y.semver_eq = function(t, e) {
        var r = xe(t, e);
        return r === null ? null : r === 0
    }
    ,
    Y.semver_gt = function(t, e) {
        var r = xe(t, e);
        return r === null ? null : r > 0
    }
    ,
    Y.semver_ge = function(t, e) {
        var r = xe(t, e);
        return r === null ? null : r >= 0
    }
    ,
    Y.semver_lt = function(t, e) {
        var r = xe(t, e);
        return r === null ? null : r < 0
    }
    ,
    Y.semver_le = function(t, e) {
        var r = xe(t, e);
        return r === null ? null : r <= 0
    }
    ;
    var Au = Object.freeze({
        __proto__: null,
        evaluate: function(t, e) {
            var r = t.match;
            if (r !== void 0 && Nu.indexOf(r) === -1)
                return B.warn(p.UNKNOWN_MATCH_TYPE, G, JSON.stringify(t)),
                null;
            var n = t.name;
            return e.hasOwnProperty(n) || r == "exists" ? (r && Y[r] || Ui)(t, e) : (B.debug(p.MISSING_ATTRIBUTE_VALUE, G, JSON.stringify(t), n),
            null)
        }
    })
      , lt = F.getLogger()
      , bu = function() {
        function t(e) {
            this.typeToEvaluatorMap = L.assign({}, e, {
                custom_attribute: Au
            })
        }
        return t.prototype.evaluate = function(e, r, n) {
            var i = this;
            return n === void 0 && (n = {}),
            !e || e.length === 0 ? !0 : !!Me(e, function(o) {
                var a = r[o];
                if (a) {
                    lt.log(d.DEBUG, p.EVALUATING_AUDIENCE, "AUDIENCE_EVALUATOR", o, JSON.stringify(a.conditions));
                    var u = Me(a.conditions, i.evaluateConditionWithUserAttributes.bind(i, n))
                      , s = u === null ? "UNKNOWN" : u.toString().toUpperCase();
                    return lt.log(d.DEBUG, p.AUDIENCE_EVALUATION_RESULT, "AUDIENCE_EVALUATOR", o, s),
                    u
                }
                return null
            })
        }
        ,
        t.prototype.evaluateConditionWithUserAttributes = function(e, r) {
            var n = this.typeToEvaluatorMap[r.type];
            if (!n)
                return lt.log(d.WARNING, p.UNKNOWN_CONDITION_TYPE, "AUDIENCE_EVALUATOR", JSON.stringify(r)),
                null;
            try {
                return n.evaluate(r, e)
            } catch (i) {
                lt.log(d.ERROR, O.CONDITION_EVALUATOR_ERROR, "AUDIENCE_EVALUATOR", r.type, i.message)
            }
            return null
        }
        ,
        t
    }();
    function Si(t) {
        return typeof t == "string" && t !== ""
    }
    var I = "DECISION_SERVICE"
      , Uu = function() {
        function t(e) {
            var r;
            this.audienceEvaluator = (r = e.UNSTABLE_conditionEvaluators,
            new bu(r)),
            this.forcedVariationMap = {},
            this.logger = e.logger,
            this.userProfileService = e.userProfileService || null
        }
        return t.prototype.getVariation = function(e, r, n, i) {
            i === void 0 && (i = {});
            var o = n.getUserId()
              , a = n.getAttributes()
              , u = this.getBucketingId(o, a)
              , s = []
              , l = r.key;
            if (!this.checkIfExperimentIsActive(e, l))
                return this.logger.log(d.INFO, p.EXPERIMENT_NOT_RUNNING, I, l),
                s.push([p.EXPERIMENT_NOT_RUNNING, I, l]),
                {
                    result: null,
                    reasons: s
                };
            var c = this.getForcedVariation(e, l, o);
            s.push.apply(s, c.reasons);
            var f = c.result;
            if (f)
                return {
                    result: f,
                    reasons: s
                };
            var E = this.getWhitelistedVariation(r, o);
            s.push.apply(s, E.reasons);
            var _ = E.result;
            if (_)
                return {
                    result: _.key,
                    reasons: s
                };
            var y = i[w.OptimizelyDecideOption.IGNORE_USER_PROFILE_SERVICE]
              , g = this.resolveExperimentBucketMap(o, a);
            if (!y && (_ = this.getStoredVariation(e, r, o, g)))
                return this.logger.log(d.INFO, p.RETURNING_STORED_VARIATION, I, _.key, l, o),
                s.push([p.RETURNING_STORED_VARIATION, I, _.key, l, o]),
                {
                    result: _.key,
                    reasons: s
                };
            var h = this.checkIfUserIsInAudience(e, r, dr.EXPERIMENT, a, "");
            if (s.push.apply(s, h.reasons),
            !h.result)
                return this.logger.log(d.INFO, p.USER_NOT_IN_EXPERIMENT, I, o, l),
                s.push([p.USER_NOT_IN_EXPERIMENT, I, o, l]),
                {
                    result: null,
                    reasons: s
                };
            var T = this.buildBucketerParams(e, r, u, o)
              , v = ni(T);
            s.push.apply(s, v.reasons);
            var D = v.result;
            return D && (_ = e.variationIdMap[D]),
            _ ? (this.logger.log(d.INFO, p.USER_HAS_VARIATION, I, o, _.key, l),
            s.push([p.USER_HAS_VARIATION, I, o, _.key, l]),
            y || this.saveUserProfile(r, _, o, g),
            {
                result: _.key,
                reasons: s
            }) : (this.logger.log(d.DEBUG, p.USER_HAS_NO_VARIATION, I, o, l),
            s.push([p.USER_HAS_NO_VARIATION, I, o, l]),
            {
                result: null,
                reasons: s
            })
        }
        ,
        t.prototype.resolveExperimentBucketMap = function(e, r) {
            r = r || {};
            var n = this.getUserProfile(e) || {}
              , i = r[ne.STICKY_BUCKETING_KEY];
            return L.assign({}, n.experiment_bucket_map, i)
        }
        ,
        t.prototype.checkIfExperimentIsActive = function(e, r) {
            return function(n, i) {
                return mi(n, i) === "Running"
            }(e, r)
        }
        ,
        t.prototype.getWhitelistedVariation = function(e, r) {
            var n = [];
            if (e.forcedVariations && e.forcedVariations.hasOwnProperty(r)) {
                var i = e.forcedVariations[r];
                return e.variationKeyMap.hasOwnProperty(i) ? (this.logger.log(d.INFO, p.USER_FORCED_IN_VARIATION, I, r, i),
                n.push([p.USER_FORCED_IN_VARIATION, I, r, i]),
                {
                    result: e.variationKeyMap[i],
                    reasons: n
                }) : (this.logger.log(d.ERROR, p.FORCED_BUCKETING_FAILED, I, i, r),
                n.push([p.FORCED_BUCKETING_FAILED, I, i, r]),
                {
                    result: null,
                    reasons: n
                })
            }
            return {
                result: null,
                reasons: n
            }
        }
        ,
        t.prototype.checkIfUserIsInAudience = function(e, r, n, i, o) {
            var a = []
              , u = function(c, f) {
                var E = c.experimentIdMap[f];
                if (!E)
                    throw new Error(S(O.INVALID_EXPERIMENT_ID, k, f));
                return E.audienceConditions || E.audienceIds
            }(e, r.id)
              , s = e.audiencesById;
            this.logger.log(d.DEBUG, p.EVALUATING_AUDIENCES_COMBINED, I, n, o || r.key, JSON.stringify(u)),
            a.push([p.EVALUATING_AUDIENCES_COMBINED, I, n, o || r.key, JSON.stringify(u)]);
            var l = this.audienceEvaluator.evaluate(u, s, i);
            return this.logger.log(d.INFO, p.AUDIENCE_EVALUATION_RESULT_COMBINED, I, n, o || r.key, l.toString().toUpperCase()),
            a.push([p.AUDIENCE_EVALUATION_RESULT_COMBINED, I, n, o || r.key, l.toString().toUpperCase()]),
            {
                result: l,
                reasons: a
            }
        }
        ,
        t.prototype.buildBucketerParams = function(e, r, n, i) {
            return {
                bucketingId: n,
                experimentId: r.id,
                experimentKey: r.key,
                experimentIdMap: e.experimentIdMap,
                experimentKeyMap: e.experimentKeyMap,
                groupIdMap: e.groupIdMap,
                logger: this.logger,
                trafficAllocationConfig: mu(e, r.id),
                userId: i,
                variationIdMap: e.variationIdMap
            }
        }
        ,
        t.prototype.getStoredVariation = function(e, r, n, i) {
            if (i.hasOwnProperty(r.id)) {
                var o = i[r.id]
                  , a = o.variation_id;
                if (e.variationIdMap.hasOwnProperty(a))
                    return e.variationIdMap[o.variation_id];
                this.logger.log(d.INFO, p.SAVED_VARIATION_NOT_FOUND, I, n, a, r.key)
            }
            return null
        }
        ,
        t.prototype.getUserProfile = function(e) {
            var r = {
                user_id: e,
                experiment_bucket_map: {}
            };
            if (!this.userProfileService)
                return r;
            try {
                return this.userProfileService.lookup(e)
            } catch (n) {
                this.logger.log(d.ERROR, O.USER_PROFILE_LOOKUP_ERROR, I, e, n.message)
            }
            return null
        }
        ,
        t.prototype.saveUserProfile = function(e, r, n, i) {
            if (this.userProfileService)
                try {
                    i[e.id] = {
                        variation_id: r.id
                    },
                    this.userProfileService.save({
                        user_id: n,
                        experiment_bucket_map: i
                    }),
                    this.logger.log(d.INFO, p.SAVED_VARIATION, I, r.key, e.key, n)
                } catch (o) {
                    this.logger.log(d.ERROR, O.USER_PROFILE_SAVE_ERROR, I, n, o.message)
                }
        }
        ,
        t.prototype.getVariationForFeature = function(e, r, n, i) {
            i === void 0 && (i = {});
            var o = []
              , a = this.getVariationForFeatureExperiment(e, r, n, i);
            o.push.apply(o, a.reasons);
            var u = a.result;
            if (u.variation !== null)
                return {
                    result: u,
                    reasons: o
                };
            var s = this.getVariationForRollout(e, r, n);
            o.push.apply(o, s.reasons);
            var l = s.result
              , c = n.getUserId();
            return l.variation ? (this.logger.log(d.DEBUG, p.USER_IN_ROLLOUT, I, c, r.key),
            o.push([p.USER_IN_ROLLOUT, I, c, r.key]),
            {
                result: l,
                reasons: o
            }) : (this.logger.log(d.DEBUG, p.USER_NOT_IN_ROLLOUT, I, c, r.key),
            o.push([p.USER_NOT_IN_ROLLOUT, I, c, r.key]),
            {
                result: l,
                reasons: o
            })
        }
        ,
        t.prototype.getVariationForFeatureExperiment = function(e, r, n, i) {
            i === void 0 && (i = {});
            var o, a, u = [], s = null;
            if (r.experimentIds.length > 0)
                for (a = 0; a < r.experimentIds.length; a++) {
                    var l = yu(e, r.experimentIds[a], this.logger);
                    if (l && (o = this.getVariationFromExperimentRule(e, r.key, l, n, i),
                    u.push.apply(u, o.reasons),
                    s = o.result)) {
                        var c = null;
                        return (c = l.variationKeyMap[s]) || (c = ti(e, r.key, s)),
                        {
                            result: {
                                experiment: l,
                                variation: c,
                                decisionSource: M.FEATURE_TEST
                            },
                            reasons: u
                        }
                    }
                }
            else
                this.logger.log(d.DEBUG, p.FEATURE_HAS_NO_EXPERIMENTS, I, r.key),
                u.push([p.FEATURE_HAS_NO_EXPERIMENTS, I, r.key]);
            return {
                result: {
                    experiment: null,
                    variation: null,
                    decisionSource: M.FEATURE_TEST
                },
                reasons: u
            }
        }
        ,
        t.prototype.getVariationForRollout = function(e, r, n) {
            var i = [];
            if (!r.rolloutId)
                return this.logger.log(d.DEBUG, p.NO_ROLLOUT_EXISTS, I, r.key),
                i.push([p.NO_ROLLOUT_EXISTS, I, r.key]),
                {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: M.ROLLOUT
                    },
                    reasons: i
                };
            var o = e.rolloutIdMap[r.rolloutId];
            if (!o)
                return this.logger.log(d.ERROR, O.INVALID_ROLLOUT_ID, I, r.rolloutId, r.key),
                i.push([O.INVALID_ROLLOUT_ID, I, r.rolloutId, r.key]),
                {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: M.ROLLOUT
                    },
                    reasons: i
                };
            var a, u, s, l = o.experiments;
            if (l.length === 0)
                return this.logger.log(d.ERROR, p.ROLLOUT_HAS_NO_EXPERIMENTS, I, r.rolloutId),
                i.push([p.ROLLOUT_HAS_NO_EXPERIMENTS, I, r.rolloutId]),
                {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: M.ROLLOUT
                    },
                    reasons: i
                };
            for (var c = 0; c < l.length; ) {
                if (a = this.getVariationFromDeliveryRule(e, r.key, l, c, n),
                i.push.apply(i, a.reasons),
                s = a.result,
                u = a.skipToEveryoneElse,
                s)
                    return {
                        result: {
                            experiment: e.experimentIdMap[l[c].id],
                            variation: s,
                            decisionSource: M.ROLLOUT
                        },
                        reasons: i
                    };
                c = u ? l.length - 1 : c + 1
            }
            return {
                result: {
                    experiment: null,
                    variation: null,
                    decisionSource: M.ROLLOUT
                },
                reasons: i
            }
        }
        ,
        t.prototype.getBucketingId = function(e, r) {
            var n = e;
            return r != null && typeof r == "object" && r.hasOwnProperty(ne.BUCKETING_ID) && (typeof r[ne.BUCKETING_ID] == "string" ? (n = r[ne.BUCKETING_ID],
            this.logger.log(d.DEBUG, p.VALID_BUCKETING_ID, I, n)) : this.logger.log(d.WARNING, p.BUCKETING_ID_NOT_STRING, I)),
            n
        }
        ,
        t.prototype.findValidatedForcedDecision = function(e, r, n, i) {
            var o, a = [], u = r.getForcedDecision({
                flagKey: n,
                ruleKey: i
            }), s = null, l = r.getUserId();
            return e && u && (o = u.variationKey,
            (s = ti(e, n, o)) ? i ? (this.logger.log(d.INFO, p.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, o, n, i, l),
            a.push([p.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, o, n, i, l])) : (this.logger.log(d.INFO, p.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, o, n, l),
            a.push([p.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, o, n, l])) : i ? (this.logger.log(d.INFO, p.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, n, i, l),
            a.push([p.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, n, i, l])) : (this.logger.log(d.INFO, p.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, n, l),
            a.push([p.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, n, l]))),
            {
                result: s,
                reasons: a
            }
        }
        ,
        t.prototype.removeForcedVariation = function(e, r, n) {
            if (!e)
                throw new Error(S(O.INVALID_USER_ID, I));
            if (!this.forcedVariationMap.hasOwnProperty(e))
                throw new Error(S(O.USER_NOT_IN_FORCED_VARIATION, I, e));
            delete this.forcedVariationMap[e][r],
            this.logger.log(d.DEBUG, p.VARIATION_REMOVED_FOR_USER, I, n, e)
        }
        ,
        t.prototype.setInForcedVariationMap = function(e, r, n) {
            this.forcedVariationMap.hasOwnProperty(e) || (this.forcedVariationMap[e] = {}),
            this.forcedVariationMap[e][r] = n,
            this.logger.log(d.DEBUG, p.USER_MAPPED_TO_FORCED_VARIATION, I, n, r, e)
        }
        ,
        t.prototype.getForcedVariation = function(e, r, n) {
            var i, o = [], a = this.forcedVariationMap[n];
            if (!a)
                return this.logger.log(d.DEBUG, p.USER_HAS_NO_FORCED_VARIATION, I, n),
                {
                    result: null,
                    reasons: o
                };
            try {
                var u = Er(e, r);
                if (!u.hasOwnProperty("id"))
                    return this.logger.log(d.ERROR, O.IMPROPERLY_FORMATTED_EXPERIMENT, I, r),
                    o.push([O.IMPROPERLY_FORMATTED_EXPERIMENT, I, r]),
                    {
                        result: null,
                        reasons: o
                    };
                i = u.id
            } catch (c) {
                return this.logger.log(d.ERROR, c.message),
                o.push(c.message),
                {
                    result: null,
                    reasons: o
                }
            }
            var s = a[i];
            if (!s)
                return this.logger.log(d.DEBUG, p.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, I, r, n),
                {
                    result: null,
                    reasons: o
                };
            var l = yi(e, s);
            return l ? (this.logger.log(d.DEBUG, p.USER_HAS_FORCED_VARIATION, I, l, r, n),
            o.push([p.USER_HAS_FORCED_VARIATION, I, l, r, n])) : this.logger.log(d.DEBUG, p.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, I, r, n),
            {
                result: l,
                reasons: o
            }
        }
        ,
        t.prototype.setForcedVariation = function(e, r, n, i) {
            if (i != null && !Si(i))
                return this.logger.log(d.ERROR, O.INVALID_VARIATION_KEY, I),
                !1;
            var o;
            try {
                var a = Er(e, r);
                if (!a.hasOwnProperty("id"))
                    return this.logger.log(d.ERROR, O.IMPROPERLY_FORMATTED_EXPERIMENT, I, r),
                    !1;
                o = a.id
            } catch (s) {
                return this.logger.log(d.ERROR, s.message),
                !1
            }
            if (i == null)
                try {
                    return this.removeForcedVariation(n, o, r),
                    !0
                } catch (s) {
                    return this.logger.log(d.ERROR, s.message),
                    !1
                }
            var u = function(s, l, c) {
                var f = s.experimentKeyMap[l];
                return f.variationKeyMap.hasOwnProperty(c) ? f.variationKeyMap[c].id : null
            }(e, r, i);
            if (!u)
                return this.logger.log(d.ERROR, O.NO_VARIATION_FOR_EXPERIMENT_KEY, I, i, r),
                !1;
            try {
                return this.setInForcedVariationMap(n, o, u),
                !0
            } catch (s) {
                return this.logger.log(d.ERROR, s.message),
                !1
            }
        }
        ,
        t.prototype.getVariationFromExperimentRule = function(e, r, n, i, o) {
            o === void 0 && (o = {});
            var a = []
              , u = this.findValidatedForcedDecision(e, i, r, n.key);
            a.push.apply(a, u.reasons);
            var s = u.result;
            if (s)
                return {
                    result: s.key,
                    reasons: a
                };
            var l = this.getVariation(e, n, i, o);
            return a.push.apply(a, l.reasons),
            {
                result: l.result,
                reasons: a
            }
        }
        ,
        t.prototype.getVariationFromDeliveryRule = function(e, r, n, i, o) {
            var a = []
              , u = !1
              , s = n[i]
              , l = this.findValidatedForcedDecision(e, o, r, s.key);
            a.push.apply(a, l.reasons);
            var c = l.result;
            if (c)
                return {
                    result: c,
                    reasons: a,
                    skipToEveryoneElse: u
                };
            var f, E, _, y, g, h = o.getUserId(), T = o.getAttributes(), v = this.getBucketingId(h, T), D = i === n.length - 1, R = D ? "Everyone Else" : i + 1, N = null, U = this.checkIfUserIsInAudience(e, s, dr.RULE, T, R);
            return a.push.apply(a, U.reasons),
            U.result ? (this.logger.log(d.DEBUG, p.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, I, h, R),
            a.push([p.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, I, h, R]),
            E = this.buildBucketerParams(e, s, v, h),
            _ = ni(E),
            a.push.apply(a, _.reasons),
            (f = _.result) && (g = f,
            N = (y = e).variationIdMap.hasOwnProperty(g) ? y.variationIdMap[g] : null),
            N ? (this.logger.log(d.DEBUG, p.USER_BUCKETED_INTO_TARGETING_RULE, I, h, R),
            a.push([p.USER_BUCKETED_INTO_TARGETING_RULE, I, h, R])) : D || (this.logger.log(d.DEBUG, p.USER_NOT_BUCKETED_INTO_TARGETING_RULE, I, h, R),
            a.push([p.USER_NOT_BUCKETED_INTO_TARGETING_RULE, I, h, R]),
            u = !0)) : (this.logger.log(d.DEBUG, p.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, I, h, R),
            a.push([p.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, I, h, R])),
            {
                result: N,
                reasons: a,
                skipToEveryoneElse: u
            }
        }
        ,
        t
    }();
    function Di(t, e) {
        if (t.hasOwnProperty("revenue")) {
            var r = t.revenue
              , n = void 0;
            return typeof r == "string" ? (n = parseInt(r),
            isNaN(n) ? (e.log(d.INFO, p.FAILED_TO_PARSE_REVENUE, "EVENT_TAG_UTILS", r),
            null) : (e.log(d.INFO, p.PARSED_REVENUE_VALUE, "EVENT_TAG_UTILS", n),
            n)) : typeof r == "number" ? (n = r,
            e.log(d.INFO, p.PARSED_REVENUE_VALUE, "EVENT_TAG_UTILS", n),
            n) : null
        }
        return null
    }
    function Li(t, e) {
        if (t.hasOwnProperty("value")) {
            var r = t.value
              , n = void 0;
            return typeof r == "string" ? (n = parseFloat(r),
            isNaN(n) ? (e.log(d.INFO, p.FAILED_TO_PARSE_VALUE, "EVENT_TAG_UTILS", r),
            null) : (e.log(d.INFO, p.PARSED_NUMERIC_VALUE, "EVENT_TAG_UTILS", n),
            n)) : typeof r == "number" ? (n = r,
            e.log(d.INFO, p.PARSED_NUMERIC_VALUE, "EVENT_TAG_UTILS", n),
            n) : null
        }
        return null
    }
    function Ci(t, e) {
        return typeof t == "string" && (typeof e == "string" || typeof e == "boolean" || L.isNumber(e) && L.isSafeInteger(e))
    }
    var Pi = "https://logx.optimizely.com/v1/events";
    function wi(t) {
        var e = t.attributes
          , r = t.userId
          , n = t.clientEngine
          , i = t.clientVersion
          , o = t.configObj
          , a = t.logger
          , u = !!o.anonymizeIP && o.anonymizeIP
          , s = o.botFiltering
          , l = {
            snapshots: [],
            visitor_id: r,
            attributes: []
        }
          , c = {
            account_id: o.accountId,
            project_id: o.projectId,
            visitors: [l],
            revision: o.revision,
            client_name: n,
            client_version: i,
            anonymize_ip: u,
            enrich_decisions: !0
        };
        return e && Object.keys(e || {}).forEach(function(f) {
            if (Ci(f, e[f])) {
                var E = hi(o, f, a);
                E && c.visitors[0].attributes.push({
                    entity_id: E,
                    key: f,
                    type: "custom",
                    value: e[f]
                })
            }
        }),
        typeof s == "boolean" && c.visitors[0].attributes.push({
            entity_id: ne.BOT_FILTERING,
            key: ne.BOT_FILTERING,
            type: "custom",
            value: s
        }),
        c
    }
    function Su(t) {
        var e, r, n, i, o, a, u, s, l, c = wi(t), f = (e = t.configObj,
        r = t.experimentId,
        n = t.variationId,
        i = t.ruleKey,
        o = t.ruleType,
        a = t.flagKey,
        u = t.enabled,
        s = r ? vi(e, r) : null,
        l = n ? yi(e, n) : null,
        {
            decisions: [{
                campaign_id: s,
                experiment_id: r,
                variation_id: n,
                metadata: {
                    flag_key: a,
                    rule_key: i,
                    rule_type: o,
                    variation_key: l = l || "",
                    enabled: u
                }
            }],
            events: [{
                entity_id: s,
                timestamp: L.currentTimestamp(),
                key: "campaign_activated",
                uuid: L.uuid()
            }]
        });
        return c.visitors[0].snapshots.push(f),
        {
            httpVerb: "POST",
            url: Pi,
            params: c
        }
    }
    function Du(t) {
        var e = wi(t)
          , r = function(n, i, o, a) {
            var u = {
                events: []
            }
              , s = {
                entity_id: Ii(n, i),
                timestamp: L.currentTimestamp(),
                uuid: L.uuid(),
                key: i
            };
            if (a) {
                var l = Di(a, o);
                l !== null && (s.revenue = l);
                var c = Li(a, o);
                c !== null && (s.value = c),
                s.tags = a
            }
            return u.events.push(s),
            u
        }(t.configObj, t.eventKey, t.logger, t.eventTags);
        return e.visitors[0].snapshots = [r],
        {
            httpVerb: "POST",
            url: Pi,
            params: e
        }
    }
    function lr(t) {
        var e, r;
        return (r = (e = t.experiment) === null || e === void 0 ? void 0 : e.key) !== null && r !== void 0 ? r : ""
    }
    function cr(t) {
        var e, r;
        return (r = (e = t.variation) === null || e === void 0 ? void 0 : e.key) !== null && r !== void 0 ? r : ""
    }
    function ct(t) {
        var e, r;
        return (r = (e = t.variation) === null || e === void 0 ? void 0 : e.featureEnabled) !== null && r !== void 0 && r
    }
    function ai(t) {
        var e, r;
        return (r = (e = t.experiment) === null || e === void 0 ? void 0 : e.id) !== null && r !== void 0 ? r : null
    }
    function si(t) {
        var e, r;
        return (r = (e = t.variation) === null || e === void 0 ? void 0 : e.id) !== null && r !== void 0 ? r : null
    }
    var gr = F.getLogger("EVENT_BUILDER");
    function ui(t, e) {
        var r = [];
        return e && Object.keys(e || {}).forEach(function(n) {
            if (Ci(n, e[n])) {
                var i = hi(t, n, gr);
                i && r.push({
                    entityId: i,
                    key: n,
                    value: e[n]
                })
            }
        }),
        r
    }
    var fr = "USER_PROFILE_SERVICE_VALIDATOR"
      , Lu = function() {
        function t(e) {
            var r, n = this, i = e.clientEngine;
            i || (e.logger.log(d.INFO, p.INVALID_CLIENT_ENGINE, "OPTIMIZELY", i),
            i = "node-sdk"),
            this.clientEngine = i,
            this.clientVersion = e.clientVersion || "4.9.2",
            this.errorHandler = e.errorHandler,
            this.isOptimizelyConfigValid = e.isValidInstance,
            this.logger = e.logger;
            var o = (r = e.defaultDecideOptions) !== null && r !== void 0 ? r : [];
            Array.isArray(o) || (this.logger.log(d.DEBUG, p.INVALID_DEFAULT_DECIDE_OPTIONS, "OPTIMIZELY"),
            o = []);
            var a = {};
            o.forEach(function(f) {
                w.OptimizelyDecideOption[f] ? a[f] = !0 : n.logger.log(d.WARNING, p.UNRECOGNIZED_DECIDE_OPTION, "OPTIMIZELY", f)
            }),
            this.defaultDecideOptions = a,
            this.projectConfigManager = function(f) {
                return new Ou(f)
            }({
                datafile: e.datafile,
                jsonSchemaValidator: e.jsonSchemaValidator,
                sdkKey: e.sdkKey,
                datafileManager: e.datafileManager
            }),
            this.disposeOnUpdate = this.projectConfigManager.onUpdate(function(f) {
                n.logger.log(d.INFO, p.UPDATED_OPTIMIZELY_CONFIG, "OPTIMIZELY", f.revision, f.projectId),
                n.notificationCenter.sendNotifications(z.OPTIMIZELY_CONFIG_UPDATE)
            });
            var u, s = this.projectConfigManager.onReady(), l = null;
            if (e.userProfileService)
                try {
                    (function(f) {
                        if (typeof f == "object" && f !== null) {
                            if (typeof f.lookup != "function")
                                throw new Error(S(O.INVALID_USER_PROFILE_SERVICE, fr, "Missing function 'lookup'"));
                            if (typeof f.save != "function")
                                throw new Error(S(O.INVALID_USER_PROFILE_SERVICE, fr, "Missing function 'save'"));
                            return !0
                        }
                        throw new Error(S(O.INVALID_USER_PROFILE_SERVICE, fr))
                    }
                    )(e.userProfileService) && (l = e.userProfileService,
                    this.logger.log(d.INFO, p.VALID_USER_PROFILE_SERVICE, "OPTIMIZELY"))
                } catch (f) {
                    this.logger.log(d.WARNING, f.message)
                }
            this.decisionService = (u = {
                userProfileService: l,
                logger: this.logger,
                UNSTABLE_conditionEvaluators: e.UNSTABLE_conditionEvaluators
            },
            new Uu(u)),
            this.notificationCenter = e.notificationCenter,
            this.eventProcessor = e.eventProcessor;
            var c = this.eventProcessor.start();
            this.readyPromise = Promise.all([s, c]).then(function(f) {
                return f[0]
            }),
            this.readyTimeouts = {},
            this.nextReadyTimeoutId = 0
        }
        return t.prototype.isValidInstance = function() {
            return this.isOptimizelyConfigValid && !!this.projectConfigManager.getConfig()
        }
        ,
        t.prototype.activate = function(e, r, n) {
            try {
                if (!this.isValidInstance())
                    return this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "activate"),
                    null;
                if (!this.validateInputs({
                    experiment_key: e,
                    user_id: r
                }, n))
                    return this.notActivatingExperiment(e, r);
                var i = this.projectConfigManager.getConfig();
                if (!i)
                    return null;
                try {
                    var o = this.getVariation(e, r, n);
                    if (o === null)
                        return this.notActivatingExperiment(e, r);
                    if (!function(s, l) {
                        return mi(s, l) === "Running"
                    }(i, e))
                        return this.logger.log(d.DEBUG, p.SHOULD_NOT_DISPATCH_ACTIVATE, "OPTIMIZELY", e),
                        o;
                    var a = Er(i, e)
                      , u = {
                        experiment: a,
                        variation: a.variationKeyMap[o],
                        decisionSource: M.EXPERIMENT
                    };
                    return this.sendImpressionEvent(u, "", r, !0, n),
                    o
                } catch (s) {
                    return this.logger.log(d.ERROR, s.message),
                    this.logger.log(d.INFO, p.NOT_ACTIVATING_USER, "OPTIMIZELY", r, e),
                    this.errorHandler.handleError(s),
                    null
                }
            } catch (s) {
                return this.logger.log(d.ERROR, s.message),
                this.errorHandler.handleError(s),
                null
            }
        }
        ,
        t.prototype.sendImpressionEvent = function(e, r, n, i, o) {
            var a = this.projectConfigManager.getConfig();
            if (a) {
                var u = function(s) {
                    var l = s.configObj
                      , c = s.decisionObj
                      , f = s.userId
                      , E = s.flagKey
                      , _ = s.enabled
                      , y = s.userAttributes
                      , g = s.clientEngine
                      , h = s.clientVersion
                      , T = c.decisionSource
                      , v = lr(c)
                      , D = ai(c)
                      , R = cr(c)
                      , N = si(c)
                      , U = D !== null ? vi(l, D) : null;
                    return {
                        type: "impression",
                        timestamp: L.currentTimestamp(),
                        uuid: L.uuid(),
                        user: {
                            id: f,
                            attributes: ui(l, y)
                        },
                        context: {
                            accountId: l.accountId,
                            projectId: l.projectId,
                            revision: l.revision,
                            clientName: g,
                            clientVersion: h,
                            anonymizeIP: l.anonymizeIP || !1,
                            botFiltering: l.botFiltering
                        },
                        layer: {
                            id: U
                        },
                        experiment: {
                            id: D,
                            key: v
                        },
                        variation: {
                            id: N,
                            key: R
                        },
                        ruleKey: v,
                        flagKey: E,
                        ruleType: T,
                        enabled: _
                    }
                }({
                    decisionObj: e,
                    flagKey: r,
                    enabled: i,
                    userId: n,
                    userAttributes: o,
                    clientEngine: this.clientEngine,
                    clientVersion: this.clientVersion,
                    configObj: a
                });
                this.eventProcessor.process(u),
                this.emitNotificationCenterActivate(e, r, n, i, o)
            }
        }
        ,
        t.prototype.emitNotificationCenterActivate = function(e, r, n, i, o) {
            var a = this.projectConfigManager.getConfig();
            if (a) {
                var u, s = e.decisionSource, l = lr(e), c = ai(e), f = cr(e), E = si(e);
                c !== null && f !== "" && (u = a.experimentIdMap[c]);
                var _, y = Su({
                    attributes: o,
                    clientEngine: this.clientEngine,
                    clientVersion: this.clientVersion,
                    configObj: a,
                    experimentId: c,
                    ruleKey: l,
                    flagKey: r,
                    ruleType: s,
                    userId: n,
                    enabled: i,
                    variationId: E,
                    logger: this.logger
                });
                u && u.variationKeyMap && f !== "" && (_ = u.variationKeyMap[f]),
                this.notificationCenter.sendNotifications(z.ACTIVATE, {
                    experiment: u,
                    userId: n,
                    attributes: o,
                    variation: _,
                    logEvent: y
                })
            }
        }
        ,
        t.prototype.track = function(e, r, n, i) {
            try {
                if (!this.isValidInstance())
                    return void this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "track");
                if (!this.validateInputs({
                    user_id: r,
                    event_key: e
                }, n, i))
                    return;
                var o = this.projectConfigManager.getConfig();
                if (!o)
                    return;
                if (!function(u, s) {
                    return u.eventKeyMap.hasOwnProperty(s)
                }(o, e))
                    return this.logger.log(d.WARNING, p.EVENT_KEY_NOT_FOUND, "OPTIMIZELY", e),
                    void this.logger.log(d.WARNING, p.NOT_TRACKING_USER, "OPTIMIZELY", r);
                var a = function(u) {
                    var s = u.configObj
                      , l = u.userId
                      , c = u.userAttributes
                      , f = u.clientEngine
                      , E = u.clientVersion
                      , _ = u.eventKey
                      , y = u.eventTags
                      , g = Ii(s, _)
                      , h = y ? Di(y, gr) : null
                      , T = y ? Li(y, gr) : null;
                    return {
                        type: "conversion",
                        timestamp: L.currentTimestamp(),
                        uuid: L.uuid(),
                        user: {
                            id: l,
                            attributes: ui(s, c)
                        },
                        context: {
                            accountId: s.accountId,
                            projectId: s.projectId,
                            revision: s.revision,
                            clientName: f,
                            clientVersion: E,
                            anonymizeIP: s.anonymizeIP || !1,
                            botFiltering: s.botFiltering
                        },
                        event: {
                            id: g,
                            key: _
                        },
                        revenue: h,
                        value: T,
                        tags: y
                    }
                }({
                    eventKey: e,
                    eventTags: i = this.filterEmptyValues(i),
                    userId: r,
                    userAttributes: n,
                    clientEngine: this.clientEngine,
                    clientVersion: this.clientVersion,
                    configObj: o
                });
                this.logger.log(d.INFO, p.TRACK_EVENT, "OPTIMIZELY", e, r),
                this.eventProcessor.process(a),
                this.emitNotificationCenterTrack(e, r, n, i)
            } catch (u) {
                this.logger.log(d.ERROR, u.message),
                this.errorHandler.handleError(u),
                this.logger.log(d.ERROR, p.NOT_TRACKING_USER, "OPTIMIZELY", r)
            }
        }
        ,
        t.prototype.emitNotificationCenterTrack = function(e, r, n, i) {
            try {
                var o = this.projectConfigManager.getConfig();
                if (!o)
                    return;
                var a = Du({
                    attributes: n,
                    clientEngine: this.clientEngine,
                    clientVersion: this.clientVersion,
                    configObj: o,
                    eventKey: e,
                    eventTags: i,
                    logger: this.logger,
                    userId: r
                });
                this.notificationCenter.sendNotifications(z.TRACK, {
                    eventKey: e,
                    userId: r,
                    attributes: n,
                    eventTags: i,
                    logEvent: a
                })
            } catch (u) {
                this.logger.log(d.ERROR, u.message),
                this.errorHandler.handleError(u)
            }
        }
        ,
        t.prototype.getVariation = function(e, r, n) {
            try {
                if (!this.isValidInstance())
                    return this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "getVariation"),
                    null;
                try {
                    if (!this.validateInputs({
                        experiment_key: e,
                        user_id: r
                    }, n))
                        return null;
                    var i = this.projectConfigManager.getConfig();
                    if (!i)
                        return null;
                    var o = i.experimentKeyMap[e];
                    if (!o)
                        return this.logger.log(d.DEBUG, O.INVALID_EXPERIMENT_KEY, "OPTIMIZELY", e),
                        null;
                    var a = this.decisionService.getVariation(i, o, this.createUserContext(r, n)).result
                      , u = (s = i,
                    l = o.id,
                    s.experimentFeatureMap.hasOwnProperty(l) ? ve.FEATURE_TEST : ve.AB_TEST);
                    return this.notificationCenter.sendNotifications(z.DECISION, {
                        type: u,
                        userId: r,
                        attributes: n || {},
                        decisionInfo: {
                            experimentKey: e,
                            variationKey: a
                        }
                    }),
                    a
                } catch (c) {
                    return this.logger.log(d.ERROR, c.message),
                    this.errorHandler.handleError(c),
                    null
                }
            } catch (c) {
                return this.logger.log(d.ERROR, c.message),
                this.errorHandler.handleError(c),
                null
            }
            var s, l
        }
        ,
        t.prototype.setForcedVariation = function(e, r, n) {
            if (!this.validateInputs({
                experiment_key: e,
                user_id: r
            }))
                return !1;
            var i = this.projectConfigManager.getConfig();
            if (!i)
                return !1;
            try {
                return this.decisionService.setForcedVariation(i, e, r, n)
            } catch (o) {
                return this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o),
                !1
            }
        }
        ,
        t.prototype.getForcedVariation = function(e, r) {
            if (!this.validateInputs({
                experiment_key: e,
                user_id: r
            }))
                return null;
            var n = this.projectConfigManager.getConfig();
            if (!n)
                return null;
            try {
                return this.decisionService.getForcedVariation(n, e, r).result
            } catch (i) {
                return this.logger.log(d.ERROR, i.message),
                this.errorHandler.handleError(i),
                null
            }
        }
        ,
        t.prototype.validateInputs = function(e, r, n) {
            try {
                if (e.hasOwnProperty("user_id")) {
                    var i = e.user_id;
                    if (typeof i != "string" || i === null || i === "undefined")
                        throw new Error(S(O.INVALID_INPUT_FORMAT, "OPTIMIZELY", "user_id"));
                    delete e.user_id
                }
                return Object.keys(e).forEach(function(o) {
                    if (!Si(e[o]))
                        throw new Error(S(O.INVALID_INPUT_FORMAT, "OPTIMIZELY", o))
                }),
                r && function(o) {
                    if (typeof o != "object" || Array.isArray(o) || o === null)
                        throw new Error(S(O.INVALID_ATTRIBUTES, "ATTRIBUTES_VALIDATOR"));
                    Object.keys(o).forEach(function(a) {
                        if (o[a] === void 0)
                            throw new Error(S(O.UNDEFINED_ATTRIBUTE, "ATTRIBUTES_VALIDATOR", a))
                    })
                }(r),
                n && function(o) {
                    if (typeof o != "object" || Array.isArray(o) || o === null)
                        throw new Error(S(O.INVALID_EVENT_TAGS, "EVENT_TAGS_VALIDATOR"))
                }(n),
                !0
            } catch (o) {
                return this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o),
                !1
            }
        }
        ,
        t.prototype.notActivatingExperiment = function(e, r) {
            return this.logger.log(d.INFO, p.NOT_ACTIVATING_USER, "OPTIMIZELY", r, e),
            null
        }
        ,
        t.prototype.filterEmptyValues = function(e) {
            for (var r in e)
                !e.hasOwnProperty(r) || e[r] !== null && e[r] !== void 0 || delete e[r];
            return e
        }
        ,
        t.prototype.isFeatureEnabled = function(e, r, n) {
            try {
                if (!this.isValidInstance())
                    return this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "isFeatureEnabled"),
                    !1;
                if (!this.validateInputs({
                    feature_key: e,
                    user_id: r
                }, n))
                    return !1;
                var i = this.projectConfigManager.getConfig();
                if (!i)
                    return !1;
                var o = ur(i, e, this.logger);
                if (!o)
                    return !1;
                var a = {}
                  , u = this.createUserContext(r, n)
                  , s = this.decisionService.getVariationForFeature(i, o, u).result
                  , l = s.decisionSource
                  , c = lr(s)
                  , f = cr(s)
                  , E = ct(s);
                l === M.FEATURE_TEST && (a = {
                    experimentKey: c,
                    variationKey: f
                }),
                (l === M.FEATURE_TEST || l === M.ROLLOUT && ri(i)) && this.sendImpressionEvent(s, o.key, r, E, n),
                E === !0 ? this.logger.log(d.INFO, p.FEATURE_ENABLED_FOR_USER, "OPTIMIZELY", e, r) : (this.logger.log(d.INFO, p.FEATURE_NOT_ENABLED_FOR_USER, "OPTIMIZELY", e, r),
                E = !1);
                var _ = {
                    featureKey: e,
                    featureEnabled: E,
                    source: s.decisionSource,
                    sourceInfo: a
                };
                return this.notificationCenter.sendNotifications(z.DECISION, {
                    type: ve.FEATURE,
                    userId: r,
                    attributes: n || {},
                    decisionInfo: _
                }),
                E
            } catch (y) {
                return this.logger.log(d.ERROR, y.message),
                this.errorHandler.handleError(y),
                !1
            }
        }
        ,
        t.prototype.getEnabledFeatures = function(e, r) {
            var n = this;
            try {
                var i = [];
                if (!this.isValidInstance())
                    return this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "getEnabledFeatures"),
                    i;
                if (!this.validateInputs({
                    user_id: e
                }))
                    return i;
                var o = this.projectConfigManager.getConfig();
                return o && se(o.featureKeyMap).forEach(function(a) {
                    n.isFeatureEnabled(a.key, e, r) && i.push(a.key)
                }),
                i
            } catch (a) {
                return this.logger.log(d.ERROR, a.message),
                this.errorHandler.handleError(a),
                []
            }
        }
        ,
        t.prototype.getFeatureVariable = function(e, r, n, i) {
            try {
                return this.isValidInstance() ? this.getFeatureVariableForType(e, r, null, n, i) : (this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariable"),
                null)
            } catch (o) {
                return this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o),
                null
            }
        }
        ,
        t.prototype.getFeatureVariableForType = function(e, r, n, i, o) {
            if (!this.validateInputs({
                feature_key: e,
                variable_key: r,
                user_id: i
            }, o))
                return null;
            var a = this.projectConfigManager.getConfig();
            if (!a)
                return null;
            var u = ur(a, e, this.logger);
            if (!u)
                return null;
            var s = function(y, g, h, T) {
                var v = y.featureKeyMap[g];
                if (!v)
                    return T.log(d.ERROR, O.FEATURE_NOT_IN_DATAFILE, k, g),
                    null;
                var D = v.variableKeyMap[h];
                return D || (T.log(d.ERROR, O.VARIABLE_KEY_NOT_IN_DATAFILE, k, h, g),
                null)
            }(a, e, r, this.logger);
            if (!s)
                return null;
            if (n && s.type !== n)
                return this.logger.log(d.WARNING, p.VARIABLE_REQUESTED_WITH_WRONG_TYPE, "OPTIMIZELY", n, s.type),
                null;
            var l = this.createUserContext(i, o)
              , c = this.decisionService.getVariationForFeature(a, u, l).result
              , f = ct(c)
              , E = this.getFeatureVariableValueFromVariation(e, f, c.variation, s, i)
              , _ = {};
            return c.decisionSource === M.FEATURE_TEST && c.experiment !== null && c.variation !== null && (_ = {
                experimentKey: c.experiment.key,
                variationKey: c.variation.key
            }),
            this.notificationCenter.sendNotifications(z.DECISION, {
                type: ve.FEATURE_VARIABLE,
                userId: i,
                attributes: o || {},
                decisionInfo: {
                    featureKey: e,
                    featureEnabled: f,
                    source: c.decisionSource,
                    variableKey: r,
                    variableValue: E,
                    variableType: s.type,
                    sourceInfo: _
                }
            }),
            E
        }
        ,
        t.prototype.getFeatureVariableValueFromVariation = function(e, r, n, i, o) {
            var a = this.projectConfigManager.getConfig();
            if (!a)
                return null;
            var u = i.defaultValue;
            if (n !== null) {
                var s = function(l, c, f, E) {
                    if (!c || !f)
                        return null;
                    if (!l.variationVariableUsageMap.hasOwnProperty(f.id))
                        return E.log(d.ERROR, O.VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT, k, f.id),
                        null;
                    var _ = l.variationVariableUsageMap[f.id][c.id];
                    return _ ? _.value : null
                }(a, i, n, this.logger);
                s !== null ? r ? (u = s,
                this.logger.log(d.INFO, p.USER_RECEIVED_VARIABLE_VALUE, "OPTIMIZELY", u, i.key, e)) : this.logger.log(d.INFO, p.FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE, "OPTIMIZELY", e, o, u) : this.logger.log(d.INFO, p.VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE, "OPTIMIZELY", i.key, n.key)
            } else
                this.logger.log(d.INFO, p.USER_RECEIVED_DEFAULT_VARIABLE_VALUE, "OPTIMIZELY", o, i.key, e);
            return function(l, c, f) {
                var E;
                switch (c) {
                case W.BOOLEAN:
                    l !== "true" && l !== "false" ? (f.log(d.ERROR, O.UNABLE_TO_CAST_VALUE, k, l, c),
                    E = null) : E = l === "true";
                    break;
                case W.INTEGER:
                    E = parseInt(l, 10),
                    isNaN(E) && (f.log(d.ERROR, O.UNABLE_TO_CAST_VALUE, k, l, c),
                    E = null);
                    break;
                case W.DOUBLE:
                    E = parseFloat(l),
                    isNaN(E) && (f.log(d.ERROR, O.UNABLE_TO_CAST_VALUE, k, l, c),
                    E = null);
                    break;
                case W.JSON:
                    try {
                        E = JSON.parse(l)
                    } catch {
                        f.log(d.ERROR, O.UNABLE_TO_CAST_VALUE, k, l, c),
                        E = null
                    }
                    break;
                default:
                    E = l
                }
                return E
            }(u, i.type, this.logger)
        }
        ,
        t.prototype.getFeatureVariableBoolean = function(e, r, n, i) {
            try {
                return this.isValidInstance() ? this.getFeatureVariableForType(e, r, W.BOOLEAN, n, i) : (this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableBoolean"),
                null)
            } catch (o) {
                return this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o),
                null
            }
        }
        ,
        t.prototype.getFeatureVariableDouble = function(e, r, n, i) {
            try {
                return this.isValidInstance() ? this.getFeatureVariableForType(e, r, W.DOUBLE, n, i) : (this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableDouble"),
                null)
            } catch (o) {
                return this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o),
                null
            }
        }
        ,
        t.prototype.getFeatureVariableInteger = function(e, r, n, i) {
            try {
                return this.isValidInstance() ? this.getFeatureVariableForType(e, r, W.INTEGER, n, i) : (this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableInteger"),
                null)
            } catch (o) {
                return this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o),
                null
            }
        }
        ,
        t.prototype.getFeatureVariableString = function(e, r, n, i) {
            try {
                return this.isValidInstance() ? this.getFeatureVariableForType(e, r, W.STRING, n, i) : (this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableString"),
                null)
            } catch (o) {
                return this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o),
                null
            }
        }
        ,
        t.prototype.getFeatureVariableJSON = function(e, r, n, i) {
            try {
                return this.isValidInstance() ? this.getFeatureVariableForType(e, r, W.JSON, n, i) : (this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableJSON"),
                null)
            } catch (o) {
                return this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o),
                null
            }
        }
        ,
        t.prototype.getAllFeatureVariables = function(e, r, n) {
            var i = this;
            try {
                if (!this.isValidInstance())
                    return this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "getAllFeatureVariables"),
                    null;
                if (!this.validateInputs({
                    feature_key: e,
                    user_id: r
                }, n))
                    return null;
                var o = this.projectConfigManager.getConfig();
                if (!o)
                    return null;
                var a = ur(o, e, this.logger);
                if (!a)
                    return null;
                var u = this.createUserContext(r, n)
                  , s = this.decisionService.getVariationForFeature(o, a, u).result
                  , l = ct(s)
                  , c = {};
                a.variables.forEach(function(E) {
                    c[E.key] = i.getFeatureVariableValueFromVariation(e, l, s.variation, E, r)
                });
                var f = {};
                return s.decisionSource === M.FEATURE_TEST && s.experiment !== null && s.variation !== null && (f = {
                    experimentKey: s.experiment.key,
                    variationKey: s.variation.key
                }),
                this.notificationCenter.sendNotifications(z.DECISION, {
                    type: ve.ALL_FEATURE_VARIABLES,
                    userId: r,
                    attributes: n || {},
                    decisionInfo: {
                        featureKey: e,
                        featureEnabled: l,
                        source: s.decisionSource,
                        variableValues: c,
                        sourceInfo: f
                    }
                }),
                c
            } catch (E) {
                return this.logger.log(d.ERROR, E.message),
                this.errorHandler.handleError(E),
                null
            }
        }
        ,
        t.prototype.getOptimizelyConfig = function() {
            try {
                return this.projectConfigManager.getConfig() ? this.projectConfigManager.getOptimizelyConfig() : null
            } catch (e) {
                return this.logger.log(d.ERROR, e.message),
                this.errorHandler.handleError(e),
                null
            }
        }
        ,
        t.prototype.close = function() {
            var e = this;
            try {
                var r = this.eventProcessor.stop();
                return this.disposeOnUpdate && (this.disposeOnUpdate(),
                this.disposeOnUpdate = null),
                this.projectConfigManager && this.projectConfigManager.stop(),
                Object.keys(this.readyTimeouts).forEach(function(n) {
                    var i = e.readyTimeouts[n];
                    clearTimeout(i.readyTimeout),
                    i.onClose()
                }),
                this.readyTimeouts = {},
                r.then(function() {
                    return {
                        success: !0
                    }
                }, function(n) {
                    return {
                        success: !1,
                        reason: String(n)
                    }
                })
            } catch (n) {
                return this.logger.log(d.ERROR, n.message),
                this.errorHandler.handleError(n),
                Promise.resolve({
                    success: !1,
                    reason: String(n)
                })
            }
        }
        ,
        t.prototype.onReady = function(e) {
            var r, n, i = this;
            typeof e == "object" && e !== null && e.timeout !== void 0 && (r = e.timeout),
            L.isSafeInteger(r) || (r = 3e4);
            var o = new Promise(function(s) {
                n = s
            }
            )
              , a = this.nextReadyTimeoutId;
            this.nextReadyTimeoutId++;
            var u = setTimeout(function() {
                delete i.readyTimeouts[a],
                n({
                    success: !1,
                    reason: S("onReady timeout expired after %s ms", r)
                })
            }, r);
            return this.readyTimeouts[a] = {
                readyTimeout: u,
                onClose: function() {
                    n({
                        success: !1,
                        reason: "Instance closed"
                    })
                }
            },
            this.readyPromise.then(function() {
                clearTimeout(u),
                delete i.readyTimeouts[a],
                n({
                    success: !0
                })
            }),
            Promise.race([this.readyPromise, o])
        }
        ,
        t.prototype.createUserContext = function(e, r) {
            return this.validateInputs({
                user_id: e
            }, r) ? new vu({
                optimizely: this,
                userId: e,
                attributes: r
            }) : null
        }
        ,
        t.prototype.decide = function(e, r, n) {
            var i, o, a, u, s = this;
            n === void 0 && (n = []);
            var l, c = e.getUserId(), f = e.getAttributes(), E = this.projectConfigManager.getConfig(), _ = [];
            if (!this.isValidInstance() || !E)
                return this.logger.log(d.INFO, p.INVALID_OBJECT, "OPTIMIZELY", "decide"),
                ei(r, e, [pr.SDK_NOT_READY]);
            var y = E.featureKeyMap[r];
            if (!y)
                return this.logger.log(d.ERROR, O.FEATURE_NOT_IN_DATAFILE, "OPTIMIZELY", r),
                ei(r, e, [S(pr.FLAG_KEY_INVALID, r)]);
            var g = this.getAllDecideOptions(n)
              , h = this.decisionService.findValidatedForcedDecision(E, e, r);
            _.push.apply(_, h.reasons);
            var T = h.result;
            if (T)
                l = {
                    experiment: null,
                    variation: T,
                    decisionSource: M.FEATURE_TEST
                };
            else {
                var v = this.decisionService.getVariationForFeature(E, y, e, g);
                _.push.apply(_, v.reasons),
                l = v.result
            }
            var D = l.decisionSource
              , R = (o = (i = l.experiment) === null || i === void 0 ? void 0 : i.key) !== null && o !== void 0 ? o : null
              , N = (u = (a = l.variation) === null || a === void 0 ? void 0 : a.key) !== null && u !== void 0 ? u : null
              , U = ct(l);
            U === !0 ? this.logger.log(d.INFO, p.FEATURE_ENABLED_FOR_USER, "OPTIMIZELY", r, c) : this.logger.log(d.INFO, p.FEATURE_NOT_ENABLED_FOR_USER, "OPTIMIZELY", r, c);
            var ue = {}
              , Se = !1;
            g[w.OptimizelyDecideOption.EXCLUDE_VARIABLES] || y.variables.forEach(function(Le) {
                ue[Le.key] = s.getFeatureVariableValueFromVariation(r, U, l.variation, Le, c)
            }),
            !g[w.OptimizelyDecideOption.DISABLE_DECISION_EVENT] && (D === M.FEATURE_TEST || D === M.ROLLOUT && ri(E)) && (this.sendImpressionEvent(l, r, c, U, f),
            Se = !0);
            var De = [];
            g[w.OptimizelyDecideOption.INCLUDE_REASONS] && (De = _.map(function(Le) {
                return S.apply(void 0, vr([Le[0]], Le.slice(1)))
            }));
            var mt = {
                flagKey: r,
                enabled: U,
                variationKey: N,
                ruleKey: R,
                variables: ue,
                reasons: De,
                decisionEventDispatched: Se
            };
            return this.notificationCenter.sendNotifications(z.DECISION, {
                type: ve.FLAG,
                userId: c,
                attributes: f,
                decisionInfo: mt
            }),
            {
                variationKey: N,
                enabled: U,
                variables: ue,
                ruleKey: R,
                flagKey: r,
                userContext: e,
                reasons: De
            }
        }
        ,
        t.prototype.getAllDecideOptions = function(e) {
            var r = this
              , n = Ie({}, this.defaultDecideOptions);
            return Array.isArray(e) ? e.forEach(function(i) {
                w.OptimizelyDecideOption[i] ? n[i] = !0 : r.logger.log(d.WARNING, p.UNRECOGNIZED_DECIDE_OPTION, "OPTIMIZELY", i)
            }) : this.logger.log(d.DEBUG, p.INVALID_DECIDE_OPTIONS, "OPTIMIZELY"),
            n
        }
        ,
        t.prototype.decideForKeys = function(e, r, n) {
            var i = this;
            n === void 0 && (n = []);
            var o = {};
            if (!this.isValidInstance())
                return this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "decideForKeys"),
                o;
            if (r.length === 0)
                return o;
            var a = this.getAllDecideOptions(n);
            return r.forEach(function(u) {
                var s = i.decide(e, u, n);
                a[w.OptimizelyDecideOption.ENABLED_FLAGS_ONLY] && !s.enabled || (o[u] = s)
            }),
            o
        }
        ,
        t.prototype.decideAll = function(e, r) {
            r === void 0 && (r = []);
            var n = this.projectConfigManager.getConfig();
            if (!this.isValidInstance() || !n)
                return this.logger.log(d.ERROR, p.INVALID_OBJECT, "OPTIMIZELY", "decideAll"),
                {};
            var i = Object.keys(n.featureKeyMap);
            return this.decideForKeys(e, i, r)
        }
        ,
        t
    }()
      , Cu = function(t) {
        return !(typeof t != "number" || !L.isSafeInteger(t)) && t >= 1
    }
      , Pu = function(t) {
        return !(typeof t != "number" || !L.isSafeInteger(t)) && t > 0
    }
      , wu = function() {
        function t(e) {
            var r = this;
            this.logger = e.logger,
            this.errorHandler = e.errorHandler,
            this.notificationListeners = {},
            se(z).forEach(function(n) {
                r.notificationListeners[n] = []
            }),
            this.listenerId = 1
        }
        return t.prototype.addNotificationListener = function(e, r) {
            try {
                if (!(se(z).indexOf(e) > -1))
                    return -1;
                this.notificationListeners[e] || (this.notificationListeners[e] = []);
                var n = !1;
                if ((this.notificationListeners[e] || []).forEach(function(o) {
                    o.callback !== r || (n = !0)
                }),
                n)
                    return -1;
                this.notificationListeners[e].push({
                    id: this.listenerId,
                    callback: r
                });
                var i = this.listenerId;
                return this.listenerId += 1,
                i
            } catch (o) {
                return this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o),
                -1
            }
        }
        ,
        t.prototype.removeNotificationListener = function(e) {
            var r = this;
            try {
                var n, i;
                if (Object.keys(this.notificationListeners).some(function(o) {
                    return (r.notificationListeners[o] || []).every(function(a, u) {
                        return a.id !== e || (n = u,
                        i = o,
                        !1)
                    }),
                    n !== void 0 && i !== void 0
                }),
                n !== void 0 && i !== void 0)
                    return this.notificationListeners[i].splice(n, 1),
                    !0
            } catch (o) {
                this.logger.log(d.ERROR, o.message),
                this.errorHandler.handleError(o)
            }
            return !1
        }
        ,
        t.prototype.clearAllNotificationListeners = function() {
            var e = this;
            try {
                se(z).forEach(function(r) {
                    e.notificationListeners[r] = []
                })
            } catch (r) {
                this.logger.log(d.ERROR, r.message),
                this.errorHandler.handleError(r)
            }
        }
        ,
        t.prototype.clearNotificationListeners = function(e) {
            try {
                this.notificationListeners[e] = []
            } catch (r) {
                this.logger.log(d.ERROR, r.message),
                this.errorHandler.handleError(r)
            }
        }
        ,
        t.prototype.sendNotifications = function(e, r) {
            var n = this;
            try {
                (this.notificationListeners[e] || []).forEach(function(i) {
                    var o = i.callback;
                    try {
                        o(r)
                    } catch (a) {
                        n.logger.log(d.ERROR, p.NOTIFICATION_LISTENER_EXCEPTION, "NOTIFICATION_CENTER", e, a.message)
                    }
                })
            } catch (i) {
                this.logger.log(d.ERROR, i.message),
                this.errorHandler.handleError(i)
            }
        }
        ,
        t
    }()
      , Vu = {
        createEventProcessor: function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return new (ft.LogTierV1EventProcessor.bind.apply(ft.LogTierV1EventProcessor, vr([void 0], t)))
        },
        LocalStoragePendingEventsDispatcher: ft.LocalStoragePendingEventsDispatcher
    };
    function Fu(t, e, r, n) {
        var i = {
            sdkKey: t
        };
        if ((n === void 0 || typeof n == "object" && n !== null) && L.assign(i, n),
        r) {
            var o = Ri({
                datafile: r,
                jsonSchemaValidator: void 0,
                logger: e
            })
              , a = o.configObj
              , u = o.error;
            u && e.error(u),
            a && (i.datafile = Oi(a))
        }
        return new fu.HttpPollingDatafileManager(i)
    }
    var de = F.getLogger();
    F.setLogHandler(Ei()),
    F.setLogLevel(F.LogLevel.INFO);
    var _r = !1
      , Vi = function(t) {
        try {
            var e = !1;
            t.errorHandler && F.setErrorHandler(t.errorHandler),
            t.logger && (F.setLogHandler(t.logger),
            F.setLogLevel(F.LogLevel.NOTSET)),
            t.logLevel !== void 0 && F.setLogLevel(t.logLevel);
            try {
                Eu(t),
                e = !0
            } catch (f) {
                de.error(f)
            }
            var r = void 0;
            t.eventDispatcher == null ? (r = new ft.LocalStoragePendingEventsDispatcher({
                eventDispatcher: Ir
            }),
            _r || (r.sendPendingEvents(),
            _r = !0)) : r = t.eventDispatcher;
            var n = t.eventBatchSize
              , i = t.eventFlushInterval;
            Cu(t.eventBatchSize) || (de.warn("Invalid eventBatchSize %s, defaulting to %s", t.eventBatchSize, 10),
            n = 10),
            Pu(t.eventFlushInterval) || (de.warn("Invalid eventFlushInterval %s, defaulting to %s", t.eventFlushInterval, 1e3),
            i = 1e3);
            var o = F.getErrorHandler()
              , a = new wu({
                logger: de,
                errorHandler: o
            })
              , u = {
                dispatcher: r,
                flushInterval: i,
                batchSize: n,
                maxQueueSize: t.eventMaxQueueSize || 1e4,
                notificationCenter: a
            }
              , s = Ie(Ie({
                clientEngine: "javascript-sdk"
            }, t), {
                eventProcessor: Vu.createEventProcessor(u),
                logger: de,
                errorHandler: o,
                datafileManager: t.sdkKey ? Fu(t.sdkKey, de, t.datafile, t.datafileOptions) : void 0,
                notificationCenter: a,
                isValidInstance: e
            })
              , l = new Lu(s);
            try {
                if (typeof window.addEventListener == "function") {
                    var c = "onpagehide"in window ? "pagehide" : "unload";
                    window.addEventListener(c, function() {
                        l.close()
                    }, !1)
                }
            } catch (f) {
                de.error(p.UNABLE_TO_ATTACH_UNLOAD, "INDEX_BROWSER", f.message)
            }
            return l
        } catch (f) {
            return de.error(f),
            null
        }
    }
      , Fi = function() {
        _r = !1
    }
      , xu = {
        logging: gi,
        errorHandler: pi,
        eventDispatcher: Ir,
        enums: di,
        setLogger: F.setLogHandler,
        setLogLevel: F.setLogLevel,
        createInstance: Vi,
        __internalResetRetryState: Fi,
        OptimizelyDecideOption: w.OptimizelyDecideOption
    };
    Object.defineProperty(w, "setLogLevel", {
        enumerable: !0,
        get: function() {
            return F.setLogLevel
        }
    }),
    Object.defineProperty(w, "setLogger", {
        enumerable: !0,
        get: function() {
            return F.setLogHandler
        }
    }),
    w.__internalResetRetryState = Fi,
    w.createInstance = Vi,
    w.default = xu,
    w.enums = di,
    w.errorHandler = pi,
    w.eventDispatcher = Ir,
    w.logging = gi
}
);
var Ar = b(P => {
    "use strict";
    Object.defineProperty(P, "__esModule", {
        value: !0
    });
    var A = Lr()
      , Et = te()
      , Mu = uo()
      , ie = Ae();
    function ku(t) {
        return t && typeof t == "object" && "default"in t ? t : {
            default: t
        }
    }
    var Gu = ku(Mu)
      , be = A.createContext({
        optimizely: null,
        isServerSide: !1,
        timeout: 0
    })
      , Mi = be.Consumer
      , ki = be.Provider;
    var yr = function(t, e) {
        return yr = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(r, n) {
            r.__proto__ = n
        }
        || function(r, n) {
            for (var i in n)
                n.hasOwnProperty(i) && (r[i] = n[i])
        }
        ,
        yr(t, e)
    };
    function Gi(t, e) {
        yr(t, e);
        function r() {
            this.constructor = t
        }
        t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype,
        new r)
    }
    var C = function() {
        return C = Object.assign || function(e) {
            for (var r, n = 1, i = arguments.length; n < i; n++) {
                r = arguments[n];
                for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        }
        ,
        C.apply(this, arguments)
    };
    function Bu(t, e) {
        var r = {};
        for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
        return r
    }
    function Bi(t, e) {
        if (t.id !== e.id)
            return !1;
        var r = Object.keys(t.attributes || {})
          , n = Object.keys(e.attributes || {});
        r.sort(),
        n.sort();
        var i = t.attributes || {}
          , o = e.attributes || {}
          , a = r.length === n.length;
        if (!a)
            return !1;
        for (var u = 0; u < r.length; u++) {
            var s = r[u]
              , l = n[u];
            if (s !== l || i[s] !== o[l])
                return !1
        }
        return !0
    }
    function Ku(t, e, r) {
        var n = function(i, o) {
            return A.createElement(t, C({}, i, {
                forwardedRef: o
            }))
        };
        return n.displayName = r + "(" + (e.displayName || e.name) + ")",
        Gu.default(A.forwardRef(n), e)
    }
    function xi(t) {
        return typeof t == "object" && t !== null ? t : {}
    }
    function Ki(t, e) {
        var r = xi(t)
          , n = xi(e)
          , i = Object.keys(r)
          , o = Object.keys(n);
        return i.length !== o.length ? !1 : i.every(function(a) {
            return a in n && r[a] === n[a]
        })
    }
    function ke(t, e, r) {
        return {
            enabled: !1,
            flagKey: t,
            ruleKey: null,
            variationKey: null,
            variables: {},
            reasons: [e],
            userContext: {
                id: r.id,
                attributes: r.attributes
            }
        }
    }
    var mr = Et.getLogger("<OptimizelyProvider>"), zu = function(t) {
        Gi(e, t);
        function e(r) {
            var n = t.call(this, r) || this
              , i = r.optimizely
              , o = r.userId
              , a = r.userAttributes
              , u = r.user
              , s = null;
            if (u ? "then"in u ? u.then(function(l) {
                i.setUser(l)
            }) : s = {
                id: u.id,
                attributes: u.attributes || {}
            } : o && (s = {
                id: o,
                attributes: a || {}
            },
            mr.warn("Passing userId and userAttributes as props is deprecated, please switch to using `user` prop")),
            s)
                if (!i)
                    mr.error("Unable to set user " + s + " because optimizely object does not exist.");
                else
                    try {
                        i.setUser(s)
                    } catch {
                        mr.error("Unable to set user " + s + " because passed in optimizely object does not contain the setUser function.")
                    }
            return n
        }
        return e.prototype.componentDidUpdate = function(r) {
            if (!r.isServerSide) {
                var n = this.props.optimizely;
                this.props.user && "id"in this.props.user && (n.user.id ? Bi({
                    id: n.user.id,
                    attributes: n.user.attributes || {}
                }, {
                    id: this.props.user.id,
                    attributes: this.props.user.attributes || {}
                }) || n.setUser(this.props.user) : n.setUser(this.props.user))
            }
        }
        ,
        e.prototype.render = function() {
            var r = this.props
              , n = r.optimizely
              , i = r.children
              , o = r.timeout
              , a = !!this.props.isServerSide
              , u = {
                optimizely: n,
                isServerSide: a,
                timeout: o
            };
            return A.createElement(ki, {
                value: u
            }, i)
        }
        ,
        e
    }(A.Component), Or = function(t, e, r, n, i) {
        var o = "re-evaluating " + e + '="' + r + '" for user="' + t.user.id + '"'
          , a = t.notificationCenter.addNotificationListener(ie.enums.NOTIFICATION_TYPES.OPTIMIZELY_CONFIG_UPDATE, function() {
            n.info(ie.enums.NOTIFICATION_TYPES.OPTIMIZELY_CONFIG_UPDATE + ", " + o),
            i()
        })
          , u = function() {
            return t.notificationCenter.removeNotificationListener(a)
        }
          , s = t.onUserUpdate(function() {
            n.info("User update, " + o),
            i()
        });
        return function() {
            u(),
            s()
        }
    }, ju = function() {
        function t() {
            this.observers = []
        }
        return t.getInstance = function() {
            return t.instance || (t.instance = new t),
            t.instance
        }
        ,
        t.prototype.subscribe = function(e, r) {
            var n = this
              , i = "key-" + Math.floor(1e5 + Math.random() * 999999);
            return this.observers.push({
                subscriptionId: i,
                key: e,
                callback: r
            }),
            function() {
                var o = n.observers.findIndex(function(a) {
                    return a.subscriptionId === i
                });
                o >= 0 && n.observers.splice(o, 1)
            }
        }
        ,
        t.prototype.notify = function(e) {
            this.observers.filter(function(r) {
                return r.key === e
            }).forEach(function(r) {
                return r.callback()
            })
        }
        ,
        t
    }(), pt = ju.getInstance(), Q = Et.getLogger("ReactSDK"), Ge;
    (function(t) {
        t.EXPERIMENT = "Experiment",
        t.FEATURE = "Feature"
    }
    )(Ge || (Ge = {}));
    function Rr(t, e) {
        return t.entityKey === e.entityKey && t.overrideUserId === e.overrideUserId && Ki(t.overrideAttributes, e.overrideAttributes)
    }
    function Tr(t, e, r) {
        t.onReady({
            timeout: e
        }).then(function(n) {
            if (n.success) {
                Q.info("Client became ready"),
                r({
                    clientReady: !0,
                    didTimeout: !1
                });
                return
            }
            switch (n.reason) {
            case "NO_CLIENT":
                Q.warn('Client not ready, reason="' + n.message + '"'),
                r({
                    clientReady: !1,
                    didTimeout: !1
                }),
                n.dataReadyPromise.then(function() {
                    Q.info("Client became ready."),
                    r({
                        clientReady: !0,
                        didTimeout: !1
                    })
                });
                break;
            default:
                Q.info("Client did not become ready before timeout of " + e + 'ms, reason="' + n.message + '"'),
                r({
                    clientReady: !1,
                    didTimeout: !0
                }),
                n.dataReadyPromise.then(function() {
                    Q.info("Client became ready after timeout already elapsed"),
                    r({
                        clientReady: !0,
                        didTimeout: !0
                    })
                })
            }
        }).catch(function() {
            Q.error("Error initializing client. The core client or user promise(s) rejected.")
        })
    }
    function Nr(t) {
        var e = A.useRef();
        return Ki(t, e.current) || (e.current = t),
        e.current
    }
    var zi = function(t, e, r) {
        e === void 0 && (e = {}),
        r === void 0 && (r = {});
        var n = A.useContext(be)
          , i = n.optimizely
          , o = n.isServerSide
          , a = n.timeout;
        if (!i)
            return Q.error("Unable to use experiment " + t + ". optimizely prop must be supplied via a parent <OptimizelyProvider>"),
            [null, !1, !1];
        var u = Nr(r.overrideAttributes)
          , s = A.useCallback(function() {
            return {
                variation: i.activate(t, r.overrideUserId, u)
            }
        }, [i, t, r.overrideUserId, u])
          , l = o || i.isReady()
          , c = A.useState(function() {
            var v = l ? s() : {
                variation: null
            };
            return C({}, v, {
                clientReady: l,
                didTimeout: !1
            })
        })
          , f = c[0]
          , E = c[1]
          , _ = {
            entityKey: t,
            overrideUserId: r.overrideUserId,
            overrideAttributes: u
        }
          , y = A.useState(_)
          , g = y[0]
          , h = y[1];
        Rr(g, _) || (h(_),
        E(function(v) {
            return C({}, v, s())
        }));
        var T = e.timeout !== void 0 ? e.timeout : a;
        return A.useEffect(function() {
            (i.getIsUsingSdkKey() && !i.getIsReadyPromiseFulfilled() || !l) && Tr(i, T, function(v) {
                E(C({}, s(), v))
            })
        }, []),
        A.useEffect(function() {
            return i.getIsReadyPromiseFulfilled() && e.autoUpdate ? Or(i, Ge.EXPERIMENT, t, Q, function() {
                E(function(v) {
                    return C({}, v, s())
                })
            }) : function() {}
        }, [i.getIsReadyPromiseFulfilled(), e.autoUpdate, i, t, s]),
        A.useEffect(function() {
            return i.onForcedVariationsUpdate(function() {
                E(function(v) {
                    return C({}, v, s())
                })
            })
        }, [s, i]),
        [f.variation, f.clientReady, f.didTimeout]
    }
      , ji = function(t, e, r) {
        e === void 0 && (e = {}),
        r === void 0 && (r = {});
        var n = A.useContext(be)
          , i = n.optimizely
          , o = n.isServerSide
          , a = n.timeout;
        if (!i)
            return Q.error("Unable to properly use feature " + t + ". optimizely prop must be supplied via a parent <OptimizelyProvider>"),
            [!1, {}, !1, !1];
        var u = Nr(r.overrideAttributes)
          , s = A.useCallback(function() {
            return {
                isEnabled: i.isFeatureEnabled(t, r.overrideUserId, u),
                variables: i.getFeatureVariables(t, r.overrideUserId, u)
            }
        }, [i, t, r.overrideUserId, u])
          , l = o || i.isReady()
          , c = A.useState(function() {
            var v = l ? s() : {
                isEnabled: !1,
                variables: {}
            };
            return C({}, v, {
                clientReady: l,
                didTimeout: !1
            })
        })
          , f = c[0]
          , E = c[1]
          , _ = {
            entityKey: t,
            overrideUserId: r.overrideUserId,
            overrideAttributes: r.overrideAttributes
        }
          , y = A.useState(_)
          , g = y[0]
          , h = y[1];
        Rr(g, _) || (h(_),
        E(function(v) {
            return C({}, v, s())
        }));
        var T = e.timeout !== void 0 ? e.timeout : a;
        return A.useEffect(function() {
            (i.getIsUsingSdkKey() || !l) && Tr(i, T, function(v) {
                E(C({}, s(), v))
            })
        }, []),
        A.useEffect(function() {
            return i.getIsReadyPromiseFulfilled() && e.autoUpdate ? Or(i, Ge.FEATURE, t, Q, function() {
                E(function(v) {
                    return C({}, v, s())
                })
            }) : function() {}
        }, [i.getIsReadyPromiseFulfilled(), e.autoUpdate, i, t, s]),
        [f.isEnabled, f.variables, f.clientReady, f.didTimeout]
    }
      , Hu = function(t, e, r) {
        e === void 0 && (e = {}),
        r === void 0 && (r = {});
        var n = A.useContext(be)
          , i = n.optimizely
          , o = n.isServerSide
          , a = n.timeout;
        if (!i)
            return Q.error("Unable to use decision " + t + ". optimizely prop must be supplied via a parent <OptimizelyProvider>"),
            [ke(t, "Optimizely SDK not configured properly yet.", {
                id: null,
                attributes: {}
            }), !1, !1];
        var u = Nr(r.overrideAttributes)
          , s = function() {
            return {
                decision: i.decide(t, e.decideOptions, r.overrideUserId, u)
            }
        }
          , l = o || i.isReady()
          , c = A.useState(function() {
            var v = l ? s() : {
                decision: ke(t, "Optimizely SDK not configured properly yet.", {
                    id: r.overrideUserId || null,
                    attributes: u
                })
            };
            return C({}, v, {
                clientReady: l,
                didTimeout: !1
            })
        })
          , f = c[0]
          , E = c[1]
          , _ = {
            entityKey: t,
            overrideUserId: r.overrideUserId,
            overrideAttributes: r.overrideAttributes
        }
          , y = A.useState(_)
          , g = y[0]
          , h = y[1];
        Rr(g, _) || (h(_),
        E(function(v) {
            return C({}, v, s())
        }));
        var T = e.timeout !== void 0 ? e.timeout : a;
        return A.useEffect(function() {
            (i.getIsUsingSdkKey() || !l) && Tr(i, T, function(v) {
                E(C({}, s(), v))
            })
        }, []),
        A.useEffect(function() {
            if (!(r.overrideUserId || r.overrideAttributes || !e.autoUpdate))
                return pt.subscribe(t, function() {
                    E(function(v) {
                        return C({}, v, s())
                    })
                })
        }, [r.overrideUserId, r.overrideAttributes, e.autoUpdate]),
        A.useEffect(function() {
            return i.getIsReadyPromiseFulfilled() && e.autoUpdate ? Or(i, Ge.FEATURE, t, Q, function() {
                E(function(v) {
                    return C({}, v, s())
                })
            }) : function() {}
        }, [i.getIsReadyPromiseFulfilled(), e.autoUpdate, i, t, s]),
        [f.decision, f.clientReady, f.didTimeout]
    }
      , qu = function(t) {
        var e = t.feature
          , r = t.timeout
          , n = t.autoUpdate
          , i = t.children
          , o = t.overrideUserId
          , a = t.overrideAttributes
          , u = ji(e, {
            timeout: r,
            autoUpdate: n
        }, {
            overrideUserId: o,
            overrideAttributes: a
        })
          , s = u[0]
          , l = u[1]
          , c = u[2]
          , f = u[3];
        return !c && !f ? null : A.createElement(A.Fragment, null, i(s, l, c, f))
    }
      , Yu = qu;
    function Wu(t) {
        var e = function(n) {
            Gi(i, n);
            function i() {
                return n !== null && n.apply(this, arguments) || this
            }
            return i.prototype.render = function() {
                var o = this.props
                  , a = o.forwardedRef
                  , u = Bu(o, ["forwardedRef"]);
                return A.createElement(Mi, null, function(s) {
                    return A.createElement(t, C({}, u, {
                        optimizelyReadyTimeout: s.timeout,
                        optimizely: s.optimizely,
                        isServerSide: s.isServerSide,
                        ref: a
                    }))
                })
            }
            ,
            i
        }(A.Component)
          , r = Ku(e, t, "withOptimizely");
        return r
    }
    var Xu = function(t) {
        var e = t.experiment
          , r = t.autoUpdate
          , n = t.timeout
          , i = t.overrideUserId
          , o = t.overrideAttributes
          , a = t.children
          , u = zi(e, {
            timeout: n,
            autoUpdate: r
        }, {
            overrideUserId: i,
            overrideAttributes: o
        })
          , s = u[0]
          , l = u[1]
          , c = u[2];
        if (!l && !c)
            return null;
        if (a != null && typeof a == "function")
            return A.createElement(A.Fragment, null, a(s, l, c));
        var f = null;
        return A.Children.forEach(a, function(E) {
            f || !A.isValidElement(E) || (E.props.variation ? s === E.props.variation && (f = E) : E.props.default && (f = E))
        }),
        f ? A.cloneElement(f, {
            variation: s
        }) : null
    }
      , Ju = Xu
      , Zu = function(t) {
        var e = t.children;
        return A.createElement(A.Fragment, null, e)
    }
      , Qu = Zu
      , m = Et.getLogger("ReactSDK")
      , $u = "react-sdk"
      , el = "2.9.1"
      , tl = 5e3
      , rl = function() {
        function t(e) {
            var r = this;
            this.user = {
                id: null,
                attributes: {}
            },
            this.userContext = null,
            this.isUserPromiseResolved = !1,
            this.onUserUpdateHandlers = [],
            this.onForcedVariationsUpdateHandlers = [],
            this.forcedDecisionFlagKeys = new Set,
            this.isClientReady = !1,
            this.isReadyPromiseFulfilled = !1,
            this.isUserReady = !1,
            this.isUsingSdkKey = !1,
            this.initialConfig = e,
            this.userPromiseResolver = function() {}
            ;
            var n = C({}, e, {
                clientEngine: $u,
                clientVersion: el
            });
            this._client = ie.createInstance(n),
            this.isClientReady = !!n.datafile,
            this.isUsingSdkKey = !!n.sdkKey,
            this.userPromise = new Promise(function(i) {
                r.userPromiseResolver = i
            }
            ).then(function() {
                return r.isUserReady = !0,
                {
                    success: !0
                }
            }),
            this._client ? (this._client.onReady().then(function() {
                r.isClientReady = !0
            }),
            this.dataReadyPromise = Promise.all([this.userPromise, this._client.onReady()]).then(function() {
                return r.isReadyPromiseFulfilled = !0,
                {
                    success: !0,
                    message: "Successfully resolved datafile and user information."
                }
            })) : (m.warn("Unable to resolve datafile and user information because Optimizely client failed to initialize."),
            this.dataReadyPromise = new Promise(function(i, o) {
                i({
                    success: !1,
                    reason: "NO_CLIENT",
                    message: "Optimizely client failed to initialize."
                })
            }
            ))
        }
        return t.prototype.getIsReadyPromiseFulfilled = function() {
            return this.isReadyPromiseFulfilled
        }
        ,
        t.prototype.getIsUsingSdkKey = function() {
            return this.isUsingSdkKey
        }
        ,
        t.prototype.onReady = function(e) {
            var r = this;
            e === void 0 && (e = {});
            var n, i = tl;
            e && e.timeout !== void 0 && (i = e.timeout);
            var o = new Promise(function(a) {
                n = setTimeout(function() {
                    a({
                        success: !1,
                        reason: "TIMEOUT",
                        message: "failed to initialize onReady before timeout, either the datafile or user info was not set before the timeout",
                        dataReadyPromise: r.dataReadyPromise
                    })
                }, i)
            }
            );
            return Promise.race([this.dataReadyPromise, o]).then(function(a) {
                return clearTimeout(n),
                a
            })
        }
        ,
        t.prototype.getUserContextInstance = function(e) {
            if (!this._client)
                return m.warn('Unable to get user context for user id "%s" because Optimizely client failed to initialize.', e.id),
                null;
            var r = null;
            return this.userContext ? Bi(e, this.user) ? this.userContext : e.id ? (r = this._client.createUserContext(e.id, e.attributes),
            r) : null : e.id ? (this.userContext = this._client.createUserContext(e.id, e.attributes),
            this.userContext) : null
        }
        ,
        t.prototype.setUser = function(e) {
            var r = this;
            e.id && (this.user.id = e.id,
            this.isUserReady = !0,
            this._client ? this.userContext = this._client.createUserContext(e.id, e.attributes) : m.warn('Unable to create user context for user id "%s" because Optimizely client failed to initialize.', this.user.id)),
            e.attributes && (this.user.attributes = e.attributes),
            this.isUserPromiseResolved || (this.userPromiseResolver(this.user),
            this.isUserPromiseResolved = !0),
            this.onUserUpdateHandlers.forEach(function(n) {
                return n(r.user)
            })
        }
        ,
        t.prototype.onUserUpdate = function(e) {
            var r = this;
            return this.onUserUpdateHandlers.push(e),
            function() {
                var n = r.onUserUpdateHandlers.indexOf(e);
                n > -1 && r.onUserUpdateHandlers.splice(n, 1)
            }
        }
        ,
        t.prototype.onForcedVariationsUpdate = function(e) {
            var r = this;
            return this.onForcedVariationsUpdateHandlers.push(e),
            function() {
                var n = r.onForcedVariationsUpdateHandlers.indexOf(e);
                n > -1 && r.onForcedVariationsUpdateHandlers.splice(n, 1)
            }
        }
        ,
        t.prototype.isReady = function() {
            return this.isUserReady && this.isClientReady
        }
        ,
        t.prototype.activate = function(e, r, n) {
            if (!this._client)
                return m.warn('Unable to activate experiment "%s" because Optimizely client failed to initialize.', e),
                null;
            var i = this.getUserContextWithOverrides(r, n);
            return i.id === null ? (m.info('Unable to activate experiment "%s" because User ID is not set', e),
            null) : this._client.activate(e, i.id, i.attributes)
        }
        ,
        t.prototype.decide = function(e, r, n, i) {
            if (r === void 0 && (r = []),
            !this._client)
                return m.warn('Unable to evaluate feature "%s" because Optimizely client failed to initialize.', e),
                ke(e, "Unable to evaluate flag " + e + " because Optimizely client failed to initialize.", this.user);
            var o = this.getUserContextWithOverrides(n, i);
            if (o.id === null)
                return m.info('Unable to evaluate feature "%s" because User ID is not set.', e),
                ke(e, "Unable to evaluate flag " + e + " because User ID is not set.", o);
            var a = this.getUserContextInstance(o);
            return a ? C({}, a.decide(e, r), {
                userContext: {
                    id: o.id,
                    attributes: o.attributes
                }
            }) : ke(e, "Not Evaluating flag " + e + " because user id or attributes are not valid", o)
        }
        ,
        t.prototype.decideForKeys = function(e, r, n, i) {
            if (r === void 0 && (r = []),
            !this._client)
                return m.warn("Unable to evaluate features for keys because Optimizely client failed to initialize."),
                {};
            var o = this.getUserContextWithOverrides(n, i);
            if (o.id === null)
                return m.info("Unable to evaluate features for keys because User ID is not set"),
                {};
            var a = this.getUserContextInstance(o);
            return a ? Object.entries(a.decideForKeys(e, r)).reduce(function(u, s) {
                var l = s[0]
                  , c = s[1];
                return u[l] = C({}, c, {
                    userContext: {
                        id: o.id || "",
                        attributes: o.attributes
                    }
                }),
                u
            }, {}) : {}
        }
        ,
        t.prototype.decideAll = function(e, r, n) {
            if (e === void 0 && (e = []),
            !this._client)
                return m.warn("Unable to evaluate all feature decisions because Optimizely client is not initialized."),
                {};
            var i = this.getUserContextWithOverrides(r, n);
            if (i.id === null)
                return m.info("Unable to evaluate all feature decisions because User ID is not set"),
                {};
            var o = this.getUserContextInstance(i);
            return o ? Object.entries(o.decideAll(e)).reduce(function(a, u) {
                var s = u[0]
                  , l = u[1];
                return a[s] = C({}, l, {
                    userContext: {
                        id: i.id || "",
                        attributes: i.attributes
                    }
                }),
                a
            }, {}) : {}
        }
        ,
        t.prototype.getVariation = function(e, r, n) {
            if (!this._client)
                return m.warn('Unable to get variation for experiment "%s" because Optimizely client failed to initialize.', e),
                null;
            var i = this.getUserContextWithOverrides(r, n);
            return i.id === null ? (m.info('Unable to get variation for experiment "%s" because User ID is not set', e),
            null) : this._client.getVariation(e, i.id, i.attributes)
        }
        ,
        t.prototype.track = function(e, r, n, i) {
            if (!this._client) {
                m.warn('Unable to send tracking event "%s" because Optimizely client failed to initialize.', e);
                return
            }
            typeof r < "u" && typeof r != "string" && (i = r,
            r = void 0,
            n = void 0);
            var o = this.getUserContextWithOverrides(r, n);
            if (o.id === null) {
                m.info('Unable to send tracking event "%s" because User ID is not set', e);
                return
            }
            this._client.track(e, o.id, o.attributes, i)
        }
        ,
        t.prototype.setForcedDecision = function(e, r) {
            if (!this.userContext) {
                m.warn("Unable to set a forced decision because the user context has not been set yet.");
                return
            }
            var n = this.userContext.setForcedDecision(e, r);
            n && (this.forcedDecisionFlagKeys.add(e.flagKey),
            pt.notify(e.flagKey))
        }
        ,
        t.prototype.getForcedDecision = function(e) {
            return this.userContext ? this.userContext.getForcedDecision(e) : (m.warn("Unable to get a forced decision because the user context has not been set yet."),
            null)
        }
        ,
        t.prototype.removeForcedDecision = function(e) {
            if (!this.userContext)
                return m.warn("Unable to remove forced decisions because the user context has not been set yet."),
                !1;
            var r = this.userContext.removeForcedDecision(e);
            return r && (this.forcedDecisionFlagKeys.delete(e.flagKey),
            pt.notify(e.flagKey)),
            r
        }
        ,
        t.prototype.removeAllForcedDecisions = function() {
            if (!this.userContext)
                return m.warn("Unable to remove all forced decisions because the user context has not been set yet."),
                !1;
            var e = this.userContext.removeAllForcedDecisions();
            return e && (this.forcedDecisionFlagKeys.forEach(function(r) {
                return pt.notify(r)
            }),
            this.forcedDecisionFlagKeys.clear()),
            e
        }
        ,
        t.prototype.isFeatureEnabled = function(e, r, n) {
            if (!this._client)
                return m.warn('Unable to determine if feature "%s" is enabled because Optimizely client failed to initialize.', e),
                !1;
            var i = this.getUserContextWithOverrides(r, n);
            return i.id === null ? (m.info('Unable to determine if feature "%s" is enabled because User ID is not set', e),
            !1) : this._client.isFeatureEnabled(e, i.id, i.attributes)
        }
        ,
        t.prototype.getFeatureVariables = function(e, r, n) {
            var i = this;
            if (!this._client)
                return m.warn('Unable to get feature variables for feature "%s" because Optimizely client failed to initialize.', e),
                {};
            var o = this.getUserContextWithOverrides(r, n)
              , a = o.id;
            if (a === null)
                return m.warn('Unable to get feature variables for feature "%s" because User ID is not set', e),
                {};
            var u = o.attributes
              , s = {}
              , l = this._client.getOptimizelyConfig();
            if (!l)
                return m.warn('Unable to retrieve feature variables for feature "%s" because Optimizely client failed to initialize.', e),
                {};
            var c = l.featuresMap[e];
            return c ? (Object.keys(c.variablesMap).forEach(function(f) {
                var E = c.variablesMap[f];
                s[E.key] = i._client.getFeatureVariable(e, E.key, a, u)
            }),
            s) : (m.info('Unable to retrieve feature variables for feature "%s" because config features map is not set', e),
            {})
        }
        ,
        t.prototype.getFeatureVariableString = function(e, r, n, i) {
            if (!this._client)
                return m.warn('Unable to get feature variable string from feature "%s" because Optimizely client failed to initialize.', e),
                null;
            var o = this.getUserContextWithOverrides(n, i);
            return o.id === null ? (m.info('Unable to get feature variable string from feature "%s" because User ID is not set', e),
            null) : this._client.getFeatureVariableString(e, r, o.id, o.attributes)
        }
        ,
        t.prototype.getFeatureVariableBoolean = function(e, r, n, i) {
            if (!this._client)
                return m.warn('Unable to get feature variable boolean from feature "%s" because Optimizely client failed to initialize.', e),
                null;
            var o = this.getUserContextWithOverrides(n, i);
            return o.id === null ? (m.info('Unable to get feature variable boolean from feature "%s" because User ID is not set', e),
            null) : this._client.getFeatureVariableBoolean(e, r, o.id, o.attributes)
        }
        ,
        t.prototype.getFeatureVariableInteger = function(e, r, n, i) {
            if (!this._client)
                return m.warn('Unable to get feature variable integer from feature "%s" because Optimizely client failed to initialize.', e),
                null;
            var o = this.getUserContextWithOverrides(n, i);
            return o.id === null ? (m.info('Unable to get feature variable integer from feature "%s" because User ID is not set', e),
            null) : this._client.getFeatureVariableInteger(e, r, o.id, o.attributes)
        }
        ,
        t.prototype.getFeatureVariableDouble = function(e, r, n, i) {
            if (!this._client)
                return m.warn('Unable to get feature variable double from feature "%s" because Optimizely client failed to initialize.', e),
                null;
            var o = this.getUserContextWithOverrides(n, i);
            return o.id === null ? (m.info('Unable to get feature variable double from feature "%s" because User ID is not set', e),
            null) : this._client.getFeatureVariableDouble(e, r, o.id, o.attributes)
        }
        ,
        t.prototype.getFeatureVariableJSON = function(e, r, n, i) {
            if (!this._client)
                return m.warn('Unable to get feature variable JSON from feature "%s" because Optimizely client failed to initialize.', e),
                null;
            var o = this.getUserContextWithOverrides(n, i);
            return o.id === null ? (m.info('Unable to get feature variable JSON from feature "%s" because User ID is not set', e),
            null) : this._client.getFeatureVariableJSON(e, r, o.id, o.attributes)
        }
        ,
        t.prototype.getFeatureVariable = function(e, r, n, i) {
            if (!this._client)
                return m.warn('Unable to get feature variable from feature "%s" because Optimizely client failed to initialize.', e, r),
                null;
            var o = this.getUserContextWithOverrides(n, i);
            return o.id === null ? (m.info('Unable to get feature variable from feature "%s" because User ID is not set', e, r),
            null) : this._client.getFeatureVariable(e, r, o.id, o.attributes)
        }
        ,
        t.prototype.getAllFeatureVariables = function(e, r, n) {
            if (!this._client)
                return m.warn('Unable to get all feature variables from feature "%s" because Optimizely client failed to initialize.', e),
                {};
            var i = this.getUserContextWithOverrides(r, n);
            return i.id === null ? (m.info('Unable to get all feature variables from feature "%s" because User ID is not set', e),
            {}) : this._client.getAllFeatureVariables(e, i.id, i.attributes)
        }
        ,
        t.prototype.getEnabledFeatures = function(e, r) {
            if (!this._client)
                return m.warn("Unable to get list of enabled features because Optimizely client failed to initialize."),
                [];
            var n = this.getUserContextWithOverrides(e, r);
            return n.id === null ? (m.info("Unable to get list of enabled features because User ID is not set"),
            []) : this._client.getEnabledFeatures(n.id, n.attributes)
        }
        ,
        t.prototype.getForcedVariation = function(e, r) {
            if (!this._client)
                return m.warn('Unable to get forced variation for experiment "%s" because Optimizely client failed to initialize.', e),
                null;
            var n = this.getUserContextWithOverrides(r);
            return n.id === null ? (m.info('Unable to get forced variation for experiment "%s" because User ID is not set', e),
            null) : this._client.getForcedVariation(e, n.id)
        }
        ,
        t.prototype.setForcedVariation = function(e, r, n) {
            if (!this._client)
                return m.warn('Unable to set forced variation for experiment "%s" because Optimizely client failed to initialize.', e),
                !1;
            var i = null
              , o = null;
            if (arguments.length === 2)
                o = r,
                i = this.getUserContextWithOverrides().id;
            else if (arguments.length === 3) {
                if (i = this.getUserContextWithOverrides(r).id,
                n === void 0)
                    return !1;
                o = n
            }
            if (i === null)
                return m.warn('Unable to set forced variation for experiment "%s" because User ID is not set', e),
                !1;
            var a = this._client.setForcedVariation(e, i, o);
            return this.onForcedVariationsUpdateHandlers.forEach(function(u) {
                return u()
            }),
            a
        }
        ,
        t.prototype.getOptimizelyConfig = function() {
            return this._client ? this._client.getOptimizelyConfig() : (m.warn("Unable to get Optimizely configuration because Optimizely client failed to initialize."),
            null)
        }
        ,
        t.prototype.close = function() {
            return this._client ? this._client.close() : new Promise(function(e, r) {
                return e({
                    success: !0,
                    reason: "Optimizely client is not initialized."
                })
            }
            )
        }
        ,
        Object.defineProperty(t.prototype, "client", {
            get: function() {
                return this._client ? this._client : (m.warn("Unable to get client because Optimizely client failed to initialize."),
                null)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "notificationCenter", {
            get: function() {
                return this._client ? this._client.notificationCenter : {
                    addNotificationListener: function() {
                        return m.warn("Unable to add notification listener because Optimizely client failed to initialize."),
                        0
                    },
                    removeNotificationListener: function() {
                        return m.warn("Unable to remove notification listener because Optimizely client failed to initialize."),
                        !1
                    },
                    clearAllNotificationListeners: function() {
                        m.warn("Unable to clear all notification listeners because Optimizely client failed to initialize.")
                    },
                    clearNotificationListeners: function() {
                        m.warn("Unable to clear notification listeners because Optimizely client failed to initialize.")
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.getUserContextWithOverrides = function(e, r) {
            var n = e === void 0 ? this.user.id : e
              , i = r === void 0 ? this.user.attributes : r;
            return {
                id: n,
                attributes: i
            }
        }
        ,
        t
    }();
    function nl(t) {
        return new rl(t)
    }
    var il = Et.getLogger("ReactSDK")
      , ol = {
        dispatchEvent: function(t, e) {
            il.debug("Event not dispatched by disabled event dispatcher: %s", function() {
                var r;
                try {
                    r = JSON.stringify(t)
                } catch {
                    r = "error stringifying event"
                }
                return r
            }),
            e({
                statusCode: 204
            })
        }
    };
    Object.defineProperty(P, "OptimizelyDecideOption", {
        enumerable: !0,
        get: function() {
            return ie.OptimizelyDecideOption
        }
    });
    Object.defineProperty(P, "enums", {
        enumerable: !0,
        get: function() {
            return ie.enums
        }
    });
    Object.defineProperty(P, "errorHandler", {
        enumerable: !0,
        get: function() {
            return ie.errorHandler
        }
    });
    Object.defineProperty(P, "eventDispatcher", {
        enumerable: !0,
        get: function() {
            return ie.eventDispatcher
        }
    });
    Object.defineProperty(P, "logging", {
        enumerable: !0,
        get: function() {
            return ie.logging
        }
    });
    Object.defineProperty(P, "setLogLevel", {
        enumerable: !0,
        get: function() {
            return ie.setLogLevel
        }
    });
    Object.defineProperty(P, "setLogger", {
        enumerable: !0,
        get: function() {
            return ie.setLogger
        }
    });
    P.OptimizelyContext = be;
    P.OptimizelyContextConsumer = Mi;
    P.OptimizelyContextProvider = ki;
    P.OptimizelyExperiment = Ju;
    P.OptimizelyFeature = Yu;
    P.OptimizelyProvider = zu;
    P.OptimizelyVariation = Qu;
    P.createInstance = nl;
    P.logOnlyEventDispatcher = ol;
    P.useDecision = Hu;
    P.useExperiment = zi;
    P.useFeature = ji;
    P.withOptimizely = Wu
}
);
var oe = j(so());
var fo = "Paywall|Social_Networks|Free_Users"
  , po = "social_networks"
  , Eo = "web.dashboard.social_networks"
  , go = {
    paywallPrefix: fo,
    paywall: po,
    TRACKING_ORIGIN: Eo
}
  , Hr = go;
var _o = "Paywall|Scheduled_Post|Free_Users"
  , vo = "schedule_messages"
  , ho = "web.dashboard.scheduling_paywall"
  , Io = {
    paywallPrefix: _o,
    paywall: vo,
    TRACKING_ORIGIN: ho
}
  , qr = Io;
var mo = "Paywall|Free_To_Pro_Login|Free"
  , yo = "free_pro_login"
  , Oo = "web.dashboard.free_pro_login"
  , Ro = {
    paywallPrefix: mo,
    paywall: yo,
    TRACKING_ORIGIN: Oo
}
  , Yr = Ro;
var To = "Paywalls|AnalyticsFree|Free_Users"
  , No = "analytics_free"
  , Ao = "web.analytics.home"
  , bo = {
    paywallPrefix: To,
    paywall: No,
    TRACKING_ORIGIN: Ao
}
  , Wr = bo;
var Uo = "Paywall|Recommended_Post_Times|Free_Users"
  , So = "recommended_times"
  , Do = "web.dashboard.recommended_times.composer"
  , Lo = {
    paywallPrefix: Uo,
    paywall: So,
    TRACKING_ORIGIN: Do
}
  , Xr = Lo;
var Co = "Paywall|RTTP_Alt1|Free_Users"
  , Po = "recommended_times"
  , wo = "web.dashboard.recommended_times.planner"
  , Vo = {
    paywallPrefix: Co,
    paywall: Po,
    TRACKING_ORIGIN: wo
}
  , Jr = Vo;
var Fo = "Paywall|Canva_GenericUpgrade_NoTrial_Alt1|Free_Users"
  , xo = "canva_campaign"
  , Mo = "web.dashboard.composer"
  , ko = {
    paywallPrefix: Fo,
    paywall: xo,
    TRACKING_ORIGIN: Mo
}
  , Zr = ko;
var Go = "Paywall|CanvaCampaignUpgrade_Alt1|Free_Users"
  , Bo = "canva_campaign"
  , Ko = "web.dashboard.composer"
  , zo = {
    paywallPrefix: Go,
    paywall: Bo,
    TRACKING_ORIGIN: Ko
}
  , Qr = zo;
var jo = "Paywall|Canva_EditExistingAsset_Alt1|Free_Users"
  , Ho = "canva_edit"
  , qo = "web.dashboard.composer"
  , Yo = {
    paywallPrefix: jo,
    paywall: Ho,
    TRACKING_ORIGIN: qo
}
  , $r = Yo;
var Wo = "Paywall|Canva_Evergreen_Upgrade_Alt1|Free_Users"
  , Xo = "canva_composer"
  , Jo = "web.dashboard.composer"
  , Zo = {
    paywallPrefix: Wo,
    paywall: Xo,
    TRACKING_ORIGIN: Jo
}
  , en = Zo;
var Qo = "Paywall|CanvaCampaignUpgrade_Alt1|Free_Users|Composer Activation"
  , $o = "canva_composer"
  , ea = "web.dashboard.composer"
  , ta = {
    paywallPrefix: Qo,
    paywall: $o,
    TRACKING_ORIGIN: ea
}
  , tn = ta;
var ra = "Paywall|Canva_Evergreen_Upgrade_Alt1|Free_Users|Temp"
  , na = "canva_composer"
  , ia = "web.dashboard.composer"
  , oa = {
    paywallPrefix: ra,
    paywall: na,
    TRACKING_ORIGIN: ia
}
  , rn = oa;
var aa = "Paywall|HashtagRecommendations_Alt2|Free_Users"
  , sa = "hashtag_suggestions_composer"
  , ua = "web.dashboard.composer"
  , la = {
    paywallPrefix: aa,
    paywall: sa,
    TRACKING_ORIGIN: ua
}
  , nn = la;
var on = [qr, Hr, Yr, Wr, Xr, Jr, $r, Zr, Qr, en, tn, rn, nn];
var Xe = t => on.find( ({paywallPrefix: e}) => ca(t, e))
  , ca = (t, e) => {
    let r = e.replace(/\|/g, "\\|");
    return new RegExp(`^${r}[-_a-zA-Z0-9s]*$`).test(t)
}
;
Pr();
var Rt = async function(t, e, r) {
    let n = await He()
      , i = Xe(t)?.paywall;
    return !n || !i || !e ? null : {
        event: "paywall_engagement",
        action: e,
        userId: n,
        paywall: i,
        ...r && {
            eventLabel: r
        }
    }
};
Sr();
var Nt = j(Tt());
var me = {
    IMPRESSION: "impression",
    DISMISSED: "dismissed",
    ACCEPT: "accept"
}
  , da = {
    plan: hs.memberPlan,
    host: "pendo"
}
  , At = function(t, e, r) {
    let n = {
        ...da,
        ...r
    };
    ze.trackCustom(e, t, n)
}
  , pa = async function(t, e, r) {
    switch (e) {
    case me.IMPRESSION:
        await Ea(t, r);
        break;
    case me.DISMISSED:
        ga(t);
        break;
    case me.ACCEPT:
        await _a(t, r);
        break
    }
}
  , bt = function(t) {
    if (t && t.name)
        return Xe(t.name)?.TRACKING_ORIGIN
}
  , Ea = async function(t, e) {
    let r = await Rt(t.name, me.IMPRESSION, e);
    r && (0,
    Nt.trackGAEvent)(r),
    At("paywall_opened", bt(t), {
        paywallId: t.id
    })
}
  , ga = function(t) {
    At("paywall_close_clicked", bt(t))
}
  , _a = async function(t, e) {
    let r = await Rt(t.name, me.ACCEPT, e);
    r && (0,
    Nt.trackGAEvent)(r),
    At("paywall_upgrade_clicked", bt(t))
};
var Ut = j(ao())
  , St = () => ha(va())
  , va = () => Ut.default.getFeatures().map(t => t.c).filter(t => Ut.default.isFeatureEnabled(t))
  , ha = t => t.filter(e => e.includes("PENDO"));
var Dt = j(co())
  , an = j(Tt());
Pr();
Sr();
var Qe = j(wr())
  , Ia = (t, e="") => {
    let r = document.getElementById("pendo-base");
    t.parentElement.insertBefore(r, t);
    let n = r.querySelector("._pendo-step-container-size");
    n.style.cssText = e
}
  , ma = (t, e="") => {
    if (window.pendo && !window.pendo.designerEnabled) {
        let r = document.getElementById("pendo-base")
          , n = r.cloneNode(!0);
        r.style.display = "none",
        n.id = void 0;
        let i = n.querySelector("._pendo-step-container-size")
          , o = t.children && t.children[0];
        o && o.remove(),
        t.append(n),
        i.style.cssText = e
    }
}
  , ya = async ({entrypoint: t, paywallType: e, paywallVariation: r, paywallExperiment: n, acceptButtons: i=[document.querySelector("._pendo-button-primaryButton")], dismissButtons: o=[document.querySelector("._pendo-button-tertiaryButton"), document.querySelector("._pendo-close-guide")], product_area: a, guideName: u=Ra(), guideId: s=Ta(), forceTrack: l, prefixEventName: c="paywall"}) => {
    if (!(Boolean(l) || (0,
    Qe.env)() === Qe.PRODUCTION))
        return;
    let E = Oa(u)
      , _ = `web.paywalls.${t}`
      , y = await He()
      , g = await Cr()
      , h = v => {
        (0,
        an.trackGAEvent)({
            event: `${c}_engagement`,
            action: v,
            userId: y,
            paywall: E
        })
    }
      , T = v => {
        ze.trackCustom(_, v, {
            guide_id: s,
            guide_segment: Na(),
            user_plan_type: g,
            entrypoint: t,
            paywall_name: E,
            paywall_type: e,
            paywall_experiment: n,
            product_area: a,
            paywall_variation: r
        })
    }
    ;
    h("impression"),
    T(`${c}_impression`),
    i.forEach(v => {
        v && v.addEventListener("click", () => {
            h("accept"),
            T(`${c}_clicked`)
        }
        )
    }
    ),
    o.forEach(v => {
        v && v.addEventListener("click", () => {
            h("dismissed"),
            T(`${c}_dismissed`)
        }
        )
    }
    )
}
;
function Oa(t) {
    return t.split("|")[1] || t
}
var Lt = () => window.pendo && window.pendo.getActiveGuide()
  , Ra = () => {
    let t = Lt();
    return t && t.guide.name
}
  , Ta = () => {
    let t = Lt();
    return t && t.guide.id
}
  , Na = () => {
    let t = Lt();
    if (!t)
        return;
    let r = Dt.default.get(t, ["guide", "audience"], []).find(n => n.segment);
    return Dt.default.get(r, ["segment", "id"], void 0)
}
  , Ce = {
    inlinePaywallBefore: Ia,
    inlinePaywallInside: ma,
    registerTracking: ya,
    loadChilipiperWidget: Br,
    loadAndOpenZenDeskWidget: jr,
    emitPendoEvent: Mr,
    emitOpenSocialNetworkExpirationEvent: kr,
    sendPendoTrackEvent: zr
};
var Ct = t => ({
    has_entitlement_impact: t.entryPoints.canAccessImpact,
    has_entitlement_amplify_composer: t.entryPoints.canAccessAmplifyComposer,
    has_entitlement_amplify: t.entryPoints.canAccessAmplify,
    has_entitlement_composer: t.entryPoints.canAccessComposer,
    has_entitlement_listening_by_talkwalker_basic: t.entryPoints.canAccessListeningByTalkwalkerBasic,
    has_entitlement_listening_by_talkwalker_adv: t.entryPoints.canAccessListeningByTalkwalkerAdv,
    has_entitlement_listening_by_talkwalker_adv_qs: t.entryPoints.canAccessListeningByTalkwalkerAdvQs,
    has_entitlement_listening_by_talkwalker_member: t.entryPoints.canAccessListeningByTalkwalkerMember,
    has_entitlement_insights_by_brandwatch: t.entryPoints.canAccessInsightsByBrandwatch,
    has_entitlement_paid_publishing: t.entryPoints.canAccessPaidPublishing,
    has_entitlement_content_library: t.entryPoints.canAccessContentLibrary,
    has_entitlement_facebook: t.memberChannelEntitlement?.FACEBOOK ?? !1,
    has_entitlement_instagram: t.memberChannelEntitlement?.INSTAGRAM ?? !1,
    has_entitlement_linkedin: t.memberChannelEntitlement?.LINKEDIN ?? !1,
    has_entitlement_twitter: t.memberChannelEntitlement?.TWITTER ?? !1,
    has_entitlement_tiktok: t.memberChannelEntitlement?.TIKTOKBUSINESS ?? !1,
    has_entitlement_whatsapp: t.memberChannelEntitlement?.WHATSAPP ?? !1,
    has_entitlement_threads: t.memberChannelEntitlement?.THREADS ?? !1,
    has_entitlement_pinterest: t.memberChannelEntitlement?.PINTEREST ?? !1,
    has_entitlement_youtube: t.memberChannelEntitlement?.YOUTUBECHANNEL ?? !1,
    has_entitlement_bluesky: t.memberChannelEntitlement?.BLUESKY ?? !1
});
var Ol = j(Lr())
  , ht = j(Ae())
  , It = j(Ar());
var Hi = j(Ae());
var Ue = "production"
  , gt = "staging"
  , _t = "dev"
  , Be = () => {
    let t = sl()
      , e = String(al().env || t.TARGET || t.NODE_ENV).toLowerCase();
    return e.includes("dev") ? _t : e.includes("stag") ? gt : Ue
}
  , al = () => typeof hs < "u" ? hs : {}
  , sl = () => typeof process < "u" && process.env ? process.env : {};
var ul = "HoGBxc43fBdoejnKKJMfs"
  , ll = "6xNorXhBfHzRvHvS6Lv35"
  , cl = "4iqEUNUjbX25mnQaSNojK";
function qi() {
    switch (Be()) {
    case Ue:
        return cl;
    case gt:
        return ll;
    case _t:
        return ul;
    default:
        throw new Error("Invalid env")
    }
}
function Yi() {
    let {LOG_LEVEL: t} = Hi.enums;
    switch (Be()) {
    case Ue:
        return t.ERROR;
    case gt:
        return t.ERROR;
    case _t:
        return t.INFO;
    default:
        throw new Error("Invalid env")
    }
}
var Wi = j(Ae());
Dr();
var fl = (t, e) => {
    let r = "frontend";
    return t.length === 0 && (t = `${r}.${e}`),
    t.indexOf(r) === 0 ? t : `${r}.` + t
}
  , dl = (t, e, r, n) => je("frontend.logging", t, fl(e, t), r, n)
  , pl = {
    ERROR: "error",
    INFO: "info"
}
  , Ke = (t, e, r) => dl(pl.ERROR, t, e, r);
var Xi = {
    log: (t, e) => {
        let {LOG_LEVEL: r} = Wi.enums;
        switch (t) {
        case r.INFO:
        case r.DEBUG:
            console.log(e);
            break;
        case r.WARNING:
            console.warn(e);
            break;
        case r.ERROR:
            console.error(e),
            Ke("web.frontend.optimizely", e);
            break
        }
    }
};
var El = function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , r = e.wnd
      , n = r === void 0 ? window : r;
    (function(i, o, a, u, s, l, c, f) {
        var E = function(g) {
            return g in i ? (i.console && i.console.log && i.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'),
            !1) : !0
        }(a);
        if (!E)
            return;
        function _(y) {
            var g = [], h;
            function T() {
                !h || (g.forEach(function(R) {
                    var N;
                    try {
                        N = R[h[0]] && R[h[0]](h[1])
                    } catch (U) {
                        R[3] && R[3](U);
                        return
                    }
                    N && N.then ? N.then(R[2], R[3]) : R[2] && R[2](N)
                }),
                g.length = 0)
            }
            function v(R) {
                return function(N) {
                    h || (h = [R, N],
                    T())
                }
            }
            y(v(0), v(1));
            function D(R, N) {
                return _(function(U, ue) {
                    g.push([R, N, U, ue]),
                    T()
                })
            }
            return {
                then: D
            }
        }
        c = i[a] = function() {
            var g = function(v, D, R, N) {
                N = N || 2;
                function U(De, mt) {
                    h(v, D, R, De, mt, N)
                }
                var ue = /Async$/;
                if (ue.test(v))
                    return v = v.replace(ue, ""),
                    typeof Promise == "function" ? new Promise(U) : _(U);
                var Se;
                return h(v, D, R, Se, Se, N)
            };
            function h(T, v, D, R, N, U) {
                return g._api ? g._api(T, v, D, R, N, U) : (g.q && g.q.push([T, v, D, R, N, U]),
                null)
            }
            return g.q = [],
            g
        }(),
        f = function() {
            return function(g) {
                function h(D) {
                    typeof D[4] == "function" && D[4](new Error(g))
                }
                var T = c.q;
                if (T) {
                    for (var v = 0; v < T.length; v++)
                        h(T[v]);
                    T.length = 0,
                    T.push = h
                }
            }
        }(),
        function() {
            l = o.createElement(u),
            l.async = !0,
            l.crossOrigin = "anonymous",
            l.src = "https://" + s,
            l.onerror = function() {
                f("Error loading " + s)
            }
            ;
            var g = o.getElementsByTagName(u)[0];
            g.parentNode.insertBefore(l, g)
        }(),
        function() {
            function g() {}
            function h(R, N, U) {
                c(R, N, U, 1)
            }
            function T(R, N, U) {
                h("setProperties", {
                    type: R,
                    properties: N
                }, U)
            }
            function v(R, N) {
                T("user", R, N)
            }
            function D(R, N, U) {
                v({
                    uid: R
                }, U),
                N && v(N, U)
            }
            c.identify = D,
            c.setUserVars = v,
            c.identifyAccount = g,
            c.clearUserCookie = g,
            c.setVars = T,
            c.event = function(R, N, U) {
                h("trackEvent", {
                    name: R,
                    properties: N
                }, U)
            }
            ,
            c.anonymize = function() {
                D(!1)
            }
            ,
            c.shutdown = function() {
                h("shutdown")
            }
            ,
            c.restart = function() {
                h("restart")
            }
            ,
            c.log = function(R, N) {
                h("log", {
                    level: R,
                    msg: N
                })
            }
            ,
            c.consent = function(R) {
                h("setIdentity", {
                    consent: !arguments.length || R
                })
            }
        }(),
        function() {
            var g = "fetch"
              , h = "XMLHttpRequest";
            c._w = {},
            c._w[h] = i[h],
            c._w[g] = i[g],
            i[g] && (i[g] = function() {
                return c._w[g].apply(this, arguments)
            }
            )
        }(),
        c._v = "2.0.0"
    }
    )(n, n.document, n._fs_namespace, "script", n._fs_script)
};
var gl = function(e) {
    return e === "window" ? "document" : "".concat(e, ".document")
}
  , _l = function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , r = e.shouldInsertScript
      , n = r === void 0 ? !0 : r
      , i = e.globalVar
      , o = i === void 0 ? "window" : i
      , a = e.apiVersion
      , u = a === void 0 ? "1.3.0" : a;
    return `(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];`.concat(n ? `
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);` : "", `
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="`).concat(u, `";
})(`).concat(o, ",").concat(gl(o), ",").concat(o, "['_fs_namespace'],'script','user');")
}
  , Ji = function(e) {
    var r = e.orgId
      , n = e.namespace
      , i = n === void 0 ? "FS" : n
      , o = e.host
      , a = o === void 0 ? "fullstory.com" : o
      , u = e.script
      , s = u === void 0 ? "edge.fullstory.com/s/fs.js" : u;
    if (!r)
        throw new Error("FullStory orgId is a required parameter");
    window._fs_host = a,
    window._fs_script = s,
    window._fs_org = r,
    window._fs_namespace = i,
    El()
};
var sf = _l();
var br = function() {
    return br = Object.assign || function(e) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
        }
        return e
    }
    ,
    br.apply(this, arguments)
}
  , vt = function() {
    if (window._fs_namespace)
        return window[window._fs_namespace]
}
  , Zi = function() {
    var t = vt();
    if (!t)
        throw Error("FullStory is not loaded, please ensure the init function is invoked before calling FullStory API functions");
    return t
}
  , vl = function(t, e) {
    var r = br({}, t);
    if (vt()) {
        console.warn("The FullStory snippet has already been defined elsewhere (likely in the <head> element)");
        return
    }
    r.recordCrossDomainIFrames && (window._fs_run_in_iframe = !0),
    r.appHost && (window._fs_app_host = r.appHost),
    r.assetMapId && (window._fs_asset_map_id = r.assetMapId),
    r.startCaptureManually && (window._fs_capture_on_startup = !1),
    r.recordOnlyThisIFrame && (window._fs_is_outer_script = !0),
    r.cookieDomain && (window._fs_cookie_domain = r.cookieDomain),
    r.debug === !0 && (r.script ? console.warn("Ignoring `debug = true` because `script` is set") : r.script = "edge.fullstory.com/s/fs-debug.js"),
    Ji(r);
    var n = vt();
    if (!n) {
        console.warn("Failed to initialize FS snippet");
        return
    }
    if (e && n("observe", {
        type: "start",
        callback: e
    }),
    r.devMode === !0) {
        var i = "FullStory was initialized in devMode and will stop recording";
        n("trackEvent", {
            name: "FullStory Dev Mode",
            properties: {
                message: i
            }
        }),
        n("shutdown"),
        window._fs_dev_mode = !0,
        console.warn(i)
    }
}
  , hl = function(t) {
    return function(e, r) {
        if (window._fs_initialized) {
            t && console.warn(t);
            return
        }
        vl(e, r),
        window._fs_initialized = !0
    }
}
  , cf = hl("FullStory init has already been called once, additional invocations are ignored");
var Il = function() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    var r = Zi();
    return t.every(function(n) {
        return r[n]
    })
}
  , $ = function(t) {
    return function() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        if (window._fs_dev_mode) {
            var n = "FullStory is in dev mode and is not recording: ".concat(t, " method not executed");
            return console.warn(n),
            n
        }
        var i = vt();
        return Il(t) && i ? i[t].apply(i, e) : (console.warn("FS.".concat(t, " not ready")),
        null)
    }
}
  , ml = function() {
    var t = function(e, r, n) {
        var i = Zi();
        if (window._fs_dev_mode) {
            var o = "FullStory is in dev mode and is not recording: method not executed";
            console.warn(o);
            return
        }
        return i(e, r, n)
    };
    return t.anonymize = $("anonymize"),
    t.consent = $("consent"),
    t.disableConsole = $("disableConsole"),
    t.enableConsole = $("enableConsole"),
    t.event = $("event"),
    t.getCurrentSessionURL = $("getCurrentSessionURL"),
    t.identify = $("identify"),
    t.log = $("log"),
    t.restart = $("restart"),
    t.setUserVars = $("setUserVars"),
    t.setVars = $("setVars"),
    t.shutdown = $("shutdown"),
    t
}
  , Qi = ml();
lo();
Dr();
var $i = "fe-lib-optimizely"
  , eo = (t, e, r=0) => {
    if (r <= 10)
        try {
            Qi("trackEvent", {
                name: "experiment",
                properties: {
                    experience: t,
                    variationName: e
                }
            })
        } catch {
            setTimeout( () => eo(t, e, r + 1), 200)
        }
}
;
function to(t, e) {
    let r = `optimizely.experiment.${t}`;
    if (Ye(r) !== e) {
        let i = {
            id: t,
            variation: e
        };
        yt($i, "experiment_started", i),
        We(r, e),
        je("optimizely:experiment:started", i),
        Be() === Ue && eo(t, e)
    }
}
function ro(t) {
    yt($i, t.eventKey, t.eventTags)
}
var no = "optimizely.experiment_bucket_map";
function Ur(t={}) {
    let e = Ye(no);
    if (e === void 0)
        return t;
    try {
        return JSON.parse(e)
    } catch {
        return Ke("web.frontend.fe-lib-optimizely", "Failed to parse experiment bucket map from action history"),
        t
    }
}
function yl(t) {
    We(no, JSON.stringify(t))
}
var io = {
    lookup: t => ({
        user_id: t,
        experiment_bucket_map: Ur()
    }),
    save: t => {
        yl(t.experiment_bucket_map)
    }
};
var Lf = j(Ae()), Cf = j(Ar()), Rl, Tl;
function Nl(t) {
    return ({decisionInfo: e}) => {
        let r = t.getOptimizelyConfig()
          , n = e.ruleKey
          , i = n !== null && r?.experimentsMap?.[n] !== void 0;
        e.enabled && i && to(n, e.variationKey)
    }
}
function Al() {
    let t = (0,
    ht.createInstance)({
        datafile: window.optimizelyDatafile,
        sdkKey: qi(),
        logLevel: Yi(),
        logger: Xi,
        userProfileService: io
    });
    if (t === null)
        throw new Error("Failed to create Optimizely SDK instance");
    return t.notificationCenter.addNotificationListener(ht.enums.NOTIFICATION_TYPES.TRACK, ro),
    t.notificationCenter.addNotificationListener(It.enums.NOTIFICATION_TYPES.DECISION, Nl(t)),
    t
}
function oo() {
    let t = Rl || Tl || Al()
      , e = {}
      , r = Ur()
      , n = t?.getOptimizelyConfig()?.experimentsMap;
    return n !== void 0 && Object.values(n).forEach( ({id: i, key: o, variationsMap: a}) => {
        let u = "off";
        if (Object.keys(r).includes(i)) {
            let {variation_id: s} = r[i];
            u = Object.values(a).find(c => c.id === s)?.key || "off"
        }
        e[o] = u
    }
    ),
    e
}
function kf() {
    bl();
    var t = window.pendo || {};
    if (t.initialize && hs.memberId && hs.env) {
        let r = function() {
            qe({
                data: {
                    social_account_max_reached: Gr(),
                    ...Fr(le.getSnTypeUniqList())
                }
            })
        }
          , n = function() {
            qe({
                data: {
                    is_org_member: Vr()
                }
            })
        }
          , i = function(E) {
            E && E.id && qe({
                data: {
                    ["experiment_" + E.id]: E.variation
                }
            })
        }
          , o = function({membersInvited: E, source: _}) {
            for (let y = 0; y < E; y++)
                Ce.sendPendoTrackEvent(Ot.USER_INVITED_ORG_MEMBER, {
                    source: _
                })
        };
        oe.default.on(ae.SOCIAL_NETWORK_REFRESH_SUCCESS, r),
        oe.default.on(ae.TEAM_MANAGEMENT_ORG_LIST_RENDERED, n),
        oe.default.on(ae.TEAM_MANAGEMENT_ORG_LIST_ITEM_RENDERED, n),
        oe.default.on(ae.OPTIMIZELY_EXPERIMENT_STARTED, i),
        oe.default.on("full_screen_composer:response:message_success", () => {
            Ce.sendPendoTrackEvent(Ot.USER_SCHEDULED_POST)
        }
        ),
        oe.default.on(ae.INVITE_ORG_MEMBERS_SUCCESS, o);
        let a = {
            getting_started_has_completed_schedule_post_task: le.getActionHistoryValue("getting_started.has_completed_schedule_post_task"),
            getting_started_progress: le.getActionHistoryValue("getting_started.progress"),
            getting_started_task_create_post: le.getActionHistoryValue("getting_started.task.create_post"),
            getting_started_task_visit_analytics: le.getActionHistoryValue("getting_started.task.visit_analytics"),
            getting_started_task_visit_planner: le.getActionHistoryValue("getting_started.task.visit_planner")
        }
          , u = le.getSnTypeUniqList()
          , s = St()
          , l = Ct(hs)
          , c = oo();
        for (var e in c)
            c["experiment_" + e] = c[e],
            delete c[e];
        let f = xr(a, u, s, l, c);
        t.initialize({
            excludeAllText: !0,
            visitor: f,
            events: {
                ready: function() {
                    oe.default.emit(ae.PENDO_READY),
                    Kr()
                },
                guidesLoaded: function() {
                    oe.default.emit(ae.PENDO_GUIDES_LOADED)
                },
                guidesFailed: function() {
                    oe.default.emit(ae.PENDO_GUIDES_FAILED)
                }
            },
            account: {}
        })
    }
    window.pendoHelpers = Ce
}
function bl() {
    (function(t, e, r, n, i) {
        var o, a, u;
        for (i = t[n] = t[n] || {},
        i._q = i._q || [],
        o = ["initialize", "identify", "updateOptions", "pageLoad", "track", "getSerializedMetadata"],
        a = 0,
        u = o.length; a < u; ++a)
            (function(s) {
                i[s] = i[s] || function() {
                    i._q[s === o[0] ? "unshift" : "push"]([s].concat([].slice.call(arguments, 0)))
                }
            }
            )(o[a])
    }
    )(window, document, "script", "pendo")
}
export {me as a, pa as b, kf as c};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=chunk-AH7NFF2W.js.map
