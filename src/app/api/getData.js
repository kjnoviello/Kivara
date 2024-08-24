import { collection, getDocs, query } from "firebase/firestore";
import {db} from '@/app/firebase/config'

const getData = async () =>{
    const productRef = collection(db, 'productos')
    
    const querySnapshot = await getDocs(productRef)
    
    const docs = querySnapshot.docs.map(doc=> doc.data())
    
    return docs

}

export default getData
