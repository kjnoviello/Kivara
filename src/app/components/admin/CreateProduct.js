"use client";
import { useState } from "react";
import { collection, doc, setDoc, query, orderBy, limit, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "@/app/firebase/config";
import ButtonBack from "../shared/buttonBack";

// Función para obtener el último ID
const getLastId = async () => {
  const collectionRef = collection(db, "productos");
  const q = query(collectionRef, orderBy("id", "desc"), limit(1));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const lastDoc = querySnapshot.docs[0].data();
    return lastDoc.id || 0;
  }
  return 0; // Si no hay documentos, el primer ID será 1
};

// Función para crear el producto
const createProduct = async (values) => {
  try {
    const lastId = await getLastId();
    const newId = lastId + 1; // Incrementa el último ID

    const docRef = doc(db, "productos", newId.toString()); // Usa el ID como nombre del documento
    await setDoc(docRef, {
      ...values,
      id: newId, // Agrega el nuevo ID
      novedad: values.novedad,
      estado: values.estado,
    });

    console.log("Producto agregado!!!");
  } catch (error) {
    console.error("Error al agregar el producto", error);
  }
};

const CreateForm = () => {
  const [values, setValues] = useState({
    nombre: "",
    precio: 0,
    marca: "",
    imagen: "",
    descripcion: "",
    caracteristicas: "",
    data: {
      so: "",
      memoria: "",
      procesador: "",
      bateria: "",
      color: ""
    },
    valoraciones: 0,
    stock: 0,
    novedad: "true", // Valor predeterminado como string
    estado: "true"   // Valor predeterminado como string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("data.")) {
      const dataField = name.split(".")[1];
      setValues((prevValues) => ({
        ...prevValues,
        data: {
          ...prevValues.data,
          [dataField]: value,
        },
      }));
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const processedValues = {
        ...values,
        precio: parseFloat(values.precio),
        valoraciones: parseFloat(parseFloat(values.valoraciones).toFixed(1)),
        stock: parseInt(values.stock, 10),
        novedad: values.novedad === "true", // Convertir string a booleano
        estado: values.estado === "true",   // Convertir string a booleano
      };

      await createProduct(processedValues);
      Swal.fire({
        icon: "success",
        title: "Producto cargado correctamente!",
        text: "El producto se cargó en la base de datos",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      setValues({
        nombre: "",
        precio: 0,
        marca: "",
        imagen: "",
        descripcion: "",
        caracteristicas: "",
        data: {
          so: "",
          memoria: "",
          procesador: "",
          bateria: "",
          color: ""
        },
        valoraciones: 0,
        stock: 0,
        novedad: "true",
        estado: "true"
      });

      // window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      console.error("No se pudo cargar el producto", error);
      Swal.fire({
        icon: "error",
        title: "Ocurrió un error al cargar el producto.",
        text: "Revise el log para más información",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="my-8 mx-4 sm:mx-20 lg:mx-40 select-none bg-white rounded">
      <h2 className="text-cyan font-semibold text-2xl pb-4">Cargar producto</h2>
      <form onSubmit={handleSubmit}>
        {/* El campo ID ha sido removido */}
        <label className="text-black">Nombre:</label>
        <input
          type="text"
          value={values.nombre}
          required
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="nombre"
          onChange={handleChange}
        />

        <label className="text-black">Marca:</label>
        <select
          value={values.marca}
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="marca"
          required
          onChange={handleChange}
        >
          <option value="" disabled>
            Seleccione una marca
          </option>
          <option value="Samsung">Samsung</option>
          <option value="Motorola">Motorola</option>
          <option value="Tcl">Tcl</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Iphone">Iphone</option>
          <option value="Huawei">Huawei</option>
          <option value="Nokia">Nokia</option>
          <option value="Lg">Lg</option>
        </select>

        <label className="text-black">Imagen:</label>
        <input
          type="text"
          value={values.imagen}
          required
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="imagen"
          onChange={handleChange}
        />

        <label className="text-black">Descripción:</label>
        <textarea
          value={values.descripcion}
          required
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="descripcion"
          onChange={handleChange}
        />

        <label className="text-black">Características:</label>
        <input
          type="text"
          value={values.caracteristicas}
          required
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="caracteristicas"
          onChange={handleChange}
        />

        <label className="text-black">SO:</label>
        <input
          type="text"
          value={values.data.so}
          required
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="data.so"
          onChange={handleChange}
        />

        <label className="text-black">Procesador:</label>
        <input
          type="text"
          value={values.data.procesador}
          required
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="data.procesador"
          onChange={handleChange}
        />

        <label className="text-black">Memoria:</label>
        <input
          type="text"
          value={values.data.memoria}
          required
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="data.memoria"
          onChange={handleChange}
        />

        <label className="text-black">Batería:</label>
        <input
          type="text"
          value={values.data.bateria}
          required
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="data.bateria"
          onChange={handleChange}
        />

        <label className="text-black">Color:</label>
        <input
          type="text"
          value={values.data.color}
          required
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="data.color"
          onChange={handleChange}
        />

        <div className="flex w-full sm:gap-5 flex-col sm:flex-row">
          <div className="w-full">
            <label className="text-black">Precio </label>
            <input
              type="number"
              value={values.precio}
              required
              className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
              name="precio"
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="text-black">Valoraciones: </label>
            <input
              type="number"
              value={values.valoraciones}
              required
              className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
              name="valoraciones"
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="text-black">Stock:</label>
            <input
              type="number"
              value={values.stock}
              required
              className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
              name="stock"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex w-full sm:gap-5 flex-col sm:flex-row mb-4">
          <div className="w-full">
            <label className="text-black">Novedad:</label>
            <select
              value={values.novedad}
              className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
              name="novedad"
              onChange={handleChange}
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="w-full">
            <label className="text-black">Estado:</label>
            <select
              value={values.estado}
              className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
              name="estado"
              onChange={handleChange}
            >
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </select>
          </div>
        </div>

        <div className="flex gap-5 my-5 px-5">
          <button
            type="submit"
            className="bg-[#1a56db] hover:bg-[#1e429f] m-auto max-w-lg w-full py-2 px-2 lg:px-2 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
          >
            Publicar
          </button>
        </div>
      </form >
      <div className="flex sm:w-[200px] gap-5 my-5 px-5">
        <ButtonBack />
      </div>
    </div >
  );
};

export default CreateForm;
