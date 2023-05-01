import React from 'react';

function Contacto() {
  return (
    <div className="text-center pb-[300px]">
      <h1 className="text-center mt-24 text-white text-4xl mb-[3rem] border-b-[1px]">
        Contacto
      </h1>
      <p className="mb-4 text-white">Para consultas y más información, contácteme:</p>
      <div className="flex justify-center items-center flex-col  md:flex-row  sm:space-y-[30px]">
        <a href="tel:+11234567890" className="flex flex-col mb-5 items-center mx-4 bg-gray-medium rounded-lg p-4 hover:bg-gray-800 cursor-pointer md:mb-[-30px]">
          <p className="text-xl mb-2 text-white">Teléfono:</p>
          <p className="text-xl  text-white">(123) 456-7890</p>
        </a>
        <a href="mailto:contacto@abogados.com" className="flex flex-col items-center mx-4 bg-gray-medium rounded-lg p-4 hover:bg-gray-800 cursor-pointer">
          <p className="text-xl mb-2 text-white">Correo Electrónico:</p>
          <p className="text-xl text-white">contacto@abogadoejemplo.com</p>
        </a>
      </div>
    </div>
  );
}

export default Contacto;
