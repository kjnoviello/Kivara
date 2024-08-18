import { NextResponse } from "next/server";
import mockApi from '../../../utils/mockApi.json'

export async function GET() {

    const novedad = mockApi.filter(product => product.novedad === true);
    return NextResponse.json(novedad)
}