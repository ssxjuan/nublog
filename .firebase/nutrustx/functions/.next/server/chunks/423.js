"use strict";
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/brand.bc9f1a3a.svg","height":52,"width":63});

/***/ }),

/***/ 8153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/menu-05.487e756a.svg","height":24,"width":24});

/***/ }),

/***/ 9882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bE": () => (/* binding */ getFiles),
/* harmony export */   "x7": () => (/* binding */ getFileBySlug),
/* harmony export */   "zv": () => (/* binding */ getAllFilesMetadata)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__]);
next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const root = process.cwd();
const getFiles = ()=>fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(root, "data"));
const getFileBySlug = async (slug)=>{
    const mdxSource = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(root, "data", `${slug}.mdx`), "utf-8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(mdxSource);
    const source = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(content, {});
    return {
        source,
        frontmatter: {
            slug,
            ...data
        }
    };
};
const getAllFilesMetadata = ()=>{
    const files = getFiles();
    return files === null || files === void 0 ? void 0 : files.reduce((allPosts, postSlug)=>{
        const mdxSource = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(root, "data", postSlug), "utf-8");
        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(mdxSource);
        return [
            {
                ...data,
                slug: postSlug.replace(".mdx", "")
            },
            ...allPosts
        ];
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;