import { useEffect } from "react";
import { Paciente } from "./Paciente";

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  useEffect(()=>{
    if (pacientes.length > 0) {
      console.log('Nuevo paciente')
    }
  },[pacientes])
  return (
    <div className="md:w-1/2 lg:w-3/6 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center mb-10 font-black text-3xl">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="text-center mb-10 font-black text-3xl">
            No hay Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza Agregando Pacientes {""}
            <span className="text-indigo-600 font-bold ">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};
