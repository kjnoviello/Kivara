import { NextResponse } from "next/server";
import getFetch from '../../getFetch'

export async function GET() {

    const productos = await getFetch()

    const novedad = productos.filter(product => product.novedad === true);
    return NextResponse.json(novedad)
}
