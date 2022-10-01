"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/_app.tsx














const pages = [
    {
        path: "/",
        label: "Home"
    },
    {
        path: "/about",
        label: "About"
    },
    {
        path: "/services",
        label: "Services"
    },
    {
        path: "/gallery",
        label: "Gallery"
    },
    {
        path: "/contact",
        label: "Contact"
    }, 
];
function MyApp({ Component , pageProps  }) {
    const [anchorElNav, setAnchorElNav] = external_react_default().useState(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const Context = /*#__PURE__*/ (0,external_react_.createContext)({});
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Context.Provider, {
        value: {},
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "static",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    maxWidth: "xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                        disableGutters: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    noWrap: true,
                                    component: "a",
                                    href: "/",
                                    sx: {
                                        mr: 2,
                                        display: {
                                            xs: "none",
                                            md: "flex"
                                        },
                                        fontFamily: "monospace",
                                        fontWeight: 700,
                                        letterSpacing: ".3rem",
                                        color: "inherit",
                                        textDecoration: "none"
                                    },
                                    children: "Charlie Glass Inc."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        size: "large",
                                        "aria-label": "account of current user",
                                        "aria-controls": "menu-appbar",
                                        "aria-haspopup": "true",
                                        onClick: handleOpenNavMenu,
                                        color: "inherit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                        id: "menu-appbar",
                                        anchorEl: anchorElNav,
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left"
                                        },
                                        keepMounted: true,
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "left"
                                        },
                                        open: Boolean(anchorElNav),
                                        onClose: handleCloseNavMenu,
                                        sx: {
                                            display: {
                                                xs: "block",
                                                md: "none"
                                            }
                                        },
                                        children: pages.map((page, i)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                onClick: handleCloseNavMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: page.path,
                                                    style: {
                                                        textDecoration: "none"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        textAlign: "center",
                                                        children: page.label
                                                    })
                                                })
                                            }, i))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h5",
                                    noWrap: true,
                                    component: "a",
                                    href: "",
                                    sx: {
                                        mr: 2,
                                        display: {
                                            xs: "flex",
                                            md: "none"
                                        },
                                        flexGrow: 1,
                                        fontWeight: 700,
                                        color: "inherit",
                                        textDecoration: "none"
                                    },
                                    children: "Charlie Glass Inc."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    }
                                },
                                children: pages.map((page, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: page.path,
                                        style: {
                                            textDecoration: "none"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            onClick: handleCloseNavMenu,
                                            sx: {
                                                my: 2,
                                                color: "white",
                                                display: "block"
                                            },
                                            children: page.label
                                        }, page.label)
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    }
                                },
                                children: "917-848-8128"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                style: {
                    position: "relative",
                    textAlign: "center",
                    color: "white"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "",
                        src: "/1.png",
                        alt: "First slide",
                        height: "10%",
                        width: "100%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        style: {
                            background: "rgba(0, 0, 0, .6)",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: "0%",
                            left: "50%",
                            transform: "translate(-50%,0%)"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                            style: {
                                position: "absolute",
                                top: "10%",
                                left: "50%",
                                transform: "translate(-50%,20%)"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: "GET A FREE ESTIMATE TODAY"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: "The all-in-one shop for all of your glass work desires is Charlie Glass. Together, we will design a layout that expressed your business, lifestyle, and creativity. We are ready to help you achieve your next project today."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    style: {
                                        textDecoration: "none"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        variant: "contained",
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                style: {
                    backgroundColor: "#1769aa",
                    color: "white"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            textAlign: "center",
                            children: "Information"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            textAlign: "center",
                            children: "326 50th st. brooklyn, NY 11220"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            textAlign: "center",
                            children: "*Google Map Link*"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            textAlign: "center",
                            children: "917-848-8128"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                style: {
                    backgroundColor: "#1769aa",
                    color: "white"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    textAlign: "left",
                    children: "copyright by Charlie Glass Inc"
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(8267)));
module.exports = __webpack_exports__;

})();