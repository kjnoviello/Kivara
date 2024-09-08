"use client";
import { db } from "@/app/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

const DeleteProductBtn = ({ nombre, onDelete }) => {

  const router = useRouter()

  const deleteProduct = async () => {
    
    Swal.fire({
      icon: "warning",
      title: "Quiere borrar este producto?",
      text: "Una vez borrado, no podrá recupererarlo.",
      confirmButtonText: "Borrar",
      confirmButtonColor: "#d90429",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {

        try {
          await deleteDoc(doc(db, "productos", nombre));
          
          Swal.fire({
            icon: "success",
            title: "Eliminado!",
            text: "Este producto se eliminó correctamente.",
            iconColor: "#457b9d",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
          });

          onDelete()

        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error al elimniarlo, intente de nuevo.",
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
