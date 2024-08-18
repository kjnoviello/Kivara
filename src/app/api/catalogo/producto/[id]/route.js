import { NextResponse } from "next/server";
import mockApi from '../../../../utils/mockApi.json'

export async function GET(request, {params}) {

    const {id} = params;
    console.log("esto es id", id);
    const productFind = mockApi.find((item) => item.id === id);
    console.log("esto es productFind", productFind);

    

    return NextResponse.json(productFind)
}