import React, { useState } from "react";

const ListaDeTareas = () => {
    const [tareaInput, setTareaInput] = useState("");
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tecla) => {
        if (tecla === "Enter") {
            if (tareaInput !== "") {
                setTareas((prevTareas) => [...prevTareas, tareaInput]);
                setTareaInput("");
            } else {
                alert("Por favor, ingresa una tarea.");
            }
        }
    };

    const eliminarTarea = (indice) => {
        setTareas((prevTareas) =>
            prevTareas.filter((_, i) => i !== indice)
        );
    };

    return (
        <div className="contenedor">
            <h1>Lista de Tareas</h1>
            <input
                type="text"
                id="tarea"
                placeholder="¿Qué necesitas hacer?"
                onChange={(e) => setTareaInput(e.target.value)}
                onKeyDown={(e) => agregarTarea(e.key)}
                value={tareaInput}
            />
            {tareas.length === 0 ? (
                <p>No hay tareas agregadas</p>
            ) : (
                <ol>
                    {tareas.map((tarea, indice) => (
                        <li key={indice}>
                            {tarea}
                            <span onClick={() => eliminarTarea(indice)}> X </span>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default ListaDeTareas;
