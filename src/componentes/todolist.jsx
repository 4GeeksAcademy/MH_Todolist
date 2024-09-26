import React, { useState } from "react";

const RegistroDeTareas = () => {
    const [valorInput, setValorInput] = useState("");
    const [tareas, setTareas] = useState([]);

    const manejarPresionTecla = (evento) => {
        if (evento.key === "Enter") {
            if (valorInput.trim()) {
                setTareas((tareasPrevias) => [...tareasPrevias, valorInput.trim()]);
                setValorInput("");
            } else {
                alert("Por favor, ingresa una tarea.");
            }
        }
    };

    const eliminarTarea = (indiceTarea) => {
        setTareas((tareasPrevias) => tareasPrevias.filter((_, indice) => indice !== indiceTarea));
    };

    return (
        <div className="contenedor">
            <h1>Registro de Tareas</h1>
            <input
                type="text"
                placeholder="¿Qué necesitas hacer?"
                onChange={(e) => setValorInput(e.target.value)}
                onKeyDown={manejarPresionTecla}
                value={valorInput}
            />
            {tareas.length === 0 ? (
                <p>No hay tareas agregadas</p>
            ) : (
                <ol>
                    {tareas.map((tarea, indice) => (
                        <li key={indice}>
                            {tarea}
                            <span 
                                className="delete-icon" 
                                onMouseEnter={() => eliminarTarea(indice)} 
                                style={{ cursor: 'pointer' }} 
                            >
                                ✖
                            </span>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default RegistroDeTareas;
