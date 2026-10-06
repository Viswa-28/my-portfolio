module.exports = [
"[project]/components/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Reveal({ children, delay = 0, className = '' }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry])=>{
            if (!entry.isIntersecting) return;
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-in');
            io.disconnect();
        }, {
            threshold: 0.15
        });
        io.observe(el);
        return ()=>io.disconnect();
    }, [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Reveal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ScrollSequence.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$sequences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/sequences.ts [app-ssr] (ecmascript)");
'use client';
;
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
function ScrollSequence({ id, manifest, scrollVh, focalX = 0.7, focalY = 0.5, onProgress, children, className = '' }) {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onProgress);
    onProgressRef.current = onProgress;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Chosen on the client so the server HTML stays identical for everyone.
    const [variant, setVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pick = ()=>{
            const portrait = window.innerWidth / window.innerHeight < 1;
            const v = portrait && manifest.mobile ? manifest.mobile : manifest.desktop;
            setVariant((prev)=>prev?.dir === v.dir ? prev : v);
        };
        pick();
        window.addEventListener('resize', pick);
        return ()=>window.removeEventListener('resize', pick);
    }, [
        manifest
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        if (!section || !canvas || !variant) return;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || wantsLightweight()) {
            // Poster stays and no frames are fetched, but progress still has to
            // fire or anything keyed to it (the services cards) never appears.
            const emit = ()=>{
                const rect = section.getBoundingClientRect();
                const span = Math.max(1, section.offsetHeight - window.innerHeight);
                const p = Math.min(1, Math.max(0, -rect.top / span));
                onProgressRef.current?.(p);
            };
            emit();
            window.addEventListener('scroll', emit, {
                passive: true
            });
            return ()=>window.removeEventListener('scroll', emit);
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
        const measure = ()=>{
            vw = window.innerWidth;
            vh = window.innerHeight;
            const rect = section.getBoundingClientRect();
            sectionTop = rect.top + window.scrollY;
            scrollable = Math.max(1, section.offsetHeight - vh);
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(vw * dpr);
            canvas.height = Math.round(vh * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        const touch = (i, bmp)=>{
            bitmaps.delete(i);
            bitmaps.set(i, bmp);
            while(bitmaps.size > __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$sequences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BITMAP_CACHE_SIZE"]){
                const oldest = bitmaps.keys().next().value;
                bitmaps.get(oldest)?.close();
                bitmaps.delete(oldest);
            }
        };
        const frameAt = (i)=>bitmaps.get(i) ?? anchors.get(i);
        /** Nearest decoded frame, so a miss degrades instead of blanking. */ const nearest = (i)=>{
            const exact = frameAt(i);
            if (exact) return exact;
            for(let d = 1; d < frameCount; d++){
                const lo = frameAt(i - d);
                if (lo) return lo;
                const hi = frameAt(i + d);
                if (hi) return hi;
            }
            return null;
        };
        const paint = (i)=>{
            const bmp = nearest(i);
            if (!bmp) return;
            // object-fit: cover, with the crop window pulled toward the subject.
            const scale = Math.max(vw / fw, vh / fh);
            const dw = fw * scale;
            const dh = fh * scale;
            ctx.drawImage(bmp, (vw - dw) * focalX, (vh - dh) * focalY, dw, dh);
            if (!ready) setReady(true);
        };
        const load = async (i)=>{
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
        };
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
     */ const loadAnchors = async ()=>{
            for (const i of ANCHOR){
                if (disposed) return;
                await load(i);
            }
        };
        const fillWindow = (center)=>{
            for(let d = 0; d <= WINDOW; d++){
                void load(center + d);
                if (d) void load(center - d);
            }
        };
        const update = ()=>{
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
        };
        const onScroll = ()=>{
            if (!raf) raf = requestAnimationFrame(update);
        };
        let resizeTimer = 0;
        const onResize = ()=>{
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(()=>{
                measure();
                drawn = -1;
                onScroll();
            }, 150);
        };
        // Nothing is fetched until the section is near enough to matter.
        const io = new IntersectionObserver(([entry])=>{
            if (!entry.isIntersecting) return;
            io.disconnect();
            measure();
            void loadAnchors();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            window.addEventListener('resize', onResize);
            onScroll();
        }, {
            rootMargin: `${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$sequences$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRELOAD_VIEWPORTS"] * 100}% 0px`
        });
        io.observe(section);
        return ()=>{
            disposed = true;
            io.disconnect();
            if (raf) cancelAnimationFrame(raf);
            window.clearTimeout(resizeTimer);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            bitmaps.forEach((b)=>b.close());
            bitmaps.clear();
            anchors.forEach((b)=>b.close());
            anchors.clear();
        };
    // `ready` is intentionally not a dependency: it only ever flips false→true
    // and re-running this effect would tear down the whole cache.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: sectionRef,
        className: `relative ${className}`,
        style: {
            height: `${scrollVh}vh`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-svh w-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                    children: [
                        m?.poster.avif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            media: "(max-aspect-ratio: 1/1)",
                            srcSet: m.poster.avif,
                            type: "image/avif"
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this),
                        m && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            media: "(max-aspect-ratio: 1/1)",
                            srcSet: m.poster.webp,
                            type: "image/webp"
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this),
                        d.poster.avif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            srcSet: d.poster.avif,
                            type: "image/avif"
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 318,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: d.poster.webp,
                            alt: "",
                            "aria-hidden": "true",
                            width: d.width,
                            height: d.height,
                            fetchPriority: "high",
                            decoding: "async",
                            className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? 'opacity-0' : 'opacity-100'}`,
                            style: {
                                objectPosition: `${focalX * 100}% ${focalY * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ScrollSequence.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ScrollSequence.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    "aria-hidden": "true",
                    className: `absolute inset-0 h-full w-full transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`
                }, void 0, false, {
                    fileName: "[project]/components/ScrollSequence.tsx",
                    lineNumber: 335,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": "true",
                    className: "absolute inset-0 bg-gradient-to-r from-night/85 via-night/55 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/components/ScrollSequence.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/ScrollSequence.tsx",
            lineNumber: 307,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ScrollSequence.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
}),
"[project]/config/sequences.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=_0mk0bxt._.js.map