import React from "react";
import {AiOutlineArrowDown} from "react-icons/ai"

function Inicio() {
  return (
    <>
      <div className="text-white font-opti-times-roman mt-20">
        <h1 className="text-5xl mb-[40px] text-center pt-5 border-b-[1px]">Bienvenido</h1>

        <div className="text-[30px] flex flex-col space-y-[40px] ">
        <p className="">
          Soy un abogado especializado en diversas áreas del derecho, incluyendo
          laboral, civil y penal. Estoy comprometido en brindar el mejor
          servicio legal a mis clientes y defender sus derechos con pasión y
          ética profesional.
        </p>
        <p className="">
          En esta página encontrarás información sobre mis servicios legales,
          así como detalles de contacto para agendar una consulta o reunión.
          Estoy para ayudarte en tus asuntos legales y ofrecerte el apoyo
          necesario.
        </p>
        <p className="pb-[5rem]">
          No dudes en explorar las diferentes secciones de la página y
          en contactarme si tienes alguna pregunta o necesitas asesoramiento
          legal.
        </p>

        <div className="m-auto text-[6rem]"><AiOutlineArrowDown/></div>

        </div>

      </div>
    </>
  );
}

export default Inicio;
