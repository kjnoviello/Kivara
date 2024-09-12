"use client";
import { useState } from "react";
import { collection, doc, setDoc, query, orderBy, limit, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from "@/app/firebase/config";
import ButtonBack from "../shared/buttonBack";
// Función para obtener el último ID
const getLastId = async () => {
  const collectionRef = collection(db, "productos");
  const q = query(collectionRef, orderBy("id", "desc"), limit(1));
  const querySnapshot = await getDocs(q);

  // Si hay documentos, devuelve el ID, sino devuelve 0
  return !querySnapshot.empty ? querySnapshot.docs[0].data().id || 0 : 0;
};

// Función para subir la imagen a Firebase Storage
const uploadImage = async (file, id) => {
  const contentType = file?.type || 'image/jpeg'; // Tipo de archivo por defecto
  const storageRef = ref(storage, `products/${id}`);
  const metadata = { contentType };

  const fileSnapshot = await uploadBytes(storageRef, file, metadata);
  return await getDownloadURL(fileSnapshot.ref); // Retorna la URL de descarga
};

// Función para crear el producto en Firestore
const createProduct = async (values, file) => {
  try {
    const lastId = await getLastId();
    const newId = lastId + 1;
    const fileURL = await uploadImage(file, newId); // Subir la imagen y obtener la URL

    const productData = {
      ...values,
      id: newId,
      imagen: fileURL,
      novedad: values.novedad === "true",
      estado: values.estado === "true"
    };

    const docRef = doc(db, "productos", newId.toString());
    await setDoc(docRef, productData);

    console.log("Producto agregado con éxito");
  } catch (error) {
    console.error("Error al agregar el producto", error);
  }
};

// Formulario para crear un nuevo producto
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
    novedad: "true",
    estado: "true"
  });

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Para los campos dentro del objeto "data"
    if (name.includes("data.")) {
      const dataField = name.split(".")[1];
      setValues((prevValues) => ({
        ...prevValues,
        data: { ...prevValues.data, [dataField]: value }
      }));
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  // Manejo de archivo de imagen
  const handleFileChange = (e) => setValues({ ...values, imagen: e.target.files[0] });

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { imagen, ...formValues } = values;

    try {
      const processedValues = {
        ...formValues,
        precio: parseFloat(values.precio),
        valoraciones: parseFloat(parseFloat(values.valoraciones).toFixed(1)),
        stock: parseInt(values.stock, 10),
      };

      await createProduct(processedValues, imagen);

      Swal.fire({
        icon: "success",
        title: "Producto cargado correctamente!",
        text: "El producto se cargó en la base de datos",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });

      // Resetear el formulario después del éxito
      setValues({
        nombre: "",
        precio: 0,
        marca: "",
        imagen: "",
        descripcion: "",
        caracteristicas: "",
        data: { so: "", memoria: "", procesador: "", bateria: "", color: "" },
        valoraciones: 0,
        stock: 0,
        novedad: "true",
        estado: "true"
      });

    } catch (error) {
      console.error("No se pudo cargar el producto", error);
      Swal.fire({
        icon: "error",
        title: "Ocurrió un error al cargar el producto.",
        text: "Revise el log para más información",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="my-8 mx-4 sm:mx-20 lg:mx-40 select-none bg-white rounded">
      <h2 className="text-cyan font-semibold text-2xl pb-4">Cargar producto</h2>
      <form onSubmit={handleSubmit}>

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
          type="file"
          className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
          name="imagen"
          onChange={(e) => handleFileChange(e)}
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