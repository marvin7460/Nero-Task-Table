/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_55fJvJQc.mjs';
import { FaTable } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { GrSecure } from 'react-icons/gr';
import { CiLogin } from 'react-icons/ci';
export { renderers } from '../renderers.mjs';

const $$LogIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4"> <div class="w-full max-w-md bg-[#2D2D2D] border-2 border-[#B19CD9] shadow-lg shadow-[#B19CD9]/50 p-6 rounded-lg"> <div class="text-3xl font-bold text-center text-[#B19CD9] flex items-center justify-center mb-6"> <span class="h-8 w-8 mr-2"> <!-- Icono de tabla --> ${renderComponent($$result, "FaTable", FaTable, {})} </span>
Nero Task Table
</div> <form class="space-y-4"> <div class="space-y-2"> <label for="email" class="text-[#D8B5FF]">Email</label> <div class="relative"> <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B19CD9] text-xl"> <!-- Icono de correo --> ${renderComponent($$result, "MdEmail", MdEmail, {})} </span> <input id="email" type="email" placeholder="tu@email.com" required class="pl-10 w-full bg-[#1E1E1E] border border-[#B19CD9] text-[#FFFFFF] placeholder-[#CCCCCC] py-2 px-3 rounded-md"> </div> </div> <div class="space-y-2"> <label for="password" class="text-[#D8B5FF]">Contraseña</label> <div class="relative"> <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B19CD9] text-xl"> <!-- Icono de candado --> ${renderComponent($$result, "GrSecure", GrSecure, {})} </span> <input id="password" type="password" placeholder="••••••••" required class="pl-10 w-full bg-[#1E1E1E] border border-[#B19CD9] text-[#FFFFFF] placeholder-[#CCCCCC] py-2 px-3 rounded-md"> </div> </div> <button type="submit" class="w-full bg-[#B19CD9] hover:bg-[#B19CD9]/80 text-[#1E1E1E] font-semibold py-2 px-4 rounded-md flex items-center justify-center"> <span class="mr-2 text-2xl"> <!-- Icono de inicio de sesión --> ${renderComponent($$result, "CiLogin", CiLogin, {})} </span>
Iniciar Sesión
</button> </form> </div> </div>`;
}, "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/components/ui/LogIn.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Log In Task Table" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> ${renderComponent($$result2, "LogIn", $$LogIn, {})} </main> ` })} `;
}, "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/pages/login/index.astro", void 0);

const $$file = "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/pages/login/index.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
