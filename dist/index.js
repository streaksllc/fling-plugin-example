var b = { exports: {} }, v = {}, C = { exports: {} }, r = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y = Symbol.for("react.element"), U = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), V = Symbol.for("react.provider"), q = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), R = Symbol.iterator;
function z(e) {
  return e === null || typeof e != "object" ? null : (e = R && e[R] || e["@@iterator"], typeof e == "function" ? e : null);
}
var j = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, O = Object.assign, g = {};
function p(e, t, o) {
  this.props = e, this.context = t, this.refs = g, this.updater = o || j;
}
p.prototype.isReactComponent = {};
p.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
p.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function P() {
}
P.prototype = p.prototype;
function S(e, t, o) {
  this.props = e, this.context = t, this.refs = g, this.updater = o || j;
}
var E = S.prototype = new P();
E.constructor = S;
O(E, p.prototype);
E.isPureReactComponent = !0;
var $ = Array.isArray, I = Object.prototype.hasOwnProperty, w = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
function D(e, t, o) {
  var n, u = {}, i = null, l = null;
  if (t != null)
    for (n in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      I.call(t, n) && !T.hasOwnProperty(n) && (u[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1)
    u.children = o;
  else if (1 < s) {
    for (var c = Array(s), a = 0; a < s; a++)
      c[a] = arguments[a + 2];
    u.children = c;
  }
  if (e && e.defaultProps)
    for (n in s = e.defaultProps, s)
      u[n] === void 0 && (u[n] = s[n]);
  return { $$typeof: y, type: e, key: i, ref: l, props: u, _owner: w.current };
}
function J(e, t) {
  return { $$typeof: y, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function k(e) {
  return typeof e == "object" && e !== null && e.$$typeof === y;
}
function Y(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(o) {
    return t[o];
  });
}
var x = /\/+/g;
function h(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Y("" + e.key) : t.toString(36);
}
function _(e, t, o, n, u) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null)
    l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case y:
          case U:
            l = !0;
        }
    }
  if (l)
    return l = e, u = u(l), e = n === "" ? "." + h(l, 0) : n, $(u) ? (o = "", e != null && (o = e.replace(x, "$&/") + "/"), _(u, t, o, "", function(a) {
      return a;
    })) : u != null && (k(u) && (u = J(u, o + (!u.key || l && l.key === u.key ? "" : ("" + u.key).replace(x, "$&/") + "/") + e)), t.push(u)), 1;
  if (l = 0, n = n === "" ? "." : n + ":", $(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var c = n + h(i, s);
      l += _(i, t, o, c, u);
    }
  else if (c = z(e), typeof c == "function")
    for (e = c.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, c = n + h(i, s++), l += _(i, t, o, c, u);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function d(e, t, o) {
  if (e == null)
    return e;
  var n = [], u = 0;
  return _(e, n, "", "", function(i) {
    return t.call(o, i, u++);
  }), n;
}
function G(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(o) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = o);
    }, function(o) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = o);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var f = { current: null }, m = { transition: null }, K = { ReactCurrentDispatcher: f, ReactCurrentBatchConfig: m, ReactCurrentOwner: w };
r.Children = { map: d, forEach: function(e, t, o) {
  d(e, function() {
    t.apply(this, arguments);
  }, o);
}, count: function(e) {
  var t = 0;
  return d(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return d(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!k(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
r.Component = p;
r.Fragment = A;
r.Profiler = N;
r.PureComponent = S;
r.StrictMode = F;
r.Suspense = W;
r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K;
r.cloneElement = function(e, t, o) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = O({}, e.props), u = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = w.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (c in t)
      I.call(t, c) && !T.hasOwnProperty(c) && (n[c] = t[c] === void 0 && s !== void 0 ? s[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1)
    n.children = o;
  else if (1 < c) {
    s = Array(c);
    for (var a = 0; a < c; a++)
      s[a] = arguments[a + 2];
    n.children = s;
  }
  return { $$typeof: y, type: e.type, key: u, ref: i, props: n, _owner: l };
};
r.createContext = function(e) {
  return e = { $$typeof: q, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: V, _context: e }, e.Consumer = e;
};
r.createElement = D;
r.createFactory = function(e) {
  var t = D.bind(null, e);
  return t.type = e, t;
};
r.createRef = function() {
  return { current: null };
};
r.forwardRef = function(e) {
  return { $$typeof: H, render: e };
};
r.isValidElement = k;
r.lazy = function(e) {
  return { $$typeof: B, _payload: { _status: -1, _result: e }, _init: G };
};
r.memo = function(e, t) {
  return { $$typeof: M, type: e, compare: t === void 0 ? null : t };
};
r.startTransition = function(e) {
  var t = m.transition;
  m.transition = {};
  try {
    e();
  } finally {
    m.transition = t;
  }
};
r.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
r.useCallback = function(e, t) {
  return f.current.useCallback(e, t);
};
r.useContext = function(e) {
  return f.current.useContext(e);
};
r.useDebugValue = function() {
};
r.useDeferredValue = function(e) {
  return f.current.useDeferredValue(e);
};
r.useEffect = function(e, t) {
  return f.current.useEffect(e, t);
};
r.useId = function() {
  return f.current.useId();
};
r.useImperativeHandle = function(e, t, o) {
  return f.current.useImperativeHandle(e, t, o);
};
r.useInsertionEffect = function(e, t) {
  return f.current.useInsertionEffect(e, t);
};
r.useLayoutEffect = function(e, t) {
  return f.current.useLayoutEffect(e, t);
};
r.useMemo = function(e, t) {
  return f.current.useMemo(e, t);
};
r.useReducer = function(e, t, o) {
  return f.current.useReducer(e, t, o);
};
r.useRef = function(e) {
  return f.current.useRef(e);
};
r.useState = function(e) {
  return f.current.useState(e);
};
r.useSyncExternalStore = function(e, t, o) {
  return f.current.useSyncExternalStore(e, t, o);
};
r.useTransition = function() {
  return f.current.useTransition();
};
r.version = "18.2.0";
C.exports = r;
var Q = C.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X = Q, Z = Symbol.for("react.element"), ee = Symbol.for("react.fragment"), te = Object.prototype.hasOwnProperty, re = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
function L(e, t, o) {
  var n, u = {}, i = null, l = null;
  o !== void 0 && (i = "" + o), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (n in t)
    te.call(t, n) && !ne.hasOwnProperty(n) && (u[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      u[n] === void 0 && (u[n] = t[n]);
  return { $$typeof: Z, type: e, key: i, ref: l, props: u, _owner: re.current };
}
v.Fragment = ee;
v.jsx = L;
v.jsxs = L;
b.exports = v;
var oe = b.exports;
const ue = {
  name: "flint-plugin",
  version: "0.0.1",
  init() {
    console.log("Hello from flint-plugin!");
  },
  renderCommandItems: ({ setOpen: e }) => [
    {
      value: "Hello World",
      onSelect: async () => {
        await window.flint.db.tasks.createTask("Hello World", "command menu"), setTimeout(() => {
          e(!1);
        }, 1e3);
      },
      children: /* @__PURE__ */ oe.jsx("div", { children: "Hello World" })
    }
  ]
};
window.flint.registerPlugin(ue);
