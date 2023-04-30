import React from "react";

function Penal() {
  return (
    <div className="text-white flex flex-col">
      <h1 className="text-4xl text-center border-b-[1px] mb-[4rem]">
        DERECHO PENAL
      </h1>
      <ul>
        <li className="text-center mb-[100px]">
          <p className="mb-5 border-b-[1px] max-w-[300px] m-auto">
            {" "}
            DELITOS SEXUALES
          </p>
          <ul className="space-y-[5px]">
            <li>Abusos sexuales</li>
            <li>Exhibiciones obscenas</li>
            <li>Corrupción de menores</li>
            <li>Abuso intrafamiliar</li>
            <li>Pornografía infantil</li>
            <li>Abuso sexual infantil</li>
            <li>Abuso deshonesto</li>
            <li>Promoción a la corrupción de menores</li>
            <li>Abuso sexual con acceso carnal</li>
            <li>Violencia doméstica</li>
            <li>Falsas denuncias de abuso sexual</li>
          </ul>
        </li>

        <li className="text-center mb-[100px]">
          <p className="mb-5 border-b-[1px] max-w-[300px] m-auto">
            DELITOS CONTRA LAS PERSONAS
          </p>
          <ul className="space-y-[5px]">
            <li>Homicidios</li>
            <li>Lesiones</li>
            <li>Accidentes de tránsito</li>
            <li>Abandono de personas</li>
            <li>Abortos</li>
            <li>Mala praxis médica</li>
            <li>Instigación al suicidio</li>
          </ul>
        </li>
        <li className="text-center mb-[100px]">
          <p className="mb-5 border-b-[1px] max-w-[300px] m-auto">
            VIOLENCIA DOMESTICA
          </p>
          <ul className="space-y-[5px]">
            <li>Exclusión del Hogar</li>
            <li>Violencia física</li>
            <li>Violencia económica</li>
            <li>Agresión a menores</li>
            <li>Daño psicológico</li>
            <li>Amenazas</li>
            <li>Abuso de armas de fuego</li>
            <li>Falsas denuncias</li>
          </ul>
        </li>
        <li className="text-center mb-[100px]">
          <p className="mb-5 border-b-[1px] max-w-[300px] m-auto">
            EXTRADICIONES
          </p>
          <ul className="space-y-[5px]">
            <li>Extradiciones activas y pasivas</li>
            <li>Atención a consulados y embajadas</li>
            <li>
              Nuestros profesionales hablan inglés, español y Portugués
              fluidamente
            </li>
          </ul>
        </li>

        <li className="text-center mb-[100px]">
          <p className="mb-5 border-b-[1px] max-w-[300px] m-auto">
            DELITOS CONTRA LA PROPIEDAD
          </p>
          <ul className="space-y-[5px]">
            <li>Robos</li>
            <li>Hurtos</li>
            <li>Falsificación de documentos</li>
            <li>Estafas</li>
            <li>Defraudaciones</li>
            <li>Robo de automotores y agravados</li>
            <li>Abuso de armas</li>
            <li>Robo calificado</li>
          </ul>
        </li>

        <li className="text-center mb-10">
          <p className="mb-5 border-b-[1px] max-w-[300px] m-auto">
            DROGAS Y NARCOTRÁFICO
          </p>
          <ul className="space-y-[5px]">
            <li>
              Amplia experiencia en casos de tráfico de drogas y estupefacientes
            </li>
            <li>
              Tenencia, distribución, lavado de activos provenientes de
              actividades ilícitas
            </li>
            <li>Venta no autorizada de medicamentos</li>
            <li>Cultivo y comercialización de plantines</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Penal;
