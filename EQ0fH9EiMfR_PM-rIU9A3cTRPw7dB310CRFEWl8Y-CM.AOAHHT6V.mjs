import { a as O } from "./chunk-MMXZZU5K.mjs";
import "./chunk-42U43NKG.mjs";
import { a as r, b as a } from "./chunk-5A5Z242V.mjs";
import {
  B as k,
  C as F,
  E as cr,
  F as Z,
  G as pr,
  H as fr,
  I as u,
  K as s,
  P as lr,
  Q as gr,
  R as dr,
  U as n,
  V as d,
  W as C,
  X as hr,
  b as i,
  d as S,
  f as ir,
  g as A,
  h as or,
  i as nr,
  j as v,
  l as K,
  m as o,
  n as I,
  s as L,
  u as Q,
  w as sr,
  z as mr,
} from "./chunk-ACUQTHDA.mjs";
import "./chunk-ELYU6EKT.mjs";
var _r = ["I8A2ij_k3", "onwJx8gxX", "U9gzMylKG", "H3RiJydBn"],
  Hr = "framer-i41Ni",
  Rr = {
    H3RiJydBn: "framer-v-al35y9",
    I8A2ij_k3: "framer-v-tuzw9q",
    onwJx8gxX: "framer-v-pky1yv",
    U9gzMylKG: "framer-v-1qjgecc",
  };
function T(c, ...t) {
  let l = {};
  return t?.forEach((p) => p && Object.assign(l, c[p])), l;
}
var Dr = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Sr = { damping: 21, delay: 0, mass: 1, stiffness: 903, type: "spring" },
  w = { opacity: 1, rotate: 0, scale: 0.9, transition: Sr },
  Ar = ({ value: c, children: t }) => {
    let l = ir(K),
      p = c ?? l.transition,
      f = nr(() => ({ ...l, transition: p }), [JSON.stringify(p)]);
    return r(K.Provider, { value: f, children: t });
  },
  Ir = o(i),
  Lr = {
    "Variant 1": "I8A2ij_k3",
    "Variant 2": "onwJx8gxX",
    "Variant 3": "U9gzMylKG",
    "Variant 4": "H3RiJydBn",
  },
  Qr = ({ height: c, id: t, width: l, ...p }) => {
    var f, g;
    return {
      ...p,
      variant:
        (g = (f = Lr[p.variant]) !== null && f !== void 0 ? f : p.variant) !==
          null && g !== void 0
          ? g
          : "I8A2ij_k3",
    };
  },
  Zr = (c, t) => t.join("-") + c.layoutDependency,
  Cr = S(function (c, t) {
    let { activeLocale: l, setLocale: p } = L(),
      { style: f, className: g, layoutId: y, variant: G, ...V } = Qr(c),
      {
        baseVariant: e,
        classNames: tr,
        gestureVariant: h,
        setGestureState: j,
        setVariant: _,
        transition: M,
        variants: H,
      } = dr({
        cycleOrder: _r,
        defaultVariant: "I8A2ij_k3",
        transitions: Dr,
        variant: G,
        variantClassNames: Rr,
      }),
      m = Zr(c, H),
      { activeVariantCallback: R, delay: ar } = lr(e),
      J = R(async (...jr) => {
        _("U9gzMylKG");
      }),
      Y = R(async (...jr) => {
        _("onwJx8gxX");
      }),
      D = v(null),
      x = () => !!["onwJx8gxX", "U9gzMylKG"].includes(e),
      z = () => e !== "onwJx8gxX",
      W = A(),
      Tr = [];
    return r(I, {
      id: y ?? W,
      children: r(Ir, {
        animate: H,
        initial: !1,
        children: r(Ar, {
          value: M,
          children: a(o.div, {
            ...V,
            className: k(Hr, ...Tr, "framer-tuzw9q", g, tr),
            "data-framer-name": "Variant 1",
            layoutDependency: m,
            layoutId: "I8A2ij_k3",
            onHoverEnd: () => j({ isHovered: !1 }),
            onHoverStart: () => j({ isHovered: !0 }),
            onTap: () => j({ isPressed: !1 }),
            onTapCancel: () => j({ isPressed: !1 }),
            onTapStart: () => j({ isPressed: !0 }),
            ref: t ?? D,
            style: { backgroundColor: "rgba(0, 0, 0, 0)", ...f },
            variants: { U9gzMylKG: { backgroundColor: "rgb(38, 37, 89)" } },
            ...T(
              {
                H3RiJydBn: { "data-framer-name": "Variant 4" },
                onwJx8gxX: { "data-framer-name": "Variant 2" },
                U9gzMylKG: { "data-framer-name": "Variant 3" },
              },
              e,
              h
            ),
            children: [
              x() &&
                a(o.div, {
                  className: "framer-uvqiw3",
                  layoutDependency: m,
                  layoutId: "UKKY4yzmP",
                  children: [
                    r(n, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1500,
                        intrinsicWidth: 1500,
                        pixelHeight: 3e3,
                        pixelWidth: 3e3,
                        sizes: "45px",
                        src: "https://framerusercontent.com/images/mszDKMVLylaDL7EmEqAcKRNCCOM.png?scale-down-to=2048",
                        srcSet:
                          "https://framerusercontent.com/images/mszDKMVLylaDL7EmEqAcKRNCCOM.png?scale-down-to=512 512w, https://framerusercontent.com/images/mszDKMVLylaDL7EmEqAcKRNCCOM.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/mszDKMVLylaDL7EmEqAcKRNCCOM.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/mszDKMVLylaDL7EmEqAcKRNCCOM.png 3000w",
                      },
                      className: "framer-10c6dur",
                      "data-framer-name": "loog",
                      layoutDependency: m,
                      layoutId: "rOJyiVnLq",
                    }),
                    r(o.div, {
                      className: "framer-4ocdjm",
                      "data-border": !0,
                      layoutDependency: m,
                      layoutId: "KkDKvjLsv",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color": "rgb(34, 34, 34)",
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor: "rgb(222, 253, 36)",
                        borderBottomLeftRadius: 11,
                        borderBottomRightRadius: 11,
                        borderTopLeftRadius: 11,
                        borderTopRightRadius: 11,
                        boxShadow: "inset 0px -6px 0px 0px rgb(218, 190, 85)",
                      },
                      whileHover: w,
                      ...T(
                        {
                          onwJx8gxX: { "data-highlight": !0, onTap: J },
                          U9gzMylKG: { "data-highlight": !0, onTap: Y },
                        },
                        e,
                        h
                      ),
                      children: r(d, {
                        __fromCanvasComponent: !0,
                        children: r(i, {
                          children: r(o.p, {
                            style: {
                              "--font-selector": "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                              "--framer-font-family":
                                '"Londrina Solid", sans-serif',
                              "--framer-font-size": "29px",
                              "--framer-font-weight": "300",
                            },
                            children: "=",
                          }),
                        }),
                        className: "framer-1puwy6r",
                        fonts: ["GF;Londrina Solid-300"],
                        layoutDependency: m,
                        layoutId: "Evp7njiH6",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                        ...T(
                          {
                            U9gzMylKG: {
                              children: r(i, {
                                children: r(o.p, {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                    "--framer-font-family":
                                      '"Londrina Solid", sans-serif',
                                    "--framer-font-size": "29px",
                                    "--framer-font-weight": "300",
                                  },
                                  children: "-",
                                }),
                              }),
                            },
                          },
                          e,
                          h
                        ),
                      }),
                    }),
                  ],
                }),
              z() &&
                a(o.div, {
                  className: "framer-1q63cbz",
                  layoutDependency: m,
                  layoutId: "P4fo_otb2",
                  children: [
                    r(u, {
                      href: { hash: ":kQ2rn1Tqx", webPageId: "augiA20Il" },
                      openInNewTab: !1,
                      children: r(o.a, {
                        className: "framer-18jwrv5 framer-qv9m9v",
                        "data-border": !0,
                        layoutDependency: m,
                        layoutId: "VGIBNT1ne",
                        style: {
                          "--border-bottom-width": "2px",
                          "--border-color": "rgb(34, 34, 34)",
                          "--border-left-width": "2px",
                          "--border-right-width": "2px",
                          "--border-style": "solid",
                          "--border-top-width": "2px",
                          backgroundColor: "rgb(222, 253, 36)",
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: "inset 0px -6px 0px 0px rgb(218, 190, 85)",
                        },
                        whileHover: w,
                        children: r(d, {
                          __fromCanvasComponent: !0,
                          children: r(i, {
                            children: r(o.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                "--framer-font-family":
                                  '"Londrina Solid", sans-serif',
                                "--framer-font-size": "29px",
                                "--framer-font-weight": "300",
                              },
                              children: "Meet $P3P3",
                            }),
                          }),
                          className: "framer-vc52ya",
                          fonts: ["GF;Londrina Solid-300"],
                          layoutDependency: m,
                          layoutId: "UjCmJ5e6A",
                          style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                          ...T(
                            {
                              H3RiJydBn: {
                                children: r(i, {
                                  children: r(o.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                      "--framer-font-family":
                                        '"Londrina Solid", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-font-weight": "300",
                                    },
                                    children: "Meet $P3P3",
                                  }),
                                }),
                              },
                            },
                            e,
                            h
                          ),
                        }),
                      }),
                    }),
                    r(u, {
                      href: { hash: ":IxOxPP9cG", webPageId: "augiA20Il" },
                      openInNewTab: !1,
                      children: r(o.a, {
                        className: "framer-zlc5mw framer-qv9m9v",
                        "data-border": !0,
                        layoutDependency: m,
                        layoutId: "C_dTzeR2W",
                        style: {
                          "--border-bottom-width": "2px",
                          "--border-color": "rgb(34, 34, 34)",
                          "--border-left-width": "2px",
                          "--border-right-width": "2px",
                          "--border-style": "solid",
                          "--border-top-width": "2px",
                          backgroundColor: "rgb(222, 253, 36)",
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: "inset 0px -6px 0px 0px rgb(218, 190, 85)",
                        },
                        whileHover: w,
                        children: r(d, {
                          __fromCanvasComponent: !0,
                          children: r(i, {
                            children: r(o.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                "--framer-font-family":
                                  '"Londrina Solid", sans-serif',
                                "--framer-font-size": "29px",
                                "--framer-font-weight": "300",
                              },
                              children: "PEPTRONIUM",
                            }),
                          }),
                          className: "framer-1eey656",
                          fonts: ["GF;Londrina Solid-300"],
                          layoutDependency: m,
                          layoutId: "XML9cjUkq",
                          style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                          ...T(
                            {
                              H3RiJydBn: {
                                children: r(i, {
                                  children: r(o.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                      "--framer-font-family":
                                        '"Londrina Solid", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-font-weight": "300",
                                    },
                                    children: "PEPTRONIUM",
                                  }),
                                }),
                              },
                            },
                            e,
                            h
                          ),
                        }),
                      }),
                    }),
                    r(u, {
                      href: { hash: ":BE4gtLF2v", webPageId: "augiA20Il" },
                      openInNewTab: !1,
                      children: r(o.a, {
                        className: "framer-46w7o5 framer-qv9m9v",
                        "data-border": !0,
                        layoutDependency: m,
                        layoutId: "XFXht5R7G",
                        style: {
                          "--border-bottom-width": "2px",
                          "--border-color": "rgb(34, 34, 34)",
                          "--border-left-width": "2px",
                          "--border-right-width": "2px",
                          "--border-style": "solid",
                          "--border-top-width": "2px",
                          backgroundColor: "rgb(222, 253, 36)",
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: "inset 0px -6px 0px 0px rgb(218, 190, 85)",
                        },
                        whileHover: w,
                        children: r(d, {
                          __fromCanvasComponent: !0,
                          children: r(i, {
                            children: r(o.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                "--framer-font-family":
                                  '"Londrina Solid", sans-serif',
                                "--framer-font-size": "29px",
                                "--framer-font-weight": "300",
                              },
                              children: "GALAXY RESEARCH",
                            }),
                          }),
                          className: "framer-okl3mu",
                          fonts: ["GF;Londrina Solid-300"],
                          layoutDependency: m,
                          layoutId: "ZRrEK2FXl",
                          style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                          ...T(
                            {
                              H3RiJydBn: {
                                children: r(i, {
                                  children: r(o.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                      "--framer-font-family":
                                        '"Londrina Solid", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-font-weight": "300",
                                    },
                                    children: "GALAXY RESEARCH",
                                  }),
                                }),
                              },
                            },
                            e,
                            h
                          ),
                        }),
                      }),
                    }),
                    r(u, {
                      href: "https://www.dextools.io/app/en/ether/pair-explorer/0x9c572dcd9e1f328b05bd8efe9f2891b5fd7c2e2f",
                      children: r(o.a, {
                        className: "framer-yg2wuo framer-qv9m9v",
                        "data-border": !0,
                        layoutDependency: m,
                        layoutId: "g3jrLmzfH",
                        style: {
                          "--border-bottom-width": "2px",
                          "--border-color": "rgb(34, 34, 34)",
                          "--border-left-width": "2px",
                          "--border-right-width": "2px",
                          "--border-style": "solid",
                          "--border-top-width": "2px",
                          backgroundColor: "rgb(222, 253, 36)",
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: "inset 0px -6px 0px 0px rgb(218, 190, 85)",
                        },
                        whileHover: w,
                        children: r(d, {
                          __fromCanvasComponent: !0,
                          children: r(i, {
                            children: r(o.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                "--framer-font-family":
                                  '"Londrina Solid", sans-serif',
                                "--framer-font-size": "29px",
                                "--framer-font-weight": "300",
                              },
                              children: "DEXTOOLS",
                            }),
                          }),
                          className: "framer-6gos85",
                          fonts: ["GF;Londrina Solid-300"],
                          layoutDependency: m,
                          layoutId: "M1lQDRRZZ",
                          style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                          ...T(
                            {
                              H3RiJydBn: {
                                children: r(i, {
                                  children: r(o.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                      "--framer-font-family":
                                        '"Londrina Solid", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-font-weight": "300",
                                    },
                                    children: "DEXTOOLS",
                                  }),
                                }),
                              },
                            },
                            e,
                            h
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              z() &&
                a(o.div, {
                  className: "framer-16f39k3",
                  layoutDependency: m,
                  layoutId: "CbMeBcSr4",
                  children: [
                    r(u, {
                      href: "https://t.me/p3p3ethportal",
                      children: r(n, {
                        as: "a",
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 36,
                          intrinsicWidth: 39,
                          pixelHeight: 72,
                          pixelWidth: 78,
                          src: "https://framerusercontent.com/images/cevLVs4yTkE3QzvAJY0ujbhvww.png",
                        },
                        className: "framer-w96mji framer-qv9m9v",
                        "data-framer-name": "Group_9",
                        layoutDependency: m,
                        layoutId: "HRdO4V_dE",
                        whileHover: w,
                      }),
                    }),
                    r(u, {
                      href: "https://dexscreener.com/ethereum/0x0000000000000000000",
                      children: r(n, {
                        as: "a",
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 36,
                          intrinsicWidth: 39,
                          pixelHeight: 72,
                          pixelWidth: 78,
                          src: "https://framerusercontent.com/images/Ix9K4LVreNqtxSJCipbMigsIa5Y.png",
                        },
                        className: "framer-129oqz9 framer-qv9m9v",
                        "data-framer-name": "Group_10",
                        layoutDependency: m,
                        layoutId: "wD0LZ73H7",
                        whileHover: w,
                      }),
                    }),
                    r(u, {
                      href: "https://x.com/p3p3oneth",
                      children: r(n, {
                        as: "a",
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 36,
                          intrinsicWidth: 39,
                          pixelHeight: 72,
                          pixelWidth: 78,
                          src: "https://framerusercontent.com/images/XrUEevNT1ZOnEBfh2lBwf8LBHtU.png",
                        },
                        className: "framer-x6gmh4 framer-qv9m9v",
                        "data-framer-name": "Group_11",
                        layoutDependency: m,
                        layoutId: "Yx0NhfBkr",
                        whileHover: w,
                      }),
                    }),
                  ],
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Er = [
    '.framer-i41Ni[data-border="true"]::after, .framer-i41Ni [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-i41Ni.framer-qv9m9v, .framer-i41Ni .framer-qv9m9v { display: block; }",
    ".framer-i41Ni.framer-tuzw9q { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: min-content; }",
    ".framer-i41Ni .framer-uvqiw3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 350px; }",
    ".framer-i41Ni .framer-10c6dur { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 45px); overflow: visible; position: relative; width: 45px; }",
    ".framer-i41Ni .framer-4ocdjm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 2px 15px 2px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-i41Ni .framer-1puwy6r, .framer-i41Ni .framer-vc52ya, .framer-i41Ni .framer-1eey656, .framer-i41Ni .framer-okl3mu, .framer-i41Ni .framer-6gos85 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-i41Ni .framer-1q63cbz, .framer-i41Ni .framer-16f39k3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-i41Ni .framer-18jwrv5, .framer-i41Ni .framer-zlc5mw, .framer-i41Ni .framer-46w7o5, .framer-i41Ni .framer-yg2wuo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 2px 15px 2px 15px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-i41Ni .framer-w96mji, .framer-i41Ni .framer-129oqz9 { aspect-ratio: 1.0833333333333333 / 1; flex: none; height: 38px; overflow: visible; position: relative; text-decoration: none; width: var(--framer-aspect-ratio-supported, 41px); }",
    ".framer-i41Ni .framer-x6gmh4 { aspect-ratio: 1.0833333333333333 / 1; flex: none; height: 38px; overflow: visible; position: relative; text-decoration: none; width: var(--framer-aspect-ratio-supported, 42px); }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-i41Ni.framer-tuzw9q, .framer-i41Ni .framer-4ocdjm, .framer-i41Ni .framer-1q63cbz, .framer-i41Ni .framer-18jwrv5, .framer-i41Ni .framer-zlc5mw, .framer-i41Ni .framer-46w7o5, .framer-i41Ni .framer-yg2wuo, .framer-i41Ni .framer-16f39k3 { gap: 0px; } .framer-i41Ni.framer-tuzw9q > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } .framer-i41Ni.framer-tuzw9q > :first-child, .framer-i41Ni .framer-4ocdjm > :first-child, .framer-i41Ni .framer-1q63cbz > :first-child, .framer-i41Ni .framer-18jwrv5 > :first-child, .framer-i41Ni .framer-zlc5mw > :first-child, .framer-i41Ni .framer-46w7o5 > :first-child, .framer-i41Ni .framer-yg2wuo > :first-child, .framer-i41Ni .framer-16f39k3 > :first-child { margin-left: 0px; } .framer-i41Ni.framer-tuzw9q > :last-child, .framer-i41Ni .framer-4ocdjm > :last-child, .framer-i41Ni .framer-1q63cbz > :last-child, .framer-i41Ni .framer-18jwrv5 > :last-child, .framer-i41Ni .framer-zlc5mw > :last-child, .framer-i41Ni .framer-46w7o5 > :last-child, .framer-i41Ni .framer-yg2wuo > :last-child, .framer-i41Ni .framer-16f39k3 > :last-child { margin-right: 0px; } .framer-i41Ni .framer-4ocdjm > *, .framer-i41Ni .framer-1q63cbz > *, .framer-i41Ni .framer-18jwrv5 > *, .framer-i41Ni .framer-zlc5mw > *, .framer-i41Ni .framer-46w7o5 > *, .framer-i41Ni .framer-yg2wuo > *, .framer-i41Ni .framer-16f39k3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-i41Ni.framer-v-pky1yv.framer-tuzw9q { flex-direction: column; gap: 16px; width: 390px; }",
    ".framer-i41Ni.framer-v-pky1yv .framer-4ocdjm, .framer-i41Ni.framer-v-1qjgecc .framer-4ocdjm { cursor: pointer; width: 50px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-i41Ni.framer-v-pky1yv.framer-tuzw9q { gap: 0px; } .framer-i41Ni.framer-v-pky1yv.framer-tuzw9q > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-i41Ni.framer-v-pky1yv.framer-tuzw9q > :first-child { margin-top: 0px; } .framer-i41Ni.framer-v-pky1yv.framer-tuzw9q > :last-child { margin-bottom: 0px; } }",
    ".framer-i41Ni.framer-v-1qjgecc.framer-tuzw9q { flex-direction: column; gap: 16px; padding: 10px 10px 20px 10px; width: 390px; }",
    ".framer-i41Ni.framer-v-1qjgecc .framer-1q63cbz { flex-direction: column; gap: 22px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-i41Ni.framer-v-1qjgecc.framer-tuzw9q, .framer-i41Ni.framer-v-1qjgecc .framer-1q63cbz { gap: 0px; } .framer-i41Ni.framer-v-1qjgecc.framer-tuzw9q > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-i41Ni.framer-v-1qjgecc.framer-tuzw9q > :first-child, .framer-i41Ni.framer-v-1qjgecc .framer-1q63cbz > :first-child { margin-top: 0px; } .framer-i41Ni.framer-v-1qjgecc.framer-tuzw9q > :last-child, .framer-i41Ni.framer-v-1qjgecc .framer-1q63cbz > :last-child { margin-bottom: 0px; } .framer-i41Ni.framer-v-1qjgecc .framer-1q63cbz > * { margin: 0px; margin-bottom: calc(22px / 2); margin-top: calc(22px / 2); } }",
    ".framer-i41Ni.framer-v-al35y9.framer-tuzw9q { width: 810px; }",
    ".framer-i41Ni.framer-v-al35y9 .framer-w96mji, .framer-i41Ni.framer-v-al35y9 .framer-129oqz9 { height: var(--framer-aspect-ratio-supported, 28px); width: 30px; }",
    ".framer-i41Ni.framer-v-al35y9 .framer-x6gmh4 { height: var(--framer-aspect-ratio-supported, 29px); width: 31px; }",
  ],
  N = Z(Cr, Er, "framer-i41Ni"),
  X = N;
N.displayName = "NavBar";
N.defaultProps = { height: 59, width: 1000.5 };
mr(N, {
  variant: {
    options: ["I8A2ij_k3", "onwJx8gxX", "U9gzMylKG", "H3RiJydBn"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4"],
    title: "Variant",
    type: sr.Enum,
  },
});
C(N, [
  {
    family: "Londrina Solid",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/londrinasolid/v17/flUiRq6sw40kQEJxWNgkLuudGfv1CjYxn53oTrcL.woff2",
    weight: "300",
  },
]);
var Ur = hr(X),
  E = F(n),
  U = F(o.div);
var Br = {
  cYumzBKSK: "(min-width: 1440px) and (max-width: 1535px)",
  fA1y5gD5w: "(min-width: 810px) and (max-width: 1199px)",
  LaZxrGiNk: "(min-width: 1536px) and (max-width: 1919px)",
  PDbPJ3XUS: "(min-width: 1366px) and (max-width: 1439px)",
  pop86DmZB: "(max-width: 413px)",
  r5ZhYrDaU: "(min-width: 414px) and (max-width: 809px)",
  WQLkyLRf1: "(min-width: 1200px) and (max-width: 1365px)",
  wX_bugpP7: "(min-width: 1920px)",
};
var xr = "framer-jocgT",
  qr = {
    cYumzBKSK: "framer-v-s1yjpo",
    fA1y5gD5w: "framer-v-or76v6",
    LaZxrGiNk: "framer-v-1mkhkw8",
    PDbPJ3XUS: "framer-v-urb6hk",
    pop86DmZB: "framer-v-12q4w6e",
    r5ZhYrDaU: "framer-v-sakrg",
    WQLkyLRf1: "framer-v-72rtr7",
    wX_bugpP7: "framer-v-13xprnn",
  },
  Pr = { default: { duration: 0 } },
  B = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Gr = { opacity: 1, rotate: 0, scale: 1, x: 0, y: -10 },
  Vr = (c, t) => `translateY(-50%) ${t}`,
  Mr = { opacity: 1, rotate: 0, scale: 1, x: 15, y: 0 },
  Jr = { opacity: 1, rotate: 0, scale: 1, x: 0, y: 12 },
  $ = (c, t) => `translateX(-50%) ${t}`,
  Yr = { opacity: 0, rotate: 0, scale: 1, x: -150, y: 0 },
  q = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Kr = { opacity: 0, rotate: 0, scale: 1, transition: q, x: -150, y: 0 },
  Fr = { opacity: 1, rotate: 0, scale: 1, x: 0, y: -19 },
  ur = (c, t) => `perspective(1200px) translate(-50%, -50%) ${t}`,
  wr = (c, t) => `perspective(1200px) translateX(-50%) ${t}`,
  Or = { opacity: 0, rotate: 0, scale: 0.5, x: 0, y: 0 },
  Xr = { opacity: 0, rotate: 0, scale: 0.5, transition: q, x: 0, y: 0 },
  $r = { damping: 21, delay: 0, mass: 1, stiffness: 903, type: "spring" },
  re = { opacity: 1, rotate: 0, scale: 0.9, transition: $r },
  rr = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 0 },
  br = { damping: 30, delay: 0, mass: 1, stiffness: 146, type: "spring" },
  ee = { opacity: 0, rotate: 0, scale: 1, transition: br, x: 0, y: 0 },
  er = (c, t) => `perspective(1200px) ${t}`,
  yr = { damping: 30, delay: 0.3, mass: 1, stiffness: 146, type: "spring" },
  te = { opacity: 0, rotate: 0, scale: 1, transition: yr, x: 0, y: 0 },
  vr = { damping: 30, delay: 0.6, mass: 1, stiffness: 146, type: "spring" },
  ae = { opacity: 0, rotate: 0, scale: 1, transition: vr, x: 0, y: 0 },
  b = O(),
  ie = {
    1366: "PDbPJ3XUS",
    1440: "cYumzBKSK",
    1536: "LaZxrGiNk",
    1920: "wX_bugpP7",
    414: "r5ZhYrDaU",
    Desktop: "WQLkyLRf1",
    Phone: "pop86DmZB",
    Tablet: "fA1y5gD5w",
  },
  oe = ({ height: c, id: t, width: l, ...p }) => {
    var f, g;
    return {
      ...p,
      variant:
        (g = (f = ie[p.variant]) !== null && f !== void 0 ? f : p.variant) !==
          null && g !== void 0
          ? g
          : "WQLkyLRf1",
    };
  },
  ne = S(function (c, t) {
    let { activeLocale: l, setLocale: p } = L(),
      { style: f, className: g, layoutId: y, variant: G, ...V } = oe(c);
    or(() => {
      let x = O(void 0, l);
      if (((document.title = x.title || ""), x.viewport)) {
        var z;
        (z = document.querySelector('meta[name="viewport"]')) === null ||
          z === void 0 ||
          z.setAttribute("content", x.viewport);
      }
      if (x.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((W) => W.startsWith("framer-body-"))
            .map((W) => document.body.classList.remove(W)),
          document.body.classList.add(`${x.bodyClassName}-framer-jocgT`),
          () => {
            document.body.classList.remove(`${x.bodyClassName}-framer-jocgT`);
          }
        );
    }, [void 0, l]);
    let [e, tr] = gr(G, Br, !1),
      h = void 0,
      j = Pr.default,
      _ = v(null),
      M = Q("kQ2rn1Tqx"),
      H = v(null),
      m = Q("IxOxPP9cG"),
      R = v(null),
      ar = Q("BE4gtLF2v"),
      J = v(null),
      Y = A(),
      D = [];
    return (
      pr({}),
      r(fr.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: qr },
        children: a(I, {
          id: y ?? Y,
          children: [
            a(o.div, {
              ...V,
              className: k(xr, ...D, "framer-72rtr7", g),
              ref: t ?? _,
              style: { ...f },
              children: [
                r(s, {
                  breakpoint: e,
                  overrides: {
                    pop86DmZB: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 966.5,
                        intrinsicWidth: 960,
                        pixelHeight: 1933,
                        pixelWidth: 1920,
                        sizes: "200vw",
                        src: "https://framerusercontent.com/images/sGvjUDZ12kVJirOIur25mr5Do.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/sGvjUDZ12kVJirOIur25mr5Do.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/sGvjUDZ12kVJirOIur25mr5Do.png 1920w",
                      },
                    },
                    r5ZhYrDaU: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 966.5,
                        intrinsicWidth: 960,
                        pixelHeight: 1933,
                        pixelWidth: 1920,
                        sizes: "215vw",
                        src: "https://framerusercontent.com/images/sGvjUDZ12kVJirOIur25mr5Do.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/sGvjUDZ12kVJirOIur25mr5Do.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/sGvjUDZ12kVJirOIur25mr5Do.png 1920w",
                      },
                    },
                  },
                  children: a(n, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 966.5,
                      intrinsicWidth: 960,
                      pixelHeight: 1933,
                      pixelWidth: 1920,
                      sizes: "100vw",
                      src: "https://framerusercontent.com/images/sGvjUDZ12kVJirOIur25mr5Do.png?scale-down-to=1024",
                      srcSet:
                        "https://framerusercontent.com/images/sGvjUDZ12kVJirOIur25mr5Do.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/sGvjUDZ12kVJirOIur25mr5Do.png 1920w",
                    },
                    className: "framer-17718ql",
                    "data-framer-name": "Block_1_BGL",
                    name: "Block_1_BGL",
                    children: [
                      r(cr, {
                        className: "framer-1r6v3qm-container",
                        children: r(s, {
                          breakpoint: e,
                          overrides: {
                            fA1y5gD5w: { variant: "H3RiJydBn" },
                            pop86DmZB: { variant: "onwJx8gxX" },
                            r5ZhYrDaU: { variant: "onwJx8gxX" },
                          },
                          children: r(X, {
                            height: "100%",
                            id: "R5nSfY1ZR",
                            layoutId: "R5nSfY1ZR",
                            variant: "I8A2ij_k3",
                            width: "100%",
                          }),
                        }),
                      }),
                      r(s, {
                        breakpoint: e,
                        overrides: {
                          pop86DmZB: { transformTemplate: void 0 },
                          r5ZhYrDaU: { transformTemplate: void 0 },
                        },
                        children: r(E, {
                          __framer__loop: Gr,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: B,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 198,
                            intrinsicWidth: 193,
                            pixelHeight: 396,
                            pixelWidth: 386,
                            src: "https://framerusercontent.com/images/507QCiHNY023MqrNCyShgnxmEh8.png",
                          },
                          className: "framer-b48gtc",
                          "data-framer-name": "Purple_OVNI",
                          name: "Purple_OVNI",
                          transformTemplate: Vr,
                        }),
                      }),
                      r(s, {
                        breakpoint: e,
                        overrides: {
                          fA1y5gD5w: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 183,
                              intrinsicWidth: 279,
                              pixelHeight: 366,
                              pixelWidth: 558,
                              sizes: "21.9276vw",
                              src: "https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png?scale-down-to=512 512w, https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png 558w",
                            },
                          },
                          pop86DmZB: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 183,
                              intrinsicWidth: 279,
                              pixelHeight: 366,
                              pixelWidth: 558,
                              sizes: "43.8552vw",
                              src: "https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png?scale-down-to=512 512w, https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png 558w",
                            },
                          },
                          r5ZhYrDaU: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 183,
                              intrinsicWidth: 279,
                              pixelHeight: 366,
                              pixelWidth: 558,
                              sizes: "35.5112vw",
                              src: "https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png?scale-down-to=512 512w, https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png 558w",
                            },
                          },
                        },
                        children: r(E, {
                          __framer__loop: Mr,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: B,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 183,
                            intrinsicWidth: 279,
                            pixelHeight: 366,
                            pixelWidth: 558,
                            sizes: "24.0833vw",
                            src: "https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png?scale-down-to=512",
                            srcSet:
                              "https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png?scale-down-to=512 512w, https://framerusercontent.com/images/NCLGDRymPTtzzKBOofK665mWCw.png 558w",
                          },
                          className: "framer-10wrvng",
                          "data-framer-name": "Orange_OVNI",
                          name: "Orange_OVNI",
                        }),
                      }),
                      r(s, {
                        breakpoint: e,
                        overrides: {
                          fA1y5gD5w: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 249,
                              intrinsicWidth: 297.5,
                              pixelHeight: 498,
                              pixelWidth: 595,
                              sizes: "28.5621vw",
                              src: "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512 512w, https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png 595w",
                            },
                          },
                          pop86DmZB: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 249,
                              intrinsicWidth: 297.5,
                              pixelHeight: 498,
                              pixelWidth: 595,
                              sizes: "48.9744vw",
                              src: "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512 512w, https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png 595w",
                            },
                          },
                          r5ZhYrDaU: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 249,
                              intrinsicWidth: 297.5,
                              pixelHeight: 498,
                              pixelWidth: 595,
                              sizes: "52.6474vw",
                              src: "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512 512w, https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png 595w",
                            },
                          },
                          wX_bugpP7: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 249,
                              intrinsicWidth: 297.5,
                              loading: "lazy",
                              pixelHeight: 498,
                              pixelWidth: 595,
                              sizes: "31.3333vw",
                              src: "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512 512w, https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png 595w",
                            },
                          },
                        },
                        children: r(E, {
                          __framer__loop: Jr,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: B,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 249,
                            intrinsicWidth: 297.5,
                            pixelHeight: 498,
                            pixelWidth: 595,
                            sizes: "31.3333vw",
                            src: "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512",
                            srcSet:
                              "https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png?scale-down-to=512 512w, https://framerusercontent.com/images/3CHsb1uz2sxwawaZQFtN5I3OtjA.png 595w",
                          },
                          className: "framer-rux8k9",
                          "data-framer-name": "Green_OVNI",
                          name: "Green_OVNI",
                        }),
                      }),
                    ],
                  }),
                }),
                r(s, {
                  breakpoint: e,
                  overrides: {
                    fA1y5gD5w: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 121.5,
                        intrinsicWidth: 960,
                        pixelHeight: 243,
                        pixelWidth: 1920,
                        sizes: "100vw",
                        src: "https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=512 512w, https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png 1920w",
                      },
                    },
                    pop86DmZB: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 121.5,
                        intrinsicWidth: 960,
                        pixelHeight: 243,
                        pixelWidth: 1920,
                        sizes: "150vw",
                        src: "https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=512 512w, https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png 1920w",
                      },
                    },
                    r5ZhYrDaU: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 121.5,
                        intrinsicWidth: 960,
                        pixelHeight: 243,
                        pixelWidth: 1920,
                        sizes: "150vw",
                        src: "https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=512 512w, https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png 1920w",
                      },
                    },
                  },
                  children: r(n, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 121.5,
                      intrinsicWidth: 960,
                      loading: "lazy",
                      pixelHeight: 243,
                      pixelWidth: 1920,
                      sizes: "100vw",
                      src: "https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=1024",
                      srcSet:
                        "https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=512 512w, https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/LQKQZWFtvDssul9SDYFY1xgyw.png 1920w",
                    },
                    className: "framer-182jwbz",
                    "data-framer-name": "Separador_1",
                    name: "Separador_1",
                    transformTemplate: $,
                  }),
                }),
                r(s, {
                  breakpoint: e,
                  overrides: {
                    fA1y5gD5w: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 966.5,
                        intrinsicWidth: 960,
                        pixelHeight: 1933,
                        pixelWidth: 1920,
                        sizes: "100vw",
                        src: "https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png 1920w",
                      },
                    },
                    pop86DmZB: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 966.5,
                        intrinsicWidth: 960,
                        pixelHeight: 1933,
                        pixelWidth: 1920,
                        sizes: "160vw",
                        src: "https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png 1920w",
                      },
                    },
                    r5ZhYrDaU: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 966.5,
                        intrinsicWidth: 960,
                        pixelHeight: 1933,
                        pixelWidth: 1920,
                        sizes: "145vw",
                        src: "https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png 1920w",
                      },
                    },
                  },
                  children: r(n, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 966.5,
                      intrinsicWidth: 960,
                      loading: "lazy",
                      pixelHeight: 1933,
                      pixelWidth: 1920,
                      sizes: "100vw",
                      src: "https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png?scale-down-to=1024",
                      srcSet:
                        "https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/uTrwveWjndd8yLMKLBnl93ujSRU.png 1920w",
                    },
                    className: "framer-emd6fa",
                    "data-framer-name": "Block_2_BG",
                    id: M,
                    name: "Block_2_BG",
                    ref: H,
                    children: r(s, {
                      breakpoint: e,
                      overrides: {
                        fA1y5gD5w: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 629,
                            intrinsicWidth: 534,
                            pixelHeight: 1258,
                            pixelWidth: 1068,
                            sizes: "50.9877vw",
                            src: "https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png?scale-down-to=1024 869w, https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png 1068w",
                          },
                          transformTemplate: wr,
                        },
                        pop86DmZB: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 629,
                            intrinsicWidth: 534,
                            pixelHeight: 1258,
                            pixelWidth: 1068,
                            sizes: "66.2564vw",
                            src: "https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png?scale-down-to=1024 869w, https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png 1068w",
                          },
                          transformTemplate: wr,
                        },
                        r5ZhYrDaU: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 629,
                            intrinsicWidth: 534,
                            loading: "lazy",
                            pixelHeight: 1258,
                            pixelWidth: 1068,
                            sizes: "79.75vw",
                            src: "https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png?scale-down-to=1024 869w, https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png 1068w",
                          },
                        },
                      },
                      children: r(E, {
                        __framer__animate: { transition: q },
                        __framer__animateOnce: !0,
                        __framer__enter: Yr,
                        __framer__exit: Kr,
                        __framer__loop: Fr,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: "mirror",
                        __framer__loopTransition: B,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 629,
                          intrinsicWidth: 534,
                          loading: "lazy",
                          pixelHeight: 1258,
                          pixelWidth: 1068,
                          sizes: "50vw",
                          src: "https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png?scale-down-to=1024",
                          srcSet:
                            "https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png?scale-down-to=1024 869w, https://framerusercontent.com/images/hR1ZU5nfynI7gXpucFu0iIIDtI.png 1068w",
                        },
                        className: "framer-qfkd74",
                        "data-framer-name": "Text_1L",
                        name: "Text_1L",
                        transformTemplate: ur,
                      }),
                    }),
                  }),
                }),
                r(n, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 271,
                    intrinsicWidth: 960,
                    loading: "lazy",
                    pixelHeight: 542,
                    pixelWidth: 1920,
                    sizes: "100vw",
                    src: "https://framerusercontent.com/images/QHmW5owQPsuNG4WOdJBW0qh1jpg.png?scale-down-to=1024",
                    srcSet:
                      "https://framerusercontent.com/images/QHmW5owQPsuNG4WOdJBW0qh1jpg.png?scale-down-to=512 512w, https://framerusercontent.com/images/QHmW5owQPsuNG4WOdJBW0qh1jpg.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/QHmW5owQPsuNG4WOdJBW0qh1jpg.png 1920w",
                  },
                  className: "framer-1kr6bhl",
                  "data-framer-name": "Separador_2",
                  name: "Separador_2",
                  transformTemplate: $,
                }),
                r(s, {
                  breakpoint: e,
                  overrides: {
                    fA1y5gD5w: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 966.5,
                        intrinsicWidth: 960,
                        loading: "lazy",
                        pixelHeight: 1933,
                        pixelWidth: 1920,
                        sizes: "132vw",
                        src: "https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png 1920w",
                      },
                    },
                    pop86DmZB: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 966.5,
                        intrinsicWidth: 960,
                        loading: "lazy",
                        pixelHeight: 1933,
                        pixelWidth: 1920,
                        sizes: "260vw",
                        src: "https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png 1920w",
                      },
                    },
                    r5ZhYrDaU: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 966.5,
                        intrinsicWidth: 960,
                        loading: "lazy",
                        pixelHeight: 1933,
                        pixelWidth: 1920,
                        sizes: "214vw",
                        src: "https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png 1920w",
                      },
                    },
                  },
                  children: r(n, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 966.5,
                      intrinsicWidth: 960,
                      loading: "lazy",
                      pixelHeight: 1933,
                      pixelWidth: 1920,
                      sizes: "115vw",
                      src: "https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png?scale-down-to=1024",
                      srcSet:
                        "https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png?scale-down-to=1024 1017w, https://framerusercontent.com/images/NwO0Tgt5Sk6ouh9Wpj1ht9D2Rz4.png 1920w",
                    },
                    className: "framer-zeo8vy",
                    "data-framer-name": "Block_3_BG",
                    id: m,
                    name: "Block_3_BG",
                    ref: R,
                    children: a(U, {
                      __framer__animate: { transition: q },
                      __framer__animateOnce: !0,
                      __framer__enter: Or,
                      __framer__exit: Xr,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-14otf0z",
                      transformTemplate: ur,
                      children: [
                        a("div", {
                          className: "framer-1kotxr",
                          children: [
                            a("div", {
                              className: "framer-1j9vpym",
                              children: [
                                r(s, {
                                  breakpoint: e,
                                  overrides: {
                                    fA1y5gD5w: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 142,
                                        intrinsicWidth: 352,
                                        loading: "lazy",
                                        pixelHeight: 284,
                                        pixelWidth: 704,
                                        src: "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512 512w, https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png 704w",
                                      },
                                    },
                                    LaZxrGiNk: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 142,
                                        intrinsicWidth: 352,
                                        loading: "lazy",
                                        pixelHeight: 284,
                                        pixelWidth: 704,
                                        src: "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512 512w, https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png 704w",
                                      },
                                    },
                                    pop86DmZB: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 142,
                                        intrinsicWidth: 352,
                                        loading: "lazy",
                                        pixelHeight: 284,
                                        pixelWidth: 704,
                                        sizes: "261px",
                                        src: "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512 512w, https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png 704w",
                                      },
                                    },
                                    r5ZhYrDaU: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 142,
                                        intrinsicWidth: 352,
                                        loading: "lazy",
                                        pixelHeight: 284,
                                        pixelWidth: 704,
                                        sizes: "261px",
                                        src: "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512 512w, https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png 704w",
                                      },
                                    },
                                    wX_bugpP7: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 142,
                                        intrinsicWidth: 352,
                                        loading: "lazy",
                                        pixelHeight: 284,
                                        pixelWidth: 704,
                                        src: "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512 512w, https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png 704w",
                                      },
                                    },
                                  },
                                  children: r(n, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 142,
                                      intrinsicWidth: 352,
                                      loading: "lazy",
                                      pixelHeight: 284,
                                      pixelWidth: 704,
                                      sizes: "420px",
                                      src: "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512",
                                      srcSet:
                                        "https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png?scale-down-to=512 512w, https://framerusercontent.com/images/WV6zT6HvraIlAAbPadba6cRg.png 704w",
                                    },
                                    className: "framer-2ht18r",
                                    "data-framer-name": "Group_3",
                                    name: "Group_3",
                                  }),
                                }),
                                r(s, {
                                  breakpoint: e,
                                  overrides: {
                                    fA1y5gD5w: {
                                      children: a(i, {
                                        children: [
                                          r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                              "--framer-font-family":
                                                '"Londrina Solid", sans-serif',
                                              "--framer-font-size": "30px",
                                              "--framer-font-weight": "300",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(224, 255, 5)",
                                            },
                                            children: "(you can just call it",
                                          }),
                                          r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                              "--framer-font-family":
                                                '"Londrina Solid", sans-serif',
                                              "--framer-font-size": "30px",
                                              "--framer-font-weight": "300",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(224, 255, 5)",
                                            },
                                            children: "tokenomics, ngl)",
                                          }),
                                        ],
                                      }),
                                    },
                                    pop86DmZB: {
                                      children: a(i, {
                                        children: [
                                          r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                              "--framer-font-family":
                                                '"Londrina Solid", sans-serif',
                                              "--framer-font-size": "20px",
                                              "--framer-font-weight": "300",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(224, 255, 5)",
                                            },
                                            children: "(you can just call it",
                                          }),
                                          r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                              "--framer-font-family":
                                                '"Londrina Solid", sans-serif',
                                              "--framer-font-size": "20px",
                                              "--framer-font-weight": "300",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(224, 255, 5)",
                                            },
                                            children: "tokenomics, ngl)",
                                          }),
                                        ],
                                      }),
                                    },
                                    r5ZhYrDaU: {
                                      children: a(i, {
                                        children: [
                                          r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                              "--framer-font-family":
                                                '"Londrina Solid", sans-serif',
                                              "--framer-font-size": "20px",
                                              "--framer-font-weight": "300",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(224, 255, 5)",
                                            },
                                            children: "(you can just call it",
                                          }),
                                          r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                              "--framer-font-family":
                                                '"Londrina Solid", sans-serif',
                                              "--framer-font-size": "20px",
                                              "--framer-font-weight": "300",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(224, 255, 5)",
                                            },
                                            children: "tokenomics, ngl)",
                                          }),
                                        ],
                                      }),
                                    },
                                    wX_bugpP7: {
                                      children: a(i, {
                                        children: [
                                          r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                              "--framer-font-family":
                                                '"Londrina Solid", sans-serif',
                                              "--framer-font-size": "43px",
                                              "--framer-font-weight": "300",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(224, 255, 5)",
                                            },
                                            children: "(you can just call it",
                                          }),
                                          r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                              "--framer-font-family":
                                                '"Londrina Solid", sans-serif',
                                              "--framer-font-size": "43px",
                                              "--framer-font-weight": "300",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(224, 255, 5)",
                                            },
                                            children: "tokenomics, ngl)",
                                          }),
                                        ],
                                      }),
                                    },
                                  },
                                  children: r(d, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: [
                                        r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                            "--framer-font-family":
                                              '"Londrina Solid", sans-serif',
                                            "--framer-font-size": "40px",
                                            "--framer-font-weight": "300",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(224, 255, 5)",
                                          },
                                          children: "(you can just call it",
                                        }),
                                        r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                            "--framer-font-family":
                                              '"Londrina Solid", sans-serif',
                                            "--framer-font-size": "40px",
                                            "--framer-font-weight": "300",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(224, 255, 5)",
                                          },
                                          children: "tokenomics, ngl)",
                                        }),
                                      ],
                                    }),
                                    className: "framer-titpzh",
                                    fonts: ["GF;Londrina Solid-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            r(s, {
                              breakpoint: e,
                              overrides: {
                                fA1y5gD5w: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 166,
                                    intrinsicWidth: 428,
                                    loading: "lazy",
                                    pixelHeight: 332,
                                    pixelWidth: 856,
                                    src: "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512 512w, https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png 856w",
                                  },
                                },
                                LaZxrGiNk: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 166,
                                    intrinsicWidth: 428,
                                    loading: "lazy",
                                    pixelHeight: 332,
                                    pixelWidth: 856,
                                    sizes: "690px",
                                    src: "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512 512w, https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png 856w",
                                  },
                                },
                                pop86DmZB: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 166,
                                    intrinsicWidth: 428,
                                    loading: "lazy",
                                    pixelHeight: 332,
                                    pixelWidth: 856,
                                    src: "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512 512w, https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png 856w",
                                  },
                                },
                                r5ZhYrDaU: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 166,
                                    intrinsicWidth: 428,
                                    loading: "lazy",
                                    pixelHeight: 332,
                                    pixelWidth: 856,
                                    src: "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512 512w, https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png 856w",
                                  },
                                },
                                wX_bugpP7: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 166,
                                    intrinsicWidth: 428,
                                    loading: "lazy",
                                    pixelHeight: 332,
                                    pixelWidth: 856,
                                    src: "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512 512w, https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png 856w",
                                  },
                                },
                              },
                              children: r(n, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 166,
                                  intrinsicWidth: 428,
                                  loading: "lazy",
                                  pixelHeight: 332,
                                  pixelWidth: 856,
                                  sizes: "576px",
                                  src: "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png?scale-down-to=512 512w, https://framerusercontent.com/images/A4QyJjMOL4rJD25eIIsMPbgoVbQ.png 856w",
                                },
                                className: "framer-117qn1s",
                                "data-framer-name": "MonedasL",
                                name: "MonedasL",
                              }),
                            }),
                          ],
                        }),
                        r(s, {
                          breakpoint: e,
                          overrides: {
                            fA1y5gD5w: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 354,
                                intrinsicWidth: 528.5,
                                loading: "lazy",
                                pixelHeight: 708,
                                pixelWidth: 1057,
                                sizes: "355px",
                                src: "/tokenomics.png",
                                // srcSet:
                                //   "https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=512 512w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png 1057w",
                              },
                            },
                            LaZxrGiNk: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 354,
                                intrinsicWidth: 528.5,
                                loading: "lazy",
                                pixelHeight: 708,
                                pixelWidth: 1057,
                                sizes: "706.0814px",
                                src: "/tokenomics.png",
                                // srcSet:
                                //   "https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=512 512w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png 1057w",
                              },
                            },
                            pop86DmZB: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 354,
                                intrinsicWidth: 528.5,
                                loading: "lazy",
                                pixelHeight: 708,
                                pixelWidth: 1057,
                                sizes: "355px",
                                src: "/tokenomics.png",
                                // srcSet:
                                //   "https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=512 512w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png 1057w",
                              },
                            },
                            r5ZhYrDaU: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 354,
                                intrinsicWidth: 528.5,
                                loading: "lazy",
                                pixelHeight: 708,
                                pixelWidth: 1057,
                                sizes: "355px",
                                src: "/tokenomics.png",
                                // srcSet:
                                //   "https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=512 512w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png 1057w",
                              },
                            },
                            wX_bugpP7: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 354,
                                intrinsicWidth: 528.5,
                                loading: "lazy",
                                pixelHeight: 708,
                                pixelWidth: 1057,
                                sizes: "960.3518px",
                                src: "/tokenomics.png",
                                // srcSet:
                                //   "https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=512 512w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png 1057w",
                              },
                            },
                          },
                          children: r(n, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 354,
                              intrinsicWidth: 528.5,
                              loading: "lazy",
                              pixelHeight: 708,
                              pixelWidth: 1057,
                              sizes: "622px",
                              src: "/tokenomics.png",
                            //   srcSet:
                            //     "https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=512 512w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/lyBSmGm6pE5rnay0e9R5bn0Z9W8.png 1057w",
                            },
                            className: "framer-1jqcgwz",
                            "data-framer-name": "Text_2",
                            name: "Text_2",
                          }),
                        }),
                        r(o.div, {
                          className: "framer-yhwg67",
                          "data-border": !0,
                          whileHover: re,
                          children: r(s, {
                            breakpoint: e,
                            overrides: {
                              fA1y5gD5w: {
                                children: r(i, {
                                  children: a("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                      "--framer-font-family":
                                        '"Londrina Solid", sans-serif',
                                      "--framer-font-size": "28px",
                                      "--framer-font-weight": "300",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: [
                                      r("span", {
                                        style: { "--framer-font-size": "33px" },
                                        children: "CONTRACT ADDRESS ",
                                      }),
                                      "0x0000000000000000000",
                                    ],
                                  }),
                                }),
                              },
                              pop86DmZB: {
                                children: r(i, {
                                  children: a("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                      "--framer-font-family":
                                        '"Londrina Solid", sans-serif',
                                      "--framer-font-size": "29px",
                                      "--framer-font-weight": "300",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: [
                                      r("span", {
                                        style: { "--framer-font-size": "33px" },
                                        children: "CONTRACT ADDRESS ",
                                      }),
                                      "0x0000000000000000000",
                                    ],
                                  }),
                                }),
                              },
                              r5ZhYrDaU: {
                                children: r(i, {
                                  children: a("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                      "--framer-font-family":
                                        '"Londrina Solid", sans-serif',
                                      "--framer-font-size": "29px",
                                      "--framer-font-weight": "300",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: [
                                      r("span", {
                                        style: { "--framer-font-size": "33px" },
                                        children: "CONTRACT ADDRESS ",
                                      }),
                                      "0x0000000000000000000",
                                    ],
                                  }),
                                }),
                              },
                            },
                            children: r(d, {
                              __fromCanvasComponent: !0,
                              children: r(i, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                    "--framer-font-family":
                                      '"Londrina Solid", sans-serif',
                                    "--framer-font-size": "33px",
                                    "--framer-font-weight": "300",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "CONTRACT ADDRESS 0x0000000000000000000",
                                }),
                              }),
                              className: "framer-10to68p",
                              fonts: ["GF;Londrina Solid-300"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                r(s, {
                  breakpoint: e,
                  overrides: {
                    pop86DmZB: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 129.5,
                        intrinsicWidth: 960,
                        loading: "lazy",
                        pixelHeight: 259,
                        pixelWidth: 1920,
                        sizes: "125vw",
                        src: "https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png?scale-down-to=512 512w, https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png 1920w",
                      },
                    },
                    r5ZhYrDaU: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 129.5,
                        intrinsicWidth: 960,
                        loading: "lazy",
                        pixelHeight: 259,
                        pixelWidth: 1920,
                        sizes: "125vw",
                        src: "https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png?scale-down-to=1024",
                        srcSet:
                          "https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png?scale-down-to=512 512w, https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png 1920w",
                      },
                    },
                  },
                  children: r(n, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 129.5,
                      intrinsicWidth: 960,
                      loading: "lazy",
                      pixelHeight: 259,
                      pixelWidth: 1920,
                      sizes: "100vw",
                      src: "https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png?scale-down-to=1024",
                      srcSet:
                        "https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png?scale-down-to=512 512w, https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/Z9EIRALwpUPxzAVNQqbIJKHDJCA.png 1920w",
                    },
                    className: "framer-1vsa4vd",
                    "data-framer-name": "Group_4",
                    name: "Group_4",
                    transformTemplate: $,
                  }),
                }),
                r(s, {
                  breakpoint: e,
                  overrides: {
                    pop86DmZB: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1352,
                        intrinsicWidth: 960,
                        loading: "lazy",
                        pixelHeight: 2704,
                        pixelWidth: 1920,
                        sizes: "182vw",
                        src: "https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png?scale-down-to=2048",
                        srcSet:
                          "https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png?scale-down-to=1024 727w, https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png?scale-down-to=2048 1454w, https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png 1920w",
                      },
                    },
                    r5ZhYrDaU: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1352,
                        intrinsicWidth: 960,
                        loading: "lazy",
                        pixelHeight: 2704,
                        pixelWidth: 1920,
                        sizes: "182vw",
                        src: "https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png?scale-down-to=2048",
                        srcSet:
                          "https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png?scale-down-to=1024 727w, https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png?scale-down-to=2048 1454w, https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png 1920w",
                      },
                    },
                  },
                  children: a(n, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 1352,
                      intrinsicWidth: 960,
                      loading: "lazy",
                      pixelHeight: 2704,
                      pixelWidth: 1920,
                      sizes: "100vw",
                      src: "https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png?scale-down-to=2048",
                      srcSet:
                        "https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png?scale-down-to=1024 727w, https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png?scale-down-to=2048 1454w, https://framerusercontent.com/images/cfBShy3QypjIl4JnoN1yp4HRr5M.png 1920w",
                    },
                    className: "framer-1v5g6hb",
                    "data-framer-name": "Group_8",
                    id: ar,
                    name: "Group_8",
                    ref: J,
                    children: [
                      a("div", {
                        className: "framer-86owhq",
                        children: [
                          r(s, {
                            breakpoint: e,
                            overrides: {
                              fA1y5gD5w: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 129,
                                  intrinsicWidth: 411,
                                  loading: "lazy",
                                  pixelHeight: 258,
                                  pixelWidth: 822,
                                  sizes: "421px",
                                  src: "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512 512w, https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png 822w",
                                },
                              },
                              LaZxrGiNk: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 129,
                                  intrinsicWidth: 411,
                                  loading: "lazy",
                                  pixelHeight: 258,
                                  pixelWidth: 822,
                                  sizes: "782px",
                                  src: "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512 512w, https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png 822w",
                                },
                              },
                              pop86DmZB: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 129,
                                  intrinsicWidth: 411,
                                  loading: "lazy",
                                  pixelHeight: 258,
                                  pixelWidth: 822,
                                  sizes: "346px",
                                  src: "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512 512w, https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png 822w",
                                },
                              },
                              r5ZhYrDaU: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 129,
                                  intrinsicWidth: 411,
                                  loading: "lazy",
                                  pixelHeight: 258,
                                  pixelWidth: 822,
                                  sizes: "346px",
                                  src: "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512 512w, https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png 822w",
                                },
                              },
                              wX_bugpP7: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 129,
                                  intrinsicWidth: 411,
                                  loading: "lazy",
                                  pixelHeight: 258,
                                  pixelWidth: 822,
                                  sizes: "782px",
                                  src: "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512 512w, https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png 822w",
                                },
                              },
                            },
                            children: r(n, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 129,
                                intrinsicWidth: 411,
                                loading: "lazy",
                                pixelHeight: 258,
                                pixelWidth: 822,
                                sizes: "660px",
                                src: "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512",
                                srcSet:
                                  "https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png?scale-down-to=512 512w, https://framerusercontent.com/images/0CEehRIqzQmPs8i3HftXEdAtEo.png 822w",
                              },
                              className: "framer-gupof1",
                              "data-framer-name": "Roadmap",
                              name: "Roadmap",
                            }),
                          }),
                          a("div", {
                            className: "framer-1of6wvq",
                            children: [
                              a(U, {
                                __framer__animate: { transition: br },
                                __framer__animateOnce: !0,
                                __framer__enter: rr,
                                __framer__exit: ee,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-l21625",
                                transformTemplate: er,
                                children: [
                                  r(n, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 212,
                                      intrinsicWidth: 221,
                                      loading: "lazy",
                                      pixelHeight: 424,
                                      pixelWidth: 442,
                                      src: "https://framerusercontent.com/images/dW4UswURbPQzQc7DypoJlIUr7Q.png",
                                    },
                                    className: "framer-1mnwe07",
                                    "data-framer-name": "Planeta_1",
                                    name: "Planeta_1",
                                  }),
                                  r(s, {
                                    breakpoint: e,
                                    overrides: {
                                      fA1y5gD5w: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "299.5082px",
                                          src: "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512 512w, https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png 806w",
                                        },
                                      },
                                      LaZxrGiNk: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "573.5622px",
                                          src: "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512 512w, https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png 806w",
                                        },
                                      },
                                      pop86DmZB: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "207.3355px",
                                          src: "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512 512w, https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png 806w",
                                        },
                                      },
                                      r5ZhYrDaU: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "207.3355px",
                                          src: "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512 512w, https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png 806w",
                                        },
                                      },
                                      wX_bugpP7: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "573.5622px",
                                          src: "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512 512w, https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png 806w",
                                        },
                                      },
                                    },
                                    children: r(n, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 178.5,
                                        intrinsicWidth: 403,
                                        loading: "lazy",
                                        pixelHeight: 357,
                                        pixelWidth: 806,
                                        sizes: "488.7621px",
                                        src: "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png?scale-down-to=512 512w, https://framerusercontent.com/images/0UekMXTbj7BbNLRbNUypY1DRA.png 806w",
                                      },
                                      className: "framer-uwrgbb",
                                      "data-framer-name": "Group_5",
                                      name: "Group_5",
                                    }),
                                  }),
                                ],
                              }),
                              a(U, {
                                __framer__animate: { transition: yr },
                                __framer__animateOnce: !0,
                                __framer__enter: rr,
                                __framer__exit: te,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-1myzyh9",
                                transformTemplate: er,
                                children: [
                                  r(s, {
                                    breakpoint: e,
                                    overrides: {
                                      fA1y5gD5w: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "277.259px",
                                          src: "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512 512w, https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png 806w",
                                        },
                                      },
                                      LaZxrGiNk: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "530.7065px",
                                          src: "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512 512w, https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png 806w",
                                        },
                                      },
                                      pop86DmZB: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "193.0233px",
                                          src: "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512 512w, https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png 806w",
                                        },
                                      },
                                      r5ZhYrDaU: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "193.0233px",
                                          src: "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512 512w, https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png 806w",
                                        },
                                      },
                                      wX_bugpP7: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "530.7065px",
                                          src: "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512 512w, https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png 806w",
                                        },
                                      },
                                    },
                                    children: r(n, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 178.5,
                                        intrinsicWidth: 403,
                                        loading: "lazy",
                                        pixelHeight: 357,
                                        pixelWidth: 806,
                                        sizes: "452.2533px",
                                        src: "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png?scale-down-to=512 512w, https://framerusercontent.com/images/rlpTxNuDoGNLJd3McEgTrV3loAU.png 806w",
                                      },
                                      className: "framer-1k0dro1",
                                      "data-framer-name": "Group_6",
                                      name: "Group_6",
                                    }),
                                  }),
                                  r(s, {
                                    breakpoint: e,
                                    overrides: {
                                      fA1y5gD5w: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 202,
                                          intrinsicWidth: 258,
                                          loading: "lazy",
                                          pixelHeight: 404,
                                          pixelWidth: 516,
                                          sizes: "177.423px",
                                          src: "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512 512w, https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png 516w",
                                        },
                                      },
                                      LaZxrGiNk: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 202,
                                          intrinsicWidth: 258,
                                          loading: "lazy",
                                          pixelHeight: 404,
                                          pixelWidth: 516,
                                          sizes: "339.9104px",
                                          src: "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512 512w, https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png 516w",
                                        },
                                      },
                                      pop86DmZB: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 202,
                                          intrinsicWidth: 258,
                                          loading: "lazy",
                                          pixelHeight: 404,
                                          pixelWidth: 516,
                                          sizes: "123.5349px",
                                          src: "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512 512w, https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png 516w",
                                        },
                                      },
                                      r5ZhYrDaU: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 202,
                                          intrinsicWidth: 258,
                                          loading: "lazy",
                                          pixelHeight: 404,
                                          pixelWidth: 516,
                                          sizes: "123.5349px",
                                          src: "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512 512w, https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png 516w",
                                        },
                                      },
                                      wX_bugpP7: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 202,
                                          intrinsicWidth: 258,
                                          loading: "lazy",
                                          pixelHeight: 404,
                                          pixelWidth: 516,
                                          sizes: "339.9104px",
                                          src: "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512 512w, https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png 516w",
                                        },
                                      },
                                    },
                                    children: r(n, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 202,
                                        intrinsicWidth: 258,
                                        loading: "lazy",
                                        pixelHeight: 404,
                                        pixelWidth: 516,
                                        sizes: "289.3326px",
                                        src: "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png?scale-down-to=512 512w, https://framerusercontent.com/images/qGxIQlWSCD4puiteZDCxKb7SyjY.png 516w",
                                      },
                                      className: "framer-gfh195",
                                      "data-framer-name": "Planeta_2",
                                      name: "Planeta_2",
                                    }),
                                  }),
                                ],
                              }),
                              a(U, {
                                __framer__animate: { transition: vr },
                                __framer__animateOnce: !0,
                                __framer__enter: rr,
                                __framer__exit: ae,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-15ncqa6",
                                transformTemplate: er,
                                children: [
                                  r(n, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 225.5,
                                      intrinsicWidth: 243,
                                      loading: "lazy",
                                      pixelHeight: 451,
                                      pixelWidth: 486,
                                      src: "https://framerusercontent.com/images/uun3DeWmd5taH22VPnotgkNC9I0.png",
                                    },
                                    className: "framer-f9hmme",
                                    "data-framer-name": "Planeta_3",
                                    name: "Planeta_3",
                                  }),
                                  r(s, {
                                    breakpoint: e,
                                    overrides: {
                                      fA1y5gD5w: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "322.8984px",
                                          src: "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png 806w",
                                        },
                                      },
                                      LaZxrGiNk: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "569.4527px",
                                          src: "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png 806w",
                                        },
                                      },
                                      pop86DmZB: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "205.4595px",
                                          src: "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png 806w",
                                        },
                                      },
                                      r5ZhYrDaU: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "205.4595px",
                                          src: "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png 806w",
                                        },
                                      },
                                      wX_bugpP7: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 178.5,
                                          intrinsicWidth: 403,
                                          loading: "lazy",
                                          pixelHeight: 357,
                                          pixelWidth: 806,
                                          sizes: "569.4527px",
                                          src: "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png 806w",
                                        },
                                      },
                                    },
                                    children: r(n, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 178.5,
                                        intrinsicWidth: 403,
                                        loading: "lazy",
                                        pixelHeight: 357,
                                        pixelWidth: 806,
                                        sizes: "484.6549px",
                                        src: "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png?scale-down-to=512 512w, https://framerusercontent.com/images/WvaeTocQLnhfAVkyQUeVApa8PB0.png 806w",
                                      },
                                      className: "framer-8639ir",
                                      "data-framer-name": "Group_7",
                                      name: "Group_7",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      a("div", {
                        className: "framer-m2lnyn",
                        children: [
                          r(s, {
                            breakpoint: e,
                            overrides: {
                              pop86DmZB: {
                                children: r(i, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                      "--framer-font-family":
                                        '"Londrina Solid", sans-serif',
                                      "--framer-font-size": "17px",
                                      "--framer-font-weight": "300",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "0x0000000000000000000",
                                  }),
                                }),
                              },
                              r5ZhYrDaU: {
                                children: r(i, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                      "--framer-font-family":
                                        '"Londrina Solid", sans-serif',
                                      "--framer-font-size": "17px",
                                      "--framer-font-weight": "300",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "0x0000000000000000000",
                                  }),
                                }),
                              },
                            },
                            children: r(d, {
                              __fromCanvasComponent: !0,
                              children: r(i, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                    "--framer-font-family":
                                      '"Londrina Solid", sans-serif',
                                    "--framer-font-size": "22px",
                                    "--framer-font-weight": "300",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "0x0000000000000000000",
                                }),
                              }),
                              className: "framer-1mv58hk",
                              fonts: ["GF;Londrina Solid-300"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          r(s, {
                            breakpoint: e,
                            overrides: {
                              cYumzBKSK: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 368.5,
                                  intrinsicWidth: 359.5,
                                  loading: "lazy",
                                  pixelHeight: 737,
                                  pixelWidth: 719,
                                  sizes: "544px",
                                  src: "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png 719w",
                                },
                              },
                              fA1y5gD5w: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 368.5,
                                  intrinsicWidth: 359.5,
                                  loading: "lazy",
                                  pixelHeight: 737,
                                  pixelWidth: 719,
                                  sizes: "295px",
                                  src: "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png 719w",
                                },
                              },
                              LaZxrGiNk: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 368.5,
                                  intrinsicWidth: 359.5,
                                  loading: "lazy",
                                  pixelHeight: 737,
                                  pixelWidth: 719,
                                  sizes: "574px",
                                  src: "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png 719w",
                                },
                              },
                              PDbPJ3XUS: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 368.5,
                                  intrinsicWidth: 359.5,
                                  loading: "lazy",
                                  pixelHeight: 737,
                                  pixelWidth: 719,
                                  sizes: "510px",
                                  src: "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png 719w",
                                },
                              },
                              pop86DmZB: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 368.5,
                                  intrinsicWidth: 359.5,
                                  loading: "lazy",
                                  pixelHeight: 737,
                                  pixelWidth: 719,
                                  sizes: "295px",
                                  src: "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png 719w",
                                },
                              },
                              r5ZhYrDaU: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 368.5,
                                  intrinsicWidth: 359.5,
                                  loading: "lazy",
                                  pixelHeight: 737,
                                  pixelWidth: 719,
                                  sizes: "295px",
                                  src: "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png 719w",
                                },
                              },
                              wX_bugpP7: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 368.5,
                                  intrinsicWidth: 359.5,
                                  loading: "lazy",
                                  pixelHeight: 737,
                                  pixelWidth: 719,
                                  sizes: "574px",
                                  src: "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png 719w",
                                },
                              },
                            },
                            children: r(n, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 368.5,
                                intrinsicWidth: 359.5,
                                loading: "lazy",
                                pixelHeight: 737,
                                pixelWidth: 719,
                                sizes: "463px",
                                src: "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png?scale-down-to=512",
                                srcSet:
                                  "https://framerusercontent.com/images/B8a7xaSeFPCistNZufuK7l89zi0.png 719w",
                              },
                              className: "framer-wlh3ds",
                              "data-framer-name": "P3P3_OVNI",
                              name: "P3P3_OVNI",
                            }),
                          }),
                          r(d, {
                            __fromCanvasComponent: !0,
                            children: r(i, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7TG9uZHJpbmEgU29saWQtMzAw",
                                  "--framer-font-family":
                                    '"Londrina Solid", sans-serif',
                                  "--framer-font-size": "22px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-alignment": "center",
                                },
                                children: " ",
                              }),
                            }),
                            className: "framer-1lqj7en",
                            fonts: ["GF;Londrina Solid-300"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            r("div", { className: k(xr, ...D), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  se = [
    '.framer-jocgT[data-border="true"]::after, .framer-jocgT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${b.bodyClassName}-framer-jocgT { background: white; }`,
    ".framer-jocgT.framer-lux5qc, .framer-jocgT .framer-lux5qc { display: block; }",
    ".framer-jocgT.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",
    ".framer-jocgT .framer-17718ql { aspect-ratio: 0.9932747025349198 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1208px); overflow: visible; position: relative; width: 100%; }",
    ".framer-jocgT .framer-1r6v3qm-container { flex: none; height: auto; left: 50%; position: absolute; top: 40px; transform: translateX(-50%); width: auto; }",
    ".framer-jocgT .framer-b48gtc { aspect-ratio: 0.9747474747474747 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 217px); left: 177px; overflow: visible; position: absolute; top: 48%; transform: translateY(-50%); width: 18%; }",
    ".framer-jocgT .framer-10wrvng { aspect-ratio: 1.5245901639344261 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 190px); left: 730px; overflow: visible; position: absolute; top: 163px; width: 24%; }",
    ".framer-jocgT .framer-rux8k9 { aspect-ratio: 1.1947791164658634 / 1; bottom: 130px; flex: none; height: var(--framer-aspect-ratio-supported, 315px); left: 300px; overflow: visible; position: absolute; width: 31%; }",
    ".framer-jocgT .framer-182jwbz { aspect-ratio: 7.901234567901234 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 152px); left: 50%; overflow: visible; position: absolute; top: 1132px; transform: translateX(-50%); width: 100%; z-index: 1; }",
    ".framer-jocgT .framer-emd6fa { aspect-ratio: 0.9932747025349198 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1209px); overflow: visible; position: relative; width: 100%; }",
    ".framer-jocgT .framer-qfkd74 { aspect-ratio: 0.848966613672496 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 707px); left: 50%; overflow: visible; position: absolute; top: 50%; transform: perspective(1200px) translate(-50%, -50%); width: 50%; }",
    ".framer-jocgT .framer-1kr6bhl { aspect-ratio: 3.5424354243542435 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 339px); left: 50%; overflow: visible; position: absolute; top: 2178px; transform: translateX(-50%); width: 100%; z-index: 1; }",
    ".framer-jocgT .framer-zeo8vy { aspect-ratio: 0.9932747025349198 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1389px); overflow: visible; position: relative; width: 115%; }",
    ".framer-jocgT .framer-14otf0z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 10px 10px 10px 10px; position: absolute; top: 50%; transform: perspective(1200px) translate(-50%, -50%); width: 634px; }",
    ".framer-jocgT .framer-1kotxr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-jocgT .framer-1j9vpym { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-jocgT .framer-2ht18r { flex: none; height: 169px; overflow: visible; position: relative; width: 420px; }",
    ".framer-jocgT .framer-titpzh, .framer-jocgT .framer-1mv58hk, .framer-jocgT .framer-1lqj7en { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-jocgT .framer-117qn1s { aspect-ratio: 2.5829596412556053 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 223px); overflow: visible; position: relative; width: 576px; }",
    ".framer-jocgT .framer-1jqcgwz { aspect-ratio: 1.4929378531073447 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 417px); overflow: visible; position: relative; width: 101%; }",
    ".framer-jocgT .framer-yhwg67 { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #deff1f; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; box-shadow: -2px 4px 0px 0px #000000; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: 604px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jocgT .framer-10to68p { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 550px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jocgT .framer-1vsa4vd { aspect-ratio: 7.413127413127413 / 1; bottom: 1609px; flex: none; height: var(--framer-aspect-ratio-supported, 162px); left: 50%; overflow: visible; position: absolute; transform: translateX(-50%); width: 100%; z-index: 1; }",
    ".framer-jocgT .framer-1v5g6hb { aspect-ratio: 0.7100591715976331 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1690px); overflow: visible; position: relative; width: 100%; }",
    ".framer-jocgT .framer-86owhq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 67px; transform: translateX(-50%); width: min-content; }",
    ".framer-jocgT .framer-gupof1 { flex: none; height: 207px; overflow: visible; position: relative; width: 660px; }",
    ".framer-jocgT .framer-1of6wvq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 58px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-jocgT .framer-l21625 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 47px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: min-content; }",
    ".framer-jocgT .framer-1mnwe07 { flex: none; height: 257px; overflow: visible; position: relative; width: 268px; }",
    ".framer-jocgT .framer-uwrgbb { flex: none; height: 216px; overflow: visible; position: relative; width: 489px; }",
    ".framer-jocgT .framer-1myzyh9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 59px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: min-content; }",
    ".framer-jocgT .framer-1k0dro1 { aspect-ratio: 2.257703081232493 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 201px); overflow: visible; position: relative; width: 452px; }",
    ".framer-jocgT .framer-gfh195 { aspect-ratio: 1.2772277227722773 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 227px); overflow: visible; position: relative; width: 289px; }",
    ".framer-jocgT .framer-15ncqa6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: min-content; }",
    ".framer-jocgT .framer-f9hmme { aspect-ratio: 1.0776053215077606 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 250px); overflow: visible; position: relative; width: 269px; }",
    ".framer-jocgT .framer-8639ir { aspect-ratio: 2.257703081232493 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 215px); overflow: visible; position: relative; width: 485px; }",
    ".framer-jocgT .framer-m2lnyn { align-content: flex-end; align-items: flex-end; bottom: -1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; transform: translateX(-50%); width: min-content; }",
    ".framer-jocgT .framer-wlh3ds { aspect-ratio: 0.9755766621438263 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 303px); overflow: visible; position: relative; width: 463px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-jocgT.framer-72rtr7, .framer-jocgT .framer-14otf0z, .framer-jocgT .framer-1kotxr, .framer-jocgT .framer-1j9vpym, .framer-jocgT .framer-yhwg67, .framer-jocgT .framer-86owhq, .framer-jocgT .framer-1of6wvq, .framer-jocgT .framer-l21625, .framer-jocgT .framer-1myzyh9, .framer-jocgT .framer-15ncqa6, .framer-jocgT .framer-m2lnyn { gap: 0px; } .framer-jocgT.framer-72rtr7 > *, .framer-jocgT .framer-86owhq > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-jocgT.framer-72rtr7 > :first-child, .framer-jocgT .framer-14otf0z > :first-child, .framer-jocgT .framer-1kotxr > :first-child, .framer-jocgT .framer-1j9vpym > :first-child, .framer-jocgT .framer-86owhq > :first-child, .framer-jocgT .framer-1of6wvq > :first-child { margin-top: 0px; } .framer-jocgT.framer-72rtr7 > :last-child, .framer-jocgT .framer-14otf0z > :last-child, .framer-jocgT .framer-1kotxr > :last-child, .framer-jocgT .framer-1j9vpym > :last-child, .framer-jocgT .framer-86owhq > :last-child, .framer-jocgT .framer-1of6wvq > :last-child { margin-bottom: 0px; } .framer-jocgT .framer-14otf0z > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-jocgT .framer-1kotxr > * { margin: 0px; margin-bottom: calc(34px / 2); margin-top: calc(34px / 2); } .framer-jocgT .framer-1j9vpym > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-jocgT .framer-yhwg67 > *, .framer-jocgT .framer-15ncqa6 > *, .framer-jocgT .framer-m2lnyn > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-jocgT .framer-yhwg67 > :first-child, .framer-jocgT .framer-l21625 > :first-child, .framer-jocgT .framer-1myzyh9 > :first-child, .framer-jocgT .framer-15ncqa6 > :first-child, .framer-jocgT .framer-m2lnyn > :first-child { margin-left: 0px; } .framer-jocgT .framer-yhwg67 > :last-child, .framer-jocgT .framer-l21625 > :last-child, .framer-jocgT .framer-1myzyh9 > :last-child, .framer-jocgT .framer-15ncqa6 > :last-child, .framer-jocgT .framer-m2lnyn > :last-child { margin-right: 0px; } .framer-jocgT .framer-1of6wvq > * { margin: 0px; margin-bottom: calc(58px / 2); margin-top: calc(58px / 2); } .framer-jocgT .framer-l21625 > * { margin: 0px; margin-left: calc(47px / 2); margin-right: calc(47px / 2); } .framer-jocgT .framer-1myzyh9 > * { margin: 0px; margin-left: calc(59px / 2); margin-right: calc(59px / 2); } }",
    "@media (min-width: 1200px) and (max-width: 1365px) { .framer-jocgT .hidden-72rtr7 { display: none !important; } }",
    `@media (min-width: 1440px) and (max-width: 1535px) { .framer-jocgT .hidden-s1yjpo { display: none !important; } .${b.bodyClassName}-framer-jocgT { background: white; } .framer-jocgT.framer-72rtr7 { width: 1440px; } .framer-jocgT .framer-17718ql, .framer-jocgT .framer-emd6fa { height: var(--framer-aspect-ratio-supported, 1450px); } .framer-jocgT .framer-b48gtc { height: var(--framer-aspect-ratio-supported, 260px); left: 152px; top: 47%; } .framer-jocgT .framer-10wrvng { height: var(--framer-aspect-ratio-supported, 228px); left: 824px; top: 167px; } .framer-jocgT .framer-rux8k9 { bottom: 170px; height: var(--framer-aspect-ratio-supported, 378px); left: 279px; } .framer-jocgT .framer-182jwbz { height: var(--framer-aspect-ratio-supported, 183px); top: 1359px; } .framer-jocgT .framer-qfkd74 { height: var(--framer-aspect-ratio-supported, 848px); } .framer-jocgT .framer-1kr6bhl { height: var(--framer-aspect-ratio-supported, 407px); top: 2697px; } .framer-jocgT .framer-zeo8vy { height: var(--framer-aspect-ratio-supported, 1667px); } .framer-jocgT .framer-14otf0z { gap: 50px; } .framer-jocgT .framer-1vsa4vd { bottom: 1931px; height: var(--framer-aspect-ratio-supported, 194px); } .framer-jocgT .framer-1v5g6hb { height: var(--framer-aspect-ratio-supported, 2028px); } .framer-jocgT .framer-wlh3ds { height: var(--framer-aspect-ratio-supported, 558px); width: 544px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-jocgT .framer-14otf0z { gap: 0px; } .framer-jocgT .framer-14otf0z > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-jocgT .framer-14otf0z > :first-child { margin-top: 0px; } .framer-jocgT .framer-14otf0z > :last-child { margin-bottom: 0px; } }}`,
    `@media (min-width: 1536px) and (max-width: 1919px) { .framer-jocgT .hidden-1mkhkw8 { display: none !important; } .${b.bodyClassName}-framer-jocgT { background: white; } .framer-jocgT.framer-72rtr7 { width: 1536px; } .framer-jocgT .framer-17718ql, .framer-jocgT .framer-emd6fa { height: var(--framer-aspect-ratio-supported, 1547px); } .framer-jocgT .framer-b48gtc { height: var(--framer-aspect-ratio-supported, 277px); left: 152px; top: 47%; } .framer-jocgT .framer-10wrvng { height: var(--framer-aspect-ratio-supported, 243px); left: 824px; top: 167px; } .framer-jocgT .framer-rux8k9 { bottom: 170px; height: var(--framer-aspect-ratio-supported, 403px); left: 279px; } .framer-jocgT .framer-182jwbz { height: var(--framer-aspect-ratio-supported, 195px); top: 1359px; } .framer-jocgT .framer-qfkd74 { height: var(--framer-aspect-ratio-supported, 905px); } .framer-jocgT .framer-1kr6bhl { height: var(--framer-aspect-ratio-supported, 434px); top: 2877px; } .framer-jocgT .framer-zeo8vy { height: var(--framer-aspect-ratio-supported, 1778px); } .framer-jocgT .framer-14otf0z { gap: 38px; left: 52%; top: 50%; width: 717px; } .framer-jocgT .framer-1kotxr { gap: 54px; } .framer-jocgT .framer-2ht18r { height: 206px; width: 536px; } .framer-jocgT .framer-117qn1s { height: var(--framer-aspect-ratio-supported, 267px); width: 690px; } .framer-jocgT .framer-1jqcgwz { height: var(--framer-aspect-ratio-supported, 473px); } .framer-jocgT .framer-yhwg67 { width: 712px; } .framer-jocgT .framer-1vsa4vd { bottom: 2060px; height: var(--framer-aspect-ratio-supported, 208px); } .framer-jocgT .framer-1v5g6hb { height: var(--framer-aspect-ratio-supported, 2164px); } .framer-jocgT .framer-86owhq { top: 149px; } .framer-jocgT .framer-gupof1 { aspect-ratio: 3.1884057971014492 / 1; height: var(--framer-aspect-ratio-supported, 246px); width: 782px; } .framer-jocgT .framer-1mnwe07 { height: 302px; width: 315px; } .framer-jocgT .framer-uwrgbb { height: 254px; width: 574px; } .framer-jocgT .framer-1k0dro1 { height: var(--framer-aspect-ratio-supported, 235px); width: 531px; } .framer-jocgT .framer-gfh195 { height: var(--framer-aspect-ratio-supported, 266px); width: 340px; } .framer-jocgT .framer-f9hmme { height: var(--framer-aspect-ratio-supported, 293px); width: 315px; } .framer-jocgT .framer-8639ir { height: var(--framer-aspect-ratio-supported, 252px); width: 569px; } .framer-jocgT .framer-wlh3ds { height: var(--framer-aspect-ratio-supported, 589px); width: 574px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-jocgT .framer-14otf0z, .framer-jocgT .framer-1kotxr { gap: 0px; } .framer-jocgT .framer-14otf0z > * { margin: 0px; margin-bottom: calc(38px / 2); margin-top: calc(38px / 2); } .framer-jocgT .framer-14otf0z > :first-child, .framer-jocgT .framer-1kotxr > :first-child { margin-top: 0px; } .framer-jocgT .framer-14otf0z > :last-child, .framer-jocgT .framer-1kotxr > :last-child { margin-bottom: 0px; } .framer-jocgT .framer-1kotxr > * { margin: 0px; margin-bottom: calc(54px / 2); margin-top: calc(54px / 2); } }}`,
    `@media (min-width: 1366px) and (max-width: 1439px) { .framer-jocgT .hidden-urb6hk { display: none !important; } .${b.bodyClassName}-framer-jocgT { background: white; } .framer-jocgT.framer-72rtr7 { width: 1366px; } .framer-jocgT .framer-17718ql, .framer-jocgT .framer-emd6fa { height: var(--framer-aspect-ratio-supported, 1375px); } .framer-jocgT .framer-b48gtc { height: var(--framer-aspect-ratio-supported, 247px); } .framer-jocgT .framer-10wrvng { height: var(--framer-aspect-ratio-supported, 216px); } .framer-jocgT .framer-rux8k9 { height: var(--framer-aspect-ratio-supported, 359px); } .framer-jocgT .framer-182jwbz { height: var(--framer-aspect-ratio-supported, 173px); top: 1311px; } .framer-jocgT .framer-qfkd74 { height: var(--framer-aspect-ratio-supported, 805px); top: 50%; } .framer-jocgT .framer-1kr6bhl { height: var(--framer-aspect-ratio-supported, 386px); top: 2559px; } .framer-jocgT .framer-zeo8vy { height: var(--framer-aspect-ratio-supported, 1582px); } .framer-jocgT .framer-1vsa4vd { bottom: 1832px; height: var(--framer-aspect-ratio-supported, 185px); } .framer-jocgT .framer-1v5g6hb { height: var(--framer-aspect-ratio-supported, 1924px); } .framer-jocgT .framer-86owhq { top: 122px; } .framer-jocgT .framer-1k0dro1 { height: var(--framer-aspect-ratio-supported, 200px); } .framer-jocgT .framer-wlh3ds { height: var(--framer-aspect-ratio-supported, 523px); width: 510px; }}`,
    `@media (min-width: 1920px) { .framer-jocgT .hidden-13xprnn { display: none !important; } .${b.bodyClassName}-framer-jocgT { background: white; } .framer-jocgT.framer-72rtr7 { width: 1920px; } .framer-jocgT .framer-17718ql, .framer-jocgT .framer-emd6fa { height: var(--framer-aspect-ratio-supported, 1933px); } .framer-jocgT .framer-b48gtc { height: var(--framer-aspect-ratio-supported, 346px); left: 152px; top: 47%; } .framer-jocgT .framer-10wrvng { height: var(--framer-aspect-ratio-supported, 304px); left: 824px; top: 167px; } .framer-jocgT .framer-rux8k9 { bottom: 170px; height: var(--framer-aspect-ratio-supported, 504px); left: 279px; } .framer-jocgT .framer-182jwbz { height: var(--framer-aspect-ratio-supported, 243px); top: 1811px; } .framer-jocgT .framer-qfkd74 { height: var(--framer-aspect-ratio-supported, 1131px); } .framer-jocgT .framer-1kr6bhl { height: var(--framer-aspect-ratio-supported, 542px); top: 3595px; } .framer-jocgT .framer-zeo8vy { height: var(--framer-aspect-ratio-supported, 2223px); } .framer-jocgT .framer-14otf0z { gap: 38px; top: 50%; width: 968px; } .framer-jocgT .framer-1kotxr { gap: 69px; } .framer-jocgT .framer-2ht18r { height: 266px; width: 693px; } .framer-jocgT .framer-117qn1s { aspect-ratio: unset; height: 314px; width: 810px; } .framer-jocgT .framer-1jqcgwz { height: var(--framer-aspect-ratio-supported, 644px); } .framer-jocgT .framer-yhwg67 { width: 953px; } .framer-jocgT .framer-1vsa4vd { bottom: 2575px; height: var(--framer-aspect-ratio-supported, 259px); } .framer-jocgT .framer-1v5g6hb { height: var(--framer-aspect-ratio-supported, 2704px); } .framer-jocgT .framer-86owhq { top: 149px; } .framer-jocgT .framer-gupof1 { aspect-ratio: 3.1884057971014492 / 1; height: var(--framer-aspect-ratio-supported, 245px); width: 782px; } .framer-jocgT .framer-1mnwe07 { height: 302px; width: 315px; } .framer-jocgT .framer-uwrgbb { height: 254px; width: 574px; } .framer-jocgT .framer-1k0dro1 { height: var(--framer-aspect-ratio-supported, 235px); width: 531px; } .framer-jocgT .framer-gfh195 { height: var(--framer-aspect-ratio-supported, 266px); width: 340px; } .framer-jocgT .framer-f9hmme { height: var(--framer-aspect-ratio-supported, 293px); width: 315px; } .framer-jocgT .framer-8639ir { height: var(--framer-aspect-ratio-supported, 253px); width: 569px; } .framer-jocgT .framer-wlh3ds { height: var(--framer-aspect-ratio-supported, 589px); width: 574px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-jocgT .framer-14otf0z, .framer-jocgT .framer-1kotxr { gap: 0px; } .framer-jocgT .framer-14otf0z > * { margin: 0px; margin-bottom: calc(38px / 2); margin-top: calc(38px / 2); } .framer-jocgT .framer-14otf0z > :first-child, .framer-jocgT .framer-1kotxr > :first-child { margin-top: 0px; } .framer-jocgT .framer-14otf0z > :last-child, .framer-jocgT .framer-1kotxr > :last-child { margin-bottom: 0px; } .framer-jocgT .framer-1kotxr > * { margin: 0px; margin-bottom: calc(69px / 2); margin-top: calc(69px / 2); } }}`,
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-jocgT .hidden-or76v6 { display: none !important; } .${b.bodyClassName}-framer-jocgT { background: white; } .framer-jocgT.framer-72rtr7 { width: 810px; } .framer-jocgT .framer-17718ql, .framer-jocgT .framer-emd6fa { height: var(--framer-aspect-ratio-supported, 816px); } .framer-jocgT .framer-1r6v3qm-container { top: 21px; } .framer-jocgT .framer-b48gtc { height: var(--framer-aspect-ratio-supported, 133px); left: 122px; top: 50%; width: 16%; } .framer-jocgT .framer-10wrvng { height: var(--framer-aspect-ratio-supported, 117px); left: 468px; top: 133px; width: 22%; } .framer-jocgT .framer-rux8k9 { bottom: 108px; height: var(--framer-aspect-ratio-supported, 194px); left: 203px; width: 29%; } .framer-jocgT .framer-182jwbz { height: var(--framer-aspect-ratio-supported, 103px); top: 765px; } .framer-jocgT .framer-qfkd74 { height: var(--framer-aspect-ratio-supported, 487px); top: 122px; transform: perspective(1200px) translateX(-50%); width: 51%; } .framer-jocgT .framer-1kr6bhl { bottom: 1027px; height: var(--framer-aspect-ratio-supported, 229px); top: unset; } .framer-jocgT .framer-zeo8vy { height: var(--framer-aspect-ratio-supported, 1077px); width: 132%; } .framer-jocgT .framer-14otf0z { left: 50%; top: 49%; } .framer-jocgT .framer-2ht18r { height: 133px; width: 331px; } .framer-jocgT .framer-117qn1s { height: var(--framer-aspect-ratio-supported, 176px); width: 455px; } .framer-jocgT .framer-1jqcgwz { height: var(--framer-aspect-ratio-supported, 238px); width: 58%; } .framer-jocgT .framer-yhwg67 { width: 365px; } .framer-jocgT .framer-10to68p { width: 340px; } .framer-jocgT .framer-1vsa4vd { bottom: unset; height: var(--framer-aspect-ratio-supported, 110px); top: 1576px; } .framer-jocgT .framer-1v5g6hb { height: var(--framer-aspect-ratio-supported, 1141px); } .framer-jocgT .framer-gupof1 { height: 132px; width: 421px; } .framer-jocgT .framer-1mnwe07 { height: 157px; width: 164px; } .framer-jocgT .framer-uwrgbb { height: 132px; width: 300px; } .framer-jocgT .framer-1k0dro1 { height: var(--framer-aspect-ratio-supported, 123px); width: 277px; } .framer-jocgT .framer-gfh195 { height: var(--framer-aspect-ratio-supported, 139px); width: 177px; } .framer-jocgT .framer-f9hmme { height: var(--framer-aspect-ratio-supported, 167px); width: 180px; } .framer-jocgT .framer-8639ir { height: var(--framer-aspect-ratio-supported, 143px); width: 323px; } .framer-jocgT .framer-wlh3ds { height: var(--framer-aspect-ratio-supported, 302px); width: 295px; }}`,
    `@media (max-width: 413px) { .framer-jocgT .hidden-12q4w6e { display: none !important; } .${b.bodyClassName}-framer-jocgT { background: white; } .framer-jocgT.framer-72rtr7 { width: 390px; } .framer-jocgT .framer-17718ql { height: var(--framer-aspect-ratio-supported, 786px); width: 200%; } .framer-jocgT .framer-1r6v3qm-container { top: 0px; z-index: 1; } .framer-jocgT .framer-b48gtc { bottom: 294px; height: var(--framer-aspect-ratio-supported, 99px); left: 206px; top: unset; transform: unset; width: 12%; } .framer-jocgT .framer-10wrvng { height: var(--framer-aspect-ratio-supported, 112px); left: 414px; top: 103px; width: 22%; } .framer-jocgT .framer-rux8k9 { bottom: 96px; height: var(--framer-aspect-ratio-supported, 160px); left: 238px; width: 24%; } .framer-jocgT .framer-182jwbz { height: var(--framer-aspect-ratio-supported, 74px); top: 749px; width: 150%; } .framer-jocgT .framer-emd6fa { height: var(--framer-aspect-ratio-supported, 628px); width: 160%; } .framer-jocgT .framer-qfkd74 { height: var(--framer-aspect-ratio-supported, 304px); top: 122px; transform: perspective(1200px) translateX(-50%); width: 41%; } .framer-jocgT .framer-1kr6bhl { bottom: 945px; height: var(--framer-aspect-ratio-supported, 110px); top: unset; } .framer-jocgT .framer-zeo8vy { height: var(--framer-aspect-ratio-supported, 1021px); width: 260%; } .framer-jocgT .framer-14otf0z { left: 50%; top: 49%; } .framer-jocgT .framer-2ht18r { aspect-ratio: 2.488721804511278 / 1; height: var(--framer-aspect-ratio-supported, 105px); width: 261px; } .framer-jocgT .framer-117qn1s { aspect-ratio: 2.585227272727273 / 1; height: var(--framer-aspect-ratio-supported, 139px); width: 359px; } .framer-jocgT .framer-1jqcgwz { height: var(--framer-aspect-ratio-supported, 238px); width: 58%; } .framer-jocgT .framer-yhwg67 { width: 365px; } .framer-jocgT .framer-10to68p { width: 324px; } .framer-jocgT .framer-1vsa4vd { bottom: unset; height: var(--framer-aspect-ratio-supported, 66px); top: 1381px; width: 125%; } .framer-jocgT .framer-1v5g6hb { height: var(--framer-aspect-ratio-supported, 1000px); width: 182%; } .framer-jocgT .framer-gupof1 { aspect-ratio: 3.1893939393939394 / 1; height: var(--framer-aspect-ratio-supported, 109px); width: 346px; } .framer-jocgT .framer-1of6wvq { gap: 40px; } .framer-jocgT .framer-l21625 { gap: 16px; } .framer-jocgT .framer-1mnwe07 { height: 109px; width: 113px; } .framer-jocgT .framer-uwrgbb { height: 91px; width: 207px; } .framer-jocgT .framer-1myzyh9 { gap: 15px; } .framer-jocgT .framer-1k0dro1 { height: var(--framer-aspect-ratio-supported, 86px); width: 193px; } .framer-jocgT .framer-gfh195 { height: 97px; width: var(--framer-aspect-ratio-supported, 124px); } .framer-jocgT .framer-f9hmme { height: 106px; width: var(--framer-aspect-ratio-supported, 115px); } .framer-jocgT .framer-8639ir { height: var(--framer-aspect-ratio-supported, 91px); width: 205px; } .framer-jocgT .framer-m2lnyn { align-content: center; align-items: center; flex-direction: column; } .framer-jocgT .framer-1mv58hk { order: 0; white-space: pre-wrap; width: 350px; word-break: break-word; word-wrap: break-word; } .framer-jocgT .framer-wlh3ds { order: 2; width: 295px; } .framer-jocgT .framer-1lqj7en { order: 1; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-jocgT .framer-1of6wvq, .framer-jocgT .framer-l21625, .framer-jocgT .framer-1myzyh9, .framer-jocgT .framer-m2lnyn { gap: 0px; } .framer-jocgT .framer-1of6wvq > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-jocgT .framer-1of6wvq > :first-child, .framer-jocgT .framer-m2lnyn > :first-child { margin-top: 0px; } .framer-jocgT .framer-1of6wvq > :last-child, .framer-jocgT .framer-m2lnyn > :last-child { margin-bottom: 0px; } .framer-jocgT .framer-l21625 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-jocgT .framer-l21625 > :first-child, .framer-jocgT .framer-1myzyh9 > :first-child { margin-left: 0px; } .framer-jocgT .framer-l21625 > :last-child, .framer-jocgT .framer-1myzyh9 > :last-child { margin-right: 0px; } .framer-jocgT .framer-1myzyh9 > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-jocgT .framer-m2lnyn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
    `@media (min-width: 414px) and (max-width: 809px) { .framer-jocgT .hidden-sakrg { display: none !important; } .${b.bodyClassName}-framer-jocgT { background: white; } .framer-jocgT.framer-72rtr7 { width: 414px; } .framer-jocgT .framer-17718ql { height: var(--framer-aspect-ratio-supported, 896px); width: 215%; } .framer-jocgT .framer-1r6v3qm-container { top: 0px; z-index: 1; } .framer-jocgT .framer-b48gtc { bottom: 294px; height: var(--framer-aspect-ratio-supported, 113px); left: 250px; top: unset; transform: unset; width: 12%; } .framer-jocgT .framer-10wrvng { height: var(--framer-aspect-ratio-supported, 97px); left: 475px; top: 103px; width: 17%; } .framer-jocgT .framer-rux8k9 { bottom: 101px; height: var(--framer-aspect-ratio-supported, 183px); left: 268px; width: 24%; } .framer-jocgT .framer-182jwbz { height: var(--framer-aspect-ratio-supported, 79px); top: 857px; width: 150%; } .framer-jocgT .framer-emd6fa { height: var(--framer-aspect-ratio-supported, 605px); width: 145%; } .framer-jocgT .framer-qfkd74 { height: var(--framer-aspect-ratio-supported, 389px); top: 50%; width: 55%; } .framer-jocgT .framer-1kr6bhl { bottom: 1003px; height: var(--framer-aspect-ratio-supported, 117px); top: unset; } .framer-jocgT .framer-zeo8vy { height: var(--framer-aspect-ratio-supported, 892px); width: 214%; } .framer-jocgT .framer-14otf0z { left: 50%; top: 49%; } .framer-jocgT .framer-2ht18r { aspect-ratio: 2.488721804511278 / 1; height: var(--framer-aspect-ratio-supported, 105px); width: 261px; } .framer-jocgT .framer-117qn1s { aspect-ratio: 2.585227272727273 / 1; height: var(--framer-aspect-ratio-supported, 139px); width: 359px; } .framer-jocgT .framer-1jqcgwz { height: var(--framer-aspect-ratio-supported, 238px); width: 58%; } .framer-jocgT .framer-yhwg67 { width: 365px; } .framer-jocgT .framer-10to68p { width: 324px; } .framer-jocgT .framer-1vsa4vd { bottom: unset; height: var(--framer-aspect-ratio-supported, 70px); top: 1466px; width: 125%; } .framer-jocgT .framer-1v5g6hb { height: var(--framer-aspect-ratio-supported, 1061px); width: 182%; } .framer-jocgT .framer-gupof1 { aspect-ratio: 3.1893939393939394 / 1; height: var(--framer-aspect-ratio-supported, 109px); width: 346px; } .framer-jocgT .framer-1of6wvq { gap: 40px; } .framer-jocgT .framer-l21625 { gap: 16px; } .framer-jocgT .framer-1mnwe07 { height: 109px; width: 113px; } .framer-jocgT .framer-uwrgbb { height: 91px; width: 207px; } .framer-jocgT .framer-1myzyh9 { gap: 15px; } .framer-jocgT .framer-1k0dro1 { height: var(--framer-aspect-ratio-supported, 86px); width: 193px; } .framer-jocgT .framer-gfh195 { height: 97px; width: var(--framer-aspect-ratio-supported, 124px); } .framer-jocgT .framer-f9hmme { height: 106px; width: var(--framer-aspect-ratio-supported, 115px); } .framer-jocgT .framer-8639ir { height: var(--framer-aspect-ratio-supported, 91px); width: 205px; } .framer-jocgT .framer-m2lnyn { align-content: center; align-items: center; flex-direction: column; } .framer-jocgT .framer-1mv58hk { order: 0; white-space: pre-wrap; width: 350px; word-break: break-word; word-wrap: break-word; } .framer-jocgT .framer-wlh3ds { order: 2; width: 295px; } .framer-jocgT .framer-1lqj7en { order: 1; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-jocgT .framer-1of6wvq, .framer-jocgT .framer-l21625, .framer-jocgT .framer-1myzyh9, .framer-jocgT .framer-m2lnyn { gap: 0px; } .framer-jocgT .framer-1of6wvq > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-jocgT .framer-1of6wvq > :first-child, .framer-jocgT .framer-m2lnyn > :first-child { margin-top: 0px; } .framer-jocgT .framer-1of6wvq > :last-child, .framer-jocgT .framer-m2lnyn > :last-child { margin-bottom: 0px; } .framer-jocgT .framer-l21625 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-jocgT .framer-l21625 > :first-child, .framer-jocgT .framer-1myzyh9 > :first-child { margin-left: 0px; } .framer-jocgT .framer-l21625 > :last-child, .framer-jocgT .framer-1myzyh9 > :last-child { margin-right: 0px; } .framer-jocgT .framer-1myzyh9 > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-jocgT .framer-m2lnyn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
  ],
  P = Z(ne, se, "framer-jocgT"),
  we = P;
P.displayName = "Home";
P.defaultProps = { height: 5495.5, width: 1200 };
C(P, [
  {
    family: "Londrina Solid",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/londrinasolid/v17/flUiRq6sw40kQEJxWNgkLuudGfv1CjYxn53oTrcL.woff2",
    weight: "300",
  },
  ...Ur,
]);
var be = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"cYumzBKSK":{"layout":["fixed","auto"]},"LaZxrGiNk":{"layout":["fixed","auto"]},"PDbPJ3XUS":{"layout":["fixed","auto"]},"wX_bugpP7":{"layout":["fixed","auto"]},"fA1y5gD5w":{"layout":["fixed","auto"]},"pop86DmZB":{"layout":["fixed","auto"]},"r5ZhYrDaU":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "1200",
        framerIntrinsicHeight: "5495.5",
        framerResponsiveScreen: "",
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { be as __FramerMetadata__, we as default };
//# sourceMappingURL=EQ0fH9EiMfR_PM-rIU9A3cTRPw7dB310CRFEWl8Y-CM.AOAHHT6V.mjs.map
