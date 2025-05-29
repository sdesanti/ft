// pages/EditarResearch.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;

const EditarResearch = () => {
  const { token } = useAuth();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [enlace, setEnlace] = useState("");
  const [imagen, setImagen] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("enlace", enlace);
    formData.append("imagen", imagen);

    try {
      const response = await fetch(`${API_URL}/admin/research`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Error al guardar");

      setMensaje("Ítem guardado correctamente ✅");
      setTitulo("");
      setDescripcion("");
      setEnlace("");
      setImagen(null);
    } catch (err) {
      setMensaje(`Error: ${err.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Agregar ítem a Research</h2>

      {mensaje && <div className="alert alert-info">{mensaje}</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            rows="3"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Enlace</label>
          <input
            type="url"
            className="form-control"
            value={enlace}
            onChange={(e) => setEnlace(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar ítem
        </button>
      </form>
    </div>
  );
};

export default EditarResearch;