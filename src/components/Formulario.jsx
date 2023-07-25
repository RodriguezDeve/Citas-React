import { useState, useEffect } from "react";
import { Error } from "./Error";

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [correo, setCorreo] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    setNombre(paciente.nombre);
    setPropietario(paciente.propietario);
    setCorreo(paciente.correo);
    setAlta(paciente.alta);
    setSintomas(paciente.sintomas);
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, correo, alta, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      correo,
      alta,
      sintomas,
    };

    if (paciente.id) {
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre("");
    setPropietario("");
    setCorreo("");
    setAlta("");
    setSintomas("");
  };
  return (
    <div className="md:w-1/2 lg:w-3/6">
      <h2 className="font-black text-3xl text-center mb-10">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg py-10 px-5 pb-10 mb-5 mx-5"
      >
        {error && (
          <Error>
            <h1>Todos los cambios son obligatorios</h1>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="correo"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo del propietario
          </label>
          <input
            id="correo"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            type="email"
            placeholder="Correo electronico del propietario"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="fecha"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            type="date"
            placeholder="Correo electronico del propietario"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-xl hover:bg-indigo-700 cursor-pointer transi"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};
