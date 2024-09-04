"use client";
import { db } from "@/app/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

const DeleteProductBtn = ({ nombre }) => {
  const deleteProduct = async () => {
    console.log("Delete button clicked for product ID:", nombre); // Verifica si la función se llama correctamente
    
    Swal.fire({
      icon: "warning",
      title: "Do you want to delete this product?",
      text: "Once deleted, you won't be able to recover this product.",
      confirmButtonText: "Delete",
      confirmButtonColor: "#d90429",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("Deletion confirmed by user"); // Verifica si la confirmación de la alerta funciona

        try {
          await deleteDoc(doc(db, "productos", nombre));
          console.log("Product deleted from Firestore"); // Verifica si la eliminación se realiza correctamente

          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "The product has been deleted successfully.",
            iconColor: "#457b9d",
            timer: 2500,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "There was a problem deleting the product. Please try again.",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  return (
    <button onClick={deleteProduct}>
      <FiTrash2 className="text-red text-xl" />
    </button>
  );
};

export default DeleteProductBtn;
