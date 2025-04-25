"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[788], {
    13788: (e, t, n) => {
        n.r(t),
        n.d(t, {
            LottieAnimation: () => b
        });
        var i = n(37876)
          , a = n(14232)
          , o = n(94985)
          , r = n.n(o)
          , s = n(5104)
          , l = n(77232)
          , c = n(60343)
          , u = n(17844)
          , d = n(80073)
          , p = n(22508);
        let f = l.Ay.div.withConfig({
            componentId: "sc-d0aaa5c8-0"
        })(["position:relative;"])
          , y = l.Ay.div.withConfig({
            componentId: "sc-d0aaa5c8-1"
        })(["position:absolute;width:100%;height:100%;z-index:2;opacity:0;transition:opacity 0.3s ease;&:hover,&:focus{opacity:1;}"])
          , h = l.Ay.button.withConfig({
            componentId: "sc-d0aaa5c8-2"
        })(["position:absolute;bottom:-30px;left:10px;background-color:transparent;border:none;cursor:pointer;"])
          , m = l.Ay.span.withConfig({
            componentId: "sc-d0aaa5c8-3"
        })(["display:inline-block;max-width:", ";vertical-align:text-top;position:relative;z-index:0;&:hover ", "{opacity:1;}"], e => {
            let {width: t} = e;
            return t ? `${t}px` : "auto"
        }
        , y)
          , b = e => {
            let {url: t, loop: n, playOption: o, data: l, name: b, onReady: v, heading: x, subheading: g, playOnce: w, width: C, altText: A, ...E} = e
              , j = (0,
            a.useRef)(null)
              , I = (0,
            c.BL)(j, {})
              , S = !!I?.isIntersecting
              , [k,_] = (0,
            a.useState)()
              , [q,B] = (0,
            a.useState)(!1)
              , [L,P] = (0,
            a.useState)(!1)
              , [z,T] = (0,
            a.useState)(!0)
              , {t: D} = (0,
            s.Bd)()
              , F = "Play When Visible" === o || "Play When Visible - Every Time" === o
              , N = "Autoplay" === o;
            (0,
            a.useEffect)( () => {
                if (j.current) {
                    let e = r().loadAnimation({
                        container: j.current,
                        path: t,
                        animationData: l,
                        loop: function(e) {
                            return !!e && (["1", "2", "3", "4"].includes(e) ? parseInt(e) : "Continuous" === e)
                        }(n),
                        autoplay: !!N,
                        name: b
                    })
                      , i = () => {
                        v?.(e),
                        P(!0)
                    }
                    ;
                    return l && i(),
                    e.addEventListener("data_ready", i),
                    _(e),
                    () => {
                        e.destroy()
                    }
                }
            }
            , [N, l, n, b, t, F, v]),
            (0,
            a.useEffect)( () => {
                !(w && q || k?.currentFrame && k.currentFrame > 0) && k && L && S && F && (k.goToAndPlay(0),
                B(!0))
            }
            , [k, q, L, S, w, F]);
            let V = () => {
                "Continuous" === n && k?.isPaused ? k.play() : k?.pause(),
                T(!z)
            }
            ;
            return (0,
            a.useEffect)( () => {
                k && z ? k.play() : k && k.pause()
            }
            , [k, z]),
            (0,
            a.useEffect)( () => {
                let e = j.current;
                if (!e)
                    return;
                let t = () => {
                    let t = e.querySelector("svg");
                    if (t) {
                        if (t.querySelectorAll("[aria-label]:not([role])").forEach(e => {
                            e.setAttribute("role", "img")
                        }
                        ),
                        !t.querySelector("title") && A) {
                            let e = document.createElement("title");
                            e.textContent = A,
                            t.prepend(e)
                        }
                        A || (t.ariaHidden = "true")
                    }
                }
                ;
                if (e.querySelector("svg")) {
                    t();
                    return
                }
                let n = new MutationObserver( (e, n) => {
                    t(),
                    n.disconnect()
                }
                );
                return n.observe(e, {
                    childList: !0
                }),
                () => n.disconnect()
            }
            , [A]),
            (0,
            i.jsxs)(f, {
                children: ["Continuous" === n && (0,
                i.jsx)(y, {
                    children: (0,
                    i.jsx)(h, {
                        onClick: V,
                        onKeyDown: V,
                        "aria-label": D("animation start stop"),
                        tabIndex: 0,
                        children: (0,
                        i.jsx)(d.In, {
                            icon: z ? d.Be.pause : d.Be.play,
                            size: d.y3.md,
                            fill: p.Tj.nocturn75,
                            decorative: !0
                        })
                    })
                }), x && (0,
                i.jsx)(u.Gj, {
                    children: x
                }), g && (0,
                i.jsx)(u.I0, {
                    children: g
                }), (0,
                i.jsx)(m, {
                    ref: j,
                    width: C,
                    role: A ? "img" : "presentation",
                    "aria-label": A || void 0,
                    "data-testid": "lottie-animation",
                    ...E
                })]
            })
        }
    }
}]);
