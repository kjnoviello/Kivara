// "use client";
// import { useState } from "react";
// import { doc, setDoc } from "firebase/firestore";
// // import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// // import { v4 as uuidv4 } from "uuid";
// import Swal from "sweetalert2";
// import { db, storage } from "@/app/firebase/config";
// import ButtonBack from "../shared/buttonBack";

// const createProduct = async (values) => {

//   const docRef = doc(db, 'productos', values.nombre)
//   const setProd = setDoc(docRef, { ...values })
//     .then(() => console.log("producto Agregado!!!"));
//   return setProd

//   // // const id = uuidv4();
//   // const price = parseFloat(values.price);
//   // const inStock = parseInt(values.inStock);

//   // const docRef = doc(db, "products", id.toString());

//   // return setDoc(docRef, {
//   //   ...values,
//   //   id,
//   //   price,
//   //   inStock,
//   //   image: values.image,
//   // }).then(() =>
//   //   Swal.fire({
//   //     position: "center",
//   //     icon: "success",
//   //     iconColor: "#457b9d",
//   //     title: "Product created!",
//   //     showConfirmButton: false,
//   //     timer: 1500,
//   //   })
//   // );
// };

// const CreateForm = () => {

//   const [values, setValues] = useState({
//     id: 0,
//     nombre: "",
//     precio: 0,
//     marca: "",
//     imagen: "",
//     descripcion: "",
//     caracteristicas: "",
//     data: {
//       so: "",
//       memoria: "",
//       procesador: "",
//       bateria: "",
//       color: ""
//     },
//     valoraciones: 0,
//     stock: 0,
//     novedad: true,
//     estado: true
//   });

//   const handleChange = (e) => {

//     const { name, value } = e.target;
//     // Verificar si el campo es parte del objeto "data"
//     if (name.startsWith("data.")) {
//       const dataField = name.split(".")[1];
//       setValues((prevValues) => ({
//         ...prevValues,
//         data: {
//           ...prevValues.data,
//           [dataField]: value,
//         },
//       }));
//     } else {
//       setValues({ ...values, [name]: value });
//     }
//   };


//   // const handleImageChange = async (e) => {
//   //   const storageRef = ref(storage, uuidv4());

//   //   const fileSnapshot = await uploadBytes(storageRef, e.target.files[0]);

//   //   const fileURL = await getDownloadURL(fileSnapshot.ref);

//   //   setValues({ ...values, image: fileURL });
//   // };

//   const handleSubmit = async (e) => {

//     e.preventDefault();
//     try {

//       // Convertir valores específicos a números
//       const processedValues = {
//         ...values,
//         id: parseInt(values.id, 10),
//         precio: parseFloat(values.precio),
//         valoraciones: parseInt(values.valoraciones, 10),
//         stock: parseInt(values.stock, 10),
//         novedad: values.novedad === "true",
//         estado: values.estado === "true"
//       };

//       await createProduct(processedValues);
//       Swal.fire({
//         icon: "success",
//         title: "Producto cargado correctamente!",
//         text: "El producto se cargó en la base de datos",
//         timer: 3000,
//         timerProgressBar: true,
//         showConfirmButton: false,
//       });

//       //Carga el estado del formulario al inicio, es decir vacio
//       setValues({
//         id: 0,
//         nombre: "",
//         precio: 0,
//         marca: "",
//         imagen: "",
//         descripcion: "",
//         caracteristicas: "",
//         data: {
//           so: "",
//           memoria: "",
//           procesador: "",
//           bateria: "",
//           color: ""
//         },
//         valoraciones: 0,
//         stock: 0,
//         novedad: true,
//         estado: true
//       });

//       // Desplazar la página al inicio
//       window.scrollTo({ top: 0, behavior: 'smooth' });

//       if (processedValues.nombre.length > 20) {
//         Swal.fire({
//           icon: "warning",
//           title: "El límite de caracteres para NOMBRE está excedido",
//           text: "NOMBRE puede tener como máximo 25 caracteres",
//           timer: 3000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       } else {
//         console.log(processedValues);
//       }

//     } catch (error) {
//       console.error("No se pudo cargar el producto", error);
//       Swal.fire({
//         icon: "error",
//         title: "Ocurrió un error al cargar el producto.",
//         text: "Revise el log para más información",
//         timer: 3000,
//         timerProgressBar: true,
//         showConfirmButton: false,
//       });
//     }
//   };


//   return (
//     <div className="my-8 mx-4 sm:mx-20 lg:mx-40 select-none bg-white rounded">
//       <h2 className="text-cyan font-semibold text-2xl pb-4">Cargar producto</h2>
//       <form onSubmit={handleSubmit}>

//         <label className="text-black">ID: </label>
//         <input
//           type="number"
//           value={values.id}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="id"
//           onChange={handleChange}
//         />

//         <label className="text-black">Nombre: </label>
//         <input
//           type="text"
//           value={values.nombre}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="nombre"
//           onChange={handleChange}
//         />



//         <label className="text-black">Marca: </label>
//         <select
//           value={values.marca}
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="marca"
//           required
//           onChange={handleChange}
//         >
//           <option value="" disabled>
//             Seleccione una marca
//           </option>
//           <option value="Samsung">Samsung</option>
//           <option value="Motorola">Motorola</option>
//           <option value="Tcl">Tcl</option>
//           <option value="Xiaomi">Xiaomi</option>
//           <option value="Iphone">Iphone</option>
//           <option value="Huawei">Huawei</option>
//           <option value="Nokia">Nokia</option>
//           <option value="Lg">Lg</option>
//         </select>

//         <label className="text-black">Imagen: </label>
//         <input
//           type="text"
//           value={values.imagen}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="imagen"
//           onChange={handleChange}
//         />

//         <label className="text-black">Descripción: </label>
//         <textarea
//           type="text"
//           value={values.descripcion}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="descripcion"
//           onChange={handleChange}>
//         </textarea>

//         <label className="text-black">Características: </label>
//         <input
//           type="text"
//           value={values.caracteristicas}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="caracteristicas"
//           onChange={handleChange}
//         />

//         <label className="text-black">SO: </label>
//         <input
//           type="text"
//           value={values.data.so}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="data.so"
//           onChange={handleChange}
//         />

//         <label className="text-black">Procesador: </label>
//         <input
//           type="text"
//           value={values.data.procesador}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="data.procesador"
//           onChange={handleChange}
//         />

//         <label className="text-black">Memoria: </label>
//         <input
//           type="text"
//           value={values.data.memoria}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="data.memoria"
//           onChange={handleChange}
//         />

//         <label className="text-black">Batería: </label>
//         <input
//           type="text"
//           value={values.data.bateria}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="data.bateria"
//           onChange={handleChange}
//         />

//         <label className="text-black">Color: </label>
//         <input
//           type="text"
//           value={values.data.color}
//           required
//           className="p-2 rounded w-full border border-cyan block mb-4"
//           name="data.color"
//           onChange={handleChange}
//         />

//         <div className="flex w-full sm:gap-5 flex-col sm:flex-row">
//           <div className="w-full">
//             <label className="text-black">Precio </label>
//             <input
//               type="number"
//               value={values.precio}
//               required
//               className="p-2 rounded w-full border border-cyan block mb-4"
//               name="precio"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="w-full">
//             <label className="text-black">Valoraciones: </label>
//             <input
//               type="number"
//               value={values.valoraciones}
//               required
//               className="p-2 rounded w-full border border-cyan block mb-4"
//               name="valoraciones"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="w-full">
//             <label className="text-black">Stock: </label>
//             <input
//               type="number"
//               value={values.stock}
//               required
//               className="p-2 rounded w-full border border-cyan block mb-4"
//               name="stock"
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="flex w-full gap-5">
//           <div className="w-full">
//             <label className="text-black">Novedad: </label>
//             <select
//               value={values.novedad}
//               className="p-2 rounded w-full border border-cyan block mb-4"
//               name="novedad"
//               required
//               onChange={handleChange}
//             >
//               <option value="" disabled>
//                 Es novedad?
//               </option>
//               <option value="false">False</option>
//               <option value="true">True</option>
//             </select>
//           </div>

//           <div className="w-full">
//             <label className="text-black">Estado: </label>
//             <select
//               value={values.estado}
//               className="p-2 rounded w-full border border-cyan block mb-4"
//               name="estado"
//               required
//               onChange={handleChange}
//             >
//               <option value="" disabled>
//                 Está vigente?
//               </option>
//               <option value="false">False</option>
//               <option value="true">True</option>
//             </select>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-5 my-5 px-5">
//           <ButtonBack btnLogin={true} />
//           <button
//             type="submit"
//             className="bg-[#1a56db] hover:bg-[#1e429f] w-full py-2 px-2 lg:px-2 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
//           >
//             Publicar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateForm;




"use client";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "@/app/firebase/config";
import ButtonBack from "../shared/buttonBack";

const createProduct = async (values) => {
  const docRef = doc(db, 'productos', values.nombre);
  return setDoc(docRef, {
    ...values,
    novedad: values.novedad,
    estado: values.estado,
  })
    .then(() => console.log("Producto agregado!!!"))
    .catch((error) => console.error("Error al agregar el producto", error));
};

const CreateForm = () => {
  const [values, setValues] = useState({
    id: 0,
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
    novedad: "true", // Default value as string
    estado: "true"   // Default value as string
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
        id: parseInt(values.id, 10),
        precio: parseFloat(values.precio),
        valoraciones: parseInt(values.valoraciones, 10),
        stock: parseInt(values.stock, 10),
        novedad: values.novedad === "true", // Convert string to boolean
        estado: values.estado === "true",   // Convert string to boolean
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
        id: 0,
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

      window.scrollTo({ top: 0, behavior: 'smooth' });

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
        <label className="text-black">ID:</label>
        <input
          type="number"
          value={values.id}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="id"
          onChange={handleChange}
        />

        <label className="text-black">Nombre:</label>
        <input
          type="text"
          value={values.nombre}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="nombre"
          onChange={handleChange}
        />

        <label className="text-black">Marca:</label>
        <select
          value={values.marca}
          className="p-2 rounded w-full border border-cyan block mb-4"
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
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="imagen"
          onChange={handleChange}
        />

        <label className="text-black">Descripción:</label>
        <textarea
          value={values.descripcion}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="descripcion"
          onChange={handleChange}
        />

        <label className="text-black">Características:</label>
        <input
          type="text"
          value={values.caracteristicas}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="caracteristicas"
          onChange={handleChange}
        />

        <label className="text-black">SO:</label>
        <input
          type="text"
          value={values.data.so}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="data.so"
          onChange={handleChange}
        />

        <label className="text-black">Procesador:</label>
        <input
          type="text"
          value={values.data.procesador}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="data.procesador"
          onChange={handleChange}
        />

        <label className="text-black">Memoria:</label>
        <input
          type="text"
          value={values.data.memoria}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="data.memoria"
          onChange={handleChange}
        />

        <label className="text-black">Batería:</label>
        <input
          type="text"
          value={values.data.bateria}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="data.bateria"
          onChange={handleChange}
        />

        <label className="text-black">Color:</label>
        <input
          type="text"
          value={values.data.color}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="data.color"
          onChange={handleChange}
        />

        <div className="flex w-full sm:gap-5 flex-col sm:flex-row">
          <div className="w-full">
            <label className="text-black">Precio:</label>
            <input
              type="number"
              value={values.precio}
              required
              className="p-2 rounded w-full border border-cyan block mb-4"
              name="precio"
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <label className="text-black">Valoraciones:</label>
            <input
              type="number"
              value={values.valoraciones}
              required
              className="p-2 rounded w-full border border-cyan block mb-4"
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
              className="p-2 rounded w-full border border-cyan block mb-4"
              name="stock"
              onChange={handleChange}
            />
          </div>
        </div>


        <div className="flex w-full gap-5">
          <div className="w-full">
            <label className="text-black">Novedad:</label>
            <select
              value={values.novedad}
              className="p-2 rounded w-full border border-cyan block mb-4"
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
              className="p-2 rounded w-full border border-cyan block mb-4"
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
      <div className="flex gap-5 my-5 px-5">
        <ButtonBack btnLogin={true} />
      </div>
    </div >
  );
};

export default CreateForm;
