(this["webpackJsonpreflect-finance-landing"] =
  this["webpackJsonpreflect-finance-landing"] || []).push([
  [0],
  {
    16: function (e, t, a) {
      e.exports = a.p + "";
    },
    17: function (e, t, a) {
      e.exports = a.p + "";
    },
    18: function (e, t) {
      e.exports =
        ""},
    19: function (e, t, a) {
      e.exports = a.p + "";
    },
    20: function (e, t, a) {
      e.exports = a.p + "";
    },
    21: function (e, t, a) {
      e.exports = a.p + "";
    },
    23: function (e, t, a) {
      e.exports = a(47);
    },
    46: function (e, t, a) {},
    47: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(14),
        c = a.n(l),
        o = a(3),
        s = a.n(o),
        i = a(15),
        m = a(2),
        d = a(4),
        h = a(16),
        f = a.n(h),
        p = function () {
          var e = Object(n.useState)(!1),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1],
            c = a ? "block" : "hidden";
          return r.a.createElement(
            "header",
            { className: "bg-secondary" },
            r.a.createElement(
              "nav",
              {
                className:
                  "container mx-auto md:flex text-white items-center justify-between flex-wrap px-5 sm:px-0 py-5 text-white",
              },
              r.a.createElement(
                "div",
                { className: "flex text-xl md:text-xl justify-between" },
                r.a.createElement(
                  "span",
                  { className: "flex items-center" },
                  r.a.createElement("img", {
                    src: f.a,
                    style: { maxHeight: "100px" },
                    alt: "",
                  })
                ),
                r.a.createElement(
                  "button",
                  {
                    className: "md:hidden text-2xl disable-zoom-tap",
                    onClick: function () {
                      return l(!a);
                    },
                  },
                  a
                    ? r.a.createElement(d.a, null)
                    : r.a.createElement(d.b, null)
                )
              ),
              r.a.createElement(
                "div",
                {
                  className: "".concat(
                    c,
                    " mt-5 md:mt-0 md:flex space-y-5 md:space-y-0  md:space-x-10 flex flex-col md:flex-row items-center text-center"
                  ),
                },
                r.a.createElement(
                  "a",
                  {
                    href:
                      "https://ChefMagnfico.medium.com",
                    target: "_BLANK",
                    rel: "noopener noreferrer",
                  },
                  "Medium"
                ),
                r.a.createElement(
                  "a",
                  {
                    href: "https://github.com/ChefMagnifico",
                    target: "_BLANK",
                    rel: "noopener noreferrer",
                  },
                  "Github"
                )
              )
            )
          );
        },
        u = [
          { href: "https://twitter.com/MagnificoChef", name: "Twitter" },
          { href: "https://t.me/ChefMagnifico", name: "Telegram" },
        ],
        E = [
          { href: "https://medium.com/@ChefMagnfico", name: "Medium" },
          { href: "https://github.com/ChefMagnifico", name: "Github" },
        ],
        A = [
          {
            href: "https://exchange.pancakeswap.finance/#swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0x46483f3a766ae2c0c811ff953ac3dc69a3a20968",
            name: "PancakeSwap",
          },
          {
            href:
              "https://bscscan.com/token/0x46483f3a766ae2c0c811ff953ac3dc69a3a20968",
            name: "Bscscan",
          },
        ],
        x = function () {
          return r.a.createElement(
            "footer",
            null,
            r.a.createElement(
              "div",
              { className: "container mx-auto flex text-white flex-col" },
              r.a.createElement(
                "div",
                {
                  className: " flex  justify-around py-4 text-sm sm:text-base",
                },
                r.a.createElement(g, { title: "Social", linkArr: u }),
                r.a.createElement(g, { title: "About", linkArr: E }),
                r.a.createElement(g, { title: "Contact", linkArr: A })
              )
            ),
            r.a.createElement(
              "p",
              {
                className: "text-sm font-bold bg-primary py-2 mt-8 text-center",
              },
              "\xa9 2021 Magnifico.Chef"
            )
          );
        },
        g = function (e) {
          var t = e.title,
            a = e.linkArr;
          return r.a.createElement(
            "div",
            { className: "flex flex-col text-center space-y-2" },
            r.a.createElement("h4", null, t),
            Array.isArray(a) &&
              a.map(function (e, t) {
                return r.a.createElement(
                  "a",
                  {
                    key: t,
                    href: e.href,
                    rel: "noopener noreferrer",
                    target: "_blank",
                  },
                  e.name
                );
              })
          );
        },
        k = function (e) {
          var t = e.bgcolor,
            a = e.title,
            n = e.paragraph,
            l = e.image,
            c = e.children,
            o = t ? "secondary" : "white",
            s = t ? "white" : "dark",
            i = t ? "primary" : "secondary";
          return r.a.createElement(
            "section",
            { className: "px-6 py-20 bg-".concat(o, " text-").concat(s, "  ") },
            r.a.createElement(
              "div",
              { className: "container mx-auto flex items-center" },
              r.a.createElement(
                "div",
                { className: "flex-1" },
                r.a.createElement(
                  "h2",
                  {
                    className: "text-2xl sm:text-3xl border-l-4 border-".concat(
                      i,
                      " pl-4 mb-4"
                    ),
                  },
                  a
                ),
                r.a.createElement(
                  "p",
                  { className: "font-light sm:text-lg" },
                  n
                ),
                c
              ),
              r.a.createElement(
                "div",
                { className: "hidden lg:flex flex-1 justify-end" },
                r.a.createElement("img", {
                  className: "max-w-md",
                  src: l,
                  style: { maxHeight: "450px" },
                  alt: "",
                })
              )
            )
          );
        },
        y = a(17),
        w = a.n(y),
        b = a(18),
        I = a.n(b),
        R = function () {
          return r.a.createElement("img", { src: I.a, alt: "MCH logo" });
        },
        Y = function (e) {
          e.feesEarned;
          return r.a.createElement(
            "section",
            {
              style: {
                backgroundImage: "url(".concat(w.a, ")"),
                backgroundRepeat: "no-repeat",
              },
              className:
                "px-5 pb-10 md:py-20  bg-local text-center md:text-left object-fill bg-secondary text-white flex",
            },
            r.a.createElement(
              "div",
              { className: "container mx-auto flex" },
              r.a.createElement(
                "div",
                { className: "flex-1" },
                r.a.createElement(
                  "h1",
                  {
                    className:
                      "text-2xl sm:text-4xl sm:text font-bold border-primary md:border-l-4 md:pl-4 mb-4",
                  },
                  "Frictionless Yield and Deflationary Concept. Hold and Earn."
                ),
                r.a.createElement(
                  "p",
                  { className: "sm:text-lg font-light" },
                  "MagnificoChef generates yield by applying a tax of 5% on every transactions and splittng that instantly among holders"
                ),
                r.a.createElement("br", null),
                r.a.createElement(
                  "p",
                  { className: "sm:text-lg font-light" },
                  "MagnificoChef is deflationary as well, there is a 5% tax on every transactions which is burnt from the supply ",
                  r.a.createElement(
                    "b",
                    null,
                    ""
                  ),
                  "."
                ),
                r.a.createElement(
                  "div",
                  { className: "mt-10" },
            
                  r.a.createElement(
                    "div",
                    { className: "hero-buttons" },
                    r.a.createElement(
                      "a",
                      {
                        href:
                        "https://exchange.pancakeswap.finance/#swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0x46483f3a766ae2c0c811ff953ac3dc69a3a20968",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      r.a.createElement(B, { text: "Buy MCH (PancakeSwap)" })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "hero-buttons" },
                    r.a.createElement(
                      "a",
                      {
                        href:
                        "https://t.me/ChefMagnifico",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      r.a.createElement(B, { text: "Join us (Telegram)" })
                    )
                  )
                )
              ),
              r.a.createElement(
                "div",
                { className: "hidden lg:flex flex-1 items-center justify-end" },
                r.a.createElement(R, null)
              )
            )
          );
        },
        B = function (e) {
          var t = e.text;
          return r.a.createElement(
            "button",
            {
              className:
                "px-8 rounded-sm bg-primary text-secondary py-3 shadow-md disable-zoom-tap",
            },
            t
          );
        },
        Q = function (e) {
          var t = e.text;
          return r.a.createElement(
            "button",
            {
              className:
                "border border-primary px-8 rounded-sm py-3 disable-zoom-tap",
            },
            t
          );
        },
        C = a(19),
        j = a.n(C),
        v = a(20),
        F = a.n(v),
        G = a(21),
        N = a.n(G),
        S = a(22),
        J = a.n(S),
        O = function () {
          var e = Object(n.useState)(""),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1];
          return (
            Object(n.useEffect)(function () {
              (function () {
                var e = Object(i.a)(
                  s.a.mark(function e() {
                    var t;
                    return s.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              J()(
                                )
                            );
                          case 2:
                            (t = e.sent),
                              l(t.data.tickers[0].converted_last.usd);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
            r.a.createElement(
              "main",
              { className: "flex flex-col text-white" },
              r.a.createElement(Y, { feesEarned: a }),
              r.a.createElement(
                k,
                {
                  image: j.a,
                  title: "High Yield",
                  paragraph:
                    "Chef Magnifico implemented function 'isExcluded' in smart contract, allowing certain addresses like the PancakeSwap pool or exchange wallets, to be blocked from earning fees.",
                },
                r.a.createElement(
                  "p",
                  { className: "font-light sm:text-lg mt-5" },
                  "Because of this, ",
                  r.a.createElement(
                    "b",
                    null,
                    "100% of the fees generated go to holders of the token"
                  ),
                  ". The percentage of fees you earn is calculated by the percentage of MCH that you own among holders. This generates a much higher yield."
                )
              ),
              r.a.createElement(
                k,
                {
                  image: F.a,
                  bgcolor: "secondary",
                  title: "Deflationary Mechanism",
                  paragraph:
                    "Chef also implemented function '_setBurnFee' in smart contract, allowing MCH tokens to be burnt from the supply forever on every on-chain transaction. causing limited supply and long term naturally gain in larger percentage by MCH holders.",
                },
               
              ),
              r.a.createElement(
                k,
                {
                  image: N.a,
                  title: "Simple Tokenomics",
                  paragraph:
                    "MCH is designed to adopt a simple token economics whereby 98% of the total supply is allocated for presale and pancakeSwap listing while less than 2% of the total supply is allocated for marketing and Development",
                },
                r.a.createElement(
                  "p",
                  { className: "font-light sm:text-lg mt-5" },
                  r.a.createElement(
                    "b",
                    null,
                    "There is no interface needed to claim the fees.  No action needs to be taken on the part of the holder other than to hold MCH in a wallet they control.  With MCH, there are no vaults that could be hacked and drained or treasury funds that could be mis-managed.",
                  )
                )
              )
            )
          );
        },
        U = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(p, null),
            r.a.createElement(O, null),
            r.a.createElement(x, null)
          );
        };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(46);
      c.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(U, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[23, 1, 2]],
]);