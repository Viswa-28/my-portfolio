module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/site.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Nav() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Which logo reads against whatever is currently under the bar.
    const [variant, setVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sections declare `data-nav-theme="light-bg"` when their background is
    // pale. Whichever one is under the bar wins. A thin band at the very top
    // of the viewport is the observation target, so the swap happens exactly
    // as the section passes beneath the logo.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sections = document.querySelectorAll('[data-nav-theme]');
        if (sections.length === 0) return;
        const io = new IntersectionObserver((entries)=>{
            for (const e of entries){
                if (!e.isIntersecting) continue;
                const light = e.target.getAttribute('data-nav-theme') === 'light-bg';
                setVariant(light ? 'dark' : 'light');
            }
        }, {
            rootMargin: '0px 0px -92% 0px'
        });
        sections.forEach((el)=>io.observe(el));
        return ()=>io.disconnect();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const panel = panelRef.current;
        if (!panel) return;
        const focusable = panel.querySelectorAll('a, button');
        focusable[0]?.focus();
        const onKey = (e)=>{
            if (e.key === 'Escape') {
                setOpen(false);
                toggleRef.current?.focus();
                return;
            }
            if (e.key !== 'Tab' || focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return ()=>{
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Primary",
                className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "flex items-center gap-2.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `/brand/luno-${variant}.svg`,
                            alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].studio} home`,
                            width: 132,
                            height: 28,
                            className: "h-7 w-auto"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: `hidden items-center gap-8 md:flex ${variant === 'dark' ? 'text-night' : 'text-light'}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    className: "text-sm font-medium opacity-75 transition-opacity hover:opacity-100",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: toggleRef,
                        type: "button",
                        onClick: ()=>setOpen((v)=>!v),
                        "aria-expanded": open,
                        "aria-controls": "mobile-nav",
                        "aria-label": open ? 'Close menu' : 'Open menu',
                        className: `inline-flex h-11 w-11 items-center justify-center md:hidden ${variant === 'dark' ? 'text-night' : 'text-light'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "22",
                            height: "22",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            "aria-hidden": "true",
                            children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "6",
                                        x2: "21",
                                        y2: "6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "12",
                                        x2: "21",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "18",
                                        x2: "21",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mobile-nav",
                ref: panelRef,
                className: "fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-night px-8 md:hidden",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.href,
                        onClick: ()=>setOpen(false),
                        className: "py-3 font-heading text-3xl font-bold text-light",
                        children: item.label
                    }, item.href, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/SmoothScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function SmoothScroll() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.classList.add('js');
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let destroy = ()=>{};
        let cancelled = false;
        const start = async ()=>{
            const { default: Lenis } = await __turbopack_context__.A("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript, async loader)");
            if (cancelled) return;
            const lenis = new Lenis({
                duration: 1.1
            });
            let frame = 0;
            const loop = (time)=>{
                lenis.raf(time);
                frame = requestAnimationFrame(loop);
            };
            frame = requestAnimationFrame(loop);
            destroy = ()=>{
                cancelAnimationFrame(frame);
                lenis.destroy();
            };
        };
        // Hydration gets the main thread to itself; smooth scrolling is a
        // progressive enhancement and can wait for the first idle slot.
        const idle = window.requestIdleCallback ? window.requestIdleCallback(()=>void start(), {
            timeout: 2000
        }) : window.setTimeout(()=>void start(), 300);
        return ()=>{
            cancelled = true;
            if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
            else window.clearTimeout(idle);
            destroy();
        };
    }, []);
    return null;
}
}),
"[project]/content/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** All editable copy lives here. */ __turbopack_context__.s([
    "about",
    ()=>about,
    "contact",
    ()=>contact,
    "footer",
    ()=>footer,
    "hero",
    ()=>hero,
    "nav",
    ()=>nav,
    "projects",
    ()=>projects,
    "services",
    ()=>services,
    "site",
    ()=>site,
    "testimonials",
    ()=>testimonials
]);
const site = {
    name: 'Viswa',
    studio: 'Luno Lab',
    url: 'https://lunolab.in',
    city: 'Madurai',
    region: 'Tamil Nadu',
    country: 'India',
    email: 'viswaa288@gmail.com',
    phone: '+916382825422',
    whatsapp: '916382825422',
    linkedin: 'https://www.linkedin.com/in/viswaa28/',
    instagram: 'https://www.instagram.com/luno_lab_/',
    title: 'Viswa — Luno Lab | Websites, SEO & Automation in Madurai',
    description: 'I build websites, SEO and automation that grow your business. Luno Lab is a digital growth studio in Madurai, Tamil Nadu.'
};
const nav = [
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Services',
        href: '#services'
    },
    {
        label: 'Projects',
        href: '#projects'
    },
    {
        label: 'Testimonials',
        href: '#testimonials'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
];
const hero = {
    h1: "Hi, I'm Viswa",
    subline: 'I build websites, SEO and automation that grow your business.',
    primaryCta: {
        label: 'View Projects',
        href: '#projects'
    },
    secondaryCta: {
        label: "Let's Talk",
        href: '#contact'
    }
};
const about = {
    heading: 'A one-person studio that ships.',
    // PLACEHOLDER — replace with your own story.
    body: [
        'I started Luno Lab because most small businesses in Madurai were paying for websites that looked fine and did nothing. No enquiries, no tracking, no way to tell whether any of it worked.',
        'So I build the other kind: sites designed around one action, search groundwork that brings the right people, and automation that stops the busywork eating your week.'
    ],
    // PLACEHOLDER — swap in real numbers before launch.
    stats: [
        {
            value: '4',
            label: 'Live client sites'
        },
        {
            value: '10+',
            label: 'Tools & platforms'
        },
        {
            value: '24h',
            label: 'Reply window'
        }
    ]
};
const services = [
    {
        title: 'Website Development',
        description: 'Custom sites in Next.js and React, built around the enquiry you want.',
        icon: 'M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 3h18M7 7.5h.01M10 7.5h.01'
    },
    {
        title: 'SEO',
        description: 'Local search, on-page structure and the technical groundwork underneath.',
        icon: 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.35-4.35'
    },
    {
        title: 'Automation',
        description: 'Enquiry routing, follow-ups and reporting that run without you.',
        icon: 'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z'
    },
    {
        title: 'Digital Growth',
        description: 'Joining the pieces so the site actually earns what it cost.',
        icon: 'M3 17l6-6 4 4 8-8M21 7v5m0-5h-5'
    }
];
const projects = [
    {
        title: 'Tourglobe',
        result: 'A live consultancy site covering five specialty tourism categories.',
        tags: [
            'Next.js',
            'React',
            'Tailwind'
        ],
        image: '/work/tourglobe.jpg',
        alt: 'Tourglobe homepage showing its travel consultancy services',
        href: 'https://tourglobe.in'
    },
    {
        title: 'VisaHub',
        result: 'Doorstep visa guidance across 40+ destinations, with an enquiry flow.',
        tags: [
            'Next.js',
            'React',
            'Tailwind'
        ],
        image: '/work/visahub.jpg',
        alt: 'VisaHub homepage showing visa consulting services',
        href: 'https://visa-hub-eight.vercel.app/'
    },
    {
        title: 'Pack & Go Vacation',
        result: 'Tour packages and vehicle rentals with a direct WhatsApp booking path.',
        tags: [
            'Next.js',
            'React',
            'Tailwind'
        ],
        image: '/work/packgo.jpg',
        alt: 'Pack and Go Vacation homepage showing holiday packages',
        href: '#'
    },
    {
        title: 'Tev HR Solutions',
        result: 'A recruitment company presence built for employer and candidate trust.',
        tags: [
            'React',
            'Tailwind'
        ],
        image: '/work/tevhr.jpg',
        alt: 'Tev HR Solutions homepage showing recruitment services',
        href: '#'
    }
];
const testimonials = [
    {
        quote: 'Placeholder quote — replace with a real client sentence about the work and what changed.',
        name: 'Client name',
        role: 'Role',
        company: 'Company',
        avatar: '/avatars/placeholder.svg'
    },
    {
        quote: 'Placeholder quote — replace with a real client sentence about the work and what changed.',
        name: 'Client name',
        role: 'Role',
        company: 'Company',
        avatar: '/avatars/placeholder.svg'
    },
    {
        quote: 'Placeholder quote — replace with a real client sentence about the work and what changed.',
        name: 'Client name',
        role: 'Role',
        company: 'Company',
        avatar: '/avatars/placeholder.svg'
    }
];
const contact = {
    heading: "Got an idea? Let's build it.",
    body: 'Tell me what you are trying to achieve and I will tell you what would actually move the needle. Direct reply within 24 hours.'
};
const footer = {
    line: 'Built through many late nights. See you at sunrise.'
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0lih4b5._.js.map