(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
/** Formspree-compatible. Set NEXT_PUBLIC_CONTACT_ENDPOINT to your form URL. */ const ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function ContactForm() {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const validate = (data)=>{
        const next = {};
        const name = String(data.get('name') ?? '').trim();
        const email = String(data.get('email') ?? '').trim();
        const message = String(data.get('message') ?? '').trim();
        if (!name) next.name = 'Please enter your name.';
        if (!email) next.email = 'Please enter your email.';
        else if (!EMAIL_RE.test(email)) next.email = 'That email address does not look right.';
        if (!message) next.message = 'Please tell me a bit about the project.';
        return next;
    };
    const onSubmit = async (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        // Honeypot. Real people never see this field, so anything in it is a bot.
        // Reported as success so the bot has nothing to learn from.
        if (String(data.get('company') ?? '')) {
            setStatus('success');
            return;
        }
        const found = validate(data);
        setErrors(found);
        if (Object.keys(found).length > 0) {
            const first = form.querySelector('[aria-invalid="true"]');
            first?.focus();
            return;
        }
        if (!ENDPOINT) {
            setStatus('error');
            return;
        }
        setStatus('submitting');
        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: data
            });
            if (!res.ok) throw new Error(String(res.status));
            setStatus('success');
            form.reset();
        } catch  {
            setStatus('error');
        }
    };
    const field = 'mt-1.5 w-full rounded-2xl border bg-night/50 px-4 py-3 text-base text-light placeholder-light/35 outline-none transition-colors focus:border-violet';
    if (status === 'success') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            role: "status",
            className: "rounded-2xl border border-violet/40 bg-night/60 p-6 text-light",
            children: "Thanks — that came through. I reply within 24 hours."
        }, void 0, false, {
            fileName: "[project]/components/ContactForm.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ref: formRef,
        onSubmit: onSubmit,
        noValidate: true,
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute left-[-9999px] h-px w-px overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `${id}-company`,
                        children: "Company (leave blank)"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: `${id}-company`,
                        name: "company",
                        type: "text",
                        tabIndex: -1,
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `${id}-name`,
                        className: "text-sm font-medium text-light/80",
                        children: "Name"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: `${id}-name`,
                        name: "name",
                        type: "text",
                        autoComplete: "name",
                        "aria-invalid": errors.name ? 'true' : undefined,
                        "aria-describedby": errors.name ? `${id}-name-err` : undefined,
                        className: `${field} ${errors.name ? 'border-red-400' : 'border-light/15'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: `${id}-name-err`,
                        className: "mt-1.5 text-sm text-red-300",
                        children: errors.name
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `${id}-email`,
                        className: "text-sm font-medium text-light/80",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: `${id}-email`,
                        name: "email",
                        type: "email",
                        autoComplete: "email",
                        "aria-invalid": errors.email ? 'true' : undefined,
                        "aria-describedby": errors.email ? `${id}-email-err` : undefined,
                        className: `${field} ${errors.email ? 'border-red-400' : 'border-light/15'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: `${id}-email-err`,
                        className: "mt-1.5 text-sm text-red-300",
                        children: errors.email
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `${id}-message`,
                        className: "text-sm font-medium text-light/80",
                        children: "Message"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: `${id}-message`,
                        name: "message",
                        rows: 5,
                        "aria-invalid": errors.message ? 'true' : undefined,
                        "aria-describedby": errors.message ? `${id}-message-err` : undefined,
                        className: `${field} resize-y ${errors.message ? 'border-red-400' : 'border-light/15'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: `${id}-message-err`,
                        className: "mt-1.5 text-sm text-red-300",
                        children: errors.message
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: status === 'submitting',
                className: "inline-flex min-h-12 items-center justify-center rounded-2xl bg-indigo px-7 text-base font-semibold text-white transition-colors hover:bg-indigo-hover disabled:opacity-60",
                children: status === 'submitting' ? 'Sending…' : 'Send message'
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "text-sm text-red-300",
                children: ENDPOINT ? 'That did not send. Try again, or email me directly.' : 'The form endpoint is not configured yet — set NEXT_PUBLIC_CONTACT_ENDPOINT. In the meantime, email me directly.'
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactForm.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "JHFm3IhoR5WFPrTztYYixOS0yFs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Reveal({ children, delay = 0, className = '' }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (!entry.isIntersecting) return;
                    el.style.transitionDelay = `${delay}ms`;
                    el.classList.add('is-in');
                    io.disconnect();
                }
            }["Reveal.useEffect"], {
                threshold: 0.15
            });
            io.observe(el);
            return ({
                "Reveal.useEffect": ()=>io.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Reveal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Reveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollSequence.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$sequences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/sequences.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
/** Frames are 0001.webp … zero-padded to four. */ const frameUrl = (v, i)=>`${v.dir}/${String(i + 1).padStart(4, '0')}.webp`;
/**
 * Save-Data, or a connection slow enough that 8 MB of frames would be rude.
 * Treated as a hard opt-out: poster only, no sequence fetched at all.
 */ function wantsLightweight() {
    const c = navigator.connection;
    if (!c) return false;
    if (c.saveData) return true;
    return c.effectiveType === 'slow-2g' || c.effectiveType === '2g' || c.effectiveType === '3g';
}
function ScrollSequence({ id, priority = false, manifest, scrollVh, focalX = 0.7, focalY = 0.5, onProgress, children, className = '' }) {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onProgress);
    onProgressRef.current = onProgress;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Chosen on the client so the server HTML stays identical for everyone.
    const [variant, setVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollSequence.useEffect": ()=>{
            const pick = {
                "ScrollSequence.useEffect.pick": ()=>{
                    const portrait = window.innerWidth / window.innerHeight < 1;
                    const v = portrait && manifest.mobile ? manifest.mobile : manifest.desktop;
                    setVariant({
                        "ScrollSequence.useEffect.pick": (prev)=>prev?.dir === v.dir ? prev : v
                    }["ScrollSequence.useEffect.pick"]);
                }
            }["ScrollSequence.useEffect.pick"];
            pick();
            window.addEventListener('resize', pick);
            return ({
                "ScrollSequence.useEffect": ()=>window.removeEventListener('resize', pick)
            })["ScrollSequence.useEffect"];
        }
    }["ScrollSequence.useEffect"], [
        manifest
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollSequence.useEffect": ()=>{
            const section = sectionRef.current;
            const canvas = canvasRef.current;
            if (!section || !canvas || !variant) return;
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduced || wantsLightweight()) {
                // Poster stays and no frames are fetched, but progress still has to
                // fire or anything keyed to it (the services cards) never appears.
                const emit = {
                    "ScrollSequence.useEffect.emit": ()=>{
                        const rect = section.getBoundingClientRect();
                        const span = Math.max(1, section.offsetHeight - window.innerHeight);
                        const p = Math.min(1, Math.max(0, -rect.top / span));
                        onProgressRef.current?.(p);
                    }
                }["ScrollSequence.useEffect.emit"];
                emit();
                window.addEventListener('scroll', emit, {
                    passive: true
                });
                return ({
                    "ScrollSequence.useEffect": ()=>window.removeEventListener('scroll', emit)
                })["ScrollSequence.useEffect"];
            }
            const ctx = canvas.getContext('2d', {
                alpha: false
            });
            if (!ctx) return;
            const { frameCount, width: fw, height: fh } = variant;
            // Pinned coarse timeline — never evicted, so nearest() always resolves.
            const ANCHOR_STRIDE = Math.max(4, Math.ceil(frameCount / 12));
            const ANCHOR = new Set();
            for(let i = 0; i < frameCount; i += ANCHOR_STRIDE)ANCHOR.add(i);
            ANCHOR.add(frameCount - 1);
            // Frames either side of the playhead kept at full detail.
            const WINDOW = 8;
            const anchors = new Map();
            const bitmaps = new Map() // insertion order = LRU
            ;
            const inflight = new Set();
            let drawn = -1;
            let raf = 0;
            let disposed = false;
            // Cached layout reads. Recomputed on resize, never inside onScroll.
            let vw = 0;
            let vh = 0;
            let sectionTop = 0;
            let scrollable = 1;
            const measure = {
                "ScrollSequence.useEffect.measure": ()=>{
                    vw = window.innerWidth;
                    vh = window.innerHeight;
                    const rect = section.getBoundingClientRect();
                    sectionTop = rect.top + window.scrollY;
                    scrollable = Math.max(1, section.offsetHeight - vh);
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    canvas.width = Math.round(vw * dpr);
                    canvas.height = Math.round(vh * dpr);
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                }
            }["ScrollSequence.useEffect.measure"];
            const touch = {
                "ScrollSequence.useEffect.touch": (i, bmp)=>{
                    bitmaps.delete(i);
                    bitmaps.set(i, bmp);
                    while(bitmaps.size > __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$sequences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITMAP_CACHE_SIZE"]){
                        const oldest = bitmaps.keys().next().value;
                        bitmaps.get(oldest)?.close();
                        bitmaps.delete(oldest);
                    }
                }
            }["ScrollSequence.useEffect.touch"];
            const frameAt = {
                "ScrollSequence.useEffect.frameAt": (i)=>bitmaps.get(i) ?? anchors.get(i)
            }["ScrollSequence.useEffect.frameAt"];
            /** Nearest decoded frame, so a miss degrades instead of blanking. */ const nearest = {
                "ScrollSequence.useEffect.nearest": (i)=>{
                    const exact = frameAt(i);
                    if (exact) return exact;
                    for(let d = 1; d < frameCount; d++){
                        const lo = frameAt(i - d);
                        if (lo) return lo;
                        const hi = frameAt(i + d);
                        if (hi) return hi;
                    }
                    return null;
                }
            }["ScrollSequence.useEffect.nearest"];
            const paint = {
                "ScrollSequence.useEffect.paint": (i)=>{
                    const bmp = nearest(i);
                    if (!bmp) return;
                    // object-fit: cover, with the crop window pulled toward the subject.
                    const scale = Math.max(vw / fw, vh / fh);
                    const dw = fw * scale;
                    const dh = fh * scale;
                    ctx.drawImage(bmp, (vw - dw) * focalX, (vh - dh) * focalY, dw, dh);
                    if (!ready) setReady(true);
                }
            }["ScrollSequence.useEffect.paint"];
            const load = {
                "ScrollSequence.useEffect.load": async (i)=>{
                    if (i < 0 || i >= frameCount || bitmaps.has(i) || inflight.has(i)) return;
                    inflight.add(i);
                    try {
                        const res = await fetch(frameUrl(variant, i));
                        const bmp = await createImageBitmap(await res.blob());
                        if (disposed) return bmp.close();
                        if (ANCHOR.has(i)) anchors.set(i, bmp);
                        else touch(i, bmp);
                        if (drawn === i || nearest(drawn) === null) paint(drawn < 0 ? 0 : drawn);
                    } catch  {
                    // A dropped frame is survivable — nearest() covers the gap.
                    } finally{
                        inflight.delete(i);
                    }
                }
            }["ScrollSequence.useEffect.load"];
            /**
     * Two-tier loading.
     *
     * A naive sequential sweep of every frame thrashed the LRU: with 120
     * frames and a 40-slot cache, frames decoded early were evicted before
     * the sweep finished and then re-fetched by the next pass — measured at
     * 175 requests for 120 frames.
     *
     * So: a sparse set of anchors is loaded once and pinned, guaranteeing
     * nearest() always has something within a few frames anywhere on the
     * timeline; everything else is fetched in a window that follows the
     * playhead, which is the only region that needs frame-exact detail.
     * Each index is fetched at most once per mount.
     */ const loadAnchors = {
                "ScrollSequence.useEffect.loadAnchors": async ()=>{
                    for (const i of ANCHOR){
                        if (disposed) return;
                        await load(i);
                    }
                }
            }["ScrollSequence.useEffect.loadAnchors"];
            const fillWindow = {
                "ScrollSequence.useEffect.fillWindow": (center)=>{
                    for(let d = 0; d <= WINDOW; d++){
                        void load(center + d);
                        if (d) void load(center - d);
                    }
                }
            }["ScrollSequence.useEffect.fillWindow"];
            const update = {
                "ScrollSequence.useEffect.update": ()=>{
                    raf = 0;
                    const progress = (window.scrollY - sectionTop) / scrollable;
                    const clamped = Math.min(1, Math.max(0, progress));
                    const i = Math.min(frameCount - 1, Math.round(clamped * (frameCount - 1)));
                    if (i !== drawn) {
                        drawn = i;
                        paint(i);
                        fillWindow(i);
                        onProgressRef.current?.(clamped);
                    }
                }
            }["ScrollSequence.useEffect.update"];
            const onScroll = {
                "ScrollSequence.useEffect.onScroll": ()=>{
                    if (!raf) raf = requestAnimationFrame(update);
                }
            }["ScrollSequence.useEffect.onScroll"];
            let resizeTimer = 0;
            const onResize = {
                "ScrollSequence.useEffect.onResize": ()=>{
                    window.clearTimeout(resizeTimer);
                    resizeTimer = window.setTimeout({
                        "ScrollSequence.useEffect.onResize": ()=>{
                            measure();
                            drawn = -1;
                            onScroll();
                        }
                    }["ScrollSequence.useEffect.onResize"], 150);
                }
            }["ScrollSequence.useEffect.onResize"];
            // Nothing is fetched until the section is near enough to matter.
            const io = new IntersectionObserver({
                "ScrollSequence.useEffect": ([entry])=>{
                    if (!entry.isIntersecting) return;
                    io.disconnect();
                    measure();
                    void loadAnchors();
                    window.addEventListener('scroll', onScroll, {
                        passive: true
                    });
                    window.addEventListener('resize', onResize);
                    onScroll();
                }
            }["ScrollSequence.useEffect"], {
                rootMargin: `${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$sequences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRELOAD_VIEWPORTS"] * 100}% 0px`
            });
            io.observe(section);
            return ({
                "ScrollSequence.useEffect": ()=>{
                    disposed = true;
                    io.disconnect();
                    if (raf) cancelAnimationFrame(raf);
                    window.clearTimeout(resizeTimer);
                    window.removeEventListener('scroll', onScroll);
                    window.removeEventListener('resize', onResize);
                    bitmaps.forEach({
                        "ScrollSequence.useEffect": (b)=>b.close()
                    }["ScrollSequence.useEffect"]);
                    bitmaps.clear();
                    anchors.forEach({
                        "ScrollSequence.useEffect": (b)=>b.close()
                    }["ScrollSequence.useEffect"]);
                    anchors.clear();
                }
            })["ScrollSequence.useEffect"];
        // `ready` is intentionally not a dependency: it only ever flips false→true
        // and re-running this effect would tear down the whole cache.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ScrollSequence.useEffect"], [
        variant,
        focalX,
        focalY
    ]);
    // Poster sources are declared with media queries rather than chosen in
    // JS: the browser then picks the right one while parsing HTML, before any
    // script runs. Choosing it from `variant` state would make the server emit
    // the desktop poster and phones download both.
    const d = manifest.desktop;
    const m = manifest.mobile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: sectionRef,
        className: `relative ${className}`,
        style: {
            height: `${scrollVh}vh`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-svh w-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                    children: [
                        m?.poster.avif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            media: "(max-aspect-ratio: 1/1)",
                            srcSet: m.poster.avif,
                            type: "image/avif"
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this),
                        m && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            media: "(max-aspect-ratio: 1/1)",
                            srcSet: m.poster.webp,
                            type: "image/webp"
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this),
                        d.poster.avif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            srcSet: d.poster.avif,
                            type: "image/avif"
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 325,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: d.poster.webp,
                            alt: "",
                            "aria-hidden": "true",
                            width: d.width,
                            height: d.height,
                            fetchPriority: priority ? 'high' : 'low',
                            loading: priority ? 'eager' : 'lazy',
                            decoding: "async",
                            className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? 'opacity-0' : 'opacity-100'}`,
                            style: {
                                objectPosition: `${focalX * 100}% ${focalY * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ScrollSequence.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    "aria-hidden": "true",
                    className: `absolute inset-0 h-full w-full transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`
                }, void 0, false, {
                    fileName: "[project]/components/ScrollSequence.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": "true",
                    className: "absolute inset-0 bg-gradient-to-r from-night/85 via-night/55 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/components/ScrollSequence.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/ScrollSequence.tsx",
            lineNumber: 314,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ScrollSequence.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
_s(ScrollSequence, "D7T9Vv+HgIkC9oF3t2LHvKEH7hU=");
_c = ScrollSequence;
var _c;
__turbopack_context__.k.register(_c, "ScrollSequence");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollSequence$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ScrollSequence.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$sequences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/sequences.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$frames$2f$manifests$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/frames/manifests.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const all = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$frames$2f$manifests$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function Services() {
    _s();
    const cfg = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$sequences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEQUENCES"].services;
    // How many cards are revealed. Derived from scrub progress, but state is
    // only written when the count actually changes — five times across the
    // whole section, not once per scroll event.
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const onProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Services.useCallback[onProgress]": (p)=>{
            const next = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$sequences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICE_CARD_STOPS"].filter({
                "Services.useCallback[onProgress]": (stop)=>p >= stop
            }["Services.useCallback[onProgress]"]).length;
            setRevealed({
                "Services.useCallback[onProgress]": (prev)=>prev === next ? prev : next
            }["Services.useCallback[onProgress]"]);
        }
    }["Services.useCallback[onProgress]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScrollSequence$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "services",
        manifest: all.services,
        scrollVh: cfg.scrollVh,
        focalX: cfg.focalX,
        focalY: cfg.focalY,
        onProgress: onProgress,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 flex h-full items-center px-6 lg:px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-[1400px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "max-w-xl font-heading text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-light",
                        children: "What I do"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Services.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `rounded-2xl border border-light/12 bg-night/55 p-5 backdrop-blur-sm transition-all duration-500 ease-out ${revealed > i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.6",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        "aria-hidden": "true",
                                        className: "text-violet",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: service.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Services.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Services.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-3 font-heading text-lg font-bold text-light",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Services.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-sm text-light/70",
                                        children: service.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Services.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, service.title, true, {
                                fileName: "[project]/components/sections/Services.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Services.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Services.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/Services.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Services.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Services, "2u8pdoDg2TWkNExweW9D1Wr8qys=");
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/sequences.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Single source of truth for the scroll-driven background sequences.
 *
 * `scrollVh` is the pinned scroll length for each section. `frames` must
 * match what scripts/extract-frames.py produced — the generated manifest is
 * the authority at runtime, this is here so the two can be diffed.
 */ __turbopack_context__.s([
    "BITMAP_CACHE_SIZE",
    ()=>BITMAP_CACHE_SIZE,
    "PRELOAD_VIEWPORTS",
    ()=>PRELOAD_VIEWPORTS,
    "SEQUENCES",
    ()=>SEQUENCES,
    "SERVICE_CARD_STOPS",
    ()=>SERVICE_CARD_STOPS
]);
const SEQUENCES = {
    hero: {
        scrollVh: 250,
        focalX: 0.7,
        focalY: 0.5
    },
    about: {
        scrollVh: 200,
        focalX: 0.7,
        focalY: 0.5
    },
    services: {
        scrollVh: 250,
        focalX: 0.7,
        focalY: 0.5
    },
    projects: {
        scrollVh: 150,
        focalX: 0.7,
        focalY: 0.5
    },
    testimonials: {
        scrollVh: 150,
        focalX: 0.7,
        focalY: 0.5
    },
    contact: {
        scrollVh: 150,
        focalX: 0.7,
        focalY: 0.5
    },
    footer: {
        scrollVh: 100,
        focalX: 0.5,
        focalY: 0.5
    }
};
const SERVICE_CARD_STOPS = [
    0.25,
    0.45,
    0.65,
    0.85
];
const BITMAP_CACHE_SIZE = 40;
const PRELOAD_VIEWPORTS = 1.5;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/frames/manifests.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "hero": {
        "name": "hero",
        "desktop": {
            "frameCount": 120,
            "width": 1280,
            "height": 720,
            "fps": 24,
            "dir": "/frames/hero/desktop",
            "poster": {
                "webp": "/frames/hero/desktop/poster.webp",
                "avif": "/frames/hero/desktop/poster.avif"
            }
        },
        "mobile": {
            "frameCount": 72,
            "width": 640,
            "height": 1138,
            "fps": 24,
            "dir": "/frames/hero/mobile",
            "poster": {
                "webp": "/frames/hero/mobile/poster.webp",
                "avif": "/frames/hero/mobile/poster.avif"
            }
        },
        "endColor": "#4c384e"
    },
    "about": {
        "name": "about",
        "desktop": {
            "frameCount": 206,
            "width": 1920,
            "height": 1080,
            "fps": 24,
            "dir": "/frames/about/desktop",
            "poster": {
                "webp": "/frames/about/desktop/poster.webp",
                "avif": "/frames/about/desktop/poster.avif"
            }
        },
        "mobile": {
            "frameCount": 72,
            "width": 640,
            "height": 1137,
            "fps": 24,
            "dir": "/frames/about/mobile",
            "poster": {
                "webp": "/frames/about/mobile/poster.webp",
                "avif": "/frames/about/mobile/poster.avif"
            }
        },
        "endColor": "#51516f"
    },
    "services": {
        "name": "services",
        "desktop": {
            "frameCount": 120,
            "width": 1280,
            "height": 720,
            "fps": 24,
            "dir": "/frames/services/desktop",
            "poster": {
                "webp": "/frames/services/desktop/poster.webp",
                "avif": "/frames/services/desktop/poster.avif"
            }
        },
        "mobile": {
            "frameCount": 72,
            "width": 640,
            "height": 1137,
            "fps": 24,
            "dir": "/frames/services/mobile",
            "poster": {
                "webp": "/frames/services/mobile/poster.webp",
                "avif": "/frames/services/mobile/poster.avif"
            }
        },
        "endColor": "#615167"
    },
    "testimonials": {
        "name": "testimonials",
        "desktop": {
            "frameCount": 120,
            "width": 1280,
            "height": 720,
            "fps": 24,
            "dir": "/frames/testimonials/desktop",
            "poster": {
                "webp": "/frames/testimonials/desktop/poster.webp",
                "avif": "/frames/testimonials/desktop/poster.avif"
            }
        },
        "mobile": {
            "frameCount": 72,
            "width": 640,
            "height": 1137,
            "fps": 24,
            "dir": "/frames/testimonials/mobile",
            "poster": {
                "webp": "/frames/testimonials/mobile/poster.webp",
                "avif": "/frames/testimonials/mobile/poster.avif"
            }
        },
        "endColor": "#bf92eb"
    },
    "contact": {
        "name": "contact",
        "desktop": {
            "frameCount": 120,
            "width": 1280,
            "height": 720,
            "fps": 24,
            "dir": "/frames/contact/desktop",
            "poster": {
                "webp": "/frames/contact/desktop/poster.webp",
                "avif": "/frames/contact/desktop/poster.avif"
            }
        },
        "mobile": {
            "frameCount": 72,
            "width": 640,
            "height": 1137,
            "fps": 24,
            "dir": "/frames/contact/mobile",
            "poster": {
                "webp": "/frames/contact/mobile/poster.webp",
                "avif": "/frames/contact/mobile/poster.avif"
            }
        },
        "endColor": "#473244"
    },
    "footer": {
        "name": "footer",
        "desktop": {
            "frameCount": 120,
            "width": 1280,
            "height": 720,
            "fps": 24,
            "dir": "/frames/footer/desktop",
            "poster": {
                "webp": "/frames/footer/desktop/poster.webp",
                "avif": "/frames/footer/desktop/poster.avif"
            }
        },
        "mobile": {
            "frameCount": 72,
            "width": 640,
            "height": 1137,
            "fps": 24,
            "dir": "/frames/footer/mobile",
            "poster": {
                "webp": "/frames/footer/mobile/poster.webp",
                "avif": "/frames/footer/mobile/poster.avif"
            }
        },
        "endColor": "#865d4d"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_16hucis._.js.map