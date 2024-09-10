"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import Swal from "sweetalert2";
import ButtonBack from "@/app/components/shared/buttonBack";
import { useRouter } from "next/navigation";

export default function EditForm({ id }) {

    const router = useRouter();
    const [editProduct, setEditProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Función para obtener los detalles del producto
    const getDetalle = async (item) => {
        try {
            const productRef = collection(db, "productos");
            const q = query(productRef, where("id", "==", parseInt(item)));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                return querySnapshot.docs[0].data();
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
            return null;
        }
    };

    // Luego se cargan al estado para renderizar
    useEffect(() => {
        const fetchProductData = async () => {
            const productData = await getDetalle(id);
            if (productData) {
                setEditProduct({
                    ...productData,
                    novedad: productData.novedad === true, // Convertir a booleano
                    estado: productData.estado === true, // Convertir a booleano
                });
            }
            setLoading(false);
        };

        fetchProductData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Manejo para campos anidados dentro de 'data'
        if (name.startsWith("data.")) {
            const dataField = name.split(".")[1];
            setEditProduct(prevState => ({
                ...prevState,
                data: {
                    ...prevState.data,
                    [dataField]: value,
                }
            }));
        } else if (name === "novedad" || name === "estado") {
            // Convertir el valor de string a booleano para los campos de tipo 'novedad' y 'estado'
            setEditProduct(prevState => ({
                ...prevState,
                [name]: (name === "novedad" || name === "estado") ? value === "true" : value,
            }))
        } else {
            // Manejo general para otros campos
            setEditProduct(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };


    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Conversión de valores numéricos y booleanos
            const updatedProduct = {
                ...editProduct,
                // id: parseInt(editProduct.id, 10),
                precio: parseFloat(editProduct.precio),
                stock: parseInt(editProduct.stock, 10),
                valoraciones: parseInt(editProduct.valoraciones, 10),
                novedad: editProduct.novedad,
                estado: editProduct.estado,
            };

            // Actualizar el documento en Firestore
            const productDocRef = doc(db, "productos", updatedProduct.id.toString());
            await updateDoc(productDocRef, updatedProduct);

            Swal.fire({
                icon: "success",
                title: "¡Producto actualizado!",
                text: "El producto se ha actualizado correctamente.",
                iconColor: "#457b9d",
                timer: 2500,
                timerProgressBar: true,
                showConfirmButton: false,
            });

            router.push("/pages/admin");
        } catch (error) {
            console.error("Error updating product:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al actualizar el producto. Por favor, intente nuevamente.",
                confirmButtonText: "OK",
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Cargando datos del producto...</p>;
    }

    if (!editProduct) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="my-8 mx-4 sm:mx-20 lg:mx-40 select-none bg-white rounded">
            <h2 className="text-cyan font-semibold text-2xl pb-4">Editar producto</h2>
            <form onSubmit={handleSave}>

                <label className="text-black">ID: </label>
                <input
                    type="number"
                    value={editProduct.id || ""}
                    readOnly
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="id"
                />

                <label className="text-black">Nombre: </label>
                <input
                    type="text"
                    value={editProduct.nombre || ""}
                    required
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="nombre"
                    onChange={handleChange}
                />

                <label className="text-black">Marca: </label>
                <select
                    value={editProduct.marca || ""}
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="marca"
                    required
                    onChange={handleChange}
                >
                    <option value="" disabled>Seleccione una marca</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Tcl">Tcl</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Iphone">Iphone</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Lg">Lg</option>
                </select>

                <label className="text-black">Imagen: </label>
                <input
                    type="text"
                    value={editProduct.imagen || ""}
                    required
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="imagen"
                    onChange={handleChange}
                />

                <label className="text-black">Descripción: </label>
                <textarea
                    value={editProduct.descripcion || ""}
                    required
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="descripcion"
                    onChange={handleChange}
                />

                <label className="text-black">Características: </label>
                <input
                    type="text"
                    value={editProduct.caracteristicas || ""}
                    required
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="caracteristicas"
                    onChange={handleChange}
                />

                <label className="text-black">SO: </label>
                <input
                    type="text"
                    value={editProduct.data?.so || ""}
                    required
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="data.so"
                    onChange={handleChange}
                />

                <label className="text-black">Procesador: </label>
                <input
                    type="text"
                    value={editProduct.data?.procesador || ""}
                    required
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="data.procesador"
                    onChange={handleChange}
                />

                <label className="text-black">Memoria: </label>
                <input
                    type="text"
                    value={editProduct.data?.memoria || ""}
                    required
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="data.memoria"
                    onChange={handleChange}
                />

                <label className="text-black">Batería: </label>
                <input
                    type="text"
                    value={editProduct.data?.bateria || ""}
                    required
                    className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                    name="data.bateria"
                    onChange={handleChange}
                />

                <label className="text-black">Color: </label>
                <input
                    type="text"
                    value={editProduct.data?.color || ""}
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
                            value={editProduct.precio || ""}
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
                            value={editProduct.valoraciones || ""}
                            required
                            className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                            name="valoraciones"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-black">Stock: </label>
                        <input
                            type="number"
                            value={editProduct.stock || ""}
                            required
                            className="p-2 rounded w-full border border-cyan block mb-4 bg-[#f9fafb]"
                            name="stock"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex w-full sm:gap-5 flex-col sm:flex-row mb-4">
                    <div className="w-full">
                        <label className="text-black">Novedad: </label>
                        <select
                            value={editProduct.novedad}
                            className="p-2 rounded w-full border border-cyan bg-[#f9fafb]"
                            name="novedad"
                            onChange={handleChange}
                        >
                            <option value="true">Sí</option>
                            <option value="false">No</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="text-black">Estado: </label>
                        <select
                            value={editProduct.estado}
                            className="p-2 rounded w-full border border-cyan bg-[#f9fafb]"
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
                        disabled={loading}
                    >
                        {loading ? "Guardando..." : "Guardar cambios"}
                    </button>
                </div>
            </form>
            <div className="flex sm:w-[200px] gap-5 my-5 px-5">
                <ButtonBack />
            </div>
        </div >
    );
}
