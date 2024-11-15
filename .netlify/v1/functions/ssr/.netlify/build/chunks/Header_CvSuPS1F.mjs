import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, b as createAstro } from './astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { FaTable } from 'react-icons/fa6';
import { FaBriefcase, FaUser } from 'react-icons/fa';

const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative h-10 w-10 rounded-full ring-2 ring-[#B19CD9] overflow-hidden"> <img src="marvin.jpg" alt="User Name" class="h-full w-full object-cover" onerror="this.style.display='none'"> <div class="absolute inset-0 flex items-center justify-center bg-gray-200" style="display: none;"> <svg class="h-4 w-4 text-[#B19CD9]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 14c-5 0-7 3-7 3v1h14v-1s-2-3-7-3z"></path> <circle cx="12" cy="7" r="4"></circle> </svg> </div> </div>`;
}, "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/components/ui/Avatar.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  let isInProject = false;
  let isAncudPath = false;
  const url = Astro2.url;
  const lastUrlPath = url.toString().split("/").pop();
  lastUrlPath === "proyects" ? isInProject = true : isAncudPath = true;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-[#2D2D2D] shadow-lg mb-8"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16 items-center"> <div class="flex items-center"> <span class="w-6 text-[#B19CD9] mr-2 text-2xl">${renderComponent($$result, "FaTable", FaTable, {})}</span> <span class="text-2xl font-bold text-[#B19CD9]">Nero Task Table</span> </div> <div class="flex items-center space-x-4"> <a${addAttribute(`flex items-center px-3 py-2 text-[#FFFFFF] hover:text-[#D8B5FF] hover:bg-[#ffffff] transition-colors duration-200 ${isInProject ? "bg-[#B19CD9] bg-opacity-50" : ""} rounded-md`, "class")} href="/proyects"> <span class="mr-2 h-4 w-4">${renderComponent($$result, "FaBriefcase", FaBriefcase, {})}</span>
Proyectos
</a> <a${addAttribute(`flex items-center px-3 py-2 text-[#FFFFFF] hover:text-[#D8B5FF] hover:bg-[#ffffff]  transition-colors duration-200 ${isAncudPath ? "bg-[#B19CD9] bg-opacity-50" : ""} rounded-md`, "class")} href="/ancud"> <span class="mr-2 h-4 w-4">${renderComponent($$result, "FaUser", FaUser, {})}</span>
Perfil
</a> ${renderComponent($$result, "Avatar", $$Avatar, {})} </div> </div> </div> </nav>`;
}, "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/components/Header.astro", void 0);

export { $$Header as $ };
