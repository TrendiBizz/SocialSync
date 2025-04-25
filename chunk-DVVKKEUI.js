import {c as Yt, f as Wt} from "./chunk-W3AREAMI.js";
import {a as Ae} from "./chunk-2THN4WJI.js";
import {a as tt} from "./chunk-FWCQP4PA.js";
import {a as Bt} from "./chunk-QSIKJSHR.js";
import {a as Ze} from "./chunk-XX2ISN2Z.js";
import {a as Je, b as Gt, c as Xe, d as zt} from "./chunk-TBR3WLYL.js";
import {a as Qe, b as Ft} from "./chunk-LX3NUGTV.js";
import {c as et} from "./chunk-US3HSYXZ.js";
import {a as Vt} from "./chunk-GLMSGHBP.js";
import {a as qe, c as Ht} from "./chunk-4TTDQVEV.js";
import {c as De} from "./chunk-LPF7CF7X.js";
import {b as $t} from "./chunk-LUZDPEVN.js";
import {b as Ke, d as Te} from "./chunk-WY6ASNAP.js";
import {a as Ut} from "./chunk-GPJJZIA4.js";
import {i as ge, k as We} from "./chunk-Y7UMMCSF.js";
import {g as ze, h as Ye} from "./chunk-XYLT5PZX.js";
import {a as jt} from "./chunk-JRESDEDW.js";
import {b as Ge} from "./chunk-INSRYSWJ.js";
import {b as N, c as Me} from "./chunk-RBJWJTV5.js";
import {a as Lt} from "./chunk-GJN5ONR7.js";
import {a as Ee} from "./chunk-5M6X2SDJ.js";
import {c as J, d as Rt, e as me, f as V} from "./chunk-62VJZGPO.js";
var nt = J(ye => {
    "use strict";
    Object.defineProperty(ye, "__esModule", {
        value: !0
    });
    ye.Status = void 0;
    ye.Status = {
        TRIAL: "trial",
        ACTIVE: "active",
        INACTIVE: "inactive",
        DUNNING_INITIAL: "dunningInitial",
        DUNNING_EXTENDED: "dunningExtended",
        DUNNING_FINAL: "dunningFinal",
        EXPIRED: "expired",
        SUSPENDED: "suspended",
        PERMANENT: "permanent"
    }
}
);
var rt = J(ve => {
    "use strict";
    Object.defineProperty(ve, "__esModule", {
        value: !0
    });
    ve.Product = void 0;
    ve.Product = {
        productCodes: {
            FREE: "FREE",
            PRO: "PRO",
            PROFESSIONAL_PLAN: "PROFESSIONAL_PLAN",
            TEAMS_PLAN: "TEAMS_PLAN",
            TEAM3S: "TEAM3S",
            BUSINESS_PLAN: "BUSINESS_PLAN"
        },
        names: {
            FREE: "Free",
            PRO: "Pro",
            PROFESSIONAL_PLAN: "Professional",
            TEAMS_PLAN: "Teams",
            TEAM3S: "Team",
            BUSINESS_PLAN: "Business"
        },
        featureCodes: {
            ADDITIONAL_SOCIAL_NETWORKS: "ADDITIONAL_SOCIAL_NETWORKS",
            ADVANCED_ANALYTICS: "ADVANCED_ANALYTICS",
            ADVANCED_APPS: "ADVANCED_APPS",
            ADS_FREE: "ADS_FREE",
            ANALYTICS_PRO: "ANALYTICS_PRO",
            BULK_SCHEDULE: "BULK_SCHEDULE",
            CALENDAR_VIEW_ADVANCED: "CALENDAR_VIEW_ADVANCED",
            CAMPAIGNS_PRO: "CAMPAIGNS_PRO",
            ORGANIZATIONS: "ORGANIZATIONS",
            OWLY_ENTERPRISE: "OWLY_ENTERPRISE",
            PREMIUM_ORGANIZATION: "PREMIUM_ORGANIZATION",
            PRO_APPS: "PRO_APPS",
            REPORTING_ADVANCED: "REPORTING_ADVANCED",
            REPORTING_CHUNK: "REPORTING_CHUNK",
            REPORTING_NUM_REPORTS: "REPORTING_NUM_REPORTS",
            RSS: "RSS",
            SOCIAL_ORGANIZATION: "SOCIAL_ORGANIZATION",
            SEATS: "SEATS",
            SOCIAL_NETWORKS: "SOCIAL_NETWORKS",
            UNLIMITED_SUGGESTED_SHARES: "UNLIMITED_SUGGESTED_SHARES",
            SHARE_SOCIAL_NETWORKS: "SHARE_SOCIAL_NETWORKS",
            SCHEDULE_MESSAGES: "SCHEDULE_MESSAGES"
        },
        productVertical: {
            PAID_APPS: "paidApps",
            BUNDLE: "bundle"
        }
    }
}
);
var at = J(be => {
    "use strict";
    Object.defineProperty(be, "__esModule", {
        value: !0
    });
    be.Winback = void 0;
    be.Winback = {
        status: {
            CANCELED: "canceled",
            SAVED: "saved",
            DEFLECTED: "deflected",
            INCOMPLETE: "incomplete"
        },
        offerType: {
            COUPON: "coupon",
            PAUSE_SUBSCRIPTION: "pause_subscription",
            TRIAL_EXTENSION: "trial_extension",
            CHANGE_PLAN: "change_plan",
            CUSTOM: "custom"
        },
        pauseSubscription: {
            interval: {
                DAY: "day",
                WEEK: "week",
                MONTH: "month",
                INDEFINITELY: "indefinitely",
                BILLING_CYCLE: "billing_cycle"
            },
            pauseAt: {
                IMMEDIATELY: "immediately",
                PERIOD_END: "period_end"
            }
        },
        coupon: {
            type: {
                PERCENTAGE: "percentage",
                FIXED: "fixed"
            }
        },
        getOfferMetadata: function(t) {
            return t.flowSession.offer_accepted.metadata
        },
        getCouponAmt: function(t) {
            return t.flowSession.offer_accepted.details.amount_off
        },
        getCouponType: function(t) {
            return t.flowSession.offer_accepted.details.coupon_type
        },
        getOfferedPlan: function(t) {
            return t.flowSession.offer_accepted.details.payment_provider_plan_id
        },
        getTrialExtDays: function(t) {
            return t.flowSession.offer_accepted.details.days
        },
        getNumIntervalsToPause: function(t) {
            return t.flowSession.offer_accepted.details.interval_count
        },
        getPauseIntervalType: function(t) {
            return t.flowSession.offer_accepted.details.interval
        },
        getPauseAt: function(t) {
            return t.flowSession.offer_accepted.details.pause_at
        }
    }
}
);
var it = J(ne => {
    "use strict";
    Object.defineProperty(ne, "__esModule", {
        value: !0
    });
    ne.Winback = ne.Product = ne.Status = void 0;
    var qt = nt();
    Object.defineProperty(ne, "Status", {
        enumerable: !0,
        get: function() {
            return qt.Status
        }
    });
    var Qt = rt();
    Object.defineProperty(ne, "Product", {
        enumerable: !0,
        get: function() {
            return Qt.Product
        }
    });
    var Kt = at();
    Object.defineProperty(ne, "Winback", {
        enumerable: !0,
        get: function() {
            return Kt.Winback
        }
    })
}
);
var Oe = J( (_e, Ne) => {
    (function(t, s) {
        typeof _e == "object" && typeof Ne == "object" ? Ne.exports = s() : typeof define == "function" && define.amd ? define([], s) : typeof _e == "object" ? _e["@prosperstack/flow"] = s() : t.ProsperStack = s()
    }
    )(self, function() {
        return function() {
            var t = {
                542: function(e, n, u) {
                    "use strict";
                    var f = u(601)
                      , y = u.n(f)
                      , h = u(609)
                      , v = u.n(h)()(y());
                    v.push([e.id, "body{overflow:hidden !important}.prosperstack-content{font-family:-apple-system,system-ui,Verdana,sans-serif;margin:0}#prosperstack-overlay,.prosperstack-iframe{opacity:0;position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647;transition:opacity .2s;border:0}#prosperstack-overlay.in,.prosperstack-iframe.in{opacity:1}#prosperstack-overlay{background-color:#fff}.prosperstack-error{background-color:#fff;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:1.5rem}.prosperstack-error .prosperstack-error-message{border:1px solid pink;border-radius:.5rem;padding:1rem;font-size:1rem;line-height:1.5rem;color:#eb5757;font-weight:bold;max-width:26rem;margin-bottom:1rem;text-align:center}.prosperstack-error a{font-size:1rem;color:#156de4;text-decoration:none}.prosperstack-error a:hover{text-decoration:underline}.prosperstack-spinner{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.prosperstack-spinner .bounce1,.prosperstack-spinner .bounce2,.prosperstack-spinner .bounce3{width:10px;height:10px;background-color:#333;margin-right:6px;opacity:.5;border-radius:100%;display:inline-block;-webkit-animation:prosperstack-bounce-delay 1.4s infinite ease-in-out both;animation:prosperstack-bounce-delay 1.4s infinite ease-in-out both}.prosperstack-spinner .bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.prosperstack-spinner .bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes prosperstack-bounce-delay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes prosperstack-bounce-delay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}", ""]),
                    n.Z = v
                },
                609: function(e) {
                    "use strict";
                    e.exports = function(n) {
                        var u = [];
                        return u.toString = function() {
                            return this.map(function(f) {
                                var y = ""
                                  , h = f[5] !== void 0;
                                return f[4] && (y += "@supports (".concat(f[4], ") {")),
                                f[2] && (y += "@media ".concat(f[2], " {")),
                                h && (y += "@layer".concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {")),
                                y += n(f),
                                h && (y += "}"),
                                f[2] && (y += "}"),
                                f[4] && (y += "}"),
                                y
                            }).join("")
                        }
                        ,
                        u.i = function(f, y, h, v, i) {
                            typeof f == "string" && (f = [[null, f, void 0]]);
                            var o = {};
                            if (h)
                                for (var c = 0; c < this.length; c++) {
                                    var p = this[c][0];
                                    p != null && (o[p] = !0)
                                }
                            for (var g = 0; g < f.length; g++) {
                                var l = [].concat(f[g]);
                                h && o[l[0]] || (i !== void 0 && (l[5] === void 0 || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")),
                                l[5] = i),
                                y && (l[2] && (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")),
                                l[2] = y),
                                v && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"),
                                l[4] = v) : l[4] = "".concat(v)),
                                u.push(l))
                            }
                        }
                        ,
                        u
                    }
                },
                601: function(e) {
                    "use strict";
                    e.exports = function(n) {
                        return n[1]
                    }
                },
                139: function(e, n, u) {
                    e.exports = function() {
                        "use strict";
                        function f(m) {
                            return typeof m == "function"
                        }
                        var y = Array.isArray ? Array.isArray : function(m) {
                            return Object.prototype.toString.call(m) === "[object Array]"
                        }
                          , h = 0
                          , v = void 0
                          , i = void 0
                          , o = function(m, w) {
                            T[h] = m,
                            T[h + 1] = w,
                            (h += 2) === 2 && (i ? i(R) : G())
                        }
                          , c = typeof window < "u" ? window : void 0
                          , p = c || {}
                          , g = p.MutationObserver || p.WebKitMutationObserver
                          , l = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]"
                          , b = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
                        function P() {
                            var m = setTimeout;
                            return function() {
                                return m(R, 1)
                            }
                        }
                        var T = new Array(1e3);
                        function R() {
                            for (var m = 0; m < h; m += 2)
                                (0,
                                T[m])(T[m + 1]),
                                T[m] = void 0,
                                T[m + 1] = void 0;
                            h = 0
                        }
                        var E, A, k, j, G = void 0;
                        function z(m, w) {
                            var M = this
                              , O = new this.constructor(Y);
                            O[B] === void 0 && he(O);
                            var D = M._state;
                            if (D) {
                                var I = arguments[D - 1];
                                o(function() {
                                    return se(D, O, I, M._result)
                                })
                            } else
                                Q(M, O, m, w);
                            return O
                        }
                        function Z(m) {
                            if (m && typeof m == "object" && m.constructor === this)
                                return m;
                            var w = new this(Y);
                            return ee(w, m),
                            w
                        }
                        G = l ? function() {
                            return process.nextTick(R)
                        }
                        : g ? (A = 0,
                        k = new g(R),
                        j = document.createTextNode(""),
                        k.observe(j, {
                            characterData: !0
                        }),
                        function() {
                            j.data = A = ++A % 2
                        }
                        ) : b ? ((E = new MessageChannel).port1.onmessage = R,
                        function() {
                            return E.port2.postMessage(0)
                        }
                        ) : c === void 0 ? function() {
                            try {
                                var m = Function("return this")().require("vertx");
                                return (v = m.runOnLoop || m.runOnContext) !== void 0 ? function() {
                                    v(R)
                                }
                                : P()
                            } catch {
                                return P()
                            }
                        }() : P();
                        var B = Math.random().toString(36).substring(2);
                        function Y() {}
                        var q = void 0;
                        function X(m, w, M) {
                            w.constructor === m.constructor && M === z && w.constructor.resolve === Z ? function(O, D) {
                                D._state === 1 ? W(O, D._result) : D._state === 2 ? H(O, D._result) : Q(D, void 0, function(I) {
                                    return ee(O, I)
                                }, function(I) {
                                    return H(O, I)
                                })
                            }(m, w) : M === void 0 ? W(m, w) : f(M) ? function(O, D, I) {
                                o(function(L) {
                                    var F = !1
                                      , K = function(U, pe, ke, It) {
                                        try {
                                            U.call(pe, ke, It)
                                        } catch (xt) {
                                            return xt
                                        }
                                    }(I, D, function(U) {
                                        F || (F = !0,
                                        D !== U ? ee(L, U) : W(L, U))
                                    }, function(U) {
                                        F || (F = !0,
                                        H(L, U))
                                    }, L._label);
                                    !F && K && (F = !0,
                                    H(L, K))
                                }, O)
                            }(m, w, M) : W(m, w)
                        }
                        function ee(m, w) {
                            if (m === w)
                                H(m, new TypeError("You cannot resolve a promise with itself"));
                            else if (D = typeof (O = w),
                            O === null || D !== "object" && D !== "function")
                                W(m, w);
                            else {
                                var M = void 0;
                                try {
                                    M = w.then
                                } catch (I) {
                                    return void H(m, I)
                                }
                                X(m, w, M)
                            }
                            var O, D
                        }
                        function fe(m) {
                            m._onerror && m._onerror(m._result),
                            ae(m)
                        }
                        function W(m, w) {
                            m._state === q && (m._result = w,
                            m._state = 1,
                            m._subscribers.length !== 0 && o(ae, m))
                        }
                        function H(m, w) {
                            m._state === q && (m._state = 2,
                            m._result = w,
                            o(fe, m))
                        }
                        function Q(m, w, M, O) {
                            var D = m._subscribers
                              , I = D.length;
                            m._onerror = null,
                            D[I] = w,
                            D[I + 1] = M,
                            D[I + 2] = O,
                            I === 0 && m._state && o(ae, m)
                        }
                        function ae(m) {
                            var w = m._subscribers
                              , M = m._state;
                            if (w.length !== 0) {
                                for (var O = void 0, D = void 0, I = m._result, L = 0; L < w.length; L += 3)
                                    O = w[L],
                                    D = w[L + M],
                                    O ? se(M, O, D, I) : D(I);
                                m._subscribers.length = 0
                            }
                        }
                        function se(m, w, M, O) {
                            var D = f(M)
                              , I = void 0
                              , L = void 0
                              , F = !0;
                            if (D) {
                                try {
                                    I = M(O)
                                } catch (K) {
                                    F = !1,
                                    L = K
                                }
                                if (w === I)
                                    return void H(w, new TypeError("A promises callback cannot return that same promise."))
                            } else
                                I = O;
                            w._state !== q || (D && F ? ee(w, I) : F === !1 ? H(w, L) : m === 1 ? W(w, I) : m === 2 && H(w, I))
                        }
                        var ce = 0;
                        function he(m) {
                            m[B] = ce++,
                            m._state = void 0,
                            m._result = void 0,
                            m._subscribers = []
                        }
                        var te = function() {
                            function m(w, M) {
                                this._instanceConstructor = w,
                                this.promise = new w(Y),
                                this.promise[B] || he(this.promise),
                                y(M) ? (this.length = M.length,
                                this._remaining = M.length,
                                this._result = new Array(this.length),
                                this.length === 0 ? W(this.promise, this._result) : (this.length = this.length || 0,
                                this._enumerate(M),
                                this._remaining === 0 && W(this.promise, this._result))) : H(this.promise, new Error("Array Methods must be provided an Array"))
                            }
                            return m.prototype._enumerate = function(w) {
                                for (var M = 0; this._state === q && M < w.length; M++)
                                    this._eachEntry(w[M], M)
                            }
                            ,
                            m.prototype._eachEntry = function(w, M) {
                                var O = this._instanceConstructor
                                  , D = O.resolve;
                                if (D === Z) {
                                    var I = void 0
                                      , L = void 0
                                      , F = !1;
                                    try {
                                        I = w.then
                                    } catch (U) {
                                        F = !0,
                                        L = U
                                    }
                                    if (I === z && w._state !== q)
                                        this._settledAt(w._state, M, w._result);
                                    else if (typeof I != "function")
                                        this._remaining--,
                                        this._result[M] = w;
                                    else if (O === x) {
                                        var K = new O(Y);
                                        F ? H(K, L) : X(K, w, I),
                                        this._willSettleAt(K, M)
                                    } else
                                        this._willSettleAt(new O(function(U) {
                                            return U(w)
                                        }
                                        ), M)
                                } else
                                    this._willSettleAt(D(w), M)
                            }
                            ,
                            m.prototype._settledAt = function(w, M, O) {
                                var D = this.promise;
                                D._state === q && (this._remaining--,
                                w === 2 ? H(D, O) : this._result[M] = O),
                                this._remaining === 0 && W(D, this._result)
                            }
                            ,
                            m.prototype._willSettleAt = function(w, M) {
                                var O = this;
                                Q(w, void 0, function(D) {
                                    return O._settledAt(1, M, D)
                                }, function(D) {
                                    return O._settledAt(2, M, D)
                                })
                            }
                            ,
                            m
                        }()
                          , x = function() {
                            function m(w) {
                                this[B] = ce++,
                                this._result = this._state = void 0,
                                this._subscribers = [],
                                Y !== w && (typeof w != "function" && function() {
                                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                }(),
                                this instanceof m ? function(M, O) {
                                    try {
                                        O(function(D) {
                                            ee(M, D)
                                        }, function(D) {
                                            H(M, D)
                                        })
                                    } catch (D) {
                                        H(M, D)
                                    }
                                }(this, w) : function() {
                                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                }())
                            }
                            return m.prototype.catch = function(w) {
                                return this.then(null, w)
                            }
                            ,
                            m.prototype.finally = function(w) {
                                var M = this
                                  , O = M.constructor;
                                return f(w) ? M.then(function(D) {
                                    return O.resolve(w()).then(function() {
                                        return D
                                    })
                                }, function(D) {
                                    return O.resolve(w()).then(function() {
                                        throw D
                                    })
                                }) : M.then(w, w)
                            }
                            ,
                            m
                        }();
                        return x.prototype.then = z,
                        x.all = function(m) {
                            return new te(this,m).promise
                        }
                        ,
                        x.race = function(m) {
                            var w = this;
                            return y(m) ? new w(function(M, O) {
                                for (var D = m.length, I = 0; I < D; I++)
                                    w.resolve(m[I]).then(M, O)
                            }
                            ) : new w(function(M, O) {
                                return O(new TypeError("You must pass an array to race."))
                            }
                            )
                        }
                        ,
                        x.resolve = Z,
                        x.reject = function(m) {
                            var w = new this(Y);
                            return H(w, m),
                            w
                        }
                        ,
                        x._setScheduler = function(m) {
                            i = m
                        }
                        ,
                        x._setAsap = function(m) {
                            o = m
                        }
                        ,
                        x._asap = o,
                        x.polyfill = function() {
                            var m = void 0;
                            if (u.g !== void 0)
                                m = u.g;
                            else if (typeof self < "u")
                                m = self;
                            else
                                try {
                                    m = Function("return this")()
                                } catch {
                                    throw new Error("polyfill failed because global object is unavailable in this environment")
                                }
                            var w = m.Promise;
                            if (w) {
                                var M = null;
                                try {
                                    M = Object.prototype.toString.call(w.resolve())
                                } catch {}
                                if (M === "[object Promise]" && !w.cast)
                                    return
                            }
                            m.Promise = x
                        }
                        ,
                        x.Promise = x,
                        x
                    }()
                }
            }
              , s = {};
            function d(e) {
                var n = s[e];
                if (n !== void 0)
                    return n.exports;
                var u = s[e] = {
                    id: e,
                    exports: {}
                };
                return t[e].call(u.exports, u, u.exports, d),
                u.exports
            }
            d.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return d.d(n, {
                    a: n
                }),
                n
            }
            ,
            d.d = function(e, n) {
                for (var u in n)
                    d.o(n, u) && !d.o(e, u) && Object.defineProperty(e, u, {
                        enumerable: !0,
                        get: n[u]
                    })
            }
            ,
            d.g = function() {
                if (typeof globalThis == "object")
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch {
                    if (typeof window == "object")
                        return window
                }
            }(),
            d.o = function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
            ,
            d.r = function(e) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ;
            var a = {};
            return function() {
                "use strict";
                d.r(a),
                d.d(a, {
                    default: function() {
                        return o
                    },
                    flow: function() {
                        return h
                    }
                });
                var e = d(542)
                  , n = d(139).Promise
                  , u = function(c, p, g, l) {
                    return new (g || (g = n))(function(b, P) {
                        function T(A) {
                            try {
                                E(l.next(A))
                            } catch (k) {
                                P(k)
                            }
                        }
                        function R(A) {
                            try {
                                E(l.throw(A))
                            } catch (k) {
                                P(k)
                            }
                        }
                        function E(A) {
                            var k;
                            A.done ? b(A.value) : (k = A.value,
                            k instanceof g ? k : new g(function(j) {
                                j(k)
                            }
                            )).then(T, R)
                        }
                        E((l = l.apply(c, p || [])).next())
                    }
                    )
                }
                  , f = function(c, p) {
                    var g, l, b, P, T = {
                        label: 0,
                        sent: function() {
                            if (1 & b[0])
                                throw b[1];
                            return b[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return P = {
                        next: R(0),
                        throw: R(1),
                        return: R(2)
                    },
                    typeof Symbol == "function" && (P[Symbol.iterator] = function() {
                        return this
                    }
                    ),
                    P;
                    function R(E) {
                        return function(A) {
                            return function(k) {
                                if (g)
                                    throw new TypeError("Generator is already executing.");
                                for (; P && (P = 0,
                                k[0] && (T = 0)),
                                T; )
                                    try {
                                        if (g = 1,
                                        l && (b = 2 & k[0] ? l.return : k[0] ? l.throw || ((b = l.return) && b.call(l),
                                        0) : l.next) && !(b = b.call(l, k[1])).done)
                                            return b;
                                        switch (l = 0,
                                        b && (k = [2 & k[0], b.value]),
                                        k[0]) {
                                        case 0:
                                        case 1:
                                            b = k;
                                            break;
                                        case 4:
                                            return T.label++,
                                            {
                                                value: k[1],
                                                done: !1
                                            };
                                        case 5:
                                            T.label++,
                                            l = k[1],
                                            k = [0];
                                            continue;
                                        case 7:
                                            k = T.ops.pop(),
                                            T.trys.pop();
                                            continue;
                                        default:
                                            if (!((b = (b = T.trys).length > 0 && b[b.length - 1]) || k[0] !== 6 && k[0] !== 2)) {
                                                T = 0;
                                                continue
                                            }
                                            if (k[0] === 3 && (!b || k[1] > b[0] && k[1] < b[3])) {
                                                T.label = k[1];
                                                break
                                            }
                                            if (k[0] === 6 && T.label < b[1]) {
                                                T.label = b[1],
                                                b = k;
                                                break
                                            }
                                            if (b && T.label < b[2]) {
                                                T.label = b[2],
                                                T.ops.push(k);
                                                break
                                            }
                                            b[2] && T.ops.pop(),
                                            T.trys.pop();
                                            continue
                                        }
                                        k = p.call(c, T)
                                    } catch (j) {
                                        k = [6, j],
                                        l = 0
                                    } finally {
                                        g = b = 0
                                    }
                                if (5 & k[0])
                                    throw k[1];
                                return {
                                    value: k[0] ? k[1] : void 0,
                                    done: !0
                                }
                            }([E, A])
                        }
                    }
                }
                  , y = "An unknown error occurred. Please try again later.";
                function h(c, p) {
                    if (p === void 0 && (p = {}),
                    window.Promise && !p.onCompleted)
                        return new window.Promise(function(g) {
                            v(c, p).then(function(l) {
                                return g(l)
                            })
                        }
                        );
                    v(c, p).then(function(g) {
                        p.onCompleted && p.onCompleted(g)
                    })
                }
                function v(c, p) {
                    return u(this, void 0, void 0, function() {
                        var g = this;
                        return f(this, function(l) {
                            return [2, new n(function(b) {
                                return u(g, void 0, void 0, function() {
                                    var P, T, R, E, A, k, j, G, z, Z, B, Y, q, X, ee, fe, W, H, Q, ae, se, ce, he;
                                    return f(this, function(te) {
                                        switch (te.label) {
                                        case 0:
                                            if ((P = document.createElement("style")).innerHTML = e.Z,
                                            document.head.appendChild(P),
                                            (T = document.createElement("div")).setAttribute("id", "prosperstack-overlay"),
                                            document.body.appendChild(T),
                                            (R = document.createElement("div")).classList.add("prosperstack-spinner"),
                                            (E = document.createElement("div")).classList.add("bounce1"),
                                            (A = document.createElement("div")).classList.add("bounce2"),
                                            (k = document.createElement("div")).classList.add("bounce3"),
                                            R.appendChild(E),
                                            R.appendChild(A),
                                            R.appendChild(k),
                                            T.appendChild(R),
                                            T.classList.add("in"),
                                            j = function(x) {
                                                x.message && console.error(x.message),
                                                document.body.removeChild(T),
                                                function(m, w) {
                                                    var M, O = m.message || y, D = document.createElement("iframe");
                                                    D.classList.add("prosperstack-iframe", "in"),
                                                    document.body.appendChild(D);
                                                    var I = D.contentDocument || ((M = D.contentWindow) === null || M === void 0 ? void 0 : M.document);
                                                    if (!I)
                                                        throw new Error("Unable to get iframe document");
                                                    I.body.classList.add("prosperstack-content");
                                                    var L = I.createElement("div");
                                                    L.classList.add("prosperstack-error");
                                                    var F = I.createElement("div");
                                                    F.classList.add("prosperstack-error-message"),
                                                    F.innerText = "Error: " + O,
                                                    L.appendChild(F);
                                                    var K = I.createElement("div")
                                                      , U = I.createElement("a");
                                                    U.setAttribute("href", "#"),
                                                    U.innerText = "Close",
                                                    U.addEventListener("click", function(ke) {
                                                        ke.preventDefault(),
                                                        document.body.removeChild(D),
                                                        w()
                                                    }),
                                                    K.appendChild(U),
                                                    L.appendChild(K);
                                                    var pe = I.createElement("style");
                                                    pe.innerHTML = e.Z,
                                                    I.head.appendChild(pe),
                                                    I.body.appendChild(L)
                                                }(x, function() {
                                                    document.head.removeChild(P)
                                                }),
                                                p.onError && (x instanceof Error ? p.onError(x) : p.onError(new Error("An unknown error occurred.")))
                                            }
                                            ,
                                            G = window.__PROSPERSTACK_PREVIEW_MODE__ || !1,
                                            z = new URLSearchParams({
                                                embedded: "true"
                                            }),
                                            G && z.append("previewMode", "true"),
                                            p.testMode && z.append("testMode", "true"),
                                            p.skipOffers)
                                                try {
                                                    for (Z = function(x) {
                                                        var m = typeof Symbol == "function" && Symbol.iterator
                                                          , w = m && x[m]
                                                          , M = 0;
                                                        if (w)
                                                            return w.call(x);
                                                        if (x && typeof x.length == "number")
                                                            return {
                                                                next: function() {
                                                                    return x && M >= x.length && (x = void 0),
                                                                    {
                                                                        value: x && x[M++],
                                                                        done: !x
                                                                    }
                                                                }
                                                            };
                                                        throw new TypeError(m ? "Object is not iterable." : "Symbol.iterator is not defined.")
                                                    }(p.skipOffers),
                                                    B = Z.next(); !B.done; B = Z.next())
                                                        Y = B.value,
                                                        z.append("skipOffers", Y)
                                                } catch (x) {
                                                    ce = {
                                                        error: x
                                                    }
                                                } finally {
                                                    try {
                                                        B && !B.done && (he = Z.return) && he.call(Z)
                                                    } finally {
                                                        if (ce)
                                                            throw ce.error
                                                    }
                                                }
                                            if (q = "",
                                            X = "",
                                            c.payload)
                                                try {
                                                    ee = JSON.parse(c.payload),
                                                    X = ee.clientId
                                                } catch {
                                                    return j(new Error("payload must be a valid JSON string.")),
                                                    [2]
                                                }
                                            else
                                                c.clientId && (X = c.clientId);
                                            return X ? !p.sign || c.payload ? [3, 2] : (fe = JSON.stringify(c),
                                            [4, p.sign(fe)]) : (j(new Error("clientId is required.")),
                                            [2]);
                                        case 1:
                                            W = te.sent(),
                                            c = {
                                                payload: fe,
                                                signature: W
                                            },
                                            te.label = 2;
                                        case 2:
                                            return te.trys.push([2, 4, , 5]),
                                            [4, i(c, p.testMode || G || !1)];
                                        case 3:
                                            return q = te.sent() + "?".concat(z),
                                            [3, 5];
                                        case 4:
                                            return H = te.sent(),
                                            j(H),
                                            [2];
                                        case 5:
                                            return (Q = document.createElement("iframe")).classList.add("prosperstack-iframe"),
                                            Q.setAttribute("src", q),
                                            document.body.appendChild(Q),
                                            ae = function(x) {
                                                if (x.origin === (window.__PROSPERSTACK_DEBUG_APP_HOST__ ? window.__PROSPERSTACK_DEBUG_APP_HOST__ : "https://app.prosperstack.com"))
                                                    switch (x.data.message) {
                                                    case "loaded":
                                                        Q.classList.add("in"),
                                                        T.removeChild(R);
                                                        break;
                                                    case "complete":
                                                        b(x.data.payload),
                                                        (x.data.close === void 0 || x.data.close) && (se(),
                                                        p.onClosed && p.onClosed());
                                                        break;
                                                    case "closed":
                                                        se(),
                                                        p.onClosed && p.onClosed();
                                                        break;
                                                    case "loading":
                                                        Q.classList.remove("in"),
                                                        T.appendChild(R)
                                                    }
                                            }
                                            ,
                                            window.addEventListener("message", ae),
                                            se = function() {
                                                document.body.removeChild(T),
                                                Q.classList.remove("in"),
                                                window.setTimeout(function() {
                                                    window.removeEventListener("message", ae),
                                                    document.head.removeChild(P),
                                                    document.body.removeChild(Q)
                                                }, 300)
                                            }
                                            ,
                                            [2]
                                        }
                                    })
                                })
                            }
                            )]
                        })
                    })
                }
                function i(c, p) {
                    return u(this, void 0, void 0, function() {
                        var g, l, b, P, T, R, E;
                        return f(this, function(A) {
                            switch (A.label) {
                            case 0:
                                return g = typeof c.payload == "string" ? c.payload : JSON.stringify(c),
                                l = new URLSearchParams,
                                p && l.append("testMode", "true"),
                                [4, fetch("".concat(window.__PROSPERSTACK_DEBUG_API_HOST__ ? window.__PROSPERSTACK_DEBUG_API_HOST__ : "https://api.prosperstack.com", "/flow?").concat(l), {
                                    method: "POST",
                                    headers: {
                                        "content-type": "application/json",
                                        "x-prosperstack-signature": c.signature || "",
                                        "x-prosperstack-version": "2.2.5"
                                    },
                                    body: g
                                })];
                            case 1:
                                if ((b = A.sent()).ok)
                                    return [3, 6];
                                if (b.status === 503)
                                    throw new Error("The service is undergoing scheduled maintenance. Please try again later.");
                                if (b.status === 504)
                                    throw new Error("The service is currently unavailable. Please try again later.");
                                P = y,
                                A.label = 2;
                            case 2:
                                return A.trys.push([2, 4, , 5]),
                                [4, b.json()];
                            case 3:
                                return T = A.sent(),
                                P = T.error,
                                [3, 5];
                            case 4:
                                return A.sent(),
                                [3, 5];
                            case 5:
                                throw new Error(P);
                            case 6:
                                if (!(R = b.headers.get("Location")))
                                    throw new Error("Unable to create flow session.");
                                return [4, b.json()];
                            case 7:
                                return E = A.sent(),
                                c.signature && !E.signatureRequired && (E.signatureVerified ? console.warn(`The supplied signature was valid.

However, signatures are not required by your flow configuration.

Do not rely on signatures for authentication!`) : console.error(`The supplied signature was not valid!

This will not prevent your flow from functioning because signatures are not required by your flow configuration.

Do not rely on signatures for authentication!`)),
                                [2, R]
                            }
                        })
                    })
                }
                var o = h
            }(),
            a
        }()
    })
}
);
var mt = J(Re => {
    "use strict";
    Object.defineProperty(Re, "__esModule", {
        value: !0
    });
    var xe = "#8dc63f"
      , ie = "#00aeef"
      , ft = "#ff9100"
      , Zt = "#c94a45"
      , we = "#fff"
      , ht = "#000"
      , pt = "#cfcfcf"
      , Jt = "#E60000";
    Re.Colours = {
        colourHootsuiteGreen: xe,
        colourHootsuiteBlue: ie,
        colourHootsuiteOrange: ft,
        colourHootsuiteRed: Zt,
        colourWhite: we,
        colourBlack: ht,
        genericBadges: {
            TEAM: "#70cc6c"
        },
        socialNetworks: {
            APPDIR: "#333333",
            EVERNOTE: "#2dbe60",
            FACEBOOK: "#3b5998",
            FACEBOOKPAGE: "#3b5998",
            FACEBOOKGROUP: "#3b5998",
            FLICKR: "#1057ae",
            FOURSQUARE: "#f84777",
            "GOOGLE+": "#df4a32",
            GOOGLEPLUS: "#df4a32",
            GOOGLEPLUSPAGE: "#df4a32",
            INSTAGRAM_IE9: "#3f729b",
            INSTAGRAM: "linear-gradient(#405de6, transparent), linear-gradient(200deg, #d047d1,#ff0000,#ffff00)",
            INSTAGRAMBUSINESS_IE9: "#3f729b",
            INSTAGRAMBUSINESS: "linear-gradient(#405de6, transparent), linear-gradient(200deg, #d047d1,#ff0000,#ffff00)",
            LINKEDIN: "#1c87bd",
            LINKEDINCOMPANY: "#1c87bd",
            LINKEDINGROUP: "#1c87bd",
            TUMBLR: "#35465c",
            TWITTER: "#55acee",
            WORDPRESS: "#21759b",
            YOUTUBE: "#cd201f",
            YOUTUBECHANNEL: "#cd201f",
            PINTEREST: "#bd081c"
        },
        colourCoreText: "#2F3638",
        colourCoreTextReverse: we,
        colourLightText: "#5C6365",
        colourDisabledText: "#acafaf",
        colourHyperlinkText: "#187aad",
        colourSecondaryText: "#007faf",
        colourGreyDark: "#5a5a5a",
        colourGreyDarker: "#4a4a4a",
        colourHootsuiteBlueDarkened10Percent: "#0089bc",
        colourButtonPrimary: ie,
        colourButtonPrimaryBackgroundHover: "#00a7e5",
        colourButtonPrimaryBorderDisabled: "#8ed6f1",
        colourButtonPrimaryBackgroundDisabled: "#9edcf3",
        colourButtonSecondaryTextDisabled: "#a3c9d8",
        colourButtonSecondaryHover: "#f2f2f2",
        colourButtonSecondaryActive: "#e0e0e0",
        colourButtonStandard: we,
        colourButtonStandardBorder: pt,
        colourButtonStandardHover: "#f2f2f2",
        colourButtonStandardActive: "#b2b2b",
        colourButtonStandardTextDisabled: "#9a9a9a",
        colourButtonStandardBorderDisabled: "#e8e8e8",
        colourButtonActionBackgroundHover: "#88c139",
        colourButtonActionBorderDisabled: "#c9dfab",
        colourButtonActionBackgroundDisabled: "#d1e3b7",
        colourButtonActionBorderFocus: "#72a230",
        colourBackground: we,
        colourBackgroundDark: ht,
        colourBackgroundSecondary: ie,
        colourBackgroundHighlight: "#95e2ff",
        colourPrimaryAction: ie,
        colourSuccess: xe,
        colourError: "#e60000",
        colourAlert: ft,
        colourTrimPrimary: ie,
        colourTrimSecondary: xe,
        colourFocusPrimary: "#187aad",
        colourFocusSecondary: ie,
        colourFontIcons: "#949a9b",
        colourLineDivider: pt,
        colourLineDividerDisabled: "#e6e6e6",
        colourErrorToastBackground: "#ffbbab",
        colourWarningToastBackground: "#fff0bd",
        colourInfoToastBackground: "#c8eefc",
        colourErrorIcon: Jt,
        colourWarningIcon: "#f4b21e",
        colourInfoIcon: "#2baced",
        colourHootsuiteBrand: ie,
        colourBorderStandard: "#BCBCBC",
        colourBorderDisabled: "#E5E5E5"
    }
}
);
var gt = J(je => {
    "use strict";
    Object.defineProperty(je, "__esModule", {
        value: !0
    });
    je.Fonts = {
        fontPrimary: "Open Sans, Helvetica Neue, Helvetica, Arial",
        fontSecondary: "Arial, Helvetica, sans-serif",
        fontSerif: "Georgia, Times New Roman, Times, serif",
        fontMonospaced: "CourierNew, Courier, monospace",
        fontWeightBold: 700,
        fontWeightSemiBold: 600,
        fontWeightNormal: 400,
        fontSizePageHeading: "30px",
        fontSizeSubpageHeading: "24px",
        fontSizeSmallSectionHeading: "20px",
        fontSizeSectionHeading: "18px",
        fontSizeCategoryHeading: "16px",
        fontSizeBodyText: "14px",
        fontSizeMetadataText: "12px",
        fontSizeBodyTextCompact: "12px",
        fontSizeMetadataTextCompact: "10px"
    }
}
);
var yt = J(Le => {
    "use strict";
    Object.defineProperty(Le, "__esModule", {
        value: !0
    });
    Le.Spacing = {
        spacingSmallMicro: "4px",
        spacingSmallStandard: "8px",
        spacingSmallRoomy: "12px",
        spacingStandard: "16px",
        spacingStandardRoomy: "18px",
        spacingTitle: "24px",
        spacingMajor: "28px",
        spacingGroupedInputs: "40px",
        spacingTouchArea: "44px",
        spacingLarge: "48px",
        avatarSize: "32px"
    }
}
);
var vt = J(He => {
    "use strict";
    Object.defineProperty(He, "__esModule", {
        value: !0
    });
    He.isCurrentTimeWithinIntervals = function(t) {
        if (t)
            for (var s = JSON.parse(t), d = Date.now(), a = 0; a < s.length; ++a) {
                var e = Date.parse(s[a].start)
                  , n = Date.parse(s[a].end);
                if (d >= e && d <= n)
                    return !0
            }
        return !1
    }
}
);
var bt = J(le => {
    "use strict";
    Object.defineProperty(le, "__esModule", {
        value: !0
    });
    var Xt = mt();
    le.Colours = Xt.Colours;
    var en = gt();
    le.Fonts = en.Fonts;
    var tn = yt();
    le.Spacing = tn.Spacing;
    var nn = vt();
    le.isCurrentTimeWithinIntervals = nn.isCurrentTimeWithinIntervals
}
);
(function() {
    var t = Date;
    jQuery.fn.daterangepicker = function(a) {
        var e = jQuery(this)
          , n = jQuery.extend({
            presetRanges: [{
                text: "Today",
                dateStart: "today",
                dateEnd: "today"
            }, {
                text: "Last 7 days",
                dateStart: "today-7days",
                dateEnd: "today"
            }, {
                text: "Last 14 days",
                dateStart: "today-14days",
                dateEnd: "today"
            }, {
                text: "Month to date",
                dateStart: function() {
                    return t.newparse("today").moveToFirstDayOfMonth()
                },
                dateEnd: "today"
            }, {
                text: "Previous month (" + t.newparse("last month").toString("MMMM") + ")",
                dateStart: function() {
                    return t.newparse("1 month ago").moveToFirstDayOfMonth()
                },
                dateEnd: function() {
                    return t.newparse("1 month ago").moveToLastDayOfMonth()
                }
            }],
            presets: {
                specificDate: "Specific Date",
                dateRange: "Date Range"
            },
            rangeStartTitle: "Start date",
            rangeEndTitle: "End date",
            nextLinkText: "Next",
            prevLinkText: "Prev",
            doneButtonText: "Apply",
            validate: function(E, A) {
                return !0
            },
            earliestDate: t.newparse("-3years"),
            latestDate: t.newparse("today"),
            rangeSplitter: "-",
            dateFormat: "m/d/yy",
            closeOnSelect: !0,
            arrows: !1,
            posX: e.offset().left,
            posY: e.offset().top + e.outerHeight(),
            appendTo: "body",
            onClose: function() {},
            onOpen: function() {},
            onChange: function() {},
            datepickerOptions: {},
            isGMT: !1
        }, a)
          , u = {
            onSelect: function() {
                var E = !0;
                i.find(".ui-daterangepicker-specificDate").is(".ui-state-active") && i.find(".range-end").datepicker("setDate", i.find(".range-start").datepicker("getDate"));
                var A = c(i.find(".range-start").datepicker("getDate"))
                  , k = c(i.find(".range-end").datepicker("getDate"))
                  , j = new Date
                  , G = new Date(j.getTime() + j.getTimezoneOffset() * 60 * 1e3)
                  , z = n.isGMT ? G.getTime() : j.getTime()
                  , Z = n.isGMT ? c(G) : c(j)
                  , B = t.newparse(A)
                  , Y = t.newparse(k)
                  , q = B.getTime()
                  , X = Y.getTime();
                E = n.validate(B, Y),
                E && (e.length == 2 ? (e.eq(0).val(A),
                e.eq(1).val(k)) : e.val(A != k ? A + " " + n.rangeSplitter + " " + k : A),
                e.data("rangeStart", B),
                e.data("rangeEnd", Y),
                n.closeOnSelect && !i.find("li.ui-state-active").is(".ui-daterangepicker-dateRange") && !i.is(":animated") && g(),
                n.onChange()),
                _.defer(function() {
                    i.find(".ui-state-highlight").removeClass("ui-state-highlight")
                })
            },
            defaultDate: 0
        };
        e.change(n.onChange),
        n.datepickerOptions = a ? jQuery.extend(u, a.datepickerOptions) : u;
        var f, y = t.newparse("today"), h, v;
        e.size() == 2 ? (h = t.newparse(e.eq(0).val()),
        v = t.newparse(e.eq(1).val()),
        h == null && (h = v),
        v == null && (v = h)) : (h = t.newparse(e.val().split(n.rangeSplitter)[0]),
        v = t.newparse(e.val().split(n.rangeSplitter)[1]),
        v == null && (v = h)),
        h != null && (f = h),
        v != null && (y = v);
        var i = jQuery('<div class="ui-styles ui-daterangepicker ui-widget ui-helper-clearfix ui-widget-content ui-corner-all"></div>')
          , o = function() {
            var E = jQuery('<ul class="ui-widget-content"></ul>').appendTo(i);
            jQuery.each(n.presetRanges, function() {
                jQuery('<li class="ui-daterangepicker-' + this.text.replace(/ /g, "") + ' ui-corner-all"><a href="#">' + this.text + "</a></li>").data("dateStart", this.dateStart).data("dateEnd", this.dateEnd).appendTo(E)
            });
            var A = 0;
            return jQuery.each(n.presets, function(k, j) {
                jQuery('<li class="ui-daterangepicker-' + k + " preset_" + A + ' ui-helper-clearfix ui-corner-all"><span class="ui-icon ui-icon-triangle-1-e"></span><a href="#">' + j + "</a></li>").appendTo(E),
                A++
            }),
            E.find("li").hover(function() {
                jQuery(this).addClass("ui-state-hover")
            }, function() {
                jQuery(this).removeClass("ui-state-hover")
            }).click(function() {
                return i.find(".ui-state-active").removeClass("ui-state-active"),
                jQuery(this).addClass("ui-state-active").clickActions(i, b, P),
                !1
            }),
            E
        }();
        function c(E) {
            if (!E || !E.getDate())
                return "";
            var A = E.getDate()
              , k = E.getMonth()
              , j = E.getFullYear();
            k++;
            var G = n.dateFormat;
            return jQuery.datepicker.formatDate(G, E, {
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            })
        }
        jQuery.fn.restoreDateFromData = function() {
            return jQuery(this).data("saveDate") && jQuery(this).datepicker("setDate", jQuery(this).data("saveDate")).removeData("saveDate"),
            this
        }
        ,
        jQuery.fn.saveDateToData = function() {
            return jQuery(this).data("saveDate") || jQuery(this).data("saveDate", jQuery(this).datepicker("getDate")),
            this
        }
        ;
        function p() {
            i.data("state") == "closed" && (i.data("state", "open"),
            i.fadeIn(300),
            n.onOpen())
        }
        function g() {
            i.data("state") == "open" && (i.data("state", "closed"),
            i.fadeOut(300),
            n.onClose())
        }
        function l() {
            i.data("state") == "open" ? g() : p()
        }
        i.data("state", "closed"),
        jQuery.fn.clickActions = function(E, A, k) {
            if (jQuery(this).is(".ui-daterangepicker-specificDate"))
                k.hide(),
                A.show(),
                E.find(".title-start").text(n.presets.specificDate),
                E.find(".range-start").restoreDateFromData().show(400),
                E.find(".range-end").restoreDateFromData().hide(400),
                setTimeout(function() {
                    k.fadeIn()
                }, 400);
            else if (jQuery(this).is(".ui-daterangepicker-allDatesBefore"))
                k.hide(),
                A.show(),
                E.find(".title-end").text(n.presets.allDatesBefore),
                E.find(".range-start").saveDateToData().datepicker("setDate", n.earliestDate).hide(400),
                E.find(".range-end").restoreDateFromData().show(400),
                setTimeout(function() {
                    k.fadeIn()
                }, 400);
            else if (jQuery(this).is(".ui-daterangepicker-allDatesAfter"))
                k.hide(),
                A.show(),
                E.find(".title-start").text(n.presets.allDatesAfter),
                E.find(".range-start").restoreDateFromData().show(400),
                E.find(".range-end").saveDateToData().datepicker("setDate", n.latestDate).hide(400),
                setTimeout(function() {
                    k.fadeIn()
                }, 400);
            else if (jQuery(this).is(".ui-daterangepicker-dateRange"))
                k.hide(),
                A.show(),
                E.find(".title-start").text(n.rangeStartTitle),
                E.find(".title-end").text(n.rangeEndTitle),
                E.find(".range-start").restoreDateFromData().show(400),
                E.find(".range-end").restoreDateFromData().show(400),
                setTimeout(function() {
                    k.fadeIn()
                }, 400);
            else {
                k.hide(),
                E.find(".range-start, .range-end").hide(400, function() {
                    A.hide()
                });
                var j = typeof jQuery(this).data("dateStart") == "string" ? t.newparse(jQuery(this).data("dateStart")) : jQuery(this).data("dateStart")()
                  , G = typeof jQuery(this).data("dateEnd") == "string" ? t.newparse(jQuery(this).data("dateEnd")) : jQuery(this).data("dateEnd")()
                  , z = t.newparse(c(E.find(".range-end").datepicker("getDate")));
                j > z || z > t.today() ? (E.find(".range-end").datepicker("setDate", G).find(".ui-datepicker-current-day").trigger("click"),
                E.find(".range-start").datepicker("setDate", j).find(".ui-datepicker-current-day").trigger("click")) : (E.find(".range-start").datepicker("setDate", j).find(".ui-datepicker-current-day").trigger("click"),
                E.find(".range-end").datepicker("setDate", G).find(".ui-datepicker-current-day").trigger("click"))
            }
            return !1
        }
        ;
        var b = jQuery('<div class="ranges ui-widget-header ui-corner-all ui-helper-clearfix"><div class="range-start"><span class="title-start">Start Date</span></div><div class="range-end"><span class="title-end">End Date</span></div></div>').appendTo(i);
        b.find(".range-start, .range-end").datepicker(n.datepickerOptions),
        b.find(".range-start").datepicker("setDate", f),
        b.find(".range-end").datepicker("setDate", y);
        var P = jQuery('<button class="btnDone ui-state-default ui-corner-all">' + n.doneButtonText + "</button>").click(function() {
            i.find(".ui-datepicker-current-day").trigger("click"),
            g()
        }).hover(function() {
            jQuery(this).addClass("ui-state-hover")
        }, function() {
            jQuery(this).removeClass("ui-state-hover")
        }).appendTo(b);
        if (b.find(".ui-state-highlight").removeClass("ui-state-highlight"),
        jQuery(this).click(function() {
            return l(),
            !1
        }),
        b.css("display", "none").find(".range-start, .range-end, .btnDone").css("display", "none"),
        jQuery(n.appendTo).append(i),
        i.wrap('<div class="ui-daterangepickercontain"></div>'),
        n.arrows && e.size() == 1) {
            var T = jQuery('<a href="#" class="ui-daterangepicker-prev ui-corner-all" title="' + n.prevLinkText + '"><span class="ui-icon ui-icon-circle-triangle-w">' + n.prevLinkText + "</span></a>")
              , R = jQuery('<a href="#" class="ui-daterangepicker-next ui-corner-all" title="' + n.nextLinkText + '"><span class="ui-icon ui-icon-circle-triangle-e">' + n.nextLinkText + "</span></a>");
            jQuery(this).addClass("ui-rangepicker-input ui-widget-content").wrap('<div class="ui-daterangepicker-arrows ui-widget ui-widget-header ui-helper-clearfix ui-corner-all"></div>').before(T).before(R).parent().find("a").click(function() {
                var E = b.find(".range-start").datepicker("getDate")
                  , A = b.find(".range-end").datepicker("getDate")
                  , k = Math.abs(new s(E - A).getTotalMilliseconds()) + 864e5;
                return jQuery(this).is(".ui-daterangepicker-prev") && (k = -k),
                b.find(".range-start, .range-end ").each(function() {
                    var j = jQuery(this).datepicker("getDate");
                    if (j == null)
                        return !1;
                    jQuery(this).datepicker("setDate", j.add({
                        milliseconds: k
                    })).find(".ui-datepicker-current-day").trigger("click")
                }),
                !1
            }).hover(function() {
                jQuery(this).addClass("ui-state-hover")
            }, function() {
                jQuery(this).removeClass("ui-state-hover")
            })
        }
        return jQuery(document).click(function() {
            i.is(":visible") && g()
        }),
        i.click(function() {
            return !1
        }).hide(),
        this
    }
    ,
    t.CultureInfo = {
        name: "en-US",
        englishName: "English (United States)",
        nativeName: "English (United States)",
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        amDesignator: "AM",
        pmDesignator: "PM",
        firstDayOfWeek: 0,
        twoDigitYearMax: 2029,
        dateElementOrder: "mdy",
        formatPatterns: {
            shortDate: "M/d/yyyy",
            longDate: "dddd, MMMM dd, yyyy",
            shortTime: "h:mm tt",
            longTime: "h:mm:ss tt",
            fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
            sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
            universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
            rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
            monthDay: "MMMM dd",
            yearMonth: "MMMM, yyyy"
        },
        regexPatterns: {
            jan: /^jan(uary)?/i,
            feb: /^feb(ruary)?/i,
            mar: /^mar(ch)?/i,
            apr: /^apr(il)?/i,
            may: /^may/i,
            jun: /^jun(e)?/i,
            jul: /^jul(y)?/i,
            aug: /^aug(ust)?/i,
            sep: /^sep(t(ember)?)?/i,
            oct: /^oct(ober)?/i,
            nov: /^nov(ember)?/i,
            dec: /^dec(ember)?/i,
            sun: /^su(n(day)?)?/i,
            mon: /^mo(n(day)?)?/i,
            tue: /^tu(e(s(day)?)?)?/i,
            wed: /^we(d(nesday)?)?/i,
            thu: /^th(u(r(s(day)?)?)?)?/i,
            fri: /^fr(i(day)?)?/i,
            sat: /^sa(t(urday)?)?/i,
            future: /^next/i,
            past: /^last|past|prev(ious)?/i,
            add: /^(\+|after|from)/i,
            subtract: /^(\-|before|ago)/i,
            yesterday: /^yesterday/i,
            today: /^t(oday)?/i,
            tomorrow: /^tomorrow/i,
            now: /^n(ow)?/i,
            millisecond: /^ms|milli(second)?s?/i,
            second: /^sec(ond)?s?/i,
            minute: /^min(ute)?s?/i,
            hour: /^h(ou)?rs?/i,
            week: /^w(ee)?k/i,
            month: /^m(o(nth)?s?)?/i,
            day: /^d(ays?)?/i,
            year: /^y((ea)?rs?)?/i,
            shortMeridian: /^(a|p)/i,
            longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
            timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
            ordinalSuffix: /^\s*(st|nd|rd|th)/i,
            timeContext: /^\s*(\:|a|p)/i
        },
        abbreviatedTimeZoneStandard: {
            GMT: "-000",
            EST: "-0400",
            CST: "-0500",
            MST: "-0600",
            PST: "-0700"
        },
        abbreviatedTimeZoneDST: {
            GMT: "-000",
            EDT: "-0500",
            CDT: "-0600",
            MDT: "-0700",
            PDT: "-0800"
        }
    },
    t.getMonthNumberFromName = function(a) {
        for (var e = t.CultureInfo.monthNames, n = t.CultureInfo.abbreviatedMonthNames, u = a.toLowerCase(), f = 0; f < e.length; f++)
            if (e[f].toLowerCase() == u || n[f].toLowerCase() == u)
                return f;
        return -1
    }
    ,
    t.getDayNumberFromName = function(a) {
        for (var e = t.CultureInfo.dayNames, n = t.CultureInfo.abbreviatedDayNames, u = t.CultureInfo.shortestDayNames, f = a.toLowerCase(), y = 0; y < e.length; y++)
            if (e[y].toLowerCase() == f || n[y].toLowerCase() == f)
                return y;
        return -1
    }
    ,
    t.isLeapYear = function(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }
    ,
    t.getDaysInMonth = function(a, e) {
        return [31, t.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
    }
    ,
    t.getTimezoneOffset = function(a, e) {
        return e ? t.CultureInfo.abbreviatedTimeZoneDST[a.toUpperCase()] : t.CultureInfo.abbreviatedTimeZoneStandard[a.toUpperCase()]
    }
    ,
    t.getTimezoneAbbreviation = function(a, e) {
        var n = e ? t.CultureInfo.abbreviatedTimeZoneDST : t.CultureInfo.abbreviatedTimeZoneStandard, u;
        for (u in n)
            if (n[u] === a)
                return u;
        return null
    }
    ,
    t.prototype.clone = function() {
        return new t(this.getTime())
    }
    ,
    t.prototype.compareTo = function(a) {
        if (isNaN(this))
            throw new Error(this);
        if (a instanceof Date && !isNaN(a))
            return this > a ? 1 : this < a ? -1 : 0;
        throw new TypeError(a)
    }
    ,
    t.prototype.equals = function(a) {
        return this.compareTo(a) === 0
    }
    ,
    t.prototype.between = function(a, e) {
        var n = this.getTime();
        return n >= a.getTime() && n <= e.getTime()
    }
    ,
    t.prototype.addMilliseconds = function(a) {
        return this.setMilliseconds(this.getMilliseconds() + a),
        this
    }
    ,
    t.prototype.addSeconds = function(a) {
        return this.addMilliseconds(a * 1e3)
    }
    ,
    t.prototype.addMinutes = function(a) {
        return this.addMilliseconds(a * 6e4)
    }
    ,
    t.prototype.addHours = function(a) {
        return this.addMilliseconds(a * 36e5)
    }
    ,
    t.prototype.addDays = function(a) {
        return this.addMilliseconds(a * 864e5)
    }
    ,
    t.prototype.addWeeks = function(a) {
        return this.addMilliseconds(a * 6048e5)
    }
    ,
    t.prototype.addMonths = function(a) {
        var e = this.getDate();
        return this.setDate(1),
        this.setMonth(this.getMonth() + a),
        this.setDate(Math.min(e, this.getDaysInMonth())),
        this
    }
    ,
    t.prototype.addYears = function(a) {
        return this.addMonths(a * 12)
    }
    ,
    t.prototype.add = function(a) {
        if (typeof a == "number")
            return this._orient = a,
            this;
        var e = a;
        return (e.millisecond || e.milliseconds) && this.addMilliseconds(e.millisecond || e.milliseconds),
        (e.second || e.seconds) && this.addSeconds(e.second || e.seconds),
        (e.minute || e.minutes) && this.addMinutes(e.minute || e.minutes),
        (e.hour || e.hours) && this.addHours(e.hour || e.hours),
        (e.month || e.months) && this.addMonths(e.month || e.months),
        (e.year || e.years) && this.addYears(e.year || e.years),
        (e.day || e.days) && this.addDays(e.day || e.days),
        this
    }
    ,
    t._validate = function(a, e, n, u) {
        if (typeof a != "number")
            throw new TypeError(a + " is not a Number.");
        if (a < e || a > n)
            throw new RangeError(a + " is not a valid value for " + u + ".");
        return !0
    }
    ,
    t.validateMillisecond = function(a) {
        return t._validate(a, 0, 999, "milliseconds")
    }
    ,
    t.validateSecond = function(a) {
        return t._validate(a, 0, 59, "seconds")
    }
    ,
    t.validateMinute = function(a) {
        return t._validate(a, 0, 59, "minutes")
    }
    ,
    t.validateHour = function(a) {
        return t._validate(a, 0, 23, "hours")
    }
    ,
    t.validateDay = function(a, e, n) {
        return t._validate(a, 1, t.getDaysInMonth(e, n), "days")
    }
    ,
    t.validateMonth = function(a) {
        return t._validate(a, 0, 11, "months")
    }
    ,
    t.validateYear = function(a) {
        return t._validate(a, 1, 9999, "seconds")
    }
    ,
    t.prototype.set = function(a) {
        var e = a;
        return !e.millisecond && e.millisecond !== 0 && (e.millisecond = -1),
        !e.second && e.second !== 0 && (e.second = -1),
        !e.minute && e.minute !== 0 && (e.minute = -1),
        !e.hour && e.hour !== 0 && (e.hour = -1),
        !e.day && e.day !== 0 && (e.day = -1),
        !e.month && e.month !== 0 && (e.month = -1),
        !e.year && e.year !== 0 && (e.year = -1),
        e.millisecond != -1 && t.validateMillisecond(e.millisecond) && this.addMilliseconds(e.millisecond - this.getMilliseconds()),
        e.second != -1 && t.validateSecond(e.second) && this.addSeconds(e.second - this.getSeconds()),
        e.minute != -1 && t.validateMinute(e.minute) && this.addMinutes(e.minute - this.getMinutes()),
        e.hour != -1 && t.validateHour(e.hour) && this.addHours(e.hour - this.getHours()),
        e.month !== -1 && t.validateMonth(e.month) && this.addMonths(e.month - this.getMonth()),
        e.year != -1 && t.validateYear(e.year) && this.addYears(e.year - this.getFullYear()),
        e.day != -1 && t.validateDay(e.day, this.getFullYear(), this.getMonth()) && this.addDays(e.day - this.getDate()),
        e.timezone && this.setTimezone(e.timezone),
        e.timezoneOffset && this.setTimezoneOffset(e.timezoneOffset),
        this
    }
    ,
    t.prototype.clearTime = function() {
        return this.setHours(0),
        this.setMinutes(0),
        this.setSeconds(0),
        this.setMilliseconds(0),
        this
    }
    ,
    t.prototype.isLeapYear = function() {
        var a = this.getFullYear();
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }
    ,
    t.prototype.isWeekday = function() {
        return !(this.is().sat() || this.is().sun())
    }
    ,
    t.prototype.getDaysInMonth = function() {
        return t.getDaysInMonth(this.getFullYear(), this.getMonth())
    }
    ,
    t.prototype.moveToFirstDayOfMonth = function() {
        return this.set({
            day: 1
        })
    }
    ,
    t.prototype.moveToLastDayOfMonth = function() {
        return this.set({
            day: this.getDaysInMonth()
        })
    }
    ,
    t.prototype.moveToDayOfWeek = function(a, e) {
        var n = (a - this.getDay() + 7 * (e || 1)) % 7;
        return this.addDays(n === 0 ? n += 7 * (e || 1) : n)
    }
    ,
    t.prototype.moveToMonth = function(a, e) {
        var n = (a - this.getMonth() + 12 * (e || 1)) % 12;
        return this.addMonths(n === 0 ? n += 12 * (e || 1) : n)
    }
    ,
    t.prototype.getDayOfYear = function() {
        return Math.floor((this - new t(this.getFullYear(),0,1)) / 864e5)
    }
    ,
    t.prototype.getWeekOfYear = function(a) {
        var e = this.getFullYear()
          , n = this.getMonth()
          , u = this.getDate()
          , f = a || t.CultureInfo.firstDayOfWeek
          , y = 7 + 1 - new t(e,0,1).getDay();
        y == 8 && (y = 1);
        var h = (t.UTC(e, n, u, 0, 0, 0) - t.UTC(e, 0, 1, 0, 0, 0)) / 864e5 + 1
          , v = Math.floor((h - y + 7) / 7);
        if (v === f) {
            e--;
            var i = 7 + 1 - new t(e,0,1).getDay();
            i == 2 || i == 8 ? v = 53 : v = 52
        }
        return v
    }
    ,
    t.prototype.isDST = function() {
        return this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D"
    }
    ,
    t.prototype.getTimezone = function() {
        return t.getTimezoneAbbreviation(this.getUTCOffset, this.isDST())
    }
    ,
    t.prototype.setTimezoneOffset = function(a) {
        var e = this.getTimezoneOffset()
          , n = Number(a) * -6 / 10;
        return this.addMinutes(n - e),
        this
    }
    ,
    t.prototype.setTimezone = function(a) {
        return this.setTimezoneOffset(t.getTimezoneOffset(a))
    }
    ,
    t.prototype.getUTCOffset = function() {
        var a = this.getTimezoneOffset() * -10 / 6, e;
        return a < 0 ? (e = (a - 1e4).toString(),
        e[0] + e.substr(2)) : (e = (a + 1e4).toString(),
        "+" + e.substr(1))
    }
    ,
    t.prototype.getDayName = function(a) {
        return a ? t.CultureInfo.abbreviatedDayNames[this.getDay()] : t.CultureInfo.dayNames[this.getDay()]
    }
    ,
    t.prototype.getMonthName = function(a) {
        return a ? t.CultureInfo.abbreviatedMonthNames[this.getMonth()] : t.CultureInfo.monthNames[this.getMonth()]
    }
    ,
    t.prototype._toString = t.prototype.toString,
    t.prototype.toString = function(a) {
        var e = this
          , n = function(f) {
            return f.toString().length == 1 ? "0" + f : f
        };
        return a ? a.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function(u) {
            switch (u) {
            case "hh":
                return n(e.getHours() < 13 ? e.getHours() : e.getHours() - 12);
            case "h":
                return e.getHours() < 13 ? e.getHours() : e.getHours() - 12;
            case "HH":
                return n(e.getHours());
            case "H":
                return e.getHours();
            case "mm":
                return n(e.getMinutes());
            case "m":
                return e.getMinutes();
            case "ss":
                return n(e.getSeconds());
            case "s":
                return e.getSeconds();
            case "yyyy":
                return e.getFullYear();
            case "yy":
                return e.getFullYear().toString().substring(2, 4);
            case "dddd":
                return e.getDayName();
            case "ddd":
                return e.getDayName(!0);
            case "dd":
                return n(e.getDate());
            case "d":
                return e.getDate().toString();
            case "MMMM":
                return e.getMonthName();
            case "MMM":
                return e.getMonthName(!0);
            case "MM":
                return n(e.getMonth() + 1);
            case "M":
                return e.getMonth() + 1;
            case "t":
                return e.getHours() < 12 ? t.CultureInfo.amDesignator.substring(0, 1) : t.CultureInfo.pmDesignator.substring(0, 1);
            case "tt":
                return e.getHours() < 12 ? t.CultureInfo.amDesignator : t.CultureInfo.pmDesignator;
            case "zzz":
            case "zz":
            case "z":
                return ""
            }
        }) : this._toString()
    }
    ,
    t.today = function() {
        return new t().clearTime()
    }
    ,
    t.prototype._orient = 1,
    t.prototype.next = function() {
        return this._orient = 1,
        this
    }
    ,
    t.prototype.last = t.prototype.prev = t.prototype.previous = function() {
        return this._orient = -1,
        this
    }
    ,
    t.prototype._is = !1,
    t.prototype.is = function() {
        return this._is = !0,
        this
    }
    ,
    Number.prototype._dateElement = "day",
    Number.prototype.fromNow = function() {
        var a = {};
        return a[this._dateElement] = this,
        new t().add(a)
    }
    ,
    Number.prototype.ago = function() {
        var a = {};
        return a[this._dateElement] = this * -1,
        new t().add(a)
    }
    ,
    function() {
        for (var a = t.prototype, e = Number.prototype, n = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), u = "january february march april may june july august september october november december".split(/\s/), f = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/), y, h = function(l) {
            return function() {
                return this._is ? (this._is = !1,
                this.getDay() == l) : this.moveToDayOfWeek(l, this._orient)
            }
        }, v = 0; v < n.length; v++)
            a[n[v]] = a[n[v].substring(0, 3)] = h(v);
        for (var i = function(l) {
            return function() {
                return this._is ? (this._is = !1,
                this.getMonth() === l) : this.moveToMonth(l, this._orient)
            }
        }, o = 0; o < u.length; o++)
            a[u[o]] = a[u[o].substring(0, 3)] = i(o);
        for (var c = function(l) {
            return function() {
                return l.substring(l.length - 1) != "s" && (l += "s"),
                this["add" + l](this._orient)
            }
        }, p = function(l) {
            return function() {
                return this._dateElement = l,
                this
            }
        }, g = 0; g < f.length; g++)
            y = f[g].toLowerCase(),
            a[y] = a[y + "s"] = c(f[g]),
            e[y] = e[y + "s"] = p(y)
    }(),
    t.prototype.toJSONString = function() {
        return this.toString("yyyy-MM-ddThh:mm:ssZ")
    }
    ,
    t.prototype.toShortDateString = function() {
        return this.toString(t.CultureInfo.formatPatterns.shortDatePattern)
    }
    ,
    t.prototype.toLongDateString = function() {
        return this.toString(t.CultureInfo.formatPatterns.longDatePattern)
    }
    ,
    t.prototype.toShortTimeString = function() {
        return this.toString(t.CultureInfo.formatPatterns.shortTimePattern)
    }
    ,
    t.prototype.toLongTimeString = function() {
        return this.toString(t.CultureInfo.formatPatterns.longTimePattern)
    }
    ,
    t.prototype.getOrdinal = function() {
        switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th"
        }
    }
    ,
    function() {
        t.Parsing = {
            Exception: function(i) {
                this.message = "Parse error at '" + i.substring(0, 10) + " ...'"
            }
        };
        for (var a = t.Parsing, e = a.Operators = {
            rtoken: function(i) {
                return function(o) {
                    var c = o.match(i);
                    if (c)
                        return [c[0], o.substring(c[0].length)];
                    throw new a.Exception(o)
                }
            },
            token: function(i) {
                return function(o) {
                    return e.rtoken(new RegExp("^s*" + o + "s*"))(o)
                }
            },
            stoken: function(i) {
                return e.rtoken(new RegExp("^" + i))
            },
            until: function(i) {
                return function(o) {
                    for (var c = [], p = null; o.length; ) {
                        try {
                            p = i.call(this, o)
                        } catch {
                            c.push(p[0]),
                            o = p[1];
                            continue
                        }
                        break
                    }
                    return [c, o]
                }
            },
            many: function(i) {
                return function(o) {
                    for (var c = [], p = null; o.length; ) {
                        try {
                            p = i.call(this, o)
                        } catch {
                            return [c, o]
                        }
                        c.push(p[0]),
                        o = p[1]
                    }
                    return [c, o]
                }
            },
            optional: function(i) {
                return function(o) {
                    var c = null;
                    try {
                        c = i.call(this, o)
                    } catch {
                        return [null, o]
                    }
                    return [c[0], c[1]]
                }
            },
            not: function(i) {
                return function(o) {
                    try {
                        i.call(this, o)
                    } catch {
                        return [null, o]
                    }
                    throw new a.Exception(o)
                }
            },
            ignore: function(i) {
                return i ? function(o) {
                    var c = null;
                    return c = i.call(this, o),
                    [null, c[1]]
                }
                : null
            },
            product: function() {
                for (var i = arguments[0], o = Array.prototype.slice.call(arguments, 1), c = [], p = 0; p < i.length; p++)
                    c.push(e.each(i[p], o));
                return c
            },
            cache: function(i) {
                var o = {}
                  , c = null;
                return function(p) {
                    try {
                        c = o[p] = o[p] || i.call(this, p)
                    } catch (g) {
                        c = o[p] = g
                    }
                    if (c instanceof a.Exception)
                        throw c;
                    return c
                }
            },
            any: function() {
                var i = arguments;
                return function(o) {
                    for (var c = null, p = 0; p < i.length; p++)
                        if (i[p] != null) {
                            try {
                                c = i[p].call(this, o)
                            } catch {
                                c = null
                            }
                            if (c)
                                return c
                        }
                    throw new a.Exception(o)
                }
            },
            each: function() {
                var i = arguments;
                return function(o) {
                    for (var c = [], p = null, g = 0; g < i.length; g++)
                        if (i[g] != null) {
                            try {
                                p = i[g].call(this, o)
                            } catch {
                                throw new a.Exception(o)
                            }
                            c.push(p[0]),
                            o = p[1]
                        }
                    return [c, o]
                }
            },
            all: function() {
                var i = arguments
                  , o = o;
                return o.each(o.optional(i))
            },
            sequence: function(i, o, c) {
                return o = o || e.rtoken(/^\s*/),
                c = c || null,
                i.length == 1 ? i[0] : function(p) {
                    for (var g = null, l = null, b = [], P = 0; P < i.length; P++) {
                        try {
                            g = i[P].call(this, p)
                        } catch {
                            break
                        }
                        b.push(g[0]);
                        try {
                            l = o.call(this, g[1])
                        } catch {
                            l = null;
                            break
                        }
                        p = l[1]
                    }
                    if (!g)
                        throw new a.Exception(p);
                    if (l)
                        throw new a.Exception(l[1]);
                    if (c)
                        try {
                            g = c.call(this, g[1])
                        } catch {
                            throw new a.Exception(g[1])
                        }
                    return [b, g ? g[1] : p]
                }
            },
            between: function(i, o, c) {
                c = c || i;
                var p = e.each(e.ignore(i), o, e.ignore(c));
                return function(g) {
                    var l = p.call(this, g);
                    return [[l[0][0], r[0][2]], l[1]]
                }
            },
            list: function(i, o, c) {
                return o = o || e.rtoken(/^\s*/),
                c = c || null,
                i instanceof Array ? e.each(e.product(i.slice(0, -1), e.ignore(o)), i.slice(-1), e.ignore(c)) : e.each(e.many(e.each(i, e.ignore(o))), px, e.ignore(c))
            },
            set: function(i, o, c) {
                return o = o || e.rtoken(/^\s*/),
                c = c || null,
                function(p) {
                    for (var g = null, l = null, b = null, P = null, T = [[], p], R = !1, E = 0; E < i.length; E++) {
                        b = null,
                        l = null,
                        g = null,
                        R = i.length == 1;
                        try {
                            g = i[E].call(this, p)
                        } catch {
                            continue
                        }
                        if (P = [[g[0]], g[1]],
                        g[1].length > 0 && !R)
                            try {
                                b = o.call(this, g[1])
                            } catch {
                                R = !0
                            }
                        else
                            R = !0;
                        if (!R && b[1].length === 0 && (R = !0),
                        !R) {
                            for (var A = [], k = 0; k < i.length; k++)
                                E != k && A.push(i[k]);
                            l = e.set(A, o).call(this, b[1]),
                            l[0].length > 0 && (P[0] = P[0].concat(l[0]),
                            P[1] = l[1])
                        }
                        if (P[1].length < T[1].length && (T = P),
                        T[1].length === 0)
                            break
                    }
                    if (T[0].length === 0)
                        return T;
                    if (c) {
                        try {
                            b = c.call(this, T[1])
                        } catch {
                            throw new a.Exception(T[1])
                        }
                        T[1] = b[1]
                    }
                    return T
                }
            },
            forward: function(i, o) {
                return function(c) {
                    return i[o].call(this, c)
                }
            },
            replace: function(i, o) {
                return function(c) {
                    var p = i.call(this, c);
                    return [o, p[1]]
                }
            },
            process: function(i, o) {
                return function(c) {
                    var p = i.call(this, c);
                    return [o.call(this, p[0]), p[1]]
                }
            },
            min: function(i, o) {
                return function(c) {
                    var p = o.call(this, c);
                    if (p[0].length < i)
                        throw new a.Exception(c);
                    return p
                }
            }
        }, n = function(i) {
            return function() {
                var o = null
                  , c = [];
                if (arguments.length > 1 ? o = Array.prototype.slice.call(arguments) : arguments[0]instanceof Array && (o = arguments[0]),
                o)
                    for (var p = 0, g = o.shift(); p < g.length; p++)
                        return o.unshift(g[p]),
                        c.push(i.apply(null, o)),
                        o.shift(),
                        c;
                else
                    return i.apply(null, arguments)
            }
        }, u = "optional not ignore cache".split(/\s/), f = 0; f < u.length; f++)
            e[u[f]] = n(e[u[f]]);
        for (var y = function(i) {
            return function() {
                return arguments[0]instanceof Array ? i.apply(null, arguments[0]) : i.apply(null, arguments)
            }
        }, h = "each any all".split(/\s/), v = 0; v < h.length; v++)
            e[h[v]] = y(e[h[v]])
    }(),
    function() {
        var a = function(i) {
            for (var o = [], c = 0; c < i.length; c++)
                i[c]instanceof Array ? o = o.concat(a(i[c])) : i[c] && o.push(i[c]);
            return o
        };
        t.Grammar = {},
        t.Translator = {
            hour: function(i) {
                return function() {
                    this.hour = Number(i)
                }
            },
            minute: function(i) {
                return function() {
                    this.minute = Number(i)
                }
            },
            second: function(i) {
                return function() {
                    this.second = Number(i)
                }
            },
            meridian: function(i) {
                return function() {
                    this.meridian = i.slice(0, 1).toLowerCase()
                }
            },
            timezone: function(i) {
                return function() {
                    var o = i.replace(/[^\d\+\-]/g, "");
                    o.length ? this.timezoneOffset = Number(o) : this.timezone = i.toLowerCase()
                }
            },
            day: function(i) {
                var o = i[0];
                return function() {
                    this.day = Number(o.match(/\d+/)[0])
                }
            },
            month: function(i) {
                return function() {
                    this.month = i.length == 3 ? t.getMonthNumberFromName(i) : Number(i) - 1
                }
            },
            year: function(i) {
                return function() {
                    var o = Number(i);
                    this.year = i.length > 2 ? o : o + (o + 2e3 < t.CultureInfo.twoDigitYearMax ? 2e3 : 1900)
                }
            },
            rday: function(i) {
                return function() {
                    switch (i) {
                    case "yesterday":
                        this.days = -1;
                        break;
                    case "tomorrow":
                        this.days = 1;
                        break;
                    case "today":
                        this.days = 0;
                        break;
                    case "now":
                        this.days = 0,
                        this.now = !0;
                        break
                    }
                }
            },
            finishExact: function(i) {
                i = i instanceof Array ? i : [i];
                var o = new t;
                this.year = o.getFullYear(),
                this.month = o.getMonth(),
                this.day = 1,
                this.hour = 0,
                this.minute = 0,
                this.second = 0;
                for (var c = 0; c < i.length; c++)
                    i[c] && i[c].call(this);
                if (this.hour = this.meridian == "p" && this.hour < 13 ? this.hour + 12 : this.hour,
                this.day > t.getDaysInMonth(this.year, this.month))
                    throw new RangeError(this.day + " is not a valid value for days.");
                var p = new t(this.year,this.month,this.day,this.hour,this.minute,this.second);
                return this.timezone ? p.set({
                    timezone: this.timezone
                }) : this.timezoneOffset && p.set({
                    timezoneOffset: this.timezoneOffset
                }),
                p
            },
            finish: function(i) {
                if (i = i instanceof Array ? a(i) : [i],
                i.length === 0)
                    return null;
                for (var o = 0; o < i.length; o++)
                    typeof i[o] == "function" && i[o].call(this);
                if (this.now)
                    return new t;
                var c = t.today()
                  , p = null
                  , g = !!(this.days != null || this.orient || this.operator);
                if (g) {
                    var l, b, P;
                    return P = this.orient == "past" || this.operator == "subtract" ? -1 : 1,
                    this.weekday && (this.unit = "day",
                    l = t.getDayNumberFromName(this.weekday) - c.getDay(),
                    b = 7,
                    this.days = l ? (l + P * b) % b : P * b),
                    this.month && (this.unit = "month",
                    l = this.month - c.getMonth(),
                    b = 12,
                    this.months = l ? (l + P * b) % b : P * b,
                    this.month = null),
                    this.unit || (this.unit = "day"),
                    (this[this.unit + "s"] == null || this.operator != null) && (this.value || (this.value = 1),
                    this.unit == "week" && (this.unit = "day",
                    this.value = this.value * 7),
                    this[this.unit + "s"] = this.value * P),
                    c.add(this)
                } else
                    return this.meridian && this.hour && (this.hour = this.hour < 13 && this.meridian == "p" ? this.hour + 12 : this.hour),
                    this.weekday && !this.day && (this.day = c.addDays(t.getDayNumberFromName(this.weekday) - c.getDay()).getDate()),
                    this.month && !this.day && (this.day = 1),
                    c.set(this)
            }
        };
        var e = t.Parsing.Operators, n = t.Grammar, u = t.Translator, f;
        n.datePartDelimiter = e.rtoken(/^([\s\-\.\,\/\x27]+)/),
        n.timePartDelimiter = e.stoken(":"),
        n.whiteSpace = e.rtoken(/^\s*/),
        n.generalDelimiter = e.rtoken(/^(([\s\,]|at|on)+)/);
        var y = {};
        n.ctoken = function(i) {
            var o = y[i];
            if (!o) {
                for (var c = t.CultureInfo.regexPatterns, p = i.split(/\s+/), g = [], l = 0; l < p.length; l++)
                    g.push(e.replace(e.rtoken(c[p[l]]), p[l]));
                o = y[i] = e.any.apply(null, g)
            }
            return o
        }
        ,
        n.ctoken2 = function(i) {
            return e.rtoken(t.CultureInfo.regexPatterns[i])
        }
        ,
        n.h = e.cache(e.process(e.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), u.hour)),
        n.hh = e.cache(e.process(e.rtoken(/^(0[0-9]|1[0-2])/), u.hour)),
        n.H = e.cache(e.process(e.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), u.hour)),
        n.HH = e.cache(e.process(e.rtoken(/^([0-1][0-9]|2[0-3])/), u.hour)),
        n.m = e.cache(e.process(e.rtoken(/^([0-5][0-9]|[0-9])/), u.minute)),
        n.mm = e.cache(e.process(e.rtoken(/^[0-5][0-9]/), u.minute)),
        n.s = e.cache(e.process(e.rtoken(/^([0-5][0-9]|[0-9])/), u.second)),
        n.ss = e.cache(e.process(e.rtoken(/^[0-5][0-9]/), u.second)),
        n.hms = e.cache(e.sequence([n.H, n.mm, n.ss], n.timePartDelimiter)),
        n.t = e.cache(e.process(n.ctoken2("shortMeridian"), u.meridian)),
        n.tt = e.cache(e.process(n.ctoken2("longMeridian"), u.meridian)),
        n.z = e.cache(e.process(e.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), u.timezone)),
        n.zz = e.cache(e.process(e.rtoken(/^(\+|\-)\s*\d\d\d\d/), u.timezone)),
        n.zzz = e.cache(e.process(n.ctoken2("timezone"), u.timezone)),
        n.timeSuffix = e.each(e.ignore(n.whiteSpace), e.set([n.tt, n.zzz])),
        n.time = e.each(e.optional(e.ignore(e.stoken("T"))), n.hms, n.timeSuffix),
        n.d = e.cache(e.process(e.each(e.rtoken(/^([0-2]\d|3[0-1]|\d)/), e.optional(n.ctoken2("ordinalSuffix"))), u.day)),
        n.dd = e.cache(e.process(e.each(e.rtoken(/^([0-2]\d|3[0-1])/), e.optional(n.ctoken2("ordinalSuffix"))), u.day)),
        n.ddd = n.dddd = e.cache(e.process(n.ctoken("sun mon tue wed thu fri sat"), function(i) {
            return function() {
                this.weekday = i
            }
        })),
        n.M = e.cache(e.process(e.rtoken(/^(1[0-2]|0\d|\d)/), u.month)),
        n.MM = e.cache(e.process(e.rtoken(/^(1[0-2]|0\d)/), u.month)),
        n.MMM = n.MMMM = e.cache(e.process(n.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), u.month)),
        n.y = e.cache(e.process(e.rtoken(/^(\d\d?)/), u.year)),
        n.yy = e.cache(e.process(e.rtoken(/^(\d\d)/), u.year)),
        n.yyy = e.cache(e.process(e.rtoken(/^(\d\d?\d?\d?)/), u.year)),
        n.yyyy = e.cache(e.process(e.rtoken(/^(\d\d\d\d)/), u.year)),
        f = function() {
            return e.each(e.any.apply(null, arguments), e.not(n.ctoken2("timeContext")))
        }
        ,
        n.day = f(n.d, n.dd),
        n.month = f(n.M, n.MMM),
        n.year = f(n.yyyy, n.yy),
        n.orientation = e.process(n.ctoken("past future"), function(i) {
            return function() {
                this.orient = i
            }
        }),
        n.operator = e.process(n.ctoken("add subtract"), function(i) {
            return function() {
                this.operator = i
            }
        }),
        n.rday = e.process(n.ctoken("yesterday tomorrow today now"), u.rday),
        n.unit = e.process(n.ctoken("minute hour day week month year"), function(i) {
            return function() {
                this.unit = i
            }
        }),
        n.value = e.process(e.rtoken(/^\d\d?(st|nd|rd|th)?/), function(i) {
            return function() {
                this.value = i.replace(/\D/g, "")
            }
        }),
        n.expression = e.set([n.rday, n.operator, n.value, n.unit, n.orientation, n.ddd, n.MMM]),
        f = function() {
            return e.set(arguments, n.datePartDelimiter)
        }
        ,
        n.mdy = f(n.ddd, n.month, n.day, n.year),
        n.ymd = f(n.ddd, n.year, n.month, n.day),
        n.dmy = f(n.ddd, n.day, n.month, n.year),
        n.date = function(i) {
            return (n[t.CultureInfo.dateElementOrder] || n.mdy).call(this, i)
        }
        ,
        n.format = e.process(e.many(e.any(e.process(e.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(i) {
            if (n[i])
                return n[i];
            throw t.Parsing.Exception(i)
        }), e.process(e.rtoken(/^[^dMyhHmstz]+/), function(i) {
            return e.ignore(e.stoken(i))
        }))), function(i) {
            return e.process(e.each.apply(null, i), u.finishExact)
        });
        var h = {}
          , v = function(i) {
            return h[i] = h[i] || n.format(i)[0]
        };
        n.formats = function(i) {
            if (i instanceof Array) {
                for (var o = [], c = 0; c < i.length; c++)
                    o.push(v(i[c]));
                return e.any.apply(null, o)
            } else
                return v(i)
        }
        ,
        n._formats = n.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]),
        n._start = e.process(e.set([n.date, n.time, n.expression], n.generalDelimiter, n.whiteSpace), u.finish),
        n.start = function(i) {
            try {
                var o = n._formats.call({}, i);
                if (o[1].length === 0)
                    return o
            } catch {}
            return n._start.call({}, i)
        }
    }(),
    t.newparse = function(a) {
        var e = null;
        if (!a)
            return null;
        try {
            e = t.Grammar.start.call({}, a)
        } catch {
            return null
        }
        return e[1].length === 0 ? e[0] : null
    }
    ,
    t.getParseFunction = function(a) {
        var e = t.Grammar.formats(a);
        return function(n) {
            var u = null;
            try {
                u = e.call({}, n)
            } catch {
                return null
            }
            return u[1].length === 0 ? u[0] : null
        }
    }
    ,
    t.parseExact = function(a, e) {
        return t.getParseFunction(e)(a)
    }
    ;
    var s = function(a, e, n, u, f) {
        for (var y = "days hours minutes seconds milliseconds".split(/\s+/), h = function(g) {
            return function() {
                return this[g]
            }
        }, v = function(g) {
            return function(l) {
                return this[g] = l,
                this
            }
        }, i = 0; i < y.length; i++) {
            var o = y[i]
              , c = o.slice(0, 1).toUpperCase() + o.slice(1);
            s.prototype[o] = 0,
            s.prototype["get" + c] = h(o),
            s.prototype["set" + c] = v(o)
        }
        if (arguments.length == 4)
            this.setDays(a),
            this.setHours(e),
            this.setMinutes(n),
            this.setSeconds(u);
        else if (arguments.length == 5)
            this.setDays(a),
            this.setHours(e),
            this.setMinutes(n),
            this.setSeconds(u),
            this.setMilliseconds(f);
        else if (arguments.length == 1 && typeof a == "number") {
            var p = a < 0 ? -1 : 1;
            this.setMilliseconds(Math.abs(a)),
            this.setDays(Math.floor(this.getMilliseconds() / 864e5) * p),
            this.setMilliseconds(this.getMilliseconds() % 864e5),
            this.setHours(Math.floor(this.getMilliseconds() / 36e5) * p),
            this.setMilliseconds(this.getMilliseconds() % 36e5),
            this.setMinutes(Math.floor(this.getMilliseconds() / 6e4) * p),
            this.setMilliseconds(this.getMilliseconds() % 6e4),
            this.setSeconds(Math.floor(this.getMilliseconds() / 1e3) * p),
            this.setMilliseconds(this.getMilliseconds() % 1e3),
            this.setMilliseconds(this.getMilliseconds() * p)
        }
        return this.getTotalMilliseconds = function() {
            return this.getDays() * 864e5 + this.getHours() * 36e5 + this.getMinutes() * 6e4 + this.getSeconds() * 1e3
        }
        ,
        this.compareTo = function(g) {
            var l = new t(1970,1,1,this.getHours(),this.getMinutes(),this.getSeconds()), b;
            return g === null ? b = new t(1970,1,1,0,0,0) : b = new t(1970,1,1,g.getHours(),g.getMinutes(),g.getSeconds()),
            l < b ? -1 : l > b ? 1 : 0
        }
        ,
        this.equals = function(g) {
            return this.compareTo(g) === 0
        }
        ,
        this.add = function(g) {
            return g === null ? this : this.addSeconds(g.getTotalMilliseconds() / 1e3)
        }
        ,
        this.subtract = function(g) {
            return g === null ? this : this.addSeconds(-g.getTotalMilliseconds() / 1e3)
        }
        ,
        this.addDays = function(g) {
            return new s(this.getTotalMilliseconds() + g * 864e5)
        }
        ,
        this.addHours = function(g) {
            return new s(this.getTotalMilliseconds() + g * 36e5)
        }
        ,
        this.addMinutes = function(g) {
            return new s(this.getTotalMilliseconds() + g * 6e4)
        }
        ,
        this.addSeconds = function(g) {
            return new s(this.getTotalMilliseconds() + g * 1e3)
        }
        ,
        this.addMilliseconds = function(g) {
            return new s(this.getTotalMilliseconds() + g)
        }
        ,
        this.get12HourHour = function() {
            return this.getHours() > 12 ? this.getHours() - 12 : this.getHours() === 0 ? 12 : this.getHours()
        }
        ,
        this.getDesignator = function() {
            return this.getHours() < 12 ? t.CultureInfo.amDesignator : t.CultureInfo.pmDesignator
        }
        ,
        this.toString = function(g) {
            this._toString = function() {
                return this.getDays() !== null && this.getDays() > 0 ? this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds()) : this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds())
            }
            ,
            this.p = function(b) {
                return b.toString().length < 2 ? "0" + b : b
            }
            ;
            var l = this;
            return g ? g.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g, function(b) {
                switch (b) {
                case "d":
                    return l.getDays();
                case "dd":
                    return l.p(l.getDays());
                case "H":
                    return l.getHours();
                case "HH":
                    return l.p(l.getHours());
                case "h":
                    return l.get12HourHour();
                case "hh":
                    return l.p(l.get12HourHour());
                case "m":
                    return l.getMinutes();
                case "mm":
                    return l.p(l.getMinutes());
                case "s":
                    return l.getSeconds();
                case "ss":
                    return l.p(l.getSeconds());
                case "t":
                    return (l.getHours() < 12 ? t.CultureInfo.amDesignator : t.CultureInfo.pmDesignator).substring(0, 1);
                case "tt":
                    return l.getHours() < 12 ? t.CultureInfo.amDesignator : t.CultureInfo.pmDesignator
                }
            }) : this._toString()
        }
        ,
        this
    };
    t.prototype.getTimeOfDay = function() {
        return new s(0,this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds())
    }
    ;
    var d = function(a, e, n, u, f, y, h) {
        for (var v = "years months days hours minutes seconds milliseconds".split(/\s+/), i = function(A) {
            return function() {
                return this[A]
            }
        }, o = function(A) {
            return function(k) {
                return this[A] = k,
                this
            }
        }, c = 0; c < v.length; c++) {
            var p = v[c]
              , g = p.slice(0, 1).toUpperCase() + p.slice(1);
            d.prototype[p] = 0,
            d.prototype["get" + g] = i(p),
            d.prototype["set" + g] = o(p)
        }
        if (arguments.length == 7)
            this.years = a,
            this.months = e,
            this.setDays(n),
            this.setHours(u),
            this.setMinutes(f),
            this.setSeconds(y),
            this.setMilliseconds(h);
        else if (arguments.length == 2 && arguments[0]instanceof Date && arguments[1]instanceof Date) {
            var l = a.clone()
              , b = e.clone()
              , P = l.clone()
              , T = l > b ? -1 : 1;
            if (this.years = b.getFullYear() - l.getFullYear(),
            P.addYears(this.years),
            T == 1 ? P > b && this.years !== 0 && this.years-- : P < b && this.years !== 0 && this.years++,
            l.addYears(this.years),
            T == 1)
                for (; l < b && l.clone().addDays(t.getDaysInMonth(l.getYear(), l.getMonth())) < b; )
                    l.addMonths(1),
                    this.months++;
            else
                for (; l > b && l.clone().addDays(-l.getDaysInMonth()) > b; )
                    l.addMonths(-1),
                    this.months--;
            var R = b - l;
            if (R !== 0) {
                var E = new s(R);
                this.setDays(E.getDays()),
                this.setHours(E.getHours()),
                this.setMinutes(E.getMinutes()),
                this.setSeconds(E.getSeconds()),
                this.setMilliseconds(E.getMilliseconds())
            }
        }
        return this
    }
}
)();
var C = V(jt())
  , de = V(Ee())
  , At = V(Bt());
var oe = V(Lt())
  , Se = V(Wt())
  , Ce = V(Yt());
Ye();
We();
var Nt = V(Ge());
Me();
var Be = V(it());
var ue = {};
Rt(ue, {
    createWinbackEvent: () => lt,
    getAcceptedCouponCode: () => Pe,
    getCancelReasonCode: () => ct,
    getOffer: () => st,
    hasAcceptedAnOffer: () => ut,
    startWinbackFlow: () => Ie,
    trackWinback: () => dt
});
me(ue, V(Oe()));
var ot = V(Oe());
Ht();
var st = t => t.flowSession.offer_accepted ?? null
  , ct = t => {
    let {flowSession: s} = t;
    return s?.cancel_reason ? s.cancel_reason.reason_code ?? null : null
}
  , ut = t => t.flowSession.offers_presented.length === 0 ? null : Boolean(t.flowSession?.offer_accepted)
  , Pe = t => {
    let s = st(t);
    if (s?.type === "coupon") {
        let d = s.details
          , a = d?.payment_provider_coupon_id ?? d.platform_coupon_id;
        return typeof a == "string" ? a : null
    }
    return null
}
  , lt = (t, s) => ({
    eventOrigin: t,
    eventName: "cancellation_flow",
    flowName: s.flowSession?.flow.name,
    flowStatus: s?.status,
    sessionEndedPageURL: window.location.href,
    offerAccepted: ut(s),
    cancelReasonCode: ct(s)
})
  , dt = t => {
    qe(t.eventOrigin, t.eventName, {
        flow_name: t.flowName,
        result: t.flowStatus,
        page: t.sessionEndedPageURL,
        accepted_offer: t.offerAccepted,
        response: t.cancelReasonCode
    })
}
;
async function Ie({clientId: t, subscriber: s, subscription: d, eventOrigin: a}) {
    if (!t || !s || !d)
        throw new Error("Required properties are not defined in winbackProps");
    let e = {
        clientId: t,
        subscriber: s,
        subscription: d
    }
      , n = a || "web.dashboard.billing";
    try {
        let u = await (0,
        ot.flow)(e)
          , f = lt(n, u);
        return dt(f),
        u
    } catch (u) {
        if (u instanceof Error) {
            let f = `startWinbackFlow error occurred in flow function: ${u.message}`;
            throw new Error(f)
        }
        throw u
    }
}
var Ot = V(bt());
var _t = V(Ee())
  , wt = V(Ut())
  , rn = wt.default.Model.extend({
    idAttribute: "_id",
    url: "/ajax/settings",
    defaults: {
        postsPerDay: null,
        startTime: null,
        endTime: null,
        days: null
    },
    sync: function(t, s, d) {
        var a = this
          , e = {}
          , n = this.url
          , u = "GET";
        switch (t) {
        case "read":
            n += "/get-auto-schedule-settings",
            this.trigger("fetch", a);
            break;
        case "create":
        case "update":
            n += "/save-auto-schedule-settings",
            u = "POST",
            e = s.toJSON(),
            this.trigger("save", a);
            break;
        default:
            throw new Error(t + "method not yet implemented")
        }
        var f = d.success;
        d.success && delete d.success;
        var y = d.error;
        d.error && delete d.error;
        var h = {
            url: n,
            data: e,
            type: u,
            success: function(v, i, o) {
                v.success === 1 ? (a.set("loaded", !0),
                f.call(a, v.data, i, o)) : v.error && (a.set("loaded", !1),
                y.call(a, v, i, o))
            },
            error: function(v, i, o) {
                a.set("loaded", !1),
                y.call(a, v, i, o)
            },
            abort: function(v, i, o) {
                a.set("loaded", !1),
                d.error.call(a, v, i, o)
            }
        };
        return ajaxCall(_t.default.extend(h, d), "q1")
    }
})
  , St = rn;
var Fe = V(Ee())
  , Ct = V(Ge());
We();
Ye();
Me();
var an = De.extend({
    template: "settings/autoschedule",
    events: {
        "click .autoschedule-day": "toggleDay",
        "click ._submitAuto": "saveSettings",
        "change select[name=autoschedule-from-time]": "checkFromTime",
        "change select[name=autoschedule-to-time]": "checkToTime",
        "change select[name=autoschedule-posts-per-day]": "trackNumPosts"
    },
    autoScheduleSettings: null,
    initialize: function(t) {
        Fe.default.bindAll(this, "saveSettings", "checkFromTime", "checkToTime", "trackNumPosts"),
        t !== void 0 && t.settings !== void 0 && (this.autoScheduleSettings = t.settings),
        hs.trackEvent({
            category: "autoschedule",
            action: "view",
            label: "Settings"
        })
    },
    trackNumPosts: function() {
        hs.trackEvent({
            category: "autoschedule",
            action: "change",
            label: "Num Posts"
        })
    },
    render: function() {
        return De.prototype.render.apply(this, arguments),
        this
    },
    getTmplData: function() {
        var t = {};
        return this.autoScheduleSettings !== null && (t.setting = this.autoScheduleSettings.toJSON()),
        t
    },
    toggleDay: function(t) {
        $(t.currentTarget).hasClass("autoschedule-day-inactive") ? (hs.trackEvent({
            category: "autoschedule",
            action: "click",
            label: "Day Active"
        }),
        $(t.currentTarget).removeClass("autoschedule-day-inactive").addClass("autoschedule-day-active")) : (hs.trackEvent({
            category: "autoschedule",
            action: "click",
            label: "Day Inactive"
        }),
        $(t.currentTarget).removeClass("autoschedule-day-active").addClass("autoschedule-day-inactive"))
    },
    saveSettings: function() {
        hs.trackEvent({
            category: "autoschedule",
            action: "click",
            label: "Save"
        }),
        ze.trackCustom("web.dashboard.accounts_and_settings", "autoschedule_settings_saved");
        var t = this
          , s = this.$("#autoschedule-posts-per-day").val()
          , d = this.$("#autoschedule-from-time").val();
        d = d * 3600;
        var a = this.$("#autoschedule-to-time").val();
        a = a * 3600;
        var e = this.autoScheduleSettings.get("days")
          , n = !1;
        if (Fe.default.each(e, function(u, f) {
            var y = t.$("[data-day='" + f + "']")
              , h = y.hasClass("autoschedule-day-active");
            t.autoScheduleSettings.get("days")[f] = h,
            h && (n = !0)
        }),
        !n) {
            hs.statusObj.update(N._("Please select at least one day"), "error", !0);
            return
        }
        this.autoScheduleSettings.set("postsPerDay", s),
        this.autoScheduleSettings.set("startTime", d),
        this.autoScheduleSettings.set("endTime", a),
        hs.throbberMgrObj.add("#settingsContent ._submitAuto"),
        this.autoScheduleSettings.save(null, {
            success: function(u) {
                hs.statusObj.update(N._("AutoSchedule Settings Updated"), "success", !0),
                hs.throbberMgrObj.remove("#settingsContent ._submitAuto"),
                hs.memberExtras.autoScheduleSettings = u.attributes,
                Ct.default.emit("settings:autoschedule:change", u),
                ge("hs-app-composer").then(function(f) {
                    f.AutoScheduleSettings.setSettings(u.attributes, hs.memberId)
                })
            },
            error: function(u) {
                hs.statusObj.update(N._("Problem saving your AutoSchedule settings"), "error", !0),
                hs.throbberMgrObj.remove("#settingsContent ._submitAuto")
            }
        })
    },
    checkFromTime: function(t) {
        hs.trackEvent({
            category: "autoschedule",
            action: "change",
            label: "From Time"
        });
        var s = parseInt(this.$("select[name=autoschedule-from-time]").val(), 10) + 1
          , d = parseInt(this.$("select[name=autoschedule-to-time]").val(), 10)
          , a = "";
        if (s == 24)
            a = '<option value="24">12 AM</option>';
        else
            for (var e = s; e <= 24; e++) {
                var n;
                e === 0 ? n = "12 AM" : e < 12 ? n = e + " AM" : e == 12 ? n = "12 PM" : e > 12 && e < 24 ? n = e - 12 + " PM" : e == 24 && (n = "12 AM"),
                a += '<option value="' + e + '">' + n + "</option>"
            }
        $("select[name=autoschedule-to-time]").html(a),
        d <= s ? $("select[name=autoschedule-to-time]").val(s) : $("select[name=autoschedule-to-time]").val(d)
    },
    checkToTime: function(t) {
        hs.trackEvent({
            category: "autoschedule",
            action: "change",
            label: "To Time"
        });
        var s = parseInt(this.$("select[name=autoschedule-from-time]").val(), 10)
          , d = parseInt(this.$("select[name=autoschedule-to-time]").val(), 10) - 1
          , a = "";
        if (d === 0)
            a = '<option value="24">12 AM</option>';
        else
            for (var e = 0; e <= d; e++) {
                var n;
                e === 0 ? n = "12 AM" : e < 12 ? n = e + " AM" : e == 12 ? n = "12 PM" : e > 12 && e < 24 ? n = e - 12 + " PM" : e == 24 && (n = "12 AM"),
                a += '<option value="' + e + '">' + n + "</option>"
            }
        this.$("select[name=autoschedule-from-time]").html(a),
        d <= s ? this.$("select[name=autoschedule-from-time]").val(d) : this.$("select[name=autoschedule-from-time]").val(s)
    }
})
  , kt = an;
var re = V(Vt());
Ft();
zt();
$t();
Gt();
Me();
var on = {
    [re.DEV]: "development-api-services.hootsuite.com",
    [re.STAGING]: "staging-api-services.hootsuite.com",
    [re.PRODUCTION]: "api-services.hootsuite.com"
}
  , sn = on[(0,
re.env)()]
  , Mt = "/service/billing/accounts"
  , cn = 3e4;
function Dt(t, s, d={}) {
    return Qe(sn, s, {
        method: t,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(d)
    })
}
async function Et(t, s) {
    let d = `${Mt}/${t}/apply-coupon/${s}`;
    try {
        let a = await Dt("POST", d);
        if (a)
            return await a.json();
        throw new Error("Apply coupon to account failed: no response returned.")
    } catch (a) {
        throw new Error("Apply coupon to account failed with an exception.",{
            cause: a
        })
    }
}
async function un(t, s) {
    let d = `${Mt}/${t}/coupons/${s}`;
    try {
        let a = await Dt("DELETE", d);
        if (a)
            return await a.json();
        throw new Error("Remove coupon from account failed: no response returned.")
    } catch (a) {
        throw new Error("Remove coupon from account failed with an exception.",{
            cause: a
        })
    }
}
function Ue(t, s) {
    Xe({
        calloutType: Je.TOAST.NAME,
        type: t,
        messageText: s,
        timeout: cn
    })
}
async function Ve(t, s) {
    try {
        let d = N._("Coupon successfully applied.")
          , a = await Et(t, s)
          , e = a && a.errors && a.errors[0];
        if (e)
            switch (e) {
            case 15003:
                {
                    let n = await un(t, s)
                      , u = n && n.errors && n.errors[0];
                    if (u)
                        throw new Error(`Remove coupon from account failed with error code ${u}.`,{
                            cause: n
                        });
                    let f = await Et(t, s)
                      , y = f && f.errors && f.errors[0];
                    if (y)
                        throw new Error(`Re-apply coupon to account failed with error code ${y}.`,{
                            cause: f
                        });
                    Ue(Te, d);
                    break
                }
            default:
                throw new Error(`Apply coupon to account failed with error code ${e}.`,{
                    cause: a
                })
            }
        Ue(Te, d)
    } catch (d) {
        let a = N._('The coupon code "%s" is no longer valid.').replace("%s", s);
        Ue(Ke, a),
        console.error("Apply coupon to account failed.", d)
    }
}
var S = {};
S.init = function() {
    S.isFirstInit !== !1 && (S.isFirstInit = !1)
}
;
var ln = async t => {
    let {trackerDatalab: s, memberId: d} = window.hs
      , {memberData: a, cancelAccountFormToken: e} = t;
    s.trackCustom("web.dashboard.billing", "billing_user_clicked_launch_winback"),
    a.eventOrigin = "web.dashboard.billing";
    let n = await Ie(a)
      , {status: u} = n;
    if (u === "canceled") {
        let f = {
            reason: "prosperstack",
            cancelAccountFormToken: e
        };
        $e(C.default.param(f))
    } else if (u === "saved") {
        let f = Pe(n);
        f && Ve(d, f)
    }
}
;
function Tt() {
    hs.throbberMgrObj.add("#settingsContent ._submit"),
    (0,
    C.default)("#isChangePassword").val() == "0" && (0,
    C.default)("#newPassword").val("");
    var t = (0,
    C.default)("#accountSettingForm").serialize();
    ajaxCall({
        url: "/ajax/settings/save-account",
        data: t,
        success: function(s) {
            (0,
            C.default)("._newEmailCaptcha").addClass("u-displayNone"),
            (0,
            C.default)("#footer ._username").html((0,
            C.default)("#accountSettingForm input[name='member[fullName]']").val()),
            hs.prefs.isNotifyNewTweet = (0,
            C.default)("#accountSettingForm input[name='isNotifyNewTweet']:checked").length > 0 ? 1 : 0,
            hs.memberAutoInitial = (0,
            C.default)("#accountSettingForm input._autoInitialCheck:checked").length > 0 ? " ^" + (0,
            C.default)("#accountSettingForm input[name='member[initials]']").val() : "",
            hs.statusObj.update(N._("Account settings have been saved"), "success", !0),
            window.handleTimezoneChange(s.timezoneOffset),
            s.modifiedData && (Se.default.getActions(Ce.MEMBER).set(s.modifiedData),
            et.updateMemberData(s.modifiedData),
            (0,
            C.default)("#settingsPopup").dialog("close"),
            s.modifiedData.defaultTimezone && Nt.default.emit("dashboard:timezone:updated")),
            s.isEmailChange && hs.reloadBrowser(),
            window.updateDashboardHeight()
        },
        error: function(s) {
            var d = JSON.parse(s.responseText);
            d.errorMessage ? hs.statusObj.update(d.errorMessage, "error", !0) : hs.statusObj.update(N._("Sorry, we are unable to complete this operation right now. Please try again later."), "error", !0),
            d.isCaptchaRequired && ((0,
            C.default)("._newEmailCaptcha").removeClass("u-displayNone"),
            hs.recaptcha.init())
        },
        complete: function() {
            hs.throbberMgrObj.remove("#settingsContent ._submit")
        }
    }, "q1")
}
function dn() {
    (0,
    C.default)("._emailInfoBanner").toggle(),
    (0,
    C.default)("._emailNewEmail").toggle(),
    (0,
    C.default)("._emailPassword").toggle(),
    (0,
    C.default)("._emailRecaptcha").toggle()
}
function fn() {
    hs.throbberMgrObj.add("#saveAccountButtons ._submitGeneral");
    var t = (0,
    C.default)("#preferenceSettingForm").serialize();
    ajaxCall({
        url: "/ajax/settings/save-preferences",
        data: t,
        success: function(s) {
            (0,
            C.default)("#settingsSection._content").html(s.output),
            S.initPreferences(),
            hs.statusObj.update(N._("Account preferences have been saved"), "success", !0),
            window.updateDashboardHeight(),
            hs.prefs.isNotifyNewTweet = s.isNotifyNewTweet,
            hs.prefs.isNewRetweet = s.isNewRetweet;
            var d = Se.default.getStore(Ce.MEMBER).get();
            Se.default.getActions(Ce.MEMBER).set({
                prefs: (0,
                At.default)({}, d.prefs, {
                    isNewRetweet: s.isNewRetweet
                })
            }),
            hs.sa = parseInt(s.sa, 10),
            hs.sa !== 1 && (0,
            C.default)("#streamsScroll ._messages ._message._promoted").remove(),
            s.showProWall && dashboard.showFeatureAccessDeniedPopup({
                reason: s.proWallReason
            }),
            Ze.refreshNetworks()
        },
        complete: function() {
            hs.throbberMgrObj.remove("#saveAccountButtons ._submitGeneral")
        }
    }, "q1")
}
function Pt() {
    if (oe.default.isFeatureEnabled("BILLING-2755-maintenance-for-users") || (0,
    Ot.isCurrentTimeWithinIntervals)(oe.default.getFeatureValue("BILLING_3975_MAINTENANCE_INTERVALS"))) {
        window.location.href = "/billing";
        return
    }
    ajaxCall({
        type: "GET",
        url: "/ajax/settings/show-cancel-account",
        success: function(t) {
            if (oe.default.isFeatureEnabled("BILLING_5526_ENABLE_WINBACK_RESULTS_TRACKING") && !t.errorCode && t.memberData) {
                ln(t);
                return
            }
            if (oe.default.isFeatureEnabled("BILLING_4812_ENABLE_PROSPERSTACK") && !t.errorCode && t.memberData) {
                hs.trackerDatalab.trackCustom("web.dashboard.billing", "billing_user_clicked_launch_winback"),
                window.ProsperStack.flow(t.memberData).then(async a => {
                    if (a.status === Be.Winback.status.CANCELED) {
                        let e = {
                            reason: "prosperstack",
                            cancelAccountFormToken: t.cancelAccountFormToken
                        };
                        $e(C.default.param(e))
                    } else if (a.status === Be.Winback.status.SAVED) {
                        let e = a.flowSession?.offer_accepted?.details;
                        if (e && e.type === "coupon") {
                            let n = e.payment_provider_coupon_id;
                            Ve(window.hs.memberId, n)
                        }
                    }
                }
                );
                return
            }
            var s = {
                modal: !0,
                closeOnEscape: !0,
                resizable: !1,
                draggable: !0,
                title: N._("Account Removal"),
                width: 500,
                position: ["center", 150],
                content: N.c.LOADING
            }
              , d = C.default.dialogFactory.create("cancelAccountPopup", s);
            d.empty().html(t.output).find("form").keypress(function(a) {
                return window.disableEnterKey(a)
            }).end().find("._cancel").click(function() {
                return d.dialog("close"),
                !1
            }).end().find("._submit").click(function() {
                return $e(),
                !1
            })
        }
    }, "q1")
}
function $e(t=null) {
    let s = t || (0,
    C.default)("#cancelAccountPopupForm").serialize();
    ajaxCall({
        url: "/ajax/settings/cancel-account",
        data: s,
        success: function(d) {
            d.success == 1 ? (hs.trackerDatalab.trackCustom("web.dashboard.billing", "billing_user_confirmed_delete_account"),
            hs.trackEvent({
                category: "Canceled",
                value: t ? "prosperstack" : (0,
                C.default)("#cancelAccountPopupForm textArea._cancelReason").val()
            }),
            window.location = hs.c.rootUrl + "/logout?redirect=/logged-out") : (hs.statusObj.update("Error: " + d.errorMessage, "error", !0),
            Pt()),
            window.updateDashboardHeight()
        }
    }, "q1")
}
S.changeMemberTheme = function(t) {
    var s = (0,
    C.default)(t).attr("id").replace("theme_", "");
    ajaxCall({
        url: "/ajax/settings/save-theme",
        data: "theme=" + s,
        success: function(d) {
            d.success == 1 && window.location.reload(!0)
        }
    }, "q1")
}
;
S.removeAuthenticationMethod = function(t) {
    hs.statusObj.update(N._("Removing authentication method...")),
    ajaxCall({
        type: "DELETE",
        url: "/ajax/settings/remove-authentication-method?memberAuthId=" + t,
        success: function(s) {
            if (s.success)
                hs.statusObj.update(N._("Authentication method removed."), "success", !0, void 0, !0),
                window.loadSettings("account", null, null, "subsection=authentication");
            else {
                var d = N._("An error occurred while removing the authentication method, please try again in a bit.");
                s.error && (d = s.error),
                hs.statusObj.update(d, "error", !0)
            }
        },
        error: function(s) {
            hs.statusObj.reset()
        }
    }, "q1")
}
;
S.initTabs = function(t, s) {
    t.find("._tab").click(function(d) {
        d.preventDefault();
        for (var a = (0,
        C.default)(this), e = t.find("._tab"), n = t.find("._section"), u = 0; u < s.length; u++) {
            var f = s[u];
            if (a.is("._" + f)) {
                e.removeClass("active"),
                e.attr("aria-selected", "false"),
                e.attr("tabindex", "-1"),
                a.attr("aria-selected", "true"),
                a.removeAttr("tabindex"),
                a.addClass("active"),
                n.hide().filter("._" + f).show();
                break
            }
        }
    })
}
;
S.uploadMemberAvatarComplete = function(t) {
    var s = (0,
    C.default)("#settingsContent ._avatarUpdater");
    s.find('input[name="member[avatar]"]').val(t).end().find("._avatarPreview").removeClass("visHide").find("img").attr("src", hs.util.rootifyAvatar("member", t))
}
;
S.initAccount = function(t) {
    var s = (0,
    C.default)("#settingsContent")
      , d = ["profile", "authentication", "security", "privacy", "billing"];
    S.initTabs(s, d);
    function a() {
        fetch(hs.util.getDefaultAvatar("member")).then(h => h.blob().then(v => {
            let i = new File([v],"icon-avatar-member.jpeg",{
                type: v.type
            });
            var o = new FormData;
            o.append("name", "default_avatar"),
            o.append("Filedata", i),
            ajaxCall({
                type: "POST",
                url: "/ajax/image-upload/upload-member-image",
                data: o,
                encType: "multipart/form-data",
                contentType: !1,
                processData: !1,
                success: function(c) {
                    c.success && (S.uploadMemberAvatarComplete(c.fileName),
                    hs.statusObj.update(N._("Success"), "success", !0))
                }
            }, "q1")
        }
        ))
    }
    var e = {};
    e.uploadPath = hs.c.rootUrl + "/ajax/image-upload/upload-member-image",
    e.csrfToken = hs.csrfToken,
    e.uploadImageCompleteCallback = S.uploadMemberAvatarComplete,
    hs.util.initPluploadImageUploader("uploaderMemberSwf", e),
    (0,
    C.default)("._emailInfoBanner, ._emailNewEmail, ._emailPassword, ._emailRecaptcha").hide(),
    s.find(':input[name="member[bio]"]').bind("keypress", function(h) {
        h.stopPropagation()
    }).end().find("._deleteAvatar").click(function(h) {
        h.preventDefault(),
        a()
    }).end().find("#accountSettingForm").bind("keypress", function(h) {
        window.checkForEnterKey(h, "_submit")
    }).end().find("._autoInitialCheck").click(function() {
        var h = 0;
        (0,
        C.default)(this).is(":checked") && (h = 1),
        (0,
        C.default)("#autoInitialField").val(h)
    }).end().find("#newPassword").change(function() {
        (0,
        C.default)("#isChangePassword").val(1)
    }).end().find("._toggleChangePassword").click(function() {
        (0,
        C.default)("#changePasswordSection").slideToggle();
        var h = (0,
        C.default)("#isChangePassword")
          , v = (0,
        C.default)("#isChangePassword").val() == "0" ? 1 : 0;
        return h.val(v),
        !1
    }).end().find("._showChangeEmail").click(function() {
        return dn(),
        !1
    }).end().find("._cancelAccount").click(function() {
        return hs.trackerDatalab.trackCustom("web.dashboard.billing", "billing_user_clicked_delete_account"),
        Pt(),
        !1
    }).end().find("._submit").click(function() {
        var h = (0,
        C.default)("._newPassword");
        let v = (0,
        C.default)("._confirmNewPassword");
        if (h.val() !== "") {
            if (hs.util.newValidatePassword(h, v))
                return Tt(),
                !1
        } else
            return Tt(),
            !1
    }).end().find("#description").bind("keyup", function() {
        var h = (0,
        C.default)(this).val()
          , v = 2e3;
        h.length > v && (0,
        C.default)(this).val(h.substring(0, v))
    }),
    s.find("._newPassword").keyup(function(h) {
        if (h.keyCode != 13) {
            let v = (0,
            C.default)("._confirmNewPassword");
            hs.util.checkNewPasswordPolicy((0,
            C.default)(this), v)
        }
    }).end().find("._confirmNewPassword").keyup(function(h) {
        if (h.keyCode !== 13 && h.keyCode !== 9) {
            let v = (0,
            C.default)("._newPassword");
            hs.util.checkNewPasswordPolicy(v, (0,
            C.default)(this))
        }
    }).end().find("._newPassword").blur(function() {
        hs.util.clearBubbles()
    }).end(),
    s.find("._confirmNewPassword").blur(function() {
        hs.util.clearBubbles()
    }).end(),
    s.find("._deleteAuth").click(function() {
        var h = (0,
        C.default)("#authMethods")
          , v = h.data("authprompt1")
          , i = h.data("authprompt2");
        if ((0,
        C.default)("#authMethods").children().length > 1 ? confirm(v) : confirm(i)) {
            var o = (0,
            C.default)(this).attr("maid");
            S.removeAuthenticationMethod(o)
        }
        return !1
    }).end(),
    hs.recaptcha.init();
    var n = s.find("._section._billing")
      , u = n.find("._subSectionVat");
    if (u.length) {
        S.vatCodes = {
            IS_VALID: "valid",
            IS_EMPTY: "empty",
            NO_CC_MATCH: "country_code_does_not_match",
            INVALID_NUMBER: "invalid_number"
        };
        var f = t.memberExtra && t.memberExtra.billingCountryCode ? t.memberExtra.billingCountryCode : null;
        S.vatVars = {
            memberBillingCountryCode: f,
            $input: u.children("._vatInput"),
            $validateBtn: u.children("._vatValidate"),
            $throbber: u.children("._vatThrobber"),
            $successMessage: u.children("._vatSuccessMessage"),
            $errorNoCountryMatch: u.children("._vatErrorNoCountryMatch"),
            $errorInvalidNumber: u.children("._vatErrorInvalidNumber")
        },
        S.vatVars.$input.keydown(S.resetVatValidation),
        S.vatVars.$validateBtn.click(S.doVatValidation)
    }
    n.find("._submitInvoicePref").click(function() {
        if (S.vatVars !== void 0 && S.vatVars.$input.val().length && S.vatVars.$input.data("vat-validated") === !1 && !S.doVatValidation(!1))
            return !1;
        hs.statusObj.update(N._("Saving invoice preferences..."), "info");
        var h = n.find(":input").serialize();
        return ajaxCall({
            type: "POST",
            url: "/ajax/settings/save-invoice-preferences",
            data: h,
            success: function(v) {
                var i = ""
                  , o = "success";
                v.success ? i = N._("Invoice preferences saved") : (i = v.errorMsg,
                o = "error"),
                de.default.defer(function() {
                    hs.statusObj.update(i, o, !0)
                })
            },
            complete: function() {
                hs.statusObj.reset()
            }
        }, "q1"),
        !1
    });
    var y = s.find("._section._security");
    s.find(".tab._security").click(function() {
        ajaxCall({
            url: "/ajax/member/check-login-authentication",
            success: function(h) {
                h.useGoogleAuth == "1" ? y.find("#gaAlwaysRadio").prop("checked", !0) : h.useGoogleAuth == "0" ? y.find("#gaLocRadio").prop("checked", !0) : console.warn("unknown useGoogleAuth value: " + h.useGoogleAuth)
            }
        }, "qm")
    }),
    y.find("._generateGaSecret").click(function() {
        hs.statusObj.update(N.c.LOADING, "info"),
        ajaxCall({
            url: "/ajax/settings/generate-ga-secret",
            success: function(h) {
                h.secret ? (hs.statusObj.reset(),
                y.find("._noGaSecret").hide().end().find("._gaSecretPanel").show().end().find("._gaSecret").text(h.secret).end().find("._gaQrCode").attr("src", h.qrCodeUrl).end().find("._gaInProgress").show().end().find("._gaSecurityOptions").hide().end().find("#gaAlwaysRadio").prop("checked", !0).find("._gaComplete").hide().end(),
                h.mandatoryMFA && y.find(".mandatory-mfa-info").show().end()) : hs.statusObj.update(N.c.ERROR_GENERIC, "error", !0)
            }
        }, "qm")
    }).end().find("._removeMFAStepOne").on("click", function() {
        y.find(".mandatory-mfa-info").hide(),
        y.find("._gaComplete").hide(),
        y.find(".ga-logout-alert").show()
    }).end().find(".ga-logout-alert-close").on("click", function() {
        y.find(".ga-logout-alert").hide(),
        t.mandatoryMFA && y.find(".mandatory-mfa-info").show(),
        y.find("._gaComplete").show()
    }).end().find(".mandatory-mfa-info-close").on("click", function() {
        y.find(".mandatory-mfa-info").hide()
    }).end().find("._removeGaSecret").on("click", function() {
        hs.statusObj.update(N.c.LOADING, "info"),
        ajaxCall({
            url: "/ajax/settings/remove-ga-secret",
            success: function(h) {
                hs.statusObj.reset(),
                y.find("._gaSecret").text("").end().find("._gaInProgress").hide().end().find("._gaSecretPanel").hide().end().find("._gaSecurityOptions").hide().end().find("._gaComplete").hide().end().find(".ga-logout-alert").hide().end()
            }
        }, "qm"),
        window.location.href = `${hs.c.rootUrl}/signin`
    }).end().find("input[name='gaSettings']").change(function() {
        var h = this;
        t.mandatoryMFA != "ALWAYS" && (this.gaSettingsValue = y.find((0,
        C.default)("input[name='gaSettings']:checked")).val(),
        ajaxCall({
            url: "/ajax/settings/change-ga-settings?settingsValue=" + h.gaSettingsValue,
            success: function(v) {
                v.success ? hs.statusObj.update(N._("2-Step Verification settings changed."), "success", !0) : hs.statusObj.update(N.c.ERROR_GENERIC, "error", !0)
            }
        }, "qm"))
    }).end().find("._checkGaCode").click(function() {
        var h = y.find((0,
        C.default)("#gaCodeConfirmCheck")).val()
          , v = "/ajax/settings/verify-ga-code?code=" + h;
        h.length == 6 ? ajaxCall({
            url: v,
            success: function(i) {
                i.success ? (y.find("#gaCodeConfirmCheck").val("").end().find("._gaInProgress").hide().end().find("._noGaSecret").hide().end().find("._gaSecretPanel").hide().end().find("._gaSecurityOptions").show().end().find("._gaComplete").show().end(),
                t.mandatoryMFA && y.find(".mandatory-mfa-info").show().end()) : hs.statusObj.update(N._("Sorry, that code was invalid."), "error", !0)
            }
        }, "qm") : hs.statusObj.update(N._("Please enter a 6-character code."), "error", !0)
    })
}
;
S.resetVatValidation = function() {
    S.vatVars.$input.data("vat-validated", !1),
    S.vatVars.$successMessage.addClass("u-displayNone"),
    S.vatVars.$errorNoCountryMatch.addClass("u-displayNone"),
    S.vatVars.$errorInvalidNumber.addClass("u-displayNone")
}
;
S.doVatValidation = function(t) {
    var s = S.vatVars.$input.val();
    t = t === void 0 ? !0 : t,
    S.resetVatValidation();
    var d = S.validateVAT(s);
    if (s.length)
        if (t)
            S.vatVars.$validateBtn.addClass("u-displayNone"),
            S.vatVars.$throbber.removeClass("u-displayNone"),
            setTimeout(function() {
                if (S.vatVars.$validateBtn.removeClass("u-displayNone"),
                S.vatVars.$throbber.addClass("u-displayNone"),
                d === S.vatCodes.IS_VALID)
                    S.vatVars.$successMessage.removeClass("u-displayNone");
                else
                    return d === S.vatCodes.NO_CC_MATCH ? (S.vatVars.$errorNoCountryMatch.removeClass("u-displayNone"),
                    !1) : (S.vatVars.$errorInvalidNumber.removeClass("u-displayNone"),
                    !1)
            }, 800);
        else {
            if (d === S.vatCodes.NO_CC_MATCH)
                return S.vatVars.$errorNoCountryMatch.removeClass("u-displayNone"),
                !1;
            if (d === S.vatCodes.INVALID_NUMBER)
                return S.vatVars.$errorInvalidNumber.removeClass("u-displayNone"),
                !1
        }
    return !0
}
;
S.validateVAT = function(t) {
    if (!t.length)
        return S.vatCodes.IS_EMPTY;
    var s, d, a, e, n;
    if (t = t.toUpperCase().replace(/[ -]/g, ""),
    s = t.substring(0, 2),
    t.length == 12 && (n = t.substring(9)),
    n == "MVA" ? d = t.substring(0, 9) : d = t.substring(2),
    a = "",
    S.vatVars.memberBillingCountryCode !== s && S.vatVars.memberBillingCountryCode !== "GR" && s !== "EL" && n !== "MVA")
        return S.vatCodes.NO_CC_MATCH;
    if (n == "MVA")
        a = /^[0-9]{9}$/;
    else
        switch (s) {
        case "AT":
            a = /^U[0-9A-Z]{8}$/;
            break;
        case "BE":
        case "BG":
            a = /^[0-9]{9,10}$/;
            break;
        case "CY":
            a = /^[0-9A-Z]{9}$/;
            break;
        case "CZ":
            a = /^[0-9]{8,10}$/;
            break;
        case "DE":
        case "EE":
        case "EL":
        case "PT":
            a = /^[0-9]{9}$/;
            break;
        case "DK":
        case "FI":
        case "HU":
        case "LU":
        case "MT":
        case "SI":
            a = /^[0-9]{8}$/;
            break;
        case "ES":
            a = /^[0-9A-Z][0-9]{7}[0-9A-Z]$/;
            break;
        case "FR":
            a = /^[0-9A-Z]{2}[0-9]{9}$/;
            break;
        case "GB":
            a = /^[0-9]{9}$|^[0-9]{12}$|^GD[0-9]{3}$|^HA[0-9]{3}$/;
            break;
        case "HR":
        case "IT":
        case "LV":
            a = /^[0-9]{11}$/;
            break;
        case "IE":
            a = /^[0-9]{7}[A-Z]{1,2}$|^[0-9][A-Z][1-9]{5}[A-Z]$/;
            break;
        case "LT":
            a = /^[0-9]{9}$|^[0-9]{12}$/;
            break;
        case "NL":
            a = /^[0-9]{9}B[0-9]{2}$/;
            break;
        case "PL":
        case "SK":
            a = /^[0-9]{10}$/;
            break;
        case "RO":
            a = /^[0-9]{2,10}$/;
            break;
        case "SE":
            a = /^[0-9]{12}$/;
            break;
        case "ZA":
            a = /^[4][0-9]{9}$/;
            break;
        case "CH":
            a = /^E[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}(MWST|TVA|IVA)$/g;
            break;
        default:
            return S.vatCodes.INVALID_NUMBER
        }
    return e = d.match(a),
    e !== null && e.length === 1 && e[0] === d ? (S.vatVars.$input.data("vat-validated", !0),
    S.vatCodes.IS_VALID) : (S.vatVars.$input.data("vat-validated", !1),
    S.vatCodes.INVALID_NUMBER)
}
;
S.initBilling = function(t) {
    var d = (0,
    C.default)("#settingsContent").find("._section._billing")
      , a = d.find("._subSectionVat");
    if (a.length) {
        S.vatCodes = {
            IS_VALID: "valid",
            IS_EMPTY: "empty",
            NO_CC_MATCH: "country_code_does_not_match",
            INVALID_NUMBER: "invalid_number"
        };
        var e = t.memberExtra && t.memberExtra.billingCountryCode ? t.memberExtra.billingCountryCode : null;
        S.vatVars = {
            memberBillingCountryCode: e,
            $input: a.children("._vatInput"),
            $validateBtn: a.children("._vatValidate"),
            $throbber: a.children("._vatThrobber"),
            $successMessage: a.children("._vatSuccessMessage"),
            $errorNoCountryMatch: a.children("._vatErrorNoCountryMatch"),
            $errorInvalidNumber: a.children("._vatErrorInvalidNumber")
        },
        S.vatVars.$input.keydown(S.resetVatValidation),
        S.vatVars.$validateBtn.click(S.doVatValidation)
    }
    d.find("._submitInvoicePref").click(function() {
        if (S.vatVars !== void 0 && S.vatVars.$input.val().length && S.vatVars.$input.data("vat-validated") === !1 && !S.doVatValidation(!1))
            return !1;
        hs.statusObj.update(N._("Saving invoice preferences..."), "info");
        var n = d.find(":input").serialize();
        return ajaxCall({
            type: "POST",
            url: "/ajax/settings/save-invoice-preferences",
            data: n,
            success: function(u) {
                var f = ""
                  , y = "success";
                u.success ? f = N._("Invoice preferences saved") : (f = u.errorMsg,
                y = "error"),
                de.default.defer(function() {
                    hs.statusObj.update(f, y, !0)
                })
            },
            complete: function() {
                hs.statusObj.reset()
            }
        }, "q1"),
        !1
    })
}
;
S.initPreferences = function() {
    var t = (0,
    C.default)("#settingsPopup #settingsContent")
      , s = ["general", "themes"]
      , d = "web.dashboard.settings.preferences";
    tt.init({
        trackingOrigin: d
    }),
    S.initTabs(t, s),
    Ae.isSupported && t.find("._clearCache").click(function() {
        Ae.clear(),
        hs.statusObj.update(N._("Cached messages are cleared"), "success", !0),
        hs.reloadBrowser()
    }).show(),
    t.find("._toggleSsl").click(function() {
        var a = (0,
        C.default)(this).is("._on") ? 1 : 0;
        window.updateMemberPreference("isUseSsl", a, function() {
            var e = hs.c.rootUrl;
            e = a ? e.replace(/^http:/i, "https:") : e.replace(/^https:/i, "http:"),
            de.default.defer(function() {
                window.location.href = e
            })
        })
    }).end().find("._submitGeneral").click(function() {
        return fn(),
        !1
    }),
    (0,
    C.default)("#preferenceSettingForm").bind("keypress", function(a) {
        window.checkForEnterKey(a, "_submitGeneral")
    })
}
;
S.initNotifications = function() {
    var t = (0,
    C.default)("#settingsPopup #settingsContent");
    let {trackerDatalab: s} = window.hs;
    t.find("._notifications._section").find("input:checkbox._generalCb").off().on("click", function(d) {
        var a = (0,
        C.default)(d.target)
          , e = a.attr("name") || ""
          , n = a.is(":checked") ? "1" : "0";
        switch (e) {
        case "isNotifyCommentOnMyContent":
            s.trackCustom("web.dashboard.accounts_and_settings", "toggled_internal_comments_notification_settings_my_conversations", {
                isChecked: n
            });
            break;
        case "isNotifyConversationParticipant":
            s.trackCustom("web.dashboard.accounts_and_settings", "toggled_internal_comments_notification_settings_all_posts", {
                isChecked: n
            });
            break;
        case "isNotifyMentionAndReply":
            s.trackCustom("web.dashboard.accounts_and_settings", "toggled_internal_comments_notification_settings_mentions_replies", {
                isChecked: n
            });
            break
        }
        ajaxCall({
            type: "POST",
            beforeSend: function() {
                hs.statusObj.update(N.c.SAVING, "info"),
                a.attr("disabled", !0)
            },
            url: "/ajax/settings/save-notifications",
            data: {
                name: e,
                isChecked: n
            },
            success: function(u) {
                a.attr("disabled", !1),
                parseInt(u.result, 10) === 0 ? (a.attr("checked", !n),
                hs.statusObj.update(N.c.ERROR_GENERIC, "error", !0)) : hs.statusObj.update(N._("Saved."), "success", !0)
            }
        }, "qm")
    }),
    hs.shouldSeeNotificationCenter && ge("hs-app-notifications-settings").then(d => {
        let[a] = document.getElementsByClassName("_notification-center-settings");
        a && d.mount(a)
    }
    )
}
;
S.initVanityUrl = function(t) {
    var s = (0,
    C.default)("#settingsPopup #settingsContent")
      , d = function(y) {
        y.preventDefault();
        let h = 460
          , v = oe.default.isFeatureEnabled("PUB_23730_ADD_VANITY_URL_POPUP_HEIGHT_FIX") ? (0,
        C.default)(window).height() - 100 : "auto";
        ajaxCall({
            type: "POST",
            url: "/ajax/settings/add-vanity-url",
            data: "defaultOrgId=" + s.find("select._orgSelector").val(),
            success: function(i) {
                var o = {
                    modal: !0,
                    closeOnEscape: !0,
                    resizable: !1,
                    draggable: !0,
                    title: N._("Add Vanity URL"),
                    width: h,
                    height: v,
                    content: i.output
                };
                C.default.dialogFactory.create("addVanityUrlPopup", o),
                S.initAddNewVanityUrlPopup()
            }
        }, "q1")
    }
      , a = function(y) {
        y.preventDefault();
        var h = confirm(N._("Permanently delete this Vanity URL, and remove all URLs created with this domain?"))
          , v = (0,
        C.default)(this).attr("data-id");
        !h || ajaxCall({
            type: "DELETE",
            url: "/ajax/settings/delete-vanity-url?id=" + v,
            success: function(i) {
                var o = N._("Your vanity URL has been deleted.")
                  , c = "success";
                i.success || (o = N._("There was an error deleting your vanity URL, please try again later."),
                c = "error"),
                hs.statusObj.update(o, c, !0),
                c === "success" && setTimeout(function() {
                    window.loadSettings("vanityurl")
                }, 1)
            }
        }, "q1")
    }
      , e = s.find("._addNewShortener")
      , n = s.find("._orgSelector");
    if (e.click(d),
    s.off("click", "._vanityUrl ._delete", a).on("click", "._vanityUrl ._delete", a),
    t.organizations && de.default.values(t.organizations).length) {
        var u = t.selectedOrgId
          , f = de.default.map(t.organizations, function(y) {
            var h = {
                title: y.name,
                id: y.id
            };
            return h.id === u && (h.selected = !0),
            h
        });
        u || (f[0].selected = !0),
        n.hsDropdown({
            data: {
                items: f
            },
            change: function(y, h) {
                if (h) {
                    var v = y.id;
                    window.loadSettings("vanityurl", null, null, "vanityUrlOrgId=" + v)
                }
            }
        })
    }
}
;
S.saveTeamVanityUrl = function(t, s) {
    for (var d = s.length, a = "vanityUrlId=" + t, e = 0; e < d; e++)
        a += "&teamIds%5B%5D=" + s[e];
    hs.statusObj.update(N._("Updating...."), "info", !0),
    ajaxCall({
        url: "/ajax/settings/save-vanity-url-teams",
        data: a,
        success: function(n) {
            n.success == 1 ? (hs.statusObj.update(N._("Vanity Url settings have been saved"), "success", !0),
            (0,
            C.default)("#settingsPopup #settingsContent #selectedTeams" + n.vanityUrlId).val(n.teamIds)) : hs.statusObj.update(N._("There was a problem saving the Vanity Url settings. Please review and try again."), "error", !0)
        }
    }, "q1")
}
;
S.initDataPortabilityArchiving = function(t) {
    if (t.orgCount !== 0) {
        var s = (0,
        C.default)("._dataPortabilitySettings")
          , d = s.find("._archivingStartDate")
          , a = s.find("._orgSelector")
          , e = s.find("._orgId");
        if (t.orgCount == 1) {
            var n = t.orgDropdownOptions[0];
            a.remove(),
            s.find("._titleOrg").append(": " + n.title),
            n.id && e.val(n.id),
            n.archivingStartDate && d.html(n.archivingStartDate)
        } else
            a.hsDropdown({
                data: {
                    items: t.orgDropdownOptions
                },
                change: function(v, i) {
                    e.val(v.id),
                    v.archivingStartDate ? d.html(v.archivingStartDate) : d.html("")
                }
            }).hsDropdown("selectFirstElement");
        var u = s.find("._daterangepicker")
          , f = "M d, yy"
          , y = new Date;
        y.setDate(y.getDate() - 1);
        var h = C.default.datepicker.formatDate(f, y);
        u.val(h),
        u.daterangepicker({
            presetRanges: [{
                text: N._("Yesterday"),
                dateStart: "today-1days",
                dateEnd: "today-1days"
            }, {
                text: N._("Last 7 days"),
                dateStart: "today-7days",
                dateEnd: "today-1days"
            }, {
                text: N._("Last 30 days"),
                dateStart: "today-30days",
                dateEnd: "today-1days"
            }, {
                text: N._("Last 90 days"),
                dateStart: "today-90days",
                dateEnd: "today-1days"
            }, {
                text: N._("Forever"),
                dateStart: "2014/01/01",
                dateEnd: "today-1days"
            }],
            dateFormat: f,
            isGMT: !0,
            closeOnSelect: !0,
            onOpen: function() {
                h = u.val()
            },
            appendTo: "._daterangepickerExpanded"
        }),
        (0,
        C.default)(".ui-daterangepickercontain").css({
            position: "absolute",
            zIndex: "2000"
        }),
        s.find("._dataPortabilityExport").click(function(v) {
            window.location.href = "/data-portability/export?orgId=" + s.find("._orgId").val() + "&dateRange=" + s.find("._dateRange").val(),
            v.preventDefault()
        })
    }
}
;
S.initAddNewVanityUrlPopup = function() {
    var t = (0,
    C.default)("#addVanityUrlPopup");
    t.find("._addVanityUrlForm").bind("keypress", function(s) {
        window.checkForEnterKey(s, "_addNewVanityUrl")
    }).end().find("._cancel").click(function(s) {
        s.preventDefault(),
        t.dialog("close")
    }).end().find("._addNewVanityUrl").click(function(s) {
        s.preventDefault();
        var d = t.find("._url").val()
          , a = t.find("._rootRedirect").val()
          , e = t.find("form").serialize()
          , n = t.find("._teamSelectorWidget ._selectItem");
        n.length && n.each(function(f, y) {
            var h = (0,
            C.default)(y);
            e += "&teamId[]=" + h.attr("itemid")
        });
        let u = /^http?:\/\/([\w\d])+/i;
        if (!d.length || !a.length) {
            hs.statusObj.update(N._("You must enter a Vanity URL and an URL for redirecting."), "warning", !0);
            return
        } else if (d.match(u)) {
            if (!a.match(u)) {
                hs.statusObj.update(N._("You must enter a valid URL for redirecting (http:// required)."), "warning", !0);
                return
            }
        } else {
            hs.statusObj.update(N._("You must enter a valid Vanity URL (http:// required)."), "warning", !0);
            return
        }
        ajaxCall({
            type: "POST",
            url: "/ajax/settings/add-vanity-url",
            data: e,
            success: function(f) {
                if (f && f.success && f.output) {
                    t.dialog("close");
                    var y = {
                        modal: !0,
                        closeOnEscape: !0,
                        resizable: !1,
                        draggable: !0,
                        title: N._("Complete the setup"),
                        width: 306,
                        content: f.output
                    }
                      , h = C.default.dialogFactory.create("addVanityUrlFinishedPopup", y);
                    h.find("._finished").click(function(i) {
                        i.preventDefault(),
                        h.dialog("close")
                    }),
                    setTimeout(function() {
                        window.loadSettings("vanityurl")
                    }, 1)
                } else {
                    var v = f.errorMsg ? f.errorMsg : N._("An error has occured, please try again later.");
                    hs.statusObj.update(v, "error", !0)
                }
            }
        }, "q1")
    }),
    oe.default.isFeatureEnabled("PUB_23730_ADD_VANITY_URL_POPUP_HEIGHT_FIX") && t.css("overflow-y", "auto")
}
;
S.initAutoSchedule = function() {
    hs.statusObj.update(N.c.LOADING, "info");
    let t = new St;
    t.fetch({
        success: function(s) {
            var d = new kt({
                settings: t
            })
              , a = d.render().el
              , e = (0,
            C.default)("#settingsSection");
            e.append(a),
            hs.statusObj.reset()
        },
        error: function(s) {}
    })
}
;
S.initDebug = function() {
    var t = (0,
    C.default)("#settingsContent");
    t.find("._remove-popupsSeen").click(function(s) {
        confirm("Confirm deletion of " + (0,
        C.default)(this).data("code")) && ajaxCall({
            type: "POST",
            url: "/ajax/settings/unset-popup-seen",
            data: {
                code: (0,
                C.default)(this).data("code")
            },
            success: function(d) {
                d.success ? window.loadSettings("debug") : hs.statusObj.update("Fail", "error", !0)
            }
        }, "q1"),
        s.preventDefault()
    }),
    t.find("._remove-performedActions").click(function(s) {
        confirm("Confirm deletion of " + (0,
        C.default)(this).data("code")) && ajaxCall({
            type: "POST",
            url: "/ajax/settings/unset-performed-action",
            data: {
                code: (0,
                C.default)(this).data("code")
            },
            success: function(d) {
                d.success ? window.loadSettings("debug") : hs.statusObj.update("Fail", "error", !0)
            }
        }, "q1"),
        s.preventDefault()
    }),
    t.find("select").change(function(s) {
        ajaxCall({
            type: "POST",
            url: "/ajax/settings/set-member-extra-property",
            data: {
                property: (0,
                C.default)(this).attr("name"),
                value: (0,
                C.default)(this).val()
            },
            success: function(d) {
                d.success ? window.loadSettings("debug") : hs.statusObj.update("Fail", "error", !0)
            }
        }, "q1")
    }),
    t.find("._deleteLoginRecords").click(function(s) {
        confirm("Confirm deletion of login records") && ajaxCall({
            type: "POST",
            url: "/ajax/settings/delete-login-records",
            success: function(d) {
                d.success ? window.loadSettings("debug") : hs.statusObj.update("Fail", "error", !0)
            }
        }, "q1"),
        s.preventDefault()
    })
}
;
var Jn = S;
export {Jn as a};
/*! For license information please see index.js.LICENSE.txt */
/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-04-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/.
 * @website: http://www.datejs.com/
 */
//# sourceMappingURL=chunk-DVVKKEUI.js.map
