// source --> https://rainbowit.net/themes/inbio/wp-includes/js/jquery/jquery.min.js?ver=3.6.1
/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    v = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          }),
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          }),
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          }),
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = y.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: v,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      },
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      y,
      s,
      c,
      v,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i",
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!y || !y.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ve(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ye(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ve(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (y = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    y.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    y.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || y.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    y.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  y.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    y.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    y.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    y.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  y.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector),
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (y = y.length && new RegExp(y.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (v =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && v(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && v(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!y || !y.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), v(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      "",
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace($, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, y) {
            var v = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === y
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = v !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (v) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ye(function () {
            return [0];
          }),
          last: ye(function (e, t) {
            return [t - 1];
          }),
          eq: ye(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ye(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ye(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, y, v, e) {
      return (
        y && !y[S] && (y = Ce(y)),
        v && !v[S] && (v = Ce(v, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (v || (e ? d : l || y) ? [] : t) : f;
          if ((g && g(f, p, n, r), y)) {
            (i = Te(p, u)), y(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (v || d) {
              if (v) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                v(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = v ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0,
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0,
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" }),
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e),
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            y,
            v,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((y = o),
              (m = 0 < (v = i).length),
              (x = 0 < y.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = y[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = v[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + v.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r),
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ve(t.parentNode)) || t,
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t,
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0),
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      },
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith),
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock,
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function $() {
    E.removeEventListener("DOMContentLoaded", $),
      C.removeEventListener("load", $),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", $),
        C.addEventListener("load", $));
  var B = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : B(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0,
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o,
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (v.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    v.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this,
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = y.events) || (u = y.events = Object.create(null)),
          (a = y.handle) ||
            (a = y.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o,
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.hasData(e) && Y.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                S.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp,
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      S.event.special[t] = {
        setup: function () {
          return Se(this, t, Ce), !1;
        },
        trigger: function () {
          return Se(this, t), !0;
        },
        _default: function (e) {
          return Y.get(e.target, t);
        },
        delegateType: e,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      },
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler,
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ye(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l,
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ye(r)),
        r.parentNode &&
          (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          v.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ye(this)), t && t.replaceChild(e, this));
          },
          n,
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      },
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = /^--/,
    Me = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Ie = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    We = new RegExp(ne.join("|"), "i"),
    Fe = "[\\x20\\t\\r\\n\\f]",
    $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Re.test(t),
      u = e.style;
    return (
      (n = n || Me(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && (a = a.replace($e, "$1")),
        "" !== a || ie(e) || (a = S.style(e, t)),
        !v.pixelBoxStyles() &&
          Pe.test(a) &&
          We.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(v, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var ze = ["Webkit", "Moz", "ms"],
    Ue = E.createElement("div").style,
    Xe = {};
  function Ve(e) {
    var t = S.cssProps[e] || Xe[e];
    return (
      t ||
      (e in Ue
        ? e
        : (Xe[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
              while (n--) if ((e = ze[n] + t) in Ue) return e;
            })(e) || e))
    );
  }
  var Ge = /^(none|table(?!-c[ea]).+)/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5,
            ),
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Me(e),
      i =
        (!v.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!v.boxSizingReliable() && i) ||
        (!v.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Re.test(t),
          l = e.style;
        if (
          (u || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            v.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Re.test(t) || (t = Ve(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ge.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : Ie(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Me(e),
            o = !v.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5,
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ie(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Me(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing,
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !y || void 0 === y[r]) continue;
              g = !0;
            }
            d[r] = (y && y[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = y && y.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (y
                ? "hidden" in y && (g = y.hidden)
                : (y = Y.access(e, "fxshow", { display: l })),
              o && (y.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? y[r] : 0, r, p)),
              r in y ||
                ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      },
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (v.checkOn = "" !== rt.value),
    (v.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (v.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return B(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match(P) || []).join(" ");
  }
  function vt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return B(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    v.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      },
    ),
    S.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              S(this).addClass(t.call(this, e, vt(this)));
            })
          : (e = mt(t)).length
          ? this.each(function () {
              if (
                ((r = vt(this)), (n = 1 === this.nodeType && " " + yt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = yt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              S(this).removeClass(t.call(this, e, vt(this)));
            })
          : arguments.length
          ? (e = mt(t)).length
            ? this.each(function () {
                if (
                  ((r = vt(this)),
                  (n = 1 === this.nodeType && " " + yt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = yt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return m(t)
          ? this.each(function (e) {
              S(this).toggleClass(t.call(this, e, vt(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = mt(t)),
            this.each(function () {
              if (s)
                for (o = S(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = vt(this)) && Y.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : Y.get(this, "__className__") || "",
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : yt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        v.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (v.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    v.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e),
        ),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function jt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : jt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i,
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) jt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function $t(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Bt(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          y = S.ajaxSetup({}, t),
          v = y.context || y,
          m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = y.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (y.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (y.url = ((e || y.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//",
          )),
          (y.type = t.method || t.type || y.method || y.type),
          (y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""]),
          null == y.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = y.url),
              (r.href = r.href),
              (y.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            y.crossDomain = !0;
          }
        }
        if (
          (y.data &&
            y.processData &&
            "string" != typeof y.data &&
            (y.data = S.param(y.data, y.traditional)),
          $t(Rt, y, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && y.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (y.type = y.type.toUpperCase()),
        (y.hasContent = !Ot.test(y.type)),
        (f = y.url.replace(qt, "")),
        y.hasContent
          ? y.data &&
            y.processData &&
            0 ===
              (y.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) &&
            (y.data = y.data.replace(Dt, "+"))
          : ((o = y.url.slice(f.length)),
            y.data &&
              (y.processData || "string" == typeof y.data) &&
              ((f += (Et.test(f) ? "&" : "?") + y.data), delete y.data),
            !1 === y.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (y.url = f + o)),
        y.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((y.data && y.hasContent && !1 !== y.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", y.contentType),
        T.setRequestHeader(
          "Accept",
          y.dataTypes[0] && y.accepts[y.dataTypes[0]]
            ? y.accepts[y.dataTypes[0]] +
                ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : y.accepts["*"],
        ),
        y.headers))
          T.setRequestHeader(i, y.headers[i]);
        if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(y.complete),
          T.done(y.success),
          T.fail(y.error),
          (c = $t(Mt, y, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, y]), h))
            return T;
          y.async &&
            0 < y.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, y.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(y, T, n)),
            !i &&
              -1 < S.inArray("script", y.dataTypes) &&
              S.inArray("json", y.dataTypes) < 0 &&
              (y.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(y, s, T, i)),
            i
              ? (y.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === y.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
            b.fireWith(v, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, y]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (v.cors = !!zt && "withCredentials" in zt),
    (v.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (v.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders(),
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                }),
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (v.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (v.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base",
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return B(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length,
          );
        };
      },
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return B(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a],
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n,
            );
          };
        },
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      },
    );
  var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});
jQuery.noConflict();
// source --> https://rainbowit.net/themes/inbio/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              i = 1;
            i <= 3;
            i++
          ) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = "3.3.2"),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion,
        ));
    var r = {};
    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) ||
        ((r[e] = !0),
        s.migrateWarnings.push(e),
        t &&
          t.warn &&
          !s.migrateMute &&
          (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r;
        },
        set: function (e) {
          u(n), (r = e);
        },
      });
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("jQuery is not compatible with Quirks Mode");
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof e &&
          "#" === e &&
          (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        l.apply(this, t)
      );
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && f.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return "[" + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t),
              u("Attribute selector with '#' must be quoted: " + r[0]),
              (r[0] = t);
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return p.apply(this, r);
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "jQuery.fn.size() is deprecated and removed; use the .length property",
    ),
      o(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "jQuery.parseJSON is deprecated; use JSON.parse",
      ),
      o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
      o(
        s,
        "unique",
        s.uniqueSort,
        "jQuery.unique is deprecated; use jQuery.uniqueSort",
      ),
      t(
        s.expr,
        "filters",
        s.expr.pseudos,
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos",
      ),
      t(
        s.expr,
        ":",
        s.expr.pseudos,
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos",
      ),
      e("3.1.1") &&
        o(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(m, "");
          },
          "jQuery.trim is deprecated; use String.prototype.trim",
        ),
      e("3.2.0") &&
        (o(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "jQuery.nodeName is deprecated",
        ),
        o(
          s,
          "isArray",
          Array.isArray,
          "jQuery.isArray is deprecated; use Array.isArray",
        )),
      e("3.3.0") &&
        (o(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "jQuery.isNumeric() is deprecated",
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " ",
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          },
        ),
        o(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "jQuery.type is deprecated",
        ),
        o(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "jQuery.isFunction() is deprecated",
        ),
        o(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "jQuery.isWindow() is deprecated",
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
              (o(
                e,
                "success",
                e.done,
                "jQXHR.success is deprecated and removed",
              ),
              o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
              o(
                e,
                "complete",
                e.always,
                "jQXHR.complete is deprecated and removed",
              )),
            e
          );
        }),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded",
                    ) &&
                  c.test(e.data))) &&
              u("JSON-to-JSONP auto-promotion is deprecated");
          }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) &&
            (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t
          ? h.apply(this, arguments)
          : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute("class")) || "";
              e && s.data(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    (!e && !1 !== t && s.data(this, "__className__")) || "",
                  );
            }));
      }),
      w = /^[a-z]/,
      x =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u("jQuery.swap() is undocumented and deprecated"), t))
          (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("JQMIGRATE: jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this;
        return e && "object" == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t);
            }),
            this)
          : ("number" == typeof t &&
              ((r = j(e)),
              (n = r),
              (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                s.cssNumber[r] ||
                u(
                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                    e +
                    '", value )',
                )),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function (e, t, r) {
      var n, o, i;
      if (t && "object" == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
          i !== j(i)
            ? (u("jQuery.data() always sets/gets camelCased names: " + i),
              (n[i] = t[i]))
            : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t &&
        "string" == typeof t &&
        t !== j(t) &&
        (n = s.hasData(e) && N.call(this, e)) &&
        t in n
        ? (u("jQuery.data() always sets/gets camelCased names: " + t),
          2 < arguments.length && (n[t] = r),
          n[t])
        : N.apply(this, arguments);
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e;
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length &&
            (u(
              "'jQuery.easing." +
                this.easing.toString() +
                "' should use only one argument",
            ),
            (s.easing[this.easing] = M)),
            S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A;
            },
            set: function (e) {
              u(k), (A = e);
            },
          }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      t(
        s.event.props,
        "concat",
        s.event.props.concat,
        "jQuery.event.props.concat() is deprecated and removed",
      ),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u("jQuery.event.props are deprecated and removed: " + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (
          n &&
          !n._migrated_ &&
          ((n._migrated_ = !0),
          u("jQuery.event.fixHooks are deprecated and removed: " + r),
          (o = n.props) && o.length)
        )
          while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function (e, t) {
        return (
          e === n &&
            "load" === t &&
            "complete" === n.document.readyState &&
            u("jQuery(window).on('load'...) called after load event occurred"),
          H.apply(this, arguments)
        );
      }),
      s.each(["load", "unload", "error"], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === t && "string" == typeof e[0]
            ? R.apply(this, e)
            : (u("jQuery.fn." + t + "() is deprecated"),
              e.splice(0, 0, t),
              arguments.length
                ? this.on.apply(this, e)
                : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " ",
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return (
              u("jQuery.fn." + r + "() event shorthand is deprecated"),
              0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            );
          };
        },
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated");
        },
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
        },
        unbind: function (e, t) {
          return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function (e, t, r, n) {
          return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
        },
        undelegate: function (e, t, r) {
          return (
            u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", r)
          );
        },
        hover: function (e, t) {
          return (
            u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
          );
        },
      });
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    function P(e) {
      var t = e.replace(O, "<$1></$2>");
      t !== e &&
        T(e) !== T(t) &&
        u("HTML tags must be properly nested and closed: " + e);
    }
    var O =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, "<$1></$2>");
      };
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e);
      });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function () {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect)
        ? _.apply(this, arguments)
        : (u("jQuery.fn.offset() requires a valid DOM element"),
          arguments.length ? this : void 0);
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return (
            void 0 === t &&
              r &&
              (u(
                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional",
              ),
              (t = r)),
            D.call(this, e, t)
          );
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function () {
        return (
          u(
            "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()",
          ),
          J.apply(this, arguments)
        );
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments;
                return (
                  u("deferred.pipe() is deprecated"),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && "function" == typeof e.promise
                            ? e
                                .promise()
                                .done(n.resolve)
                                .fail(n.reject)
                                .progress(n.notify)
                            : n[t[0] + "With"](
                                this === a ? n.promise() : this,
                                r ? [e] : arguments,
                              );
                        });
                      }),
                        (o = null);
                    })
                    .promise()
                );
              }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });
// source --> https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/js/vendor/jquery.magnific-popup.min.js?ver=2.2.1
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto,
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose),
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent,
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d],
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class")),
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src),
                );
            },
          },
          b.st.ajax.settings,
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length,
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d
                        .replace(/%title%/gi, c.tPrev)
                        .replace(/%dir%/gi, "left"),
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right"),
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});
// source --> https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/js/vendor/plyr.min.js?ver=2.2.1
"object" == typeof navigator &&
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Plyr", t)
      : ((e = e || self).Plyr = t());
  })(this, function () {
    "use strict";
    function e(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function n(e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    }
    function i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function a(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n = [],
            i = !0,
            a = !1,
            s = void 0;
          try {
            for (
              var o, r = e[Symbol.iterator]();
              !(i = (o = r.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              i = !0
            );
          } catch (e) {
            (a = !0), (s = e);
          } finally {
            try {
              i || null == r.return || r.return();
            } finally {
              if (a) throw s;
            }
          }
          return n;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance",
          );
        })()
      );
    }
    function s(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function (e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance",
          );
        })()
      );
    }
    var o = { addCSS: !0, thumbWidth: 15, watch: !0 };
    var r = function (e) {
        return null != e ? e.constructor : null;
      },
      l = function (e, t) {
        return Boolean(e && t && e instanceof t);
      },
      c = function (e) {
        return null == e;
      },
      u = function (e) {
        return r(e) === Object;
      },
      d = function (e) {
        return r(e) === String;
      },
      h = function (e) {
        return Array.isArray(e);
      },
      m = function (e) {
        return l(e, NodeList);
      },
      p = {
        nullOrUndefined: c,
        object: u,
        number: function (e) {
          return r(e) === Number && !Number.isNaN(e);
        },
        string: d,
        boolean: function (e) {
          return r(e) === Boolean;
        },
        function: function (e) {
          return r(e) === Function;
        },
        array: h,
        nodeList: m,
        element: function (e) {
          return l(e, Element);
        },
        event: function (e) {
          return l(e, Event);
        },
        empty: function (e) {
          return (
            c(e) ||
            ((d(e) || h(e) || m(e)) && !e.length) ||
            (u(e) && !Object.keys(e).length)
          );
        },
      };
    function f(e, t) {
      if (t < 1) {
        var n = (i = "".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))
          ? Math.max(0, (i[1] ? i[1].length : 0) - (i[2] ? +i[2] : 0))
          : 0;
        return parseFloat(e.toFixed(n));
      }
      var i;
      return Math.round(e / t) * t;
    }
    var g = (function () {
        function t(n, i) {
          e(this, t),
            p.element(n)
              ? (this.element = n)
              : p.string(n) && (this.element = document.querySelector(n)),
            p.element(this.element) &&
              p.empty(this.element.rangeTouch) &&
              ((this.config = Object.assign({}, o, i)), this.init());
        }
        return (
          n(
            t,
            [
              {
                key: "init",
                value: function () {
                  t.enabled &&
                    (this.config.addCSS &&
                      ((this.element.style.userSelect = "none"),
                      (this.element.style.webKitUserSelect = "none"),
                      (this.element.style.touchAction = "manipulation")),
                    this.listeners(!0),
                    (this.element.rangeTouch = this));
                },
              },
              {
                key: "destroy",
                value: function () {
                  t.enabled &&
                    (this.listeners(!1), (this.element.rangeTouch = null));
                },
              },
              {
                key: "listeners",
                value: function (e) {
                  var t = this,
                    n = e ? "addEventListener" : "removeEventListener";
                  ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                    t.element[n](
                      e,
                      function (e) {
                        return t.set(e);
                      },
                      !1,
                    );
                  });
                },
              },
              {
                key: "get",
                value: function (e) {
                  if (!t.enabled || !p.event(e)) return null;
                  var n,
                    i = e.target,
                    a = e.changedTouches[0],
                    s = parseFloat(i.getAttribute("min")) || 0,
                    o = parseFloat(i.getAttribute("max")) || 100,
                    r = parseFloat(i.getAttribute("step")) || 1,
                    l = o - s,
                    c = i.getBoundingClientRect(),
                    u = ((100 / c.width) * (this.config.thumbWidth / 2)) / 100;
                  return (
                    (n = (100 / c.width) * (a.clientX - c.left)) < 0
                      ? (n = 0)
                      : n > 100 && (n = 100),
                    n < 50
                      ? (n -= (100 - 2 * n) * u)
                      : n > 50 && (n += 2 * (n - 50) * u),
                    s + f(l * (n / 100), r)
                  );
                },
              },
              {
                key: "set",
                value: function (e) {
                  t.enabled &&
                    p.event(e) &&
                    !e.target.disabled &&
                    (e.preventDefault(),
                    (e.target.value = this.get(e)),
                    (function (e, t) {
                      if (e && t) {
                        var n = new Event(t);
                        e.dispatchEvent(n);
                      }
                    })(e.target, "touchend" === e.type ? "change" : "input"));
                },
              },
            ],
            [
              {
                key: "setup",
                value: function (e) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = null;
                  if (
                    (p.empty(e) || p.string(e)
                      ? (i = Array.from(
                          document.querySelectorAll(
                            p.string(e) ? e : 'input[type="range"]',
                          ),
                        ))
                      : p.element(e)
                      ? (i = [e])
                      : p.nodeList(e)
                      ? (i = Array.from(e))
                      : p.array(e) && (i = e.filter(p.element)),
                    p.empty(i))
                  )
                    return null;
                  var a = Object.assign({}, o, n);
                  p.string(e) &&
                    a.watch &&
                    new MutationObserver(function (n) {
                      Array.from(n).forEach(function (n) {
                        Array.from(n.addedNodes).forEach(function (n) {
                          if (
                            p.element(n) &&
                            function () {
                              return Array.from(
                                document.querySelectorAll(i),
                              ).includes(this);
                            }.call(n, (i = e))
                          ) {
                            var i;
                            new t(n, a);
                          }
                        });
                      });
                    }).observe(document.body, { childList: !0, subtree: !0 });
                  return i.map(function (e) {
                    return new t(e, n);
                  });
                },
              },
              {
                key: "enabled",
                get: function () {
                  return "ontouchstart" in document.documentElement;
                },
              },
            ],
          ),
          t
        );
      })(),
      y = function (e) {
        return null != e ? e.constructor : null;
      },
      v = function (e, t) {
        return Boolean(e && t && e instanceof t);
      },
      b = function (e) {
        return null == e;
      },
      k = function (e) {
        return y(e) === Object;
      },
      w = function (e) {
        return y(e) === String;
      },
      T = function (e) {
        return Array.isArray(e);
      },
      C = function (e) {
        return v(e, NodeList);
      },
      A = function (e) {
        return (
          b(e) ||
          ((w(e) || T(e) || C(e)) && !e.length) ||
          (k(e) && !Object.keys(e).length)
        );
      },
      E = {
        nullOrUndefined: b,
        object: k,
        number: function (e) {
          return y(e) === Number && !Number.isNaN(e);
        },
        string: w,
        boolean: function (e) {
          return y(e) === Boolean;
        },
        function: function (e) {
          return y(e) === Function;
        },
        array: T,
        weakMap: function (e) {
          return v(e, WeakMap);
        },
        nodeList: C,
        element: function (e) {
          return v(e, Element);
        },
        textNode: function (e) {
          return y(e) === Text;
        },
        event: function (e) {
          return v(e, Event);
        },
        keyboardEvent: function (e) {
          return v(e, KeyboardEvent);
        },
        cue: function (e) {
          return v(e, window.TextTrackCue) || v(e, window.VTTCue);
        },
        track: function (e) {
          return v(e, TextTrack) || (!b(e) && w(e.kind));
        },
        promise: function (e) {
          return v(e, Promise);
        },
        url: function (e) {
          if (v(e, window.URL)) return !0;
          if (!w(e)) return !1;
          var t = e;
          (e.startsWith("http://") && e.startsWith("https://")) ||
            (t = "http://".concat(e));
          try {
            return !A(new URL(t).hostname);
          } catch (e) {
            return !1;
          }
        },
        empty: A,
      },
      S = (function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              return (e = !0), null;
            },
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
    function P(e, t, n) {
      var i = this,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (e && "addEventListener" in e && !E.empty(t) && E.function(n)) {
        var r = t.split(" "),
          l = o;
        S && (l = { passive: s, capture: o }),
          r.forEach(function (t) {
            i &&
              i.eventListeners &&
              a &&
              i.eventListeners.push({
                element: e,
                type: t,
                callback: n,
                options: l,
              }),
              e[a ? "addEventListener" : "removeEventListener"](t, n, l);
          });
      }
    }
    function N(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      P.call(this, e, t, n, !0, i, a);
    }
    function M(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      P.call(this, e, t, n, !1, i, a);
    }
    function x(e) {
      var t = this,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      P.call(
        this,
        e,
        n,
        function o() {
          M(e, n, o, a, s);
          for (var r = arguments.length, l = new Array(r), c = 0; c < r; c++)
            l[c] = arguments[c];
          i.apply(t, l);
        },
        !0,
        a,
        s,
      );
    }
    function L(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (E.element(e) && !E.empty(t)) {
        var a = new CustomEvent(t, {
          bubbles: n,
          detail: Object.assign({}, i, { plyr: this }),
        });
        e.dispatchEvent(a);
      }
    }
    function I(e, t) {
      var n = e.length ? e : [e];
      Array.from(n)
        .reverse()
        .forEach(function (e, n) {
          var i = n > 0 ? t.cloneNode(!0) : t,
            a = e.parentNode,
            s = e.nextSibling;
          i.appendChild(e), s ? a.insertBefore(i, s) : a.appendChild(i);
        });
    }
    function _(e, t) {
      E.element(e) &&
        !E.empty(t) &&
        Object.entries(t)
          .filter(function (e) {
            var t = a(e, 2)[1];
            return !E.nullOrUndefined(t);
          })
          .forEach(function (t) {
            var n = a(t, 2),
              i = n[0],
              s = n[1];
            return e.setAttribute(i, s);
          });
    }
    function O(e, t, n) {
      var i = document.createElement(e);
      return E.object(t) && _(i, t), E.string(n) && (i.innerText = n), i;
    }
    function j(e, t, n, i) {
      E.element(t) && t.appendChild(O(e, n, i));
    }
    function q(e) {
      E.nodeList(e) || E.array(e)
        ? Array.from(e).forEach(q)
        : E.element(e) &&
          E.element(e.parentNode) &&
          e.parentNode.removeChild(e);
    }
    function D(e) {
      if (E.element(e))
        for (var t = e.childNodes.length; t > 0; )
          e.removeChild(e.lastChild), (t -= 1);
    }
    function F(e, t) {
      return E.element(t) && E.element(t.parentNode) && E.element(e)
        ? (t.parentNode.replaceChild(e, t), e)
        : null;
    }
    function H(e, t) {
      if (!E.string(e) || E.empty(e)) return {};
      var n = {},
        i = t;
      return (
        e.split(",").forEach(function (e) {
          var t = e.trim(),
            a = t.replace(".", ""),
            s = t.replace(/[[\]]/g, "").split("="),
            o = s[0],
            r = s.length > 1 ? s[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              E.object(i) && E.string(i.class) && (i.class += " ".concat(a)),
                (n.class = a);
              break;
            case "#":
              n.id = t.replace("#", "");
              break;
            case "[":
              n[o] = r;
          }
        }),
        n
      );
    }
    function R(e, t) {
      if (E.element(e)) {
        var n = t;
        E.boolean(n) || (n = !e.hidden),
          n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden");
      }
    }
    function B(e, t, n) {
      if (E.nodeList(e))
        return Array.from(e).map(function (e) {
          return B(e, t, n);
        });
      if (E.element(e)) {
        var i = "toggle";
        return (
          void 0 !== n && (i = n ? "add" : "remove"),
          e.classList[i](t),
          e.classList.contains(t)
        );
      }
      return !1;
    }
    function V(e, t) {
      return E.element(e) && e.classList.contains(t);
    }
    function U(e, t) {
      return function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      }.call(e, t);
    }
    function z(e) {
      return this.elements.container.querySelectorAll(e);
    }
    function W(e) {
      return this.elements.container.querySelector(e);
    }
    function K() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      E.element(e) &&
        (e.focus({ preventScroll: !0 }),
        t && B(e, this.config.classNames.tabFocus));
    }
    var Y,
      Q,
      X,
      J =
        ((Y = document.createElement("span")),
        (Q = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        }),
        (X = Object.keys(Q).find(function (e) {
          return void 0 !== Y.style[e];
        })),
        !!E.string(X) && Q[X]);
    function $(e) {
      setTimeout(function () {
        try {
          R(e, !0), e.offsetHeight, R(e, !1);
        } catch (e) {}
      }, 0);
    }
    var G,
      Z = {
        isIE: !!document.documentMode,
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit:
          "WebkitAppearance" in document.documentElement.style &&
          !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
      },
      ee = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora",
      },
      te = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check: function (e, t, n) {
          var i = Z.isIPhone && n && te.playsinline,
            a = te[e] || "html5" !== t;
          return {
            api: a,
            ui: a && te.rangeInput && ("video" !== e || !Z.isIPhone || i),
          };
        },
        pip: !(
          Z.isIPhone ||
          (!E.function(O("video").webkitSetPresentationMode) &&
            (!document.pictureInPictureEnabled ||
              O("video").disablePictureInPicture))
        ),
        airplay: E.function(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime: function (e) {
          if (E.empty(e)) return !1;
          var t = a(e.split("/"), 1)[0],
            n = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(ee).includes(n) && (n += '; codecs="'.concat(ee[e], '"'));
          try {
            return Boolean(n && this.media.canPlayType(n).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput:
          ((G = document.createElement("input")),
          (G.type = "range"),
          "range" === G.type),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== J,
        reducedMotion:
          "matchMedia" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      },
      ne = {
        getSources: function () {
          var e = this;
          return this.isHTML5
            ? Array.from(this.media.querySelectorAll("source")).filter(
                function (t) {
                  var n = t.getAttribute("type");
                  return !!E.empty(n) || te.mime.call(e, n);
                },
              )
            : [];
        },
        getQualityOptions: function () {
          return ne.getSources
            .call(this)
            .map(function (e) {
              return Number(e.getAttribute("size"));
            })
            .filter(Boolean);
        },
        extend: function () {
          if (this.isHTML5) {
            var e = this;
            Object.defineProperty(e.media, "quality", {
              get: function () {
                var t = ne.getSources.call(e).find(function (t) {
                  return t.getAttribute("src") === e.source;
                });
                return t && Number(t.getAttribute("size"));
              },
              set: function (t) {
                var n = ne.getSources.call(e).find(function (e) {
                  return Number(e.getAttribute("size")) === t;
                });
                if (n) {
                  var i = e.media,
                    a = i.currentTime,
                    s = i.paused,
                    o = i.preload,
                    r = i.readyState;
                  (e.media.src = n.getAttribute("src")),
                    ("none" !== o || r) &&
                      (e.once("loadedmetadata", function () {
                        (e.currentTime = a), s || e.play();
                      }),
                      e.media.load()),
                    L.call(e, e.media, "qualitychange", !1, { quality: t });
                }
              },
            });
          }
        },
        cancelRequests: function () {
          this.isHTML5 &&
            (q(ne.getSources.call(this)),
            this.media.setAttribute("src", this.config.blankVideo),
            this.media.load(),
            this.debug.log("Cancelled network requests"));
        },
      };
    function ie(e) {
      return E.array(e)
        ? e.filter(function (t, n) {
            return e.indexOf(t) === n;
          })
        : e;
    }
    function ae(e, t) {
      return t.split(".").reduce(function (e, t) {
        return e && e[t];
      }, e);
    }
    function se() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length,
          n = new Array(t > 1 ? t - 1 : 0),
          a = 1;
        a < t;
        a++
      )
        n[a - 1] = arguments[a];
      if (!n.length) return e;
      var s = n.shift();
      return E.object(s)
        ? (Object.keys(s).forEach(function (t) {
            E.object(s[t])
              ? (Object.keys(e).includes(t) || Object.assign(e, i({}, t, {})),
                se(e[t], s[t]))
              : Object.assign(e, i({}, t, s[t]));
          }),
          se.apply(void 0, [e].concat(n)))
        : e;
    }
    function oe(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      return E.empty(e)
        ? e
        : e.toString().replace(/{(\d+)}/g, function (e, t) {
            return n[t].toString();
          });
    }
    function re() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return e.replace(
        new RegExp(
          t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"),
          "g",
        ),
        n.toString(),
      );
    }
    function le() {
      return (
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
      )
        .toString()
        .replace(/\w\S*/g, function (e) {
          return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        });
    }
    function ce() {
      var e = (
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
      ).toString();
      return (
        (e = (function () {
          var e = (
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          ).toString();
          return (
            (e = re(e, "-", " ")),
            (e = re(e, "_", " ")),
            re((e = le(e)), " ", "")
          );
        })(e))
          .charAt(0)
          .toLowerCase() + e.slice(1)
      );
    }
    function ue(e) {
      var t = document.createElement("div");
      return t.appendChild(e), t.innerHTML;
    }
    var de = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube",
      },
      he = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (E.empty(e) || E.empty(t)) return "";
        var n = ae(t.i18n, e);
        if (E.empty(n)) return Object.keys(de).includes(e) ? de[e] : "";
        var i = { "{seektime}": t.seekTime, "{title}": t.title };
        return (
          Object.entries(i).forEach(function (e) {
            var t = a(e, 2),
              i = t[0],
              s = t[1];
            n = re(n, i, s);
          }),
          n
        );
      },
      me = (function () {
        function t(n) {
          e(this, t),
            (this.enabled = n.config.storage.enabled),
            (this.key = n.config.storage.key);
        }
        return (
          n(
            t,
            [
              {
                key: "get",
                value: function (e) {
                  if (!t.supported || !this.enabled) return null;
                  var n = window.localStorage.getItem(this.key);
                  if (E.empty(n)) return null;
                  var i = JSON.parse(n);
                  return E.string(e) && e.length ? i[e] : i;
                },
              },
              {
                key: "set",
                value: function (e) {
                  if (t.supported && this.enabled && E.object(e)) {
                    var n = this.get();
                    E.empty(n) && (n = {}),
                      se(n, e),
                      window.localStorage.setItem(this.key, JSON.stringify(n));
                  }
                },
              },
            ],
            [
              {
                key: "supported",
                get: function () {
                  try {
                    if (!("localStorage" in window)) return !1;
                    return (
                      window.localStorage.setItem("___test", "___test"),
                      window.localStorage.removeItem("___test"),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                },
              },
            ],
          ),
          t
        );
      })();
    function pe(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
      return new Promise(function (n, i) {
        try {
          var a = new XMLHttpRequest();
          if (!("withCredentials" in a)) return;
          a.addEventListener("load", function () {
            if ("text" === t)
              try {
                n(JSON.parse(a.responseText));
              } catch (e) {
                n(a.responseText);
              }
            else n(a.response);
          }),
            a.addEventListener("error", function () {
              throw new Error(a.status);
            }),
            a.open("GET", e, !0),
            (a.responseType = t),
            a.send();
        } catch (e) {
          i(e);
        }
      });
    }
    function fe(e, t) {
      if (E.string(e)) {
        var n = E.string(t),
          i = function () {
            return null !== document.getElementById(t);
          },
          a = function (e, t) {
            (e.innerHTML = t),
              (n && i()) ||
                document.body.insertAdjacentElement("afterbegin", e);
          };
        if (!n || !i()) {
          var s = me.supported,
            o = document.createElement("div");
          if ((o.setAttribute("hidden", ""), n && o.setAttribute("id", t), s)) {
            var r = window.localStorage.getItem(
              "".concat("cache", "-").concat(t),
            );
            if (null !== r) {
              var l = JSON.parse(r);
              a(o, l.content);
            }
          }
          pe(e)
            .then(function (e) {
              E.empty(e) ||
                (s &&
                  window.localStorage.setItem(
                    "".concat("cache", "-").concat(t),
                    JSON.stringify({ content: e }),
                  ),
                a(o, e));
            })
            .catch(function () {});
        }
      }
    }
    var ge = function (e) {
        return Math.trunc((e / 60 / 60) % 60, 10);
      },
      ye = function (e) {
        return Math.trunc((e / 60) % 60, 10);
      },
      ve = function (e) {
        return Math.trunc(e % 60, 10);
      };
    function be() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!E.number(e)) return be(null, t, n);
      var i = function (e) {
          return "0".concat(e).slice(-2);
        },
        a = ge(e),
        s = ye(e),
        o = ve(e);
      return (
        (a = t || a > 0 ? "".concat(a, ":") : ""),
        ""
          .concat(n && e > 0 ? "-" : "")
          .concat(a)
          .concat(i(s), ":")
          .concat(i(o))
      );
    }
    var ke = {
      getIconUrl: function () {
        var e =
          new URL(this.config.iconUrl, window.location).host !==
            window.location.host ||
          (Z.isIE && !window.svg4everybody);
        return { url: this.config.iconUrl, cors: e };
      },
      findElements: function () {
        try {
          return (
            (this.elements.controls = W.call(
              this,
              this.config.selectors.controls.wrapper,
            )),
            (this.elements.buttons = {
              play: z.call(this, this.config.selectors.buttons.play),
              pause: W.call(this, this.config.selectors.buttons.pause),
              restart: W.call(this, this.config.selectors.buttons.restart),
              rewind: W.call(this, this.config.selectors.buttons.rewind),
              fastForward: W.call(
                this,
                this.config.selectors.buttons.fastForward,
              ),
              mute: W.call(this, this.config.selectors.buttons.mute),
              pip: W.call(this, this.config.selectors.buttons.pip),
              airplay: W.call(this, this.config.selectors.buttons.airplay),
              settings: W.call(this, this.config.selectors.buttons.settings),
              captions: W.call(this, this.config.selectors.buttons.captions),
              fullscreen: W.call(
                this,
                this.config.selectors.buttons.fullscreen,
              ),
            }),
            (this.elements.progress = W.call(
              this,
              this.config.selectors.progress,
            )),
            (this.elements.inputs = {
              seek: W.call(this, this.config.selectors.inputs.seek),
              volume: W.call(this, this.config.selectors.inputs.volume),
            }),
            (this.elements.display = {
              buffer: W.call(this, this.config.selectors.display.buffer),
              currentTime: W.call(
                this,
                this.config.selectors.display.currentTime,
              ),
              duration: W.call(this, this.config.selectors.display.duration),
            }),
            E.element(this.elements.progress) &&
              (this.elements.display.seekTooltip =
                this.elements.progress.querySelector(
                  ".".concat(this.config.classNames.tooltip),
                )),
            !0
          );
        } catch (e) {
          return (
            this.debug.warn(
              "It looks like there is a problem with your custom controls HTML",
              e,
            ),
            this.toggleNativeControls(!0),
            !1
          );
        }
      },
      createIcon: function (e, t) {
        var n = ke.getIconUrl.call(this),
          i = ""
            .concat(n.cors ? "" : n.url, "#")
            .concat(this.config.iconPrefix),
          a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        _(a, se(t, { role: "presentation", focusable: "false" }));
        var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          o = "".concat(i, "-").concat(e);
        return (
          "href" in s &&
            s.setAttributeNS("http://www.w3.org/1999/xlink", "href", o),
          s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o),
          a.appendChild(s),
          a
        );
      },
      createLabel: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = he(e, this.config);
        return O(
          "span",
          Object.assign({}, t, {
            class: [t.class, this.config.classNames.hidden]
              .filter(Boolean)
              .join(" "),
          }),
          n,
        );
      },
      createBadge: function (e) {
        if (E.empty(e)) return null;
        var t = O("span", { class: this.config.classNames.menu.value });
        return (
          t.appendChild(
            O("span", { class: this.config.classNames.menu.badge }, e),
          ),
          t
        );
      },
      createButton: function (e, t) {
        var n = Object.assign({}, t),
          i = ce(e),
          a = {
            element: "button",
            toggle: !1,
            label: null,
            icon: null,
            labelPressed: null,
            iconPressed: null,
          };
        switch (
          (["element", "icon", "label"].forEach(function (e) {
            Object.keys(n).includes(e) && ((a[e] = n[e]), delete n[e]);
          }),
          "button" !== a.element ||
            Object.keys(n).includes("type") ||
            (n.type = "button"),
          Object.keys(n).includes("class")
            ? n.class.includes(this.config.classNames.control) ||
              (n.class += " ".concat(this.config.classNames.control))
            : (n.class = this.config.classNames.control),
          e)
        ) {
          case "play":
            (a.toggle = !0),
              (a.label = "play"),
              (a.labelPressed = "pause"),
              (a.icon = "play"),
              (a.iconPressed = "pause");
            break;
          case "mute":
            (a.toggle = !0),
              (a.label = "mute"),
              (a.labelPressed = "unmute"),
              (a.icon = "volume"),
              (a.iconPressed = "muted");
            break;
          case "captions":
            (a.toggle = !0),
              (a.label = "enableCaptions"),
              (a.labelPressed = "disableCaptions"),
              (a.icon = "captions-off"),
              (a.iconPressed = "captions-on");
            break;
          case "fullscreen":
            (a.toggle = !0),
              (a.label = "enterFullscreen"),
              (a.labelPressed = "exitFullscreen"),
              (a.icon = "enter-fullscreen"),
              (a.iconPressed = "exit-fullscreen");
            break;
          case "play-large":
            (n.class += " ".concat(
              this.config.classNames.control,
              "--overlaid",
            )),
              (i = "play"),
              (a.label = "play"),
              (a.icon = "play");
            break;
          default:
            E.empty(a.label) && (a.label = i), E.empty(a.icon) && (a.icon = e);
        }
        var s = O(a.element);
        return (
          a.toggle
            ? (s.appendChild(
                ke.createIcon.call(this, a.iconPressed, {
                  class: "icon--pressed",
                }),
              ),
              s.appendChild(
                ke.createIcon.call(this, a.icon, {
                  class: "icon--not-pressed",
                }),
              ),
              s.appendChild(
                ke.createLabel.call(this, a.labelPressed, {
                  class: "label--pressed",
                }),
              ),
              s.appendChild(
                ke.createLabel.call(this, a.label, {
                  class: "label--not-pressed",
                }),
              ))
            : (s.appendChild(ke.createIcon.call(this, a.icon)),
              s.appendChild(ke.createLabel.call(this, a.label))),
          se(n, H(this.config.selectors.buttons[i], n)),
          _(s, n),
          "play" === i
            ? (E.array(this.elements.buttons[i]) ||
                (this.elements.buttons[i] = []),
              this.elements.buttons[i].push(s))
            : (this.elements.buttons[i] = s),
          s
        );
      },
      createRange: function (e, t) {
        var n = O(
          "input",
          se(
            H(this.config.selectors.inputs[e]),
            {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": he(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0,
            },
            t,
          ),
        );
        return (
          (this.elements.inputs[e] = n),
          ke.updateRangeFill.call(this, n),
          g.setup(n),
          n
        );
      },
      createProgress: function (e, t) {
        var n = O(
          "progress",
          se(
            H(this.config.selectors.display[e]),
            {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0,
            },
            t,
          ),
        );
        if ("volume" !== e) {
          n.appendChild(O("span", null, "0"));
          var i = { played: "played", buffer: "buffered" }[e],
            a = i ? he(i, this.config) : "";
          n.innerText = "% ".concat(a.toLowerCase());
        }
        return (this.elements.display[e] = n), n;
      },
      createTime: function (e) {
        var t = H(this.config.selectors.display[e]),
          n = O(
            "div",
            se(t, {
              class: ""
                .concat(this.config.classNames.display.time, " ")
                .concat(t.class ? t.class : "")
                .trim(),
              "aria-label": he(e, this.config),
            }),
            "00:00",
          );
        return (this.elements.display[e] = n), n;
      },
      bindMenuItemShortcuts: function (e, t) {
        var n = this;
        N(
          e,
          "keydown keyup",
          function (i) {
            if (
              [32, 38, 39, 40].includes(i.which) &&
              (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)
            ) {
              var a,
                s = U(e, '[role="menuitemradio"]');
              if (!s && [32, 39].includes(i.which))
                ke.showMenuPanel.call(n, t, !0);
              else
                32 !== i.which &&
                  (40 === i.which || (s && 39 === i.which)
                    ? ((a = e.nextElementSibling),
                      E.element(a) || (a = e.parentNode.firstElementChild))
                    : ((a = e.previousElementSibling),
                      E.element(a) || (a = e.parentNode.lastElementChild)),
                  K.call(n, a, !0));
            }
          },
          !1,
        ),
          N(e, "keyup", function (e) {
            13 === e.which && ke.focusFirstMenuItem.call(n, null, !0);
          });
      },
      createMenuItem: function (e) {
        var t = this,
          n = e.value,
          i = e.list,
          a = e.type,
          s = e.title,
          o = e.badge,
          r = void 0 === o ? null : o,
          l = e.checked,
          c = void 0 !== l && l,
          u = H(this.config.selectors.inputs[a]),
          d = O(
            "button",
            se(u, {
              type: "button",
              role: "menuitemradio",
              class: ""
                .concat(this.config.classNames.control, " ")
                .concat(u.class ? u.class : "")
                .trim(),
              "aria-checked": c,
              value: n,
            }),
          ),
          h = O("span");
        (h.innerHTML = s),
          E.element(r) && h.appendChild(r),
          d.appendChild(h),
          Object.defineProperty(d, "checked", {
            enumerable: !0,
            get: function () {
              return "true" === d.getAttribute("aria-checked");
            },
            set: function (e) {
              e &&
                Array.from(d.parentNode.children)
                  .filter(function (e) {
                    return U(e, '[role="menuitemradio"]');
                  })
                  .forEach(function (e) {
                    return e.setAttribute("aria-checked", "false");
                  }),
                d.setAttribute("aria-checked", e ? "true" : "false");
            },
          }),
          this.listeners.bind(
            d,
            "click keyup",
            function (e) {
              if (!E.keyboardEvent(e) || 32 === e.which) {
                switch (
                  (e.preventDefault(), e.stopPropagation(), (d.checked = !0), a)
                ) {
                  case "language":
                    t.currentTrack = Number(n);
                    break;
                  case "quality":
                    t.quality = n;
                    break;
                  case "speed":
                    t.speed = parseFloat(n);
                }
                ke.showMenuPanel.call(t, "home", E.keyboardEvent(e));
              }
            },
            a,
            !1,
          ),
          ke.bindMenuItemShortcuts.call(this, d, a),
          i.appendChild(d);
      },
      formatTime: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return E.number(e) ? be(e, ge(this.duration) > 0, t) : e;
      },
      updateTimeDisplay: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        E.element(e) && E.number(t) && (e.innerText = ke.formatTime(t, n));
      },
      updateVolume: function () {
        this.supported.ui &&
          (E.element(this.elements.inputs.volume) &&
            ke.setRange.call(
              this,
              this.elements.inputs.volume,
              this.muted ? 0 : this.volume,
            ),
          E.element(this.elements.buttons.mute) &&
            (this.elements.buttons.mute.pressed =
              this.muted || 0 === this.volume));
      },
      setRange: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        E.element(e) && ((e.value = t), ke.updateRangeFill.call(this, e));
      },
      updateProgress: function (e) {
        var t = this;
        if (this.supported.ui && E.event(e)) {
          var n,
            i,
            a = 0;
          if (e)
            switch (e.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                (n = this.currentTime),
                  (i = this.duration),
                  (a =
                    0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i)
                      ? 0
                      : ((n / i) * 100).toFixed(2)),
                  "timeupdate" === e.type &&
                    ke.setRange.call(this, this.elements.inputs.seek, a);
                break;
              case "playing":
              case "progress":
                !(function (e, n) {
                  var i = E.number(n) ? n : 0,
                    a = E.element(e) ? e : t.elements.display.buffer;
                  if (E.element(a)) {
                    a.value = i;
                    var s = a.getElementsByTagName("span")[0];
                    E.element(s) && (s.childNodes[0].nodeValue = i);
                  }
                })(this.elements.display.buffer, 100 * this.buffered);
            }
        }
      },
      updateRangeFill: function (e) {
        var t = E.event(e) ? e.target : e;
        if (E.element(t) && "range" === t.getAttribute("type")) {
          if (U(t, this.config.selectors.inputs.seek)) {
            t.setAttribute("aria-valuenow", this.currentTime);
            var n = ke.formatTime(this.currentTime),
              i = ke.formatTime(this.duration),
              a = he("seekLabel", this.config);
            t.setAttribute(
              "aria-valuetext",
              a.replace("{currentTime}", n).replace("{duration}", i),
            );
          } else if (U(t, this.config.selectors.inputs.volume)) {
            var s = 100 * t.value;
            t.setAttribute("aria-valuenow", s),
              t.setAttribute("aria-valuetext", "".concat(s.toFixed(1), "%"));
          } else t.setAttribute("aria-valuenow", t.value);
          Z.isWebkit &&
            t.style.setProperty(
              "--value",
              "".concat((t.value / t.max) * 100, "%"),
            );
        }
      },
      updateSeekTooltip: function (e) {
        var t = this;
        if (
          this.config.tooltips.seek &&
          E.element(this.elements.inputs.seek) &&
          E.element(this.elements.display.seekTooltip) &&
          0 !== this.duration
        ) {
          var n = 0,
            i = this.elements.progress.getBoundingClientRect(),
            a = "".concat(this.config.classNames.tooltip, "--visible"),
            s = function (e) {
              B(t.elements.display.seekTooltip, a, e);
            };
          if (this.touch) s(!1);
          else {
            if (E.event(e)) n = (100 / i.width) * (e.pageX - i.left);
            else {
              if (!V(this.elements.display.seekTooltip, a)) return;
              n = parseFloat(this.elements.display.seekTooltip.style.left, 10);
            }
            n < 0 ? (n = 0) : n > 100 && (n = 100),
              ke.updateTimeDisplay.call(
                this,
                this.elements.display.seekTooltip,
                (this.duration / 100) * n,
              ),
              (this.elements.display.seekTooltip.style.left = "".concat(
                n,
                "%",
              )),
              E.event(e) &&
                ["mouseenter", "mouseleave"].includes(e.type) &&
                s("mouseenter" === e.type);
          }
        }
      },
      timeUpdate: function (e) {
        var t =
          !E.element(this.elements.display.duration) && this.config.invertTime;
        ke.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          t ? this.duration - this.currentTime : this.currentTime,
          t,
        ),
          (e && "timeupdate" === e.type && this.media.seeking) ||
            ke.updateProgress.call(this, e);
      },
      durationUpdate: function () {
        if (
          this.supported.ui &&
          (this.config.invertTime || !this.currentTime)
        ) {
          if (this.duration >= Math.pow(2, 32))
            return (
              R(this.elements.display.currentTime, !0),
              void R(this.elements.progress, !0)
            );
          E.element(this.elements.inputs.seek) &&
            this.elements.inputs.seek.setAttribute(
              "aria-valuemax",
              this.duration,
            );
          var e = E.element(this.elements.display.duration);
          !e &&
            this.config.displayDuration &&
            this.paused &&
            ke.updateTimeDisplay.call(
              this,
              this.elements.display.currentTime,
              this.duration,
            ),
            e &&
              ke.updateTimeDisplay.call(
                this,
                this.elements.display.duration,
                this.duration,
              ),
            ke.updateSeekTooltip.call(this);
        }
      },
      toggleMenuButton: function (e, t) {
        R(this.elements.settings.buttons[e], !t);
      },
      updateSetting: function (e, t, n) {
        var i = this.elements.settings.panels[e],
          a = null,
          s = t;
        if ("captions" === e) a = this.currentTrack;
        else {
          if (
            ((a = E.empty(n) ? this[e] : n),
            E.empty(a) && (a = this.config[e].default),
            !E.empty(this.options[e]) && !this.options[e].includes(a))
          )
            return void this.debug.warn(
              "Unsupported value of '".concat(a, "' for ").concat(e),
            );
          if (!this.config[e].options.includes(a))
            return void this.debug.warn(
              "Disabled value of '".concat(a, "' for ").concat(e),
            );
        }
        if (
          (E.element(s) || (s = i && i.querySelector('[role="menu"]')),
          E.element(s))
        ) {
          this.elements.settings.buttons[e].querySelector(
            ".".concat(this.config.classNames.menu.value),
          ).innerHTML = ke.getLabel.call(this, e, a);
          var o = s && s.querySelector('[value="'.concat(a, '"]'));
          E.element(o) && (o.checked = !0);
        }
      },
      getLabel: function (e, t) {
        switch (e) {
          case "speed":
            return 1 === t
              ? he("normal", this.config)
              : "".concat(t, "&times;");
          case "quality":
            if (E.number(t)) {
              var n = he("qualityLabel.".concat(t), this.config);
              return n.length ? n : "".concat(t, "p");
            }
            return le(t);
          case "captions":
            return Ce.getLabel.call(this);
          default:
            return null;
        }
      },
      setQualityMenu: function (e) {
        var t = this;
        if (E.element(this.elements.settings.panels.quality)) {
          var n =
            this.elements.settings.panels.quality.querySelector(
              '[role="menu"]',
            );
          E.array(e) &&
            (this.options.quality = ie(e).filter(function (e) {
              return t.config.quality.options.includes(e);
            }));
          var i =
            !E.empty(this.options.quality) && this.options.quality.length > 1;
          if (
            (ke.toggleMenuButton.call(this, "quality", i),
            D(n),
            ke.checkMenu.call(this),
            i)
          ) {
            var a = function (e) {
              var n = he("qualityBadge.".concat(e), t.config);
              return n.length ? ke.createBadge.call(t, n) : null;
            };
            this.options.quality
              .sort(function (e, n) {
                var i = t.config.quality.options;
                return i.indexOf(e) > i.indexOf(n) ? 1 : -1;
              })
              .forEach(function (e) {
                ke.createMenuItem.call(t, {
                  value: e,
                  list: n,
                  type: "quality",
                  title: ke.getLabel.call(t, "quality", e),
                  badge: a(e),
                });
              }),
              ke.updateSetting.call(this, "quality", n);
          }
        }
      },
      setCaptionsMenu: function () {
        var e = this;
        if (E.element(this.elements.settings.panels.captions)) {
          var t =
              this.elements.settings.panels.captions.querySelector(
                '[role="menu"]',
              ),
            n = Ce.getTracks.call(this),
            i = Boolean(n.length);
          if (
            (ke.toggleMenuButton.call(this, "captions", i),
            D(t),
            ke.checkMenu.call(this),
            i)
          ) {
            var a = n.map(function (n, i) {
              return {
                value: i,
                checked: e.captions.toggled && e.currentTrack === i,
                title: Ce.getLabel.call(e, n),
                badge:
                  n.language &&
                  ke.createBadge.call(e, n.language.toUpperCase()),
                list: t,
                type: "language",
              };
            });
            a.unshift({
              value: -1,
              checked: !this.captions.toggled,
              title: he("disabled", this.config),
              list: t,
              type: "language",
            }),
              a.forEach(ke.createMenuItem.bind(this)),
              ke.updateSetting.call(this, "captions", t);
          }
        }
      },
      setSpeedMenu: function (e) {
        var t = this;
        if (E.element(this.elements.settings.panels.speed)) {
          var n =
            this.elements.settings.panels.speed.querySelector('[role="menu"]');
          E.array(e)
            ? (this.options.speed = e)
            : (this.isHTML5 || this.isVimeo) &&
              (this.options.speed = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]),
            (this.options.speed = this.options.speed.filter(function (e) {
              return t.config.speed.options.includes(e);
            }));
          var i = !E.empty(this.options.speed) && this.options.speed.length > 1;
          ke.toggleMenuButton.call(this, "speed", i),
            D(n),
            ke.checkMenu.call(this),
            i &&
              (this.options.speed.forEach(function (e) {
                ke.createMenuItem.call(t, {
                  value: e,
                  list: n,
                  type: "speed",
                  title: ke.getLabel.call(t, "speed", e),
                });
              }),
              ke.updateSetting.call(this, "speed", n));
        }
      },
      checkMenu: function () {
        var e = this.elements.settings.buttons,
          t =
            !E.empty(e) &&
            Object.values(e).some(function (e) {
              return !e.hidden;
            });
        R(this.elements.settings.menu, !t);
      },
      focusFirstMenuItem: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.elements.settings.popup.hidden) {
          var n = e;
          E.element(n) ||
            (n = Object.values(this.elements.settings.panels).find(function (
              e,
            ) {
              return !e.hidden;
            }));
          var i = n.querySelector('[role^="menuitem"]');
          K.call(this, i, t);
        }
      },
      toggleMenu: function (e) {
        var t = this.elements.settings.popup,
          n = this.elements.buttons.settings;
        if (E.element(t) && E.element(n)) {
          var i = t.hidden,
            a = i;
          if (E.boolean(e)) a = e;
          else if (E.keyboardEvent(e) && 27 === e.which) a = !1;
          else if (E.event(e)) {
            var s = t.contains(e.target);
            if (s || (!s && e.target !== n && a)) return;
          }
          n.setAttribute("aria-expanded", a),
            R(t, !a),
            B(this.elements.container, this.config.classNames.menu.open, a),
            a && E.keyboardEvent(e)
              ? ke.focusFirstMenuItem.call(this, null, !0)
              : a || i || K.call(this, n, E.keyboardEvent(e));
        }
      },
      getMenuSize: function (e) {
        var t = e.cloneNode(!0);
        (t.style.position = "absolute"),
          (t.style.opacity = 0),
          t.removeAttribute("hidden"),
          e.parentNode.appendChild(t);
        var n = t.scrollWidth,
          i = t.scrollHeight;
        return q(t), { width: n, height: i };
      },
      showMenuPanel: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = document.getElementById(
            "plyr-settings-".concat(this.id, "-").concat(t),
          );
        if (E.element(i)) {
          var a = i.parentNode,
            s = Array.from(a.children).find(function (e) {
              return !e.hidden;
            });
          if (te.transitions && !te.reducedMotion) {
            (a.style.width = "".concat(s.scrollWidth, "px")),
              (a.style.height = "".concat(s.scrollHeight, "px"));
            var o = ke.getMenuSize.call(this, i);
            N.call(this, a, J, function t(n) {
              n.target === a &&
                ["width", "height"].includes(n.propertyName) &&
                ((a.style.width = ""),
                (a.style.height = ""),
                M.call(e, a, J, t));
            }),
              (a.style.width = "".concat(o.width, "px")),
              (a.style.height = "".concat(o.height, "px"));
          }
          R(s, !0), R(i, !1), ke.focusFirstMenuItem.call(this, i, n);
        }
      },
      setDownloadLink: function () {
        var e = this.elements.buttons.download;
        E.element(e) && e.setAttribute("href", this.download);
      },
      create: function (e) {
        var t = this,
          n = O("div", H(this.config.selectors.controls.wrapper));
        if (
          (this.config.controls.includes("restart") &&
            n.appendChild(ke.createButton.call(this, "restart")),
          this.config.controls.includes("rewind") &&
            n.appendChild(ke.createButton.call(this, "rewind")),
          this.config.controls.includes("play") &&
            n.appendChild(ke.createButton.call(this, "play")),
          this.config.controls.includes("fast-forward") &&
            n.appendChild(ke.createButton.call(this, "fast-forward")),
          this.config.controls.includes("progress"))
        ) {
          var i = O("div", H(this.config.selectors.progress));
          if (
            (i.appendChild(
              ke.createRange.call(this, "seek", {
                id: "plyr-seek-".concat(e.id),
              }),
            ),
            i.appendChild(ke.createProgress.call(this, "buffer")),
            this.config.tooltips.seek)
          ) {
            var a = O(
              "span",
              { class: this.config.classNames.tooltip },
              "00:00",
            );
            i.appendChild(a), (this.elements.display.seekTooltip = a);
          }
          (this.elements.progress = i), n.appendChild(this.elements.progress);
        }
        if (
          (this.config.controls.includes("current-time") &&
            n.appendChild(ke.createTime.call(this, "currentTime")),
          this.config.controls.includes("duration") &&
            n.appendChild(ke.createTime.call(this, "duration")),
          this.config.controls.includes("mute") ||
            this.config.controls.includes("volume"))
        ) {
          var s = O("div", { class: "plyr__volume" });
          if (
            (this.config.controls.includes("mute") &&
              s.appendChild(ke.createButton.call(this, "mute")),
            this.config.controls.includes("volume"))
          ) {
            var o = { max: 1, step: 0.05, value: this.config.volume };
            s.appendChild(
              ke.createRange.call(
                this,
                "volume",
                se(o, { id: "plyr-volume-".concat(e.id) }),
              ),
            ),
              (this.elements.volume = s);
          }
          n.appendChild(s);
        }
        if (
          (this.config.controls.includes("captions") &&
            n.appendChild(ke.createButton.call(this, "captions")),
          this.config.controls.includes("settings") &&
            !E.empty(this.config.settings))
        ) {
          var r = O("div", { class: "plyr__menu", hidden: "" });
          r.appendChild(
            ke.createButton.call(this, "settings", {
              "aria-haspopup": !0,
              "aria-controls": "plyr-settings-".concat(e.id),
              "aria-expanded": !1,
            }),
          );
          var l = O("div", {
              class: "plyr__menu__container",
              id: "plyr-settings-".concat(e.id),
              hidden: "",
            }),
            c = O("div"),
            u = O("div", { id: "plyr-settings-".concat(e.id, "-home") }),
            d = O("div", { role: "menu" });
          u.appendChild(d),
            c.appendChild(u),
            (this.elements.settings.panels.home = u),
            this.config.settings.forEach(function (n) {
              var i = O(
                "button",
                se(H(t.config.selectors.buttons.settings), {
                  type: "button",
                  class: ""
                    .concat(t.config.classNames.control, " ")
                    .concat(t.config.classNames.control, "--forward"),
                  role: "menuitem",
                  "aria-haspopup": !0,
                  hidden: "",
                }),
              );
              ke.bindMenuItemShortcuts.call(t, i, n),
                N(i, "click", function () {
                  ke.showMenuPanel.call(t, n, !1);
                });
              var a = O("span", null, he(n, t.config)),
                s = O("span", { class: t.config.classNames.menu.value });
              (s.innerHTML = e[n]),
                a.appendChild(s),
                i.appendChild(a),
                d.appendChild(i);
              var o = O("div", {
                  id: "plyr-settings-".concat(e.id, "-").concat(n),
                  hidden: "",
                }),
                r = O("button", {
                  type: "button",
                  class: ""
                    .concat(t.config.classNames.control, " ")
                    .concat(t.config.classNames.control, "--back"),
                });
              r.appendChild(O("span", { "aria-hidden": !0 }, he(n, t.config))),
                r.appendChild(
                  O(
                    "span",
                    { class: t.config.classNames.hidden },
                    he("menuBack", t.config),
                  ),
                ),
                N(
                  o,
                  "keydown",
                  function (e) {
                    37 === e.which &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      ke.showMenuPanel.call(t, "home", !0));
                  },
                  !1,
                ),
                N(r, "click", function () {
                  ke.showMenuPanel.call(t, "home", !1);
                }),
                o.appendChild(r),
                o.appendChild(O("div", { role: "menu" })),
                c.appendChild(o),
                (t.elements.settings.buttons[n] = i),
                (t.elements.settings.panels[n] = o);
            }),
            l.appendChild(c),
            r.appendChild(l),
            n.appendChild(r),
            (this.elements.settings.popup = l),
            (this.elements.settings.menu = r);
        }
        if (
          (this.config.controls.includes("pip") &&
            te.pip &&
            n.appendChild(ke.createButton.call(this, "pip")),
          this.config.controls.includes("airplay") &&
            te.airplay &&
            n.appendChild(ke.createButton.call(this, "airplay")),
          this.config.controls.includes("download"))
        ) {
          var h = { element: "a", href: this.download, target: "_blank" },
            m = this.config.urls.download;
          !E.url(m) &&
            this.isEmbed &&
            se(h, {
              icon: "logo-".concat(this.provider),
              label: this.provider,
            }),
            n.appendChild(ke.createButton.call(this, "download", h));
        }
        return (
          this.config.controls.includes("fullscreen") &&
            n.appendChild(ke.createButton.call(this, "fullscreen")),
          this.config.controls.includes("play-large") &&
            this.elements.container.appendChild(
              ke.createButton.call(this, "play-large"),
            ),
          (this.elements.controls = n),
          this.isHTML5 &&
            ke.setQualityMenu.call(this, ne.getQualityOptions.call(this)),
          ke.setSpeedMenu.call(this),
          n
        );
      },
      inject: function () {
        var e = this;
        if (this.config.loadSprite) {
          var t = ke.getIconUrl.call(this);
          t.cors && fe(t.url, "sprite-plyr");
        }
        this.id = Math.floor(1e4 * Math.random());
        var n = null;
        this.elements.controls = null;
        var i = {
            id: this.id,
            seektime: this.config.seekTime,
            title: this.config.title,
          },
          s = !0;
        E.function(this.config.controls) &&
          (this.config.controls = this.config.controls.call(this, i)),
          this.config.controls || (this.config.controls = []),
          E.element(this.config.controls) || E.string(this.config.controls)
            ? (n = this.config.controls)
            : ((n = ke.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: Ce.getLabel.call(this),
              })),
              (s = !1));
        var o,
          r = function (e) {
            var t = e;
            return (
              Object.entries(i).forEach(function (e) {
                var n = a(e, 2),
                  i = n[0],
                  s = n[1];
                t = re(t, "{".concat(i, "}"), s);
              }),
              t
            );
          };
        if (
          (s &&
            (E.string(this.config.controls)
              ? (n = r(n))
              : E.element(n) && (n.innerHTML = r(n.innerHTML))),
          E.string(this.config.selectors.controls.container) &&
            (o = document.querySelector(
              this.config.selectors.controls.container,
            )),
          E.element(o) || (o = this.elements.container),
          o[E.element(n) ? "insertAdjacentElement" : "insertAdjacentHTML"](
            "afterbegin",
            n,
          ),
          E.element(this.elements.controls) || ke.findElements.call(this),
          !E.empty(this.elements.buttons))
        ) {
          var l = function (t) {
            var n = e.config.classNames.controlPressed;
            Object.defineProperty(t, "pressed", {
              enumerable: !0,
              get: function () {
                return V(t, n);
              },
              set: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                B(t, n, e);
              },
            });
          };
          Object.values(this.elements.buttons)
            .filter(Boolean)
            .forEach(function (e) {
              E.array(e) || E.nodeList(e)
                ? Array.from(e).filter(Boolean).forEach(l)
                : l(e);
            });
        }
        if ((Z.isEdge && $(o), this.config.tooltips.controls)) {
          var c = this.config,
            u = c.classNames,
            d = c.selectors,
            h = ""
              .concat(d.controls.wrapper, " ")
              .concat(d.labels, " .")
              .concat(u.hidden),
            m = z.call(this, h);
          Array.from(m).forEach(function (t) {
            B(t, e.config.classNames.hidden, !1),
              B(t, e.config.classNames.tooltip, !0);
          });
        }
      },
    };
    function we(e) {
      var t = e;
      if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
        var n = document.createElement("a");
        (n.href = t), (t = n.href);
      }
      try {
        return new URL(t);
      } catch (e) {
        return null;
      }
    }
    function Te(e) {
      var t = new URLSearchParams();
      return (
        E.object(e) &&
          Object.entries(e).forEach(function (e) {
            var n = a(e, 2),
              i = n[0],
              s = n[1];
            t.set(i, s);
          }),
        t
      );
    }
    var Ce = {
        setup: function () {
          if (this.supported.ui)
            if (
              !this.isVideo ||
              this.isYouTube ||
              (this.isHTML5 && !te.textTracks)
            )
              E.array(this.config.controls) &&
                this.config.controls.includes("settings") &&
                this.config.settings.includes("captions") &&
                ke.setCaptionsMenu.call(this);
            else {
              var e, t;
              if (
                (E.element(this.elements.captions) ||
                  ((this.elements.captions = O(
                    "div",
                    H(this.config.selectors.captions),
                  )),
                  (e = this.elements.captions),
                  (t = this.elements.wrapper),
                  E.element(e) &&
                    E.element(t) &&
                    t.parentNode.insertBefore(e, t.nextSibling)),
                Z.isIE && window.URL)
              ) {
                var n = this.media.querySelectorAll("track");
                Array.from(n).forEach(function (e) {
                  var t = e.getAttribute("src"),
                    n = we(t);
                  null !== n &&
                    n.hostname !== window.location.href.hostname &&
                    ["http:", "https:"].includes(n.protocol) &&
                    pe(t, "blob")
                      .then(function (t) {
                        e.setAttribute("src", window.URL.createObjectURL(t));
                      })
                      .catch(function () {
                        q(e);
                      });
                });
              }
              var i = ie(
                  (
                    navigator.languages || [
                      navigator.language || navigator.userLanguage || "en",
                    ]
                  ).map(function (e) {
                    return e.split("-")[0];
                  }),
                ),
                s = (
                  this.storage.get("language") ||
                  this.config.captions.language ||
                  "auto"
                ).toLowerCase();
              if ("auto" === s) s = a(i, 1)[0];
              var o = this.storage.get("captions");
              if (
                (E.boolean(o) || (o = this.config.captions.active),
                Object.assign(this.captions, {
                  toggled: !1,
                  active: o,
                  language: s,
                  languages: i,
                }),
                this.isHTML5)
              ) {
                var r = this.config.captions.update
                  ? "addtrack removetrack"
                  : "removetrack";
                N.call(this, this.media.textTracks, r, Ce.update.bind(this));
              }
              setTimeout(Ce.update.bind(this), 0);
            }
        },
        update: function () {
          var e = this,
            t = Ce.getTracks.call(this, !0),
            n = this.captions,
            i = n.active,
            a = n.language,
            s = n.meta,
            o = n.currentTrackNode,
            r = Boolean(
              t.find(function (e) {
                return e.language === a;
              }),
            );
          this.isHTML5 &&
            this.isVideo &&
            t
              .filter(function (e) {
                return !s.get(e);
              })
              .forEach(function (t) {
                e.debug.log("Track added", t),
                  s.set(t, { default: "showing" === t.mode }),
                  (t.mode = "hidden"),
                  N.call(e, t, "cuechange", function () {
                    return Ce.updateCues.call(e);
                  });
              }),
            ((r && this.language !== a) || !t.includes(o)) &&
              (Ce.setLanguage.call(this, a), Ce.toggle.call(this, i && r)),
            B(
              this.elements.container,
              this.config.classNames.captions.enabled,
              !E.empty(t),
            ),
            (this.config.controls || []).includes("settings") &&
              this.config.settings.includes("captions") &&
              ke.setCaptionsMenu.call(this);
        },
        toggle: function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (this.supported.ui) {
            var n = this.captions.toggled,
              i = this.config.classNames.captions.active,
              a = E.nullOrUndefined(e) ? !n : e;
            if (a !== n) {
              if (
                (t ||
                  ((this.captions.active = a),
                  this.storage.set({ captions: a })),
                !this.language && a && !t)
              ) {
                var o = Ce.getTracks.call(this),
                  r = Ce.findTrack.call(
                    this,
                    [this.captions.language].concat(s(this.captions.languages)),
                    !0,
                  );
                return (
                  (this.captions.language = r.language),
                  void Ce.set.call(this, o.indexOf(r))
                );
              }
              this.elements.buttons.captions &&
                (this.elements.buttons.captions.pressed = a),
                B(this.elements.container, i, a),
                (this.captions.toggled = a),
                ke.updateSetting.call(this, "captions"),
                L.call(
                  this,
                  this.media,
                  a ? "captionsenabled" : "captionsdisabled",
                );
            }
          }
        },
        set: function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = Ce.getTracks.call(this);
          if (-1 !== e)
            if (E.number(e))
              if (e in n) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;
                  var i = n[e],
                    a = (i || {}).language;
                  (this.captions.currentTrackNode = i),
                    ke.updateSetting.call(this, "captions"),
                    t ||
                      ((this.captions.language = a),
                      this.storage.set({ language: a })),
                    this.isVimeo && this.embed.enableTextTrack(a),
                    L.call(this, this.media, "languagechange");
                }
                Ce.toggle.call(this, !0, t),
                  this.isHTML5 && this.isVideo && Ce.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
          else Ce.toggle.call(this, !1, t);
        },
        setLanguage: function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (E.string(e)) {
            var n = e.toLowerCase();
            this.captions.language = n;
            var i = Ce.getTracks.call(this),
              a = Ce.findTrack.call(this, [n]);
            Ce.set.call(this, i.indexOf(a), t);
          } else this.debug.warn("Invalid language argument", e);
        },
        getTracks: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return Array.from((this.media || {}).textTracks || [])
            .filter(function (n) {
              return !e.isHTML5 || t || e.captions.meta.has(n);
            })
            .filter(function (e) {
              return ["captions", "subtitles"].includes(e.kind);
            });
        },
        findTrack: function (e) {
          var t,
            n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = Ce.getTracks.call(this),
            s = function (e) {
              return Number((n.captions.meta.get(e) || {}).default);
            },
            o = Array.from(a).sort(function (e, t) {
              return s(t) - s(e);
            });
          return (
            e.every(function (e) {
              return !(t = o.find(function (t) {
                return t.language === e;
              }));
            }),
            t || (i ? o[0] : void 0)
          );
        },
        getCurrentTrack: function () {
          return Ce.getTracks.call(this)[this.currentTrack];
        },
        getLabel: function (e) {
          var t = e;
          return (
            !E.track(t) &&
              te.textTracks &&
              this.captions.toggled &&
              (t = Ce.getCurrentTrack.call(this)),
            E.track(t)
              ? E.empty(t.label)
                ? E.empty(t.language)
                  ? he("enabled", this.config)
                  : e.language.toUpperCase()
                : t.label
              : he("disabled", this.config)
          );
        },
        updateCues: function (e) {
          if (this.supported.ui)
            if (E.element(this.elements.captions))
              if (E.nullOrUndefined(e) || Array.isArray(e)) {
                var t = e;
                if (!t) {
                  var n = Ce.getCurrentTrack.call(this);
                  t = Array.from((n || {}).activeCues || [])
                    .map(function (e) {
                      return e.getCueAsHTML();
                    })
                    .map(ue);
                }
                var i = t
                  .map(function (e) {
                    return e.trim();
                  })
                  .join("\n");
                if (i !== this.elements.captions.innerHTML) {
                  D(this.elements.captions);
                  var a = O("span", H(this.config.selectors.caption));
                  (a.innerHTML = i),
                    this.elements.captions.appendChild(a),
                    L.call(this, this.media, "cuechange");
                }
              } else this.debug.warn("updateCues: Invalid input", e);
            else this.debug.warn("No captions element to render to");
        },
      },
      Ae = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: "16:9",
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.5.2/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
        },
        loop: { active: !1 },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] },
        keyboard: { focused: !0, global: !1 },
        tooltips: { controls: !1, seek: !0 },
        captions: { active: !1, language: "auto", update: !1 },
        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
        storage: { enabled: !0, key: "plyr" },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Restart",
          rewind: "Rewind {seektime}s",
          play: "Play",
          pause: "Pause",
          fastForward: "Forward {seektime}s",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Mute",
          unmute: "Unmute",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Enter fullscreen",
          exitFullscreen: "Exit fullscreen",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Settings",
          menuBack: "Go back to previous menu",
          speed: "Speed",
          normal: "Normal",
          quality: "Quality",
          loop: "Loop",
          start: "Start",
          end: "End",
          all: "All",
          reset: "Reset",
          disabled: "Disabled",
          enabled: "Enabled",
          advertisement: "Ad",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD",
          },
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/v2/video/{0}.json",
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet",
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
          },
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null,
        },
        events: [
          "ended",
          "progress",
          "stalled",
          "playing",
          "waiting",
          "canplay",
          "canplaythrough",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "timeupdate",
          "volumechange",
          "play",
          "pause",
          "error",
          "seeking",
          "seeked",
          "emptied",
          "ratechange",
          "cuechange",
          "download",
          "enterfullscreen",
          "exitfullscreen",
          "captionsenabled",
          "captionsdisabled",
          "languagechange",
          "controlshidden",
          "controlsshown",
          "ready",
          "statechange",
          "qualitychange",
          "adsloaded",
          "adscontentpause",
          "adscontentresume",
          "adstarted",
          "adsmidpoint",
          "adscomplete",
          "adsallcomplete",
          "adsimpression",
          "adsclick",
        ],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: { container: null, wrapper: ".plyr__controls" },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display",
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption",
          menu: { quality: ".js-plyr__menu__list--quality" },
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isIos: "plyr--is-ios",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: { time: "plyr__time" },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open",
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active",
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback",
          },
          pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active",
          },
          tabFocus: "plyr__tab-focus",
          previewThumbnails: {
            thumbContainer: "plyr__preview-thumb",
            thumbContainerShown: "plyr__preview-thumb--is-shown",
            imageContainer: "plyr__preview-thumb__image-container",
            timeContainer: "plyr__preview-thumb__time-container",
            scrubbingContainer: "plyr__preview-scrubbing",
            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
          },
        },
        attributes: {
          embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" },
        },
        keys: { google: null },
        ads: { enabled: !1, publisherId: "", tagUrl: "" },
        previewThumbnails: { enabled: !1, src: "" },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
        },
        youtube: {
          noCookie: !1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
      },
      Ee = "picture-in-picture",
      Se = "inline",
      Pe = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      Ne = { audio: "audio", video: "video" };
    var Me = function () {},
      xe = (function () {
        function t() {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          e(this, t),
            (this.enabled = window.console && n),
            this.enabled && this.log("Debugging enabled");
        }
        return (
          n(t, [
            {
              key: "log",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.log, console)
                  : Me;
              },
            },
            {
              key: "warn",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.warn, console)
                  : Me;
              },
            },
            {
              key: "error",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.error, console)
                  : Me;
              },
            },
          ]),
          t
        );
      })();
    function Le() {
      if (this.enabled) {
        var e = this.player.elements.buttons.fullscreen;
        E.element(e) && (e.pressed = this.active),
          L.call(
            this.player,
            this.target,
            this.active ? "enterfullscreen" : "exitfullscreen",
            !0,
          ),
          Z.isIos ||
            function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              if (E.element(e)) {
                var n = z.call(
                    this,
                    "button:not(:disabled), input:not(:disabled), [tabindex]",
                  ),
                  i = n[0],
                  a = n[n.length - 1];
                P.call(
                  this,
                  this.elements.container,
                  "keydown",
                  function (e) {
                    if ("Tab" === e.key && 9 === e.keyCode) {
                      var t = document.activeElement;
                      t !== a || e.shiftKey
                        ? t === i &&
                          e.shiftKey &&
                          (a.focus(), e.preventDefault())
                        : (i.focus(), e.preventDefault());
                    }
                  },
                  t,
                  !1,
                );
              }
            }.call(this.player, this.target, this.active);
      }
    }
    function Ie() {
      var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (
        (t
          ? (this.scrollPosition = {
              x: window.scrollX || 0,
              y: window.scrollY || 0,
            })
          : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
        (document.body.style.overflow = t ? "hidden" : ""),
        B(this.target, this.player.config.classNames.fullscreen.fallback, t),
        Z.isIos)
      ) {
        var n = document.head.querySelector('meta[name="viewport"]'),
          i = "viewport-fit=cover";
        n ||
          (n = document.createElement("meta")).setAttribute("name", "viewport");
        var a = E.string(n.content) && n.content.includes(i);
        t
          ? ((this.cleanupViewport = !a), a || (n.content += ",".concat(i)))
          : this.cleanupViewport &&
            (n.content = n.content
              .split(",")
              .filter(function (e) {
                return e.trim() !== i;
              })
              .join(",")),
          setTimeout(function () {
            return $(e.target);
          }, 100);
      }
      Le.call(this);
    }
    var _e = (function () {
      function t(n) {
        var i = this;
        e(this, t),
          (this.player = n),
          (this.prefix = t.prefix),
          (this.property = t.property),
          (this.scrollPosition = { x: 0, y: 0 }),
          (this.forceFallback = "force" === n.config.fullscreen.fallback),
          N.call(
            this.player,
            document,
            "ms" === this.prefix
              ? "MSFullscreenChange"
              : "".concat(this.prefix, "fullscreenchange"),
            function () {
              Le.call(i);
            },
          ),
          N.call(
            this.player,
            this.player.elements.container,
            "dblclick",
            function (e) {
              (E.element(i.player.elements.controls) &&
                i.player.elements.controls.contains(e.target)) ||
                i.toggle();
            },
          ),
          this.update();
      }
      return (
        n(
          t,
          [
            {
              key: "update",
              value: function () {
                var e;
                this.enabled
                  ? ((e = this.forceFallback
                      ? "Fallback (forced)"
                      : t.native
                      ? "Native"
                      : "Fallback"),
                    this.player.debug.log("".concat(e, " fullscreen enabled")))
                  : this.player.debug.log(
                      "Fullscreen not supported and fallback disabled",
                    );
                B(
                  this.player.elements.container,
                  this.player.config.classNames.fullscreen.enabled,
                  this.enabled,
                );
              },
            },
            {
              key: "enter",
              value: function () {
                this.enabled &&
                  (Z.isIos && this.player.config.fullscreen.iosNative
                    ? this.target.webkitEnterFullscreen()
                    : !t.native || this.forceFallback
                    ? Ie.call(this, !0)
                    : this.prefix
                    ? E.empty(this.prefix) ||
                      this.target[
                        "".concat(this.prefix, "Request").concat(this.property)
                      ]()
                    : this.target.requestFullscreen());
              },
            },
            {
              key: "exit",
              value: function () {
                if (this.enabled)
                  if (Z.isIos && this.player.config.fullscreen.iosNative)
                    this.target.webkitExitFullscreen(), this.player.play();
                  else if (!t.native || this.forceFallback) Ie.call(this, !1);
                  else if (this.prefix) {
                    if (!E.empty(this.prefix)) {
                      var e = "moz" === this.prefix ? "Cancel" : "Exit";
                      document[
                        "".concat(this.prefix).concat(e).concat(this.property)
                      ]();
                    }
                  } else
                    (document.cancelFullScreen || document.exitFullscreen).call(
                      document,
                    );
              },
            },
            {
              key: "toggle",
              value: function () {
                this.active ? this.exit() : this.enter();
              },
            },
            {
              key: "usingNative",
              get: function () {
                return t.native && !this.forceFallback;
              },
            },
            {
              key: "enabled",
              get: function () {
                return (
                  (t.native || this.player.config.fullscreen.fallback) &&
                  this.player.config.fullscreen.enabled &&
                  this.player.supported.ui &&
                  this.player.isVideo
                );
              },
            },
            {
              key: "active",
              get: function () {
                return (
                  !!this.enabled &&
                  (!t.native || this.forceFallback
                    ? V(
                        this.target,
                        this.player.config.classNames.fullscreen.fallback,
                      )
                    : (this.prefix
                        ? document[
                            ""
                              .concat(this.prefix)
                              .concat(this.property, "Element")
                          ]
                        : document.fullscreenElement) === this.target)
                );
              },
            },
            {
              key: "target",
              get: function () {
                return Z.isIos && this.player.config.fullscreen.iosNative
                  ? this.player.media
                  : this.player.elements.container;
              },
            },
          ],
          [
            {
              key: "native",
              get: function () {
                return !!(
                  document.fullscreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.msFullscreenEnabled
                );
              },
            },
            {
              key: "prefix",
              get: function () {
                if (E.function(document.exitFullscreen)) return "";
                var e = "";
                return (
                  ["webkit", "moz", "ms"].some(function (t) {
                    return (
                      !(
                        !E.function(document["".concat(t, "ExitFullscreen")]) &&
                        !E.function(document["".concat(t, "CancelFullScreen")])
                      ) && ((e = t), !0)
                    );
                  }),
                  e
                );
              },
            },
            {
              key: "property",
              get: function () {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
              },
            },
          ],
        ),
        t
      );
    })();
    function Oe(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new Promise(function (n, i) {
        var a = new Image(),
          s = function () {
            delete a.onload, delete a.onerror, (a.naturalWidth >= t ? n : i)(a);
          };
        Object.assign(a, { onload: s, onerror: s, src: e });
      });
    }
    var je = {
      addStyleHook: function () {
        B(
          this.elements.container,
          this.config.selectors.container.replace(".", ""),
          !0,
        ),
          B(
            this.elements.container,
            this.config.classNames.uiSupported,
            this.supported.ui,
          );
      },
      toggleNativeControls: function () {
        arguments.length > 0 &&
        void 0 !== arguments[0] &&
        arguments[0] &&
        this.isHTML5
          ? this.media.setAttribute("controls", "")
          : this.media.removeAttribute("controls");
      },
      build: function () {
        var e = this;
        if ((this.listeners.media(), !this.supported.ui))
          return (
            this.debug.warn(
              "Basic support only for "
                .concat(this.provider, " ")
                .concat(this.type),
            ),
            void je.toggleNativeControls.call(this, !0)
          );
        E.element(this.elements.controls) ||
          (ke.inject.call(this), this.listeners.controls()),
          je.toggleNativeControls.call(this),
          this.isHTML5 && Ce.setup.call(this),
          (this.volume = null),
          (this.muted = null),
          (this.speed = null),
          (this.loop = null),
          (this.quality = null),
          ke.updateVolume.call(this),
          ke.timeUpdate.call(this),
          je.checkPlaying.call(this),
          B(
            this.elements.container,
            this.config.classNames.pip.supported,
            te.pip && this.isHTML5 && this.isVideo,
          ),
          B(
            this.elements.container,
            this.config.classNames.airplay.supported,
            te.airplay && this.isHTML5,
          ),
          B(this.elements.container, this.config.classNames.isIos, Z.isIos),
          B(
            this.elements.container,
            this.config.classNames.isTouch,
            this.touch,
          ),
          (this.ready = !0),
          setTimeout(function () {
            L.call(e, e.media, "ready");
          }, 0),
          je.setTitle.call(this),
          this.poster &&
            je.setPoster.call(this, this.poster, !1).catch(function () {}),
          this.config.duration && ke.durationUpdate.call(this);
      },
      setTitle: function () {
        var e = he("play", this.config);
        if (
          (E.string(this.config.title) &&
            !E.empty(this.config.title) &&
            (e += ", ".concat(this.config.title)),
          Array.from(this.elements.buttons.play || []).forEach(function (t) {
            t.setAttribute("aria-label", e);
          }),
          this.isEmbed)
        ) {
          var t = W.call(this, "iframe");
          if (!E.element(t)) return;
          var n = E.empty(this.config.title) ? "video" : this.config.title,
            i = he("frameTitle", this.config);
          t.setAttribute("title", i.replace("{title}", n));
        }
      },
      togglePoster: function (e) {
        B(this.elements.container, this.config.classNames.posterEnabled, e);
      },
      setPoster: function (e) {
        var t = this;
        return (arguments.length > 1 &&
          void 0 !== arguments[1] &&
          !arguments[1]) ||
          !this.poster
          ? (this.media.setAttribute("poster", e),
            function () {
              var e = this;
              return new Promise(function (t) {
                return e.ready
                  ? setTimeout(t, 0)
                  : N.call(e, e.elements.container, "ready", t);
              }).then(function () {});
            }
              .call(this)
              .then(function () {
                return Oe(e);
              })
              .catch(function (n) {
                throw (e === t.poster && je.togglePoster.call(t, !1), n);
              })
              .then(function () {
                if (e !== t.poster)
                  throw new Error(
                    "setPoster cancelled by later call to setPoster",
                  );
              })
              .then(function () {
                return (
                  Object.assign(t.elements.poster.style, {
                    backgroundImage: "url('".concat(e, "')"),
                    backgroundSize: "",
                  }),
                  je.togglePoster.call(t, !0),
                  e
                );
              }))
          : Promise.reject(new Error("Poster already set"));
      },
      checkPlaying: function (e) {
        var t = this;
        B(
          this.elements.container,
          this.config.classNames.playing,
          this.playing,
        ),
          B(
            this.elements.container,
            this.config.classNames.paused,
            this.paused,
          ),
          B(
            this.elements.container,
            this.config.classNames.stopped,
            this.stopped,
          ),
          Array.from(this.elements.buttons.play || []).forEach(function (e) {
            e.pressed = t.playing;
          }),
          (E.event(e) && "timeupdate" === e.type) ||
            je.toggleControls.call(this);
      },
      checkLoading: function (e) {
        var t = this;
        (this.loading = ["stalled", "waiting"].includes(e.type)),
          clearTimeout(this.timers.loading),
          (this.timers.loading = setTimeout(
            function () {
              B(t.elements.container, t.config.classNames.loading, t.loading),
                je.toggleControls.call(t);
            },
            this.loading ? 250 : 0,
          ));
      },
      toggleControls: function (e) {
        var t = this.elements.controls;
        if (t && this.config.hideControls) {
          var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
          this.toggleControls(
            Boolean(
              e || this.loading || this.paused || t.pressed || t.hover || n,
            ),
          );
        }
      },
    };
    function qe(e) {
      var t = e;
      E.string(t) || E.nullOrUndefined(this.embed) || (t = this.embed.ratio),
        E.string(t) || (t = this.config.ratio);
      var n = a(t.split(":").map(Number), 2),
        i = (100 / n[0]) * n[1];
      if (
        ((this.elements.wrapper.style.paddingBottom = "".concat(i, "%")),
        this.isVimeo && this.supported.ui)
      ) {
        var s = (240 - i) / 4.8;
        this.media.style.transform = "translateY(-".concat(s, "%)");
      }
      return { padding: i, ratio: t };
    }
    var De = (function () {
      function t(n) {
        e(this, t),
          (this.player = n),
          (this.lastKey = null),
          (this.focusTimer = null),
          (this.lastKeyDown = null),
          (this.handleKey = this.handleKey.bind(this)),
          (this.toggleMenu = this.toggleMenu.bind(this)),
          (this.setTabFocus = this.setTabFocus.bind(this)),
          (this.firstTouch = this.firstTouch.bind(this));
      }
      return (
        n(t, [
          {
            key: "handleKey",
            value: function (e) {
              var t = this.player,
                n = t.elements,
                i = e.keyCode ? e.keyCode : e.which,
                a = "keydown" === e.type,
                s = a && i === this.lastKey;
              if (
                !(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
                E.number(i)
              ) {
                if (a) {
                  var o = document.activeElement;
                  if (E.element(o)) {
                    var r = t.config.selectors.editable;
                    if (o !== n.inputs.seek && U(o, r)) return;
                    if (32 === e.which && U(o, 'button, [role^="menuitem"]'))
                      return;
                  }
                  switch (
                    ([
                      32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57,
                      67, 70, 73, 75, 76, 77, 79,
                    ].includes(i) && (e.preventDefault(), e.stopPropagation()),
                    i)
                  ) {
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                      s || (t.currentTime = (t.duration / 10) * (i - 48));
                      break;
                    case 32:
                    case 75:
                      s || t.togglePlay();
                      break;
                    case 38:
                      t.increaseVolume(0.1);
                      break;
                    case 40:
                      t.decreaseVolume(0.1);
                      break;
                    case 77:
                      s || (t.muted = !t.muted);
                      break;
                    case 39:
                      t.forward();
                      break;
                    case 37:
                      t.rewind();
                      break;
                    case 70:
                      t.fullscreen.toggle();
                      break;
                    case 67:
                      s || t.toggleCaptions();
                      break;
                    case 76:
                      t.loop = !t.loop;
                  }
                  27 === i &&
                    !t.fullscreen.usingNative &&
                    t.fullscreen.active &&
                    t.fullscreen.toggle(),
                    (this.lastKey = i);
                } else this.lastKey = null;
              }
            },
          },
          {
            key: "toggleMenu",
            value: function (e) {
              ke.toggleMenu.call(this.player, e);
            },
          },
          {
            key: "firstTouch",
            value: function () {
              var e = this.player,
                t = e.elements;
              (e.touch = !0), B(t.container, e.config.classNames.isTouch, !0);
            },
          },
          {
            key: "setTabFocus",
            value: function (e) {
              var t = this.player,
                n = t.elements;
              if (
                (clearTimeout(this.focusTimer),
                "keydown" !== e.type || 9 === e.which)
              ) {
                "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                var i,
                  a = e.timeStamp - this.lastKeyDown <= 20;
                if ("focus" !== e.type || a)
                  (i = t.config.classNames.tabFocus),
                    B(z.call(t, ".".concat(i)), i, !1),
                    (this.focusTimer = setTimeout(function () {
                      var e = document.activeElement;
                      n.container.contains(e) &&
                        B(
                          document.activeElement,
                          t.config.classNames.tabFocus,
                          !0,
                        );
                    }, 10));
              }
            },
          },
          {
            key: "global",
            value: function () {
              var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                t = this.player;
              t.config.keyboard.global &&
                P.call(t, window, "keydown keyup", this.handleKey, e, !1),
                P.call(t, document.body, "click", this.toggleMenu, e),
                x.call(t, document.body, "touchstart", this.firstTouch),
                P.call(
                  t,
                  document.body,
                  "keydown focus blur",
                  this.setTabFocus,
                  e,
                  !1,
                  !0,
                );
            },
          },
          {
            key: "container",
            value: function () {
              var e = this.player,
                t = e.config,
                n = e.elements,
                i = e.timers;
              !t.keyboard.global &&
                t.keyboard.focused &&
                N.call(e, n.container, "keydown keyup", this.handleKey, !1),
                N.call(
                  e,
                  n.container,
                  "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                  function (t) {
                    var a = n.controls;
                    a &&
                      "enterfullscreen" === t.type &&
                      ((a.pressed = !1), (a.hover = !1));
                    var s = 0;
                    ["touchstart", "touchmove", "mousemove"].includes(t.type) &&
                      (je.toggleControls.call(e, !0),
                      (s = e.touch ? 3e3 : 2e3)),
                      clearTimeout(i.controls),
                      (i.controls = setTimeout(function () {
                        return je.toggleControls.call(e, !1);
                      }, s));
                  },
                );
              var s = function (t) {
                  if (!t) return qe.call(e);
                  var i = n.container.getBoundingClientRect(),
                    a = i.width,
                    s = i.height;
                  return qe.call(e, "".concat(a, ":").concat(s));
                },
                o = function () {
                  window.clearTimeout(i.resized),
                    (i.resized = window.setTimeout(s, 50));
                };
              N.call(
                e,
                n.container,
                "enterfullscreen exitfullscreen",
                function (t) {
                  var i = e.fullscreen,
                    r = i.target,
                    l = i.usingNative;
                  if (e.isEmbed && r === n.container) {
                    var c = "enterfullscreen" === t.type,
                      u = s(c);
                    u.padding;
                    !(function (t, n, i) {
                      if (e.isVimeo) {
                        var s = e.elements.wrapper.firstChild,
                          o = a(t.split(":").map(Number), 2)[1],
                          r = a(e.embed.ratio.split(":").map(Number), 2),
                          l = r[0],
                          c = r[1];
                        (s.style.maxWidth = i
                          ? "".concat((o / c) * l, "px")
                          : null),
                          (s.style.margin = i ? "0 auto" : null);
                      }
                    })(u.ratio, 0, c),
                      l ||
                        (c
                          ? N.call(e, window, "resize", o)
                          : M.call(e, window, "resize", o));
                  }
                },
              );
            },
          },
          {
            key: "media",
            value: function () {
              var e = this,
                t = this.player,
                n = t.elements;
              if (
                (N.call(t, t.media, "timeupdate seeking seeked", function (e) {
                  return ke.timeUpdate.call(t, e);
                }),
                N.call(
                  t,
                  t.media,
                  "durationchange loadeddata loadedmetadata",
                  function (e) {
                    return ke.durationUpdate.call(t, e);
                  },
                ),
                N.call(t, t.media, "canplay loadeddata", function () {
                  R(n.volume, !t.hasAudio), R(n.buttons.mute, !t.hasAudio);
                }),
                N.call(t, t.media, "ended", function () {
                  t.isHTML5 && t.isVideo && t.config.resetOnEnd && t.restart();
                }),
                N.call(
                  t,
                  t.media,
                  "progress playing seeking seeked",
                  function (e) {
                    return ke.updateProgress.call(t, e);
                  },
                ),
                N.call(t, t.media, "volumechange", function (e) {
                  return ke.updateVolume.call(t, e);
                }),
                N.call(
                  t,
                  t.media,
                  "playing play pause ended emptied timeupdate",
                  function (e) {
                    return je.checkPlaying.call(t, e);
                  },
                ),
                N.call(
                  t,
                  t.media,
                  "waiting canplay seeked playing",
                  function (e) {
                    return je.checkLoading.call(t, e);
                  },
                ),
                t.supported.ui && t.config.clickToPlay && !t.isAudio)
              ) {
                var i = W.call(t, ".".concat(t.config.classNames.video));
                if (!E.element(i)) return;
                N.call(t, n.container, "click", function (a) {
                  ([n.container, i].includes(a.target) ||
                    i.contains(a.target)) &&
                    ((t.touch && t.config.hideControls) ||
                      (t.ended
                        ? (e.proxy(a, t.restart, "restart"),
                          e.proxy(a, t.play, "play"))
                        : e.proxy(a, t.togglePlay, "play")));
                });
              }
              t.supported.ui &&
                t.config.disableContextMenu &&
                N.call(
                  t,
                  n.wrapper,
                  "contextmenu",
                  function (e) {
                    e.preventDefault();
                  },
                  !1,
                ),
                N.call(t, t.media, "volumechange", function () {
                  t.storage.set({ volume: t.volume, muted: t.muted });
                }),
                N.call(t, t.media, "ratechange", function () {
                  ke.updateSetting.call(t, "speed"),
                    t.storage.set({ speed: t.speed });
                }),
                N.call(t, t.media, "qualitychange", function (e) {
                  ke.updateSetting.call(t, "quality", null, e.detail.quality);
                }),
                N.call(t, t.media, "ready qualitychange", function () {
                  ke.setDownloadLink.call(t);
                });
              var a = t.config.events.concat(["keyup", "keydown"]).join(" ");
              N.call(t, t.media, a, function (e) {
                var i = e.detail,
                  a = void 0 === i ? {} : i;
                "error" === e.type && (a = t.media.error),
                  L.call(t, n.container, e.type, !0, a);
              });
            },
          },
          {
            key: "proxy",
            value: function (e, t, n) {
              var i = this.player,
                a = i.config.listeners[n],
                s = !0;
              E.function(a) && (s = a.call(i, e)),
                s && E.function(t) && t.call(i, e);
            },
          },
          {
            key: "bind",
            value: function (e, t, n, i) {
              var a = this,
                s =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4],
                o = this.player,
                r = o.config.listeners[i],
                l = E.function(r);
              N.call(
                o,
                e,
                t,
                function (e) {
                  return a.proxy(e, n, i);
                },
                s && !l,
              );
            },
          },
          {
            key: "controls",
            value: function () {
              var e = this,
                t = this.player,
                n = t.elements,
                i = Z.isIE ? "change" : "input";
              if (
                (n.buttons.play &&
                  Array.from(n.buttons.play).forEach(function (n) {
                    e.bind(n, "click", t.togglePlay, "play");
                  }),
                this.bind(n.buttons.restart, "click", t.restart, "restart"),
                this.bind(n.buttons.rewind, "click", t.rewind, "rewind"),
                this.bind(
                  n.buttons.fastForward,
                  "click",
                  t.forward,
                  "fastForward",
                ),
                this.bind(
                  n.buttons.mute,
                  "click",
                  function () {
                    t.muted = !t.muted;
                  },
                  "mute",
                ),
                this.bind(n.buttons.captions, "click", function () {
                  return t.toggleCaptions();
                }),
                this.bind(
                  n.buttons.download,
                  "click",
                  function () {
                    L.call(t, t.media, "download");
                  },
                  "download",
                ),
                this.bind(
                  n.buttons.fullscreen,
                  "click",
                  function () {
                    t.fullscreen.toggle();
                  },
                  "fullscreen",
                ),
                this.bind(
                  n.buttons.pip,
                  "click",
                  function () {
                    t.pip = "toggle";
                  },
                  "pip",
                ),
                this.bind(n.buttons.airplay, "click", t.airplay, "airplay"),
                this.bind(n.buttons.settings, "click", function (e) {
                  e.stopPropagation(), ke.toggleMenu.call(t, e);
                }),
                this.bind(
                  n.buttons.settings,
                  "keyup",
                  function (e) {
                    var n = e.which;
                    [13, 32].includes(n) &&
                      (13 !== n
                        ? (e.preventDefault(),
                          e.stopPropagation(),
                          ke.toggleMenu.call(t, e))
                        : ke.focusFirstMenuItem.call(t, null, !0));
                  },
                  null,
                  !1,
                ),
                this.bind(n.settings.menu, "keydown", function (e) {
                  27 === e.which && ke.toggleMenu.call(t, e);
                }),
                this.bind(n.inputs.seek, "mousedown mousemove", function (e) {
                  var t = n.progress.getBoundingClientRect(),
                    i = (100 / t.width) * (e.pageX - t.left);
                  e.currentTarget.setAttribute("seek-value", i);
                }),
                this.bind(
                  n.inputs.seek,
                  "mousedown mouseup keydown keyup touchstart touchend",
                  function (e) {
                    var n = e.currentTarget,
                      i = e.keyCode ? e.keyCode : e.which;
                    if (!E.keyboardEvent(e) || 39 === i || 37 === i) {
                      t.lastSeekTime = Date.now();
                      var a = n.hasAttribute("play-on-seeked"),
                        s = ["mouseup", "touchend", "keyup"].includes(e.type);
                      a && s
                        ? (n.removeAttribute("play-on-seeked"), t.play())
                        : !s &&
                          t.playing &&
                          (n.setAttribute("play-on-seeked", ""), t.pause());
                    }
                  },
                ),
                Z.isIos)
              ) {
                var s = z.call(t, 'input[type="range"]');
                Array.from(s).forEach(function (t) {
                  return e.bind(t, i, function (e) {
                    return $(e.target);
                  });
                });
              }
              this.bind(
                n.inputs.seek,
                i,
                function (e) {
                  var n = e.currentTarget,
                    i = n.getAttribute("seek-value");
                  E.empty(i) && (i = n.value),
                    n.removeAttribute("seek-value"),
                    (t.currentTime = (i / n.max) * t.duration);
                },
                "seek",
              ),
                this.bind(
                  n.progress,
                  "mouseenter mouseleave mousemove",
                  function (e) {
                    return ke.updateSeekTooltip.call(t, e);
                  },
                ),
                this.bind(n.progress, "mousemove touchmove", function (e) {
                  var n = t.previewThumbnails;
                  n && n.loaded && n.startMove(e);
                }),
                this.bind(n.progress, "mouseleave click", function () {
                  var e = t.previewThumbnails;
                  e && e.loaded && e.endMove(!1, !0);
                }),
                this.bind(n.progress, "mousedown touchstart", function (e) {
                  var n = t.previewThumbnails;
                  n && n.loaded && n.startScrubbing(e);
                }),
                this.bind(n.progress, "mouseup touchend", function (e) {
                  var n = t.previewThumbnails;
                  n && n.loaded && n.endScrubbing(e);
                }),
                Z.isWebkit &&
                  Array.from(z.call(t, 'input[type="range"]')).forEach(
                    function (n) {
                      e.bind(n, "input", function (e) {
                        return ke.updateRangeFill.call(t, e.target);
                      });
                    },
                  ),
                t.config.toggleInvert &&
                  !E.element(n.display.duration) &&
                  this.bind(n.display.currentTime, "click", function () {
                    0 !== t.currentTime &&
                      ((t.config.invertTime = !t.config.invertTime),
                      ke.timeUpdate.call(t));
                  }),
                this.bind(
                  n.inputs.volume,
                  i,
                  function (e) {
                    t.volume = e.target.value;
                  },
                  "volume",
                ),
                this.bind(n.controls, "mouseenter mouseleave", function (e) {
                  n.controls.hover = !t.touch && "mouseenter" === e.type;
                }),
                this.bind(
                  n.controls,
                  "mousedown mouseup touchstart touchend touchcancel",
                  function (e) {
                    n.controls.pressed = ["mousedown", "touchstart"].includes(
                      e.type,
                    );
                  },
                ),
                this.bind(n.controls, "focusin", function () {
                  var n = t.config,
                    i = t.elements,
                    a = t.timers;
                  B(i.controls, n.classNames.noTransition, !0),
                    je.toggleControls.call(t, !0),
                    setTimeout(function () {
                      B(i.controls, n.classNames.noTransition, !1);
                    }, 0);
                  var s = e.touch ? 3e3 : 4e3;
                  clearTimeout(a.controls),
                    (a.controls = setTimeout(function () {
                      return je.toggleControls.call(t, !1);
                    }, s));
                }),
                this.bind(
                  n.inputs.volume,
                  "wheel",
                  function (e) {
                    var n = e.webkitDirectionInvertedFromDevice,
                      i = a(
                        [e.deltaX, -e.deltaY].map(function (e) {
                          return n ? -e : e;
                        }),
                        2,
                      ),
                      s = i[0],
                      o = i[1],
                      r = Math.sign(Math.abs(s) > Math.abs(o) ? s : o);
                    t.increaseVolume(r / 50);
                    var l = t.media.volume;
                    ((1 === r && l < 1) || (-1 === r && l > 0)) &&
                      e.preventDefault();
                  },
                  "volume",
                  !1,
                );
            },
          },
        ]),
        t
      );
    })();
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self && self;
    var Fe,
      He =
        ((function (e, t) {
          e.exports = (function () {
            var e = function () {},
              t = {},
              n = {},
              i = {};
            function a(e, t) {
              if (e) {
                var a = i[e];
                if (((n[e] = t), a))
                  for (; a.length; ) a[0](e, t), a.splice(0, 1);
              }
            }
            function s(t, n) {
              t.call && (t = { success: t }),
                n.length ? (t.error || e)(n) : (t.success || e)(t);
            }
            function o(t, n, i, a) {
              var s,
                r,
                l = document,
                c = i.async,
                u = (i.numRetries || 0) + 1,
                d = i.before || e,
                h = t.replace(/^(css|img)!/, "");
              (a = a || 0),
                /(^css!|\.css$)/.test(t)
                  ? (((r = l.createElement("link")).rel = "stylesheet"),
                    (r.href = h),
                    (s = "hideFocus" in r) &&
                      r.relList &&
                      ((s = 0), (r.rel = "preload"), (r.as = "style")))
                  : /(^img!|\.(png|gif|jpg|svg)$)/.test(t)
                  ? ((r = l.createElement("img")).src = h)
                  : (((r = l.createElement("script")).src = t),
                    (r.async = void 0 === c || c)),
                (r.onload =
                  r.onerror =
                  r.onbeforeload =
                    function (e) {
                      var l = e.type[0];
                      if (s)
                        try {
                          r.sheet.cssText.length || (l = "e");
                        } catch (e) {
                          18 != e.code && (l = "e");
                        }
                      if ("e" == l) {
                        if ((a += 1) < u) return o(t, n, i, a);
                      } else if ("preload" == r.rel && "style" == r.as)
                        return (r.rel = "stylesheet");
                      n(t, l, e.defaultPrevented);
                    }),
                !1 !== d(t, r) && l.head.appendChild(r);
            }
            function r(e, n, i) {
              var r, l;
              if ((n && n.trim && (r = n), (l = (r ? i : n) || {}), r)) {
                if (r in t) throw "LoadJS";
                t[r] = !0;
              }
              function c(t, n) {
                !(function (e, t, n) {
                  var i,
                    a,
                    s = (e = e.push ? e : [e]).length,
                    r = s,
                    l = [];
                  for (
                    i = function (e, n, i) {
                      if (("e" == n && l.push(e), "b" == n)) {
                        if (!i) return;
                        l.push(e);
                      }
                      --s || t(l);
                    },
                      a = 0;
                    a < r;
                    a++
                  )
                    o(e[a], i, n);
                })(
                  e,
                  function (e) {
                    s(l, e), t && s({ success: t, error: n }, e), a(r, e);
                  },
                  l,
                );
              }
              if (l.returnPromise) return new Promise(c);
              c();
            }
            return (
              (r.ready = function (e, t) {
                return (
                  (function (e, t) {
                    e = e.push ? e : [e];
                    var a,
                      s,
                      o,
                      r = [],
                      l = e.length,
                      c = l;
                    for (
                      a = function (e, n) {
                        n.length && r.push(e), --c || t(r);
                      };
                      l--;

                    )
                      (s = e[l]),
                        (o = n[s]) ? a(s, o) : (i[s] = i[s] || []).push(a);
                  })(e, function (e) {
                    s(t, e);
                  }),
                  r
                );
              }),
              (r.done = function (e) {
                a(e, []);
              }),
              (r.reset = function () {
                (t = {}), (n = {}), (i = {});
              }),
              (r.isDefined = function (e) {
                return e in t;
              }),
              r
            );
          })();
        })((Fe = { exports: {} }), Fe.exports),
        Fe.exports);
    function Re(e) {
      return new Promise(function (t, n) {
        He(e, { success: t, error: n });
      });
    }
    function Be(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          L.call(this, this.media, e ? "play" : "pause"));
    }
    var Ve = {
      setup: function () {
        var e = this;
        B(this.elements.wrapper, this.config.classNames.embed, !0),
          qe.call(this),
          E.object(window.Vimeo)
            ? Ve.ready.call(this)
            : Re(this.config.urls.vimeo.sdk)
                .then(function () {
                  Ve.ready.call(e);
                })
                .catch(function (t) {
                  e.debug.warn("Vimeo API failed to load", t);
                });
      },
      ready: function () {
        var e = this,
          t = this,
          n = t.config.vimeo,
          i = Te(
            se(
              {},
              {
                loop: t.config.loop.active,
                autoplay: t.autoplay,
                muted: t.muted,
                gesture: "media",
                playsinline: !this.config.fullscreen.iosNative,
              },
              n,
            ),
          ),
          s = t.media.getAttribute("src");
        E.empty(s) && (s = t.media.getAttribute(t.config.attributes.embed.id));
        var o,
          r =
            ((o = s),
            E.empty(o)
              ? null
              : E.number(Number(o))
              ? o
              : o.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
              ? RegExp.$2
              : o),
          l = O("iframe"),
          c = oe(t.config.urls.vimeo.iframe, r, i);
        l.setAttribute("src", c),
          l.setAttribute("allowfullscreen", ""),
          l.setAttribute("allowtransparency", ""),
          l.setAttribute("allow", "autoplay");
        var u = O("div", {
          poster: t.poster,
          class: t.config.classNames.embedContainer,
        });
        u.appendChild(l),
          (t.media = F(u, t.media)),
          pe(oe(t.config.urls.vimeo.api, r), "json").then(function (e) {
            if (!E.empty(e)) {
              var n = new URL(e[0].thumbnail_large);
              (n.pathname = "".concat(n.pathname.split("_")[0], ".jpg")),
                je.setPoster.call(t, n.href).catch(function () {});
            }
          }),
          (t.embed = new window.Vimeo.Player(l, {
            autopause: t.config.autopause,
            muted: t.muted,
          })),
          (t.media.paused = !0),
          (t.media.currentTime = 0),
          t.supported.ui && t.embed.disableTextTrack(),
          (t.media.play = function () {
            return Be.call(t, !0), t.embed.play();
          }),
          (t.media.pause = function () {
            return Be.call(t, !1), t.embed.pause();
          }),
          (t.media.stop = function () {
            t.pause(), (t.currentTime = 0);
          });
        var d = t.media.currentTime;
        Object.defineProperty(t.media, "currentTime", {
          get: function () {
            return d;
          },
          set: function (e) {
            var n = t.embed,
              i = t.media,
              a = t.paused,
              s = t.volume,
              o = a && !n.hasPlayed;
            (i.seeking = !0),
              L.call(t, i, "seeking"),
              Promise.resolve(o && n.setVolume(0))
                .then(function () {
                  return n.setCurrentTime(e);
                })
                .then(function () {
                  return o && n.pause();
                })
                .then(function () {
                  return o && n.setVolume(s);
                })
                .catch(function () {});
          },
        });
        var h = t.config.speed.selected;
        Object.defineProperty(t.media, "playbackRate", {
          get: function () {
            return h;
          },
          set: function (e) {
            t.embed
              .setPlaybackRate(e)
              .then(function () {
                (h = e), L.call(t, t.media, "ratechange");
              })
              .catch(function (e) {
                "Error" === e.name && ke.setSpeedMenu.call(t, []);
              });
          },
        });
        var m = t.config.volume;
        Object.defineProperty(t.media, "volume", {
          get: function () {
            return m;
          },
          set: function (e) {
            t.embed.setVolume(e).then(function () {
              (m = e), L.call(t, t.media, "volumechange");
            });
          },
        });
        var p = t.config.muted;
        Object.defineProperty(t.media, "muted", {
          get: function () {
            return p;
          },
          set: function (e) {
            var n = !!E.boolean(e) && e;
            t.embed.setVolume(n ? 0 : t.config.volume).then(function () {
              (p = n), L.call(t, t.media, "volumechange");
            });
          },
        });
        var f,
          g = t.config.loop;
        Object.defineProperty(t.media, "loop", {
          get: function () {
            return g;
          },
          set: function (e) {
            var n = E.boolean(e) ? e : t.config.loop.active;
            t.embed.setLoop(n).then(function () {
              g = n;
            });
          },
        }),
          t.embed
            .getVideoUrl()
            .then(function (e) {
              (f = e), ke.setDownloadLink.call(t);
            })
            .catch(function (t) {
              e.debug.warn(t);
            }),
          Object.defineProperty(t.media, "currentSrc", {
            get: function () {
              return f;
            },
          }),
          Object.defineProperty(t.media, "ended", {
            get: function () {
              return t.currentTime === t.duration;
            },
          }),
          Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(
            function (n) {
              var i = a(n, 2),
                s = i[0],
                o = i[1];
              (t.embed.ratio = "".concat(s, ":").concat(o)),
                qe.call(e, t.embed.ratio);
            },
          ),
          t.embed.setAutopause(t.config.autopause).then(function (e) {
            t.config.autopause = e;
          }),
          t.embed.getVideoTitle().then(function (n) {
            (t.config.title = n), je.setTitle.call(e);
          }),
          t.embed.getCurrentTime().then(function (e) {
            (d = e), L.call(t, t.media, "timeupdate");
          }),
          t.embed.getDuration().then(function (e) {
            (t.media.duration = e), L.call(t, t.media, "durationchange");
          }),
          t.embed.getTextTracks().then(function (e) {
            (t.media.textTracks = e), Ce.setup.call(t);
          }),
          t.embed.on("cuechange", function (e) {
            var n = e.cues,
              i = (void 0 === n ? [] : n).map(function (e) {
                return (
                  (t = e.text),
                  (n = document.createDocumentFragment()),
                  (i = document.createElement("div")),
                  n.appendChild(i),
                  (i.innerHTML = t),
                  n.firstChild.innerText
                );
                var t, n, i;
              });
            Ce.updateCues.call(t, i);
          }),
          t.embed.on("loaded", function () {
            (t.embed.getPaused().then(function (e) {
              Be.call(t, !e), e || L.call(t, t.media, "playing");
            }),
            E.element(t.embed.element) && t.supported.ui) &&
              t.embed.element.setAttribute("tabindex", -1);
          }),
          t.embed.on("play", function () {
            Be.call(t, !0), L.call(t, t.media, "playing");
          }),
          t.embed.on("pause", function () {
            Be.call(t, !1);
          }),
          t.embed.on("timeupdate", function (e) {
            (t.media.seeking = !1),
              (d = e.seconds),
              L.call(t, t.media, "timeupdate");
          }),
          t.embed.on("progress", function (e) {
            (t.media.buffered = e.percent),
              L.call(t, t.media, "progress"),
              1 === parseInt(e.percent, 10) &&
                L.call(t, t.media, "canplaythrough"),
              t.embed.getDuration().then(function (e) {
                e !== t.media.duration &&
                  ((t.media.duration = e),
                  L.call(t, t.media, "durationchange"));
              });
          }),
          t.embed.on("seeked", function () {
            (t.media.seeking = !1), L.call(t, t.media, "seeked");
          }),
          t.embed.on("ended", function () {
            (t.media.paused = !0), L.call(t, t.media, "ended");
          }),
          t.embed.on("error", function (e) {
            (t.media.error = e), L.call(t, t.media, "error");
          }),
          setTimeout(function () {
            return je.build.call(t);
          }, 0);
      },
    };
    function Ue(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          L.call(this, this.media, e ? "play" : "pause"));
    }
    var ze,
      We = {
        setup: function () {
          var e = this;
          B(this.elements.wrapper, this.config.classNames.embed, !0),
            qe.call(this),
            E.object(window.YT) && E.function(window.YT.Player)
              ? We.ready.call(this)
              : (Re(this.config.urls.youtube.sdk).catch(function (t) {
                  e.debug.warn("YouTube API failed to load", t);
                }),
                (window.onYouTubeReadyCallbacks =
                  window.onYouTubeReadyCallbacks || []),
                window.onYouTubeReadyCallbacks.push(function () {
                  We.ready.call(e);
                }),
                (window.onYouTubeIframeAPIReady = function () {
                  window.onYouTubeReadyCallbacks.forEach(function (e) {
                    e();
                  });
                }));
        },
        getTitle: function (e) {
          var t = this;
          if (E.function(this.embed.getVideoData)) {
            var n = this.embed.getVideoData().title;
            if (E.empty(n))
              return (this.config.title = n), void je.setTitle.call(this);
          }
          var i = this.config.keys.google;
          E.string(i) &&
            !E.empty(i) &&
            pe(oe(this.config.urls.youtube.api, e, i))
              .then(function (e) {
                E.object(e) &&
                  ((t.config.title = e.items[0].snippet.title),
                  je.setTitle.call(t));
              })
              .catch(function () {});
        },
        ready: function () {
          var e = this,
            t = e.media.getAttribute("id");
          if (E.empty(t) || !t.startsWith("youtube-")) {
            var n = e.media.getAttribute("src");
            E.empty(n) &&
              (n = e.media.getAttribute(this.config.attributes.embed.id));
            var i,
              a,
              s =
                ((i = n),
                E.empty(i)
                  ? null
                  : i.match(
                      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,
                    )
                  ? RegExp.$2
                  : i),
              o =
                ((a = e.provider),
                "".concat(a, "-").concat(Math.floor(1e4 * Math.random()))),
              r = O("div", { id: o, poster: e.poster });
            e.media = F(r, e.media);
            var l = function (e) {
              return "https://img.youtube.com/vi/"
                .concat(s, "/")
                .concat(e, "default.jpg");
            };
            Oe(l("maxres"), 121)
              .catch(function () {
                return Oe(l("sd"), 121);
              })
              .catch(function () {
                return Oe(l("hq"));
              })
              .then(function (t) {
                return je.setPoster.call(e, t.src);
              })
              .then(function (t) {
                t.includes("maxres") ||
                  (e.elements.poster.style.backgroundSize = "cover");
              })
              .catch(function () {});
            var c = e.config.youtube;
            e.embed = new window.YT.Player(o, {
              videoId: s,
              host: c.noCookie ? "https://www.youtube-nocookie.com" : void 0,
              playerVars: se(
                {},
                {
                  autoplay: e.config.autoplay ? 1 : 0,
                  hl: e.config.hl,
                  controls: e.supported.ui ? 0 : 1,
                  disablekb: 1,
                  playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                  cc_load_policy: e.captions.active ? 1 : 0,
                  cc_lang_pref: e.config.captions.language,
                  widget_referrer: window ? window.location.href : null,
                },
                c,
              ),
              events: {
                onError: function (t) {
                  if (!e.media.error) {
                    var n = t.data,
                      i =
                        {
                          2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                          5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                          100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                          101: "The owner of the requested video does not allow it to be played in embedded players.",
                          150: "The owner of the requested video does not allow it to be played in embedded players.",
                        }[n] || "An unknown error occured";
                    (e.media.error = { code: n, message: i }),
                      L.call(e, e.media, "error");
                  }
                },
                onPlaybackRateChange: function (t) {
                  var n = t.target;
                  (e.media.playbackRate = n.getPlaybackRate()),
                    L.call(e, e.media, "ratechange");
                },
                onReady: function (t) {
                  if (!E.function(e.media.play)) {
                    var n = t.target;
                    We.getTitle.call(e, s),
                      (e.media.play = function () {
                        Ue.call(e, !0), n.playVideo();
                      }),
                      (e.media.pause = function () {
                        Ue.call(e, !1), n.pauseVideo();
                      }),
                      (e.media.stop = function () {
                        n.stopVideo();
                      }),
                      (e.media.duration = n.getDuration()),
                      (e.media.paused = !0),
                      (e.media.currentTime = 0),
                      Object.defineProperty(e.media, "currentTime", {
                        get: function () {
                          return Number(n.getCurrentTime());
                        },
                        set: function (t) {
                          e.paused && !e.embed.hasPlayed && e.embed.mute(),
                            (e.media.seeking = !0),
                            L.call(e, e.media, "seeking"),
                            n.seekTo(t);
                        },
                      }),
                      Object.defineProperty(e.media, "playbackRate", {
                        get: function () {
                          return n.getPlaybackRate();
                        },
                        set: function (e) {
                          n.setPlaybackRate(e);
                        },
                      });
                    var i = e.config.volume;
                    Object.defineProperty(e.media, "volume", {
                      get: function () {
                        return i;
                      },
                      set: function (t) {
                        (i = t),
                          n.setVolume(100 * i),
                          L.call(e, e.media, "volumechange");
                      },
                    });
                    var a = e.config.muted;
                    Object.defineProperty(e.media, "muted", {
                      get: function () {
                        return a;
                      },
                      set: function (t) {
                        var i = E.boolean(t) ? t : a;
                        (a = i),
                          n[i ? "mute" : "unMute"](),
                          L.call(e, e.media, "volumechange");
                      },
                    }),
                      Object.defineProperty(e.media, "currentSrc", {
                        get: function () {
                          return n.getVideoUrl();
                        },
                      }),
                      Object.defineProperty(e.media, "ended", {
                        get: function () {
                          return e.currentTime === e.duration;
                        },
                      }),
                      (e.options.speed = n.getAvailablePlaybackRates()),
                      e.supported.ui && e.media.setAttribute("tabindex", -1),
                      L.call(e, e.media, "timeupdate"),
                      L.call(e, e.media, "durationchange"),
                      clearInterval(e.timers.buffering),
                      (e.timers.buffering = setInterval(function () {
                        (e.media.buffered = n.getVideoLoadedFraction()),
                          (null === e.media.lastBuffered ||
                            e.media.lastBuffered < e.media.buffered) &&
                            L.call(e, e.media, "progress"),
                          (e.media.lastBuffered = e.media.buffered),
                          1 === e.media.buffered &&
                            (clearInterval(e.timers.buffering),
                            L.call(e, e.media, "canplaythrough"));
                      }, 200)),
                      setTimeout(function () {
                        return je.build.call(e);
                      }, 50);
                  }
                },
                onStateChange: function (t) {
                  var n = t.target;
                  switch (
                    (clearInterval(e.timers.playing),
                    e.media.seeking &&
                      [1, 2].includes(t.data) &&
                      ((e.media.seeking = !1), L.call(e, e.media, "seeked")),
                    t.data)
                  ) {
                    case -1:
                      L.call(e, e.media, "timeupdate"),
                        (e.media.buffered = n.getVideoLoadedFraction()),
                        L.call(e, e.media, "progress");
                      break;
                    case 0:
                      Ue.call(e, !1),
                        e.media.loop
                          ? (n.stopVideo(), n.playVideo())
                          : L.call(e, e.media, "ended");
                      break;
                    case 1:
                      e.media.paused && !e.embed.hasPlayed
                        ? e.media.pause()
                        : (Ue.call(e, !0),
                          L.call(e, e.media, "playing"),
                          (e.timers.playing = setInterval(function () {
                            L.call(e, e.media, "timeupdate");
                          }, 50)),
                          e.media.duration !== n.getDuration() &&
                            ((e.media.duration = n.getDuration()),
                            L.call(e, e.media, "durationchange")));
                      break;
                    case 2:
                      e.muted || e.embed.unMute(), Ue.call(e, !1);
                  }
                  L.call(e, e.elements.container, "statechange", !1, {
                    code: t.data,
                  });
                },
              },
            });
          }
        },
      },
      Ke = {
        setup: function () {
          this.media
            ? (B(
                this.elements.container,
                this.config.classNames.type.replace("{0}", this.type),
                !0,
              ),
              B(
                this.elements.container,
                this.config.classNames.provider.replace("{0}", this.provider),
                !0,
              ),
              this.isEmbed &&
                B(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", "video"),
                  !0,
                ),
              this.isVideo &&
                ((this.elements.wrapper = O("div", {
                  class: this.config.classNames.video,
                })),
                I(this.media, this.elements.wrapper),
                (this.elements.poster = O("div", {
                  class: this.config.classNames.poster,
                })),
                this.elements.wrapper.appendChild(this.elements.poster)),
              this.isHTML5
                ? ne.extend.call(this)
                : this.isYouTube
                ? We.setup.call(this)
                : this.isVimeo && Ve.setup.call(this))
            : this.debug.warn("No media element found!");
        },
      },
      Ye = (function () {
        function t(n) {
          var i = this;
          e(this, t),
            (this.player = n),
            (this.config = n.config.ads),
            (this.playing = !1),
            (this.initialized = !1),
            (this.elements = { container: null, displayContainer: null }),
            (this.manager = null),
            (this.loader = null),
            (this.cuePoints = null),
            (this.events = {}),
            (this.safetyTimer = null),
            (this.countdownTimer = null),
            (this.managerPromise = new Promise(function (e, t) {
              i.on("loaded", e), i.on("error", t);
            })),
            this.load();
        }
        return (
          n(t, [
            {
              key: "load",
              value: function () {
                var e = this;
                this.enabled &&
                  (E.object(window.google) && E.object(window.google.ima)
                    ? this.ready()
                    : Re(this.player.config.urls.googleIMA.sdk)
                        .then(function () {
                          e.ready();
                        })
                        .catch(function () {
                          e.trigger(
                            "error",
                            new Error("Google IMA SDK failed to load"),
                          );
                        }));
              },
            },
            {
              key: "ready",
              value: function () {
                var e = this;
                this.startSafetyTimer(12e3, "ready()"),
                  this.managerPromise.then(function () {
                    e.clearSafetyTimer("onAdsManagerLoaded()");
                  }),
                  this.listeners(),
                  this.setupIMA();
              },
            },
            {
              key: "setupIMA",
              value: function () {
                (this.elements.container = O("div", {
                  class: this.player.config.classNames.ads,
                })),
                  this.player.elements.container.appendChild(
                    this.elements.container,
                  ),
                  google.ima.settings.setVpaidMode(
                    google.ima.ImaSdkSettings.VpaidMode.ENABLED,
                  ),
                  google.ima.settings.setLocale(
                    this.player.config.ads.language,
                  ),
                  google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                    this.player.config.playsinline,
                  ),
                  (this.elements.displayContainer =
                    new google.ima.AdDisplayContainer(
                      this.elements.container,
                      this.player.media,
                    )),
                  this.requestAds();
              },
            },
            {
              key: "requestAds",
              value: function () {
                var e = this,
                  t = this.player.elements.container;
                try {
                  (this.loader = new google.ima.AdsLoader(
                    this.elements.displayContainer,
                  )),
                    this.loader.addEventListener(
                      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                      function (t) {
                        return e.onAdsManagerLoaded(t);
                      },
                      !1,
                    ),
                    this.loader.addEventListener(
                      google.ima.AdErrorEvent.Type.AD_ERROR,
                      function (t) {
                        return e.onAdError(t);
                      },
                      !1,
                    );
                  var n = new google.ima.AdsRequest();
                  (n.adTagUrl = this.tagUrl),
                    (n.linearAdSlotWidth = t.offsetWidth),
                    (n.linearAdSlotHeight = t.offsetHeight),
                    (n.nonLinearAdSlotWidth = t.offsetWidth),
                    (n.nonLinearAdSlotHeight = t.offsetHeight),
                    (n.forceNonLinearFullSlot = !1),
                    n.setAdWillPlayMuted(!this.player.muted),
                    this.loader.requestAds(n);
                } catch (e) {
                  this.onAdError(e);
                }
              },
            },
            {
              key: "pollCountdown",
              value: function () {
                var e = this;
                if (
                  !(
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                  )
                )
                  return (
                    clearInterval(this.countdownTimer),
                    void this.elements.container.removeAttribute(
                      "data-badge-text",
                    )
                  );
                this.countdownTimer = setInterval(function () {
                  var t = be(Math.max(e.manager.getRemainingTime(), 0)),
                    n = ""
                      .concat(he("advertisement", e.player.config), " - ")
                      .concat(t);
                  e.elements.container.setAttribute("data-badge-text", n);
                }, 100);
              },
            },
            {
              key: "onAdsManagerLoaded",
              value: function (e) {
                var t = this;
                if (this.enabled) {
                  var n = new google.ima.AdsRenderingSettings();
                  (n.restoreCustomPlaybackStateOnAdBreakComplete = !0),
                    (n.enablePreloading = !0),
                    (this.manager = e.getAdsManager(this.player, n)),
                    (this.cuePoints = this.manager.getCuePoints()),
                    this.manager.setVolume(this.player.volume),
                    this.manager.addEventListener(
                      google.ima.AdErrorEvent.Type.AD_ERROR,
                      function (e) {
                        return t.onAdError(e);
                      },
                    ),
                    Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
                      t.manager.addEventListener(
                        google.ima.AdEvent.Type[e],
                        function (e) {
                          return t.onAdEvent(e);
                        },
                      );
                    }),
                    this.trigger("loaded");
                }
              },
            },
            {
              key: "addCuePoints",
              value: function () {
                var e = this;
                E.empty(this.cuePoints) ||
                  this.cuePoints.forEach(function (t) {
                    if (0 !== t && -1 !== t && t < e.player.duration) {
                      var n = e.player.elements.progress;
                      if (E.element(n)) {
                        var i = (100 / e.player.duration) * t,
                          a = O("span", {
                            class: e.player.config.classNames.cues,
                          });
                        (a.style.left = "".concat(i.toString(), "%")),
                          n.appendChild(a);
                      }
                    }
                  });
              },
            },
            {
              key: "onAdEvent",
              value: function (e) {
                var t = this,
                  n = this.player.elements.container,
                  i = e.getAd(),
                  a = e.getAdData(),
                  s = function (e) {
                    var n = "ads".concat(e.replace(/_/g, "").toLowerCase());
                    L.call(t.player, t.player.media, n);
                  };
                switch (e.type) {
                  case google.ima.AdEvent.Type.LOADED:
                    this.trigger("loaded"),
                      s(e.type),
                      this.pollCountdown(!0),
                      i.isLinear() ||
                        ((i.width = n.offsetWidth),
                        (i.height = n.offsetHeight));
                    break;
                  case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    s(e.type), this.loadAds();
                    break;
                  case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                    s(e.type), this.pauseContent();
                    break;
                  case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                    s(e.type), this.pollCountdown(), this.resumeContent();
                    break;
                  case google.ima.AdEvent.Type.STARTED:
                  case google.ima.AdEvent.Type.MIDPOINT:
                  case google.ima.AdEvent.Type.COMPLETE:
                  case google.ima.AdEvent.Type.IMPRESSION:
                  case google.ima.AdEvent.Type.CLICK:
                    s(e.type);
                    break;
                  case google.ima.AdEvent.Type.LOG:
                    a.adError &&
                      this.player.debug.warn(
                        "Non-fatal ad error: ".concat(a.adError.getMessage()),
                      );
                }
              },
            },
            {
              key: "onAdError",
              value: function (e) {
                this.cancel(), this.player.debug.warn("Ads error", e);
              },
            },
            {
              key: "listeners",
              value: function () {
                var e,
                  t = this,
                  n = this.player.elements.container;
                this.player.on("canplay", function () {
                  t.addCuePoints();
                }),
                  this.player.on("ended", function () {
                    t.loader.contentComplete();
                  }),
                  this.player.on("timeupdate", function () {
                    e = t.player.currentTime;
                  }),
                  this.player.on("seeked", function () {
                    var n = t.player.currentTime;
                    E.empty(t.cuePoints) ||
                      t.cuePoints.forEach(function (i, a) {
                        e < i &&
                          i < n &&
                          (t.manager.discardAdBreak(),
                          t.cuePoints.splice(a, 1));
                      });
                  }),
                  window.addEventListener("resize", function () {
                    t.manager &&
                      t.manager.resize(
                        n.offsetWidth,
                        n.offsetHeight,
                        google.ima.ViewMode.NORMAL,
                      );
                  });
              },
            },
            {
              key: "play",
              value: function () {
                var e = this,
                  t = this.player.elements.container;
                this.managerPromise || this.resumeContent(),
                  this.managerPromise
                    .then(function () {
                      e.elements.displayContainer.initialize();
                      try {
                        e.initialized ||
                          (e.manager.init(
                            t.offsetWidth,
                            t.offsetHeight,
                            google.ima.ViewMode.NORMAL,
                          ),
                          e.manager.start()),
                          (e.initialized = !0);
                      } catch (t) {
                        e.onAdError(t);
                      }
                    })
                    .catch(function () {});
              },
            },
            {
              key: "resumeContent",
              value: function () {
                (this.elements.container.style.zIndex = ""),
                  (this.playing = !1),
                  this.player.media.play();
              },
            },
            {
              key: "pauseContent",
              value: function () {
                (this.elements.container.style.zIndex = 3),
                  (this.playing = !0),
                  this.player.media.pause();
              },
            },
            {
              key: "cancel",
              value: function () {
                this.initialized && this.resumeContent(),
                  this.trigger("error"),
                  this.loadAds();
              },
            },
            {
              key: "loadAds",
              value: function () {
                var e = this;
                this.managerPromise
                  .then(function () {
                    e.manager && e.manager.destroy(),
                      (e.managerPromise = new Promise(function (t) {
                        e.on("loaded", t), e.player.debug.log(e.manager);
                      })),
                      e.requestAds();
                  })
                  .catch(function () {});
              },
            },
            {
              key: "trigger",
              value: function (e) {
                for (
                  var t = this,
                    n = arguments.length,
                    i = new Array(n > 1 ? n - 1 : 0),
                    a = 1;
                  a < n;
                  a++
                )
                  i[a - 1] = arguments[a];
                var s = this.events[e];
                E.array(s) &&
                  s.forEach(function (e) {
                    E.function(e) && e.apply(t, i);
                  });
              },
            },
            {
              key: "on",
              value: function (e, t) {
                return (
                  E.array(this.events[e]) || (this.events[e] = []),
                  this.events[e].push(t),
                  this
                );
              },
            },
            {
              key: "startSafetyTimer",
              value: function (e, t) {
                var n = this;
                this.player.debug.log("Safety timer invoked from: ".concat(t)),
                  (this.safetyTimer = setTimeout(function () {
                    n.cancel(), n.clearSafetyTimer("startSafetyTimer()");
                  }, e));
              },
            },
            {
              key: "clearSafetyTimer",
              value: function (e) {
                E.nullOrUndefined(this.safetyTimer) ||
                  (this.player.debug.log(
                    "Safety timer cleared from: ".concat(e),
                  ),
                  clearTimeout(this.safetyTimer),
                  (this.safetyTimer = null));
              },
            },
            {
              key: "enabled",
              get: function () {
                var e = this.config;
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  e.enabled &&
                  (!E.empty(e.publisherId) || E.url(e.tagUrl))
                );
              },
            },
            {
              key: "tagUrl",
              get: function () {
                var e = this.config;
                if (E.url(e.tagUrl)) return e.tagUrl;
                var t = {
                  AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                  AV_CHANNELID: "5a0458dc28a06145e4519d21",
                  AV_URL: window.location.hostname,
                  cb: Date.now(),
                  AV_WIDTH: 640,
                  AV_HEIGHT: 480,
                  AV_CDIM2: this.publisherId,
                };
                return ""
                  .concat("https://go.aniview.com/api/adserver6/vast/", "?")
                  .concat(Te(t));
              },
            },
          ]),
          t
        );
      })(),
      Qe = (function () {
        function t(n) {
          e(this, t),
            (this.player = n),
            (this.thumbnails = []),
            (this.loaded = !1),
            (this.lastMouseMoveTime = Date.now()),
            (this.mouseDown = !1),
            (this.loadedImages = []),
            (this.elements = { thumb: {}, scrubbing: {} }),
            this.load();
        }
        return (
          n(t, [
            {
              key: "load",
              value: function () {
                var e = this;
                this.player.elements.display.seekTooltip &&
                  (this.player.elements.display.seekTooltip.hidden =
                    this.enabled),
                  this.enabled &&
                    this.getThumbnails().then(function () {
                      e.render(),
                        e.determineContainerAutoSizing(),
                        (e.loaded = !0);
                    });
              },
            },
            {
              key: "getThumbnails",
              value: function () {
                var e = this;
                return new Promise(function (t) {
                  var n = e.player.config.previewThumbnails.src;
                  if (E.empty(n))
                    throw new Error(
                      "Missing previewThumbnails.src config attribute",
                    );
                  var i = (E.string(n) ? [n] : n).map(function (t) {
                    return e.getThumbnail(t);
                  });
                  Promise.all(i).then(function () {
                    e.thumbnails.sort(function (e, t) {
                      return e.height - t.height;
                    }),
                      e.player.debug.log("Preview thumbnails", e.thumbnails),
                      t();
                  });
                });
              },
            },
            {
              key: "getThumbnail",
              value: function (e) {
                var t = this;
                return new Promise(function (n) {
                  pe(e).then(function (i) {
                    var s,
                      o,
                      r = {
                        frames:
                          ((s = i),
                          (o = []),
                          s.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                            var t = {};
                            e.split(/\r\n|\n|\r/).forEach(function (e) {
                              if (E.number(t.startTime)) {
                                if (!E.empty(e.trim()) && E.empty(t.text)) {
                                  var n = e.trim().split("#xywh="),
                                    i = a(n, 1);
                                  if (((t.text = i[0]), n[1])) {
                                    var s = a(n[1].split(","), 4);
                                    (t.x = s[0]),
                                      (t.y = s[1]),
                                      (t.w = s[2]),
                                      (t.h = s[3]);
                                  }
                                }
                              } else {
                                var o = e.match(
                                  /([0-9]{2}):([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2}):([0-9]{2}):([0-9]{2}).([0-9]{2,3})/,
                                );
                                o &&
                                  ((t.startTime =
                                    60 * Number(o[1]) * 60 +
                                    60 * Number(o[2]) +
                                    Number(o[3]) +
                                    Number("0.".concat(o[4]))),
                                  (t.endTime =
                                    60 * Number(o[6]) * 60 +
                                    60 * Number(o[7]) +
                                    Number(o[8]) +
                                    Number("0.".concat(o[9]))));
                              }
                            }),
                              t.text && o.push(t);
                          }),
                          o),
                        height: null,
                        urlPrefix: "",
                      };
                    r.frames[0].text.startsWith("/") ||
                      (r.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                    var l = new Image();
                    (l.onload = function () {
                      (r.height = l.naturalHeight),
                        (r.width = l.naturalWidth),
                        t.thumbnails.push(r),
                        n();
                    }),
                      (l.src = r.urlPrefix + r.frames[0].text);
                  });
                });
              },
            },
            {
              key: "startMove",
              value: function (e) {
                if (
                  this.loaded &&
                  E.event(e) &&
                  ["touchmove", "mousemove"].includes(e.type) &&
                  this.player.media.duration
                ) {
                  if ("touchmove" === e.type)
                    this.seekTime =
                      this.player.media.duration *
                      (this.player.elements.inputs.seek.value / 100);
                  else {
                    var t =
                        this.player.elements.progress.getBoundingClientRect(),
                      n = (100 / t.width) * (e.pageX - t.left);
                    (this.seekTime = this.player.media.duration * (n / 100)),
                      this.seekTime < 0 && (this.seekTime = 0),
                      this.seekTime > this.player.media.duration - 1 &&
                        (this.seekTime = this.player.media.duration - 1),
                      (this.mousePosX = e.pageX),
                      (this.elements.thumb.time.innerText = be(this.seekTime));
                  }
                  this.showImageAtCurrentTime();
                }
              },
            },
            {
              key: "endMove",
              value: function () {
                this.toggleThumbContainer(!1, !0);
              },
            },
            {
              key: "startScrubbing",
              value: function (e) {
                (!1 !== e.button && 0 !== e.button) ||
                  ((this.mouseDown = !0),
                  this.player.media.duration &&
                    (this.toggleScrubbingContainer(!0),
                    this.toggleThumbContainer(!1, !0),
                    this.showImageAtCurrentTime()));
              },
            },
            {
              key: "endScrubbing",
              value: function () {
                var e = this;
                (this.mouseDown = !1),
                  Math.ceil(this.lastTime) ===
                  Math.ceil(this.player.media.currentTime)
                    ? this.toggleScrubbingContainer(!1)
                    : x.call(
                        this.player,
                        this.player.media,
                        "timeupdate",
                        function () {
                          e.mouseDown || e.toggleScrubbingContainer(!1);
                        },
                      );
              },
            },
            {
              key: "listeners",
              value: function () {
                var e = this;
                this.player.on("play", function () {
                  e.toggleThumbContainer(!1, !0);
                }),
                  this.player.on("seeked", function () {
                    e.toggleThumbContainer(!1);
                  }),
                  this.player.on("timeupdate", function () {
                    e.lastTime = e.player.media.currentTime;
                  });
              },
            },
            {
              key: "render",
              value: function () {
                (this.elements.thumb.container = O("div", {
                  class:
                    this.player.config.classNames.previewThumbnails
                      .thumbContainer,
                })),
                  (this.elements.thumb.imageContainer = O("div", {
                    class:
                      this.player.config.classNames.previewThumbnails
                        .imageContainer,
                  })),
                  this.elements.thumb.container.appendChild(
                    this.elements.thumb.imageContainer,
                  );
                var e = O("div", {
                  class:
                    this.player.config.classNames.previewThumbnails
                      .timeContainer,
                });
                (this.elements.thumb.time = O("span", {}, "00:00")),
                  e.appendChild(this.elements.thumb.time),
                  this.elements.thumb.container.appendChild(e),
                  this.player.elements.progress.appendChild(
                    this.elements.thumb.container,
                  ),
                  (this.elements.scrubbing.container = O("div", {
                    class:
                      this.player.config.classNames.previewThumbnails
                        .scrubbingContainer,
                  })),
                  this.player.elements.wrapper.appendChild(
                    this.elements.scrubbing.container,
                  );
              },
            },
            {
              key: "showImageAtCurrentTime",
              value: function () {
                var e = this;
                this.mouseDown
                  ? this.setScrubbingContainerSize()
                  : this.setThumbContainerSizeAndPos();
                var t = this.thumbnails[0].frames.findIndex(function (t) {
                    return e.seekTime >= t.startTime && e.seekTime <= t.endTime;
                  }),
                  n = t >= 0,
                  i = 0;
                this.mouseDown || this.toggleThumbContainer(n),
                  n &&
                    (this.thumbnails.forEach(function (n, a) {
                      e.loadedImages.includes(n.frames[t].text) && (i = a);
                    }),
                    t !== this.showingThumb &&
                      ((this.showingThumb = t), this.loadImage(i)));
              },
            },
            {
              key: "loadImage",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  n = this.showingThumb,
                  i = this.thumbnails[t],
                  a = i.urlPrefix,
                  s = i.frames[n],
                  o = i.frames[n].text,
                  r = a + o;
                if (
                  this.currentImageElement &&
                  this.currentImageElement.dataset.filename === o
                )
                  this.showImage(this.currentImageElement, s, t, n, o, !1),
                    (this.currentImageElement.dataset.index = n),
                    this.removeOldImages(this.currentImageElement);
                else {
                  this.loadingImage &&
                    this.usingSprites &&
                    (this.loadingImage.onload = null);
                  var l = new Image();
                  (l.src = r),
                    (l.dataset.index = n),
                    (l.dataset.filename = o),
                    (this.showingThumbFilename = o),
                    this.player.debug.log("Loading image: ".concat(r)),
                    (l.onload = function () {
                      return e.showImage(l, s, t, n, o, !0);
                    }),
                    (this.loadingImage = l),
                    this.removeOldImages(l);
                }
              },
            },
            {
              key: "showImage",
              value: function (e, t, n, i, a) {
                var s =
                  !(arguments.length > 5 && void 0 !== arguments[5]) ||
                  arguments[5];
                this.player.debug.log(
                  "Showing thumb: "
                    .concat(a, ". num: ")
                    .concat(i, ". qual: ")
                    .concat(n, ". newimg: ")
                    .concat(s),
                ),
                  this.setImageSizeAndOffset(e, t),
                  s &&
                    (this.currentImageContainer.appendChild(e),
                    (this.currentImageElement = e),
                    this.loadedImages.includes(a) || this.loadedImages.push(a)),
                  this.preloadNearby(i, !0)
                    .then(this.preloadNearby(i, !1))
                    .then(this.getHigherQuality(n, e, t, a));
              },
            },
            {
              key: "removeOldImages",
              value: function (e) {
                var t = this;
                Array.from(this.currentImageContainer.children).forEach(
                  function (n) {
                    if ("img" === n.tagName.toLowerCase()) {
                      var i = t.usingSprites ? 500 : 1e3;
                      if (
                        n.dataset.index !== e.dataset.index &&
                        !n.dataset.deleting
                      ) {
                        n.dataset.deleting = !0;
                        var a = t.currentImageContainer;
                        setTimeout(function () {
                          a.removeChild(n),
                            t.player.debug.log(
                              "Removing thumb: ".concat(n.dataset.filename),
                            );
                        }, i);
                      }
                    }
                  },
                );
              },
            },
            {
              key: "preloadNearby",
              value: function (e) {
                var t = this,
                  n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return new Promise(function (i) {
                  setTimeout(function () {
                    var a = t.thumbnails[0].frames[e].text;
                    if (t.showingThumbFilename === a) {
                      var s;
                      s = n
                        ? t.thumbnails[0].frames.slice(e)
                        : t.thumbnails[0].frames.slice(0, e).reverse();
                      var o = !1;
                      s.forEach(function (e) {
                        var n = e.text;
                        if (n !== a && !t.loadedImages.includes(n)) {
                          (o = !0),
                            t.player.debug.log(
                              "Preloading thumb filename: ".concat(n),
                            );
                          var s = t.thumbnails[0].urlPrefix + n,
                            r = new Image();
                          (r.src = s),
                            (r.onload = function () {
                              t.player.debug.log(
                                "Preloaded thumb filename: ".concat(n),
                              ),
                                t.loadedImages.includes(n) ||
                                  t.loadedImages.push(n),
                                i();
                            });
                        }
                      }),
                        o || i();
                    }
                  }, 300);
                });
              },
            },
            {
              key: "getHigherQuality",
              value: function (e, t, n, i) {
                var a = this;
                if (e < this.thumbnails.length - 1) {
                  var s = t.naturalHeight;
                  this.usingSprites && (s = n.h),
                    s < this.thumbContainerHeight &&
                      setTimeout(function () {
                        a.showingThumbFilename === i &&
                          (a.player.debug.log(
                            "Showing higher quality thumb for: ".concat(i),
                          ),
                          a.loadImage(e + 1));
                      }, 300);
                }
              },
            },
            {
              key: "toggleThumbContainer",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n =
                    this.player.config.classNames.previewThumbnails
                      .thumbContainerShown;
                this.elements.thumb.container.classList.toggle(n, e),
                  !e &&
                    t &&
                    ((this.showingThumb = null),
                    (this.showingThumbFilename = null));
              },
            },
            {
              key: "toggleScrubbingContainer",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t =
                    this.player.config.classNames.previewThumbnails
                      .scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(t, e),
                  e ||
                    ((this.showingThumb = null),
                    (this.showingThumbFilename = null));
              },
            },
            {
              key: "determineContainerAutoSizing",
              value: function () {
                this.elements.thumb.imageContainer.clientHeight > 20 &&
                  (this.sizeSpecifiedInCSS = !0);
              },
            },
            {
              key: "setThumbContainerSizeAndPos",
              value: function () {
                if (!this.sizeSpecifiedInCSS) {
                  var e = Math.floor(
                    this.thumbContainerHeight * this.thumbAspectRatio,
                  );
                  (this.elements.thumb.imageContainer.style.height = "".concat(
                    this.thumbContainerHeight,
                    "px",
                  )),
                    (this.elements.thumb.imageContainer.style.width = "".concat(
                      e,
                      "px",
                    ));
                }
                this.setThumbContainerPos();
              },
            },
            {
              key: "setThumbContainerPos",
              value: function () {
                var e = this.player.elements.progress.getBoundingClientRect(),
                  t = this.player.elements.container.getBoundingClientRect(),
                  n = this.elements.thumb.container,
                  i = t.left - e.left + 10,
                  a = t.right - e.left - n.clientWidth - 10,
                  s = this.mousePosX - e.left - n.clientWidth / 2;
                s < i && (s = i),
                  s > a && (s = a),
                  (n.style.left = "".concat(s, "px"));
              },
            },
            {
              key: "setScrubbingContainerSize",
              value: function () {
                (this.elements.scrubbing.container.style.width = "".concat(
                  this.player.media.clientWidth,
                  "px",
                )),
                  (this.elements.scrubbing.container.style.height = "".concat(
                    this.player.media.clientWidth / this.thumbAspectRatio,
                    "px",
                  ));
              },
            },
            {
              key: "setImageSizeAndOffset",
              value: function (e, t) {
                if (this.usingSprites) {
                  var n = this.thumbContainerHeight / t.h;
                  (e.style.height = "".concat(
                    Math.floor(e.naturalHeight * n),
                    "px",
                  )),
                    (e.style.width = "".concat(
                      Math.floor(e.naturalWidth * n),
                      "px",
                    )),
                    (e.style.left = "-".concat(t.x * n, "px")),
                    (e.style.top = "-".concat(t.y * n, "px"));
                }
              },
            },
            {
              key: "enabled",
              get: function () {
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  this.player.config.previewThumbnails.enabled
                );
              },
            },
            {
              key: "currentImageContainer",
              get: function () {
                return this.mouseDown
                  ? this.elements.scrubbing.container
                  : this.elements.thumb.imageContainer;
              },
            },
            {
              key: "usingSprites",
              get: function () {
                return Object.keys(this.thumbnails[0].frames[0]).includes("w");
              },
            },
            {
              key: "thumbAspectRatio",
              get: function () {
                return this.usingSprites
                  ? this.thumbnails[0].frames[0].w /
                      this.thumbnails[0].frames[0].h
                  : this.thumbnails[0].width / this.thumbnails[0].height;
              },
            },
            {
              key: "thumbContainerHeight",
              get: function () {
                return this.mouseDown
                  ? Math.floor(
                      this.player.media.clientWidth / this.thumbAspectRatio,
                    )
                  : Math.floor(
                      this.player.media.clientWidth / this.thumbAspectRatio / 4,
                    );
              },
            },
            {
              key: "currentImageElement",
              get: function () {
                return this.mouseDown
                  ? this.currentScrubbingImageElement
                  : this.currentThumbnailImageElement;
              },
              set: function (e) {
                this.mouseDown
                  ? (this.currentScrubbingImageElement = e)
                  : (this.currentThumbnailImageElement = e);
              },
            },
          ]),
          t
        );
      })(),
      Xe = {
        insertElements: function (e, t) {
          var n = this;
          E.string(t)
            ? j(e, this.media, { src: t })
            : E.array(t) &&
              t.forEach(function (t) {
                j(e, n.media, t);
              });
        },
        change: function (e) {
          var t = this;
          ae(e, "sources.length")
            ? (ne.cancelRequests.call(this),
              this.destroy.call(
                this,
                function () {
                  (t.options.quality = []),
                    q(t.media),
                    (t.media = null),
                    E.element(t.elements.container) &&
                      t.elements.container.removeAttribute("class");
                  var n = e.sources,
                    i = e.type,
                    s = a(n, 1)[0],
                    o = s.provider,
                    r = void 0 === o ? Pe.html5 : o,
                    l = s.src,
                    c = "html5" === r ? i : "div",
                    u = "html5" === r ? {} : { src: l };
                  Object.assign(t, {
                    provider: r,
                    type: i,
                    supported: te.check(i, r, t.config.playsinline),
                    media: O(c, u),
                  }),
                    t.elements.container.appendChild(t.media),
                    E.boolean(e.autoplay) && (t.config.autoplay = e.autoplay),
                    t.isHTML5 &&
                      (t.config.crossorigin &&
                        t.media.setAttribute("crossorigin", ""),
                      t.config.autoplay && t.media.setAttribute("autoplay", ""),
                      E.empty(e.poster) || (t.poster = e.poster),
                      t.config.loop.active && t.media.setAttribute("loop", ""),
                      t.config.muted && t.media.setAttribute("muted", ""),
                      t.config.playsinline &&
                        t.media.setAttribute("playsinline", "")),
                    je.addStyleHook.call(t),
                    t.isHTML5 && Xe.insertElements.call(t, "source", n),
                    (t.config.title = e.title),
                    Ke.setup.call(t),
                    t.isHTML5 &&
                      Object.keys(e).includes("tracks") &&
                      Xe.insertElements.call(t, "track", e.tracks),
                    (t.isHTML5 || (t.isEmbed && !t.supported.ui)) &&
                      je.build.call(t),
                    t.isHTML5 && t.media.load(),
                    t.previewThumbnails && t.previewThumbnails.load(),
                    t.fullscreen.update();
                },
                !0,
              ))
            : this.debug.warn("Invalid source format");
        },
      },
      Je = (function () {
        function t(n, i) {
          var a = this;
          if (
            (e(this, t),
            (this.timers = {}),
            (this.ready = !1),
            (this.loading = !1),
            (this.failed = !1),
            (this.touch = te.touch),
            (this.media = n),
            E.string(this.media) &&
              (this.media = document.querySelectorAll(this.media)),
            ((window.jQuery && this.media instanceof jQuery) ||
              E.nodeList(this.media) ||
              E.array(this.media)) &&
              (this.media = this.media[0]),
            (this.config = se(
              {},
              Ae,
              t.defaults,
              i || {},
              (function () {
                try {
                  return JSON.parse(a.media.getAttribute("data-plyr-config"));
                } catch (e) {
                  return {};
                }
              })(),
            )),
            (this.elements = {
              container: null,
              captions: null,
              buttons: {},
              display: {},
              progress: {},
              inputs: {},
              settings: { popup: null, menu: null, panels: {}, buttons: {} },
            }),
            (this.captions = {
              active: null,
              currentTrack: -1,
              meta: new WeakMap(),
            }),
            (this.fullscreen = { active: !1 }),
            (this.options = { speed: [], quality: [] }),
            (this.debug = new xe(this.config.debug)),
            this.debug.log("Config", this.config),
            this.debug.log("Support", te),
            !E.nullOrUndefined(this.media) && E.element(this.media))
          )
            if (this.media.plyr) this.debug.warn("Target already setup");
            else if (this.config.enabled)
              if (te.check().api) {
                var s = this.media.cloneNode(!0);
                (s.autoplay = !1), (this.elements.original = s);
                var o = this.media.tagName.toLowerCase(),
                  r = null,
                  l = null;
                switch (o) {
                  case "div":
                    if (
                      ((r = this.media.querySelector("iframe")), E.element(r))
                    ) {
                      if (
                        ((l = we(r.getAttribute("src"))),
                        (this.provider = (function (e) {
                          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                            e,
                          )
                            ? Pe.youtube
                            : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                                e,
                              )
                            ? Pe.vimeo
                            : null;
                        })(l.toString())),
                        (this.elements.container = this.media),
                        (this.media = r),
                        (this.elements.container.className = ""),
                        l.search.length)
                      ) {
                        var c = ["1", "true"];
                        c.includes(l.searchParams.get("autoplay")) &&
                          (this.config.autoplay = !0),
                          c.includes(l.searchParams.get("loop")) &&
                            (this.config.loop.active = !0),
                          this.isYouTube
                            ? ((this.config.playsinline = c.includes(
                                l.searchParams.get("playsinline"),
                              )),
                              (this.config.youtube.hl =
                                l.searchParams.get("hl")))
                            : (this.config.playsinline = !0);
                      }
                    } else
                      (this.provider = this.media.getAttribute(
                        this.config.attributes.embed.provider,
                      )),
                        this.media.removeAttribute(
                          this.config.attributes.embed.provider,
                        );
                    if (
                      E.empty(this.provider) ||
                      !Object.keys(Pe).includes(this.provider)
                    )
                      return void this.debug.error(
                        "Setup failed: Invalid provider",
                      );
                    this.type = Ne.video;
                    break;
                  case "video":
                  case "audio":
                    (this.type = o),
                      (this.provider = Pe.html5),
                      this.media.hasAttribute("crossorigin") &&
                        (this.config.crossorigin = !0),
                      this.media.hasAttribute("autoplay") &&
                        (this.config.autoplay = !0),
                      (this.media.hasAttribute("playsinline") ||
                        this.media.hasAttribute("webkit-playsinline")) &&
                        (this.config.playsinline = !0),
                      this.media.hasAttribute("muted") &&
                        (this.config.muted = !0),
                      this.media.hasAttribute("loop") &&
                        (this.config.loop.active = !0);
                    break;
                  default:
                    return void this.debug.error(
                      "Setup failed: unsupported type",
                    );
                }
                (this.supported = te.check(
                  this.type,
                  this.provider,
                  this.config.playsinline,
                )),
                  this.supported.api
                    ? ((this.eventListeners = []),
                      (this.listeners = new De(this)),
                      (this.storage = new me(this)),
                      (this.media.plyr = this),
                      E.element(this.elements.container) ||
                        ((this.elements.container = O("div", { tabindex: 0 })),
                        I(this.media, this.elements.container)),
                      je.addStyleHook.call(this),
                      Ke.setup.call(this),
                      this.config.debug &&
                        N.call(
                          this,
                          this.elements.container,
                          this.config.events.join(" "),
                          function (e) {
                            a.debug.log("event: ".concat(e.type));
                          },
                        ),
                      (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                        je.build.call(this),
                      this.listeners.container(),
                      this.listeners.global(),
                      (this.fullscreen = new _e(this)),
                      this.config.ads.enabled && (this.ads = new Ye(this)),
                      this.config.autoplay && this.play(),
                      (this.lastSeekTime = 0),
                      this.config.previewThumbnails.enabled &&
                        (this.previewThumbnails = new Qe(this)))
                    : this.debug.error("Setup failed: no support");
              } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
          else this.debug.error("Setup failed: no suitable element passed");
        }
        return (
          n(
            t,
            [
              {
                key: "play",
                value: function () {
                  var e = this;
                  return E.function(this.media.play)
                    ? (this.ads &&
                        this.ads.enabled &&
                        this.ads.managerPromise
                          .then(function () {
                            return e.ads.play();
                          })
                          .catch(function () {
                            return e.media.play();
                          }),
                      this.media.play())
                    : null;
                },
              },
              {
                key: "pause",
                value: function () {
                  this.playing &&
                    E.function(this.media.pause) &&
                    this.media.pause();
                },
              },
              {
                key: "togglePlay",
                value: function (e) {
                  (E.boolean(e) ? e : !this.playing)
                    ? this.play()
                    : this.pause();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.isHTML5
                    ? (this.pause(), this.restart())
                    : E.function(this.media.stop) && this.media.stop();
                },
              },
              {
                key: "restart",
                value: function () {
                  this.currentTime = 0;
                },
              },
              {
                key: "rewind",
                value: function (e) {
                  this.currentTime =
                    this.currentTime - (E.number(e) ? e : this.config.seekTime);
                },
              },
              {
                key: "forward",
                value: function (e) {
                  this.currentTime =
                    this.currentTime + (E.number(e) ? e : this.config.seekTime);
                },
              },
              {
                key: "increaseVolume",
                value: function (e) {
                  var t = this.media.muted ? 0 : this.volume;
                  this.volume = t + (E.number(e) ? e : 0);
                },
              },
              {
                key: "decreaseVolume",
                value: function (e) {
                  this.increaseVolume(-e);
                },
              },
              {
                key: "toggleCaptions",
                value: function (e) {
                  Ce.toggle.call(this, e, !1);
                },
              },
              {
                key: "airplay",
                value: function () {
                  te.airplay && this.media.webkitShowPlaybackTargetPicker();
                },
              },
              {
                key: "toggleControls",
                value: function (e) {
                  if (this.supported.ui && !this.isAudio) {
                    var t = V(
                        this.elements.container,
                        this.config.classNames.hideControls,
                      ),
                      n = void 0 === e ? void 0 : !e,
                      i = B(
                        this.elements.container,
                        this.config.classNames.hideControls,
                        n,
                      );
                    if (
                      (i &&
                        this.config.controls.includes("settings") &&
                        !E.empty(this.config.settings) &&
                        ke.toggleMenu.call(this, !1),
                      i !== t)
                    ) {
                      var a = i ? "controlshidden" : "controlsshown";
                      L.call(this, this.media, a);
                    }
                    return !i;
                  }
                  return !1;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  N.call(this, this.elements.container, e, t);
                },
              },
              {
                key: "once",
                value: function (e, t) {
                  x.call(this, this.elements.container, e, t);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  M(this.elements.container, e, t);
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (this.ready) {
                    var i = function () {
                      (document.body.style.overflow = ""),
                        (t.embed = null),
                        n
                          ? (Object.keys(t.elements).length &&
                              (q(t.elements.buttons.play),
                              q(t.elements.captions),
                              q(t.elements.controls),
                              q(t.elements.wrapper),
                              (t.elements.buttons.play = null),
                              (t.elements.captions = null),
                              (t.elements.controls = null),
                              (t.elements.wrapper = null)),
                            E.function(e) && e())
                          : (function () {
                              this &&
                                this.eventListeners &&
                                (this.eventListeners.forEach(function (e) {
                                  var t = e.element,
                                    n = e.type,
                                    i = e.callback,
                                    a = e.options;
                                  t.removeEventListener(n, i, a);
                                }),
                                (this.eventListeners = []));
                            }.call(t),
                            F(t.elements.original, t.elements.container),
                            L.call(t, t.elements.original, "destroyed", !0),
                            E.function(e) && e.call(t.elements.original),
                            (t.ready = !1),
                            setTimeout(function () {
                              (t.elements = null), (t.media = null);
                            }, 200));
                    };
                    this.stop(),
                      this.isHTML5
                        ? (clearTimeout(this.timers.loading),
                          je.toggleNativeControls.call(this, !0),
                          i())
                        : this.isYouTube
                        ? (clearInterval(this.timers.buffering),
                          clearInterval(this.timers.playing),
                          null !== this.embed &&
                            E.function(this.embed.destroy) &&
                            this.embed.destroy(),
                          i())
                        : this.isVimeo &&
                          (null !== this.embed && this.embed.unload().then(i),
                          setTimeout(i, 200));
                  }
                },
              },
              {
                key: "supports",
                value: function (e) {
                  return te.mime.call(this, e);
                },
              },
              {
                key: "isHTML5",
                get: function () {
                  return Boolean(this.provider === Pe.html5);
                },
              },
              {
                key: "isEmbed",
                get: function () {
                  return Boolean(this.isYouTube || this.isVimeo);
                },
              },
              {
                key: "isYouTube",
                get: function () {
                  return Boolean(this.provider === Pe.youtube);
                },
              },
              {
                key: "isVimeo",
                get: function () {
                  return Boolean(this.provider === Pe.vimeo);
                },
              },
              {
                key: "isVideo",
                get: function () {
                  return Boolean(this.type === Ne.video);
                },
              },
              {
                key: "isAudio",
                get: function () {
                  return Boolean(this.type === Ne.audio);
                },
              },
              {
                key: "playing",
                get: function () {
                  return Boolean(this.ready && !this.paused && !this.ended);
                },
              },
              {
                key: "paused",
                get: function () {
                  return Boolean(this.media.paused);
                },
              },
              {
                key: "stopped",
                get: function () {
                  return Boolean(this.paused && 0 === this.currentTime);
                },
              },
              {
                key: "ended",
                get: function () {
                  return Boolean(this.media.ended);
                },
              },
              {
                key: "currentTime",
                set: function (e) {
                  if (this.duration) {
                    var t = E.number(e) && e > 0;
                    (this.media.currentTime = t
                      ? Math.min(e, this.duration)
                      : 0),
                      this.debug.log(
                        "Seeking to ".concat(this.currentTime, " seconds"),
                      );
                  }
                },
                get: function () {
                  return Number(this.media.currentTime);
                },
              },
              {
                key: "buffered",
                get: function () {
                  var e = this.media.buffered;
                  return E.number(e)
                    ? e
                    : e && e.length && this.duration > 0
                    ? e.end(0) / this.duration
                    : 0;
                },
              },
              {
                key: "seeking",
                get: function () {
                  return Boolean(this.media.seeking);
                },
              },
              {
                key: "duration",
                get: function () {
                  var e = parseFloat(this.config.duration),
                    t = (this.media || {}).duration,
                    n = E.number(t) && t !== 1 / 0 ? t : 0;
                  return e || n;
                },
              },
              {
                key: "volume",
                set: function (e) {
                  var t = e;
                  E.string(t) && (t = Number(t)),
                    E.number(t) || (t = this.storage.get("volume")),
                    E.number(t) || (t = this.config.volume),
                    t > 1 && (t = 1),
                    t < 0 && (t = 0),
                    (this.config.volume = t),
                    (this.media.volume = t),
                    !E.empty(e) && this.muted && t > 0 && (this.muted = !1);
                },
                get: function () {
                  return Number(this.media.volume);
                },
              },
              {
                key: "muted",
                set: function (e) {
                  var t = e;
                  E.boolean(t) || (t = this.storage.get("muted")),
                    E.boolean(t) || (t = this.config.muted),
                    (this.config.muted = t),
                    (this.media.muted = t);
                },
                get: function () {
                  return Boolean(this.media.muted);
                },
              },
              {
                key: "hasAudio",
                get: function () {
                  return (
                    !this.isHTML5 ||
                    !!this.isAudio ||
                    Boolean(this.media.mozHasAudio) ||
                    Boolean(this.media.webkitAudioDecodedByteCount) ||
                    Boolean(
                      this.media.audioTracks && this.media.audioTracks.length,
                    )
                  );
                },
              },
              {
                key: "speed",
                set: function (e) {
                  var t = null;
                  E.number(e) && (t = e),
                    E.number(t) || (t = this.storage.get("speed")),
                    E.number(t) || (t = this.config.speed.selected),
                    t < 0.1 && (t = 0.1),
                    t > 2 && (t = 2),
                    this.config.speed.options.includes(t)
                      ? ((this.config.speed.selected = t),
                        (this.media.playbackRate = t))
                      : this.debug.warn("Unsupported speed (".concat(t, ")"));
                },
                get: function () {
                  return Number(this.media.playbackRate);
                },
              },
              {
                key: "quality",
                set: function (e) {
                  var t = this.config.quality,
                    n = this.options.quality;
                  if (n.length) {
                    var i = [
                        !E.empty(e) && Number(e),
                        this.storage.get("quality"),
                        t.selected,
                        t.default,
                      ].find(E.number),
                      a = !0;
                    if (!n.includes(i)) {
                      var s = (function (e, t) {
                        return E.array(e) && e.length
                          ? e.reduce(function (e, n) {
                              return Math.abs(n - t) < Math.abs(e - t) ? n : e;
                            })
                          : null;
                      })(n, i);
                      this.debug.warn(
                        "Unsupported quality option: "
                          .concat(i, ", using ")
                          .concat(s, " instead"),
                      ),
                        (i = s),
                        (a = !1);
                    }
                    (t.selected = i),
                      (this.media.quality = i),
                      a && this.storage.set({ quality: i });
                  }
                },
                get: function () {
                  return this.media.quality;
                },
              },
              {
                key: "loop",
                set: function (e) {
                  var t = E.boolean(e) ? e : this.config.loop.active;
                  (this.config.loop.active = t), (this.media.loop = t);
                },
                get: function () {
                  return Boolean(this.media.loop);
                },
              },
              {
                key: "source",
                set: function (e) {
                  Xe.change.call(this, e);
                },
                get: function () {
                  return this.media.currentSrc;
                },
              },
              {
                key: "download",
                get: function () {
                  var e = this.config.urls.download;
                  return E.url(e) ? e : this.source;
                },
              },
              {
                key: "poster",
                set: function (e) {
                  this.isVideo
                    ? je.setPoster.call(this, e, !1).catch(function () {})
                    : this.debug.warn("Poster can only be set for video");
                },
                get: function () {
                  return this.isVideo
                    ? this.media.getAttribute("poster")
                    : null;
                },
              },
              {
                key: "autoplay",
                set: function (e) {
                  var t = E.boolean(e) ? e : this.config.autoplay;
                  this.config.autoplay = t;
                },
                get: function () {
                  return Boolean(this.config.autoplay);
                },
              },
              {
                key: "currentTrack",
                set: function (e) {
                  Ce.set.call(this, e, !1);
                },
                get: function () {
                  var e = this.captions,
                    t = e.toggled,
                    n = e.currentTrack;
                  return t ? n : -1;
                },
              },
              {
                key: "language",
                set: function (e) {
                  Ce.setLanguage.call(this, e, !1);
                },
                get: function () {
                  return (Ce.getCurrentTrack.call(this) || {}).language;
                },
              },
              {
                key: "pip",
                set: function (e) {
                  if (te.pip) {
                    var t = E.boolean(e) ? e : !this.pip;
                    E.function(this.media.webkitSetPresentationMode) &&
                      this.media.webkitSetPresentationMode(t ? Ee : Se),
                      E.function(this.media.requestPictureInPicture) &&
                        (!this.pip && t
                          ? this.media.requestPictureInPicture()
                          : this.pip && !t && document.exitPictureInPicture());
                  }
                },
                get: function () {
                  return te.pip
                    ? E.empty(this.media.webkitPresentationMode)
                      ? this.media === document.pictureInPictureElement
                      : this.media.webkitPresentationMode === Ee
                    : null;
                },
              },
            ],
            [
              {
                key: "supported",
                value: function (e, t, n) {
                  return te.check(e, t, n);
                },
              },
              {
                key: "loadSprite",
                value: function (e, t) {
                  return fe(e, t);
                },
              },
              {
                key: "setup",
                value: function (e) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = null;
                  return (
                    E.string(e)
                      ? (i = Array.from(document.querySelectorAll(e)))
                      : E.nodeList(e)
                      ? (i = Array.from(e))
                      : E.array(e) && (i = e.filter(E.element)),
                    E.empty(i)
                      ? null
                      : i.map(function (e) {
                          return new t(e, n);
                        })
                  );
                },
              },
            ],
          ),
          t
        );
      })();
    return (Je.defaults = ((ze = Ae), JSON.parse(JSON.stringify(ze)))), Je;
  });
//# sourceMappingURL=plyr.min.js.map;
