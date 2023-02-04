import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as addAttribute, e as renderSlot, f as renderComponent, m as maybeRenderHead, u as unescapeHTML, F as Fragment, s as spreadAttributes, g as defineScriptVars, h as createVNode } from '../astro.dca053d4.mjs';
import * as crypto from 'crypto';
/* empty css                          */
const $$Astro$k = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    url
  } = Astro2.props;
  return renderTemplate`<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <meta name="viewport" content="width=device-width">
        <title>Page ${Astro2.props.page || 1}</title>
    ${renderHead($$result)}</head>
    <body${addAttribute(url ? "align-items:flex-start" : null, "style")}>
        ${url && renderTemplate`<a href="/posts" style="align-self:flex-start;">Back</a>`}
        ${renderSlot($$result, $$slots["default"])}
    </body></html>`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/src/Layout.astro");

const $$Astro$j = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": () => renderTemplate`${maybeRenderHead($$result)}<h1>Astro SSR Pagination Example</h1><p>This demo uses <a href="https://github.com/BryceRussell/astro-headless-ui">astro-headless-ui</a>’s <code>&lt;Paginate&gt;</code>, <code>&lt;Pagination&gt;</code>, and <code>&lt;Breadcrumb&gt;</code> components</p><ul>
        <p><strong>Features</strong>:</p>
        <li>Paginate data in SSR, (similar to SSG's <code>paginate()</code> function from <code>getStaticPaths()</code>)</li>
        <li>Include index on paginated route</li>
        <li>Compatible with customizable link navigation for pages</li>
        <li>Use a slot function as a render template for pages</li>
        <li>Use a page numer as a named slot to target a page for alternative render</li>
        <li>Render an 'error' slot when viewing page numbers that dont exist</li>
        <li>Breadcrumb for easy backwards navigation</li>
    </ul><a href="/posts" class="button">Demo</a><br><a href="https://github.com/BryceRussell/astro-headless-ui/wiki/Paginate" class="button">Documentation</a><br><a href="/code" class="button">Code Example</a>` })}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/src/pages/index.astro");

const $$file$1 = "C:/Users/bryce/Desktop/Projects/pagination-example/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro();
const $$NoScriptProperty = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$NoScriptProperty;
  const {
    selector = ":root",
    name = "noscript",
    class: _class = `${name}-hide`,
    default: _default = "false"
  } = Astro2.props;
  return renderTemplate`<style>${unescapeHTML(`
    ${selector} {
        --${name}: ${_default};
    }
    ${_class && _default === "false" ? `.${_class} {
        display: var(--noscript, none);
    }` : ""}
`)}</style>

${maybeRenderHead($$result)}<noscript>
    <style>${unescapeHTML(`
        ${selector} {
            --${name}: initial !important;
        }
    `)}</style>
    ${renderSlot($$result, $$slots["default"])}
</noscript>`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/style-components/NoScriptProperty.astro");

const $$Astro$h = createAstro();
const $$AnimatedSpriteSheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$AnimatedSpriteSheet;
  const {
    is: Is = "div",
    name = "sprite-animation",
    url,
    cols = 1,
    rows = 1,
    height,
    width,
    speed = 1e3,
    class: _class,
    ...attrs
  } = Astro2.props;
  const horizontal = cols > 1 && rows === 1 ? true : false;
  const vertical = rows > 1 && cols === 1 ? true : false;
  const grid = cols > 1 && rows > 1 ? true : false;
  return renderTemplate`${renderComponent($$result, "Is", Is, { ...attrs, "class:list": [name, _class] }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}

<style>${unescapeHTML(` .${name} { height: ${height / rows}px; width: ${width / cols}px; background: transparent url(${url}) 0 0 no-repeat; animation: ${horizontal ? `${name}-x ${speed}ms steps(${cols}) infinite;` : ""} ${vertical ? `${name}-y ${speed}ms steps(${rows}) infinite;` : ""} ${grid ? `${name}-x ${speed}ms steps(${cols}) infinite,${name}-y ${speed * rows}ms steps(${rows}) infinite;` : ""} } ${horizontal || grid ? ` @keyframes ${name}-x { 0% {background-position-x: 0px;} 100% { background-position-x: -${width}px; } } ` : ""} ${vertical || grid ? ` @keyframes ${name}-y { 0% {background-position-y: 0px;} 100% { background-position-y: -${height}px; } } ` : ""} `)}</style>`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/style-components/AnimatedSpriteSheet.astro");

const $$Astro$g = createAstro();
const $$IconSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$IconSwitcher;
  const {
    as: As = "span",
    default: _default,
    active = "",
    name = "icon-toggle",
    size = "1rem",
    animation = "height",
    speed = 250,
    hide = false,
    class: _class,
    ...attrs
  } = Astro2.props;
  const height = animation === "height";
  const width = animation === "width";
  const opacity = animation === "opacity";
  return renderTemplate`${!hide && renderTemplate`${renderComponent($$result, "As", As, { ...attrs, "class:list": [name, _class] }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`}

<style>${unescapeHTML(`${_default ? `${_default} ` : ""}.${name}{position:relative;display:inline-block;${size ? `height:${size};width:${size};` : ""}}${_default ? `${_default} ` : ""}.${name} *:nth-child(1){position:absolute;top:0;right:0;height:100%;width:100%;${animation ? `transition:${animation} ${speed}ms;` : ""}}${_default ? `${_default} ` : ""}.${name} *:nth-child(2){position:absolute;top:0;right:0;height:${height ? "0" : "100%"};width:${width ? "0" : "100%"};${opacity ? `opacity:0;` : ""}${animation ? `transition:${animation} ${speed}ms;` : ""}}${active} .${name} *:nth-child(1){${animation}:0;}${active} .${name} *:nth-child(2){${animation}:100%;}`)}</style>`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/style-components/IconSwitcher.astro");

const $$Astro$f = createAstro();
const $$Rating = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Rating;
  const {
    total = 5,
    active = 0
  } = Astro2.props;
  return renderTemplate`${[...Array(Math.floor(+active))].map((_) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("active"))}` })}`)}
${+active - Math.floor(+active) > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("half"))}` })}`}
${[...Array(Math.floor(+total - +active))].map((_) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("disabled"))}` })}`)}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/Rating.astro");

const $$Astro$e = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    text,
    active,
    mode = "join",
    ...attrs
  } = Astro2.props;
  var calc = { text, ...attrs };
  if (mode === "join" && active) {
    for (const [key, val] of Object.entries(active)) {
      if (!key)
        continue;
      if (key === "text")
        calc[key] = void 0;
      if (calc[key])
        calc[key] += val;
      else
        calc[key] = val;
    }
  } else if (mode === "spread" && active)
    calc = { ...calc, ...active };
  else if (mode === "replace" && active)
    calc = { ...active };
  return renderTemplate`${(_) => {
    if (Astro2.url.pathname === attrs.href) {
      if (Astro2.slots.has("active"))
        return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("active"))}` })}`;
      if (active)
        return renderTemplate`${maybeRenderHead($$result)}<a${spreadAttributes(calc)}>${calc.text}${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("default"))}` })}</a>`;
    }
    return renderTemplate`<a${spreadAttributes(attrs)}>${text}${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("default"))}` })}</a>`;
  }}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/Link.astro");

const $$Astro$d = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Navigation;
  const {
    links,
    defaults,
    active,
    mode
  } = Astro2.props;
  return renderTemplate`${links.map((link) => {
    const attrs = { active, mode, ...defaults, ...link };
    if (!!Object.keys(Astro2.slots).length) {
      if (Astro2.url.pathname === link.href && Astro2.slots.has("active"))
        return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("active", [attrs]))}` })}`;
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [attrs]))}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Link", $$Link, { ...attrs })}`;
  })}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/Navigation.astro");

const $$Astro$c = createAstro();
const $$Breadcrumb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const {
    index = "Home",
    collapse = false,
    start = 1,
    end = 3
  } = Astro2.props;
  let {
    url = Astro2.url
  } = Astro2.props;
  if (typeof url === "string")
    url = new URL(url);
  const slugs = url.pathname.endsWith("/") ? url.pathname.slice(0, -1).split("/") : url.pathname.split("/");
  function disabled(i) {
    if (i + 1 > (index ? +start : +start + 1) && i < slugs.length - +end)
      return true;
    return false;
  }
  var previous = "";
  return renderTemplate`${slugs.map((slug, i) => {
    let text = slug;
    if (i === 0) {
      if (index === false)
        return false;
      text = "" + index;
    }
    previous = `${previous}${slug}/`;
    const param = {
      href: i === 0 ? "/" : previous.slice(0, -1),
      slug,
      text
    };
    if (!!Object.keys(Astro2.slots).length) {
      if (Astro2.slots.has("active") && i === slugs.length - 1)
        return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("active", [param]))}` })}`;
      if (Astro2.slots.has("disabled") && collapse && disabled(i))
        return !disabled(i - 1) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("disabled", [param]))}` })}`;
      if (Astro2.slots.has(slug))
        return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render(slug, [param]))}` })}`;
      if (Astro2.slots.has("" + i))
        return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("" + i, [param]))}` })}`;
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [param]))}` })}`;
    }
    if (collapse && disabled(i))
      return !disabled(i - 1) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${maybeRenderHead($$result)}<span class="disabled">...</span><span class="divider">/</span>` })}`;
    if (i === slugs.length - 1)
      return renderTemplate`<span class="active">${text}</span>`;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`<a${addAttribute(param.href, "href")}>${text}</a><span class="divider">/</span>` })}`;
  })}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/Breadcrumb.astro");

const $$Astro$b = createAstro();
const $$Paginate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Paginate;
  const {
    data = [],
    size = 10,
    page = 1
  } = Astro2.props;
  const last = Math.max(1, Math.ceil(data.length / +size));
  const pages = [...Array(last).keys()].map((n) => {
    const num = n + 1;
    const start = +size === Infinity ? 0 : (num - 1) * +size;
    const end = Math.min(start + +size, data.length);
    return {
      data: data.slice(start, end),
      start,
      end: end - 1,
      size,
      total: data.length,
      current: num ? num : void 0,
      last
    };
  });
  return renderTemplate`${(_) => {
    if (!Number.isInteger(+page) || page > last)
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("error", [pages.pop()]))}` })}`;
    if (Astro2.slots.has("" + page))
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("" + page, [pages[+page - 1]]))}` })}`;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [pages[+page - 1]]))}` })}`;
  }}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/Paginate.astro");

const $$Astro$a = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    url = "",
    total,
    current,
    start = 2,
    end = 2,
    middle = 2,
    before = middle,
    after = middle,
    index,
    commas = true,
    collapse = true
  } = Astro2.props;
  function disabled(page) {
    if (!collapse)
      return false;
    else if (+current === page)
      return false;
    else if (page <= +start || page >= +total - (+end - 1))
      return false;
    else if (page >= +current - +before && page <= +current + +after)
      return false;
    else
      return true;
  }
  return renderTemplate`${Array.from({ length: +total }, (_, i) => i + 1).map((i) => {
    let slot;
    if (+current === i)
      slot = "active";
    else if (i !== 1 && disabled(i) && !disabled(i - 1))
      slot = "disabled";
    else if (!disabled(i)) {
      if (i === 1)
        slot = "first";
      else if (i === +current - 1)
        slot = "before";
      else if (i === +current + 1)
        slot = "after";
      else if (i === +total)
        slot = "last";
      else
        slot = "link";
    }
    const param = {
      number: commas ? Intl.NumberFormat("en-us").format(i) : i,
      href: i === 1 ? index ? `${url}/` : `${url}/${i}` : `${url}/${i}`,
      slot
    };
    if (!!Object.keys(Astro2.slots).length) {
      if (Astro2.slots.has("" + i))
        return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("" + i, [param]))}` })}`;
      if (Astro2.slots.has(slot))
        return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render(slot, [param]))}` })}`;
      if (slot)
        return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [param]))}` })}`;
    }
    if (slot === "active")
      return renderTemplate`${maybeRenderHead($$result)}<span class="active">${param.number}</span>`;
    if (slot === "disabled")
      return renderTemplate`<span class="disabled">...</span>`;
    if (slot)
      return renderTemplate`<a${addAttribute(param.href, "href")}>${param.number}</a>`;
  })}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/Pagination.astro");

const $$Astro$9 = createAstro();
const $$TableOfContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const {
    url = Astro2.url.pathname,
    headings = [],
    depth = 1,
    max = 6
  } = Astro2.props;
  const equalDepth = headings.filter((h) => h.depth === +depth);
  return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute(depth, "data-depth")}>
    ${equalDepth.map((heading, i) => {
    const start = headings.indexOf(heading) + 1;
    const end = headings.indexOf(equalDepth[i + 1]);
    const subHeadings = headings.slice(start, end === -1 ? void 0 : end);
    const _props = {
      url,
      headings: subHeadings,
      depth: heading.depth + 1,
      max
    };
    const param = {
      heading,
      subHeadings,
      ...Astro2.props
    };
    return renderTemplate`<li>
            ${Astro2.slots.default ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [param]))}` })}` : renderTemplate`<a${addAttribute(`${url}#${heading.slug}`, "href")}>${heading.text}</a>`}
            ${renderComponent($$result, "Astro.self", Astro2.self, { ..._props })}
        </li>`;
  })}
</ul>`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/TableOfContents.astro");

const $$Astro$8 = createAstro();
const $$Show = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Show;
  const {
    when = false
  } = Astro2.props;
  return renderTemplate`${when ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : renderTemplate`${renderSlot($$result, $$slots["false"])}`}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/Show.astro");

const $$Astro$7 = createAstro();
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Map;
  const {
    loop
  } = Astro2.props;
  const array = loop ? [...Array(loop).keys()] : Object.entries(Astro2.props).filter(([i]) => Number.isInteger(+i)).sort((a, b) => +a[0] - +b[0]).map(([_, val]) => val);
  return renderTemplate`${array.map((item, i) => {
    if (Astro2.slots.has("" + i))
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("" + i, [array.at(i), i, array]))}` })}`;
    if (Astro2.slots.has("" + (i - array.length)))
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("" + (i - array.length), [array.at(i), i, array]))}` })}`;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [item, i]))}` })}`;
  })}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/Map.astro");

const $$Astro$6 = createAstro();
const $$Switch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Switch;
  const {
    name,
    default: _default = "default",
    key = _default,
    args
  } = Astro2.props;
  let html;
  if (!name) {
    html = await Astro2.slots.render(_default);
    const slots = Object.keys(Astro2.slots).filter((i) => Number.isInteger(+i)).sort((a, b) => +a - +b);
    for (let slot of slots) {
      let _html = await Astro2.slots.render(slot);
      if (_html) {
        html = _html;
        break;
      }
    }
  }
  return renderTemplate`${() => {
    return !name ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(html)}` })}` : Astro2.slots.has(name) ? args && (args[name] || args[key]) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render(name, [args[name] || args[key]]))}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render(name))}` })}` : args && args[key] ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render(_default, [args[key]]))}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${unescapeHTML(Astro2.slots.render(_default))}` })}`;
  }}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/components/Switch.astro");

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$5 = createAstro();
const $$DarkThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DarkThemeToggle;
  const {
    hide,
    ...attrs
  } = Astro2.props;
  const _attrs = {
    onclick: "darkThemeToggle()",
    "aria-label": "Toggle dark theme",
    ...attrs
  };
  return renderTemplate(_a$4 || (_a$4 = __template$4(["<script>\n    window.matchMedia('(prefers-color-scheme: dark)').matches && sessionStorage.getItem('dark') === null && sessionStorage.setItem('dark', 'true')\n    sessionStorage.getItem('dark') === 'true' && document.body.classList.add('dark');\n    function darkThemeToggle(toggle=!document.body.classList.contains('dark')) { toggle\n        ? (document.body.classList.add('dark'), sessionStorage.setItem('dark', 'true'))\n        : (document.body.classList.remove('dark'), sessionStorage.setItem('dark', 'false')) }\n    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => darkThemeToggle(e.matches))\n<\/script>\n\n", ""])), !hide && renderTemplate`${maybeRenderHead($$result)}<button${spreadAttributes(_attrs)}>
        ${renderSlot($$result, $$slots["default"])}
    </button>`);
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/client-components/DarkThemeToggle.astro");

function hashId(input, length = 5, shift = 0) {
  if (shift > 32 - length)
    shift = 32 - length;
  const hash = crypto.createHash("sha256").update(input).digest();
  const lookup = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  let result = "";
  for (let i = shift; i < hash.length; i++) {
    const letter = lookup[hash[i] % lookup.length];
    result += letter;
    if (result.length >= length)
      break;
  }
  return result;
}

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$4 = createAstro();
const $$MultiThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MultiThemeToggle;
  const {
    selector = "body",
    scope = hashId(selector),
    theme = "dark",
    dark = false,
    hide = false,
    ...attrs
  } = Astro2.props;
  const _attrs = {
    onclick: `${theme}Toggle${scope}()`,
    "aria-label": `Toggle ${theme} theme`,
    ...attrs
  };
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<script>(function(){", "\n    const classes = document.querySelector(selector).classList || document.body.classList\n    dark && window.matchMedia('(prefers-color-scheme: dark)').matches && sessionStorage.getItem(scope) === null && sessionStorage.setItem(scope, theme)\n    sessionStorage.getItem(scope) === theme && classes.add(theme)\n    window.themes = window.themes || {}\n    window.themes[selector] = window.themes[selector] || []\n    !window.themes[selector].includes(theme) && window.themes[selector].push(theme)\n    window[`${theme}Toggle${scope}`] = (toggle=!classes.contains(theme)) => {\n        classes.forEach(c => c !== theme && window.themes[selector].includes(c) && classes.remove(c))\n        toggle\n            ? (classes.add(theme), sessionStorage.setItem(scope, theme))\n            : (classes.remove(theme), sessionStorage.setItem(scope, ''))\n    }\n    dark && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', v => window[`${theme}Toggle${scope}`](v.matches))\n})();<\/script>\n\n", ""], ["<script>(function(){", "\n    const classes = document.querySelector(selector).classList || document.body.classList\n    dark && window.matchMedia('(prefers-color-scheme: dark)').matches && sessionStorage.getItem(scope) === null && sessionStorage.setItem(scope, theme)\n    sessionStorage.getItem(scope) === theme && classes.add(theme)\n    window.themes = window.themes || {}\n    window.themes[selector] = window.themes[selector] || []\n    !window.themes[selector].includes(theme) && window.themes[selector].push(theme)\n    window[\\`\\${theme}Toggle\\${scope}\\`] = (toggle=!classes.contains(theme)) => {\n        classes.forEach(c => c !== theme && window.themes[selector].includes(c) && classes.remove(c))\n        toggle\n            ? (classes.add(theme), sessionStorage.setItem(scope, theme))\n            : (classes.remove(theme), sessionStorage.setItem(scope, ''))\n    }\n    dark && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', v => window[\\`\\${theme}Toggle\\${scope}\\`](v.matches))\n})();<\/script>\n\n", ""])), defineScriptVars({
    selector,
    scope,
    theme,
    dark
  }), !hide && renderTemplate`${maybeRenderHead($$result)}<button${spreadAttributes(_attrs)}>
        ${renderSlot($$result, $$slots["default"])}
    </button>`);
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/client-components/MultiThemeToggle.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro();
const $$CodeCopy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CodeCopy;
  const {
    selector = "pre",
    active = "copied",
    duration = 2e3,
    padding = ".5rem",
    paddingX = padding,
    paddingY = padding,
    template = hashId(selector),
    ..._attrs
  } = Astro2.props;
  const attrs = {
    style: `position:absolute;top:${paddingY};right:${paddingX};`,
    "aria-label": "Copy code",
    ..._attrs
  };
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<template", ">\n    ", "<button", ">\n        ", "\n    </button>\n</template>\n\n\n<script>(function(){", `
    const copy = document.querySelector('#'+template).content.children[0]

    function deepCloneCopy(i) {
        let _copy = copy.cloneNode(true)
        i > 0 && _copy.querySelectorAll('style').forEach(style => style.remove())
        _copy.addEventListener("click", e => {
            const target = e.currentTarget
            let code = target.previousSibling.innerText;
            if (!code) return
            navigator.clipboard.writeText(code);
		    target.classList.add(active);
            if (target._timerId) clearTimeout(target._timerId)
            target._timerId = setTimeout(() => target.classList.remove(active), duration);
        })
        return _copy
    }

    document.querySelectorAll(selector).forEach((e, i) => {
        const wrapper = document.createElement("div")
        wrapper.style.position = 'relative'
        e.parentNode.insertBefore(wrapper, e.nextSibling)
        wrapper.append(e)
        wrapper.append(deepCloneCopy(i))
    });
})();<\/script>`])), addAttribute(template, "id"), maybeRenderHead($$result), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({
    selector,
    template,
    active,
    duration
  }));
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/client-components/CodeCopy.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$ScrollProperty = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ScrollProperty;
  const {
    selector = ":root",
    attach = selector,
    base = "scroll",
    x = `--${base}-X`,
    y = `--${base}-Y`
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", `
    const t = document.querySelector(a)
    const e = [":root", "html"].includes(s)?window:document.querySelector(s)
    e.addEventListener('scroll', () => {
        t.style.setProperty(y, t.scrollTop);
        t.style.setProperty(x, t.scrollLeft);
    }, false);
})();<\/script>`])), defineScriptVars({
    s: selector,
    a: attach,
    x,
    y
  }));
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/scripts/ScrollProperty.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$MouseProperty = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MouseProperty;
  const {
    selector = ":root",
    attach = selector,
    base = "mouse",
    x = `--${base}-X`,
    y = `--${base}-Y`
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<script>(function(){", `
    const t = document.querySelector(a)
    const e = [":root", "html", "body"].includes(s)?window:document.querySelector(s)
    const b = e===t
    e.addEventListener('mousemove', (v) => {
        t.style.setProperty(x, b?v.offsetX:v.clientX);
        t.style.setProperty(y, b?v.offsetY:v.clientY);
    }, false);
})();<\/script>`])), defineScriptVars({
    s: selector,
    a: attach,
    x,
    y
  }));
}, "C:/Users/bryce/Desktop/Projects/pagination-example/node_modules/astro-headless-ui/scripts/MouseProperty.astro");

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await posts.json();
  const { page: pageNumber } = Astro2.params;
  console.log("Page Number: ", pageNumber || 1);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": pageNumber }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<nav class="breadcrumb">
		${renderComponent($$result, "Breadcrumb", $$Breadcrumb, {})}
	</nav>${renderComponent($$result, "Paginate", $$Paginate, { "data": json, "size": "3", "page": pageNumber }, { "default": () => renderTemplate`${(page) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": () => renderTemplate`${page.data.map((post) => renderTemplate`<article>
					<h3>${post.title}</h3>
					<p><strong>${post.id}</strong> - ${post.body}</p>
				</article>`)}<nav class="pagination">
				${renderComponent($$result, "Pagination", $$Pagination, { "index": true, "url": "/posts", "total": page.last, "current": page.current })}
			</nav><nav class="split-link">
				<a href="/posts/999" class="error-link">Test error page</a>
				<a href="/code" style="align-self:flex-end;">Check out the code</a>
			</nav>` })}`}`, "error": () => renderTemplate`<main>
			<h1>This page does not exist!</h1>
			<a href="/posts">Back</a>
		</main>` })}` })}`;
}, "C:/Users/bryce/Desktop/Projects/pagination-example/src/pages/posts/[...page].astro");

const $$file = "C:/Users/bryce/Desktop/Projects/pagination-example/src/pages/posts/[...page].astro";
const $$url = "/posts/[...page]";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const html = "<h1 id=\"example-of-a-paginated-route-using-ssr-in-astro\">Example of a paginated route using SSR in Astro</h1>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #22272e; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #768390\">---</span></span>\n<span class=\"line\"><span style=\"color: #768390\">// src/posts/[...page].astro</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F47067\">import</span><span style=\"color: #ADBAC7\"> { Paginate, Pagination, Breadcrumb } </span><span style=\"color: #F47067\">from</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #96D0FF\">'astro-headless-ui'</span><span style=\"color: #ADBAC7\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #768390\">// Get page number from url</span></span>\n<span class=\"line\"><span style=\"color: #F47067\">const</span><span style=\"color: #ADBAC7\"> { </span><span style=\"color: #F69D50\">page</span><span style=\"color: #ADBAC7\">: </span><span style=\"color: #6CB6FF\">pageNumber</span><span style=\"color: #ADBAC7\"> } </span><span style=\"color: #F47067\">=</span><span style=\"color: #ADBAC7\"> Astro.params</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #768390\">// Get array of data to paginate</span></span>\n<span class=\"line\"><span style=\"color: #F47067\">const</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">posts</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">=</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">await</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #DCBDFB\">fetch</span><span style=\"color: #ADBAC7\">(</span><span style=\"color: #96D0FF\">'https://jsonplaceholder.typicode.com/posts'</span><span style=\"color: #ADBAC7\">)</span></span>\n<span class=\"line\"><span style=\"color: #F47067\">const</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">json</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">=</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">await</span><span style=\"color: #ADBAC7\"> posts.</span><span style=\"color: #DCBDFB\">json</span><span style=\"color: #ADBAC7\">()</span></span>\n<span class=\"line\"><span style=\"color: #768390\">---</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">&#x3C;</span><span style=\"color: #8DDB8C\">html</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">lang</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #96D0FF\">\"en\"</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    &#x3C;</span><span style=\"color: #8DDB8C\">head</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        &#x3C;</span><span style=\"color: #8DDB8C\">meta</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">charset</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #96D0FF\">\"utf-8\"</span><span style=\"color: #ADBAC7\"> /></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        &#x3C;</span><span style=\"color: #8DDB8C\">meta</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">name</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #96D0FF\">\"viewport\"</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">content</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #96D0FF\">\"width=device-width\"</span><span style=\"color: #ADBAC7\"> /></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        &#x3C;</span><span style=\"color: #8DDB8C\">title</span><span style=\"color: #ADBAC7\">></span><span style=\"color: #F47067\">{</span><span style=\"color: #ADBAC7\">pageNumber</span><span style=\"color: #F47067\">?</span><span style=\"color: #96D0FF\">`Page ${</span><span style=\"color: #ADBAC7\">pageNumber</span><span style=\"color: #96D0FF\">}`</span><span style=\"color: #F47067\">:</span><span style=\"color: #96D0FF\">'Pagination Example'</span><span style=\"color: #F47067\">}</span><span style=\"color: #ADBAC7\">&#x3C;/</span><span style=\"color: #8DDB8C\">title</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    &#x3C;/</span><span style=\"color: #8DDB8C\">head</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    &#x3C;</span><span style=\"color: #8DDB8C\">body</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        &#x3C;</span><span style=\"color: #8DDB8C\">nav</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">class</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #96D0FF\">\"breadcrumb\"</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            &#x3C;</span><span style=\"color: #8DDB8C\">Breadcrumb</span><span style=\"color: #ADBAC7\"> /></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        &#x3C;/</span><span style=\"color: #8DDB8C\">nav</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        &#x3C;</span><span style=\"color: #8DDB8C\">Paginate</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">data</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #F47067\">{</span><span style=\"color: #ADBAC7\">json</span><span style=\"color: #F47067\">}</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">size</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #96D0FF\">\"3\"</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">page</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #F47067\">{</span><span style=\"color: #ADBAC7\">pageNumber</span><span style=\"color: #F47067\">}</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        </span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            </span><span style=\"color: #768390\">&#x3C;!-- Create a render template for each page --></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            </span><span style=\"color: #F47067\">{</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F69D50\">page</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">=></span><span style=\"color: #ADBAC7\"> &#x3C;></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                &#x3C;!-- Map over array of data for page --></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                </span><span style=\"color: #F47067\">{</span><span style=\"color: #ADBAC7\"> page.data.</span><span style=\"color: #DCBDFB\">map</span><span style=\"color: #ADBAC7\">(</span><span style=\"color: #F69D50\">post</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">=></span><span style=\"color: #ADBAC7\"> (</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                    &#x3C;</span><span style=\"color: #8DDB8C\">article</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                        &#x3C;</span><span style=\"color: #8DDB8C\">h2</span><span style=\"color: #ADBAC7\">></span><span style=\"color: #F47067\">{</span><span style=\"color: #ADBAC7\">post.title</span><span style=\"color: #F47067\">}</span><span style=\"color: #ADBAC7\">&#x3C;/</span><span style=\"color: #8DDB8C\">h2</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                        &#x3C;</span><span style=\"color: #8DDB8C\">p</span><span style=\"color: #ADBAC7\">>&#x3C;</span><span style=\"color: #8DDB8C\">strong</span><span style=\"color: #ADBAC7\">></span><span style=\"color: #F47067\">{</span><span style=\"color: #ADBAC7\">post.id</span><span style=\"color: #F47067\">}</span><span style=\"color: #ADBAC7\">&#x3C;/</span><span style=\"color: #8DDB8C\">strong</span><span style=\"color: #ADBAC7\">> - </span><span style=\"color: #F47067\">{</span><span style=\"color: #ADBAC7\">post.body</span><span style=\"color: #F47067\">}</span><span style=\"color: #ADBAC7\">&#x3C;/</span><span style=\"color: #8DDB8C\">p</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                    &#x3C;/</span><span style=\"color: #8DDB8C\">article</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                ))</span><span style=\"color: #F47067\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                &#x3C;!-- Create page link navigation for all pages --></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                &#x3C;</span><span style=\"color: #8DDB8C\">nav</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">class</span><span style=\"color: #F47067\">=</span><span style=\"color: #96D0FF\">\"pagination\"</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                    &#x3C;</span><span style=\"color: #8DDB8C\">Pagination</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">index</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">url</span><span style=\"color: #F47067\">=</span><span style=\"color: #96D0FF\">\"/posts\"</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">total</span><span style=\"color: #F47067\">={</span><span style=\"color: #ADBAC7\">page.last</span><span style=\"color: #F47067\">}</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">current</span><span style=\"color: #F47067\">={</span><span style=\"color: #ADBAC7\">page.current</span><span style=\"color: #F47067\">}</span><span style=\"color: #ADBAC7\"> /></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                &#x3C;/</span><span style=\"color: #8DDB8C\">nav</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            &#x3C;/></span><span style=\"color: #F47067\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            </span><span style=\"color: #768390\">&#x3C;!-- Render an error page if page number does not exist --></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            &#x3C;</span><span style=\"color: #8DDB8C\">main</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">slot</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #96D0FF\">\"error\"</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                &#x3C;</span><span style=\"color: #8DDB8C\">h1</span><span style=\"color: #ADBAC7\">>This page does not exist!&#x3C;/</span><span style=\"color: #8DDB8C\">h1</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">                &#x3C;</span><span style=\"color: #8DDB8C\">a</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #6CB6FF\">href</span><span style=\"color: #ADBAC7\">=</span><span style=\"color: #96D0FF\">\"/posts\"</span><span style=\"color: #ADBAC7\">>Back&#x3C;/</span><span style=\"color: #8DDB8C\">a</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">            &#x3C;/</span><span style=\"color: #8DDB8C\">main</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        &#x3C;/</span><span style=\"color: #8DDB8C\">Paginate</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    &#x3C;/</span><span style=\"color: #8DDB8C\">body</span><span style=\"color: #ADBAC7\">></span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">&#x3C;/</span><span style=\"color: #8DDB8C\">html</span><span style=\"color: #ADBAC7\">></span></span></code></pre>\n<h2 id=\"example-of-a-page-argument\">Example of a <code>page</code> argument</h2>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #22272e; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #ADBAC7\">{</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #768390\">// Items passed to page from main array</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #F69D50\">data</span><span style=\"color: #ADBAC7\">: [</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    {</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      userId: </span><span style=\"color: #6CB6FF\">1</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      id: </span><span style=\"color: #6CB6FF\">1</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      title: </span><span style=\"color: #96D0FF\">'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">      body: </span><span style=\"color: #96D0FF\">'quia et suscipit</span><span style=\"color: #6CB6FF\">\\n</span><span style=\"color: #96D0FF\">'</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">+</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        </span><span style=\"color: #96D0FF\">'suscipit recusandae consequuntur expedita et cum</span><span style=\"color: #6CB6FF\">\\n</span><span style=\"color: #96D0FF\">'</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">+</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        </span><span style=\"color: #96D0FF\">'reprehenderit molestiae ut ut quas totam</span><span style=\"color: #6CB6FF\">\\n</span><span style=\"color: #96D0FF\">'</span><span style=\"color: #ADBAC7\"> </span><span style=\"color: #F47067\">+</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">        </span><span style=\"color: #96D0FF\">'nostrum rerum est autem sunt rem eveniet architecto'</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    },</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">    </span><span style=\"color: #768390\">// 2 more items...</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  ],</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #768390\">// Number of total items in array</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #F69D50\">total</span><span style=\"color: #ADBAC7\">: </span><span style=\"color: #6CB6FF\">100</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #768390\">// Number of items passed to each page</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #F69D50\">size</span><span style=\"color: #ADBAC7\">: </span><span style=\"color: #96D0FF\">'3'</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #768390\">// Number of current page</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #F69D50\">current</span><span style=\"color: #ADBAC7\">: </span><span style=\"color: #6CB6FF\">1</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #768390\">// Number of last page in array</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #F69D50\">last</span><span style=\"color: #ADBAC7\">: </span><span style=\"color: #6CB6FF\">34</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #768390\">// Index of first item on page</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #F69D50\">start</span><span style=\"color: #ADBAC7\">: </span><span style=\"color: #6CB6FF\">0</span><span style=\"color: #ADBAC7\">,</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #768390\">// Index of last item on page</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">  </span><span style=\"color: #F69D50\">end</span><span style=\"color: #ADBAC7\">: </span><span style=\"color: #6CB6FF\">2</span></span>\n<span class=\"line\"><span style=\"color: #ADBAC7\">}</span></span></code></pre>";

				const frontmatter = {"layout":"../Layout.astro"};
				const file = "C:/Users/bryce/Desktop/Projects/pagination-example/src/pages/code.md";
				const url = "/code";
				function rawContent() {
					return "\r\n# Example of a paginated route using SSR in Astro\r\n\r\n```astro\r\n---\r\n// src/posts/[...page].astro\r\n\r\nimport { Paginate, Pagination, Breadcrumb } from 'astro-headless-ui';\r\n\r\n// Get page number from url\r\nconst { page: pageNumber } = Astro.params\r\n\r\n// Get array of data to paginate\r\nconst posts = await fetch('https://jsonplaceholder.typicode.com/posts')\r\nconst json = await posts.json()\r\n---\r\n\r\n<html lang=\"en\">\r\n    <head>\r\n        <meta charset=\"utf-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width\" />\r\n        <title>{pageNumber?`Page ${pageNumber}`:'Pagination Example'}</title>\r\n    </head>\r\n    <body>\r\n        <nav class=\"breadcrumb\">\r\n            <Breadcrumb />\r\n        </nav>\r\n        <Paginate data={json} size=\"3\" page={pageNumber}>\r\n        \r\n            <!-- Create a render template for each page -->\r\n            { page => <>\r\n\r\n                <!-- Map over array of data for page -->\r\n                { page.data.map(post => (\r\n                    <article>\r\n                        <h2>{post.title}</h2>\r\n                        <p><strong>{post.id}</strong> - {post.body}</p>\r\n                    </article>\r\n                ))}\r\n\r\n                <!-- Create page link navigation for all pages -->\r\n                <nav class=\"pagination\">\r\n                    <Pagination index url=\"/posts\" total={page.last} current={page.current} />\r\n                </nav>\r\n            </>}\r\n\r\n            <!-- Render an error page if page number does not exist -->\r\n            <main slot=\"error\">\r\n                <h1>This page does not exist!</h1>\r\n                <a href=\"/posts\">Back</a>\r\n            </main>\r\n        </Paginate>\r\n    </body>\r\n</html>\r\n```\r\n\r\n## Example of a `page` argument\r\n\r\n```js\r\n{\r\n  // Items passed to page from main array\r\n  data: [\r\n    {\r\n      userId: 1,\r\n      id: 1,\r\n      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',\r\n      body: 'quia et suscipit\\n' +\r\n        'suscipit recusandae consequuntur expedita et cum\\n' +\r\n        'reprehenderit molestiae ut ut quas totam\\n' +\r\n        'nostrum rerum est autem sunt rem eveniet architecto'\r\n    },\r\n    // 2 more items...\r\n  ],\r\n  // Number of total items in array\r\n  total: 100,\r\n  // Number of items passed to each page\r\n  size: '3',\r\n  // Number of current page\r\n  current: 1,\r\n  // Number of last page in array\r\n  last: 34,\r\n  // Index of first item on page\r\n  start: 0,\r\n  // Index of last item on page\r\n  end: 2\r\n}\r\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"example-of-a-paginated-route-using-ssr-in-astro","text":"Example of a paginated route using SSR in Astro"},{"depth":2,"slug":"example-of-a-page-argument","text":"Example of a page argument"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$Layout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
