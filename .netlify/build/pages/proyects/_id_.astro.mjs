/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_55fJvJQc.mjs';
import { $ as $$Header } from '../../chunks/Header_CvSuPS1F.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const id = Astro2.url;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Task Table" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <h1> ${id} </h1> </main> ` })} `;
}, "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/pages/proyects/[id]/index.astro", void 0);

const $$file = "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/pages/proyects/[id]/index.astro";
const $$url = "/proyects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
