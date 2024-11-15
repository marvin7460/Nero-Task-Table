/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_55fJvJQc.mjs';
import { $ as $$Header } from '../chunks/Header_CvSuPS1F.mjs';
import { FaTable } from 'react-icons/fa6';
import { PiSealWarningBold } from 'react-icons/pi';
import { FaEye, FaFilter, FaSearch } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { GoSortAsc } from 'react-icons/go';
export { renderers } from '../renderers.mjs';

const projects = [
  { id: 1, name: "Proyecto Nero 1", tasks: [], progress: 0 },
  { id: 2, name: "Proyecto Nero 2", tasks: [], progress: 25 }
];

function ButtonBoolean({ initialOpen }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: toggleOpen,
      className: `bg-[#2D2D2D] border-[#B19CD9] border-2 flex items-center justify-center cursor-pointer  transition-colors rounded-lg p-6 shadow-lg hover:shadow-[#B19CD9]/75 duration-300`,
      children: [
        /* @__PURE__ */ jsx(IoIosAddCircleOutline, { className: "text-[#00FFFF] text-4xl mr-2" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#00FFFF]", children: isOpen ? "Cerrar Proyecto Nero" : "Agregar Proyecto Nero" }),
        isOpen && /* @__PURE__ */ jsx("div", { class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { class: "bg-[#2D2D2D] border-[#B19CD9] border-2 rounded-lg p-6 w-full max-w-md", children: [
          /* @__PURE__ */ jsx("h2", { class: "text-[#B19CD9] text-xl font-semibold mb-4", children: "Crear Nuevo Proyecto" }),
          /* @__PURE__ */ jsx("div", { class: "mb-4", children: /* @__PURE__ */ jsx(
            "input",
            {
              placeholder: "Nombre del proyecto",
              class: "w-full bg-[#1E1E1E] border border-[#B19CD9] text-[#FFFFFF] placeholder-[#CCCCCC] p-2 rounded"
            }
          ) }),
          /* @__PURE__ */ jsxs("button", { class: "bg-[#B19CD9] hover:bg-[#B19CD9]/80 text-[#1E1E1E] p-2 rounded w-full flex items-center justify-center", children: [
            /* @__PURE__ */ jsx("span", { class: "material-icons mr-2", children: "add_circle" }),
            " Crear Proyecto"
          ] })
        ] }) })
      ]
    }
  );
}

const $$TableTask = createComponent(($$result, $$props, $$slots) => {
  let isAddProjectDialogOpen2 = false;
  return renderTemplate`${maybeRenderHead()}<div> <h1 class="text-3xl font-bold text-[#B19CD9] mb-6">Mis Proyectos Nero</h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${projects.map((project) => renderTemplate`<div class="bg-[#2D2D2D] border-[#B19CD9] border-2 shadow-lg hover:shadow-[#B19CD9]/75 transition-shadow duration-300 rounded-lg p-4"> <div class="mb-4"> <h2 class="text-[#D8B5FF] flex items-center text-xl font-semibold"> <span class="text-[#FF00FF] mr-2"> ${renderComponent($$result, "FaTable", FaTable, {})} </span> ${project.name} </h2> </div> <div class="mb-4"> <div class="relative h-2 rounded bg-[#CCCCCC] overflow-hidden"> <div${addAttribute({ width: `${project.progress}%` }, "style")} class="absolute inset-0 bg-[#B19CD9]"></div> </div> <p class="text-[#CCCCCC] flex items-center mt-2"> <span class="text-[#FF00FF] mr-2"> ${renderComponent($$result, "PiSealWarningBold", PiSealWarningBold, {})} </span>
Tareas pendientes:${" "} ${project.tasks.filter((t) => t.status !== "completed").length} </p> </div> <div class="flex space-x-5"> <a class="text-[#00FFFF] hover:bg-[#00FFFF]/10 p-2 rounded transition flex items-center"${addAttribute(`proyects/${project.id}`, "href")}> <span class="mr-1"> ${renderComponent($$result, "FaEye", FaEye, {})}${" "} </span>
Ver Detalles
</a> <button class="text-[#FF00FF] hover:bg-[#FF00FF]/10 p-2 rounded transition flex items-center"> <span class="mr-1"> ${renderComponent($$result, "CiEdit", CiEdit, {})}${" "} </span>
Editar
</button> <button class="text-[#d25151] hover:bg-[#FFFFFF]/10 p-2 rounded transition flex items-center"> <span class="mr-1"> ${renderComponent($$result, "MdDeleteForever", MdDeleteForever, {})}${" "} </span>
Eliminar
</button> </div> </div>`)} ${renderComponent($$result, "ButtonBoolean", ButtonBoolean, { "initialOpen": isAddProjectDialogOpen2, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/ui/ButtonBoolean", "client:component-export": "default" })} </div> </div>`;
}, "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/components/TableTask.astro", void 0);

const ProjectsHeader = () => {
  const [, setFilterStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };
  return /* @__PURE__ */ jsx("div", { className: "flex justify-end items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: toggleFilterMenu,
          className: "flex items-center text-[#00FFFF] border-[#00FFFF] px-4 py-3 hover:bg-[#00FFFF] hover:bg-opacity-10",
          children: [
            /* @__PURE__ */ jsx(FaFilter, { className: "mr-2", size: 20 }),
            " ",
            "Filtrar"
          ]
        }
      ),
      showFilterMenu && /* @__PURE__ */ jsxs("div", { className: "absolute mt-2 bg-[#2D2D2D] text-[#FFFFFF] border border-[#B19CD9] w-56 transition-all", children: [
        /* @__PURE__ */ jsx("div", { onClick: () => {
          setFilterStatus("all"), toggleFilterMenu();
        }, className: "cursor-pointer p-2 hover:bg-slate-300", children: "Todos" }),
        /* @__PURE__ */ jsx("div", { onClick: () => {
          setFilterStatus("in-progress"), toggleFilterMenu();
        }, className: "cursor-pointer p-2 hover:bg-slate-300", children: "En Progreso" }),
        /* @__PURE__ */ jsx("div", { onClick: () => {
          setFilterStatus("completed"), toggleFilterMenu();
        }, className: "cursor-pointer p-2 hover:bg-slate-300", children: "Completados" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setSortOrder(sortOrder === "asc" ? "desc" : "asc"),
        className: "flex items-center text-[#FF00FF] border-[#FF00FF] px-4 py-2 hover:bg-[#FF00FF] hover:bg-opacity-10",
        children: [
          /* @__PURE__ */ jsx(GoSortAsc, { className: "mr-2", size: 35 }),
          " ",
          sortOrder === "asc" ? "A-Z" : "Z-A"
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(FaSearch, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B19CD9]", size: 20 }),
      " ",
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Buscar proyectos...",
          className: "pl-10 bg-[#1E1E1E] border-[#B19CD9] text-[#FFFFFF] placeholder-[#CCCCCC] px-4 py-2 border-2 rounded-lg",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value)
        }
      )
    ] })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Task Table" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> ${renderComponent($$result2, "FilterBar", ProjectsHeader, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/ui/FilterBar", "client:component-export": "default" })} ${renderComponent($$result2, "TableTask", $$TableTask, {})} </main> ` })} `;
}, "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/pages/proyects/index.astro", void 0);

const $$file = "C:/Users/marvin-nero/Desktop/nero-empresa/neroTaskTable/taskTable/src/pages/proyects/index.astro";
const $$url = "/proyects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
