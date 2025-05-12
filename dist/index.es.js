import { jsx as p, jsxs as V, Fragment as it } from "react/jsx-runtime";
import * as fe from "react";
import ee, { useMemo as ue, useRef as te, useState as Le, useEffect as D, useImperativeHandle as ut, memo as at } from "react";
import { useDisclosure as ct, useControllableState as ft, useUpdateEffect as pt, forwardRef as H, Popover as dt, chakra as gt, useMergeRefs as Pe, Flex as pe, Box as Xe, Divider as $e, InputGroup as mt, Input as vt, InputRightElement as ht, Spinner as Ze, useMultiStyleConfig as yt, Wrap as bt, WrapItem as qe, PopoverAnchor as Ct, PopoverContent as St, Center as xt, Tag as At, TagLabel as It, TagCloseButton as wt } from "@chakra-ui/react";
const [Ot, j] = Et();
function Et() {
  const e = fe.createContext(void 0);
  e.displayName = "AutoCompleteContext";
  function t() {
    var o;
    const n = fe.useContext(e), r = "useAutoCompleteContext: `context` is undefined. Seems you forgot to wrap all autoomplete components within `<AutoComplete />`";
    if (!n) {
      const l = new Error(r);
      throw l.name = "ContextError", (o = Error.captureStackTrace) == null || o.call(Error, l, t), l;
    }
    return n;
  }
  return [e.Provider, t, e];
}
function Ft(e) {
  return e == null ? void 0 : e[0];
}
function Ne(e) {
  return e != null && e.length ? e[e.length - 1] : void 0;
}
function et(e, t, n = 1, r = !0) {
  if (t === 0) return -1;
  let o = e + n;
  return e === -1 && (o = n > 0 ? 0 : t - 1), r ? o = (o % t + t) % t : o = Math.max(0, Math.min(o, t - 1)), o;
}
function Lt(e, t, n = !0) {
  return et(e, t, -1, n);
}
function Nt(e, t, n = !0) {
  const r = et(e, t.length, 1, n);
  return t[r];
}
function Pt(e, t, n = !0) {
  const r = Lt(e, t.length, n);
  return t[r];
}
function De(e) {
  return Array.isArray(e);
}
function Dt(e) {
  return De(e) && e.length === 0;
}
function Re(e) {
  return e !== null && typeof e == "object" && !De(e);
}
function Rt(e) {
  return Re(e) && Object.keys(e).length === 0;
}
function Te(e) {
  return De(e) ? Dt(e) : Re(e) ? Rt(e) : e == null || e === "";
}
function ce(e) {
  return typeof e > "u";
}
function tt(e) {
  return typeof e < "u";
}
function Tt(e, t) {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
}
function Me(e, t) {
  const n = { ...e };
  return t.forEach((r) => {
    delete n[r];
  }), n;
}
function Mt(e) {
  return typeof e == "function";
}
function m(e, ...t) {
  return Mt(e) ? e(...t) : e;
}
var de = function(e, t) {
  for (var n, r = fe.Children.toArray(e), o = 0, l = r; o < l.length; o++) {
    var i = l[o];
    if (t(i))
      return i;
    if (!((n = i.props) === null || n === void 0) && n.children) {
      var u = de(i.props.children, t);
      if (u)
        return u;
    }
  }
}, ae = function(e, t) {
  for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
    e[o] = t[n];
  return e;
}, nt = function(e, t) {
  for (var n, r = fe.Children.toArray(e), o = [], l = 0, i = r; l < i.length; l++) {
    var u = i[l];
    t(u) && (o = ae(ae([], o), [u])), !((n = u.props) === null || n === void 0) && n.children && (o = ae(ae([], o), nt(u.props.children, t)));
  }
  return o;
};
function Ke(e, t, n = 2) {
  function r(c, O) {
    c = " ".repeat(O - 1) + c.toLowerCase() + " ".repeat(O - 1);
    let C = new Array(c.length - O + 1);
    for (let I = 0; I < C.length; I++)
      C[I] = c.slice(I, I + O);
    return C;
  }
  if (!(e != null && e.length) || !(t != null && t.length))
    return 0;
  let o = e.length < t.length ? e : t, l = e.length < t.length ? t : e, i = r(o, n), u = r(l, n), v = new Set(i), h = u.length, b = 0;
  for (let c of u)
    v.delete(c) && b++;
  return b / h;
}
const _e = (e) => {
  var t;
  return (t = typeof e == "string" || typeof e == "number" ? e : e[Object.keys(e)[0]]) == null ? void 0 : t.toString();
}, _t = (e, t) => typeof e != "string" || Te(t) ? e : e.toString().replace(
  new RegExp(kt(t), "gi"),
  (r) => `<mark>${r}</mark>`
), Gt = (e) => nt(
  e,
  (n) => {
    var r;
    return ((r = n == null ? void 0 : n.type) == null ? void 0 : r.displayName) === "AutoCompleteItem";
  }
).map((n) => {
  const r = Tt(n.props, ["value", "label", "fixed", "disabled"]), { getValue: o = _e } = n.props, l = o(r.value);
  return { ...tt(r.label) ? r : { ...r, label: l }, value: l, originalValue: r.value };
}), Wt = () => ({
  bg: "whiteAlpha.100",
  _light: {
    bg: "gray.200"
  }
}), jt = (e, t, n) => (t == null ? void 0 : t.toLowerCase().indexOf(e == null ? void 0 : e.toLowerCase())) >= 0 || (n == null ? void 0 : n.toLowerCase().indexOf(e == null ? void 0 : e.toLowerCase())) >= 0 || Ke(e, t) >= 0.5 || Ke(e, n) >= 0.5;
function kt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
const zt = (e, t) => de(
  e,
  (r) => {
    var o;
    return ((o = r == null ? void 0 : r.type) == null ? void 0 : o.displayName) === "AutoCompleteItem" && r.props.value === (t == null ? void 0 : t.value);
  }
), Bt = (e, t) => de(
  e,
  (r) => {
    var o;
    return ((o = r == null ? void 0 : r.type) == null ? void 0 : o.displayName) === "AutoCompleteItem" && r.props.value === (t == null ? void 0 : t.value);
  }
), Ht = (e, t) => tt(
  de(e, (n) => {
    var o, l;
    const r = m(
      ((o = n.props) == null ? void 0 : o.getValue) || _e,
      ((l = n.props) == null ? void 0 : l.value) || {}
    );
    return t.some((i) => i.value === r);
  })
), Ut = (e, t) => {
  const n = {}, r = {}, { field: o } = e;
  return o && Object.keys(o).forEach((l) => {
    if (l.startsWith("--input") === !1)
      n[l] = o[l];
    else {
      let i = o[l];
      const v = l.replace("--input-", "").replace(/-([a-z])/g, function(h) {
        return h[1].toUpperCase();
      });
      i.indexOf(".") !== -1 && (i = i.substring(i.indexOf(".") + 1)), r[v] = i;
    }
  }), {
    ...t && {
      ...n,
      ...r,
      _focusWithin: e.field._focus,
      pos: "relative",
      minH: 9,
      // px: 3,
      py: 1.5,
      spacing: 3
    },
    cursor: "text",
    h: "fit-content"
    // w: "full",
  };
};
function Qt(e) {
  var He;
  let {
    prefocusFirstItem: t = !0,
    closeOnBlur: n = !0,
    creatable: r,
    emphasize: o,
    emptyState: l = !0,
    defaultEmptyStateProps: i = {},
    freeSolo: u,
    isReadOnly: v,
    listAllValuesOnFocus: h,
    maxSuggestions: b,
    multiple: c,
    closeOnSelect: O = !c,
    defaultValue: C,
    defaultValues: I = C ? [C] : [],
    onReady: U,
    defaultIsOpen: k,
    disableFilter: ne,
    isLoading: ge = !1,
    placement: oe = "bottom",
    restoreOnBlurIfEmpty: Y = !u,
    shouldRenderSuggestions: me = () => !0,
    submitKeys: ve = [],
    suggestWhenEmpty: re,
    value: z,
    values: J = z ? typeof z == "string" ? [z] : [...z] : void 0
  } = e;
  u = u || (c ? !0 : e.freeSolo);
  const { isOpen: w, onClose: _, onOpen: Q } = ct({ defaultIsOpen: k }), he = ue(
    () => m(e.children, {
      isOpen: w,
      onClose: _,
      onOpen: Q
    }),
    [e.children, w]
  ), E = ue(() => Gt(he), [he]), N = te(null), Ge = te(null), X = te(null), $ = te(null), [We, se] = Le(!1);
  let le = "";
  c ? le = "" : ce(I) ? ce(J) || (le = J[0]) : le = I[0];
  const [R, Z] = Le(le ?? ""), ye = ue(
    () => ne ? E : E.filter(
      (s) => s.fixed || m(
        e.filter || jt,
        R,
        s.value,
        s.label
      ) || We
    ).filter(
      (s, a) => b ? s.fixed || a < b : !0
    ),
    [R, E, We, b, ne]
  ), je = r ? [{ value: R, noFilter: !0, creatable: !0 }] : [], y = ue(() => [...ye, ...je], [ye, je]), [T, be] = ft({
    defaultValue: I.map((s) => s == null ? void 0 : s.toString()),
    value: J,
    onChange: (s) => {
      const a = y.find((F) => F.value === s.at(-1));
      if (!a) return;
      const d = s.map(
        (F) => y.find((L) => L.value === F)
      );
      m(
        e.onChange,
        c ? s : s[0],
        c ? d : a
      );
    }
  });
  D(() => {
    y.length === 0 && !l && w && _();
  }, [y.length, l, w]);
  const [K, G] = Le(
    t ? (He = E[0]) == null ? void 0 : He.value : null
  ), st = e.maxSelections || T.length + 1, Ce = y.findIndex((s) => s.value === K), Se = Nt(
    Ce,
    y,
    !!e.rollNavigation
  ), xe = Pt(
    Ce,
    y,
    !!e.rollNavigation
  ), P = Ft(y), Ae = Ne(y), ke = !y.some(
    (s) => s.value === K
  );
  D(() => {
    var s;
    ke && G(t ? (s = E[0]) == null ? void 0 : s.value : null);
  }, [ke]), pt(() => {
    t && G(P == null ? void 0 : P.value);
  }, [R, P == null ? void 0 : P.value]), D(() => {
    var s;
    !w && t && G((s = E[0]) == null ? void 0 : s.value);
  }, [w]), D(() => {
    w && h && se(!0);
  }, [w, h, se]), D(() => {
    const s = E.find((a) => a.value === K);
    m(e.onOptionFocus, {
      item: s,
      focusMethod: $.current,
      isNewInput: s == null ? void 0 : s.creatable
    });
  }, [K, e.onOptionFocus]);
  const Ie = (s) => {
    var F, L;
    const a = y.find((x) => x.value === s), d = (a == null ? void 0 : a.label) || (a == null ? void 0 : a.value);
    Z(() => c ? "" : d ?? ""), !T.includes(s) && T.length < st && be((x) => c ? [...x, s] : [s]), c && ((F = N.current) == null || F.focus()), e.focusInputOnSelect && ((L = N.current) == null || L.focus()), m(e.onSelectOption, {
      item: a,
      selectMethod: $.current,
      isNewInput: a == null ? void 0 : a.creatable
    }), a != null && a.creatable && m(e.onCreateOption, {
      item: Me(a, ["noFilter"]),
      selectMethod: $.current
    }), O && _();
  }, ze = (s, a) => {
    var L;
    be((x) => {
      let W = E.find((M) => M.value === s);
      return !W && r === !0 && (W = { label: s, value: s }), W ? (m(e.onTagRemoved, s, W, x), x.filter((M) => M !== s)) : x;
    });
    const d = E.find((x) => x.value === s), F = (d == null ? void 0 : d.label) || (d == null ? void 0 : d.value);
    R === F && Z(""), a && ((L = N.current) == null || L.focus());
  }, lt = (s) => {
    var a;
    be([]), s && ((a = N.current) == null || a.focus());
  }, Be = c ? T.map((s) => {
    var a;
    return {
      label: ((a = E.find((d) => d.value === (s == null ? void 0 : s.toString()))) == null ? void 0 : a.label) || s,
      onRemove: () => ze(s)
    };
  }) : [];
  return D(() => {
    m(U, { tags: Be });
  }, [T]), {
    autoCompleteProps: e,
    children: he,
    filteredList: y,
    filteredResults: ye,
    focusedValue: K,
    defaultEmptyStateProps: i,
    getEmptyStateProps: (s) => {
      if (y.every((d) => d.noFilter) && l && !r)
        return typeof l == "boolean" ? s : m(l, { query: R });
    },
    getGroupProps: (s) => {
      const a = Ht(s.children, y);
      return {
        divider: {
          hasFirstChild: zt(s.children, P),
          hasLastChild: Bt(
            s.children,
            Ne(y.filter((d) => ce(d == null ? void 0 : d.noFilter)))
          )
        },
        group: {
          display: a ? "initial" : "none"
        }
      };
    },
    getInputProps: (s, a) => {
      const { onBlur: d, onChange: F, onFocus: L, onKeyDown: x, variant: W, ...M } = s;
      return {
        wrapper: {
          ref: Ge,
          onClick: () => {
            var f;
            (f = N == null ? void 0 : N.current) == null || f.focus();
          },
          ...Ut(a, c),
          ...M
        },
        input: {
          isReadOnly: v,
          onFocus: (f) => {
            m(L, f), e.openOnFocus && !v && Q(), e.selectOnFocus && f.target.select(), h && se(!0);
          },
          onBlur: (f) => {
            var B, ie;
            m(d, f);
            const S = f.relatedTarget === (X == null ? void 0 : X.current) || ((B = X.current) == null ? void 0 : B.contains(f.relatedTarget)), g = (ie = Ge.current) == null ? void 0 : ie.contains(
              f.relatedTarget
            );
            if (!S && !g && (n && _(), !T.includes(f.target.value) && Y)) {
              const we = Ne(T), A = E.find(
                (Ee) => Ee.value === we
              ), Oe = (A == null ? void 0 : A.label) || (A == null ? void 0 : A.value) || "";
              Z(Oe);
            }
          },
          onChange: (f) => {
            const S = f.target.value;
            m(F, f), Z(S);
            const g = Te(S);
            m(me, S) && (!g || re) ? Q() : _(), se(!1);
          },
          onKeyDown: (f) => {
            var B;
            m(x, f), $.current = "keyboard";
            const { key: S } = f, g = y[Ce];
            if (["Enter", ...ve].includes(S)) {
              g && !(g != null && g.disabled) && w ? Ie(g == null ? void 0 : g.value) : (B = N.current) == null || B.focus(), f.preventDefault();
              return;
            }
            if (S === "ArrowDown") {
              w ? G(Se == null ? void 0 : Se.value) : Q(), f.preventDefault();
              return;
            }
            if (S === "ArrowUp") {
              w ? G(xe == null ? void 0 : xe.value) : Q(), f.preventDefault();
              return;
            }
            if (S === "Tab") {
              w && g && !(g != null && g.disabled) ? Ie(g == null ? void 0 : g.value) : _();
              return;
            }
            if (S === "Home") {
              G(P == null ? void 0 : P.value), f.preventDefault();
              return;
            }
            if (S === "End") {
              G(Ae == null ? void 0 : Ae.value), f.preventDefault();
              return;
            }
            S === "Escape" && (_(), f.preventDefault());
          },
          value: R,
          variant: c ? "unstyled" : W,
          ...M
        }
      };
    },
    getItemProps: (s, a) => {
      var Ue;
      const {
        _fixed: d,
        _focus: F,
        children: L,
        disabled: x,
        label: W,
        value: M,
        fixed: f,
        getValue: S = _e,
        onClick: g,
        onMouseOver: B,
        sx: ie,
        ...we
      } = s, A = a ? M : (Ue = S(M)) == null ? void 0 : Ue.toString(), Oe = A === K, Ee = y.findIndex((q) => q.value === A) >= 0, Fe = L || W || A;
      return {
        item: {
          ...typeof Fe != "string" || !o ? { children: Fe } : {
            dangerouslySetInnerHTML: {
              __html: _t(Fe, R)
            }
          },
          "aria-selected": T.includes(A),
          "aria-disabled": x,
          _disabled: { opacity: 0.4, cursor: "not-allowed", userSelect: "none" },
          onClick: (q) => {
            var Qe;
            m(g, q), x ? (Qe = N.current) == null || Qe.focus() : Ie(A);
          },
          onMouseOver: (q) => {
            m(B, q), G(A), $.current = "mouse";
          },
          sx: {
            ...ie,
            mark: {
              color: "inherit",
              bg: "transparent",
              ...Re(o) ? o : {
                fontWeight: o ? "extrabold" : "inherit"
              }
            }
          },
          ...Oe && (F || Wt()),
          ...f && d,
          ...we
        },
        root: {
          isValidSuggestion: Ee,
          value: A
        }
      };
    },
    inputRef: N,
    interactionRef: $,
    isLoading: ge,
    isOpen: w,
    itemList: E,
    listRef: X,
    onClose: _,
    onOpen: Q,
    placement: oe,
    query: R,
    removeItem: ze,
    resetItems: lt,
    setQuery: Z,
    tags: Be,
    value: z,
    values: T
  };
}
const $t = H(
  (e, t) => {
    const n = Qt(e), {
      children: r,
      isOpen: o,
      onClose: l,
      onOpen: i,
      placement: u,
      resetItems: v,
      removeItem: h
    } = n;
    ut(t, () => ({
      resetItems: v,
      removeItem: h
    }));
    const { matchWidth: b = !0 } = n.autoCompleteProps;
    return /* @__PURE__ */ p(Ot, { value: n, children: /* @__PURE__ */ p(
      dt,
      {
        isLazy: !0,
        isOpen: o,
        autoFocus: !1,
        placement: u,
        closeOnBlur: !0,
        matchWidth: b,
        children: /* @__PURE__ */ p(gt.div, { w: "full", ref: t, children: r })
      }
    ) });
  }
);
$t.displayName = "AutoComplete";
const Kt = H(
  (e, t) => {
    const {
      focusedValue: n,
      getItemProps: r,
      interactionRef: o
    } = j(), l = te(), i = Pe(t, l), u = r(e), { isValidSuggestion: v, value: h } = u.root, b = n === h;
    D(() => {
      var U;
      b && o.current === "keyboard" && ((U = l == null ? void 0 : l.current) == null || U.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      }));
    }, [b, o]), D(() => {
      typeof h != "string" && console.warn("wow"), typeof h != "string" && ce(e.getValue) && console.error(
        "You must define the `getValue` prop, when an Item's value is not a string"
      );
    }, []);
    const { children: c, dangerouslySetInnerHTML: O, ...C } = u.item, I = Me(C, ["groupId"]);
    return v ? /* @__PURE__ */ p(pe, { ref: i, ...ot, ...I, children: c || /* @__PURE__ */ p("span", { dangerouslySetInnerHTML: O }) }) : null;
  }
);
Kt.displayName = "AutoCompleteItem";
const ot = {
  mx: "2",
  px: "2",
  py: "2",
  rounded: "md",
  cursor: "pointer"
};
function Vt(e) {
  const { alwaysDisplay: t, children: n, ...r } = e, {
    autoCompleteProps: o,
    getItemProps: l,
    query: i,
    filteredResults: u
  } = j(), { children: v, ...h } = l(
    {
      ...e,
      value: i,
      children: m(n, {
        value: i
      })
    },
    !0
  ).item, b = u.some((C) => C.value === i), c = Te(i) ? t : !0;
  return o.creatable && c && !b ? /* @__PURE__ */ p(pe, { ...ot, ...h, ...r, children: v || `Add ${i}` }) : null;
}
Vt.displayName = "AutoCompleteCreatable";
const Yt = H(
  (e, t) => {
    const { children: n, showDivider: r, ...o } = e, l = Me(o, ["groupSibling"]), { getGroupProps: i } = j(), { group: u } = i(e), v = Zt(e);
    return /* @__PURE__ */ V(Xe, { ref: t, ...u, ...l, children: [
      /* @__PURE__ */ p($e, { ...v.top }),
      n,
      /* @__PURE__ */ p($e, { ...v.bottom })
    ] });
  }
), Jt = H(
  (e, t) => /* @__PURE__ */ p(pe, { ...Xt, ...e, ref: t })
);
Yt.displayName = "AutoCompleteGroup";
Jt.displayName = "AutoCompleteGroupTitle";
const Xt = {
  ml: 5,
  my: 1,
  fontSize: "xs",
  letterSpacing: "wider",
  fontWeight: "extrabold",
  textTransform: "uppercase"
}, Zt = (e) => {
  const { getGroupProps: t } = j(), n = e.groupSibling, {
    divider: { hasFirstChild: r, hasLastChild: o }
  } = t(e), l = {
    my: 2,
    borderColor: e.dividerColor
  }, i = {
    ...l,
    mb: 4,
    display: !e.showDivider || r ? "none" : ""
  }, u = {
    ...l,
    display: !e.showDivider || o || n ? "none" : ""
  };
  return { top: i, bottom: u };
}, Ve = H((e, t) => {
  const { isLoading: n } = j(), { loadingIcon: r, ...o } = e;
  return /* @__PURE__ */ V(mt, { children: [
    /* @__PURE__ */ p(vt, { ...o, ref: t }),
    n && /* @__PURE__ */ p(ht, { children: r || /* @__PURE__ */ p(Ze, {}) })
  ] });
}), rt = H(
  (e, t) => {
    const {
      autoCompleteProps: n,
      inputRef: r,
      getInputProps: o,
      tags: l,
      setQuery: i,
      value: u,
      itemList: v
    } = j(), {
      children: h,
      isInvalid: b,
      hidePlaceholder: c,
      ...O
    } = e, { value: C } = O;
    D(() => {
      if (u !== void 0 && (typeof u == "string" || u instanceof String)) {
        const re = v.find((J) => J.value === u), z = re === void 0 ? u : re.label;
        i(z);
      }
    }, [u]), D(() => {
      C !== void 0 && (typeof C == "string" || C instanceof String) && i(C);
    }, [C]);
    const I = yt("Input", e);
    let { wrapper: U, input: k } = o(O, I);
    const { ref: ne, ...ge } = U, oe = Pe(t, r), Y = m(h, { tags: l });
    c && (k = {
      ...k,
      placeholder: Array.isArray(Y) && Y.length ? void 0 : k.placeholder
    });
    const me = /* @__PURE__ */ p(
      Ve,
      {
        isInvalid: b,
        ...k,
        ref: oe
      }
    ), ve = /* @__PURE__ */ V(bt, { "aria-invalid": b, ...ge, ref: ne, children: [
      Y,
      /* @__PURE__ */ p(
        qe,
        {
          as: Ve,
          ...k,
          ref: oe
        }
      )
    ] });
    return /* @__PURE__ */ p(Ct, { children: n.multiple ? ve : me });
  }
);
rt.displayName = "Input";
rt.id = "Input";
const qt = (e) => {
  const { getEmptyStateProps: t, defaultEmptyStateProps: n } = j(), r = t(
    /* @__PURE__ */ p(pe, { ...en, ...n, children: "No options found!" })
  );
  return /* @__PURE__ */ p(Xe, { ...e, children: r });
}, en = {
  fontSize: "sm",
  align: "center",
  justify: "center",
  fontWeight: "bold",
  fontStyle: "italic"
}, Ye = [
  "AutoCompleteGroup",
  "AutoCompleteItem",
  "AutoCompleteCreatable"
], tn = (e) => {
  const t = ee.Children.map(e, (o, l) => {
    var i;
    if (((i = o == null ? void 0 : o.type) == null ? void 0 : i.displayName) === "AutoCompleteGroup") {
      const u = ee.Children.toArray(e)[l + 1];
      return ee.cloneElement(o, {
        groupSibling: u ? u.type.displayName === "AutoCompleteGroup" : !1
      });
    }
    return o;
  }), n = ee.Children.toArray(t).filter(
    (o) => {
      var l;
      return !Ye.includes(
        (l = o == null ? void 0 : o.type) == null ? void 0 : l.displayName
      );
    }
  );
  return [ee.Children.toArray(t).filter(
    (o) => {
      var l;
      return Ye.includes(
        (l = o == null ? void 0 : o.type) == null ? void 0 : l.displayName
      );
    }
  ), n];
}, nn = H(
  (e, t) => {
    const { children: n, loadingState: r, ...o } = e, { listRef: l, isLoading: i } = j(), u = Pe(t, l), [v, h] = tn(n);
    return /* @__PURE__ */ V(St, { ref: u, w: "inherit", ...on, ...o, children: [
      i && /* @__PURE__ */ p(xt, { children: r || /* @__PURE__ */ p(Ze, { size: "md" }) }),
      !i && /* @__PURE__ */ V(it, { children: [
        v,
        /* @__PURE__ */ p(qt, {}),
        h
      ] })
    ] });
  }
);
nn.displayName = "AutoCompleteList";
const on = {
  py: "4",
  opacity: "0",
  bg: "#232934",
  rounded: "md",
  maxH: "350px",
  border: "none",
  shadow: "base",
  zIndex: "popover",
  overflowY: "auto",
  _light: {
    bg: "#ffffff"
  },
  _focus: {
    boxShadow: "none"
  }
}, pn = at((e) => {
  const { label: t, onRemove: n, disabled: r, ...o } = e;
  return /* @__PURE__ */ p(qe, { children: /* @__PURE__ */ V(
    At,
    {
      borderRadius: "md",
      fontWeight: "normal",
      ...r && Je,
      ...o,
      children: [
        /* @__PURE__ */ p(It, { children: t }),
        /* @__PURE__ */ p(
          wt,
          {
            onClick: () => !r && m(n),
            cursor: "pointer",
            ...r && Je
          }
        )
      ]
    }
  ) });
}), Je = {
  cursor: "text",
  userSelect: "none",
  opacity: 0.4,
  _focus: { boxShadow: "none" }
};
export {
  $t as AutoComplete,
  Vt as AutoCompleteCreatable,
  Yt as AutoCompleteGroup,
  Jt as AutoCompleteGroupTitle,
  rt as AutoCompleteInput,
  Kt as AutoCompleteItem,
  nn as AutoCompleteList,
  Ot as AutoCompleteProvider,
  pn as AutoCompleteTag,
  ot as baseItemStyles,
  Et as createContext,
  Qt as useAutoComplete,
  j as useAutoCompleteContext
};
