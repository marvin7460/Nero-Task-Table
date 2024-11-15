/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_55fJvJQc.mjs';
import { $ as $$Header } from '../chunks/Header_CvSuPS1F.mjs';
import { MdEmail } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FaShareAlt } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$DatosPerfil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#2D2D2D] rounded-lg p-6 shadow-lg shadow-[#B19CD9]/50 max-w-md mx-auto"> <div class="flex items-center space-x-4 mb-6"> <div class="h-20 w-20 rounded-full overflow-hidden ring-4 ring-[#B19CD9]"> <img src="marvin.jpg" alt="Nombre del usuario" class="h-full w-full object-cover"> </div> <div> <h2 class="text-2xl font-semibold text-[#D8B5FF]">Nombre del Usuario</h2> <p class="text-[#CCCCCC] flex items-center"> <span class="h-4 w-4 mr-2 text-[#FF00FF] text-xl"> <!-- Icono de correo --> ${renderComponent($$result, "MdEmail", MdEmail, {})} </span>
usuario@ejemplo.com
</p> </div> </div> <button class="w-full mb-6 bg-[#FF00FF] hover:bg-[#FF00FF]/80 text-[#FFFFFF] font-semibold py-2 px-4 rounded-md flex items-center justify-center"> <span class="mr-2 h-5 w-4 text-xl"> <!-- Icono de lápiz --> ${renderComponent($$result, "CiEdit", CiEdit, {})} </span>
Editar Perfil Nero
</button> <div class="mb-4"> <h3 class="text-lg font-semibold text-[#B19CD9] mb-2 flex items-center"> <span class="h-5 w-5 mr-2"> <!-- Icono de compartir --> ${renderComponent($$result, "FaShareAlt", FaShareAlt, {})} </span>
Enlace de Invitación Nero
</h3> <div class="flex space-x-2"> <input value="https://nero-ejemplo.com/invitacion/abc123" readonly class="w-full bg-[#1E1E1E] border border-[#B19CD9] text-[#FFFFFF] py-2 px-3 rounded-md"> <button class="bg-[#00FFFF] hover:bg-[#00FFFF]/80 text-[#1E1E1E] font-semibold py-2 px-4 rounded-md flex items-center justify-center"> <span class="mr-2 h-4 w-4"> <!-- Icono de compartir --> ${renderComponent($$result, "FaShareAlt", FaShareAlt, {})} </span>
Compartir
</button> </div> </div> </div>`;
}, "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/components/DatosPerfil.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Task Table" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "DatosPerfil", $$DatosPerfil, {})} </main> ` })} `;
}, "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/pages/ancud/index.astro", void 0);

const $$file = "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/pages/ancud/index.astro";
const $$url = "/ancud";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
