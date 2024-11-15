import { useState } from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { GoSortAsc } from "react-icons/go";

const ProjectsHeader = () => {
  const [,setFilterStatus] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  return (
    <div className="flex justify-end items-center">
      <div className="flex space-x-2">
        <div className="relative">
          <button
            onClick={toggleFilterMenu}
            className="flex items-center text-[#00FFFF] border-[#00FFFF] px-4 py-3 hover:bg-[#00FFFF] hover:bg-opacity-10"
          >
            <FaFilter className="mr-2" size={20} /> {/* Tamaño del ícono aumentado */}
            Filtrar
          </button>
          {showFilterMenu && (
            <div className="absolute mt-2 bg-[#2D2D2D] text-[#FFFFFF] border border-[#B19CD9] w-56 transition-all">
              <div onClick={() => {setFilterStatus('all'),toggleFilterMenu()}} className="cursor-pointer p-2 hover:bg-slate-300">Todos</div>
              <div onClick={() => {setFilterStatus('in-progress'),toggleFilterMenu()}} className="cursor-pointer p-2 hover:bg-slate-300">En Progreso</div>
              <div onClick={() => {setFilterStatus('completed'),toggleFilterMenu()}} className="cursor-pointer p-2 hover:bg-slate-300">Completados</div>
            </div>
          )}
        </div>
        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="flex items-center text-[#FF00FF] border-[#FF00FF] px-4 py-2 hover:bg-[#FF00FF] hover:bg-opacity-10"
        >
          <GoSortAsc className="mr-2" size={35} /> {/* Tamaño del ícono aumentado */}
          {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
        </button>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B19CD9]" size={20} /> {/* Tamaño del ícono aumentado */}
          <input
            type="text"
            placeholder="Buscar proyectos..."
            className="pl-10 bg-[#1E1E1E] border-[#B19CD9] text-[#FFFFFF] placeholder-[#CCCCCC] px-4 py-2 border-2 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
