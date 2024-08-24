import { NextResponse } from "next/server";
import getFetch from '../../getFetch'

export async function GET(request, {params}) {

    const {marca} = params;
    const productos = await getFetch()
    const productsMarca =  productos.filter((item) => (item.marca.toLocaleLowerCase() === marca.toLocaleLowerCase()))

    return NextResponse.json(productsMarca)
}
