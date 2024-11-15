import  { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

export default function ButtonBoolean({ initialOpen }) {
  // Estado para el valor booleano, inicializado con la propiedad `initialOpen`
  const [isOpen, setIsOpen] = useState(initialOpen);

  // Función que cambia el valor del estado `isOpen`
  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      onClick={toggleOpen}
      className={`bg-[#2D2D2D] border-[#B19CD9] border-2 flex items-center justify-center cursor-pointer  transition-colors rounded-lg p-6 shadow-lg hover:shadow-[#B19CD9]/75 duration-300`}
    >
      <IoIosAddCircleOutline className="text-[#00FFFF] text-4xl mr-2" />
      <p className="text-[#00FFFF]">
        {isOpen ? 'Cerrar Proyecto Nero' : 'Agregar Proyecto Nero'}
      </p>
      {
      isOpen && (
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div class="bg-[#2D2D2D] border-[#B19CD9] border-2 rounded-lg p-6 w-full max-w-md">
            <h2 class="text-[#B19CD9] text-xl font-semibold mb-4">Crear Nuevo Proyecto</h2>
            <div class="mb-4">
              <input
                placeholder="Nombre del proyecto"
                class="w-full bg-[#1E1E1E] border border-[#B19CD9] text-[#FFFFFF] placeholder-[#CCCCCC] p-2 rounded"
              />
            </div>
            <button class="bg-[#B19CD9] hover:bg-[#B19CD9]/80 text-[#1E1E1E] p-2 rounded w-full flex items-center justify-center">
              <span class="material-icons mr-2">add_circle</span> Crear Proyecto
            </button>
          </div>
        </div>
      )
    }
    </div>
  );
}
