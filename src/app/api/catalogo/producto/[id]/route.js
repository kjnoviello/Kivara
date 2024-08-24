import { NextResponse } from "next/server";
import getFetch from '../../../getFetch'

export async function GET(request, {params}) {

    const {id} = params;
    console.log(id);

    const productos = await getFetch()
    const productFind = productos.find((item) => item.id === id);

    return NextResponse.json(productFind)
}